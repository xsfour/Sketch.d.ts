/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISEngineDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    engine_willBreakConstraint_dueToMutuallyExclusiveConstraints<R = void, P0 = cocoa.NSISEngine, P1 = cocoa.NSISConstraint, P2 = cocoa.NSArray>(_engine: P0, _willBreakConstraint: P1, _dueToMutuallyExclusiveConstraints: P2): R;
    engine_markerForConstraintToBreakAmongConstraints<R = cocoa.NSISVariable, P0 = cocoa.NSISEngine, P1 = cocoa.NSArray>(_engine: P0, _markerForConstraintToBreakAmongConstraints: P1): R;
    constraintsDidChangeInEngine<R = void, P0 = cocoa.NSISEngine>(_constraintsDidChangeInEngine: P0): R;
    solutionDidChangeInEngine<R = void, P0 = cocoa.NSISEngine>(_solutionDidChangeInEngine: P0): R;
  }
  namespace classes {
    export interface NSISEngineDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSISEngineDelegateProtocol: cocoa.classes.NSISEngineDelegateProtocol;
