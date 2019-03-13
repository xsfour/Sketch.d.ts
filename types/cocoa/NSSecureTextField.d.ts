/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureTextField<T = any> extends NSTextField {
    _bulletCharacter<R = number>(): R;
    _setBulletCharacter<R = void, P0 = number>(__setBulletCharacter: P0): R;
    _commonSecureTextFieldInit<R = void, P0 = unknown>(__commonSecureTextFieldInit: P0): R;
  }
  namespace classes {
    export interface NSSecureTextField<T = any> extends NSTextField {
      alloc<R = NSSecureTextField>(): R;
      new: <R = NSSecureTextField>() => R;
    }
  }
}

declare const NSSecureTextField: cocoa.classes.NSSecureTextField;
