/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONEncoder<T = any> {
    // + BCJSONEncoder(MSJSONArchiver):
    archiver<R = MSJSONArchiver>(): R;
    setArchiver<R = void, P0 = MSJSONArchiver>(_v: P0): R;
  }
  namespace classes {
    export interface BCJSONEncoder<T = any> {
      // + BCJSONEncoder(MSJSONArchiver):
      
    }
  }
}

declare const BCJSONEncoder: cocoa.classes.BCJSONEncoder;
