/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionValidationProtocol<T = any> extends NSObjectProtocol {
    validQuickActions<R = NSSet>(): R;
    wantsAutovalidation<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSQuickActionValidationProtocol<T = any> extends NSObjectProtocol {
      validationForItemSource_quickActions<R = _NSQuickActionValidation, P0 = _NSQuickActionItemSource, P1 = NSSet>(_validationForItemSource: P0, _quickActions: P1): R;
    }
  }
}
