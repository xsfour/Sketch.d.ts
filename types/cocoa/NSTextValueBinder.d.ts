/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextValueBinder<T = any> extends cocoa.NSValueBinder {
    _adjustTextColorOfObject_mode<R = void, P0 = unknown, P1 = cocoa.__NSKeyValueCodingControllerModeType>(__adjustTextColorOfObject: P0, _mode: P1): R;
    textColorWhenObjectValueIsUsed<R = unknown, P0 = unknown>(_textColorWhenObjectValueIsUsed: P0): R;
    setTextColor_whenObjectValueIsUsed<R = void, P0 = unknown, P1 = unknown>(_setTextColor: P0, _whenObjectValueIsUsed: P1): R;
  }
  namespace classes {
    export interface NSTextValueBinder<T = any> extends cocoa.classes.NSValueBinder {
      alloc<R = NSTextValueBinder>(): R;
      new: <R = NSTextValueBinder>() => R;
      defaultTextColorWhenObjectValueIsUsed<R = unknown, P0 = unknown>(_defaultTextColorWhenObjectValueIsUsed: P0): R;
      setDefaultTextColor_whenObjectValueIsUsed<R = void, P0 = unknown, P1 = unknown>(_setDefaultTextColor: P0, _whenObjectValueIsUsed: P1): R;
    }
  }
}

declare const NSTextValueBinder: cocoa.classes.NSTextValueBinder;
