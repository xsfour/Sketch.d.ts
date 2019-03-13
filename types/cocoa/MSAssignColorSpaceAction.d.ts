/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssignColorSpaceAction<T = any> extends MSChangeColorSpaceAction {
    assignDocumentColorSpace<R = void, P0 = unknown>(_assignDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface MSAssignColorSpaceAction<T = any> extends MSChangeColorSpaceAction {
      alloc<R = MSAssignColorSpaceAction>(): R;
      new: <R = MSAssignColorSpaceAction>() => R;
    }
  }
}

declare const MSAssignColorSpaceAction: cocoa.classes.MSAssignColorSpaceAction;
