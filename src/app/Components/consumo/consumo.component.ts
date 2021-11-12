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
  array2=[];
  id=" ";

 
  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(data =>{
     
     this.conversion=data;
     this.array1=this.array1.concat(this.conversion);
     //this.array2=this.conversion.Detalle;
     for(let d3 of this.conversion){
       this.array2=this.array2.concat(d3.Detalle)
     }
     console.log('prueba: ', this.conversion);
     console.log(typeof  this.conversion);
     console.log('detalle: ', this.array2);
    
    });
   
  }

  

 
 

  valor = false;
  objeto1 = { };
  objeto2= " ";
  detalle1=  { };
  detalle2 = { };
  detalle3 = { };
  detalle4 = [];
  d2={ };
  i=0;
  j=1;
  array5=[ ];
  
  crear(){ 
  let numero = prompt("ingrese un valor: ");
  //let i=0;
    if(numero != null){
     let n = parseInt(numero);
      for(let i=1;i<=n;i++){
          console.log(i);
      }
    }
      
  }
  
  

  Angular(con:[]){

   
    
   
     //console.log(con);
   /* for(let d5 of this.array2){
       if(this.i==(this.array2.indexOf(d5))%2){
           this.detalle3=this.detalle3.concat(d5);
           
       }else{
        this.detalle4=this.detalle4.concat(d5);
       }

       //console.log(d5);
       
    }*/

   /* for(let i in con){
       console.log(con[i]);
    }*/
    /*con.forEach(function(i.Item){
        console.log(i.Item);
    });*/
    con.map(function(i){
         console.log(i);
       //
        
    })

    console.log("hola mundo");
    console.log(typeof con);
/*
    for(let i of con){
           if(con.indexOf(i)==0){
              this.detalle1=con[con.indexOf(i)];
           }else{
            this.detalle2=con[con.indexOf(i)];
           }
          
          
    }
    console.log("d1", this.detalle1);
    console.log("d2", this.detalle2);
    
     */

    /*for(let i=0;con.length;i++){
          console.log(con[i]);
    }*/

 }
 

 
  

  



  

  

 

}
