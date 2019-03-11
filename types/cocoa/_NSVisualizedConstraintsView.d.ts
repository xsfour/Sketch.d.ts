/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSVisualizedConstraintsView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    showMoreInfo<R = void, P0 = unknown>(_showMoreInfo: P0): R;
    exerciseAmbiguity<R = void, P0 = unknown>(_exerciseAmbiguity: P0): R;
    logConstraintsNotVisualized<R = void, P0 = unknown>(_logConstraintsNotVisualized: P0): R;
    initWithTargetWindow<R = unknown, P0 = unknown>(_initWithTargetWindow: P0): R;
    foregroundWindow<R = cocoa.NSWindow>(): R;
    setForegroundWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    targetWindow<R = cocoa.NSWindow>(): R;
    setTargetWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    backgroundWindow<R = cocoa.NSWindow>(): R;
    setBackgroundWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    constraintsToBeVisualized<R = cocoa.NSSet>(): R;
    setConstraintsToBeVisualized<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _NSVisualizedConstraintsView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSVisualizedConstraintsView>(): R;
      new: <R = _NSVisualizedConstraintsView>() => R;
      visualizationViewForConstraint_targetView<R = unknown, P0 = unknown, P1 = unknown>(_visualizationViewForConstraint: P0, _targetView: P1): R;
    }
  }
}
