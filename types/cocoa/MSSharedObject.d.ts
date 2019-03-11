/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObject<T = any> extends cocoa._MSSharedObject, cocoa.BCSortableProtocol {
    parentGroup<R = unknown>(): R;
    type<R = number>(): R;
    isOutOfSyncWithInstance<R = boolean, P0 = cocoa.MSModelObject>(_isOutOfSyncWithInstance: P0): R;
    initWithName_sharedObjectID_value<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.MSModelObject>(_initWithName: P0, _sharedObjectID: P1, _value: P2): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    name<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedObject<T = any> extends cocoa.classes._MSSharedObject, cocoa.classes.BCSortableProtocol {
      alloc<R = MSSharedObject>(): R;
      new: <R = MSSharedObject>() => R;
    }
  }
}

declare const MSSharedObject: cocoa.classes.MSSharedObject;
