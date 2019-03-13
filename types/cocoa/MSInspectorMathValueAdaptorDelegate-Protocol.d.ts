/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorMathValueAdaptorDelegateProtocol<T = any> extends MSInspectorValueAdaptorDelegateProtocol {
    inspectorValueAdaptorAllowFloat<R = boolean, P0 = MSInspectorValueAdaptor>(_inspectorValueAdaptorAllowFloat: P0): R;
  }
  namespace classes {
    export interface MSInspectorMathValueAdaptorDelegateProtocol<T = any> extends MSInspectorValueAdaptorDelegateProtocol {  }
  }
}
