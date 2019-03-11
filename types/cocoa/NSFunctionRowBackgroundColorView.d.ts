/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowBackgroundColorView<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    _systemColorsDidChange<R = void, P0 = unknown>(__systemColorsDidChange: P0): R;
    ignoresTouchEvents<R = boolean>(): R;
    setIgnoresTouchEvents<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFunctionRowBackgroundColorView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSFunctionRowBackgroundColorView>(): R;
      new: <R = NSFunctionRowBackgroundColorView>() => R;
    }
  }
}

declare const NSFunctionRowBackgroundColorView: cocoa.classes.NSFunctionRowBackgroundColorView;
