import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';




@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  url="https://6164b0aa09a29d0017c88e43.mockapi.io/Facturas";
  
  conversion: any; 
  array1=[ ];
  array2=[ ];
  id=" ";

 
  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(data =>{
     
     this.conversion=data;
     this.array2=this.array1.concat(this.conversion);
     console.log('prueba: ', this.array2);
     console.log(typeof  this.conversion);
    
    });
   
  }

  

 
 

  valor = false;
  objeto1 = { };
  objeto2= " ";
  detalle1=  [];
  detalle2 = [];
  d2={ };
  Angular(){
   
    console.log(this.detalle1.toString());
     for(let d1 of this.detalle1){
         console.log(typeof d1)
       this.d2=d1;
       console.log(this.d2);
     }
     
 }

  

  



  

  

 

}
