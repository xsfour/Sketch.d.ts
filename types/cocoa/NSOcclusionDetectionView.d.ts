/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOcclusionDetectionView<T = any> extends cocoa.NSView {
    viewGeometryDidChangeNotification<R = void, P0 = unknown>(_viewGeometryDidChangeNotification: P0): R;
    wantsLayer<R = boolean>(): R;
    _registerForNotifications<R = void, P0 = boolean>(__registerForNotifications: P0): R;
    _cleanUpContext<R = void>(): R;
    validateNoOcclusionSinceToken<R = boolean, P0 = unknown>(_validateNoOcclusionSinceToken: P0): R;
  }
  namespace classes {
    export interface NSOcclusionDetectionView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSOcclusionDetectionView>(): R;
      new: <R = NSOcclusionDetectionView>() => R;
    }
  }
}

declare const NSOcclusionDetectionView: cocoa.classes.NSOcclusionDetectionView;
