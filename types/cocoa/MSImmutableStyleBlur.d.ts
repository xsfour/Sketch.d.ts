/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBlur<T = any> extends cocoa._MSImmutableStyleBlur {
    cropRadius<R = number>(): R;
    migratePropertiesFromV106OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV106OrEarlierWithUnarchiver: P0): R;
    renderBitmapEffects_bounds_parentCoordinateTransform<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGAffineTransform>(_renderBitmapEffects: P0, _bounds: P1, _parentCoordinateTransform: P2): R;
    shouldUseCoreImageForEffect<R = boolean>(): R;
    addFilterWithExporter<R = void, P0 = unknown>(_addFilterWithExporter: P0): R;
  }
  namespace classes {
    export interface MSImmutableStyleBlur<T = any> extends cocoa.classes._MSImmutableStyleBlur {
      alloc<R = MSImmutableStyleBlur>(): R;
      new: <R = MSImmutableStyleBlur>() => R;
    }
  }
}

declare const MSImmutableStyleBlur: cocoa.classes.MSImmutableStyleBlur;
