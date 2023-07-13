import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{ 
  employee:any;
    constructor(private http:HttpClient,private router:Router){}
    
    ngOnInit():void{
    let response= this.http.get("http://localhost:7000/api/employees/list") 
    response.subscribe((data)=>this.employee=data);
    }

    // EditEmployee(id:number){ 
    //   console.log(id);
    //   this.router.navigate(["update",id])
    // }

    ViewEmployee(id:number){ 
      this.router.navigate(["view",id])
    }

}
