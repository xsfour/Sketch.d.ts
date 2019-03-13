/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextRulerOptions<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    displayStringForLineHeightMultiple_min_max_lineSpacing_paragraphSpacingBefore_after<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number>(_displayStringForLineHeightMultiple: P0, _min: P1, _max: P2, _lineSpacing: P3, _paragraphSpacingBefore: P4, _after: P5): R;
    sheetDidEnd_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_sheetDidEnd: P0, _returnCode: P1, _contextInfo: P2): R;
    removeLink<R = void, P0 = unknown>(_removeLink: P0): R;
    cancelSheet<R = void, P0 = unknown>(_cancelSheet: P0): R;
    confirmSheet<R = void, P0 = unknown>(_confirmSheet: P0): R;
    modifyOptionsViaPanel<R = void, P0 = unknown>(_modifyOptionsViaPanel: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    setLinkInWindow_string_delegate<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setLinkInWindow: P0, _string: P1, _delegate: P2): R;
    setMarkerFormatInWindow_textList_delegate<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setMarkerFormatInWindow: P0, _textList: P1, _delegate: P2): R;
    setStartFieldAndStepper<R = void>(): R;
    setSpacing_inWindow_delegate<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setSpacing: P0, _inWindow: P1, _delegate: P2): R;
    updateLineSpacingUI<R = void>(): R;
    removeFavoriteInWindow<R = void, P0 = unknown>(_removeFavoriteInWindow: P0): R;
    addFavorite_inWindow<R = void, P0 = unknown, P1 = unknown>(_addFavorite: P0, _inWindow: P1): R;
    addFavorite<R = void>(): R;
    updateFavoritesUI<R = void>(): R;
    selectedAttributes<R = unknown>(): R;
    favoriteAttributesForName<R = unknown, P0 = unknown>(_favoriteAttributesForName: P0): R;
    favoriteAttributesNames<R = unknown>(): R;
    dealloc<R = void>(): R;
    loadUI<R = void>(): R;
    updateFavoritesFromDefaults<R = void>(): R;
    saveFavoritesToDefaults<R = void>(): R;
  }
  namespace classes {
    export interface NSTextRulerOptions<T = any> extends NSObject {
      alloc<R = NSTextRulerOptions>(): R;
      new: <R = NSTextRulerOptions>() => R;
      sharedTextRulerOptions<R = unknown>(): R;
    }
  }
}

declare const NSTextRulerOptions: cocoa.classes.NSTextRulerOptions;
