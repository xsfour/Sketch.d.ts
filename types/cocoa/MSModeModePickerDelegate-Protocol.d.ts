/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModeModePickerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    pickerView_labelForMode<R = cocoa.NSString, P0 = cocoa.MSModePickerView, P1 = number>(_pickerView: P0, _labelForMode: P1): R;
    pickerViewChanged<R = void, P0 = cocoa.MSModePickerView>(_pickerViewChanged: P0): R;
    pickerViewWillChange<R = void, P0 = cocoa.MSModePickerView>(_pickerViewWillChange: P0): R;
  }
  namespace classes {
    export interface MSModeModePickerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSModeModePickerDelegateProtocol: cocoa.classes.MSModeModePickerDelegateProtocol;
