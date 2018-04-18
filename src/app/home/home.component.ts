import { Component, OnInit, Optional } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../data.service';
const newLocal = 'My first food item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('foods',[
      transition('*=>*',[
        query(':enter',style({opacity:0}),{optional:true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset:0}),
            style({opacity:.5,transform:'translateY(35px)',offset:.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
          ]))
        ]),{optional:true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1,transform:'translateY(0)',offset:0}),
            style({opacity:.5,transform:'translateY(35px)',offset:.3}),
            style({opacity:0,transform:'translateY(-75%)',offset:1}),
          ]))
        ]),{optional:true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string='Add an item';
  foodText:string=newLocal;
  foods=[];
  constructor(private _data:DataService) {

   }
  //life cyclce inititates
  ngOnInit() {
    const newLocal_1 = this._data.food.subscribe(res => this.foods = res);
    this.itemCount=this.foods.length;
    this._data.changeFood(this.foods);
  }

  addItem(){
    this.foods.push(this.foodText);
    this.foodText='';
    this.itemCount=this.foods.length;
    this._data.changeFood(this.foods);
  }

  removeItem(i){
    this.foods.splice(i,1);
    this.itemCount=this.foods.length;
    this._data.changeFood(this.foods);
  }

}
