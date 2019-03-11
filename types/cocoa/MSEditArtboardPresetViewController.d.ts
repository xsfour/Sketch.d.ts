/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditArtboardPresetViewController<T = any> extends cocoa.NSViewController, cocoa.NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    confirm<R = void, P0 = unknown>(_confirm: P0): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    cancelButton<R = cocoa.NSButton>(): R;
    setCancelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    confirmButton<R = cocoa.NSButton>(): R;
    setConfirmButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    delegate<R = cocoa.MSEditArtboardPresetViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSEditArtboardPresetViewControllerDelegate>(_v: P0): R;
    preset<R = cocoa.MSArtboardPreset>(): R;
    setPreset<R = void, P0 = cocoa.MSArtboardPreset>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSEditArtboardPresetViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSEditArtboardPresetViewController>(): R;
      new: <R = MSEditArtboardPresetViewController>() => R;
    }
  }
}

declare const MSEditArtboardPresetViewController: cocoa.classes.MSEditArtboardPresetViewController;
