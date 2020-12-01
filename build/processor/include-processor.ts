import { existsSync } from 'fs';
import { parse, resolve } from 'path';
import FilePack from '../utils/file-pack';

export default function includeProcessor(pack: FilePack) {
  const { content } = pack;
  const re = /\/\/\s*include\s*\(\s*([\w\d\\\/.-]+)\s*\)/g;
  const root = parse(pack.path).dir;

  let result = '';
  let index = 0;
  let arr: RegExpExecArray | null = null;
  // tslint:disable-next-line:no-conditional-assignment
  while ((arr = re.exec(content))) {
    const includePath = arr[1];
    const includeRealPath = resolve(root, includePath);
    const includeDirectiveIndex = arr.index;
    result += content.substring(index, includeDirectiveIndex);
    if (existsSync(includeRealPath)) {
      // TODO 检查循环引用
      const includePack = FilePack.read(includeRealPath);
      includeProcessor(includePack);
      result += `\n\/* inject (${includePath}) By include-processor *\/\n${
        includePack.content
      }\n`;
    } else {
      console.error(`${pack.path} include: ${includeRealPath} dont exist!`);
    }
    index = includeDirectiveIndex + arr[0].length;
  }
  result += content.substring(index, content.length - 1);
  pack.content = result;
}
