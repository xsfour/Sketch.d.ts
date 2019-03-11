/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetChanges<T = any> extends cocoa.NSMutableSet, cocoa.NSCopyingProtocol, cocoa.NSFastEnumerationProtocol {
    enumerateChanges_usingBlock<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_enumerateChanges: P0, _usingBlock: P1): R;
    enumerateChangesUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateChangesUsingBlock: P0): R;
    addChange<R = void, P0 = unknown>(_addChange: P0): R;
    _toManyPropertyType<R = number>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    applyChangesToSet<R = void, P0 = unknown>(_applyChangesToSet: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    changeCount<R = number>(): R;
  }
  namespace classes {
    export interface NSSetChanges<T = any> extends cocoa.classes.NSMutableSet, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSFastEnumerationProtocol {
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSSetChanges: cocoa.classes.NSSetChanges;
