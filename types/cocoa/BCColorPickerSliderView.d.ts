/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPickerSliderView<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
    drawSelectionMarkerAtPosition<R = void, P0 = number>(_drawSelectionMarkerAtPosition: P0): R;
    groupingUndo<R = boolean>(): R;
    setGroupingUndo<R = void, P0 = boolean>(_v: P0): R;
    handlingHistoryCoalescing<R = boolean>(): R;
    setHandlingHistoryCoalescing<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace BCColorPickerSliderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
      alloc<R = BCColorPickerSliderView>(): R;
      new: <R = BCColorPickerSliderView>() => R;
    }
  }
}

declare const BCColorPickerSliderView: cocoa.BCColorPickerSliderView.CLASS;
