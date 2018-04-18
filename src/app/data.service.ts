import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';//to share data between component it is very good

@Injectable()
export class DataService {
private foods = new BehaviorSubject<any>(['Mko','Susi']);
food=this.foods.asObservable();
  constructor() { }


  changeFood(food){
    this.foods.next(food);
  }  
}
