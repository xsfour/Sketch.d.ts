/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideRepresentationContainer<T = any> extends MSOverrideRepresentationBase {
    isEditable<R = boolean>(): R;
    description<R = unknown>(): R;
    transformForConvertingToInstance<R = unknown>(): R;
    children<R = unknown>(): R;
    appliedInstance<R = MSImmutableSymbolInstance>(): R;
    setAppliedInstance<R = void, P0 = MSImmutableSymbolInstance>(_v: P0): R;
    selectedOverrides<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSOverrideRepresentationContainer<T = any> extends MSOverrideRepresentationBase {
      alloc<R = MSOverrideRepresentationContainer>(): R;
      new: <R = MSOverrideRepresentationContainer>() => R;
      rootRepresentationForSymbolInstance<R = unknown, P0 = unknown>(_rootRepresentationForSymbolInstance: P0): R;
    }
  }
}

declare const MSOverrideRepresentationContainer: cocoa.classes.MSOverrideRepresentationContainer;
