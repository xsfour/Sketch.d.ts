/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberArrowButton<T = any> extends NSButton {
    initWithArrowFacesLeft<R = unknown, P0 = boolean>(_initWithArrowFacesLeft: P0): R;
    arrowFacesLeft<R = boolean>(): R;
  }
  namespace classes {
    export interface NSScrubberArrowButton<T = any> extends NSButton {
      alloc<R = NSScrubberArrowButton>(): R;
      new: <R = NSScrubberArrowButton>() => R;
    }
  }
}

declare const NSScrubberArrowButton: cocoa.classes.NSScrubberArrowButton;
