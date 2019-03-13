/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexField<T = any> extends NSTextField {}
  namespace classes {
    export interface MSColorHexField<T = any> extends NSTextField {
      alloc<R = MSColorHexField>(): R;
      new: <R = MSColorHexField>() => R;
    }
  }
}

declare const MSColorHexField: cocoa.classes.MSColorHexField;
