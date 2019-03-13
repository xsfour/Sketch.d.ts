/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleColorControls<T = any> extends _MSStyleColorControls {
    resetToDefaultValues<R = void>(): R;
    hasDefaultColorControlsValues<R = boolean>(): R;
    userVisibleContrast<R = number>(): R;
    setUserVisibleContrast<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSStyleColorControls<T = any> extends _MSStyleColorControls {
      alloc<R = MSStyleColorControls>(): R;
      new: <R = MSStyleColorControls>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      keyPathsForValuesAffectingUserVisibleContrast<R = unknown>(): R;
    }
  }
}

declare const MSStyleColorControls: cocoa.classes.MSStyleColorControls;
