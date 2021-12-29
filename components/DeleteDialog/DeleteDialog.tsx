import React from "react";
import Button from "../Button/Button";
import { IStudent } from "../../store/students";
import styles from "./DeleteDialog.module.scss";

interface Props {
  student: IStudent;
  onClose: () => void;
  onDelete: (studentId: number) => void;
}

const DeleteDialog: React.FC<Props> = ({ student, onClose, onDelete }) => {
  return (
    <div className={styles.container}>
      <h2>Delete student</h2>
      <div>
        Do you really want to delete student{" "}
        <span className={styles.spanText}>{student.name}</span>?
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.cancelButton} onClick={() => onClose()}>
          Cancel
        </Button>
        <Button
          className={styles.deleteButton}
          onClick={() => onDelete(student.id)}
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export default DeleteDialog;
