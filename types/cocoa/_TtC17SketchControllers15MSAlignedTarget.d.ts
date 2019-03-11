/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers15MSAlignedTarget<T = any> extends cocoa.NSObject {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    initWithLine_priority_guideInfo<R = unknown, P0 = cocoa.MSLine, P1 = number, P2 = unknown>(_initWithLine: P0, _priority: P1, _guideInfo: P2): R;
    guideInfo<R = cocoa.NSArray>(): R;
    line<R = cocoa.MSLine>(): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers15MSAlignedTarget<T = any> extends cocoa.classes.NSObject {
      alloc<R = _TtC17SketchControllers15MSAlignedTarget>(): R;
      new: <R = _TtC17SketchControllers15MSAlignedTarget>() => R;
    }
  }
}
