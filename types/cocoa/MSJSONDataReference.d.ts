/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataReference<T = any> extends cocoa.MSJSONArchiveReference {}
  namespace classes {
    export interface MSJSONDataReference<T = any> extends cocoa.classes.MSJSONArchiveReference {
      alloc<R = MSJSONDataReference>(): R;
      new: <R = MSJSONDataReference>() => R;
    }
  }
}

declare const MSJSONDataReference: cocoa.classes.MSJSONDataReference;
