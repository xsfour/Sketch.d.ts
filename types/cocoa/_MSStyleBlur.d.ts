/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleBlur<T = any> extends MSStylePart {
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    motionAngle<R = number>(): R;
    setMotionAngle<R = void, P0 = number>(_v: P0): R;
    center<R = CGPoint>(): R;
    setCenter<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStyleBlur<T = any> extends MSStylePart {
      alloc<R = _MSStyleBlur>(): R;
      new: <R = _MSStyleBlur>() => R;
    }
  }
}
