/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    clearFlash<R = void>(): R;
    removeMessage<R = void, P0 = unknown>(_removeMessage: P0): R;
    displayFixedMessage_withHelpHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_displayFixedMessage: P0, _withHelpHandler: P1): R;
    displayWarningMessage_withHelpHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_displayWarningMessage: P0, _withHelpHandler: P1): R;
    displayMessage_userClosable_helpBlock<R = unknown, P0 = unknown, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_displayMessage: P0, _userClosable: P1, _helpBlock: P2): R;
    displayFlashMessage<R = unknown, P0 = unknown>(_displayFlashMessage: P0): R;
    flash<R = cocoa.MSFlashViewController>(): R;
    setFlash<R = void, P0 = cocoa.MSFlashViewController>(_v: P0): R;
    messages<R = cocoa.NSMutableArray>(): R;
    setMessages<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    stackView<R = cocoa.NSStackView>(): R;
    setStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
  }
  namespace classes {
    export interface MSFlashController<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSFlashController>(): R;
      new: <R = MSFlashController>() => R;
    }
  }
}

declare const MSFlashController: cocoa.classes.MSFlashController;
