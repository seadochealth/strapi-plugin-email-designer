// Define here the plugins permissions.
module.exports = async ({ strapi }) => {
  // Add permissions
  const actions = [
    {
      section: "plugins",
      displayName: "Access the plugin",
      uid: "read",
      pluginName: "email-designer",
    },
    {
      section: "plugins",
      displayName: "Menu link to plugin settings",
      uid: "menu-link",
      pluginName: "email-designer",
    }
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
