/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspaceFileOperation<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    operationRefDidComplete_newPath_error_status<R = void, P0 = cocoa.__FSFileOperation, P1 = string, P2 = number, P3 = cocoa.__CFDictionary>(_operationRefDidComplete: P0, _newPath: P1, _error: P2, _status: P3): R;
    operationRef_didHaveImmediateError<R = void, P0 = cocoa.__FSFileOperation, P1 = number>(_operationRef: P0, _didHaveImmediateError: P1): R;
    operationCompleted<R = void>(): R;
    handleDeletionOfURLsOnVolumesWithoutTrash<R = void>(): R;
    doSomething<R = void, P0 = unknown>(_doSomething: P0): R;
    operationRefsDidFinish<R = void>(): R;
    updateOperationRef_newPath_error_status<R = void, P0 = cocoa.__FSFileOperation, P1 = string, P2 = number, P3 = cocoa.__CFDictionary>(_updateOperationRef: P0, _newPath: P1, _error: P2, _status: P3): R;
    copyError<R = unknown>(): R;
    start<R = void>(): R;
    initWithQueue_URLs_operation_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = cocoa.CDUnknownBlockType>(_initWithQueue: P0, _URLs: P1, _operation: P2, _completionHandler: P3): R;
    retryOperationRefWithNextName<R = void, P0 = cocoa.__FSFileOperation>(_retryOperationRefWithNextName: P0): R;
    makeOperationRefs<R = void>(): R;
    scheduleOperationRef_forURL<R = void, P0 = cocoa.__FSFileOperation, P1 = unknown>(_scheduleOperationRef: P0, _forURL: P1): R;
    copyNextPathToTryForURL<R = unknown, P0 = unknown>(_copyNextPathToTryForURL: P0): R;
    whichOperation<R = number>(): R;
  }
  namespace classes {
    export interface _NSWorkspaceFileOperation<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSWorkspaceFileOperation>(): R;
      new: <R = _NSWorkspaceFileOperation>() => R;
    }
  }
}
