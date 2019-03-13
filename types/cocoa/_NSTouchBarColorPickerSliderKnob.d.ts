/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSliderKnob<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    pressed<R = boolean>(): R;
    setPressed<R = void, P0 = boolean>(_v: P0): R;
    minimized<R = boolean>(): R;
    setMinimized<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSliderKnob<T = any> extends NSView {
      alloc<R = _NSTouchBarColorPickerSliderKnob>(): R;
      new: <R = _NSTouchBarColorPickerSliderKnob>() => R;
    }
  }
}
