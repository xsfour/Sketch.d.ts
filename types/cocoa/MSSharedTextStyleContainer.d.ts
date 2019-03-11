/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextStyleContainer<T = any> extends cocoa._MSSharedTextStyleContainer {}
  namespace classes {
    export interface MSSharedTextStyleContainer<T = any> extends cocoa.classes._MSSharedTextStyleContainer {
      alloc<R = MSSharedTextStyleContainer>(): R;
      new: <R = MSSharedTextStyleContainer>() => R;
    }
  }
}

declare const MSSharedTextStyleContainer: cocoa.classes.MSSharedTextStyleContainer;
