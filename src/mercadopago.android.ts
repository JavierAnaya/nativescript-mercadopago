import { Common } from './mercadopago.common';
import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform/platform";
import * as permissions from "nativescript-permissions";
declare const  com: any;
export class Mercadopago extends Common {
    createCheckout(options: MercadoOptions):Promise<any>{
        let activity = app.android.foregroundActivity || app.android.startActivity;

        return new Promise(function (resolve, reject) {
            
            let checkoutPreference = new com.mercadopago.preferences.CheckoutPreference.Builder()
                    .addItem(new com.mercadopago.model.Item(options.description,new java.math.BigDecimal(options.price)))
                    .setSite(com.mercadopago.constants.Sites.MEXICO)
                    .addExcludedPaymentType(com.mercadopago.constants.PaymentTypes.PREPAID_CARD)
                    .addExcludedPaymentType(com.mercadopago.constants.PaymentTypes.ACCOUNT_MONEY)
                    .addExcludedPaymentType(com.mercadopago.constants.PaymentTypes.BANK_TRANSFER)
                    .build();
           
            if ((<any>android.support.v4.content.ContextCompat).checkSelfPermission(
                app.android.currentContext,
                (<any>android).Manifest.permission.ACCESS_COARSE_LOCATION) !== android.content.pm.PackageManager.PERMISSION_GRANTED) {

                reject(new Error("Application does not have permissions to use Network"));

                return;
            }
                
            let startChecKout = new com.mercadopago.core.MercadoPagoCheckout.Builder()
                        .setActivity(activity)//context activity
                        .setPublicKey(options.publicKey)
                        .setCheckoutPreference(checkoutPreference)
                        .startForPaymentData();



            activity.onActivityResult = function (requestCode, resultCode, data) {

                if (requestCode == com.mercadopago.core.MercadoPagoCheckout.CHECKOUT_REQUEST_CODE) {
                    if (resultCode == com.mercadopago.core.MercadoPagoCheckout.PAYMENT_DATA_RESULT_CODE) {
                        let paymentData = com.mercadopago.util.JsonUtil.getInstance().fromJson(data.getStringExtra("paymentData"), com.mercadopago.model.PaymentData.class);
                        let paymentMethodId = paymentData.getPaymentMethod().getId();
                        let cardIssuerId = paymentData.getIssuer() == null ? null : paymentData.getIssuer().getId();
                        let installment = paymentData.getPayerCost() == null ? null : paymentData.getPayerCost().getInstallments();
                        let cardToken = paymentData.getToken() == null ? null : paymentData.getToken().getId();
                        let campaignId = paymentData.getDiscount() == null ? null : paymentData.getDiscount().getId();
                        resolve(data.getStringExtra("paymentData")); //return json with all the information of the purchase
                    } else if (resultCode == 0) {
                        // canceled
                        reject("canceled");//returns canceled, if the operation is canceled
                    }
                }

            }



        });


    }
}

export interface MercadoOptions {
    publicKey: string;
    description: string;
    price:string;
}


export let requestPermissions = function () {
    return permissions.requestPermissions([
      (<any>android).Manifest.permission.ACCESS_FINE_LOCATION
    ]);
};