/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteDistantObjectRequest<T = any> extends NSDistantObjectRequest {
    dealloc<R = void>(): R;
    conversation<R = unknown>(): R;
    connection<R = unknown>(): R;
    invocation<R = unknown>(): R;
    initWithInvocation_conversation_sequence_importedObjects_connection<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_initWithInvocation: P0, _conversation: P1, _sequence: P2, _importedObjects: P3, _connection: P4): R;
  }
  namespace classes {
    export interface NSConcreteDistantObjectRequest<T = any> extends NSDistantObjectRequest {
      alloc<R = NSConcreteDistantObjectRequest>(): R;
      new: <R = NSConcreteDistantObjectRequest>() => R;
    }
  }
}

declare const NSConcreteDistantObjectRequest: cocoa.classes.NSConcreteDistantObjectRequest;
