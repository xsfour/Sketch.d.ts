/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBlur<T = any> extends cocoa.MSImmutableStylePart {
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    motionAngle<R = number>(): R;
    setMotionAngle<R = void, P0 = number>(_v: P0): R;
    center<R = cocoa.CGPoint>(): R;
    setCenter<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBlur<T = any> extends cocoa.classes.MSImmutableStylePart {
      alloc<R = _MSImmutableStyleBlur>(): R;
      new: <R = _MSImmutableStyleBlur>() => R;
    }
  }
}
