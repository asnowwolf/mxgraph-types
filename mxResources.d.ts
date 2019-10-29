declare class MxResources {
  resources: object;
  extension: string;
  resourcesEncoded: boolean;
  loadDefaultBundle: boolean;
  loadSpecialBundle: boolean;

  isLanguageSupported(lan: string): boolean;

  getDefaultBundle(basename: string, lan: string): string | null;

  getSpecialBundle(basename: string, lan: string): string | null;

  add(basename: string, lan: string, callback: Function): void;

  parse(text: string): void;

  get(key: string, params: string[], defaultValue: string): string;

  replacePlaceholders(value: string, params: string[]): string;

  loadResources(callback: Function): void;
}

declare const mxResources: MxResources;
