import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import { IStudent } from "../../store/students";
import store from "../../store/store";

interface Props {
  student: IStudent;
  onClose: () => void;
}

const EditDialog: React.FC<Props> = ({ student, onClose }) => {
  const [studentCopy, setStudentCopy] = useState<IStudent>({ ...student });
  const [isError, setIsError] = useState<boolean>(false);

  const handleNameChange = (e: any) => {
    setIsError(false);
    setStudentCopy((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleGenderChange = (option: any) => {
    setStudentCopy((prevState) => ({
      ...prevState,
      gender: option.target.value,
    }));
  };

  const handleClassChange = (option: any) => {
    setStudentCopy((prevState) => ({
      ...prevState,
      class: option.target.value,
    }));
  };

  const submitChange = () => {
    if (studentCopy.name === "") {
      alert("ayo");
      setIsError(true);
      return;
    }
    store.editStudent(studentCopy);
    onClose();
  };

  return (
    <div>
      <h2>Edit Sudent</h2>
      <form>
        <InputField
          value={studentCopy.name}
          name="name"
          onChange={handleNameChange}
        />
        {/* datepiccc */}
        <Selector
          name="class"
          value={studentCopy.class}
          label="class"
          options={store.classes}
          onChange={handleClassChange}
        />
        <Selector
          name="gender"
          label="gender"
          options={store.gender}
          value={studentCopy.gender}
          onChange={handleGenderChange}
        />
        {isError && <div>You need to enter a name</div>}
        <Button onClick={onClose}>Cancel</Button>
        <Button disabled={isError} onClick={submitChange}>
          OK
        </Button>
      </form>
    </div>
  );
};

export default EditDialog;
