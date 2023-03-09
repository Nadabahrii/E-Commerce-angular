import { Component, OnInit } from '@angular/core';
import {Emploi} from "../core/emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi : any[] =[
    {reference:1 , title: 'DevOps', entreprise:'Actia', etat: true},
    {reference:2 , title: 'Cloud', entreprise:'Telnet', etat: false},
    {reference:1 , title: 'Web', entreprise:'sagemcom', etat: true}
  ]
  chercherParEntreprise!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
