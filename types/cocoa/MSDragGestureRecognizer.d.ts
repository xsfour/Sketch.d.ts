/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragGestureRecognizer<T = any> extends MSGestureRecognizer {
    originInLayer<R = CGPoint, P0 = unknown>(_originInLayer: P0): R;
    translationAsPointInLayer<R = CGPoint, P0 = unknown>(_translationAsPointInLayer: P0): R;
    setTranslation_inLayer<R = void, P0 = CGVector, P1 = unknown>(_setTranslation: P0, _inLayer: P1): R;
    translationInLayer<R = CGVector, P0 = unknown>(_translationInLayer: P0): R;
    modifierFlags<R = number>(): R;
    translationLocked<R = boolean>(): R;
    setTranslationLocked<R = void, P0 = boolean>(_v: P0): R;
    beginsUponMouseDown<R = boolean>(): R;
    setBeginsUponMouseDown<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSDragGestureRecognizer<T = any> extends MSGestureRecognizer {
      alloc<R = MSDragGestureRecognizer>(): R;
      new: <R = MSDragGestureRecognizer>() => R;
    }
  }
}

declare const MSDragGestureRecognizer: cocoa.classes.MSDragGestureRecognizer;
