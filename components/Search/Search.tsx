import React, { useCallback, useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import store from "../../store/store";
import styles from "./Search.module.scss";

const Search = (): JSX.Element => {
  const [showDdl, setShowDdl] = useState<boolean>(false);
  const [searchedValue, setSearchedValue] = useState<string>("");

  const escFunction = useCallback((event: any): void => {
    if (event.keyCode === 27 || event.keyCode === 13) {
      setShowDdl(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  const handleOnfocusout = (): void => {
    setShowDdl(false);
  };

  const handleOnClick = (): void => {
    setShowDdl(true);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchedValue(e.target.value);
  };

  useEffect(() => {
    store.searchStudents(searchedValue);
  }, [searchedValue]);

  return (
    <div className={styles.container}>
      <InputField
        name="search"
        type="text"
        label="Filter by student name"
        value={searchedValue}
        onClick={handleOnClick}
        onChange={handleOnChange}
      />
      {showDdl && (
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
          onBlur={handleOnfocusout}
          onClick={() => setShowDdl(false)}
        />
      )}
    </div>
  );
};

export default Search;
