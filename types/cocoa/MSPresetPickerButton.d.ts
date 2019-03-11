/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerButton<T = any> extends cocoa.NSButton {
    animateToOrigin<R = void, P0 = cocoa.CGPoint>(_animateToOrigin: P0): R;
  }
  namespace classes {
    export interface MSPresetPickerButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSPresetPickerButton>(): R;
      new: <R = MSPresetPickerButton>() => R;
    }
  }
}

declare const MSPresetPickerButton: cocoa.classes.MSPresetPickerButton;
