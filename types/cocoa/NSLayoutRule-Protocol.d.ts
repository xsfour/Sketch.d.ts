/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRuleProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol {
    makeChildRules<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    identifier<R = NSString>(): R;
  }
  namespace classes {
    export interface NSLayoutRuleProtocol<T = any> extends NSObjectProtocol, NSCopyingProtocol {  }
  }
}
