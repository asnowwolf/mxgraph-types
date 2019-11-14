/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
declare const mxEvent: {

  /**
   * Class: mxEvent
   *
   * Cross-browser DOM event support. For internal event handling,
   * <mxEventSource> and the graph event dispatch loop in <mxGraph> are used.
   *
   * Memory Leaks:
   *
   * Use this class for adding and removing listeners to/from DOM nodes. The
   * <removeAllListeners> function is provided to remove all listeners that
   * have been added using <addListener>. The function should be invoked when
   * the last reference is removed in the JavaScript code, typically when the
   * referenced DOM node is removed from the DOM, and helps to reduce memory
   * leaks in IE6.
   *
   * Variable: objects
   *
   * Contains all objects where any listener was added using <addListener>.
   * This is used to reduce memory leaks in IE, see <mxClient.dispose>.
   */
  objects: [],

  /**
   * Variable: LABEL_HANDLE
   *
   * Index for the label handle in an mxMouseEvent. This should be a negative
   * value that does not interfere with any possible handle indices. Default
   * is -1.
   */
  LABEL_HANDLE: -1,

  /**
   * Variable: ROTATION_HANDLE
   *
   * Index for the rotation handle in an mxMouseEvent. This should be a
   * negative value that does not interfere with any possible handle indices.
   * Default is -2.
   */
  ROTATION_HANDLE: -2,

  /**
   * Variable: CUSTOM_HANDLE
   *
   * Start index for the custom handles in an mxMouseEvent. This should be a
   * negative value and is the start index which is decremented for each
   * custom handle. Default is -100.
   */
  CUSTOM_HANDLE: -100,

  /**
   * Variable: VIRTUAL_HANDLE
   *
   * Start index for the virtual handles in an mxMouseEvent. This should be a
   * negative value and is the start index which is decremented for each
   * virtual handle. Default is -100000. This assumes that there are no more
   * than VIRTUAL_HANDLE - CUSTOM_HANDLE custom handles.
   *
   */
  VIRTUAL_HANDLE: -100000,

  /**
   * Variable: MOUSE_DOWN
   *
   * Specifies the event name for mouseDown.
   */
  MOUSE_DOWN: 'mouseDown',

  /**
   * Variable: MOUSE_MOVE
   *
   * Specifies the event name for mouseMove.
   */
  MOUSE_MOVE: 'mouseMove',

  /**
   * Variable: MOUSE_UP
   *
   * Specifies the event name for mouseUp.
   */
  MOUSE_UP: 'mouseUp',

  /**
   * Variable: ACTIVATE
   *
   * Specifies the event name for activate.
   */
  ACTIVATE: 'activate',

  /**
   * Variable: RESIZE_START
   *
   * Specifies the event name for resizeStart.
   */
  RESIZE_START: 'resizeStart',

  /**
   * Variable: RESIZE
   *
   * Specifies the event name for resize.
   */
  RESIZE: 'resize',

  /**
   * Variable: RESIZE_END
   *
   * Specifies the event name for resizeEnd.
   */
  RESIZE_END: 'resizeEnd',

  /**
   * Variable: MOVE_START
   *
   * Specifies the event name for moveStart.
   */
  MOVE_START: 'moveStart',

  /**
   * Variable: MOVE
   *
   * Specifies the event name for move.
   */
  MOVE: 'move',

  /**
   * Variable: MOVE_END
   *
   * Specifies the event name for moveEnd.
   */
  MOVE_END: 'moveEnd',

  /**
   * Variable: PAN_START
   *
   * Specifies the event name for panStart.
   */
  PAN_START: 'panStart',

  /**
   * Variable: PAN
   *
   * Specifies the event name for pan.
   */
  PAN: 'pan',

  /**
   * Variable: PAN_END
   *
   * Specifies the event name for panEnd.
   */
  PAN_END: 'panEnd',

  /**
   * Variable: MINIMIZE
   *
   * Specifies the event name for minimize.
   */
  MINIMIZE: 'minimize',

  /**
   * Variable: NORMALIZE
   *
   * Specifies the event name for normalize.
   */
  NORMALIZE: 'normalize',

  /**
   * Variable: MAXIMIZE
   *
   * Specifies the event name for maximize.
   */
  MAXIMIZE: 'maximize',

  /**
   * Variable: HIDE
   *
   * Specifies the event name for hide.
   */
  HIDE: 'hide',

  /**
   * Variable: SHOW
   *
   * Specifies the event name for show.
   */
  SHOW: 'show',

  /**
   * Variable: CLOSE
   *
   * Specifies the event name for close.
   */
  CLOSE: 'close',

  /**
   * Variable: DESTROY
   *
   * Specifies the event name for destroy.
   */
  DESTROY: 'destroy',

  /**
   * Variable: REFRESH
   *
   * Specifies the event name for refresh.
   */
  REFRESH: 'refresh',

  /**
   * Variable: SIZE
   *
   * Specifies the event name for size.
   */
  SIZE: 'size',

  /**
   * Variable: SELECT
   *
   * Specifies the event name for select.
   */
  SELECT: 'select',

  /**
   * Variable: FIRED
   *
   * Specifies the event name for fired.
   */
  FIRED: 'fired',

  /**
   * Variable: FIRE_MOUSE_EVENT
   *
   * Specifies the event name for fireMouseEvent.
   */
  FIRE_MOUSE_EVENT: 'fireMouseEvent',

  /**
   * Variable: GESTURE
   *
   * Specifies the event name for gesture.
   */
  GESTURE: 'gesture',

  /**
   * Variable: TAP_AND_HOLD
   *
   * Specifies the event name for tapAndHold.
   */
  TAP_AND_HOLD: 'tapAndHold',

  /**
   * Variable: GET
   *
   * Specifies the event name for get.
   */
  GET: 'get',

  /**
   * Variable: RECEIVE
   *
   * Specifies the event name for receive.
   */
  RECEIVE: 'receive',

  /**
   * Variable: CONNECT
   *
   * Specifies the event name for connect.
   */
  CONNECT: 'connect',

  /**
   * Variable: DISCONNECT
   *
   * Specifies the event name for disconnect.
   */
  DISCONNECT: 'disconnect',

  /**
   * Variable: SUSPEND
   *
   * Specifies the event name for suspend.
   */
  SUSPEND: 'suspend',

  /**
   * Variable: RESUME
   *
   * Specifies the event name for suspend.
   */
  RESUME: 'resume',

  /**
   * Variable: MARK
   *
   * Specifies the event name for mark.
   */
  MARK: 'mark',

  /**
   * Variable: ROOT
   *
   * Specifies the event name for root.
   */
  ROOT: 'root',

  /**
   * Variable: POST
   *
   * Specifies the event name for post.
   */
  POST: 'post',

  /**
   * Variable: OPEN
   *
   * Specifies the event name for open.
   */
  OPEN: 'open',

  /**
   * Variable: SAVE
   *
   * Specifies the event name for open.
   */
  SAVE: 'save',

  /**
   * Variable: BEFORE_ADD_VERTEX
   *
   * Specifies the event name for beforeAddVertex.
   */
  BEFORE_ADD_VERTEX: 'beforeAddVertex',

  /**
   * Variable: ADD_VERTEX
   *
   * Specifies the event name for addVertex.
   */
  ADD_VERTEX: 'addVertex',

  /**
   * Variable: AFTER_ADD_VERTEX
   *
   * Specifies the event name for afterAddVertex.
   */
  AFTER_ADD_VERTEX: 'afterAddVertex',

  /**
   * Variable: DONE
   *
   * Specifies the event name for done.
   */
  DONE: 'done',

  /**
   * Variable: EXECUTE
   *
   * Specifies the event name for execute.
   */
  EXECUTE: 'execute',

  /**
   * Variable: EXECUTED
   *
   * Specifies the event name for executed.
   */
  EXECUTED: 'executed',

  /**
   * Variable: BEGIN_UPDATE
   *
   * Specifies the event name for beginUpdate.
   */
  BEGIN_UPDATE: 'beginUpdate',

  /**
   * Variable: START_EDIT
   *
   * Specifies the event name for startEdit.
   */
  START_EDIT: 'startEdit',

  /**
   * Variable: END_UPDATE
   *
   * Specifies the event name for endUpdate.
   */
  END_UPDATE: 'endUpdate',

  /**
   * Variable: END_EDIT
   *
   * Specifies the event name for endEdit.
   */
  END_EDIT: 'endEdit',

  /**
   * Variable: BEFORE_UNDO
   *
   * Specifies the event name for beforeUndo.
   */
  BEFORE_UNDO: 'beforeUndo',

  /**
   * Variable: UNDO
   *
   * Specifies the event name for undo.
   */
  UNDO: 'undo',

  /**
   * Variable: REDO
   *
   * Specifies the event name for redo.
   */
  REDO: 'redo',

  /**
   * Variable: CHANGE
   *
   * Specifies the event name for change.
   */
  CHANGE: 'change',

  /**
   * Variable: NOTIFY
   *
   * Specifies the event name for notify.
   */
  NOTIFY: 'notify',

  /**
   * Variable: LAYOUT_CELLS
   *
   * Specifies the event name for layoutCells.
   */
  LAYOUT_CELLS: 'layoutCells',

  /**
   * Variable: SCALE
   *
   * Specifies the event name for scale.
   */
  SCALE: 'scale',

  /**
   * Variable: TRANSLATE
   *
   * Specifies the event name for translate.
   */
  TRANSLATE: 'translate',

  /**
   * Variable: SCALE_AND_TRANSLATE
   *
   * Specifies the event name for scaleAndTranslate.
   */
  SCALE_AND_TRANSLATE: 'scaleAndTranslate',

  /**
   * Variable: UP
   *
   * Specifies the event name for up.
   */
  UP: 'up',

  /**
   * Variable: DOWN
   *
   * Specifies the event name for down.
   */
  DOWN: 'down',

  /**
   * Variable: ADD
   *
   * Specifies the event name for add.
   */
  ADD: 'add',

  /**
   * Variable: REMOVE
   *
   * Specifies the event name for remove.
   */
  REMOVE: 'remove',

  /**
   * Variable: CLEAR
   *
   * Specifies the event name for clear.
   */
  CLEAR: 'clear',

  /**
   * Variable: ADD_CELLS
   *
   * Specifies the event name for addCells.
   */
  ADD_CELLS: 'addCells',

  /**
   * Variable: CELLS_ADDED
   *
   * Specifies the event name for cellsAdded.
   */
  CELLS_ADDED: 'cellsAdded',

  /**
   * Variable: MOVE_CELLS
   *
   * Specifies the event name for moveCells.
   */
  MOVE_CELLS: 'moveCells',

  /**
   * Variable: CELLS_MOVED
   *
   * Specifies the event name for cellsMoved.
   */
  CELLS_MOVED: 'cellsMoved',

  /**
   * Variable: RESIZE_CELLS
   *
   * Specifies the event name for resizeCells.
   */
  RESIZE_CELLS: 'resizeCells',

  /**
   * Variable: CELLS_RESIZED
   *
   * Specifies the event name for cellsResized.
   */
  CELLS_RESIZED: 'cellsResized',

  /**
   * Variable: TOGGLE_CELLS
   *
   * Specifies the event name for toggleCells.
   */
  TOGGLE_CELLS: 'toggleCells',

  /**
   * Variable: CELLS_TOGGLED
   *
   * Specifies the event name for cellsToggled.
   */
  CELLS_TOGGLED: 'cellsToggled',

  /**
   * Variable: ORDER_CELLS
   *
   * Specifies the event name for orderCells.
   */
  ORDER_CELLS: 'orderCells',

  /**
   * Variable: CELLS_ORDERED
   *
   * Specifies the event name for cellsOrdered.
   */
  CELLS_ORDERED: 'cellsOrdered',

  /**
   * Variable: REMOVE_CELLS
   *
   * Specifies the event name for removeCells.
   */
  REMOVE_CELLS: 'removeCells',

  /**
   * Variable: CELLS_REMOVED
   *
   * Specifies the event name for cellsRemoved.
   */
  CELLS_REMOVED: 'cellsRemoved',

  /**
   * Variable: GROUP_CELLS
   *
   * Specifies the event name for groupCells.
   */
  GROUP_CELLS: 'groupCells',

  /**
   * Variable: UNGROUP_CELLS
   *
   * Specifies the event name for ungroupCells.
   */
  UNGROUP_CELLS: 'ungroupCells',

  /**
   * Variable: REMOVE_CELLS_FROM_PARENT
   *
   * Specifies the event name for removeCellsFromParent.
   */
  REMOVE_CELLS_FROM_PARENT: 'removeCellsFromParent',

  /**
   * Variable: FOLD_CELLS
   *
   * Specifies the event name for foldCells.
   */
  FOLD_CELLS: 'foldCells',

  /**
   * Variable: CELLS_FOLDED
   *
   * Specifies the event name for cellsFolded.
   */
  CELLS_FOLDED: 'cellsFolded',

  /**
   * Variable: ALIGN_CELLS
   *
   * Specifies the event name for alignCells.
   */
  ALIGN_CELLS: 'alignCells',

  /**
   * Variable: LABEL_CHANGED
   *
   * Specifies the event name for labelChanged.
   */
  LABEL_CHANGED: 'labelChanged',

  /**
   * Variable: CONNECT_CELL
   *
   * Specifies the event name for connectCell.
   */
  CONNECT_CELL: 'connectCell',

  /**
   * Variable: CELL_CONNECTED
   *
   * Specifies the event name for cellConnected.
   */
  CELL_CONNECTED: 'cellConnected',

  /**
   * Variable: SPLIT_EDGE
   *
   * Specifies the event name for splitEdge.
   */
  SPLIT_EDGE: 'splitEdge',

  /**
   * Variable: FLIP_EDGE
   *
   * Specifies the event name for flipEdge.
   */
  FLIP_EDGE: 'flipEdge',

  /**
   * Variable: START_EDITING
   *
   * Specifies the event name for startEditing.
   */
  START_EDITING: 'startEditing',

  /**
   * Variable: EDITING_STARTED
   *
   * Specifies the event name for editingStarted.
   */
  EDITING_STARTED: 'editingStarted',

  /**
   * Variable: EDITING_STOPPED
   *
   * Specifies the event name for editingStopped.
   */
  EDITING_STOPPED: 'editingStopped',

  /**
   * Variable: ADD_OVERLAY
   *
   * Specifies the event name for addOverlay.
   */
  ADD_OVERLAY: 'addOverlay',

  /**
   * Variable: REMOVE_OVERLAY
   *
   * Specifies the event name for removeOverlay.
   */
  REMOVE_OVERLAY: 'removeOverlay',

  /**
   * Variable: UPDATE_CELL_SIZE
   *
   * Specifies the event name for updateCellSize.
   */
  UPDATE_CELL_SIZE: 'updateCellSize',

  /**
   * Variable: ESCAPE
   *
   * Specifies the event name for escape.
   */
  ESCAPE: 'escape',

  /**
   * Variable: CLICK
   *
   * Specifies the event name for click.
   */
  CLICK: 'click',

  /**
   * Variable: DOUBLE_CLICK
   *
   * Specifies the event name for doubleClick.
   */
  DOUBLE_CLICK: 'doubleClick',

  /**
   * Variable: START
   *
   * Specifies the event name for start.
   */
  START: 'start',

  /**
   * Variable: RESET
   *
   * Specifies the event name for reset.
   */
  RESET: 'reset'

  /**
   * Function: addListener
   *
   * Binds the function to the specified event on the given element. Use
   * <mxUtils.bind> in order to bind the "this" keyword inside the function
   * to a given execution scope.
   */
  addListener(element, eventName: string, funct): void;

  /**
   * Function: removeListener
   *
   * Removes the specified listener from the given element.
   */
  removeListener(element, eventName: string, funct): void;
  /**
   * Function: removeAllListeners
   *
   * Removes all listeners from the given element.
   */
  removeAllListeners(element: HTMLElement);
  /**
   * Function: addGestureListeners
   *
   * Adds the given listeners for touch, mouse and/or pointer events. If
   * <mxClient.IS_POINTER> is true then pointer events will be registered,
   * else the respective mouse events will be registered. If <mxClient.IS_POINTER>
   * is false and <mxClient.IS_TOUCH> is true then the respective touch events
   * will be registered as well as the mouse events.
   */
  addGestureListeners(node, startListener, moveListener, endListener?);
  /**
   * Function: removeGestureListeners
   *
   * Removes the given listeners from mousedown, mousemove, mouseup and the
   * respective touch events if <mxClient.IS_TOUCH> is true.
   */
  removeGestureListeners(node, startListener, moveListener, endListener);

  /**
   * Function: redirectMouseEvents
   *
   * Redirects the mouse events from the given DOM node to the graph dispatch
   * loop using the event and given state as event arguments. State can
   * either be an instance of <mxCellState> or a function that returns an
   * <mxCellState>. The down, move, up and dblClick arguments are optional
   * functions that take the trigger event as arguments and replace the
   * default behaviour.
   */
  redirectMouseEvents(node, graph, state, down, move, up, dblClick);

  /**
   * Function: release
   *
   * Removes the known listeners from the given DOM node and its descendants.
   *
   * Parameters:
   *
   * element - DOM node to remove the listeners from.
   */
  release(element);

  /**
   * Function: addMouseWheelListener
   *
   * Installs the given function as a handler for mouse wheel events. The
   * function has two arguments: the mouse event and a boolean that specifies
   * if the wheel was moved up or down.
   *
   * This has been tested with IE 6 and 7, Firefox (all versions), Opera and
   * Safari. It does currently not work on Safari for Mac.
   *
   * Example:
   *
   * (code)
   * mxEvent.addMouseWheelListener(function (evt, up)
   * {
   *   mxLog.show();
   *   mxLog.debug('mouseWheel: up='+up);
   * });
   * (end)
   *
   * Parameters:
   *
   * funct - Handler function that takes the event argument and a boolean up
   * argument for the mousewheel direction.
   */
  addMouseWheelListener(funct);

  /**
   * Function: disableContextMenu
   *
   * Disables the context menu for the given element.
   */
  disableContextMenu();

  /**
   * Function: isConsumed
   *
   * Returns true if the event has been consumed using <consume>.
   */
  isConsumed(evt);

  /**
   * Function: isTouchEvent
   *
   * Returns true if the event was generated using a touch device (not a pen or mouse).
   */
  isTouchEvent(evt);

  /**
   * Function: isMultiTouchEvent
   *
   * Returns true if the event was generated using a touch device (not a pen or mouse).
   */
  isMultiTouchEvent(evt);

  /**
   * Function: isMouseEvent
   *
   * Returns true if the event was generated using a mouse (not a pen or touch device).
   */
  isMouseEvent(evt);

  /**
   * Function: isLeftMouseButton
   *
   * Returns true if the left mouse button is pressed for the given event.
   * To check if a button is pressed during a mouseMove you should use the
   * <mxGraph.isMouseDown> property. Note that this returns true in Firefox
   * for control+left-click on the Mac.
   */
  isLeftMouseButton(evt);

  /**
   * Function: isMiddleMouseButton
   *
   * Returns true if the middle mouse button is pressed for the given event.
   * To check if a button is pressed during a mouseMove you should use the
   * <mxGraph.isMouseDown> property.
   */
  isMiddleMouseButton(evt);
  /**
   * Function: isRightMouseButton
   *
   * Returns true if the right mouse button was pressed. Note that this
   * button might not be available on some systems. For handling a popup
   * trigger <isPopupTrigger> should be used.
   */
  isRightMouseButton(evt);
  /**
   * Function: isPopupTrigger
   *
   * Returns true if the event is a popup trigger. This implementation
   * returns true if the right button or the left button and control was
   * pressed on a Mac.
   */
  isPopupTrigger(evt);
  /**
   * Function: isShiftDown
   *
   * Returns true if the shift key is pressed for the given event.
   */
  isShiftDown(evt);
  /**
   * Function: isAltDown
   *
   * Returns true if the alt key is pressed for the given event.
   */
  isAltDown(evt);
  /**
   * Function: isControlDown
   *
   * Returns true if the control key is pressed for the given event.
   */
  isControlDown(evt);
  /**
   * Function: isMetaDown
   *
   * Returns true if the meta key is pressed for the given event.
   */
  isMetaDown(evt);
  /**
   * Function: getMainEvent
   *
   * Returns the touch or mouse event that contains the mouse coordinates.
   */
  getMainEvent(e);
  /**
   * Function: getClientX
   *
   * Returns true if the meta key is pressed for the given event.
   */
  getClientX(e);
  /**
   * Function: getClientY
   *
   * Returns true if the meta key is pressed for the given event.
   */
  getClientY(e);
  /**
   * Function: consume
   *
   * Consumes the given event.
   *
   * Parameters:
   *
   * evt - Native event to be consumed.
   * preventDefault - Optional boolean to prevent the default for the event.
   * Default is true.
   * stopPropagation - Option boolean to stop event propagation. Default is
   * true.
   */
  consume(evt, preventDefault?: boolean, stopPropagation?: boolean);
};
