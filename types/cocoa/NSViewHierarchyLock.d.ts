/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewHierarchyLock<T = any> extends cocoa.NSObject, cocoa.NSLockingProtocol {
    description<R = unknown>(): R;
    unlockTopMostReader<R = void>(): R;
    unlockWithExceptionHandler<R = void, P0 = boolean>(_unlockWithExceptionHandler: P0): R;
    tryLockForWritingWithExceptionHandler<R = boolean, P0 = boolean>(_tryLockForWritingWithExceptionHandler: P0): R;
    lockForWritingWithExceptionHandler<R = void, P0 = boolean>(_lockForWritingWithExceptionHandler: P0): R;
    lockForWriting<R = void>(): R;
    tryLockForWriting<R = boolean>(): R;
    tryLock<R = boolean>(): R;
    _lockForWriting_handler<R = boolean, P0 = boolean, P1 = boolean>(__lockForWriting: P0, _handler: P1): R;
    lockForReading<R = void>(): R;
    lockForReadingWithExceptionHandler<R = void, P0 = boolean>(_lockForReadingWithExceptionHandler: P0): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    _isValid<R = boolean>(): R;
    _invalidate<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSViewHierarchyLock<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLockingProtocol {
      alloc<R = NSViewHierarchyLock>(): R;
      new: <R = NSViewHierarchyLock>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      _exceptionHandlingEnabled<R = boolean>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSViewHierarchyLock: cocoa.classes.NSViewHierarchyLock;
