/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTypePopoverProtocol<T = any> extends cocoa.NSObjectProtocol {
    dismissPopover<R = void, P0 = unknown>(_dismissPopover: P0): R;
    showPopover<R = void, P0 = unknown>(_showPopover: P0): R;
    isPresented<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTypePopoverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarItemTypePopoverProtocol: cocoa.classes.NSTouchBarItemTypePopoverProtocol;
