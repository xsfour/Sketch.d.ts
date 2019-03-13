/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareButtonHandler<T = any> extends NSObject, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    itemsFromSlice<R = unknown, P0 = unknown>(_itemsFromSlice: P0): R;
    showShareMenuForLayer_sender_canvas<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_showShareMenuForLayer: P0, _sender: P1, _canvas: P2): R;
    canvas<R = MSContentDrawView>(): R;
    setCanvas<R = void, P0 = MSContentDrawView>(_v: P0): R;
    sliceLayer<R = MSLayer>(): R;
    setSliceLayer<R = void, P0 = MSLayer>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSShareButtonHandler<T = any> extends NSObject, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
      alloc<R = MSShareButtonHandler>(): R;
      new: <R = MSShareButtonHandler>() => R;
    }
  }
}

declare const MSShareButtonHandler: cocoa.classes.MSShareButtonHandler;
