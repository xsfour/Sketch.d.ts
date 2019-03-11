/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWithMutableBackgroundColorProtocol<T = any> extends cocoa.MSLayerWithBackgroundColorProtocol {
    backgroundColor<R = cocoa.MSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerWithMutableBackgroundColorProtocol<T = any> extends cocoa.classes.MSLayerWithBackgroundColorProtocol {  }
  }
}

declare const MSLayerWithMutableBackgroundColorProtocol: cocoa.classes.MSLayerWithMutableBackgroundColorProtocol;
