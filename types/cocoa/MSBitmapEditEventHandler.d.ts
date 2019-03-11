/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditEventHandler<T = any> extends cocoa.MSEventHandler {
    updateMeasurementLabel<R = void>(): R;
    crossHairCursorRemove<R = unknown>(): R;
    crossHairCursorAdd<R = unknown>(): R;
    crossHairCursor<R = unknown>(): R;
    magicWandCursorRemove<R = unknown>(): R;
    magicWandCursorAdd<R = unknown>(): R;
    magicWandCursor<R = unknown>(): R;
    makeNewBackupImage<R = void>(): R;
    setImage_forBitmapLayer<R = void, P0 = unknown, P1 = unknown>(_setImage: P0, _forBitmapLayer: P1): R;
    bitmapEditableLayer<R = unknown>(): R;
    coordinateTransformMatrix<R = unknown>(): R;
    drawBorderAroundBounds<R = void>(): R;
    selectionBezierForFlippingCoordinates<R = unknown>(): R;
    imageBounds<R = cocoa.CGRect>(): R;
    imageSize<R = cocoa.CGSize>(): R;
    clearAreaUnderSelection<R = void>(): R;
    fillSelectionWithColor_blending<R = void, P0 = unknown, P1 = number>(_fillSelectionWithColor: P0, _blending: P1): R;
    fillSelectionWithColor<R = void, P0 = unknown>(_fillSelectionWithColor: P0): R;
    selectLayerBelowPoint<R = void, P0 = cocoa.CGPoint>(_selectLayerBelowPoint: P0): R;
    rectIsCropOfImage_fromImage<R = boolean, P0 = cocoa.CGRect, P1 = unknown>(_rectIsCropOfImage: P0, _fromImage: P1): R;
    cropLayerFrame<R = void>(): R;
    imageFromSelectedArea<R = unknown>(): R;
    bitmapLayerFromSelectedArea<R = unknown>(): R;
    cropAction<R = void, P0 = unknown>(_cropAction: P0): R;
    rectFromBitmapToBoundsCoordinates<R = cocoa.CGRect, P0 = cocoa.CGRect>(_rectFromBitmapToBoundsCoordinates: P0): R;
    selectionRectInLayerCoordinates<R = cocoa.CGRect>(): R;
    selectionDidLiveUpdateTo<R = void, P0 = unknown>(_selectionDidLiveUpdateTo: P0): R;
    invertAction<R = void, P0 = unknown>(_invertAction: P0): R;
    cachedFirstBitmapImageRep<R = cocoa.NSBitmapImageRep>(): R;
    setCachedFirstBitmapImageRep<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    backupImageRep<R = cocoa.NSBitmapImageRep>(): R;
    setBackupImageRep<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    magicWandEditor<R = cocoa.MSBitmapMagicWandEditor>(): R;
    setMagicWandEditor<R = void, P0 = cocoa.MSBitmapMagicWandEditor>(_v: P0): R;
    rectangleEditor<R = cocoa.MSBitmapRectangleEditor>(): R;
    setRectangleEditor<R = void, P0 = cocoa.MSBitmapRectangleEditor>(_v: P0): R;
    accumulatedSelection<R = cocoa.NSBezierPath>(): R;
    setAccumulatedSelection<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    inspectorViewController<R = cocoa.MSBitmapEditInspectorViewController>(): R;
  }
  namespace classes {
    export interface MSBitmapEditEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSBitmapEditEventHandler>(): R;
      new: <R = MSBitmapEditEventHandler>() => R;
    }
  }
}

declare const MSBitmapEditEventHandler: cocoa.classes.MSBitmapEditEventHandler;
