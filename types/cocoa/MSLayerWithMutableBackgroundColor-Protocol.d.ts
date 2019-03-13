/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWithMutableBackgroundColorProtocol<T = any> extends MSLayerWithBackgroundColorProtocol {
    backgroundColor<R = MSColor>(): R;
    setBackgroundColor<R = void, P0 = MSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerWithMutableBackgroundColorProtocol<T = any> extends MSLayerWithBackgroundColorProtocol {  }
  }
}
