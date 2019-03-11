/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverWindow<T = any> extends cocoa.NSPanel {
    styleMask<R = number>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    setParentWindow<R = void, P0 = unknown>(_setParentWindow: P0): R;
    setContentView<R = void, P0 = unknown>(_setContentView: P0): R;
    _initWithPopover<R = unknown, P0 = unknown>(__initWithPopover: P0): R;
    _hasActiveDragTypes<R = boolean>(): R;
    accessibilityIsHelpAttributeSettable<R = boolean>(): R;
    accessibilityHelpAttribute<R = unknown>(): R;
    accessibilityIsTopLevelUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTopLevelUIElementAttribute<R = unknown>(): R;
    animates<R = boolean>(): R;
    setAnimates<R = void, P0 = boolean>(_v: P0): R;
    popoverAccessibilityParent<R = unknown>(): R;
    setPopoverAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    _popover<R = cocoa.NSPopover>(): R;
    set_popover<R = void, P0 = cocoa.NSPopover>(_v: P0): R;
    contentInset<R = cocoa.NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    anchorSize<R = cocoa.CGSize>(): R;
    setAnchorSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    anchorEdge<R = number>(): R;
    setAnchorEdge<R = void, P0 = number>(_v: P0): R;
    anchorPoint<R = cocoa.CGPoint>(): R;
    setAnchorPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    _popoverFrame<R = cocoa.NSPopoverFrame>(): R;
  }
  namespace classes {
    export interface _NSPopoverWindow<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSPopoverWindow>(): R;
      new: <R = _NSPopoverWindow>() => R;
      contentRectForFrameRect_appearance_anchorSize_contentInset_hasTitlebar<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets, P4 = boolean>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      frameRectForContentRect_appearance_anchorSize_contentInset_hasTitlebar<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown, P2 = cocoa.CGSize, P3 = cocoa.NSEdgeInsets, P4 = boolean>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      keyPathsForValuesAffectingAnchorPoint<R = unknown>(): R;
    }
  }
}
