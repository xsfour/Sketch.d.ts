/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes<T = any> extends cocoa.NSTouchBarCustomizationPreviewLayoutAttributes {
    rightCornerRadius<R = number>(): R;
    setRightCornerRadius<R = void, P0 = number>(_v: P0): R;
    leftCornerRadius<R = number>(): R;
    setLeftCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes<T = any> extends cocoa.classes.NSTouchBarCustomizationPreviewLayoutAttributes {  }
  }
}

declare const NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes: cocoa.classes.NSTouchBarCustomizationPreviewMiniControlStripLayoutAttributes;
