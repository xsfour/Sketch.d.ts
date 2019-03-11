/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStackViewScrollViewDelegateProtocol<T = any> {
    stackScrollViewDidScroll<R = void, P0 = cocoa.NSScrollView>(_stackScrollViewDidScroll: P0): R;
  }
  namespace classes {
    export interface MSStackViewScrollViewDelegateProtocol<T = any> {  }
  }
}

declare const MSStackViewScrollViewDelegateProtocol: cocoa.classes.MSStackViewScrollViewDelegateProtocol;
