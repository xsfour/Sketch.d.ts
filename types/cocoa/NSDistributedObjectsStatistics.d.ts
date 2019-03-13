/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistributedObjectsStatistics<T = any> extends NSDictionary {
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    addStatistics<R = void, P0 = unknown>(_addStatistics: P0): R;
    keyEnumerator<R = unknown>(): R;
    allKeys<R = unknown>(): R;
    count<R = number>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
  }
  namespace classes {
    export interface NSDistributedObjectsStatistics<T = any> extends NSDictionary {  }
  }
}

declare const NSDistributedObjectsStatistics: cocoa.classes.NSDistributedObjectsStatistics;
