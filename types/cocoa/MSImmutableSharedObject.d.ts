/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedObject<T = any> extends cocoa._MSImmutableSharedObject {
    updateSharedStyleIDFromMigration<R = void, P0 = unknown>(_updateSharedStyleIDFromMigration: P0): R;
  }
  namespace classes {
    export interface MSImmutableSharedObject<T = any> extends cocoa.classes._MSImmutableSharedObject {
      alloc<R = MSImmutableSharedObject>(): R;
      new: <R = MSImmutableSharedObject>() => R;
    }
  }
}

declare const MSImmutableSharedObject: cocoa.classes.MSImmutableSharedObject;
