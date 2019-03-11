/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarControlStripPlatter<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    wantsUpdateLayer<R = boolean>(): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    platterColor<R = cocoa.NSColor>(): R;
    setPlatterColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarControlStripPlatter<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarControlStripPlatter>(): R;
      new: <R = NSTouchBarControlStripPlatter>() => R;
    }
  }
}

declare const NSTouchBarControlStripPlatter: cocoa.classes.NSTouchBarControlStripPlatter;
