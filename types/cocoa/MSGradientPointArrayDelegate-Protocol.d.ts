/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientPointArrayDelegateProtocol<T = any> extends NSObjectProtocol {
    gradientPointArray_didReplacePointAtIndex_withPoint<R = void, P0 = MSGradientPointArray, P1 = number, P2 = CGPoint>(_gradientPointArray: P0, _didReplacePointAtIndex: P1, _withPoint: P2): R;
  }
  namespace classes {
    export interface MSGradientPointArrayDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
