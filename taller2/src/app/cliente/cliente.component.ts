import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente="Pepito Perez";
  imagen="https://static.vecteezy.com/system/resources/previews/002/205/928/non_2x/payment-invoice-icon-free-vector.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
