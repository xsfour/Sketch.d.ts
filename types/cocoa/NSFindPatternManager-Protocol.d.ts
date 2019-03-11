/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternManagerProtocol<T = any> extends cocoa.NSObjectProtocol {
    replaceFieldForField<R = cocoa.NSFindPatternField, P0 = cocoa.NSFindPatternField>(_replaceFieldForField: P0): R;
    findFieldForField<R = cocoa.NSFindPatternField, P0 = cocoa.NSFindPatternField>(_findFieldForField: P0): R;
    supportsPatterns<R = boolean>(): R;
    findPatternField_findPatternDoubleClicked<R = void, P0 = cocoa.NSFindPatternField, P1 = cocoa.NSFindPattern>(_findPatternField: P0, _findPatternDoubleClicked: P1): R;
  }
  namespace classes {
    export interface NSFindPatternManagerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSFindPatternManagerProtocol: cocoa.classes.NSFindPatternManagerProtocol;
