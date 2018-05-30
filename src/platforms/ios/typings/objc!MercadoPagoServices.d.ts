
declare class CustomService extends MercadoPagoService {

	static alloc(): CustomService; // inherited from NSObject

	static new(): CustomService; // inherited from NSObject

	data: NSMutableData;

	createPaymentHeadersBodyParamsSuccessFailure(method: string, headers: NSDictionary<string, string>, body: string, params: string, success: (p1: PXPayment) => void, failure: (p1: PXError) => void): void;

	createPreferenceBodySuccessFailure(method: string, body: string, success: (p1: PXCheckoutPreference) => void, failure: (p1: PXError) => void): void;

	getCustomerParamsSuccessFailure(method: string, params: string, success: (p1: PXCustomer) => void, failure: (p1: PXError) => void): void;
}

declare class DiscountService extends MercadoPagoService {

	static alloc(): DiscountService; // inherited from NSObject

	static new(): DiscountService; // inherited from NSObject

	getCampaignsWithPublicKeySuccessFailure(publicKey: string, success: (p1: NSArray<PXCampaign>) => void, failure: (p1: PXError) => void): void;

	getDiscountWithPublicKeyAmountCodePayerEmailAdditionalInfoSuccessFailure(publicKey: string, amount: number, code: string, payerEmail: string, additionalInfo: string, success: (p1: PXDiscount) => void, failure: (p1: PXError) => void): void;
}

declare class ErrorTypes extends NSObject {

	static alloc(): ErrorTypes; // inherited from NSObject

	static new(): ErrorTypes; // inherited from NSObject
}

declare class GatewayService extends MercadoPagoService {

	static alloc(): GatewayService; // inherited from NSObject

	static new(): GatewayService; // inherited from NSObject

