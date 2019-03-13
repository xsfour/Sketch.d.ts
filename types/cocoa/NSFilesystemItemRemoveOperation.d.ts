/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilesystemItemRemoveOperation<T = any> extends NSOperation {
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    _filtersUnderbars<R = boolean>(): R;
    _setFilterUnderbars<R = void, P0 = boolean>(__setFilterUnderbars: P0): R;
    _setError<R = void, P0 = unknown>(__setError: P0): R;
    error<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFilesystemItemRemoveOperation<T = any> extends NSOperation {
      alloc<R = NSFilesystemItemRemoveOperation>(): R;
      new: <R = NSFilesystemItemRemoveOperation>() => R;
      filesystemItemRemoveOperationWithPath<R = unknown, P0 = unknown>(_filesystemItemRemoveOperationWithPath: P0): R;
      _errorWithErrno_atPath<R = unknown, P0 = number, P1 = unknown>(__errorWithErrno: P0, _atPath: P1): R;
    }
  }
}

declare const NSFilesystemItemRemoveOperation: cocoa.classes.NSFilesystemItemRemoveOperation;
