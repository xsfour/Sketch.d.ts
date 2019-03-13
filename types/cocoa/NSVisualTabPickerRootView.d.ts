/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerRootView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    setUpSubviewsShowingNewTabButton_highlightingTiles_showingCloseButtons<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(_setUpSubviewsShowingNewTabButton: P0, _highlightingTiles: P1, _showingCloseButtons: P2): R;
    _startTopBarAndCloudViewAnimation<R = void, P0 = number>(__startTopBarAndCloudViewAnimation: P0): R;
    _startPerspectiveAnimation<R = void, P0 = number>(__startPerspectiveAnimation: P0): R;
    _getTopBarAnimationDuration_timeOffset_gridAnimation<R = void, P0 = number, P1 = number, P2 = number>(__getTopBarAnimationDuration: P0, _timeOffset: P1, _gridAnimation: P2): R;
    showSearchField<R = void>(): R;
    makeSearchFieldFirstResponder<R = void>(): R;
    startGridAnimation_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_startGridAnimation: P0, _completionHandler: P1): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    initWithFrame_visualTabPickerViewController<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _visualTabPickerViewController: P1): R;
    visualTabPickerViewController<R = NSVisualTabPickerRootViewController>(): R;
    setVisualTabPickerViewController<R = void, P0 = NSVisualTabPickerRootViewController>(_v: P0): R;
    searchField<R = NSVisualTabPickerSearchField>(): R;
    gridView<R = NSVisualTabPickerGridView>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerRootView<T = any> extends NSView {
      alloc<R = NSVisualTabPickerRootView>(): R;
      new: <R = NSVisualTabPickerRootView>() => R;
    }
  }
}

declare const NSVisualTabPickerRootView: cocoa.classes.NSVisualTabPickerRootView;
