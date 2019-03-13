/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleInterfaceAction<T = any> extends MSDocumentAction {
    isToolbarVisible<R = boolean>(): R;
    isInterfaceHidden<R = boolean>(): R;
    documentWillClose<R = void>(): R;
    showHiddenInterface<R = void>(): R;
    hideInterfaceElementForActionNamed<R = boolean, P0 = unknown>(_hideInterfaceElementForActionNamed: P0): R;
    hideInterface<R = void>(): R;
    toggleHideInterface<R = void, P0 = unknown>(_toggleHideInterface: P0): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    didHideToolbar<R = boolean>(): R;
    setDidHideToolbar<R = void, P0 = boolean>(_v: P0): R;
    didHideRulers<R = boolean>(): R;
    setDidHideRulers<R = void, P0 = boolean>(_v: P0): R;
    didHideInspector<R = boolean>(): R;
    setDidHideInspector<R = void, P0 = boolean>(_v: P0): R;
    didHideLayerList<R = boolean>(): R;
    setDidHideLayerList<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSToggleInterfaceAction<T = any> extends MSDocumentAction {
      alloc<R = MSToggleInterfaceAction>(): R;
      new: <R = MSToggleInterfaceAction>() => R;
    }
  }
}

declare const MSToggleInterfaceAction: cocoa.classes.MSToggleInterfaceAction;
