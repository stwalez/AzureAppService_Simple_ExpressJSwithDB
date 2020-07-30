# AzureAppService_Simple_ExpressJSwithDB
An Express.js app for deployment to Azure Stack App Service

Azure App Service Extension for Visual Studio Code was used for deployment to Azure Stack. This can also be used for deployment to Azure App Service.


## Prerequisites
Azure App Service Extension
Azure / Azure Stack Hub / ASDK

Set the following Azure App Service App Settings in VS code

`SCM_DO_BUILD_DURING_DEPLOYMENT = 1
"WEBSITE_NODE_DEFAULT_VERSION":"10.15.2"
`

Add Database Connection Strings to Azure / Azure Stack App Service Configuration >> Connection Strings as a JSON Template.

For Example, the following connection string:

`server=localhost;password=************;user id=username ;port=3306;database=db1`

can be converted to a JSON template which is stored as a connection string on Connection strings in App Service:
```
[
  {
    "name": "mysqldb",
    "value": "db1",
    "type": "MySql",
    "slotSetting": false
  },
  {
    "name": "mysqlhost",
    "value": "localhost",
    "type": "MySql",
    "slotSetting": false
  },
  {
    "name": "mysqlpwd",
    "value": "********",
    "type": "MySql",
    "slotSetting": false
  },
  {
    "name": "mysqluser",
    "value": "username",
    "type": "MySql",
    "slotSetting": false
  }
]
```