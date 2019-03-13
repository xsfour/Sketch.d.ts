/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchFieldDelegateProtocol<T = any> {
    searchFieldDidEndSearching<R = void, P0 = NSSearchField>(_searchFieldDidEndSearching: P0): R;
    searchFieldDidStartSearching<R = void, P0 = NSSearchField>(_searchFieldDidStartSearching: P0): R;
  }
  namespace classes {
    export interface NSSearchFieldDelegateProtocol<T = any> {  }
  }
}
