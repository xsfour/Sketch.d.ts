/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientBarViewDelegateProtocol<T = any> extends NSObjectProtocol {
    gradientBarChanged<R = void, P0 = MSGradientBarView>(_gradientBarChanged: P0): R;
    gradientBarViewPreviewColorSpace<R = NSColorSpace, P0 = MSGradientBarView>(_gradientBarViewPreviewColorSpace: P0): R;
  }
  namespace classes {
    export interface MSGradientBarViewDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
