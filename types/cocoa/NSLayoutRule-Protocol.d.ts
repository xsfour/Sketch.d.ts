/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRuleProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol {
    makeChildRules<R = cocoa.NSArray>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSLayoutRuleProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol {  }
  }
}

declare const NSLayoutRuleProtocol: cocoa.classes.NSLayoutRuleProtocol;
