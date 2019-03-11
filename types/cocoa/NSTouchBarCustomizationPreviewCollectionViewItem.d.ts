/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewCollectionViewItem<T = any> extends cocoa.NSCollectionViewItem, cocoa.NSGestureRecognizerDelegateProtocol {
    _shouldTrailingJiggle<R = boolean>(): R;
    _shouldLeadingJiggle<R = boolean>(): R;
    _updateJiggle<R = void>(): R;
    preferredViewAppearanceShowingAppState<R = unknown, P0 = boolean>(_preferredViewAppearanceShowingAppState: P0): R;
    _handlePan<R = void, P0 = unknown>(__handlePan: P0): R;
    _handlePress<R = void, P0 = unknown>(__handlePress: P0): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    accessibilityIsHiddenAttributeSettable<R = boolean>(): R;
    accessibilityHiddenAttribute<R = unknown>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    state<R = number>(): R;
    jiggleIndex<R = number>(): R;
    panHandler<R = cocoa.CDUnknownBlockType>(): R;
    setPanHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    pressHandler<R = cocoa.CDUnknownBlockType>(): R;
    setPressHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    _shouldJiggle<R = boolean>(): R;
    itemView<R = cocoa.NSTouchBarCustomizationPreviewItemContainerView>(): R;
    accessibilityActionEntries<R = cocoa.NSArray>(): R;
    setAccessibilityActionEntries<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewCollectionViewItem<T = any> extends cocoa.classes.NSCollectionViewItem, cocoa.classes.NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarCustomizationPreviewCollectionViewItem>(): R;
      new: <R = NSTouchBarCustomizationPreviewCollectionViewItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewCollectionViewItem: cocoa.classes.NSTouchBarCustomizationPreviewCollectionViewItem;
