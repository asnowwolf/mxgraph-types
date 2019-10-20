/**
 * Class: mxWindow
 *
 * Basic window inside a document.
 *
 * Examples:
 *
 * Creating a simple window.
 *
 * (code)
 * var tb = document.createElement('div');
 * var wnd = new mxWindow('Title', tb, 100, 100, 200, 200, true, true);
 * wnd.setVisible(true);
 * (end)
 *
 * Creating a window that contains an iframe.
 *
 * (code)
 * var frame = document.createElement('iframe');
 * frame.setAttribute('width', '192px');
 * frame.setAttribute('height', '172px');
 * frame.setAttribute('src', 'http://www.example.com/');
 * frame.style.backgroundColor = 'white';
 *
 * var w = document.body.clientWidth;
 * var h = (document.body.clientHeight || document.documentElement.clientHeight);
 * var wnd = new mxWindow('Title', frame, (w-200)/2, (h-200)/3, 200, 200);
 * wnd.setVisible(true);
 * (end)
 *
 * To limit the movement of a window, eg. to keep it from being moved beyond
 * the top, left corner the following method can be overridden (recommended):
 *
 * (code)
 * wnd.setLocation = function(x, y)
 * {
 *   x = Math.max(0, x);
 *   y = Math.max(0, y);
 *   mxWindow.prototype.setLocation.apply(this, arguments);
 * };
 * (end)
 *
 * Or the following event handler can be used:
 *
 * (code)
 * wnd.addListener(mxEvent.MOVE, function(e)
 * {
 *   wnd.setLocation(Math.max(0, wnd.getX()), Math.max(0, wnd.getY()));
 * });
 * (end)
 *
 * To keep a window inside the current window:
 *
 * (code)
 * mxEvent.addListener(window, 'resize', mxUtils.bind(this, function()
 * {
 *   var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 *   var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
 *
 *   var x = this.window.getX();
 *   var y = this.window.getY();
 *
 *   if (x + this.window.table.clientWidth > iw)
 *   {
 *     x = Math.max(0, iw - this.window.table.clientWidth);
 *   }
 *
 *   if (y + this.window.table.clientHeight > ih)
 *   {
 *     y = Math.max(0, ih - this.window.table.clientHeight);
 *   }
 *
 *   if (this.window.getX() != x || this.window.getY() != y)
 *   {
 *     this.window.setLocation(x, y);
 *   }
 * }));
 * (end)
 *
 * Event: mxEvent.MOVE_START
 *
 * Fires before the window is moved. The <code>event</code> property contains
 * the corresponding mouse event.
 *
 * Event: mxEvent.MOVE
 *
 * Fires while the window is being moved. The <code>event</code> property
 * contains the corresponding mouse event.
 *
 * Event: mxEvent.MOVE_END
 *
 * Fires after the window is moved. The <code>event</code> property contains
 * the corresponding mouse event.
 *
 * Event: mxEvent.RESIZE_START
 *
 * Fires before the window is resized. The <code>event</code> property contains
 * the corresponding mouse event.
 *
 * Event: mxEvent.RESIZE
 *
 * Fires while the window is being resized. The <code>event</code> property
 * contains the corresponding mouse event.
 *
 * Event: mxEvent.RESIZE_END
 *
 * Fires after the window is resized. The <code>event</code> property contains
 * the corresponding mouse event.
 *
 * Event: mxEvent.MAXIMIZE
 *
 * Fires after the window is maximized. The <code>event</code> property
 * contains the corresponding mouse event.
 *
 * Event: mxEvent.MINIMIZE
 *
 * Fires after the window is minimized. The <code>event</code> property
 * contains the corresponding mouse event.
 *
 * Event: mxEvent.NORMALIZE
 *
 * Fires after the window is normalized, that is, it returned from
 * maximized or minimized state. The <code>event</code> property contains the
 * corresponding mouse event.
 *
 * Event: mxEvent.ACTIVATE
 *
 * Fires after a window is activated. The <code>previousWindow</code> property
 * contains the previous window. The event sender is the active window.
 *
 * Event: mxEvent.SHOW
 *
 * Fires after the window is shown. This event has no properties.
 *
 * Event: mxEvent.HIDE
 *
 * Fires after the window is hidden. This event has no properties.
 *
 * Event: mxEvent.CLOSE
 *
 * Fires before the window is closed. The <code>event</code> property contains
 * the corresponding mouse event.
 *
 * Event: mxEvent.DESTROY
 *
 * Fires before the window is destroyed. This event has no properties.
 *
 * Constructor: mxWindow
 *
 * Constructs a new window with the given dimension and title to display
 * the specified content. The window elements use the given style as a
 * prefix for the classnames of the respective window elements, namely,
 * the window title and window pane. The respective postfixes are appended
 * to the given stylename as follows:
 *
 *   style - Base style for the window.
 *   style+Title - Style for the window title.
 *   style+Pane - Style for the window pane.
 *
 * The default value for style is mxWindow, resulting in the following
 * classnames for the window elements: mxWindow, mxWindowTitle and
 * mxWindowPane.
 *
 * If replaceNode is given then the window replaces the given DOM node in
 * the document.
 *
 * Parameters:
 *
 * title - String that represents the title of the new window.
 * content - DOM node that is used as the window content.
 * x - X-coordinate of the window location.
 * y - Y-coordinate of the window location.
 * width - Width of the window.
 * height - Optional height of the window. Default is to match the height
 * of the content at the specified width.
 * minimizable - Optional boolean indicating if the window is minimizable.
 * Default is true.
 * movable - Optional boolean indicating if the window is movable. Default
 * is true.
 * replaceNode - Optional DOM node that the window should replace.
 * style - Optional base classname for the window elements. Default is
 * mxWindow.
 */
