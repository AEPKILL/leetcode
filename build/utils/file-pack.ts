import { readFileSync } from 'fs';

export default class FilePack {
  content = '';
  constructor(private _path: string) {}
  get path() {
    return this._path;
  }
  static read(path: string) {
    const pack = new FilePack(path);
    pack.content = readFileSync(path, { encoding: 'utf-8' });
    return pack;
  }
}
