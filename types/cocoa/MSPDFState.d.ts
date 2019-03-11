/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFState<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    stringFromTransform<R = unknown, P0 = unknown>(_stringFromTransform: P0): R;
    transformedClippingPath<R = unknown>(): R;
    updateClippingWithTextPath<R = void, P0 = unknown>(_updateClippingWithTextPath: P0): R;
    updateClipping<R = void>(): R;
    transformStruct<R = unknown>(): R;
    transformBezierPath<R = unknown, P0 = unknown>(_transformBezierPath: P0): R;
    transformSize<R = cocoa.CGSize, P0 = cocoa.CGSize>(_transformSize: P0): R;
    transformPoint<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_transformPoint: P0): R;
    appendTransform<R = void, P0 = unknown>(_appendTransform: P0): R;
    resetTransform<R = void, P0 = unknown>(_resetTransform: P0): R;
    resetFlipped<R = void>(): R;
    lastLayer<R = unknown>(): R;
    layerWithEnclosingGroup<R = unknown, P0 = boolean>(_layerWithEnclosingGroup: P0): R;
    makeArtboardGroup<R = unknown>(): R;
    optimiseClipLayerInGroup<R = boolean, P0 = unknown>(_optimiseClipLayerInGroup: P0): R;
    addLayer<R = void, P0 = unknown>(_addLayer: P0): R;
    initWithScanner<R = unknown, P0 = unknown>(_initWithScanner: P0): R;
    flippedTransform<R = cocoa.NSAffineTransform>(): R;
    setFlippedTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    transform<R = cocoa.NSAffineTransform>(): R;
    setTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    scanner<R = cocoa.MSPDFScanner>(): R;
    setScanner<R = void, P0 = cocoa.MSPDFScanner>(_v: P0): R;
    transformedPath<R = cocoa.NSBezierPath>(): R;
    setTransformedPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    text<R = cocoa.MSPDFTextState>(): R;
    setText<R = void, P0 = cocoa.MSPDFTextState>(_v: P0): R;
    renderingIntent<R = number>(): R;
    setRenderingIntent<R = void, P0 = number>(_v: P0): R;
    pathWasRect<R = boolean>(): R;
    setPathWasRect<R = void, P0 = boolean>(_v: P0): R;
    pathUsed<R = boolean>(): R;
    setPathUsed<R = void, P0 = boolean>(_v: P0): R;
    pathClosed<R = boolean>(): R;
    setPathClosed<R = void, P0 = boolean>(_v: P0): R;
    path<R = cocoa.NSBezierPath>(): R;
    setPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    layers<R = cocoa.NSMutableArray>(): R;
    setLayers<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    fillGradient<R = cocoa.PDFPattern>(): R;
    setFillGradient<R = void, P0 = cocoa.PDFPattern>(_v: P0): R;
    fillColorSpaceMapping<R = cocoa.PDFFunction>(): R;
    setFillColorSpaceMapping<R = void, P0 = cocoa.PDFFunction>(_v: P0): R;
    fillColorSpace<R = cocoa.NSColorSpace>(): R;
    setFillColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    fillColor<R = cocoa.NSColor>(): R;
    setFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    fillAlphaConstant<R = number>(): R;
    setFillAlphaConstant<R = void, P0 = number>(_v: P0): R;
    currentPoint<R = cocoa.CGPoint>(): R;
    setCurrentPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    containsClippedItems<R = boolean>(): R;
    setContainsClippedItems<R = void, P0 = boolean>(_v: P0): R;
    clippingUpdated<R = boolean>(): R;
    setClippingUpdated<R = void, P0 = boolean>(_v: P0): R;
    clippingPath<R = cocoa.NSBezierPath>(): R;
    setClippingPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    clippingMode<R = number>(): R;
    setClippingMode<R = void, P0 = number>(_v: P0): R;
    borderThickness<R = number>(): R;
    setBorderThickness<R = void, P0 = number>(_v: P0): R;
    borderJoinStyle<R = number>(): R;
    setBorderJoinStyle<R = void, P0 = number>(_v: P0): R;
    borderGradient<R = cocoa.PDFPattern>(): R;
    setBorderGradient<R = void, P0 = cocoa.PDFPattern>(_v: P0): R;
    borderCapStyle<R = number>(): R;
    setBorderCapStyle<R = void, P0 = number>(_v: P0): R;
    borderDashes<R = cocoa.NSArray>(): R;
    setBorderDashes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    borderColorSpaceMapping<R = cocoa.PDFFunction>(): R;
    setBorderColorSpaceMapping<R = void, P0 = cocoa.PDFFunction>(_v: P0): R;
    borderColorSpace<R = cocoa.NSColorSpace>(): R;
    setBorderColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    borderColor<R = cocoa.NSColor>(): R;
    setBorderColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    borderAlphaConstant<R = number>(): R;
    setBorderAlphaConstant<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSPDFState<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSPDFState>(): R;
      new: <R = MSPDFState>() => R;
    }
  }
}

declare const MSPDFState: cocoa.classes.MSPDFState;
