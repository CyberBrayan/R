import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { prueba } from './Modelo/prueba';

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor (private router: Router){}

  Siguiente(){
    var objeto = new prueba;
    //var objeto2: prueba;
    var myArray = new Array();

    for(var i=0;i<3;i++){
      objeto.nombre="Brayan";
      objeto.apellidoPaterno="Calcina";
      objeto.apellidoMaterno="Aguilar";
      myArray.push(objeto);
    }

    for(var i=0;i<myArray.length;i++){
      var hola = [myArray[i].nombre,myArray[i].apellidoPaterno,myArray[i].apellidoMaterno];
      myArray.push(hola);
    }

    /*for(var i=0;i<myArray.length;i++){
      alert(i);
      alert(myArray[i].nombre);
      alert(myArray[i].apellidoPaterno);
      alert(myArray[i].apellidoMaterno);
    }*/

    var pdf = new jsPDF('1','pt');
    let columns = ["ID", "Name", "Country"];
    let rows = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"],
    ];

    alert(myArray);

    pdf.autoTable(columns, myArray); // typescript compile time error
    pdf.save('table.pdf');
    //this.router.navigate(["siguiente"]);
  }

}
