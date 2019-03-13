/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInspectorBarItemControllerProtocol<T = any> extends NSObjectProtocol {
    inspectorBarItemCanBeDetached<R = boolean, P0 = NSInspectorBarItem>(_inspectorBarItemCanBeDetached: P0): R;
    viewForInspectorBarItem<R = NSView, P0 = NSInspectorBarItem>(_viewForInspectorBarItem: P0): R;
  }
  namespace classes {
    export interface NSInspectorBarItemControllerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
