/* RAP Tracker — sign-in settings.
   Empty clientId = demo only: the app runs on sample data kept in the
   browser and the "connect to SharePoint" option is hidden.

   To save to SharePoint, register a single-page application in
   Microsoft Entra (multi-tenant if clients will use it in their own
   Microsoft 365), add https://www.2waysconsultancy.com.au/rap/ as its
   redirect URI and the delegated Microsoft Graph permission
   Sites.Manage.All, then paste its Application (client) ID below. */
window.RAP_CONFIG = {
  clientId: '',
  authority: 'https://login.microsoftonline.com/organizations'
};
