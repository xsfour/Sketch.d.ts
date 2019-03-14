/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPreview<T0 = void, T1 = void, T2 = void> extends NSPopUpButton, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    contentBounds<R = CGRect>(): R;
    drawCheckerboard<R = void>(): R;
    drawContentInRect_dirtyRect<R = void, P0 = CGRect, P1 = CGRect>(_drawContentInRect: P0, _dirtyRect: P1): R;
    initInBounds<R = unknown, P0 = CGRect>(_initInBounds: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    isHovering<R = boolean>(): R;
    setIsHovering<R = void, P0 = boolean>(_v: P0): R;
    frequentColors<R = NSArray>(): R;
    setFrequentColors<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = BCColorPreviewDelegate>(): R;
    setDelegate<R = void, P0 = BCColorPreviewDelegate>(_v: P0): R;
    color<R = BCFlexibleColor>(): R;
    setColor<R = void, P0 = BCFlexibleColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCColorPreview {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton, NSMenuDelegateProtocol {
      alloc<R = BCColorPreview>(): R;
      new: <R = BCColorPreview>() => R;
      menuItemForColorCounter_target_action_documentColorSpace_useHSB<R = unknown, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown, P4 = boolean>(_menuItemForColorCounter: P0, _target: P1, _action: P2, _documentColorSpace: P3, _useHSB: P4): R;
      menuItemAttributedTitleForColorCounter_useHSB<R = unknown, P0 = unknown, P1 = boolean>(_menuItemAttributedTitleForColorCounter: P0, _useHSB: P1): R;
      previewImageForColorCounter_documentColorSpace<R = unknown, P0 = unknown, P1 = unknown>(_previewImageForColorCounter: P0, _documentColorSpace: P1): R;
      shouldUseHSBInColorDescriptions<R = boolean>(): R;
    }
  }
}

declare const BCColorPreview: cocoa.BCColorPreview.CLASS;
