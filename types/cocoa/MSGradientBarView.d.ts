/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientBarView<T = any> extends BCColorPickerBaseView {
    canDoAdvancedGradientStopModifications<R = boolean>(): R;
    centerStopBetween<R = void>(): R;
    setSelectedStopToPercentage<R = void, P0 = number>(_setSelectedStopToPercentage: P0): R;
    previousStop<R = unknown>(): R;
    nextStop<R = unknown>(): R;
    selectedStop<R = unknown>(): R;
    moveSelectedStopBy<R = void, P0 = number>(_moveSelectedStopBy: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveRightAndModifySelection<R = void, P0 = unknown>(_moveRightAndModifySelection: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveLeftAndModifySelection<R = void, P0 = unknown>(_moveLeftAndModifySelection: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    deleteBackward<R = void, P0 = unknown>(_deleteBackward: P0): R;
    deleteForward<R = void, P0 = unknown>(_deleteForward: P0): R;
    insertBacktab<R = void, P0 = unknown>(_insertBacktab: P0): R;
    insertTab<R = void, P0 = unknown>(_insertTab: P0): R;
    drawSelectedMarkerInRect_color<R = void, P0 = CGRect, P1 = unknown>(_drawSelectedMarkerInRect: P0, _color: P1): R;
    stopPositionForEvent<R = number, P0 = unknown>(_stopPositionForEvent: P0): R;
    stopIndexForEvent<R = number, P0 = unknown>(_stopIndexForEvent: P0): R;
    normaliseRect<R = CGRect, P0 = CGRect>(_normaliseRect: P0): R;
    rectForMarkerAtIndex<R = CGRect, P0 = number>(_rectForMarkerAtIndex: P0): R;
    awakeFromNib<R = void>(): R;
    canBeKeyView<R = boolean>(): R;
    selectedStopIndex<R = number>(): R;
    setSelectedStopIndex<R = void, P0 = number>(_v: P0): R;
    gradient<R = MSGradient>(): R;
    setGradient<R = void, P0 = MSGradient>(_v: P0): R;
    delegate<R = MSGradientBarViewDelegate>(): R;
    setDelegate<R = void, P0 = MSGradientBarViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSGradientBarView<T = any> extends BCColorPickerBaseView {
      alloc<R = MSGradientBarView>(): R;
      new: <R = MSGradientBarView>() => R;
    }
  }
}

declare const MSGradientBarView: cocoa.classes.MSGradientBarView;