declare class mxWindow {
    constructor(title: string, content: string, x: number, y: number, width: number, height: number, minimizable: boolean, movable: boolean, replaceNode: any, style: any);
    content: string;
    /**
     * Variable: closeImage
     *
     * URL of the image to be used for the close icon in the titlebar.
     */
    closeImage: string;
    /**
     * Variable: minimizeImage
     *
     * URL of the image to be used for the minimize icon in the titlebar.
     */
    minimizeImage: string;
    /**
     * Variable: normalizeImage
     *
     * URL of the image to be used for the normalize icon in the titlebar.
     */
    normalizeImage: string;
    /**
     * Variable: maximizeImage
     *
     * URL of the image to be used for the maximize icon in the titlebar.
     */
    maximizeImage: string;
    /**
     * Variable: normalizeImage
     *
     * URL of the image to be used for the resize icon.
     */
    resizeImage: string;
    /**
     * Variable: visible
     *
     * Boolean flag that represents the visible state of the window.
     */
    visible: boolean;
    /**
     * Variable: minimumSize
     *
     * <mxRectangle> that specifies the minimum width and height of the window.
     * Default is (50, 40).
     */
    minimumSize: mxRectangle;
    /**
     * Variable: destroyOnClose
     *
     * Specifies if the window should be destroyed when it is closed. If this
     * is false then the window is hidden using <setVisible>. Default is true.
     * @example true
     */
    destroyOnClose: boolean;
    /**
     * Variable: contentHeightCorrection
     *
     * Defines the correction factor for computing the height of the contentWrapper.
     * Default is 6 for IE 7/8 standards mode and 2 for all other browsers and modes.
     */
    contentHeightCorrection: any;
    /**
     * Variable: title
     *
     * Reference to the DOM node (TD) that contains the title.
     */
    title: string;
    div: HTMLElement;
    table: boolean;
    buttons: any;
    td: any;
    contentWrapper: any;
    resize: any;
    minimize: any;
    maximize: any;
    closeImg: any;
    image: any;
    /**
     * Function: init
     *
     * Initializes the DOM tree that represents the window.
     */
    init(x: number, y: number, width: number, height: number, style: any): void;
    /**
     * Function: setTitle
     *
     * Sets the window title to the given string. HTML markup inside the title
     * will be escaped.
     */
    setTitle(title: string): void;
    /**
     * Function: setScrollable
     *
     * Sets if the window contents should be scrollable.
     */
    setScrollable(scrollable: boolean): void;
    /**
     * Function: activate
     *
     * Puts the window on top of all other windows.
     */
    activate(): void;
    /**
     * Function: getElement
     *
     * Returuns the outermost DOM node that makes up the window.
     */
    getElement(): any;
    /**
     * Function: fit
     *
     * Makes sure the window is inside the client area of the window.
     */
    fit(): void;
    /**
     * Function: isResizable
     *
     * Returns true if the window is resizable.
     */
    isResizable(): boolean;
    /**
     * Function: setResizable
     *
     * Sets if the window should be resizable. To avoid interference with some
     * built-in features of IE10 and later, the use of the following code is
     * recommended if there are resizable <mxWindow>s in the page:
     *
     * (code)
     * if (mxClient.IS_POINTER)
     * {
     *   document.body.style.msTouchAction = 'none';
     * }
     * (end)
     */
    setResizable(resizable: boolean): void;
    /**
     * Function: setSize
     *
     * Sets the size of the window.
     */
    setSize(width: number, height: number): void;
    /**
     * Function: setMinimizable
     *
     * Sets if the window is minimizable.
     */
    setMinimizable(minimizable: boolean): void;
    /**
     * Function: getMinimumSize
     *
     * Returns an <mxRectangle> that specifies the size for the minimized window.
     * A width or height of 0 means keep the existing width or height. This
     * implementation returns the height of the window title and keeps the width.
     */
    getMinimumSize(): any;
    /**
     * Function: installMinimizeHandler
     *
     * Installs the event listeners required for minimizing the window.
     */
    installMinimizeHandler(): void;
    /**
     * Function: setMaximizable
     *
     * Sets if the window is maximizable.
     */
    setMaximizable(maximizable: boolean): void;
    /**
     * Function: installMaximizeHandler
     *
     * Installs the event listeners required for maximizing the window.
     */
    installMaximizeHandler(): void;
    /**
     * Function: installMoveHandler
     *
     * Installs the event listeners required for moving the window.
     */
    installMoveHandler(): void;
    /**
     * Function: setLocation
     *
     * Sets the upper, left corner of the window.
     */
    setLocation(x: number, y: number): void;
    /**
     * Function: getX
     *
     * Returns the current position on the x-axis.
     */
    getX(): any;
    /**
     * Function: getY
     *
     * Returns the current position on the y-axis.
     */
    getY(): any;
    /**
     * Function: installCloseHandler
     *
     * Adds the <closeImage> as a new image node in <closeImg> and installs the
     * <close> event.
     */
    installCloseHandler(): void;
    /**
     * Function: setImage
     *
     * Sets the image associated with the window.
     *
     * Parameters:
     *
     * image - URL of the image to be used.
     */
    setImage(image: any): void;
    /**
     * Function: setClosable
     *
     * Sets the image associated with the window.
     *
     * Parameters:
     *
     * closable - Boolean specifying if the window should be closable.
     */
    setClosable(closable: boolean): void;
    /**
     * Function: isVisible
     *
     * Returns true if the window is visible.
     */
    isVisible(): boolean;
    /**
     * Function: setVisible
     *
     * Shows or hides the window depending on the given flag.
     *
     * Parameters:
     *
     * visible - Boolean indicating if the window should be made visible.
     */
    setVisible(visible: any): void;
    /**
     * Function: show
     *
     * Shows the window.
     */
    show(): void;
    /**
     * Function: hide
     *
     * Hides the window.
     */
    hide(): void;
    /**
     * Function: destroy
     *
     * Destroys the window and removes all associated resources. Fires a
     * <destroy> event prior to destroying the window.
     */
    destroy(): void;
    static activeWindow: any;
}
