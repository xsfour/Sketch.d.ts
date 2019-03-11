/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrinter<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    _compatibility_initWithUnkeyedCoder<R = unknown, P0 = unknown>(__compatibility_initWithUnkeyedCoder: P0): R;
    description<R = unknown>(): R;
    stringListForKey_inTable<R = unknown, P0 = unknown, P1 = unknown>(_stringListForKey: P0, _inTable: P1): R;
    stringForKey_inTable<R = unknown, P0 = unknown, P1 = unknown>(_stringForKey: P0, _inTable: P1): R;
    sizeForKey_inTable<R = cocoa.CGSize, P0 = unknown, P1 = unknown>(_sizeForKey: P0, _inTable: P1): R;
    rectForKey_inTable<R = cocoa.CGRect, P0 = unknown, P1 = unknown>(_rectForKey: P0, _inTable: P1): R;
    intForKey_inTable<R = number, P0 = unknown, P1 = unknown>(_intForKey: P0, _inTable: P1): R;
    floatForKey_inTable<R = number, P0 = unknown, P1 = unknown>(_floatForKey: P0, _inTable: P1): R;
    booleanForKey_inTable<R = boolean, P0 = unknown, P1 = unknown>(_booleanForKey: P0, _inTable: P1): R;
    isKey_inTable<R = boolean, P0 = unknown, P1 = unknown>(_isKey: P0, _inTable: P1): R;
    statusForTable<R = number, P0 = unknown>(_statusForTable: P0): R;
    pageSizeForPaper<R = cocoa.CGSize, P0 = unknown>(_pageSizeForPaper: P0): R;
    dealloc<R = void>(): R;
    _initWithName_printer<R = unknown, P0 = unknown, P1 = cocoa.OpaquePMPrinter>(__initWithName: P0, _printer: P1): R;
    _printer<R = cocoa.OpaquePMPrinter>(): R;
    note<R = unknown>(): R;
    host<R = unknown>(): R;
    domain<R = unknown>(): R;
    isOutputStackInReverseOrder<R = boolean>(): R;
    isFontAvailable<R = boolean, P0 = unknown>(_isFontAvailable: P0): R;
    isColor<R = boolean>(): R;
    acceptsBinary<R = boolean>(): R;
    imageRectForPaper<R = cocoa.CGRect, P0 = unknown>(_imageRectForPaper: P0): R;
    _deallocatePPDStuff<R = void>(): R;
    processKeyword_option_keyTran_arg_argTran<R = unknown, P0 = string, P1 = string, P2 = string, P3 = string, P4 = string>(_processKeyword: P0, _option: P1, _keyTran: P2, _arg: P3, _argTran: P4): R;
    _setUIConstraints<R = unknown, P0 = string>(__setUIConstraints: P0): R;
    _setOrderDependency<R = unknown, P0 = string>(__setOrderDependency: P0): R;
    _appendKey_option_value_inKeyNode<R = unknown, P0 = string, P1 = string, P2 = string, P3 = unknown>(__appendKey: P0, _option: P1, _value: P2, _inKeyNode: P3): R;
    _makeKeyNode_inKeyNode<R = unknown, P0 = string, P1 = unknown>(__makeKeyNode: P0, _inKeyNode: P1): R;
    _appendStringInKeyNode_key_value<R = unknown, P0 = unknown, P1 = string, P2 = string>(__appendStringInKeyNode: P0, _key: P1, _value: P2): R;
    _keyListForKeyNode<R = unknown, P0 = unknown>(__keyListForKeyNode: P0): R;
    _getNodeForKey_inTable<R = unknown, P0 = unknown, P1 = unknown>(__getNodeForKey: P0, _inTable: P1): R;
    _allocatePPDStuffAndParse<R = void>(): R;
    _freeNodes<R = unknown>(): R;
    _makeTable_inNode<R = unknown, P0 = string, P1 = unknown>(__makeTable: P0, _inNode: P1): R;
    _allocString<R = string, P0 = string>(__allocString: P0): R;
    _freeNode<R = unknown, P0 = unknown>(__freeNode: P0): R;
    _makeRootNode<R = unknown>(): R;
    _newNode<R = unknown, P0 = number>(__newNode: P0): R;
    deviceDescription<R = cocoa.NSDictionary>(): R;
    languageLevel<R = number>(): R;
    type<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSPrinter<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSPrinter>(): R;
      new: <R = NSPrinter>() => R;
      printerWithType<R = unknown, P0 = unknown>(_printerWithType: P0): R;
      printerWithName<R = unknown, P0 = unknown>(_printerWithName: P0): R;
      printerTypes<R = unknown>(): R;
      printerNames<R = unknown>(): R;
      _flushCachedCarbonPrintersByName<R = void>(): R;
      _printerForPrinter<R = unknown, P0 = cocoa.OpaquePMPrinter>(__printerForPrinter: P0): R;
      printerWithName_domain_includeUnavailable<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_printerWithName: P0, _domain: P1, _includeUnavailable: P2): R;
    }
  }
}

declare const NSPrinter: cocoa.classes.NSPrinter;
