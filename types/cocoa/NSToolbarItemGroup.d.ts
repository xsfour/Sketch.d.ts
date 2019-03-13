/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarItemGroup<T = any> extends NSToolbarItem {
    menuFormRepresentation<R = unknown>(): R;
    _selectableToolbarViews<R = unknown>(): R;
    invalidateLayout<R = void>(): R;
    rectForItem_inBounds_controlBounds<R = CGRect, P0 = unknown, P1 = CGRect, P2 = CGRect>(_rectForItem: P0, _inBounds: P1, _controlBounds: P2): R;
    rectForItem_inBounds<R = CGRect, P0 = unknown, P1 = CGRect>(_rectForItem: P0, _inBounds: P1): R;
    _labelOnlyModeRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__labelOnlyModeRectForItemAtIndex: P0, _inBounds: P1): R;
    _segmentedControlRectForItemAtIndex_inBounds_controlBounds<R = CGRect, P0 = number, P1 = CGRect, P2 = CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1, _controlBounds: P2): R;
    _segmentedControlRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1): R;
    _evenlySpacedRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__evenlySpacedRectForItemAtIndex: P0, _inBounds: P1): R;
    view<R = unknown>(): R;
    _defaultGroupViewIfUsed<R = unknown>(): R;
    subitems<R = NSArray>(): R;
    setSubitems<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSToolbarItemGroup<T = any> extends NSToolbarItem {
      alloc<R = NSToolbarItemGroup>(): R;
      new: <R = NSToolbarItemGroup>() => R;
    }
  }
}

declare const NSToolbarItemGroup: cocoa.classes.NSToolbarItemGroup;
