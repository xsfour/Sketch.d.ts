/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionTextField<T = any> extends cocoa.NSTextField {
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = MSWelcomeCollectionTextField>(): R;
      new: <R = MSWelcomeCollectionTextField>() => R;
    }
  }
}

declare const MSWelcomeCollectionTextField: cocoa.classes.MSWelcomeCollectionTextField;
