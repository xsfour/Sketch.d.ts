/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownTextFieldDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    valueForUpDownTextField<R = number, P0 = cocoa.MSUpDownProtocol>(_valueForUpDownTextField: P0): R;
  }
  namespace classes {
    export interface MSUpDownTextFieldDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSUpDownTextFieldDelegateProtocol: cocoa.classes.MSUpDownTextFieldDelegateProtocol;
