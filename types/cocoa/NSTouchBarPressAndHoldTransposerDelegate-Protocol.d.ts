/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarPressAndHoldTransposerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    transposerDidCancel<R = void, P0 = cocoa.NSTouchBarPressAndHoldTransposer>(_transposerDidCancel: P0): R;
    transposerDidEnd<R = void, P0 = cocoa.NSTouchBarPressAndHoldTransposer>(_transposerDidEnd: P0): R;
  }
  namespace classes {
    export interface NSTouchBarPressAndHoldTransposerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarPressAndHoldTransposerDelegateProtocol: cocoa.classes.NSTouchBarPressAndHoldTransposerDelegateProtocol;
