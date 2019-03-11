/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIRestorer<T = any> extends cocoa.NSObject {
    delayCGWindowOrderingIfNecessary<R = void>(): R;
    resumeNormalWindowOrderingAndDrawing<R = void>(): R;
    jettisonTalagentWindowsWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_jettisonTalagentWindowsWithCompletionHandler: P0): R;
    _debugUnrestoredWindows<R = unknown>(): R;
    promptToIgnorePersistentState<R = boolean>(): R;
    performingWindowOrdering<R = boolean>(): R;
    shouldUseOneWindowHeuristic<R = boolean>(): R;
    ignoreAnyPreexistingPersistentState<R = void>(): R;
    tearDownStateRestorationApparatusAndResumeWindowOrdering<R = void>(): R;
    finishedRestoringWindowsWithZOrder_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_finishedRestoringWindowsWithZOrder: P0, _completionHandler: P1): R;
    restoreStateFromRecords_usingDelegate_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_restoreStateFromRecords: P0, _usingDelegate: P1, _completionHandler: P2): R;
    mungeFullScreenWindowsReturningTheirWindowNumbers<R = unknown>(): R;
    pickKeyAndMainWindows<R = void>(): R;
    orderRestoredWindows<R = void>(): R;
    invokeRestoration<R = void, P0 = unknown>(_invokeRestoration: P0): R;
    acquireTalagentWindowDictionaries<R = void>(): R;
    restorationForWindowID<R = unknown, P0 = unknown>(_restorationForWindowID: P0): R;
    sortRestorationsByZOrder<R = void, P0 = unknown>(_sortRestorationsByZOrder: P0): R;
    populateWindowRestorationsByWindowID<R = void>(): R;
    populateEncodedReferenceToResponders<R = void>(): R;
    dealloc<R = void>(): R;
    hasFinishedRestoringWindows<R = boolean>(): R;
    urlHerder<R = cocoa.NSPersistentUISecureURLHerder>(): R;
    setUrlHerder<R = void, P0 = cocoa.NSPersistentUISecureURLHerder>(_v: P0): R;
    crashHandler<R = cocoa.NSPersistentUICrashHandler>(): R;
    setCrashHandler<R = void, P0 = cocoa.NSPersistentUICrashHandler>(_v: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIRestorer<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPersistentUIRestorer>(): R;
      new: <R = NSPersistentUIRestorer>() => R;
    }
  }
}

declare const NSPersistentUIRestorer: cocoa.classes.NSPersistentUIRestorer;
