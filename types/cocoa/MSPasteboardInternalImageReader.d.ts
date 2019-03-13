/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardInternalImageReader<T = any> extends MSPasteboardImagesReader {}
  namespace classes {
    export interface MSPasteboardInternalImageReader<T = any> extends MSPasteboardImagesReader {
      alloc<R = MSPasteboardInternalImageReader>(): R;
      new: <R = MSPasteboardInternalImageReader>() => R;
    }
  }
}

declare const MSPasteboardInternalImageReader: cocoa.classes.MSPasteboardInternalImageReader;
