/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDoneButton<T = any> extends NSView, NSCollectionViewElementProtocol {
    cxx_destruct<R = void>(): R;
    done<R = void, P0 = unknown>(_done: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationPreviewDoneButton<T = any> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = _NSTouchBarCustomizationPreviewDoneButton>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDoneButton>() => R;
    }
  }
}
