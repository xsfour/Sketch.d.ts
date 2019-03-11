/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardManager<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    registerViewForSupportedDraggedTypes<R = void, P0 = unknown>(_registerViewForSupportedDraggedTypes: P0): R;
    registerReader<R = void, P0 = unknown>(_registerReader: P0): R;
    registerWriter<R = void, P0 = unknown>(_registerWriter: P0): R;
    writePasteboardLayers_toPasteboard<R = void, P0 = unknown, P1 = unknown>(_writePasteboardLayers: P0, _toPasteboard: P1): R;
    readPasteboardLayersFromPasteboard_colorSpace_options_sender<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_readPasteboardLayersFromPasteboard: P0, _colorSpace: P1, _options: P2, _sender: P3): R;
    readPasteboardLayersFromPasteboard_colorSpace_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_readPasteboardLayersFromPasteboard: P0, _colorSpace: P1, _options: P2): R;
    readPasteboardLayersFromDrag_colorSpace<R = unknown, P0 = unknown, P1 = unknown>(_readPasteboardLayersFromDrag: P0, _colorSpace: P1): R;
    registerDefaultReadersAndWriters<R = void>(): R;
    writers<R = cocoa.NSMutableArray>(): R;
    setWriters<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    readers<R = cocoa.NSMutableArray>(): R;
    setReaders<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSPasteboardManager<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPasteboardManager>(): R;
      new: <R = MSPasteboardManager>() => R;
      applicationPasteboardManager<R = unknown>(): R;
    }
  }
}

declare const MSPasteboardManager: cocoa.classes.MSPasteboardManager;
