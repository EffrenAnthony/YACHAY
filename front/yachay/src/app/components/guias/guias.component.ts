import { Component, OnInit } from '@angular/core';
import {Persona } from '../models/guias';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {

  public personas = [
    
    {id:1,photo:"../../assets/profile photo girl.jpg",nombre:"Lucia ",Localidad:"Lima",Reco:"1000"},
    {id:2,photo:"../../assets/profilephoto girl.jpeg",nombre:"Andrea",Localidad:"Arequipa",Reco:"2000"},
    {id:3,photo:"../../assets/profilephoto men.jpg",nombre:"Lucy",Localidad:"Lima",Reco:"3000"},
    {id:4,photo:"../../assets/men profilephoto.jpg",nombre:"Yandy",Localidad:"Lima",Reco:"4000"},
    
]
  constructor() { }

  ngOnInit() {
  }

}
