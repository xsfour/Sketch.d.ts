/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureStringWrapper<T = any> extends NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithBulletCharacter_length<R = unknown, P0 = number, P1 = number>(_initWithBulletCharacter: P0, _length: P1): R;
    initWithOriginalString<R = unknown, P0 = __CFString>(_initWithOriginalString: P0): R;
  }
  namespace classes {
    export interface NSSecureStringWrapper<T = any> extends NSString {
      alloc<R = NSSecureStringWrapper>(): R;
      new: <R = NSSecureStringWrapper>() => R;
    }
  }
}

declare const NSSecureStringWrapper: cocoa.classes.NSSecureStringWrapper;
