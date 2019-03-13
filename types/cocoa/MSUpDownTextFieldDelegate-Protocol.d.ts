/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownTextFieldDelegateProtocol<T = any> extends NSObjectProtocol {
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    valueForUpDownTextField<R = number, P0 = MSUpDownProtocol>(_valueForUpDownTextField: P0): R;
  }
  namespace classes {
    export interface MSUpDownTextFieldDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
