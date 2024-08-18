export default {
	/**
 	 * This object stores the current state of the application.
 	 * 
   * The state object is kept separate from the configuration to facilitate easy saving, loading, 
   * and resetting of the entire app state. It manages the mutable data within the app, 
   * including variables that are bound to widgets. This separation helps in managing the dynamic 
   * aspects of the app's operation.
   * 
   * Note: This object should only contain mutable variables, as its data is expected to change 
   * throughout the application's lifecycle.
   */

	/**
   * The current active tab in the application.
   * This keeps track of which tab or section the user is currently viewing.
   * @type {string}
   */
	currentTab: "view",

	/**
   * A description of the application as a template literal. In the default example, this can be edited.
	 * We are storing the full content in the text object for consistency and to keep this object easier to read and manage.
	 * This means that the original string remains unchanged, but this variable will change as it is state.
   * @type {string}
   */
	description: text.description,

	/**
   * A flag indicating whether this is the user's first time using the application.
   * @type {boolean}
   */
	firstTime: true,

}