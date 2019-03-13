/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderViewRequiredMethodsProtocol<T = any> {
    regularColorIfPossible<R = NSColor, P0 = NSColor>(_regularColorIfPossible: P0): R;
    adjustControls<R = void, P0 = unknown>(_adjustControls: P0): R;
    _adjustControls_andSetColor<R = void, P0 = unknown, P1 = boolean>(__adjustControls: P0, _andSetColor: P1): R;
    setColor<R = void, P0 = NSColor>(_setColor: P0): R;
    provideNewSubview<R = unknown, P0 = unknown>(_provideNewSubview: P0): R;
  }
  namespace classes {
    export interface NSSliderViewRequiredMethodsProtocol<T = any> {
      genericColorSpace<R = NSColorSpace>(): R;
    }
  }
}
