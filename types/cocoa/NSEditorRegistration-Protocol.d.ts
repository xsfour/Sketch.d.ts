/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditorRegistrationProtocol<T = any> extends cocoa.NSObjectProtocol {
    objectDidEndEditing<R = void, P0 = cocoa.NSEditor>(_objectDidEndEditing: P0): R;
    objectDidBeginEditing<R = void, P0 = cocoa.NSEditor>(_objectDidBeginEditing: P0): R;
  }
  namespace classes {
    export interface NSEditorRegistrationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSEditorRegistrationProtocol: cocoa.classes.NSEditorRegistrationProtocol;
