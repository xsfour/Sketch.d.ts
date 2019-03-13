/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickAction<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    moveToTrashAndReturnError<R = boolean, P0 = unknown>(_moveToTrashAndReturnError: P0): R;
    revealInFinderAndReturnError<R = boolean, P0 = unknown>(_revealInFinderAndReturnError: P0): R;
    loadColorOnQueue_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_loadColorOnQueue: P0, _completionHandler: P1): R;
    loadIconOnQueue_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_loadIconOnQueue: P0, _completionHandler: P1): R;
    performWithItemSource<R = void, P0 = unknown>(_performWithItemSource: P0): R;
    initForPresentation_identifier<R = unknown, P0 = unknown, P1 = unknown>(_initForPresentation: P0, _identifier: P1): R;
    _presentation<R = _NSQuickActionPresentation>(): R;
    identifier<R = NSString>(): R;
    canMoveToTrash<R = boolean>(): R;
    canRevealInFinder<R = boolean>(): R;
    _bundleURL<R = NSURL>(): R;
    _preferencesClass<R = unknown>(): R;
    _validationClass<R = unknown>(): R;
    hasColor<R = boolean>(): R;
    hasIcon<R = boolean>(): R;
    needsItemSource<R = boolean>(): R;
    title<R = NSString>(): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface _NSQuickAction<T = any> extends NSObject {
      alloc<R = _NSQuickAction>(): R;
      new: <R = _NSQuickAction>() => R;
    }
  }
}
