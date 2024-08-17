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
	 * Stores the save message that will optionally be displayed when the state is saved.
	 *
	 * Note that this could also be stored in the config or text objects, but we are placing it here so
	 * the stateController can be more self-contained.
	 * @type {string}
	 */
	saveMessage: "App saved",	

	/**
	 * Stores the reset message that will optionally be displayed when the state is saved.
	 * @type {string}
	 */
	resetMessage: "App reset",

	/**
   * Initialize the application by loading a saved state if it exists.
   * 
   * This method is executed on page load. It saves the initial empty state for future resets,
   * loads the saved state from local storage, and optionally shows a help screen if this is the first time
   * the user is editing the app.
	 *
	 * See https://docs.appsmith.com/reference/appsmith-framework/widget-actions/store-value#access-stored-value
   */
	start() {
		// Only run this if auto loading state is enabled
		if (config.autoLoadState) {
			// Save the initial empty state for resetting later.
			this.zeroState = _.cloneDeep(state);

			// Load the saved state from local storage if it exists and if state saving is enabled.
			let savedState = appsmith.store[config.appname];
			if (savedState) {
				this.load(savedState);
			}
		}
	},

	/**
   * Save the current state of the application to local storage.
	 * See https://docs.appsmith.com/reference/appsmith-framework/widget-actions/store-value
   * @param {boolean} [notice=false] - Whether to show a success alert after saving.
   */
	save(notice = false) {
		// Store the current state using the app's unique storage key.
		storeValue(this.getAppname(), state);

		// Optionally display a success alert after saving.
		if (notice) {
			showAlert(this.saveMessage, "success");
		}
	},

	/**
   * Load a saved application state.
   * This merges the saved state into the current state object, effectively restoring
   * the application to its previous state.
   * @param {Object} savedState - The saved state to load into the application.
   */
	load(savedState) {
		// Merge the saved state into the current state object.
		_.merge(state, savedState);
	},

	/**
   * Reset the application state to its default values.
   * This method resets the state by merging the zero state into the current state,
   * removes the saved state from local storage, and shows a success alert.
   * @param {boolean} [notice=false] - Whether to show a success alert after saving.
   */
	reset(notice = false) {
		// Reset the state by merging the initial zero state into the current state.
		_.merge(state, this.zeroState);

		// Remove the saved state from local storage and show a success alert.
		removeValue(this.getAppname());
		// Optionally display a success alert after reset.
		if (notice) {
			showAlert(this.resetMessage, "success");
		}
	},

	/**
	 * Get the unique appname we can use to save the state to local storage.
	 * This method will look for a config.appname variable first, and if that doesn't exist
	 * it will get the appname from the path.
	 * @return {string}
	 */
	getAppname() {
		let appname = config.appname;
		// If the config variable doesn't exist, then get the appname from the path.
		if (!appname) {
			// Split the path by '/'
			let pathParts = appsmith.URL.pathname.split('/');
			// Return the second item after "/app/", which is the third element in the array
			appname =  pathParts[2];
		}
		return appname;
	},

}
