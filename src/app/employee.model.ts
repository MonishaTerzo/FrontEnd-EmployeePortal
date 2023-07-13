export class Employee {

  name: string;
  id: number;
  photoUrl: string;
  managerId: number;
  departmentId: number;

  constructor() {
    this.name = this.photoUrl = '';
    this.id = this.managerId = this.departmentId = 0;
  }
}
