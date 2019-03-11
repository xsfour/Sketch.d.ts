/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionPresentation<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithMode_matchingExtensionAttributes_titleExtensionAttributeKey_iconNameExtensionAttributeKey_colorNameExtensionAttributeKey_legacyServicePresentationMode<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithMode: P0, _matchingExtensionAttributes: P1, _titleExtensionAttributeKey: P2, _iconNameExtensionAttributeKey: P3, _colorNameExtensionAttributeKey: P4, _legacyServicePresentationMode: P5): R;
    legacyServicePresentationMode<R = cocoa.NSString>(): R;
    colorNameExtensionAttributeKey<R = cocoa.NSString>(): R;
    iconNameExtensionAttributeKey<R = cocoa.NSString>(): R;
    titleExtensionAttributeKey<R = cocoa.NSString>(): R;
    matchingExtensionAttributes<R = cocoa.NSDictionary>(): R;
    mode<R = cocoa.NSString>(): R;
    preferencesNotificationName<R = cocoa.NSString>(): R;
    activePreferencesKey<R = cocoa.NSString>(): R;
    orderingPreferencesKey<R = cocoa.NSString>(): R;
    preferencesDomain<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface _NSQuickActionPresentation<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSQuickActionPresentation>(): R;
      new: <R = _NSQuickActionPresentation>() => R;
      presentationForMode<R = unknown, P0 = unknown>(_presentationForMode: P0): R;
    }
  }
}
