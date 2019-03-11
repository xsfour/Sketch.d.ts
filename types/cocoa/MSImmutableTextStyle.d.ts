/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableTextStyle<T = any> extends cocoa._MSImmutableTextStyle {
    migratePropertiesFromV97OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV97OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV81OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV81OrEarlierWithUnarchiver: P0): R;
    decodedAttributes<R = cocoa.NSDictionary>(): R;
    setDecodedAttributes<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    attributes<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface MSImmutableTextStyle<T = any> extends cocoa.classes._MSImmutableTextStyle {
      alloc<R = MSImmutableTextStyle>(): R;
      new: <R = MSImmutableTextStyle>() => R;
    }
  }
}

declare const MSImmutableTextStyle: cocoa.classes.MSImmutableTextStyle;
