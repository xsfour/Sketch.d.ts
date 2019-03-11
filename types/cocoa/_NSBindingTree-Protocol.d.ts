/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBindingTreeProtocol<T = any> {
    isExpandableAtArrangedObjectIndexPath<R = boolean, P0 = cocoa.NSIndexPath>(_isExpandableAtArrangedObjectIndexPath: P0): R;
    countForIndexPath<R = number, P0 = cocoa.NSIndexPath>(_countForIndexPath: P0): R;
    nodeAtIndexPath<R = unknown, P0 = cocoa.NSIndexPath>(_nodeAtIndexPath: P0): R;
    objectAtIndexPath<R = unknown, P0 = unknown>(_objectAtIndexPath: P0): R;
    _validateValue_forKeyPath_ofObjectAtIndexPath_error<R = boolean, P0 = unknown, P1 = cocoa.NSString, P2 = cocoa.NSIndexPath, P3 = unknown>(__validateValue: P0, _forKeyPath: P1, _ofObjectAtIndexPath: P2, _error: P3): R;
    _invokeSelector_withArguments_onKeyPath_ofObjectAtIndexPath<R = void, P0 = string, P1 = cocoa.NSArray, P2 = cocoa.NSString, P3 = cocoa.NSIndexPath>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2, _ofObjectAtIndexPath: P3): R;
    _setValue_forKeyPath_ofObjectAtIndexPath<R = void, P0 = unknown, P1 = cocoa.NSString, P2 = cocoa.NSIndexPath>(__setValue: P0, _forKeyPath: P1, _ofObjectAtIndexPath: P2): R;
    _valueForKeyPath_ofObjectAtIndexPath<R = unknown, P0 = cocoa.NSString, P1 = unknown>(__valueForKeyPath: P0, _ofObjectAtIndexPath: P1): R;
  }
  namespace classes {
    export interface _NSBindingTreeProtocol<T = any> {  }
  }
}
