/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPicker<T = any> extends cocoa.NSObject, cocoa.NSColorPickingDefaultProtocol {
    _localizedNumberedNameWithString_integer<R = unknown, P0 = unknown, P1 = number>(__localizedNumberedNameWithString: P0, _integer: P1): R;
    _getTiffImage_ownedBy<R = unknown, P0 = unknown, P1 = unknown>(__getTiffImage: P0, _ownedBy: P1): R;
    _insertionOrder<R = number>(): R;
    _buttonImageToolTip<R = unknown>(): R;
    _buttonToolTip<R = unknown>(): R;
    _setButtonToolTip<R = void, P0 = unknown>(__setButtonToolTip: P0): R;
    dealloc<R = void>(): R;
    minContentSize<R = cocoa.CGSize>(): R;
    buttonToolTip<R = cocoa.NSString>(): R;
    provideNewButtonImage<R = cocoa.NSImage>(): R;
    colorPanel<R = cocoa.NSColorPanel>(): R;
  }
  namespace classes {
    export interface NSColorPicker<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSColorPickingDefaultProtocol {
      alloc<R = NSColorPicker>(): R;
      new: <R = NSColorPicker>() => R;
    }
  }
}

declare const NSColorPicker: cocoa.classes.NSColorPicker;
