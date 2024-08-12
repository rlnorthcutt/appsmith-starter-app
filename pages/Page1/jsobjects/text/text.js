export default {
	// This object stores any formatted text that may be used in your app.
	// Primarily, this will be used for help text, instructions, or reference data.
	
	// Using a JS template literal with embedded variables
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	help : `<h3>Starter App</h3>
Building apps with Appsmith is fun and easy! This app contains some boilerplate code that sets up a new project.

Tips:
<ol>
    <li>Use the <strong>"config"</strong> object to hold static configuration data that will not change during runtime. This can be variables, select lists, constants, etc. Consider this a great place to stick constants and global variables that can be referenced multiple times.</li>
    <li>Use the <strong>"state"</strong> object to hold dynamic data that changes often. These will typically be global mutable variables. This starter app also contains methods to save and reload the state object to maintain state across page reloads. This allows your users to pick up where they left off.</li>
    <li>The <strong>"controller"</strong> is the application's base controller. You will typically create new objects for your app to contain your main functionality, ideally organized by domain or functionality (like the "app" object).</li>
    <li>For your widgets, be sure to use the recommended <a href="https://community.appsmith.com/content/blog/recommended-appsmith-naming-conventions">naming conventions</a>. This will make it easier to manage your app as it grows in complexity./li>
    <li>Use state variables for most of your binding data, especially if it changes. This makes it more performant and easier to adjust and manage.</li>
</ol>
These tips will help you create more performant and maintainable apps. Remember that you are building a client-side web application, so much of your performance concerns will revolve around the common situations present in all browser-based web applications.`,
}