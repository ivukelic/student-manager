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
  const [studentCopy, setStudentCopy] = useState({ ...student });

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
    store.editStudent(studentCopy);
    onClose();
  };

  return (
    <div>
      <h2>Edit Sudent</h2>
      <form>
        <InputField value={student.name} name="name" />
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
        <Button variant="text" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="text" onClick={submitChange}>
          OK
        </Button>
      </form>
    </div>
  );
};

export default EditDialog;
