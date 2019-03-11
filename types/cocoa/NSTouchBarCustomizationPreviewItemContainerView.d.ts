/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewItemContainerView<T = any> extends cocoa.NSView {
    _updatePresentationForCurrentStateAnimated<R = void, P0 = boolean>(__updatePresentationForCurrentStateAnimated: P0): R;
    setState_animated<R = void, P0 = number, P1 = boolean>(_setState: P0, _animated: P1): R;
    itemTransform<R = cocoa.CGAffineTransform>(): R;
    setItemTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    deletionLabelString<R = cocoa.NSString>(): R;
    setDeletionLabelString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewItemContainerView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTouchBarCustomizationPreviewItemContainerView>(): R;
      new: <R = NSTouchBarCustomizationPreviewItemContainerView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewItemContainerView: cocoa.classes.NSTouchBarCustomizationPreviewItemContainerView;
