/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformerDelegateProtocol<T = any> extends NSObjectProtocol {
    currentColorValueForTransformer<R = MSColor, P0 = MSColorHexStringTransformer>(_currentColorValueForTransformer: P0): R;
  }
  namespace classes {
    export interface MSColorHexStringTransformerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
