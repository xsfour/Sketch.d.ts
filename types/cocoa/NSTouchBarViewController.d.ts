/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarViewController<T = any> extends cocoa.NSViewController {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    forceUpdateTree<R = void>(): R;
    _updateTree<R = void>(): R;
    _noteTouchBarsChanged<R = void>(): R;
    _stopObservingTouchBar<R = void, P0 = unknown>(__stopObservingTouchBar: P0): R;
    _startObservingTouchBar<R = void, P0 = unknown>(__startObservingTouchBar: P0): R;
    _diffTouchBars_againstOldTouchBars_blockForAdding_blockForRemoving<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(__diffTouchBars: P0, _againstOldTouchBars: P1, _blockForAdding: P2, _blockForRemoving: P3): R;
    _expandBars<R = unknown, P0 = unknown>(__expandBars: P0): R;
    escapeKeyReplacementItem<R = cocoa.NSTouchBarItem>(): R;
    touchBarView<R = cocoa.NSTouchBarView>(): R;
    touchBars<R = cocoa.NSArray>(): R;
    setTouchBars<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSTouchBarViewController>(): R;
      new: <R = NSTouchBarViewController>() => R;
    }
  }
}

declare const NSTouchBarViewController: cocoa.classes.NSTouchBarViewController;
