/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWithBackgroundColorProtocol<T = any> extends cocoa.NSObjectProtocol {
    immutableBackgroundColor<R = cocoa.MSImmutableColor>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerWithBackgroundColorProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSLayerWithBackgroundColorProtocol: cocoa.classes.MSLayerWithBackgroundColorProtocol;
