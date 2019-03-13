/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataReference<T = any> extends MSJSONArchiveReference {}
  namespace classes {
    export interface MSJSONDataReference<T = any> extends MSJSONArchiveReference {
      alloc<R = MSJSONDataReference>(): R;
      new: <R = MSJSONDataReference>() => R;
    }
  }
}

declare const MSJSONDataReference: cocoa.classes.MSJSONDataReference;
