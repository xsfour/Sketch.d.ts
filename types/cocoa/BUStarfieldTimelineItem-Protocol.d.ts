/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BUStarfieldTimelineItemProtocol<T = any> extends NSObjectProtocol {
    timelineItemDate<R = NSDate>(): R;
    timelineItemType<R = number>(): R;
    timelineItemIsDivider<R = boolean>(): R;
    timelineItemSelectable<R = boolean>(): R;
    timelineItemEnabled<R = boolean>(): R;
    timelineItemFocusedTitle<R = NSString>(): R;
    timelineItemTitle<R = NSString>(): R;
  }
  namespace classes {
    export interface BUStarfieldTimelineItemProtocol<T = any> extends NSObjectProtocol {  }
  }
}
