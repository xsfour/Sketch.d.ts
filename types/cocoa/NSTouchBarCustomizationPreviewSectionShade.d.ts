/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionShade<T = any> extends NSView, NSCollectionViewElementProtocol, NSAccessibilityButtonProtocol {
    cxx_destruct<R = void>(): R;
    handleClick<R = void, P0 = unknown>(_handleClick: P0): R;
    accessibilityLabel<R = NSString>(): R;
    setAccessibilityLabel<R = void, P0 = NSString>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewSectionShade<T = any> extends NSView, NSCollectionViewElementProtocol, NSAccessibilityButtonProtocol {
      alloc<R = NSTouchBarCustomizationPreviewSectionShade>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionShade>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionShade: cocoa.classes.NSTouchBarCustomizationPreviewSectionShade;
