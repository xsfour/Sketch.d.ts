/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStackViewScrollViewDelegateProtocol<T = any> {
    stackScrollViewDidScroll<R = void, P0 = NSScrollView>(_stackScrollViewDidScroll: P0): R;
  }
  namespace classes {
    export interface MSStackViewScrollViewDelegateProtocol<T = any> {  }
  }
}
