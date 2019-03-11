/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarItemGroup<T = any> extends cocoa.NSToolbarItem {
    menuFormRepresentation<R = unknown>(): R;
    _selectableToolbarViews<R = unknown>(): R;
    invalidateLayout<R = void>(): R;
    rectForItem_inBounds_controlBounds<R = cocoa.CGRect, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGRect>(_rectForItem: P0, _inBounds: P1, _controlBounds: P2): R;
    rectForItem_inBounds<R = cocoa.CGRect, P0 = unknown, P1 = cocoa.CGRect>(_rectForItem: P0, _inBounds: P1): R;
    _labelOnlyModeRectForItemAtIndex_inBounds<R = cocoa.CGRect, P0 = number, P1 = cocoa.CGRect>(__labelOnlyModeRectForItemAtIndex: P0, _inBounds: P1): R;
    _segmentedControlRectForItemAtIndex_inBounds_controlBounds<R = cocoa.CGRect, P0 = number, P1 = cocoa.CGRect, P2 = cocoa.CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1, _controlBounds: P2): R;
    _segmentedControlRectForItemAtIndex_inBounds<R = cocoa.CGRect, P0 = number, P1 = cocoa.CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1): R;
    _evenlySpacedRectForItemAtIndex_inBounds<R = cocoa.CGRect, P0 = number, P1 = cocoa.CGRect>(__evenlySpacedRectForItemAtIndex: P0, _inBounds: P1): R;
    view<R = unknown>(): R;
    _defaultGroupViewIfUsed<R = unknown>(): R;
    subitems<R = cocoa.NSArray>(): R;
    setSubitems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSToolbarItemGroup<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarItemGroup>(): R;
      new: <R = NSToolbarItemGroup>() => R;
    }
  }
}

declare const NSToolbarItemGroup: cocoa.classes.NSToolbarItemGroup;
