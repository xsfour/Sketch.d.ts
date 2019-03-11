/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultTextStyle<T = any> extends cocoa.MSDefaultArchive {}
  namespace classes {
    export interface MSDefaultTextStyle<T = any> extends cocoa.classes.MSDefaultArchive {
      setDefaultTextStyle<R = void, P0 = unknown>(_setDefaultTextStyle: P0): R;
      defaultTextStyle<R = unknown>(): R;
      recordTextStyleForLayer<R = void, P0 = unknown>(_recordTextStyleForLayer: P0): R;
    }
  }
}

declare const MSDefaultTextStyle: cocoa.classes.MSDefaultTextStyle;
