/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertColorSpaceAction<T = any> extends cocoa.MSChangeColorSpaceAction {
    convertDocumentColorSpace<R = void, P0 = unknown>(_convertDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface MSConvertColorSpaceAction<T = any> extends cocoa.classes.MSChangeColorSpaceAction {
      alloc<R = MSConvertColorSpaceAction>(): R;
      new: <R = MSConvertColorSpaceAction>() => R;
    }
  }
}

declare const MSConvertColorSpaceAction: cocoa.classes.MSConvertColorSpaceAction;
