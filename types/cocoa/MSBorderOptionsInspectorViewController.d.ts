/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderOptionsInspectorViewController<T = any> extends cocoa.MSStylePartInspectorViewController {
    dashFields<R = unknown>(): R;
    fillDashPlaceholderFields<R = void>(): R;
    fillDashFields<R = void>(): R;
    dashPatternAction<R = void, P0 = unknown>(_dashPatternAction: P0): R;
    joinAction<R = void, P0 = unknown>(_joinAction: P0): R;
    capAction<R = void, P0 = unknown>(_capAction: P0): R;
    evaluateCapJoinButtons<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    prepareDecorationButtons<R = void>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    endDecorationAction<R = void, P0 = unknown>(_endDecorationAction: P0): R;
    startDecorationAction<R = void, P0 = unknown>(_startDecorationAction: P0): R;
    reloadData<R = void>(): R;
    endMarkerTypes<R = cocoa.NSSet>(): R;
    setEndMarkerTypes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    startMarkerTypes<R = cocoa.NSSet>(): R;
    setStartMarkerTypes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    filteredLayers<R = cocoa.NSArray>(): R;
    setFilteredLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    joinSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setJoinSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    capSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setCapSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    dashField2<R = cocoa.NSTextField>(): R;
    setDashField2<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    dashField1<R = cocoa.NSTextField>(): R;
    setDashField1<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    endDecorationButton<R = cocoa.NSPopUpButton>(): R;
    setEndDecorationButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    startDecorationButton<R = cocoa.NSPopUpButton>(): R;
    setStartDecorationButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSBorderOptionsInspectorViewController<T = any> extends cocoa.classes.MSStylePartInspectorViewController {
      alloc<R = MSBorderOptionsInspectorViewController>(): R;
      new: <R = MSBorderOptionsInspectorViewController>() => R;
    }
  }
}

declare const MSBorderOptionsInspectorViewController: cocoa.classes.MSBorderOptionsInspectorViewController;
