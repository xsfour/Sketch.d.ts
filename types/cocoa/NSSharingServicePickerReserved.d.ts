/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerReserved<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSharingServicePickerReserved<T = any> extends NSObject {
      alloc<R = NSSharingServicePickerReserved>(): R;
      new: <R = NSSharingServicePickerReserved>() => R;
    }
  }
}

declare const NSSharingServicePickerReserved: cocoa.classes.NSSharingServicePickerReserved;
