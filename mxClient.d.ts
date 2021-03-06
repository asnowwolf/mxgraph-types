/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */

declare const mxClient: {
  VERSION: string;
  IS_IE: boolean;
  IS_IE6: boolean;
  IS_IE11: boolean;
  IS_EDGE: boolean;
  IS_QUIRKS: boolean;
  IS_EM: boolean;
  VML_PREFIX: string;
  OFFICE_PREFIX: string;
  IS_NS: boolean;
  IS_OP: boolean;
  IS_OT: boolean;
  IS_SF: boolean;
  IS_IOS: boolean;
  IS_GC: boolean;
  IS_CHROMEAPP: boolean;
  IS_FF: boolean;
  IS_MT: boolean;
  IS_SVG: boolean;
  NO_FO: boolean;
  IS_VML: boolean;
  IS_WIN: boolean;
  IS_MAC: boolean;
  IS_TOUCH: boolean;
  IS_POINTER: boolean;
  IS_LOCAL: boolean;
  isBrowserSupported(): boolean;
  link(rel: any, href: any, doc?: any): void;
  include(src: any): void;
  dispose(): void;
  basePath: any;
  imageBasePath: any;
  language: any;
  languages: any;
  defaultLanguage: any;
};

declare const mxBasePath: string;
declare const RESOURCE_BASE: string;
declare const STYLE_PATH: string;
declare const mxLanguage: string;
