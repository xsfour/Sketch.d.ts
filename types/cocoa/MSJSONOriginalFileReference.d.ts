/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONOriginalFileReference<T = any> extends cocoa.MSJSONArchiveReference {}
  namespace classes {
    export interface MSJSONOriginalFileReference<T = any> extends cocoa.classes.MSJSONArchiveReference {
      alloc<R = MSJSONOriginalFileReference>(): R;
      new: <R = MSJSONOriginalFileReference>() => R;
    }
  }
}

declare const MSJSONOriginalFileReference: cocoa.classes.MSJSONOriginalFileReference;
