/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceWithSymbolMenuBuilder<T = any> extends MSMenuBuilder {
    updateMenuItem_forDocument<R = void, P0 = unknown, P1 = unknown>(_updateMenuItem: P0, _forDocument: P1): R;
  }
  namespace classes {
    export interface MSReplaceWithSymbolMenuBuilder<T = any> extends MSMenuBuilder {
      alloc<R = MSReplaceWithSymbolMenuBuilder>(): R;
      new: <R = MSReplaceWithSymbolMenuBuilder>() => R;
    }
  }
}

declare const MSReplaceWithSymbolMenuBuilder: cocoa.classes.MSReplaceWithSymbolMenuBuilder;
