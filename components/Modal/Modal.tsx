import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from "reakit/Dialog";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import EditDialog from "../EditDialog/EditDialog";
import styles from "./modal.module.css";
import { IStudent } from "../../store/students";
import Image from "next/image";
import pen from "../../public/pen.png";
import trash from "../../public/trash.png";

interface Props {
  variant: string;
  student: IStudent;
}

const Modal: React.FC<Props> = ({ variant, student }) => {
  const dialog = useDialogState();

  const handleOnClose = () => {
    dialog.hide();
  };

  const handleOnDelete = () => {
    console.log("this needs to be done soon");
    dialog.hide();
  };

  return (
    <>
      <DialogDisclosure {...dialog}>
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
              onDelete={handleOnDelete}
            />
          )}
        </Dialog>
      </DialogBackdrop>
    </>
  );
};

export default Modal;
