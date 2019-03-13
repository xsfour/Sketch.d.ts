/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginBundleIconInfo<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
    initWithPath_imageData<R = unknown, P0 = unknown, P1 = unknown>(_initWithPath: P0, _imageData: P1): R;
    imageWrapper<R = MSImageData>(): R;
    setImageWrapper<R = void, P0 = MSImageData>(_v: P0): R;
    path<R = NSString>(): R;
    setPath<R = void, P0 = NSString>(_v: P0): R;
    fileWrapper<R = NSFileWrapper>(): R;
    image<R = NSImage>(): R;
  }
  namespace classes {
    export interface MSPluginBundleIconInfo<T = any> extends NSObject {
      alloc<R = MSPluginBundleIconInfo>(): R;
      new: <R = MSPluginBundleIconInfo>() => R;
    }
  }
}

declare const MSPluginBundleIconInfo: cocoa.classes.MSPluginBundleIconInfo;
