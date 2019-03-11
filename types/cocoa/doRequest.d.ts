/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface doRequest<T = any> {}
  namespace classes {
    export interface doRequest<T = any> {  }
  }
}

declare const doRequest: cocoa.classes.doRequest;
