/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionPresentation<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithMode_matchingExtensionAttributes_titleExtensionAttributeKey_iconNameExtensionAttributeKey_colorNameExtensionAttributeKey_legacyServicePresentationMode<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithMode: P0, _matchingExtensionAttributes: P1, _titleExtensionAttributeKey: P2, _iconNameExtensionAttributeKey: P3, _colorNameExtensionAttributeKey: P4, _legacyServicePresentationMode: P5): R;
    legacyServicePresentationMode<R = NSString>(): R;
    colorNameExtensionAttributeKey<R = NSString>(): R;
    iconNameExtensionAttributeKey<R = NSString>(): R;
    titleExtensionAttributeKey<R = NSString>(): R;
    matchingExtensionAttributes<R = NSDictionary>(): R;
    mode<R = NSString>(): R;
    preferencesNotificationName<R = NSString>(): R;
    activePreferencesKey<R = NSString>(): R;
    orderingPreferencesKey<R = NSString>(): R;
    preferencesDomain<R = NSString>(): R;
  }
  namespace classes {
    export interface _NSQuickActionPresentation<T = any> extends NSObject {
      alloc<R = _NSQuickActionPresentation>(): R;
      new: <R = _NSQuickActionPresentation>() => R;
      presentationForMode<R = unknown, P0 = unknown>(_presentationForMode: P0): R;
    }
  }
}
