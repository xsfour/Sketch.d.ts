/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarPickerDelegateProtocol<T = any> extends NSObjectProtocol {
    cancelQuickActionTouchBarPicker<R = void, P0 = _NSQuickActionTouchBarPicker>(_cancelQuickActionTouchBarPicker: P0): R;
    quickActionTouchBarPicker_invokeQuickActionForItemDataSource<R = void, P0 = _NSQuickActionTouchBarPicker, P1 = _NSQuickActionTouchBarItemDataSource>(_quickActionTouchBarPicker: P0, _invokeQuickActionForItemDataSource: P1): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarPickerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
