/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardInternalImageReader<T = any> extends cocoa.MSPasteboardImagesReader {}
  namespace classes {
    export interface MSPasteboardInternalImageReader<T = any> extends cocoa.classes.MSPasteboardImagesReader {
      alloc<R = MSPasteboardInternalImageReader>(): R;
      new: <R = MSPasteboardInternalImageReader>() => R;
    }
  }
}

declare const MSPasteboardInternalImageReader: cocoa.classes.MSPasteboardInternalImageReader;
