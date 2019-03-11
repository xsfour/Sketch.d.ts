/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSButtonImage<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSButtonImage<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = _NSButtonImage>(): R;
      new: <R = _NSButtonImage>() => R;
      image_focus<R = unknown, P0 = unknown, P1 = unknown>(_image: P0, _focus: P1): R;
      initialize<R = void>(): R;
    }
  }
}
