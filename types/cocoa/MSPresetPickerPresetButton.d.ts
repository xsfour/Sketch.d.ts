/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerPresetButton<T = any> extends MSPresetPickerButton, NSDraggingSourceProtocol {
    innerShadow<R = unknown>(): R;
    frameConsideringAnimation<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPresetPickerPresetButton<T = any> extends MSPresetPickerButton, NSDraggingSourceProtocol {
      alloc<R = MSPresetPickerPresetButton>(): R;
      new: <R = MSPresetPickerPresetButton>() => R;
    }
  }
}

declare const MSPresetPickerPresetButton: cocoa.classes.MSPresetPickerPresetButton;
