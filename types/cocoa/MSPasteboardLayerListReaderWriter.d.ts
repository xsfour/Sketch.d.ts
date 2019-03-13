/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerListReaderWriter<T = any> extends MSPasteboardLayersReaderWriter {}
  namespace classes {
    export interface MSPasteboardLayerListReaderWriter<T = any> extends MSPasteboardLayersReaderWriter {
      alloc<R = MSPasteboardLayerListReaderWriter>(): R;
      new: <R = MSPasteboardLayerListReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardLayerListReaderWriter: cocoa.classes.MSPasteboardLayerListReaderWriter;
