
interface MPTrackListener {

	trackEventWithScreenNameActionResultExtraParams(screenName: string, action: string, result: string, extraParams: NSDictionary<string, string>): void;

	trackScreenWithScreenName(screenName: string): void;
}
declare var MPTrackListener: {

	prototype: MPTrackListener;
};

declare class MPXTracker extends NSObject {

	static alloc(): MPXTracker; // inherited from NSObject

	static getTrackListener(): MPTrackListener;

	static new(): MPXTracker; // inherited from NSObject

	static setPublicKey(public_key: string): void;

	static setSdkVersion(version: string): void;

	static setTrackWithListener(listener: MPTrackListener): void;

	static setTrackingStrategyWithScreenID(screenID: string): void;

	static trackPaymentOffWithPaymentId(paymentId: string): void;

	static trackTokenWithToken(token: string): void;

	getPlatformType(): string;

	getPublicKey(): string;

	getSdkVersion(): string;
}

declare var MercadoPagoPXTrackingVersionNumber: number;

declare var MercadoPagoPXTrackingVersionNumberVar: number;

declare var MercadoPagoPXTrackingVersionString: interop.Reference<number>;

declare var MercadoPagoPXTrackingVersionStringVar: interop.Reference<number>;

declare class PXTrackingSettings extends NSObject {

	static alloc(): PXTrackingSettings; // inherited from NSObject

	static enableBetaServices(): void;

	static new(): PXTrackingSettings; // inherited from NSObject
}

declare class PXTrackingURLConfigs extends NSObject {

	static alloc(): PXTrackingURLConfigs; // inherited from NSObject

	static new(): PXTrackingURLConfigs; // inherited from NSObject
}

declare class TrackingUtil extends NSObject {

	static alloc(): TrackingUtil; // inherited from NSObject

	static new(): TrackingUtil; // inherited from NSObject

	static readonly CARD_EXPIRATION_DATE: string;

	static readonly CARD_HOLDER_NAME: string;

	static readonly CARD_IDENTIFICATION: string;

	static readonly CARD_INSTALLMENTS: string;

	static readonly CARD_ISSUER: string;

	static readonly CARD_NUMBER: string;

	static readonly CARD_SECURITY_CODE: string;

	static readonly CARD_SECURITY_CODE_VIEW: string;

	static readonly HAS_SHIPPING_DEFAULT_VALUE: string;

	static readonly IS_EXPRESS_DEFAULT_VALUE: string;

	static readonly METADATA_ERROR_CODE: string;

	static readonly METADATA_ERROR_REQUEST: string;

	static readonly METADATA_ERROR_STATUS: string;

	static readonly METADATA_ISSUER_ID: string;

	static readonly METADATA_PAYMENT_ID: string;

	static readonly METADATA_PAYMENT_IS_EXPRESS: string;

	static readonly METADATA_PAYMENT_METHOD_ID: string;

	static readonly METADATA_PAYMENT_STATUS: string;

	static readonly METADATA_PAYMENT_STATUS_DETAIL: string;

	static readonly METADATA_PAYMENT_TYPE_ID: string;

	static readonly METADATA_SHIPPING_INFO: string;

	static readonly METATDATA_SECURITY_CODE_VIEW_REASON: string;

	static readonly NO_NAME_SCREEN: string;

	static readonly NO_SCREEN_ID: string;

	static readonly SCREEN_ID_BANK_DEALS: string;

	static readonly SCREEN_ID_CARD_FORM: string;

	static readonly SCREEN_ID_CHECKOUT: string;

	static readonly SCREEN_ID_ERROR: string;

	static readonly SCREEN_ID_PAYMENT_RESULT: string;

	static readonly SCREEN_ID_PAYMENT_RESULT_APPROVED: string;

	static readonly SCREEN_ID_PAYMENT_RESULT_INSTRUCTIONS: string;

	static readonly SCREEN_ID_PAYMENT_RESULT_PENDING: string;

	static readonly SCREEN_ID_PAYMENT_RESULT_REJECTED: string;

	static readonly SCREEN_ID_PAYMENT_TYPES: string;

	static readonly SCREEN_ID_PAYMENT_VAULT: string;

	static readonly SCREEN_ID_REVIEW_AND_CONFIRM: string;

	static readonly SCREEN_NAME_BANK_DEALS: string;

	static readonly SCREEN_NAME_CARD_FORM: string;

	static readonly SCREEN_NAME_CARD_FORM_CVV: string;

	static readonly SCREEN_NAME_CARD_FORM_EXPIRY: string;

	static readonly SCREEN_NAME_CARD_FORM_IDENTIFICATION_NUMBER: string;

	static readonly SCREEN_NAME_CARD_FORM_INSTALLMENTS: string;

	static readonly SCREEN_NAME_CARD_FORM_ISSUERS: string;

	static readonly SCREEN_NAME_CARD_FORM_NAME: string;

	static readonly SCREEN_NAME_CARD_FORM_NUMBER: string;

	static readonly SCREEN_NAME_CHECKOUT: string;

	static readonly SCREEN_NAME_ERROR: string;

	static readonly SCREEN_NAME_PAYMENT_RESULT: string;

	static readonly SCREEN_NAME_PAYMENT_RESULT_CALL_FOR_AUTH: string;

	static readonly SCREEN_NAME_PAYMENT_RESULT_INSTRUCTIONS: string;

	static readonly SCREEN_NAME_PAYMENT_TYPES: string;

	static readonly SCREEN_NAME_PAYMENT_VAULT: string;

	static readonly SCREEN_NAME_REVIEW_AND_CONFIRM: string;

	static readonly SCREEN_NAME_SECURITY_CODE: string;
}
