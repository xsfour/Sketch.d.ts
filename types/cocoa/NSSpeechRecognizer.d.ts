/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpeechRecognizer<T = any> extends cocoa.NSObject {
    _updateCommandDisplayWithRecognizer<R = void>(): R;
    stopListening<R = void>(): R;
    startListening<R = void>(): R;
    dealloc<R = void>(): R;
    _processRecognitionResult<R = void, P0 = cocoa.__RXLanguageObject>(__processRecognitionResult: P0): R;
    blocksOtherRecognizers<R = boolean>(): R;
    setBlocksOtherRecognizers<R = void, P0 = boolean>(_v: P0): R;
    listensInForegroundOnly<R = boolean>(): R;
    setListensInForegroundOnly<R = void, P0 = boolean>(_v: P0): R;
    displayedCommandsTitle<R = cocoa.NSString>(): R;
    setDisplayedCommandsTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    commands<R = cocoa.NSArray>(): R;
    setCommands<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    delegate<R = cocoa.NSSpeechRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSSpeechRecognizerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSSpeechRecognizer<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSpeechRecognizer>(): R;
      new: <R = NSSpeechRecognizer>() => R;
    }
  }
}

declare const NSSpeechRecognizer: cocoa.classes.NSSpeechRecognizer;
