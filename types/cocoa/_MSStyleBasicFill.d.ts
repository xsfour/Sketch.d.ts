/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleBasicFill<T = any> extends cocoa.MSStylePart {
    gradient<R = cocoa.MSGradient>(): R;
    setGradient<R = void, P0 = cocoa.MSGradient>(_v: P0): R;
    contextSettings<R = cocoa.MSGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = cocoa.MSGraphicsContextSettings>(_v: P0): R;
    color<R = cocoa.MSColor>(): R;
    setColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    fillType<R = number>(): R;
    setFillType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStyleBasicFill<T = any> extends cocoa.classes.MSStylePart {
      alloc<R = _MSStyleBasicFill>(): R;
      new: <R = _MSStyleBasicFill>() => R;
    }
  }
}
