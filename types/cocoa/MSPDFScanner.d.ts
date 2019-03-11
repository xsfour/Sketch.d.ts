/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFScanner<T = any> extends cocoa.PDFScanner {
    setTextTransform_resettingLineTransform<R = void, P0 = unknown, P1 = boolean>(_setTextTransform: P0, _resettingLineTransform: P1): R;
    gradientForLayer_pattern<R = unknown, P0 = unknown, P1 = unknown>(_gradientForLayer: P0, _pattern: P1): R;
    transformedPath<R = unknown>(): R;
    makeLayerFromPath<R = unknown, P0 = unknown>(_makeLayerFromPath: P0): R;
    doClipping<R = void>(): R;
    doRestoreState<R = void>(): R;
    doSaveState<R = void>(): R;
    doNewPath<R = void>(): R;
    doText<R = void>(): R;
    doClose<R = void>(): R;
    adjustVerticalOffset_ofChildrenInContainer<R = void, P0 = number, P1 = unknown>(_adjustVerticalOffset: P0, _ofChildrenInContainer: P1): R;
    makeCropLayerFromPDFPage<R = unknown, P0 = cocoa.CGPDFPage>(_makeCropLayerFromPDFPage: P0): R;
    isPDFPageCropped<R = boolean, P0 = cocoa.CGPDFPage>(_isPDFPageCropped: P0): R;
    nameForType<R = unknown, P0 = unknown>(_nameForType: P0): R;
    state<R = cocoa.MSPDFState>(): R;
    setState<R = void, P0 = cocoa.MSPDFState>(_v: P0): R;
    stack<R = cocoa.NSMutableArray>(): R;
    setStack<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    nextID<R = number>(): R;
    setNextID<R = void, P0 = number>(_v: P0): R;
    substituteFontName<R = cocoa.NSString>(): R;
    setSubstituteFontName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    rootLayer<R = cocoa.MSLayerGroup>(): R;
    setRootLayer<R = void, P0 = cocoa.MSLayerGroup>(_v: P0): R;
  }
  namespace classes {
    export interface MSPDFScanner<T = any> extends cocoa.classes.PDFScanner {
      alloc<R = MSPDFScanner>(): R;
      new: <R = MSPDFScanner>() => R;
    }
  }
}

declare const MSPDFScanner: cocoa.classes.MSPDFScanner;
