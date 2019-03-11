/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyExternalColorPickerServiceViewControllerProtocol<T = any> {
    loadAndAddColorPickerContentView<R = void>(): R;
    supportsMode_reply<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_supportsMode: P0, _reply: P1): R;
    detachColorList<R = void, P0 = cocoa.NSColorList>(_detachColorList: P0): R;
    attachColorList<R = void, P0 = cocoa.NSColorList>(_attachColorList: P0): R;
    alphaControlToggled<R = void, P0 = boolean>(_alphaControlToggled: P0): R;
    setMode<R = void, P0 = number>(_setMode: P0): R;
    setColor<R = void, P0 = cocoa.NSColor>(_setColor: P0): R;
  }
  namespace classes {
    export interface NSLegacyExternalColorPickerServiceViewControllerProtocol<T = any> {  }
  }
}

declare const NSLegacyExternalColorPickerServiceViewControllerProtocol: cocoa.classes.NSLegacyExternalColorPickerServiceViewControllerProtocol;
