/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFirstLineTypesetterDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    baselineAdjustmentForLayoutManager<R = number, P0 = cocoa.NSLayoutManager>(_baselineAdjustmentForLayoutManager: P0): R;
  }
  namespace classes {
    export interface MSFirstLineTypesetterDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSFirstLineTypesetterDelegateProtocol: cocoa.classes.MSFirstLineTypesetterDelegateProtocol;
