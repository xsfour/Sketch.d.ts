/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptorChangeObserverProtocol<T = any> extends NSObjectProtocol {
    inspectorValueAdaptorDidChangeValue<R = void, P0 = MSInspectorValueAdaptor>(_inspectorValueAdaptorDidChangeValue: P0): R;
  }
  namespace classes {
    export interface MSInspectorValueAdaptorChangeObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
