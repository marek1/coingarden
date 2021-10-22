import { Component, Input, OnInit, Provider } from '@angular/core';

@Component({
  selector: 'app-provider-product',
  templateUrl: './provider-product.component.html',
  styleUrls: ['./provider-product.component.scss']
})
export class ProviderProductComponent implements OnInit {
  collapse = false;
  @Input() providerProduct: any = new Object();
  constructor() { }

  ngOnInit(): void {
  }

}
