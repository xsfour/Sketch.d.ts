/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCGProfiling<T = any> extends MSRenderingDriverCG {
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    delegate<R = MSProfilingRendererDelegate>(): R;
    traversalIndent<R = NSString>(): R;
    traversalLog<R = NSMutableString>(): R;
  }
  namespace classes {
    export interface MSRenderingDriverCGProfiling<T = any> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverCGProfiling>(): R;
      new: <R = MSRenderingDriverCGProfiling>() => R;
    }
  }
}

declare const MSRenderingDriverCGProfiling: cocoa.classes.MSRenderingDriverCGProfiling;
