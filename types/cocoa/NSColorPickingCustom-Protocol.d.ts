/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingCustomProtocol<T = any> extends cocoa.NSColorPickingDefaultProtocol {
    setColor<R = void, P0 = cocoa.NSColor>(_setColor: P0): R;
    provideNewView<R = cocoa.NSView, P0 = boolean>(_provideNewView: P0): R;
    currentMode<R = number>(): R;
    supportsMode<R = boolean, P0 = number>(_supportsMode: P0): R;
  }
  namespace classes {
    export interface NSColorPickingCustomProtocol<T = any> extends cocoa.classes.NSColorPickingDefaultProtocol {  }
  }
}

declare const NSColorPickingCustomProtocol: cocoa.classes.NSColorPickingCustomProtocol;
