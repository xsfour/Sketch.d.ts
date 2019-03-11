/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOvalShape<T = any> extends cocoa._MSOvalShape {
    canFlatten<R = boolean>(): R;
  }
  namespace classes {
    export interface MSOvalShape<T = any> extends cocoa.classes._MSOvalShape {
      alloc<R = MSOvalShape>(): R;
      new: <R = MSOvalShape>() => R;
    }
  }
}

declare const MSOvalShape: cocoa.classes.MSOvalShape;
