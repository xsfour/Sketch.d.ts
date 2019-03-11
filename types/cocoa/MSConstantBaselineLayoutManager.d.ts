/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstantBaselineLayoutManager<T = any> extends cocoa.NSLayoutManager {
    cxx_destruct<R = void>(): R;
    processEditingForTextStorage_edited_range_changeInLength_invalidatedRange<R = void, P0 = unknown, P1 = number, P2 = cocoa._NSRange, P3 = number, P4 = cocoa._NSRange>(_processEditingForTextStorage: P0, _edited: P1, _range: P2, _changeInLength: P3, _invalidatedRange: P4): R;
    setTypesetter<R = void, P0 = unknown>(_setTypesetter: P0): R;
    constantBaselineTypesetter<R = cocoa.MSConstantBaselineTypesetter>(): R;
    setConstantBaselineTypesetter<R = void, P0 = cocoa.MSConstantBaselineTypesetter>(_v: P0): R;
  }
  namespace classes {
    export interface MSConstantBaselineLayoutManager<T = any> extends cocoa.classes.NSLayoutManager {  }
  }
}

declare const MSConstantBaselineLayoutManager: cocoa.classes.MSConstantBaselineLayoutManager;
