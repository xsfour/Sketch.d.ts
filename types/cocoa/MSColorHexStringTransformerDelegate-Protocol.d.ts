/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    currentColorValueForTransformer<R = cocoa.MSColor, P0 = cocoa.MSColorHexStringTransformer>(_currentColorValueForTransformer: P0): R;
  }
  namespace classes {
    export interface MSColorHexStringTransformerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorHexStringTransformerDelegateProtocol: cocoa.classes.MSColorHexStringTransformerDelegateProtocol;
