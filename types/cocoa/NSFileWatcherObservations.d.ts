/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWatcherObservations<T = any> extends NSObject {
    notifyObserver<R = void, P0 = CDUnknownBlockType>(_notifyObserver: P0): R;
    description<R = unknown>(): R;
    addAnnouncedMoveToPath<R = void, P0 = unknown>(_addAnnouncedMoveToPath: P0): R;
    addDetectedMoveToPath<R = void, P0 = unknown>(_addDetectedMoveToPath: P0): R;
    addDeletion<R = void>(): R;
    addContentsChange<R = void>(): R;
    addAttributeChange<R = void>(): R;
    dealloc<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
  }
  namespace classes {
    export interface NSFileWatcherObservations<T = any> extends NSObject {
      alloc<R = NSFileWatcherObservations>(): R;
      new: <R = NSFileWatcherObservations>() => R;
    }
  }
}

declare const NSFileWatcherObservations: cocoa.classes.NSFileWatcherObservations;
