/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSketchToolRunner<T = any> extends BCToolRunner {
    cxx_destruct<R = void>(): R;
    exportPreviewImageForDocumentAtURL_additionalArguments_intoURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_exportPreviewImageForDocumentAtURL: P0, _additionalArguments: P1, _intoURL: P2, _completionHandler: P3): R;
    initWithSketchToolURL_maximumConcurrentOperations<R = unknown, P0 = unknown, P1 = number>(_initWithSketchToolURL: P0, _maximumConcurrentOperations: P1): R;
    sketchToolSubprocessQueue<R = NSOperationQueue>(): R;
    sketchToolURL<R = NSURL>(): R;
  }
  namespace classes {
    export interface BCSketchToolRunner<T = any> extends BCToolRunner {  }
  }
}

declare const BCSketchToolRunner: cocoa.classes.BCSketchToolRunner;
