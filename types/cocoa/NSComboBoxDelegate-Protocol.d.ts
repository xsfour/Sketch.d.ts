/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxDelegateProtocol<T = any> extends NSTextFieldDelegateProtocol {
    comboBoxSelectionIsChanging<R = void, P0 = NSNotification>(_comboBoxSelectionIsChanging: P0): R;
    comboBoxSelectionDidChange<R = void, P0 = NSNotification>(_comboBoxSelectionDidChange: P0): R;
    comboBoxWillDismiss<R = void, P0 = NSNotification>(_comboBoxWillDismiss: P0): R;
    comboBoxWillPopUp<R = void, P0 = NSNotification>(_comboBoxWillPopUp: P0): R;
  }
  namespace classes {
    export interface NSComboBoxDelegateProtocol<T = any> extends NSTextFieldDelegateProtocol {  }
  }
}
