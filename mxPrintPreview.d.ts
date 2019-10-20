/**
 * Class: mxPrintPreview
 *
 * Implements printing of a diagram across multiple pages. The following opens
 * a print preview for an existing graph:
 *
 * (code)
 * var preview = new mxPrintPreview(graph);
 * preview.open();
 * (end)
 *
 * Use <mxUtils.getScaleForPageCount> as follows in order to print the graph
 * across a given number of pages:
 *
 * (code)
 * var pageCount = mxUtils.prompt('Enter page count', '1');
 *
 * if (pageCount != null)
 * {
 *   var scale = mxUtils.getScaleForPageCount(pageCount, graph);
 *   var preview = new mxPrintPreview(graph, scale);
 *   preview.open();
 * }
 * (end)
 *
 * Additional pages:
 *
 * To add additional pages before and after the output, <getCoverPages> and
 * <getAppendices> can be used, respectively.
 *
 * (code)
 * var preview = new mxPrintPreview(graph, 1);
 *
 * preview.getCoverPages = function(w, h)
 * {
 *   return [this.renderPage(w, h, 0, 0, mxUtils.bind(this, function(div)
 *   {
 *     div.innerHTML = '<div style="position:relative;margin:4px;">Cover Page</p>'
 *   }))];
 * };
 *
 * preview.getAppendices = function(w, h)
 * {
 *   return [this.renderPage(w, h, 0, 0, mxUtils.bind(this, function(div)
 *   {
 *     div.innerHTML = '<div style="position:relative;margin:4px;">Appendix</p>'
 *   }))];
 * };
 *
 * preview.open();
 * (end)
 *
 * CSS:
 *
 * The CSS from the original page is not carried over to the print preview.
 * To add CSS to the page, use the css argument in the <open> function or
 * override <writeHead> to add the respective link tags as follows:
 *
 * (code)
 * var writeHead = preview.writeHead;
 * preview.writeHead = function(doc, css)
 * {
 *   writeHead.apply(this, arguments);
 *   doc.writeln('<link rel="stylesheet" type="text/css" href="style.css">');
 * };
 * (end)
 *
 * Padding:
 *
 * To add a padding to the page in the preview (but not the print output), use
 * the following code:
 *
 * (code)
 * preview.writeHead = function(doc)
 * {
 *   writeHead.apply(this, arguments);
 *
 *   doc.writeln('<style type="text/css">');
 *   doc.writeln('@media screen {');
 *   doc.writeln('  body > div { padding-top:30px;padding-left:40px;box-sizing:content-box; }');
 *   doc.writeln('}');
 *   doc.writeln('</style>');
 * };
 * (end)
 *
 * Headers:
 *
 * Apart from setting the title argument in the mxPrintPreview constructor you
 * can override <renderPage> as follows to add a header to any page:
 *
 * (code)
 * var oldRenderPage = mxPrintPreview.prototype.renderPage;
 * mxPrintPreview.prototype.renderPage = function(w, h, x, y, content, pageNumber)
 * {
 *   var div = oldRenderPage.apply(this, arguments);
 *
 *   var header = document.createElement('div');
 *   header.style.position = 'absolute';
 *   header.style.top = '0px';
 *   header.style.width = '100%';
 *   header.style.textAlign = 'right';
 *   mxUtils.write(header, 'Your header here');
 *   div.firstChild.appendChild(header);
 *
 *   return div;
 * };
 * (end)
 *
 * The pageNumber argument contains the number of the current page, starting at
 * 1. To display a header on the first page only, check pageNumber and add a
 * vertical offset in the constructor call for the height of the header.
 *
 * Page Format:
 *
 * For landscape printing, use <mxConstants.PAGE_FORMAT_A4_LANDSCAPE> as
 * the pageFormat in <mxUtils.getScaleForPageCount> and <mxPrintPreview>.
 * Keep in mind that one can not set the defaults for the print dialog
 * of the operating system from JavaScript so the user must manually choose
 * a page format that matches this setting.
 *
 * You can try passing the following CSS directive to <open> to set the
 * page format in the print dialog to landscape. However, this CSS
 * directive seems to be ignored in most major browsers, including IE.
 *
 * (code)
 */
