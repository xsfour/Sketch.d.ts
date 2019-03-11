/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingPredominantAxisFilter<T = any> extends cocoa.NSObject {
    resetIfOutOfDate<R = boolean, P0 = number>(_resetIfOutOfDate: P0): R;
    reset<R = void>(): R;
    filterInputScrollEvent_outputDelta_velocity<R = void, P0 = unknown, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint>(_filterInputScrollEvent: P0, _outputDelta: P1, _velocity: P2): R;
    filterInputDelta_timestamp_outputDelta_velocity<R = void, P0 = cocoa.CGPoint, P1 = number, P2 = cocoa.CGPoint, P3 = cocoa.CGPoint>(_filterInputDelta: P0, _timestamp: P1, _outputDelta: P2, _velocity: P3): R;
    dealloc<R = void>(): R;
    predominantAxisMode<R = number>(): R;
    setPredominantAxisMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingPredominantAxisFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingPredominantAxisFilter>(): R;
      new: <R = _NSScrollingPredominantAxisFilter>() => R;
      initialize<R = void>(): R;
    }
  }
}
