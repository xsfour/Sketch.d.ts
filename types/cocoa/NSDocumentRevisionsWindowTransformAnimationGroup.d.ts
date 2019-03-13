/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsWindowTransformAnimationGroup<T = any> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    initWithAnimations<R = unknown, P0 = unknown>(_initWithAnimations: P0): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsWindowTransformAnimationGroup<T = any> extends NSAnimation {
      alloc<R = NSDocumentRevisionsWindowTransformAnimationGroup>(): R;
      new: <R = NSDocumentRevisionsWindowTransformAnimationGroup>() => R;
    }
  }
}

declare const NSDocumentRevisionsWindowTransformAnimationGroup: cocoa.classes.NSDocumentRevisionsWindowTransformAnimationGroup;
