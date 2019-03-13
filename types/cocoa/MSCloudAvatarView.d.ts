/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudAvatarView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    loadAvatar<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    loadView<R = void>(): R;
    imageView<R = NSImageView>(): R;
    setImageView<R = void, P0 = NSImageView>(_v: P0): R;
    avatar<R = SCKAvatar>(): R;
    setAvatar<R = void, P0 = SCKAvatar>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudAvatarView<T = any> extends NSView {
      alloc<R = MSCloudAvatarView>(): R;
      new: <R = MSCloudAvatarView>() => R;
    }
  }
}

declare const MSCloudAvatarView: cocoa.classes.MSCloudAvatarView;
