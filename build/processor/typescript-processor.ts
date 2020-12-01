import { readFileSync } from 'fs';
import { resolve } from 'path';
import ts from 'typescript';

import buildTS from '../utils/build-ts';
import Builder from '../utils/builder';
import FilePack from '../utils/file-pack';

let tsOptions: ts.CompilerOptions | null = null;

function readTsOptions(root: string) {
  const path = resolve(root, 'tsconfig.json');
  const config = ts.readConfigFile(path, p =>
    readFileSync(p, { encoding: 'utf-8' })
  );
  if (config.error) {
    throw config.error;
  }

  return ts.parseJsonConfigFileContent(config.config, ts.sys, root).options;
}

export default function typescriptProcessor(pack: FilePack, builder: Builder) {
  if (!tsOptions) {
    // tslint:disable-next-line:no-any
    tsOptions = readTsOptions(builder.root);
  }
  const result = buildTS(pack.content, tsOptions!);
  if (result.diagnostics) {
    for (const diagnostic of result.diagnostics) {
      console.log(`TSError(${pack.path}):`);
      console.log(
        `Code: ${diagnostic.code}  message: ${diagnostic.messageText}`
      );
    }
  }
  pack.content = result.result;
}
