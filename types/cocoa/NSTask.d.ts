/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTask<T = any> extends cocoa.NSObject {
    currentDirectoryPath<R = unknown>(): R;
    launchPath<R = unknown>(): R;
    suspendCount<R = number>(): R;
    resume<R = boolean>(): R;
    suspend<R = boolean>(): R;
    terminate<R = void>(): R;
    interrupt<R = void>(): R;
    setLaunchPath<R = void, P0 = unknown>(_setLaunchPath: P0): R;
    setCurrentDirectoryPath<R = void, P0 = unknown>(_setCurrentDirectoryPath: P0): R;
    launchAndReturnError<R = boolean, P0 = unknown>(_launchAndReturnError: P0): R;
    launch<R = void>(): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    standardError<R = unknown>(): R;
    setStandardError<R = void, P0 = unknown>(_v: P0): R;
    standardOutput<R = unknown>(): R;
    setStandardOutput<R = void, P0 = unknown>(_v: P0): R;
    standardInput<R = unknown>(): R;
    setStandardInput<R = void, P0 = unknown>(_v: P0): R;
    arguments<R = cocoa.NSArray>(): R;
    setArguments<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    environment<R = cocoa.NSDictionary>(): R;
    setEnvironment<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    processIdentifier<R = number>(): R;
    executableURL<R = cocoa.NSURL>(): R;
    setExecutableURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    currentDirectoryURL<R = cocoa.NSURL>(): R;
    setCurrentDirectoryURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    running<R = boolean>(): R;
    terminationReason<R = number>(): R;
    terminationStatus<R = number>(): R;
    terminationHandler<R = cocoa.CDUnknownBlockType>(): R;
    setTerminationHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSTask<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTask>(): R;
      new: <R = NSTask>() => R;
      launchedTaskWithExecutableURL_arguments_error_terminationHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_launchedTaskWithExecutableURL: P0, _arguments: P1, _error: P2, _terminationHandler: P3): R;
      launchedTaskWithLaunchPath_arguments<R = unknown, P0 = unknown, P1 = unknown>(_launchedTaskWithLaunchPath: P0, _arguments: P1): R;
      launchedTaskWithDictionary<R = unknown, P0 = unknown>(_launchedTaskWithDictionary: P0): R;
      currentTaskDictionary<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSTask: cocoa.classes.NSTask;
