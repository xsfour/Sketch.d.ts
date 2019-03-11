/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientBarViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    gradientBarChanged<R = void, P0 = cocoa.MSGradientBarView>(_gradientBarChanged: P0): R;
    gradientBarViewPreviewColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.MSGradientBarView>(_gradientBarViewPreviewColorSpace: P0): R;
  }
  namespace classes {
    export interface MSGradientBarViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSGradientBarViewDelegateProtocol: cocoa.classes.MSGradientBarViewDelegateProtocol;
