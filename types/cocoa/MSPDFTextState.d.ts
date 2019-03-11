/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFTextState<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    appendText<R = void, P0 = unknown>(_appendText: P0): R;
    attributes<R = unknown>(): R;
    setTransform_resettingLineTransform<R = void, P0 = unknown, P1 = boolean>(_setTransform: P0, _resettingLineTransform: P1): R;
    resetRenderingTransform<R = void>(): R;
    shouldClip<R = boolean>(): R;
    shouldStroke<R = boolean>(): R;
    shouldFill<R = boolean>(): R;
    wordSpacing<R = number>(): R;
    setWordSpacing<R = void, P0 = number>(_v: P0): R;
    transform<R = cocoa.NSAffineTransform>(): R;
    setTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    text<R = cocoa.NSMutableAttributedString>(): R;
    setText<R = void, P0 = cocoa.NSMutableAttributedString>(_v: P0): R;
    state<R = cocoa.MSPDFState>(): R;
    setState<R = void, P0 = cocoa.MSPDFState>(_v: P0): R;
    size<R = number>(): R;
    setSize<R = void, P0 = number>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    rise<R = number>(): R;
    setRise<R = void, P0 = number>(_v: P0): R;
    renderingTransform<R = cocoa.NSAffineTransform>(): R;
    setRenderingTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
    mode<R = number>(): R;
    setMode<R = void, P0 = number>(_v: P0): R;
    lineTransform<R = cocoa.NSAffineTransform>(): R;
    setLineTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    leading<R = number>(): R;
    setLeading<R = void, P0 = number>(_v: P0): R;
    fontInfo<R = cocoa.NSDictionary>(): R;
    setFontInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    fontName<R = cocoa.NSString>(): R;
    setFontName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    font<R = cocoa.NSFont>(): R;
    setFont<R = void, P0 = cocoa.NSFont>(_v: P0): R;
    characterSpacing<R = number>(): R;
    setCharacterSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSPDFTextState<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSPDFTextState>(): R;
      new: <R = MSPDFTextState>() => R;
      textStateWithState<R = unknown, P0 = unknown>(_textStateWithState: P0): R;
    }
  }
}

declare const MSPDFTextState: cocoa.classes.MSPDFTextState;
