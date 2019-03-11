/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCGProfiling<T = any> extends cocoa.MSRenderingDriverCG {
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    delegate<R = cocoa.MSProfilingRendererDelegate>(): R;
    traversalIndent<R = cocoa.NSString>(): R;
    traversalLog<R = cocoa.NSMutableString>(): R;
  }
  namespace classes {
    export interface MSRenderingDriverCGProfiling<T = any> extends cocoa.classes.MSRenderingDriverCG {
      alloc<R = MSRenderingDriverCGProfiling>(): R;
      new: <R = MSRenderingDriverCGProfiling>() => R;
    }
  }
}

declare const MSRenderingDriverCGProfiling: cocoa.classes.MSRenderingDriverCGProfiling;
