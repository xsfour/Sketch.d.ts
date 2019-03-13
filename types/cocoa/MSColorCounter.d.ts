/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorCounter<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    compareArtboardCounts<R = number, P0 = unknown>(_compareArtboardCounts: P0): R;
    compareTextCounts<R = number, P0 = unknown>(_compareTextCounts: P0): R;
    compareInnerShadowCounts<R = number, P0 = unknown>(_compareInnerShadowCounts: P0): R;
    compareShadowCounts<R = number, P0 = unknown>(_compareShadowCounts: P0): R;
    compareBorderCounts<R = number, P0 = unknown>(_compareBorderCounts: P0): R;
    compareFillCounts<R = number, P0 = unknown>(_compareFillCounts: P0): R;
    compareTotalCounts<R = number, P0 = unknown>(_compareTotalCounts: P0): R;
    compare_byColorUse<R = number, P0 = unknown, P1 = number>(_compare: P0, _byColorUse: P1): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    countSource<R = void, P0 = unknown>(_countSource: P0): R;
    artboardCount<R = number>(): R;
    setArtboardCount<R = void, P0 = number>(_v: P0): R;
    textCount<R = number>(): R;
    setTextCount<R = void, P0 = number>(_v: P0): R;
    innerShadowCount<R = number>(): R;
    setInnerShadowCount<R = void, P0 = number>(_v: P0): R;
    shadowCount<R = number>(): R;
    setShadowCount<R = void, P0 = number>(_v: P0): R;
    borderCount<R = number>(): R;
    setBorderCount<R = void, P0 = number>(_v: P0): R;
    fillCount<R = number>(): R;
    setFillCount<R = void, P0 = number>(_v: P0): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    immutableColor<R = MSImmutableColor>(): R;
    setImmutableColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    title<R = NSString>(): R;
    totalCount<R = number>(): R;
  }
  namespace classes {
    export interface MSColorCounter<T = any> extends NSObject {
      alloc<R = MSColorCounter>(): R;
      new: <R = MSColorCounter>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSColorCounter: cocoa.classes.MSColorCounter;
