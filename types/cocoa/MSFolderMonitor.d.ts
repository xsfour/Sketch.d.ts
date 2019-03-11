/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFolderMonitor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    flush<R = void>(): R;
    flags<R = number>(): R;
    initWithURL_latency_contentsChangedBlock<R = unknown, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_initWithURL: P0, _latency: P1, _contentsChangedBlock: P2): R;
    initWithURL_contentsChangedBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithURL: P0, _contentsChangedBlock: P1): R;
    contentsChangedBlock<R = cocoa.CDUnknownBlockType>(): R;
    setContentsChangedBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    folderURL<R = cocoa.NSURL>(): R;
    setFolderURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface MSFolderMonitor<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSFolderMonitor>(): R;
      new: <R = MSFolderMonitor>() => R;
    }
  }
}

declare const MSFolderMonitor: cocoa.classes.MSFolderMonitor;
