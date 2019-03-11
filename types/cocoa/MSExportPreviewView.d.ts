/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewView<T = any> extends cocoa.NSView, cocoa.NSDraggingSourceProtocol, cocoa.NSPasteboardWritingProtocol {
    cxx_destruct<R = void>(): R;
    beginDragWithEvent<R = void, P0 = unknown>(_beginDragWithEvent: P0): R;
    imageDrawRect<R = cocoa.CGRect>(): R;
    setup<R = void>(): R;
    awakeFromNib<R = void>(): R;
    initWithViewModel<R = unknown, P0 = unknown>(_initWithViewModel: P0): R;
    viewModel<R = cocoa.MSExportPreviewViewModel>(): R;
    setViewModel<R = void, P0 = cocoa.MSExportPreviewViewModel>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportPreviewView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSDraggingSourceProtocol, cocoa.classes.NSPasteboardWritingProtocol {
      alloc<R = MSExportPreviewView>(): R;
      new: <R = MSExportPreviewView>() => R;
    }
  }
}

declare const MSExportPreviewView: cocoa.classes.MSExportPreviewView;
