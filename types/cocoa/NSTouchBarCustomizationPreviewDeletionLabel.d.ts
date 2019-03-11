/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewDeletionLabel<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    labelTransform<R = cocoa.CGAffineTransform>(): R;
    setLabelTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewDeletionLabel<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarCustomizationPreviewDeletionLabel>(): R;
      new: <R = NSTouchBarCustomizationPreviewDeletionLabel>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewDeletionLabel: cocoa.classes.NSTouchBarCustomizationPreviewDeletionLabel;
