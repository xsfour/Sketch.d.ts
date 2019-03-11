/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointBehaviour<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSCurvePointBehaviour<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSCurvePointBehaviour>(): R;
      new: <R = MSCurvePointBehaviour>() => R;
      curveToChangedInPoint<R = void, P0 = unknown>(_curveToChangedInPoint: P0): R;
      curveFromChangedInPoint<R = void, P0 = unknown>(_curveFromChangedInPoint: P0): R;
      didAssignBehaviorToHandle_ofPoint_previousMode<R = void, P0 = number, P1 = unknown, P2 = number>(_didAssignBehaviorToHandle: P0, _ofPoint: P1, _previousMode: P2): R;
    }
  }
}

declare const MSCurvePointBehaviour: cocoa.classes.MSCurvePointBehaviour;
