/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarPressAndHoldTransposerDelegateProtocol<T = any> extends NSObjectProtocol {
    transposerDidCancel<R = void, P0 = NSTouchBarPressAndHoldTransposer>(_transposerDidCancel: P0): R;
    transposerDidEnd<R = void, P0 = NSTouchBarPressAndHoldTransposer>(_transposerDidEnd: P0): R;
  }
  namespace classes {
    export interface NSTouchBarPressAndHoldTransposerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
