/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewAttachmentEditCompletionAnimation<T = any> extends cocoa.NSObject, cocoa.NSAnimationDelegateProtocol {
    finishWithSuccess<R = void, P0 = boolean>(_finishWithSuccess: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    initWithImage_startRect_endRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGRect>(_initWithImage: P0, _startRect: P1, _endRect: P2): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTextViewAttachmentEditCompletionAnimation<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAnimationDelegateProtocol {
      alloc<R = NSTextViewAttachmentEditCompletionAnimation>(): R;
      new: <R = NSTextViewAttachmentEditCompletionAnimation>() => R;
    }
  }
}

declare const NSTextViewAttachmentEditCompletionAnimation: cocoa.classes.NSTextViewAttachmentEditCompletionAnimation;
