/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureCodingProtocol<T = any> {}
  namespace classes {
    export interface NSSecureCodingProtocol<T = any> {
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}
