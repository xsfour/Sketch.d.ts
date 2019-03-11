/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleShadowInspectorViewController<T = any> extends cocoa.MSMultipleColorStylePartInspectorViewController {
    views<R = unknown>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    buttonsTrailingConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setButtonsTrailingConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    spreadField<R = cocoa.MSTextLabelForUpDownField>(): R;
    setSpreadField<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    blurRadiusField<R = cocoa.MSTextLabelForUpDownField>(): R;
    setBlurRadiusField<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    yOffsetField<R = cocoa.MSTextLabelForUpDownField>(): R;
    setYOffsetField<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    xOffsetField<R = cocoa.MSTextLabelForUpDownField>(): R;
    setXOffsetField<R = void, P0 = cocoa.MSTextLabelForUpDownField>(_v: P0): R;
    addStylePartButton<R = cocoa.NSButton>(): R;
    setAddStylePartButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSMultipleShadowInspectorViewController<T = any> extends cocoa.classes.MSMultipleColorStylePartInspectorViewController {
      alloc<R = MSMultipleShadowInspectorViewController>(): R;
      new: <R = MSMultipleShadowInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleShadowInspectorViewController: cocoa.classes.MSMultipleShadowInspectorViewController;
