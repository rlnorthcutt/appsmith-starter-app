export default {	
	// This is the generic controller for basic app functionality.
	// You should create new objects for additional methods that are specific to your app.
	
	// Holds a copy of the state object with zero values for resetting.
	zeroState: {},
	
	// Load a saved state if it exists. Tihs method is run on page load.
	start() {
		// Save the initial empty state for a reset.
		this.zeroState = _.cloneDeep(state);
		// Load the saved state if it exists.
		let saveState = appsmith.store[config.appname];
		if (saveState) {
			this.load(saveState);
		}
		// Show the help screen if this is your first time editing.
		if (state.firstTime && appsmith.mode === "EDIT") {
			showModal(mod_help.name);
		}
	},
	
	// Save the current state to local storage
	save(notice = true) {
		storeValue(config.appname, state);
		if (notice) {
			showAlert("App saved", "success");
		}
	},

	// Load the app from the provided state
	load(savedGame) {
		_.merge(state, savedGame);
	},

	// Reset the state to the default.
	reset() {
		// Merge the zero state into the actual state object
		_.merge(state, this.zeroState);

		// Additional cleanup and notifications
		removeValue(config.appname);
		showAlert("App reset", "success");
	},
	
}