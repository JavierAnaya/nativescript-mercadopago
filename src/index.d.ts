import { Common } from './mercadopago.common';
export declare class Mercadopago extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  createCheckout(options: MercadoOptions): Promise<any>;
}

export interface MercadoOptions {
  publicKey: string;
  description: string;
  price: string;
}
export function requestPermissions();