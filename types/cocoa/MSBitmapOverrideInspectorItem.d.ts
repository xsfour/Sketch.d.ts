/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapOverrideInspectorItem<T = any> extends cocoa.MSOverrideInspectorItem, cocoa.MSDataMenuProviderDelegateProtocol {
    dataOverrides<R = unknown>(): R;
    overrideImage<R = unknown>(): R;
    NSImage<R = unknown>(): R;
    choosePatternImage<R = void, P0 = unknown>(_choosePatternImage: P0): R;
    imageView<R = cocoa.MSImageOverrideView>(): R;
    setImageView<R = void, P0 = cocoa.MSImageOverrideView>(_v: P0): R;
    controlRect<R = cocoa.CGRect>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBitmapOverrideInspectorItem<T = any> extends cocoa.classes.MSOverrideInspectorItem, cocoa.classes.MSDataMenuProviderDelegateProtocol {
      alloc<R = MSBitmapOverrideInspectorItem>(): R;
      new: <R = MSBitmapOverrideInspectorItem>() => R;
    }
  }
}

declare const MSBitmapOverrideInspectorItem: cocoa.classes.MSBitmapOverrideInspectorItem;
