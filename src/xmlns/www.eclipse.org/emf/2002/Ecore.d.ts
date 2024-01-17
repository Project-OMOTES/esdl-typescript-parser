import * as Primitive from '../../../xml-primitives';

// Source files:
// https://raw.githubusercontent.com/eclipse-emf/org.eclipse.emf/master/plugins/org.eclipse.emf.ecore/model/Ecore.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _EAnnotation extends _EModelElement {
  references: EAnnotationReferencesType;
  source: string;
  contents?: any[];
  details?: EStringToStringMapEntry[];
}
export interface EAnnotation extends _EAnnotation {
  constructor: { new (): EAnnotation };
}
export var EAnnotation: { new (): EAnnotation };

type EAnnotationReferencesType = string[];

interface _EAttribute extends _EStructuralFeature {
  eAttributeType: string;
  iD: string;
}
export interface EAttribute extends _EAttribute {
  constructor: { new (): EAttribute };
}
export var EAttribute: { new (): EAttribute };

export type EBigDecimal = number;
type _EBigDecimal = Primitive._number;

export type EBigInteger = number;
type _EBigInteger = Primitive._number;

export type EBoolean = string;
type _EBoolean = Primitive._string;

export type EBooleanObject = string;
type _EBooleanObject = _EBoolean;

export type EByte = number;
type _EByte = Primitive._number;

export type EByteArray = string;
type _EByteArray = Primitive._string;

export type EByteObject = number;
type _EByteObject = _EByte;

export type EChar = string;
type _EChar = Primitive._string;

export type ECharacterObject = string;
type _ECharacterObject = _EChar;

interface _EClass extends _EClassifier {
  abstract: string;
  eAllAttributes: EClassEAllAttributesType;
  eAllContainments: EClassEAllContainmentsType;
  eAllGenericSuperTypes: EClassEAllGenericSuperTypesType;
  eAllOperations: EClassEAllOperationsType;
  eAllReferences: EClassEAllReferencesType;
  eAllStructuralFeatures: EClassEAllStructuralFeaturesType;
  eAllSuperTypes: EClassEAllSuperTypesType;
  eAttributes: EClassEAttributesType;
  eIDAttribute: string;
  eReferences: EClassEReferencesType;
  eSuperTypes: EClassESuperTypesType;
  interface: string;
  eGenericSuperTypes?: EGenericType[];
  eOperations?: EOperation[];
  eStructuralFeatures?: EStructuralFeature[];
}
export interface EClass extends _EClass {
  constructor: { new (): EClass };
}
export var EClass: { new (): EClass };

type EClassEAllAttributesType = string[];

type EClassEAllContainmentsType = string[];

type EClassEAllGenericSuperTypesType = string[];

type EClassEAllOperationsType = string[];

type EClassEAllReferencesType = string[];

type EClassEAllStructuralFeaturesType = string[];

type EClassEAllSuperTypesType = string[];

type EClassEAttributesType = string[];

type EClassEReferencesType = string[];

type EClassESuperTypesType = string[];

interface _EClassifier extends _ENamedElement {
  defaultValue: string;
  instanceClass: string;
  instanceClassName: string;
  instanceTypeName: string;
  eTypeParameters?: ETypeParameter[];
}
export interface EClassifier extends _EClassifier {
  constructor: { new (): EClassifier };
}
export var EClassifier: { new (): EClassifier };

interface _EDataType extends _EClassifier {
  serializable: string;
}
export interface EDataType extends _EDataType {
  constructor: { new (): EDataType };
}
export var EDataType: { new (): EDataType };

export type EDate = string;
type _EDate = Primitive._string;

export type EDiagnosticChain = string;
type _EDiagnosticChain = Primitive._string;

export type EDouble = number;
type _EDouble = Primitive._number;

export type EDoubleObject = number;
type _EDoubleObject = _EDouble;

export type EEList = string;
type _EEList = Primitive._string;

interface _EEnum extends _EDataType {
  eLiterals?: EEnumLiteral[];
}
export interface EEnum extends _EEnum {
  constructor: { new (): EEnum };
}
export var EEnum: { new (): EEnum };

export type EEnumerator = string;
type _EEnumerator = Primitive._string;

interface _EEnumLiteral extends _ENamedElement {
  instance: string;
  literal: string;
  value: string;
}
export interface EEnumLiteral extends _EEnumLiteral {
  constructor: { new (): EEnumLiteral };
}
export var EEnumLiteral: { new (): EEnumLiteral };

interface _EFactory extends _EModelElement {
  ePackage: string;
}
export interface EFactory extends _EFactory {
  constructor: { new (): EFactory };
}
export var EFactory: { new (): EFactory };

export type EFeatureMap = string;
type _EFeatureMap = Primitive._string;

export type EFeatureMapEntry = string;
type _EFeatureMapEntry = Primitive._string;

export type EFloat = number;
type _EFloat = Primitive._number;

export type EFloatObject = number;
type _EFloatObject = _EFloat;

