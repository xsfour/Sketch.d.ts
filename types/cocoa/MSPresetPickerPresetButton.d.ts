/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerPresetButton<T = any> extends cocoa.MSPresetPickerButton, cocoa.NSDraggingSourceProtocol {
    innerShadow<R = unknown>(): R;
    frameConsideringAnimation<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPresetPickerPresetButton<T = any> extends cocoa.classes.MSPresetPickerButton, cocoa.classes.NSDraggingSourceProtocol {
      alloc<R = MSPresetPickerPresetButton>(): R;
      new: <R = MSPresetPickerPresetButton>() => R;
    }
  }
}

declare const MSPresetPickerPresetButton: cocoa.classes.MSPresetPickerPresetButton;
