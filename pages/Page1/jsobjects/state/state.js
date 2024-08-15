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
   * @type {string}
   */
	description: `<p>This starter application provides essential boilerplate code to help you quickly set up new projects. This includes a config object, state object, and a generic controller. This app uses the Tab widget with <em>hidden tabs</em> to toggle between view and edit modes, controlled by the <code>state.currentTab</code> variable.</p>
<p>This is a great technique for multi-step forms or workflows. However, for larger or more complex sections, consider using separate pages instead.</p>`,

	/**
   * A flag indicating whether this is the user's first time using the application.
   * @type {boolean}
   */
	firstTime: true,

}