interface _EGenericType extends BaseType {
  eClassifier: string;
  eRawType: string;
  eTypeParameter: string;
  eLowerBound?: EGenericType;
  eTypeArguments?: EGenericType[];
  eUpperBound?: EGenericType;
}
export interface EGenericType extends _EGenericType {
  constructor: { new (): EGenericType };
}
export var EGenericType: { new (): EGenericType };

export type EInt = string;
type _EInt = Primitive._string;

export type EIntegerObject = string;
type _EIntegerObject = _EInt;

export type EInvocationTargetException = string;
type _EInvocationTargetException = Primitive._string;

export type EJavaClass = string;
type _EJavaClass = Primitive._string;

export type EJavaObject = string;
type _EJavaObject = Primitive._string;

export type ELong = number;
type _ELong = Primitive._number;

export type ELongObject = number;
type _ELongObject = _ELong;

export type EMap = string;
type _EMap = Primitive._string;

interface _EModelElement extends BaseType {
  eAnnotations?: EAnnotation[];
}
export interface EModelElement extends _EModelElement {
  constructor: { new (): EModelElement };
}
export var EModelElement: { new (): EModelElement };

interface _ENamedElement extends _EModelElement {
  name: string;
}
export interface ENamedElement extends _ENamedElement {
  constructor: { new (): ENamedElement };
}
export var ENamedElement: { new (): ENamedElement };

interface _EObject extends BaseType {}
export interface EObject extends _EObject {
  constructor: { new (): EObject };
}
export var EObject: { new (): EObject };

interface _EOperation extends _ETypedElement {
  eExceptions: EOperationEExceptionsType;
  eGenericExceptions?: EGenericType[];
  eParameters?: EParameter[];
  eTypeParameters?: ETypeParameter[];
}
export interface EOperation extends _EOperation {
  constructor: { new (): EOperation };
}
export var EOperation: { new (): EOperation };

type EOperationEExceptionsType = string[];

interface _EPackage extends _ENamedElement {
  eFactoryInstance: string;
  nsPrefix: string;
  nsURI: string;
  eClassifiers?: EClassifier[];
  eSubpackages?: EPackage[];
}
export interface EPackage extends _EPackage {
  constructor: { new (): EPackage };
}
export var EPackage: { new (): EPackage };

interface _EParameter extends _ETypedElement {}
export interface EParameter extends _EParameter {
  constructor: { new (): EParameter };
}
export var EParameter: { new (): EParameter };

interface _EReference extends _EStructuralFeature {
  container: string;
  containment: string;
  eKeys: EReferenceEKeysType;
  eOpposite: string;
  eReferenceType: string;
  resolveProxies: string;
}
export interface EReference extends _EReference {
  constructor: { new (): EReference };
}
export var EReference: { new (): EReference };

type EReferenceEKeysType = string[];

export type EResource = string;
type _EResource = Primitive._string;

export type EResourceSet = string;
type _EResourceSet = Primitive._string;

export type EShort = number;
type _EShort = Primitive._number;

export type EShortObject = number;
type _EShortObject = _EShort;

export type EString = string;
type _EString = Primitive._string;

interface _EStringToStringMapEntry extends BaseType {
  key: string;
  value: string;
}
export interface EStringToStringMapEntry extends _EStringToStringMapEntry {
  constructor: { new (): EStringToStringMapEntry };
}
export var EStringToStringMapEntry: { new (): EStringToStringMapEntry };

interface _EStructuralFeature extends _ETypedElement {
  changeable: string;
  defaultValue: string;
  defaultValueLiteral: string;
  derived: string;
  transient: string;
  unsettable: string;
  volatile: string;
}
export interface EStructuralFeature extends _EStructuralFeature {
  constructor: { new (): EStructuralFeature };
}
export var EStructuralFeature: { new (): EStructuralFeature };

export type ETreeIterator = string;
type _ETreeIterator = Primitive._string;

interface _ETypedElement extends _ENamedElement {
  eType: string;
  lowerBound: string;
  many: string;
  ordered: string;
  required: string;
  unique: string;
  upperBound: string;
  eGenericType?: EGenericType;
}
export interface ETypedElement extends _ETypedElement {
  constructor: { new (): ETypedElement };
}
export var ETypedElement: { new (): ETypedElement };

interface _ETypeParameter extends _ENamedElement {
  eBounds?: EGenericType[];
}
export interface ETypeParameter extends _ETypeParameter {
  constructor: { new (): ETypeParameter };
}
export var ETypeParameter: { new (): ETypeParameter };

export interface document extends BaseType {
  EAnnotation: EAnnotation;
  EAttribute: EAttribute;
  EClass: EClass;
  EClassifier: EClassifier;
  EDataType: EDataType;
  EEnum: EEnum;
  EEnumLiteral: EEnumLiteral;
  EFactory: EFactory;
  EGenericType: EGenericType;
  EModelElement: EModelElement;
  ENamedElement: ENamedElement;
  EObject: any;
  EOperation: EOperation;
  EPackage: EPackage;
  EParameter: EParameter;
  EReference: EReference;
  EStringToStringMapEntry: EStringToStringMapEntry;
  EStructuralFeature: EStructuralFeature;
  ETypedElement: ETypedElement;
  ETypeParameter: ETypeParameter;
}
export var document: document;
