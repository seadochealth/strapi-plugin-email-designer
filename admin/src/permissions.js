const pluginPermissions = {
  // This permission regards the main component (App) and is used to tell
  // If the plugin link should be displayed in the menu
  // And also if the plugin is accessible. This use case is found when a user types the url of the
  // plugin directly in the browser
  menu: [{ action: "plugins::email-designer.read", subject: null }],
  'menu-link': [{ action: 'plugin::email-designer.menu-link', subject: null }],
};

export default pluginPermissions;
