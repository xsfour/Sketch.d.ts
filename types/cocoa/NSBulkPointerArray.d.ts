/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBulkPointerArray<T = any> extends NSObject, NSCopyingProtocol {
    removePointersAtIndexes<R = void, P0 = unknown>(_removePointersAtIndexes: P0): R;
    insertPointers_numberOfItems_atIndexes<R = void, P0 = void, P1 = number, P2 = unknown>(_insertPointers: P0, _numberOfItems: P1, _atIndexes: P2): R;
    moveItemFromIndex_toIndex<R = void, P0 = number, P1 = number>(_moveItemFromIndex: P0, _toIndex: P1): R;
    replacePointerAtIndex_withPointer<R = void, P0 = number, P1 = void>(_replacePointerAtIndex: P0, _withPointer: P1): R;
    removePointerAtIndex<R = void, P0 = number>(_removePointerAtIndex: P0): R;
    insertPointer_atIndex<R = void, P0 = void, P1 = number>(_insertPointer: P0, _atIndex: P1): R;
    addPointer<R = void, P0 = void>(_addPointer: P0): R;
    pointerAtIndex<R = void, P0 = number>(_pointerAtIndex: P0): R;
    _cArray<R = void>(): R;
    _pointersAreEqual<R = boolean, P0 = void>(__pointersAreEqual: P0): R;
    releasePointersInRange<R = void, P0 = _NSRange>(_releasePointersInRange: P0): R;
    releasePointer<R = void, P0 = void>(_releasePointer: P0): R;
    retainPointer<R = void, P0 = void>(_retainPointer: P0): R;
    pointersAreReleased<R = boolean>(): R;
    pointersAreRetained<R = boolean>(): R;
    debugDescription<R = unknown>(): R;
    clearRangeWithoutRelease<R = void, P0 = _NSRange>(_clearRangeWithoutRelease: P0): R;
    clearRange<R = void, P0 = _NSRange>(_clearRange: P0): R;
    setCapacity<R = void, P0 = number>(_setCapacity: P0): R;
    _capacity<R = number>(): R;
    dealloc<R = void>(): R;
    initWithOptions<R = unknown, P0 = number>(_initWithOptions: P0): R;
    count<R = number>(): R;
    setCount<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSBulkPointerArray<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSBulkPointerArray>(): R;
      new: <R = NSBulkPointerArray>() => R;
      _setRunningTestRig_minCapacity<R = void, P0 = boolean, P1 = number>(__setRunningTestRig: P0, _minCapacity: P1): R;
      weakObjectsPointerArray<R = unknown>(): R;
      strongObjectsPointerArray<R = unknown>(): R;
      pointerArrayWithOptions<R = unknown, P0 = number>(_pointerArrayWithOptions: P0): R;
    }
  }
}

declare const NSBulkPointerArray: cocoa.classes.NSBulkPointerArray;
