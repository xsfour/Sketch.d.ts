/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteOrderedSetChanges<T = any> extends cocoa.NSOrderedSetChanges {
    _enumerateChanges_stop_usingBlock<R = void, P0 = number, P1 = string, P2 = cocoa.CDUnknownBlockType>(__enumerateChanges: P0, _stop: P1, _usingBlock: P2): R;
    changeCount<R = number>(): R;
    sortRange_options_usingComparator<R = void, P0 = cocoa._NSRange, P1 = number, P2 = cocoa.CDUnknownBlockType>(_sortRange: P0, _options: P1, _usingComparator: P2): R;
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
    getObjects_range<R = void, P0 = unknown, P1 = cocoa._NSRange>(_getObjects: P0, _range: P1): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    init<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteOrderedSetChanges<T = any> extends cocoa.classes.NSOrderedSetChanges {  }
  }
}

declare const NSConcreteOrderedSetChanges: cocoa.classes.NSConcreteOrderedSetChanges;
