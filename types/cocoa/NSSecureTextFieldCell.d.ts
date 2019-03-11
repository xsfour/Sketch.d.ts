/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureTextFieldCell<T = any> extends cocoa.NSTextFieldCell {
    _bulletStringForString<R = unknown, P0 = unknown>(__bulletStringForString: P0): R;
    _bulletCharacter<R = number>(): R;
    _setBulletCharacter<R = void, P0 = number>(__setBulletCharacter: P0): R;
    textView_willChangeSelectionFromCharacterRange_toCharacterRange<R = cocoa._NSRange, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_textView: P0, _willChangeSelectionFromCharacterRange: P1, _toCharacterRange: P2): R;
    validatePasswordSessionValue<R = boolean, P0 = unknown>(_validatePasswordSessionValue: P0): R;
    _securePromptSession<R = void>(): R;
    accessibilityIsValueDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityValueDescriptionAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    echosBullets<R = boolean>(): R;
    setEchosBullets<R = void, P0 = boolean>(_v: P0): R;
    passwordSessionValue<R = cocoa.NSData>(): R;
    kernelSecureMode<R = boolean>(): R;
    setKernelSecureMode<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSSecureTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSSecureTextFieldCell>(): R;
      new: <R = NSSecureTextFieldCell>() => R;
      _sharedSecureFieldEditor<R = unknown>(): R;
    }
  }
}

declare const NSSecureTextFieldCell: cocoa.classes.NSSecureTextFieldCell;
