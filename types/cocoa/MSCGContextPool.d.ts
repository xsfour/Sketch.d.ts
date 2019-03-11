/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCGContextPool<T = any> extends cocoa.BCObjectPool {
    recycleContext<R = void, P0 = cocoa.CGContext>(_recycleContext: P0): R;
    vendOrCreateContextOfSize<R = cocoa.CGContext, P0 = cocoa.CGSize>(_vendOrCreateContextOfSize: P0): R;
    vendsSize_colorSpace<R = boolean, P0 = cocoa.CGSize, P1 = cocoa.CGColorSpace>(_vendsSize: P0, _colorSpace: P1): R;
    dealloc<R = void>(): R;
    initWithSize_colorSpace<R = unknown, P0 = cocoa.CGSize, P1 = cocoa.CGColorSpace>(_initWithSize: P0, _colorSpace: P1): R;
    contextSize<R = cocoa.CGSize>(): R;
    setContextSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.CGColorSpace>(_v: P0): R;
  }
  namespace classes {
    export interface MSCGContextPool<T = any> extends cocoa.classes.BCObjectPool {  }
  }
}

declare const MSCGContextPool: cocoa.classes.MSCGContextPool;
