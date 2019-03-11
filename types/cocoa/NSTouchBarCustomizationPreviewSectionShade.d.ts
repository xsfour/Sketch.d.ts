/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionShade<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol, cocoa.NSAccessibilityButtonProtocol {
    cxx_destruct<R = void>(): R;
    handleClick<R = void, P0 = unknown>(_handleClick: P0): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    setAccessibilityLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewSectionShade<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol, cocoa.classes.NSAccessibilityButtonProtocol {
      alloc<R = NSTouchBarCustomizationPreviewSectionShade>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionShade>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionShade: cocoa.classes.NSTouchBarCustomizationPreviewSectionShade;
