/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreenDisplayLink<T = any> extends cocoa.NSDisplayLink1 {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
    setPaused<R = void, P0 = boolean>(_setPaused: P0): R;
    isPaused<R = boolean>(): R;
    isValid<R = boolean>(): R;
    _schedule<R = void>(): R;
    _fire<R = void>(): R;
    dealloc<R = void>(): R;
    initWithScreen_handler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithScreen: P0, _handler: P1): R;
  }
  namespace classes {
    export interface NSScreenDisplayLink<T = any> extends cocoa.classes.NSDisplayLink1 {
      alloc<R = NSScreenDisplayLink>(): R;
      new: <R = NSScreenDisplayLink>() => R;
    }
  }
}

declare const NSScreenDisplayLink: cocoa.classes.NSScreenDisplayLink;
