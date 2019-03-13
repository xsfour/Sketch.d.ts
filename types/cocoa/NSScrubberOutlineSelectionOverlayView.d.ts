/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberOutlineSelectionOverlayView<T = any> extends NSScrubberSelectionView {
    itemCornerRadius<R = number>(): R;
    _coreUIDrawOptions<R = __CFDictionary>(): R;
    _shouldDraw<R = boolean>(): R;
    _previousDrawStateSelected_highlighted<R = void, P0 = string, P1 = string>(__previousDrawStateSelected: P0, _highlighted: P1): R;
    _setPreviousDrawStateSelected_highlighted<R = void, P0 = boolean, P1 = boolean>(__setPreviousDrawStateSelected: P0, _highlighted: P1): R;
    wantsUpdateLayer<R = boolean>(): R;
    _outlineCommonInit<R = void>(): R;
    showsHighlight<R = boolean>(): R;
    setShowsHighlight<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberOutlineSelectionOverlayView<T = any> extends NSScrubberSelectionView {
      alloc<R = NSScrubberOutlineSelectionOverlayView>(): R;
      new: <R = NSScrubberOutlineSelectionOverlayView>() => R;
    }
  }
}

declare const NSScrubberOutlineSelectionOverlayView: cocoa.classes.NSScrubberOutlineSelectionOverlayView;
