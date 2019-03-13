/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalBaseEventHandler<T = any> extends MSEventHandler {
    wantsStandardSelectionControls<R = boolean>(): R;
    resizeParentsOfSelectedLayersToFit<R = void>(): R;
    cursorForCorner_ofLayer<R = unknown, P0 = number, P1 = unknown>(_cursorForCorner: P0, _ofLayer: P1): R;
  }
  namespace classes {
    export interface MSNormalBaseEventHandler<T = any> extends MSEventHandler {
      alloc<R = MSNormalBaseEventHandler>(): R;
      new: <R = MSNormalBaseEventHandler>() => R;
    }
  }
}

declare const MSNormalBaseEventHandler: cocoa.classes.MSNormalBaseEventHandler;
