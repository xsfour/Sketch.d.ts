/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLParser<T = any> extends cocoa.NSObject {
    _initializeSAX2Callbacks<R = void>(): R;
    _popNamespaces<R = void>(): R;
    _pushNamespaces<R = void, P0 = unknown>(__pushNamespaces: P0): R;
    _setParserError<R = void, P0 = number>(__setParserError: P0): R;
    _setExpandedParserError<R = void, P0 = unknown>(__setExpandedParserError: P0): R;
    dealloc<R = void>(): R;
    columnNumber<R = number>(): R;
    lineNumber<R = number>(): R;
    systemID<R = unknown>(): R;
    publicID<R = unknown>(): R;
    abortParsing<R = void>(): R;
    parse<R = boolean>(): R;
    parseFromStream<R = boolean>(): R;
    finishIncrementalParse<R = boolean>(): R;
    parseData<R = boolean, P0 = unknown>(_parseData: P0): R;
    _handleParseResult<R = boolean, P0 = number>(__handleParseResult: P0): R;
    shouldContinueAfterFatalError<R = boolean>(): R;
    setShouldContinueAfterFatalError<R = void, P0 = boolean>(_setShouldContinueAfterFatalError: P0): R;
    _xmlExternalEntityWithURL_identifier_context_originalLoaderFunction<R = cocoa._xmlParserInput, P0 = string, P1 = string, P2 = cocoa._xmlParserCtxt, P3 = cocoa.CDUnknownFunctionPointerType>(__xmlExternalEntityWithURL: P0, _identifier: P1, _context: P2, _originalLoaderFunction: P3): R;
    initWithStream<R = unknown, P0 = unknown>(_initWithStream: P0): R;
    initForIncrementalParsing<R = unknown>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    parserError<R = cocoa.NSError>(): R;
    shouldResolveExternalEntities<R = boolean>(): R;
    setShouldResolveExternalEntities<R = void, P0 = boolean>(_v: P0): R;
    shouldReportNamespacePrefixes<R = boolean>(): R;
    setShouldReportNamespacePrefixes<R = void, P0 = boolean>(_v: P0): R;
    shouldProcessNamespaces<R = boolean>(): R;
    setShouldProcessNamespaces<R = void, P0 = boolean>(_v: P0): R;
    externalEntityResolvingPolicy<R = number>(): R;
    setExternalEntityResolvingPolicy<R = void, P0 = number>(_v: P0): R;
    allowedExternalEntityURLs<R = cocoa.NSSet>(): R;
    setAllowedExternalEntityURLs<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    delegate<R = cocoa.NSXMLParserDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSXMLParserDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSXMLParser<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSXMLParser>(): R;
      new: <R = NSXMLParser>() => R;
      currentParser<R = unknown>(): R;
      setCurrentParser<R = void, P0 = unknown>(_setCurrentParser: P0): R;
    }
  }
}

declare const NSXMLParser: cocoa.classes.NSXMLParser;
