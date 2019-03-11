/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSharingServicePickerDelegate<T = any> extends cocoa.NSObject, cocoa.SHKMenuControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    picker<R = cocoa.NSSharingServicePicker>(): R;
    setPicker<R = void, P0 = cocoa.NSSharingServicePicker>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSharingServicePickerDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.SHKMenuControllerDelegateProtocol {
      alloc<R = _NSSharingServicePickerDelegate>(): R;
      new: <R = _NSSharingServicePickerDelegate>() => R;
    }
  }
}
