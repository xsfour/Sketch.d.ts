/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientEventHandlerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    gradientHandlerWillLoseFocus<R = void, P0 = cocoa.MSGradientEventHandler>(_gradientHandlerWillLoseFocus: P0): R;
    gradientHandlerDidChangeGradient<R = void, P0 = cocoa.MSGradientEventHandler>(_gradientHandlerDidChangeGradient: P0): R;
    gradientHandlerDidChangeCurrentPoint<R = void, P0 = cocoa.MSGradientEventHandler>(_gradientHandlerDidChangeCurrentPoint: P0): R;
  }
  namespace classes {
    export interface MSGradientEventHandlerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSGradientEventHandlerDelegateProtocol: cocoa.classes.MSGradientEventHandlerDelegateProtocol;
