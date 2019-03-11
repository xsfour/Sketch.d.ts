/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderMinimizationDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    colorPickerSliderCompletedInteraction<R = void, P0 = cocoa.NSTouchBarColorPickerSlider>(_colorPickerSliderCompletedInteraction: P0): R;
    colorPickerSliderWantsToBeUnminimized_completionHandler<R = boolean, P0 = cocoa.NSTouchBarColorPickerSlider, P1 = cocoa.CDUnknownBlockType>(_colorPickerSliderWantsToBeUnminimized: P0, _completionHandler: P1): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderMinimizationDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarColorPickerSliderMinimizationDelegateProtocol: cocoa.classes.NSTouchBarColorPickerSliderMinimizationDelegateProtocol;
