import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { Employees } from '../employees';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-create',
  
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {   
  employee: Employee = new Employee(); 
  
    constructor(private appservice: AppService,private router: Router){} 
  ngOnInit(): void {
  }  


  saveEmployee(){ 
    console.log(this.employee);
    this.appservice.createemployee(this.employee).subscribe(data=> console.log(data));
  }   
          
  gotoEmployeeList(){ 
this.router.navigate(['/employees']);
  }

  onSubmit(e: Employees){ 
    // this.saveEmployee(e);
    this.gotoEmployeeList();
  } }

//  next1() { 
//     const  modelDiv=document.getElementById('job-details') 
//     const model2=document.getElementById('personal-details') 
//     const model3=document.getElementById('employee-details') 

    
   
//     if(modelDiv!=null && model2!=null && model3!=null){ 
//      model3.style.display='none'
//       modelDiv.style.display='none'; 
//       model2.style.display='block';
     
//     }
//   }

//   next2() { 
//     const  modelDiv=document.getElementById('job-details') 
//     const model2=document.getElementById('personal-details') 
//     const model3=document.getElementById('employee-details') 

    
   
//     if(modelDiv!=null && model2!=null && model3!=null){ 
//      model3.style.display='block'
//       modelDiv.style.display='none'; 
//       model2.style.display='none';
     
//     }
//   }

// submitted(){ 
 
    
//   }

 
// }
