/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridCell<T = any> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    _isUnmergedOrHeadOfMergedRegion<R = boolean>(): R;
    set_headOfMergedCell<R = void, P0 = unknown>(_set_headOfMergedCell: P0): R;
    _headOfMergedCell<R = unknown>(): R;
    _findMergeTail<R = unknown>(): R;
    _findMergeBounds<R = CGRect>(): R;
    _isMergeHead<R = boolean>(): R;
    _isMerged<R = boolean>(): R;
    _effectiveAlignment<R = number>(): R;
    _effectiveYPlacement<R = number>(): R;
    _effectiveXPlacement<R = number>(): R;
    layoutRect<R = unknown>(): R;
    _optimalContentLayoutRect<R = unknown>(): R;
    _sanityCheck<R = void>(): R;
    _verifyConfigurability<R = void>(): R;
    _removedFromGridView<R = void>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRow_column<R = unknown, P0 = unknown, P1 = unknown>(_initWithRow: P0, _column: P1): R;
    column<R = NSGridColumn>(): R;
    row<R = NSGridRow>(): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    customPlacementConstraints<R = NSArray>(): R;
    setCustomPlacementConstraints<R = void, P0 = NSArray>(_v: P0): R;
    rowAlignment<R = number>(): R;
    setRowAlignment<R = void, P0 = number>(_v: P0): R;
    xPlacement<R = number>(): R;
    setXPlacement<R = void, P0 = number>(_v: P0): R;
    yPlacement<R = number>(): R;
    setYPlacement<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSGridCell<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSGridCell>(): R;
      new: <R = NSGridCell>() => R;
      emptyContentView<R = unknown>(): R;
    }
  }
}

declare const NSGridCell: cocoa.classes.NSGridCell;
