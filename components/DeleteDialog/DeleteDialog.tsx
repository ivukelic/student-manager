import React from "react";
import Button from "../Button/Button";
import { IStudent } from "../../store/students";

interface Props {
  student: IStudent;
  onClose: () => void;
  onDelete: (studentId: number) => void;
}

const DeleteDialog: React.FC<Props> = ({ student, onClose, onDelete }) => {
  return (
    <div>
      <h2>Delete student</h2>
      <div>Do you really want to delete student {student.name}</div>
      <Button onClick={() => onClose()}>Close</Button>
      <Button onClick={() => onDelete(student.id)}>Yes</Button>
    </div>
  );
};

export default DeleteDialog;
