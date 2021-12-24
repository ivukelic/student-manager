import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Selector from "../Selector/Selector";
import { IStudent } from "../../pages/students";

const ddlOptions = ["m", "f", "x"];
const ddlOptions2 = ["this", "needs", "fixing"];

interface Props {
  student: IStudent;
  onClose: () => void;
}

const EditDialog: React.FC<Props> = ({ student, onClose }) => {
  const handleOnChange = (option) => {
    console.log(option);

    // handleSelectCity = (option) => {
    //   const selectedCity = option.value;
    //   this.setState({ selectedCity });
    // };
  };
  return (
    <div>
      <h2>Edit Sudent</h2>
      <form>
        <InputField value={student.name} name="name" />
        {/* datepiccc */}
        <Selector
          name="class"
          value={student.class}
          label="class"
          options={ddlOptions2}
        />
        <Selector
          name="gender"
          label="gender"
          options={ddlOptions}
          value={student.gender}
          onChange={handleOnChange}
        />
        <Button variant="text" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          variant="text"
          onClick={() => console.log(student.gender, "oke")}
        >
          OK
        </Button>
      </form>
    </div>
  );
};

export default EditDialog;
