/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentFileAccess<T = any> extends _NSDocumentSerializationObject {
    whenFileAccessCanContinueInvokeBlock<R = void, P0 = CDUnknownBlockType>(_whenFileAccessCanContinueInvokeBlock: P0): R;
    removedFileURLOnlyAccess<R = void>(): R;
    addedFileURLOnlyAccess<R = void>(): R;
    dequeueInferiorFileURLOnlyFileAccess<R = void, P0 = unknown>(_dequeueInferiorFileURLOnlyFileAccess: P0): R;
    enqueueInferiorFileURLOnlyFileAccess<R = void, P0 = unknown>(_enqueueInferiorFileURLOnlyFileAccess: P0): R;
    stabilizedFileURL<R = void>(): R;
    _attemptToGrantInferiorFileAccess<R = void, P0 = unknown>(__attemptToGrantInferiorFileAccess: P0): R;
    discontinueFileAccess<R = void>(): R;
    continueFileAccess<R = void>(): R;
    accessesFileURLOnly<R = boolean>(): R;
    setAccessesFileURLOnly<R = void, P0 = boolean>(_v: P0): R;
    invokedOnMainThread<R = boolean>(): R;
    setInvokedOnMainThread<R = void, P0 = boolean>(_v: P0): R;
    superiorFileAccess<R = _NSDocumentFileAccess>(): R;
    setSuperiorFileAccess<R = void, P0 = _NSDocumentFileAccess>(_v: P0): R;
    canContinueFileAccess<R = boolean>(): R;
    fileURLStabilized<R = boolean>(): R;
    canFinishFileAccess<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDocumentFileAccess<T = any> extends _NSDocumentSerializationObject {
      alloc<R = _NSDocumentFileAccess>(): R;
      new: <R = _NSDocumentFileAccess>() => R;
    }
  }
}
