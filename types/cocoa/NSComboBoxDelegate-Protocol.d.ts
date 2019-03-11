/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxDelegateProtocol<T = any> extends cocoa.NSTextFieldDelegateProtocol {
    comboBoxSelectionIsChanging<R = void, P0 = cocoa.NSNotification>(_comboBoxSelectionIsChanging: P0): R;
    comboBoxSelectionDidChange<R = void, P0 = cocoa.NSNotification>(_comboBoxSelectionDidChange: P0): R;
    comboBoxWillDismiss<R = void, P0 = cocoa.NSNotification>(_comboBoxWillDismiss: P0): R;
    comboBoxWillPopUp<R = void, P0 = cocoa.NSNotification>(_comboBoxWillPopUp: P0): R;
  }
  namespace classes {
    export interface NSComboBoxDelegateProtocol<T = any> extends cocoa.classes.NSTextFieldDelegateProtocol {  }
  }
}

declare const NSComboBoxDelegateProtocol: cocoa.classes.NSComboBoxDelegateProtocol;
