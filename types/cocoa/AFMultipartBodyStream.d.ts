/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFMultipartBodyStream<T = any> extends cocoa.NSInputStream, cocoa.NSCopyingProtocol, cocoa.NSStreamDelegateProtocol {
    setStreamError<R = void, P0 = unknown>(_setStreamError: P0): R;
    streamError<R = unknown>(): R;
    setStreamStatus<R = void, P0 = number>(_setStreamStatus: P0): R;
    streamStatus<R = number>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    cxx_destruct<R = void>(): R;
    _setCFClientFlags_callback_context<R = boolean, P0 = number, P1 = cocoa.CDUnknownFunctionPointerType, P2 = unknown>(__setCFClientFlags: P0, _callback: P1, _context: P2): R;
    _unscheduleFromCFRunLoop_forMode<R = void, P0 = cocoa.__CFRunLoop, P1 = cocoa.__CFString>(__unscheduleFromCFRunLoop: P0, _forMode: P1): R;
    _scheduleInCFRunLoop_forMode<R = void, P0 = cocoa.__CFRunLoop, P1 = cocoa.__CFString>(__scheduleInCFRunLoop: P0, _forMode: P1): R;
    removeFromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_removeFromRunLoop: P0, _forMode: P1): R;
    scheduleInRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_scheduleInRunLoop: P0, _forMode: P1): R;
    setProperty_forKey<R = boolean, P0 = unknown, P1 = unknown>(_setProperty: P0, _forKey: P1): R;
    propertyForKey<R = unknown, P0 = unknown>(_propertyForKey: P0): R;
    close<R = void>(): R;
    open<R = void>(): R;
    hasBytesAvailable<R = boolean>(): R;
    getBuffer_length<R = boolean, P0 = string, P1 = number>(_getBuffer: P0, _length: P1): R;
    read_maxLength<R = number, P0 = string, P1 = number>(_read: P0, _maxLength: P1): R;
    appendHTTPBodyPart<R = void, P0 = unknown>(_appendHTTPBodyPart: P0): R;
    setInitialAndFinalBoundaries<R = void>(): R;
    initWithStringEncoding<R = unknown, P0 = number>(_initWithStringEncoding: P0): R;
    buffer<R = cocoa.NSMutableData>(): R;
    setBuffer<R = void, P0 = cocoa.NSMutableData>(_v: P0): R;
    outputStream<R = cocoa.NSOutputStream>(): R;
    setOutputStream<R = void, P0 = cocoa.NSOutputStream>(_v: P0): R;
    currentHTTPBodyPart<R = cocoa.AFHTTPBodyPart>(): R;
    setCurrentHTTPBodyPart<R = void, P0 = cocoa.AFHTTPBodyPart>(_v: P0): R;
    HTTPBodyPartEnumerator<R = cocoa.NSEnumerator>(): R;
    setHTTPBodyPartEnumerator<R = void, P0 = cocoa.NSEnumerator>(_v: P0): R;
    HTTPBodyParts<R = cocoa.NSMutableArray>(): R;
    setHTTPBodyParts<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    inputStream<R = cocoa.NSInputStream>(): R;
    setInputStream<R = void, P0 = cocoa.NSInputStream>(_v: P0): R;
    delay<R = number>(): R;
    setDelay<R = void, P0 = number>(_v: P0): R;
    numberOfBytesInPacket<R = number>(): R;
    setNumberOfBytesInPacket<R = void, P0 = number>(_v: P0): R;
    contentLength<R = number>(): R;
    empty<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface AFMultipartBodyStream<T = any> extends cocoa.classes.NSInputStream, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSStreamDelegateProtocol {  }
  }
}

declare const AFMultipartBodyStream: cocoa.classes.AFMultipartBodyStream;
