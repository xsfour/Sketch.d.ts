/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISVariableDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    nsis_valueOfVariableIsUserObservable<R = boolean, P0 = cocoa.NSISVariable>(_nsis_valueOfVariableIsUserObservable: P0): R;
    nsis_descriptionOfVariable<R = cocoa.NSString, P0 = cocoa.NSISVariable>(_nsis_descriptionOfVariable: P0): R;
    nsis_valueOfVariable_didChangeInEngine<R = void, P0 = cocoa.NSISVariable, P1 = cocoa.NSISEngine>(_nsis_valueOfVariable: P0, _didChangeInEngine: P1): R;
    nsis_orientationHintForVariable<R = number, P0 = cocoa.NSISVariable>(_nsis_orientationHintForVariable: P0): R;
  }
  namespace classes {
    export interface NSISVariableDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSISVariableDelegateProtocol: cocoa.classes.NSISVariableDelegateProtocol;
