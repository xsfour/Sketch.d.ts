/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingInternalProtocol<T = any> extends cocoa.NSColorPickingCustomProtocol {
    pickerIdentifier<R = cocoa.NSString>(): R;
    isActivePicker<R = boolean>(): R;
    setIsActivePicker<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickingInternalProtocol<T = any> extends cocoa.classes.NSColorPickingCustomProtocol {  }
  }
}

declare const NSColorPickingInternalProtocol: cocoa.classes.NSColorPickingInternalProtocol;
