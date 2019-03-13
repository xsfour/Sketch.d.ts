/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEPSImageRep<T = any> extends NSImageRep {
    prepareGState<R = void>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    EPSRepresentation<R = NSData>(): R;
    boundingBox<R = CGRect>(): R;
    // + NSEPSImageRep(Alpha,MSSmallerArchiving,PDFData):
    repSupportsAlpha<R = boolean>(): R;
    dataForArchiving<R = unknown>(): R;
    hasEPSRepresentation<R = boolean>(): R;
    PDFRepresentation_ms<R = unknown>(): R;
  }
  namespace classes {
    export interface NSEPSImageRep<T = any> extends NSImageRep {
      alloc<R = NSEPSImageRep>(): R;
      new: <R = NSEPSImageRep>() => R;
      _imagesFromIcon_inApp_zone<R = unknown, P0 = unknown, P1 = unknown, P2 = _NSZone>(__imagesFromIcon: P0, _inApp: P1, _zone: P2): R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
      // + NSEPSImageRep(Alpha,MSSmallerArchiving,PDFData):
      
    }
  }
}

declare const NSEPSImageRep: cocoa.classes.NSEPSImageRep;
