/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportStackView<T = any> extends cocoa.MSStackView {}
  namespace classes {
    export interface MSExportStackView<T = any> extends cocoa.classes.MSStackView {
      alloc<R = MSExportStackView>(): R;
      new: <R = MSExportStackView>() => R;
    }
  }
}

declare const MSExportStackView: cocoa.classes.MSExportStackView;
