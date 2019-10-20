/**
 * Class: mxLayoutManager
 *
 * Implements a layout manager that runs a given layout after any changes to the graph:
 *
 * Example:
 *
 * (code)
 * var layoutMgr = new mxLayoutManager(graph);
 * layoutMgr.getLayout = function(cell)
 * {
 *   return layout;
 * };
 * (end)
 *
 * Event: mxEvent.LAYOUT_CELLS
 *
 * Fires between begin- and endUpdate after all cells have been layouted in
 * <layoutCells>. The <code>cells</code> property contains all cells that have
 * been passed to <layoutCells>.
 *
 * Constructor: mxLayoutManager
 *
 * Constructs a new automatic layout for the given graph.
 *
 * Arguments:
 *
 * graph - Reference to the enclosing graph.
 */
declare class mxLayoutManager {
    constructor(graph: Graph);
    undoHandler: Function;
    moveHandler: Function;
    /**
     * Variable: graph
     *
     * Reference to the enclosing <mxGraph>.
     */
    graph: Graph;
    /**
     * Variable: bubbling
     *
     * Specifies if the layout should bubble along
     * the cell hierarchy. Default is true.
     * @example true
     */
    bubbling: boolean;
    /**
     * Variable: enabled
     *
     * Specifies if event handling is enabled. Default is true.
     * @example true
     */
    enabled: boolean;
    /**
     * Variable: updateHandler
     *
     * Holds the function that handles the endUpdate event.
     */
    updateHandler: Function;
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
     * enabled - Boolean that specifies the new enabled state.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Function: isBubbling
     *
     * Returns true if a layout should bubble, that is, if the parent layout
     * should be executed whenever a cell layout (layout of the children of
     * a cell) has been executed. This implementation returns <bubbling>.
     */
    isBubbling(): boolean;
    /**
     * Function: setBubbling
     *
     * Sets <bubbling>.
     */
    setBubbling(value: any): void;
    /**
     * Function: getGraph
     *
     * Returns the graph that this layout operates on.
     */
    getGraph(): any;
    /**
     * Function: setGraph
     *
     * Sets the graph that the layouts operate on.
     */
    setGraph(graph: Graph): void;
    /**
     * Function: getLayout
     *
     * Returns the layout to be executed for the given graph and parent.
     */
    getLayout(parent: any): any;
    /**
     * Function: beforeUndo
     *
     * Called from the undoHandler.
     *
     * Parameters:
     *
     * cell - Array of <mxCells> that have been moved.
     * evt - Mouse event that represents the mousedown.
     */
    beforeUndo(undoableEdit: any): void;
    /**
     * Function: executeLayout
     *
     * Executes the given layout on the given parent.
     */
    executeLayoutForCells(cells: mxCell[]): void;
    /**
     * Function: cellsMoved
     *
     * Called from the moveHandler.
     *
     * Parameters:
     *
     * cell - Array of <mxCells> that have been moved.
     * evt - Mouse event that represents the mousedown.
     */
    cellsMoved(cells: mxCell[], evt: Event): void;
    /**
     * Function: getCellsForEdit
     *
     * Returns the cells to be layouted for the given sequence of changes.
     */
    getCellsForChanges(changes: any): any;
    /**
     * Function: getCellsForChange
     *
     * Executes all layouts which have been scheduled during the
     * changes.
     */
    getCellsForChange(change: any): any;
    /**
     * Function: layoutCells
     *
     * Executes all layouts which have been scheduled during the
     * changes.
     */
    layoutCells(cells: mxCell[]): void;
    /**
     * Function: executeLayout
     *
     * Executes the given layout on the given parent.
     */
    executeLayout(layout: any, parent: any): any;
    /**
     * Function: destroy
     *
     * Removes all handlers from the <graph> and deletes the reference to it.
     */
    destroy(): void;
}
