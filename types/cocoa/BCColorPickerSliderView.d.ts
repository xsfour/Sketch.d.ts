/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPickerSliderView<T = any> extends cocoa.BCColorPickerBaseView {
    drawSelectionMarkerAtPosition<R = void, P0 = number>(_drawSelectionMarkerAtPosition: P0): R;
    groupingUndo<R = boolean>(): R;
    setGroupingUndo<R = void, P0 = boolean>(_v: P0): R;
    handlingHistoryCoalescing<R = boolean>(): R;
    setHandlingHistoryCoalescing<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface BCColorPickerSliderView<T = any> extends cocoa.classes.BCColorPickerBaseView {
      alloc<R = BCColorPickerSliderView>(): R;
      new: <R = BCColorPickerSliderView>() => R;
    }
  }
}

declare const BCColorPickerSliderView: cocoa.classes.BCColorPickerSliderView;
