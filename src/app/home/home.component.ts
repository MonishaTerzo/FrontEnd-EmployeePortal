import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
holiday:any; 
constructor(private http:HttpClient,private router:Router){}
ngOnInit():void{
      let response= this.http.get("http://localhost:7000/holidays/list") 
     response.subscribe((data)=>this.holiday=data);
      }  

      view() { 
        const  modelDiv=document.getElementById('leave') 
        const model2=document.getElementById('leave-display') 
        
       
        if(modelDiv!=null && model2!=null){ 
       
          modelDiv.style.display='block'; 
          model2.style.display='none';
         
        }
      }

     minimize() {  
      console.log(1);
        const  modelDiv=document.getElementById('leave') 
        const model2=document.getElementById('leave-display') 
        
       
        if(modelDiv!=null && model2!=null){ 
       
          modelDiv.style.display='none'; 
          model2.style.display='block';
          
        }
      }
    }
  
    // export class EmployeeComponent implements OnInit{ 
    //   employee:any;
    //     constructor(private http:HttpClient,private router:Router){}
        
    //     ngOnInit():void{
    //     let response= this.http.get("http://localhost:7000/api/employees/list") 
    //     response.subscribe((data)=>this.employee=data);
    //     }

