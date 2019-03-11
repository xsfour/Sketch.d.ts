/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriver<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    contextWithName_forCGContext_renderingRequest<R = unknown, P0 = unknown, P1 = cocoa.CGContext, P2 = unknown>(_contextWithName: P0, _forCGContext: P1, _renderingRequest: P2): R;
    rendererForObject_protocol<R = unknown, P0 = unknown, P1 = unknown>(_rendererForObject: P0, _protocol: P1): R;
    addRenderersForSubclasses<R = void, P0 = unknown>(_addRenderersForSubclasses: P0): R;
    setupRendererMap<R = unknown>(): R;
    initWithSettings<R = unknown, P0 = unknown>(_initWithSettings: P0): R;
    createColorFromDefaultNamed<R = cocoa.CGColor, P0 = unknown>(_createColorFromDefaultNamed: P0): R;
    renderers<R = cocoa.NSMapTable>(): R;
    setRenderers<R = void, P0 = cocoa.NSMapTable>(_v: P0): R;
    settings<R = cocoa.MSRenderingDriverSettings>(): R;
  }
  namespace classes {
    export interface MSRenderingDriver<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSRenderingDriver>(): R;
      new: <R = MSRenderingDriver>() => R;
    }
  }
}

declare const MSRenderingDriver: cocoa.classes.MSRenderingDriver;
