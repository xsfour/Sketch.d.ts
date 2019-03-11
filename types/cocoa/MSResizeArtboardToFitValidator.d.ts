/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeArtboardToFitValidator<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSResizeArtboardToFitValidator<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSResizeArtboardToFitValidator>(): R;
      new: <R = MSResizeArtboardToFitValidator>() => R;
      isValidForSelectedLayers<R = boolean, P0 = unknown>(_isValidForSelectedLayers: P0): R;
    }
  }
}

declare const MSResizeArtboardToFitValidator: cocoa.classes.MSResizeArtboardToFitValidator;
