/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientEventHandlerDelegateProtocol<T = any> extends NSObjectProtocol {
    gradientHandlerWillLoseFocus<R = void, P0 = MSGradientEventHandler>(_gradientHandlerWillLoseFocus: P0): R;
    gradientHandlerDidChangeGradient<R = void, P0 = MSGradientEventHandler>(_gradientHandlerDidChangeGradient: P0): R;
    gradientHandlerDidChangeCurrentPoint<R = void, P0 = MSGradientEventHandler>(_gradientHandlerDidChangeCurrentPoint: P0): R;
  }
  namespace classes {
    export interface MSGradientEventHandlerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
