/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxWindow<T = any> extends NSWindow {
    setShownAboveComboBox<R = void, P0 = boolean>(_setShownAboveComboBox: P0): R;
    _detachFromParentWindow<R = void>(): R;
    _attachToParentWindow<R = void>(): R;
    hasShadow<R = boolean>(): R;
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isKeyWindow<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    initWithContentRect_comboBoxCell<R = unknown, P0 = CGRect, P1 = unknown>(_initWithContentRect: P0, _comboBoxCell: P1): R;
  }
  namespace classes {
    export interface NSComboBoxWindow<T = any> extends NSWindow {
      alloc<R = NSComboBoxWindow>(): R;
      new: <R = NSComboBoxWindow>() => R;
    }
  }
}

declare const NSComboBoxWindow: cocoa.classes.NSComboBoxWindow;
