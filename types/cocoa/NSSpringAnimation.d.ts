/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpringAnimation<T = any> extends cocoa.NSAnimation {
    currentValue<R = number>(): R;
    durationForEpsilon<R = number, P0 = number>(_durationForEpsilon: P0): R;
    initWithDuration<R = unknown, P0 = number>(_initWithDuration: P0): R;
    timingFunction<R = cocoa.CAMediaTimingFunction>(): R;
    setTimingFunction<R = void, P0 = cocoa.CAMediaTimingFunction>(_v: P0): R;
    velocity<R = number>(): R;
    setVelocity<R = void, P0 = number>(_v: P0): R;
    damping<R = number>(): R;
    setDamping<R = void, P0 = number>(_v: P0): R;
    stiffness<R = number>(): R;
    setStiffness<R = void, P0 = number>(_v: P0): R;
    mass<R = number>(): R;
    setMass<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSSpringAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = NSSpringAnimation>(): R;
      new: <R = NSSpringAnimation>() => R;
    }
  }
}

declare const NSSpringAnimation: cocoa.classes.NSSpringAnimation;
