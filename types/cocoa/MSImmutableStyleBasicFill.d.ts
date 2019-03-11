/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBasicFill<T = any> extends cocoa._MSImmutableStyleBasicFill {
    hasOpacity<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStyleBasicFill<T = any> extends cocoa.classes._MSImmutableStyleBasicFill {
      alloc<R = MSImmutableStyleBasicFill>(): R;
      new: <R = MSImmutableStyleBasicFill>() => R;
    }
  }
}

declare const MSImmutableStyleBasicFill: cocoa.classes.MSImmutableStyleBasicFill;
