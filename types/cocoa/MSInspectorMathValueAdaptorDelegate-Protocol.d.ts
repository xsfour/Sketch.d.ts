/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorMathValueAdaptorDelegateProtocol<T = any> extends cocoa.MSInspectorValueAdaptorDelegateProtocol {
    inspectorValueAdaptorAllowFloat<R = boolean, P0 = cocoa.MSInspectorValueAdaptor>(_inspectorValueAdaptorAllowFloat: P0): R;
  }
  namespace classes {
    export interface MSInspectorMathValueAdaptorDelegateProtocol<T = any> extends cocoa.classes.MSInspectorValueAdaptorDelegateProtocol {  }
  }
}

declare const MSInspectorMathValueAdaptorDelegateProtocol: cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol;
