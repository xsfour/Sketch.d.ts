/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSharingServicePickerDelegate<T = any> extends NSObject, SHKMenuControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    picker<R = NSSharingServicePicker>(): R;
    setPicker<R = void, P0 = NSSharingServicePicker>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSharingServicePickerDelegate<T = any> extends NSObject, SHKMenuControllerDelegateProtocol {
      alloc<R = _NSSharingServicePickerDelegate>(): R;
      new: <R = _NSSharingServicePickerDelegate>() => R;
    }
  }
}
