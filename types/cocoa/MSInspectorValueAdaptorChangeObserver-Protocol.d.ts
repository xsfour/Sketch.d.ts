/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptorChangeObserverProtocol<T = any> extends cocoa.NSObjectProtocol {
    inspectorValueAdaptorDidChangeValue<R = void, P0 = cocoa.MSInspectorValueAdaptor>(_inspectorValueAdaptorDidChangeValue: P0): R;
  }
  namespace classes {
    export interface MSInspectorValueAdaptorChangeObserverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSInspectorValueAdaptorChangeObserverProtocol: cocoa.classes.MSInspectorValueAdaptorChangeObserverProtocol;
