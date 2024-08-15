export default {
	/**
   * This module contains the core app functionality.
   * It is a basic starter app intended to be expanded with more objects and functions
   * as the app grows in complexity.
   * 
   * Current functionality includes saving the current state and resetting the application state.
   */
	
	/**
	 * Run any code or setup on page load. This will be called from controller.start() so
	 * we only need a single onload method.
	 */
	start() {
		// Show the help screen if this is the first time editing the app in EDIT mode.
		if (state.firstTime && appsmith.mode === "EDIT") {
			showModal(mod_help.name);
		}
	},

	/**
   * Save the current state of the application.
   */
	save() {
		// Update the state with the edited description text from the text editor widget.
		state.description = rte_descriptionEdit.text;
		// Switch to the "view" tab to reflect the updated state.
		state.currentTab = "view";
		// Persist the current state for use in the next session.
		controller.save();
	},

	/**
   * Reset the application state.
   */
	reset() {
		// Reset any widgets to their initial state using the resetwidget() function.
		// resetWidget('widget_name', false);
		// Call the controller reset method to clear the state and save it.
		controller.reset();
	},

}
