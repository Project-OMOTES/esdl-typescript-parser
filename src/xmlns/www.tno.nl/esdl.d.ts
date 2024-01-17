import * as Primitive from '../xml-primitives';
import * as ecore from '../www.eclipse.org/emf/2002/Ecore';

// Source files:
// https://raw.githubusercontent.com/EnergyTransition/ESDL/master/esdl/model/esdl.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _AbstractActiveSwitch extends _AbstractSwitch {
  /** position of the switch */
  position: number;
}
export interface AbstractActiveSwitch extends _AbstractActiveSwitch {
  constructor: { new (): AbstractActiveSwitch };
}
export var AbstractActiveSwitch: { new (): AbstractActiveSwitch };

/** Abstract class for all simple conversion assets that have a power and an
 * efficiency attribute */
interface _AbstractBasicConversion extends _Conversion {
  /** The efficiency of the conversion asset. Allows to specify conversion
   * losses as a ratio */
  efficiency: number;
  /** Maximum power / capacity in Watt */
  power: number;
}
export interface AbstractBasicConversion extends _AbstractBasicConversion {
  constructor: { new (): AbstractBasicConversion };
}
export var AbstractBasicConversion: { new (): AbstractBasicConversion };

/** Abstract class for specification of the (dynamic) behaviour of an asset */
interface _AbstractBehaviour extends BaseType {
  /** Unique identifier for this behaviour specification */
  id: string;
  /** name for this behaviour specification */
  name: string;
}
export interface AbstractBehaviour extends _AbstractBehaviour {
  constructor: { new (): AbstractBehaviour };
}
export var AbstractBehaviour: { new (): AbstractBehaviour };

/** Describes the shared properties of building, building unit and aggregated
 * building */
interface _AbstractBuilding extends _ExposedPortsAsset {
  asset?: Asset[];
  buildingUsage?: AbstractBuildingUsage;
  /** Measures collection for a specific building. Allows you to specify
   * different possibilities for different buildings (or building types). */
  measures?: Measures;
  potential?: Potential[];
}
export interface AbstractBuilding extends _AbstractBuilding {
  constructor: { new (): AbstractBuilding };
}
export var AbstractBuilding: { new (): AbstractBuilding };

/** Abstract class to support references to building usages */
interface _AbstractBuildingUsage extends BaseType {}
export interface AbstractBuildingUsage extends _AbstractBuildingUsage {
  constructor: { new (): AbstractBuildingUsage };
}
export var AbstractBuildingUsage: { new (): AbstractBuildingUsage };

/** Abstract class to describe conductors such as cables and pipes and joining
 * them using a joint */
interface _AbstractConductor extends _Transport {}
export interface AbstractConductor extends _AbstractConductor {
  constructor: { new (): AbstractConductor };
}
export var AbstractConductor: { new (): AbstractConductor };

/** Abstract class to describe connections of a building to a grid. E.g. a heat
 * connection, gas connection and electricity connection */
interface _AbstractConnection extends _Transport {}
export interface AbstractConnection extends _AbstractConnection {
  constructor: { new (): AbstractConnection };
}
export var AbstractConnection: { new (): AbstractConnection };

/** Abstract class to describe data sources or references to data sources */
interface _AbstractDataSource extends BaseType {
  id: string;
}
export interface AbstractDataSource extends _AbstractDataSource {
  constructor: { new (): AbstractDataSource };
}
export var AbstractDataSource: { new (): AbstractDataSource };

/** Abstract class to describe geothermal potential */
interface _AbstractGTPotential extends _Potential {
  geothermalSource: AbstractGTPotentialGeothermalSourceType;
}
export interface AbstractGTPotential extends _AbstractGTPotential {
  constructor: { new (): AbstractGTPotential };
}
export var AbstractGTPotential: { new (): AbstractGTPotential };

type AbstractGTPotentialGeothermalSourceType = string[];

/** Abstract class to define the date or period of the validity of the data
 * that is used in this instance */
interface _AbstractInstanceDate extends BaseType {}
export interface AbstractInstanceDate extends _AbstractInstanceDate {
  constructor: { new (): AbstractInstanceDate };
}
export var AbstractInstanceDate: { new (): AbstractInstanceDate };

/** Abstract class for describing Matters, can be instantiated as a subclass of
 * Matter or as a MatterReference. */
interface _AbstractMatter extends _Carrier {}
export interface AbstractMatter extends _AbstractMatter {
  constructor: { new (): AbstractMatter };
}
export var AbstractMatter: { new (): AbstractMatter };

interface _AbstractMeasure extends _Item {}
export interface AbstractMeasure extends _AbstractMeasure {
  constructor: { new (): AbstractMeasure };
}
export var AbstractMeasure: { new (): AbstractMeasure };

interface _AbstractPassiveSwitch extends _AbstractSwitch {}
export interface AbstractPassiveSwitch extends _AbstractPassiveSwitch {
  constructor: { new (): AbstractPassiveSwitch };
}
export var AbstractPassiveSwitch: { new (): AbstractPassiveSwitch };

/** Abstract class to describe QuantityAndUnitTypes or references to these */
interface _AbstractQuantityAndUnit extends BaseType {}
export interface AbstractQuantityAndUnit extends _AbstractQuantityAndUnit {
  constructor: { new (): AbstractQuantityAndUnit };
}
export var AbstractQuantityAndUnit: { new (): AbstractQuantityAndUnit };

interface _AbstractSensor extends _Transport {}
export interface AbstractSensor extends _AbstractSensor {
  constructor: { new (): AbstractSensor };
}
export var AbstractSensor: { new (): AbstractSensor };

/** Abstract class to describe switches such as valve and a circuit breaker */
interface _AbstractSwitch extends _Transport {}
export interface AbstractSwitch extends _AbstractSwitch {
  constructor: { new (): AbstractSwitch };
}
export var AbstractSwitch: { new (): AbstractSwitch };

/** Abstract class for a TransferFunction for the specification of the
 * behaviour of an asset */
interface _AbstractTransferFunction extends _AbstractBehaviour {
  /** Type of transfer function */
  type: TransferFunctionTypeEnum;
}
export interface AbstractTransferFunction extends _AbstractTransferFunction {
  constructor: { new (): AbstractTransferFunction };
}
export var AbstractTransferFunction: { new (): AbstractTransferFunction };

/** Abstract class to describe transformers, such as Heat exchangers,
 * transformers and pumps */
interface _AbstractTransformer extends _Transport {}
export interface AbstractTransformer extends _AbstractTransformer {
  constructor: { new (): AbstractTransformer };
}
export var AbstractTransformer: { new (): AbstractTransformer };

/** (experimental) Used to define statistical information */
interface _AbstractVariance extends BaseType {}
export interface AbstractVariance extends _AbstractVariance {
  constructor: { new (): AbstractVariance };
}
export var AbstractVariance: { new (): AbstractVariance };

/** (experimetal) Used in defining a Hybrid Heat Pump if there are additional
 * heating sources possible, but its usage is not modelled. Otherwise model a HeatPump and a
 * GasHeater seperately */
export type AdditionalHeatingSourceTypeEnum = 'NONE' | 'ELECTRIC' | 'GAS';
interface _AdditionalHeatingSourceTypeEnum extends Primitive._string {
  content: AdditionalHeatingSourceTypeEnum;
}

/** The address of a building or building unit. */
interface _Address extends BaseType {
  city: string;
  country: string;
  houseNumber: string;
  houseNumberAnnex: string;
  houseNumberLetter: string;
  postalCode: string;
  stateOrProvince: string;
  streetName: string;
}
export interface Address extends _Address {
  constructor: { new (): Address };
}
export var Address: { new (): Address };

/** Represents more than one building aggregated into one entity. It supports
 * different types of aggregation, such as building type, energy label etc. */
interface _AggregatedBuilding extends _AbstractBuilding {
  aggregationOf: AggregatedBuildingAggregationOfType;
  floorArea: number;
  /** (to be removed) Is replaced by the asset parameter aggregationCount */
  numberOfBuildings: string;
  buildingTypeDistribution?: BuildingTypeDistribution;
  buildingYearDistribution?: FromToDistribution;
  energyLabelDistribution?: EnergyLabelDistribution;
  ownershipRentalTypeDistribution?: OwnershipRentalTypeDistribution;
  residentialBuildingTypeDistribution?: ResidentialBuildingTypeDistribution;
}
export interface AggregatedBuilding extends _AggregatedBuilding {
  constructor: { new (): AggregatedBuilding };
}
export var AggregatedBuilding: { new (): AggregatedBuilding };

type AggregatedBuildingAggregationOfType = string[];

/** Represents an aggregation of multiple consumers as one aggregated consumer.
 * It allows you to reference the consumers it is aggregated of by using the aggregationOf
 * reference. Can be used to aggregate a heterogeneous collection of consumers (e.g. of
 * different types) */
interface _AggregatedConsumer extends _Consumer {
  aggregationOf: AggregatedConsumerAggregationOfType;
}
export interface AggregatedConsumer extends _AggregatedConsumer {
  constructor: { new (): AggregatedConsumer };
}
export var AggregatedConsumer: { new (): AggregatedConsumer };

type AggregatedConsumerAggregationOfType = string[];

/** Represents an aggregation of multiple conversion assets as one aggregated
 * conversion asset. It allows you to reference the conversion asset it is aggregated of by
 * using the aggregationOf reference. Can be used to aggregate a heterogeneous collection of
 * conversion assets (e.g. of different types) */
interface _AggregatedConversion extends _AbstractBasicConversion {
  aggregationOf: AggregatedConversionAggregationOfType;
}
export interface AggregatedConversion extends _AggregatedConversion {
  constructor: { new (): AggregatedConversion };
}
export var AggregatedConversion: { new (): AggregatedConversion };

type AggregatedConversionAggregationOfType = string[];

/** Represents an aggregation of multiple producers as one aggregated producer.
 * It allows you to reference the producers it is aggregated of by using the aggregationOf
 * reference. Can be used to aggregate a heterogeneous collection of producers (e.g. of
 * different types) */
interface _AggregatedProducer extends _Producer {
  aggregationOf: AggregatedProducerAggregationOfType;
}
export interface AggregatedProducer extends _AggregatedProducer {
  constructor: { new (): AggregatedProducer };
}
export var AggregatedProducer: { new (): AggregatedProducer };

type AggregatedProducerAggregationOfType = string[];

/** Represents an aggregation of multiple storage assets as one aggregated
 * storage asset. It allows you to reference the storage asset it is aggregated of by using the
 * aggregationOf reference. Can be used to aggregate a heterogeneous collection of storage
 * assets (e.g. of different types) */
interface _AggregatedStorage extends _Storage {
  aggregationOf: AggregatedStorageAggregationOfType;
}
export interface AggregatedStorage extends _AggregatedStorage {
  constructor: { new (): AggregatedStorage };
}
export var AggregatedStorage: { new (): AggregatedStorage };

type AggregatedStorageAggregationOfType = string[];

/** Represents an aggregation of multiple transport assets as one aggregated
 * transport asset. It allows you to reference the transport asset it is aggregated of by using
 * the aggregationOf reference. Can be used to aggregate a heterogeneous collection of
 * transport assets (e.g. of different types) */
interface _AggregatedTransport extends _Transport {
  aggregationOf: AggregatedTransportAggregationOfType;
}
export interface AggregatedTransport extends _AggregatedTransport {
  constructor: { new (): AggregatedTransport };
}
export var AggregatedTransport: { new (): AggregatedTransport };

type AggregatedTransportAggregationOfType = string[];

/** Indicates a aggregator service exploiting flexibility in the energy system */
interface _AggregatorService extends _EnergyService {}
export interface AggregatorService extends _AggregatorService {
  constructor: { new (): AggregatorService };
}
export var AggregatorService: { new (): AggregatorService };

/** (under discussion) Describes how something is aggregated. Terms are
 * currently not mutual exclusive and collectively exhaustive (MECE) */
export type AggrTypeEnum =
  | 'UNDEFINED'
  | 'NOT_AGGREGATED'
  | 'PER_COMMODITY'
  | 'TOTAL_ENERGY'
  | 'TOTAL_CAPABILITY'
  | 'PER_CAPIBILITY';
interface _AggrTypeEnum extends Primitive._string {
  content: AggrTypeEnum;
}

