/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    alignmentEngine_alignPoint<R = cocoa.CGPoint, P0 = cocoa.MSAlignmentEngine, P1 = cocoa.CGPoint>(_alignmentEngine: P0, _alignPoint: P1): R;
    alignmentEngine_roundPoint<R = cocoa.CGPoint, P0 = cocoa.MSAlignmentEngine, P1 = cocoa.CGPoint>(_alignmentEngine: P0, _roundPoint: P1): R;
  }
  namespace classes {
    export interface MSAlignmentEngineDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAlignmentEngineDelegateProtocol: cocoa.classes.MSAlignmentEngineDelegateProtocol;
