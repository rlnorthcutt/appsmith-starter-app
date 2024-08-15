export default {	
	/**
   * This module serves as the generic controller for basic app functionality.
   * 
   * It includes methods for initializing the app state, saving, loading, and resetting the app.
   * For more complex or app-specific methods, it is recommended to create new objects or modules.
   */


	/**
   * Holds a copy of the initial state object with zero or default values.
   * Used to reset the application state when needed.
   * @type {Object}
   */
	zeroState: {},

	/**
   * Initialize the application by loading a saved state if it exists.
   * 
   * This method is executed on page load. It saves the initial empty state for future resets,
   * loads the saved state from local storage, and optionally shows a help screen if this is the first time
   * the user is editing the app.
   */
	start() {
		// Save the initial empty state for resetting later.
		this.zeroState = _.cloneDeep(state);

		// Load the saved state from local storage if it exists.
		let saveState = appsmith.store[config.appname];
		if (saveState) {
			this.load(saveState);
		}

		// Run the start method from the app object
		app.start();
	},

	/**
   * Save the current state of the application to local storage.
   * 
   * @param {boolean} [notice=false] - Whether to show a success alert after saving.
   */
	save(notice = false) {
		// Store the current state using the app's unique storage key.
		storeValue(config.appname, state);

		// Optionally display a success alert after saving.
		if (notice) {
			showAlert(config.saveMessage, "success");
		}
	},

	/**
   * Load a saved application state.
   * 
   * This merges the saved state into the current state object, effectively restoring
   * the application to its previous state.
   * 
   * @param {Object} savedState - The saved state to load into the application.
   */
	load(savedState) {
		// Merge the saved state into the current state object.
		_.merge(state, savedState);
	},

	/**
   * Reset the application state to its default values.
   * 
   * This method resets the state by merging the zero state into the current state,
   * removes the saved state from local storage, and shows a success alert.
	 *
   * @param {boolean} [notice=false] - Whether to show a success alert after saving.
   */
	reset(notice = false) {
		// Reset the state by merging the initial zero state into the current state.
		_.merge(state, this.zeroState);

		// Remove the saved state from local storage and show a success alert.
		removeValue(config.appname);
		// Optionally display a success alert after reset.
		if (notice) {
			showAlert(config.resetMessage, "success");
		}
	},
	
}
