export default {
	// Contains the app specific functionality we need.
	// This is a very basic app, but we would expect to add more objects to organie our code over time.
	
	save() {
		// Update the state with the edited decsription text.
		state.description = rte_descriptionEdit.text;
		// Change to the "view" tab.
		state.curentTab = "view";
		// Save state for next time.
		controller.save();
	}
}