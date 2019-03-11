/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceWithSymbolMenuBuilder<T = any> extends cocoa.MSMenuBuilder {
    updateMenuItem_forDocument<R = void, P0 = unknown, P1 = unknown>(_updateMenuItem: P0, _forDocument: P1): R;
  }
  namespace classes {
    export interface MSReplaceWithSymbolMenuBuilder<T = any> extends cocoa.classes.MSMenuBuilder {
      alloc<R = MSReplaceWithSymbolMenuBuilder>(): R;
      new: <R = MSReplaceWithSymbolMenuBuilder>() => R;
    }
  }
}

declare const MSReplaceWithSymbolMenuBuilder: cocoa.classes.MSReplaceWithSymbolMenuBuilder;
