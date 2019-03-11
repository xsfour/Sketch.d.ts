/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickAction<T = any> extends cocoa._NSQuickAction {
    canMoveToTrash<R = boolean>(): R;
    _bundleURL<R = unknown>(): R;
    _preferencesClass<R = unknown>(): R;
    _validationClass<R = unknown>(): R;
    needsItemSource<R = boolean>(): R;
    type<R = number>(): R;
    hasColor<R = boolean>(): R;
    hasIcon<R = boolean>(): R;
    title<R = unknown>(): R;
    initForPresentation_legacyServiceAction<R = unknown, P0 = unknown, P1 = unknown>(_initForPresentation: P0, _legacyServiceAction: P1): R;
    _legacyServiceAction<R = cocoa._NSServiceAction>(): R;
  }
  namespace classes {
    export interface _NSLegacyServiceQuickAction<T = any> extends cocoa.classes._NSQuickAction {
      alloc<R = _NSLegacyServiceQuickAction>(): R;
      new: <R = _NSLegacyServiceQuickAction>() => R;
      quickActionForPresentation_serviceAction<R = unknown, P0 = unknown, P1 = unknown>(_quickActionForPresentation: P0, _serviceAction: P1): R;
    }
  }
}
