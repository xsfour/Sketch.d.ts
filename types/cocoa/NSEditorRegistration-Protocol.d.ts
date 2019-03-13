/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditorRegistrationProtocol<T = any> extends NSObjectProtocol {
    objectDidEndEditing<R = void, P0 = NSEditor>(_objectDidEndEditing: P0): R;
    objectDidBeginEditing<R = void, P0 = NSEditor>(_objectDidBeginEditing: P0): R;
  }
  namespace classes {
    export interface NSEditorRegistrationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
