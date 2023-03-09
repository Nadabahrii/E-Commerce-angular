import { Component, OnInit } from '@angular/core';
import { Article } from '../Core/model/article';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {
  listeArticles!:Article[];
  listeArticles1!:Article[];
  cat!:string;
  cat2!:string;
  x!:string;
  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[
      {titre:"Le championnat du monde",contenu:"Le champion du monde de cette annee est ",auteur:"Med Taher",date:"12/12/2005",categorie:"Sport"},
      {titre:"Les nouveaux parents",contenu:"Les nouveaux parents .",auteur:"Ahmed Said",date:"11/11/2018",categorie:"Education"},
      {titre:"Comment ecrire votre CV",contenu:"Pour réussir a décrocher un emploi ...",auteur:"Marie Elsa",date:"02/04/2017",categorie:"Travail"},
  
    ]
    this.cat="Travail";
    this.cat2="Education";

    this.listeArticles1=[
      {titre:"Le championnat du monde",contenu:"Le champion du monde de cette annee est ",auteur:"Med Taher",date:"12/12/2005",categorie:"Sport"},
      {titre:"Les nouveaux parents",contenu:"Les nouveaux parents .",auteur:"Ahmed Said",date:"11/11/2018",categorie:"Education"},
      {titre:"Comment ecrire votre CV",contenu:"Pour réussir a décrocher un emploi ...",auteur:"Marie Elsa",date:"02/04/2017",categorie:"Travail"},
  
    ]
    this.x=this.listeArticles.filter((article)=>article.categorie!="Travail").length.toString();
    
  }
  articles(){
    this.listeArticles=this.listeArticles1.slice(0,Number(this.x));
  }
 

}
