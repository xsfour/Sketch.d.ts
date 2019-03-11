/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSHMDDisplayLink<T = any> extends cocoa.NSHMDDisplayLink {
    isValid<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithDisplayTiming_handler<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_initWithDisplayTiming: P0, _handler: P1): R;
  }
  namespace classes {
    export interface _NSHMDDisplayLink<T = any> extends cocoa.classes.NSHMDDisplayLink {
      alloc<R = _NSHMDDisplayLink>(): R;
      new: <R = _NSHMDDisplayLink>() => R;
    }
  }
}
