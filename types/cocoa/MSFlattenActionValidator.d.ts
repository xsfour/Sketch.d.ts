/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenActionValidator<T = any> extends NSObject {}
  namespace classes {
    export interface MSFlattenActionValidator<T = any> extends NSObject {
      alloc<R = MSFlattenActionValidator>(): R;
      new: <R = MSFlattenActionValidator>() => R;
      hasFlattenablePathInSelection<R = boolean, P0 = unknown>(_hasFlattenablePathInSelection: P0): R;
      isValidForSelectedLayers<R = boolean, P0 = unknown>(_isValidForSelectedLayers: P0): R;
    }
  }
}

declare const MSFlattenActionValidator: cocoa.classes.MSFlattenActionValidator;
