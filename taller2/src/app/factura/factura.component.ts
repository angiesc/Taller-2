import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  factura="";
  factura1="";

  constructor() { }

  ngOnInit(): void {
  }

  agregarItem(){
    try{
      this.factura +=this.factura1+",";
      this.factura1="";
    }
    catch(e){
      console.log("An error occurred on Agregar Item=>",e)
    }
  }
}
