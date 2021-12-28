import React, { useCallback, useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import store from "../../store/store";
import styles from "./Search.module.scss";
import classNames from "classnames";

const Search = () => {
  const [showDdl, setShowDdl] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

  const escFunction = useCallback((event) => {
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

  const handleOnClick = () => {
    setShowDdl(true);
  };

  const handleOnfocusout = () => {
    setShowDdl(false);
  };

  const handleOnChange = (e: any) => {
    setSearchedValue(e.target.value);
    //onChange(e.target.value);
  };

  useEffect(() => {
    store.searchStudents(searchedValue);
  }, [searchedValue]);

  //console.log(value);

  return (
    <div onBlur={handleOnfocusout}>
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
        value={""}
        options={store.classes}
        onChange={(e) => {
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
