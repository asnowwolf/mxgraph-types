/**
 * Class: mxOutline
 *
 * Implements an outline (aka overview) for a graph. Set <updateOnPan> to true
 * to enable updates while the source graph is panning.
 *
 * Example:
 *
 * (code)
 * var outline = new mxOutline(graph, div);
 * (end)
 *
 * If an outline is used in an <mxWindow> in IE8 standards mode, the following
 * code makes sure that the shadow filter is not inherited and that any
 * transparent elements in the graph do not show the page background, but the
 * background of the graph container.
 *
 * (code)
 * if (document.documentMode == 8)
 * {
 *   container.style.filter = 'progid:DXImageTransform.Microsoft.alpha(opacity=100)';
 * }
 * (end)
 *
 * To move the graph to the top, left corner the following code can be used.
 *
 * (code)
 * var scale = graph.view.scale;
 * var bounds = graph.getGraphBounds();
 * graph.view.setTranslate(-bounds.x / scale, -bounds.y / scale);
 * (end)
 *
 * To toggle the suspended mode, the following can be used.
 *
 * (code)
 * outline.suspended = !outln.suspended;
 * if (!outline.suspended)
 * {
 *   outline.update(true);
 * }
 * (end)
 *
 * Constructor: mxOutline
 *
 * Constructs a new outline for the specified graph inside the given
 * container.
 *
 * Parameters:
 *
 * source - <mxGraph> to create the outline for.
 * container - DOM node that will contain the outline.
 */
declare class mxOutline {
    constructor(source: any, container: HTMLElement);
    source: any;
    /**
     * Function: outline
     *
     * Reference to the <mxGraph> that renders the outline.
     */
    outline: any;
    /**
     * Function: graphRenderHint
     *
     * Renderhint to be used for the outline graph. Default is faster.
     */
    graphRenderHint: any;
    /**
     * Variable: enabled
     *
     * Specifies if events are handled. Default is true.
     * @example true
     */
    enabled: boolean;
    /**
     * Variable: showViewport
     *
     * Specifies a viewport rectangle should be shown. Default is true.
     * @example true
     */
    showViewport: boolean;
    /**
     * Variable: border
     *
     * Border to be added at the bottom and right. Default is 10.
     * @example 10
     */
    border: number;
    /**
     * Variable: enabled
     *
     * Specifies the size of the sizer handler. Default is 8.
     * @example 8
     */
    sizerSize: number;
    /**
     * Variable: labelsVisible
     *
     * Specifies if labels should be visible in the outline. Default is false.
     */
    labelsVisible: boolean;
    /**
     * Variable: updateOnPan
     *
     * Specifies if <update> should be called for <mxEvent.PAN> in the source
     * graph. Default is false.
     */
    updateOnPan: boolean;
    /**
     * Variable: sizerImage
     *
     * Optional <mxImage> to be used for the sizer. Default is null.
     */
    sizerImage: any;
    /**
     * Variable: minScale
     *
     * Minimum scale to be used. Default is 0.001.
     * @example 0.0001
     */
    minScale: number;
    /**
     * Variable: suspended
     *
     * Optional boolean flag to suspend updates. Default is false. This flag will
     * also suspend repaints of the outline. To toggle this switch, use the
     * following code.
     *
     * (code)
     * nav.suspended = !nav.suspended;
     *
     * if (!nav.suspended)
     * {
     *   nav.update(true);
     * }
     * (end)
     */
    suspended: boolean;
    /**
     * Variable: forceVmlHandles
     *
     * Specifies if VML should be used to render the handles in this control. This
     * is true for IE8 standards mode and false for all other browsers and modes.
     * This is a workaround for rendering issues of HTML elements over elements
     * with filters in IE 8 standards mode.
     */
    forceVmlHandles: any;
    updateHandler: Function;
    panHandler: Function;
    refreshHandler: Function;
    bounds: mxRectangle;
    selectionBorder: any;
    sizer: any;
    zoom: any;
    startX: any;
    startY: any;
    /**
     * @example true
     */
    active: boolean;
    dx0: any;
    dy0: any;
    index: number;
    /**
     * Function: createGraph
     *
     * Creates the <mxGraph> used in the outline.
     */
    createGraph(container: HTMLElement): any;
    /**
     * Function: init
     *
     * Initializes the outline inside the given container.
     */
    init(container: HTMLElement): void;
    /**
     * Function: isEnabled
     *
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;
    /**
     * Function: setEnabled
     *
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     *
     * Parameters:
     *
     * value - Boolean that specifies the new enabled state.
     */
    setEnabled(value: any): void;
    /**
     * Function: setZoomEnabled
     *
     * Enables or disables the zoom handling by showing or hiding the respective
     * handle.
     *
     * Parameters:
     *
     * value - Boolean that specifies the new enabled state.
     */
    setZoomEnabled(value: any): void;
    /**
     * Function: refresh
     *
     * Invokes <update> and revalidate the outline. This method is deprecated.
     */
    refresh(): void;
    /**
     * Function: createSizer
     *
     * Creates the shape used as the sizer.
     */
    createSizer(): any;
    /**
     * Function: getSourceContainerSize
     *
     * Returns the size of the source container.
     */
    getSourceContainerSize(): any;
    /**
     * Function: getOutlineOffset
     *
     * Returns the offset for drawing the outline graph.
     */
    getOutlineOffset(scale: any): any;
    /**
     * Function: getOutlineOffset
     *
     * Returns the offset for drawing the outline graph.
     */
    getSourceGraphBounds(): any;
    /**
     * Function: update
     *
     * Updates the outline.
     */
    update(revalidate: any): void;
    /**
     * Function: mouseDown
     *
     * Handles the event by starting a translation or zoom.
     */
    mouseDown(sender: any, me: any): void;
    /**
     * Function: mouseMove
     *
     * Handles the event by previewing the viewrect in <graph> and updating the
     * rectangle that represents the viewrect in the outline.
     */
    mouseMove(sender: any, me: any): void;
    /**
     * Function: getTranslateForEvent
     *
     * Gets the translate for the given mouse event. Here is an example to limit
     * the outline to stay within positive coordinates:
     *
     * (code)
     * outline.getTranslateForEvent = function(me)
     * {
     *   var pt = new mxPoint(me.getX() - this.startX, me.getY() - this.startY);
     *
     *   if (!this.zoom)
     *   {
     *     var tr = this.source.view.translate;
     *     pt.x = Math.max(tr.x * this.outline.view.scale, pt.x);
     *     pt.y = Math.max(tr.y * this.outline.view.scale, pt.y);
     *   }
     *
     *   return pt;
     * };
     * (end)
     */
    getTranslateForEvent(me: any): any;
    /**
     * Function: mouseUp
     *
     * Handles the event by applying the translation or zoom to <graph>.
     */
    mouseUp(sender: any, me: any): void;
    /**
     * Function: destroy
     *
     * Destroy this outline and removes all listeners from <source>.
     */
    destroy(): void;
}
