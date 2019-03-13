/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCGContextPool<T = any> extends BCObjectPool {
    recycleContext<R = void, P0 = CGContext>(_recycleContext: P0): R;
    vendOrCreateContextOfSize<R = CGContext, P0 = CGSize>(_vendOrCreateContextOfSize: P0): R;
    vendsSize_colorSpace<R = boolean, P0 = CGSize, P1 = CGColorSpace>(_vendsSize: P0, _colorSpace: P1): R;
    dealloc<R = void>(): R;
    initWithSize_colorSpace<R = unknown, P0 = CGSize, P1 = CGColorSpace>(_initWithSize: P0, _colorSpace: P1): R;
    contextSize<R = CGSize>(): R;
    setContextSize<R = void, P0 = CGSize>(_v: P0): R;
    colorSpace<R = CGColorSpace>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_v: P0): R;
  }
  namespace classes {
    export interface MSCGContextPool<T = any> extends BCObjectPool {  }
  }
}

declare const MSCGContextPool: cocoa.classes.MSCGContextPool;
