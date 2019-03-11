/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDOConversationInfo<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSDOConversationInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSDOConversationInfo>(): R;
      new: <R = _NSDOConversationInfo>() => R;
    }
  }
}
