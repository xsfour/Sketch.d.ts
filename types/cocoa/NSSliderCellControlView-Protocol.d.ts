/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCellControlViewProtocol<T = any> {
    sliderCellDidInvalidateComponentRects<R = void, P0 = NSSliderCell>(_sliderCellDidInvalidateComponentRects: P0): R;
    sliderCellDidChangeSliderType<R = void, P0 = NSSliderCell>(_sliderCellDidChangeSliderType: P0): R;
    sliderCellDidChangeControlSize<R = void, P0 = NSSliderCell>(_sliderCellDidChangeControlSize: P0): R;
    sliderCellDidChangeTickMarkPosition<R = void, P0 = NSSliderCell>(_sliderCellDidChangeTickMarkPosition: P0): R;
    sliderCellDidChangeNumberOfTickMarks_oldNumberOfTickMarks<R = void, P0 = NSSliderCell, P1 = number>(_sliderCellDidChangeNumberOfTickMarks: P0, _oldNumberOfTickMarks: P1): R;
    sliderCellDidChangeVertical<R = void, P0 = NSSliderCell>(_sliderCellDidChangeVertical: P0): R;
  }
  namespace classes {
    export interface NSSliderCellControlViewProtocol<T = any> {  }
  }
}
