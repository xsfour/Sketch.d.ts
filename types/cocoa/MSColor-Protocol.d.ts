/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorProtocol<T = any> extends NSObjectProtocol {
    red<R = number>(): R;
    green<R = number>(): R;
    blue<R = number>(): R;
    alpha<R = number>(): R;
  }
  namespace classes {
    export interface MSColorProtocol<T = any> extends NSObjectProtocol {  }
  }
}
