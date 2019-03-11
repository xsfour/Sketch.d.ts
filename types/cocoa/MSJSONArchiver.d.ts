/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONArchiver<T = any> extends cocoa.MSBaseArchiver {
    replacementObjectForObject<R = unknown, P0 = unknown>(_replacementObjectForObject: P0): R;
    encoder<R = cocoa.BCJSONEncoder>(): R;
  }
  namespace classes {
    export interface MSJSONArchiver<T = any> extends cocoa.classes.MSBaseArchiver {
      alloc<R = MSJSONArchiver>(): R;
      new: <R = MSJSONArchiver>() => R;
      archiveObject_coder<R = void, P0 = unknown, P1 = unknown>(_archiveObject: P0, _coder: P1): R;
      archiverFromCoder<R = unknown, P0 = unknown>(_archiverFromCoder: P0): R;
      defineClassAliases<R = void>(): R;
      load<R = void>(): R;
    }
  }
}

declare const MSJSONArchiver: cocoa.classes.MSJSONArchiver;
