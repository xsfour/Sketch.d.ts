/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShape<T = any> extends cocoa._MSRectangleShape {
    canFlatten<R = boolean>(): R;
    resetPointsIfNecessary<R = void>(): R;
    resetPathsToRoundedRect<R = void>(): R;
    resetPathsToRect<R = void>(): R;
    inspectorSections<R = unknown>(): R;
    didChangeValues<R = void>(): R;
    willChangeValues<R = void>(): R;
    floatFromNumbers_atIndex<R = number, P0 = unknown, P1 = number>(_floatFromNumbers: P0, _atIndex: P1): R;
    setCornerRadiusFromSimpleString<R = void, P0 = unknown>(_setCornerRadiusFromSimpleString: P0): R;
    setCornerRadiusFromComponents<R = void, P0 = unknown>(_setCornerRadiusFromComponents: P0): R;
    rectangleNumberFormatter<R = unknown>(): R;
    validateProposedCornerRadiusWithFloat<R = boolean, P0 = number>(_validateProposedCornerRadiusWithFloat: P0): R;
    validateProposedCornerRadiusSizeWithString<R = boolean, P0 = unknown>(_validateProposedCornerRadiusSizeWithString: P0): R;
    maximumAllowedRadius<R = number>(): R;
    smoothCornersAllowed<R = boolean>(): R;
    hasSmoothCorners<R = boolean>(): R;
    setHasSmoothCorners<R = void, P0 = boolean>(_v: P0): R;
    cornerRadiusString<R = cocoa.NSString>(): R;
    setCornerRadiusString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    cornerRadiusFloat<R = number>(): R;
    setCornerRadiusFloat<R = void, P0 = number>(_v: P0): R;
    normalizedExponentialCornerRadius<R = number>(): R;
    setNormalizedExponentialCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSRectangleShape<T = any> extends cocoa.classes._MSRectangleShape {
      alloc<R = MSRectangleShape>(): R;
      new: <R = MSRectangleShape>() => R;
      validateComponentString<R = boolean, P0 = unknown>(_validateComponentString: P0): R;
      componentStringWithValues<R = unknown, P0 = unknown>(_componentStringWithValues: P0): R;
      looksLikeComponentString<R = boolean, P0 = unknown>(_looksLikeComponentString: P0): R;
      useSmoothCorners<R = boolean>(): R;
      lastUsedCornerRadius<R = number>(): R;
    }
  }
}

declare const MSRectangleShape: cocoa.classes.MSRectangleShape;
