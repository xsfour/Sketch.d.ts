/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenSpaceMenuRevealAnimation<T = any> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    siblingSpace<R = _NSFullScreenSpace>(): R;
    setSiblingSpace<R = void, P0 = _NSFullScreenSpace>(_v: P0): R;
    serverStartTime<R = number>(): R;
    setServerStartTime<R = void, P0 = number>(_v: P0): R;
    endingReveal<R = number>(): R;
    setEndingReveal<R = void, P0 = number>(_v: P0): R;
    startingReveal<R = number>(): R;
    setStartingReveal<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenSpaceMenuRevealAnimation<T = any> extends NSAnimation {
      alloc<R = _NSFullScreenSpaceMenuRevealAnimation>(): R;
      new: <R = _NSFullScreenSpaceMenuRevealAnimation>() => R;
    }
  }
}
