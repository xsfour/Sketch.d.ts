/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayLink<T = any> extends cocoa.NSDisplayLink {
    setPaused<R = void, P0 = boolean>(_setPaused: P0): R;
    isPaused<R = boolean>(): R;
    isValid<R = boolean>(): R;
    _schedule<R = void>(): R;
    _fire<R = void>(): R;
    dealloc<R = void>(): R;
    initWithDisplayTiming_handler<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_initWithDisplayTiming: P0, _handler: P1): R;
  }
  namespace classes {
    export interface _NSDisplayLink<T = any> extends cocoa.classes.NSDisplayLink {
      alloc<R = _NSDisplayLink>(): R;
      new: <R = _NSDisplayLink>() => R;
    }
  }
}
