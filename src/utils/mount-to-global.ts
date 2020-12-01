// tslint:disable:no-any

/**
 * 挂载一个变量到 Global
 * @param this
 * @param name
 * @param val
 */
function mountToGlobal(this: any, name: string, val: any) {
  (global as any)[name] = val;
}

/**
 * 挂载一个命名空间导出的所有内容到 Global
 * @param this
 * @param ns 命名空间
 */
function mountNsToGlobal(this: any, ns: any) {
  for (const key of Object.keys(ns)) {
    mountToGlobal(key, ns[key]);
  }
}

// tslint:enable:no-any
