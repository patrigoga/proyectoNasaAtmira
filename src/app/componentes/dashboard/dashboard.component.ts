import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  arrFotos: any[] = [];

  constructor(private fotosService: FotosService ){ }
   
  ngOnInit(){

    this.fotosService.getAll()
      //.then(fotos => console.log(fotos))
      .then(fotos => this.arrFotos = fotos)

      .catch(error => console.log(error));

  }

 

 

}
