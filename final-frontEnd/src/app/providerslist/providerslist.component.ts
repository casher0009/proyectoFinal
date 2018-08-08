import { Component, OnInit } from '@angular/core';
import { ProvidersService } from "../services/providers.service";


@Component({
  selector: 'app-providerslist',
  templateUrl: './providerslist.component.html',
  styleUrls: ['./providerslist.component.css']
})
export class ProviderslistComponent implements OnInit {

  list:any=[]
  constructor(
    private providerservice:ProvidersService
  ) { }

  getOProviders() {
    this.providerservice.getAllProviders()
    .then(providers=>{
      this.list = providers

    })
    .catch(e=>console.log(e))
  }

  ngOnInit() {
    this.getOProviders()
  }

}
