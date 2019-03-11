/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemContainerView<T = any> extends cocoa.NSView, cocoa._NSTouchBarItemLayoutWrapperProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _deferringLayoutNotifications<R = void, P0 = cocoa.CDUnknownBlockType>(__deferringLayoutNotifications: P0): R;
    _updateMeasuredSizes<R = void>(): R;
    _viewForItem<R = unknown>(): R;
    _noteTouchBarItemViewChanged<R = void>(): R;
    disabled<R = boolean>(): R;
    setDisabled<R = void, P0 = boolean>(_v: P0): R;
    isInCustomizationPalette<R = boolean>(): R;
    setIsInCustomizationPalette<R = void, P0 = boolean>(_v: P0): R;
    isSpace<R = boolean>(): R;
    preferredZOrder<R = number>(): R;
    itemPosition<R = number>(): R;
    groupItemContainingItem<R = cocoa.NSGroupTouchBarItem>(): R;
    setGroupItemContainingItem<R = void, P0 = cocoa.NSGroupTouchBarItem>(_v: P0): R;
    compressionItemContainingItem<R = cocoa.NSGroupTouchBarItem>(): R;
    setCompressionItemContainingItem<R = void, P0 = cocoa.NSGroupTouchBarItem>(_v: P0): R;
    priorityIndex<R = number>(): R;
    setPriorityIndex<R = void, P0 = number>(_v: P0): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    touchBarItem<R = cocoa.NSTouchBarItem>(): R;
    setTouchBarItem<R = void, P0 = cocoa.NSTouchBarItem>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    preferredTrailingPosition<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemContainerView<T = any> extends cocoa.classes.NSView, cocoa.classes._NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarItemContainerView>(): R;
      new: <R = NSTouchBarItemContainerView>() => R;
    }
  }
}

declare const NSTouchBarItemContainerView: cocoa.classes.NSTouchBarItemContainerView;
