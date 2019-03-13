/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportStackView<T = any> extends MSStackView {}
  namespace classes {
    export interface MSExportStackView<T = any> extends MSStackView {
      alloc<R = MSExportStackView>(): R;
      new: <R = MSExportStackView>() => R;
    }
  }
}

declare const MSExportStackView: cocoa.classes.MSExportStackView;
