/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowConnection<T = any> extends cocoa._MSFlowConnection {
    bezierPathForRenderingFlowAtZoomLevel<R = unknown, P0 = number>(_bezierPathForRenderingFlowAtZoomLevel: P0): R;
    isValidFlowConnection<R = boolean>(): R;
    destinationArtboard<R = cocoa.MSArtboardGroup>(): R;
    sendingLayer<R = cocoa.MSLayer>(): R;
    isBackAction<R = boolean>(): R;
    setIsBackAction<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowConnection<T = any> extends cocoa.classes._MSFlowConnection {
      alloc<R = MSFlowConnection>(): R;
      new: <R = MSFlowConnection>() => R;
      defaultAnimationType<R = number>(): R;
      flowConnectionBack<R = unknown>(): R;
      flowConnectionTo_ofType<R = unknown, P0 = unknown, P1 = number>(_flowConnectionTo: P0, _ofType: P1): R;
    }
  }
}

declare const MSFlowConnection: cocoa.classes.MSFlowConnection;
