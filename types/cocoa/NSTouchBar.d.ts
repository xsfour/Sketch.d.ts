/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBar<T = any> extends cocoa.NSObject, cocoa.NSAnimatablePropertyContainerProtocol, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    setTouchBarLayoutDirection<R = void, P0 = number>(_setTouchBarLayoutDirection: P0): R;
    touchBarLayoutDirection<R = number>(): R;
    itemForIdentifier<R = unknown, P0 = unknown>(_itemForIdentifier: P0): R;
    _purgeCacheIfNecessary<R = void>(): R;
    _didItemsReallyChange<R = boolean, P0 = unknown>(__didItemsReallyChange: P0): R;
    items<R = unknown>(): R;
    dealloc<R = void>(): R;
    _playgroundPreviewView<R = unknown>(): R;
    _playgroundQuickLookView<R = unknown>(): R;
    _persistWithItemIdentifiers_toDomain<R = void, P0 = unknown, P1 = unknown>(__persistWithItemIdentifiers: P0, _toDomain: P1): R;
    _resetCustomization<R = void>(): R;
    _animatorClass<R = unknown>(): R;
    minWidthGivenVisualCenterX<R = number, P0 = number>(_minWidthGivenVisualCenterX: P0): R;
    setDefaultItems<R = void, P0 = unknown>(_setDefaultItems: P0): R;
    defaultItems<R = unknown>(): R;
    setItemIdentifiers<R = void, P0 = unknown>(_setItemIdentifiers: P0): R;
    setCustomizationDefaultItemIdentifiers<R = void, P0 = unknown>(_setCustomizationDefaultItemIdentifiers: P0): R;
    customizationDefaultItemIdentifiers<R = unknown>(): R;
    visible<R = boolean>(): R;
    escapeKeyReplacementItemIdentifier<R = cocoa.NSString>(): R;
    setEscapeKeyReplacementItemIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    principalItemIdentifier<R = cocoa.NSString>(): R;
    setPrincipalItemIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    templateItems<R = cocoa.NSSet>(): R;
    setTemplateItems<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    customizationRequiredItemIdentifiers<R = cocoa.NSArray>(): R;
    setCustomizationRequiredItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    customizationAllowedItemIdentifiers<R = cocoa.NSArray>(): R;
    setCustomizationAllowedItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    customizationIdentifier<R = cocoa.NSString>(): R;
    setCustomizationIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    defaultItemIdentifiers<R = cocoa.NSArray>(): R;
    setDefaultItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    configuration<R = cocoa.NSTouchBarCustomizableConfiguration>(): R;
    itemIdentifiers<R = cocoa.NSArray>(): R;
    delegate<R = cocoa.NSTouchBarDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSTouchBarDelegate>(_v: P0): R;
    suppressedByMoreFocusedTouchBars<R = boolean>(): R;
    setSuppressedByMoreFocusedTouchBars<R = void, P0 = boolean>(_v: P0): R;
    suppressedByLessFocusedTouchBars<R = boolean>(): R;
    setSuppressedByLessFocusedTouchBars<R = void, P0 = boolean>(_v: P0): R;
    suppressesMoreFocusedBars<R = boolean>(): R;
    setSuppressesMoreFocusedBars<R = void, P0 = boolean>(_v: P0): R;
    suppressesLessFocusedBars<R = boolean>(): R;
    setSuppressesLessFocusedBars<R = void, P0 = boolean>(_v: P0): R;
    animationTimingFunction<R = cocoa.CAMediaTimingFunction>(): R;
    animationDuration<R = number>(): R;
    animations<R = cocoa.NSDictionary>(): R;
    setAnimations<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    escapeKeyReplacementItem<R = cocoa.NSTouchBarItem>(): R;
    setEscapeKeyReplacementItem<R = void, P0 = cocoa.NSTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBar<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAnimatablePropertyContainerProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSTouchBar>(): R;
      new: <R = NSTouchBar>() => R;
      automaticallyNotifiesObserversOfVisible<R = boolean>(): R;
      automaticRTLMirroringSupported<R = boolean>(): R;
      keyPathsForValuesAffectingItems<R = unknown>(): R;
      keyPathsForValuesAffectingItemIdentifiers<R = unknown>(): R;
      resetUserDefinedTouchBar<R = void>(): R;
      userDefinedTouchBar<R = unknown>(): R;
      pathToUserDefinedTouchBar<R = unknown>(): R;
      automaticallyNotifiesObserversOfSuppressedByMoreFocusedTouchBars<R = boolean>(): R;
      automaticallyNotifiesObserversOfSuppressedByLessFocusedTouchBars<R = boolean>(): R;
      automaticallyNotifiesObserversOfSuppressesMoreFocusedBars<R = boolean>(): R;
      automaticallyNotifiesObserversOfSuppressesLessFocusedBars<R = boolean>(): R;
      setAllowsTouchesDuringTrackingLoops<R = void, P0 = boolean>(_setAllowsTouchesDuringTrackingLoops: P0): R;
      allowsTouchesDuringTrackingLoops<R = boolean>(): R;
      minimizeSystemModalTouchBar<R = void, P0 = unknown>(_minimizeSystemModalTouchBar: P0): R;
      dismissSystemModalTouchBar<R = void, P0 = unknown>(_dismissSystemModalTouchBar: P0): R;
      presentSystemModalTouchBar_placement_systemTrayItemIdentifier<R = void, P0 = unknown, P1 = number, P2 = unknown>(_presentSystemModalTouchBar: P0, _placement: P1, _systemTrayItemIdentifier: P2): R;
      presentSystemModalTouchBar_systemTrayItemIdentifier<R = void, P0 = unknown, P1 = unknown>(_presentSystemModalTouchBar: P0, _systemTrayItemIdentifier: P1): R;
      keyPathsForValuesAffectingDefaultItems<R = unknown>(): R;
      keyPathsForValuesAffectingCustomizationDefaultItemIdentifiers<R = unknown>(): R;
      keyPathsForValuesAffectingEscapeKeyReplacementItem<R = unknown>(): R;
      touchBarWithDelegate_customizationIdentifier_defaultItemIdentifiers_allowedItemIdentifiers<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_touchBarWithDelegate: P0, _customizationIdentifier: P1, _defaultItemIdentifiers: P2, _allowedItemIdentifiers: P3): R;
      touchBarWithDelegate_itemIdentifiers<R = unknown, P0 = unknown, P1 = unknown>(_touchBarWithDelegate: P0, _itemIdentifiers: P1): R;
      touchBarWithItems<R = unknown, P0 = unknown>(_touchBarWithItems: P0): R;
    }
  }
}

declare const NSTouchBar: cocoa.classes.NSTouchBar;
