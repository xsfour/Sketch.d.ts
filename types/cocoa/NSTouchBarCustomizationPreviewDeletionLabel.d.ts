/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewDeletionLabel<T = any> extends NSView, NSCollectionViewElementProtocol {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    labelTransform<R = CGAffineTransform>(): R;
    setLabelTransform<R = void, P0 = CGAffineTransform>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewDeletionLabel<T = any> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarCustomizationPreviewDeletionLabel>(): R;
      new: <R = NSTouchBarCustomizationPreviewDeletionLabel>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewDeletionLabel: cocoa.classes.NSTouchBarCustomizationPreviewDeletionLabel;
