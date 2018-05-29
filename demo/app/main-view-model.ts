import { Observable } from 'tns-core-modules/data/observable';
import { Mercadopago,MercadoOptions,requestPermissions } from 'nativescript-mercadopago';

export class HelloWorldModel extends Observable {
  private mercadopago: Mercadopago;

  constructor() {
    super();
  }

  pagar(){
    this.mercadopago = new Mercadopago();

    let options:MercadoOptions = {
      publicKey: "TEST-8ce06797-4500-488b-a302-2ac8886f946d",
      description: "Servicio 1",
      price:"200"
    }

    requestPermissions().then(
      ()=>{
          this.mercadopago.createCheckout(options).then(
            data=>{
              console.log("entro al metodo")
              console.dir(data);
            },error=>{
              console.log(error);
            }
          );
      },
      () => alert('permissions rejected') 
    );
    
      
  }
}
