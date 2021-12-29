import React, { useCallback, useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import store from "../../store/store";
import styles from "./Search.module.scss";
import classNames from "classnames";

const Search = (): JSX.Element => {
  const [showDdl, setShowDdl] = useState<boolean>(false);
  const [searchedValue, setSearchedValue] = useState<string>("");

  const escFunction = useCallback((event): void => {
    if (event.keyCode === 27) {
      setShowDdl(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  const handleOnClick = (): void => {
    setShowDdl(true);
  };

  const handleOnfocusout = (): void => {
    setShowDdl(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchedValue(e.target.value);
    //onChange(e.target.value);
  };

  useEffect(() => {
    store.searchStudents(searchedValue);
  }, [searchedValue]);

  console.log(store.classes);

  return (
    <div className={styles.container} onBlur={handleOnfocusout}>
      <InputField
        name="search"
        type="text"
        value={searchedValue}
        onClick={handleOnClick}
        onChange={handleOnChange}
      />
      {/* {showDdl && ( */}
      <Selector
        name="class"
        hasHint
        value={searchedValue}
        options={store.classes}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchedValue(e.target.value);
        }}
        size={4}
        className={styles.dropdown}
      />
      {/* )} */}
    </div>
  );
};

export default Search;
