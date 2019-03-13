/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModeModePickerDelegateProtocol<T = any> extends NSObjectProtocol {
    pickerView_labelForMode<R = NSString, P0 = MSModePickerView, P1 = number>(_pickerView: P0, _labelForMode: P1): R;
    pickerViewChanged<R = void, P0 = MSModePickerView>(_pickerViewChanged: P0): R;
    pickerViewWillChange<R = void, P0 = MSModePickerView>(_pickerViewWillChange: P0): R;
  }
  namespace classes {
    export interface MSModeModePickerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
