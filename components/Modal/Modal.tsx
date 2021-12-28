import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from "reakit/Dialog";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import EditDialog from "../EditDialog/EditDialog";
import styles from "./Modal.module.scss";
import { IStudent, IExchangeStudent } from "../../store/students";
import Image from "next/image";
import pen from "../../public/pen.png";
import trash from "../../public/trash.png";
import store from "../../store/store";
import classNames from "classnames";

interface Props {
  variant: string;
  student: IStudent;
}

const Modal: React.FC<Props> = ({ variant, student }) => {
  const dialog = useDialogState();

  const handleOnClose = () => {
    dialog.hide();
  };

  const handleOnDelete = (studentId: number) => {
    store.deleteStudent(studentId);
    dialog.hide();
  };

  return (
    <>
      <DialogDisclosure
        className={classNames({
          [styles.deleteDisclosure]: variant === "delete",
          [styles.editDisclosure]: variant === "edit",
        })}
        {...dialog}
      >
        {variant === "edit" ? (
          <Image src={pen} alt="edit" width={20} height={20} />
        ) : (
          <Image src={trash} alt="delete" width={20} height={20} />
        )}
      </DialogDisclosure>
      <DialogBackdrop className={styles.backdrop} {...dialog}>
        <Dialog
          className={styles.dialog}
          {...dialog}
          aria-label="Welcome"
          tabIndex={0}
        >
          {variant === "edit" ? (
            <EditDialog student={student} onClose={handleOnClose} />
          ) : (
            <DeleteDialog
              student={student}
              onClose={handleOnClose}
              onDelete={() => handleOnDelete(student.id)}
            />
          )}
        </Dialog>
      </DialogBackdrop>
    </>
  );
};

export default Modal;
