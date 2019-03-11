/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashViewController<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    helpPressed<R = void, P0 = unknown>(_helpPressed: P0): R;
    closeFlash<R = void, P0 = unknown>(_closeFlash: P0): R;
    closeBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCloseBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    helpBlock<R = cocoa.CDUnknownBlockType>(): R;
    setHelpBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    closeButton<R = cocoa.NSButton>(): R;
    setCloseButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    helpButton<R = cocoa.NSButton>(): R;
    setHelpButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    message<R = cocoa.NSTextField>(): R;
    setMessage<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlashViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSFlashViewController>(): R;
      new: <R = MSFlashViewController>() => R;
      flashViewControllerWithMessage_closeBlock_helpBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_flashViewControllerWithMessage: P0, _closeBlock: P1, _helpBlock: P2): R;
    }
  }
}

declare const MSFlashViewController: cocoa.classes.MSFlashViewController;
