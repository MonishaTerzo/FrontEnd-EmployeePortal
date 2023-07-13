import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from './user';
import { Employees } from './employees';
import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:7000/api/";

  constructor(private http: HttpClient) { }

  // // Add User - Create
  // adduser(user: User){
  //   return this.http.post<User>(`${this.url}add`, user)
  // }

  // // Get Users - Read
  // getUsers(): Observable<any[]>{
  //   return this.http.get<any[]>(this.url+'users')
  // }

  // Get User by Id - Read
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}employees/${id}`)
  }  

  // UpdateEmployee(employee){ 

  //   return this.http.put<employee>(`${this.url}employees/update`)

  

  // Update User - Update
  updateUser(id?: number , user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}employees/update`, user)
  }

  // // Delete User - Delete
  // deleteUser(id: number): Observable<any>{
  //   return this.http.delete<any>(`${this.url}delete/${id}`)
  // } 
  createemployee(employee : Employees): Observable<Object>
{ 
  return this.http.post(`${this.url}employees/add`,employee)
}
} 

