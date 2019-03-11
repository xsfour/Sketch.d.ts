/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardReaderProtocol<T = any> extends cocoa.NSObjectProtocol {
    pasteboardDataFromPasteboard_colorSpace_options_sender<R = cocoa.MSPasteboardLayers, P0 = cocoa.NSPasteboard, P1 = cocoa.NSColorSpace, P2 = number, P3 = cocoa.NSDraggingInfo>(_pasteboardDataFromPasteboard: P0, _colorSpace: P1, _options: P2, _sender: P3): R;
    supportedPasteboardTypes<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSPasteboardReaderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSPasteboardReaderProtocol: cocoa.classes.MSPasteboardReaderProtocol;
