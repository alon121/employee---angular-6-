import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor/built';
import { MydataService } from './mydata.service';
import { RouterModule, Routes } from '@angular/router';  
import { ThrowStmt } from '@angular/compiler';
import { Item } from './item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    form: any;
  data: any;
  payment:number;
  itemModel:Item;
  loadformcomp:  boolean;
  constructor(private mydataService: MydataService ) {
  this.itemModel ={} as Item;
  }
  
  title = 'welcome to super-app test';
  ngOnInit() {
    this.showData();
  }
  showData() {
    this.mydataService.getSubject()
      .subscribe((res) => {
        this.data = res;
      }
      );
  }

deleterow(index){
  this.mydataService.deleterow(index);
  const mydatadel = this.data.indexOf(index, 0);
  if (index > -1) {
     this.data.splice(index, 1);
  }
  
}

editrow(item,index){
    this.mydataService.editrow(item,index);
}
pay(item){
  this.mydataService.pay(item,this.payment);
}
loadform() {
  if(this.loadformcomp != true){
    this.loadformcomp = true;
  }
  else{
    this.loadformcomp = false;
  }
}

AddEmployee(){
  this.mydataService.AddEmployee(this.itemModel);
}

sortByName(){
  this.data = this.data.sort((e1,e2) => e1.first_name.localeCompare(e2.first_name));
}

sortByLastName(){
  this.data = this.data.sort((e1,e2) => e1.last_name.localeCompare(e2.last_name));
}
sortBymail(){
  this.data = this.data.sort((e1,e2) => e1.email.localeCompare(e2.email));
}
sortBybirth(){
  this.data = this.data.sort((e1,e2) => e1.birthdate.localeCompare(e2.birthdate));
}

sortByGender(){
  this.data = this.data.sort((e1,e2) => e1.gender.localeCompare(e2.gender));
}

sortBysalary(){
  this.data = this.data.sort((e1,e2) => e1.salary.localeCompare(e2.salary));
}

usersure(bln){
  console.log(bln);
}

}

