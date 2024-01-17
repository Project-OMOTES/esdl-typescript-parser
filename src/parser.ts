import { Parser } from 'cxml';
import stream from 'stream';
import * as esdl from './xmlns/www.tno.nl/esdl';

export type XMLInput = string | NodeJS.ReadableStream | stream.Readable;

export class ESDLParser {
  private static readonly parser = new Parser();

  async parse(input: XMLInput): Promise<esdl.document> {
    return ESDLParser.parser.parse(input, esdl.document) as any as Promise<esdl.document>;
  }
}
