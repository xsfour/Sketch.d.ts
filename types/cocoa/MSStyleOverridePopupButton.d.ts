/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleOverridePopupButton<T = any> extends NSPopUpButton {
    cxx_destruct<R = void>(): R;
    buildMenuForOverride_withMenuBuilder_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_buildMenuForOverride: P0, _withMenuBuilder: P1, _document: P2, _imageCallback: P3): R;
    setupResetMenuForPrimaryOverride_document<R = void, P0 = unknown, P1 = unknown>(_setupResetMenuForPrimaryOverride: P0, _document: P1): R;
    applyPreviewImage<R = void, P0 = unknown>(_applyPreviewImage: P0): R;
    setupButtonTitleWithCurrentStyle_primaryOverride_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_setupButtonTitleWithCurrentStyle: P0, _primaryOverride: P1, _document: P2, _imageCallback: P3): R;
    bestMatchForSharedStyleWithID_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_bestMatchForSharedStyleWithID: P0, _inDocument: P1): R;
    addMenuItemForStyle_withName_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_addMenuItemForStyle: P0, _withName: P1, _document: P2, _imageCallback: P3): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
  }
  namespace classes {
    export interface MSStyleOverridePopupButton<T = any> extends NSPopUpButton {
      alloc<R = MSStyleOverridePopupButton>(): R;
      new: <R = MSStyleOverridePopupButton>() => R;
    }
  }
}

declare const MSStyleOverridePopupButton: cocoa.classes.MSStyleOverridePopupButton;
