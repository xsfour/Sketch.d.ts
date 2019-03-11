/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInspectorBarItem<T = any> extends cocoa.NSObject {
    _setInspectorBar<R = void, P0 = unknown>(__setInspectorBar: P0): R;
    dealloc<R = void>(): R;
    initWithIdentifier_controller<R = unknown, P0 = unknown, P1 = unknown>(_initWithIdentifier: P0, _controller: P1): R;
    inspectorBar<R = cocoa.NSInspectorBar>(): R;
    controller<R = cocoa.NSInspectorBarItemController>(): R;
    canBeDetached<R = boolean>(): R;
    view<R = cocoa.NSView>(): R;
    identifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSInspectorBarItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSInspectorBarItem>(): R;
      new: <R = NSInspectorBarItem>() => R;
      separatorItem<R = unknown>(): R;
    }
  }
}

declare const NSInspectorBarItem: cocoa.classes.NSInspectorBarItem;
