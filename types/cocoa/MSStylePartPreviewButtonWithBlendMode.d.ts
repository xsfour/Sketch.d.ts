/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartPreviewButtonWithBlendMode<T = any> extends cocoa.MSStylePartPreviewButton {
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    changeBlendMode<R = void, P0 = unknown>(_changeBlendMode: P0): R;
    showBlendModeMenu<R = void, P0 = unknown>(_showBlendModeMenu: P0): R;
    updateButtonState<R = void>(): R;
    awakeFromNib<R = void>(): R;
    setupStylePartPreviewButtonWithBlendMode<R = void>(): R;
    blendModeMenu<R = cocoa.NSMenu>(): R;
    setBlendModeMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    inlineBlendModeButton<R = cocoa.NSButton>(): R;
    setInlineBlendModeButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    blendModes<R = cocoa.NSSet>(): R;
    setBlendModes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    delegate<R = cocoa.MSStylePartPreviewButtonWithBlendModeDelegae>(): R;
    setDelegate<R = void, P0 = cocoa.MSStylePartPreviewButtonWithBlendModeDelegae>(_v: P0): R;
  }
  namespace classes {
    export interface MSStylePartPreviewButtonWithBlendMode<T = any> extends cocoa.classes.MSStylePartPreviewButton {
      alloc<R = MSStylePartPreviewButtonWithBlendMode>(): R;
      new: <R = MSStylePartPreviewButtonWithBlendMode>() => R;
      toolTipForBlendModes<R = unknown, P0 = unknown>(_toolTipForBlendModes: P0): R;
    }
  }
}

declare const MSStylePartPreviewButtonWithBlendMode: cocoa.classes.MSStylePartPreviewButtonWithBlendMode;
