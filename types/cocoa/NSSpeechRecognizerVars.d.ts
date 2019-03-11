/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechRecognizerVars<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    locale<R = cocoa.NSLocale>(): R;
    setLocale<R = void, P0 = cocoa.NSLocale>(_v: P0): R;
    recognizer<R = cocoa.__RXRecognizer>(): R;
    setRecognizer<R = void, P0 = cocoa.__RXRecognizer>(_v: P0): R;
    recognitionSystem<R = cocoa.__RXRecognitionSystem>(): R;
    setRecognitionSystem<R = void, P0 = cocoa.__RXRecognitionSystem>(_v: P0): R;
    displayedStringsTitle<R = cocoa.NSString>(): R;
    setDisplayedStringsTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    displayedStringsArray<R = cocoa.NSArray>(): R;
    setDisplayedStringsArray<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    simpleCommandsArray<R = cocoa.NSArray>(): R;
    setSimpleCommandsArray<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    delegate<R = cocoa.NSSpeechRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSSpeechRecognizerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSSpeechRecognizerVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSpeechRecognizerVars>(): R;
      new: <R = NSSpeechRecognizerVars>() => R;
    }
  }
}

declare const NSSpeechRecognizerVars: cocoa.classes.NSSpeechRecognizerVars;
