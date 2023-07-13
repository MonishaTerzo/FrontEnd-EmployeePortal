import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {


  constructor(private http:HttpClient, private route:ActivatedRoute , private router: Router){}
  employees:any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let response=this.http.get(`http://localhost:7000/api/employees/${id}`);
    response.subscribe((data)=>this.employees=data);
  }

  openModal() { 

    // const modelDiv=document.getElementById('modal')
    // if(modelDiv!=null){ 
    //   modelDiv.style.display='block';
    //   console.log("hello")
    // }  
    this.router.navigate(['update-employee'])

  }
  closeModal() { 
    const modelDiv=document.getElementById('modal') 
    if(modelDiv!=null){ 
      modelDiv.style.display='none';
    }
  } 
  openJob(){}
}