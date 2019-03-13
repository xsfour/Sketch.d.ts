/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverWindow<T = any> extends NSPanel {
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
    _popover<R = NSPopover>(): R;
    set_popover<R = void, P0 = NSPopover>(_v: P0): R;
    contentInset<R = NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    anchorSize<R = CGSize>(): R;
    setAnchorSize<R = void, P0 = CGSize>(_v: P0): R;
    anchorEdge<R = number>(): R;
    setAnchorEdge<R = void, P0 = number>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    _popoverFrame<R = NSPopoverFrame>(): R;
  }
  namespace classes {
    export interface _NSPopoverWindow<T = any> extends NSPanel {
      alloc<R = _NSPopoverWindow>(): R;
      new: <R = _NSPopoverWindow>() => R;
      contentRectForFrameRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      frameRectForContentRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      keyPathsForValuesAffectingAnchorPoint<R = unknown>(): R;
    }
  }
}
