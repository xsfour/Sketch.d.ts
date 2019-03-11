/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionPair<T = any> extends cocoa.NSObject {
    _forEachContainer<R = void, P0 = cocoa.CDUnknownBlockType>(__forEachContainer: P0): R;
    setContainerAlphaValue<R = void, P0 = number>(_setContainerAlphaValue: P0): R;
    applyLayoutAttributes_relativeToContentView<R = void, P0 = unknown, P1 = unknown>(_applyLayoutAttributes: P0, _relativeToContentView: P1): R;
    currentSuperview<R = unknown>(): R;
    isSubviewOfSuperview<R = boolean, P0 = unknown>(_isSubviewOfSuperview: P0): R;
    removeFromViewHierarchy<R = void>(): R;
    addToSuperview_initiallyVisible<R = void, P0 = unknown, P1 = boolean>(_addToSuperview: P0, _initiallyVisible: P1): R;
    setSelected_highlighted<R = void, P0 = boolean, P1 = boolean>(_setSelected: P0, _highlighted: P1): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBackgroundView_overlayView<R = unknown, P0 = unknown, P1 = unknown>(_initWithBackgroundView: P0, _overlayView: P1): R;
    overlayView<R = cocoa.NSScrubberContainerView>(): R;
    setOverlayView<R = void, P0 = cocoa.NSScrubberContainerView>(_v: P0): R;
    backgroundView<R = cocoa.NSScrubberContainerView>(): R;
    setBackgroundView<R = void, P0 = cocoa.NSScrubberContainerView>(_v: P0): R;
    containsCustomViews<R = boolean>(): R;
    setContainsCustomViews<R = void, P0 = boolean>(_v: P0): R;
    itemIndex<R = number>(): R;
    setItemIndex<R = void, P0 = number>(_v: P0): R;
    preferredItemCornerRadius<R = number>(): R;
  }
  namespace classes {
    export interface NSScrubberSelectionPair<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSScrubberSelectionPair>(): R;
      new: <R = NSScrubberSelectionPair>() => R;
    }
  }
}

declare const NSScrubberSelectionPair: cocoa.classes.NSScrubberSelectionPair;
