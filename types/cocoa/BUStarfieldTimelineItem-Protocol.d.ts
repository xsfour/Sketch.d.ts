/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BUStarfieldTimelineItemProtocol<T = any> extends cocoa.NSObjectProtocol {
    timelineItemDate<R = cocoa.NSDate>(): R;
    timelineItemType<R = number>(): R;
    timelineItemIsDivider<R = boolean>(): R;
    timelineItemSelectable<R = boolean>(): R;
    timelineItemEnabled<R = boolean>(): R;
    timelineItemFocusedTitle<R = cocoa.NSString>(): R;
    timelineItemTitle<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface BUStarfieldTimelineItemProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BUStarfieldTimelineItemProtocol: cocoa.classes.BUStarfieldTimelineItemProtocol;
