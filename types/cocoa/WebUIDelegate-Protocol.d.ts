/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebUIDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    webViewContentRect<R = cocoa.CGRect, P0 = cocoa.WebView>(_webViewContentRect: P0): R;
    webView_setContentRect<R = void, P0 = cocoa.WebView, P1 = cocoa.CGRect>(_webView: P0, _setContentRect: P1): R;
    webView_runJavaScriptTextInputPanelWithPrompt_defaultText<R = cocoa.NSString, P0 = cocoa.WebView, P1 = cocoa.NSString, P2 = cocoa.NSString>(_webView: P0, _runJavaScriptTextInputPanelWithPrompt: P1, _defaultText: P2): R;
    webView_runJavaScriptConfirmPanelWithMessage<R = boolean, P0 = cocoa.WebView, P1 = cocoa.NSString>(_webView: P0, _runJavaScriptConfirmPanelWithMessage: P1): R;
    webView_runJavaScriptAlertPanelWithMessage<R = void, P0 = cocoa.WebView, P1 = cocoa.NSString>(_webView: P0, _runJavaScriptAlertPanelWithMessage: P1): R;
    webView_drawFooterInRect<R = void, P0 = cocoa.WebView, P1 = cocoa.CGRect>(_webView: P0, _drawFooterInRect: P1): R;
    webView_drawHeaderInRect<R = void, P0 = cocoa.WebView, P1 = cocoa.CGRect>(_webView: P0, _drawHeaderInRect: P1): R;
    webViewFooterHeight<R = number, P0 = cocoa.WebView>(_webViewFooterHeight: P0): R;
    webViewHeaderHeight<R = number, P0 = cocoa.WebView>(_webViewHeaderHeight: P0): R;
    webView_printFrameView<R = void, P0 = cocoa.WebView, P1 = cocoa.WebFrameView>(_webView: P0, _printFrameView: P1): R;
    webView_willPerformDragSourceAction_fromPoint_withPasteboard<R = void, P0 = cocoa.WebView, P1 = number, P2 = cocoa.CGPoint, P3 = cocoa.NSPasteboard>(_webView: P0, _willPerformDragSourceAction: P1, _fromPoint: P2, _withPasteboard: P3): R;
    webView_dragSourceActionMaskForPoint<R = number, P0 = cocoa.WebView, P1 = cocoa.CGPoint>(_webView: P0, _dragSourceActionMaskForPoint: P1): R;
    webView_willPerformDragDestinationAction_forDraggingInfo<R = void, P0 = cocoa.WebView, P1 = number, P2 = cocoa.NSDraggingInfo>(_webView: P0, _willPerformDragDestinationAction: P1, _forDraggingInfo: P2): R;
    webView_dragDestinationActionMaskForDraggingInfo<R = number, P0 = cocoa.WebView, P1 = cocoa.NSDraggingInfo>(_webView: P0, _dragDestinationActionMaskForDraggingInfo: P1): R;
    webView_shouldPerformAction_fromSender<R = boolean, P0 = cocoa.WebView, P1 = string, P2 = unknown>(_webView: P0, _shouldPerformAction: P1, _fromSender: P2): R;
    webView_validateUserInterfaceItem_defaultValidation<R = boolean, P0 = cocoa.WebView, P1 = cocoa.NSValidatedUserInterfaceItem, P2 = boolean>(_webView: P0, _validateUserInterfaceItem: P1, _defaultValidation: P2): R;
    webView_contextMenuItemsForElement_defaultMenuItems<R = cocoa.NSArray, P0 = cocoa.WebView, P1 = cocoa.NSDictionary, P2 = cocoa.NSArray>(_webView: P0, _contextMenuItemsForElement: P1, _defaultMenuItems: P2): R;
    webView_mouseDidMoveOverElement_modifierFlags<R = void, P0 = cocoa.WebView, P1 = cocoa.NSDictionary, P2 = number>(_webView: P0, _mouseDidMoveOverElement: P1, _modifierFlags: P2): R;
    webView_runOpenPanelForFileButtonWithResultListener_allowMultipleFiles<R = void, P0 = cocoa.WebView, P1 = cocoa.WebOpenPanelResultListener, P2 = boolean>(_webView: P0, _runOpenPanelForFileButtonWithResultListener: P1, _allowMultipleFiles: P2): R;
    webView_runOpenPanelForFileButtonWithResultListener<R = void, P0 = cocoa.WebView, P1 = cocoa.WebOpenPanelResultListener>(_webView: P0, _runOpenPanelForFileButtonWithResultListener: P1): R;
    webView_runBeforeUnloadConfirmPanelWithMessage_initiatedByFrame<R = boolean, P0 = cocoa.WebView, P1 = cocoa.NSString, P2 = cocoa.WebFrame>(_webView: P0, _runBeforeUnloadConfirmPanelWithMessage: P1, _initiatedByFrame: P2): R;
    webView_runJavaScriptTextInputPanelWithPrompt_defaultText_initiatedByFrame<R = cocoa.NSString, P0 = cocoa.WebView, P1 = cocoa.NSString, P2 = cocoa.NSString, P3 = cocoa.WebFrame>(_webView: P0, _runJavaScriptTextInputPanelWithPrompt: P1, _defaultText: P2, _initiatedByFrame: P3): R;
    webView_runJavaScriptConfirmPanelWithMessage_initiatedByFrame<R = boolean, P0 = cocoa.WebView, P1 = cocoa.NSString, P2 = cocoa.WebFrame>(_webView: P0, _runJavaScriptConfirmPanelWithMessage: P1, _initiatedByFrame: P2): R;
    webView_runJavaScriptAlertPanelWithMessage_initiatedByFrame<R = void, P0 = cocoa.WebView, P1 = cocoa.NSString, P2 = cocoa.WebFrame>(_webView: P0, _runJavaScriptAlertPanelWithMessage: P1, _initiatedByFrame: P2): R;
    webViewFrame<R = cocoa.CGRect, P0 = cocoa.WebView>(_webViewFrame: P0): R;
    webView_setFrame<R = void, P0 = cocoa.WebView, P1 = cocoa.CGRect>(_webView: P0, _setFrame: P1): R;
    webView_setResizable<R = void, P0 = cocoa.WebView, P1 = boolean>(_webView: P0, _setResizable: P1): R;
    webViewIsResizable<R = boolean, P0 = cocoa.WebView>(_webViewIsResizable: P0): R;
    webView_setStatusBarVisible<R = void, P0 = cocoa.WebView, P1 = boolean>(_webView: P0, _setStatusBarVisible: P1): R;
    webViewIsStatusBarVisible<R = boolean, P0 = cocoa.WebView>(_webViewIsStatusBarVisible: P0): R;
    webView_setToolbarsVisible<R = void, P0 = cocoa.WebView, P1 = boolean>(_webView: P0, _setToolbarsVisible: P1): R;
    webViewAreToolbarsVisible<R = boolean, P0 = cocoa.WebView>(_webViewAreToolbarsVisible: P0): R;
    webViewStatusText<R = cocoa.NSString, P0 = cocoa.WebView>(_webViewStatusText: P0): R;
    webView_setStatusText<R = void, P0 = cocoa.WebView, P1 = cocoa.NSString>(_webView: P0, _setStatusText: P1): R;
    webView_makeFirstResponder<R = void, P0 = cocoa.WebView, P1 = cocoa.NSResponder>(_webView: P0, _makeFirstResponder: P1): R;
    webViewFirstResponder<R = cocoa.NSResponder, P0 = cocoa.WebView>(_webViewFirstResponder: P0): R;
    webViewUnfocus<R = void, P0 = cocoa.WebView>(_webViewUnfocus: P0): R;
    webViewFocus<R = void, P0 = cocoa.WebView>(_webViewFocus: P0): R;
    webViewClose<R = void, P0 = cocoa.WebView>(_webViewClose: P0): R;
    webViewRunModal<R = void, P0 = cocoa.WebView>(_webViewRunModal: P0): R;
    webView_createWebViewModalDialogWithRequest<R = cocoa.WebView, P0 = cocoa.WebView, P1 = cocoa.NSURLRequest>(_webView: P0, _createWebViewModalDialogWithRequest: P1): R;
    webViewShow<R = void, P0 = cocoa.WebView>(_webViewShow: P0): R;
    webView_createWebViewWithRequest<R = cocoa.WebView, P0 = cocoa.WebView, P1 = cocoa.NSURLRequest>(_webView: P0, _createWebViewWithRequest: P1): R;
  }
  namespace classes {
    export interface WebUIDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const WebUIDelegateProtocol: cocoa.classes.WebUIDelegateProtocol;
