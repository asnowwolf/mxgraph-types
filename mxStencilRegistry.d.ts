declare class MxStencilRegistry {
  stencils: { [key: string]: mxStencil };

  addStencil(name: string, stencil: mxStencil): void;

  getStencil(name: string): mxStencil;
}

declare const mxStencilRegistry: MxStencilRegistry;
