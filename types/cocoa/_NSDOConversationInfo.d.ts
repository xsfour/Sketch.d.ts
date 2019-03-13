/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDOConversationInfo<T = any> extends NSObject {}
  namespace classes {
    export interface _NSDOConversationInfo<T = any> extends NSObject {
      alloc<R = _NSDOConversationInfo>(): R;
      new: <R = _NSDOConversationInfo>() => R;
    }
  }
}
