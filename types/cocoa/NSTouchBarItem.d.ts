/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItem<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    description<R = unknown>(): R;
    preferredZOrder<R = number>(): R;
    _contentClippingSize<R = cocoa.CGSize>(): R;
    _itemViewMinSize_maxSize<R = void, P0 = cocoa.CGSize, P1 = cocoa.CGSize>(__itemViewMinSize: P0, _maxSize: P1): R;
    _itemViewMinSize_maxSize_preferredSize<R = void, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = cocoa.CGSize>(__itemViewMinSize: P0, _maxSize: P1, _preferredSize: P2): R;
    _itemViewMinSize_maxSize_preferredSize_stretchesContent<R = void, P0 = cocoa.CGSize, P1 = cocoa.CGSize, P2 = cocoa.CGSize, P3 = boolean>(__itemViewMinSize: P0, _maxSize: P1, _preferredSize: P2, _stretchesContent: P3): R;
    _type<R = number>(): R;
    itemPosition<R = number>(): R;
    setPriority<R = void, P0 = number>(_setPriority: P0): R;
    priority<R = number>(): R;
    dealloc<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    _playgroundQuickLookView<R = unknown>(): R;
    fallbackItemSizeForCustomization<R = cocoa.CGSize>(): R;
    makeViewForCustomizationPreview<R = unknown>(): R;
    makeViewForCustomizationPalette<R = unknown>(): R;
    makeViewForCustomization<R = unknown>(): R;
    makePressAndHoldTransposerWithSourceFrame_destinationContentView_frame<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGRect>(_makePressAndHoldTransposerWithSourceFrame: P0, _destinationContentView: P1, _frame: P2): R;
    visible<R = boolean>(): R;
    visibilityPriority<R = number>(): R;
    setVisibilityPriority<R = void, P0 = number>(_v: P0): R;
    viewController<R = cocoa.NSViewController>(): R;
    view<R = cocoa.NSView>(): R;
    customizationLabel<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    preferredSizeForCustomizationPalette<R = cocoa.CGSize>(): R;
    preferredPopoverTransposerClass<R = unknown>(): R;
    preferredPopoverTransposerPriority<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSTouchBarItem>(): R;
      new: <R = NSTouchBarItem>() => R;
      keyPathsForValuesAffectingView<R = unknown>(): R;
      initialize<R = void>(): R;
      removeSystemTrayItem<R = void, P0 = unknown>(_removeSystemTrayItem: P0): R;
      addSystemTrayItem<R = void, P0 = unknown>(_addSystemTrayItem: P0): R;
      removeTouchIDItem<R = void, P0 = unknown>(_removeTouchIDItem: P0): R;
      addTouchIDItem<R = void, P0 = unknown>(_addTouchIDItem: P0): R;
    }
  }
}

declare const NSTouchBarItem: cocoa.classes.NSTouchBarItem;
