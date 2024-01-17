import { readFile } from 'fs/promises';
import { ESDLParser } from './parser';
import { EnergySystem, EnergySystemInformation, document } from './xmlns/www.tno.nl/esdl';

type DeepNonNullable<T> = {
  [P in keyof T]-?: DeepNonNullable<T[P]>;
};

describe('Parser', () => {
  let sample: string;
  let parser: ESDLParser;
  let result: DeepNonNullable<document>;

  beforeEach(async () => {
    sample = await readFile('./sample/sample_input.esdl', 'utf8');
    parser = new ESDLParser();
  });

  it('should parse', async () => {
    const result = await parser.parse(sample);
    expect(result).toBeDefined();
  });

  describe('model tests', () => {
    beforeEach(async () => {
      result = await parser.parse(sample) as any;
    });

    it('should correctly parse an ESDL document', () => {
      expect(result.EnergySystem).toBeInstanceOf(EnergySystem);
      expect(result.EnergySystemInformation).toBeInstanceOf(EnergySystemInformation);
    });

    describe('EnergySystem', () => {
      it('should correctly parse attributes', () => {
        const { EnergySystem } = result;
        expect(EnergySystem.name).toBe('PoC Tutorial_SmartControlOptimized');
        expect(EnergySystem.version).toBe('13');
      });
    });
  });
});
