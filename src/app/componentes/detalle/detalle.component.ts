import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  fechaId:any;

  constructor(private activatedRoute: ActivatedRoute,
              private fotosservice: FotosService
    ) { }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe( async params =>{
    //  this.fechaId = params.fechaId;
      console.log(params.fechaId);
     this.fechaId = await this.fotosservice.getDetalle(params.fechaId);
      console.log(this.fechaId);
    })

    /*this.fotoservice.getByID(this.fechaId)
    .then(fotos => this.fechaId = fotos)*/
   
  }

}
