import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//access to the route parameter
import {Router} from '@angular/router'; //to change the routing based on some condition
import {DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
foods:any;
  //dependecny injection create object
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService){
    this.route.params.subscribe(res=>console.log(res.id));
   }

  ngOnInit() {
    this._data.food.subscribe(res=>this.foods=res);
  }

  sendMeHome(){
    this.router.navigate(['']);//routing to the path in the routing for home it is ''
  }
}
