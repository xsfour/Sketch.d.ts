/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskRunnerProtocol<T = any> {
    executeScript_interpreter_arguments_standardInput_standardOutput_standardError_showingProgress<R = void, P0 = cocoa.NSFileHandle, P1 = cocoa.NSString, P2 = cocoa.NSArray, P3 = cocoa.NSFileHandle, P4 = cocoa.NSFileHandle, P5 = cocoa.NSFileHandle, P6 = boolean>(_executeScript: P0, _interpreter: P1, _arguments: P2, _standardInput: P3, _standardOutput: P4, _standardError: P5, _showingProgress: P6): R;
  }
  namespace classes {
    export interface NSUserScriptTaskRunnerProtocol<T = any> {  }
  }
}

declare const NSUserScriptTaskRunnerProtocol: cocoa.classes.NSUserScriptTaskRunnerProtocol;
