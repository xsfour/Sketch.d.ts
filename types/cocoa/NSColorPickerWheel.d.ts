/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerWheel<T = any> extends cocoa.NSColorPicker, cocoa.NSColorPickingCustomProtocol {
    brightnessSlider<R = void, P0 = unknown>(_brightnessSlider: P0): R;
    worksWhenModal<R = boolean>(): R;
    containerView<R = cocoa.NSView>(): R;
    setContainerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerWheel<T = any> extends cocoa.classes.NSColorPicker, cocoa.classes.NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerWheel>(): R;
      new: <R = NSColorPickerWheel>() => R;
    }
  }
}

declare const NSColorPickerWheel: cocoa.classes.NSColorPickerWheel;
