/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternManagerProtocol<T = any> extends NSObjectProtocol {
    replaceFieldForField<R = NSFindPatternField, P0 = NSFindPatternField>(_replaceFieldForField: P0): R;
    findFieldForField<R = NSFindPatternField, P0 = NSFindPatternField>(_findFieldForField: P0): R;
    supportsPatterns<R = boolean>(): R;
    findPatternField_findPatternDoubleClicked<R = void, P0 = NSFindPatternField, P1 = NSFindPattern>(_findPatternField: P0, _findPatternDoubleClicked: P1): R;
  }
  namespace classes {
    export interface NSFindPatternManagerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
