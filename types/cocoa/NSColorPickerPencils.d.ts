/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPencils<T = any> extends cocoa.NSColorPicker, cocoa.NSColorPickingCustomProtocol {
    changeDisplayedColorName<R = void, P0 = unknown>(_changeDisplayedColorName: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    pencilView<R = cocoa.NSColorPickerPencilView>(): R;
    setPencilView<R = void, P0 = cocoa.NSColorPickerPencilView>(_v: P0): R;
    containerView<R = cocoa.NSView>(): R;
    setContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    colorNameTextField<R = cocoa.NSTextField>(): R;
    setColorNameTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerPencils<T = any> extends cocoa.classes.NSColorPicker, cocoa.classes.NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerPencils>(): R;
      new: <R = NSColorPickerPencils>() => R;
    }
  }
}

declare const NSColorPickerPencils: cocoa.classes.NSColorPickerPencils;
