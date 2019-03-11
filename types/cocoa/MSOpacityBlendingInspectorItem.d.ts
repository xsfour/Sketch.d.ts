/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpacityBlendingInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.NSMenuDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    opacityAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setOpacityAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    arrayController<R = cocoa.NSArrayController>(): R;
    setArrayController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    blendModePopUp<R = cocoa.NSPopUpButton>(): R;
    setBlendModePopUp<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    opacityField<R = cocoa.MSUpDownTextField>(): R;
    setOpacityField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSOpacityBlendingInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSOpacityBlendingInspectorItem>(): R;
      new: <R = MSOpacityBlendingInspectorItem>() => R;
    }
  }
}

declare const MSOpacityBlendingInspectorItem: cocoa.classes.MSOpacityBlendingInspectorItem;
