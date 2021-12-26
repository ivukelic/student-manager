import React, { useCallback, useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import store from "../../store/store";
import styles from "./Search.module.scss";

const Search = () => {
  const [showDdl, setShowDdl] = useState(false);

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

  return (
    <div onBlur={handleOnfocusout}>
      <InputField name="search" type="text" onClick={handleOnClick} />
      {/* {showDdl && ( */}
      <Selector
        name="class"
        value={""}
        options={store.classes}
        onChange={() => {}}
        size={4}
        className={styles.dropdown}
      />
      {/* )} */}
    </div>
  );
};

export default Search;
