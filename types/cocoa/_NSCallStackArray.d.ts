/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCallStackArray<T = any> extends cocoa.NSArray {
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    descriptionWithLocale_indent<R = unknown, P0 = unknown, P1 = number>(_descriptionWithLocale: P0, _indent: P1): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCallStackArray<T = any> extends cocoa.classes.NSArray {
      arrayWithFrames_count_symbols<R = unknown, P0 = void, P1 = number, P2 = boolean>(_arrayWithFrames: P0, _count: P1, _symbols: P2): R;
    }
  }
}
