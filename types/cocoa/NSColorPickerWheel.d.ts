/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerWheel<T = any> extends NSColorPicker, NSColorPickingCustomProtocol {
    brightnessSlider<R = void, P0 = unknown>(_brightnessSlider: P0): R;
    worksWhenModal<R = boolean>(): R;
    containerView<R = NSView>(): R;
    setContainerView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerWheel<T = any> extends NSColorPicker, NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerWheel>(): R;
      new: <R = NSColorPickerWheel>() => R;
    }
  }
}

declare const NSColorPickerWheel: cocoa.classes.NSColorPickerWheel;
