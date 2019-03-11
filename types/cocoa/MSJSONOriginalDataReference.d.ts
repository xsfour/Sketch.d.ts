/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONOriginalDataReference<T = any> extends cocoa.MSJSONDataReference {}
  namespace classes {
    export interface MSJSONOriginalDataReference<T = any> extends cocoa.classes.MSJSONDataReference {
      alloc<R = MSJSONOriginalDataReference>(): R;
      new: <R = MSJSONOriginalDataReference>() => R;
    }
  }
}

declare const MSJSONOriginalDataReference: cocoa.classes.MSJSONOriginalDataReference;
