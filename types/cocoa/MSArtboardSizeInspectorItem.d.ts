/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardSizeInspectorItem<T = any> extends cocoa.MSBaseSizeInspectorItem {
    refreshOrientationControl<R = void>(): R;
    selectOrientation<R = void, P0 = unknown>(_selectOrientation: P0): R;
    orientation<R = number>(): R;
    orientationSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setOrientationSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardSizeInspectorItem<T = any> extends cocoa.classes.MSBaseSizeInspectorItem {
      alloc<R = MSArtboardSizeInspectorItem>(): R;
      new: <R = MSArtboardSizeInspectorItem>() => R;
    }
  }
}

declare const MSArtboardSizeInspectorItem: cocoa.classes.MSArtboardSizeInspectorItem;
