import React from "react";
import { IStudent, IExchangeStudent } from "../../store/students";
import Modal from "../Modal/Modal";

export interface IHeader {
  displayName: string;
  key: string;
}

interface Props {
  header: IHeader[];
  body: (IStudent | IExchangeStudent)[];
  className?: string;
}

export const Table: React.FC<Props> = ({ header, body, className }) => {
  const renderHeader = () =>
    header.map((headerItem, index) => (
      <th key={index}>{headerItem.displayName}</th>
    ));

  const checkIfInHeader = (key: string) => {
    return header.find((v) => v.key === key) != null;
  };

  const renderBody = () => {
    console.log(body);
    return body.map((row, index) => (
      <tr key={index}>
        {Object.keys(row)
          .filter((value: string) => checkIfInHeader(value))
          .map((key: string) => (
            <td key={key}>{row[key]}</td>
          ))}
        {row.hasOwnProperty("id") && (
          <>
            <td>
              <Modal variant="edit" student={row} />
            </td>
            <td>
              <Modal variant="delete" student={row} />
            </td>
          </>
        )}
      </tr>
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
