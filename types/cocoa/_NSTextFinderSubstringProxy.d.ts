/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderSubstringProxy<T = any> extends cocoa.NSString {
    _textfinder_firstMatchForRegularExpression_inRange<R = cocoa._NSRange, P0 = unknown, P1 = cocoa._NSRange>(__textfinder_firstMatchForRegularExpression: P0, _inRange: P1): R;
    _nextSearchBoundaryAfterOrIncluding_index_forward<R = number, P0 = boolean, P1 = number, P2 = boolean>(__nextSearchBoundaryAfterOrIncluding: P0, _index: P1, _forward: P2): R;
    _getSubstring_effectiveRange_searchBoundary_atCharacterIndex<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = string, P3 = number>(__getSubstring: P0, _effectiveRange: P1, _searchBoundary: P2, _atCharacterIndex: P3): R;
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithTextFinderClient<R = unknown, P0 = unknown>(_initWithTextFinderClient: P0): R;
  }
  namespace classes {
    export interface _NSTextFinderSubstringProxy<T = any> extends cocoa.classes.NSString {
      alloc<R = _NSTextFinderSubstringProxy>(): R;
      new: <R = _NSTextFinderSubstringProxy>() => R;
    }
  }
}
