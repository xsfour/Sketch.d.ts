/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesPopUpButtonCell<T = any> extends cocoa.NSPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    drawDefaultTitle_withFrame_inView<R = cocoa.CGRect, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_drawDefaultTitle: P0, _withFrame: P1, _inView: P2): R;
    drawSharedObjectTitleWithFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(_drawSharedObjectTitleWithFrame: P0): R;
    drawSharedObjectSecondaryTitle<R = cocoa.CGRect, P0 = cocoa.CGRect>(_drawSharedObjectSecondaryTitle: P0): R;
    drawSharedObjectMainTitle<R = cocoa.CGRect, P0 = cocoa.CGRect>(_drawSharedObjectMainTitle: P0): R;
    previewImage<R = cocoa.NSImage>(): R;
    setPreviewImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    localIsOutOfSync<R = boolean>(): R;
    setLocalIsOutOfSync<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = cocoa.MSSharedStylesPopUpButtonCellDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSSharedStylesPopUpButtonCellDelegate>(_v: P0): R;
    sharedObject<R = cocoa.MSShareableObjectReference>(): R;
  }
  namespace classes {
    export interface MSSharedStylesPopUpButtonCell<T = any> extends cocoa.classes.NSPopUpButtonCell {
      alloc<R = MSSharedStylesPopUpButtonCell>(): R;
      new: <R = MSSharedStylesPopUpButtonCell>() => R;
    }
  }
}

declare const MSSharedStylesPopUpButtonCell: cocoa.classes.MSSharedStylesPopUpButtonCell;
