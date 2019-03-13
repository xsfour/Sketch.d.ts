/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTypeGroupProtocol<T = any> extends NSObjectProtocol {
    groupTouchBar<R = NSTouchBar>(): R;
    setGroupTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarItemTypeGroupProtocol<T = any> extends NSObjectProtocol {  }
  }
}
