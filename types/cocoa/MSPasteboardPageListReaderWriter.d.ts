/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPageListReaderWriter<T = any> extends cocoa.MSPasteboardLayersReaderWriter {}
  namespace classes {
    export interface MSPasteboardPageListReaderWriter<T = any> extends cocoa.classes.MSPasteboardLayersReaderWriter {
      alloc<R = MSPasteboardPageListReaderWriter>(): R;
      new: <R = MSPasteboardPageListReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardPageListReaderWriter: cocoa.classes.MSPasteboardPageListReaderWriter;
