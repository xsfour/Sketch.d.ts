/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiledRendererHostViewProtocol<T = any> {
    driver<R = cocoa.MSRenderingDriver>(): R;
    scheduleRedraw<R = void>(): R;
  }
  namespace classes {
    export interface MSTiledRendererHostViewProtocol<T = any> {  }
  }
}

declare const MSTiledRendererHostViewProtocol: cocoa.classes.MSTiledRendererHostViewProtocol;
