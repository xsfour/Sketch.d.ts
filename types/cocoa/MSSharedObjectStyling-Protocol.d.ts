/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectStylingProtocol<T = any> extends cocoa.NSObjectProtocol {
    applyStyleToMenuItem_withColorSpace<R = void, P0 = cocoa.NSMenuItem, P1 = cocoa.NSColorSpace>(_applyStyleToMenuItem: P0, _withColorSpace: P1): R;
    generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = cocoa.CGSize, P1 = number, P2 = boolean, P3 = cocoa.NSColorSpace, P4 = cocoa.CDUnknownBlockType>(_generatePreviewForSyncSheetWithSize: P0, _backingScale: P1, _shadow: P2, _colorSpace: P3, _completionBlock: P4): R;
    generatePreviewForManageSheetWithBackingScale_completionBlock<R = cocoa.NSImage, P0 = number, P1 = cocoa.CDUnknownBlockType>(_generatePreviewForManageSheetWithBackingScale: P0, _completionBlock: P1): R;
    generatePreviewForPopup_backingScale_completionBlock<R = cocoa.NSImage, P0 = cocoa.NSPopUpButtonCell, P1 = number, P2 = cocoa.CDUnknownBlockType>(_generatePreviewForPopup: P0, _backingScale: P1, _completionBlock: P2): R;
    generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock<R = cocoa.NSImage, P0 = cocoa.NSMenuItem, P1 = cocoa.NSColorSpace, P2 = number, P3 = cocoa.CDUnknownBlockType>(_generatePreviewForMenuItem: P0, _withColorSpace: P1, _backingScale: P2, _completionBlock: P3): R;
  }
  namespace classes {
    export interface MSSharedObjectStylingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSSharedObjectStylingProtocol: cocoa.classes.MSSharedObjectStylingProtocol;
