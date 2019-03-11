/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTypeGroupProtocol<T = any> extends cocoa.NSObjectProtocol {
    groupTouchBar<R = cocoa.NSTouchBar>(): R;
    setGroupTouchBar<R = void, P0 = cocoa.NSTouchBar>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarItemTypeGroupProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarItemTypeGroupProtocol: cocoa.classes.NSTouchBarItemTypeGroupProtocol;
