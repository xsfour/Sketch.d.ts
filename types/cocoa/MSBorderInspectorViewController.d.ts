/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderInspectorViewController<T = any> extends cocoa.MSColorStylePartInspectorViewController {
    updateUI<R = void>(): R;
    enableAction<R = void, P0 = unknown>(_enableAction: P0): R;
    canDrawInnerOrOuterBorders<R = boolean>(): R;
    positionPopUpToolTip<R = unknown>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    borderPositionLabel<R = cocoa.NSTextField>(): R;
    setBorderPositionLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    fillTypeLabel<R = cocoa.NSTextField>(): R;
    setFillTypeLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    thicknessAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setThicknessAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    thicknessField<R = cocoa.MSUpDownTextField>(): R;
    setThicknessField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    positionControl<R = cocoa.NSSegmentedControl>(): R;
    setPositionControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
  }
  namespace classes {
    export interface MSBorderInspectorViewController<T = any> extends cocoa.classes.MSColorStylePartInspectorViewController {
      alloc<R = MSBorderInspectorViewController>(): R;
      new: <R = MSBorderInspectorViewController>() => R;
    }
  }
}

declare const MSBorderInspectorViewController: cocoa.classes.MSBorderInspectorViewController;
