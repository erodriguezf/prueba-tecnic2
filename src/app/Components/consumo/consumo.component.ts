import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';




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
  detalle1: any;
  detalle2 = { };
  detalle3 = { };
  detalle4 = [];
  d2={ };
  //i=0;
 // j=0;
  array5=[ ];
  detalle6:any;
  array6=[ ];
  ver =false;
  ver1=false;
  cv2: any;
  cv3:any;
  cv4:any;
  cv5:any;
  crear(){ 
  let numero = prompt("ingrese la cantidad de facturas: ");
  //let i=0;
    if(numero != null){
     let n = parseInt(numero);
     let i=0;
      while(i<n){
       let numerof=prompt("Ingrese el numero de la fatura: ");
       let fecha=prompt("Ingrese la fecha de la factura: ");
       let date: Date = new Date();
       let date1=" ";
       if(fecha!= null){
          date = new Date(fecha);
          date1=date.toString();
        }
        
        let NombreC=prompt("Ingrese el nombre del cliente: ");
        let sw=0;
        let tp2=" "
        let TipoPago=prompt("Ingrese tipo de pago: ");
         if(TipoPago=="Contado" || TipoPago=="Crédito"){
          tp2=TipoPago;
         }else{
           break;
         }
        this.detalle6="";
        this.array6=[ ];
        let ndetalle= prompt("Ingrese el numero de detalles: ");
        if(ndetalle!=null){
           let nd = parseInt(ndetalle);
           let j=0;
           let ct1=0;
           let prec1=0;
           let cof=0;
           let descuen=0;
           let suma=0;
           let suma1=0;
           let st=0;
           let st2=0;
           let st3=" ";
           let suma3=" ";
           let suma4=" ";
           while(j<nd){
              let item=prompt("Ingrese el Item: ");
              let product=prompt("Ingrese el nombre del producto: ");
              let Cantidad=prompt("Ingrese la cantidad: ");
              if(Cantidad!=null){
                ct1=parseFloat(Cantidad);
              }
              let Precio=prompt("Ingrese el Precio Unitario: ");
              if(Precio!=null){
                prec1=parseFloat(Precio);
              }
              let Descuento=prompt("Ingrese el descuento: ");
              if(Descuento!=null){
                descuen=parseFloat(Descuento);
              }
              cof=descuen/100;
              st=(prec1*ct1)-(prec1*ct1)*cof;
              st2=st+0.19*st;
              st3=st2.toString();
              this.detalle6={"Item": item,"Producto":product,"Cantidad":Cantidad,"Precio":Precio,"Descuento":Descuento,"Subtotal":st3}
              this.array6=this.array6.concat(this.detalle6);
              suma=suma+st;
              j=j+1;
           }
           suma1=suma+suma*0.19;
           suma3=suma1.toString();
           suma4=suma.toString();
           this.cv3=this.array6;
           this.cv4=suma3;
           this.cv5=suma4;
        }

        this.detalle1={"numero":numerof, "fecha":date1,"nombre":NombreC, "Tipo":tp2,"Detalle":this.cv3,"TotalconIva":this.cv4,"TotalSinIva":this.cv5 }
        this.array5=this.array5.concat(this.detalle1);

        i=i+1;
      }
      console.log(this.array5);
      this.cv2=this.array5;
    }
      
  }

  
  
  

  Angular(con:[]){

   
    
   
    
    con.map(function(i){
         console.log(i);
       //
        
    })

    console.log("hola mundo");
    console.log(typeof con);


 }
 

 
  

  



  

  

 

}
