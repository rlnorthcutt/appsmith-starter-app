export default {
	/**
   * This module contains the core app functionality.
   * It is a basic starter app intended to be expanded with more objects and functions
   * as the app grows in complexity.
   * 
   * Current functionality includes saving the current state and resetting the application state.
	 * Note that we are powering the tab selection and editing functions by simply binding the widgets
	 * to the state variables that power them. This makes the app simpler and leverages the default
	 * functionality to do the heavy lifting.
   */

	/**
	 * Run any code or setup on page load. This has been set to run on page load.
	 *
	 * See https://docs.appsmith.com/write-code/concepts/execute-onpageload
	 */
	start() {
		// Show the help screen if this is the first time editing the app in EDIT mode.
		if (state.firstTime && appsmith.mode === "EDIT") {
			showModal(mod_help.name);
			state.firstTime = false;
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
	},

}
