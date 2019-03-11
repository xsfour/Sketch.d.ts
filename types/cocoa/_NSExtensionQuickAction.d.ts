/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickAction<T = any> extends cocoa._NSQuickAction {
    _bundleURL<R = unknown>(): R;
    canMoveToTrash<R = boolean>(): R;
    _preferencesClass<R = unknown>(): R;
    _validationClass<R = unknown>(): R;
    needsItemSource<R = boolean>(): R;
    type<R = number>(): R;
    hasColor<R = boolean>(): R;
    hasIcon<R = boolean>(): R;
    title<R = unknown>(): R;
    initForPresentation_identifier_extension_sharingService<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initForPresentation: P0, _identifier: P1, _extension: P2, _sharingService: P3): R;
    _extensionIdentifier<R = cocoa.NSString>(): R;
    _sharingService<R = cocoa.NSSharingService>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickAction<T = any> extends cocoa.classes._NSQuickAction {
      alloc<R = _NSExtensionQuickAction>(): R;
      new: <R = _NSExtensionQuickAction>() => R;
      quickActionForPresentation_extension<R = unknown, P0 = unknown, P1 = unknown>(_quickActionForPresentation: P0, _extension: P1): R;
    }
  }
}
