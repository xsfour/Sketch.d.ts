/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    comboBox_completedString<R = cocoa.NSString, P0 = cocoa.NSComboBox, P1 = cocoa.NSString>(_comboBox: P0, _completedString: P1): R;
    comboBox_indexOfItemWithStringValue<R = number, P0 = cocoa.NSComboBox, P1 = cocoa.NSString>(_comboBox: P0, _indexOfItemWithStringValue: P1): R;
    comboBox_objectValueForItemAtIndex<R = unknown, P0 = cocoa.NSComboBox, P1 = number>(_comboBox: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBox<R = number, P0 = cocoa.NSComboBox>(_numberOfItemsInComboBox: P0): R;
  }
  namespace classes {
    export interface NSComboBoxDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSComboBoxDataSourceProtocol: cocoa.classes.NSComboBoxDataSourceProtocol;
