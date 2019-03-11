/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetButton<T = any> extends cocoa.MSInspectorButton {
    cxx_destruct<R = void>(): R;
    attributedSecondaryTitle<R = unknown>(): R;
    secondaryTitle<R = cocoa.NSString>(): R;
    setSecondaryTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardPresetButton<T = any> extends cocoa.classes.MSInspectorButton {
      alloc<R = MSArtboardPresetButton>(): R;
      new: <R = MSArtboardPresetButton>() => R;
    }
  }
}

declare const MSArtboardPresetButton: cocoa.classes.MSArtboardPresetButton;
