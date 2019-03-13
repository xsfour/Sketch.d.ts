/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers15MSAlignedTarget<T = any> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    initWithLine_priority_guideInfo<R = unknown, P0 = MSLine, P1 = number, P2 = unknown>(_initWithLine: P0, _priority: P1, _guideInfo: P2): R;
    guideInfo<R = NSArray>(): R;
    line<R = MSLine>(): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers15MSAlignedTarget<T = any> extends NSObject {
      alloc<R = _TtC17SketchControllers15MSAlignedTarget>(): R;
      new: <R = _TtC17SketchControllers15MSAlignedTarget>() => R;
    }
  }
}
