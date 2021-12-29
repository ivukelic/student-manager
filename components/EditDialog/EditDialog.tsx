import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import { IStudent } from "../../store/students";
import store from "../../store/store";
import styles from "./EditDialog.module.scss";

interface Props {
  student: IStudent;
  onClose: () => void;
}

const EditDialog = ({ student, onClose }: Props): JSX.Element => {
  const [studentCopy, setStudentCopy] = useState<IStudent>({ ...student });
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setStudentCopy({ ...student });
  }, [student]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setStudentCopy((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentCopy((prevState) => ({
      ...prevState,
      birthdate: e.target.value,
    }));
  };

  const handleGenderChange = (option: any) => {
    setStudentCopy((prevState) => ({
      ...prevState,
      gender: option.target.value,
    }));
  };

  const handleClassChange = (option: React.ChangeEvent<HTMLSelectElement>) => {
    setStudentCopy((prevState) => ({
      ...prevState,
      class: option.target.value,
    }));
  };

  const submitChange = (): void => {
    if (studentCopy.name === "") {
      setIsError(true);
      return;
    }
    store.editStudent(studentCopy);
    onClose();
  };

  return (
    <div>
      <h2>Edit Sudent</h2>
      <form className={styles.container}>
        <InputField
          type="text"
          value={studentCopy.name}
          name="name"
          onChange={handleNameChange}
          label="Name"
        />
        <InputField
          type="date"
          name="date"
          value={studentCopy.birthdate}
          onChange={handleDateChange}
          label="Birthdate"
        />
        <Selector
          name="class"
          value={studentCopy.class}
          label="Class"
          options={store.classes}
          onChange={handleClassChange}
          className={styles.classSelector}
        />
        <Selector
          name="gender"
          label="Gender"
          options={store.gender}
          value={studentCopy.gender}
          onChange={handleGenderChange}
        />
        {isError && <div>You need to enter a name</div>}
        <div className={styles.buttonContainer}>
          <Button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </Button>
          <Button
            className={styles.okButton}
            disabled={isError}
            onClick={submitChange}
          >
            OK
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditDialog;
