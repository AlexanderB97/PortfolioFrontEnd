import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild,Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { timeout } from 'rxjs';
import { __values } from 'tslib';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-cuenta-registrada',
  templateUrl: './cuenta-registrada.component.html',
  styleUrls: ['./cuenta-registrada.component.css']
})
export class CuentaRegistradaComponent implements OnInit {
  
 
  personajes:any = {};
  constructor(private service : ServiceService ){}
  ngOnInit(): void {
    this.service.getAllPersonajes().subscribe(personajes => {
      this.personajes=personajes.results;
      console.log(this.personajes);
    })
  }

  
 

}
