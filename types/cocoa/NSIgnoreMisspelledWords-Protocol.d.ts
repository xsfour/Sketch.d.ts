/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIgnoreMisspelledWordsProtocol<T = any> {
    ignoreSpelling<R = void, P0 = unknown>(_ignoreSpelling: P0): R;
  }
  namespace classes {
    export interface NSIgnoreMisspelledWordsProtocol<T = any> {  }
  }
}

declare const NSIgnoreMisspelledWordsProtocol: cocoa.classes.NSIgnoreMisspelledWordsProtocol;
