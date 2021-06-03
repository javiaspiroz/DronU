import { Component, OnInit } from '@angular/core';
import { ToolbarService, GridComponent } from '@syncfusion/ej2-angular-grids'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public data: any[];
  public toolbar: string[];
  public selectOptions: Object;
  public editSettings: Object;

  constructor() { }

  ngOnInit(): void {
    this.toolbar = ['Search'];
    this.selectOptions = { persistSelection: true };
    this.editSettings = { allowDeleting: true };
    this.data = [{ 'OrderID': 10, 'CustomerName': 'HOLA1', 'OrderDate': '10/2/4', 'Freight': '' },
    { 'OrderID': 9, 'CustomerName': 'HOLA2', 'OrderDate': '10/2/6', 'Freight': 'HOLA55' },
    { 'OrderID': 5, 'CustomerName': 'HOLA3', 'OrderDate': '10/2/8', 'Freight': 'HOLA33' },
    { 'OrderID': 6, 'CustomerName': 'HOLA4', 'OrderDate': '10/2/10', 'Freight': 'HOLA22' },
    { 'OrderID': 1, 'CustomerName': 'HOLA5', 'OrderDate': '10/2/12', 'Freight': 'HOLA11' },]

  }

}
