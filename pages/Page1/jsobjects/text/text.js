export default {
	// This object stores any formatted text that may be used in your app.
	// Primarily, this will be used for help text, instructions, or reference data.
	
	// Using a JS template literal with embedded variables
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	help : `<h3>Starter App</h3>
Building apps with Appsmith is fun and easy! This app contains some boilerplate code that sets up 

Tips:
<ol>
<li>Use the <strong>"config"</strong> object to hold the static configuarion data that will not change during runtime. This can be things like variables, select lists, constants, etc. Consider this a great place to stick _constants_ and global variables that can be referenced multiple times.</li>
<li>Use the <strong>"state"</strong> object to hold dynamic data that changes often. This will typically be mutable variables that are global. This starter app also contains methods that let us save and reload the state object, which will maintain state across page reloads. This allows your users to pick up where they left off.</li>
<li>The <strong>"controller"</strong> is the base controller for the application. You will typically create new objects for your app to contain your main functionality, ideally organized by domain or functionality (like the "app" object).</li>
<li>For your widgets, be sure to use the recommended <a href="https://community.appsmith.com/content/blog/recommended-appsmith-naming-conventions">naming conventions</a>. This will make it easier to manage your app as it grows in complexity.</li>
<li>Use state variables for most of your binding data, especially if it changes. This makes it mroe performant and easir to adjust and manage
</ol>

These tips will help you create more performant and maintainable apps. Remember that you are building a client side web application, so much of your performance concerns will revole around the common situations present in all browser based web applications.`,
}