import { makeAutoObservable } from "mobx";
import { studentData, IStudent, IExchangeStudent } from "./students";

class Store {
  students: (IStudent | IExchangeStudent)[] = studentData;

  constructor() {
    this.students.push({
      id: 29,
      name: "Ante Emil",
      class: "1-AHELE",
      birthdate: "2013-03-02",
      gender: "m",
    });
    makeAutoObservable(this);
  }

  editStudent(newData: IStudent) {
    this.students[
      this.students.findIndex((student) => student.id === newData.id)
    ] = newData;
  }
}

const store = new Store();
export default store;
