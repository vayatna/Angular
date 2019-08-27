import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees =[
  {
    id:1,
    name:"vayu",
    gender:"female",
    contactPreference:"Email",
    email:"vayu@gmail.com",
    dateOfBirth:new Date('10/31/1992'),
    department:'CSE',
    isActive:true,
    photoPath:'assets/images/vayu.jpg'
  },
  {
    id:2,
    name:"priya",
    gender:"female",
    contactPreference:"phone",
    email:"9848808007",
    dateOfBirth:new Date('07/06/1990'),
    department:'it',
    isActive:true,
    photoPath:'assets/images/priya.jpg'
  },
  {
    id:3,
    name:"Phani",
    gender:"male",
    contactPreference:"Email",
    email:"phani@gmail.com",
    dateOfBirth:new Date('10/11/1989'),
    department:'HR',
    isActive:true,
    photoPath:'assets/images/phani.jpg'
  }
]


}
