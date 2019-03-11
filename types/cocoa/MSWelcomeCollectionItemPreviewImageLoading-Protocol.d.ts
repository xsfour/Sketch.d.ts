/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionItemPreviewImageLoadingProtocol<T = any> {
    fetchPreviewImageWithMaximumPixelSize_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_fetchPreviewImageWithMaximumPixelSize: P0, _completionHandler: P1): R;
    providesPreviewImage<R = boolean>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionItemPreviewImageLoadingProtocol<T = any> {  }
  }
}

declare const MSWelcomeCollectionItemPreviewImageLoadingProtocol: cocoa.classes.MSWelcomeCollectionItemPreviewImageLoadingProtocol;
