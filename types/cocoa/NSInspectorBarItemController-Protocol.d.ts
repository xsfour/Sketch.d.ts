/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInspectorBarItemControllerProtocol<T = any> extends cocoa.NSObjectProtocol {
    inspectorBarItemCanBeDetached<R = boolean, P0 = cocoa.NSInspectorBarItem>(_inspectorBarItemCanBeDetached: P0): R;
    viewForInspectorBarItem<R = cocoa.NSView, P0 = cocoa.NSInspectorBarItem>(_viewForInspectorBarItem: P0): R;
  }
  namespace classes {
    export interface NSInspectorBarItemControllerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSInspectorBarItemControllerProtocol: cocoa.classes.NSInspectorBarItemControllerProtocol;
