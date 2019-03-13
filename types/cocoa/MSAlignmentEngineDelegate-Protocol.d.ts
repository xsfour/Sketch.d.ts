/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineDelegateProtocol<T = any> extends NSObjectProtocol {
    alignmentEngine_alignPoint<R = CGPoint, P0 = MSAlignmentEngine, P1 = CGPoint>(_alignmentEngine: P0, _alignPoint: P1): R;
    alignmentEngine_roundPoint<R = CGPoint, P0 = MSAlignmentEngine, P1 = CGPoint>(_alignmentEngine: P0, _roundPoint: P1): R;
  }
  namespace classes {
    export interface MSAlignmentEngineDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
