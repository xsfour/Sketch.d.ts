/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpacityBlendingInspectorItem<T = any> extends MSInspectorItem, NSMenuDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    opacityAdaptor<R = MSMathInspectorValueAdaptor>(): R;
    setOpacityAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    arrayController<R = NSArrayController>(): R;
    setArrayController<R = void, P0 = NSArrayController>(_v: P0): R;
    blendModePopUp<R = NSPopUpButton>(): R;
    setBlendModePopUp<R = void, P0 = NSPopUpButton>(_v: P0): R;
    opacityField<R = MSUpDownTextField>(): R;
    setOpacityField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSOpacityBlendingInspectorItem<T = any> extends MSInspectorItem, NSMenuDelegateProtocol {
      alloc<R = MSOpacityBlendingInspectorItem>(): R;
      new: <R = MSOpacityBlendingInspectorItem>() => R;
    }
  }
}

declare const MSOpacityBlendingInspectorItem: cocoa.classes.MSOpacityBlendingInspectorItem;
