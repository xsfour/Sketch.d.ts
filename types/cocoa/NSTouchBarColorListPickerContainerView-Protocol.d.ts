/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerContainerViewProtocol<T = any> extends cocoa.NSObjectProtocol {
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerContainerViewProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarColorListPickerContainerViewProtocol: cocoa.classes.NSTouchBarColorListPickerContainerViewProtocol;
