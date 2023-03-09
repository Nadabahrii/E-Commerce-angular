import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  titre:string="Les articles du jour";

  listeArticles :any[]= [
    {titre: 'Le championnat du monde', contenu:'Le champion du monde de cette année est', auteur:'Med Taher', datee:'12/12/2005', categorie:'Sport'},
    {titre: 'Les noveaux parents', contenu:'Les noveaux parents', auteur:'Ahmed said', datee:'11/11/2018', categorie:'Education'},
    {titre: 'Comment ecrire votre cv', contenu:'Pour reussir a decraucher un emploi', auteur:'Marie Elsa', datee:'02/04/2017', categorie:'Travail'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
