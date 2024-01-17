# ESDL Typescript Parser

This library exposes a class `ESDLParser` to parse ESDL files into well-known types. It *only* works in a Node environment, browsers are not supported.

## Installation

```
npm install @omotes/esdl-typescript-parser
```

## Example usage

```typescript
import { ESDLParser, EnergySystem } from '@omotes/esdl-typescript-parser';
import { readFileSync } from 'fs';


const parser = new ESDLParser();
const file = readFileSync('path/to/model.esdl', 'utf8');
parser.parse(file).then((document) => {
  console.log(document);
  assertTrue(document.EnergySystem instanceof EnergySystem);
});
```