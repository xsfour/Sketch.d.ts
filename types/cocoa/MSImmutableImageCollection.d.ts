/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableImageCollection<T = any> extends _MSImmutableImageCollection {
    imageWithSHA1<R = unknown, P0 = unknown>(_imageWithSHA1: P0): R;
    migratePropertiesFromV75OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV75OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV74OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV74OrEarlierWithUnarchiver: P0): R;
  }
  namespace classes {
    export interface MSImmutableImageCollection<T = any> extends _MSImmutableImageCollection {
      alloc<R = MSImmutableImageCollection>(): R;
      new: <R = MSImmutableImageCollection>() => R;
    }
  }
}

declare const MSImmutableImageCollection: cocoa.classes.MSImmutableImageCollection;
