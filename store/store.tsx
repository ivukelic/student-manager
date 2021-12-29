import { action, makeAutoObservable, observable } from "mobx";
import { studentData, IStudent, IExchangeStudent } from "./students";

class Store {
  students: (IStudent | IExchangeStudent)[] = studentData;
  filtered: (IStudent | IExchangeStudent)[] = studentData;
  classes: string[] = [];
  gender: string[] = ["m", "f", "x"];

  constructor() {
    makeAutoObservable(this, {
      students: observable,
      filtered: observable,
      editStudent: action,
      deleteStudent: action,
    });

    this.students.forEach((student) => {
      if (!this.classes.includes(student.class)) {
        this.classes.push(student.class);
      }
    });
  }

  editStudent(newData: IStudent): void {
    this.students[
      this.students.findIndex((student) => student.id === newData.id)
    ] = newData;

    this.filtered[
      this.filtered.findIndex((student) => student.id === newData.id)
    ] = newData;
  }

  deleteStudent(studentId: number): void {
    const filteredStudents = this.students.filter(
      (student) => student.id !== studentId
    );
    this.students.length = 0;
    this.students.push(...filteredStudents);

    const filteredStudentsCopy = this.filtered.filter(
      (student) => student.id !== studentId
    );

    this.filtered.length = 0;
    this.filtered.push(...filteredStudentsCopy);
  }

  searchStudents(searchedValue: string): void {
    const filteredStudents = this.students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
        student.class.toLowerCase().includes(searchedValue.toLowerCase())
    );
    this.filtered.length = 0;
    this.filtered.push(...filteredStudents);
  }
}

const store = new Store();
export default store;
