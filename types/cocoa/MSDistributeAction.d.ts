/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeAction<T = any> extends MSDocumentAction {
    distributeLayers_withSpace_forAxis_mayPlaceOnSubpixels<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(_distributeLayers: P0, _withSpace: P1, _forAxis: P2, _mayPlaceOnSubpixels: P3): R;
    calculateRequiredSpaceBetweenLayers_forAxis<R = number, P0 = unknown, P1 = number>(_calculateRequiredSpaceBetweenLayers: P0, _forAxis: P1): R;
    layersSortedForAxis<R = unknown, P0 = number>(_layersSortedForAxis: P0): R;
    distributeAlongAxis<R = void, P0 = number>(_distributeAlongAxis: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDistributeAction<T = any> extends MSDocumentAction {
      alloc<R = MSDistributeAction>(): R;
      new: <R = MSDistributeAction>() => R;
    }
  }
}

declare const MSDistributeAction: cocoa.classes.MSDistributeAction;
