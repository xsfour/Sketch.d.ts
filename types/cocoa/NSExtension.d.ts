/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtension<T = any> extends cocoa.NSObject, cocoa._NSExtensionContextHostingProtocol {
    _dropAssertion<R = void>(): R;
    extensionContexts<R = unknown>(): R;
    _kill<R = void, P0 = number>(__kill: P0): R;
    _safelyEndUsingWithProcessAssertion_continuation<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__safelyEndUsingWithProcessAssertion: P0, _continuation: P1): R;
    _safelyEndUsing<R = void, P0 = cocoa.CDUnknownBlockType>(__safelyEndUsing: P0): R;
    newAssertionToBeginUsingPluginWithOptions_error<R = unknown, P0 = number, P1 = unknown>(_newAssertionToBeginUsingPluginWithOptions: P0, _error: P1): R;
    _safelyBeginUsingWithOptions_withAssertion_onSafeQueue<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(__safelyBeginUsingWithOptions: P0, _withAssertion_onSafeQueue: P1): R;
    _safelyBeginUsingSynchronously_options_withAssertion_onSafeQueue<R = void, P0 = boolean, P1 = number, P2 = cocoa.CDUnknownBlockType>(__safelyBeginUsingSynchronously: P0, _options: P1, _withAssertion_onSafeQueue: P2): R;
    _safelyBeginUsing<R = void, P0 = cocoa.CDUnknownBlockType>(__safelyBeginUsing: P0): R;
    _plugInProcessIdentifier<R = number>(): R;
    _wantsProcessPerRequest<R = boolean>(): R;
    _isSystemExtension<R = boolean>(): R;
    _isPhotoServiceAccessGranted<R = boolean>(): R;
    _itemProviderForPayload_extensionContext<R = unknown, P0 = unknown, P1 = unknown>(__itemProviderForPayload: P0, _extensionContext: P1): R;
    _extensionContextForUUID<R = unknown, P0 = unknown>(__extensionContextForUUID: P0): R;
    objectForInfoDictionaryKey<R = unknown, P0 = unknown>(_objectForInfoDictionaryKey: P0): R;
    _didCreateExtensionContext<R = void, P0 = unknown>(__didCreateExtensionContext: P0): R;
    pidForRequestIdentifier<R = number, P0 = unknown>(_pidForRequestIdentifier: P0): R;
    cancelExtensionRequestWithIdentifier<R = void, P0 = unknown>(_cancelExtensionRequestWithIdentifier: P0): R;
    beginExtensionRequestWithInputItems_error<R = unknown, P0 = unknown, P1 = unknown>(_beginExtensionRequestWithInputItems: P0, _error: P1): R;
    beginExtensionRequestWithInputItems_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginExtensionRequestWithInputItems: P0, _completion: P1): R;
    beginExtensionRequestWithInputItems_listenerEndpoint_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_beginExtensionRequestWithInputItems: P0, _listenerEndpoint: P1, _error: P2): R;
    beginExtensionRequestWithInputItems_listenerEndpoint_completion<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_beginExtensionRequestWithInputItems: P0, _listenerEndpoint: P1, _completion: P2): R;
    beginExtensionRequestWithOptions_inputItems_listenerEndpoint_error<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _listenerEndpoint: P2, _error: P3): R;
    beginExtensionRequestWithOptions_inputItems_listenerEndpoint_completion<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _listenerEndpoint: P2, _completion: P3): R;
    beginExtensionRequestWithOptions_inputItems_error<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _error: P2): R;
    beginExtensionRequestWithOptions_inputItems_completion<R = void, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_beginExtensionRequestWithOptions: P0, _inputItems: P1, _completion: P2): R;
    _reallyBeginExtensionRequestWithContext_extensionServiceConnection_listenerEndpoint_synchronously_completion<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = cocoa.CDUnknownBlockType>(__reallyBeginExtensionRequestWithContext: P0, _extensionServiceConnection: P1, _listenerEndpoint: P2, _synchronously: P3, _completion: P4): R;
    _newExtensionContextAndGetConnection_assertion_inputItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__newExtensionContextAndGetConnection: P0, _assertion: P1, _inputItems: P2): R;
    _reallyBeginExtensionRequestWithInputItems_processAssertion_listenerEndpoint_completion<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(__reallyBeginExtensionRequestWithInputItems: P0, _processAssertion: P1, _listenerEndpoint: P2, _completion: P3): R;
    _bareExtensionServiceConnection<R = unknown>(): R;
    attemptOptOut<R = boolean, P0 = unknown>(_attemptOptOut: P0): R;
    attemptOptIn<R = boolean, P0 = unknown>(_attemptOptIn: P0): R;
    dealloc<R = void>(): R;
    _initWithPKPlugin<R = unknown, P0 = unknown>(__initWithPKPlugin: P0): R;
    _resetExtensionState<R = void>(): R;
    _didShowNewExtensionIndicator<R = void>(): R;
    _didShowExtensionManagementInterface<R = void>(): R;
    connectionUUID<R = cocoa.NSUUID>(): R;
    setConnectionUUID<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
    _allowedErrorClasses<R = cocoa.NSSet>(): R;
    set_allowedErrorClasses<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    _extensionContexts<R = cocoa.NSMutableDictionary>(): R;
    set_extensionContexts<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    _extensionServiceConnections<R = cocoa.NSMutableDictionary>(): R;
    set_extensionServiceConnections<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    _extensionExpirationIdentifiers<R = cocoa.NSMutableDictionary>(): R;
    set_extensionExpirationIdentifiers<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    _requestPostCompletionBlockWithItems<R = cocoa.CDUnknownBlockType>(): R;
    set_requestPostCompletionBlockWithItems<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    _requestPostCompletionBlock<R = cocoa.CDUnknownBlockType>(): R;
    set_requestPostCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    _localizedShortName<R = cocoa.NSString>(): R;
    set_localizedShortName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    _localizedName<R = cocoa.NSString>(): R;
    set_localizedName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    _extensionBundle<R = cocoa.NSBundle>(): R;
    set_extensionBundle<R = void, P0 = cocoa.NSBundle>(_v: P0): R;
    _plugIn<R = cocoa.PKPlugIn>(): R;
    set_plugIn<R = void, P0 = cocoa.PKPlugIn>(_v: P0): R;
    _stashedPlugInConnection<R = unknown>(): R;
    set_stashedPlugInConnection<R = void, P0 = unknown>(_v: P0): R;
    wantsDedicatedQueue<R = number>(): R;
    setWantsDedicatedQueue<R = void, P0 = number>(_v: P0): R;
    requestInterruptionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setRequestInterruptionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    requestCancellationBlock<R = cocoa.CDUnknownBlockType>(): R;
    setRequestCancellationBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    requestCompletionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setRequestCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    extensionPointIdentifier<R = cocoa.NSString>(): R;
    setExtensionPointIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    infoDictionary<R = cocoa.NSDictionary>(): R;
    setInfoDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    attributes<R = cocoa.NSDictionary>(): R;
    setAttributes<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    version<R = cocoa.NSString>(): R;
    setVersion<R = void, P0 = cocoa.NSString>(_v: P0): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    icons<R = cocoa.NSArray>(): R;
    setIcons<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    optedIn<R = boolean>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    _markedNew<R = boolean>(): R;
    _extensionState<R = cocoa.NSDictionary>(): R;
    set_extensionState<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
    // + NSExtension(NSExtension_AppKitAdditions):
    
  }
  namespace classes {
    export interface NSExtension<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSExtensionContextHostingProtocol {
      alloc<R = NSExtension>(): R;
      new: <R = NSExtension>() => R;
      endMatchingExtensions<R = void, P0 = unknown>(_endMatchingExtensions: P0): R;
      beginMatchingExtensionsWithAttributes_completion<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_beginMatchingExtensionsWithAttributes: P0, _completion: P1): R;
      extensionWithURL_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_extensionWithURL: P0, _completion: P1): R;
      extensionWithUUID_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_extensionWithUUID: P0, _completion: P1): R;
      extensionWithIdentifier_excludingDisabledExtensions_error<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_extensionWithIdentifier: P0, _excludingDisabledExtensions: P1, _error: P2): R;
      extensionWithIdentifier_error<R = unknown, P0 = unknown, P1 = unknown>(_extensionWithIdentifier: P0, _error: P1): R;
      extensionsWithMatchingAttributes_synchronously_completion<R = void, P0 = unknown, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_extensionsWithMatchingAttributes: P0, _synchronously: P1, _completion: P2): R;
      extensionsWithMatchingAttributes_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_extensionsWithMatchingAttributes: P0, _completion: P1): R;
      extensionsWithMatchingAttributes_error<R = unknown, P0 = unknown, P1 = unknown>(_extensionsWithMatchingAttributes: P0, _error: P1): R;
      _shouldLogExtensionDiscovery<R = boolean>(): R;
      initialize<R = void>(): R;
      predicateForActivationRule<R = unknown, P0 = unknown>(_predicateForActivationRule: P0): R;
      evaluateActivationRule_withExtensionItemsRepresentation<R = boolean, P0 = unknown, P1 = unknown>(_evaluateActivationRule: P0, _withExtensionItemsRepresentation: P1): R;
      initializeFiltering<R = void>(): R;
      // + NSExtension(NSExtension_AppKitAdditions):
      numberOfNewItems<R = number>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSExtension: cocoa.classes.NSExtension;
