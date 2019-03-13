/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardSizeInspectorItem<T = any> extends MSBaseSizeInspectorItem {
    refreshOrientationControl<R = void>(): R;
    selectOrientation<R = void, P0 = unknown>(_selectOrientation: P0): R;
    orientation<R = number>(): R;
    orientationSegmentedControl<R = NSSegmentedControl>(): R;
    setOrientationSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardSizeInspectorItem<T = any> extends MSBaseSizeInspectorItem {
      alloc<R = MSArtboardSizeInspectorItem>(): R;
      new: <R = MSArtboardSizeInspectorItem>() => R;
    }
  }
}

declare const MSArtboardSizeInspectorItem: cocoa.classes.MSArtboardSizeInspectorItem;
