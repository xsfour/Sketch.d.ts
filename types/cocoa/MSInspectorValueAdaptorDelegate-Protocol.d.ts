/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptorDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    inspectorValueAdaptor_didEncounterError<R = void, P0 = cocoa.MSInspectorValueAdaptor, P1 = cocoa.NSError>(_inspectorValueAdaptor: P0, _didEncounterError: P1): R;
    inspectorValueAdaptorDidChangeValue<R = void, P0 = cocoa.MSInspectorValueAdaptor>(_inspectorValueAdaptorDidChangeValue: P0): R;
    inspectorValueAdaptor_validateValue_forModel_context<R = boolean, P0 = cocoa.MSInspectorValueAdaptor, P1 = unknown, P2 = unknown, P3 = unknown>(_inspectorValueAdaptor: P0, _validateValue: P1, _forModel: P2, _context: P3): R;
  }
  namespace classes {
    export interface MSInspectorValueAdaptorDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSInspectorValueAdaptorDelegateProtocol: cocoa.classes.MSInspectorValueAdaptorDelegateProtocol;
