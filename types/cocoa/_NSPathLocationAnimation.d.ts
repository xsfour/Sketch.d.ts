/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPathLocationAnimation<T = any> extends cocoa.NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    originalWidthsCount<R = number>(): R;
    originalWidthForIndex<R = number, P0 = number>(_originalWidthForIndex: P0): R;
    addOriginalWidth<R = void, P0 = number>(_addOriginalWidth: P0): R;
  }
  namespace classes {
    export interface _NSPathLocationAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = _NSPathLocationAnimation>(): R;
      new: <R = _NSPathLocationAnimation>() => R;
    }
  }
}
