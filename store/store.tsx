import { makeAutoObservable } from "mobx";
import { studentData, IStudent, IExchangeStudent } from "./students";

class Store {
  students: (IStudent | IExchangeStudent)[] = studentData;
  classes: string[] = [];
  gender: string[] = ["m", "f", "x"];

  constructor() {
    makeAutoObservable(this);

    this.students.forEach((student) => {
      if (!this.classes.includes(student.class)) {
        this.classes.push(student.class);
      }
    });
  }

  editStudent(newData: IStudent) {
    this.students[
      this.students.findIndex((student) => student.id === newData.id)
    ] = newData;
  }

  deleteStudent(studentId: number) {
    const filteredStudents = this.students.filter(
      (student) => student.id !== studentId
    );
    this.students.length = 0;
    this.students.push(...filteredStudents);
  }
}

const store = new Store();
export default store;
