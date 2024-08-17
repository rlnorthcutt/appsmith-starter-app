export default {
	/**
   * This object stores formatted text content that may be used within your application.
   * 
   * The primary use of this object is to hold help text, instructions, or reference data that
   * might be displayed to the user. By organizing these text snippets here, it becomes easier 
   * to manage and update instructional content without scattering it throughout the codebase.
   * 
	 * The content is stored as a template literal, allowing for the easy embedding of variables 
   * and multi-line strings. 
   */

	/**
   * HTML-formatted description text to provide the default starting text.
   * @type {string}
   */

	description: `<p>This starter application provides essential boilerplate code to help you quickly set up new projects. This includes a config object, state object, and a generic controller. This app uses the Tab widget with <em>hidden tabs</em> to toggle between view and edit modes, controlled by the <code>state.currentTab</code> variable.</p>
<p>This is a great technique for multi-step forms or workflows. However, for larger or more complex sections, consider using separate pages instead.</p>`,

	/**
   * HTML-formatted help text to guide users in using the Starter App.
   * 
   * This content is stored as a template literal, allowing for the easy embedding of variables 
   * and multi-line strings. It provides users with tips and best practices for building apps 
   * using Appsmith, covering topics such as configuration, state management, and naming conventions.
   * @type {string}
   */
	help: `<h3>Starter App</h3>
Building apps with Appsmith is both fun and straightforward! This app includes essential boilerplate code to help you start a new project quickly. The code is thoroughly commented to serve as a reference. While you may not need to comment your code as extensively, keep in mind that <a href="https://community.appsmith.com/content/blog/lack-comments-bug">well-placed comments</a> make your apps easier to manage and maintain.

Tips:
<ol>
    <li>Use the <strong>"config"</strong> object to store static configuration data that doesn't change during runtime. This can include variables, select lists, constants, and other global values that you may need to reference multiple times.</li>
    <li>Use the <strong>"state"</strong> object to manage dynamic data that changes frequently. This typically includes global mutable variables. This starter app also provides methods to save and reload the state object, allowing users to continue where they left off after a page reload.</li>
    <li>The <strong>"controller"</strong> is the app's base controller. As your app grows, you'll likely create new objects to handle specific functionalities, ideally organized by domain or feature set (such as an "app" object).</li>
    <li>For your widgets, follow the recommended <a href="https://community.appsmith.com/content/blog/recommended-appsmith-naming-conventions">naming conventions</a>. This will make it easier to manage your app as it becomes more complex.</li>
    <li>Use state variables for most of your data bindings, especially if the data changes. This approach improves performance and makes your app easier to adjust and manage.</li>
</ol>
Following these tips will help you build apps that are more performant and maintainable. Keep in mind that you're developing a client-side web application, so many of your performance considerations will involve common challenges present in all browser-based apps.`,

}