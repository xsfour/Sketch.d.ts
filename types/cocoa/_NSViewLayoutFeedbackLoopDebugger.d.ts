/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayoutFeedbackLoopDebugger<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    topLevelViewHierarchyTrace<R = unknown>(): R;
    description<R = unknown>(): R;
    dumpInfoWithInfoCollectionSuccess<R = void, P0 = boolean>(_dumpInfoWithInfoCollectionSuccess: P0): R;
    willSendSetFrame_toLayerOfView<R = void, P0 = CGRect, P1 = unknown>(_willSendSetFrame: P0, _toLayerOfView: P1): R;
    willSendSetPosition_toLayerOfView<R = void, P0 = CGPoint, P1 = unknown>(_willSendSetPosition: P0, _toLayerOfView: P1): R;
    willSendSetBounds_toLayerOfView<R = void, P0 = CGRect, P1 = unknown>(_willSendSetBounds: P0, _toLayerOfView: P1): R;
    viewsWithChangingGeometryCreateIfNecessary<R = unknown>(): R;
    willSendSetNeedsLayoutToLayerOfView<R = void, P0 = unknown>(_willSendSetNeedsLayoutToLayerOfView: P0): R;
    turningPointViewsCreateIfNecessary<R = unknown>(): R;
    willSendSetNeedsLayoutToView_becauseOfChangeInVariable_inLayoutEngine<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_willSendSetNeedsLayoutToView: P0, _becauseOfChangeInVariable: P1, _inLayoutEngine: P2): R;
    viewsWithVariableChangesTriggeringLayoutCreateIfNecessary<R = unknown>(): R;
    didSendViewDidLayoutSubviewsToViewControllerOfView<R = void, P0 = unknown>(_didSendViewDidLayoutSubviewsToViewControllerOfView: P0): R;
    willSendViewDidLayoutSubviewsToViewControllerOfView<R = void, P0 = unknown>(_willSendViewDidLayoutSubviewsToViewControllerOfView: P0): R;
    didSendViewWillLayoutSubviewsToViewControllerOfView<R = void, P0 = unknown>(_didSendViewWillLayoutSubviewsToViewControllerOfView: P0): R;
    willSendViewWillLayoutSubviewsToViewControllerOfView<R = void, P0 = unknown>(_willSendViewWillLayoutSubviewsToViewControllerOfView: P0): R;
    didSendLayoutSubviewsToView<R = void, P0 = unknown>(_didSendLayoutSubviewsToView: P0): R;
    willSendLayoutSubviewsToView<R = void, P0 = unknown>(_willSendLayoutSubviewsToView: P0): R;
    willExitLayoutSublayersOfLayerForView<R = void, P0 = unknown>(_willExitLayoutSublayersOfLayerForView: P0): R;
    didEnterLayoutSublayersOfLayerForView<R = void, P0 = unknown>(_didEnterLayoutSublayersOfLayerForView: P0): R;
    currentLayoutView<R = NSView>(): R;
    setCurrentLayoutView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSViewLayoutFeedbackLoopDebugger<T = any> extends NSObject {
      alloc<R = _NSViewLayoutFeedbackLoopDebugger>(): R;
      new: <R = _NSViewLayoutFeedbackLoopDebugger>() => R;
      layoutFeedbackLoopDebugger<R = unknown>(): R;
      destroyLayoutFeedbackLoopDebuggerForUnitTests<R = void>(): R;
      createLayoutFeedbackLoopDebuggerForUnitTests<R = void>(): R;
    }
  }
}
