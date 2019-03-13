/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderMinimizationDelegateProtocol<T = any> extends NSObjectProtocol {
    colorPickerSliderCompletedInteraction<R = void, P0 = NSTouchBarColorPickerSlider>(_colorPickerSliderCompletedInteraction: P0): R;
    colorPickerSliderWantsToBeUnminimized_completionHandler<R = boolean, P0 = NSTouchBarColorPickerSlider, P1 = CDUnknownBlockType>(_colorPickerSliderWantsToBeUnminimized: P0, _completionHandler: P1): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerSliderMinimizationDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