declare class mxPrintPreview {
    constructor(graph: Graph, scale: any, pageFormat: any, border: any, x0: any, y0: any, borderColor: string, title: string, pageSelector: any);
    graph: Graph;
    scale: any;
    border: any;
    pageFormat: any;
    title: string;
    x0: any;
    y0: any;
    borderColor: string;
    pageSelector: any;
    /**
     * Variable: marginTop
     *
     * The margin at the top of the page (number). Default is 0.
     */
    marginTop: number;
    /**
     * Variable: marginBottom
     *
     * The margin at the bottom of the page (number). Default is 0.
     */
    marginBottom: number;
    /**
     * Variable: autoOrigin
     *
     * Specifies if the origin should be automatically computed based on the top,
     * left corner of the actual diagram contents. The required offset will be added
     * to <x0> and <y0> in <open>. Default is true.
     * @example true
     */
    autoOrigin: boolean;
    /**
     * Variable: printOverlays
     *
     * Specifies if overlays should be printed. Default is false.
     */
    printOverlays: boolean;
    /**
     * Variable: printControls
     *
     * Specifies if controls (such as folding icons) should be printed. Default is
     * false.
     */
    printControls: boolean;
    /**
     * Variable: printBackgroundImage
     *
     * Specifies if the background image should be printed. Default is false.
     */
    printBackgroundImage: boolean;
    /**
     * Variable: backgroundColor
     *
     * Holds the color value for the page background color. Default is #ffffff.
     * @example #ffffff
     */
    backgroundColor: string;
    /**
     * Variable: wnd
     *
     * Reference to the preview window.
     */
    wnd: any;
    /**
     * Variable: targetWindow
     *
     * Assign any window here to redirect the rendering in <open>.
     */
    targetWindow: any;
    /**
     * Variable: pageCount
     *
     * Holds the actual number of pages in the preview.
     */
    pageCount: number;
    /**
     * Variable: clipping
     *
     * Specifies is clipping should be used to avoid creating too many cell states
     * in large diagrams. The bounding box of the cells in the original diagram is
     * used if this is enabled. Default is true.
     * @example true
     */
    clipping: boolean;
    /**
     * Function: getWindow
     *
     * Returns <wnd>.
     */
    getWindow(): any;
    /**
     * Function: getDocType
     *
     * Returns the string that should go before the HTML tag in the print preview
     * page. This implementation returns an X-UA meta tag for IE5 in quirks mode,
     * IE8 in IE8 standards mode and edge in IE9 standards mode.
     */
    getDoctype(): any;
    /**
     * Function: appendGraph
     *
     * Adds the given graph to the existing print preview.
     *
     * Parameters:
     *
     * css - Optional CSS string to be used in the head section.
     * targetWindow - Optional window that should be used for rendering. If
     * this is specified then no HEAD tag, CSS and BODY tag will be written.
     */
    appendGraph(graph: Graph, scale: any, x0: any, y0: any, forcePageBreaks: any, keepOpen: any): void;
    /**
     * Function: open
     *
     * Shows the print preview window. The window is created here if it does
     * not exist.
     *
     * Parameters:
     *
     * css - Optional CSS string to be used in the head section.
     * targetWindow - Optional window that should be used for rendering. If
     * this is specified then no HEAD tag, CSS and BODY tag will be written.
     */
    open(css: any, targetWindow: any, forcePageBreaks: any, keepOpen: any): any;
    /**
     * Function: addPageBreak
     *
     * Adds a page break to the given document.
     */
    addPageBreak(doc: any): void;
    /**
     * Function: closeDocument
     *
     * Writes the closing tags for body and page after calling <writePostfix>.
     */
    closeDocument(): void;
    /**
     * Function: writeHead
     *
     * Writes the HEAD section into the given document, without the opening
     * and closing HEAD tags.
     */
    writeHead(doc: any, css: any): void;
    /**
     * Function: writePostfix
     *
     * Called before closing the body of the page. This implementation is empty.
     */
    writePostfix(doc: any): void;
    /**
     * Function: createPageSelector
     *
     * Creates the page selector table.
     */
    createPageSelector(vpages: any, hpages: any): any;
    /**
     * Function: renderPage
     *
     * Creates a DIV that prints a single page of the given
     * graph using the given scale and returns the DIV that
     * represents the page.
     *
     * Parameters:
     *
     * w - Width of the page in pixels.
     * h - Height of the page in pixels.
     * dx - Optional horizontal page offset in pixels (used internally).
     * dy - Optional vertical page offset in pixels (used internally).
     * content - Callback that adds the HTML content to the inner div of a page.
     * Takes the inner div as the argument.
     * pageNumber - Integer representing the page number.
     */
    renderPage(w: number, h: number, dx: number, dy: number, content: any, pageNumber: any): any;
    /**
     * Function: getRoot
     *
     * Returns the root cell for painting the graph.
     */
    getRoot(): any;
    /**
     * Function: addGraphFragment
     *
     * Adds a graph fragment to the given div.
     *
     * Parameters:
     *
     * dx - Horizontal translation for the diagram.
     * dy - Vertical translation for the diagram.
     * scale - Scale for the diagram.
     * pageNumber - Number of the page to be rendered.
     * div - Div that contains the output.
     * clip - Contains the clipping rectangle as an <mxRectangle>.
     */
    addGraphFragment(dx: number, dy: number, scale: any, pageNumber: any, div: HTMLElement, clip: any): any;
    /**
     * Function: getLinkForCellState
     *
     * Returns the link for the given cell state. This returns null.
     */
    getLinkForCellState(state: object): any;
    /**
     * Function: insertBackgroundImage
     *
     * Inserts the background image into the given div.
     */
    insertBackgroundImage(div: HTMLElement, dx: number, dy: number): void;
    /**
     * Function: getCoverPages
     *
     * Returns the pages to be added before the print output. This returns null.
     */
    getCoverPages(): any;
    /**
     * Function: getAppendices
     *
     * Returns the pages to be added after the print output. This returns null.
     */
    getAppendices(): any;
    /**
     * Function: print
     *
     * Opens the print preview and shows the print dialog.
     *
     * Parameters:
     *
     * css - Optional CSS string to be used in the head section.
     */
    print(css: any): void;
    /**
     * Function: close
     *
     * Closes the print preview window.
     */
    close(): void;
}
