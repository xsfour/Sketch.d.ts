/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarPickerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    cancelQuickActionTouchBarPicker<R = void, P0 = cocoa._NSQuickActionTouchBarPicker>(_cancelQuickActionTouchBarPicker: P0): R;
    quickActionTouchBarPicker_invokeQuickActionForItemDataSource<R = void, P0 = cocoa._NSQuickActionTouchBarPicker, P1 = cocoa._NSQuickActionTouchBarItemDataSource>(_quickActionTouchBarPicker: P0, _invokeQuickActionForItemDataSource: P1): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarPickerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
