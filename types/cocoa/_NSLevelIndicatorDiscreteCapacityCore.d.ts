/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorDiscreteCapacityCore<T = any> extends cocoa.NSObject, cocoa._NSLevelIndicatorCoreProtocol {
    _outlineLayerInLayer<R = unknown, P0 = unknown>(__outlineLayerInLayer: P0): R;
    _fillLayerInLayer<R = unknown, P0 = unknown>(__fillLayerInLayer: P0): R;
    _updateSingleSegmentLayer_withState_withTintColor<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updateSingleSegmentLayer: P0, _withState: P1, _withTintColor: P2): R;
    _drawSingleSegmentInRect_inContext_withState_withTintColor<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown, P3 = unknown>(__drawSingleSegmentInRect: P0, _inContext: P1, _withState: P2, _withTintColor: P3): R;
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorDiscreteCapacityCore<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorDiscreteCapacityCore>(): R;
      new: <R = _NSLevelIndicatorDiscreteCapacityCore>() => R;
    }
  }
}
