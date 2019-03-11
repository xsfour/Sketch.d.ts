/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectorySubpathsOperation<T = any> extends cocoa.NSDirectoryTraversalOperation {
    subpaths<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDirectorySubpathsOperation<T = any> extends cocoa.classes.NSDirectoryTraversalOperation {
      alloc<R = NSDirectorySubpathsOperation>(): R;
      new: <R = NSDirectorySubpathsOperation>() => R;
      directorySubpathsOperationAtPath<R = unknown, P0 = unknown>(_directorySubpathsOperationAtPath: P0): R;
    }
  }
}

declare const NSDirectorySubpathsOperation: cocoa.classes.NSDirectorySubpathsOperation;
