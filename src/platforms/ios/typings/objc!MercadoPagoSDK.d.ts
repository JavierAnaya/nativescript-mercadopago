
declare class AddCouponViewController extends MercadoPagoUIViewController implements UITextFieldDelegate {

	static alloc(): AddCouponViewController; // inherited from NSObject

	static new(): AddCouponViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	editingChanged(textField: UITextField): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class AdditionalStepViewController extends MercadoPagoUIScrollViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): AdditionalStepViewController; // inherited from NSObject

	static new(): AdditionalStepViewController; // inherited from NSObject

	readonly viewModel: AdditionalStepViewModel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { viewModel: AdditionalStepViewModel; callback: (p1: NSObject) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithViewModelCallback(viewModel: AdditionalStepViewModel, callback: (p1: NSObject) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class AdditionalStepViewModel extends NSObject {

	static alloc(): AdditionalStepViewModel; // inherited from NSObject

	static new(): AdditionalStepViewModel; // inherited from NSObject

	amount: number;

	bankInterestWarningCellVisible: boolean;

	callback: (p1: NSObject) => void;

	cardSectionVisible: boolean;

	couponCallback: (p1: DiscountCoupon) => void;

	defaultRowCellHeight: number;

	defaultTitleCellHeight: number;

	discount: DiscountCoupon;

	email: string;

	readonly maxFontSize: number;

	mercadoPagoServicesAdapter: MercadoPagoServicesAdapter;

	paymentMethods: NSArray<PaymentMethod>;

	readonly screenId: string;

	readonly screenName: string;

	screenTitle: string;

	token: CardInformationForm;

	totalRowVisible: boolean;
}

declare class Address extends NSObject {

	static alloc(): Address; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Address;

	static new(): Address; // inherited from NSObject

	streetName: string;

	streetNumber: number;

	zipCode: string;

	constructor(o: { streetName: string; streetNumber: number; zipCode: string; });

	initWithStreetNameStreetNumberZipCode(streetName: string, streetNumber: number, zipCode: string): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class AmountInfo extends NSObject {

	static alloc(): AmountInfo; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): AmountInfo;

	static new(): AmountInfo; // inherited from NSObject

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class ApiException extends NSObject {

	static alloc(): ApiException; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): ApiException;

	static new(): ApiException; // inherited from NSObject

	cause: NSArray<Cause>;

	error: string;

	message: string;

	status: number;
}

declare class ApiParams extends NSObject {

	static alloc(): ApiParams; // inherited from NSObject

	static new(): ApiParams; // inherited from NSObject
}

declare class AvailableCardsViewController extends MercadoPagoUIViewController {

	static alloc(): AvailableCardsViewController; // inherited from NSObject

	static new(): AvailableCardsViewController; // inherited from NSObject
}

declare class BankDeal extends NSObject {

	static alloc(): BankDeal; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): BankDeal;

	static getDateFromString(string: string): Date;

	static new(): BankDeal; // inherited from NSObject

	issuer: Issuer;

	legals: string;

	paymentMethods: NSArray<PaymentMethod>;

	promoId: string;

	recommendedMessage: string;

	url: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class BinMask extends NSObject {

	static alloc(): BinMask; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): BinMask;

	static new(): BinMask; // inherited from NSObject

	exclusionPattern: string;

	installmentsPattern: string;

	pattern: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class BlacklabelPayment extends MPPayment {

	static alloc(): BlacklabelPayment; // inherited from NSObject

	static new(): BlacklabelPayment; // inherited from NSObject
}

declare class CallbackCancelTableViewCell extends UITableViewCell {

	static alloc(): CallbackCancelTableViewCell; // inherited from NSObject

	static appearance(): CallbackCancelTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CallbackCancelTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CallbackCancelTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CallbackCancelTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CallbackCancelTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CallbackCancelTableViewCell; // inherited from UIAppearance

	static new(): CallbackCancelTableViewCell; // inherited from NSObject
}

declare class Card extends NSObject implements CardInformation, PaymentMethodOption {

	static alloc(): Card; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Card;

	static new(): Card; // inherited from NSObject

	cardHolder: Cardholder;

	customerId: string;

	dateCreated: Date;

	dateLastUpdated: Date;

	expirationMonth: number;

	expirationYear: number;

	firstSixDigits: string;

	idCard: string;

	issuer: Issuer;

	lastFourDigits: string;

	paymentMethod: PaymentMethod;

	securityCode: SecurityCode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canBeClone(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCardBin(): string;

	getCardDescription(): string;

	getCardId(): string;

	getCardLastForDigits(): string;

	getCardSecurityCode(): SecurityCode;

	getChildren(): NSArray<PaymentMethodOption>;

	getComment(): string;

	getDescription(): string;

	getFirstSixDigits(): string;

	getId(): string;

	getImageDescription(): string;

	getIssuer(): Issuer;

	getPaymentMethod(): PaymentMethod;

	getPaymentMethodId(): string;

	getSubtitle(): string;

	getTitle(): string;

	hasChildren(): boolean;

	isCard(): boolean;

	isCustomerPaymentMethod(): boolean;

	isEqual(object: any): boolean;

	isIssuerRequired(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isSecurityCodeRequired(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupPaymentMethod(paymentMethod: PaymentMethod): void;

	setupPaymentMethodSettings(settings: NSArray<Setting>): void;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class CardBackView extends UIView {

	static alloc(): CardBackView; // inherited from NSObject

	static appearance(): CardBackView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CardBackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CardBackView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CardBackView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CardBackView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CardBackView; // inherited from UIAppearance

	static new(): CardBackView; // inherited from NSObject
}

declare class CardFormViewController extends MercadoPagoUIViewController implements UITextFieldDelegate {

	static alloc(): CardFormViewController; // inherited from NSObject

	static new(): CardFormViewController; // inherited from NSObject

	static setShowBankDeals(value: boolean): void;

	static showBankDeals: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { cardFormManager: CardFormViewModel; callback: (p1: NSArray<PaymentMethod>, p2: CardToken) => void; callbackCancel: () => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	editingChanged(textField: UITextField): void;

	initWithCardFormManagerCallbackCallbackCancel(cardFormManager: CardFormViewModel, callback: (p1: NSArray<PaymentMethod>, p2: CardToken) => void, callbackCancel: () => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	verPromociones(): void;
}

declare class CardFormViewModel extends NSObject {

	static alloc(): CardFormViewModel; // inherited from NSObject

	static new(): CardFormViewModel; // inherited from NSObject

	constructor(o: { amount: number; paymentMethods: NSArray<PaymentMethod>; guessedPaymentMethods: NSArray<PaymentMethod>; customerCard: CardInformation; token: Token; mercadoPagoServicesAdapter: MercadoPagoServicesAdapter; });

	initWithAmountPaymentMethodsGuessedPaymentMethodsCustomerCardTokenMercadoPagoServicesAdapter(amount: number, paymentMethods: NSArray<PaymentMethod>, guessedPaymentMethods: NSArray<PaymentMethod>, customerCard: CardInformation, token: Token, mercadoPagoServicesAdapter: MercadoPagoServicesAdapter): this;
}

declare class CardFrontView extends UIView {

	static alloc(): CardFrontView; // inherited from NSObject

	static appearance(): CardFrontView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CardFrontView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CardFrontView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): CardFrontView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CardFrontView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): CardFrontView; // inherited from UIAppearance

	static new(): CardFrontView; // inherited from NSObject

	finishLoad(): void;

	setCornerRadiusWithRadius(radius: number): void;

	updateCardWithTokenPaymentMethod(token: CardInformationForm, paymentMethod: PaymentMethod): void;
}

interface CardInformation extends CardInformationForm, PaymentOptionDrawable {

	getCardDescription(): string;

	getCardId(): string;

	getCardSecurityCode(): SecurityCode;

	getFirstSixDigits(): string;

	getIssuer(): Issuer;

	getPaymentMethod(): PaymentMethod;

	getPaymentMethodId(): string;

	isSecurityCodeRequired(): boolean;

	setupPaymentMethod(paymentMethod: PaymentMethod): void;

	setupPaymentMethodSettings(settings: NSArray<Setting>): void;
}
declare var CardInformation: {

	prototype: CardInformation;
};

interface CardInformationForm extends NSObjectProtocol {

	canBeClone(): boolean;

	getCardBin(): string;

	getCardLastForDigits(): string;

	isIssuerRequired(): boolean;
}
declare var CardInformationForm: {

	prototype: CardInformationForm;
};

declare class CardNumber extends NSObject {

	static alloc(): CardNumber; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): CardNumber;

	static new(): CardNumber; // inherited from NSObject

	length: number;

	validation: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class CardToken extends NSObject implements CardInformationForm {

	static alloc(): CardToken; // inherited from NSObject

	static new(): CardToken; // inherited from NSObject

	cardNumber: string;

	cardholder: Cardholder;

	device: Device;

	expirationMonth: number;

	expirationYear: number;

	securityCode: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { cardNumber: string; expirationMonth: number; expirationYear: number; securityCode: string; cardholderName: string; docType: string; docNumber: string; });

	canBeClone(): boolean;

	checkLuhnWithCardNumber(cardNumber: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getBin(): string;

	getCardBin(): string;

	getCardLastForDigits(): string;

	getExpirationDateFormated(): string;

	getNumberFormated(): string;

	hasMonthPassedMonth(year: number, month: number): boolean;

	hasYearPassed(year: number): boolean;

	initWithCardNumberExpirationMonthExpirationYearSecurityCodeCardholderNameDocTypeDocNumber(cardNumber: string, expirationMonth: number, expirationYear: number, securityCode: string, cardholderName: string, docType: string, docNumber: string): this;

	isCustomerPaymentMethod(): boolean;

	isEqual(object: any): boolean;

	isIssuerRequired(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	normalizeCardNumber(number: string): string;

	normalizeYear(year: number): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;

	validate(includeSecurityCode: boolean): boolean;

	validateCardNumber(paymentMethod: PaymentMethod): string;

	validateCardholderName(): string;

	validateExpMonth(month: number): boolean;

	validateExpYear(year: number): boolean;

	validateExpiryDate(): string;

	validateExpiryDateYear(month: number, year: number): string;

	validateIdentification(): string;

	validateIdentificationNumber(identificationType: IdentificationType): string;

	validateIdentificationType(): string;

	validateSecurityCode(securityCode: string): string;

	validateSecurityCodeWithPaymentMethod(paymentMethod: PaymentMethod): string;

	validateSecurityCodeWithPaymentMethodPaymentMethodBin(securityCode: string, paymentMethod: PaymentMethod, bin: string): string;
}

declare class Cardholder extends NSObject {

	static alloc(): Cardholder; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Cardholder;

	static new(): Cardholder; // inherited from NSObject

	identification: Identification;

	name: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class CardsAdminViewController extends MercadoPagoUIScrollViewController implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): CardsAdminViewController; // inherited from NSObject

	static new(): CardsAdminViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { viewModel: CardsAdminViewModel; callback: (p1: Card) => void; });

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithViewModelCallback(viewModel: CardsAdminViewModel, callback: (p1: Card) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class CardsAdminViewModel extends NSObject {

	static alloc(): CardsAdminViewModel; // inherited from NSObject

	static new(): CardsAdminViewModel; // inherited from NSObject

	constructor(o: { cards: NSArray<Card>; extraOptionTitle: string; confirmPromptText: string; });

	getAlertCardTitleWithCard(card: Card): string;

	getScreenTitle(): string;

	initWithCardsExtraOptionTitleConfirmPromptText(cards: NSArray<Card>, extraOptionTitle: string, confirmPromptText: string): this;

	numberOfItemsInSectionWithSection(section: number): number;

	setScreenTitleWithTitle(title: string): void;

	sizeForItemAtIndexPath(indexPath: NSIndexPath): CGSize;
}

declare class Cause extends NSObject {

	static alloc(): Cause; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Cause;

	static new(): Cause; // inherited from NSObject

	_description: string;

	code: string;
}

declare class CheckoutPreference extends NSObject {

	static alloc(): CheckoutPreference; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): CheckoutPreference;

	static new(): CheckoutPreference; // inherited from NSObject

	_id: string;

	expirationDateFrom: Date;

	expirationDateTo: Date;

	items: NSArray<Item>;

	payer: Payer;

	paymentPreference: PaymentPreference;

	siteId: string;

	constructor(o: { items: NSArray<Item>; payer: Payer; paymentMethods: PaymentPreference; });

	constructor(o: { _id: string; });

	addExcludedPaymentMethod(paymentMethodId: string): void;

	addExcludedPaymentType(paymentTypeId: string): void;

	addItemWithItem(item: Item): void;

	addItemsWithItems(items: NSArray<Item>): void;

	getActiveFromDate(): Date;

	getAmount(): number;

	getDefaultInstallments(): number;

	getDefaultPaymentMethodId(): string;

	getExcludedPaymentMethodsIds(): NSSet<string>;

	getExcludedPaymentTypesIds(): NSSet<string>;

	getExpirationDate(): Date;

	getId(): string;

	getItems(): NSArray<Item>;

	getMaxAcceptedInstallments(): number;

	getPayer(): Payer;

	getSiteId(): string;

	initWithItemsPayerPaymentMethods(items: NSArray<Item>, payer: Payer, paymentMethods: PaymentPreference): this;

	initWith_id(_id: string): this;

	isActive(): boolean;

	isExpired(): boolean;

	itemsValid(): string;

	setActiveFromDate(date: Date): void;

	setDefaultInstallments(defaultInstallments: number): void;

	setDefaultPaymentMethodId(paymetMethodId: string): void;

	setExcludedPaymentMethods(paymentMethodIds: NSSet<string>): void;

	setExcludedPaymentTypes(paymentTypeIds: NSSet<string>): void;

	setExpirationDate(expirationDate: Date): void;

	setId(id: string): void;

	setMaxInstallments(maxInstallments: number): void;

	setPayerEmail(payerEmail: string): void;

	setSiteWithSiteId(siteId: string): void;

	toJSONString(): string;

	validate(): string;
}

declare class CheckoutViewModel extends NSObject {

	static alloc(): CheckoutViewModel; // inherited from NSObject

	static new(): CheckoutViewModel; // inherited from NSObject

	static setCUSTOMER_ID(value: string): void;

	static CUSTOMER_ID: string;

	constructor(o: { checkoutPreference: CheckoutPreference; paymentData: PaymentData; paymentOptionSelected: PaymentMethodOption; discount: DiscountCoupon; reviewScreenPreference: ReviewScreenPreference; });

	initWithCheckoutPreferencePaymentDataPaymentOptionSelectedDiscountReviewScreenPreference(checkoutPreference: CheckoutPreference, paymentData: PaymentData, paymentOptionSelected: PaymentMethodOption, discount: DiscountCoupon, reviewScreenPreference: ReviewScreenPreference): this;
}

declare const enum CongratsState {

	Ok = 0,

	Cancel_SELECT_OTHER = 1,

	Cancel_RETRY = 2,

	Cancel_RECOVER = 3,

	Call_FOR_AUTH = 4
}

declare class CountdownTimer extends NSObject {

	static alloc(): CountdownTimer; // inherited from NSObject

	static getInstance(): CountdownTimer;

	static new(): CountdownTimer; // inherited from NSObject

	getCurrentTiming(): string;

	hasTimer(): boolean;

	setupWithSecondsTimeoutCallback(seconds: number, timeoutCallback: () => void): void;

	stopTimer(): void;

	updateTimer(): void;
}

declare class CouponDetailViewController extends MercadoPagoUIViewController {

	static alloc(): CouponDetailViewController; // inherited from NSObject

	static new(): CouponDetailViewController; // inherited from NSObject
}

declare class Currency extends NSObject {

	static alloc(): Currency; // inherited from NSObject

	static new(): Currency; // inherited from NSObject

	_description: string;

	_id: string;

	decimalSeparator: string;

	symbol: string;

	thousandsSeparator: string;

	constructor(o: { _id: string; description: string; symbol: string; decimalPlaces: number; decimalSeparator: string; thousandSeparator: string; });

	getCurrencySymbolOrDefault(): string;

	getDecimalPlacesOrDefault(): number;

	getDecimalSeparatorOrDefault(): string;

	getThousandsSeparatorOrDefault(): string;

	initWith_idDescriptionSymbolDecimalPlacesDecimalSeparatorThousandSeparator(_id: string, description: string, symbol: string, decimalPlaces: number, decimalSeparator: string, thousandSeparator: string): this;
}

declare class CustomServer extends NSObject {

	static alloc(): CustomServer; // inherited from NSObject

	static createCheckoutPreferenceWithUrlUriBodyInfoCallbackFailure(url: string, uri: string, bodyInfo: NSDictionary<any, any>, callback: (p1: CheckoutPreference) => void, failure: (p1: NSError) => void): void;

	static new(): CustomServer; // inherited from NSObject
}

declare class Customer extends NSObject {

	static alloc(): Customer; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Customer;

	static new(): Customer; // inherited from NSObject

	_description: string;

	_id: string;

	address: Address;

	cards: NSArray<Card>;

	dateCreated: Date;

	dateLastUpdated: Date;

	defaultCard: string;

	email: string;

	firstName: string;

	identification: Identification;

	lastName: string;

	metadata: NSDictionary<any, any>;

	registrationDate: Date;

	toJSONString(): string;
}

declare class CustomerPayment extends MPPayment {

	static alloc(): CustomerPayment; // inherited from NSObject

	static new(): CustomerPayment; // inherited from NSObject

	customerId: string;
}

declare class CustomerPaymentMethod extends NSObject implements CardInformation, PaymentMethodOption {

	static alloc(): CustomerPaymentMethod; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): CustomerPaymentMethod;

	static new(): CustomerPaymentMethod; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { id: string; paymentMethodId: string; paymentMethodTypeId: string; description: string; });

	canBeClone(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCardBin(): string;

	getCardDescription(): string;

	getCardId(): string;

	getCardLastForDigits(): string;

	getCardSecurityCode(): SecurityCode;

	getChildren(): NSArray<PaymentMethodOption>;

	getComment(): string;

	getDescription(): string;

	getFirstSixDigits(): string;

	getId(): string;

	getImageDescription(): string;

	getIssuer(): Issuer;

	getPaymentMethod(): PaymentMethod;

	getPaymentMethodId(): string;

	getSubtitle(): string;

	getTitle(): string;

	hasChildren(): boolean;

	initWithIdPaymentMethodIdPaymentMethodTypeIdDescription(id: string, paymentMethodId: string, paymentMethodTypeId: string, description: string): this;

	isCard(): boolean;

	isCustomerPaymentMethod(): boolean;

	isEqual(object: any): boolean;

	isIssuerRequired(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isSecurityCodeRequired(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setupPaymentMethod(paymentMethod: PaymentMethod): void;

	setupPaymentMethodSettings(settings: NSArray<Setting>): void;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class DecorationPreference extends NSObject {

	static alloc(): DecorationPreference; // inherited from NSObject

	static new(): DecorationPreference; // inherited from NSObject

	constructor(o: { baseColor: UIColor; });

	enableDarkFont(): void;

	enableLightFont(): void;

	getBaseColor(): UIColor;

	getFontColor(): UIColor;

	getFontName(): string;

	getLightFontName(): string;

	initWithBaseColor(baseColor: UIColor): this;

	setBaseColorWithColor(color: UIColor): void;

	setBaseColorWithHexColor(hexColor: string): void;

	setCustomFontWithName(name: string): void;

	setLightCustomFontWithName(name: string): void;

	setMercadoPagoBaseColor(): void;

	setMercadoPagoFont(): void;

	setMercadoPagoLightFont(): void;
}

declare class Device extends NSObject {

	static alloc(): Device; // inherited from NSObject

	static new(): Device; // inherited from NSObject

	fingerprint: Fingerprint;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class DiscountCoupon extends NSObject {

	static alloc(): DiscountCoupon; // inherited from NSObject

	static fromJSONAmount(json: NSDictionary<any, any>, amount: number): DiscountCoupon;

	static new(): DiscountCoupon; // inherited from NSObject

	static setActiveCoupon(value: DiscountCoupon): void;

	_id: string;

	amount: number;

	amount_off: string;

	concept_: string;

	coupon_amount: string;

	currency_id: string;

	name: string;

	percent_off: string;

	static activeCoupon: DiscountCoupon;

	getDescription(): string;

	getDiscountDescription(): string;

	getDiscountReviewDescription(): string;

	newAmount(): number;

	toJSONString(): string;
}

declare class EntityType extends NSObject {

	static alloc(): EntityType; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): EntityType;

	static new(): EntityType; // inherited from NSObject

	_id: string;

	name: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class ErrorViewController extends MercadoPagoUIViewController {

	static alloc(): ErrorViewController; // inherited from NSObject

	static new(): ErrorViewController; // inherited from NSObject

	static setDefaultErrorCancel(value: () => void): void;

	exitErrorCallback: () => void;

	static defaultErrorCancel: () => void;

	constructor(o: { error: MPSDKError; callback: () => void; callbackCancel: () => void; });

	initWithErrorCallbackCallbackCancel(error: MPSDKError, callback: () => void, callbackCancel: () => void): this;

	trackInfo(): void;
}

declare class FeesDetail extends NSObject {

	static alloc(): FeesDetail; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): FeesDetail;

	static new(): FeesDetail; // inherited from NSObject

	amount: number;

	amountRefunded: number;

	feePayer: string;

	type: string;

	toJSONString(): string;
}

declare class FinancialInstitution extends NSObject {

	static alloc(): FinancialInstitution; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): FinancialInstitution;

	static new(): FinancialInstitution; // inherited from NSObject

	_description: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class Fingerprint extends NSObject {

	static alloc(): Fingerprint; // inherited from NSObject

	static new(): Fingerprint; // inherited from NSObject

	fingerprint: NSDictionary<string, any>;

	deviceFingerprint(): NSDictionary<string, any>;

	devicesID(): NSArray<any>;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class FlowPreference extends NSObject {

	static alloc(): FlowPreference; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): FlowPreference;

	static new(): FlowPreference; // inherited from NSObject

	disableBankDeals(): void;

	disableDefaultSelection(): void;

	disableDiscount(): void;

	disableESC(): void;

	disableInstallmentsReviewScreen(): void;

	disablePaymentApprovedScreen(): void;

	disablePaymentPendingScreen(): void;

	disablePaymentRejectedScreen(): void;

	disablePaymentResultScreen(): void;

	disableReviewAndConfirmScreen(): void;

	enableBankDeals(): void;

	enableDefaultSelection(): void;

	enableDiscount(): void;

	enableESC(): void;

	enableInstallmentsReviewScreen(): void;

	enablePaymentApprovedScreen(): void;

	enablePaymentPendingScreen(): void;

	enablePaymentRejectedScreen(): void;

	enablePaymentResultScreen(): void;

	enableReviewAndConfirmScreen(): void;

	getMaxSavedCardsToShow(): number;

	isDiscountEnable(): boolean;

	isESCEnable(): boolean;

	isInstallmentsReviewScreenEnable(): boolean;

	isPaymentApprovedScreenEnable(): boolean;

	isPaymentPendingScreenEnable(): boolean;

	isPaymentRejectedScreenEnable(): boolean;

	isPaymentResultScreenEnable(): boolean;

	isPaymentSearchScreenEnable(): boolean;

	isReviewAndConfirmScreenEnable(): boolean;

	isShowAllSavedCardsEnabled(): boolean;

	setMaxSavedCardsToShowFromInt(fromInt: number): void;

	setMaxSavedCardsToShowFromString(fromString: string): void;
}

declare class GroupsPayer extends Payer {

	static alloc(): GroupsPayer; // inherited from NSObject

	static new(): GroupsPayer; // inherited from NSObject
}

declare class HoshiTextField extends TextFieldEffects {

	static alloc(): HoshiTextField; // inherited from NSObject

	static appearance(): HoshiTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): HoshiTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HoshiTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HoshiTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HoshiTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HoshiTextField; // inherited from UIAppearance

	static new(): HoshiTextField; // inherited from NSObject

	borderActiveColor: UIColor;

	borderInactiveColor: UIColor;

	placeholderColor: UIColor;

	placeholderFontScale: number;
}

declare class Identification extends NSObject {

	static alloc(): Identification; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Identification;

	static new(): Identification; // inherited from NSObject

	number: string;

	type: string;

	constructor(o: { identificationType: IdentificationType; identificationNumber: string; });

	constructor(o: { type: string; number: string; });

	initWithIdentificationTypeIdentificationNumber(identificationType: IdentificationType, identificationNumber: string): this;

	initWithTypeNumber(type: string, number: string): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class IdentificationCardView extends UIView {

	static alloc(): IdentificationCardView; // inherited from NSObject

	static appearance(): IdentificationCardView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IdentificationCardView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IdentificationCardView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): IdentificationCardView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IdentificationCardView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): IdentificationCardView; // inherited from UIAppearance

	static new(): IdentificationCardView; // inherited from NSObject

	setCornerRadiusWithRadius(radius: number): void;

	updateCardWithTokenPaymentMethod(token: CardInformationForm, paymentMethod: PaymentMethod): void;
}

declare class IdentificationType extends NSObject {

	static alloc(): IdentificationType; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): IdentificationType;

	static new(): IdentificationType; // inherited from NSObject

	_id: string;

	maxLength: number;

	minLength: number;

	name: string;

	type: string;

	toJSONString(): string;
}

declare class IdentificationViewController extends MercadoPagoUIViewController implements UIPickerViewDataSource, UIPickerViewDelegate, UITextFieldDelegate {

	static alloc(): IdentificationViewController; // inherited from NSObject

	static new(): IdentificationViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { identificationTypes: NSArray<IdentificationType>; callback: (p1: Identification) => void; errorExitCallback: () => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	donePicker(): void;

	editingChanged(textField: UITextField): void;

	initWithIdentificationTypesCallbackErrorExitCallback(identificationTypes: NSArray<IdentificationType>, callback: (p1: Identification) => void, errorExitCallback: () => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfComponentsInPickerView(pickerView: UIPickerView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pickerViewAttributedTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): NSAttributedString;

	pickerViewDidSelectRowInComponent(pickerView: UIPickerView, row: number, component: number): void;

	pickerViewNumberOfRowsInComponent(pickerView: UIPickerView, component: number): number;

	pickerViewRowHeightForComponent(pickerView: UIPickerView, component: number): number;

	pickerViewTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): string;

	pickerViewViewForRowForComponentReusingView(pickerView: UIPickerView, row: number, component: number, view: UIView): UIView;

	pickerViewWidthForComponent(pickerView: UIPickerView, component: number): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class Installment extends NSObject {

	static alloc(): Installment; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Installment;

	static new(): Installment; // inherited from NSObject

	issuer: Issuer;

	payerCosts: NSArray<PayerCost>;

	paymentMethodId: string;

	paymentTypeId: string;

	containsInstallment(installment: number): PayerCost;

	toJSONString(): string;
}

declare class Instruction extends NSObject {

	static alloc(): Instruction; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Instruction;

	static new(): Instruction; // inherited from NSObject

	accreditationComment: NSArray<string>;

	accreditationMessage: string;

	info: NSArray<string>;

	secondaryInfo: NSArray<string>;

	subtitle: string;

	tertiaryInfo: NSArray<string>;

	title: string;

	type: string;

	hasAccreditationComment(): boolean;

	hasAccreditationMessage(): boolean;

	hasActions(): boolean;

	hasSecondaryInformation(): boolean;

	hasSubtitle(): boolean;

	hasTitle(): boolean;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class InstructionsInfo extends NSObject {

	static alloc(): InstructionsInfo; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): InstructionsInfo;

	static new(): InstructionsInfo; // inherited from NSObject

	getInstruction(): Instruction;

	hasSecundaryInformation(): boolean;

	hasSubtitle(): boolean;

	toJSONString(): string;
}

declare class InstructionsViewController extends MercadoPagoUIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): InstructionsViewController; // inherited from NSObject

	static new(): InstructionsViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { paymentResult: PaymentResult; instructionsInfo: InstructionsInfo; callback: (p1: CongratsState) => void; paymentResultScreenPreference: PaymentResultScreenPreference; });

	constructor(o: { viewModel: InstructionsViewModel; callback: (p1: CongratsState) => void; paymentResultScreenPreference: PaymentResultScreenPreference; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithPaymentResultInstructionsInfoCallbackPaymentResultScreenPreference(paymentResult: PaymentResult, instructionsInfo: InstructionsInfo, callback: (p1: CongratsState) => void, paymentResultScreenPreference: PaymentResultScreenPreference): this;

	initWithViewModelCallbackPaymentResultScreenPreference(viewModel: InstructionsViewModel, callback: (p1: CongratsState) => void, paymentResultScreenPreference: PaymentResultScreenPreference): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class InstructionsViewModel extends NSObject {

	static alloc(): InstructionsViewModel; // inherited from NSObject

	static new(): InstructionsViewModel; // inherited from NSObject

	constructor(o: { paymentResult: PaymentResult; paymentResultScreenPreference: PaymentResultScreenPreference; instructionsInfo: InstructionsInfo; });

	initWithPaymentResultPaymentResultScreenPreferenceInstructionsInfo(paymentResult: PaymentResult, paymentResultScreenPreference: PaymentResultScreenPreference, instructionsInfo: InstructionsInfo): this;
}

declare class Issuer extends NSObject {

	static alloc(): Issuer; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Issuer;

	static new(): Issuer; // inherited from NSObject

	_id: string;

	name: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class Item extends NSObject {

	static alloc(): Item; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Item;

	static new(): Item; // inherited from NSObject

	_description: string;

	_id: string;

	categoryId: string;

	currencyId: string;

	pictureUrl: string;

	title: string;

	constructor(o: { _id: string; title: string; quantity: number; unitPrice: number; description: string; currencyId: string; });

	initWith_idTitleQuantityUnitPriceDescriptionCurrencyId(_id: string, title: string, quantity: number, unitPrice: number, description: string, currencyId: string): this;

	toJSONString(): string;

	validate(): string;
}

declare const enum Languages {

	SPANISH = 0,

	SPANISH_MEXICO = 1,

	SPANISH_COLOMBIA = 2,

	SPANISH_URUGUAY = 3,

	SPANISH_PERU = 4,

	SPANISH_VENEZUELA = 5,

	PORTUGUESE = 6,

	ENGLISH = 7
}

declare class MLPXSpinner extends UIView {

	static alloc(): MLPXSpinner; // inherited from NSObject

	static appearance(): MLPXSpinner; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MLPXSpinner; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MLPXSpinner; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MLPXSpinner; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MLPXSpinner; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MLPXSpinner; // inherited from UIAppearance

	static new(): MLPXSpinner; // inherited from NSObject

	constructor(o: { config: MLPXSpinnerConfig; text: string; });

	constructor(o: { style: MLPXSpinnerStyle; });

	constructor(o: { style: MLPXSpinnerStyle; text: string; });

	hideSpinner(): void;

	initWithConfigText(config: MLPXSpinnerConfig, text: string): this;

	initWithStyle(style: MLPXSpinnerStyle): this;

	initWithStyleText(style: MLPXSpinnerStyle, text: string): this;

	setStyle(style: MLPXSpinnerStyle): void;

	setText(spinnerText: string): void;

	setUpSpinnerWithConfig(config: MLPXSpinnerConfig): void;

	showSpinner(): void;
}

declare class MLPXSpinnerConfig extends NSObject {

	static alloc(): MLPXSpinnerConfig; // inherited from NSObject

	static new(): MLPXSpinnerConfig; // inherited from NSObject

	primaryColor: UIColor;

	secondaryColor: UIColor;

	spinnerSize: MLPXSpinnerSize;

	constructor(o: { size: MLPXSpinnerSize; primaryColor: UIColor; secondaryColor: UIColor; });

	initWithSizePrimaryColorSecondaryColor(size: MLPXSpinnerSize, primaryColor: UIColor, secondaryColor: UIColor): this;
}

declare const enum MLPXSpinnerSize {

	Big = 0,

	Small = 1
}

declare const enum MLPXSpinnerStyle {

	BlueBig = 0,

	WhiteBig = 1,

	BlueSmall = 2,

	WhiteSmall = 3
}

declare class MPButton extends UIButton {

	static alloc(): MPButton; // inherited from NSObject

	static appearance(): MPButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MPButton; // inherited from UIButton

	static new(): MPButton; // inherited from NSObject
}

declare class MPCardFormToolbarLabel extends MPLabel {

	static alloc(): MPCardFormToolbarLabel; // inherited from NSObject

	static appearance(): MPCardFormToolbarLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPCardFormToolbarLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPCardFormToolbarLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPCardFormToolbarLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPCardFormToolbarLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPCardFormToolbarLabel; // inherited from UIAppearance

	static new(): MPCardFormToolbarLabel; // inherited from NSObject
}

interface MPCellContentProvider extends NSObjectProtocol {

	getHeight(): number;
}
declare var MPCellContentProvider: {

	prototype: MPCellContentProvider;
};

declare class MPCustomCell extends NSObject {

	static alloc(): MPCustomCell; // inherited from NSObject

	static new(): MPCustomCell; // inherited from NSObject

	constructor(o: { cell: UITableViewCell; });

	getDelegate(): MPCustomRowDelegate;

	getHeight(): number;

	getTableViewCell(): UITableViewCell;

	initWithCell(cell: UITableViewCell): this;

	setDelegateWithDelegate(delegate: MPCustomRowDelegate): void;
}

interface MPCustomRowDelegate {

	invokeCallbackWithPaymentDataWithRowCallback?(rowCallback: (p1: PaymentData) => void): void;

	invokeCallbackWithPaymentResultWithRowCallback?(rowCallback: (p1: PaymentResult) => void): void;
}
declare var MPCustomRowDelegate: {

	prototype: MPCustomRowDelegate;
};

declare class MPLabel extends UILabel {

	static alloc(): MPLabel; // inherited from NSObject

	static appearance(): MPLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPLabel; // inherited from UIAppearance

	static new(): MPLabel; // inherited from NSObject
}

declare class MPPayment extends NSObject {

	static alloc(): MPPayment; // inherited from NSObject

	static new(): MPPayment; // inherited from NSObject

	binaryMode: boolean;

	installments: number;

	issuerId: string;

	payer: Payer;

	paymentMethodId: string;

	preferenceId: string;

	publicKey: string;

	tokenId: string;

	transactionDetails: TransactionDetails;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class MPSDKError extends NSObject {

	static alloc(): MPSDKError; // inherited from NSObject

	static convertFromRequestOrigin(error: NSError, requestOrigin: string): MPSDKError;

	static new(): MPSDKError; // inherited from NSObject

	apiException: ApiException;

	errorDetail: string;

	message: string;

	requestOrigin: string;
}

declare class MPSDKLoadingView extends UIView {

	static alloc(): MPSDKLoadingView; // inherited from NSObject

	static appearance(): MPSDKLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPSDKLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPSDKLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPSDKLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPSDKLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPSDKLoadingView; // inherited from UIAppearance

	static new(): MPSDKLoadingView; // inherited from NSObject

	constructor(o: { backgroundColor: UIColor; });

	constructor(o: { backgroundColor: UIColor; loadingText: string; });

	constructor(o: { frame: CGRect; backgroundColor: UIColor; });

	constructor(o: { frame: CGRect; backgroundColor: UIColor; loadingText: string; });

	constructor(o: { loadingColor: UIColor; });

	initWithBackgroundColor(color: UIColor): this;

	initWithBackgroundColorLoadingText(color: UIColor, text: string): this;

	initWithFrameBackgroundColor(frame: CGRect, color: UIColor): this;

	initWithFrameBackgroundColorLoadingText(frame: CGRect, color: UIColor, text: string): this;

	initWithLoadingColor(loadingColor: UIColor): this;
}

declare class MPTextField extends UITextField {

	static alloc(): MPTextField; // inherited from NSObject

	static appearance(): MPTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPTextField; // inherited from UIAppearance

	static new(): MPTextField; // inherited from NSObject
}

declare class MPTextView extends UITextView {

	static alloc(): MPTextView; // inherited from NSObject

	static appearance(): MPTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MPTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MPTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MPTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MPTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MPTextView; // inherited from UIAppearance

	static new(): MPTextView; // inherited from NSObject
}

declare class MercadoPago extends NSObject implements UIAlertViewDelegate {

	static alloc(): MercadoPago; // inherited from NSObject

	static getBundle(): NSBundle;

	static getCardDefaultLogo(): UIImage;

	static getColorForSettings(paymentMethod: PaymentMethod, settings: NSArray<Setting>): UIColor;

	static getEditingFontColorForSettings(paymentMethod: PaymentMethod, settings: NSArray<Setting>): UIColor;

	static getFontColorForSettings(paymentMethod: PaymentMethod, settings: NSArray<Setting>): UIColor;

	static getImage(name: string): UIImage;

	static getImageBundle(name: string, bundle: NSBundle): UIImage;

	static getImageForCardInformation(cardInformation: CardInformation): UIImage;

	static getImageForPaymentMethodWithDescriptionDefaultColor(withDescription: string, defaultColor: boolean): UIImage;

	static getOfflineReviewAndConfirmImage(paymentMethod: PaymentMethod): UIImage;

	static isCardPaymentType(paymentTypeId: string): boolean;

	static new(): MercadoPago; // inherited from NSObject

	static screenBoundsFixedToPortraitOrientation(): CGRect;

	static showAlertViewWithErrorNav(error: NSError, nav: UINavigationController): void;

	paymentMethodId: string;

	paymentTypeId: string;

	pk: string;

	privateKey: string;

	static readonly DEFAULT_FONT_NAME: string;

	static readonly ERROR_API_CODE: number;

	static readonly ERROR_INSTRUCTIONS: number;

	static readonly ERROR_KEY_CODE: number;

	static readonly ERROR_NOT_INSTALLMENTS_FOUND: number;

	static readonly ERROR_PAYMENT: number;

	static readonly ERROR_UNKNOWN_CODE: number;

	static readonly PRIVATE_KEY: string;

	static readonly PUBLIC_KEY: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { keyType: string; key: string; });

	constructor(o: { publicKey: string; });

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentAlertView(alertView: UIAlertView): void;

	initWithKeyTypeKey(keyType: string, key: string): this;

	initWithPublicKey(publicKey: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	publicKey(): string;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPresentAlertView(alertView: UIAlertView): void;
}

declare class MercadoPagoCheckout extends NSObject {

	static alloc(): MercadoPagoCheckout; // inherited from NSObject

	static new(): MercadoPagoCheckout; // inherited from NSObject

	static setChangePaymentMethodCallbackWithChangePaymentMethodCallback(changePaymentMethodCallback: () => void): void;

	static setDecorationPreference(decorationPreference: DecorationPreference): void;

	static setFinishFlowCallbackWithFinishFlowCallback(finishFlowCallback: (p1: Payment) => void): void;

	static setFlowPreference(flowPreference: FlowPreference): void;

	static setLanguageWithLanguage(language: Languages): void;

	static setPaymentCallbackWithPaymentCallback(paymentCallback: (p1: Payment) => void): void;

	static setPaymentDataCallbackWithPaymentDataCallback(paymentDataCallback: (p1: PaymentData) => void): void;

	static setPaymentDataConfirmCallbackWithPaymentDataConfirmCallback(paymentDataConfirmCallback: (p1: PaymentData) => void): void;

	static setServicePreference(servicePreference: ServicePreference): void;

	static showBankInterestWarning(): boolean;

	static showPayerCostDescription(): boolean;

	constructor(o: { publicKey: string; accessToken: string; checkoutPreference: CheckoutPreference; discount: DiscountCoupon; navigationController: UINavigationController; });

	constructor(o: { publicKey: string; accessToken: string; checkoutPreference: CheckoutPreference; paymentData: PaymentData; discount: DiscountCoupon; navigationController: UINavigationController; });

	constructor(o: { publicKey: string; accessToken: string; checkoutPreference: CheckoutPreference; paymentData: PaymentData; paymentResult: PaymentResult; discount: DiscountCoupon; navigationController: UINavigationController; });

	constructor(o: { publicKey: string; checkoutPreference: CheckoutPreference; discount: DiscountCoupon; navigationController: UINavigationController; });

	constructor(o: { publicKey: string; checkoutPreference: CheckoutPreference; paymentData: PaymentData; discount: DiscountCoupon; navigationController: UINavigationController; });

	constructor(o: { publicKey: string; checkoutPreference: CheckoutPreference; paymentData: PaymentData; paymentResult: PaymentResult; discount: DiscountCoupon; navigationController: UINavigationController; });

	goToRootViewController(): void;

	initWithPublicKeyAccessTokenCheckoutPreferenceDiscountNavigationController(publicKey: string, accessToken: string, checkoutPreference: CheckoutPreference, discount: DiscountCoupon, navigationController: UINavigationController): this;

	initWithPublicKeyAccessTokenCheckoutPreferencePaymentDataDiscountNavigationController(publicKey: string, accessToken: string, checkoutPreference: CheckoutPreference, paymentData: PaymentData, discount: DiscountCoupon, navigationController: UINavigationController): this;

	initWithPublicKeyAccessTokenCheckoutPreferencePaymentDataPaymentResultDiscountNavigationController(publicKey: string, accessToken: string, checkoutPreference: CheckoutPreference, paymentData: PaymentData, paymentResult: PaymentResult, discount: DiscountCoupon, navigationController: UINavigationController): this;

	initWithPublicKeyCheckoutPreferenceDiscountNavigationController(publicKey: string, checkoutPreference: CheckoutPreference, discount: DiscountCoupon, navigationController: UINavigationController): this;

	initWithPublicKeyCheckoutPreferencePaymentDataDiscountNavigationController(publicKey: string, checkoutPreference: CheckoutPreference, paymentData: PaymentData, discount: DiscountCoupon, navigationController: UINavigationController): this;

	initWithPublicKeyCheckoutPreferencePaymentDataPaymentResultDiscountNavigationController(publicKey: string, checkoutPreference: CheckoutPreference, paymentData: PaymentData, paymentResult: PaymentResult, discount: DiscountCoupon, navigationController: UINavigationController): this;

	popToWhenFinishWithViewController(viewController: UIViewController): void;

	resume(): void;

	setBinaryMode(binaryMode: boolean): void;

	setCallbackCancelWithCallback(callback: () => void): void;

	setCheckoutPreferenceWithCheckoutPreference(checkoutPreference: CheckoutPreference): void;

	setPaymentDataWithPaymentData(paymentData: PaymentData): void;

	setPaymentResultScreenPreference(paymentResultScreenPreference: PaymentResultScreenPreference): void;

	setPaymentResultWithPaymentResult(paymentResult: PaymentResult): void;

	setReviewScreenPreference(reviewScreenPreference: ReviewScreenPreference): void;

	start(): void;

	updateReviewAndConfirm(): void;
}

declare class MercadoPagoCheckoutViewModel extends NSObject {

	static alloc(): MercadoPagoCheckoutViewModel; // inherited from NSObject

	static createMPPaymentWithPreferenceIdPaymentDataCustomerIdBinaryMode(preferenceId: string, paymentData: PaymentData, customerId: string, binaryMode: boolean): MPPayment;

	static new(): MercadoPagoCheckoutViewModel; // inherited from NSObject

	entityTypes: NSArray<EntityType>;

	financialInstitutions: NSArray<FinancialInstitution>;

	instructionsInfo: InstructionsInfo;

	issuers: NSArray<Issuer>;

	payerCosts: NSArray<PayerCost>;

	cardFormManager(): CardFormViewModel;

	checkoutViewModel(): CheckoutViewModel;

	cloneTokenSecurityCodeViewModel(): SecurityCodeViewModel;

	entityTypeViewModel(): AdditionalStepViewModel;

	financialInstitutionViewModel(): AdditionalStepViewModel;

	getPaymentMethodsForSelection(): NSArray<PaymentMethod>;

	getPaymentPreferences(): PaymentPreference;

	isCheckoutComplete(): boolean;

	issuerViewModel(): AdditionalStepViewModel;

	payerCostViewModel(): AdditionalStepViewModel;

	savedCardSecurityCodeViewModel(): SecurityCodeViewModel;

	setIsCheckoutCompleteWithIsCheckoutComplete(isCheckoutComplete: boolean): void;

	updateCheckoutModelWithEntityType(entityType: EntityType): void;

	updateCheckoutModelWithFinancialInstitution(financialInstitution: FinancialInstitution): void;

	updateCheckoutModelWithIdentification(identification: Identification): void;

	updateCheckoutModelWithIdentificationTypes(identificationTypes: NSArray<IdentificationType>): void;

	updateCheckoutModelWithIssuer(issuer: Issuer): void;

	updateCheckoutModelWithPayer(payer: Payer): void;

	updateCheckoutModelWithPayerCost(payerCost: PayerCost): void;

	updateCheckoutModelWithPayment(payment: Payment): void;

	updateCheckoutModelWithPaymentMethod(paymentMethod: PaymentMethod): void;

	updateCheckoutModelWithPaymentMethodOptions(paymentMethodOptions: NSArray<PaymentMethodOption>): void;

	updateCheckoutModelWithPaymentMethodsCardToken(paymentMethods: NSArray<PaymentMethod>, cardToken: CardToken): void;

	updateCheckoutModelWithPaymentOptionSelected(paymentOptionSelected: PaymentMethodOption): void;

	updateCheckoutModelWithToken(token: Token): void;
}

declare class MercadoPagoContext extends NSObject {

	static accountMoneyAvailable(): boolean;

	static alloc(): MercadoPagoContext; // inherited from NSObject

	static clearPaymentKey(): void;

	static getCurrency(): Currency;

	static getLanguage(): string;

	static getLocalizedPath(): string;

	static getSite(): string;

	static getTermsAndConditionsSite(): string;

	static isAuthenticatedUser(): boolean;

	static merchantAccessToken(): string;

	static new(): MercadoPagoContext; // inherited from NSObject

	static payerAccessToken(): string;

	static paymentKey(): string;

	static publicKey(): string;

	static setAccountMoneyAvailableWithAccountMoneyAvailable(accountMoneyAvailable: boolean): void;

	static setDisplayDefaultLoadingWithFlag(flag: boolean): void;

	static setLanguageWithLanguage(language: Languages): void;

	static setMerchantAccessTokenWithMerchantAT(merchantAT: string): void;

	static setPayerAccessToken(payerAccessToken: string): void;

	static setPublicKey(public_key: string): void;

	static setSiteID(siteId: string): void;

	static shouldDisplayDefaultLoading(): boolean;

	framework(): string;

	publicKey(): string;

	sdkVersion(): string;

	siteId(): string;
}

interface MercadoPagoESC extends NSObjectProtocol {

	deleteAllESC(): void;

	deleteESCWithCardId(cardId: string): void;

	getESCWithCardId(cardId: string): string;

	hasESCEnable(): boolean;

	saveESCWithCardIdEsc(cardId: string, esc: string): boolean;
}
declare var MercadoPagoESC: {

	prototype: MercadoPagoESC;
};

declare class MercadoPagoESCImplementation extends NSObject implements MercadoPagoESC {

	static alloc(): MercadoPagoESCImplementation; // inherited from NSObject

	static new(): MercadoPagoESCImplementation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteAllESC(): void;

	deleteESCWithCardId(cardId: string): void;

	getESCWithCardId(cardId: string): string;

	hasESCEnable(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveESCWithCardIdEsc(cardId: string, esc: string): boolean;

	self(): this;
}

declare var MercadoPagoSDKVersionNumber: number;

declare var MercadoPagoSDKVersionNumberVar: number;

declare var MercadoPagoSDKVersionString: interop.Reference<number>;

declare var MercadoPagoSDKVersionStringVar: interop.Reference<number>;

declare class MercadoPagoServicesAdapter extends NSObject {

	static alloc(): MercadoPagoServicesAdapter; // inherited from NSObject

	static new(): MercadoPagoServicesAdapter; // inherited from NSObject

	cloneTokenWithTokenIdSecurityCodeCallbackFailure(tokenId: string, securityCode: string, callback: (p1: Token) => void, failure: (p1: NSError) => void): void;

	createCheckoutPreferenceWithUrlUriBodyInfoCallbackFailure(url: string, uri: string, bodyInfo: NSDictionary<any, any>, callback: (p1: CheckoutPreference) => void, failure: (p1: NSError) => void): void;

	createPaymentWithUrlUriTransactionIdPaymentDataQueryCallbackFailure(url: string, uri: string, transactionId: string, paymentData: NSDictionary<any, any>, query: NSDictionary<string, string>, callback: (p1: Payment) => void, failure: (p1: NSError) => void): void;

	createTokenWithCardTokenCallbackFailure(cardToken: CardToken, callback: (p1: Token) => void, failure: (p1: NSError) => void): void;

	createTokenWithSavedCardTokenCallbackFailure(savedCardToken: SavedCardToken, callback: (p1: Token) => void, failure: (p1: NSError) => void): void;

	createTokenWithSavedESCCardTokenCallbackFailure(savedESCCardToken: SavedESCCardToken, callback: (p1: Token) => void, failure: (p1: NSError) => void): void;

	getAddressFromPXAddress(pxAddress: PXAddress): Address;

	getAmountInfoFromPXAmountInfo(pxAmountInfo: PXAmountInfo): AmountInfo;

	getBankDealFromPXBankDeal(pxBankDeal: PXBankDeal): BankDeal;

	getBankDealsWithCallbackFailure(callback: (p1: NSArray<BankDeal>) => void, failure: (p1: NSError) => void): void;

	getBinMaskFromPXBin(pxBin: PXBin): BinMask;

	getCardFromPXCard(pxCard: PXCard): Card;

	getCardNumberFromPXCardNumber(pxCardNumber: PXCardNumber): CardNumber;

	getCardholderFromPXCardHolder(pxCardHolder: PXCardHolder): Cardholder;

	getCheckoutPreferenceFromPXCheckoutPreference(pxCheckoutPreference: PXCheckoutPreference): CheckoutPreference;

	getCheckoutPreferenceWithCheckoutPreferenceIdCallbackFailure(checkoutPreferenceId: string, callback: (p1: CheckoutPreference) => void, failure: (p1: NSError) => void): void;

	getCodeDiscountWithAmountPayerEmailCouponCodeCallbackFailure(amount: number, payerEmail: string, couponCode: string, callback: (p1: DiscountCoupon) => void, failure: (p1: NSError) => void): void;

	getCurrencyFromPXCurrency(pxCurrency: PXCurrency): Currency;

	getCustomerFromPXCustomer(pxCustomer: PXCustomer): Customer;

	getCustomerPaymentMethodFromPXCustomOptionSearchItem(pxCustomOptionSearchItem: PXCustomOptionSearchItem): CustomerPaymentMethod;

	getCustomerWithCallbackFailure(callback: (p1: Customer) => void, failure: (p1: NSError) => void): void;

	getDirectDiscountWithAmountPayerEmailCallbackFailure(amount: number, payerEmail: string, callback: (p1: DiscountCoupon) => void, failure: (p1: NSError) => void): void;

	getDiscountCouponFromPXDiscountAmount(pxDiscount: PXDiscount, amount: number): DiscountCoupon;

	getEntityTypeFromId(entityTypeId: string): EntityType;

	getFeesDetailFromPXFeeDetail(pxFeeDetail: PXFeeDetail): FeesDetail;

	getFinancialInstitutionFromId(financialInstitutionId: string): FinancialInstitution;

	getFinancialInstitutionFromPXFinancialInstitution(pxFinancialInstitution: PXFinancialInstitution): FinancialInstitution;

	getIdentificationFromPXIdentification(pxIdentification: PXIdentification): Identification;

	getIdentificationTypeFromPXIdentificationType(pxIdentificationType: PXIdentificationType): IdentificationType;

	getIdentificationTypesWithCallbackFailure(callback: (p1: NSArray<IdentificationType>) => void, failure: (p1: NSError) => void): void;

	getInstallmentFromPXInstallment(pxInstallment: PXInstallment): Installment;

	getInstallmentsWithBinAmountIssuerPaymentMethodIdCallbackFailure(bin: string, amount: number, issuer: Issuer, paymentMethodId: string, callback: (p1: NSArray<Installment>) => void, failure: (p1: NSError) => void): void;

	getInstructionFromPXInstruction(pxInstruction: PXInstruction): Instruction;

	getInstructionsInfoFromPXInstructions(pxInstructions: PXInstructions): InstructionsInfo;

	getInstructionsWithPaymentIdPaymentTypeIdCallbackFailure(paymentId: string, paymentTypeId: string, callback: (p1: InstructionsInfo) => void, failure: (p1: NSError) => void): void;

	getIssuerFromPXIssuer(pxIssuer: PXIssuer): Issuer;

	getIssuersWithPaymentMethodIdBinCallbackFailure(paymentMethodId: string, bin: string, callback: (p1: NSArray<Issuer>) => void, failure: (p1: NSError) => void): void;

	getItemFromPXItem(pxItem: PXItem): Item;

	getOrderFromPXOrder(pxOrder: PXOrder): Order;

	getPXCardHolderFromCardHolder(cardHolder: Cardholder): PXCardHolder;

	getPXCardTokenFromCardToken(cardToken: CardToken): PXCardToken;

	getPXCurrencyFromCurrency(currency: Currency): PXCurrency;

	getPXDeviceFromDevice(device: Device): PXDevice;

	getPXFingerprintFromFingerprint(fingerprint: Fingerprint): PXFingerprint;

	getPXIdentificationFromIdentification(identification: Identification): PXIdentification;

	getPXPayerFromPayer(payer: Payer): PXPayer;

	getPXSavedCardTokenFromSavedCardToken(savedCardToken: SavedCardToken): PXSavedCardToken;

	getPXSavedESCCardTokenFromSavedESCCardToken(savedESCCardToken: SavedESCCardToken): PXSavedESCCardToken;

	getPXSiteFromId(siteId: string): PXSite;

	getPayerCostFromPXPayerCost(pxPayerCost: PXPayerCost): PayerCost;

	getPayerFromPXPayer(pxPayer: PXPayer): Payer;

	getPaymentFromPXPayment(pxPayment: PXPayment): Payment;

	getPaymentMethodFromPXPaymentMethod(pxPaymentMethod: PXPaymentMethod): PaymentMethod;

	getPaymentPreferenceFromPXPaymentPreference(pxPaymentPreference: PXPaymentPreference): PaymentPreference;

	getRefundFromPXRefund(pxRefund: PXRefund): Refund;

	getSecurityCodeFromPXSecurityCode(pxSecurityCode: PXSecurityCode): SecurityCode;

	getSettingFromPXSetting(pxSetting: PXSetting): Setting;

	getStringDateFromDate(date: Date): string;

	getTokenFromPXToken(pxToken: PXToken): Token;

	getTransactionDetailsFromPXTransactionDetails(pxTransactionDetails: PXTransactionDetails): TransactionDetails;
}

declare class MercadoPagoUIScrollViewController extends MercadoPagoUIViewController {

	static alloc(): MercadoPagoUIScrollViewController; // inherited from NSObject

	static new(): MercadoPagoUIScrollViewController; // inherited from NSObject
}

declare class MercadoPagoUIViewController extends UIViewController implements UIGestureRecognizerDelegate {

	static alloc(): MercadoPagoUIViewController; // inherited from NSObject

	static new(): MercadoPagoUIViewController; // inherited from NSObject

	callbackCancel: () => void;

	readonly screenId: string;

	readonly screenName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rightButtonClose(): void;

	rightButtonShoppingCart(): void;

	self(): this;
}

declare class MerchantPayment extends NSObject {

	static alloc(): MerchantPayment; // inherited from NSObject

	static new(): MerchantPayment; // inherited from NSObject

	campaignId: number;

	cardTokenId: string;

	installments: number;

	issuer: Issuer;

	items: NSArray<Item>;

	merchantAccessToken: string;

	paymentMethod: PaymentMethod;

	constructor(o: { items: NSArray<Item>; installments: number; cardIssuer: Issuer; tokenId: string; paymentMethod: PaymentMethod; campaignId: number; });

	initWithItemsInstallmentsCardIssuerTokenIdPaymentMethodCampaignId(items: NSArray<Item>, installments: number, cardIssuer: Issuer, tokenId: string, paymentMethod: PaymentMethod, campaignId: number): this;

	toJSONString(): string;
}

declare class Order extends NSObject {

	static alloc(): Order; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Order;

	static new(): Order; // inherited from NSObject

	_id: number;

	type: string;
}

declare class PXSDKSettings extends NSObject {

	static alloc(): PXSDKSettings; // inherited from NSObject

	static enableBetaServices(): void;

	static new(): PXSDKSettings; // inherited from NSObject
}

declare class Payer extends NSObject {

	static alloc(): Payer; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Payer;

	static new(): Payer; // inherited from NSObject

	_id: string;

	address: Address;

	email: string;

	entityType: EntityType;

	identification: Identification;

	name: string;

	surname: string;

	constructor(o: { _id: string; email: string; identification: Identification; entityType: EntityType; });

	initWith_idEmailIdentificationEntityType(_id: string, email: string, identification: Identification, entityType: EntityType): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class PayerCost extends NSObject {

	static alloc(): PayerCost; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): PayerCost;

	static new(): PayerCost; // inherited from NSObject

	installmentAmount: number;

	installmentRate: number;

	installments: number;

	labels: NSArray<string>;

	maxAllowedAmount: number;

	minAllowedAmount: number;

	recommendedMessage: string;

	totalAmount: number;

	constructor(o: { installments: number; installmentRate: number; labels: NSArray<string>; minAllowedAmount: number; maxAllowedAmount: number; recommendedMessage: string; installmentAmount: number; totalAmount: number; });

	getCFTValue(): string;

	getTEAValue(): string;

	hasCFTValue(): boolean;

	hasInstallmentsRate(): boolean;

	initWithInstallmentsInstallmentRateLabelsMinAllowedAmountMaxAllowedAmountRecommendedMessageInstallmentAmountTotalAmount(installments: number, installmentRate: number, labels: NSArray<string>, minAllowedAmount: number, maxAllowedAmount: number, recommendedMessage: string, installmentAmount: number, totalAmount: number): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class Payment extends NSObject {

	static alloc(): Payment; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Payment;

	static new(): Payment; // inherited from NSObject

	_description: string;

	_id: string;

	callForAuthorizeId: string;

	card: Card;

	collectorId: string;

	couponAmount: number;

	currencyId: string;

	dateApproved: Date;

	dateCreated: Date;

	dateLastUpdated: Date;

	differentialPricingId: number;

	externalReference: string;

	feesDetails: NSArray<FeesDetail>;

	installments: number;

	issuerId: number;

	metadata: NSObject;

	moneyReleaseDate: Date;

	notificationUrl: string;

	order: Order;

	payer: Payer;

	paymentMethodId: string;

	paymentTypeId: string;

	refunds: NSArray<Refund>;

	statementDescriptor: string;

	status: string;

	statusDetail: string;

	tokenId: string;

	transactionAmount: number;

	transactionAmountRefunded: number;

	transactionDetails: TransactionDetails;

	isRejected(): boolean;

	toJSONString(): string;
}

declare class PaymentData extends NSObject {

	static alloc(): PaymentData; // inherited from NSObject

	static new(): PaymentData; // inherited from NSObject

	discount: DiscountCoupon;

	issuer: Issuer;

	payer: Payer;

	payerCost: PayerCost;

	paymentMethod: PaymentMethod;

	token: Token;

	transactionDetails: TransactionDetails;

	cleanPayerCost(): void;

	cleanToken(): void;

	getIssuer(): Issuer;

	getPayerCost(): PayerCost;

	getPaymentMethod(): PaymentMethod;

	getToken(): Token;

	updatePaymentDataWithIssuer(issuer: Issuer): void;

	updatePaymentDataWithPayer(payer: Payer): void;

	updatePaymentDataWithPayerCost(payerCost: PayerCost): void;

	updatePaymentDataWithPaymentMethod(paymentMethod: PaymentMethod): void;

	updatePaymentDataWithToken(token: Token): void;
}

declare class PaymentMethod extends NSObject {

	static alloc(): PaymentMethod; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): PaymentMethod;

	static new(): PaymentMethod; // inherited from NSObject

	_id: string;

	additionalInfoNeeded: NSArray<string>;

	deferredCapture: string;

	financialInstitutions: NSArray<FinancialInstitution>;

	readonly isAccountMoney: boolean;

	readonly isAmex: boolean;

	readonly isCard: boolean;

	readonly isCreditCard: boolean;

	readonly isEntityTypeRequired: boolean;

	readonly isIdentificationRequired: boolean;

	readonly isIdentificationTypeRequired: boolean;

	readonly isIssuerRequired: boolean;

	readonly isMASTERCARD: boolean;

	readonly isOnlinePaymentMethod: boolean;

	readonly isPayerInfoRequired: boolean;

	readonly isVISA: boolean;

	merchantAccountId: string;

	minAllowedAmount: number;

	name: string;

	paymentTypeId: string;

	secureThumbnail: string;

	settings: NSArray<Setting>;

	status: string;

	thumbnail: string;

	constructor(o: { _id: string; name: string; paymentTypeId: string; });

	cardNumberLenght(): number;

	cloneWithBIN(bin: string): PaymentMethod;

	conformsPaymentPreferences(paymentPreference: PaymentPreference): boolean;

	conformsToBIN(bin: string): boolean;

	getColorWithBin(bin: string): UIColor;

	getEditTextMaskWithBin(bin: string): string;

	getEditingFontColorWithBin(bin: string): UIColor;

	getFontColorWithBin(bin: string): UIColor;

	getImage(): UIImage;

	getLabelMaskWithBin(bin: string): string;

	initWith_idNamePaymentTypeId(_id: string, name: string, paymentTypeId: string): this;

	isAdditionalInfoNeeded(param: string): boolean;

	isSecurityCodeRequired(bin: string): boolean;

	secCodeInBack(): boolean;

	secCodeLenght(bin: string): number;

	secCodeMandatory(): boolean;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

interface PaymentMethodOption {

	getChildren(): NSArray<PaymentMethodOption>;

	getComment(): string;

	getDescription(): string;

	getId(): string;

	hasChildren(): boolean;

	isCard(): boolean;

	isCustomerPaymentMethod(): boolean;
}
declare var PaymentMethodOption: {

	prototype: PaymentMethodOption;
};

interface PaymentOptionDrawable {

	getImageDescription(): string;

	getSubtitle(): string;

	getTitle(): string;
}
declare var PaymentOptionDrawable: {

	prototype: PaymentOptionDrawable;
};

declare class PaymentPreference extends NSObject {

	static alloc(): PaymentPreference; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): PaymentPreference;

	static new(): PaymentPreference; // inherited from NSObject

	defaultInstallments: number;

	defaultPaymentMethodId: string;

	excludedPaymentMethodIds: NSSet<string>;

	excludedPaymentTypeIds: NSSet<string>;

	maxAcceptedInstallments: number;

	autoSelectPayerCost(payerCostList: NSArray<PayerCost>): PayerCost;

	getDefaultInstallments(): number;

	getDefaultPaymentMethodId(): string;

	getExcludedPaymentMethodsIds(): NSSet<string>;

	getExcludedPaymentTypesIds(): NSSet<string>;

	getMaxAcceptedInstallments(): number;

	toJSONString(): string;

	validate(): boolean;
}

declare class PaymentResult extends NSObject {

	static alloc(): PaymentResult; // inherited from NSObject

	static new(): PaymentResult; // inherited from NSObject

	_id: string;

	payerEmail: string;

	paymentData: PaymentData;

	statementDescription: string;

	status: string;

	statusDetail: string;

	constructor(o: { payment: Payment; paymentData: PaymentData; });

	constructor(o: { status: string; statusDetail: string; paymentData: PaymentData; payerEmail: string; id: string; statementDescription: string; });

	initWithPaymentPaymentData(payment: Payment, paymentData: PaymentData): this;

	initWithStatusStatusDetailPaymentDataPayerEmailIdStatementDescription(status: string, statusDetail: string, paymentData: PaymentData, payerEmail: string, id: string, statementDescription: string): this;
}

declare class PaymentResultScreenPreference extends NSObject {

	static alloc(): PaymentResultScreenPreference; // inherited from NSObject

	static new(): PaymentResultScreenPreference; // inherited from NSObject

	disableApprovedAmount(): void;

	disableApprovedBodyCell(): void;

	disableApprovedPaymentMethodInfo(): void;

	disableApprovedReceipt(): void;

	disableContentCell(): void;

	disablePendingContentText(): void;

	disablePendingContentTitle(): void;

	disablePendingSecondaryExitButton(): void;

	disableRejectdSecondaryExitButton(): void;

	disableRejectedContentText(): void;

	disableRejectedContentTitle(): void;

	enableAmount(): void;

	enableApprovedPaymentBodyCell(): void;

	enableApprovedPaymentMethodInfo(): void;

	enableApprovedReceipt(): void;

	enableContnentCell(): void;

	enablePaymentContentText(): void;

	enablePaymentContentTitle(): void;

	getApprovedSecondaryButtonCallback(): (p1: PaymentResult) => void;

	getApprovedSecondaryButtonText(): string;

	getApprovedSubtitle(): string;

	getApprovedTitle(): string;

	getExitButtonTitle(): string;

	getHeaderApprovedIcon(): UIImage;

	getHeaderPendingIcon(): UIImage;

	getHeaderRejectedIcon(paymentMethod: PaymentMethod): UIImage;

	getPendingContentText(): string;

	getPendingContetTitle(): string;

	getPendingSecondaryButtonCallback(): (p1: PaymentResult) => void;

	getPendingSecondaryButtonText(): string;

	getPendingSubtitle(): string;

	getPendingTitle(): string;

	getRejectedContentText(): string;

	getRejectedContetTitle(): string;

	getRejectedIconSubtext(): string;

	getRejectedSecondaryButtonCallback(): (p1: PaymentResult) => void;

	getRejectedSecondaryButtonText(): string;

	getRejectedSubtitle(): string;

	getRejectedTitle(): string;

	getStatusBackgroundColor(): UIColor;

	isAmountDisable(): boolean;

	isApprovedPaymentBodyDisableCell(): boolean;

	isContentCellDisable(): boolean;

	isPaymentIdDisable(): boolean;

	isPaymentMethodDisable(): boolean;

	isPendingContentTextDisable(): boolean;

	isPendingContentTitleDisable(): boolean;

	isPendingSecondaryExitButtonDisable(): boolean;

	isRejectedContentTextDisable(): boolean;

	isRejectedContentTitleDisable(): boolean;

	isRejectedSecondaryExitButtonDisable(): boolean;

	setApprovedHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setApprovedSecondaryExitButtonWithCallbackText(callback: (p1: PaymentResult) => void, text: string): void;

	setApprovedSubtitleWithSubtitle(subtitle: string): void;

	setApprovedTitleWithTitle(title: string): void;

	setCustomApprovedSubHeaderCellWithCustomCells(customCells: NSArray<MPCustomCell>): void;

	setCustomPendingCellsWithCustomCells(customCells: NSArray<MPCustomCell>): void;

	setCustomsApprovedCellWithCustomCells(customCells: NSArray<MPCustomCell>): void;

	setExitButtonTitleWithTitle(title: string): void;

	setPendingContentTextWithText(text: string): void;

	setPendingContentTitleWithTitle(title: string): void;

	setPendingHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setPendingSecondaryExitButtonWithCallbackText(callback: (p1: PaymentResult) => void, text: string): void;

	setPendingSubtitleWithSubtitle(subtitle: string): void;

	setPendingTitleWithTitle(title: string): void;

	setRejectedContentTextWithText(text: string): void;

	setRejectedContentTitleWithTitle(title: string): void;

	setRejectedHeaderIconWithNameBundle(name: string, bundle: NSBundle): void;

	setRejectedIconSubtextWithText(text: string): void;

	setRejectedSecondaryExitButtonWithCallbackText(callback: (p1: PaymentResult) => void, text: string): void;

	setRejectedSubtitleWithSubtitle(subtitle: string): void;

	setRejectedTitleWithTitle(title: string): void;

	setStatusBackgroundColorWithColor(color: UIColor): void;
}

declare class PaymentResultViewController extends MercadoPagoUIViewController implements MPCustomRowDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): PaymentResultViewController; // inherited from NSObject

	static new(): PaymentResultViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { paymentResult: PaymentResult; checkoutPreference: CheckoutPreference; paymentResultScreenPreference: PaymentResultScreenPreference; callback: (p1: CongratsState) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithPaymentResultCheckoutPreferencePaymentResultScreenPreferenceCallback(paymentResult: PaymentResult, checkoutPreference: CheckoutPreference, paymentResultScreenPreference: PaymentResultScreenPreference, callback: (p1: CongratsState) => void): this;

	invokeCallbackWithPaymentDataWithRowCallback(rowCallback: (p1: PaymentData) => void): void;

	invokeCallbackWithPaymentResultWithRowCallback(rowCallback: (p1: PaymentResult) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PaymentType extends NSObject {

	static alloc(): PaymentType; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): PaymentType;

	static new(): PaymentType; // inherited from NSObject

	static readonly allPaymentIDs: NSSet<string>;
}

declare class PaymentVaultViewController extends MercadoPagoUIScrollViewController implements UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): PaymentVaultViewController; // inherited from NSObject

	static new(): PaymentVaultViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PromoEmptyTableViewCell extends UITableViewCell {

	static alloc(): PromoEmptyTableViewCell; // inherited from NSObject

	static appearance(): PromoEmptyTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PromoEmptyTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PromoEmptyTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PromoEmptyTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PromoEmptyTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PromoEmptyTableViewCell; // inherited from UIAppearance

	static new(): PromoEmptyTableViewCell; // inherited from NSObject
}

declare class PromoTableViewCell extends UITableViewCell {

	static alloc(): PromoTableViewCell; // inherited from NSObject

	static appearance(): PromoTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PromoTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PromoTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PromoTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PromoTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PromoTableViewCell; // inherited from UIAppearance

	static new(): PromoTableViewCell; // inherited from NSObject

	issuerImageView: UIImageView;

	paymentMethodsSubtitle: MPLabel;

	sharesSubtitle: MPLabel;

	setPromoInfo(promo: BankDeal): void;
}

declare class PromoTyCDetailTableViewCell extends UITableViewCell {

	static alloc(): PromoTyCDetailTableViewCell; // inherited from NSObject

	static appearance(): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PromoTyCDetailTableViewCell; // inherited from UIAppearance

	static new(): PromoTyCDetailTableViewCell; // inherited from NSObject

	setLabelWithIssuerNameLegals(issuer: string, legals: string): void;
}

declare class PromoViewController extends MercadoPagoUIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): PromoViewController; // inherited from NSObject

	static new(): PromoViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { promos: NSArray<BankDeal>; callback: () => void; });

	back(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithPromosCallback(promos: NSArray<BankDeal>, callback: () => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PromosTyCTableViewCell extends UITableViewCell {

	static alloc(): PromosTyCTableViewCell; // inherited from NSObject

	static appearance(): PromosTyCTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PromosTyCTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PromosTyCTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PromosTyCTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PromosTyCTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PromosTyCTableViewCell; // inherited from UIAppearance

	static new(): PromosTyCTableViewCell; // inherited from NSObject
}

declare class PromosTyCViewController extends MercadoPagoUIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): PromosTyCViewController; // inherited from NSObject

	static new(): PromosTyCViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { promos: NSArray<BankDeal>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithPromos(promos: NSArray<BankDeal>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class PurchaseDetailTableViewCell extends UITableViewCell {

	static alloc(): PurchaseDetailTableViewCell; // inherited from NSObject

	static appearance(): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PurchaseDetailTableViewCell; // inherited from UIAppearance

	static getCellHeightWithPayerCost(payerCost: PayerCost): number;

	static new(): PurchaseDetailTableViewCell; // inherited from NSObject
}

declare class Refund extends NSObject {

	static alloc(): Refund; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Refund;

	static new(): Refund; // inherited from NSObject

	_id: number;

	amount: number;

	dateCreated: Date;

	metadata: NSObject;

	paymentId: number;

	source: string;

	uniqueSequenceNumber: string;
}

declare class ReviewScreenPreference extends NSObject {

	static alloc(): ReviewScreenPreference; // inherited from NSObject

	static new(): ReviewScreenPreference; // inherited from NSObject

	addSummaryArrearsDetailWithAmount(amount: number): void;

	addSummaryChargeDetailWithAmount(amount: number): void;

	addSummaryDiscountDetailWithAmount(amount: number): void;

	addSummaryProductDetailWithAmount(amount: number): void;

	addSummaryShippingDetailWithAmount(amount: number): void;

	addSummaryTaxesDetailWithAmount(amount: number): void;

	clearSummaryDetails(): void;

	disableChangeMethodOption(): void;

	enableChangeMethodOption(): void;

	getAmountTitle(): string;

	getCancelButtonTitle(): string;

	getConfirmButtonText(): string;

	getOneWordDescriptionWithOneWordDescription(oneWordDescription: string): string;

	getQuantityTitle(): string;

	getTitle(): string;

	hideAmountTitle(): void;

	hideQuantityRow(): void;

	isChangeMethodOptionEnabled(): boolean;

	setAddionalInfoCellsWithCustomCells(customCells: NSArray<MPCustomCell>): void;

	setAmountTitleWithTitle(title: string): void;

	setCancelButtonTextWithCancelButtonText(cancelButtonText: string): void;

	setConfirmButtonTextWithConfirmButtonText(confirmButtonText: string): void;

	setCustomItemCellWithCustomCell(customCell: NSArray<MPCustomCell>): void;

	setQuantityTitleWithTitle(title: string): void;

	setSummaryDisclaimerWithDisclaimerTextDisclaimerColor(disclaimerText: string, disclaimerColor: UIColor): void;

	setSummaryProductTitleWithProductTitle(productTitle: string): void;

	setTitleWithTitle(title: string): void;

	showAmountTitle(): void;

	showQuantityRow(): void;
}

declare class ReviewScreenViewController extends MercadoPagoUIScrollViewController implements MPCustomRowDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): ReviewScreenViewController; // inherited from NSObject

	static new(): ReviewScreenViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { viewModel: CheckoutViewModel; callbackPaymentData: (p1: PaymentData) => void; callbackExit: () => void; callbackConfirm: (p1: PaymentData) => void; });

	checkFloatingButtonVisibility(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayFloatingConfirmButton(): void;

	getFloatingButtonCell(): UITableViewCell;

	getFloatingButtonView(): UIView;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithViewModelCallbackPaymentDataCallbackExitCallbackConfirm(viewModel: CheckoutViewModel, callbackPaymentData: (p1: PaymentData) => void, callbackExit: () => void, callbackConfirm: (p1: PaymentData) => void): this;

	invokeCallbackWithPaymentDataWithRowCallback(rowCallback: (p1: PaymentData) => void): void;

	invokeCallbackWithPaymentResultWithRowCallback(rowCallback: (p1: PaymentResult) => void): void;

	isConfirmButtonVisible(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SavedCardToken extends CardToken {

	static alloc(): SavedCardToken; // inherited from NSObject

	static new(): SavedCardToken; // inherited from NSObject

	cardId: string;

	securityCodeRequired: boolean;

	constructor(o: { cardId: string; securityCode: string; });

	constructor(o: { card: CardInformation; securityCode: string; securityCodeRequired: boolean; });

	initWithCardIdSecurityCode(cardId: string, securityCode: string): this;

	initWithCardSecurityCodeSecurityCodeRequired(card: CardInformation, securityCode: string, securityCodeRequired: boolean): this;

	validateCardId(): boolean;

	validateSecurityCodeNumbers(): boolean;
}

declare class SavedESCCardToken extends SavedCardToken {

	static alloc(): SavedESCCardToken; // inherited from NSObject

	static new(): SavedESCCardToken; // inherited from NSObject

	esc: string;

	requireESC: boolean;
}

declare class SecurityCode extends NSObject {

	static alloc(): SecurityCode; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): SecurityCode;

	static new(): SecurityCode; // inherited from NSObject

	cardLocation: string;

	length: number;

	mode: string;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class SecurityCodeViewController extends MercadoPagoUIViewController implements UITextFieldDelegate {

	static alloc(): SecurityCodeViewController; // inherited from NSObject

	static new(): SecurityCodeViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { viewModel: SecurityCodeViewModel; collectSecurityCodeCallback: (p1: CardInformationForm, p2: string) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	editingChanged(textField: UITextField): void;

	hideErrorMessage(): void;

	initWithViewModelCollectSecurityCodeCallback(viewModel: SecurityCodeViewModel, collectSecurityCodeCallback: (p1: CardInformationForm, p2: string) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showErrorMessage(errorMessage: string): void;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class SecurityCodeViewModel extends NSObject {

	static alloc(): SecurityCodeViewModel; // inherited from NSObject

	static new(): SecurityCodeViewModel; // inherited from NSObject
}

declare class ServicePreference extends NSObject {

	static alloc(): ServicePreference; // inherited from NSObject

	static new(): ServicePreference; // inherited from NSObject

	getCheckoutAddionalInfo(): string;

	getCheckoutPreferenceURI(): string;

	getCheckoutPreferenceURL(): string;

	getCustomerAddionalInfo(): string;

	getCustomerURI(): string;

	getCustomerURL(): string;

	getDefaultBaseURL(): string;

	getDiscountAddionalInfo(): string;

	getDiscountURI(): string;

	getDiscountURL(): string;

	getGatewayURL(): string;

	getPaymentAddionalInfo(): NSDictionary<any, any>;

	getPaymentURI(): string;

	getPaymentURL(): string;

	getProcessingModeString(): string;

	isCheckoutPreferenceSet(): boolean;

	isCreatePaymentSet(): boolean;

	isCustomerInfoAvailable(): boolean;

	isGetCustomerSet(): boolean;

	isUsingDeafaultPaymentSettings(): boolean;

	isUsingDefaultDiscountSettings(): boolean;

	setAdditionalPaymentInfo(additionalInfo: NSDictionary<any, any>): void;

	setAggregatorAsProcessingMode(): void;

	setCreateCheckoutPreferenceWithBaseURLURIAdditionalInfo(baseURL: string, URI: string, additionalInfo: NSDictionary<any, any>): void;

	setCreatePaymentWithBaseURLURIAdditionalInfo(baseURL: string, URI: string, additionalInfo: NSDictionary<any, any>): void;

	setDefaultBaseURLWithBaseURL(baseURL: string): void;

	setDiscountWithBaseURLURIAdditionalInfo(baseURL: string, URI: string, additionalInfo: NSDictionary<string, string>): void;

	setGatewayAsProcessingMode(): void;

	setGatewayURLWithGatewayURL(gatewayURL: string): void;

	setGetCustomerWithBaseURLURIAdditionalInfo(baseURL: string, URI: string, additionalInfo: NSDictionary<string, string>): void;

	setHybridAsProcessingMode(): void;
}

declare class Setting extends NSObject {

	static alloc(): Setting; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Setting;

	static getSettingByBinBin(settings: NSArray<Setting>, bin: string): NSArray<Setting>;

	static new(): Setting; // inherited from NSObject

	binMask: BinMask;

	cardNumber: CardNumber;

	securityCode: SecurityCode;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class SummaryRow extends NSObject {

	static alloc(): SummaryRow; // inherited from NSObject

	static new(): SummaryRow; // inherited from NSObject

	constructor(o: { customDescription: string; descriptionColor: UIColor; customAmount: number; amountColor: UIColor; separatorLine: boolean; });

	disableAmount(): void;

	enableAmount(): void;

	initWithCustomDescriptionDescriptionColorCustomAmountAmountColorSeparatorLine(customDescription: string, descriptionColor: UIColor, customAmount: number, amountColor: UIColor, separatorLine: boolean): this;

	isAmountEnable(): boolean;
}

declare class TextFieldEffects extends MPTextField {

	static alloc(): TextFieldEffects; // inherited from NSObject

	static appearance(): TextFieldEffects; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TextFieldEffects; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TextFieldEffects; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TextFieldEffects; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TextFieldEffects; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TextFieldEffects; // inherited from UIAppearance

	static new(): TextFieldEffects; // inherited from NSObject

	readonly placeholderLabel: MPLabel;

	animateViewsForTextDisplay(): void;

	animateViewsForTextEntry(): void;

	drawViewsForRect(rect: CGRect): void;

	textFieldDidBeginEditing(): void;

	textFieldDidEndEditing(): void;

	updateViewsForBoundsChange(bounds: CGRect): void;
}

declare class TextMaskFormater extends NSObject {

	static alloc(): TextMaskFormater; // inherited from NSObject

	static new(): TextMaskFormater; // inherited from NSObject

	textMaskedRemasked(text: string, remasked: boolean): string;

	textUnmasked(text: string): string;
}

interface TimerDelegate {

	updateTimer(): void;
}
declare var TimerDelegate: {

	prototype: TimerDelegate;
};

declare class Token extends NSObject implements CardInformationForm {

	static alloc(): Token; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): Token;

	static new(): Token; // inherited from NSObject

	_id: string;

	cardHolder: Cardholder;

	cardId: string;

	cardNumberLength: number;

	creationDate: Date;

	dueDate: Date;

	esc: string;

	expirationMonth: number;

	expirationYear: number;

	firstSixDigit: string;

	lastFourDigits: string;

	lastModifiedDate: Date;

	luhnValidation: string;

	publicKey: string;

	securityCodeLength: number;

	status: string;

	usedDate: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { _id: string; publicKey: string; cardId: string; luhnValidation: string; status: string; usedDate: string; cardNumberLength: number; creationDate: Date; lastFourDigits: string; firstSixDigit: string; securityCodeLength: number; expirationMonth: number; expirationYear: number; lastModifiedDate: Date; dueDate: Date; cardHolder: Cardholder; });

	constructor(o: { _id: string; publicKey: string; cardId: string; luhnValidation: string; status: string; usedDate: string; cardNumberLength: number; creationDate: Date; lastFourDigits: string; firstSixDigit: string; securityCodeLength: number; expirationMonth: number; expirationYear: number; lastModifiedDate: Date; dueDate: Date; cardHolder: Cardholder; esc: string; });

	canBeClone(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getBin(): string;

	getCardBin(): string;

	getCardExpirationDateFormated(): string;

	getCardLastForDigits(): string;

	getExpirationDateFormated(): string;

	getMaskNumber(): string;

	hasCardId(): boolean;

	hasESC(): boolean;

	initWith_idPublicKeyCardIdLuhnValidationStatusUsedDateCardNumberLengthCreationDateLastFourDigitsFirstSixDigitSecurityCodeLengthExpirationMonthExpirationYearLastModifiedDateDueDateCardHolder(_id: string, publicKey: string, cardId: string, luhnValidation: string, status: string, usedDate: string, cardNumberLength: number, creationDate: Date, lastFourDigits: string, firstSixDigit: string, securityCodeLength: number, expirationMonth: number, expirationYear: number, lastModifiedDate: Date, dueDate: Date, cardHolder: Cardholder): this;

	initWith_idPublicKeyCardIdLuhnValidationStatusUsedDateCardNumberLengthCreationDateLastFourDigitsFirstSixDigitSecurityCodeLengthExpirationMonthExpirationYearLastModifiedDateDueDateCardHolderEsc(_id: string, publicKey: string, cardId: string, luhnValidation: string, status: string, usedDate: string, cardNumberLength: number, creationDate: Date, lastFourDigits: string, firstSixDigit: string, securityCodeLength: number, expirationMonth: number, expirationYear: number, lastModifiedDate: Date, dueDate: Date, cardHolder: Cardholder, esc: string): this;

	isEqual(object: any): boolean;

	isIssuerRequired(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	toJSON(): NSDictionary<string, any>;

	toJSONString(): string;
}

declare class TransactionDetails extends NSObject {

	static alloc(): TransactionDetails; // inherited from NSObject

	static fromJSON(json: NSDictionary<any, any>): TransactionDetails;

	static new(): TransactionDetails; // inherited from NSObject

	externalResourceUrl: string;

	financialInstitution: FinancialInstitution;

	constructor(o: { financialInstitution: FinancialInstitution; });

	initWithFinancialInstitution(financialInstitution: FinancialInstitution): this;

	toJSON(): NSDictionary<string, any>;
}

declare class URLConfigs extends NSObject {

	static alloc(): URLConfigs; // inherited from NSObject

	static new(): URLConfigs; // inherited from NSObject
}
