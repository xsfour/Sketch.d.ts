/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanOperationChain<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    calculateResultPath<R = unknown>(): R;
    addClippingPath_forBooleanOperation<R = void, P0 = unknown, P1 = number>(_addClippingPath: P0, _forBooleanOperation: P1): R;
    initWithSubjectPath<R = unknown, P0 = unknown>(_initWithSubjectPath: P0): R;
    steps<R = cocoa.NSMutableArray>(): R;
    setSteps<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    resultPath<R = cocoa.MSPath>(): R;
    setResultPath<R = void, P0 = cocoa.MSPath>(_v: P0): R;
    subjectPath<R = cocoa.MSPath>(): R;
    setSubjectPath<R = void, P0 = cocoa.MSPath>(_v: P0): R;
  }
  namespace classes {
    export interface MSBooleanOperationChain<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBooleanOperationChain>(): R;
      new: <R = MSBooleanOperationChain>() => R;
      booleanOperationChainWithSubjectPath<R = unknown, P0 = unknown>(_booleanOperationChainWithSubjectPath: P0): R;
    }
  }
}

declare const MSBooleanOperationChain: cocoa.classes.MSBooleanOperationChain;
