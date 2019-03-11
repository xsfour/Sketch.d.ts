/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerTextView<T = any> extends cocoa.NSTextView {
    cxx_destruct<R = void>(): R;
    rectForSelectedRange<R = cocoa.CGRect>(): R;
    selectSimilar<R = void, P0 = unknown>(_selectSimilar: P0): R;
    hideSelectionTimerFired<R = void, P0 = unknown>(_hideSelectionTimerFired: P0): R;
    makeHideSelectionTimer<R = unknown>(): R;
    writablePasteboardTypes<R = unknown>(): R;
    pasteWithOptions<R = void, P0 = number>(_pasteWithOptions: P0): R;
    pasteWithStyle<R = void, P0 = unknown>(_pasteWithStyle: P0): R;
    readablePasteboardTypes<R = unknown>(): R;
    hideSelectionTemporarily<R = void>(): R;
    hitTestFromEvent<R = boolean, P0 = unknown>(_hitTestFromEvent: P0): R;
    shouldIgnoreAlreadyApplicableColor<R = boolean, P0 = unknown>(_shouldIgnoreAlreadyApplicableColor: P0): R;
    changeColorWithColor<R = void, P0 = unknown>(_changeColorWithColor: P0): R;
    canvasColorSpace<R = unknown>(): R;
    documentColorSpace<R = unknown>(): R;
    selectedTextAttributesBackup<R = cocoa.NSDictionary>(): R;
    setSelectedTextAttributesBackup<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    hideSelectionTimer<R = cocoa.NSTimer>(): R;
    setHideSelectionTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    textLayerTextViewDelegate<R = cocoa.MSTextLayerTextViewDelegate>(): R;
    setTextLayerTextViewDelegate<R = void, P0 = cocoa.MSTextLayerTextViewDelegate>(_v: P0): R;
    hangingGlyphView<R = cocoa.MSHangingGlyphView>(): R;
    setHangingGlyphView<R = void, P0 = cocoa.MSHangingGlyphView>(_v: P0): R;
  }
  namespace classes {
    export interface MSTextLayerTextView<T = any> extends cocoa.classes.NSTextView {
      alloc<R = MSTextLayerTextView>(): R;
      new: <R = MSTextLayerTextView>() => R;
    }
  }
}

declare const MSTextLayerTextView: cocoa.classes.MSTextLayerTextView;
