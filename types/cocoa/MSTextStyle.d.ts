/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyle<T = any> extends cocoa._MSTextStyle {
    resetDecodedAttributes<R = void>(): R;
    syncOwningTextLayerWithThisStyle<R = void>(): R;
    updateAttributesWithoutSyncingOwningTextLayer<R = void, P0 = unknown>(_updateAttributesWithoutSyncingOwningTextLayer: P0): R;
    generatePreviewWithText_imageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = unknown, P1 = cocoa.CGSize, P2 = cocoa.CGSize, P3 = unknown, P4 = number, P5 = cocoa.CDUnknownBlockType>(_generatePreviewWithText: P0, _imageSize: P1, _previewSize: P2, _colorSpace: P3, _backingScale: P4, _completionBlock: P5): R;
    decodedAttributes<R = cocoa.NSDictionary>(): R;
    setDecodedAttributes<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    attributes<R = cocoa.NSDictionary>(): R;
    setAttributes<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    fontPostscriptName<R = cocoa.NSString>(): R;
    isRequiredFontAvailable<R = boolean>(): R;
  }
  namespace classes {
    export interface MSTextStyle<T = any> extends cocoa.classes._MSTextStyle {
      alloc<R = MSTextStyle>(): R;
      new: <R = MSTextStyle>() => R;
      styleWithAttributes<R = unknown, P0 = unknown>(_styleWithAttributes: P0): R;
    }
  }
}

declare const MSTextStyle: cocoa.classes.MSTextStyle;
