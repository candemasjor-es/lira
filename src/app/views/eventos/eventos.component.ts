import { Component, OnInit } from '@angular/core';

import { EventosService }from '../../services/eventos.service'
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos:any=[];
  constructor( private eventosService:EventosService) { }

  ngOnInit(): void {
    this.eventosService.getEventos.subscribe(
      res => {
        this.eventos = res
      },
      err => console.log('err')
    )
  }
  artistas=[
    {
   
    "Imagen":"url('https://i2.wp.com/clubdefotografia.net/wp-content/uploads/2013/08/04-Sebasti%C3%A3o-Salgado.jpeg?resize=538%2C391&ssl=1')",
    "Titulo":"Concierto del 9 de octubre",
    "color":"banda sinfonica"
    },

    {
   
      "Imagen":"url('https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2013/02/sebastiao_salgado_oenf_.jpg')",
      "Titulo":"Concierto de sana cecilia",
      "color":"Banda juvenil"
      },
      {
   
        "Imagen":"url('https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2013/02/sebastiao_salgado_oenf_.jpg')",
        "Titulo":"Concierto de sana cecilia",
        "color":"Banda juvenil"
        },
        {
   
          "Imagen":"url('https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2013/02/sebastiao_salgado_oenf_.jpg')",
          "Titulo":"Concierto de sana cecilia",
          "color":"Banda juvenil"
          },
          {
   
            "Imagen":"url('https://i0.wp.com/oscarenfotos.com/wp-content/uploads/2013/02/sebastiao_salgado_oenf_.jpg')",
            "Titulo":"Concierto de sana cecilia",
            "color":"Banda juvenil"
            },

            {
   
              "Imagen":"url('https://i2.wp.com/clubdefotografia.net/wp-content/uploads/2013/08/04-Sebasti%C3%A3o-Salgado.jpeg?resize=538%2C391&ssl=1')",
              "Titulo":"Concierto del 9 de octubre",
              "color":"banda sinfonica"
              },

              {
   
                "Imagen":"url('https://i2.wp.com/clubdefotografia.net/wp-content/uploads/2013/08/04-Sebasti%C3%A3o-Salgado.jpeg?resize=538%2C391&ssl=1')",
                "Titulo":"Concierto del 9 de octubre",
                "color":"banda sinfonica"
                },
            
  ]




}
