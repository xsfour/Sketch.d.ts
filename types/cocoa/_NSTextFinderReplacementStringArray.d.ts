/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderReplacementStringArray<T = any> extends NSArray {
    dealloc<R = void>(): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    initWithTextFinder_replacementRanges_length<R = unknown, P0 = unknown, P1 = _NSRange, P2 = number>(_initWithTextFinder: P0, _replacementRanges: P1, _length: P2): R;
  }
  namespace classes {
    export interface _NSTextFinderReplacementStringArray<T = any> extends NSArray {  }
  }
}
