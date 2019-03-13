/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutPosition<T = any> extends MSLayoutAnchor {
    rectBySnappingToPosition_oldFrame_mayResize<R = CGRect, P0 = number, P1 = CGRect, P2 = boolean>(_rectBySnappingToPosition: P0, _oldFrame: P1, _mayResize: P2): R;
    snappingTargetInLayer<R = unknown, P0 = unknown>(_snappingTargetInLayer: P0): R;
    positionInLayer<R = number, P0 = unknown>(_positionInLayer: P0): R;
    axis<R = number>(): R;
    snapTag<R = number>(): R;
    setSnapTag<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayoutPosition<T = any> extends MSLayoutAnchor {
      alloc<R = MSLayoutPosition>(): R;
      new: <R = MSLayoutPosition>() => R;
      snapPoint_toLines_onAxis_margin<R = CGPoint, P0 = CGPoint, P1 = unknown, P2 = number, P3 = number>(_snapPoint: P0, _toLines: P1, _onAxis: P2, _margin: P3): R;
      positionAnchorWithLine_inLayer_attribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_positionAnchorWithLine: P0, _inLayer: P1, _attribute: P2): R;
    }
  }
}

declare const MSLayoutPosition: cocoa.classes.MSLayoutPosition;
