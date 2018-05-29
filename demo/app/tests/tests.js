var Mercadopago = require("nativescript-mercadopago").Mercadopago;
var mercadopago = new Mercadopago();

describe("greet function", function() {
    it("exists", function() {
        expect(mercadopago.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mercadopago.greet()).toEqual("Hello, NS");
    });
});