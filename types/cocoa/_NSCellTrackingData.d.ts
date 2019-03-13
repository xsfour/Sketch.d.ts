/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCellTrackingData<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    cellNeedsDisplay<R = boolean>(): R;
    setCellNeedsDisplay<R = void, P0 = boolean>(_v: P0): R;
    mouseCell<R = NSCell>(): R;
    setMouseCell<R = void, P0 = NSCell>(_v: P0): R;
    mouseCol<R = number>(): R;
    setMouseCol<R = void, P0 = number>(_v: P0): R;
    mouseRow<R = number>(): R;
    setMouseRow<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCellTrackingData<T = any> extends NSObject {
      alloc<R = _NSCellTrackingData>(): R;
      new: <R = _NSCellTrackingData>() => R;
    }
  }
}
