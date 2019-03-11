/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientPointArrayDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    gradientPointArray_didReplacePointAtIndex_withPoint<R = void, P0 = cocoa.MSGradientPointArray, P1 = number, P2 = cocoa.CGPoint>(_gradientPointArray: P0, _didReplacePointAtIndex: P1, _withPoint: P2): R;
  }
  namespace classes {
    export interface MSGradientPointArrayDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSGradientPointArrayDelegateProtocol: cocoa.classes.MSGradientPointArrayDelegateProtocol;
