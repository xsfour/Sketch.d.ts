/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDoneButton<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    cxx_destruct<R = void>(): R;
    done<R = void, P0 = unknown>(_done: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationPreviewDoneButton<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = _NSTouchBarCustomizationPreviewDoneButton>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDoneButton>() => R;
    }
  }
}
