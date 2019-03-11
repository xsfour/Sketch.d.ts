/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedUnarchiverDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    unarchiverDidFinish<R = void, P0 = cocoa.NSKeyedUnarchiver>(_unarchiverDidFinish: P0): R;
    unarchiverWillFinish<R = void, P0 = cocoa.NSKeyedUnarchiver>(_unarchiverWillFinish: P0): R;
    unarchiver_willReplaceObject_withObject<R = void, P0 = cocoa.NSKeyedUnarchiver, P1 = unknown, P2 = unknown>(_unarchiver: P0, _willReplaceObject: P1, _withObject: P2): R;
    unarchiver_didDecodeObject<R = unknown, P0 = cocoa.NSKeyedUnarchiver, P1 = unknown>(_unarchiver: P0, _didDecodeObject: P1): R;
    unarchiver_cannotDecodeObjectOfClassName_originalClasses<R = unknown, P0 = cocoa.NSKeyedUnarchiver, P1 = cocoa.NSString, P2 = cocoa.NSArray>(_unarchiver: P0, _cannotDecodeObjectOfClassName: P1, _originalClasses: P2): R;
  }
  namespace classes {
    export interface NSKeyedUnarchiverDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSKeyedUnarchiverDelegateProtocol: cocoa.classes.NSKeyedUnarchiverDelegateProtocol;
