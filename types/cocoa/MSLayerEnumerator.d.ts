/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerEnumerator<T = any> extends NSEnumerator {
    cxx_destruct<R = void>(): R;
    skipDescendants<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithLayer_options<R = unknown, P0 = unknown, P1 = number>(_initWithLayer: P0, _options: P1): R;
  }
  namespace classes {
    export interface MSLayerEnumerator<T = any> extends NSEnumerator {  }
  }
}

declare const MSLayerEnumerator: cocoa.classes.MSLayerEnumerator;
