/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingDefaultProtocol<T = any> {
    minContentSize<R = cocoa.CGSize>(): R;
    buttonToolTip<R = cocoa.NSString>(): R;
    setMode<R = void, P0 = number>(_setMode: P0): R;
    detachColorList<R = void, P0 = cocoa.NSColorList>(_detachColorList: P0): R;
    attachColorList<R = void, P0 = cocoa.NSColorList>(_attachColorList: P0): R;
    alphaControlAddedOrRemoved<R = void, P0 = unknown>(_alphaControlAddedOrRemoved: P0): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    insertNewButtonImage_in<R = void, P0 = cocoa.NSImage, P1 = cocoa.NSButtonCell>(_insertNewButtonImage: P0, _in: P1): R;
    provideNewButtonImage<R = cocoa.NSImage>(): R;
    initWithPickerMask_colorPanel<R = unknown, P0 = number, P1 = cocoa.NSColorPanel>(_initWithPickerMask: P0, _colorPanel: P1): R;
  }
  namespace classes {
    export interface NSColorPickingDefaultProtocol<T = any> {  }
  }
}

declare const NSColorPickingDefaultProtocol: cocoa.classes.NSColorPickingDefaultProtocol;
