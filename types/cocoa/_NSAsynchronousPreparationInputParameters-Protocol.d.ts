/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAsynchronousPreparationInputParametersProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol {}
  namespace classes {
    export interface _NSAsynchronousPreparationInputParametersProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol {
      keyPathsInvalidatingPreparedResultImmediately<R = cocoa.NSSet>(): R;
      keyPathsInvalidatingPreparedResult<R = cocoa.NSSet>(): R;
    }
  }
}
