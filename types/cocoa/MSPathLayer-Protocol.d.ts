/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathLayerProtocol<T = any> extends cocoa.MSLayerProtocol {
    reversePath<R = void>(): R;
    simplify<R = void>(): R;
    pathInFrame<R = cocoa.MSPath>(): R;
    setPathInFrame<R = void, P0 = cocoa.MSPath>(_v: P0): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSPathLayerProtocol<T = any> extends cocoa.classes.MSLayerProtocol {  }
  }
}

declare const MSPathLayerProtocol: cocoa.classes.MSPathLayerProtocol;
