/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers22MSAlignmentEngineCycle<T = any> extends cocoa.NSObject {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    addOrthogonalTargetsFor<R = void, P0 = cocoa.CGPoint>(_addOrthogonalTargetsFor: P0): R;
    addTargetWithLine<R = unknown, P0 = cocoa.MSLine>(_addTargetWithLine: P0): R;
    delegate<R = cocoa._TtP17SketchControllers30MSAlignmentEngineCycleDelegate_>(): R;
    setDelegate<R = void, P0 = cocoa._TtP17SketchControllers30MSAlignmentEngineCycleDelegate_>(_v: P0): R;
    alignmentResult<R = cocoa._TtC17SketchControllers17MSAlignmentResult>(): R;
    defaultPoint<R = cocoa.CGPoint>(): R;
    // + _TtC17SketchControllers22MSAlignmentEngineCycle(SketchControllers):
    initWithPoint_snapDistance<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_initWithPoint: P0, _snapDistance: P1): R;
    initWithPoint_snapDistance_constraint<R = unknown, P0 = cocoa.CGPoint, P1 = number, P2 = cocoa.MSLine>(_initWithPoint: P0, _snapDistance: P1, _constraint: P2): R;
    snapDistance<R = number>(): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers22MSAlignmentEngineCycle<T = any> extends cocoa.classes.NSObject {
      alloc<R = _TtC17SketchControllers22MSAlignmentEngineCycle>(): R;
      new: <R = _TtC17SketchControllers22MSAlignmentEngineCycle>() => R;
      // + _TtC17SketchControllers22MSAlignmentEngineCycle(SketchControllers):
      
    }
  }
}
