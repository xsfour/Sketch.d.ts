/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONOriginalFileReference<T = any> extends MSJSONArchiveReference {}
  namespace classes {
    export interface MSJSONOriginalFileReference<T = any> extends MSJSONArchiveReference {
      alloc<R = MSJSONOriginalFileReference>(): R;
      new: <R = MSJSONOriginalFileReference>() => R;
    }
  }
}

declare const MSJSONOriginalFileReference: cocoa.classes.MSJSONOriginalFileReference;
