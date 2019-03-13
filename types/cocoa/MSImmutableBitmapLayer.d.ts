/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableBitmapLayer<T = any> extends _MSImmutableBitmapLayer {
    NSImage<R = unknown>(): R;
    migratePropertiesFromV75OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV75OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV56OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV56OrEarlierWithUnarchiver: P0): R;
    imageElementWithAttributes_exporter<R = unknown, P0 = unknown, P1 = unknown>(_imageElementWithAttributes: P0, _exporter: P1): R;
    addImageElementAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addImageElementAttributes: P0, _exporter: P1): R;
    fillReplacesImage<R = boolean>(): R;
    setFillReplacesImage<R = void, P0 = boolean>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSImmutableBitmapLayer<T = any> extends _MSImmutableBitmapLayer {
      alloc<R = MSImmutableBitmapLayer>(): R;
      new: <R = MSImmutableBitmapLayer>() => R;
    }
  }
}

declare const MSImmutableBitmapLayer: cocoa.classes.MSImmutableBitmapLayer;