	cloneTokenMethodPublic_keyTokenIdSecurityCodeSuccessFailure(url: string, method: string, public_key: string, tokenId: string, securityCode: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;

	getTokenMethodCardTokenJSONSuccessFailure(url: string, method: string, cardTokenJSON: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;
}

declare class IdentificationService extends MercadoPagoService {

	static alloc(): IdentificationService; // inherited from NSObject

	static new(): IdentificationService; // inherited from NSObject

	getIdentificationTypesUriSuccessFailure(method: string, uri: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;
}

declare class InstructionsService extends MercadoPagoService {

	static alloc(): InstructionsService; // inherited from NSObject

	static new(): InstructionsService; // inherited from NSObject

	getInstructionsForPaymentTypeIdLanguageSuccessFailure(paymentId: number, paymentTypeId: string, language: string, success: (p1: PXInstructions) => void, failure: (p1: PXError) => void): void;

	getInstructionsPaymentTypeIdSuccessFailure(paymentId: number, paymentTypeId: string, success: (p1: PXInstructions) => void, failure: (p1: NSError) => void): void;
}

declare class MercadoPagoService extends NSObject {

	static alloc(): MercadoPagoService; // inherited from NSObject

	static new(): MercadoPagoService; // inherited from NSObject

	requestWithUriParamsBodyMethodHeadersCacheSuccessFailure(uri: string, params: string, body: string, method: string, headers: NSDictionary<string, string>, cache: boolean, success: (p1: NSData) => void, failure: (p1: NSError) => void): void;
}

declare class MercadoPagoServices extends NSObject {

	static alloc(): MercadoPagoServices; // inherited from NSObject

	static new(): MercadoPagoServices; // inherited from NSObject

	merchantPublicKey: string;

	payerAccessToken: string;

	procesingMode: string;

	constructor(o: { merchantPublicKey: string; payerAccessToken: string; procesingMode: string; });

	cloneTokenWithTokenIdSecurityCodeCallbackFailure(tokenId: string, securityCode: string, callback: (p1: PXToken) => void, failure: (p1: NSError) => void): void;

	createCheckoutPreferenceWithUrlUriBodyInfoCallbackFailure(url: string, uri: string, bodyInfo: NSDictionary<any, any>, callback: (p1: PXCheckoutPreference) => void, failure: (p1: PXError) => void): void;

	createPaymentWithUrlUriTransactionIdPaymentDataQueryCallbackFailure(url: string, uri: string, transactionId: string, paymentData: NSDictionary<any, any>, query: NSDictionary<string, string>, callback: (p1: PXPayment) => void, failure: (p1: PXError) => void): void;

	createTokenWithCardTokenCallbackFailure(cardToken: PXCardToken, callback: (p1: PXToken) => void, failure: (p1: PXError) => void): void;

	createTokenWithCardTokenJSONCallbackFailure(cardTokenJSON: string, callback: (p1: PXToken) => void, failure: (p1: PXError) => void): void;

	createTokenWithSavedCardTokenCallbackFailure(savedCardToken: PXSavedCardToken, callback: (p1: PXToken) => void, failure: (p1: PXError) => void): void;

	createTokenWithSavedESCCardTokenCallbackFailure(savedESCCardToken: PXSavedESCCardToken, callback: (p1: PXToken) => void, failure: (p1: PXError) => void): void;

	getBankDealsWithCallbackFailure(callback: (p1: NSArray<PXBankDeal>) => void, failure: (p1: PXError) => void): void;

	getCampaignsWithCallbackFailure(callback: (p1: NSArray<PXCampaign>) => void, failure: (p1: PXError) => void): void;

	getCheckoutPreferenceWithCheckoutPreferenceIdCallbackFailure(checkoutPreferenceId: string, callback: (p1: PXCheckoutPreference) => void, failure: (p1: PXError) => void): void;

	getCodeDiscountWithUrlUriAmountPayerEmailCouponCodeDiscountAdditionalInfoCallbackFailure(url: string, uri: string, amount: number, payerEmail: string, couponCode: string, discountAdditionalInfo: NSDictionary<string, string>, callback: (p1: PXDiscount) => void, failure: (p1: PXError) => void): void;

	getCustomerWithUrlUriAdditionalInfoCallbackFailure(url: string, uri: string, additionalInfo: NSDictionary<string, string>, callback: (p1: PXCustomer) => void, failure: (p1: PXError) => void): void;

	getDirectDiscountWithUrlUriAmountPayerEmailDiscountAdditionalInfoCallbackFailure(url: string, uri: string, amount: number, payerEmail: string, discountAdditionalInfo: NSDictionary<string, string>, callback: (p1: PXDiscount) => void, failure: (p1: PXError) => void): void;

	getGatewayURL(): string;

	getIdentificationTypesWithCallbackFailure(callback: (p1: NSArray<PXIdentificationType>) => void, failure: (p1: PXError) => void): void;

	getInstallmentsWithBinAmountIssuerIdPaymentMethodIdCallbackFailure(bin: string, amount: number, issuerId: string, paymentMethodId: string, callback: (p1: NSArray<PXInstallment>) => void, failure: (p1: PXError) => void): void;

	getInstructionsWithPaymentIdPaymentTypeIdCallbackFailure(paymentId: number, paymentTypeId: string, callback: (p1: PXInstructions) => void, failure: (p1: PXError) => void): void;

	getIssuersWithPaymentMethodIdBinCallbackFailure(paymentMethodId: string, bin: string, callback: (p1: NSArray<PXIssuer>) => void, failure: (p1: PXError) => void): void;

	getPaymentMethodSearchWithAmountExcludedPaymentTypesIdsExcludedPaymentMethodsIdsDefaultPaymentMethodPayerSiteCallbackFailure(amount: number, excludedPaymentTypesIds: NSSet<string>, excludedPaymentMethodsIds: NSSet<string>, defaultPaymentMethod: string, payer: PXPayer, site: PXSite, callback: (p1: PXPaymentMethodSearch) => void, failure: (p1: PXError) => void): void;

	getPaymentMethodsWithCallbackFailure(callback: (p1: NSArray<PXPaymentMethod>) => void, failure: (p1: PXError) => void): void;

	initWithMerchantPublicKeyPayerAccessTokenProcesingMode(merchantPublicKey: string, payerAccessToken: string, procesingMode: string): this;

	setBaseURL(baseURL: string): void;

	setGatewayBaseURL(gatewayBaseURL: string): void;

	setLanguageWithLanguage(language: string): void;
}

declare var MercadoPagoServicesVersionNumber: number;

declare var MercadoPagoServicesVersionNumberVar: number;

declare var MercadoPagoServicesVersionString: interop.Reference<number>;

declare var MercadoPagoServicesVersionStringVar: interop.Reference<number>;

declare class PXAddress extends NSObject {

	static alloc(): PXAddress; // inherited from NSObject

	static fromJSONToPXAddressWithDataError(data: NSData): PXAddress;

	static fromJSONWithDataError(data: NSData): NSArray<PXAddress>;

	static new(): PXAddress; // inherited from NSObject

	streetName: string;

	zipCode: string;

	toJSONAndReturnError(): NSData;
}

declare class PXAmountInfo extends NSObject {

	static alloc(): PXAmountInfo; // inherited from NSObject

	static fromJSONToPXAmountInfoWithDataError(data: NSData): PXAmountInfo;

	static fromJSONWithDataError(data: NSData): NSArray<PXAmountInfo>;

	static new(): PXAmountInfo; // inherited from NSObject

	currency: PXCurrency;

	toJSONAndReturnError(): NSData;
}

declare class PXApiException extends NSObject {

	static alloc(): PXApiException; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXApiException;

	static new(): PXApiException; // inherited from NSObject

	cause: NSArray<PXCause>;

	error: string;

	message: string;

	static readonly COLLECTOR_NOT_ALLOWED_TO_OPERATE: string;

	static readonly CUSTOMER_EQUAL_TO_COLLECTOR: string;

	static readonly CUSTOMER_NOT_ALLOWED_TO_OPERATE: string;

	static readonly EMPTY_CARD_HOLDER_NAME: string;

	static readonly EMPTY_DOCUMENT_NUMBER: string;

	static readonly EMPTY_DOCUMENT_TYPE: string;

	static readonly EMPTY_EXPIRATION_MONTH: string;

	static readonly EMPTY_EXPIRATION_YEAR: string;

	static readonly INVALID_CARD_EXPIRATION_MONTH: string;

	static readonly INVALID_CARD_EXPIRATION_YEAR: string;

	static readonly INVALID_CARD_HOLDER_IDENTIFICATION_NUMBER: string;

	static readonly INVALID_CARD_HOLDER_NAME: string;

	static readonly INVALID_CARD_NUMBER: string;

	static readonly INVALID_ESC: string;

	static readonly INVALID_FINGERPRINT: string;

	static readonly INVALID_IDENTIFICATION_NUMBER: string;

	static readonly INVALID_PAYER_EMAIL: string;

	static readonly INVALID_PAYMENT_METHOD: string;

	static readonly INVALID_PAYMENT_METHOD_ID: string;

	static readonly INVALID_PAYMENT_TYPE_ID: string;

	static readonly INVALID_PAYMENT_WITH_ESC: string;

	static readonly INVALID_SECURITY_CODE: string;

	static readonly INVALID_USERS_INVOLVED: string;

	static readonly PAYMENT_METHOD_NOT_FOUND: string;

	static readonly SECURITY_CODE_REQUIRED: string;

	static readonly UNAUTHORIZED_CLIENT: string;

	toJSONAndReturnError(): NSData;
}

declare class PXApitUtil extends NSObject {

	static alloc(): PXApitUtil; // inherited from NSObject

	static new(): PXApitUtil; // inherited from NSObject

	static readonly BAD_REQUEST: number;

	static readonly INTERNAL_SERVER_ERROR: number;

	static readonly NOT_FOUND: number;

	static readonly OK: number;

	static readonly PROCESSING: number;
}

declare class PXBankDeal extends NSObject {

	static alloc(): PXBankDeal; // inherited from NSObject

	static fromJSONToPXBankDealWithDataError(data: NSData): PXBankDeal;

	static fromJSONWithDataError(data: NSData): NSArray<PXBankDeal>;

	static new(): PXBankDeal; // inherited from NSObject

	dateExpired: Date;

	dateStarted: Date;

	id: string;

	installments: NSArray<number>;

	issuer: PXIssuer;

	legals: string;

	paymentMethods: NSArray<PXPaymentMethod>;

	picture: PXPicture;

	recommendedMessage: string;

	toJSONAndReturnError(): NSData;
}

declare class PXBin extends NSObject {

	static alloc(): PXBin; // inherited from NSObject

	static fromJSONToPXBinWithDataError(data: NSData): PXBin;

	static fromJSONWithDataError(data: NSData): NSArray<PXBin>;

	static new(): PXBin; // inherited from NSObject

	exclusionPattern: string;

	installmentPattern: string;

	pattern: string;

	constructor(o: { exclusionPattern: string; installmentPattern: string; pattern: string; });

	initWithExclusionPatternInstallmentPatternPattern(exclusionPattern: string, installmentPattern: string, pattern: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXCampaign extends NSObject {

	static alloc(): PXCampaign; // inherited from NSObject

	static fromJSONToPXCampaingWithDataError(data: NSData): PXCampaign;

	static fromJSONWithDataError(data: NSData): NSArray<PXCampaign>;

	static new(): PXCampaign; // inherited from NSObject

	cardIssuersIds: NSArray<string>;

	code: string;

	codeType: string;

	collectors: NSArray<number>;

	discountType: string;

	marketplace: string;

	name: string;

	paymentMethodsIds: NSArray<string>;

	paymentTypesIds: NSArray<string>;

	shippingModes: NSArray<string>;

	siteId: string;

	tags: NSArray<string>;

	toJSONAndReturnError(): NSData;
}

declare class PXCard extends NSObject {

	static alloc(): PXCard; // inherited from NSObject

	static fromJSONToPXCardWithDataError(data: NSData): PXCard;

	static fromJSONWithDataError(data: NSData): NSArray<PXCard>;

	static new(): PXCard; // inherited from NSObject

	cardHolder: PXCardHolder;

	customerId: string;

	dateCreated: Date;

	dateLastUpdated: Date;

	firstSixDigits: string;

	id: string;

	issuer: PXIssuer;

	lastFourDigits: string;

	paymentMethod: PXPaymentMethod;

	securityCode: PXSecurityCode;

	toJSONAndReturnError(): NSData;
}

declare class PXCardHolder extends NSObject {

	static alloc(): PXCardHolder; // inherited from NSObject

	static fromJSONToPXCardHolderWithDataError(data: NSData): PXCardHolder;

	static fromJSONWithDataError(data: NSData): NSArray<PXCardHolder>;

	static new(): PXCardHolder; // inherited from NSObject

	identification: PXIdentification;

	name: string;

	constructor(o: { name: string; identification: PXIdentification; });

	initWithNameIdentification(name: string, identification: PXIdentification): this;

	toJSONAndReturnError(): NSData;
}

declare class PXCardNumber extends NSObject {

	static alloc(): PXCardNumber; // inherited from NSObject

	static fromJSONToPXCardNumberWithDataError(data: NSData): PXCardNumber;

	static fromJSONWithDataError(data: NSData): NSArray<PXCardNumber>;

	static new(): PXCardNumber; // inherited from NSObject

	validation: string;

	toJSONAndReturnError(): NSData;
}

declare class PXCardToken extends NSObject {

	static alloc(): PXCardToken; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXCardToken;

	static new(): PXCardToken; // inherited from NSObject

	cardNumber: string;

	cardholder: PXCardHolder;

	device: PXDevice;

	securityCode: string;

	toJSONAndReturnError(): NSData;

	validateCardNumber(paymentMethod: PXPaymentMethod): boolean;

	validateCardholderName(): boolean;

	validateExpiryDateYear(month: number, year: number): boolean;

	validateIdentificationNumber(identificationType: PXIdentificationType): boolean;

	validateSecurityCode(paymentMethod: PXPaymentMethod): boolean;
}

declare class PXCause extends NSObject {

	static alloc(): PXCause; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXCause;

	static new(): PXCause; // inherited from NSObject

	_description: string;

	code: string;

	constructor(o: { code: string; description: string; });

	initWithCodeDescription(code: string, description: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXCheckoutPreference extends NSObject {

	static alloc(): PXCheckoutPreference; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXCheckoutPreference;

	static new(): PXCheckoutPreference; // inherited from NSObject

	expirationDateFrom: Date;

	expirationDateTo: Date;

	id: string;

	items: NSArray<PXItem>;

	payer: PXPayer;

	paymentPreference: PXPaymentPreference;

	site: PXSite;

	siteId: string;

	constructor(o: { id: string; items: NSArray<PXItem>; payer: PXPayer; paymentPreference: PXPaymentPreference; siteId: string; expirationDateTo: Date; expirationDateFrom: Date; site: PXSite; });

	initWithIdItemsPayerPaymentPreferenceSiteIdExpirationDateToExpirationDateFromSite(id: string, items: NSArray<PXItem>, payer: PXPayer, paymentPreference: PXPaymentPreference, siteId: string, expirationDateTo: Date, expirationDateFrom: Date, site: PXSite): this;

	toJSONAndReturnError(): NSData;
}

declare class PXCurrencies extends NSObject {

	static alloc(): PXCurrencies; // inherited from NSObject

	static new(): PXCurrencies; // inherited from NSObject

	static readonly CURRENCY_ARGENTINA: string;

	static readonly CURRENCY_BRAZIL: string;

	static readonly CURRENCY_CHILE: string;

	static readonly CURRENCY_COLOMBIA: string;

	static readonly CURRENCY_MEXICO: string;

	static readonly CURRENCY_PERU: string;

	static readonly CURRENCY_URUGUAY: string;

	static readonly CURRENCY_USA: string;

	static readonly CURRENCY_VENEZUELA: string;

	static readonly currenciesList: NSDictionary<string, PXCurrency>;
}

declare class PXCurrency extends NSObject {

	static alloc(): PXCurrency; // inherited from NSObject

	static fromJSONToPXCurrencyWithDataError(data: NSData): PXCurrency;

	static fromJSONWithDataError(data: NSData): NSArray<PXCurrency>;

	static new(): PXCurrency; // inherited from NSObject

	_description: string;

	decimalSeparator: string;

	id: string;

	symbol: string;

	thousandSeparator: string;

	toJSONAndReturnError(): NSData;
}

declare class PXCustomOptionSearchItem extends NSObject {

	static alloc(): PXCustomOptionSearchItem; // inherited from NSObject

	static fromJSONToPXCustomOptionSearchItemWithDataError(data: NSData): PXCustomOptionSearchItem;

	static fromJSONWithDataError(data: NSData): NSArray<PXCustomOptionSearchItem>;

	static new(): PXCustomOptionSearchItem; // inherited from NSObject

	_description: string;

	id: string;

	paymentMethodId: string;

	paymentTypeId: string;

	constructor(o: { id: string; description: string; paymentMethodId: string; paymentTypeId: string; });

	initWithIdDescriptionPaymentMethodIdPaymentTypeId(id: string, description: string, paymentMethodId: string, paymentTypeId: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXCustomer extends NSObject {

	static alloc(): PXCustomer; // inherited from NSObject

	static fromJSONToPXCustomerWithDataError(data: NSData): PXCustomer;

	static fromJSONWithDataError(data: NSData): NSArray<PXCustomer>;

	static new(): PXCustomer; // inherited from NSObject

	_description: string;

	address: PXAddress;

	cards: NSArray<PXCard>;

	dateCreated: Date;

	dateLastUpdated: Date;

	defaultCard: string;

	email: string;

	firstName: string;

	id: string;

	identification: PXIdentification;

	lastName: string;

	metadata: NSDictionary<string, string>;

	phone: PXPhone;

	registrationDate: Date;

	toJSONAndReturnError(): NSData;
}

declare class PXDevice extends NSObject {

	static alloc(): PXDevice; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXDevice;

	static new(): PXDevice; // inherited from NSObject

	fingerprint: PXFingerprint;

	toJSONAndReturnError(): NSData;
}

declare class PXDeviceId extends NSObject {

	static alloc(): PXDeviceId; // inherited from NSObject

	static fromJSONToPXDeviceIdWithDataError(data: NSData): PXDeviceId;

	static fromJSONWithDataError(data: NSData): NSArray<PXDeviceId>;

	static new(): PXDeviceId; // inherited from NSObject

	name: string;

	value: string;

	constructor(o: { name: string; value: string; });

	initWithNameValue(name: string, value: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXDiscount extends NSObject {

	static alloc(): PXDiscount; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXDiscount;

	static new(): PXDiscount; // inherited from NSObject

	concept_: string;

	couponCode: string;

	currencyId: string;

	id: string;

	name: string;

	toJSONAndReturnError(): NSData;
}

declare class PXError extends NSError {

	static alloc(): PXError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): PXError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): PXError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): PXError; // inherited from NSError

	static new(): PXError; // inherited from NSObject

	apiException: PXApiException;

	type: string;

	constructor(o: { domain: string; code: number; userInfo: NSDictionary<string, any>; apiException: PXApiException; });

	initWithDomainCodeUserInfoApiException(domain: string, code: number, dict: NSDictionary<string, any>, apiException: PXApiException): this;
}

declare class PXFeeDetail extends NSObject {

	static alloc(): PXFeeDetail; // inherited from NSObject

	static fromJSONToPXFeeDetailWithDataError(data: NSData): PXFeeDetail;

	static fromJSONWithDataError(data: NSData): NSArray<PXFeeDetail>;

	static new(): PXFeeDetail; // inherited from NSObject

	feePayer: string;

	type: string;

	toJSONAndReturnError(): NSData;
}

declare class PXFinancialInstitution extends NSObject {

	static alloc(): PXFinancialInstitution; // inherited from NSObject

	static fromJSONToPXFinancialInstitutionWithDataError(data: NSData): PXFinancialInstitution;

	static fromJSONWithDataError(data: NSData): NSArray<PXFinancialInstitution>;

	static new(): PXFinancialInstitution; // inherited from NSObject

	_description: string;

	id: string;

	constructor(o: { id: string; description: string; });

	initWithIdDescription(id: string, description: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXFingerprint extends NSObject {

	static alloc(): PXFingerprint; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXFingerprint;

	static new(): PXFingerprint; // inherited from NSObject

	model: string;

	os: string;

	resolution: string;

	systemVersion: string;

	vendorIds: NSArray<PXDeviceId>;

	vendorSpecificAttributes: PXvendorSpecificAttributes;

	deviceFingerprint(): void;

	toJSONAndReturnError(): NSData;
}

declare class PXIdentification extends NSObject {

	static alloc(): PXIdentification; // inherited from NSObject

	static fromJSONToPXIdentificationWithDataError(data: NSData): PXIdentification;

	static fromJSONWithDataError(data: NSData): NSArray<PXIdentification>;

	static new(): PXIdentification; // inherited from NSObject

	number: string;

	type: string;

	constructor(o: { number: string; type: string; });

	initWithNumberType(number: string, type: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXIdentificationType extends NSObject {

	static alloc(): PXIdentificationType; // inherited from NSObject

	static fromJSONToPXIdentificationTypeWithDataError(data: NSData): PXIdentificationType;

	static fromJSONWithDataError(data: NSData): NSArray<PXIdentificationType>;

	static new(): PXIdentificationType; // inherited from NSObject

	id: string;

	name: string;

	type: string;

	toJSONAndReturnError(): NSData;
}

declare class PXInstallment extends NSObject {

	static alloc(): PXInstallment; // inherited from NSObject

	static fromJSONToPXInstallmentWithDataError(data: NSData): PXInstallment;

	static fromJSONWithDataError(data: NSData): NSArray<PXInstallment>;

	static new(): PXInstallment; // inherited from NSObject

	issuer: PXIssuer;

	payerCosts: NSArray<PXPayerCost>;

	paymentMethodId: string;

	paymentTypeId: string;

	constructor(o: { issuer: PXIssuer; payerCosts: NSArray<PXPayerCost>; paymentMethodId: string; paymentTypeId: string; });

	initWithIssuerPayerCostsPaymentMethodIdPaymentTypeId(issuer: PXIssuer, payerCosts: NSArray<PXPayerCost>, paymentMethodId: string, paymentTypeId: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXInstruction extends NSObject {

	static alloc(): PXInstruction; // inherited from NSObject

	static fromJSONToPXInstructionWithDataError(data: NSData): PXInstruction;

	static fromJSONWithDataError(data: NSData): NSArray<PXInstruction>;

	static new(): PXInstruction; // inherited from NSObject

	accreditationComments: NSArray<string>;

	accreditationMessage: string;

	actions: NSArray<PXInstructionAction>;

	info: NSArray<string>;

	references: NSArray<PXInstructionReference>;

	secondaryInfo: NSArray<string>;

	subtitle: string;

	tertiaryInfo: NSArray<string>;

	title: string;

	type: string;

	constructor(o: { title: string; subtitle: string; accreditationMessage: string; accreditationComments: NSArray<string>; actions: NSArray<PXInstructionAction>; type: string; references: NSArray<PXInstructionReference>; secondaryInfo: NSArray<string>; tertiaryInfo: NSArray<string>; info: NSArray<string>; });

	initWithTitleSubtitleAccreditationMessageAccreditationCommentsActionsTypeReferencesSecondaryInfoTertiaryInfoInfo(title: string, subtitle: string, accreditationMessage: string, accreditationComments: NSArray<string>, actions: NSArray<PXInstructionAction>, type: string, references: NSArray<PXInstructionReference>, secondaryInfo: NSArray<string>, tertiaryInfo: NSArray<string>, info: NSArray<string>): this;

	toJSONAndReturnError(): NSData;
}

declare class PXInstructionAction extends NSObject {

	static alloc(): PXInstructionAction; // inherited from NSObject

	static fromJSONToPXInstructionActionWithDataError(data: NSData): PXInstructionAction;

	static fromJSONWithDataError(data: NSData): NSArray<PXInstructionAction>;

	static new(): PXInstructionAction; // inherited from NSObject

	label: string;

	tag: string;

	url: string;

	toJSONAndReturnError(): NSData;
}

declare class PXInstructionReference extends NSObject {

	static alloc(): PXInstructionReference; // inherited from NSObject

	static fromJSONToPXInstructionReferenceWithDataError(data: NSData): PXInstructionReference;

	static fromJSONWithDataError(data: NSData): NSArray<PXInstructionReference>;

	static new(): PXInstructionReference; // inherited from NSObject

	comment: string;

	fieldValue: NSArray<string>;

	label: string;

	separator: string;

	constructor(o: { label: string; fieldValue: NSArray<string>; separator: string; comment: string; });

	initWithLabelFieldValueSeparatorComment(label: string, fieldValue: NSArray<string>, separator: string, comment: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXInstructions extends NSObject {

	static alloc(): PXInstructions; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXInstructions;

	static new(): PXInstructions; // inherited from NSObject

	amountInfo: PXAmountInfo;

	instructions: NSArray<PXInstruction>;

	constructor(o: { amountInfo: PXAmountInfo; instructions: NSArray<PXInstruction>; });

	initWithAmountInfoInstructions(amountInfo: PXAmountInfo, instructions: NSArray<PXInstruction>): this;

	toJSONAndReturnError(): NSData;
}

declare class PXIssuer extends NSObject {

	static alloc(): PXIssuer; // inherited from NSObject

	static fromJSONToPXIssuerWithDataError(data: NSData): PXIssuer;

	static fromJSONWithDataError(data: NSData): NSArray<PXIssuer>;

	static new(): PXIssuer; // inherited from NSObject

	id: string;

	name: string;

	constructor(o: { id: string; name: string; });

	initWithIdName(id: string, name: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXItem extends NSObject {

	static alloc(): PXItem; // inherited from NSObject

	static fromJSONToPXItemWithDataError(data: NSData): PXItem;

	static fromJSONWithDataError(data: NSData): NSArray<PXItem>;

	static new(): PXItem; // inherited from NSObject

	_description: string;

	categoryId: string;

	currencyId: string;

	id: string;

	pictureUrl: string;

	title: string;

	toJSONAndReturnError(): NSData;
}

declare class PXOrder extends NSObject {

	static alloc(): PXOrder; // inherited from NSObject

	static fromJSONToPXOrderWithDataError(data: NSData): PXOrder;

	static fromJSONWithDataError(data: NSData): NSArray<PXOrder>;

	static new(): PXOrder; // inherited from NSObject

	id: string;

	type: string;

	toJSONAndReturnError(): NSData;
}

declare class PXPayer extends NSObject {

	static alloc(): PXPayer; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPayer;

	static new(): PXPayer; // inherited from NSObject

	accessToken: string;

	email: string;

	entityType: string;

	firstName: string;

	id: string;

	identification: PXIdentification;

	lastName: string;

	type: string;

	constructor(o: { id: string; accessToken: string; identification: PXIdentification; type: string; entityType: string; email: string; firstName: string; lastName: string; });

	initWithIdAccessTokenIdentificationTypeEntityTypeEmailFirstNameLastName(id: string, accessToken: string, identification: PXIdentification, type: string, entityType: string, email: string, firstName: string, lastName: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXPayerCost extends NSObject {

	static alloc(): PXPayerCost; // inherited from NSObject

	static fromJSONToPXPayerCostWithDataError(data: NSData): PXPayerCost;

	static fromJSONWithDataError(data: NSData): NSArray<PXPayerCost>;

	static new(): PXPayerCost; // inherited from NSObject

	labels: NSArray<string>;

	recommendedMessage: string;

	toJSONAndReturnError(): NSData;
}

declare class PXPayment extends NSObject {

	static alloc(): PXPayment; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPayment;

	static new(): PXPayment; // inherited from NSObject

	_description: string;

	callForAuthorizeId: string;

	card: PXCard;

	currencyId: string;

	dateApproved: Date;

	dateCreated: Date;

	dateLastUpdated: Date;

	externalReference: string;

	feeDetails: NSArray<PXFeeDetail>;

	issuerId: string;

	metadata: NSDictionary<string, string>;

	moneyReleaseDate: Date;

	notificationUrl: string;

	operationType: string;

	order: PXOrder;

	payer: PXPayer;

	paymentMethodId: string;

	paymentTypeId: string;

	refunds: NSArray<PXRefund>;

	statementDescriptor: string;

	status: string;

	statusDetail: string;

	tokenId: string;

	transactionDetails: PXTransactionDetails;

	getDateFromString(string: string): Date;

	isCardPaymentType(): boolean;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentMethod extends NSObject {

	static alloc(): PXPaymentMethod; // inherited from NSObject

	static fromJSONToPXPaymentMethodWithDataError(data: NSData): PXPaymentMethod;

	static fromJSONWithDataError(data: NSData): NSArray<PXPaymentMethod>;

	static new(): PXPaymentMethod; // inherited from NSObject

	additionalInfoNeeded: NSArray<string>;

	deferredCapture: string;

	financialInstitutions: NSArray<PXFinancialInstitution>;

	id: string;

	readonly isIssuerRequired: boolean;

	merchantAccountId: string;

	name: string;

	paymentTypeId: string;

	secureThumbnail: string;

	settings: NSArray<PXSetting>;

	status: string;

	thumbnail: string;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentMethodSearch extends NSObject {

	static alloc(): PXPaymentMethodSearch; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPaymentMethodSearch;

	static new(): PXPaymentMethodSearch; // inherited from NSObject

	cards: NSArray<PXCard>;

	customOptionSearchItems: NSArray<PXCustomOptionSearchItem>;

	defaultOption: PXPaymentMethodSearchItem;

	paymentMethodSearchItem: NSArray<PXPaymentMethodSearchItem>;

	paymentMethods: NSArray<PXPaymentMethod>;

	constructor(o: { paymentMethodSearchItem: NSArray<PXPaymentMethodSearchItem>; customOptionSearchItems: NSArray<PXCustomOptionSearchItem>; paymentMethods: NSArray<PXPaymentMethod>; cards: NSArray<PXCard>; defaultOption: PXPaymentMethodSearchItem; });

	initWithPaymentMethodSearchItemCustomOptionSearchItemsPaymentMethodsCardsDefaultOption(paymentMethodSearchItem: NSArray<PXPaymentMethodSearchItem>, customOptionSearchItems: NSArray<PXCustomOptionSearchItem>, paymentMethods: NSArray<PXPaymentMethod>, cards: NSArray<PXCard>, defaultOption: PXPaymentMethodSearchItem): this;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentMethodSearchItem extends NSObject {

	static alloc(): PXPaymentMethodSearchItem; // inherited from NSObject

	static fromJSONToPXPaymentMethodSearchItemWithDataError(data: NSData): PXPaymentMethodSearchItem;

	static fromJSONWithDataError(data: NSData): NSArray<PXPaymentMethodSearchItem>;

	static new(): PXPaymentMethodSearchItem; // inherited from NSObject

	_description: string;

	children: NSArray<PXPaymentMethodSearchItem>;

	childrenHeader: string;

	comment: string;

	id: string;

	type: string;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentMethodSearchItemTypes extends NSObject {

	static alloc(): PXPaymentMethodSearchItemTypes; // inherited from NSObject

	static new(): PXPaymentMethodSearchItemTypes; // inherited from NSObject

	static readonly GROUP: string;

	static readonly PAYMENT_METHOD: string;

	static readonly PAYMENT_TYPE: string;
}

declare class PXPaymentMethods extends NSObject {

	static alloc(): PXPaymentMethods; // inherited from NSObject

	static new(): PXPaymentMethods; // inherited from NSObject

	static readonly ACCOUNT_MONEY: string;
}

declare class PXPaymentPreference extends NSObject {

	static alloc(): PXPaymentPreference; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXPaymentPreference;

	static new(): PXPaymentPreference; // inherited from NSObject

	defaultPaymentMethodId: string;

	defaultPaymentTypeId: string;

	excludedPaymentMethodIds: NSArray<string>;

	excludedPaymentTypeIds: NSArray<string>;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentType extends NSObject {

	static alloc(): PXPaymentType; // inherited from NSObject

	static fromJSONToPXPaymentTypeWithDataError(data: NSData): PXPaymentType;

	static fromJSONWithDataError(data: NSData): NSArray<PXPaymentType>;

	static new(): PXPaymentType; // inherited from NSObject

	id: string;

	toJSONAndReturnError(): NSData;
}

declare class PXPaymentTypes extends NSObject {

	static alloc(): PXPaymentTypes; // inherited from NSObject

	static new(): PXPaymentTypes; // inherited from NSObject

	static readonly ACCOUNT_MONEY: string;

	static readonly ATM: string;

	static readonly BANK_TRANSFER: string;

	static readonly CREDIT_CARD: string;

	static readonly DEBIT_CARD: string;

	static readonly DIGITAL_CURRENCY: string;

	static readonly PREPAID_CARD: string;

	static readonly TICKET: string;
}

declare class PXPhone extends NSObject {

	static alloc(): PXPhone; // inherited from NSObject

	static fromJSONToPXPhoneWithDataError(data: NSData): PXPhone;

	static fromJSONWithDataError(data: NSData): NSArray<PXPhone>;

	static new(): PXPhone; // inherited from NSObject

	areaCode: string;

	number: string;

	constructor(o: { areaCode: string; number: string; });

	initWithAreaCodeNumber(areaCode: string, number: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXPicture extends NSObject {

	static alloc(): PXPicture; // inherited from NSObject

	static fromJSONToPXPictureWithDataError(data: NSData): PXPicture;

	static fromJSONWithDataError(data: NSData): NSArray<PXPicture>;

	static new(): PXPicture; // inherited from NSObject

	id: string;

	secureUrl: string;

	size: string;

	url: string;

	constructor(o: { id: string; size: string; url: string; secureUrl: string; });

	initWithIdSizeUrlSecureUrl(id: string, size: string, url: string, secureUrl: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXRefund extends NSObject {

	static alloc(): PXRefund; // inherited from NSObject

	static fromJSONToPXRefundWithDataError(data: NSData): PXRefund;

	static fromJSONWithDataError(data: NSData): NSArray<PXRefund>;

	static new(): PXRefund; // inherited from NSObject

	dateCreated: Date;

	id: string;

	metadata: NSDictionary<string, string>;

	source: string;

	uniqueSecuenceNumber: string;

	toJSONAndReturnError(): NSData;
}

declare class PXSavedCardToken extends NSObject {

	static alloc(): PXSavedCardToken; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXSavedCardToken;

	static new(): PXSavedCardToken; // inherited from NSObject

	cardId: string;

	device: PXDevice;

	securityCode: string;

	toJSONAndReturnError(): NSData;
}

declare class PXSavedESCCardToken extends PXSavedCardToken {

	static alloc(): PXSavedESCCardToken; // inherited from NSObject

	static new(): PXSavedESCCardToken; // inherited from NSObject

	esc: string;
}

declare class PXSecurityCode extends NSObject {

	static alloc(): PXSecurityCode; // inherited from NSObject

	static fromJSONToPXSecurityCodeWithDataError(data: NSData): PXSecurityCode;

	static fromJSONWithDataError(data: NSData): NSArray<PXSecurityCode>;

	static new(): PXSecurityCode; // inherited from NSObject

	cardLocation: string;

	mode: string;

	toJSONAndReturnError(): NSData;
}

declare class PXServicesSettings extends NSObject {

	static alloc(): PXServicesSettings; // inherited from NSObject

	static enableBetaServices(): void;

	static new(): PXServicesSettings; // inherited from NSObject
}

declare class PXServicesURLConfigs extends NSObject {

	static alloc(): PXServicesURLConfigs; // inherited from NSObject

	static new(): PXServicesURLConfigs; // inherited from NSObject

	static setAPI_VERSION(value: string): void;

	static setMP_ENVIROMENT(value: string): void;

	static setMP_INSTALLMENTS_URI(value: string): void;

	static setMP_ISSUERS_URI(value: string): void;

	static setMP_PROD_ENV(value: string): void;

	static setMP_SELECTED_ENV(value: string): void;

	static setMP_TEST_ENV(value: string): void;

	static API_VERSION: string;

	static readonly CARD_ISSSUERS: string;

	static readonly CARD_TOKEN: string;

	static readonly INSTALLMENTS: string;

	static readonly MP_API_BASE_URL: string;

	static readonly MP_API_BASE_URL_PROD: string;

	static readonly MP_CAMPAIGNS_URI: string;

	static readonly MP_CREATE_TOKEN_URI: string;

	static readonly MP_CUSTOMER_URI: string;

	static readonly MP_DISCOUNT_URI: string;

	static MP_ENVIROMENT: string;

	static readonly MP_IDENTIFICATION_URI: string;

	static MP_INSTALLMENTS_URI: string;

	static readonly MP_INSTRUCTIONS_URI: string;

	static MP_ISSUERS_URI: string;

	static readonly MP_OP_ENVIROMENT: string;

	static readonly MP_PAYMENT_METHODS_URI: string;

	static readonly MP_PREFERENCE_URI: string;

	static MP_PROD_ENV: string;

	static readonly MP_PROMOS_URI: string;

	static readonly MP_SEARCH_PAYMENTS_URI: string;

	static MP_SELECTED_ENV: string;

	static MP_TEST_ENV: string;

	static readonly PAYMENTS: string;

	static readonly PAYMENT_METHODS: string;
}

declare class PXSetting extends NSObject {

	static alloc(): PXSetting; // inherited from NSObject

	static fromJSONToPXSettingWithDataError(data: NSData): PXSetting;

	static fromJSONWithDataError(data: NSData): NSArray<PXSetting>;

	static new(): PXSetting; // inherited from NSObject

	bin: PXBin;

	cardNumber: PXCardNumber;

	securityCode: PXSecurityCode;

	constructor(o: { bin: PXBin; cardNumber: PXCardNumber; securityCode: PXSecurityCode; });

	initWithBinCardNumberSecurityCode(bin: PXBin, cardNumber: PXCardNumber, securityCode: PXSecurityCode): this;

	toJSONAndReturnError(): NSData;
}

declare class PXSite extends NSObject {

	static alloc(): PXSite; // inherited from NSObject

	static fromJSONToPXSiteWithDataError(data: NSData): PXSite;

	static fromJSONWithDataError(data: NSData): NSArray<PXSite>;

	static new(): PXSite; // inherited from NSObject

	currencyId: string;

	id: string;

	constructor(o: { id: string; currencyId: string; });

	initWithIdCurrencyId(id: string, currencyId: string): this;

	toJSONAndReturnError(): NSData;
}

declare class PXSites extends NSObject {

	static alloc(): PXSites; // inherited from NSObject

	static new(): PXSites; // inherited from NSObject

	static readonly ARGENTINA: PXSite;

	static readonly BRASIL: PXSite;

	static readonly CHILE: PXSite;

	static readonly COLOMBIA: PXSite;

	static readonly MEXICO: PXSite;

	static readonly PERU: PXSite;

	static readonly USA: PXSite;

	static readonly VENEZUELA: PXSite;
}

declare class PXToken extends NSObject {

	static alloc(): PXToken; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXToken;

	static new(): PXToken; // inherited from NSObject

	cardId: string;

	cardholder: PXCardHolder;

	dateCreated: Date;

	dateLastUpdated: Date;

	dueDate: Date;

	esc: string;

	firstSixDigits: string;

	id: string;

	lastFourDigits: string;

	publicKey: string;

	status: string;

	usedDate: Date;

	toJSONAndReturnError(): NSData;
}

declare class PXTransactionDetails extends NSObject {

	static alloc(): PXTransactionDetails; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXTransactionDetails;

	static new(): PXTransactionDetails; // inherited from NSObject

	externalResourceUrl: string;

	financialInstitution: string;

	paymentMethodReferenceId: string;

	toJSONAndReturnError(): NSData;
}

declare class PXvendorSpecificAttributes extends NSObject {

	static alloc(): PXvendorSpecificAttributes; // inherited from NSObject

	static fromJSONWithDataError(data: NSData): PXvendorSpecificAttributes;

	static new(): PXvendorSpecificAttributes; // inherited from NSObject

	canMakePhoneCalls: number;

	canSendSMS: number;

	deviceIdiom: string;

	deviceLanguaje: string;

	deviceModel: string;

	deviceName: string;

	simulator: number;

	toJSONAndReturnError(): NSData;
}

declare class PaymentMethodSearchService extends MercadoPagoService {

	static alloc(): PaymentMethodSearchService; // inherited from NSObject

	static new(): PaymentMethodSearchService; // inherited from NSObject

	getPaymentMethodsCustomerEmailCustomerIdDefaultPaymenMethodIdExcludedPaymentTypeIdsExcludedPaymentMethodIdsSitePayerLanguageSuccessFailure(amount: number, customerEmail: string, customerId: string, defaultPaymenMethodId: string, excludedPaymentTypeIds: NSSet<string>, excludedPaymentMethodIds: NSSet<string>, site: PXSite, payer: PXPayer, language: string, success: (p1: PXPaymentMethodSearch) => void, failure: (p1: PXError) => void): void;
}

declare class PaymentService extends MercadoPagoService {

	static alloc(): PaymentService; // inherited from NSObject

	static new(): PaymentService; // inherited from NSObject

	getInstallmentsUriBinAmountIssuerIdPayment_method_idSuccessFailure(method: string, uri: string, bin: string, amount: number, issuerId: string, payment_method_id: string, success: (p1: NSArray<PXInstallment>) => void, failure: (p1: PXError) => void): void;

	getIssuersUriPayment_method_idBinSuccessFailure(method: string, uri: string, payment_method_id: string, bin: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;

	getPaymentMethodsUriSuccessFailure(method: string, uri: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;
}

declare class PreferenceService extends MercadoPagoService {

	static alloc(): PreferenceService; // inherited from NSObject

	static new(): PreferenceService; // inherited from NSObject
}

declare class PromosService extends MercadoPagoService {

	static alloc(): PromosService; // inherited from NSObject

	static new(): PromosService; // inherited from NSObject

	getPromosMethodPublic_keySuccessFailure(url: string, method: string, public_key: string, success: (p1: NSData) => void, failure: (p1: PXError) => void): void;
}
