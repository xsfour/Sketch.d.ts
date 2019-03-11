/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    colorInspector_didChangeToColor<R = void, P0 = cocoa.MSColorInspector, P1 = cocoa.MSColor>(_colorInspector: P0, _didChangeToColor: P1): R;
    colorInspectorUndoManager<R = cocoa.NSUndoManager, P0 = cocoa.MSColorInspector>(_colorInspectorUndoManager: P0): R;
    colorInspectorShouldAdjustInspectorToPopover<R = boolean, P0 = cocoa.MSColorInspector>(_colorInspectorShouldAdjustInspectorToPopover: P0): R;
    colorInspectorWillClose<R = void, P0 = cocoa.MSColorInspector>(_colorInspectorWillClose: P0): R;
    colorInspectorDidChange<R = void, P0 = cocoa.MSColorInspector>(_colorInspectorDidChange: P0): R;
    inspectorDidChangeType<R = void, P0 = cocoa.MSColorInspector>(_inspectorDidChangeType: P0): R;
  }
  namespace classes {
    export interface MSColorInspectorDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorInspectorDelegateProtocol: cocoa.classes.MSColorInspectorDelegateProtocol;
