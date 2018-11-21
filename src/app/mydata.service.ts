import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})


export class MydataService {

  private data: Subject<Item[]>;
  private dataArr:Item[];
  constructor(
    private http: HttpClient
  ) {
    this.data = new Subject<Item[]>();
    this.getData().subscribe(data => {this.dataArr = data;this.data.next(this.dataArr);});
  }
 payment:number


  dataUrl = 'assets/MOCK_DATA.json';
  getData() {
    return this.http.get<Item[]>(this.dataUrl);
  }

  getSubject(){
    return this.data;
  }
deleterow(index){
console.log(index);
}
editrow(item,index){
  console.log(item);
}

AddEmployee(item){
  item.salary = "€0,0";
  this.dataArr.unshift(item);
  this.data.next(this.dataArr);
}

convertToNum(str:string):number{
  let strWithOutCoin = str.substring(1);
  let strArr:any = strWithOutCoin.split(',');
  let num = Number(strArr[0]) + Number((strArr[1] / 100)) ;
 
  console.log(num);
  return num;
}
numToString(num:number){
  let str = '€';
  let stringNumber = String(num).split('.');
  str += stringNumber[0] + ',' + (stringNumber[1] ? stringNumber[1]: '0');
  
  return str;
}


pay(item,bonus:number){
  console.log(item,bonus);
 let currentSalary =  this.convertToNum(item.salary);
 currentSalary += Number(bonus);
 console.log(currentSalary);
 item.salary = this.numToString(Number(currentSalary.toFixed(2)));

}
  


}

