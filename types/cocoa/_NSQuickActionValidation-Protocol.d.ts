/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionValidationProtocol<T = any> extends cocoa.NSObjectProtocol {
    validQuickActions<R = cocoa.NSSet>(): R;
    wantsAutovalidation<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSQuickActionValidationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      validationForItemSource_quickActions<R = cocoa._NSQuickActionValidation, P0 = cocoa._NSQuickActionItemSource, P1 = cocoa.NSSet>(_validationForItemSource: P0, _quickActions: P1): R;
    }
  }
}
