/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommand<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    description<R = unknown>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    resumeExecutionWithResult<R = void, P0 = unknown>(_resumeExecutionWithResult: P0): R;
    suspendExecution<R = void>(): R;
    executeCommand<R = unknown>(): R;
    _sendToRemainingReceivers<R = void>(): R;
    performDefaultImplementation<R = unknown>(): R;
    evaluatedValueForArgumentValue<R = unknown, P0 = unknown>(_evaluatedValueForArgumentValue: P0): R;
    dealloc<R = void>(): R;
    initWithCommandDescription<R = unknown, P0 = unknown>(_initWithCommandDescription: P0): R;
    _allowsAccessForEvent<R = boolean, P0 = unknown>(__allowsAccessForEvent: P0): R;
    _allowsAccessForEventParameters_givenSenderAccessGroups<R = boolean, P0 = unknown, P1 = unknown>(__allowsAccessForEventParameters: P0, _givenSenderAccessGroups: P1): R;
    _allowsAccessToSpecifier_writable_givenAccessGroups<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(__allowsAccessToSpecifier: P0, _writable: P1, _givenAccessGroups: P2): R;
    _setScriptErrorExpectedType<R = void, P0 = number>(__setScriptErrorExpectedType: P0): R;
    _populateReplyAppleEventWithResult<R = void, P0 = unknown>(__populateReplyAppleEventWithResult: P0): R;
    _resumeExecutionWithResult<R = void, P0 = unknown>(__resumeExecutionWithResult: P0): R;
    _setAppleEventHandling<R = void, P0 = unknown>(__setAppleEventHandling: P0): R;
    _setAdditionalThingsFromEvent<R = boolean, P0 = unknown>(__setAdditionalThingsFromEvent: P0): R;
    _scriptErrorExpectedTypeDescriptor<R = unknown>(): R;
    _scriptErrorOffendingObjectDescriptor<R = unknown>(): R;
    _setScriptErrorExpectedTypeDescriptor<R = void, P0 = unknown>(__setScriptErrorExpectedTypeDescriptor: P0): R;
    _setScriptErrorOffendingObjectDescriptor<R = void, P0 = unknown>(__setScriptErrorOffendingObjectDescriptor: P0): R;
    _setScriptErrorFromKVCException<R = void, P0 = unknown>(__setScriptErrorFromKVCException: P0): R;
    appleEvent<R = cocoa.NSAppleEventDescriptor>(): R;
    scriptErrorString<R = cocoa.NSString>(): R;
    setScriptErrorString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    scriptErrorExpectedTypeDescriptor<R = cocoa.NSAppleEventDescriptor>(): R;
    setScriptErrorExpectedTypeDescriptor<R = void, P0 = cocoa.NSAppleEventDescriptor>(_v: P0): R;
    scriptErrorOffendingObjectDescriptor<R = cocoa.NSAppleEventDescriptor>(): R;
    setScriptErrorOffendingObjectDescriptor<R = void, P0 = cocoa.NSAppleEventDescriptor>(_v: P0): R;
    scriptErrorNumber<R = number>(): R;
    setScriptErrorNumber<R = void, P0 = number>(_v: P0): R;
    wellFormed<R = boolean>(): R;
    evaluatedArguments<R = cocoa.NSDictionary>(): R;
    arguments<R = cocoa.NSDictionary>(): R;
    setArguments<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    evaluatedReceivers<R = unknown>(): R;
    receiversSpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
    setReceiversSpecifier<R = void, P0 = cocoa.NSScriptObjectSpecifier>(_v: P0): R;
    directParameter<R = unknown>(): R;
    setDirectParameter<R = void, P0 = unknown>(_v: P0): R;
    commandDescription<R = cocoa.NSScriptCommandDescription>(): R;
  }
  namespace classes {
    export interface NSScriptCommand<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSScriptCommand>(): R;
      new: <R = NSScriptCommand>() => R;
      currentCommand<R = unknown>(): R;
      _commandFromEvent<R = unknown, P0 = unknown>(__commandFromEvent: P0): R;
      _getArguments_withParameters<R = boolean, P0 = unknown, P1 = unknown>(__getArguments: P0, _withParameters: P1): R;
      _argumentValueFromParameterDescriptor_usingTypeDescription<R = unknown, P0 = unknown, P1 = unknown>(__argumentValueFromParameterDescriptor: P0, _usingTypeDescription: P1): R;
      _getReceiversSpecifierOrUnnamedArgument_fromEvent_usingDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__getReceiversSpecifierOrUnnamedArgument: P0, _fromEvent: P1, _usingDescription: P2): R;
      _commandFromEvent_inConstructionContext<R = unknown, P0 = unknown, P1 = unknown>(__commandFromEvent: P0, _inConstructionContext: P1): R;
    }
  }
}

declare const NSScriptCommand: cocoa.classes.NSScriptCommand;
