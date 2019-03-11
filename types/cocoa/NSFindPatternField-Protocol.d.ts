/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternFieldProtocol<T = any> extends cocoa.NSObjectProtocol {
    menuForFindPatternAttachment<R = cocoa.NSMenu, P0 = cocoa.NSFindPatternAttachmentCell>(_menuForFindPatternAttachment: P0): R;
    plainTextValue<R = cocoa.NSString>(): R;
    setFindPatternPropertyList<R = void, P0 = unknown>(_setFindPatternPropertyList: P0): R;
    findPatternPropertyList<R = unknown>(): R;
    hasFindPattern<R = boolean>(): R;
    replacementExpression<R = cocoa.NSString>(): R;
    regularExpression<R = cocoa.NSString>(): R;
    findPatternArray<R = cocoa.NSArray>(): R;
    setFindPatternArray<R = void, P0 = cocoa.NSArray>(_setFindPatternArray: P0): R;
    insertNewFindPattern<R = void, P0 = cocoa.NSFindPattern>(_insertNewFindPattern: P0): R;
    removeFindPattern<R = boolean, P0 = cocoa.NSFindPattern>(_removeFindPattern: P0): R;
    findPatternManager<R = cocoa.NSFindPatternManager>(): R;
    setFindPatternManager<R = void, P0 = cocoa.NSFindPatternManager>(_v: P0): R;
  }
  namespace classes {
    export interface NSFindPatternFieldProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSFindPatternFieldProtocol: cocoa.classes.NSFindPatternFieldProtocol;
