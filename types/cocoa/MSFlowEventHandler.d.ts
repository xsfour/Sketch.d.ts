/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowEventHandler<T = any> extends MSEventHandler, MSFlowMenuBuilderTargetProtocol {
    findTargetLayerForMouse<R = unknown, P0 = CGPoint>(_findTargetLayerForMouse: P0): R;
    positionOfOtherPageImageIndicatorForArtboard<R = CGPoint, P0 = unknown>(_positionOfOtherPageImageIndicatorForArtboard: P0): R;
    parentArtboards<R = unknown>(): R;
    showOtherPageMenuForLayer<R = void, P0 = unknown>(_showOtherPageMenuForLayer: P0): R;
    attachWireToTarget<R = void>(): R;
    moveWireToMouse<R = void, P0 = CGPoint>(_moveWireToMouse: P0): R;
    drawAreaIndicatorsWithImage_atOffset_atEdge<R = void, P0 = unknown, P1 = number, P2 = number>(_drawAreaIndicatorsWithImage: P0, _atOffset: P1, _atEdge: P2): R;
    drawOtherPageAreaIndicator<R = void>(): R;
    drawBackAreaIndicator<R = void>(): R;
    drawFlowPath_fromLayer_ofType_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_drawFlowPath: P0, _fromLayer: P1, _ofType: P2, _context: P3): R;
    drawConnectionToMouseInContext<R = void, P0 = unknown>(_drawConnectionToMouseInContext: P0): R;
    drawConnectionToArtboardInContext<R = void, P0 = unknown>(_drawConnectionToArtboardInContext: P0): R;
    drawConnectionToOtherPageInContext<R = void, P0 = unknown>(_drawConnectionToOtherPageInContext: P0): R;
    drawConnectionToBackArrowsInContext<R = void, P0 = unknown>(_drawConnectionToBackArrowsInContext: P0): R;
    findMouseAndDisconnectFromTarget<R = void>(): R;
    didDragMouse<R = boolean>(): R;
    setDidDragMouse<R = void, P0 = boolean>(_v: P0): R;
    lastMouse<R = CGPoint>(): R;
    setLastMouse<R = void, P0 = CGPoint>(_v: P0): R;
    targetArtboard<R = MSArtboardGroup>(): R;
    setTargetArtboard<R = void, P0 = MSArtboardGroup>(_v: P0): R;
    hoverType<R = number>(): R;
    setHoverType<R = void, P0 = number>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlowEventHandler<T = any> extends MSEventHandler, MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSFlowEventHandler>(): R;
      new: <R = MSFlowEventHandler>() => R;
    }
  }
}

declare const MSFlowEventHandler: cocoa.classes.MSFlowEventHandler;
