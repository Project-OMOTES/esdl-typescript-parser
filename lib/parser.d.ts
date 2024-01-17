/// <reference types="node" />
/// <reference types="node" />
import stream from 'stream';
import * as esdl from './xmlns/www.tno.nl/esdl';
export type XMLInput = string | NodeJS.ReadableStream | stream.Readable;
export declare class ESDLParser {
    private static readonly parser;
    parse(input: XMLInput): Promise<esdl.document>;
}
//# sourceMappingURL=parser.d.ts.map