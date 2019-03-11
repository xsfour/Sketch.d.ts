/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCG<T = any> extends cocoa.MSRenderingDriver {
    addSimpleRenderersToMap<R = void, P0 = unknown>(_addSimpleRenderersToMap: P0): R;
  }
  namespace classes {
    export interface MSRenderingDriverCG<T = any> extends cocoa.classes.MSRenderingDriver {
      alloc<R = MSRenderingDriverCG>(): R;
      new: <R = MSRenderingDriverCG>() => R;
    }
  }
}

declare const MSRenderingDriverCG: cocoa.classes.MSRenderingDriverCG;
