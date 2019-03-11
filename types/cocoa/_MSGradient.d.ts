/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSGradient<T = any> extends cocoa.MSModelObject {
    moveGradientStopIndex_toIndex<R = void, P0 = number, P1 = number>(_moveGradientStopIndex: P0, _toIndex: P1): R;
    removeAllGradientStops<R = void>(): R;
    removeGradientStopsAtIndexes<R = void, P0 = unknown>(_removeGradientStopsAtIndexes: P0): R;
    removeGradientStopAtIndex<R = void, P0 = number>(_removeGradientStopAtIndex: P0): R;
    removeGradientStop<R = void, P0 = unknown>(_removeGradientStop: P0): R;
    insertGradientStops_afterGradientStop<R = void, P0 = unknown, P1 = unknown>(_insertGradientStops: P0, _afterGradientStop: P1): R;
    insertGradientStop_afterGradientStop<R = void, P0 = unknown, P1 = unknown>(_insertGradientStop: P0, _afterGradientStop: P1): R;
    insertGradientStops_beforeGradientStop<R = void, P0 = unknown, P1 = unknown>(_insertGradientStops: P0, _beforeGradientStop: P1): R;
    insertGradientStop_beforeGradientStop<R = void, P0 = unknown, P1 = unknown>(_insertGradientStop: P0, _beforeGradientStop: P1): R;
    insertGradientStop_atIndex<R = void, P0 = unknown, P1 = number>(_insertGradientStop: P0, _atIndex: P1): R;
    addGradientStops<R = void, P0 = unknown>(_addGradientStops: P0): R;
    addGradientStop<R = void, P0 = unknown>(_addGradientStop: P0): R;
    hasDefaultValues<R = boolean>(): R;
    stops<R = cocoa.NSArray>(): R;
    setStops<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    to<R = cocoa.CGPoint>(): R;
    setTo<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    gradientType<R = number>(): R;
    setGradientType<R = void, P0 = number>(_v: P0): R;
    from<R = cocoa.CGPoint>(): R;
    setFrom<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    elipseLength<R = number>(): R;
    setElipseLength<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSGradient<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSGradient>(): R;
      new: <R = _MSGradient>() => R;
    }
  }
}
