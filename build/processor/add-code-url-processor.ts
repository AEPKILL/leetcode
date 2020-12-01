import { relative } from 'path';
import { resolve } from 'url';

import Builder from '../utils/builder';
import FilePack from '../utils/file-pack';

export default function addCodeUrl(repo: string) {
  return function addCodeUrlProcessor(pack: FilePack, buider: Builder) {
    const repoRelativeUrl = relative(buider.root, pack.path);
    const content = `\n\/\/ source url: ${resolve(repo, repoRelativeUrl)}\n`;
    pack.content = pack.content + content;
  };
}
