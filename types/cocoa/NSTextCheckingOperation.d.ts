/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextCheckingOperation<T = any> extends cocoa.NSOperation {
    performCompletionHandler<R = void>(): R;
    initWithString_range_offset_types_options_tag_sequenceNumber_completionHandler<R = unknown, P0 = unknown, P1 = cocoa._NSRange, P2 = number, P3 = number, P4 = unknown, P5 = number, P6 = number, P7 = cocoa.CDUnknownBlockType>(_initWithString: P0, _range: P1, _offset: P2, _types: P3, _options: P4, _tag: P5, _sequenceNumber: P6, _completionHandler: P7): R;
    wordCount<R = number>(): R;
    orthography<R = cocoa.NSOrthography>(): R;
    results<R = cocoa.NSArray>(): R;
    sequenceNumber<R = number>(): R;
  }
  namespace classes {
    export interface NSTextCheckingOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = NSTextCheckingOperation>(): R;
      new: <R = NSTextCheckingOperation>() => R;
    }
  }
}

declare const NSTextCheckingOperation: cocoa.classes.NSTextCheckingOperation;
