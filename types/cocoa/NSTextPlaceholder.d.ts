/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextPlaceholder<T = any> extends NSObject {
    _postCommitNotification<R = void>(): R;
    setText_doCommit<R = void, P0 = unknown, P1 = boolean>(_setText: P0, _doCommit: P1): R;
    commit<R = void>(): R;
    identifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIdentifier_text_doCommit<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithIdentifier: P0, _text: P1, _doCommit: P2): R;
    committed<R = boolean>(): R;
    attributedStringValue<R = NSAttributedString>(): R;
    owner<R = unknown>(): R;
    setOwner<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextPlaceholder<T = any> extends NSObject {
      alloc<R = NSTextPlaceholder>(): R;
      new: <R = NSTextPlaceholder>() => R;
    }
  }
}

declare const NSTextPlaceholder: cocoa.classes.NSTextPlaceholder;