/** Represents an air conditioning unit */
interface _Airco extends _AbstractBasicConversion {
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface Airco extends _Airco {
  constructor: { new (): Airco };
}
export var Airco: { new (): Airco };

interface _AirVessel extends _Transport {}
export interface AirVessel extends _AirVessel {
  constructor: { new (): AirVessel };
}
export var AirVessel: { new (): AirVessel };

/** The Area class represents a physical geographic area or a more abstract
 * logical area. In both cases it is the 'asset container', in a sense that all assets within
 * the area are contained by the Area instance. */
interface _Area extends BaseType {
  /** (experimental) Defines the number of buildings per m² */
  buildingDensity: number;
  /** Refers to the area that contains this area, if not the top-level area */
  containingArea: string;
  /** (experimental) Defines a URI to reference the geometric shape of this
   * area */
  geometryReference: string;
  /** Unique id of this area */
  id: string;
  /** Refers to the party owning the area (usually a government) */
  isOwnedBy: string;
  logicalGroup: string;
  /** Name for this area */
  name: string;
  /** The scope that this area describes, such as Country, Province, Energy
   * Region, etc. */
  scope: AreaScopeEnum;
  sector: string;
  /** Type of area (e.g. road, terrain, water, etc.) */
  type: AreaTypeEnum;
  /** contains all sub areas of this area */
  area?: Area[];
  /** contains all the assets in this area, both Buildings and EnergyAssets */
  asset?: Asset[];
  /** (experimental) Used to model economic properties of this area, such as
   * income, WOZ-value, etc. */
  economicProperties?: EconomicProperties;
  /** Describes the physical geometry of this area */
  geometry?: Geometry;
  /** List of KPIs relevant for this area */
  KPIs?: KPIs;
  /** Measures collection for a specific area. Allows you to specify
   * different possibilities in different areas. */
  measures?: Measures;
  /** (experimental) Describes the number of vehicles and types in this area */
  mobilityProperties?: MobilityProperties;
  /** Contains all energy potentials of this area, such as geothermal
   * potential and wind potential */
  potential?: Potential[];
  /** (experimental) Used to model social aspects of the area, such as
   * population density, number of inhabitants, etc. */
  socialProperties?: SocialProperties;
}
export interface Area extends _Area {
  constructor: { new (): Area };
}
export var Area: { new (): Area };

/** The scope of the area: Building, Street, ZipCode, Neighbourhood, District,
 * Municipality, City, etc. */
export type AreaScopeEnum =
  | 'UNDEFINED'
  | 'BUILDING'
  | 'STREET'
  | 'ZIPCODE'
  | 'NEIGHBOURHOOD'
  | 'DISTRICT'
  | 'VILLAGE'
  | 'CITY'
  | 'MUNICIPALITY'
  | 'REGION'
  | 'PROVINCE'
  | 'STATE'
  | 'COUNTRY'
  | 'CONTINENT'
  | 'SERVICE_AREA';
interface _AreaScopeEnum extends Primitive._string {
  content: AreaScopeEnum;
}

/** Type of area (e.g. road, terrain, water, etc.) */
export type AreaTypeEnum =
  | 'UNDEFINED'
  | 'ROAD'
  | 'RAILWAY'
  | 'TERRAIN'
  | 'RURAL_AREA'
  | 'BUILT'
  | 'WATER'
  | 'SEA'
  | 'RIVER'
  | 'CANAL'
  | 'LAKE'
  | 'LAND'
  | 'PARCEL';
interface _AreaTypeEnum extends Primitive._string {
  content: AreaTypeEnum;
}

/** Defines a restriction on the type of area (road, railway, built, water,
 * ...) */
interface _AreaTypeRestriction extends _Restriction {
  type?: AreaTypeEnum[];
}
export interface AreaTypeRestriction extends _AreaTypeRestriction {
  constructor: { new (): AreaTypeRestriction };
}
export var AreaTypeRestriction: { new (): AreaTypeRestriction };

/** Assets are all physical thing in the EnergySystem. Assets can have a
 * location, a geometry, commissioning and decommissioning dates, cost information (investment,
 * installation and operation and maintenance costs). */
interface _Asset extends _Item {
  /** Defines if this Asset is aggregated of other assets of the same type */
  aggregated: string;
  /** Number of assets that are aggregated */
  aggregationCount: string;
  area: string;
  /** the type (e.g. model number) of the asset */
  assetType: string;
  /** If this date is in the future it is a planned asset in this energy
   * system */
  commissioningDate: string;
  containingAsset: string;
  containingBuilding: string;
  /** If this date is in the past, it is an asset that has been
   * decommissioned */
  decommissioningDate: string;
  /** the time required to install the asset (e.g. for calculating the
   * effects on employment or the time it takes to construct and install the asset) in days */
  installationDuration: number;
  manufacturer: string;
  /** Defines the owner of an asset (free text). Use the isOwnedBy
   * relationship to refer to a Party */
  owner: string;
  state: AssetStateEnum;
  /** The surface that is occupied by this asset in m² */
  surfaceArea: string;
  /** in years */
  technicalLifetime: number;
  bufferDistance?: BufferDistance[];
  constraint?: Constraint[];
  costInformation?: CostInformation;
  /** Describes the physical geometry of this asset. Can be a point
   * location or a polygon */
  geometry?: Geometry;
  KPIs?: KPIs;
  /** Allows for describing of what material(s) the Asset is made */
  material?: AbstractMatter;
}
export interface Asset extends _Asset {
  constructor: { new (): Asset };
}
export var Asset: { new (): Asset };

/** The AssetStateEnum allows to specify the 'state' of an Asset, mainly used
 * for manually simulating different scenarios. It can be used to temporarily disable an Asset
 * for a specific simulation, without the need to remove the Asset and loose all its parameter
 * configurations. By default the value is 'ENABLED'. 'DISABLED' can be used to disable an
 * Asset temporarily, 'OPTINAL' can be used to specify to a simulator that the Asset can
 * optionally be placed here (to be decided by the simulator, algorithm or tool). */
export type AssetStateEnum = 'ENABLED' | 'DISABLED' | 'OPTIONAL';
interface _AssetStateEnum extends Primitive._string {
  content: AssetStateEnum;
}

/** Template for an asset. Can be used to specify a generic asset type where
 * specific instances can refer to and inherit properties of. */
interface _AssetTemplate extends _Item {
  asset: Asset;
}
export interface AssetTemplate extends _AssetTemplate {
  constructor: { new (): AssetTemplate };
}
export var AssetTemplate: { new (): AssetTemplate };

/** (experimental) Used to define statistical information */
interface _AssymmetricVariance extends _AbstractVariance {
  sigmaMin: number;
  sigmaPlus: number;
}
export interface AssymmetricVariance extends _AssymmetricVariance {
  constructor: { new (): AssymmetricVariance };
}
export var AssymmetricVariance: { new (): AssymmetricVariance };

/** Aquifer Thermal Energy Storage */
interface _ATES extends _HeatStorage {
  /** The directional variation of the ratio between vertical and
   * horizontal permeability of a volume of rock or unconsolidated sand */
  aquiferAnisotropy: number;
  /** The ambient temperature of the aquifer at mid depth in degrees
   * Celcius */
  aquiferMidTemperature: number;
  /** The ratio of the total thickness of the aquifer contributing to
   * production over the total thickness of the aquifer (usually calculated by applying a
   * minimum porosity and maximum clay volume cutoff). The net thickness of the aquifer is
   * determined by multiplying the gross thickness with the net-to-gross ratio. */
  aquiferNetToGross: number;
  /** Measure of the ability or ease of a volume of rock to transmit
   * fluids, expressed in millidarcys (md) */
  aquiferPermeability: number;
  /** The percentage of pore volume or void space within a rock or
   * unconsolidated sediment, restricted to those pores that can contribute to fluid flow
   * (effective porosity) It is expressed as a fraction between 0 and 1. */
  aquiferPorosity: number;
  /** The vertical thickness of the aquifer in meters */
  aquiferThickness: number;
  /** Depth of the top of the aquifer in meters below ground surface */
  aquiferTopDepth: number;
  /** The dissolved salt content in the groundwater (expressed as NaCl
   * equivalent), in parts per million (ppm) */
  salinity: number;
  /** Diameter of the well casing in inches */
  wellCasingSize: number;
  /** The distance between the hot and the cold well at aquifer level in
   * meters */
  wellDistance: number;
}
export interface ATES extends _ATES {
  constructor: { new (): ATES };
}
export var ATES: { new (): ATES };

/** A battery can store electrical energy. This is a Storage capability */
interface _Battery extends _Storage {
  /** The maximum number of charge / discharge cycles (unitless) */
  maxChargeDischargeCycles: string;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface Battery extends _Battery {
  constructor: { new (): Battery };
}
export var Battery: { new (): Battery };

/** Converts biomass into heat and/or electricity */
interface _BiomassHeater extends _AbstractBasicConversion {}
export interface BiomassHeater extends _BiomassHeater {
  constructor: { new (): BiomassHeater };
}
export var BiomassHeater: { new (): BiomassHeater };

/** Specifies the type of the BiomassHeater, such as CHP */
export type BiomassHeaterTypeEnum = 'UNDEFINED' | 'FULLY_AUTOMATED' | 'SEMI_AUTOMATED' | 'PELLET_FIRED' | 'CHP';
interface _BiomassHeaterTypeEnum extends Primitive._string {
  content: BiomassHeaterTypeEnum;
}

/** Defines the biomass potential in a specific area. */
interface _BiomassPotential extends _Potential {
  /** The amount of biomass in Joule */
  value: number;
}
export interface BiomassPotential extends _BiomassPotential {
  constructor: { new (): BiomassPotential };
}
export var BiomassPotential: { new (): BiomassPotential };

/** Defines a parameter of type Boolean */
interface _BooleanParameter extends _Parameters {
  value: string;
}
export interface BooleanParameter extends _BooleanParameter {
  constructor: { new (): BooleanParameter };
}
export var BooleanParameter: { new (): BooleanParameter };

/** Buffer distance around an asset that relates to risks, environment, noise,
 * CO2, ... */
interface _BufferDistance extends BaseType {
  /** distance around the physical geometry of an asset that should be taken
   * into account for risks, environment, noise, .... */
  distance: number;
  /** type of buffer distance (risk, environment, noise, ...) */
  type: BufferDistanceTypeEnum;
}
export interface BufferDistance extends _BufferDistance {
  constructor: { new (): BufferDistance };
}
export var BufferDistance: { new (): BufferDistance };

export type BufferDistanceTypeEnum =
  | 'UNDEFINED'
  | 'RISK'
  | 'ENVIRONMENT'
  | 'NOISE'
  | 'PARTICULATE_MATTER'
  | 'NOX_EMISSIONS';
interface _BufferDistanceTypeEnum extends Primitive._string {
  content: BufferDistanceTypeEnum;
}

/** Represents a physical building */
interface _Building extends _GenericBuilding {}
export interface Building extends _Building {
  constructor: { new (): Building };
}
export var Building: { new (): Building };

/** Super class of all different kinds of extra information that can be
 * specified for a building */
interface _BuildingInformation extends BaseType {}
export interface BuildingInformation extends _BuildingInformation {
  constructor: { new (): BuildingInformation };
}
export var BuildingInformation: { new (): BuildingInformation };

interface _BuildingStructureInformation extends _BuildingInformation {
  /** Total area of all doors of the building in m². */
  doorArea: number;
  /** Total area of flat roofs in m². */
  flatRoofArea: number;
  /** e.g. HR++ glass */
  glassType: GlazingTypeEnum;
  /** Height of the building in m. */
  height: number;
  /** (experimental, no usage yet) in degrees with respect to north in
   * degrees. */
  orientation: string;
  /** Total perimeter of the building footprint in m. */
  perimeter: number;
  /** Thermal insulation value of the floor in m²K/W. */
  rcFloor: number;
  /** Thermal insulation value of the roof in m²K/W. */
  rcRoof: number;
  /** Thermal insulation value of the walls in m²K/W. */
  rcWall: number;
  /** Flat roof, slanted roof, or combination */
  roofType: RoofTypeEnum;
  /** Total area of slanted roofs in m². */
  slantedRoofArea: number;
  /** Heat transfer coefficient of the doors in W/m²K. */
  uDoor: number;
  /** Heat transfer coefficient of the windows in W/m²K. */
  uWindow: number;
  /** Type of ventilation used in building, e.g. mechanical ventilation */
  ventilationType: VentilationTypeEnum;
  /** Total area of all outer walls of the building in m². */
  wallArea: number;
  /** Total area of all windows of the building in m². */
  windowArea: number;
}
export interface BuildingStructureInformation extends _BuildingStructureInformation {
  constructor: { new (): BuildingStructureInformation };
}
export var BuildingStructureInformation: { new (): BuildingStructureInformation };

/** Defines a bin for a building type with a percentage, used in
 * BuildingTypeDistribution */
interface _BuildingTypeBin extends BaseType {
  buildingType: BuildingTypeEnum;
  percentage: number;
}
export interface BuildingTypeBin extends _BuildingTypeBin {
  constructor: { new (): BuildingTypeBin };
}
export var BuildingTypeBin: { new (): BuildingTypeBin };

/** Specifies the way the building type is distributed in this area (e.g.
 * Utility, Residential), specifing the percentage of buildings per type. */
interface _BuildingTypeDistribution extends _SpecificLabelDistribution {
  /** The collection of bins in the distribution */
  bin?: BuildingTypeBin[];
}
export interface BuildingTypeDistribution extends _BuildingTypeDistribution {
  constructor: { new (): BuildingTypeDistribution };
}
export var BuildingTypeDistribution: { new (): BuildingTypeDistribution };

/** Defines the different types of buildings. This list is a combination of
 * different lists that are used in the Netherlands for differentiating datasets (on buildings
 * or building related information): - One of these lists is the Dutch BAG (Basisregistratie
 * Adressen en Gebouwen or Registry of Addresses and Buildings). Within the BAG this parameter
 * is called "usage purpose" (gebruiksdoel). - Other datasets only differentiate between
 * residential and utility (the so called "built environment" in Dutch). The category utility
 * doesn't exist in the BAG list of usage purposes; within the BAG the utility has been split
 * up into many different categories. - Furthermore AGRICULTURE and GREENHOUSE have been added
 * to this list for cases where these need to be differentiated (Within the BAG these two
 * categories fall under INDUSTRY). */
export type BuildingTypeEnum =
  | 'UNDEFINED'
  | 'RESIDENTIAL'
  | 'GATHERING'
  | 'PRISON'
  | 'HEALTHCARE'
  | 'INDUSTRY'
  | 'OFFICE'
  | 'EDUCATION'
  | 'SPORTS'
  | 'SHOPPING'
  | 'HOTEL'
  | 'AGRICULTURE'
  | 'GREENHOUSE'
  | 'UTILITY'
  | 'OTHER';
interface _BuildingTypeEnum extends Primitive._string {
  content: BuildingTypeEnum;
}

/** Defines a restriction on the type of building (the purpose for which the
 * building is used). */
interface _BuildingTypeRestriction extends _Restriction {
  type?: BuildingTypeEnum[];
}
export interface BuildingTypeRestriction extends _BuildingTypeRestriction {
  constructor: { new (): BuildingTypeRestriction };
}
export var BuildingTypeRestriction: { new (): BuildingTypeRestriction };

/** Describes a physical part of a building. In dutch 'verblijfsobject' in the
 * BAG national building and address registry. This can be used e.g. to model appartments in
 * appartment complexes */
interface _BuildingUnit extends _GenericBuilding {}
export interface BuildingUnit extends _BuildingUnit {
  constructor: { new (): BuildingUnit };
}
export var BuildingUnit: { new (): BuildingUnit };

/** Collection of information about the usage of a building, such as
 * temperature set points and opening hours. */
interface _BuildingUsage extends _AbstractBuildingUsage {
  id: string;
  /** Name of the usage */
  name: string;
  /** Specifies the week schedule for cooling */
  coolingSetpoints?: WeekSchedule;
  /** Specifies the week schedule for heating */
  heatingSetpoints?: WeekSchedule;
  /** Specifies the week schedule for opening hours */
  openingHours?: WeekSchedule;
}
export interface BuildingUsage extends _BuildingUsage {
  constructor: { new (): BuildingUsage };
}
export var BuildingUsage: { new (): BuildingUsage };

/** Part of Energy System Information that specifies generic building usage
 * information that can be referenced from multiple individual buildings */
interface _BuildingUsageInformation extends BaseType {
  description: string;
  id: string;
  name: string;
  /** A reference to building usage of a building */
  buildingUsage?: BuildingUsage[];
}
export interface BuildingUsageInformation extends _BuildingUsageInformation {
  constructor: { new (): BuildingUsageInformation };
}
export var BuildingUsageInformation: { new (): BuildingUsageInformation };

/** Specifies a reference to building usage (such as opening hours) */
interface _BuildingUsageReference extends _AbstractBuildingUsage {
  reference: string;
}
export interface BuildingUsageReference extends _BuildingUsageReference {
  constructor: { new (): BuildingUsageReference };
}
export var BuildingUsageReference: { new (): BuildingUsageReference };

/** Defines a restriction on the building year range */
interface _BuildingYearRestriction extends _Restriction {
  range?: Range;
}
export interface BuildingYearRestriction extends _BuildingYearRestriction {
  constructor: { new (): BuildingYearRestriction };
}
export var BuildingYearRestriction: { new (): BuildingYearRestriction };

interface _Bus extends _AbstractConductor {
  /** related bus */
  related: BusRelatedType;
  voltage: number;
}
export interface Bus extends _Bus {
  constructor: { new (): Bus };
}
export var Bus: { new (): Bus };

type BusRelatedType = string[];

/** Compressed Air Energy Storage */
interface _CAES extends _Storage {}
export interface CAES extends _CAES {
  constructor: { new (): CAES };
}
export var CAES: { new (): CAES };

/** Abstract class to define the carrier of energy, e.g. a energy carrier or a
 * commodity (such as electricity) */
interface _Carrier extends BaseType {
  id: string;
  name: string;
  cost?: GenericProfile;
  dataSource?: AbstractDataSource;
}
export interface Carrier extends _Carrier {
  constructor: { new (): Carrier };
}
export var Carrier: { new (): Carrier };

/** Collection of carriers as part of the Energy System Information. Both
 * energy carriers and commodities. */
interface _Carriers extends BaseType {
  description: string;
  id: string;
  name: string;
  carrier?: Carrier[];
  dataSource?: AbstractDataSource;
}
export interface Carriers extends _Carriers {
  constructor: { new (): Carriers };
}
export var Carriers: { new (): Carriers };

/** Represents Carbon Capture and Storage */
interface _CCS extends _Storage {}
export interface CCS extends _CCS {
  constructor: { new (): CCS };
}
export var CCS: { new (): CCS };

interface _CheckValve extends _AbstractPassiveSwitch {
  /** Flow coefficient (kv) in metric units [m³/h]. It is defined as the
   * flow rate in cubic meters per hour [m³/h] of water at a temperature of 16º celsius
   * with a pressure drop across the valve of 1 bar. */
  flowCoefficient: number;
  innerDiameter: number;
  reopenDeltaP: number;
}
export interface CheckValve extends _CheckValve {
  constructor: { new (): CheckValve };
}
export var CheckValve: { new (): CheckValve };

/** Describes a Combined Heat and Power installation */
interface _CHP extends _CoGeneration {
  CHPType: CHPTypeEnum;
}
export interface CHP extends _CHP {
  constructor: { new (): CHP };
}
export var CHP: { new (): CHP };

/** Type of CHP, such as STEG, Gas turbine or Gas motor */
export type CHPTypeEnum = 'UNDEFINED' | 'STEG' | 'GAS_TURBINE' | 'GAS_MOTOR';
interface _CHPTypeEnum extends Primitive._string {
  content: CHPTypeEnum;
}

/** Defines a circuit breaker in electric transmission or distribution grids */
interface _CircuitBreaker extends _AbstractPassiveSwitch {}
export interface CircuitBreaker extends _CircuitBreaker {
  constructor: { new (): CircuitBreaker };
}
export var CircuitBreaker: { new (): CircuitBreaker };

/** Abstract asset describing a co-generation plant that produces heat and
 * electricity */
interface _CoGeneration extends _AbstractBasicConversion {
  /** The efficiency of the electrical part of the cogeneration asset
   * specified as a ratio between 0 and 1 (unitless) */
  electricalEfficiency: number;
  /** (legacy/experimental) input energy carrier of this plant */
  energyCarrier: string;
  /** (legacy/experimental) fuel type of this plant */
  fuelType: PowerPlantFuelEnum;
  /** The efficiency of the heat part of the cogeneration asset specified
   * as a ratio between 0 and 1 (unitless) */
  heatEfficiency: number;
  /** Ratio between heat and electricity in its output */
  HERatio: number;
  leadCommodity: CommodityEnum;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface CoGeneration extends _CoGeneration {
  constructor: { new (): CoGeneration };
}
export var CoGeneration: { new (): CoGeneration };

/** Specificaton of the combination function */
export type CombinationFunctionEnum = 'MULTIPLICATION' | 'ADDITION';
interface _CombinationFunctionEnum extends Primitive._string {
  content: CombinationFunctionEnum;
}

/** Combination of multiple transfer functions by addition of multiplication of
 * individual components */
interface _CombinedTransferFunction extends _AbstractTransferFunction {
  /** Specifies the combination function to apply to the individual
   * components of a combined transfer function */
  combinationFunction: CombinationFunctionEnum;
  component: AbstractTransferFunction[];
}
export interface CombinedTransferFunction extends _CombinedTransferFunction {
  constructor: { new (): CombinedTransferFunction };
}
export var CombinedTransferFunction: { new (): CombinedTransferFunction };

/** Abstract class for commodities */
interface _Commodity extends _Carrier {
  /** The amount of emission (CO2, NOx) produced when a fuel is burned. The
   * unit must be defined by the emissionUnit attribute. */
  emission: number;
  /** Describes to what extent this commodity is generated using renewable
   * energy. Example: ElectricityCommodity.renewableFactor = 0.24 means that 24% of this
   * electricity was generated using renewable energy. */
  renewableFactor: number;
  /** the unit of the emission attribute of the Commodity */
  emissionUnit?: AbstractQuantityAndUnit;
}
export interface Commodity extends _Commodity {
  constructor: { new (): Commodity };
}
export var Commodity: { new (): Commodity };

export type CommodityEnum = 'UNDEFINED' | 'ELECTRICITY' | 'GAS' | 'HEAT' | 'H2' | 'BIOGAS' | 'CO2' | 'ENERGY';
interface _CommodityEnum extends Primitive._string {
  content: CommodityEnum;
}

/** Asset that can contain multiple other assets that belong together. Can for
 * example be used for modelling a certain storage technology, that consists of individual
 * processes for charging and discharging, next to the storage capability itself */
interface _CompoundAsset extends _ExposedPortsAsset {
  asset?: Asset[];
}
export interface CompoundAsset extends _CompoundAsset {
  constructor: { new (): CompoundAsset };
}
export var CompoundAsset: { new (): CompoundAsset };

/** Composition of different Matters, either mixed (mix of gasses or liquids)
 * or layered. Examples of layered Matters - a construction of a wall, roof, or floor with
 * isolation - double or triple glazing consisting of multiple layers - a heatnetwork pipe or
 * electrical cable consisting of multiple layers */
interface _CompoundMatter extends _Matter {
  /** Describes w */
  compoundType: CompoundTypeEnum;
  component?: CompoundMatterComponent[];
}
export interface CompoundMatter extends _CompoundMatter {
  constructor: { new (): CompoundMatter };
}
export var CompoundMatter: { new (): CompoundMatter };

/** One of the components of a CompoundMatter instance */
interface _CompoundMatterComponent extends BaseType {
  /** In case of a collection of layers of matters, the layerWidth allows to
   * describe the width of this layer of matter in the total collection (in meter) */
  layerWidth: number;
  /** In case of a mix of matters, the mixFraction allows to describe the
   * percentage of this fraction in the total mix */
  mixFraction: number;
  matter: AbstractMatter;
}
export interface CompoundMatterComponent extends _CompoundMatterComponent {
  constructor: { new (): CompoundMatterComponent };
}
export var CompoundMatterComponent: { new (): CompoundMatterComponent };

export type CompoundTypeEnum = 'UNDEFINED' | 'MIXED' | 'LAYERED';
interface _CompoundTypeEnum extends Primitive._string {
  content: CompoundTypeEnum;
}

interface _Compressor extends _AbstractTransformer {
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface Compressor extends _Compressor {
  constructor: { new (): Compressor };
}
export var Compressor: { new (): Compressor };

/** Abstract class to group sub classes that have exposed ports or ports of its
 * own */
interface _ConnectableAsset extends _Asset {}
export interface ConnectableAsset extends _ConnectableAsset {
  constructor: { new (): ConnectableAsset };
}
export var ConnectableAsset: { new (): ConnectableAsset };

/** Allows to specify constraints for asset attributes. */
interface _Constraint extends _Item {
  /** Allows to explicitly create the contraint on a specific attribute of
   * the asset in case this is ambiguous, e.g. a power constraint on the output power of a
   * hybrid heatpump (gasheater power or heatpump power) */
  attributeReference: string;
}
export interface Constraint extends _Constraint {
  constructor: { new (): Constraint };
}
export var Constraint: { new (): Constraint };

/** Consumer type, i.e. primary energy or final energy */
export type ConsTypeEnum = 'PRIMARY' | 'FINAL';
interface _ConsTypeEnum extends Primitive._string {
  content: ConsTypeEnum;
}

/** An abstract class that describes EnergyAssets that can consume energy. It
 * is one of the 5 capabilities in ESDL */
interface _Consumer extends _EnergyAsset {
  consType: ConsTypeEnum;
  /** An annual number of full-load hours is the time it will take a given
   * Consumer to yield its annual consumption if it is able to consume with its installed
   * capacity all of the time. The capacity is defined by the 'power' attribute */
  fullLoadHours: string;
  /** Defines the amount of time it is operational in hours during the year
   * (e.g. the consumer is not in maintenance and not actively turned off) */
  operationalHours: string;
  /** Maximum power / capacity in Watt */
  power: number;
}
export interface Consumer extends _Consumer {
  constructor: { new (): Consumer };
}
export var Consumer: { new (): Consumer };

/** Defines a control strategy for a specific asset */
interface _ControlStrategy extends _EnergyService {
  energyAsset: string;
}
export interface ControlStrategy extends _ControlStrategy {
  constructor: { new (): ControlStrategy };
}
export var ControlStrategy: { new (): ControlStrategy };

/** An abstract class that describes EnergyAssets that can convert one energy
 * carrier into another. It is one of the 5 capabilities in ESDL */
interface _Conversion extends _EnergyAsset {
  /** An annual number of full-load hours is the time it will take a given
   * conversion asset to yield its annual production if it is able to produce with its
   * installed capacity all of the time. The capacity is defined by the 'power' attribute */
  fullLoadHours: string;
  /** The amount of hours per year the conversion asset is operational */
  operationalHours: string;
  residualHeatSourcePotential: string;
}
export interface Conversion extends _Conversion {
  constructor: { new (): Conversion };
}
export var Conversion: { new (): Conversion };

/** Describes the cooling demand of e.g. a building */
interface _CoolingDemand extends _Consumer {
  deviceType: CoolingDeviceType;
}
export interface CoolingDemand extends _CoolingDemand {
  constructor: { new (): CoolingDemand };
}
export var CoolingDemand: { new (): CoolingDemand };

/** Defines the types of cooling devices, such as floor cooling and air
 * conditioning */
export type CoolingDeviceType = 'UNDEFINED' | 'FLOOR_COOLING' | 'AIR_HANDLING_UNIT';
interface _CoolingDeviceType extends Primitive._string {
  content: CoolingDeviceType;
}

/** Describes the costs to acquire, install and maintain a certain asset. */
interface _CostInformation extends BaseType {
  description: string;
  /** Unique identifier for the CostInformation collection */
  id: string;
  name: string;
  /** The year for which the costs are given. */
  referenceYear: string;
  developmentCosts?: GenericProfile;
  discountRate?: GenericProfile;
  fixedMaintenanceCosts?: GenericProfile;
  fixedOperationalAndMaintenanceCosts?: GenericProfile;
  fixedOperationalCosts?: GenericProfile;
  installationCosts?: GenericProfile;
  investmentCosts?: GenericProfile;
  marginalCosts?: GenericProfile;
  variableMaintenanceCosts?: GenericProfile;
  variableOperationalAndMaintenanceCosts?: GenericProfile;
  variableOperationalCosts?: GenericProfile;
}
export interface CostInformation extends _CostInformation {
  constructor: { new (): CostInformation };
}
export var CostInformation: { new (): CostInformation };

/** Control strategy that specifies a max power at which the production is
 * curtailed */
interface _CurtailmentStrategy extends _ControlStrategy {
  /** in Watt */
  maxPower: number;
}
export interface CurtailmentStrategy extends _CurtailmentStrategy {
  constructor: { new (): CurtailmentStrategy };
}
export var CurtailmentStrategy: { new (): CurtailmentStrategy };

/** Describes the fields of a generic database-based profile */
interface _DatabaseProfile extends _ExternalProfile {
  database: string;
  /** Raw string that can be communicated as the WHERE clause of the query */
  filters: string;
  host: string;
  port: string;
}
export interface DatabaseProfile extends _DatabaseProfile {
  constructor: { new (): DatabaseProfile };
}
export var DatabaseProfile: { new (): DatabaseProfile };

/** A DataSource describes the source of the piece of information used in the
 * energy system. E.g. a profile from NEDU or typical parameters of an Asset */
interface _DataSource extends _AbstractDataSource {
  attribution: string;
  /** The name of the author of the data source */
  author: string;
  /** Email address, phone number, etc. */
  contactDetails: string;
  description: string;
  license: string;
  name: string;
  reference: string;
  releaseDate: string;
  version: string;
}
export interface DataSource extends _DataSource {
  constructor: { new (): DataSource };
}
export var DataSource: { new (): DataSource };

interface _DataSourceList extends _AbstractDataSource {
  description: string;
  name: string;
  dataSource?: DataSource[];
}
export interface DataSourceList extends _DataSourceList {
  constructor: { new (): DataSourceList };
}
export var DataSourceList: { new (): DataSourceList };

/** Defines a reference to a datasource, defined in the collection of
 * DataSources (as part of the EnergySystemInformation) */
interface _DataSourceReference extends _AbstractDataSource {
  reference: string;
}
export interface DataSourceReference extends _DataSourceReference {
  constructor: { new (): DataSourceReference };
}
export var DataSourceReference: { new (): DataSourceReference };

/** Collection of datasources used in the energy system */
interface _DataSources extends BaseType {
  description: string;
  id: string;
  name: string;
  dataSource?: DataSource[];
}
export interface DataSources extends _DataSources {
  constructor: { new (): DataSources };
}
export var DataSources: { new (): DataSources };

/** Describes a profile using one or more Profile elements. Each element
 * defines a from- and a to-datetime and a value which is valid for this range. The to-field
 * may be ommitted, meaning this value is valid for all time after the to-date. */
interface _DateTimeProfile extends _StaticProfile {
  /** List of profile elements. Should have at least one element. */
  element: ProfileElement[];
}
export interface DateTimeProfile extends _DateTimeProfile {
  constructor: { new (): DateTimeProfile };
}
export var DateTimeProfile: { new (): DateTimeProfile };

/** Specifies a day schedule as part of a week schedule. A day schedule is a
 * collection of events with a timestamp */
interface _DaySchedule extends BaseType {
  /** Collection of events with a timestamp */
  event?: Event[];
}
export interface DaySchedule extends _DaySchedule {
  constructor: { new (): DaySchedule };
}
export var DaySchedule: { new (): DaySchedule };

/** Delay transfer function with a time constant */
interface _DelayTransferFunction extends _AbstractTransferFunction {
  /** Time constant of a delay transfer function: H = y(s) / u(s) = (1 / s)
   * * e ^(-timeConstant * s) */
  timeConstant: number;
}
export interface DelayTransferFunction extends _DelayTransferFunction {
  constructor: { new (): DelayTransferFunction };
}
export var DelayTransferFunction: { new (): DelayTransferFunction };

/** Indicates a service supporting demand response in the energy system */
interface _DemandResponseService extends _EnergyService {}
export interface DemandResponseService extends _DemandResponseService {
  constructor: { new (): DemandResponseService };
}
export var DemandResponseService: { new (): DemandResponseService };

interface _DistributionKPI extends _KPI {
  distribution?: GenericLabelDistribution;
}
export interface DistributionKPI extends _DistributionKPI {
  constructor: { new (): DistributionKPI };
}
export var DistributionKPI: { new (): DistributionKPI };

/** (experimental) Used to define statistical information */
interface _DoubleAssymmetricVariance extends _AbstractVariance {
  min34perc: number;
  min48perc: number;
  plus34perc: number;
  plus48perc: number;
}
export interface DoubleAssymmetricVariance extends _DoubleAssymmetricVariance {
  constructor: { new (): DoubleAssymmetricVariance };
}
export var DoubleAssymmetricVariance: { new (): DoubleAssymmetricVariance };

/** Specifies a KPI value as a double */
interface _DoubleKPI extends _KPI {
  /** The current value of this KPI. */
  value: number;
  /** Allows to define ambitions for this KPI for several years in the
   * future. */
  target?: DoubleTargetKPI[];
}
export interface DoubleKPI extends _DoubleKPI {
  constructor: { new (): DoubleKPI };
}
export var DoubleKPI: { new (): DoubleKPI };

/** Defines a parameter of type Double */
interface _DoubleParameter extends _Parameters {
  value: number;
}
export interface DoubleParameter extends _DoubleParameter {
  constructor: { new (): DoubleParameter };
}
export var DoubleParameter: { new (): DoubleParameter };

interface _DoubleTargetKPI extends BaseType {
  /** The value of the ambition for this KPI for the specified year */
  value: number;
  /** The year for which this ambition is specified. */
  year: string;
}
export interface DoubleTargetKPI extends _DoubleTargetKPI {
  constructor: { new (): DoubleTargetKPI };
}
export var DoubleTargetKPI: { new (): DoubleTargetKPI };

/** Control strategy specifying that an asset is driven by the demand of one of
 * the output ports */
interface _DrivenByDemand extends _ControlStrategy {
  outPort: string;
}
export interface DrivenByDemand extends _DrivenByDemand {
  constructor: { new (): DrivenByDemand };
}
export var DrivenByDemand: { new (): DrivenByDemand };

/** Control strategy specifying that an asset is driven by a profile specified
 * in one of the ports (used in ESDL-based simulation tools) */
interface _DrivenByProfile extends _ControlStrategy {
  /** a reference to the port for which the profile is relevant */
  port: string;
  /** the profile to use for the DrivenByProfile strategy. Depending on
   * the purpose profiles can be power, energy, temperature, pressure, flow profiles (or
   * any other type). */
  profile?: GenericProfile;
}
export interface DrivenByProfile extends _DrivenByProfile {
  constructor: { new (): DrivenByProfile };
}
export var DrivenByProfile: { new (): DrivenByProfile };

/** Control strategy specifying that an asset is driven by the supply of one of
 * the input ports (used in ESDL-based simulation tools) */
interface _DrivenBySupply extends _ControlStrategy {
  inPort: string;
}
export interface DrivenBySupply extends _DrivenBySupply {
  constructor: { new (): DrivenBySupply };
}
export var DrivenBySupply: { new (): DrivenBySupply };

/** Defines the duration of a profile query */
interface _Duration extends BaseType {
  durationUnit: DurationUnitEnum;
  value: number;
}
export interface Duration extends _Duration {
  constructor: { new (): Duration };
}
export var Duration: { new (): Duration };

/** Specified a time period */
export type DurationUnitEnum = 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
interface _DurationUnitEnum extends Primitive._string {
  content: DurationUnitEnum;
}

/** Electricity connection of a building. Defines the demarcation between the
 * inhouse network and the electricity grid (location where the (smart) meter is located) */
interface _EConnection extends _AbstractConnection {
  EANCode: string;
}
export interface EConnection extends _EConnection {
  constructor: { new (): EConnection };
}
export var EConnection: { new (): EConnection };

/** (experimental) Can be used to define the economic properties of an area */
interface _EconomicProperties extends BaseType {
  /** in euro */
  averageIncome: number;
  averageWOZvalue: number;
  percentageHousingAssociation: number;
  percentageOwnerOccupiedProperties: number;
  percentagePrivateRental: number;
}
export interface EconomicProperties extends _EconomicProperties {
  constructor: { new (): EconomicProperties };
}
export var EconomicProperties: { new (): EconomicProperties };

interface _ElectricBoiler extends _AbstractBasicConversion {}
export interface ElectricBoiler extends _ElectricBoiler {
  constructor: { new (): ElectricBoiler };
}
export var ElectricBoiler: { new (): ElectricBoiler };

/** Describes a representation of an electricity cable. When defining the
 * geometry of a cable by means of a line, the first point of the line refers to the first port
 * and the last point of the line refers to the second port. */
interface _ElectricityCable extends _AbstractConductor {
  /** Length of the cable in meters */
  length: number;
  /** related electricity cable (e.g. for relating cables in 3 phase
   * networks) */
  related: ElectricityCableRelatedType;
}
export interface ElectricityCable extends _ElectricityCable {
  constructor: { new (): ElectricityCable };
}
export var ElectricityCable: { new (): ElectricityCable };

type ElectricityCableRelatedType = string[];

/** Defines an electricity commodity */
interface _ElectricityCommodity extends _Commodity {
  /** The voltage of the electricity commodity (in Volt) */
  voltage: number;
}
export interface ElectricityCommodity extends _ElectricityCommodity {
  constructor: { new (): ElectricityCommodity };
}
export var ElectricityCommodity: { new (): ElectricityCommodity };

/** Describes the electricity demand of e.g. a household, area, etc. */
interface _ElectricityDemand extends _Consumer {
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface ElectricityDemand extends _ElectricityDemand {
  constructor: { new (): ElectricityDemand };
}
export var ElectricityDemand: { new (): ElectricityDemand };

/** Describes an complete Electricty network, without detailing the complete
 * topology. It is a Transport capability */
interface _ElectricityNetwork extends _EnergyNetwork {
  voltage: number;
}
export interface ElectricityNetwork extends _ElectricityNetwork {
  constructor: { new (): ElectricityNetwork };
}
export var ElectricityNetwork: { new (): ElectricityNetwork };

/** Describes a (generic) electricity producing asset */
interface _ElectricityProducer extends _Producer {
  /** the minimum power (in Watt) the producer can deliver once it's turned
   * on */
  minPower: number;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface ElectricityProducer extends _ElectricityProducer {
  constructor: { new (): ElectricityProducer };
}
export var ElectricityProducer: { new (): ElectricityProducer };

/** Defines an electrolyzer that converts electricity into hydrogen */
interface _Electrolyzer extends _PowerToX {
  /** The efficiency of the electrolyzer at maximum load (unitless) */
  effMaxLoad: number;
  /** The efficiency of the electrolyzer at minimum load (unitless) */
  effMinLoad: number;
  /** The maximum allowed load in Watt */
  maxLoad: string;
  /** The minimum allowed load in Watt */
  minLoad: string;
  outputPressure: number;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface Electrolyzer extends _Electrolyzer {
  constructor: { new (): Electrolyzer };
}
export var Electrolyzer: { new (): Electrolyzer };

/** An abstract class that describes a connectable Asset using ports.
 * EnergyAssets main subclasses contain the 5 capability type: Producer, Consumer, Storage,
 * Conversion and Transport */
interface _EnergyAsset extends _ConnectableAsset {
  controlStrategy: string;
  /** parameter that allows to specify the (dynamic) behaviour of this
   * asset */
  behaviour?: AbstractBehaviour[];
  port?: Port[];
}
export interface EnergyAsset extends _EnergyAsset {
  constructor: { new (): EnergyAsset };
}
export var EnergyAsset: { new (): EnergyAsset };

/** Defines a carrier of energy with its emission and energy content properties */
interface _EnergyCarrier extends _Carrier {
  /** The amount of emission (CO2, NOx) produced when a fuel is burned. The
   * unit must be defined by the emissionUnit attribute. */
  emission: number;
  energyCarrierType: RenewableTypeEnum;
  /** The energycontent of the fuel. The unit must be defined by the
   * energyContentUnit attribute. */
  energyContent: number;
  stateOfMatter: StateOfMatterEnum;
  /** Allows describing the composition of the energy carrier into
   * different Fuels */
  composition?: AbstractMatter;
  /** the unit of the emission attribute of the EnergyCarrier */
  emissionUnit?: AbstractQuantityAndUnit;
  /** the unit of the energyContent attribute of the EnergyCarrier */
  energyContentUnit?: AbstractQuantityAndUnit;
}
export interface EnergyCarrier extends _EnergyCarrier {
  constructor: { new (): EnergyCarrier };
}
export var EnergyCarrier: { new (): EnergyCarrier };

/** Generic energy commodity, to be used in (national) energy balances (when
 * the type of energy is not important) */
interface _EnergyCommodity extends _Commodity {}
export interface EnergyCommodity extends _EnergyCommodity {
  constructor: { new (): EnergyCommodity };
}
export var EnergyCommodity: { new (): EnergyCommodity };

/** Allows to describe the total energy demand when differentiation between
 * energy carriers is not possible or required, otherwise e.g. ElectricityDemand or
 * HeatingDemand is an alternative */
interface _EnergyDemand extends _Consumer {}
export interface EnergyDemand extends _EnergyDemand {
  constructor: { new (): EnergyDemand };
}
export var EnergyDemand: { new (): EnergyDemand };

/** Defines a bin for an energy label with a percentage, used in
 * EnergyLabelDistribution */
interface _EnergyLabelBin extends BaseType {
  energyLabel: EnergyLabelEnum;
  percentage: number;
}
export interface EnergyLabelBin extends _EnergyLabelBin {
  constructor: { new (): EnergyLabelBin };
}
export var EnergyLabelBin: { new (): EnergyLabelBin };

/** Defines a distribution in terms of energy labels */
interface _EnergyLabelDistribution extends _SpecificLabelDistribution {
  /** The collection of bins in the distribution */
  bin?: EnergyLabelBin[];
}
export interface EnergyLabelDistribution extends _EnergyLabelDistribution {
  constructor: { new (): EnergyLabelDistribution };
}
export var EnergyLabelDistribution: { new (): EnergyLabelDistribution };

/** Dutch system for energy labels for residential buildings, e.g. Label A, B,
 * F */
export type EnergyLabelEnum =
  | 'UNDEFINED'
  | 'LABEL_G'
  | 'LABEL_F'
  | 'LABEL_E'
  | 'LABEL_D'
  | 'LABEL_C'
  | 'LABEL_B'
  | 'LABEL_A'
  | 'LABEL_AP'
  | 'LABEL_APP'
  | 'LABEL_APPP'
  | 'LABEL_APPPP';
interface _EnergyLabelEnum extends Primitive._string {
  content: EnergyLabelEnum;
}

/** Defines an EnergyMarket of the energy system. A market is defined by
 * specifying the assets that participate in this market. */
interface _EnergyMarket extends _EnergyService {
  asset: EnergyMarketAssetType;
  carrier: string;
  /** The market price is the resulting price of the market determined by
   * the market rules. It can be expressed as an instantaneous value (SingleValue) or as
   * a timeseries profile (DateTimeProfile, or database profile). */
  marketPrice?: GenericProfile;
  parameters?: Parameters[];
}
export interface EnergyMarket extends _EnergyMarket {
  constructor: { new (): EnergyMarket };
}
export var EnergyMarket: { new (): EnergyMarket };

type EnergyMarketAssetType = string[];

/** Defines an energy network. Used for national energy balances, when the
 * specific energy carrier is not required */
interface _EnergyNetwork extends _Transport {}
export interface EnergyNetwork extends _EnergyNetwork {
  constructor: { new (): EnergyNetwork };
}
export var EnergyNetwork: { new (): EnergyNetwork };

/** Abstract class to represent logical entities in the energy system, e.g.
 * demand response services, energy markets, etc. */
interface _EnergyService extends _Service {}
export interface EnergyService extends _EnergyService {
  constructor: { new (): EnergyService };
}
export var EnergyService: { new (): EnergyService };

/** This is the main class to describe an EnergySystem in ESDL. Each energy
 * system description should start with this class. More information about ESDL and the Energy
 * System can be found in the gitbook at https://energytransition.gitbook.io/esdl/ */
interface _EnergySystem extends BaseType {
  /** A description of the energy system */
  description: string;
  /** ESDL version used to create this Energy System, e.g. v2101 for the
   * January 2021 release. */
  esdlVersion: string;
  /** Geographical scope of the energy system as a text. In the area itself you
   * can define the scope in more detail */
  geographicalScope: string;
  /** A unique identifier for this energy system */
  id: string;
  /** Name of the energy system */
  name: string;
  version: string;
  /** The EnergySystemInformation class is a container for additional
   * information about the EnergySystem in general, such as profiles, energy carriers, data
   * sources, etc. You can refer to these in other parts of the energy system description. */
  energySystemInformation?: EnergySystemInformation;
  /** Instances are used to represent different representations of the same
   * EnergySystem. Most of the times only one Instance will be used. The primary use case for
   * having more than one Instance is when you have different aggregations of the same
   * EnergySystem in the same model (e.g. the same region on house level and aggregated on
   * neighbourhood level). Another option would be to create different instances for
   * different years (to describe the progress of the energy transition). */
  instance?: Instance[];
  /** The collection of measures that can be applied in this energy system by
   * models and tools */
  measures?: Measures;
  /** Parties involved in the EnergySystem, e.g. to model ownership of assets
   * or areas. */
  parties?: Parties;
  /** (experimental) A selection of sectors that is relevant for this energy
   * system */
  sector?: SectorEnum[];
  /** (experimental) Abstract information like services (demand response,
   * aggregator services), energy markets and control strategies. */
  services?: Services;
  /** Collection of generic templates that can be used to derive specific
   * instances from. */
  templates?: Templates;
}
export interface EnergySystem extends _EnergySystem {
  constructor: { new (): EnergySystem };
}
export var EnergySystem: { new (): EnergySystem };

/** Describes reusable information of the energy system, that other classes can
 * refer to in this energy system, such as carriers, profiles, data sources, quantity and
 * units. */
interface _EnergySystemInformation extends BaseType {
  id: string;
  buildingUsageInformation?: BuildingUsageInformation;
  carriers?: Carriers;
  dataSources?: DataSources;
  environmentalProfiles?: EnvironmentalProfiles;
  matters?: Matters;
  mobilityFuelInformation?: MobilityFuelInformation;
  notes?: Notes;
  profiles?: Profiles;
  quantityAndUnits?: QuantityAndUnits;
  sectors?: Sectors;
}
export interface EnergySystemInformation extends _EnergySystemInformation {
  constructor: { new (): EnergySystemInformation };
}
export var EnergySystemInformation: { new (): EnergySystemInformation };

interface _EnvironmentalProfiles extends BaseType {
  description: string;
  /** Unique identifier for the EnvironmentalProfiles collection */
  id: string;
  name: string;
  /** Outside temperature profile in degrees Celcius, unless specified
   * otherwise. */
  outsideTemperatureProfile?: GenericProfile;
  /** Relative humidity profile in %, unless specified otherwise. */
  relativeHumidityProfile?: GenericProfile;
  /** Soil temperature profile in degrees Celcius, unless specified
   * otherwise. */
  soilTemperatureProfile?: GenericProfile;
  /** Solar irradiance profile in W/m², unless specified otherwise. */
  solarIrradianceProfile?: GenericProfile;
  /** Wind direction profile. Given direction is where the wind is coming
   * from. Standard unit is degrees, unless specified otherwise (0 degrees means north, 90
   * east, 180 south and 270 means west). */
  windDirectionProfile?: GenericProfile;
  /** Wind speed profile in metres/second, unless specified otherwise. */
  windSpeedProfile?: GenericProfile;
}
export interface EnvironmentalProfiles extends _EnvironmentalProfiles {
  constructor: { new (): EnvironmentalProfiles };
}
export var EnvironmentalProfiles: { new (): EnvironmentalProfiles };

/** Represents a charging station for electrical vehicles. Both single
 * private-owned car chargers and public charging spaces can be modelled by this class */
interface _EVChargingStation extends _Consumer {
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface EVChargingStation extends _EVChargingStation {
  constructor: { new (): EVChargingStation };
}
export var EVChargingStation: { new (): EVChargingStation };

/** Event with a timestamp */
interface _Event extends BaseType {
  /** Description of the event */
  description: string;
  id: string;
  /** Time at which the event occurs, e.g. 10:00 */
  time: string;
  /** Specifies a value in an event, such as a setpoint temperature, on/off,
   * etc. */
  value: number;
}
export interface Event extends _Event {
  constructor: { new (): Event };
}
export var Event: { new (): Event };

/** Represents a consumer that consumes exported energy from the current energy
 * system. Used to model the rest of the energy system that is out of the current scope */
interface _Export extends _Consumer {}
export interface Export extends _Export {
  constructor: { new (): Export };
}
export var Export: { new (): Export };

/** Abstract class with a reference to exposed ports. It's the super class of
 * CompoundAsset and all Buildings */
interface _ExposedPortsAsset extends _ConnectableAsset {
  port: ExposedPortsAssetPortType;
}
export interface ExposedPortsAsset extends _ExposedPortsAsset {
  constructor: { new (): ExposedPortsAsset };
}
export var ExposedPortsAsset: { new (): ExposedPortsAsset };

type ExposedPortsAssetPortType = string[];

/** ExternalProfile allows to refer to an externally defined profile. Common
 * uses are a profile defined in a (timeseries) database such as InfluxDB. It allows you to
 * specify a multiplier to scale the supplied external profile by a certain factor (e.g. when
 * using NEDU profiles). Default the multiplier is '1'. */
interface _ExternalProfile extends _GenericProfile {
  endDate: string;
  /** A multiplier can be used to scale the supplied external profile by a
   * certain factor (e.g. when using NEDU profiles). Default the multiplier is '1'. */
  multiplier: number;
  startDate: string;
}
export interface ExternalProfile extends _ExternalProfile {
  constructor: { new (): ExternalProfile };
}
export var ExternalProfile: { new (): ExternalProfile };

/** Defines a plant fuelled by biomass */
interface _FermentationPlant extends _AbstractBasicConversion {}
export interface FermentationPlant extends _FermentationPlant {
  constructor: { new (): FermentationPlant };
}
export var FermentationPlant: { new (): FermentationPlant };

/** Defines a distribution in terms of 'from' and 'to' */
interface _FromToDistribution extends _GenericLabelDistribution {
  fromToItem?: FromToItem[];
}
export interface FromToDistribution extends _FromToDistribution {
  constructor: { new (): FromToDistribution };
}
export var FromToDistribution: { new (): FromToDistribution };

/** Specifies a percentage range as an double value, as part of a distribution,
 * e.g. for defining energy usage (2.5-5.0 GJ of hot tap water) in Aggregated Buildings */
interface _FromToDoubleItem extends _FromToItem {
  from: number;
  to: number;
}
export interface FromToDoubleItem extends _FromToDoubleItem {
  constructor: { new (): FromToDoubleItem };
}
export var FromToDoubleItem: { new (): FromToDoubleItem };

/** Specifies a percentage range as an integer value, as part of a
 * distribution, e.g. for defining a period of years (1945-1960) in Aggregated Buildings */
interface _FromToIntItem extends _FromToItem {
  from: string;
  to: string;
}
export interface FromToIntItem extends _FromToIntItem {
  constructor: { new (): FromToIntItem };
}
export var FromToIntItem: { new (): FromToIntItem };

/** Defines a range and a percentage, used in the FromToDistribution class */
interface _FromToItem extends BaseType {
  value: number;
}
export interface FromToItem extends _FromToItem {
  constructor: { new (): FromToItem };
}
export var FromToItem: { new (): FromToItem };

/** a Fuel like wood, oil, gas, and so on. */
interface _Fuel extends _Matter {
  /** The amount of emission (CO2, NOx) produced when a fuel is burned. The
   * unit must be defined by the emissionUnit attribute. */
  emission: number;
  /** The energycontent of the fuel. The unit must be defined by the
   * energyContentUnit attribute. */
  energyContent: number;
  emissionUnit?: AbstractQuantityAndUnit;
  energyContentUnit?: AbstractQuantityAndUnit;
}
export interface Fuel extends _Fuel {
  constructor: { new (): Fuel };
}
export var Fuel: { new (): Fuel };

/** Defines a Fuel Cell */
interface _FuelCell extends _CoGeneration {}
export interface FuelCell extends _FuelCell {
  constructor: { new (): FuelCell };
}
export var FuelCell: { new (): FuelCell };

/** Defines a gas commodity. This class can be used as an abstract way of
 * modelling gas commodity and can be used in conjunction with electricity commodity and heat
 * commodity. If more detailed modelling is necessary, use energy carriers. */
interface _GasCommodity extends _Commodity {
  /** The pressure of the gas commodity (in Pa) */
  pressure: number;
}
export interface GasCommodity extends _GasCommodity {
  constructor: { new (): GasCommodity };
}
export var GasCommodity: { new (): GasCommodity };

/** Defines an asset that can convert gas into another form of gas. E.g. SMR or
 * ATR. */
interface _GasConversion extends _AbstractBasicConversion {
  outputPressure: number;
  type: GasConversionTypeEnum;
}
export interface GasConversion extends _GasConversion {
  constructor: { new (): GasConversion };
}
export var GasConversion: { new (): GasConversion };

/** Type of gas conversion, e.g. SMR or ATR */
export type GasConversionTypeEnum = 'UNDEFINED' | 'SMR' | 'ATR' | 'METHANATION';
interface _GasConversionTypeEnum extends Primitive._string {
  content: GasConversionTypeEnum;
}

/** Describes the gas demand of e.g. a household, area, etc. This can be used
 * for all types of gasses (e.g. CO2, Natural Gas, Hydrogen, etc.) */
interface _GasDemand extends _Consumer {}
export interface GasDemand extends _GasDemand {
  constructor: { new (): GasDemand };
}
export var GasDemand: { new (): GasDemand };

/** Converts gas to heat, e.g. a gas boiler or gas heater */
interface _GasHeater extends _AbstractBasicConversion {
  /** The minimum burn rate of the gasheater when turned on specified as a
   * ratio between 0 and 1 (unitless) */
  minimumBurnRate: number;
  type: GasHeaterTypeEnum;
}
export interface GasHeater extends _GasHeater {
  constructor: { new (): GasHeater };
}
export var GasHeater: { new (): GasHeater };

/** Efficiency type of gas heater, such as HR100, HRE, etc. */
export type GasHeaterTypeEnum = 'UNDEFINED' | 'CR' | 'VR' | 'HR100' | 'HR104' | 'HR107' | 'HRE' | 'HRWW';
interface _GasHeaterTypeEnum extends Primitive._string {
  content: GasHeaterTypeEnum;
}

/** Describes an complete gas network, without detailing the complete topology.
 * It is a Transport capability */
interface _GasNetwork extends _EnergyNetwork {
  pressure: number;
}
export interface GasNetwork extends _GasNetwork {
  constructor: { new (): GasNetwork };
}
export var GasNetwork: { new (): GasNetwork };

/** Describes a (generic) gas producing asset */
interface _GasProducer extends _Producer {}
export interface GasProducer extends _GasProducer {
  constructor: { new (): GasProducer };
}
export var GasProducer: { new (): GasProducer };

/** Defines a gas storage asset, see also CCS */
interface _GasStorage extends _Storage {
  /** maximum pressure of the gas that can be stored (in Pa) */
  maxStoragePressure: number;
  /** minimum pressure of the gas that can be stored (in Pa) */
  minStoragePressure: number;
  /** physical volume (im m³) of the gas storage */
  volume: number;
  /** The working volume represents the amount of gas (im m³) at
   * atmospheric conditions that can be stored in the gas storage between
   * minStoragePressure and maxStoragePressure */
  workingVolume: number;
}
export interface GasStorage extends _GasStorage {
  constructor: { new (): GasStorage };
}
export var GasStorage: { new (): GasStorage };

/** Gas connection of a building. Defines the demarcation between the inhouse
 * network and the gas grid (location where the (smart) meter is located) */
interface _GConnection extends _AbstractConnection {}
export interface GConnection extends _GConnection {
  constructor: { new (): GConnection };
}
export var GConnection: { new (): GConnection };

/** Represents a physical building */
interface _GenericBuilding extends _AbstractBuilding {
  buildingYear: string;
  energyIndex: number;
  energyLabel: EnergyLabelEnum;
  /** in m² */
  floorArea: number;
  numberOfFloors: string;
  address?: Address;
  buildinginformation?: BuildingInformation[];
  /** Describes the building types as defined by RVO in the Netherlands,
   * in dutch for now, e.g. Vrijstaande woning, Rijwoning, Flatwoning, Hoekwoning */
  type?: BuildingTypeEnum[];
}
export interface GenericBuilding extends _GenericBuilding {
  constructor: { new (): GenericBuilding };
}
export var GenericBuilding: { new (): GenericBuilding };

/** Generic consumer class that can be used in cases that the actual asset type
 * is not important or not supported yet in ESDL */
interface _GenericConsumer extends _Consumer {}
export interface GenericConsumer extends _GenericConsumer {
  constructor: { new (): GenericConsumer };
}
export var GenericConsumer: { new (): GenericConsumer };

/** Generic conversion class that can be used in cases that the actual asset
 * type is not important or not supported yet in ESDL */
interface _GenericConversion extends _AbstractBasicConversion {}
export interface GenericConversion extends _GenericConversion {
  constructor: { new (): GenericConversion };
}
export var GenericConversion: { new (): GenericConversion };

/** Abstract class to represent different types of distributions */
interface _GenericDistribution extends BaseType {
  name: string;
}
export interface GenericDistribution extends _GenericDistribution {
  constructor: { new (): GenericDistribution };
}
export var GenericDistribution: { new (): GenericDistribution };

interface _GenericLabelDistribution extends _GenericDistribution {}
export interface GenericLabelDistribution extends _GenericLabelDistribution {
  constructor: { new (): GenericLabelDistribution };
}
export var GenericLabelDistribution: { new (): GenericLabelDistribution };

/** Generic producer class that can be used in cases that the actual asset type
 * is not important or not supported yet in ESDL */
interface _GenericProducer extends _Producer {}
export interface GenericProducer extends _GenericProducer {
  constructor: { new (): GenericProducer };
}
export var GenericProducer: { new (): GenericProducer };

/** All profiles should describe these fields: a name and a ProfileType. There
 * are two different profile types: static, with static values stored in the ESDL model itself.
 * And External, which allows you to refer to an externally defined profile (e.g. in an Energy
 * Information System or a timeseries database) */
interface _GenericProfile extends BaseType {
  id: string;
  interpolationMethod: InterpolationMethodEnum;
  name: string;
  profileType: ProfileTypeEnum;
  dataSource?: AbstractDataSource;
  profileQuantityAndUnit?: AbstractQuantityAndUnit;
}
export interface GenericProfile extends _GenericProfile {
  constructor: { new (): GenericProfile };
}
export var GenericProfile: { new (): GenericProfile };

/** Generic storage class that can be used in cases that the actual asset type
 * is not important or not supported yet in ESDL */
interface _GenericStorage extends _Storage {}
export interface GenericStorage extends _GenericStorage {
  constructor: { new (): GenericStorage };
}
export var GenericStorage: { new (): GenericStorage };

/** Generic transfer function with numerator and denominator */
interface _GenericTransferFunction extends _AbstractTransferFunction {
  /** Polynomial constants of the denominator in a Laplace representation
   * of a transfer function: H = y(s) / u(s) = (a0 + a1 * s + a2 * s^2 + ... + an * s^n)
   * / (b0 + b1 * s + b2 * s^2 + ... + bn * s^n) */
  denominator?: number[];
  /** Polynomial constants of the numerator in a Laplace representation
   * of a transfer function: H = y(s) / u(s) = (a0 + a1 * s + a2 * s^2 + ... + an * s^n)
   * / (b0 + b1 * s + b2 * s^2 + ... + bn * s^n) */
  numerator?: number[];
}
export interface GenericTransferFunction extends _GenericTransferFunction {
  constructor: { new (): GenericTransferFunction };
}
export var GenericTransferFunction: { new (): GenericTransferFunction };

/** Generic transport class that can be used in cases that the actual asset
 * type is not important or not supported yet in ESDL */
interface _GenericTransport extends _Transport {}
export interface GenericTransport extends _GenericTransport {
  constructor: { new (): GenericTransport };
}
export var GenericTransport: { new (): GenericTransport };

/** Abstract class to define the shape/location of an asset or area. Parent
 * class of e.g. Point, Line and Polygon */
interface _Geometry extends BaseType {
  /** The Coordinate Reference System, e.g. WGS-84 (GPS / lattitude,
   * longitude), RD (EPSG:28992) */
  CRS: string;
}
export interface Geometry extends _Geometry {
  constructor: { new (): Geometry };
}
export var Geometry: { new (): Geometry };

/** Defines the geothermal potential in a specific area. This type focusses on
 * energy and depth of the well. See GeothermalPotental for class focussing on temperature */
interface _GeothermalEnergyPotential extends _AbstractGTPotential {
  /** the depth at which the geothermal energy potential is located (in
   * meters) */
  depth: string;
  /** The potential energy that can be extracted from this potential
   * geothermal source (in Joules) */
  value: number;
}
export interface GeothermalEnergyPotential extends _GeothermalEnergyPotential {
  constructor: { new (): GeothermalEnergyPotential };
}
export var GeothermalEnergyPotential: { new (): GeothermalEnergyPotential };

/** Defines the geothermal potential in a specific area. This type focusses on
 * temperature and depth of the well. See GeothermalEnergyPotental for class focussing on
 * Energy */
interface _GeothermalPotential extends _AbstractGTPotential {
  depth: string;
  potential: GeothermalPotentialEnum;
  powerPerDoublet: GeothermalPowerEnum;
  temperature: string;
}
export interface GeothermalPotential extends _GeothermalPotential {
  constructor: { new (): GeothermalPotential };
}
export var GeothermalPotential: { new (): GeothermalPotential };

/** (experimental) Describes the chances of finding geothermal energy */
export type GeothermalPotentialEnum = 'UNKNOWN' | 'POSSIBLE' | 'GOOD';
interface _GeothermalPotentialEnum extends Primitive._string {
  content: GeothermalPotentialEnum;
}

/** Describes the chances of finding geothermal energy including the expected
 * thermal power */
export type GeothermalPowerEnum = 'UNKNOWN' | 'POSSIBLE_GT5MWTH' | 'GOOD_GT5MWTH' | 'GOOD_GT7P5MWTH' | 'GOOD_GT10MWTH';
interface _GeothermalPowerEnum extends Primitive._string {
  content: GeothermalPowerEnum;
}

/** Geothermal source including the installation that connects the source to
 * the network */
interface _GeothermalSource extends _HeatProducer {
  /** in degrees Celcius */
  aquiferTemperature: number;
  /** Coefficient of Performance of this source (unitless) */
  COP: number;
  /** in kg/s */
  flowRate: number;
  /** references the potential this source is part of */
  geothermalPotential: string;
  /** type of production of this source, e.g. Heat or Electricity */
  geothermalSourceType: GeothermalSourceTypeEnum;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
  /** in Watt */
  pumpPower: number;
  /** in m */
  wellDepth: number;
}
export interface GeothermalSource extends _GeothermalSource {
  constructor: { new (): GeothermalSource };
}
export var GeothermalSource: { new (): GeothermalSource };

/** Type of geothermal source (heat / electricity) */
export type GeothermalSourceTypeEnum = 'UNDEFINED' | 'HEAT' | 'ELECTRICITY';
interface _GeothermalSourceTypeEnum extends Primitive._string {
  content: GeothermalSourceTypeEnum;
}

/** Allows to specify the glass of a building, e.g. for calculating heat loss */
interface _Glazing extends _Asset {
  /** Enumeration of different types of glass, such as HR++ */
  glazingType: GlazingTypeEnum;
  /** The u-value of the window (thermal isolation) in W/m².K */
  uWindow: number;
}
export interface Glazing extends _Glazing {
  constructor: { new (): Glazing };
}
export var Glazing: { new (): Glazing };

/** Defines the type of glass used in a building, e.g. HR-glass. Defined in
 * dutch */
export type GlazingTypeEnum =
  | 'UNDEFINED'
  | 'ENKEL_GLAS'
  | 'DUBBEL_GLAS'
  | 'HR_GLAS'
  | 'HRP_GLAS'
  | 'HRPP_GLAS'
  | 'HRPPP_GLAS';
interface _GlazingTypeEnum extends Primitive._string {
  content: GlazingTypeEnum;
}

/** Heat connection of a building. Defines the demarcation between the inhouse
 * network and the heat grid (location where the (smart) meter is located) */
interface _HConnection extends _AbstractConnection {}
export interface HConnection extends _HConnection {
  constructor: { new (): HConnection };
}
export var HConnection: { new (): HConnection };

/** Defines a heat commodity */
interface _HeatCommodity extends _Commodity {
  /** The return temperature used in the heat system (in degrees Celcius) */
  returnTemperature: number;
  /** The supply temperature used in the heat system (in degrees Celcius) */
  supplyTemperature: number;
}
export interface HeatCommodity extends _HeatCommodity {
  constructor: { new (): HeatCommodity };
}
export var HeatCommodity: { new (): HeatCommodity };

export type HeatDemandTypeEnum = 'UNDEFINED' | 'SPACE_HEATING' | 'HOT_TAPWATER' | 'SH_AND_HTW' | 'COOKING' | 'OTHER';
interface _HeatDemandTypeEnum extends Primitive._string {
  content: HeatDemandTypeEnum;
}

/** Exchange heat between two circuits */
interface _HeatExchange extends _AbstractTransformer {
  diameterPrimarySide: number;
  diameterSecundarySide: number;
  /** The heat transfer coefficient in W/K */
  heatTransferCoefficient: number;
  lengthPrimarySide: number;
  lengthSecundarySide: number;
  roughnessPrimarySide: number;
  roughnessSecundarySide: number;
}
export interface HeatExchange extends _HeatExchange {
  constructor: { new (): HeatExchange };
}
export var HeatExchange: { new (): HeatExchange };

/** Describes the heating demand of e.g. a household, area, etc. */
interface _HeatingDemand extends _Consumer {
  deviceType: HeatRadiationDeviceTypeEnum;
  /** Maximum allowed input temperature (in degrees Celcuis) */
  maxTemperature: number;
  /** Minimum required input temperature (in degrees Celcuis) */
  minTemperature: number;
  type: HeatDemandTypeEnum;
}
export interface HeatingDemand extends _HeatingDemand {
  constructor: { new (): HeatingDemand };
}
export var HeatingDemand: { new (): HeatingDemand };

/** Describes an complete heat network, without detailing the complete
 * topology. It is a Transport capability */
interface _HeatNetwork extends _EnergyNetwork {
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
}
export interface HeatNetwork extends _HeatNetwork {
  constructor: { new (): HeatNetwork };
}
export var HeatNetwork: { new (): HeatNetwork };

/** Describes a (generic) heat producing asset */
interface _HeatProducer extends _Producer {
  /** The maximum temperature of the heat that can be generated (in degrees
   * Celcius) */
  maxTemperature: number;
  /** The minimum temperature of the heat that can be generated (in degrees
   * Celcius) */
  minTemperature: number;
}
export interface HeatProducer extends _HeatProducer {
  constructor: { new (): HeatProducer };
}
export var HeatProducer: { new (): HeatProducer };

/** Describes a Heat Pump */
interface _HeatPump extends _AbstractBasicConversion {
  /** (legacy/experimental) In case of hybrid usage */
  additionalHeatingSourceType: AdditionalHeatingSourceTypeEnum;
  /** Coefficient of performance of this Heat Pump */
  COP: number;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
  /** Type of the source, e.g. Air, subsurface, aquifer */
  source: SourceTypeEnum;
  /** number of heat pump stages */
  stages: string;
}
export interface HeatPump extends _HeatPump {
  constructor: { new (): HeatPump };
}
export var HeatPump: { new (): HeatPump };

/** Defines the types of heat radiation devices, such as high and low
 * temperature radiators, floor heating, etc. */
export type HeatRadiationDeviceTypeEnum =
  | 'UNDEFINED'
  | 'HT_RADIATOR'
  | 'LT_RADIATOR'
  | 'FLOOR_HEATING'
  | 'WALL_HEATING'
  | 'INFRARED_PANEL'
  | 'AIR_HANDLING_UNIT';
interface _HeatRadiationDeviceTypeEnum extends Primitive._string {
  content: HeatRadiationDeviceTypeEnum;
}

/** Generic heat storage asset with min and max temperatures */
interface _HeatStorage extends _Storage {
  /** maximum temperature of the heat that can be stored */
  maxStorageTemperature: number;
  /** minimum temperature of the heat that can be stored */
  minStorageTemperature: number;
  /** volume (im m³) of the heat storage */
  volume: number;
}
export interface HeatStorage extends _HeatStorage {
  constructor: { new (): HeatStorage };
}
export var HeatStorage: { new (): HeatStorage };

/** Hybrid heatpump with both an electric heatpump and a gasheater part */
interface _HybridHeatPump extends _Conversion {
  /** Efficiency of the gasheater part of the hybrid heatpump (unitless) */
  gasHeaterEfficiency: number;
  /** Thermal output power of the gasheater part of the hybrid heatpump (in
   * Watts) */
  gasHeaterThermalPower: number;
  /** COP of the electric heatpump part of the hybrid heatpump (unitless)
   * used for cooling */
  heatPumpCoolingCOP: number;
  /** output power of the electric heatpump part of the hybrid heatpump (in
   * Watts) used for cooling */
  heatPumpCoolingPower: number;
  /** COP of the electric heatpump part of the hybrid heatpump (unitless)
   * used for heating */
  heatPumpCOP: number;
  /** Thermal output power of the electric heatpump part of the hybrid
   * heatpump (in Watts) used for heating */
  heatPumpThermalPower: number;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
}
export interface HybridHeatPump extends _HybridHeatPump {
  constructor: { new (): HybridHeatPump };
}
export var HybridHeatPump: { new (): HybridHeatPump };

/** Represents a source that delivers imported energy into the current energy
 * system. Used to model the rest of the energy system that is out of the current scope */
interface _Import extends _Producer {}
export interface Import extends _Import {
  constructor: { new (): Import };
}
export var Import: { new (): Import };

/** Describes a profile based on a measurement and field as part of an InfluxDB
 * timeseries query */
interface _InfluxDBProfile extends _DatabaseProfile {
  field: string;
  measurement: string;
}
export interface InfluxDBProfile extends _InfluxDBProfile {
  constructor: { new (): InfluxDBProfile };
}
export var InfluxDBProfile: { new (): InfluxDBProfile };

/** (experimental) Defines the composition of the household of a building unit
 * in Dutch, e.g. Alleenstaand, Bejaard echtpaar */
export type InhabitantsTypeEnum = 'UNDEFINED' | 'ALLEENSTAAND' | 'TWEEVERDIENERS' | 'GEZIN_MET_KINDEREN' | 'SENIOREN';
interface _InhabitantsTypeEnum extends Primitive._string {
  content: InhabitantsTypeEnum;
}

/** Can be used to explicitely set an initial value of a certain parameter.
 * Used as input for simulation models that calculate this parameter over time, but need a
 * value to initialize the model. */
interface _InitialValue extends _StaticProfile {
  /** The initial value */
  value: number;
}
export interface InitialValue extends _InitialValue {
  constructor: { new (): InitialValue };
}
export var InitialValue: { new (): InitialValue };

/** Represents a port with a positive energy direction into the asset, e.g. for
 * a Consumer. See Port for more details */
interface _InPort extends _Port {
  connectedTo: InPortConnectedToType;
}
export interface InPort extends _InPort {
  constructor: { new (): InPort };
}
export var InPort: { new (): InPort };

type InPortConnectedToType = string[];

/** Describes the relation between one of the ports of an asset (the mainPort)
 * and all other ports using a specific ratio. Can be used for conversion assets to specify how
 * much of the carrier on the InPorts is required to produce an x amount of the carrier on the
 * OutPort. */
interface _InputOutputRelation extends _AbstractBehaviour {
  /** Main port for which all relations to other ports are specified */
  mainPort: string;
  /** Quantity and unit information related to the main port in the
   * InputOutputRelation */
  mainPortQuantityAndUnit?: AbstractQuantityAndUnit;
  /** relation between the main port and an other port */
  mainPortRelation: PortRelation[];
}
export interface InputOutputRelation extends _InputOutputRelation {
  constructor: { new (): InputOutputRelation };
}
export var InputOutputRelation: { new (): InputOutputRelation };

/** Instances are used to represent different representations of the same
 * EnergySystem. Most of the times only one Instance will be used. The primary use case for
 * having more than one Instance is when you have different aggregations of the same
 * EnergySystem in the same model (e.g. the same region on house level and aggregated on
 * neighbourhood level). Another option would be to create different instances for different
 * years (to describe the progress of the energy transition). */
interface _Instance extends BaseType {
  /** (experimental) defines how the data in this instance is aggregated, e.g.
   * by commodity, total energy, per capability, etc. */
  aggrType: AggrTypeEnum;
  /** Human readable description of this instance */
  description: string;
  /** (experimental) Scope of the instance, e.g. Country or Municipality */
  detailLevel: AreaScopeEnum;
  /** Unique identifier for this instance */
  id: string;
  /** Name of the instance */
  name: string;
  /** Top level area of this instance */
  area?: Area;
  /** Defines the time aspect of the data in this instance, e.g. a snapshot
   * in time or a range in time where this instance is valid */
  date?: AbstractInstanceDate;
}
export interface Instance extends _Instance {
  constructor: { new (): Instance };
}
export var Instance: { new (): Instance };

/** Describes the date of the validity of the data that is used in this
 * instance */
interface _InstanceDate extends _AbstractInstanceDate {
  date: string;
}
export interface InstanceDate extends _InstanceDate {
  constructor: { new (): InstanceDate };
}
export var InstanceDate: { new (): InstanceDate };

/** Describes the period of the validity of the data that is used in this
 * instance */
interface _InstancePeriod extends _AbstractInstanceDate {
  fromDate: string;
  toDate: string;
}
export interface InstancePeriod extends _InstancePeriod {
  constructor: { new (): InstancePeriod };
}
export var InstancePeriod: { new (): InstancePeriod };

/** Describes insulation that can be added to a building. The relation with the
 * heat consumption is not defined and requires manual modelling */
interface _Insulation extends _Asset {
  thermalInsulation: number;
}
export interface Insulation extends _Insulation {
  constructor: { new (): Insulation };
}
export var Insulation: { new (): Insulation };

/** Defines a parameter of type Integer */
interface _IntegerParameter extends _Parameters {
  value: string;
}
export interface IntegerParameter extends _IntegerParameter {
  constructor: { new (): IntegerParameter };
}
export var IntegerParameter: { new (): IntegerParameter };

/** Type of interpolation between elements in the profile. See
 * https://docs.scipy.org/doc/scipy/reference/tutorial/interpolate.html for additional
 * documentation and figures */
export type InterpolationMethodEnum =
  | 'UNDEFINED'
  | 'NONE'
  | 'LINEAR'
  | 'CUBIC'
  | 'NEAREST'
  | 'PREVIOUS'
  | 'NEXT'
  | 'OTHER';
interface _InterpolationMethodEnum extends Primitive._string {
  content: InterpolationMethodEnum;
}

/** Specifies a KPI value as an integer */
interface _IntKPI extends _KPI {
  /** The current value of this KPI. */
  value: string;
  /** Allows to define ambitions for this KPI for several years in the
   * future. */
  target?: IntTargetKPI[];
}
export interface IntKPI extends _IntKPI {
  constructor: { new (): IntKPI };
}
export var IntKPI: { new (): IntKPI };

interface _IntTargetKPI extends BaseType {
  /** The value of the ambition for this KPI for the specified year */
  value: string;
  /** The year for which this ambition is specified. */
  year: string;
}
export interface IntTargetKPI extends _IntTargetKPI {
  constructor: { new (): IntTargetKPI };
}
export var IntTargetKPI: { new (): IntTargetKPI };

/** Class describing an abstract thing in an energy system. It is the parent of
 * many other classes in ESDL, such as Assets, Services and Potentials. Parties can own Items */
interface _Item extends BaseType {
  /** Human readable description of this object */
  description: string;
  /** Unique identifier for this object */
  id: string;
  /** Refers to the owner of this object */
  isOwnedBy: string;
  /** Name describing this object */
  name: string;
  /** ID of item in the original data source. Can be used to make links to the
   * original data */
  originalIdInSource: string;
  /** Refers to the sector this object is used in */
  sector: string;
  /** Short name for this object, e.g. used in legends of graphs in
   * presentations */
  shortName: string;
  /** Reference to the datasource where the information in this object is
   * coming from */
  dataSource?: AbstractDataSource;
}
export interface Item extends _Item {
  constructor: { new (): Item };
}
export var Item: { new (): Item };

/** A Joint is a means to connect AbstractConductors, such as Pipes and
 * ElectricalCables. This helps when these conductors have opposite Ports. */
interface _Joint extends _AbstractConductor {
  /** related joint */
  related: JointRelatedType;
}
export interface Joint extends _Joint {
  constructor: { new (): Joint };
}
export var Joint: { new (): Joint };

type JointRelatedType = string[];

/** Defines a key performance indicator (KPI) */
interface _KPI extends BaseType {
  carrier: KPICarrierType;
  description: string;
  /** The ID of this KPI. */
  id: string;
  matter: KPIMatterType;
  /** The name of the KPI. */
  name: string;
  sector: KPISectorType;
  /** Sub KPIs of the parent KPI. */
  kpi?: KPI[];
  quantityAndUnit?: AbstractQuantityAndUnit;
}
export interface KPI extends _KPI {
  constructor: { new (): KPI };
}
export var KPI: { new (): KPI };

type KPICarrierType = string[];

type KPIMatterType = string[];

/** Collection of key performance indicators of areas or assets */
interface _KPIs extends BaseType {
  description: string;
  id: string;
  kpi?: KPI[];
}
export interface KPIs extends _KPIs {
  constructor: { new (): KPIs };
}
export var KPIs: { new (): KPIs };

type KPISectorType = string[];

interface _LabelJump extends BaseType {
  fromLabel: EnergyLabelEnum;
  toLabel: EnergyLabelEnum;
  /** The (energy) savings belonging to the energy label jump. Can be
   * expressed as an absolute value (in kWh, GJ, kWh/m², ...) or a relative value (%) using
   * the profileQuanityAndUnit reference. */
  savings?: SingleValue;
}
export interface LabelJump extends _LabelJump {
  constructor: { new (): LabelJump };
}
export var LabelJump: { new (): LabelJump };

/** Used to define an area in which its purpose is defined by legal
 * authorities, such as restricted areas. E.g. in areas where water is extracted, it is not
 * allowed to plan new UTES. */
interface _LegalArea extends _Potential {
  purpose: string;
}
export interface LegalArea extends _LegalArea {
  constructor: { new (): LegalArea };
}
export var LegalArea: { new (): LegalArea };

/** Describes a line geometry based on a list of points, which can be used to
 * define the shape of pipes and cables */
interface _Line extends _Geometry {
  point: Point[];
}
export interface Line extends _Line {
  constructor: { new (): Line };
}
export var Line: { new (): Line };

/** Used to define losses explicitly (as a Consumer capability) */
interface _Losses extends _Consumer {}
export interface Losses extends _Losses {
  constructor: { new (): Losses };
}
export var Losses: { new (): Losses };

/** a Material like copper, aluminum, wood, stone, concrete, water, styrofoam,
 * plaster */
interface _Material extends _Matter {
  /** Electrical conductivity in S/m (Siemens per meter) */
  electricalConductivity: number;
  /** The specific heat capacity of the material in J/Kkg (Joule per Kelvin
   * kilogram) */
  specificHeatCapacity: number;
  /** Thermal conductivity of the material in W/mK (Watt per meter Kelvin) */
  thermalConductivity: number;
  /** The Young's modulus is a mechanical property that measures the
   * stiffness of a solid material (in Pascal or Newton/m²) */
  youngsModulus: number;
}
export interface Material extends _Material {
  constructor: { new (): Material };
}
export var Material: { new (): Material };

/** Abstract class for describing matters. There are three subclasses: -
 * Material: for the materials of which Assets are made, but also for raw materials (e.g. water
 * as an input for an electrolyzer) - Fuels: for decomposing EnergyCarriers - CompoundMatter
 * for creating a mixture or a collection of Materials or Fuels */
interface _Matter extends _AbstractMatter {
  /** Density of the matter in kg/m³ (kilogram per cubic meter) */
  density: number;
  stateOfMatter: StateOfMatterEnum;
}
export interface Matter extends _Matter {
  constructor: { new (): Matter };
}
export var Matter: { new (): Matter };

/** can be used to refer to a Matter from the collection of Matters (part of
 * EnergySystemInformation) */
interface _MatterReference extends _AbstractMatter {
  reference: string;
}
export interface MatterReference extends _MatterReference {
  constructor: { new (): MatterReference };
}
export var MatterReference: { new (): MatterReference };

interface _Matters extends BaseType {
  description: string;
  id: string;
  name: string;
  dataSource?: AbstractDataSource;
  matter?: Matter[];
}
export interface Matters extends _Matters {
  constructor: { new (): Matters };
}
export var Matters: { new (): Matters };

/** A single measure or a combination of measures with collective cost
 * information that can be applied to an energy system. An example of a measure-combination
 * would be a combination of insulation and a heat pump. */
interface _Measure extends _AbstractMeasure {
  type: MeasureTypeEnum;
  /** list of assets of which the measure consists */
  asset?: Asset[];
  /** Information about the costs of the measure. This involves the total
   * costs, if required individual costs can be specified per asset */
  costInformation?: CostInformation;
  /** Specifies whether or not this measure includes a energy label jump */
  labelJump?: LabelJump;
  restriction?: Restriction[];
}
export interface Measure extends _Measure {
  constructor: { new (): Measure };
}
export var Measure: { new (): Measure };

interface _MeasureReference extends _AbstractMeasure {
  reference: string;
}
export interface MeasureReference extends _MeasureReference {
  constructor: { new (): MeasureReference };
}
export var MeasureReference: { new (): MeasureReference };

/** Collection of measures that can be applied to an energy system */
interface _Measures extends _Item {
  measure?: AbstractMeasure[];
}
export interface Measures extends _Measures {
  constructor: { new (): Measures };
}
export var Measures: { new (): Measures };

export type MeasureTypeEnum = 'UNDEFINED' | 'ADD_GEOMETRY' | 'MODEL_RESTRICTION';
interface _MeasureTypeEnum extends Primitive._string {
  content: MeasureTypeEnum;
}

/** Defines a restriction on the minimum label required. Allows to specify for
 * example to only apply a heatpump in a house with energy label B or better. */
interface _MinimumLabelRestriction extends _Restriction {
  label: EnergyLabelEnum;
}
export interface MinimumLabelRestriction extends _MinimumLabelRestriction {
  constructor: { new (): MinimumLabelRestriction };
}
export var MinimumLabelRestriction: { new (): MinimumLabelRestriction };

/** Energy demand of the mobility sector. Allows to specify the vehicle types,
 * fuel types and their efficiency and distance travelled */
interface _MobilityDemand extends _Consumer {
  /** distance travelled in meters */
  distance: string;
  efficiency: number;
  fuelType: MobilityFuelTypeEnum;
  type?: VehicleTypeEnum[];
}
export interface MobilityDemand extends _MobilityDemand {
  constructor: { new (): MobilityDemand };
}
export var MobilityDemand: { new (): MobilityDemand };

/** Collection of information about vehicles, fuels and efficiency */
interface _MobilityFuelInformation extends BaseType {
  description: string;
  id: string;
  name: string;
  dataSource?: AbstractDataSource;
  vehicleFuelEfficiency?: VehicleFuelEfficiency[];
}
export interface MobilityFuelInformation extends _MobilityFuelInformation {
  constructor: { new (): MobilityFuelInformation };
}
export var MobilityFuelInformation: { new (): MobilityFuelInformation };

/** Fuel type of the vehicle (category) */
export type MobilityFuelTypeEnum =
  | 'UNDEFINED'
  | 'PETROL'
  | 'DIESEL'
  | 'HYDROGEN'
  | 'LPG'
  | 'BIOFUEL'
  | 'ELECTRICITY'
  | 'OIL'
  | 'LNG'
  | 'KEROSENE';
interface _MobilityFuelTypeEnum extends Primitive._string {
  content: MobilityFuelTypeEnum;
}

/** (experimental) Can be used to define the mobility properties of an area */
interface _MobilityProperties extends BaseType {
  numberOfVehicles?: NumberOfVehicles;
}
export interface MobilityProperties extends _MobilityProperties {
  constructor: { new (): MobilityProperties };
}
export var MobilityProperties: { new (): MobilityProperties };

/** Defines a collection of lines */
interface _MultiLine extends _Geometry {
  line: Line[];
}
export interface MultiLine extends _MultiLine {
  constructor: { new (): MultiLine };
}
export var MultiLine: { new (): MultiLine };

/** Defines the possible multipliers in QuantityAndUnitType */
export type MultiplierEnum =
  | 'NONE'
  | 'ATTO'
  | 'FEMTO'
  | 'PICO'
  | 'NANO'
  | 'MICRO'
  | 'MILLI'
  | 'CENTI'
  | 'DECI'
  | 'DEKA'
  | 'HECTO'
  | 'KILO'
  | 'MEGA'
  | 'GIGA'
  | 'TERA'
  | 'TERRA'
  | 'PETA'
  | 'EXA';
interface _MultiplierEnum extends Primitive._string {
  content: MultiplierEnum;
}

/** Collection of Polygons */
interface _MultiPolygon extends _Geometry {
  polygon: Polygon[];
}
export interface MultiPolygon extends _MultiPolygon {
  constructor: { new (): MultiPolygon };
}
export var MultiPolygon: { new (): MultiPolygon };

/** An individual note that can have a location on the map, to document certain
 * decisions */
interface _Note extends BaseType {
  /** Author of the note */
  author: string;
  /** Date the note was added */
  date: string;
  /** Unique identifier for the note */
  id: string;
  /** Text of the note */
  text: string;
  /** Title for this note */
  title: string;
  /** Location on the map of the note */
  mapLocation?: Point;
}
export interface Note extends _Note {
  constructor: { new (): Note };
}
export var Note: { new (): Note };

/** Collection of notes that can be added to the map, like postits (with
 * comments in HTML) */
interface _Notes extends BaseType {
  description: string;
  /** Unique identifier for the Notes collection */
  id: string;
  name: string;
  note?: Note[];
}
export interface Notes extends _Notes {
  constructor: { new (): Notes };
}
export var Notes: { new (): Notes };

/** (experimental) Provides the ability to define the number of vehicles of an
 * area */
interface _NumberOfVehicles extends BaseType {
  vehicleCount?: VehicleCount[];
}
export interface NumberOfVehicles extends _NumberOfVehicles {
  constructor: { new (): NumberOfVehicles };
}
export var NumberOfVehicles: { new (): NumberOfVehicles };

/** Represents a port with a positive energy direction out of the asset, e.g.
 * for a Producer. See Port for more details */
interface _OutPort extends _Port {
  connectedTo: OutPortConnectedToType;
}
export interface OutPort extends _OutPort {
  constructor: { new (): OutPort };
}
export var OutPort: { new (): OutPort };

type OutPortConnectedToType = string[];

/** Defines a bin for a ownership/rental type with a percentage, used in
 * OwnershipRentalTypeDistribution */
interface _OwnershipRentalTypeBin extends BaseType {
  ownershipRentalType: OwnershipRentalTypeEnum;
  percentage: number;
}
export interface OwnershipRentalTypeBin extends _OwnershipRentalTypeBin {
  constructor: { new (): OwnershipRentalTypeBin };
}
export var OwnershipRentalTypeBin: { new (): OwnershipRentalTypeBin };

/** Specifies the way the housing type is distributed in this area (e.g. Owner
 * occupied, Housing Association, Private Rental), specifing the percentage of buildings per
 * housing type. */
interface _OwnershipRentalTypeDistribution extends _SpecificLabelDistribution {
  /** The collection of bins in the distribution */
  bin?: OwnershipRentalTypeBin[];
}
export interface OwnershipRentalTypeDistribution extends _OwnershipRentalTypeDistribution {
  constructor: { new (): OwnershipRentalTypeDistribution };
}
export var OwnershipRentalTypeDistribution: { new (): OwnershipRentalTypeDistribution };

/** Defines the type of ownership such as Private, Rental or Housing
 * association */
export type OwnershipRentalTypeEnum = 'UNDEFINED' | 'PRIVATELY_OWNED' | 'PRIVATE_RENTAL' | 'HOUSING_ASSOCIATION';
interface _OwnershipRentalTypeEnum extends Primitive._string {
  content: OwnershipRentalTypeEnum;
}

/** Used to describe properties of an EnergyMarket */
interface _Parameters extends BaseType {
  name: string;
  parameterUnit?: AbstractQuantityAndUnit;
}
export interface Parameters extends _Parameters {
  constructor: { new (): Parameters };
}
export var Parameters: { new (): Parameters };

/** Container for parties that have a role in the energy system */
interface _Parties extends BaseType {
  party?: Party[];
}
export interface Parties extends _Parties {
  constructor: { new (): Parties };
}
export var Parties: { new (): Parties };

/** Defines a stakeholder in the energy system, to represent ownership */
interface _Party extends BaseType {
  id: string;
  name: string;
  owns: PartyOwnsType;
  ownsArea: PartyOwnsAreaType;
  sector: string;
  shortName: string;
}
export interface Party extends _Party {
  constructor: { new (): Party };
}
export var Party: { new (): Party };

type PartyOwnsAreaType = string[];

type PartyOwnsType = string[];

/** Defines the percentile of a percentile distribution */
interface _Percentile extends BaseType {
  percentile: string;
  value: number;
}
export interface Percentile extends _Percentile {
  constructor: { new (): Percentile };
}
export var Percentile: { new (): Percentile };

/** Defines a distribution in terms of percentiles */
interface _PercentileDistribution extends _GenericDistribution {
  percentile?: Percentile[];
}
export interface PercentileDistribution extends _PercentileDistribution {
  constructor: { new (): PercentileDistribution };
}
export var PercentileDistribution: { new (): PercentileDistribution };

/** Defines the possible physical quantities in QuantityAndUnitType */
export type PhysicalQuantityEnum =
  | 'UNDEFINED'
  | 'ENERGY'
  | 'POWER'
  | 'VOLTAGE'
  | 'PRESSURE'
  | 'TEMPERATURE'
  | 'EMISSION'
  | 'COST'
  | 'TIME'
  | 'LENGTH'
  | 'DISTANCE'
  | 'IRRADIANCE'
  | 'SPEED'
  | 'STATE_OF_CHARGE'
  | 'VOLUME'
  | 'AREA'
  | 'POWER_REACTIVE'
  | 'COMPOSITION'
  | 'FLOW'
  | 'STATE'
  | 'HEAD'
  | 'POSITION'
  | 'COEFFICIENT'
  | 'WEIGHT'
  | 'FORCE'
  | 'CURRENT'
  | 'RELATIVE_HUMIDITY'
  | 'DIRECTION';
interface _PhysicalQuantityEnum extends Primitive._string {
  content: PhysicalQuantityEnum;
}

/** Control strategy specifying that an asset is driven by a PID controller
 * (used in ESDL-based simulation tools) */
interface _PIDController extends _ControlStrategy {
  /** Derivative gain of the PID controller */
  Kd: number;
  /** Integral gain of the PID controller */
  Ki: number;
  /** Proportional gain of the PID controller */
  Kp: number;
  /** Sensor used to measure the process variable. The PID controller tries
   * to minimize the error between the setPoint and the measured process variable. */
  sensor: string;
  /** Desired setpoint of the measured process variable. The PID
   * controller tries to minimize the error between the setPoint and the measured process
   * variable. */
  setPoint: GenericProfile;
}
export interface PIDController extends _PIDController {
  constructor: { new (): PIDController };
}
export var PIDController: { new (): PIDController };

/** Represents a pipe to transport gasses or fluids. When defining the geometry
 * of a pipe by means of a line, the first point of the line refers to the first port and the
 * last point of the line refers to the second port. */
interface _Pipe extends _AbstractConductor {
  /** Defines the pipe diameter using DN standard. A pipe catalog is
   * required to translate these DN sizes to actual diameters (in meter). When using the
   * default value for this field (VALUE_SPECIFIED), both innerDIameter and outerDiameter
   * fields are used, instead of the values in this Enumeration. */
  diameter: PipeDiameterEnum;
  /** Inner diameter of pipe in meters */
  innerDiameter: number;
  /** Length of the pipe in meters */
  length: number;
  /** Outer diameter of pipe in meters */
  outerDiameter: number;
  /** related pipe (e.g. for relating supply and return pipes) */
  related: PipeRelatedType;
  /** Roughness of the pipe in meters */
  roughness: number;
}
export interface Pipe extends _Pipe {
  constructor: { new (): Pipe };
}
export var Pipe: { new (): Pipe };

/** Defines the pipe diameter in DN size. When this field is set to
 * VALUE_SPECIFIED (default) both innerDiameter and outerDiameter fields are used for diameter
 * specification. If not, an appropriate pipe catalog should be used to calculate the
 * properties of the pipe, based on the speficied DN size. This allows for different pipe
 * types, e.g. with or without insulation. */
export type PipeDiameterEnum =
  | 'VALUE_SPECIFIED'
  | 'DN6'
  | 'DN8'
  | 'DN10'
  | 'DN15'
  | 'DN20'
  | 'DN25'
  | 'DN32'
  | 'DN40'
  | 'DN50'
  | 'DN65'
  | 'DN80'
  | 'DN100'
  | 'DN125'
  | 'DN150'
  | 'DN200'
  | 'DN250'
  | 'DN300'
  | 'DN350'
  | 'DN400'
  | 'DN450'
  | 'DN500'
  | 'DN600'
  | 'DN650'
  | 'DN700'
  | 'DN800'
  | 'DN900'
  | 'DN1000'
  | 'DN1100'
  | 'DN1200';
interface _PipeDiameterEnum extends Primitive._string {
  content: PipeDiameterEnum;
}

type PipeRelatedType = string[];

/** (experimental) Used to define statistical information */
interface _PItemStat extends BaseType {
  sigma: number;
  value: number;
}
export interface PItemStat extends _PItemStat {
  constructor: { new (): PItemStat };
}
export var PItemStat: { new (): PItemStat };

/** Describes a point geometry, which can be used for giving assets a location
 * on a map */
interface _Point extends _Geometry {
  elevation: number;
  lat: number;
  lon: number;
}
export interface Point extends _Point {
  constructor: { new (): Point };
}
export var Point: { new (): Point };

/** Describes a polygon geometry, which can be used for defining the shape of
 * an area or building */
interface _Polygon extends _Geometry {
  exterior: SubPolygon;
  interior?: SubPolygon[];
}
export interface Polygon extends _Polygon {
  constructor: { new (): Polygon };
}
export var Polygon: { new (): Polygon };

/** Ports allow connections between EnergyAssets. Ports can be connected to one
 * or more other ports. There are two types of ports: InPort and OutPort, which defines the
 * primary direction of positive energy flow. InPorts can only be connected to OutPorts and
 * vice versa. */
interface _Port extends BaseType {
  /** Defines the carrier of this port */
  carrier: string;
  /** Refers to the parent asset this port belongs to */
  energyasset: string;
  /** Unique identifier for this port */
  id: string;
  /** Maximum power in Watt */
  maxPower: number;
  /** Name of the port */
  name: string;
  /** simultaneous power in Watt (under discussion) */
  simultaneousPower: number;
  constraint?: Constraint[];
  /** Contains the profile attached to this port. Profiles */
  profile?: GenericProfile[];
}
export interface Port extends _Port {
  constructor: { new (): Port };
}
export var Port: { new (): Port };

/** Specifies the relation between a port and the main port using a specific
 * ratio. */
interface _PortRelation extends BaseType {
  /** Port for this specific relation */
  port: string;
  /** The port ratio defines the ratio of energy produced/consumed at the main
   * port to that in this port, using the formula: energy(mainPort) = ratio * energy(port) */
  ratio: number;
  /** Quantity and unit information related to the (non-main) port in the
   * InputOutputRelation */
  quantityAndUnit?: AbstractQuantityAndUnit;
}
export interface PortRelation extends _PortRelation {
  constructor: { new (): PortRelation };
}
export var PortRelation: { new (): PortRelation };

/** Abstract class that represents energy potentials in an area, like wind
 * potential, geothermal potential, residual heat source potential, etc. */
interface _Potential extends _Item {
  aggregated: string;
  aggregationCount: string;
  geometryReference: string;
  geometry?: Geometry;
  /** determines the used quantity and unit of the value attribute in the
   * potential class */
  quantityAndUnit?: AbstractQuantityAndUnit;
}
export interface Potential extends _Potential {
  constructor: { new (): Potential };
}
export var Potential: { new (): Potential };

/** Defines an electricity generating plant */
interface _PowerPlant extends _AbstractBasicConversion {
  /** The efficiency of the power plant at maximum load (unitless) */
  effMaxLoad: number;
  /** The efficiency of the power plant at minimum load (unitless) */
  effMinLoad: number;
  /** Reference to the source of the plant */
  energyCarrier: string;
  fuel: PowerPlantFuelEnum;
  /** The maximum allowed load in Watt */
  maxLoad: string;
  /** The minimum allowed load in Watt */
  minLoad: string;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
  type: PowerPlantTypeEnum;
  mustRun?: GenericProfile;
}
export interface PowerPlant extends _PowerPlant {
  constructor: { new (): PowerPlant };
}
export var PowerPlant: { new (): PowerPlant };

/** (to be removed) Type of fuel of this plant */
export type PowerPlantFuelEnum = 'UNDEFINED' | 'COAL' | 'BLAST_FURNACE_GAS' | 'NATURAL_GAS' | 'URANIUM' | 'HYDROGEN';
interface _PowerPlantFuelEnum extends Primitive._string {
  content: PowerPlantFuelEnum;
}

export type PowerPlantTypeEnum =
  | 'UNDEFINED'
  | 'STEAM_TURBINE'
  | 'INTERNAL_COMBUSTION'
  | 'COMBINED_CYCLE_GAS_TURBINE'
  | 'OPEN_CYCLE_GAS_TURBINE'
  | 'INTEGRARED_COMBUSTION_COMBINED_CYCLE'
  | 'SUPER_CRITICAL_STEAM_TURBINE'
  | 'NUCLEAR_2ND_GENERATION'
  | 'NUCLEAR_3RD_GENERATION'
  | 'NUCLEAR_4TH_GENERATION'
  | 'WASTE_INCENERATION';
interface _PowerPlantTypeEnum extends Primitive._string {
  content: PowerPlantTypeEnum;
}

/** Represents the ability to convert electricity to some other form of energy */
interface _PowerToX extends _AbstractBasicConversion {}
export interface PowerToX extends _PowerToX {
  constructor: { new (): PowerToX };
}
export var PowerToX: { new (): PowerToX };

interface _PressureReducingValve extends _AbstractTransformer {
  /** The valve coefficient of a valve describes the relationship between
   * the pressure drop across the valve and the corresponding flow rate. It is defined as
   * the flow rate in cubic meters per hour [m³/h] of water at a temperature of 16º celsius
   * with a pressure drop across the valve of 1 bar. */
  valveCoefficient: number;
}
export interface PressureReducingValve extends _PressureReducingValve {
  constructor: { new (): PressureReducingValve };
}
export var PressureReducingValve: { new (): PressureReducingValve };

/** An abstract class that describes EnergyAssets that can produce energy. It
 * is one of the 5 capabilities in ESDL */
interface _Producer extends _EnergyAsset {
  /** An annual number of full-load hours is the time it will take a given
   * Producer to yield its annual production if it is able to produce with its installed
   * capacity all of the time. The capacity is defined by the 'power' attribute */
  fullLoadHours: string;
  /** Defines the amount of time it is operational in hours during the year
   * (e.g. the producer is not in maintenance and not actively turned off) */
  operationalHours: string;
  /** Maximum (output) power in Watt. This attribute specifies the rated
   * output power of the producer. */
  power: number;
  prodType: RenewableTypeEnum;
}
export interface Producer extends _Producer {
  constructor: { new (): Producer };
}
export var Producer: { new (): Producer };

/** ProfileElement describes a single profile element describing a range and a
 * value which is valid for this range. From-field is inclusive, To-field is exclusive,
 * allowing you to describe ranges such as 1-1-2017T00:00:00.000 to 1-1-2018T00:00:00.000
 * instead of 31-12-2017T23:59:59:999. The to-field may be ommitted, meaning this value is
 * valid for all time after the specified to-datetime. Examples: The heat demand of a
 * municipality in 2013 is 20 PJ. The range you define is then from 1-1-2013T to 1-1-2014T and
 * the value 20 and ProfileType ENERGY_IN_PJ */
interface _ProfileElement extends BaseType {
  /** Start datetime of the profile element, the given datetime is part of the
   * period. At least one of the attributes from/to must be given (so one, or both). */
  from: string;
  /** Start endtime of the profile element, the given datetime is NOT part of
   * the period. At least one of the attributes from/to must be given (so one, or both). */
  to: string;
  value: number;
}
export interface ProfileElement extends _ProfileElement {
  constructor: { new (): ProfileElement };
}
export var ProfileElement: { new (): ProfileElement };

/** Used to refer to profiles defined in the Energy System Information section */
interface _ProfileReference extends _StaticProfile {
  /** Allows to multiply the referred profile by a certain factor (e.g.
   * when using normalized profiles) */
  multiplier: number;
  reference: string;
}
export interface ProfileReference extends _ProfileReference {
  constructor: { new (): ProfileReference };
}
export var ProfileReference: { new (): ProfileReference };

/** Container for profiles in the Energy System Information where other
 * profiles can refer to */
interface _Profiles extends BaseType {
  description: string;
  /** Unique identifier for the Profiles collection */
  id: string;
  name: string;
  profile?: GenericProfile[];
}
export interface Profiles extends _Profiles {
  constructor: { new (): Profiles };
}
export var Profiles: { new (): Profiles };

/** (deprecated in future version, to be replaced with Quantity and Units) */
export type ProfileTypeEnum =
  | 'UNDEFINED'
  | 'SOLARIRRADIANCE_IN_W_PER_M2'
  | 'WINDSPEED_IN_M_PER_S'
  | 'STATEOFCHARGE_IN_WS'
  | 'ENERGY_IN_WH'
  | 'ENERGY_IN_KWH'
  | 'ENERGY_IN_MWH'
  | 'ENERGY_IN_GWH'
  | 'ENERGY_IN_J'
  | 'ENERGY_IN_KJ'
  | 'ENERGY_IN_MJ'
  | 'ENERGY_IN_GJ'
  | 'ENERGY_IN_TJ'
  | 'ENERGY_IN_PJ'
  | 'TEMPERATURE_IN_C'
  | 'TEMPERATURE_IN_K'
  | 'POWER_IN_W'
  | 'POWER_IN_KW'
  | 'POWER_IN_MW'
  | 'POWER_IN_GW'
  | 'POWER_IN_TW'
  | 'MONEY_IN_EUR'
  | 'MONEY_IN_KEUR'
  | 'MONEY_IN_MEUR'
  | 'PERCENTAGE'
  | 'MONEY_IN_EUR_PER_KW'
  | 'MONEY_IN_EUR_PER_KWH'
  | 'VOLUME_IN_M3'
  | 'VOLUME_IN_LITERS';
interface _ProfileTypeEnum extends Primitive._string {
  content: ProfileTypeEnum;
}

/** Defines a pump, e.g. in a water or heat network */
interface _Pump extends _AbstractTransformer {
  /** The polar moment of inertia of the pump in kg/m² */
  polarMomentOfInertia: number;
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
  /** Capacity of the pump in m³/h */
  pumpCapacity: number;
  /** Efficiency of the pump. */
  pumpEfficiency: number;
  /** The rated speed of the pump in rad/s */
  ratedSpeed: number;
  /** The pump curve specified as a table */
  pumpCurveTable?: Table;
}
export interface Pump extends _Pump {
  constructor: { new (): Pump };
}
export var Pump: { new (): Pump };

interface _PumpedHydroPower extends _Storage {}
export interface PumpedHydroPower extends _PumpedHydroPower {
  constructor: { new (): PumpedHydroPower };
}
export var PumpedHydroPower: { new (): PumpedHydroPower };

/** Defines a Photo Voltaic Installation, e.g. roof top PV, a PV field or parc. */
interface _PVInstallation extends _PVPanel {
  /** The number of solar panels of the PV installation (unitless) */
  numberOfPanels: string;
  type: PVInstallationTypeEnum;
}
export interface PVInstallation extends _PVInstallation {
  constructor: { new (): PVInstallation };
}
export var PVInstallation: { new (): PVInstallation };

/** Type of PV installation, such as installed on roofs or as a field */
export type PVInstallationTypeEnum =
  | 'UNDEFINED'
  | 'ROOFTOP_PV'
  | 'BUILDING_INTEGRATED_PV'
  | 'WINDOW'
  | 'ROAD'
  | 'FIELD'
  | 'WATER'
  | 'CONCENTRATED_SOLAR';
interface _PVInstallationTypeEnum extends Primitive._string {
  content: PVInstallationTypeEnum;
}

/** Describes an individual PV panel. See PVInstallation for multiple PV
 * panels. This is a Producer capability */
interface _PVPanel extends _ElectricityProducer {
  /** The tilt angle of the PV installation in degrees (e.g. 0 is flat, 90
   * is perpendicular to a horizontal surface). */
  angle: string;
  /** The efficiency of the inverter (unitless) */
  inverterEfficiency: number;
  /** The orientation of the PV installation (south, north, west, east) in
   * degrees. */
  orientation: string;
  /** The efficiency of the solar panels (unitless) */
  panelEfficiency: number;
}
export interface PVPanel extends _PVPanel {
  constructor: { new (): PVPanel };
}
export var PVPanel: { new (): PVPanel };

/** Defines a PV park of multiple panels */
interface _PVPark extends _PVPanel {
  /** The number of solar panels in the solar park (unitless) */
  numberOfPanels: string;
}
export interface PVPark extends _PVPark {
  constructor: { new (): PVPark };
}
export var PVPark: { new (): PVPark };

/** Defines an installation that combines PV and thermal energy collection */
interface _PVTInstallation extends _Producer {
  /** The power factor is defined as the ratio of active power (measured in
   * Watts) to the apparent power (measured in VA). */
  powerFactor: number;
  type: SolarCollectorTypeEnum;
}
export interface PVTInstallation extends _PVTInstallation {
  constructor: { new (): PVTInstallation };
}
export var PVTInstallation: { new (): PVTInstallation };

/** Defines a reference to a QuantityAndUnitType defined in the collection of
 * QuantityAndUnits (as part of the EnergySystemInformation) */
interface _QuantityAndUnitReference extends _AbstractQuantityAndUnit {
  reference: string;
}
export interface QuantityAndUnitReference extends _QuantityAndUnitReference {
  constructor: { new (): QuantityAndUnitReference };
}
export var QuantityAndUnitReference: { new (): QuantityAndUnitReference };

/** Collection of QuantityAndUnitTypes defined in the EnergySystemInformation
 * section */
interface _QuantityAndUnits extends BaseType {
  description: string;
  /** Unique identifier for the QuantityAndUnits collection */
  id: string;
  name: string;
  quantityAndUnit?: QuantityAndUnitType[];
}
export interface QuantityAndUnits extends _QuantityAndUnits {
  constructor: { new (): QuantityAndUnits };
}
export var QuantityAndUnits: { new (): QuantityAndUnits };

export type QuantityAndUnitScopeEnum = 'UNDEFINED' | 'CONNECTION' | 'BUILDING' | 'HOUSEHOLD';
interface _QuantityAndUnitScopeEnum extends Primitive._string {
  content: QuantityAndUnitScopeEnum;
}

/** Defines the quantity and its unit for a specific parameter. Used in e.g.
 * profiles and KPIs. For example Energy in Joules or CO2 emission in kton. */
interface _QuantityAndUnitType extends _AbstractQuantityAndUnit {
  description: string;
  id: string;
  multiplier: MultiplierEnum;
  perMultiplier: MultiplierEnum;
  perScope: QuantityAndUnitScopeEnum;
  perTimeUnit: TimeUnitEnum;
  perUnit: UnitEnum;
  physicalQuantity: PhysicalQuantityEnum;
  unit: UnitEnum;
}
export interface QuantityAndUnitType extends _QuantityAndUnitType {
  constructor: { new (): QuantityAndUnitType };
}
export var QuantityAndUnitType: { new (): QuantityAndUnitType };

/** Defines a range between two values */
interface _Range extends _StaticProfile {
  maxValue: number;
  minValue: number;
}
export interface Range extends _Range {
  constructor: { new (): Range };
}
export var Range: { new (): Range };

/** Allow to specify a certain constraint as a range (with min and max values) */
interface _RangedConstraint extends _Constraint {
  range?: Range;
}
export interface RangedConstraint extends _RangedConstraint {
  constructor: { new (): RangedConstraint };
}
export var RangedConstraint: { new (): RangedConstraint };

/** Type of energy: Fossil or Renewable */
export type RenewableTypeEnum = 'UNDEFINED' | 'RENEWABLE' | 'FOSSIL';
interface _RenewableTypeEnum extends Primitive._string {
  content: RenewableTypeEnum;
}

/** Class that contains extra information that can be specified for a
 * residential building */
interface _ResidentialBuildingInformation extends _BuildingInformation {
  inhabitantsType: InhabitantsTypeEnum;
  numberOfInhabitants: string;
  ownershipRentalType: OwnershipRentalTypeEnum;
  residentialBuildingType: ResidentialBuildingTypeEnum;
}
export interface ResidentialBuildingInformation extends _ResidentialBuildingInformation {
  constructor: { new (): ResidentialBuildingInformation };
}
export var ResidentialBuildingInformation: { new (): ResidentialBuildingInformation };

/** Defines a bin for a residential building type with a percentage, used in
 * ResidentialBuildingTypeDistribution */
interface _ResidentialBuildingTypeBin extends BaseType {
  percentage: number;
  residentialBuildingType: ResidentialBuildingTypeEnum;
}
export interface ResidentialBuildingTypeBin extends _ResidentialBuildingTypeBin {
  constructor: { new (): ResidentialBuildingTypeBin };
}
export var ResidentialBuildingTypeBin: { new (): ResidentialBuildingTypeBin };

/** Specifies the way the residential building type is distributed in this area
 * (e.g. Vrijstaande Woning, Hoekwoning, Flatwoning), specifing the percentage of buildings per
 * residential type. */
interface _ResidentialBuildingTypeDistribution extends _SpecificLabelDistribution {
  /** The collection of bins in the distribution */
  bin?: ResidentialBuildingTypeBin[];
}
export interface ResidentialBuildingTypeDistribution extends _ResidentialBuildingTypeDistribution {
  constructor: { new (): ResidentialBuildingTypeDistribution };
}
export var ResidentialBuildingTypeDistribution: { new (): ResidentialBuildingTypeDistribution };

/** Defines the RVO woningtypes, such as vrijstaande woning, flat woning,
 * hoekwoning */
export type ResidentialBuildingTypeEnum =
  | 'UNDEFINED'
  | 'VRIJSTAANDE_WONING'
  | 'TWEE_ONDER_EEN_KAP_WONING'
  | 'RIJWONING'
  | 'MAISONNETTEWONING'
  | 'GALERIJWONING'
  | 'PORTIEKWONING'
  | 'FLATWONING'
  | 'TUSSENWONING'
  | 'HOEKWONING'
  | 'GALERIJCOMPLEX'
  | 'APPARTEMENTENCOMPLEX'
  | 'APPARTEMENT';
interface _ResidentialBuildingTypeEnum extends Primitive._string {
  content: ResidentialBuildingTypeEnum;
}

/** Defines a restriction on the residential type of the building (terraced,
 * free standing, appartment, ...). */
interface _ResidentialBuildingTypeRestriction extends _Restriction {
  type?: ResidentialBuildingTypeEnum[];
}
export interface ResidentialBuildingTypeRestriction extends _ResidentialBuildingTypeRestriction {
  constructor: { new (): ResidentialBuildingTypeRestriction };
}
export var ResidentialBuildingTypeRestriction: { new (): ResidentialBuildingTypeRestriction };

/** Defines a source of residual heat, e.g. a data center or factory */
interface _ResidualHeatSource extends _HeatProducer {
  residualHeatSourcePotential: string;
  type: ResidualHeatSourceTypeEnum;
}
export interface ResidualHeatSource extends _ResidualHeatSource {
  constructor: { new (): ResidualHeatSource };
}
export var ResidualHeatSource: { new (): ResidualHeatSource };

/** Defines the residual heat potential in a specific area. */
interface _ResidualHeatSourcePotential extends _Potential {
  associatedConversionAsset: string;
  residualHeatSource: string;
  type: ResidualHeatSourceTypeEnum;
  value: number;
}
export interface ResidualHeatSourcePotential extends _ResidualHeatSourcePotential {
  constructor: { new (): ResidualHeatSourcePotential };
}
export var ResidualHeatSourcePotential: { new (): ResidualHeatSourcePotential };

/** Defines the types of residual heat sources */
export type ResidualHeatSourceTypeEnum = 'UNDEFINED' | 'INDUSTRIAL' | 'DATACENTER' | 'COOLING_HOUSE' | 'OTHER';
interface _ResidualHeatSourceTypeEnum extends Primitive._string {
  content: ResidualHeatSourceTypeEnum;
}

/** Allows to specify restrictions to measures */
interface _Restriction extends _Item {}
export interface Restriction extends _Restriction {
  constructor: { new (): Restriction };
}
export var Restriction: { new (): Restriction };

/** Type of roof (slanted / flat / combined) */
export type RoofTypeEnum = 'UNDEFINED' | 'FLATROOF' | 'SLANTEDROOF' | 'COMBINATION';
interface _RoofTypeEnum extends Primitive._string {
  content: RoofTypeEnum;
}

/** Defines an asset for heating rooms, such as infra red panels, gas stove,
 * etc. */
interface _RoomHeater extends _AbstractBasicConversion {
  type: RoomHeaterTypeEnum;
}
export interface RoomHeater extends _RoomHeater {
  constructor: { new (): RoomHeater };
}
export var RoomHeater: { new (): RoomHeater };

/** Defines the types of a RoomHeater */
export type RoomHeaterTypeEnum = 'UNDEFINED' | 'GAS_STOVE' | 'WOOD_STOVE' | 'ELECTRIC' | 'INFRARED_PANEL';
interface _RoomHeaterTypeEnum extends Primitive._string {
  content: RoomHeaterTypeEnum;
}

/** Specifies search areas for solar installations. Search areas are a kind of
 * 'legal' areas that have been appointed by the (local) government as possible areas for solar
 * installations. Further research should give insight in the real potential (in terms of
 * energy). */
interface _SearchAreaSolar extends _Potential {
  /** The calculated surface area for this search area (in square meters). */
  area: number;
  /** Specifies expected full load hours in this search area */
  fullLoadHours: string;
}
export interface SearchAreaSolar extends _SearchAreaSolar {
  constructor: { new (): SearchAreaSolar };
}
export var SearchAreaSolar: { new (): SearchAreaSolar };

/** Specifies search areas for wind turbines. Search areas are a kind of
 * 'legal' areas that have been appointed by the (local) government as possible areas for wind
 * installations. Further research should give insight in the real potential (in terms of
 * energy). */
interface _SearchAreaWind extends _Potential {
  /** The calculated surface area for this search area (in square meters). */
  area: number;
  /** Specifies expected full load hours in this search area */
  fullLoadHours: string;
  /** The height of the windturbines for which this potential is
   * calculated. */
  height: number;
}
export interface SearchAreaWind extends _SearchAreaWind {
  constructor: { new (): SearchAreaWind };
}
export var SearchAreaWind: { new (): SearchAreaWind };

/** Defines a sector. Can be used for the Standaard Bedrijfsindeling (SBI) of
 * the CBS in the Netherlands */
interface _Sector extends BaseType {
  code: string;
  description: string;
  id: string;
  name: string;
  dataSource?: AbstractDataSource;
  /** Subsectors of the parent sector. */
  sector?: Sector[];
}
export interface Sector extends _Sector {
  constructor: { new (): Sector };
}
export var Sector: { new (): Sector };

/** (to be removed) */
export type SectorEnum =
  | 'UNDEFINED'
  | 'GEBOUWDE_OMGEVING'
  | 'ZAKELIJKE_DIENSTVERLENING'
  | 'INDUSTRIE'
  | 'AGRO_TUINBOUW';
interface _SectorEnum extends Primitive._string {
  content: SectorEnum;
}

/** Collection of sectors. Both Party and Item can link to a sector */
interface _Sectors extends BaseType {
  description: string;
  id: string;
  name: string;
  dataSource?: AbstractDataSource;
  sector?: Sector[];
}
export interface Sectors extends _Sectors {
  constructor: { new (): Sectors };
}
export var Sectors: { new (): Sectors };

interface _Sensor extends _AbstractSensor {
  quantityAndUnit: AbstractQuantityAndUnit;
}
export interface Sensor extends _Sensor {
  constructor: { new (): Sensor };
}
export var Sensor: { new (): Sensor };

/** Abstract class to represent logical entities in the energy system, e.g.
 * demand response services, energy markets, etc. */
interface _Service extends _Item {}
export interface Service extends _Service {
  constructor: { new (): Service };
}
export var Service: { new (): Service };

/** Defines a collection of logical services used in the energy system, e.g.
 * Demand-Response, Aggregator services, Energy markets and control strategies. */
interface _Services extends BaseType {
  description: string;
  id: string;
  name: string;
  service?: Service[];
}
export interface Services extends _Services {
  constructor: { new (): Services };
}
export var Services: { new (): Services };

/** A profile used to define a single value. This should be used when no
 * information is present about the time. E.g. the price of a PV panel as currently known When
 * a model queries for a value from a certain date (and to a certain date), that information
 * will be ignored and it will always return this value. */
interface _SingleValue extends _StaticProfile {
  value: number;
}
export interface SingleValue extends _SingleValue {
  constructor: { new (): SingleValue };
}
export var SingleValue: { new (): SingleValue };

/** (Deprecated, will be removed in future ESDL versions) Represents a consumer
 * that consumes exported energy from the current energy system. Used to model the rest of the
 * energy system that is out of the current scope */
interface _SinkConsumer extends _Consumer {}
export interface SinkConsumer extends _SinkConsumer {
  constructor: { new (): SinkConsumer };
}
export var SinkConsumer: { new (): SinkConsumer };

/** (experimental) Can be used to define the social properties of an area */
interface _SocialProperties extends BaseType {
  numberOfInhabitants: string;
  populationDensity: string;
  socialCohesion: number;
}
export interface SocialProperties extends _SocialProperties {
  constructor: { new (): SocialProperties };
}
export var SocialProperties: { new (): SocialProperties };

/** Defines a SolarCollector asset */
interface _SolarCollector extends _HeatProducer {
  type: SolarCollectorTypeEnum;
}
export interface SolarCollector extends _SolarCollector {
  constructor: { new (): SolarCollector };
}
export var SolarCollector: { new (): SolarCollector };

/** Defines the types of solar collectors, such as roof top, building
 * integrated. */
export type SolarCollectorTypeEnum = 'UNDEFINED' | 'ROOFTOP' | 'BUILDING_INTEGRATED_SC' | 'ROAD' | 'FIELD' | 'WATER';
interface _SolarCollectorTypeEnum extends Primitive._string {
  content: SolarCollectorTypeEnum;
}

/** Defines the potential for solar energy. This class can be used instead of
 * 'SearchAreaSolar' in case there is more information available. */
interface _SolarPotential extends _Potential {
  /** The tilt angle of the PV installation in degrees (e.g. 0 is flat, 90
   * is perpendicular to a horizontal surface). */
  angle: string;
  /** The calculated surface area for this potential (in square meters). */
  area: number;
  /** The number of hours which multiplied with the installed capacity will
   * give the production during one year. */
  fullLoadHours: string;
  /** The orientation of the PV installation (south, north, west, east) in
   * degrees. */
  orientation: string;
  /** Used to express the type of PV installation (e.g. ROOFTOP, FIELD,
   * WATER, ROAD, ...). */
  solarPotentialType: PVInstallationTypeEnum;
  /** Can be used to express the amount of potential energy that can be
   * harvested in this area. Attach a 'QuantityAndUnit' instance to express the unit of
   * energy (e.g. ENERGY in GJ) */
  value: number;
}
export interface SolarPotential extends _SolarPotential {
  constructor: { new (): SolarPotential };
}
export var SolarPotential: { new (): SolarPotential };

/** (Deprecated, will be removed in future ESDL versions) Represents a source
 * that delivers imported energy into the current energy system. Used to model the rest of the
 * energy system that is out of the current scope */
interface _SourceProducer extends _Producer {}
export interface SourceProducer extends _SourceProducer {
  constructor: { new (): SourceProducer };
}
export var SourceProducer: { new (): SourceProducer };

/** Type of the source, e.g. Air, subsurface, aquifer */
export type SourceTypeEnum = 'UNDEFINED' | 'AIR' | 'SUB_SURFACE' | 'AQUIFER' | 'SURFACE_WATER' | 'HEAT_NETWORK';
interface _SourceTypeEnum extends Primitive._string {
  content: SourceTypeEnum;
}

/** Abstract class to define a distribution with labels */
interface _SpecificLabelDistribution extends _GenericDistribution {}
export interface SpecificLabelDistribution extends _SpecificLabelDistribution {
  constructor: { new (): SpecificLabelDistribution };
}
export var SpecificLabelDistribution: { new (): SpecificLabelDistribution };

/** Defines the state of matter of the energy carrier (gaseous, liquid, solid) */
export type StateOfMatterEnum = 'UNDEFINED' | 'SOLID' | 'LIQUID' | 'GASEOUS';
interface _StateOfMatterEnum extends Primitive._string {
  content: StateOfMatterEnum;
}

/** Stores the profile in the ESDL model itself, in contrast with an external
 * profile, which refers to an external source for a profile */
interface _StaticProfile extends _GenericProfile {}
export interface StaticProfile extends _StaticProfile {
  constructor: { new (): StaticProfile };
}
export var StaticProfile: { new (): StaticProfile };

/** An abstract class that describes EnergyAssets that can store energy. It is
 * one of the 5 capabilities in ESDL */
interface _Storage extends _EnergyAsset {
  /** The capacity of the storage asset in Joules (as opposed to the
   * Transport capacity, which is in Watts). */
  capacity: number;
  /** The efficiency with which the storage asset can be charged (unitless) */
  chargeEfficiency: number;
  /** The efficiency with which the storage asset can be discharged
   * (unitless) */
  dischargeEfficiency: number;
  /** The (initial) fill level of the storage asset as a ratio of its
   * capacity */
  fillLevel: number;
  /** The maximum charge rate at which the storage asset can be charged (in
   * Watt) */
  maxChargeRate: number;
  /** The maximum discharge rate at which the storage asset can be
   * discharged (in Watt) */
  maxDischargeRate: number;
  /** The self discharge rate with which the storage asset looses energy
   * (in J/s or Watt) */
  selfDischargeRate: number;
  /** state of charge profile */
  profile?: GenericProfile;
}
export interface Storage extends _Storage {
  constructor: { new (): Storage };
}
export var Storage: { new (): Storage };

/** Control strategy specifying that a storage asset is driven by two profiles
 * specifying the marginal cost to define its charging and discharging behavior (used in
 * ESDL-based simulation tools) */
interface _StorageStrategy extends _ControlStrategy {
  marginalChargeCosts?: GenericProfile;
  marginalDischargeCosts?: GenericProfile;
}
export interface StorageStrategy extends _StorageStrategy {
  constructor: { new (): StorageStrategy };
}
export var StorageStrategy: { new (): StorageStrategy };

/** Defines a label and a percentage, used in StringLabelDistribution */
interface _StringItem extends BaseType {
  label: string;
  value: number;
}
export interface StringItem extends _StringItem {
  constructor: { new (): StringItem };
}
export var StringItem: { new (): StringItem };

/** Specifies a KPI value as a string */
interface _StringKPI extends _KPI {
  /** The current value of this KPI. */
  value: string;
  /** Allows to define ambitions for this KPI for several years in the
   * future. */
  target?: StringTargetKPI[];
}
export interface StringKPI extends _StringKPI {
  constructor: { new (): StringKPI };
}
export var StringKPI: { new (): StringKPI };

/** Defines a distribution in terms of self-defined labels */
interface _StringLabelDistribution extends _GenericLabelDistribution {
  stringItem?: StringItem[];
}
export interface StringLabelDistribution extends _StringLabelDistribution {
  constructor: { new (): StringLabelDistribution };
}
export var StringLabelDistribution: { new (): StringLabelDistribution };

/** Defines a parameter of type String */
interface _StringParameter extends _Parameters {
  value: string;
}
export interface StringParameter extends _StringParameter {
  constructor: { new (): StringParameter };
}
export var StringParameter: { new (): StringParameter };

interface _StringTargetKPI extends BaseType {
  /** The value of the ambition for this KPI for the specified year */
  value: string;
  /** The year for which this ambition is specified. */
  year: string;
}
export interface StringTargetKPI extends _StringTargetKPI {
  constructor: { new (): StringTargetKPI };
}
export var StringTargetKPI: { new (): StringTargetKPI };

/** Part of a Polygon used to describe the internal or external boundary */
interface _SubPolygon extends BaseType {
  point: Point[];
}
export interface SubPolygon extends _SubPolygon {
  constructor: { new (): SubPolygon };
}
export var SubPolygon: { new (): SubPolygon };

interface _Switch extends _AbstractActiveSwitch {}
export interface Switch extends _Switch {
  constructor: { new (): Switch };
}
export var Switch: { new (): Switch };

/** (experimental) Used to define statistical information */
interface _SymmetricVariance extends _AbstractVariance {
  sigma: number;
}
export interface SymmetricVariance extends _SymmetricVariance {
  constructor: { new (): SymmetricVariance };
}
export var SymmetricVariance: { new (): SymmetricVariance };

/** Table class that represents data in a table structure. Current examples are
 * the pump curve table and a table describing the flowCoefficient of a checkvalve (relation
 * between pressure drop and flow rate) */
interface _Table extends BaseType {
  /** Description of the table */
  description: string;
  /** Name of the table */
  name: string;
  /** Reference to a datasource describing where the data in the table comes
   * from */
  datasource?: AbstractDataSource;
  header?: AbstractQuantityAndUnit[];
  row?: TableRow[];
}
export interface Table extends _Table {
  constructor: { new (): Table };
}
export var Table: { new (): Table };

interface _TableRow extends BaseType {
  value?: number[];
}
export interface TableRow extends _TableRow {
  constructor: { new (): TableRow };
}
export var TableRow: { new (): TableRow };

/** An instantiated asset that is referring to an asset template and the
 * specific asset. The asset template contains generic information, the specific asset contains
 * specific information about this instance (e.g. geometry). */
interface _TemplatedAsset extends _Asset {
  template: string;
  asset?: Asset;
}
export interface TemplatedAsset extends _TemplatedAsset {
  constructor: { new (): TemplatedAsset };
}
export var TemplatedAsset: { new (): TemplatedAsset };

/** Collection of templates, e.g. asset templates. */
interface _Templates extends BaseType {
  description: string;
  id: string;
  name: string;
  assetTemplate?: AssetTemplate[];
}
export interface Templates extends _Templates {
  constructor: { new (): Templates };
}
export var Templates: { new (): Templates };

/** Describes a profile of which the period between the values is constant. The
 * series of values is indexed in time order as a sequence taken at successive equally spaced
 * points in time. It starts at the startDateTime and every next value has
 * intervalBetweenValues seconds between them. */
interface _TimeSeriesProfile extends _StaticProfile {
  /** Date and time of the first value in the list of values */
  startDateTime: string;
  /** Time interval between the values in seconds. Defaults to 3600 seconds
   * (1 hour) */
  timestep: string;
  /** List of the values of the profile */
  values?: number[];
}
export interface TimeSeriesProfile extends _TimeSeriesProfile {
  constructor: { new (): TimeSeriesProfile };
}
export var TimeSeriesProfile: { new (): TimeSeriesProfile };

/** Defines the possible time units in a QuantityAndUnitType */
export type TimeUnitEnum = 'NONE' | 'SECOND' | 'MINUTE' | 'QUARTER' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
interface _TimeUnitEnum extends Primitive._string {
  content: TimeUnitEnum;
}

/** Specification of the transfer function type */
export type TransferFunctionTypeEnum = 'UNDEFINED' | 'POWER_SETPOINT_RESPONSE' | 'TEMPERATURE_SETPOINT_RESPONSE';
interface _TransferFunctionTypeEnum extends Primitive._string {
  content: TransferFunctionTypeEnum;
}

/** Electrical transformer between different voltage levels */
interface _Transformer extends _AbstractTransformer {
  /** The voltage at the primary side of the transformer */
  voltagePrimary: number;
  /** The voltage at the secundary side of the transformer */
  voltageSecundary: number;
}
export interface Transformer extends _Transformer {
  constructor: { new (): Transformer };
}
export var Transformer: { new (): Transformer };

/** An abstract class that describes EnergyAssets that can transport energy. It
 * is one of the 5 capabilities in ESDL */
interface _Transport extends _EnergyAsset {
  /** The capacity of the transport asset in Watts (as opposed to the
   * Storage capacity, which is in Joules). */
  capacity: number;
  /** The efficiency of the transport asset. Allows to specify transmission
   * losses as a ratio */
  efficiency: number;
  /** An annual number of full-load hours is the time it will take a given
   * transport asset to yield its annual transport if it is able to transport with its
   * installed capacity all of the time. */
  fullLoadHours: string;
  /** The amount of hours per year the transport asset is operational */
  operationalHours: string;
}
export interface Transport extends _Transport {
  constructor: { new (): Transport };
}
export var Transport: { new (): Transport };

/** Defines the possible units of a QuantityAndUnitType */
export type UnitEnum =
  | 'NONE'
  | 'JOULE'
  | 'WATTHOUR'
  | 'WATT'
  | 'VOLT'
  | 'BAR'
  | 'PSI'
  | 'DEGREES_CELSIUS'
  | 'KELVIN'
  | 'GRAM'
  | 'EURO'
  | 'DOLLAR'
  | 'SECOND'
  | 'MINUTE'
  | 'QUARTER'
  | 'HOUR'
  | 'DAY'
  | 'WEEK'
  | 'MONTH'
  | 'YEAR'
  | 'METRE'
  | 'SQUARE_METRE'
  | 'CUBIC_METRE'
  | 'LITRE'
  | 'WATTSECOND'
  | 'ARE'
  | 'HECTARE'
  | 'PERCENT'
  | 'VOLT_AMPERE'
  | 'VOLT_AMPERE_REACTIVE'
  | 'PASCAL'
  | 'NEWTON'
  | 'AMPERE'
  | 'DEGREES';
interface _UnitEnum extends Primitive._string {
  content: UnitEnum;
}

/** Describes a reference to a profile in an information system using a URI
 * (e.g. a URI to a profile in Energy Information System (EIS)) */
interface _URIProfile extends _ExternalProfile {
  URI: string;
}
export interface URIProfile extends _URIProfile {
  constructor: { new (): URIProfile };
}
export var URIProfile: { new (): URIProfile };

/** Underground Thermal Energy Storage */
interface _UTES extends _HeatStorage {
  /** Specifies the type of the UTES, e.g. ATES (Aquifer), BTES (Borehole)
   * and CTES (Cavern) */
  type: UTESTypeEnum;
  /** Reference to the potential area for this UTES */
  UTESPotential: string;
}
export interface UTES extends _UTES {
  constructor: { new (): UTES };
}
export var UTES: { new (): UTES };

/** Defines the potential for underground thermal energy storage (UTES). E.g.
 * ATES or BTES potential */
interface _UTESPotential extends _Potential {
  type: UTESPotentialTypeEnum;
  UTES: UTESPotentialUTESType;
  value: number;
}
export interface UTESPotential extends _UTESPotential {
  constructor: { new (): UTESPotential };
}
export var UTESPotential: { new (): UTESPotential };

/** Defines the type of the UTES potential, such as an open source for heat or
 * cold. */
export type UTESPotentialTypeEnum = 'UNDEFINED' | 'HEAT_OPEN' | 'HEAT_CLOSED' | 'COLD_OPEN' | 'COLD_CLOSED';
interface _UTESPotentialTypeEnum extends Primitive._string {
  content: UTESPotentialTypeEnum;
}

type UTESPotentialUTESType = string[];

/** Defines the different types of UTES, e.g. ATES (Aquifer), BTES (Borehole)
 * and CTES (Cavern) */
export type UTESTypeEnum = 'UNDEFINED' | 'AQUIFER_TES' | 'BOREHOLE_TES' | 'CAVERN_TES' | 'OTHER';
interface _UTESTypeEnum extends Primitive._string {
  content: UTESTypeEnum;
}

/** Defines a valve, e.g. in a water, gas or heat network */
interface _Valve extends _AbstractActiveSwitch {
  /** The inner diameter of the valve in meters. Can be used to calculate
   * the loss coefficient of the valve using the kv parameter. */
  innerDiameter: number;
  /** Type of valve. */
  type: ValveTypeEnum;
  flowCoefficient?: Table;
}
export interface Valve extends _Valve {
  constructor: { new (): Valve };
}
export var Valve: { new (): Valve };

export type ValveTypeEnum = 'UNDEFINED' | 'BUTTERFLY' | 'BALL' | 'GATE' | 'GATE_VALVE_SQUARE';
interface _ValveTypeEnum extends Primitive._string {
  content: ValveTypeEnum;
}

/** (experimental) Defines the number of vehicles per vehicle type */
interface _VehicleCount extends BaseType {
  count: string;
  type: VehicleTypeEnum;
}
export interface VehicleCount extends _VehicleCount {
  constructor: { new (): VehicleCount };
}
export var VehicleCount: { new (): VehicleCount };

/** Information about vehicles, fuels and efficiency, used in
 * MobilityFuelInformation */
interface _VehicleFuelEfficiency extends BaseType {
  efficiency: number;
  fuel: MobilityFuelTypeEnum;
  vehicleType: VehicleTypeEnum;
}
export interface VehicleFuelEfficiency extends _VehicleFuelEfficiency {
  constructor: { new (): VehicleFuelEfficiency };
}
export var VehicleFuelEfficiency: { new (): VehicleFuelEfficiency };

/** Type of vehicle, e.g. car, truck, train */
export type VehicleTypeEnum =
  | 'UNDEFINED'
  | 'CAR'
  | 'TRUCK'
  | 'VAN'
  | 'BUS'
  | 'METRO'
  | 'TRAM'
  | 'TRAIN'
  | 'PASSENGER_TRAIN'
  | 'FREIGHT_TRAIN'
  | 'SCOOTER'
  | 'MOTOR_CYCLE'
  | 'NONROAD_VEHICLE'
  | 'AGRARIAN_VEHICLE'
  | 'BARGE'
  | 'INTERNATIONAL_SHIPPING'
  | 'AIRCRAFT'
  | 'OTHER'
  | 'TOTAL';
interface _VehicleTypeEnum extends Primitive._string {
  content: VehicleTypeEnum;
}

/** Defines the ventilation type used in a building, such as mechanical or
 * balanced ventilation */
export type VentilationTypeEnum =
  | 'UNDEFINED'
  | 'NATURAL'
  | 'MECHANIC_IN'
  | 'MECHANIC_OUT'
  | 'MECHANIC_INOUT'
  | 'BALANCED'
  | 'BALANCED_WITH_HEATRECUPERATION';
interface _VentilationTypeEnum extends Primitive._string {
  content: VentilationTypeEnum;
}

/** Storage by means of storing energy in water, e.g. a tank. */
interface _WaterBuffer extends _HeatStorage {}
export interface WaterBuffer extends _WaterBuffer {
  constructor: { new (): WaterBuffer };
}
export var WaterBuffer: { new (): WaterBuffer };

/** Defines an asset that uses water to produce electricity. E.g. hydro power,
 * tidal power, wave power or osmotic power */
interface _WaterToPower extends _ElectricityProducer {
  type: WaterToPowerTypeEnum;
}
export interface WaterToPower extends _WaterToPower {
  constructor: { new (): WaterToPower };
}
export var WaterToPower: { new (): WaterToPower };

/** Defines the different types of WaterToPower, such as hydro power, tidal
 * power. */
export type WaterToPowerTypeEnum = 'UNDEFINED' | 'HYDRO_POWER' | 'WAVE_POWER' | 'TIDAL_POWER' | 'OSMOTIC_POWER';
interface _WaterToPowerTypeEnum extends Primitive._string {
  content: WaterToPowerTypeEnum;
}

/** Specifies a week schedule for building usage */
interface _WeekSchedule extends BaseType {
  /** Specifies a day schedule */
  fri?: DaySchedule;
  /** Specifies a day schedule */
  mon?: DaySchedule;
  /** Specifies a day schedule */
  sat?: DaySchedule;
  /** Specifies a day schedule */
  sun?: DaySchedule;
  /** Specifies a day schedule */
  thu?: DaySchedule;
  /** Specifies a day schedule */
  tue?: DaySchedule;
  /** Specifies a day schedule */
  wed?: DaySchedule;
  /** Specifies a day schedule */
  weekdays?: DaySchedule;
  /** Specifies a day schedule */
  weekenddays?: DaySchedule;
}
export interface WeekSchedule extends _WeekSchedule {
  constructor: { new (): WeekSchedule };
}
export var WeekSchedule: { new (): WeekSchedule };

/** Defines a wind park of multiple turbines */
interface _WindPark extends _WindTurbine {
  /** The number of turbines in the wind park (unitless) */
  numberOfTurbines: string;
  /** The power of an individual wind turbine in the wind park (in Watt).
   * To differentiate from the total installed power from the wind park as a whole. */
  turbinePower: number;
}
export interface WindPark extends _WindPark {
  constructor: { new (): WindPark };
}
export var WindPark: { new (): WindPark };

/** Defines the potential for wind energy. This class can be used instead of
 * 'SearchAreaWind' in case there is more information available. */
interface _WindPotential extends _Potential {
  /** The calculated surface area for this potential (in square meters). */
  area: number;
  /** The number of hours which multiplied with the installed capacity will
   * give the production during one year. */
  fullLoadHours: string;
  /** The height of the windturbines for which this potential is
   * calculated. */
  height: number;
  /** Can be used to express the amount of potential energy that can be
   * harvested in this area. Attach a 'QuantityAndUnit' instance to express the unit of
   * energy (e.g. ENERGY in GJ) */
  value: number;
}
export interface WindPotential extends _WindPotential {
  constructor: { new (): WindPotential };
}
export var WindPotential: { new (): WindPotential };

/** Describes an individual wind turbine. A wind turbine is a producer
 * capability */
interface _WindTurbine extends _ElectricityProducer {
  height: number;
  rotorDiameter: number;
  type: WindTurbineTypeEnum;
  /** Table describing the relation between wind speed and produced power */
  powerCurveTable?: Table;
}
export interface WindTurbine extends _WindTurbine {
  constructor: { new (): WindTurbine };
}
export var WindTurbine: { new (): WindTurbine };

/** Type of wind turbine. E.g. on land, at sea, on a building, etc. */
export type WindTurbineTypeEnum = 'UNDEFINED' | 'WIND_ON_LAND' | 'WIND_AT_SEA' | 'WIND_ON_COAST' | 'WIND_ON_BUILDING';
interface _WindTurbineTypeEnum extends Primitive._string {
  content: WindTurbineTypeEnum;
}

/** Well-Known Binary (See
 * https://en.wikipedia.org/wiki/Well-known_text#Well-known_binary) */
interface _WKB extends _Geometry {
  /** Base64 encoded WKB value */
  value: string;
}
export interface WKB extends _WKB {
  constructor: { new (): WKB };
}
export var WKB: { new (): WKB };

/** Well-Known Text (see https://en.wikipedia.org/wiki/Well-known_text) */
interface _WKT extends _Geometry {
  value: string;
}
export interface WKT extends _WKT {
  constructor: { new (): WKT };
}
export var WKT: { new (): WKT };

/** Represents the ability to convert some other form of energy to electricity */
interface _XToPower extends _AbstractBasicConversion {}
export interface XToPower extends _XToPower {
  constructor: { new (): XToPower };
}
export var XToPower: { new (): XToPower };

export interface document extends BaseType {
  AbstractActiveSwitch: AbstractActiveSwitch;
  AbstractBasicConversion: AbstractBasicConversion;
  AbstractBehaviour: AbstractBehaviour;
  AbstractBuilding: AbstractBuilding;
  AbstractBuildingUsage: AbstractBuildingUsage;
  AbstractConductor: AbstractConductor;
  AbstractConnection: AbstractConnection;
  AbstractDataSource: AbstractDataSource;
  AbstractGTPotential: AbstractGTPotential;
  AbstractInstanceDate: AbstractInstanceDate;
  AbstractMatter: AbstractMatter;
  AbstractMeasure: AbstractMeasure;
  AbstractPassiveSwitch: AbstractPassiveSwitch;
  AbstractQuantityAndUnit: AbstractQuantityAndUnit;
  AbstractSensor: AbstractSensor;
  AbstractSwitch: AbstractSwitch;
  AbstractTransferFunction: AbstractTransferFunction;
  AbstractTransformer: AbstractTransformer;
  AbstractVariance: AbstractVariance;
  Address: Address;
  AggregatedBuilding: AggregatedBuilding;
  AggregatedConsumer: AggregatedConsumer;
  AggregatedConversion: AggregatedConversion;
  AggregatedProducer: AggregatedProducer;
  AggregatedStorage: AggregatedStorage;
  AggregatedTransport: AggregatedTransport;
  AggregatorService: AggregatorService;
  Airco: Airco;
  AirVessel: AirVessel;
  Area: Area;
  AreaTypeRestriction: AreaTypeRestriction;
  Asset: Asset;
  AssetTemplate: AssetTemplate;
  AssymmetricVariance: AssymmetricVariance;
  ATES: ATES;
  Battery: Battery;
  BiomassHeater: BiomassHeater;
  BiomassPotential: BiomassPotential;
  BooleanParameter: BooleanParameter;
  BufferDistance: BufferDistance;
  Building: Building;
  BuildingInformation: BuildingInformation;
  BuildingStructureInformation: BuildingStructureInformation;
  BuildingTypeBin: BuildingTypeBin;
  BuildingTypeDistribution: BuildingTypeDistribution;
  BuildingTypeRestriction: BuildingTypeRestriction;
  BuildingUnit: BuildingUnit;
  BuildingUsage: BuildingUsage;
  BuildingUsageInformation: BuildingUsageInformation;
  BuildingUsageReference: BuildingUsageReference;
  BuildingYearRestriction: BuildingYearRestriction;
  Bus: Bus;
  CAES: CAES;
  Carrier: Carrier;
  Carriers: Carriers;
  CCS: CCS;
  CheckValve: CheckValve;
  CHP: CHP;
  CircuitBreaker: CircuitBreaker;
  CoGeneration: CoGeneration;
  CombinedTransferFunction: CombinedTransferFunction;
  Commodity: Commodity;
  CompoundAsset: CompoundAsset;
  CompoundMatter: CompoundMatter;
  CompoundMatterComponent: CompoundMatterComponent;
  Compressor: Compressor;
  ConnectableAsset: ConnectableAsset;
  Constraint: Constraint;
  Consumer: Consumer;
  ControlStrategy: ControlStrategy;
  Conversion: Conversion;
  CoolingDemand: CoolingDemand;
  CostInformation: CostInformation;
  CurtailmentStrategy: CurtailmentStrategy;
  DatabaseProfile: DatabaseProfile;
  DataSource: DataSource;
  DataSourceList: DataSourceList;
  DataSourceReference: DataSourceReference;
  DataSources: DataSources;
  DateTimeProfile: DateTimeProfile;
  DaySchedule: DaySchedule;
  DelayTransferFunction: DelayTransferFunction;
  DemandResponseService: DemandResponseService;
  DistributionKPI: DistributionKPI;
  DoubleAssymmetricVariance: DoubleAssymmetricVariance;
  DoubleKPI: DoubleKPI;
  DoubleParameter: DoubleParameter;
  DoubleTargetKPI: DoubleTargetKPI;
  DrivenByDemand: DrivenByDemand;
  DrivenByProfile: DrivenByProfile;
  DrivenBySupply: DrivenBySupply;
  Duration: Duration;
  EConnection: EConnection;
  EconomicProperties: EconomicProperties;
  ElectricBoiler: ElectricBoiler;
  ElectricityCable: ElectricityCable;
  ElectricityCommodity: ElectricityCommodity;
  ElectricityDemand: ElectricityDemand;
  ElectricityNetwork: ElectricityNetwork;
  ElectricityProducer: ElectricityProducer;
  Electrolyzer: Electrolyzer;
  EnergyAsset: EnergyAsset;
  EnergyCarrier: EnergyCarrier;
  EnergyCommodity: EnergyCommodity;
  EnergyDemand: EnergyDemand;
  EnergyLabelBin: EnergyLabelBin;
  EnergyLabelDistribution: EnergyLabelDistribution;
  EnergyMarket: EnergyMarket;
  EnergyNetwork: EnergyNetwork;
  EnergyService: EnergyService;
  EnergySystem: EnergySystem;
  EnergySystemInformation: EnergySystemInformation;
  EnvironmentalProfiles: EnvironmentalProfiles;
  EVChargingStation: EVChargingStation;
  Event: Event;
  Export: Export;
  ExposedPortsAsset: ExposedPortsAsset;
  ExternalProfile: ExternalProfile;
  FermentationPlant: FermentationPlant;
  FromToDistribution: FromToDistribution;
  FromToDoubleItem: FromToDoubleItem;
  FromToIntItem: FromToIntItem;
  FromToItem: FromToItem;
  Fuel: Fuel;
  FuelCell: FuelCell;
  GasCommodity: GasCommodity;
  GasConversion: GasConversion;
  GasDemand: GasDemand;
  GasHeater: GasHeater;
  GasNetwork: GasNetwork;
  GasProducer: GasProducer;
  GasStorage: GasStorage;
  GConnection: GConnection;
  GenericBuilding: GenericBuilding;
  GenericConsumer: GenericConsumer;
  GenericConversion: GenericConversion;
  GenericDistribution: GenericDistribution;
  GenericLabelDistribution: GenericLabelDistribution;
  GenericProducer: GenericProducer;
  GenericProfile: GenericProfile;
  GenericStorage: GenericStorage;
  GenericTransferFunction: GenericTransferFunction;
  GenericTransport: GenericTransport;
  Geometry: Geometry;
  GeothermalEnergyPotential: GeothermalEnergyPotential;
  GeothermalPotential: GeothermalPotential;
  GeothermalSource: GeothermalSource;
  Glazing: Glazing;
  HConnection: HConnection;
  HeatCommodity: HeatCommodity;
  HeatExchange: HeatExchange;
  HeatingDemand: HeatingDemand;
  HeatNetwork: HeatNetwork;
  HeatProducer: HeatProducer;
  HeatPump: HeatPump;
  HeatStorage: HeatStorage;
  HybridHeatPump: HybridHeatPump;
  Import: Import;
  InfluxDBProfile: InfluxDBProfile;
  InitialValue: InitialValue;
  InPort: InPort;
  InputOutputRelation: InputOutputRelation;
  Instance: Instance;
  InstanceDate: InstanceDate;
  InstancePeriod: InstancePeriod;
  Insulation: Insulation;
  IntegerParameter: IntegerParameter;
  IntKPI: IntKPI;
  IntTargetKPI: IntTargetKPI;
  Item: Item;
  Joint: Joint;
  KPI: KPI;
  KPIs: KPIs;
  LabelJump: LabelJump;
  LegalArea: LegalArea;
  Line: Line;
  Losses: Losses;
  Material: Material;
  Matter: Matter;
  MatterReference: MatterReference;
  Matters: Matters;
  Measure: Measure;
  MeasureReference: MeasureReference;
  Measures: Measures;
  MinimumLabelRestriction: MinimumLabelRestriction;
  MobilityDemand: MobilityDemand;
  MobilityFuelInformation: MobilityFuelInformation;
  MobilityProperties: MobilityProperties;
  MultiLine: MultiLine;
  MultiPolygon: MultiPolygon;
  Note: Note;
  Notes: Notes;
  NumberOfVehicles: NumberOfVehicles;
  OutPort: OutPort;
  OwnershipRentalTypeBin: OwnershipRentalTypeBin;
  OwnershipRentalTypeDistribution: OwnershipRentalTypeDistribution;
  Parameters: Parameters;
  Parties: Parties;
  Party: Party;
  Percentile: Percentile;
  PercentileDistribution: PercentileDistribution;
  PIDController: PIDController;
  Pipe: Pipe;
  PItemStat: PItemStat;
  Point: Point;
  Polygon: Polygon;
  Port: Port;
  PortRelation: PortRelation;
  Potential: Potential;
  PowerPlant: PowerPlant;
  PowerToX: PowerToX;
  PressureReducingValve: PressureReducingValve;
  Producer: Producer;
  ProfileElement: ProfileElement;
  ProfileReference: ProfileReference;
  Profiles: Profiles;
  Pump: Pump;
  PumpedHydroPower: PumpedHydroPower;
  PVInstallation: PVInstallation;
  PVPanel: PVPanel;
  PVPark: PVPark;
  PVTInstallation: PVTInstallation;
  QuantityAndUnitReference: QuantityAndUnitReference;
  QuantityAndUnits: QuantityAndUnits;
  QuantityAndUnitType: QuantityAndUnitType;
  Range: Range;
  RangedConstraint: RangedConstraint;
  ResidentialBuildingInformation: ResidentialBuildingInformation;
  ResidentialBuildingTypeBin: ResidentialBuildingTypeBin;
  ResidentialBuildingTypeDistribution: ResidentialBuildingTypeDistribution;
  ResidentialBuildingTypeRestriction: ResidentialBuildingTypeRestriction;
  ResidualHeatSource: ResidualHeatSource;
  ResidualHeatSourcePotential: ResidualHeatSourcePotential;
  Restriction: Restriction;
  RoomHeater: RoomHeater;
  SearchAreaSolar: SearchAreaSolar;
  SearchAreaWind: SearchAreaWind;
  Sector: Sector;
  Sectors: Sectors;
  Sensor: Sensor;
  Service: Service;
  Services: Services;
  SingleValue: SingleValue;
  SinkConsumer: SinkConsumer;
  SocialProperties: SocialProperties;
  SolarCollector: SolarCollector;
  SolarPotential: SolarPotential;
  SourceProducer: SourceProducer;
  SpecificLabelDistribution: SpecificLabelDistribution;
  StaticProfile: StaticProfile;
  Storage: Storage;
  StorageStrategy: StorageStrategy;
  StringItem: StringItem;
  StringKPI: StringKPI;
  StringLabelDistribution: StringLabelDistribution;
  StringParameter: StringParameter;
  StringTargetKPI: StringTargetKPI;
  SubPolygon: SubPolygon;
  Switch: Switch;
  SymmetricVariance: SymmetricVariance;
  Table: Table;
  TableRow: TableRow;
  TemplatedAsset: TemplatedAsset;
  Templates: Templates;
  TimeSeriesProfile: TimeSeriesProfile;
  Transformer: Transformer;
  Transport: Transport;
  URIProfile: URIProfile;
  UTES: UTES;
  UTESPotential: UTESPotential;
  Valve: Valve;
  VehicleCount: VehicleCount;
  VehicleFuelEfficiency: VehicleFuelEfficiency;
  WaterBuffer: WaterBuffer;
  WaterToPower: WaterToPower;
  WeekSchedule: WeekSchedule;
  WindPark: WindPark;
  WindPotential: WindPotential;
  WindTurbine: WindTurbine;
  WKB: WKB;
  WKT: WKT;
  XToPower: XToPower;
}
export var document: document;
