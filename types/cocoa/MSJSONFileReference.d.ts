/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONFileReference<T = any> extends MSJSONArchiveReference {}
  namespace classes {
    export interface MSJSONFileReference<T = any> extends MSJSONArchiveReference {
      alloc<R = MSJSONFileReference>(): R;
      new: <R = MSJSONFileReference>() => R;
    }
  }
}

declare const MSJSONFileReference: cocoa.classes.MSJSONFileReference;
