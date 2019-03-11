/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarControlStripGrabberLayoutAttributes<T = any> extends cocoa.NSCollectionViewLayoutAttributes {
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    expanded<R = boolean>(): R;
    setExpanded<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarControlStripGrabberLayoutAttributes<T = any> extends cocoa.classes.NSCollectionViewLayoutAttributes {  }
  }
}

declare const NSTouchBarControlStripGrabberLayoutAttributes: cocoa.classes.NSTouchBarControlStripGrabberLayoutAttributes;
