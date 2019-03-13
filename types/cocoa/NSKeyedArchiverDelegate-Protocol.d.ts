/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedArchiverDelegateProtocol<T = any> extends NSObjectProtocol {
    archiverDidFinish<R = void, P0 = NSKeyedArchiver>(_archiverDidFinish: P0): R;
    archiverWillFinish<R = void, P0 = NSKeyedArchiver>(_archiverWillFinish: P0): R;
    archiver_willReplaceObject_withObject<R = void, P0 = NSKeyedArchiver, P1 = unknown, P2 = unknown>(_archiver: P0, _willReplaceObject: P1, _withObject: P2): R;
    archiver_didEncodeObject<R = void, P0 = NSKeyedArchiver, P1 = unknown>(_archiver: P0, _didEncodeObject: P1): R;
    archiver_willEncodeObject<R = unknown, P0 = NSKeyedArchiver, P1 = unknown>(_archiver: P0, _willEncodeObject: P1): R;
  }
  namespace classes {
    export interface NSKeyedArchiverDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
