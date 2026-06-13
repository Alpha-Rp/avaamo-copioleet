# Platform Settings & Administration
> 68 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings

[Users & Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions)[Usage Reports](/user-guide/how-to/manage-platform-settings/usage-reports)[LLM Settings - Add your own LLM](/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm)[Privacy](/user-guide/how-to/manage-platform-settings/privacy)[Active Directory (AD) integrations - Identity provider](/user-guide/how-to/manage-platform-settings/identity-providers)[Security policy](/user-guide/how-to/manage-platform-settings/security-policy)

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/users-and-permissions

[Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users)[Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups)

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/users-and-permissions/users

In the **Profile Icon -> Settings ->** **Users** page, you view and manage all the users in the company. You can also define roles for each user.

**Key points**:

*   **Users** page is available only for users with the **Settings** role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   You can create and manage users from the **Users** page, only when your company is not integrated with Active Directory (AD). If you sign-in to the Avaamo Platform using SSO, then since your company is configured with Active Directory (AD), all the users must be created and managed via AD. You must contact your AD administrator for further assistance to manage users. See [Identity provider](/user-guide/how-to/manage-platform-settings/identity-providers), for more information on SSO integration.
    
*   You can also add users to a **Group** and manage roles at the Group-level. See [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups), for more information.
    
*   The roles displayed for the user are a union of all the roles assigned to the user and groups the user belongs to. Example: Consider that John Miller has a Development role and John Miller also belongs to a Group that has a Testing and Staging role. The roles displayed for John Miller is - Development, Testing, and Staging.
    

### 

Search users

In the **Users** page,

*   Select **Active** to view a list of all active users. This is the default view.
    
*   Select **Archived** to view a list of deleted users.
    

The Users list in both the views is displayed in alphabetical order of the user name. You can use Pagination at the bottom to view and search users by name.

### 

Add new user

*   In the **Users** page, click **Add new.**
    
*   Specify the first name, last name, email, identity provider, and roles of the user and click **Submit.** Note that the email identifier must be unique. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    

### 

Delete user

In the **Users** page, click three ellipse dots in the **Actions** column of the user to view the extended menu and click **Delete.**

*   If the user is the owner of any agents, then the following pop-up is displayed that allows you to delegate the ownership to a replacement user:
    

*   Select the replacement user and click **Delete**.
    

### 

Edit user

In the **Users** page, click **Edit** in the Actions column of the user. The user details page is displayed. Edit the user details as required and click **Submit**.

**Note**: A user can belong to multiple groups with different roles and each user can also have exclusive roles. In the **Edit Users** page, only roles assigned exclusively to the user are displayed as only these can be edited. If you wish to remove or add a role belonging to a group, then you must edit the Groups page. See [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups), for more information.

### 

Get user access token

In the **Users** page, click three ellipse dots in the **Actions** column of the user to view the extended menu and click **Access token**.

This is used for APIs when user authentication is required. Using user access tokens is a standard recommended approach.

*   It provides stronger security as the access token is private and only the user with appropriate permissions can view the user access token.
    
*   There is a track of all changes made by the access-token owner captured in change and audit logs.
    

You can either use the access token that is already available or click **Regenerate Access Token** to generate a new one. See [Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#header), for an example of user token usage.

**Note:** It is recommended to create service accounts for API access as user tokens may get invalidated if the user is archived or any user permission-related changes are made.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/users-and-permissions/groups

Typically, in a large organization with many users, instead of creating each individual user with the required roles, you can create groups and add users to the group. This allows you to manage and assign roles at the group level instead of managing at each user level. This feature helps in easier and efficient user management. With the Groups feature, you can:

*   Manage and distribute roles at the group level instead of managing at each user level.
    
*   Assign agent permissions to specific groups instead of assigning them to each individual user. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.
    

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users), for more information on how to create and manage users.

## 

How does it work?

You can use one of the following ways to manage Groups in the Avaamo Platform:

**Syncing with Azure AD groups**: In order to use this feature, you must first configure and integrate MS-Azure SSO with Avaamo Platform. See [SAML Support - MS Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure), for more information on steps to integrate MS Azure with the Avaamo platform.

*   After you configure and integrate MS-Azure SSO with Avaamo Platform, the users are automatically signed in to the Avaamo Platform when they are on their corporate devices and connected to the network. See [SAML Support - MS Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure), for more information on steps to integrate MS Azure with the Avaamo platform.
    
*   Once the users sign in, the groups set up in Azure AD are synced automatically as per the group's policy setup in MS-Azure AD. Signed-in users are associated with the roles as set up in the Azure AD groups and access is accordingly provided in the Avaamo Platform. See [Syncing with Azure AD groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#syncing-with-azure-ad-groups), for more information.
    

This feature provides more security as it restricts user and group management only via MS-Azure AD.

**Creating and managing groups in the Avaamo Platform**: If you are not using MS-Azure AD integration with the Avaamo Platform, then you can also independently create and manage groups in the Avaamo Platform itself. See [Creating and managing groups in the Avaamo Platform](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#creating-and-managing-groups-in-the-avaamo-platform) and [Agent permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

**Note**: **Groups** page is available only for users with the **Settings** role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

## 

Syncing with Azure AD groups

*   If you have **Settings** role access, then you can view the groups as per the groups claims policy setup in MS-Azure AD in the Settings -> User & Groups -> Groups page. See [User Attribute and Claims](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#user-attributes-and-claims), for more information.
    

*   The group object IDs are displayed in the **Group name** column. This is the same unique identifier for each group created in the MS-Azure AD application.
    

*   Click **Edit** and update the group name as per your requirement.
    

**Notes**:

*   The **Group name** must be unique.
    
*   When groups are synced from MS-Azure AD, certain admin-related security groups also visible in the **Groups** page. Hence, it is recommended to edit the group names for those groups that have a significance in the Avaamo Platform. This helps in easy identification.
    

**Key Points**:

*   You can now manage all the users and groups via Azure AD and it is synced when the user logs in to the Avaamo Platform Dashboard. For example, if you assign the roles for a group, then the same is applied to the user when the user logs out and logs back into the Avaamo Platform.
    
*   Deleted users or groups in the MS-Azure AD are synced once every 40 minutes. Note that this works only when provisioning is enabled in MS-Azure AD.
    
*   If users log out from the Avaamo dashboard, then the users are logged out from MS-Azure IDP too.
    

## 

Creating and managing groups in the Avaamo Platform

**Note**: This option is provided when you wish to create and manage groups within the Avaamo Platform itself and hence available only when you are logged in to the Avaamo Platform without using MS Azure SSO.

In the **Groups** page, you view and manage all the groups in the company. You can also define roles for each group.

### 

Create group and add members

*   In the **Groups** page, click **Create.**
    
*   Specify the name and description of the group with the following details and click **Submit.** Note that the Group name must be unique
    
    *   **Roles**: Select the roles applicable to the group. The roles selected is associated with all the users (members) in the group. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
        
    *   **Add members**: Add a list of users to the group. As you start entering the name, a list of user names is displayed. Select the users and click **Add**. Click **Delete** in the **Actions** column, if you wish to delete the user from the group.
        
    

**Note**: If a user belongs to multiple groups, then the roles applicable to a user is a union of all the roles from individual groups.

**Example**: Consider the following scenario:

*   Group 1 is associated with the Development role
    
*   Group 2 is associated with the Testing role
    
*   User John Miller is added to Group 1 and Group 2.
    

Roles applicable to John Miller -> Roles from Group 1 + Roles from Group 2. Hence, John Miller has both Development and Testing role.

### 

Delete group

In the **Groups** page, click the **Delete** option in the **Actions** column for a group that you wish to delete**.**

*   The following pop-up message is displayed. Note that deleting a group revokes all the access to the users provided through that group.
    

*   Click OK to confirm the deletion.
    

### 

Edit group

In the **Groups** page, click **Edit** in the Actions column of the user. The **Groups** page is displayed. Edit the group details as required and click **Submit**. Note that the Group name must be unique.

## 

Access token for users in groups

The **User access token** is used for APIs when user authentication is required.

Click the user icon at the top-right corner of your dashboard. You can either use the access token that is already available or click **Regenerate Access Token** to generate a new one. Note that each access token is user-specific.

See [Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#header), for an example of user token usage.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/usage-reports

[LLaMB Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage)[SMS Usage](/user-guide/how-to/manage-platform-settings/usage-reports/sms-usage)[Voice Usage](/user-guide/how-to/manage-platform-settings/usage-reports/voice-usage)

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage

`LLaMB’s Usage` feature provides real-time insights into how LLaMB is being utilized in your account. In the Avaamo Platform UI, click `Profile Icon>Settings>Usage reports>LLaMB usage` to access the `Usage` page.

**Note**: The data displayed in the `Usage` page is at the account level, meaning that LLaMB usage of any agent in the Avaamo Conversational AI Platform under the account using a [`LLaMB content skill`](/user-guide/llamb/get-started/step-1-create-llamb-content-skill) is consolidated and displayed in this page.

## 

Pre-requisites

*   Ensure that you have met all the general prerequisites. See [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites), for more information.
    
*   All users who can access the `Dashboard` can view all the sections of the `Usage` page, except for the `Limit threshold notification` section. This section is only accessible to users with the `Settings` role because configuring email threshold notifications is restricted and requires careful handling. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    

## 

How to use it?

LLaMB license for an account is based on "Generations". An agent can either respond to users by referencing a previously stored answer (in its cache), or by using an LLM. Only the LLM-based responses count towards your generation quota.

Hence, the primary purpose of the `Usage` page is to understand the "Generations" and to set up a list of users to receive alerts daily or when a specific generation quota is reached. This enables the developers/users to take appropriate action when the generation quota is reached or nearly reaching the threshold.

See [Generation usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage#generation-usage) and [Limit threshold notifications](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage#limit-threshold-notifications), for more information.

### 

LLaMB usage

At the top, you can view `LLaMB usage` , which represents the total count of all the LLaMB responses (generated or cached) across all the agents with the [LLaMB content skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill) in the current account.

### 

Generation usage

LLaMB license is based on generations and the total number of generations is configured for an account based on the license details. In this section, you can view the following details:

**Generation usage**: Shows the count of utilized generations at the account level out of the total available generations.

**Date range**: By default, the generation usage for a week (7 days) from the current date is displayed.

*   Click the date range to select different date options as per your requirements.
    
*   You can also view the Generation usage for Yesterday, Today, Last 7 Days, Last 30 Days, and Last 180 Days.
    
*   Click `Custom range` to pick your custom date range by selecting the start and end dates. You can view up to 6 months of usage in this section.
    

### 

Export usage report

You can now easily export your LLaMB usage data using `Export usage report` for better tracking and analysis.

*   Get a CSV report of your LLaMB usage, including regression testing details
    
*   Use it to analyze trends, optimize usage, and make data-driven decisions
    

Following are the different columns available in the exported LLaMB usage CSV file.

*   **Created By**: The name of the user who created the report.
    
*   **Environment**: The environment where the response was generated.
    
*   **Agent Type**: The type of agent (Standard or Advanced).
    
*   **Agent ID**: The unique identifier of the agent.
    
*   **Agent Name**: The name of the agent that generated the response.
    
*   **Agent Creation Date (UTC)**: The date when the agent was created, in UTC
    
*   **LLaMB Query Generations**: The total number of LLaMB-generated responses for the `first-time answers` when queries are asked.
    
*   **LLaMB Regression Generations**: The total number of LLaMB-generated responses for the `first-time answers` during `regression testing`.
    
*   **Cached Responses (Query + Regression)**: The total number of `cached` LLaMB responses, including both `queries and regression tests.`
    
*   **Generated Responses (Query + Regression)**: The sum of `LLaMB Query Generations` and `LLaMB Regression Generations.`
    
*   **Total Responses (Cached + Generated)**: The sum of `Cached Responses (Query + Regression)` and `Generated Responses (Query + Regression`**)**.
    

## 

Use case to understand LLaMB Usage

To understand the different components in the LLaMB Usage section, consider a `Travel assistant` where you have ingested a few travel policy documents in your LLaMB Content skill,

*   **LLaMB responses**: This is the sum of `Generations + Cached responses` for the specified date range.
    
*   **Generations**: Total number of generated LLaMB responses in the specified date range. If the user is asking a question on travel policy and this is the first time the answers are being generated by LLaMB, then it necessitates the use of LLM. This is counted as a generation.
    
*   **Cached responses**: Total number of cached responses in the specified date range. For faster results and better efficiency, the responses generated by LLaMB are cached. If a user asks the same or similar query, then instead of generating a response from LLM, the cached response is displayed to the user. In the `Travel assistant`, if the user is asking the same or similar question on travel policy that is already generated, then the cached response is displayed.
    
    *   If the retrieved context is the same, and the query has only a slight variation, a cached response is used. For example, if there is a similar query and the articles/documents matched are the same as any of the earlier responses, then the system uses a cached response.
        
    *   Once a response is cached, it is always available for future use as per the [data retention policy](/user-guide/ref/data-retention) and not deleted from the cache until then. This helps in optimizing the generation cost.
        
    
*   **Performance gain**: This represents the growth in generation capacity resulting from caching and is computed by dividing the number of cache responses by the number of generations.
    
*   **Usage over time**: A graphical representation of the LLaMB usage for the account in the specified data range.
    

## 

Limit threshold notifications

In this section, you can set up a list of users to receive alerts daily or when specific generation limits are reached. You can add multiple users per notification.

*   You can set up notifications to receive daily alerts or when the generation quota has reached 50%, 75%, or 90% of usage.
    

**Notes**:

*   To prevent inbox clutter, notifications for specific generation quota alerts are sent only once upon reaching the threshold except when the threshold is reached 100%. If the generation quota has reached 75%, then only the 75% generation quota alert is sent to the users, 50% generation quota alert, in this case, is not triggered again.
    
*   When the generation quota reaches 100%, the notification is sent to all the users configured to receive notifications for different threshold limits on a daily recurring basis until the generation quota limit is increased.
    
*   If you prefer to receive recurring alerts, you can configure the `Daily` alert settings.
    

*   For each trigger, specify the required email IDs for whom the notifications must be sent and press `Enter`. You can provide any number of email IDs to receive the generation quota notification; presently, there are no limitations on the quantity.
    
*   When the required generation quota is reached, the notification alert email is sent to the configured users.
    
*   When 90% or 100% generation quota is reached, warning messages are displayed in the `Usage` page allowing the users to take any further required actions.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/usage-reports/sms-usage

The `SMS usage` page is valuable for users with the [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms) enabled in their agents, providing a means to monitor and track `SMS usage` within their accounts. Navigate to `Profile Icon>Settings>Usage reports>SMS usage` to view.

You can also export the usage report from this page to analyze further. The page helps you to track the anticipated SMS billing associated with the company-level SMS configuration.

### 

What is Segment?

Messages longer than 160 characters are automatically split into parts (called "segments") and then re-assembled when they are received. Message concatenation allows you to send long SMS messages, but this increases your per-message cost, as SMS are billed per segment.

### 

How to use this page?

**Notes**:

*   The `SMS Usage` page is available only for users with the `Settings` role.
    
*   All the data in the page is captured in the UTC timezone.
    

*   At the top, you can view the data for 6 months with segments and message count. Click `Export all` to export 6 months of data in a CSV format.
    
*   Data for each month with segment and message summary is displayed. Click the month to view the complete history of SMS usage for each day of the month. The following information is displayed in the detailed view for each date:
    
    *   **SMS Outbound Count (Messages)**: Total number of messages sent by the Avaamo Conversational AI Platform.
        
    *   **SMS Outbound Usage (Segments)**: Total number of segments sent by the Avaamo Conversational AI Platform. Note that SMS are billed per segment. See [What is Segment?](/user-guide/how-to/manage-platform-settings/usage-reports/sms-usage#what-is-segment), for more information.
        
    *   **SMS Inbound Usage**: Total number of messages received by the Avaamo Conversational AI Platform.
        
    
*   Click `Export` to export the specific month's data in a CSV format.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/usage-reports/voice-usage

The `Voice Usage` feature helps you to track the anticipated voice billing usage associated with the company’s license configuration. It allows you to track monthly incoming and outgoing calls on your account and export usage reports for further analysis.

Click your `Profile` icon at the top-right corner, Navigate to `Settings -> Usage Reports` to access the `Voice Usage` option.

### 

How to use this page?

**Notes**:

*   The `Voice Usage` page is available only for users with the `Settings` role.
    
*   All the data in the page is captured in the UTC timezone.
    

*   You can view voice usage data for the past 12 months. To export data in a CSV format, use the `Export All` option in the top-right corner of the window.
    
*   Data for each month with segment and message summary is displayed. Click the month to view the complete history of Voice usage for each day of the month. C The following information is displayed in the detailed view for each date:
    
    *   **Incoming IVR calls**
        
    *   **Outgoing IVR calls**
        
    
*   Click `Export` to export the specific month's data in a CSV format.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm

The `Add your own LLM` feature allows you to configure your own `Large Language Model (LLM)` and `Text-to-Speech (TTS)` providers to power your AI agents. This enables you to use enterprise-hosted models, custom deployments, or preferred third-party providers instead of the default platform models.

You can also configure `LLaMB` for advanced knowledge and reasoning workflows. This configuration applies at the account level and is shared across all agents.

**Note: The** LLM Settings page is available only for users with the `Settings` role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

Before you begin

You must enable the `Add your own LLM`. To enable

*   Navigate to `Settings > LLM Settings`.
    
*   In the `LLM Configuration` section, enable the `toggle`.
    

### 

LLM Configuration

Use the `LLM Configuration` section to define which LLM provider and model your agents use.

**Steps to Configure LLM:**

Navigate to the LLM Configuration section. Enter the following details:

Field

Description

**Provider**

Select the LLM service provider you want to use (for example, Azure or Openai).

**Model**

Choose the specific model offered by the selected provider that powers your agent.

**Endpoint**

Enter the service endpoint URL where your model is hosted. This is used to send requests to the provider.

**Deployment name**

Specify the deployment identifier for your model (as configured on your provider’s platform).

**API version**

Enter the API version supported by your provider for the selected model.

**API key**

Provide the authentication key required to securely access your provider’s API.

Click **Save Configuration** to save the LLM configuration.

### 

TTS Configuration

Use the `TTS Configuration` section to control how agents generate voice responses for phone and SIP channels. Voice responses, including warm-up messages and conversational replies, use the configured TTS provider.

**Steps to Configure LLM:**

1.  Navigate to the `TTS configuration` and enter the following details:
    

Field

Description

**Provider**

Select the Text-to-Speech service provider you want to use for generating voice responses.

**Model**

Choose the voice or TTS model offered by the selected provider. This model determines speech quality and characteristics.

**Endpoint**

Enter the endpoint URL where your TTS model is hosted. This is used to send speech synthesis requests.

**API Key**

Provide the API key required to authenticate with your TTS provider. This ensures secure access to the service.

Click **Save Configuration** to save the TTS configuration.

### 

Force custom configuration (LLM and TTS)

After selecting a **Provider** in either **LLM Configuration** or **TTS Configuration**, you’ll see a **Force** toggle. This option determines whether the agent uses **instance-level settings** or **company-level custom configurations**.

The **Force** toggle is required if you want to apply custom models or endpoints configured at the company level.

#### 

How the Force toggle works

*   If **Force = disabled** The agent continues to use the **instance-level provider configuration**, even if custom company-level models or endpoints exist.
    
*   If **Force = enabled** The agent **overrides the instance-level settings** and uses the **company-level custom configuration** for the selected provider.
    

#### 

Example

1.  At the instance level, the provider (LLM or TTS) is set to **Azure**.
    
2.  At the company level, custom models and endpoints are configured.
    
3.  If **Force is disabled**, the agent continues using the instance-level Azure configuration.
    
4.  If **Force is enabled**, the agent switches to the company-level custom configuration.
    

**Note:** The Force option applies only to `LLM` and `TTS` configurations. It is `not applicable` to the `LLaMB` section on the LLM Settings page.

### 

LLaMB Configuration

The `LLaMB Configuration` section allows you to integrate custom knowledge and reasoning services.

**Steps to Configure LLM:**

Navigate to the `LLaMB configuration` and enter the following details:

Field

Description

**Provider**

Select the LLaMB service provider used for knowledge retrieval and reasoning.

**Model**

Choose the LLaMB model that will handle knowledge processing and query execution.

**Region**

Specify the region where your LLaMB service is hosted (`for example:` `_eastus_` or `_westus_`).

**Endpoint**

Enter the endpoint URL for your LLaMB service. This is used to send knowledge and retrieval requests.

**API Key**

Provide the API key required to authenticate with the LLaMB service and securely access your knowledge backend.

Click **Save Configuration** to save the LLaMB configuration.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/privacy

You can set your Agent's Personally Identifiable Information (PII) settings in the `Privacy` page.

To access the privacy settings:

1.  Click on your profile icon and select **Settings**.
    
2.  Navigate to the **Privacy** section.
    

You can configure two predefined intents available in every agent, allowing users to gain insights into their stored PII data

You can view the default system PII entities under the `Default system PII entities` tab, which lists all the system entities that are masked by default.

You can request the PII data under the `PII data request` tab.

1.  Click `Request` to export user queries containing PII data. You can specify the list of users for whom this request applies, fill in all the required details, and click `Submit`.
    

1.  Click `Request` to delete user queries containing PII data. Fill in all the required details, then click `Submit`**.**

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/identity-providers

The Avaamo platform supports the Single Sign On (SSO) feature integration with SAML. It allows the users to log in with only one set of login credentials and makes it easier for users to use several different programs without having to type in several different usernames and passwords.

Security Assertion Markup Language (SAML) is an open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.

The users can integrate the SSO with SAML support on the Avaamo UI (SP) with Microsoft Azure, G Suite, and Okta (IdP).

### 

Add Identity Service Provider

The user can add a new Identity Service Provider by clicking on Add New. Avaamo platform supports Microsoft Azure, Okta, and G Suite.

**Microsoft Azure** - With SAML single sign-on, Azure AD authenticates to the application by using the user's Azure AD account. Azure AD communicates the sign-on information to the application through a connection protocol.

**Okta** - To support SAML-based Single Sign-On from Okta set up an application in Okta with the details of your application (the new SAML Service Provider or “SAML SP”).

**G Suite** - The SAML-based Federated SSO article describes the SAML instance where Google is the identity provider (IdP). This group of articles describes the SAML instance where Google is the service provider (SP) and uses 3rd party identity providers.

On the **Add New** popup window:

1.  Enter the **Identity Provider Name** (IdP). A unique identity provider name for your identification. This name will be displayed in the drop-down list when you are selecting an identity provider for your dashboard users while either creating a new user or editing an existing one. For example, Microsoft Azure, G-Suite, Okta, etc.
    
2.  Enter the **App ID/ Entity ID**, this is the application configured on the Identity Service Provider.
    
3.  Enter the **Single Sign-On URL**.
    
4.  Enter the **Certificate Signature**, this is downloaded once the application is created. So, browse your local disk and upload the certificate.
    
5.  Click **Sign request**, if you wish to send the Avaamo certificate and key in the SAML request.
    
6.  Click on **Submit.**
    

You can edit the Identity Provider settings and also, delete an Identity Provider.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-g-suite

G Suite is a package of cloud-based services that can provide your company or school with a whole new way to work together online—not just using email and chat, but over video conferences, social media, real-time document collaboration, and more.

A user can use their G Suite credentials to sign in to enterprise cloud applications via Single Sign-On (SSO). An identity and access management (IAM) service provide its administrators with a single place to manage all users and cloud applications. You don't have to manage individual user IDs and passwords tied to individual cloud applications for each of your users. An IAM service provides your users with a unified sign-on across all their enterprise cloud applications.

This page describes how to add Avaamo dashboard to G Suite and configure SSO-support with SAML 2.0.

**Note**: This page reflects a 3rd party’s application which may change. If the steps described here do not match what you see in your G Suite account, you can use the generic Avaamo dashboard SAML documentation, along with the IdP’s documentation.

### 

Setup G Suite Account

To setup, your G Suite account for SAML support, follow the steps below:

*   Login to your admin.google.com account using your G Suite account credentials.
    
*   Select Apps on the main page.
    

*   Select SAML apps
    

*   Create a new application. Click on the “+” button or “ SETUP MY OWN CUSTOM APP”.
    

*   Download Certificate or IDP Metadata, save SSO URL. Use notepad to open certificate or Metadata file, save lines starting from -----BEGIN CERTIFICATE----- to -----END CERTIFICATE-----.This information will be used for the Avaamo dashboard SAML configuration.
    

*   Enter the Application Name. For example, the Avaamo dashboard.
    

*   Enter the details for:
    
    Enable Signed Response, select Name ID Format
    

*   Add new mapping for User.email.
    

*   Click on Finish. And OK on the popup window.
    

*   Enable Avaamo Dashboard application for All users.
    

*   Users with access to any of the web pages on your Avaamo Dashboard server will be redirected to Google G Suite authentication.
    

### 

Avaamo Admin SAML Integration

*   Open a new Chrome browser window, and enter cx.avaamo.com(cx is the platform assigned to you).
    
*   Login with your admin credentials. On the Avaamo dashboard, click on the action over the button (the three dots) for the menu bar. Select Settings.
    
*   On the settings page click on **Identity Providers** and click on the Add New button.
    

*   On the New Identity Provider popup window, set the value of **Authentication Identity Provider** (Optional) to ‘G-suite’ and submit to save your configuration.
    
    *   **Identity Provider Name:** A unique identity provider name for your identification. This name will be displayed in the drop-down list when you are selecting an identity provider for your dashboard users while either creating a new user or editing an existing one. For example, Microsoft Azure, G-Suite, Okta, etc..
        
    *   **App Id / Entity Id**: This Id must exactly match the Entity Id that you have used while configuring single sign-on with your application in the Basic SAML Configuration section on G Suite.
        
    *   **Single Sign-On URL**: Copy the Login URL from SAML Signing Certificate Section from your application configuration on G Suite and paste it in this section.
        
    *   **Certificate Signature:** Download the raw certificate from ​SAML Signing Certificate ​Section from your app configuration on G Suite and upload it here.
        
    

Now the ‘G-suite’ configured user tries to login to [https://cXX.avaamo.com/#/](https://cxx.avaamo.com/#/) with client email and the user will not be prompted for an OTP.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure

The Security Assertion Markup Language (SAML) is an XML standard that facilitates the exchange of user authentication and authorization data across secure domains.

SAML-based SSO services involve communications between the user, an identity provider that maintains a user directory, and a service provider. When a user attempts to access an application from the service provider, the service provider sends a request to the identity provider for authentication. The service provider then verifies the authentication and log the user in. The user does not have to log in again for the rest of his session.

The Avaamo platform supports Single Sign-On (SSO) provided by different Identity Service Providers. In this article, the steps to integrate MS Azure with the Avaamo platform are detailed out:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#before-you-begin)
    
2.  [Create SAML SSO application in Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#create-saml-sso-application-in-azure)
    
3.  [Configure SAML SSO application in Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#configure-saml-sso-application-in-azure)
    
4.  [Integrate MS Azure SSO application in Avaamo Platform](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#integrate-ms-azure-sso-application-in-avaamo-platform)
    
5.  [Testing integration](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#testing-integration)
    

Azure Active Directory Seamless Single Sign-On (Azure AD Seamless SSO) automatically signs users in when they are on their corporate devices connected to the network.

## 

Before you begin

Ensure you meet the following pre-requisites before configuring and integrating the SAML SSO Azure application in the Avaamo Platform:

*   Administration login credentials for MS Azure account
    
*   A callback URL must be specified in the MS Azure SSO application. Contact Avaamo support to get the callback URL.
    
*   You have configured the **Settings** roles for your user. Only a user with the **Settings** role can configure Identity providers in the Avaamo Platform. See [Users and Roles](/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information.
    

## 

Create SAML SSO Application in Azure

To integrate the Avaamo platform for Single Sign-On, you need to have access to an MS Azure account and Avaamo login credentials. To configure the SSO, follow the steps below:

*   Open a browser (Safari, Chrome, Firefox) and enter [https://portal.azure.com​](https://portal.azure.com/).
    
*   Login into the MS Azure account using the Administration login credentials.
    

*   From the left navigation pane, select **Azure Active Directory**.
    

*   In the **Azure Active Directory** page, select **Enterprise applications** from the left navigation menu to create a new application.
    

*   In the **Enterprise applications** page, click **New application**.
    

*   In the **Add an application** page, select **Non-gallery application**.
    

*   In the **Add your own application** page, enter a **Name** for your application and click **Add**. **Example**: Avaamo Application.
    
*   Select **Single sign-on** from the left navigation pane.
    

*   Choose **SAML** as your Single sign-on method.
    

*   In the Avaamo Application-SAML-based sign-on, configure the [Basic SAML Configuration](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#basic-saml-configuration), [User Attributes and Claims](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#user-attributes-and-claims), [SAML Signing Certificate](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#saml-signing-certificate), and [Add Users and Groups](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#add-users-and-groups).
    

## 

Configure SAML SSO Application in Azure

After you create a SAML SSO application in MS Azure, you can configure the [Basic SAML Configuration](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#basic-saml-configuration), [User Attributes and Claims](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#user-attributes-and-claims), [SAML Signing Certificate](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#saml-signing-certificate), and [Add Users and Groups.](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#add-users-and-groups)

### 

Basic SAML Configuration

Click edit (pencil icon) in the **Basic SAML Configuration section** and specify the following details:

*   **Identifier (Entity ID)**: Enter a unique identifier for your application. Make a note of the Entity ID. You must specify the same when you configure the identity providers in the Avaamo Platform.
    
*   **Reply URL (Assertion Consumer Service URL)**: This is the callback URL of the Avaamo Platform, such as [_https://cx.avaamo.com/dashboard\_user/users/saml/auth_](https://cx.avaamo.com/dashboard_user/users/saml/auth). Contact Avaamo support to get the callback URL.
    
*   **Relay State**: This is usually the URL where you access the SSO. Example: [https://cx.avaamo.com/](https://cx.avaamo.com/).
    
*   Click **Save**.
    

### 

User Attributes and Claims

Click edit (pencil icon) in the **User Attributes and Claims** section and update the claim name.

*   In the **User Attributes & Claims** page, click **Claim name.**
    

*   Select **user.mail** in **Source attribute** and click **Save.**
    

#### 

Groups claim policy

*   Click claim name associated **user.groups.** The following options are supported:
    
    *   Groups assigned to the application (Recommended): Only those groups that are a part of the application and that the user belongs to is synced with the Avaamo Platform.
        
    *   All groups: All the groups that the user belongs to irrespective of the application is synced with the Avaamo Platform.
        
    

### 

SAML Signing Certificate

Click edit (pencil icon) in the **SAML Signing Certificate** section and verify if the signing algorithm is SHA-256.

Download the Certificate (Raw) in your local environment. This certificate must be uploaded to the theAvaamo Admin page under the Single Sign-on URL.

### 

Setup Application Roles

Avaamo Platform allows you to create users and associate users to different out-of-the-box roles based on the user's responsibility in the company. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

To facilitate seamless user-role management in MS-Azure AD, you must create a few roles in your MS-Azure application and later map these roles to appropriate users and groups. Once mapped, the roles applicable to a user is automatically applied when a user logs in to the Avaamo Platform Dashboard after [MS-Azure SSO integration](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#integrate-ms-azure-sso-application-in-avaamo-platform).

*   Navigate to **App registrations** and click the Application where you wish to add the roles.
    
*   In the selected Application, navigate to **App roles** and create the following roles. Note that the role names are case-sensitive:
    
    *   development
        
    *   testing
        
    *   staging
        
    *   production
        
    *   live\_agent
        
    *   settings
        
    *   broadcast\_read
        
    *   broadcast\_manage
        
    *   broadcast\_send
        
    *   cap\_supervisor
        
    

**Note**: These roles get mapped to the roles in the Avaamo Platform when you integrate MS-Azure SSO. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

Add Users and Groups

The next step is to add users and groups to the SSO application.

*   Click **Users and Groups** from the left navigation pane.
    

*   Search and select for an existing user or group. For creating new users or groups, navigate to **App registrations** and click the **Application** where you wish to add new users or groups.
    

**Key Point**: Instead of managing individual users, you can also create groups with users and assign roles to the groups. If you have added new users, then you can directly assign the users to the group based on their roles and responsibilities.

*   Select the role you wish to assign to the user or group. Note that you can only select one role at a time. If you wish to assign multiple roles to users or groups, then select user or group again and assign the required role. Repeat the assignment of roles to users or groups as per your requirement. Click **Assign.**
    

Once you have assigned the user or group, integrate the Azure SAML support on the Avaamo platform.

## 

Integrate MS Azure SSO application in Avaamo Platform

To integrate the Azure SAML SSO support on Avaamo, follow the steps below:

*   Login to Avaamo Platform using credentials with **Settings** role access. Only a user with the **Settings** role can configure the identity provider. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   On the Avaamo dashboard, click the name initials in the top-right corner. Click **Settings**.
    
*   On the **Settings** page, click **Identity Providers** and click **Add New**.
    

*   In the **New Identity Provider** popup window, enter the following details:
    
    *   **Identity Provider Name:** A unique identity provider name for your identification. This name is being displayed in the drop-down list when you are selecting an identity provider for your dashboard users while either creating a new user or editing an existing one. For example, Microsoft Azure, G-Suite, Okta, etc..
        
    *   **App Id / Entity Id:** This Id should exactly match the Entity Id that you have used while configuring single sign-on with your application in the [Basic SAML Configuration](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#basic-saml-configuration) section on Microsoft Azure.
        
    *   **Single Sign-On URL:** Copy the Login URL (App Federation Metadata Url) from the [SAML Signing Certificate](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#saml-signing-certificate) section of your application configuration on Microsoft Azure and paste it in this section.
        
    *   **Certificate Signature:** Upload the certificate that you have downloaded from the Microsoft Azure SSO application. See the [SAML Signing Certificate](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#saml-signing-certificate) ​section, for more information.
        
    

## 

Testing Integration

After you configure and integrate MS-Azure SSO with Avaamo Platform, the users are automatically signed in to the Avaamo Platform when they are on their corporate devices and connected to the network.

*   Roles applicable to a user is automatically assigned when a user logs in to the Avaamo Platform Dashboard. If a user is mapped to multiple groups, then roles assigned to a user is a union of roles from all the groups.
    
*   If you have **Settings** role access, then you can view the groups as per the [groups claims policy](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#groups-claim-policy) setup in MS-Azure AD in the Settings -> User & Groups -> Groups page. See [Syncing with Azure AD groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#syncing-with-azure-ad-groups), for more information on how to edit and delete groups.
    
*   You can now manage all the users and groups via Azure AD and it is synced when the user logs in to the Avaamo Platform Dashboard. For example, if you assign the roles for a group, then the same is applied to the user when the user logs out and logs back into the Avaamo Platform.
    
*   If users logout from the Avaamo dashboard, then the users are logged out from MS-Azure IDP too.
    

**Note**: If the user is already logged in to the Avaamo Platform Dashboard and the same user is updated in the MS-Azure AD, then the user must log out and log back in for the changes to get reflected.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-okta

Configure your application on Okta to enable the SAML support-based Single Sign-On. In SAML terminology, you can configure Okta (your SAML Identity Provider or "SAML IdP"), with the details of your application (the new SAML Service Provider or "SAML SP").

## 

Before you begin

Ensure you meet the following pre-requisites before configuring and integrating the `SAML SSO Okta` application in the Avaamo Platform:

*   Administration login credentials for the Okta account
    
*   You have configured the **Settings** roles for your user. Only a user with the **Settings** role can configure Identity providers in the Avaamo Platform. See [Users and Roles](https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information.
    

## 

Create SAML Application on Okta

Setup and configure your application on Okta with the steps below:

*   Access your Okta organization by logging in as a user with administrative privileges.
    
*   Click on the `Admin` button at the top of the page to enter the administrative interface.
    

*   Navigate to the `Dashboard>Getting Started` section and click on `Add App`.
    

*   Click the `Create New App` button to begin the setup process.
    

*   In the `Create a new app integration` popup window, select the radio button for **SAML 2.0** under the `Sign-in method` section.
    
*   Click `Next` .
    

## 

Configure SAML Application on Okta

After you create a SAML SSO application in Okta, you can configure the below settings.

### 

Configure General Settings

*   In the `General Settings` screen, enter "Avaamo SAML Application" in the **App name** field.
    
*   Click `Next` .
    

### 

Configure SAML

Under configure SAML, for section A - SAML settings, paste the following URL in the Single sign-on URL and Audience URI (SP Entity ID) fields:

**Single sign-on URL** \- [https://cx.avaamo.com/dashboard\_user/users/saml/auth](https://c*.avaamo.com/dashboard_user/users/saml/auth), Here, "cx" in the URL is the Avaamo instance that you are using. **Audience URI (SP Entity ID)** - AvaamoApp

Under the `Attribute Statements (optional)` section add the following name and value.

*   **Name** - user.mail
    
*   **Name format** \- Unspecified
    
*   **Value** \- nameidentifier
    

Click `Add Another` to enter the fields for user email:

*   **Name** \- user.mail
    
*   **Name format** \- Unspecified
    
*   **Value** \- emailaddress
    

Click `Add Another` to enter the fields for firstname:

*   **Name** \- [http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname](http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname)
    
*   **Name format** \- URI Reference
    
*   **Value** - user.firstName
    

Click `Add Another` to enter the fields for lastname:

*   **Name** \-- [http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname](http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname)
    
*   **Name format** \-- URI Reference
    
*   **Value** \-- user.lastName
    

Click `Add Another` to enter the fields for roles:

*   **Name** \- [http://schemas.microsoft.com/ws/2008/06/identity/claims/role](http://schemas.microsoft.com/ws/2008/06/identity/claims/role)
    
*   **Name format** \- URI Reference
    
*   **Values** - user.roles
    

Under the `Group Attribute Statements (optional)` section add the following names and values.

*   **Name** \- [http://schemas.microsoft.com/ws/2008/06/identity/claims/groups](http://schemas.microsoft.com/ws/2008/06/identity/claims/groups)
    
*   **Name format** \- URI Reference
    
*   **Value** \- can be the group's name according to your filter preferences.
    

*   For section B - `Preview the SAML assertion generated from the information above`, Click `Preview the SAML Assertion` to preview and verify your configuration.
    
*   Click `Next` .
    

**Note:** The Preview feature can be used to verify changes and SAML assertions. However, the following conditions must be met:

*   The user must be logged in.
    
*   The user must be assigned to the app's user list.
    
*   The user must have a group.
    
*   The user must have a role.
    

### 

Complete the Setup:

*   Under the `Feedback` section, choose the appropriate option (e.g., an Okta customer or a software vendor), and click "`Finish`."
    

Under the Feedback tab, use the settings that work best for your company and the application.

*   On the General settings page, scroll down to the **App Embed Link** section, now copy the embed link. This URL must be added to the Avaamo UI to configure Okta SAML support.
    

### 

SAML Signing Certificate

1.  Navigate to `Applications -> Applications.`
    
2.  Select your application and go to the SSO tab.
    
3.  Navigate to the `SAML Signing Certificates` Tab. Click `Actions` and select `Download certificate`.
    

**Note:** Only **SHA-2 type SAML Signing Certificates** are supported for download.

### 

Setup Application Roles

Adding these roles ensures that Okta correctly sends role information in the SAML assertion, which Avaamo can use to manage user roles and permissions effectively.

1.  Navigate to `Profile Editor` the Okta dashboard. Select `Avaamo SAML Application User` app.
    

1.  Click `Add Attribute` under the `Attributes` Tab.
    
2.  Fill out the details and click `Save` to apply the changes.
    

Options

Values

Data type

string array

Display name

Roles

Variable name

roles

Description

Defines the specific roles or access levels assigned to users within the Avaamo platform. These roles determine the user's permissions and access to various features and environments within the application.

Enum

Leave this option unchecked.

Attribute required

Click the checkbox if you want to make this attribute compulsory

User permission

Read-Write

### 

Assign Application

1.  Navigate to the `Directory` tab and click on `People`**.** Select the profile to which you want to assign an application.
    

1.  Click on `Assign Applications`.
    

1.  Choose the application you want to assign from the list. Click `Assign`.
    

1.  Click `Done`.
    

### 

Add Roles to Users

1.  Navigate to the `Directory` tab and click on `People`. Select the profile you wish to edit.
    
2.  Navigate to `Profile` tab. Click `edit` under `Attributes` option.
    

1.  Scroll down and find the attribute `Roles` and click `Add Another` to add value to it. Below is the list of platform-supported roles the user can configure. Note that the role names are case-sensitive: broadcast\_manage broadcast\_read broadcast\_send cap\_admin cap\_supervisor development live\_agent production settings staging supervisor testing cap\[Depending on the features enabled for your company\] campaign(broadcast) \[Depending on the features enabled for your company\]
    

**Note**: These roles get mapped to the roles in the Avaamo Platform when you integrate Okta SSO. See [Roles and Permissions](https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

1.  Click `Save` to assign roles to the user.
    

### 

Add Users to Groups

1.  Navigate to `Groups`. It displays all the existing Groups. Select the group you wish to add users.
    

1.  Click `Assign people`.It displays all the users.
    

1.  Click the "+" symbol to add users to the group.
    

**Key Point**: Instead of managing individual users, you can also create groups with users and assign roles to the groups. If you have added new users, you can directly assign them to the group based on their roles and responsibilities.

Now, let us integrate the application on the Avaamo UI.

## 

Avaamo Admin SAML Integration

To integrate the Okta SAML SSO support on Avaamo, follow the steps below:

1.  Open a new Chrome browser window, and enter cx.avaamo.com(cx is the platform assigned to you).
    
2.  Login with your admin credentials.
    
3.  On the Avaamo dashboard, click on the action over the button (the three dots) for the menu bar. Select **Settings**. On the settings page click on **Identity Providers**.
    

1.  Click on Add New. On the **New Identity Provider** popup window, enter the following details:
    

**Identity Provider Name**\-- A unique identity provider name for your identification. This name is displayed in the drop-down list when selecting an identity provider for your dashboard users while creating a new user or editing an existing one. For example, Microsoft Azure, G-Suite, Okta, etc..

**App Id / Entity Id**\-- This Id should exactly match the `Audience URI (SP Entity ID)` that you have used while configuring sign-on with your application in the [Configure SAML](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-okta#configure-saml) section on Okta.

**Single Sign-On URL**\-- Copy the Login URL from the `Embed Link` Section from your application configuration on Okta and paste it in this section.

**Certificate Signature**\-- Download the raw certificate from ​the [SAML Signing Certificate](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-okta#saml-signing-certificate) ​Section from your app configuration on Okta and upload it here.

**Sign request:** This can be unchecked.

### 

**Assign an Identity Provider to a User**

Once the application is configured on Okta and integrated with the Avaamo platform, assign the identity provider to a user for an SSO login.

1.  Navigate to the Users and Groups sub-tab.
    
2.  Select the user you want to assign the SSO login, click on the action over the button under actions, and click on edit.
    
3.  On the popup window, under **Authentication Identity Provider** select Okta from the drop-down list.
    

## 

Testing Integration

After you configure and integrate Okta SSO with Avaamo Platform, the users are automatically signed in to the Avaamo Platform when they are on their corporate devices and connected to the network.

*   Roles applicable to a user are automatically assigned when a user logs in to the Avaamo Platform Dashboard. If a user is mapped to multiple groups, then roles assigned to a user are a union of roles from all the groups.
    
*   You can now manage all the users and groups via Okta and it is synced when the user logs in to the Avaamo Platform Dashboard. For example, if you assign the roles for a group, then the same is applied to the user when the user logs out and logs back into the Avaamo Platform.
    
*   If users log out from the Avaamo dashboard, then the users are logged out from Okta too.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-platform-settings/security-policy

You can configure a list of domains in the **Security policy** page from where the resources are allowed to be loaded in the Avaamo platform. This feature is useful in agent development when you are using resources such as fonts, assets, and web pages (web view) from an external source that is not whitelisted in the Avaamo Platform.

**Notes**:

*   The domains listed on the **Security policy** page ensures that the resources are accessible from your Avaamo dashboard.
    
*   When you deploy the agent in other channels, say on another website, then it is upto the security policies of the parent website to handle the accessibility of such resources.
    
*   This option is available only for users with the **Settings** role.
    
*   Contact your administrator to learn about the whitelisted IPs for your dashboard.
    

Consider that you wish to include a font from an external source in the custom CSS of your web channel that is not whitelisted in the Avaamo Platform. When you test the agent using Simulator, you can view the error that the font is not loaded.

**To add security policy**:

*   Click your user initials at the top right corner. Click **Settings.**
    
*   Navigate to the **Security policy** in the left navigation menu.
    

*   **First field**: List of domains, separated by spaces from where the resources are allowed to be loaded in the Avaamo platform.
    
*   **Second field**: List of script-src domains, separated by spaces from where the resources are allowed to be loaded in the Avaamo platform for webview HTML.
    
*   Click **Update.**
    
*   You can now test the same agent and the font from the domain gets loaded as specified in the Security policy.

---

## Source: https://docs.avaamo.com/user-guide/ref/speech-synthesis-markup-language-ssml

**Speech Synthesis Markup Language** (**SSML**) is an XML-based markup language for speech synthesis applications. It is a recommendation of the W3C's voice browser working group. SSML is often embedded in VoiceXML scripts to drive interactive telephony systems. See [Speech Synthesis Markup Language (SSML) Version 1.1](https://www.w3.org/TR/speech-synthesis11/), for more information.

Avaamo Platform provides all the standard SSML tags out-of-the-box as per the W3C specifications. You can add these tags in your agent responses to build a conversational flow for your C-IVR channel. See [Conversation - IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

This article aims to provide a detailed list of all supported SSML tags in the Avaamo Platform with examples for easy understanding.

## 

At-a-glance

The following table summarizes a list of supported SSML tags in the Avaamo Platform that helps you to provide agent responses when you deploy your agent in the C-IVR or the phone channel:

The following example demonstrates the usage of SSML tags supported in the Avaamo Platform:

Copy

    <speak> 
        Alright. Let's start with your Order number. 
        Can you tell me your Order number, one digit at a time 
        or enter your Order number on your phone's dial pad.
    </speak>

**Key point:** All the SSML tags listed in this section are supported in built-in voice. However, only certain tags are supported in custom voice. See`Supported in Custom voice?` column for more information.

Tag

What and When to use?

Supported in Custom voice?

[<speak>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-speak-greater-than)

This is where you start constructing the SSML for the C-IVR channel. It is the root element and all the other SSML elements must be enclosed in the <speak> tag.

[<break>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-break-greater-than)

Use this to add a pause to your text or to remove in-built pauses added by the Platform. This can be very useful when the agent response has a lengthy text or if the text contains punctuations or conjunctions.

[<lang>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-lang-greater-than)

Use this to add a specific language accent in your text. This is useful when the agent voice and the response are in different languages or when you have a mixed set of language responses in your agent.

[<emphasis>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-emphasis-greater-than)

Use this to emphasize certain phrases or text in your agent response. This is useful when you wish to express a tone of exclamation or when you wish to stress the importance of certain phrases or sentences in the agent response.

[<say-as>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-say-as-greater-than)

Use this with the `interpret-as` attribute to help your agent say special certain words, phrases, numbers, or text, in a way it must be said.

`expletive` and `fractions` tags are not supported for custom voice.

All except fractions and expletive

[<phoneme>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-phoneme-greater-than)

Use this to read out a phonetic pronunciation of the specified text.

This tag is not supported for custom voice.

❌

[<sub>](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-sub-greater-than)

Use this with an _alias_ attribute to read out a different word for the specified text. Typically, used for abbreviations or acronyms.

This tag is not supported for custom voice.

❌

[<p> or Paragraph tag](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-p-greater-than)

Use this when you wish to add a pause between paragraphs in your text.

[<s> or Sentence tag](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-s-greater-than)

Use this when you wish to add pauses between lines or sentences in your text.

## 

<speak>

This is the root element of all the SSML tags in the Avaamo Platform. All the SSML elements must be enclosed in the <speak> tag.

## 

<break>

You can use the **break** tag to add pauses to your text or to remove in-built pauses added by the Platform. This can be very useful when the agent response has a lengthy text or if the text contains conjunctions and punctuations that require pauses to deliver the responses to the users smoothly.

Example: In the following example, there is a pause of 3 seconds before the conjunction "or":

#### 

Format:

You can set the pause duration based on the time attribute (in seconds or milliseconds) or based on the strength (pause of a comma, sentence, or paragraph) attribute.

Attributes

Description

Mandatory

Or Optional

time

Indicates the duration of the pause in seconds or milliseconds in the format:

`<<number>>s` or `<<number>>ms`

Example: 3s or 500ms. You can set a maximum value of 5000ms.

Optional

strength

Indicates the duration of the pause with respect to its strength:

*   **none/x-weak**: No pause. Use this if you wish to remove the default pause, say after full-stop or a period.
    
*   **weak/medium**: Sets a pause duration equivalent to the pause required after a comma.
    
*   **strong**: Sets a pause duration equivalent to the pause required after a sentence.
    
*   **x-strong**: Sets a pause duration equivalent to the pause required after a paragraph.
    

Optional

This is an optional tag and if not used, the pause is determined by the context of the sentence.

## 

<lang>

You can use the **lang** tag to add a specific language accent in your text. This is useful when the agent's voice and the response are in different languages or when you have a mixed set of language responses in your agent.

Example: Consider that by default, your agent's default voice is in en-US language and you have a French text in your response. Unless the **lang** tag is specified, all the responses read out to the user is in the en-US accent. If you wish the French text in your response to be read out in a French native accent, then you can use the **lang** tag.

#### 

**Format**:

In the lang tag, specify the language using the **xml:lang** attribute.

Attributes

Description

Mandatory

Or Optional

xml:lang

Adds a specified language accent to the specified text in the tag.

Language code is in ISO language format. See [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and [Support languages](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#supported-languages-in-c-ivr-channel), for more information.

Mandatory

## 

<emphasis>

You can use the **emphasis** tag to emphasize certain phrases or text in your agent response. This is useful when you wish to express a tone of exclamation or when you wish to stress the importance of certain phrases or sentences in the agent response.

Example: In the following example, the order number MP0543 has an emphasis with a strong level, hence the text is read out louder and slower.

#### 

Format:

When you use this tag, the tone and speed of the phrase specified in the tag change. More emphasis text is read out louder and slower. Less emphasis text is quieter and faster. The level of emphasis can be specified using the **level** attribute:

Attributes

Description

Mandatory Or

Optional

level

Indicates the level of emphasis to be used for the specified text:

*   **strong**: Volume is louder and speed is slower.
    
*   **moderate**: Volume is louder and speed is slower but still comparatively faster than strong. This is the default emphasis.
    
*   **reduced**: Volume is quieter and speed is faster.
    

Mandatory

## 

<say-as>

You can use the **say-as** tag with the **interpret-as** attribute to help your agent say special certain words, phrases, numbers, or text, in a way it must be said. Using this tag helps your agent understand what it has to say without confusion.

Example: In the following example, the date is read out as "December thirty-first, twenty-twenty":

#### 

Format:

Attributes

Description

Mandatory Or

Optional

interpret-as

Indicates the level of emphasis to be used for the specified text:

*   [ordinal](/user-guide/ref/speech-synthesis-markup-language-ssml#ordinal): Interprets the numerical text as ordinals such as first, second, third.
    
*   [cardinal](/user-guide/ref/speech-synthesis-markup-language-ssml#cardinal): Interprets the numerical text as cardinal numbers.
    
*   [characters](/user-guide/ref/speech-synthesis-markup-language-ssml#characters): Interprets each character in the text separately.
    
*   [date](/user-guide/ref/speech-synthesis-markup-language-ssml#date): Interprets the date in the text according to the specified format.
    
*   [digits](/user-guide/ref/speech-synthesis-markup-language-ssml#digits): Interprets each digit in the numerical text separately.
    
*   [fractions](/user-guide/ref/speech-synthesis-markup-language-ssml#fractions): Interprets the proper fractions and mixed fractions in the text.
    
*   [expletive](/user-guide/ref/speech-synthesis-markup-language-ssml#expletive): Beeps out the content in the tag.
    
*   [telephone](/user-guide/ref/speech-synthesis-markup-language-ssml#telephone): Interprets the text provided in the telephone format.
    

Mandatory

format

Indicates the format to be used for interpreting date text.

Optional. Mandatory only for date.

### 

ordinal

Interprets the numerical text as ordinals such as first, second, and third. Example: The following text is read out as "Congratulations. Your first order is on its way. "

### 

cardinal

Interprets the numerical text as cardinal numbers. Example: The following text is read out as "Ninety- eight thousand six hundred and fifty-four. "

Note that the interpreting cardinal is based on the chosen language of the agent.

Example: In an en-IN language, 1023456 is interpreted as "Ten lakhs twenty-three thousand four hundred and fifty-six", whereas, in en-US language, it is interpreted as "One million twenty-three thousand four hundred and fifty-six".

### 

characters

Interprets the characters in the text separately. Example: The following text is read out as "S", "P", "O", and "T" separately instead of the word "Spot".

### 

date

Interprets the date in the text. **date** must be specified with a format such as mdy, dmy. Example: The following text is read out as "December 2nd, 2006".

The following formats are supported:

Format

Description

mdy

month-day-year

dmy

day-month-year

ymd

year-month-day

md

month-day

dm

day-month

ym

year-month

my

month-year

dy

day-year

yd

year-day

d

day

m

month

y

year

### 

digits

Interprets each digit individually in the numerical text. Example: The following text is read out as "9", "8", "6", "5", and "4" digits separately.

### 

fractions

**Note**: `fractions` tag is supported only for built-in voice and not supported for custom voice.

Interprets the fractions and mixed fractions in the text. Note that mixed fractions must be of the form: `cardinal number`+`cardinal number`/`cardinal number`

Example: The following text is read out as "three half":

Example: The following text is read out as "three tenths":

### 

expletive

**Note**: `expletive` tag is supported only for built-in voice and not supported for custom voice.

'Beeps out the content in the tag. Typically, used for censored or confidential content.

### 

telephone

Interprets the text provided in telephone format. This is useful when you have a text with continuous numbers and not in the telephone format such as 222-678-1234. By default, the text in the format is read out with pauses in the telephone format without requiring you to specify the "telephone" format. You can also use this value to handle telephone extensions, such as 2122241555x896.

Note that the interpreting telephone is based on the chosen language of the agent. Example: In an en-IN language, 2122241555 is interpreted as "two one two <<pause>> double two-four <<pause>> triple three-five", whereas, in en-US language, it is interpreted as one digit at a time with pauses after every three digits.

**Note**: Currently the telephone tag option is available for voices speaking in the following languages:

*   English language variants (en-AU, en-GB, en-IN, and en-US)
    
*   Spanish language variants (es-ES, es-MX, and es-US)
    
*   French language variants (fr-FR and fr-CA)
    
*   Portuguese variants (pt-BR and pt-PT)
    
*   German (de-DE)
    
*   Italian (it-IT)
    
*   Japanese (ja-JP)
    
*   Russian (ru-RU).
    

Also note that in some cases, languages such as Arabic (arb) automatically handle the number set as a telephone number and hence telephone tag is not required.

## 

<phoneme>

**Note**: `phoneme` tag is supported only for built-in voice and not supported for custom voice.

You can use this tag to read out a phonetic pronunciation of the specified text. This is useful when you have text that requires a different pronunciation than the standard pronunciation associated by default with the language.

Example: In the following example, "pecan" is assigned different pronunciation using alphabet and ph attributes:

#### 

Format:

Attributes

Format or Values

Description

Mandatory or Optional

alphabet

*   ipa
    
*   x-sampa
    

*   **ipa**: Indicates that the International Phonetic Alphabet (IPA) must be used for phonetic pronunciation.
    
*   **x-sampa**: Indicates that the Extended Speech Assessment Methods Phonetic Alphabet (X-SAMPA) must be used for phonetic pronunciation.
    

Mandatory

ph

String

Indicates phonetic symbols of pronunciations. See [Supported languages in C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#supported-languages-in-c-ivr-channel). Also, see

[International Phonetic Alphabet (IPA)](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) and [Extended Speech Assessment Methods Phonetic Alphabet (X-SAMPA)](https://en.wikipedia.org/wiki/X-SAMPA), for more information.

Mandatory

## 

<sub>

**Note**: `sub` tag is supported only for built-in voice and not supported for custom voice.

You can use this tag with an _alias_ attribute to read out a different word for the specified text. Typically, used for abbreviations or acronyms.

Example: In the following example SSML text is read out as "Speech Synthesis Markup Language":

#### 

Format:

Attributes

Format or Values

Description

Mandatory or Optional

alias

String

Indicates the alias that is read out for the specified text

Mandatory

## 

<p> or paragraph tag

You can use this tag to add pauses between paragraphs in your text. By default, pauses are added at the end of a paragraph.

Adding <p> between lines provides the same effect as adding a [break](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-break-greater-than) tag with an **x-strong** attribute.

#### 

Format:

## 

<s> or Sentence tag

You can use this tag to add pauses between lines or sentences in your text. By default, pauses are added at the end of a period. However, you can add <s> between lines or sentences in your text to add additional pauses as required.

Adding <s> tag provides the same effect as adding a period at the end of the sentence or adding a [break](/user-guide/ref/speech-synthesis-markup-language-ssml#less-than-break-greater-than) tag with a **strong** attribute.

#### 

Format:

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation

[Getting started](/user-guide/ref/avaamo-platform-api-documentation/quick-overview)[Agent APIs](/user-guide/ref/avaamo-platform-api-documentation/agent-api)[Custom entity type API](/user-guide/ref/avaamo-platform-api-documentation/custom-entity-type-values)[Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api)[Change log APIs](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis)[Clear Data API](/user-guide/ref/avaamo-platform-api-documentation/clear-data-api)[Conversation API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api)[Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api)[Analytics API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api)[Global Storage API](/user-guide/ref/avaamo-platform-api-documentation/global-storage-api)[User Storage API](/user-guide/ref/avaamo-platform-api-documentation/user-storage-api)[User Property API](/user-guide/ref/avaamo-platform-api-documentation/user-property-api)[Mask message API](/user-guide/ref/avaamo-platform-api-documentation/mask-message-api)[Custom properties API](/user-guide/ref/avaamo-platform-api-documentation/custom-properties-api)[SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api)[SMS Reporting API](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api)[Microsoft Teams Send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api)[Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api)[Troubleshooting Tips](/user-guide/ref/avaamo-platform-api-documentation/troubleshooting-tips)

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/quick-overview

Avaamo platform provides APIs that can be used for various analytical, reporting, and debugging purposes. These are available as REST APIs that are language agnostic.

### 

Pre-requisites

Before you begin, ensure you have met the following pre-requisites:

*   You have made a note of the user access token. This is required by certain APIs in the Header for authentication and authorization. See [Get user access token](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token), for more information. Note that the **Settings** page is available for only those users with the **Settings** role.
    

*   If you have enabled the Groups feature for your account, then click the user icon at the top-right corner to get the user access token. See [Access token for users in groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.
    

*   You have made a note of the agent access token. This is required by certain APIs in the Header for proper authentication and authorization. See [Agent Settings](/user-guide/how-to/build-agents/configure-agents/define-settings#agent-authentication-keys), for more information
    

### 

API time-out

The default timeout for all the REST APIs in the Avaamo Platform is 30 seconds. If a query takes longer than the default timeout, then a response with a status code of "504 Gateway Timeout" is returned.

### 

Maximum call limit

Due to security reasons, you can make a maximum of 50 API calls per minute.

### 

per\_page limit

`per_page` is a query parameter used in several REST APIs to indicate the number of entries to be fetched per page in an API response. By default, the minimum limit for `per_page` is `25` when `per_page` is not specified in the API query parameter. The maximum limit for `per_page` is `100`. See [Intents API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/intents), for an example.

### 

Time duration limit

For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Note on Epoch timestamp in REST APIs

Most of the query parameters in APIs of the Avaamo Conversation AI Platform where date and time are required use the UNIX Epoch timestamp. Typically, it is based on UTC (Coordinated Universal Time).

The following lists a few benefits of using UNIX Epoch timestamp in the APIs:

*   UNIX Epoch timestamps are not affected by time zone differences, hence, they are useful for handling time-related calculations and comparisons.
    
*   Epoch timestamps are easily processed by computers and can be quickly converted to various dates and time formats based on the needs of the application or user.
    
*   Since it is a compact representation, data can be transmitted easily and stored as numerical values.
    

In conclusion, Epoch timestamps provide a standardized, machine-readable, and efficient approach to handling time-related data in APIs. They enable interoperability and ensure consistent treatment of time across different systems and platforms making them better than using any other options available.

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api

[Agent details](/user-guide/ref/avaamo-platform-api-documentation/agent-api/agent-details)[Intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/intents)[Dialog intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/dialog-intents)[Q&A intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/q-and-a-intents)[Unhandled queries](/user-guide/ref/avaamo-platform-api-documentation/agent-api/unhandled-queries)[Dictionary values](/user-guide/ref/avaamo-platform-api-documentation/agent-api/dictionary-values)[Test user queries](/user-guide/ref/avaamo-platform-api-documentation/agent-api/test-user-queries)[Query insights](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights)[Message insights](/user-guide/ref/avaamo-platform-api-documentation/agent-api/message-insights)

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/agent-details

### 

Get agent details

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}.json`

Get the agent details such as agent identifier, agent description, skills, entities used across all the skills, dictionaries, and list of entity types available in the agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier.

You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. Users must have at least view permission on the agent.

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Success

Copy

    {
      "agent": {
        "id": 20457,
        "description": "For ordering pizzas and more",
        "display_name": "Mac Pizza - New",
        "created_at": 1590390902,
        "updated_at": 1590666408,
        "entities": [
          {
            "id": 102350,
            "name": "phonenumber",
            "entity_type": "phone_number",
            "entity_type_id": 21664,
            "skill_ids": [
              17825,
              17826,
              17830
            ]
          },
          {
            "id": 102357,
            "name": "ordernumber",
            "entity_type": "order_number",
            "entity_type_id": 21665,
            "skill_ids": [
              17825,
              17826,
              17830
            ]
          },
          {
            "id": 103095,
            "name": "starters",
            "entity_type": "starters",
            "entity_type_id": 21810,
            "skill_ids": [
              17825,
              17826,
              17830
            ]
          },
          {
            "id": 103647,
            "name": "pizza_type_1",
            "entity_type": "pizza_type",
            "entity_type_id": 21661,
            "skill_ids": [
              17828,
              17825,
              17826,
              17830
            ]
          },
          {
            "id": 103648,
            "name": "pizza_toppings_1",
            "entity_type": "pizza_toppings",
            "entity_type_id": 21662,
            "skill_ids": [
              17828,
              17825,
              17826,
              17830
            ]
          }
        ],
        "entity_types": [
          {
            "id": 21661,
            "key": "pizza_type",
            "name": "pizzatype",
            "description": "Types of pizza",
            "regex": false
          },
          {
            "id": 21662,
            "key": "pizza_toppings",
            "name": "pizza toppings",
            "description": "Toppings for veg and non-veg pizza",
            "regex": false
          },
          {
            "id": 21664,
            "key": "phone_number",
            "name": "phone number",
            "description": "phone number",
            "regex": true
          },
          {
            "id": 21665,
            "key": "order_number",
            "name": "Order number",
            "description": "Order number",
            "regex": true
          },
          {
            "id": 21810,
            "key": "starters",
            "name": "Starters",
            "description": "Starters",
            "regex": false
          }
        ],
        "dictionaries": [
          {
            "id": 755,
            "name": "Business words",
            "description": "Business words",
            "updated_at": 1590396449,
            "created_at": 1590396449
          }
        ],
        "skills": [
          {
            "id": 17825,
            "name": "MacPizza Policy",
            "type": "document-knowledge",
            "source_id": 5492,
            "created_at": 1590390903,
            "updated_at": 1590390909,
            "status": "complete"
          },
          {
            "id": 17826,
            "name": "MacPizza FAQs",
            "type": "knowledge",
            "source_id": 5493,
            "created_at": 1590390904,
            "updated_at": 1590390909,
            "status": "complete"
          },
          {
            "id": 17828,
            "name": "MacPizza Order",
            "type": "dialog",
            "source_id": 20459,
            "created_at": 1590390904,
            "updated_at": 1590391698,
            "status": "complete"
          },
          {
            "id": 17830,
            "name": "custom",
            "type": "smalltalk-knowledge",
            "source_id": 5494,
            "created_at": 1590390905,
            "updated_at": 1590390909,
            "status": "complete"
          }
        ],
        "information_masking": {
                "realtime_masking_enabled": true,
                "api_masking_enabled": false,
                "retention_period": 2,
                "mask_files": true,
                "mask_responses_from_all_nodes": true,
                "system_entity_types": [
                    "date",
                    "email",
                    "person",
                    "phone",
                    "ssn",
                    "location"
                ],
                "custom_entity_types": [],
                "masking_patterns": "",
                "response_masking_patterns": "",
                "user_properties": [
                    "first_name",
                    "last_name",
                    "phone",
                    "ssn"
                ],
                "updated_at": 1744640124.0
            },
            "language_packs": [
                {
                    "id": 402579,
                    "language": "kn-IN",
                    "default": false
                },
                {
                    "id": 402580,
                    "language": "fr-FR",
                    "default": false
                }
            ]
          }
    }

#### 

Path Parameters

#### 

Headers

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, you can get the following details about the agent:

Attribute

Description

Type

id

Indicates the unique agent identifier.

Integer

description

Indicates the description given for the agent.

String

display\_name

Indicates the display name of the agent.

String

created\_at

Indicates the timestamp of when the agent was created in seconds.

UNIX epoch timestamp

updated\_at

Indicates the timestamp of when the agent was updated in seconds.

UNIX epoch timestamp

entities

Indicates a list of entities used in intents across all the agent skills. Each entry contains the following details:

*   id: Internal identifier used by the Platform.
    
*   name: Entity name given in the dialog skill,
    
*   entity\_type: Name of the entity type this entity is linked to.
    
*   entity\_type\_id: Unique identifier of the entity type this entity is linked to.
    
*   skill\_ids: Array of skills where the entity is used.
    

JSON key-value pairs

dictionaries

Indicates an array of all the dictionaries in the agent. Each entry contains the following details:

*   id: Unique dictionary identifier
    
*   name: Name of the dictionary.
    
*   description: Description given for the dictionary.
    
*   created\_at: Timestamp of when the dictionary was created in seconds (UNIX epoch timestamp).
    
*   updated\_at: Timestamp of when the dictionary was updated in seconds (UNIX epoch timestamp).
    

JSON key-value pairs

skills

Indicates an array of all the skills (enabled or disabled) in the agent. Each entry contains the following details:

*   id: Internal identifier used by the Platform.
    
*   name: Name of the skill
    
*   type: Type of skill. The following are the types:
    
    *   dialog: [Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer)
        
    *   knowledge: [Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer)
        
    *   knowledge-v2: [Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a)
        
    *   answers\_pluggable\_skill: [Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1)
        
    *   smalltalk-knowledge: [Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk)
        
    *   llamb\_content\_skill: [LLaMB Content skill](/user-guide/llamb/get-started)
        
    
*   source\_id: Unique skill identifier.
    
*   created\_at: Timestamp of when the skill was created in seconds (UNIX epoch timestamp).
    
*   updated\_at: Timestamp of when the skill was updated in seconds (UNIX epoch timestamp).
    
*   status: Current state of the skill.
    
    *   complete: Skill is ready to be used.
        
    *   importing: Skill is being imported.
        
    *   publishing: Skill is being published.
        
    *   failed: Skill failed to import or copy
        
    *   publish\_failed: Skill failed to publish.
        
    *   copying: Skill is being copied.
        
    

JSON key-value pairs

entity\_types

Indicates an array of all the custom entity types in the agent.

Each entry contains the following details:

*   id: Unique identifier for the entity type.
    
*   key: Key given for the entity type at the time of creation.
    
*   name: Name of the entity type.
    
*   description: Description of the entity type.
    
*   regex: Indicates if this is a regular expression entity or not.
    

JSON key-value pairs

information\_masking

Indicates the masking configuration details, if information masking is enabled for the agent:

*   realtime\_masking\_enabled: Indicates if masking in real-time is enabled or not for the agent.
    
*   api\_masking\_enabled: Indicates if masking via API is enabled or not for the agent.
    
*   retention\_period: Indicates the set retention period for the agent in minutes.
    
*   mask\_files: Indicates if file masking is enabled or not.
    
*   mask\_responses\_from\_all\_nodes: Indicates if masking responses from all nodes is enabled or not for the agent.
    
*   system\_entity\_types: Array of system entity types that are masked.
    
*   custom\_entity\_types: Array of custom entity types that are masked.
    
*   masking\_patterns: Array of regular expression patterns that are masked in a user query.
    
*   response\_masking\_patterns: Array of regular expression patterns that must be masked in the agent response.
    
*   user\_properties: An Array of user attributes that are masked
    
*   updated\_at: Indicates the timestamp of when the masking details were updated in seconds. (UNIX epoch timestamp).
    

See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

JSON key-value pairs

language\_packs

*   id: Internal identifier used by the Platform.
    
*   language: Name of the language
    
*   default: Indicates whether it is the default language.
    

JSON key-value pairs

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/intents

## 

Get agent intents

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/intents.json`

Get a list of all the dialog inline intents (Training Phrases) and Q&A intents from the agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

User access token. You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Success

Copy

    {
      "current_page": 1,
      "per_page": 5,
      "total_entries": 5,
      "total_pages": 1,
      "time_token": 1590675108.7536006,
      "intents": [
        {
          "id": 185260,
          "name": "store",
          "created_at": 1590390904,
          "updated_at": 1590390904,
          "skill": {
            "id": 17826,
            "name": "MacPizza FAQs",
            "type": "knowledge",
            "source_id": 5493,
            "created_at": 1590390904,
            "updated_at": 1590390909,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1161932,
              "created_at": 1590390904,
              "value": "where is your store?",
              "slots": []
            },
            {
              "id": 1161933,
              "created_at": 1590390904,
              "value": "do you have any branches?",
              "slots": []
            }
          ]
        },
        {
          "id": 185262,
          "name": "login",
          "created_at": 1590390904,
          "updated_at": 1590390904,
          "skill": {
            "id": 17826,
            "name": "MacPizza FAQs",
            "type": "knowledge",
            "source_id": 5493,
            "created_at": 1590390904,
            "updated_at": 1590390909,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1161935,
              "created_at": 1590390904,
              "value": "How to login to my account?",
              "slots": []
            }
          ]
        },
        {
          "id": 185265,
          "name": "MacPizza Order",
          "created_at": 1590390904,
          "updated_at": 1590661609,
          "skill": {
            "id": 17828,
            "name": "MacPizza Order",
            "type": "dialog",
            "source_id": 20459,
            "created_at": 1590390904,
            "updated_at": 1590391698,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1162843,
              "created_at": 1590481750,
              "value": "I want to have veg cheese pizza with french fries",
              "slots": [
                {
                  "id": 76492,
                  "mask": "I want to have <em>veg</em> cheese pizza with french fries",
                  "entity": {
                    "id": 102338,
                    "name": "pizza_type_1",
                    "entity_type": "pizza_type",
                    "entity_type_id": 21661,
                    "skill_ids": []
                  }
                },
                {
                  "id": 76493,
                  "mask": "I want to have veg <em>cheese</em> pizza with french fries",
                  "entity": {
                    "id": 102339,
                    "name": "pizza_toppings_1",
                    "entity_type": "pizza_toppings",
                    "entity_type_id": 21662,
                    "skill_ids": []
                  }
                }
              ]
            },
            {
              "id": 1165747,
              "created_at": 1590569783,
              "value": "I want to order veg cheese pizza",
              "slots": [
                {
                  "id": 77335,
                  "mask": "I want to order <em>veg</em> cheese pizza",
                  "entity": {
                    "id": 102338,
                    "name": "pizza_type_1",
                    "entity_type": "pizza_type",
                    "entity_type_id": 21661,
                    "skill_ids": []
                  }
                },
                {
                  "id": 77336,
                  "mask": "I want to order veg <em>cheese</em> pizza",
                  "entity": {
                    "id": 102339,
                    "name": "pizza_toppings_1",
                    "entity_type": "pizza_toppings",
                    "entity_type_id": 21662,
                    "skill_ids": []
                  }
                }
              ]
            },
            {
              "id": 1171919,
              "created_at": 1590661609,
              "value": "i want to order pizza",
              "slots": []
            }
          ]
        },
        {
          "id": 185631,
          "name": "rewards",
          "created_at": 1590482348,
          "updated_at": 1590482348,
          "skill": {
            "id": 17826,
            "name": "MacPizza FAQs",
            "type": "knowledge",
            "source_id": 5493,
            "created_at": 1590390904,
            "updated_at": 1590390909,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1162855,
              "created_at": 1590482348,
              "value": "Tell me more about reward policy",
              "slots": []
            }
          ]
        },
        {
          "id": 185927,
          "name": "entity",
          "created_at": 1590496049,
          "updated_at": 1590496049,
          "skill": {
            "id": 17826,
            "name": "MacPizza FAQs",
            "type": "knowledge",
            "source_id": 5493,
            "created_at": 1590390904,
            "updated_at": 1590390909,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1165599,
              "created_at": 1590496049,
              "value": "what is Cardiology?",
              "slots": []
            }
          ]
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

intents

Indicates an array of dialog inline intents (Training Phrases) and Q&A intents from the agent. Number of entries in the array = Number specified in per\_page parameter. See intents array in the [Dialog intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/dialog-intents#response) and [Q&A intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/q-and-a-intents#attributes), for more information.

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get intents from an agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/api/v1/agents/`

`<<agent_id>>/intents.json?per_page=2&page=5`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/dialog-intents

## 

Get dialog intents

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/intents/dialog.json`

Get a list of all the inline dialog intents (Training Phrases) from the agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum: 100

#### 

Headers

Name

Type

Description

access-token\*

string

User access token. You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200

Copy

    {
      "current_page": 1,
      "per_page": 5,
      "total_entries": 1,
      "total_pages": 1,
      "time_token": 1590675148.365381,
      "intents": [
        {
          "id": 185265,
          "name": "MacPizza Order",
          "created_at": 1590390904,
          "updated_at": 1590661609,
          "skill": {
            "id": 17828,
            "name": "MacPizza Order",
            "type": "dialog",
            "source_id": 20459,
            "created_at": 1590390904,
            "updated_at": 1590391698,
            "status": "complete"
          },
          "training_data": [
            {
              "id": 1162843,
              "created_at": 1590481750,
              "value": "I want to have veg cheese pizza with french fries",
              "slots": [
                {
                  "id": 76492,
                  "mask": "I want to have <em>veg</em> cheese pizza with french fries",
                  "entity": {
                    "id": 102338,
                    "name": "pizza_type_1",
                    "entity_type": "pizza_type",
                    "entity_type_id": 21661,
                    "skill_ids": []
                  }
                },
                {
                  "id": 76493,
                  "mask": "I want to have veg <em>cheese</em> pizza with french fries",
                  "entity": {
                    "id": 102339,
                    "name": "pizza_toppings_1",
                    "entity_type": "pizza_toppings",
                    "entity_type_id": 21662,
                    "skill_ids": []
                  }
                }
              ]
            },
            {
              "id": 1165747,
              "created_at": 1590569783,
              "value": "I want to order veg cheese pizza",
              "slots": [
                {
                  "id": 77335,
                  "mask": "I want to order <em>veg</em> cheese pizza",
                  "entity": {
                    "id": 102338,
                    "name": "pizza_type_1",
                    "entity_type": "pizza_type",
                    "entity_type_id": 21661,
                    "skill_ids": []
                  }
                },
                {
                  "id": 77336,
                  "mask": "I want to order veg <em>cheese</em> pizza",
                  "entity": {
                    "id": 102339,
                    "name": "pizza_toppings_1",
                    "entity_type": "pizza_toppings",
                    "entity_type_id": 21662,
                    "skill_ids": []
                  }
                }
              ]
            },
            {
              "id": 1171919,
              "created_at": 1590661609,
              "value": "i want to order pizza",
              "slots": []
            }
          ]
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

intents

Indicates an array of dialog inline intents from the agent. Number of entries in the array = Number specified in per\_page parameter.

Each intent entry contains the following details:

*   id: Unique intent identifier
    
*   name: Name of the intent
    
*   created\_at: Indicates the timestamp of when the intent was created in seconds. (UNIX Epoch Timestamp)
    
*   updated\_at: Indicates the timestamp of when the intent was updated in seconds. (UNIX Epoch Timestamp)
    
*   skill: Indicates the following skill details:
    
    *   id: Internal identifier used by the Platform
        
    *   name: Name of the skill
        
    *   type: Type of the skill. Since this is a Dialog skill, it is always "dialog".
        
    *   source\_id: Unique identifier for the skill
        
    *   created\_at: Timestamp of when the skill was created in seconds (UNIX epoch timestamp).
        
    *   updated\_at: Timestamp of when the skill was updated in seconds (UNIX epoch timestamp).
        
    *   status: Skill status can have the following values:
        
        *   complete: Skill is ready to be used.
            
        *   importing: Skill is being imported.
            
        *   publishing: Skill is being published.
            
        *   failed: Skill failed to import or copy.
            
        *   publish\_failed: Skill failed to publish.
            
        *   copying: Skill is being copied.
            
        
    
*   training\_data: Indicates an array of training data as applicable to the intent. Each training data contains the following details:
    
    *   id: Internal identifier used by the Platform.
        
    *   created\_at: Timestamp of when training data was created in seconds (UNIX epoch timestamp).
        
    *   value: Actual training data value
        
    *   slots: Details about the slot identifier, extracted entity in the training data for which the slot is created, and the entity type from which the slot is extracted.
        
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get dialog inline intents from agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/api/v1/agents/<<agent_id>>/intents/dialog.json?per_page=2&page=5`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/q-and-a-intents

## 

Get Q&A intents

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/intents/qna.json`

Get a list of all the Q&A intents from the agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

User access token. You can get the user access token from the Settings -> Users and Roles page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 3,
        "total_pages": 3,
        "time_token": 1590483068.2610612,
        "intents": [
            {
                "id": 185260,
                "name": "store",
                "created_at": 1590390904.0,
                "updated_at": 1590390904.0,
                "skill": {
                    "id": 17826,
                    "name": "MacPizza FAQs",
                    "type": "knowledge",
                    "source_id": 5493,
                    "created_at": 1590390904.0,
                    "updated_at": 1590390909.0,
                    "status": "complete"
                },
                "training_data": [
                    {
                        "id": 1161932,
                        "created_at": 1590390904.0,
                        "value": "where is your store?",
                        "slots": []
                    },
                    {
                        "id": 1161933,
                        "created_at": 1590390904.0,
                        "value": "do you have any branches?",
                        "slots": []
                    }
                ]
            }
        ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

intents

Indicates an array of Q&A intents from the agent. Number of entries in the array = Number specified in per\_page parameter.

Each intent entry contains the following details:

*   id: Unique intent identifier
    
*   name: Name of the intent
    
*   created\_at: Indicates the timestamp of when the intent was created in seconds. (UNIX Epoch Timestamp)
    
*   updated\_at: Indicates the timestamp of when the intent was updated in seconds. (UNIX Epoch Timestamp)
    
*   skill: Indicates the following skill details:
    
    *   id: Internal identifier used by the Platform
        
    *   name: Name of the skill
        
    *   type: Type of the skill.
        
        *   knowledge: [Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer)
            
        *   knowledge-v2: [Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a)
            
        
    *   source\_id: Unique identifier for the skill
        
    *   created\_at: Timestamp of when the skill was created in seconds (UNIX epoch timestamp).
        
    *   updated\_at: Timestamp of when the skill was updated in seconds (UNIX epoch timestamp).
        
    *   status: Skill status can have the following values:
        
        *   complete: Skill is ready to be used.
            
        *   importing: Skill is being imported.
            
        *   publishing: Skill is being published.
            
        *   failed: Skill failed to import or copy.
            
        *   publish\_failed: Skill failed to publish.
            
        *   copying: Skill is being copied.
            
        
    
*   training\_data: Indicates an array of training data as applicable to the intent. Each training data contains the following details:
    
    *   id: Internal identifier used by the Platform.
        
    *   created\_at: Timestamp of when training data was created in seconds (UNIX epoch timestamp).
        
    *   value: Actual training data value specified for the intent,
        
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get Q&A intents from agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/api/v1/agents/<<agent_id>>/intents/qna.json per_page=2&page=5`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/unhandled-queries

## 

Get unhandled queries

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/unhandled_queries.json`

Get a list of all the unhandled queries from the agent. This does also includes queries that led to disambiguation responses.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

start\_time

number

Timestamp from which the records are fetched. Default is from the beginning. Specify in UNIX Epoch Timestamp.

end\_time

number

Timestamp until which the records are fetched. Default is the current timestamp. Specify in UNIX Epoch Timestamp.

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

User access token. You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200

Copy

    {
        "current_page": 1,
        "per_page": 25,
        "total_entries": 2,
        "total_pages": 1,
        "time_token": 1590580099.9726138,
        "queries": [
            {
                "id": 943994,
                "user_query": "I want to order coke",
                "corrected_query": "I want to order coke",
                "node_key": "1",
                "intent_type": "Unhandled",
                "detected_language": "en",
                "created_at": 1590569762.0
            },
            {
                "id": 943989,
                "user_query": "I want to order pizza",
                "corrected_query": "I want to order pizza",
                "node_key": "1",
                "intent_type": "Unhandled",
                "detected_language": "en",
                "created_at": 1590569723.0
            }
        ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of intent entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

queries

Indicates an array of queries that led to unhandled or disambiguation response. Each entry contains the following details:

*   id: Internal identifier used by the Platform.
    
*   user\_query: Actual user query
    
*   corrected\_query: Query corrected by the Platform
    
*   node\_key: Node in the conversational flow at which the query led to unhandled or disambiguation response.
    
*   intent\_type: Type of intent, Unhandled, or Disambiguation
    
*   detected\_language: Language detected while analyzing the user’s query.
    
*   created\_at: Indicates the timestamp of when this entry was created in seconds. (UNIX Epoch Timestamp)
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get unhandled queries from the agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**:

`https://cx.avaamo.com/api/v1/agents/<<agent_id>>`

`/unhandled_queries.json?per_page=2&page=5`

Get unhandled queries from agent within specified period

**start\_time**: Specify the **from** timestamp in epoch format such as 1569229247677821

**end\_time**: Specify the **to** timestamp in epoch format such as 1569229251418739.

**Example**: `https://cx.avaamo.com/api/v1/agents/<<agent_id>>`

`/unhandled_queries.json?start_time=1569229247677821&end_time=1569229251418739`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/dictionary-values

## 

Get dictionary values

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/dictionary_values.json`

Get a list of all the dictionary values from an agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token. You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200

Copy

    {
      "current_page": 1,
      "per_page": 5,
      "total_entries": 2,
      "total_pages": 1,
      "time_token": 1590675292.2248158,
      "dictionary_values": [
        {
          "id": 19376,
          "value": "POS",
          "dictionary_id": 755,
          "created_at": 1590399522,
          "updated_at": 1590491408,
          "synonyms": [
            {
              "id": 19377,
              "value": "Pizza Order Status",
              "parent_id": 19376,
              "created_at": 1590399522,
              "updated_at": 1590491408
            }
          ]
        },
        {
          "id": 19632,
          "value": "SSN",
          "dictionary_id": 755,
          "created_at": 1590467160,
          "updated_at": 1590491408,
          "synonyms": [
            {
              "id": 19633,
              "value": "Social Security Number",
              "parent_id": 19632,
              "created_at": 1590467160,
              "updated_at": 1590491408
            }
          ]
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

**Response attributes**

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

dictionary\_values

Indicates an array of dictionary values fetched from the agent. Number of entries in the array = Number specified in per\_page parameter.

Each array entry contains the following details:

*   id: Unique value identifier
    
*   value: Dictionary value
    
*   dicitonary\_id: Indicates the dictionary the value belongs to
    
*   created\_at: Created timestamp of dictionary value
    
*   updated\_at: Updated timestamp of dictionary value
    
*   synonyms: Array of synonyms specified for the dictionary value. Each synonym contains an identifier, value, created\_at, and updated\_at details.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get dictionary values from agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/api/v1/agents/<<agent_id>>/dictionary_values.json?page=2&per_page=5`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/test-user-queries

## 

Post and test user queries

`POST` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/test.json`

Posts the user queries to the agent and gets the insights on how the user’s intent is analyzed and matched in the agent flow for each query.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token. You can get the user access token from the Settings -> Users page. Users must have at least view permission on the agent.

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information on how to get the user access token.

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information on agent permissions.

#### 

Request Body

Name

Type

Description

data

array

An array of queries to be executed. Each query contains a unique identifier that helps to identify the query.

batch

integer

The number of queries to be executed per batch. This is used when you wish to execute queries parallelly in batches.

total\_batches

integer

Total number of batches that you wish to execute queries in. This is used when you wish to execute queries parallelly in batches.

skip\_javascript

boolean

If custom code and pre-unhandled Javascript blocks must be considered during intent execution or not.

locale

String

Language or locale of the user query. See [Web - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more detailed on supported languages.

Default: en-US. If language is not specified, then en-US is considered.

201: Created Successful request

Copy

    {
      "result": [
        {
          "query": "I want to order veg cheese pizza",
          "uuid": "10",
          "insight": {
            "id": 944003,
            "intent_name": "MacPizza Order",
            "intent_type": "INLINE::INTENT",
            "node_key": "7.3",
            "score": 1,
            "query_insights": {
              "entities": [
                {
                  "entity": "pizza_type_1",
                  "entity_type": "pizza_type",
                  "entity_value": "veg",
                  "domain_key": "bot_inline_domain_5236cd12-b47e-4609-9e02-f883f038ca19",
                  "value": "veg",
                  "current_value": [
                    "cheese",
                    "veg"
                  ],
                  "index": 20,
                  "derived_parent": true,
                  "parent_entity_key": null,
                  "custom_entity_type": true
                },
                {
                  "entity": "pizza_toppings_1",
                  "entity_type": "pizza_toppings",
                  "entity_value": "cheese",
                  "domain_key": "bot_inline_domain_5236cd12-b47e-4609-9e02-f883f038ca19",
                  "value": "cheese",
                  "current_value": "cheese",
                  "index": 20,
                  "parent_entity_key": "pizza_type",
                  "custom_entity_type": true
                }
              ],
              "normalized_document": "want order veg pizzatoppings pizza",
              "intent": "node_intent_node_1",
              "intent_name": "MacPizza Order",
              "training_datum_id": 1165747,
              "matching_document": "I want to order veg cheese pizza",
              "detected_language": "en"
            },
            "skill": {
              "id": 17828,
              "name": "MacPizza Order",
              "type": "bot",
              "source_id": 20459,
              "created_at": 1590390904,
              "updated_at": 1590391698,
              "status": "complete"
            }
          }
        },
        {
          "query": "I want coke",
          "uuid": "11",
          "insight": {
            "id": 944004,
            "intent_name": "Unhandled",
            "intent_type": "UNHANDLED::INTENT",
            "node_key": "1",
            "score": 0,
            "query_insights": {
              "entities": [],
              "normalized_document": "want coke",
              "intent": "",
              "detected_language": "en"
            },
            "skill": {}
          }
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

For each query, the query and the insights indicating how the user’s intent was analyzed and matched in the agent flow. See [insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

**Key point**: Skill status in the insights objects can have the following values:

*   complete: Skill is ready to be used.
    
*   importing: Skill is being imported.
    
*   publishing: Skill is being published.
    
*   failed: Skill failed to import or copy.
    
*   publish\_failed: Skill failed to publish.
    
*   copying: Skill is being copied.
    

### 

Example

The following is a sample POST request to test user queries:

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights

## 

Get query insights

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/query_insights.json`

Get a closer look at the user conversations with the agent. You can use this API for debugging and reporting purposes.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

tag\_ids

string

An array of tag identifiers for which you wish to view the query insights. You can get the tag identifiers from the Query insights API response itself.

`Example 1:`

`tag_ids[]=17xxx`

`Example 2:`

`tag_ids[]=17xx&tag_ids[]=179xx`

channel\_names

array

An array of channel names for which you wish to view query insights.

`Example 1:`

`channel_names[]=MacPizza Teams`

`Example 2:`

`channel_names[]=MacPizza Teams &channel_names[]=MacPizza CIVR`

channel\_types

array

An array of channel types for which you wish to view the query insights. You can get channel\_types from the API response itself.

`Example 1:`

`channel_types[]=web`

`Example 2:`

`channel_types[]=web&channel_types[]=phone`

intent\_types

array

An array of intent types for which you wish to view the query insights.

Supported intent types:

SYSTEM::INTENT

KNOWLEDGEPACK::INTENT -> Q&A and Smalltalk INLINE::INTENT -> Training phrases AMBIGUOUS::INTENT UNHANDLED::INTENT WIlD\_CARD::INTENT PREUNHANDLED::INTENT JS::INTENT -> Custom code

`Example 1:`

`intent_types[]=SYSTEM::INTENT`

`Example 2.`

`intent_types[]=SYSTEM::INTENT&intent_types[]=KNOWLEDGEPACK::INTENT`

detected\_language

string

Language for which you wish to view the query insights.

`Example 1:`

`detected_language[]=en-US`

`Example 2.`

`detected_language[]=en-US&detected_language[]=hi-IN`

intent\_ids

integer

Intent identifier for which you wish to view the query insights.

You can get intent\_id from the API response itself. You can also get intent\_id of Q&A and Smalltalk skills from the UI.

See [Add questions and answers](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages), for more information on how to get the intent identifier for Q&A and Smalltalk.

`Example 1:`

`intent_ids[]=123`

`Example 2:`

`intent_ids[]123&intent_ids[]=456`

user\_ids

integer

User identifier for which you wish to view the query insights. You can get the user\_id from the Query insights API response itself.

`Example 1:`

`user_ids[]=17xxx`

`Example 2:`

`user_ids[]=17xx&user_ids[]=179xx`

start\_time

number

Timestamp from which the records are fetched.

Default is from the beginning.

Specify in UNIX Epoch Timestamp.

end\_time

number

Timestamp until which the records are fetched.

Default is the current timestamp.

Specify in UNIX Epoch Timestamp.

page

integer

Page from which the entries must be fetched. Default: 1.

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the **Settings -> Users** page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of intent entries in the response.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

queries

Indicates an array of queries that led to unhandled or disambiguation responses. Each entry contains the following details:

*   id: Internal identifier used by the Platform.
    
*   channel: Details of the channel (id, name, and type) that was used to send user query such as name, type, and name
    
*   user: Details of the user (display\_name, id) who sent the query
    
*   user\_query: Actual user query
    
*   intent\_name: Name of the intent
    
*   created\_at: Indicates the timestamp of when this entry was created in seconds. (UNIX Epoch Timestamp)
    
*   intent\_type: Type of intent
    
*   node\_key: Node in the conversational flow at which the query was processed.
    
*   detected\_language: Language detected while analyzing the user's query.
    
*   conversation\_uuid: Unique conversation identifier of user-agent interaction.
    
*   insights: Insights indicating how the user’s intent was analyzed and matched in the agent flow. See [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for details on the insight attributes in the API response.
    
*   message\_uuid: Unique message identifier of user-agent interaction.
    
*   skill: Skill details where the intent belongs to.
    
*   tags: Array of tags associated with the response.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get insights on queries that led to disambiguation within a specified period

**intent\_types**: Specify AMBIGUOUS::INTENT

**start\_time**: Specify the **from** timestamp in epoch format such as 1569229247677821

**end\_time**: Specify the **to** timestamp in epoch format such as 1569229251418739.

Get insights on all Q&A intents in a specific language

**intent\_types**: Specify KNOWLEDGEPACK::INTENT **detected\_language**: Specify the language such as fr-FR.

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/message-insights

## 

Get query insights by message ID

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/query_insights/{{message_id}}.json`

Get a closer look at the insights of the message.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

message\_id\*

alphanumeric

Message identifier. You can get the message identifier from any other API response. For example, Message UUID in the custom channel response.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the **Settings -> Users** page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200

Copy

    {
      "insight": {
        "intent_type": "INLINE::INTENT",
        "skill_name": "Macpizza Order",
        "skill_key": "macpizza_order",
        "intent_name": "Macpizza Order",
        "intent_key": "pizza_toppings",
        "node_key": "macpizza_order.pizza_toppings",
        "original_text": "I want to order veg cheese pizza",
        "document": "I want to order veg cheese pizza",
        "entities": [
          {
            "entity": "pizza_toppings",
            "entity_type": "pizza_toppings",
            "entity_value": "cheese",
            "domain_key": "bot_inline_domain_bee25dca-3b9f-46eb-a456",
            "value": "cheese",
            "current_value": "cheese",
            "index": 20,
            "parent_entity_key": "pizza_types",
            "custom_entity_type": true
          }
        ],
        "negation": false,
        "sentiment": "neutral",
        "tone": "",
        "detected_language": "English(en-US)",
        "second_best_result": null,
        "matching_document": "I want to order veg cheese pizza"
      }
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

insight

See [insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information on each attribute.

Integer

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get message insights for an agent

**agent\_id**: Specify the agent identifier

**message\_id**: Specify the message identifier for which you wish to view the insights.

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/agent-api/open-api-test1

### 

Get the agent details

get

https://c6.avaamo.com/api/v1/agents/{agent\_id}.json

Get the agent details such as agent identifier, agent description, skills, entities used across all the skills, dictionaries, and list of entity types available in the agent.

Authorizations

AccessToken

AccessToken

Access-TokenstringRequired

Path parameters

agent\_idinteger · int64Required

The unique identifier of the agent. You can find this in the agent URL.

Example: `20457`

Responses

200

Agent details retrieved successfully

application/json

Headersobject

Show Header

Responseobject

Show properties

401

Unauthorized – Access token missing or invalid

application/json

403

Forbidden – Access token is invalid or does not have permission

application/json

get

/api/v1/agents/{agent\_id}.json

cURL

Test it

200

Agent details retrieved successfully

AgentResponse

Show properties

Agent

Show properties

Entity

Show properties

EntityType

Show properties

Dictionary

Show properties

Skill

Show properties

InformationMasking

Show properties

LanguagePack

Show properties

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/custom-entity-type-values

## 

Get entity values

`GET` `https://cx.avaamo.com/api/v1/custom_entity_types/{{entity_type_id}}/values.json`

Get a list of all entity values from a custom entity type.

#### 

Path Parameters

Name

Type

Description

entity\_type\_id\*

integer

Entity type identifier. You can get the entity type identifier from the entity type URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200

Copy

    {
      "current_page": 1, 
      "per_page": 5,
      "total_entries": 3,
      "total_pages": 1,
      "time_token": 1590674605.172428,
      "values": [
        {
          "id": 14926171,
          "value": "Bread Sticks",
          "alternate_values": []
        },
        {
          "id": 14926168,
          "value": "French Fries",
          "alternate_values": [
            {
              "id": 14926169,
              "value": "French fingers",
              "alternate_values": []
            }
          ]
        },
        {
          "id": 14926167,
          "value": "Onion rings",
          "alternate_values": []
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

values

Indicates an array of entity values fetched from the custom entity type. Number of entries in the array = Number specified in per\_page parameter.

Each array entry contains the following details:

*   id: Unique value identifier
    
*   value: Entity value
    
*   alternate\_values: Array of alternate values specified for the entity value, if any.
    
*   parent\_value: Parent entity value, if any.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get entity values from custom entity type using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/api/v1/custom_entity_types/<<entity_type_id>>/values.json?page=2&per_page=5`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/message-api

## 

Post messages from the agent

`POST` `https://cx.avaamo.com/bots_api/v1/messages.json`

Use this endpoint to post a message from the agent within a specific conversation. It is commonly used for proactive communication such as notifications, summaries, and important product or service announcements.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token. You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

User must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

#### 

Request Body

Name

Type

Description

message\*

string

The message you wish to post to the user. This can be any message as supported by the channel.

conversation -> uuid\*

string

Unique identifier of the conversation for which the message is posted. You can get the conversation uuid from the Conversation History URL

bot\_id\*

integer

Unique identifier of the agent. You can get the agent identifier from the agent URL.

force\_locale

string

The locale used to override the locale of the agent.

200

Copy

    {
        "success": true
    }

**Key point**: See [Supported agent responses](applewebdata://E3416F10-9D83-4DB7-B173-CC5D7BD95AFE/@avaamo/s/avaamo/~/drafts/-M8iZKLHjv_ONgUq4a3a/v/dev/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses) in the Custom channel, for more information on WhatsApp-compatible responses.

### 

Code request snippets

cURL

node.js

Copy

    curl --location --request POST 'https://cx.avaamo.com/bots_api/v1/messages.json' \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: xxxxxx8d9952499ea466fc007dxxxxxx' \
    --header 'Content-Type: text/plain' \
    --data-raw '{
      "message": "Sample message",
      "conversation": {
        "uuid": "xxxxxx8253e65aa02bfd02fd86xxxxxx"
      },
      "bot_id": 2xxx,
      "force_locale": "en"
    }'

Copy

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://cx.avaamo.com/bots_api/v1/messages.json',
      'headers': {
        'Content-Type': ['application/json', 'text/plain'],
        'Access-Token': 'xxxxxx8d9952499ea466fc007dxxxxxx'
      },
      body: "{\n  \"message\": \"Sample message\",\n  \"conversation\": {\n    \"uuid\": \"xxxxxx8253e65aa02bfd02fd86xxxxxx\"\n  },\n  \"bot_id\": 2xxx,\n  \"force_locale\": \"en\"\n}"
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    });
    

### 

Examples

#### 

**Scenario 1**: Post a **simple message**

**Request**: The following sample JSON request demonstrates how to post a simple message from the agent to a user within an existing conversation:

The message provided in the request is delivered to the specified conversation as an agent message. You can view the posted message in the corresponding conversation thread.

#### 

#### 

**Scenario 2**: Post a list of promotional items

**Request**: The following sample JSON request demonstrates how to send a list of promotional items from the agent to a user within an existing conversation:

The promotional list is delivered to the specified conversation as an agent message and displayed to the end user within the conversation thread.

#### 

**Scenario 3**: Post a feedback message

**Request**: The following sample JSON request demonstrates how to send a feedback message from the agent to a user within an existing conversation:

## 

Get agent messages

`GET` `https://cx.avaamo.com/v1/messages.json`

Gets all messages from the agent. This API retrieves the latest messages from the agent and is not tied to any specific user conversation.

#### 

Query Parameters

Name

Type

Description

device\_info

boolean

Indicates if the device details must be returned in the response or not. The default value is false.

from\_timetoken

number

Timestamp from which the records are fetched. If you specify `to_timetoken` and not `from_timetoken`, then the latest 5 entries up to the specified `to_timetoken` are fetched. Specify in UNIX Epoch Timestamp in seconds.

to\_timetoken

number

Timestamp until which the records are fetched. The default value is the current timestamp. Specify in UNIX Epoch Timestamp in seconds.

page

integer

Page from which the entries must be fetched.

The default value is 1.

per\_page

integer

The number of entries fetched per page.

The default value is 25.

Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

The agent access token. You can get the agent access token from the Agent -> Settings page. See [Agent Authentication Keys](/user-guide/how-to/build-agents/configure-agents/define-settings#agent-authentication-keys), for more information

200 Consider that you wish to get the latest message from the agent. Use GET method and specify the URL https://cx.avaamo.com/v1/messages.json?per\_page=1. The following is a sample JSON response returned:

**Note**: For optimal API performance, the recommended duration for fetching data from REST APIs that support date ranges or time periods is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages.

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

[entries](/user-guide/ref/avaamo-platform-api-documentation/message-api#entries)

Indicates an array of messages fetched from the agent. The number of entries in the array = Number specified in the per\_page parameter.

JSON key-value pairs

#### 

**entries**

Indicates an array of messages fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

uuid

Indicates a unique identifier of the message.

String

content

Indicates the content of the message.

String

content\_type

Indicates the type of content such as text, ListView, card, quick\_reply.

String

created\_at

Indicates the timestamp of when the message was created in seconds.

UNIX epoch timestamp

user

Indicates the details of the user interacting with the agent. See [User details](/user-guide/ref/avaamo-platform-api-documentation/message-api#user-details), for more information.

JSON key-value pairs

timetoken

Indicates the created timestamp of the message in milliseconds.

UNIX epoch timestamp

device\_uuid

Indicates a unique identifier of the device from which the agent is being used.

String

request\_message\_uuid

Indicates a unique identifier of the request message.

String

sequence

Indicates the sequence of the agent response message. There can be multiple responses for a user query, each identified with the **request\_message\_uuid** and sequence. Note that the request\_message\_uuid is the same for each agent response.

<<message\_sequence>>/<<total message>

custom\_properties

Indicates any additional user properties in the fetched message.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept": "quality"

},

JSON key-value pairs

read\_acks

Indicates the details of when the message was read and acknowledged.

*   **read\_at**: Indicates the read timestamp of the message in UNIX epoch format.
    
*   **user**: Indicates the details of the user who acknowledged the message.
    

An array of JSON key-value pairs

attachments

Indicates an array of attachments that is fetched from the agent message.

JSON key-value pairs

conversation

Indicates the conversation details of the message:

*   **uuid**: Indicates a unique identifier of the conversation.
    
*   **display\_name**: Indicates display name of the conversation in the following format: `<<Agent Display Name>>, <<User First Name>>.`
    
*   **locale**: Indicates the locale used in the agent conversation.
    

JSON key-value pairs

#### 

User details

The following user details are available in each message response of the Get Message API:

Attribute

Description

Type

phone

Indicates an array of phone numbers of the user interacting with the agent.

An array of JSON key-value pairs

last\_name

Indicates the last name of the user interacting with the agent.

String

first\_name

Indicates the first name of the user interacting with the agent.

String

email

Indicates the email of the user interacting with the agent.

String

layer\_id

Indicates an internal unique user identifier used by the Avaamo Platform.

String

avaamo\_id

Indicates the unique identifier of the user interacting with the agent. You can use this user identifier to further get custom properties, if any, from the agent. See [Custom properties API](/user-guide/ref/avaamo-platform-api-documentation/custom-properties-api), for more information.

Integer

user\_agent, os\_name, zone\_offset,

utc\_offset, time\_zone

Indicates the device details from where the agent is accessed.

Note that the device details are tracked at the user level and not at the message level. So, if the same user is accessing the agent from different devices, then the latest device details is returned in the messages.

The device details are returned only when the device\_info = true in the GET message request.

*   **user\_agent**: Indicates the browser’s user agent, applicable only for the web channel.
    
*   **os\_name**: Indicates the operating system of the device with which the user interacted with the agent.
    
*   **zone\_offset**: Indicates the time zone offset from GMT for the user.
    
*   **utc\_offset**: Indicates the time zone offset from UTC for the user.
    
*   **time\_zone**: Indicates the time zone of the user who accessed the agent.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get the latest message from the agent

**per\_page**: Specify 1 to get the latest message.

**Example**: `https://cx.avaamo.com/v1/messages.json?per_page=1`

Get messages from the agent within a specified period

**from\_timetoken**: Specify the "from" timestamp in epoch format, such as 1774483200

**to\_timetoken**: Specify the "to" timestamp in epoch format, such as 1774569599.

**Example**: `https://cx.avaamo.com/v1/messages.json?from_timetoken=1774483200&to_timetoken=1774569599`

Get messages from the agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page. y default, the value is 5.

**Example**: `https://cx.avaamo.com/v1/messages.json?page=5&per_page=2`

Get the latest message with device details from agent

**per\_page**: Specify 1 to get the latest message.

**device\_info**: Set to true

**Example**: `https://cx.avaamo.com/v1/messages.json?per_page=1&device_info=true`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/change-log-apis

An agent goes through several changes by different users in its life cycle (Development, Testing, Staging, Production). For operational efficiency, troubleshooting and auditing, it is important to understand:

*   Who did the changes?
    
*   What were the changes performed?
    
*   When was it changed?
    

You can use Changelog API to get a list of changes made to an agent. The following illustration depicts how analysis can be performed using Changelog API:

### 

**Changelog API versions**

There are two versions of Changelog API available in the platform.

*   **Changelog (v1)**: This is the first version of Changelog API. The traceability, logs, and auditing are limited in this version. See [Changelog API (v1)](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api), for more information.
    
*   **Changelog (v2)**: The latest version of the Changelog API, which is available from the v6.0 release onwards. This is a more scalable and extensive version of the changelog API. See [Changelog API (v2)](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api-v2), for more information.
    

The following table lists a high-level comparison of two versions of changelog API:

Changelog API (v1)

Changelog API (v2)

Signature

`https://cx.avaamo.com/dashboard/change_logs`

`https://cx.avaamo.com/api/v2/change_logs.json`

Log Coverage

Limited

Extensive

Response JSON structure

Nested

Simplified

Answers skill changes

Not Supported

Supported

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api

## 

Get agent changelog

`GET` `https://cx.avaamo.com/dashboard/change_logs`

An agent goes through several changes by different users in its life cycle. You can use Changelog API to get a list of changes made to an agent.

#### 

Query Parameters

Name

Type

Description

agent\_id\*

integer

Identifier of the agent for which the changelog is retrieved.

dashboard\_user\_id

integer

Identifier of the user that is the modifier of the resource in the agent for which the changelog is retrieved.

You can get the dashboard\_user\_id from the API response itself.

resources

string

Resources in an agent for which you wish to get the changelogs.

Supported values are:

agent

skills

entity\_types

persistent\_menu

language

channels

live\_agent

conversation\_node

permissions

agent\_life\_cycle

By default, all resources are considered. You can also specify multiple resources in a comma-separated list.

since\_timetoken

number

Timestamp from which the records are fetched.

If you specify timetoken and not since\_timetoken, then the latest 5 entries up to the specified timetoken are fetched.

Specify UNIX Epoch Timestamp in seconds.

timetoken

number

Timestamp until which the records are fetched. Default is the current timestamp. Specify UNIX Epoch Timestamp in seconds.

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

events

String

Events in an agent for which you wish to get changelog.

Supported values are: update, create, destroy

By default, all events are considered. You can also specify multiple resources in a comma-separated list.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200 Consider that you wish to get the latest change log from the agent. Use GET method and specify the URL https://cx.avaamo.com/dashboard/change\_logs?agent\_id= <<agent\_id>>&per\_page=1. The following is a sample JSON response returned:

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 26,
        "total_pages": 26,
        "time_token": 1576488895.6128085,
        "entries": {
            "change_logs": [
                {
                    "resource": {
                        "id": 6043,
                        "type": "Agent's Conversation data"
                    },
                    "event": "update",
                    "changeset": [
                        "John updated Agent's Conversation data"
                    ],
                    "timestamp": 1576478653,
                    "dashboard_user": {
                        "id": 368,
                        "display_name": "John Miller",
                        "email": "sindhu+john@avaamo.com"
                    }
                }
            ]
        }
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned in seconds.

UNIX epoch timestamp

entries -> [change\_logs](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api#change_logs)

Indicates an array of change logs fetched from the agent. Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

change\_logs

Indicates an array of change logs fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

resource -> id

Indicates a unique identifier of the changelog.

Integer

resource -> type

Indicates the type of resource for which the changelog is applicable.

String

event

Indicates the event such as create, update, destroy for which the changelogs are retrieved.

String

changeset

Indicates a comma-separated list of changesets applicable at that timestamp when the changelog was created.

String array

timestamp

Indicates the timestamp of when the changelog was created in seconds. This is the timestamp when the changes for the agent is persistent in the database.

UNIX epoch timestamp

dashboard\_user -> id

Indicates the identifier of the user who is the modifier of the resource.

Integer

dashboard\_user -> display\_name

Indicates the display name of the user who is the modifier of the resource.

String

dashboard\_user -> email

Indicates the email of the user who is the modifier of the resource.

String

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get the latest changelog of an agent

*   agent\_id: Specify agent identifier.
    
*   per\_page: Specify 1 to get the latest changelog.
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&per_page=1`

Get changelogs of an agent within a specified period

*   agent\_id: Specify agent identifier.
    
*   since\_timetoken: Specify the **from** timestamp in epoch format such as 1720604526
    
*   timetoken: Specify the **to** timestamp in epoch format such as 1736502126
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&since_timetoken=1720604526&timetoken=1736502126`

Get changelogs of an agent using pagination

*   agent\_id: Specify agent identifier.
    
*   page: Specify the page from which you wish to fetch records.
    
*   per\_page: Specify the number of entries per page.
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&page=5&per_page=2`

Get logs of skill updates in an agent

*   agent\_id: Specify agent identifier.
    
*   resources: Specify **skills** as resources.
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&resources=skills&events=update`

Get logs of all updated events in an agent

*   agent\_id: Specify agent identifier.
    
*   events: Specify **update** event.
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&events=update`

Get all changelogs of a user in an agent

*   agent\_id: Specify agent identifier.
    
*   dashboard\_user\_id: Specify user identifier. You can get the
    
    dashboard\_user\_id in the response received from the changelog API.
    

**Example**: `https://cx.avaamo.com/dashboard/change_logs?agent_id=1234&dashboard_user_id=5678`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api-v2

## 

Get agent changelog

`GET` `https://cx.avaamo.com/api/v2/change_logs.json`

An agent goes through several changes by different users in its life cycle. You can use Changelog API to get a list of changes made to an agent.

**Note:** You can also use this API to view changes made to the **masking configuration**.

#### 

Query Parameters

Name

Type

Description

agent\_id\*

integer

Identifier of the agent for which the changelog is retrieved.

dashboard\_user\_id

integer

Identifier of the user that is the modifier of the resource in the agent for which the changelog is retrieved.

You can get the dashboard\_user\_id from the API response itself.

resources

string

Resources in an agent for which you wish to get the changelogs.

Supported values are:

agent

skills

channels

entity\_types

permissions

persistent\_menu

language

live\_agent

conversation\_node

agent\_life\_cycle

response\_filter

user\_property

tag

dictionary

regression\_test

By default, all resources are considered. You can also specify multiple resources in a comma-separated list.

Example: resources=skills,channels

You can use a comma-separated list of resource types to filter data. You can get resource -> type from the API response itself.

Example: resources=Bots::ResponseSet,Bots::TrainingDatum

since\_timetoken

number

Timestamp from which the records are fetched.

If you specify timetoken and not since\_timetoken, then the latest 5 entries up to the specified timetoken are fetched.

Specify UNIX Epoch Timestamp in seconds.

timetoken

number

Timestamp until which the records are fetched. Default is the current timestamp. Specify UNIX Epoch Timestamp in seconds.

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

actions

String

Actions in an agent for which you wish to get changelog.

Supported values are: update, create, destroy

By default, all actions are considered. You can also specify multiple resources in a comma-separated list.

Example: actions=update,create

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200 Consider that you wish to get the latest change log from the agent. Use GET method and specify the URL https://cx.avaamo.com/dashboard/change\_logs?agent\_id= <<agent\_id>>&per\_page=1. The following is a sample JSON response returned:

Copy

    {
      "current_page": 1,
      "per_page": 2,
      "total_entries": 116,
      "total_pages": 58,
      "time_token": 1642749081.5028503,
      "entries": [
        {
          "id": 1120494,
          "resource": {
            "id": 38090,
            "type": "Skill"
          },
          "action": "update",
          "changelog": "John Miller disabled skill 'Q&A skill'",
          "timestamp": 1642748966,
          "dashboard_user": {
            "id": 368,
            "display_name": "John Miller",
            "email": "john@avaamo.com"
          }
        },
        {
          "id": 1120493,
          "resource": {
            "id": 268031,
            "type": "Bots::ConversationNode"
          },
          "action": "update",
          "changelog": "John Miller updated conversation node 'unhandled' 'post_processing_enabled' from 'false' to 'false'",
          "timestamp": 1642748966,
          "dashboard_user": {
            "id": 368,
            "display_name": "John Miller",
            "email": "john@avaamo.com"
          }
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned in seconds.

UNIX epoch timestamp

[entries](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api-v2#change_logs)

Indicates an array of change logs fetched from the agent. Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

entries

Indicates an array of change logs fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

resource -> id

Indicates a unique identifier of the changelog.

Integer

resource -> type

Indicates the type of resource for which the changelog is applicable.

String

action

Indicates the action such as create, update, destroy for which the changelogs are retrieved.

String

changelog

Indicates the actual change that occurred for this entry.

This is a user-friendly description to help you identify the type of change..

String

timestamp

Indicates the timestamp of when the changelog was created in seconds.

This is the timestamp when the changes for the agent are persistent in the database.

UNIX epoch timestamp

dashboard\_user -> id

Indicates the identifier of the user who is the modifier of the resource.

Integer

dashboard\_user -> display\_name

Indicates the display name of the user who is the modifier of the resource.

String

dashboard\_user -> email

Indicates the email of the user who is the modifier of the resource.

String

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get the latest changelog of an agent

*   agent\_id: Specify agent identifier.
    
*   per\_page: Specify 1 to get the latest changelog.
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&per_page=1`

Get changelogs of an agent within a specified period

*   agent\_id: Specify agent identifier.
    
*   since\_timetoken: Specify the **from** timestamp in epoch format such as 1720604526
    
*   timetoken: Specify the **to** timestamp in epoch format such as 1736502126
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&since_timetoken=1720604526&timetoken=1736502126`

Get changelogs of an agent using pagination

*   agent\_id: Specify agent identifier.
    
*   page: Specify the page from which you wish to fetch records. By default, the value is 1.
    
*   per\_page: Specify the number of entries per page. By default, the value is 5.
    

**Example**:

`https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&page=5&per_page=2`

Here, per\_page \* total\_pages = total\_entries

Get logs of skill updates in an agent

*   agent\_id: Specify agent identifier.
    
*   resources: Specify **skills** as resources.
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&resources=skills&actions=update`

Get logs of all updated actions in an agent

*   agent\_id: Specify agent identifier.
    
*   actions: Specify **update** action.
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&actions=update`

Get all changelogs of a user in an agent

*   agent\_id: Specify agent identifier.
    
*   dashboard\_user\_id: Specify user identifier. You can get the
    
    dashboard\_user\_id in the response received from the changelog API.
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234&dashboard_user_id=5678`

Get logs of masking configuration

*   agent\_id: Specify agent identifier.
    

**Example**: `https://cx.avaamo.com/api/v2/change_logs.json?agent_id=1234`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/clear-data-api

## 

Clear agent data

`POST` `https://cx.avaamo.com/dashboard/agents/{{agent_id}}/clear_data.json`

Clears the following agent data - storage, JS errors, and conversation states. Typically, this API is used when you have a huge amount of such data in an agent that is no longer required.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

Access-Token\*

string

The user access token.

You can get the user access token from the Settings -> Users and Roles page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

data\_types\*

array

Data types you wish to delete from the agent. Supported types: - **storage**: Clears the storage data. You can view the agent storage data in Agent -> Debug -> Storage. \- **js\_errors**: Clears the JS errors. You can view the JS errors in Agent -> Debug -> JS Errors and use the Clear All option to clear JS errors from the UI. - **conversation\_sessions**: Clears the conversation states of the agent and takes the conversation to the initial state. Note that this does not clear Conversation History.

200

Copy

    {
        "success": true
    }

**Key point**: The agent must be locked for edit.

### 

Code request snippets

cURL

node.js

Copy

    curl --location --request POST 'https://cx.avaamo.com/dashboard/agents/20xxx/clear_data.json' \
    --header 'Content-Type: application/json' \
    --header 'Access-Token: xxxxxx8d9952499ea466fc007dxxxxxx' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "data_types": [
        "storage_data",
        "js_errors",
        "conversation_sessions"
      ]
    }'

Copy

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://cx.avaamo.com/dashboard/agents/20xxx/clear_data.json',
      'headers': {
        'Content-Type': ['application/json', 'application/json'],
        'Access-Token': 'xxxxxx8d9952499ea466fc007dxxxxxx'
      },
      body: JSON.stringify({"data_types":["storage_data","js_errors","conversation_sessions"]})
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    });

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api

## 

Get conversation summary

`GET` `https://cx.avaamo.com/v1/conversations/{{conversation_uuid}}.json`

Gets the summary of a conversation using Conversation API. In the conversation summary, you can learn about the participants involved in the conversation and the last message of the conversation.

#### 

Path Parameters

Name

Type

Description

conversation\_uuid\*

integer

Conversation identifier.

You can get the conversation identifier from the [Conversation history URL](/user-guide/how-to/build-agents/debug-agents#using-conversation-history) or from the [Get Messages API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages) or from the message object when you are using the [Avaamo.onBotMessage callback function](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/web-channel-callback-functions) in the Web channel.

#### 

Headers

Name

Type

Description

Device-Id\*

number

Currently, this can be any random number such as 12345678.

access-token\*

string

The agent access token. You can get the agent access token from the Agent -> Settings page. See [Agent Authentication Keys](/user-guide/how-to/build-agents/configure-agents/define-settings#agent-authentication-keys), for more information

200

Copy

    {
        "conversation": {
            "uuid": "9e2484a9be77d54ef1b0b668231cc065",
            "mode": false,
            "members_type": 2,
            "avatar": false,
            "name": null,
            "created_at": 1582707000.0,
            "user": null,
            "receivers": [
                {
                    "first_name": "MacPizza",
                    "last_name": "",
                    "layer_id": "a1148a3e-58ce-4cc6-9ea6-2c2d7b092730",
                    "phone": null,
                    "email": null,
                    "avaamo_id": 3344,
                    "avatar": false,
                    "avatar_updated_at": null,
                    "custom_properties": {},
                    "display_name": "MacPizza ",
                    "bot_user_info": []
                },
                {
                    "first_name": "David",
                    "last_name": "Miller",
                    "layer_id": "dashboard_admin_test_user_163",
                    "phone": null,
                    "email": null,
                    "avaamo_id": 1380,
                    "avatar": false,
                    "avatar_updated_at": null,
                    "custom_properties": {
                        "email": "david@avaamo.com"
                    },
                    "display_name": "David Miller",
                    "bot_user_info": [
                        {
                            "key": "email",
                            "bot_id": null,
                            "value": "david@avaamo.com"
                        }
                    ]
                }
            ],
            "avatar_updated_at": null,
            "description": null,
            "last_message": {
                "uuid": "923cd3d7-3ecb-4aab-939c-2877406cb17a",
                "content": "Currently, you can place only online orders. Visit, www.macpizza.com, for more information.",
                "content_type": "text",
                "created_at": 1586255204.153764,
                "user": {
                    "first_name": "MacPizza",
                    "last_name": "",
                    "layer_id": "a1148a3e-58ce-4cc6-9ea6-2c2d7b092730",
                    "email": null,
                    "phone": null,
                    "avatar": false,
                    "avatar_updated_at": null,
                    "avaamo_id": 3344
                },
                "timetoken": 1586255204140986,
                "external_source": null,
                "device_uuid": "3c163171-9bec-492f-8448-685e9bfeffbc",
                "request_message_uuid": "2ac5917f-16d1-431f-883d-0a1c9d255658",
                "sequence": "1/1",
                "custom_properties": {
                },
                "agent_message_uuid": null,
                "read_acks": [
                    {
                        "read_at": 1586255204.0,
                        "user": {
                            "first_name": "David",
                            "last_name": "Miller",
                            "layer_id": "dashboard_admin_test_user_163",
                            "email": null,
                            "phone": null,
                            "avatar": false,
                            "avatar_updated_at": null,
                            "avaamo_id": 1380
                        }
                    }
                ],
                "attachments": [],
                "conversation": {
                    "uuid": "9e2484a9be77d54ef1b0b668231cc065",
                    "mode": false,
                    "display_name": "MacPizza,David",
                    "locale": null
                }
            },
            "members_count": 2
        }
    }

### 

Code request snippets

cURL

node.js

### 

**Response attributes**

In the response, the following attributes are returned:

Attribute

Description

Type

uuid

Indicates the page from which the entries are fetched.

Integer

created\_at

Indicates the number of entries fetched per page.

Integer

[receivers](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api#receivers)

Indicates the details of the participants in the conversation.

This is an array of two -

One with the details of the user and another the details of the agent in the conversation.

JSON key-value pairs

[last\_message](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api#last_message)

Indicates the details of the last message in the specified conversation.

JSON key-value pairs

#### 

receivers

Indicates the details of the participants in the conversation. This is an array of two - one with the details of the user and another with the details of the agent in the conversation.

Attribute

Description

Type

first\_name

Indicates the first name of the user or agent participating in the conversation.

String

last\_name

Indicates the last name of the user participating in the conversation. For agents, this field is null.

String

layer\_id

Indicates a unique user or agent identifier internally used by the Avaamo Platform.

String

phone

Indicates an array of phone numbers of the user interacting with the agent.

Array

email

Indicates the email of the user interacting with the agent.

String

custom\_properties

Indicates any additional custom properties of the user interacting with the agent.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept": "quality"

},

JSON key-value pairs

display\_name

Indicates the display name of the user participating in the conversation.

String

#### 

**last\_message**

Indicates the last message of the specified conversation:

Attribute

Description

Type

uuid

Indicates a unique identifier of the message.

String

content

Indicates the content of the message.

String

content\_type

Indicates the type of content such as text, ListView, card

String

created\_at

Indicates the timestamp of when the message was created in seconds.

UNIX epoch timestamp

user

Indicates the details of the user interacting with the agent.

*   **phone**: Indicates an array of phone numbers of the user interacting with the agent.
    
*   **layer\_id**: Indicates a unique user identifier internally used by the Avaamo Platform.
    
*   **last\_name**: Indicates the last name of the user interacting with the agent.
    
*   **first\_name**: Indicates the first name of the user interacting with the agent.
    
*   **email**: Indicates the email of the user interacting with the agent.
    

JSON key-value pairs

timetoken

Indicates the created timestamp of the message in milliseconds.

UNIX epoch timestamp

device\_uuid

Indicates a unique identifier of the device from which the agent is being used.

String

request\_message\_uuid

Indicates the message identifier from the agent to which this conversation is linked to.

String

sequence

Indicates the sequence of the agent response message. There can be multiple responses for a user query, each identified with the **request\_message\_uuid** and sequence. Note that the request\_message\_uuid is the same for each agent response.

<<message\_sequence>>/<<total message>

custom\_properties

Indicates any additional user properties in the fetched message.

**Example**:

"custom\_properties": {

“employee\_id”:12345,

“dept”: “quality”

},

JSON key-value pairs

read\_acks

Indicates the details of when the message was read and acknowledged.

*   **read\_at**: Indicates the read timestamp of the message in UNIX epoch format.
    
*   **user**: Indicates the details of the user who acknowledged the message.
    

An array of JSON key-value pairs

attachments

Indicates an array of attachments that is fetched from the agent message.

JSON key-value pairs

conversation

Indicates the conversation details of the message:

*   **uuid**: Indicates a unique identifier of the conversation.
    
*   **display\_name**: Indicates display name of the conversation in the following format: <<Agent Display Name>>, <<User First Name>>.
    
*   **locale**: Indicates the locale used in the agent conversation.
    

JSON key-value pairs

## 

Get conversation messages

`GET` `https://cx.avaamo.com/v1/conversations/{{conversation_uuid}}/messages.json`

Gets the complete message details of a specific user conversation using Conversation Message API. All the conversation with an Avaamo agent has a conversation uuid associated with the conversation. In the message details, you can learn about the actual message content, type, identifier, and details of when the message was read and acknowledged.

#### 

Path Parameters

Name

Type

Description

conversation\_uuid\*

integer

You can get the conversation identifier from the [Conversation history URL](/user-guide/how-to/build-agents/debug-agents#using-conversation-history) or from the [Get Messages API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages) or from the message object when you are using the [Avaamo.onBotMessage callback function](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/web-channel-callback-functions) in the Web channel.

#### 

Query Parameters

Name

Type

Description

since\_timetoken

number

Timestamp from which the records are fetched. If you specify timetoken and not since\_timetoken, then the latest 5 entries up to the specified timetoken are fetched. Specify UNIX Epoch Timestamp in microseconds.

timetoken

number

Timestamp until which the records are fetched. The default value is the current timestamp. Specify UNIX Epoch Timestamp in microseconds.

page

integer

Page from which the entries must be fetched. The default value is 1.

per\_page

integer

The number of entries fetched per page. Default value: 25

Maximum: 100

#### 

Headers

Name

Type

Description

Device-Id\*

string

Currently, this can be any random identifier such as 12345678.

access-token\*

string

The agent access token. You can get the agent access token from the Agent -> Settings page. See [Agent Authentication Keys](/user-guide/how-to/build-agents/configure-agents/define-settings#agent-authentication-keys), for more information.

200

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

[entries](/user-guide/ref/avaamo-platform-api-documentation/message-api#entries)

Indicates an array of messages fetched from the agent.

The number of entries in the array = Number specified in the per\_page parameter.

JSON key-value pairs

#### 

**entries**

Indicates an array of messages fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

uuid

Indicates a unique identifier of the message.

String

content

Indicates the content of the message.

String

content\_type

Indicates the type of content such as text, ListView, card

String

created\_at

Indicates the timestamp of when the message was created in seconds.

UNIX epoch timestamp

user

Indicates the details of the user interacting with the agent.

*   **phone**: Indicates an array of phone numbers of the user interacting with the agent.
    
*   **layer\_id**: Indicates a unique user identifier internally used by the Avaamo Platform.
    
*   **last\_name**: Indicates the last name of the user interacting with the agent.
    
*   **first\_name**: Indicates the first name of the user interacting with the agent.
    
*   **email**: Indicates the email of the user interacting with the agent.
    

JSON key-value pairs

timetoken

Indicates the created timestamp of the message in milliseconds.

UNIX epoch timestamp

device\_uuid

Indicates a unique identifier of the device from which the agent is being used.

String

request\_message\_uuid

Indicates the message identifier from the agent for which this conversation is linked to. For a live agent conversation message, request\_message\_uuid is null.

String

sequence

Indicates the sequence of the agent response message. There can be multiple responses for a user query, each identified with the **request\_message\_uuid** and sequence. Note that the request\_message\_uuid is the same for each agent response.

<<message\_sequence>>/<<total message>

custom\_properties

Indicates any additional user properties in the fetched message.

**Example**:

"custom\_properties": {

“employee\_id”:12345,

“dept”: “quality”

},

JSON key-value pairs

agent\_message\_uuid

Indicates the unique identifier for a live agent conversation.

String

read\_acks

Indicates the details of when the message was read and acknowledged.

*   **read\_at**: Indicates the read timestamp of the message in UNIX epoch format.
    
*   **user**: Indicates the details of the user who acknowledged the message.
    

An array of JSON key-value pairs

attachments

Indicates an array of attachments that is fetched from the agent message.

JSON key-value pairs

conversation

Indicates the conversation details of the message:

*   **uuid**: Indicates a unique identifier of the conversation.
    
*   **display\_name**: Indicates display name of the conversation in the following format: <<Agent Display Name>>, <<User First Name>>.
    
*   **locale**: Indicates the locale used in the agent conversation.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get the latest message of a user conversation

**per\_page**: Specify 1 to get the latest message.

**Example**: `https://cx.avaamo.com/v1/conversations/`

`<<conversation_uuid>>/messages.json?per_page=1`

Get messages of a user conversation within a specified period

**since\_timetoken**: Specify the **from** timestamp in epoch format such as 1569229247677821

**timetoken**: Specify the **to** timestamp in epoch format such as 1569229251418739.

**Example**:

`https://cx.avaamo.com/v1/conversations/`

`<<conversation_uuid>>/messages.json?since_timetoken=1569229247677821&timetoken=1569229251418739`

Get messages of a user conversation using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/v1/conversations/`

`<<conversation_uuid>>/messages.json?page=5&per_page=2`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/feedback-api

## 

Get feedback summary

`GET` `https://cx.avaamo.com/dashboard/bots/{{agent_id}}/feedbacks/user_feedbacks.json`

Get a summary of the total positive and negative user feedback given to an agent. If you wish to get details of each feedback, then refer to **Get feedback details**.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved. Default value is the last four days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved. Default value is the current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200

Copy

    {
        "user_feedbacks": [
            {
                "feedback_type": "Positive Feedback",
                "count": 3,
                "positive": true
            },
            {
                "feedback_type": "Negative Feedback",
                "count": 2,
                "positive": false
            }
        ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, user\_feedbacks array is returned with a count of positive and negative feedback:

Attribute

Description

Type

feedback\_type

Indicates if the feedback is positive or negative.

String

count

Indicates the count of positive or negative feedback.

Integer

positive

Indicates if the user feedback is positive or negative.

Boolean

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get overall feedback summary

`https://cx.avaamo.com/dashboard/bots/<<agent_id>>/feedbacks`

`/user_feedbacks.json?utc_offset=<<utc-offset-seconds>>`

Get feedback summary within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/`

`feedbacks/user_feedbacks.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

## 

Get feedback details

`GET` `https://cx.avaamo.com/dashboard/bots/{{agent_id}}/feedbacks.json`

Gets details of each user feedback given to the agent. In the response, you can learn about the intent, user query, and the skill for which the feedback was given.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

response\_type

string

Indicates if you wish to get a detailed response for each feedback. In the detailed response, you can view the user query and the user details for which the feedback is given. Specify **detailed** to view a detailed response for each feedback.

since\_timetoken

number

Timestamp from which the records are fetched.

If you specify timetoken and not since\_timetoken, then the latest 5 entries up to the specified timetoken are fetched.

Specify UNIX Epoch Timestamp in seconds.

timetoken

number

Timestamp until which the records are fetched.

Default is the current timestamp.

Specify UNIX Epoch Timestamp in seconds.

page

integer

Page from which the entries must be fetched.

Default is 1.

per\_page

integer

Number of entries fetched per page.

Default: 25.

Maximum: 100

from\_date

String

Date from which the required details are retrieved.

Default value is the last four days from the to\_date.

Specify date in dd/mm/yyyy format.

to\_date

String

Date to which the required details are retrieved.

Default value is the current date.

Specify date in dd/mm/yyyy format.

message\_uuid

String

Unique identifier of the message. Refer [Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages)

to get the details of message uuid.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token. You can get the user access token from the Settings -> Users and Roles page. Users must have at least view permission on the agent.

200: OK

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

[feedbacks](/user-guide/ref/avaamo-platform-api-documentation/feedback-api#feedbacks)

Indicates an array of feedback entries fetched from the agent. Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

**feedbacks**

Indicates an array of messages fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

id

Indicates a unique identifier of the feedback message.

Integer

comment

Indicates the comments given by the user for negative feedback.

String

positive/negative

Indicates if the user feedback is positive or negative

Boolean

node\_key

Indicates the node number for which the feedback is given.

*   For Q&A skill the node\_key is 1.
    
*   For Dialog skill node\_key is <<skill\_number>>.<<node\_number>>
    

String

intent\_type

Indicates the type of intent. For Q&A skill, intent\_type is "Q&A Intent".

For Dialog skill, intent\_type can be entity, training phrase, custom code, or system entity. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

String

intent\_name

Indicates the name of the intent for which the feedback is given.

String

created\_at

Indicates the timestamp of when the feedback was created in seconds.

UNIX epoch timestamp

skill\_name

Indicates the name of the skill.

String

bot\_replies -> message

Indicates the message agent responded with. By default, this field always shows a "null" value. See [Messege API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages), for more details on the parameters displayed in this section.

JSON key-value pairs

user\_query

Indicates the user query for which the feedback is given. This is returned only for a detailed response.

String

user

Indicates the details of the user interacting with the agent.

*   **phone**: Indicates an array of phone numbers of the user interacting with the agent.
    
*   **layer\_id**: Indicates a unique user identifier internally used by the Avaamo Platform.
    
*   **last\_name**: Indicates the last name of the user interacting with the agent.
    
*   **first\_name**: Indicates the first name of the user interacting with the agent.
    
*   **email**: Indicates the email of the user interacting with the agent.
    

This is returned only for a detailed response.

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get feedback entries from agent using pagination

**page**: Specify the page from which you wish to fetch records. By default, the value is 1.

**per\_page**: Specify the number of entries per page. By default, the value is 5.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/feedbacks.json&per_page=2&page=1`

Here, per\_page \* total\_pages = total\_entries

Get feedback entries from agent within a specified period

**since\_timetoken**: Specify the **from** timestamp in epoch format such as 1772006240

**timetoken**: Specify the **to** timestamp in epoch format such as 1772006570.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/feedbacks.json?since_timetoken=<<from_timetoken>>&timetoken=<<to_timetoken>`

Get detailed feedback response

**response\_type**: detailed

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/feedbacks.json?response_type=detailed`

Get feedback entries from agent using message UUID

**message\_uuid:** Specify the Unique identifier of the message such as u-2xxxxxxx9-7xxe-4xx9-8xx5-7xxxxxxxxxx9 **Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/feedbacks.json?&message_uuid=<<message_uuid>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api

[Live agent intervention](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/agent-intervention)[Usage](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage)[Channel usage](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/channel-usage-api)[Top intents](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-intents)[Top tags](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-tags)[Top Q&A intents](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-q-and-a-intents)[Top Smalltalk intents](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-smalltalk-intents)[Top feedback intents](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-feedback-intents)[Unhandled messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/unhandled-messages)[Successful messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/successful-messages)[User sessions](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/user-sessions)[Messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages)

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/agent-intervention

## 

Get live agent interventions

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/agent_intervention.json`

Gets the statistics on the live agent transfers by the users.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date. Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

Default value is the current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_stats": {
        "start_time": 1586502000,
        "end_time": 1586847599,
        "session_count": 7858,
        "interventions_count": 5,
        "users_count": 7858
      },
      "previous_interval_stats": {
        "start_time": 1586156401,
        "end_time": 1586502000,
        "session_count": 15094,
        "interventions_count": 0,
        "users_count": 15094
      },
      "stats": [
        {
          "start_time": 1586502000,
          "end_time": 1586540399.8888888,
          "session_count": 2209,
          "interventions_count": 2,
          "users_count": 2209
        },
        {
          "start_time": 1586540399.8888888,
          "end_time": 1586578799.7777777,
          "session_count": 490,
          "interventions_count": 2,
          "users_count": 490
        },
        {
          "start_time": 1586578799.7777777,
          "end_time": 1586617199.6666667,
          "session_count": 1821,
          "interventions_count": 1,
          "users_count": 1821
        },
        {
          "start_time": 1586617199.6666667,
          "end_time": 1586655599.5555556,
          "session_count": 592,
          "interventions_count": 0,
          "users_count": 592
        },
        {
          "start_time": 1586655599.5555556,
          "end_time": 1586693999.4444444,
          "session_count": 1491,
          "interventions_count": 0,
          "users_count": 1491
        },
        {
          "start_time": 1586693999.4444444,
          "end_time": 1586732399.3333333,
          "session_count": 1064,
          "interventions_count": 0,
          "users_count": 1064
        },
        {
          "start_time": 1586732399.3333333,
          "end_time": 1586770799.2222223,
          "session_count": 1291,
          "interventions_count": 0,
          "users_count": 1291
        },
        {
          "start_time": 1586770799.2222223,
          "end_time": 1586809199.1111112,
          "session_count": 0,
          "interventions_count": 0,
          "users_count": 0
        },
        {
          "start_time": 1586809199.1111112,
          "end_time": 1586847599,
          "session_count": 0,
          "interventions_count": 0,
          "users_count": 0
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes:

In response JSON, the following statistics can be viewed:

*   **aggregate\_stats**: Indicates agent usage statistics for the time period (to\_date - from\_date) specified in the query parameters. Example: from\_date -> 15th November, 2020, to\_date -> 30th November, 2020. Here, aggregate\_stats is displayed for a period of 15 days from 15th November to 30th November.
    
*   **previous\_interval\_stats**: Indicates agent usage statistics for the same number of days prior to from\_date. Example: Here, previous\_interval\_stats is displayed for a period of 15 days prior to from\_date (1st November to 15th November).
    
*   **stats**: This is an array of 9 elements. Each array element provides statistics for a specific duration interval. Duration Interval = \[(end\_time - start\_time) in aggregate\_stats\] / 9.
    

Each of these statistics contains the following details:

Attribute

Description

Type

start\_time, end\_time

Indicates the time frame for which session\_count, interventions\_count, and users\_count

Unix epoch timestamp

session\_count

Indicates the number of sessions in the specified time frame.

Integer

interventions\_count

Indicates the number of agent interventions in the specified time frame.

Integer

users\_count

Indicates the number of users in the session for the specified time frame.

Integer

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get overall list of agent interventions

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/agent_intervention.json?utc_offset=<<utc-offset-seconds>>`

Get agent interventions within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/agent_intervention.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage

## 

Get agent usage

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/usage.json`

Gets statistics on overall usage of the agent such as count of messages, successful responses, ambiguous responses, and success rate percentage.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

The difference in seconds from Coordinated Universal Time (UTC) for a particular place and date. The default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

The default value is the current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

Access-Token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_stats": {
        "start_time": 1586502000,
        "end_time": 1586847599,
        "session_count": 8123,
        "messages_count": 50138,
        "unhandled_messages_count": 2297,
        "successful_responses_count": 45736,
        "ambiguous_messages_count": 2105,
        "interventions_count": 0,
        "success_rate_count": 47633,
        "success_rate": 91.22
      },
      "previous_interval_stats": {
        "start_time": 1586156401,
        "end_time": 1586502000,
        "session_count": 15094,
        "messages_count": 82686,
        "unhandled_messages_count": 4745,
        "successful_responses_count": 74013,
        "ambiguous_messages_count": 3928,
        "interventions_count": 0,
        "success_rate_count": 77615,
        "success_rate": 89.51
      },
      "stats": [
        {
          "start_time": 1586502000,
          "end_time": 1586540399.8888888,
          "session_count": 2209,
          "messages_count": 11852,
          "unhandled_messages_count": 525,
          "successful_responses_count": 10731,
          "ambiguous_messages_count": 596,
          "interventions_count": 0,
          "success_rate_count": 11255,
          "success_rate": 90.54
        },
        {
          "start_time": 1586540399.8888888,
          "end_time": 1586578799.7777777,
          "session_count": 490,
          "messages_count": 1927,
          "unhandled_messages_count": 168,
          "successful_responses_count": 1689,
          "ambiguous_messages_count": 70,
          "interventions_count": 0,
          "success_rate_count": 1752,
          "success_rate": 87.65
        },
        {
          "start_time": 1586578799.7777777,
          "end_time": 1586617199.6666667,
          "session_count": 1821,
          "messages_count": 11481,
          "unhandled_messages_count": 414,
          "successful_responses_count": 10579,
          "ambiguous_messages_count": 488,
          "interventions_count": 0,
          "success_rate_count": 11031,
          "success_rate": 92.14
        },
        {
          "start_time": 1586617199.6666667,
          "end_time": 1586655599.5555556,
          "session_count": 592,
          "messages_count": 3956,
          "unhandled_messages_count": 153,
          "successful_responses_count": 3703,
          "ambiguous_messages_count": 100,
          "interventions_count": 0,
          "success_rate_count": 3794,
          "success_rate": 93.6
        },
        {
          "start_time": 1586655599.5555556,
          "end_time": 1586693999.4444444,
          "session_count": 1491,
          "messages_count": 8339,
          "unhandled_messages_count": 433,
          "successful_responses_count": 7575,
          "ambiguous_messages_count": 331,
          "interventions_count": 0,
          "success_rate_count": 7870,
          "success_rate": 90.84
        },
        {
          "start_time": 1586693999.4444444,
          "end_time": 1586732399.3333333,
          "session_count": 1064,
          "messages_count": 4568,
          "unhandled_messages_count": 240,
          "successful_responses_count": 4128,
          "ambiguous_messages_count": 200,
          "interventions_count": 0,
          "success_rate_count": 4316,
          "success_rate": 90.37
        },
        {
          "start_time": 1586732399.3333333,
          "end_time": 1586770799.2222223,
          "session_count": 1429,
          "messages_count": 7031,
          "unhandled_messages_count": 330,
          "successful_responses_count": 6421,
          "ambiguous_messages_count": 280,
          "interventions_count": 0,
          "success_rate_count": 6667,
          "success_rate": 91.32
        },
        {
          "start_time": 1586770799.2222223,
          "end_time": 1586809199.1111112,
          "session_count": 225,
          "messages_count": 985,
          "unhandled_messages_count": 34,
          "successful_responses_count": 911,
          "ambiguous_messages_count": 40,
          "interventions_count": 0,
          "success_rate_count": 949,
          "success_rate": 92.49
        },
        {
          "start_time": 1586809199.1111112,
          "end_time": 1586847599,
          "session_count": 0,
          "messages_count": 0,
          "unhandled_messages_count": 0,
          "successful_responses_count": 0,
          "ambiguous_messages_count": 0,
          "interventions_count": 0,
          "success_rate_count": 0,
          "success_rate": null
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In response JSON, the following statistics can be viewed:

*   **aggregate\_stats**: Indicates agent usage statistics for the time period (to\_date - from\_date) specified in the query parameters. Example: from\_date -> 15th November, to\_date -> 30th November. Here, aggregate\_stats is displayed for a period of 15 days from 15th November to 30th November.
    
*   **previous\_interval\_stats**: Indicates agent usage statistics for the same number of days prior to the from\_date. Example: Here, previous\_interval\_stats is displayed for a period of 15 days prior to from\_date (1st November to 15th November).
    
*   **stats**: This is an array of 9 elements. Each array element provides statistics for a specific duration interval. Duration Interval = \[(end\_time - start\_time) in aggregate\_stats\] / 9.
    

Each of these statistics contains the following details:

Attribute

Description

Type

start\_time, end\_time

Indicates the time frame for which statistics are applicable.

Unix epoch timestamp

session\_count

Indicates the number of sessions in the specified time frame. Here, a session indicates a user agent interaction.

Integer

messages\_count

Indicates the number of messages received by the agent in the specified time frame.

Integer

unhandled\_messages\_count

Indicates the number of messages that led to unhandled responses in the specified time frame.

Integer

successful\_responses\_count

Indicates the number of successful responses in the specified time frame.

`successful_responses_count =`

`(messages_count - unhandled_messages_count - ambiguous_messages_count)`

Integer

ambiguous\_messages\_count

Indicates the number of messages that led to ambiguous responses in the specified time frame.

Integer

interventions\_count

Indicates the number of agent interventions in the specified time frame.

Integer

success\_rate

Indicates the success rate of the agent in percentage. `success_rate = (successful_responses_count / messages_count) * 100`

Integer

success\_rate\_count

Indicates the number of successful responses including only those ambiguous messages that are not mismatched.

Note that during disambiguation,

*   If you select none of the above options, then that is considered mismatched.
    
*   If the user did not choose any of the options from the list, then the query is counted in ambiguous\_messages\_count.
    

`success_rate_count = successful_responses_count + ambiguous_messages_count - mismatched_ambiguous_messages_count`

Integer

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get an overall list of agent usage

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/usage.json?utc_offset=<<utc-offset-seconds>>`

Get agent usage within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/usage.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/channel-usage-api

## 

Get channel usage

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/channel_usage.json`

Gets the count of user interactions from the different channels the agent is deployed on.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

The difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

The default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

The default value is the current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "channel_usage": [
        {
          "type": "web",
          "channel": "web",
          "count": 35565
        },
        {
          "type": "whatsapp"
          "channel": "whatsApp_Disha_3",
          "count": 27058
        }
      ]
    }

Copy

    {
        "error": "To Date cannot be before From Date"
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes:

In the response, the user\_feedbacks array is returned with a count of positive and negative feedback:

Attribute

Description

Type

channel\_usage

Indicates an array of channels and channel usage. Each array contains the following details about the intents:

*   type: Indicates the channel type.
    
*   channel: Indicates the channel name.
    
*   count: Indicates the count of user interactions from the channels.
    

An array of

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get overall list of channel usage

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/channel_usage.json?utc_offset=<<utc-offset-seconds>>`

Get channel usage within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/channel_usage.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-intents

## 

Get top intents

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/top_intents.json`

Gets a list of intents that are frequently triggered in the conversation flow. In the response, for each of the top intent you can learn about the intent type, intent number, and the number of times the intent is used.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved. Default value is the current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_intent_count": 7652,
      "top_intents": [
        {
          "intent_id": 123,
          "intent_name": "Customer Service",
          "intent_count": 4359,
          "intent_type": "INLINE::INTENT",
          "deleted": false
        },
        {
          "intent_id": 124,
          "intent_name": "Our Services",
          "intent_count": 1542,
          "intent_type": "INLINE::INTENT",
          "deleted": false
        },
        {
          "intent_id": 125,
          "intent_name": "Contact Us",
          "intent_count": 1052,
          "intent_type": "INLINE::INTENT",
          "deleted": false
        },
        {
          "intent_id": 126,
          "intent_name": "Fund Value",
          "intent_count": 699,
          "intent_type": "INLINE::INTENT",
          "deleted": false
        }
      ]
    }
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, **top\_intents** array is returned with a list of intents that are frequently triggered in the conversation flow:

**Note**: A maximum of 10 records is returned in the response.

Attribute

Description

Type

aggregate\_intent\_count

Indicates the total count of all the top intents frequently used in the conversation flow.

Integer

top\_intents

Indicates an array of top intents that are frequently used in the conversation flow. Each array contains the following details about the intents:

*   intent\_id: Indicates the identifier of the intent.
    
*   intent\_name: Indicates the name of the intent.
    
*   intent\_count: Indicates the number of times the intent was used in the conversation flow.
    
*   intent\_type: Indicates the type of intent.
    
*   deleted: Indicates if the top intent is present or deleted in the agent. Possible values: true, false.
    
    *   true: A top intent that matched earlier has been deleted. As the API is based on historical data, the deleted top intent is also included in the API response.
        
    *   false: An intent that still is a top intent and has not been deleted.
        
    

Array of JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get list of top intents

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/`

`top_intents.json?utc_offset=<<utc-offset-seconds>>`

Get top intents within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/`

`top_intents.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-tags

## 

Get top tags

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/top_tags.json`

Gets a list of tags that are frequently triggered in the conversation flow. In the response, for each of the top tags, you can learn about the tag name and the number of times the tag is used.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date. Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved. Default value is current date. Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
        "aggregate_tag_count": 12,
        "top_tags": [
            {
                "tag_name": "status",
                "count": 9,
                "tag_id": 829,
                "deleted": false
            },
            {
                "tag_name": "order",
                "count": 3,
                "tag_id": 827,
                "deleted": false
            }
        ]
    }

Copy

    {
        "error": "To Date cannot be before From Date"
    }

**Key points**:

*   Only custom tags are included in the Top tags API. See [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
    
*   For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.
    

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, a **top\_tags** array is returned with a list of tags that are frequently triggered in the conversation flow:

**Note**: A maximum of 10 records is returned in the response.

Attribute

Description

Type

aggregate\_tag\_count

Indicates the total count of all the top intents frequently used in the conversation flow.

Integer

top\_tags

Indicates an array of top tags that are frequently used in the conversation flow. Each array contains the following details about the tags:

*   tag\_id: Indicates the identifier of the tag.
    
*   tag\_name: Indicates the name of the tag.
    
*   count: Indicates the number of times the tag was used in the conversation flow.
    
*   deleted: Indicates if the top tags are present or deleted in the agent. Possible values: true, false.
    
    *   true: A top tag that matched earlier has been deleted. As the API is based on historical data, the deleted top tag is also included in the API response.
        
    *   false: A tag that still is a top tag and has not been deleted.
        
    

Array of JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get list of top tags

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/`

`top_tags.json?utc_offset=<<utc-offset-seconds>>`

Get top tags within a specified period

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/top_tags.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-q-and-a-intents

## 

Get top Q&A intents

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/top_knowldge_pack_intents.json`

Gets a list of Q&A intents that are frequently triggered in the conversation flow. In the response, for each of the Q&A intent, you can learn about the intent type, intent number, and the number of times the intent is used.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date.

Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

Default value is the current date.

Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_intent_count": 427,
      "top_intents": [
        {
          "intent_id": 270990,
          "intent_name": "Contact Us",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 122
        },
        {
          "intent_id": 270991,
          "intent_name": "Unable to Pay",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 107
        },
        {
          "intent_id": 270992,
          "intent_name": "My Account",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 69
        },
        {
          "intent_id": 270993,
          "intent_name": "Payment Modes",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 63
        },
        {
          "intent_id": 270994,
          "intent_name": "Branch Locator",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 60
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the **top\_intents** array is returned with a list of Q&A intents that are frequently triggered in the conversation flow:

**Note**: A maximum of 10 records is returned in the response.

Attribute

Description

Type

aggregate\_intent\_count

Indicates the total count of all the top Q&A intents frequently used in the conversation flow.

Integer

top\_intents

Indicates an array of top Q&A intents that are frequently used in the conversation flow. Each array contains the following details about the intents:

*   intent\_id: Indicates the identifier of the intent.
    
*   intent\_name: Indicates the name of the intent.
    
*   intent\_count: Indicates the number of times the intent was used in the conversation flow.
    
*   intent\_type: Indicates the type of intent.
    

Array of JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get list of top Q&A intents.

`https://cx.avaamo.com/bots/analytics/<<agent_id>>`

`/top_knowldge_pack_intents.json?utc_offset=<<utc-offset-seconds>>`

Get top Q&A intents within a specified period.

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>`

`/top_knowldge_pack_intents.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-smalltalk-intents

## 

Get top Smalltalk intents

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/top_smalltalk_intents.json`

Gets a list of Smalltalk intents that are frequently triggered in the conversation flow. In the response, for each of the Smalltalk intents, you can learn about the intent type, intent number, and the number of times the intent is used.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date.

Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

Default value is the current date.

Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_intent_count": 450,
      "top_intents": [
        {
          "intent_id": 270999,
          "intent_name": "Thank you",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 100,
          "deleted": false
        },
        {
          "intent_id": 270998,
          "intent_name": "Thank You",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 150,
          "deleted": false
        },
        {
          "intent_id": 1283,
          "intent_name": "OK",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "intent_count": 200,
          "deleted": false
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the **top\_intents** array is returned with a list of Smalltalk intents that are frequently triggered in the conversation flow:

**Note**: A maximum of 10 records is returned in the response.

Attribute

Description

Type

aggregate\_intent\_count

Indicates the total count of all the top Smalltalk intents frequently used in the conversation flow.

Integer

top\_intents

Indicates an array of top Smalltalk intents that are frequently used in the conversation flow. Each array contains the following details about the intents:

*   intent\_id: Indicates the identifier of the intent.
    
*   intent\_name: Indicates the name of the intent.
    
*   intent\_count: Indicates the number of times the intent was used in the conversation flow.
    
*   intent\_type: Indicates the type of intent.
    
*   deleted: Indicates if the top Smalltalk is present or deleted in the agent. Possible values: true, false.
    
    *   true: A top Smalltalk intent that matched earlier has been deleted. As the API is based on historical data, the deleted top intent is also included in the API response.
        
    *   false: A top Smalltalk intent that still is a top intent and has not been deleted.
        
    

Array of JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get list of top Smalltalk intents.

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/top_smalltalk_intents.json?utc_offset=<<utc-offset-seconds>>`

Get top Smalltalk intents within a specified period.

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/top_smalltalk_intents.json?from_date=01/04/2020&to_date=06/04/2020`

`&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/top-feedback-intents

## 

Get top feedback intents

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/top_feedback_intents.json`

Gets a list of top intents for which feedback is received by the agent. In the response, for each of the intents, you can learn about the intent name, the number of positive feedback responses, and the number of negative feedback responses. You can further use **Feedback API**, to get detailed feedback responses.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

utc\_offset

number

Difference in seconds from Coordinated Universal Time (UTC) for a particular place and date.

Default value is 0 implying that there is no offset from Coordinated Universal Time (UTC).

from\_date

string

Date from which the required details are retrieved.

Default value is the last three days from the to\_date.

Specify date in dd/mm/yyyy format.

to\_date

string

Date to which the required details are retrieved.

Default value is the current date.

Specify date in dd/mm/yyyy format.

#### 

Headers

Name

Type

Description

Access-Token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "aggregate_intent_count": {
        "positive": 874,
        "negative": 615
      },
      "top_intents": [
        {
          "positive": 135,
          "negative": 18,
          "intent_name": "Thanks"
        },
        {
          "negative": 7,
          "positive": 3,
          "intent_name": "Bye"
        },
        {
          "negative": 3,
          "positive": 3,
          "intent_name": "Policy Information"
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, **top\_intents** array is returned with a list of top intents for which feedback is received by the agent:

**Note**: A maximum of 10 records is returned in the response.

Attribute

Description

Type

aggregate\_intent\_count

Indicates the total count of positive and negative feedback received by the agent.

Integer

top\_intents

Indicates an array of top intents for which feedback is received by the agent. Each array contains the following details about the intents:

*   negative: Indicates the number of negative feedback responses received for this intent.
    
*   positive: Indicates the number of positive feedback responses received for this intent.
    
*   intent\_name: Indicates the name of intent for which the feedback was given.
    

Array of JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get list of top intents for which feedback is received by the agent.

`https://cx.avaamo.com/bots/analytics/<<agent_id>>/top_feedback_intents.json?utc_offset=<<utc-offset-seconds>>`

Get top intents for which feedback is received by the agent within a specified period.

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/top_feedback_intents.json?from_date=01/04/2020&to_date=06/04/2020`

`&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/unhandled-messages

## 

Get unhandled messages

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/unhandled_messages.json`

Gets a list of unhandled responses that are triggered in the conversation flow. In the response, for each of the unhandled message responses, you can learn about the user query, created time, message identifier, and the details of the user who posted the query.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

from\_timetoken

number

Timestamp from which the records are fetched.

Default value is last three days from the specified to\_timetoken value.

Specify UNIX Epoch Timestamp.

to\_timetoken

number

Timestamp until which the records are fetched. Default is the current timestamp.

Specify UNIX Epoch Timestamp.

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "current_page": 1,
      "per_page": 1,
      "total_entries": 3038,
      "total_pages": 3038,
      "time_token": 1588842292.4734528,
      "entries": [
        {
          "message_uuid": "f80145f9-6a1f-4494-92a0-1f13f188d469",
          "score": 0,
          "content": "Tel me about your product ",
          "intent_type": "UNHANDLED::INTENT",
          "channel_name": "web",
          "created_at": 1588575626,
          "user": {
            "first_name": 9374364
          },
          "intent_name": "Unhandled"
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

entries

Indicates an array of unhandled messages fetched from the agent. Number of entries in the array = Number specified in per\_page parameter. In each unhandled message, the following details are returned:

*   message\_uuid: Unique identifier of the message.
    
*   content: User query for which agent gave the unhandled response.
    
*   channel\_name: Channel used by the user to communicate with the agent.
    
*   created\_at: Timestamp of message creation.
    
*   user: User who interacted with the agent.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get unhandled messages from agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/unhandled_messages.json?page=5&per_page=2`

Get unhandled messages from agent within a specified period.

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/unhandled_messages.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/successful-messages

## 

Get successful messages

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/successful_responses.json`

Gets a list of successful message responses that are triggered in the conversation flow. In the response, for each of the successful message responses, you can learn about the user query, created time, message identifier, and the details of the user who posted the query. Note that disambiguations are also available in the response

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

The number of entries fetched per page. Default: 25 Maximum value: 100

from\_timetoken

Number

Timestamp from which the records are fetched.

If you specify from\_timetoken and not to\_timetoken, then the latest 5 entries upto the specified timetoken are fetched.

Specify UNIX Epoch Timestamp in microseconds.

to\_timetoken

Number

Timestamp until which the records are fetched. Default is the current timestamp.

Specify UNIX Epoch Timestamp in microseconds.

#### 

Headers

Name

Type

Description

Access-Token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "current_page": 1,
      "per_page": 1,
      "total_entries": 42,
      "total_pages": 42,
      "time_token": 1589536852.4691367,
      "entries": [
        {
          "message_uuid": "ebd118af-025e-4a07-b2df-2a883d53ee31",
          "score": 1,
          "content": "where is your store?",
          "intent_type": "KNOWLEDGEPACK::INTENT",
          "channel_name": "web",
          "created_at": 1589451824,
          "user": {
            "first_name": 30572
          },
          "intent_name": "store"
        }
      ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

entries

Indicates an array of successful messages fetched from the agent. Number of entries in the array = Number specified in per\_page parameter. In each successful message, the following details are returned:

*   message\_uuid: Unique identifier of the message.
    
*   content: User query for which agent gave a successful response.
    
*   channel\_name: Channel used by the user to communicate with the agent.
    
*   created\_at: Timestamp of message creation.
    
*   user: User who interacted with the agent.
    
*   intent\_name: Name of intent that gave a response to the user.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get successful messages from agent using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/successful_responses.json?page=<<no_of_pages>>&per_page=<<per_page_messages>>`

Get successful messages from agent within a specified period.

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/successful_responses.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-seconds>>`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/user-sessions

## 

Get user sessions

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/sessions.json`

Gets a list of unique user sessions with the agent within a specified period of time. Here, a user session indicates user interaction with the agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

per\_page

number

The number of entries fetched per page. Default value: 25 Maximum value: 100

page

number

Page from which the entries must be fetched. Default value: 1

from\_timetoken

number

Timestamp from which the records are fetched.

Default value is last three days from the specified to\_timetoken value.

Specify UNIX Epoch Timestamp.

to\_timetoken

number

Timestamp until which the records are fetched.

Default is the current timestamp.

Specify UNIX Epoch Timestamp.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
      "current_page": 1,
      "per_page": 1,
      "total_entries": 6,
      "total_pages": 6,
      "time_token": 1600752248.3784475,
      "entries": [
        {
          "first_name": "John",
          "last_name": "Miller",
          "layer_id": "dashboard_admin_test_user_368",
          "created_at": 1576153636
        }
      ]
    }

Copy

    {
        "error": "To Date cannot be before From Date"
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

entries

Indicates an array of user sessions fetched from the agent. The number of entries in the array = Number specified in the per\_page parameter. Each array contains the following details of each user session:

*   first\_name: First name of the user. Currently, for non-dashboard users, the name is displayed as "You".
    
*   last\_name: Last name of the user, if any.
    
*   layer\_id: Unique user identifier used internally by the Avaamo Platform.
    
*   created\_at: Indicates the timestamp in UNIX epoch timestamp format of when the session was created in seconds.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get unique user sessions in a specified period of time

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/sessions.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-second`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages

## 

Get agent messages

`GET` `https://cx.avaamo.com/bots/analytics/{{agent_id}}/messages.json`

Gets a list of messages from the agent within a specified period of time.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

per\_page

number

The number of entries fetched per page. Default value: 25 Maximum value: 100

page

number

Page from which the entries must be fetched. Default value: 1

from\_timetoken

number

Timestamp from which the records are fetched.

Default value is last three days from the specified to\_timetoken value.

Specify UNIX Epoch Timestamp.

to\_timetoken

number

Timestamp until which the records are fetched.

Default is the current timestamp.

Specify UNIX Epoch Timestamp.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Successful request

422: Unprocessable Entity Unprocessable entity -> to\_date is before from\_date

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 8,
        "total_pages": 8,
        "time_token": 1716811116.983583,
        "entries": [
            {
                "message_uuid": "e00a9d28-xxxx-4350-xxxx-389c395afec5",
                "score": 1.0,
                "content": "",
                "intent_type": "JS::INTENT",
                "channel_name": "web",
                "created_at": 1716811065.0,
                "user": {
                    "first_name": "David",
                    "layer_id": "06c7beb3-9bf8-xxxx-xxxx-745e5431053d"
                },
                "intent_name": "custom code"
            }
        ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

entries

Indicates an array of user sessions fetched from the agent. The number of entries in the array = Number specified in the per\_page parameter. Each array contains the following details of each user session:

*   message\_uuid: Unique message identifier.
    
*   content: Content of the message.
    
*   intent\_type: Type of intent such as system, inline, KnowledgePack
    
*   channel\_name: Channel of communication
    
*   created\_at: Timestamp at which the message was created in seconds. This is in Unix epoch timestamp format.
    
*   first\_name: If the user information is collected, then `first_name` indicates the first name of the user corresponding to the message, or else it is displayed as "You". See [Collect user information](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#collect-user-information), for more details.
    
*   layer\_id: Unique identifier for each user.
    
*   intent\_name: Name of the intent corresponding to the message.
    

JSON key-value pairs

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get agent messages in a specified period of time

**from\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/bots/analytics/<<agent_id>>/messages.json?from_date=01/04/2020&to_date=06/04/2020&utc_offset=<<utc-offset-sec`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/global-storage-api

## 

Get global storage data

`GET` `https://cx.avaamo.com/bots_api/v1/storages/{{key}}.json?bot_id={{bot_id}}`

Get the value of the specified key from the agent's global storage.

#### 

Path Parameters

Name

Type

Description

key\*

String

Key of the storage variable.

#### 

Query Parameters

Name

Type

Description

bot\_id\*

Integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access-token \*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200: OK

Copy

    {
        "key": "bearer_token",
        "value": "jfqbu23Zi2"
    }

### 

Code request snippets

cURL

node.js

Copy

    curl --location --request GET 'https://cx.avaamo.com/bots_api/v1/storages/<<key>>.json?bot_id=30xxx' \
    --header 'access-token: xxxxxxe6e3aa45349dad98axxxxxxxxx'

Copy

    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://cx.avaamo.com/bots_api/v1/storages/<<key>>.json?bot_id=30xxx',
      'headers': {
        'access-token': 'xxxxxxe6e3aa45349dad98axxxxxxxxx'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

key

Indicates the key of the storage variable.

String

value

Indicates the value of the storage variable.

String

### 

Example

The following table lists a sample use case with query parameters:

Use-case

Description

Get global storage data value of a key

**key**: Specify the key of the storage variable in the request.

**Example**: https://cx.avaamo.com/bots\_api/v1/storages/<<key>>.json?bot\_id=<<bot\_id>>

## 

Set global storage data

`PUT` `https://cx.avaamo.com/bots_api/v1/storages/{{key}}.json?bot_id={{bot_id}}`

Stores key and the value in agent's global storage. This is applicable to all the users interacting with agents.

#### 

Path Parameters

Name

Type

Description

key\*

String

Key of the storage variable.

#### 

Query Parameters

Name

Type

Description

bot\_id

Integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access\_token\*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

value\*

String

Value of the storage variable.

201: Created

### 

Code request snippets

cURL

node.js

### 

Example

**Request**: The following is a sample JSON request for setting the storage variable "bearer\_token" in a global session:

1.  Send a PUT request with storage key and agent identifier - https://cx.avaamo.com/bots\_api/v1/storages/bearer\_token.json?bot\_id=30011
    
2.  Pass the user access token in the Header parameter.
    
3.  Send the payload in the request body with the storage variable value you wish to set.
    

**Result**: You can view the storage variable set for the user in the **Debug -> Storage** page. See [Storage](/user-guide/how-to/build-agents/debug-agents#using-storage), for more information.

## 

Delete global storage data

`DELETE` `https://cx.avaamo.com/bots_api/v1/storages/{{key}}.json?bot_id={{bot_id}}`

Delete the storage data of the specified key from the agent's global storage.

#### 

Path Parameters

Name

Type

Description

key\*

String

Key of the storage variable.

#### 

Query Parameters

Name

Type

Description

bot\_id\*

Integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access-token\*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200: OK

### 

Code request snippets

cURL

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/user-storage-api

## 

Get user storage data

`GET` `https://cx.avaamo.com/dashboard/bots/{{agent_id}}/storages.json`

Get the data stored for a specific user session in your agent.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

key

string

Key of the storage variable.

value

string

Value of the storage variable.

user\_id

integer

User identifier for which the value is stored. You can get the user\_id from the API response itself. Use this to further filter the data, if required.

start\_date

string

Date from which the storage data is retrieved. Specify date in dd/mm/yyyy format.

end\_date

string

Date until which the storage data is retrieved. Specify in dd/mm/yyyy format.

page

integer

Page from which the entries must be fetched. Default value: 1

per\_page

integer

Number of entries fetched per page. Default value: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

Access-Token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Success

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 582068,
        "total_pages": 582068,
        "storage": [
            {
                "key": "current_plan",
                "value": "Lifetime Plan",
                "id": 15495246,
                "created_at": 1586750021.0,
                "updated_at": 1586750442.0,
                "user": {
                    "display_name": "User 8880460",
                    "id": 8880460
                }
            }
        ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

[storage](/user-guide/ref/avaamo-platform-api-documentation/user-storage-api#storage)

Indicates an array of messages fetched from the agent. The number of entries in the array = Number specified in the per\_page parameter.

JSON key-value pairs

#### 

storage

Indicates an array of storage data fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

key

Indicates the key of the storage variable.

String

value

Indicates the value of the storage variable.

String

id

Indicates the identifier of the storage variable.

String

created\_at

Indicates the timestamp of when the storage variable was created in seconds.

UNIX epoch timestamp

updated\_at

Indicates the timestamp of when the storage variable was updated in seconds.

UNIX epoch timestamp

user -> display\_name

Indicates the display name of the user for which the value is stored.

String

user -> id

This is applicable only for user storage variables. Indicates the identifier of the user for which the value is stored.

Integer

### 

Examples

The following table lists a few sample use cases with query parameters:

Use-case

Query Parameter

Get the latest storage data from the agent

**per\_page**: Specify 1 to get the latest message.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/storages.json?per_page=1`

Get storage data with a specified key and value

**key**: Specify the key of the storage variable.

**value**: Specify the value of the storage variable.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/storages.json?key=<<key>>&value=<<value>>`

Get storage data specific to a user

**user\_id**: Specify the user identifier.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/storages.json?user_id=<<user_id>>`

Get storage data within a specified period

**start\_date**: Specify the **from** date in dd/mm/yyyy format.

**to\_date**: Specify the **to** date in in dd/mm/yyyy format.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/storages.json?start_date=12/04/2020&end_date=13/04/2020`

Get storage data using pagination

**page**: Specify the page from which you wish to fetch records.

**per\_page**: Specify the number of entries per page.

**Example**: `https://cx.avaamo.com/dashboard/bots/<<agent_id>>/storages.json?page=2&per_page=5`

## 

Set user storage data

`POST` `https://cx.avaamo.com/bots_api/v1/users/{{user_layer_id}}/set_storage.json`

Sets the value in a user session at the agent level.

#### 

Path Parameters

Name

Type

Description

user\_layer\_id\*

string

Unique user identifier internally used by the Avaamo Platform. You can get the user layer identifier from the [Conversation Message API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api#get-conversation-messages) or from [Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages). Specify the user\_layer\_id of the user to set the storage value for a user.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

key\*

string

Key of the storage variable

value\*

string

Value of the storage variable.

bot\_id\*

integer

Unique identifier of the agent. You can get the agent identifier from the agent URL.

200: OK Successful request

### 

Code request snippets

cURL

node.js

### 

Examples

#### 

Set storage value for a user session

**Request**: The following is a sample JSON request for setting the storage value for a user session:

1.  Get the user\_layer\_id from the Conversation Message API. See [Conversation Message API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api#get-conversation-messages), for more information.
    
2.  Pass the user\_layer\_id of the user for which you wish to set the storage variable in the set\_storage API URL.
    
3.  Specify the following payload in the Set Storage API:
    

You can refer to the following example for more details.

4KB

[SetStorageAPI\_Example.html](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-MHtkO9fF4jepBJfXRlG%2F-MHtnPKBwPyHQTKLNCwx%2FSetStorageAPI_Example.html?alt=media&token=0e9d7b00-93f1-4ba5-9021-921278597bac)

Download[Open](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-MHtkO9fF4jepBJfXRlG%2F-MHtnPKBwPyHQTKLNCwx%2FSetStorageAPI_Example.html?alt=media&token=0e9d7b00-93f1-4ba5-9021-921278597bac)

Use setstorage API of the user by conversation uuid

**Result**: You can view the storage variable set for the user in the **Debug -> Storage** page. See [Storage](/user-guide/how-to/build-agents/debug-agents#using-storage), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/user-property-api

## 

Create user property

`POST` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties`

Adds a new user property for the specified agent. Note that the agent must be locked for edit when creating a new user property.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

user\_property -> name\*

string

Name of the user property

user\_property -> key\*

string

Key of the user property

200: OK Successful request

Copy

    {
        "user_property": {
            "id": 92xx,
            "name": "region",
            "key": "region"
        }
    }

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

key

Indicates the key of the user property.

String

name

Indicates the name of the user property.

String

id

Indicates the unique identifier of the user property.

Integer

### 

Code request snippets

cURL

node.js

### 

Example

**Request**: The following is a sample JSON request for adding a new "region" property to an agent:

A successful request adds a new property "region" to the agent. You can view the same user property in the `Agent Configuration -> User Property` page. See [User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

## 

Get user properties

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties/{{property_id}}`

Get a list of all the user properties from the agent. See [User property](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

property\_id

integer

Property identifier. You can get the property identifier from the API response itself.

*   First, get the list of all the user properties from the agent using the User property API.
    
*   From the API response, you can get the property identifier for further use.
    

#### 

Query Parameters

Name

Type

Description

page

integer

Page from which the entries must be fetched. Default value: 1

per\_page

integer

Number of entries fetched per page. Default value: 25 Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Success

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned.

UNIX epoch timestamp

[entries](/user-guide/ref/avaamo-platform-api-documentation/user-property-api#entries)

Indicates an array of user properties fetched from the agent. The number of entries in the array = Number specified in the per\_page parameter.

JSON

key-value pairs

#### 

entries

Indicates an array of user properties fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

key

Indicates the key of the user property.

String

name

Indicates the name of the user property.

String

id

Indicates the unique identifier of the user property.

Integer

### 

Examples

The following table lists a few sample use cases for getting the user properties from agent:

Use-case

Query/Path Parameter

Get the latest user property from the agent

**Query parameter** -> **per\_page**: Specify 1 to get the latest user property.

**Path parameter** -> **agent\_id**: Specify the agent identifier

**Path parameter** -> **property\_id**: Specify the property identifier

**Example**: `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties?per_page=1`

Get user property using property identifier

**Path parameter** -> **agent\_id**: Specify the agent identifier

**Path parameter** -> **property\_id**: Specify the property identifier

**Example**: `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties/{{property_id}}`

## 

Update user property

`PUT` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties/{{property_id}}`

Update the name of the specified user property. Note that the agent must be locked for edit when updating user property.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

property\_id\*

integer

Property identifier. Use [Get user properties API](/user-guide/ref/avaamo-platform-api-documentation/user-property-api#get-user-properties) to get the property identifier.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

user\_property -> name\*

string

Name of the user property

200: OK Successful request

### 

Response attributes

In the response, the following attributes are returned:

Attribute

Description

Type

key

Indicates the key of the user property.

String

name

Indicates the name of the user property.

String

id

Indicates the unique identifier of the user property.

Integer

### 

Code request snippets

cURL

node.js

### 

Example

**Request**: The following is a sample JSON request for adding a new "region" property to an agent:

A successful request updates the name of the specified user property as mentioned in the request. You can view the same user property in the `Agent Configuration -> User Property` page. See [User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

## 

Delete user property

`DELETE` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties/{{property_id}}`

Deletes the specified user property from the agent. Note that the agent must be locked for edit when deleting user property.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

property\_id\*

integer

Property identifier. Use [Get user properties API](/user-guide/ref/avaamo-platform-api-documentation/user-property-api#get-user-properties) to get the property identifier.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200: OK Successful request

### 

Code request snippets

cURL

node.js

### 

Example

The following table lists sample use cases for deleting user property from the agent:

Use-case

Path Parameters

Delete the user property using property identifier

*   **agent\_id**: Specify the agent identifier
    
*   **property\_id**: Specify the property identifier
    

**Example**: `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/user_properties/{{property_id}}`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/mask-message-api

### 

Mask user messages and agent responses

`PUT` `https://cx.avaamo.com/dashboard/conversations/{{conversation_uuid}}/mask_messages.json`

Masks the user messages in the specified user conversation (for new conversation) from the beginning till the date as per the agent masking configuration details. To mask Personally Identifiable Information (PII) within a specific time range, you can include the `since_timetoken` and `timetoken` parameters in the API request.

Masks the agent's response in the specified user conversation from the date masking is enabled for the response node.

#### 

Path Parameters

Name

Type

Description

conversation\_uuid\*

String

User conversation identifier. You can get the conversation uuid from the Conversation History URL. You can get the conversation identifier from the [Conversation history URL](/user-guide/how-to/build-agents/debug-agents/conversation-history) or from the [Get Messages API.](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages)

#### 

Query Parameters

Name

Type

Description

since\_timetoken

number

Timestamp from which the messages should be masked. Specify in UNIX Epoch Timestamp in seconds.

timetoken

number

Timestamp until which the messages should be masked. Specify in UNIX Epoch Timestamp in seconds.

**Note**:

Users can also pass either or both parameters (`since_timetoken` or `timetoken`).

*   If only `since_timetoken` is specified, the system uses the latest message's timestamp as the `timetoken`.
    
*   If only `timetoken` is provided, the system uses the agent creation timestamp as the `since_timetoken`.
    

#### 

Headers

Name

Type

Description

Access-Token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](applewebdata://CD31BA2E-218E-4FE5-B2EB-2CAE29868D4B/@avaamo/s/avaamo/~/drafts/-MYxGNUFf68iUPzf71u7/how-to/build-agents/configure-agents/permissions), for more information.

200

Copy

    {
       "success": true
    }

**The key points**:

*   See [Mask response in Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information on how to enable masking for a response node.
    
*   When you enable masking for a node with file masking, all the uploaded files are physically deleted from the Platform and cannot be accessed.
    
*   You can check the Conversation history to view the masked messages. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    
*   See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more details.
    

### 

Code request snippets

cURL

node.js

#### 

Examples

The following table lists a sample use case with query parameters:

Use-case

Query Parameter

Mask messages within a specified period

**since\_timetoken:** Specify the starting timestamp in seconds in UNIX Epoch format.

**timetoken**: Specify the ending timestamp in seconds in UNIX Epoch format.

**Example**: `https://cx.avaamo.com/dashboard/conversations/{{conversation_uuid}}/mask_messages.json?since_timetoken=1720604526&timetoken=1736502126`

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/custom-properties-api

## 

Get custom user properties

`GET` `https://cx.avaamo.com/v1/user_info/{{user_id}}.json?access_token={{agent_access_token}}`

Get details about custom user properties from the agent.

#### 

Path Parameters

Name

Type

Description

user\_id\*

integer

User identifier. Based on the requirement, you can get the user identifier in one of the following ways: - From the **avaamo\_id** attribute in the [Get Message API.](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages) - From the **user -> Id** attribute in the [Query Insights API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights).

#### 

Query Parameters

Name

Type

Description

access\_token\*

string

The agent access token. You can get agent access token from Agent -> Configuration -> Settings page. See [Agent Authentication Keys](/user-guide/how-to/build-agents/configure-agents/define-settings#agent-authentication-keys), for more information.

200 Success

Copy

    {
      "user_info": [
        {
          "user_id": 30572,
          "key": "customerType",
          "value": "guest"
        },
        {
          "user_id": 30572,
          "key": "customerLocation",
          "value": "India"
        }
      ]
    }

### 

Code request snippets

cURL

node.js

### 

Response attributes

In the response, user\_info array is returned with the key and value for each custom property:

Attribute

Description

Type

key

Indicates the key of the custom property.

String

value

Indicates the value of the custom property.

String

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/sms-send-api

**Pre-requisite**: You must have an agent with the SMS channel configured. See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information.

`POST` `https://cx.avaamo.com/sms/{{channel_uuid}}/send.json`

Send the agent's greeting message as an SMS to the specified phone number.

#### 

Path Parameters

Name

Type

Description

channel\_uuid

String

Unique channel identifier generated by the Platform when the SMS channel is configured.

This helps to identify the source of the request when an SMS is sent to the user using this API. See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information.

#### 

Request Body

Name

Type

Description

to\_phone

String

Complete phone number of the user with the country code to which the SMS is sent.

Required, if custom user authentication is not enabled in the SMS channel.

If custom user authentication is enabled, then you must return `to_phone` number along with `uuid` in the **User authentication handler** block**.** This provides flexibility to the developers to authenticate the users and then return the phone number to which the SMS must be sent. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#sms-channel), for more information.

<<custom\_params>>

JSON key-value pairs

Any custom parameters such as the first name, last name, and employee id can be included in the body payload as per the requirement.

These parameters are available in `context.params.<<custom_param>>` and can be used for authenticating the users in the **User authentication handler** when custom user authentication is enabled in the SMS channel. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

200: OK Successful request.

Copy

    {
        "success": true
    }  
    

**Note**: After a successful request, a conversation is established and can be tracked using `to_phone` number from the Conversation history page. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.

### 

Code request snippets

cURL

node.js

Copy

    curl --location --request POST 'https://cx.avaamo.com/sms/3ad87fb7-c43e-4f00-8441-xxxxx/send.json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "first_name": "John",
        "last_name": "Jacob",
        "emp_id": "1234",
        "to_phone": "+1 (xxx) xxx-xxxx"
      }'

Copy

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://cx.avaamo.com/sms/3ad87fb7-c43e-4f00-8441-xxxxx/send.json',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "first_name": "John",
        "last_name": "Jacob",
        "emp_id": "1234",
        "to_phone": "+1 (xxx) xxx-xxxx"
      })
    
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });

### 

Examples

**Request**: The following is a sample JSON request for posting a simple message to the agent:

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api

## 

Get report on SMS sent to users

`GET` `https://cx.avaamo.com/api/v1/agents/{{agent_id}}/sms/report.json`

SMS report of the messages sent through the SMS Gateway of an agent. See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.

#### 

Path Parameters

Name

Type

Description

agent\_id\*

integer

Agent identifier. You can get the agent identifier from the agent URL.

#### 

Query Parameters

Name

Type

Description

from\_timetoken

number

Timestamp from which the records are fetched. If you specify to\_timetoken and not from\_timetoken, then the latest 3 entries up to the specified timetoken are fetched.

Specify in UNIX Epoch Timestamp.

to\_timetoken

number

Timestamp until which the records are fetched. The default value is the current timestamp.

Specify in UNIX Epoch Timestamp.

from\_phone

string

The phone number from which the SMS was sent to the recipients. Ensure that the value is URL encoded.

to\_phone

string

The recipient's phone number to which the SMS was sent. Ensure that the value is URL encoded.

status

string

Indicates the delivery status of the SMS to the recipient.

Possible values: sent, failed, delivered, undelivered

**sent**: The SMS send request was successfully received by the carrier.

**failed**: The carrier failed to receive the SMS send request.

**delivered**: The SMS send request was successfully received by the carrier and the SMS was successfully delivered to the desired recipient.

**undelivered**: The SMS send request was successfully received by the carrier but the SMS was not delivered successfully to the desired recipient.

Note that "carrier" here, indicates the service responsible for delivering the SMS to the desired recipient.

#### 

Headers

Name

Type

Description

access-token\*

string

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

200: OK Successful request

Copy

    {
        "current_page": 1,
        "per_page": 25,
        "total_entries": 2,
        "total_pages": 1,
        "time_token": 1670940238.4926484,
        "entries": [
            {
                "uuid": "xxxxxx36-bbff-4b13-963f-40c733xxxxxx",
                "from_phone": "+11231231234",
                "to_phone": "+1(123) 456-xxxx",
                "message": "New Message - Appt Reminder - John Doe has an appointment on 05-12-2022 at 11:30",
                "created_at": 1670923358.0,
                "sms_status": "sent"
            },
            {
                "uuid": "xxxxxx06-7cbd-4a1f-9798-594a01xxxxxx",
                "from_phone": "+11231231234",
                "to_phone": "+1(123) 456-xxxx",
                "message": "New Message - Appt Reminder - John Doe has an appointment on 05-12-2022 at 11:30",
                "created_at": 1670923397.0,
                "sms_status": "failed",
                "sms_status_response": "Unable to create record: The 'To' number +11234567890 is not a valid phone number."
            }
        ]
    }

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

## 

Code request snippets

cURL

node.JS

## 

Response attributes

The following is a sample response of a successful response:

In the response, you can get the following details about the SMS messages:

Attribute

Description

Type

current\_page

Indicates the page from which the entries are fetched.

Integer

per\_page

Indicates the number of entries fetched per page.

Integer

total\_entries

Indicates the total number of entries in the agent messages.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned in seconds.

UNIX epoch timestamp

[entries](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#entries)

Indicates an array of SMS message details fetched from the agent.

Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

entries

Indicates an array of SMS message details fetched from the agent. Each array contains the following attributes:

Attribute

Description

Type

uuid

Indicates a unique identifier of the message.

Integer

from\_phone

Indicates the number from which the SMS was sent.

String

to\_phone

Indicates the number to which the SMS was sent.

String

message

Indicates the actual message sent in SMS.

String

created\_at

Indicates the timestamp of when the request was received by the carrier. Note that "carrier" here, indicates the service responsible for delivering the SMS to the desired recipient.

UNIX epoch timestamp

sms\_status

Indicates the status of SMS delivery. Possible values: sent, failed, delivered, undelivered.

*   **sent**: The SMS send request was successfully received by the carrier.
    
*   **failed**: The carrier failed to receive the SMS send request.
    
*   **delivered**: The SMS send request was successfully received by the carrier and the SMS was successfully delivered to the desired recipient.
    
*   **undelivered**: The SMS send request was successfully received by the carrier but the SMS was not delivered successfully to the desired recipient.
    

Note that "carrier" here, indicates the service responsible for delivering the SMS to the desired recipient.

String

sms\_status\_response

Indicates the error status of the failed SMS delivery. See [Error status](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#error-status), for more information.

String

## 

Examples

The following table lists a few sample use cases with query parameters:

Use case

Query parameter

Get the SMS message report within a specified period

`https://cx.avaamo.com/api/v1/agents/57xx/sms/report.json?from_timetoken=1672123097&to_timetoken=1672134095`

Get the SMS message report that failed within a specified period

`https://cx.avaamo.com/api/v1/agents/57xx/sms/report.json?from_timetoken=1672123097&to_timetoken=1672134095&status=failed`

Get the SMS message report triggered to a specific "to\_number"

`https://cx.avaamo.com/api/v1/agents/57xx/sms/report.json?to_phone=%2B17778889999`

## 

Error status

When there is a failure, the SMS status response is returned that explains the reason for the failure and recommended ways to resolve the error. The following error can be returned when the SMS was not successfully sent to the recipient:

1.  [SMS send rate limit exceeded](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#1.-sms-send-rate-limit-exceeded)
    
2.  [Permission to send an SMS has not been enabled for the region indicated by the 'To' number](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#2.-permission-to-send-an-sms-has-not-been-enabled-for-the-region-indicated-by-the-to-number)
    
3.  [Attempt to send to unsubscribed recipient](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#3.-attempt-to-send-to-an-unsubscribed-recipient)
    
4.  [This 'From' number has exceeded the maximum number of queued messages](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#4.-this-from-number-has-exceeded-the-maximum-number-of-queued-messages)
    
5.  ['To' number is not a valid mobile number](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#5.-to-number-is-not-a-valid-mobile-number)
    
6.  [Queue overflow](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#6.-queue-overflow)
    
7.  [Account suspended](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#7.-account-suspended)
    
8.  [Unreachable destination handset](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#8.-unreachable-destination-handset)
    
9.  [Message blocked](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#9.-message-blocked)
    
10.  [Message Delivery - Unknown destination handset](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#10.-message-delivery-unknown-destination-handset)
     
11.  [Landline or unreachable carrier](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#11.-landline-or-unreachable-carrier)
     
12.  [Message filtered](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#12.-message-filtered)
     
13.  [Message Delivery - Unknown error](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#13.-message-delivery-unknown-error)
     
14.  [Carrier network congestion](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#14.-carrier-network-congestion)
     
15.  [Content size exceeds carrier limit](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#15.-content-size-exceeds-carrier-limit)
     
16.  [Invalid message recipient](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#16.-invalid-message-recipient)
     
17.  [Channels message cannot have same From and To](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#17.-channels-message-cannot-have-same-from-and-to)
     

### 

1\. SMS send rate limit exceeded

**Possible Causes**

Repeated rapid responses by the end user (15 replies in less than 30 seconds).

**Recommended Solution**

*   Ensure that you are not inadvertently sending a large number of messages to the same phone number, e.g. a script caught in a loop.
    
*   Contact Avaamo Support for further assistance.
    

### 

2\. Permission to send an SMS has not been enabled for the region indicated by the 'To' number

**Possible Causes**

You have attempted to send an SMS to a region outside the allowed range.

**Recommended Solution**

If you wish to send messages to this region, contact Avaamo Support with details for further assistance.

### 

3\. Attempt to send to an unsubscribed recipient

#### 

Possible Causes

The person you are trying to message has opted out of receiving messages from your phone number.

#### 

Possible Solution

*   Consider removing this phone number from your list of recipients.
    
*   Request the recipient to resubscribe to your messages by texting "START".
    
*   Before sending messages to a recipient, ensure they have consented to receive messages from you.
    

### 

4\. This 'From' number has exceeded the maximum number of queued messages

#### 

Possible Causes

You have attempted to enqueue too many messages for a given 'From' number.

#### 

Possible Solutions

Slow down your sending rate to avoid queuing on your "from" number

### 

5\. 'To' number is not a valid mobile number

#### 

Possible Causes

You have attempted to send an SMS with a 'To' number that is not a valid mobile number. It is likely that the number that you have specified is a landline number or is an invalid number.

#### 

Possible Solutions

*   The number you provided may be a landline number.
    
*   The number you provided may be invalid or formatted incorrectly. It must be in the correct E.164 format: `[+] [country code] [subscriber number including area code]`
    

### 

6\. Queue overflow

#### 

Possible Causes

The messages are queued based on the sending rate of a sender or an account. Messages can only be queued for 4 hours and then they automatically fail.

#### 

Possible Solutions

*   Try sending your message again after waiting for some time.
    
*   If you are messaging in the US or Canada, talk to Avaamo Support about getting a Toll Free or Short Code number that allows you to send more messages per second.
    

### 

7\. Account suspended

#### 

Possible Causes

Your account was suspended between the time of the message send and delivery.

#### 

Possible Solutions

Contact Avaamo Support for further assistance.

### 

8\. Unreachable destination handset

#### 

Possible Causes

The destination handset you are trying to reach is switched off or otherwise unavailable.

#### 

Possible Solutions

*   Is the destination device powered on?
    
*   Does the device have a sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
    
*   Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
    
*   Can other devices using the same mobile carrier receive your messages?
    

### 

9\. Message blocked

#### 

Possible Causes

*   The destination number you are trying to reach is blocked from receiving this message.
    
*   The device you are trying to reach does not have a sufficient signal.
    
*   The device cannot receive SMS (for example, the phone number belongs to a landline).
    
*   There is an issue with the mobile carrier.
    

#### 

Possible Solutions

*   Verify you are attempting to send messages to the correct phone number in the correct E.164 format: `[+] [country code] [subscriber number including area code]`
    
*   Is the destination device powered on?
    
*   Does the device have a sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
    
*   Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
    
*   Can other devices using the same mobile carrier receive your messages?
    

### 

10\. Message Delivery - Unknown destination handset

#### 

Possible Causes

*   The destination number you are trying to reach is unknown and may no longer exist.
    
*   The device you are trying to reach is not on or does not have sufficient signal.
    
*   The device cannot receive SMS (for example, the phone number belongs to a landline)
    
*   There is an issue with the mobile carrier
    

#### 

Possible Solutions

*   Verify you are attempting to send messages to the correct phone number in the correct E.164 format: `[+] [country code] [subscriber number including area code]`
    
*   Is the destination device powered on?
    
*   Does the device have sufficient signal? If not power the device off, wait 30 seconds, and then power it back up.
    
*   Is the device connected to the home carrier's network? We cannot guarantee message delivery on devices roaming off-network.
    
*   Can other devices using the same mobile carrier receive your messages?
    

### 

11\. Landline or unreachable carrier

#### 

Possible Causes

The destination number is unable to receive this message. Potential reasons could include trying to reach a landline or, in the case of shortcodes, an unreachable carrier.

#### 

Possible Solutions

Contact Avaamo Support with the details of your message for further assistance. Include a minimum of 3 or more messages where this error was thrown. Per our carriers' requirements, these can be no older than 48 hours at most.

### 

12\. Message filtered

#### 

Possible Causes

Your message content was flagged as going against carrier guidelines. Examples of messaging that would be blocked are spam, phishing, and fraud.

#### 

Possible Solutions

Contact Avaamo Support with the details of your message for further assistance. Include a minimum of 3 or more messages where this error was thrown. Per our carriers' requirements, these can be no older than 48 hours at most.

### 

13\. Message Delivery - Unknown error

#### 

Possible Causes

Delivery of your message failed for unknown reasons.

#### 

Possible Solutions

*   Check that the phone you were sending to is turned on and can receive SMS
    
*   Ensure that the phone is not roaming off the network. We cannot guarantee message delivery on roaming phones.
    
*   Try sending it to other phones who have the same mobile carrier
    
*   Try sending a shorter message to the phone, with simple content that does not include any special characters. This gives our support team an idea as to whether the failure is related to concatenation or character encoding.
    
*   Contact Avaamo Support with a minimum of 3 or more messages where this error was thrown. Per our carriers' requirements, these can be no older than 48 hours at most.
    

### 

14\. Carrier network congestion

#### 

Possible Causes

Carrier is experiencing congestion in traffic

#### 

Possible Solutions

Send your message over a longer period of time, rather than sending it in bursts

### 

15\. Content size exceeds carrier limit

#### 

Possible Causes

The message failed because the size of the content associated with the message exceeded the carrier limit

#### 

Possible Solutions

Content size should be within carrier limits.

### 

16\. Invalid message recipient

#### 

Possible Causes

Message recipient could not be verified

#### 

Possible Solutions

Content size should be within carrier limits.

### 

17\. Channels message cannot have same From and To

#### 

Possible Causes

Incorrect To and From number in channels message

#### 

Possible Solutions

Correct the channels To the destination number

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api

**Pre-requisite**: You must have an agent with the MS Teams channel configured. See [MS Teams channel](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information. Also verify that both [Generic](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#generic) and [Outreach](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#outreach) configurations are completed correctly.

## 

Outbound API to send a message from the MS Teams channel to the user

`POST` `https://cx.avaamo.com/teams/{{channel_uuid}}/send.json`

#### 

Path Parameters

Name

Type

Description

channel\_uuid

String

Unique channel identifier generated by the Platform when the MS Teams channel is configured.

This helps to identify the source of the request when an message is sent to the user using this API. See [MS Teams channel](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

#### 

Request Body

Name

Type

Description

email

String

Valid user email to whom the message is sent.

Required, if custom user authentication is not enabled in the MS Teams channel.

If custom user authentication is enabled, then you must return `email` , `message`, along with `uuid` in the **User authentication handler** block**.** This provides flexibility to the developers to authenticate the users and then return the email to whom the message must be sent. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for more information.

<<custom\_params>>

JSON key-value pairs

Any custom parameters such as the first name, last name, and employee id can be included in the body payload as per the requirement.

These parameters are available in `context.params.<<custom_param>>` and can be used for authenticating the users in the **User authentication handler** when custom user authentication is enabled in the MS Teams channel. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for more information.

message -> text

String

Valid message sent to the user vi MS Teams channel.

Either a text message or a CustomTeamsMessage is

required, if custom user authentication is not enabled in the MS Teams channel.

If custom user authentication is enabled, then you must return `email` , `message`, along with `uuid` in the **User authentication handler** block**.** This provides flexibility to the developers to authenticate the users and then return the email to whom the message must be sent. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for more information.

message -> CustomTeamsMessage

JSON

MS Teams custom payload.

Either a text message or a CustomTeamsMessage is

required, if custom user authentication is not enabled in the MS Teams channel.

If custom user authentication is enabled, then you must return `email` , `message`, along with `uuid` in the **User authentication handler** block**.** This provides flexibility to the developers to authenticate the users and then return the email to whom the message must be sent. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for more information.

200: OK Successful request.

Copy

    {
        "success": true
    }  
    

**Note**: After a successful request, a conversation is established and can be tracked using `email` from the Conversation history page. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.

### 

Code request snippets

cURL

### 

Examples

**Request**: The following is a sample JSON request for posting a simple message to the user:

**Request**: The following is a sample JSON request for posting a custom teams message to the user:

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api

**Pre-requisite**: All requests require an `access_token` header. Use UUID as the primary call identifier within the platform.

## 

Outbound Call API

Initiates an outbound SIP call via a configured channel.

`POST` `https://cx.avaamo.com/teams/{{channel_uuid}}/send.json`

#### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. Users must have at least view permission on the agent.

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type

String

application/JSON

#### 

Path Parameters

Name

Type

Description

channel\_uuid

String

Unique channel identifier generated by the Platform when the SIP channel is configured.

This helps to identify the source of the request when an message is sent to the user using this API. See [SIP](/user-guide/ai-agent/configuration/channels/sip) and [Conversational IVR (C-IVR) or Phone](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone) channel, for more information.

#### 

Request Body

Request Body

Copy

    {
      "to_phone": "sip:009xxxxxxxx456@10.xxx.xx.35:5xx0",
      "sip_headers": {
        "X-ABCD": "1234",
        "X-1234": "1234"
      },
      "user_properties": {
         "prop1": "custom1",
         "prop2": "custom2"
      }
    }

### 

Request fields

Name

Type

Description

to\_phone

String

Destination SIP URI in the format `sip:<number>@<ip>:<port>`

sip\_headers

JSON key-value pairs

Custom SIP headers passed to the SIP server

user\_properties

JSON key-value pairs

Custom user properties

200: OK Successful request.

**Notes:**

*   `sip_headers` can be used to pass additional metadata to the SIP infrastructure.
    
*   SIP header names should follow SIP naming conventions, such as `X-*`.
    

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response:

#### 

Response Fields

`call_sid`

String

Call identifier from SIP server (optional; present if provided by third-party carrier)

`uuid`

String

Unique platform-generated identifier for the call

`status`

String

Current call state (e.g., initiated)

`created_at`

Integer (Unix Timestamp)

Time when the call was created

**Note:** If `call_sid` is absent in the response, use the [Calls Insights API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api#calls-insights-api) with the returned uuid to track call status.

## 

Calls insights API

Retrieves outbound call records with support for filtering, pagination, and call status tracking.

`GET` `https://cx.avaamo.com/teams/{{channel_uuid}}/calls.json`

### 

Headers

Name

Type

Description

access-token\*

string

User access token.

You can get the user access token from the Settings -> Users page. Users must have at least view permission on the agent.

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type

String

application/JSON

### 

Path Parameters

Name

Type

Description

channel\_uuid

String

Unique channel identifier generated by the Platform when the SIP channel is configured.

This helps to identify the source of the request when an message is sent to the user using this API. See [SIP](/user-guide/ai-agent/configuration/channels/sip) and [Conversational IVR (C-IVR) or Phone](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone) channel, for more information.

### 

Query parameters

Parameter

Type

Description

`status`

String

Filter by call status

`conversation_uuid`

String

Filter by conversation identifier

`call_sid`

String

Filter by SIP call identifier

`to_phone`

String

Filter by destination number

`from_phone`

String

Filter by source identifier

`start_time`

Integer

Return calls created after this timestamp

`end_time`

Integer

Return calls created before this timestamp

`page`

Integer

Page number

`per_page`

Integer

Number of records per page

### 

Code request snippets

cURL

node.js

### 

Response attributes

The following is a sample API response:

### 

Response fields

#### 

Pagination metadata

Field

Type

Description

`current_page`

Integer

Current page number

`per_page`

Integer

Number of records per page

`total_entries`

Integer

Total number of records

`total_pages`

Integer

Total number of pages

`time_token`

Float

Query time snapshot token

#### 

Call entry object

Field

Type

Description

`uuid`

String

Platform-generated call identifier

`call_sid`

String

SIP call identifier

`conversation_uuid`

String

Associated conversation identifier

`channel_uuid`

String

Channel used for the call

[`status`](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api#call-status-values)

String

Current call status

`created_at`

Integer

Call creation timestamp

`to_phone`

String

Destination phone number

`from_phone`

String

Source identifier

`bot_id`

Integer

Associated bot identifier

[`error_code`](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api#error-codes)

String

Error code returned for failed calls

`error_message`

String

Error description

### 

Call status values

initiated

sent

delivered

failed

undelivered

voicemail

Call request created

Call request sent from the platform

Call successfully connected

Call failed or destination address invalid

Call could not be delivered

Call connected to voicemail

### 

Error codes

HTTP status code

Error message

400

Invalid SIP URI format.

400

Required field is missing.

401

The request requires user authentication.

404

SIP channel not found.

429

API rate limit exceeded.

500

An internal server error occurred.

502

Unable to connect to the SIP carrier.

504

Carrier response timeout.

### 

Example workflow

#### 

Step 1: Initiate outbound call

#### 

Step 2: Fetch call insights

---

## Source: https://docs.avaamo.com/user-guide/ref/avaamo-platform-api-documentation/troubleshooting-tips

The following lists a few troubleshooting tips, in cases, where you are not receiving the required response:

*   Check if the URL and instance details in the URL is specified correctly
    
*   Check if the agent access token is specified correctly in the header
    
*   Check if the request parameters are specified correctly in the query
    
*   If you are using any tool such as Postman to verify the Http POST request, then you can also check for the standard HTTP error codes in the response. Contact Avaamo Support Team, for further assistance.

---

## Source: https://docs.avaamo.com/user-guide/ref/data-retention

Agents in the Avaamo Conversational AI Platform consume a voluminous amount of user data in its lifecycle - right from its inception, to production, and ongoing over a period of years until the agent is active. Data can be in various forms - ranging from simple text descriptions to images, videos, and files. Further, data captured by agents in certain domains, say finance or banking, or healthcare can also be sensitive in nature.

Hence, it is critical and essential to manage data appropriately and to define required policies to ensure data security, confidentiality, integrity, and availability. Policies are required at every stage of data in its lifecycle - from the time data is collected and stored to when it must be archived or deleted.

One such important policy is **Data retention**. In simple terms, data retention means retaining or storing data for a specific period of time for meeting legal and business data archival requirements. Without a data retention policy, an organization can eventually store unnecessary data for a long period of time, impacting system performance, compromising data availability, and can have a rippling effect on data integrity and security.

This article provides describes the data retention policy applicable to the data in the Avaamo Conversational AI platform.

### 

What is data retention?

Data retention in the Avaamo Conversational AI Platform defines how long data is retained in the platform and what happens to the data once the retention time period for a particular data set expires.

### 

How long is the data retained?

As a part of Avaamo’s ongoing governance policy, your data is retained for upto 2 years. It is recommended that you plan and set up a process to take required backups of all your production agents to your desired location on a regular basis.

**Note**: By default, your data is retained for 2 years. All data older than 2 years are purged. If you wish to retain data for a lesser number of days, then contact Avaamo Support with details about your specific retention requirements.

### 

What data is retained and how to take backup?

Data in the following modules are purged. Refer to `How to take backup?` in the following table to take backup as per your requirement:

Data purged

How to take backup?

Query insights

[Query insights API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights)

Analytics

[Analytics APIs](/user-guide/ref/avaamo-platform-api-documentation/analytics-api)

User journey

[Download user journey as PDF](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey#download-user-journey)

Conversation History

[Conversation History API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api)

JS Errors

[Export JS Errors to a CSV](/user-guide/how-to/build-agents/debug-agents/js-errors#export-js-errors-to-a-csv-file)

Feedback

[User feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api)

Change Logs

[Changelog API](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis)

Messages

[Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages)

**Notes:** All the data returned from the API is in JSON format.

### 

Can this data be recovered in any way?

No, once purged the data is completely deleted from the Avaamo Conversational AI Platform and cannot be recovered.

### 

What is the format of the data from the API?

All the data returned from the API is in JSON format.

---

## Source: https://docs.avaamo.com/user-guide/ref/best-practices

This article provides a consolidated list of best practices that are available across different topics in the User guide.

Best practices

Description

[Design skills](/user-guide/how-to/build-skills/design-skill)

Learn best practices for training the skill with a set of quality intents/training phrases/training utterances/training data

[Design agents](/user-guide/how-to/build-agents/design-agents)

Learn best practices, do's and dont's, and factors to be considered for designing an agent.

[Regex entities](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#regex-entity-key-points)

Make a note of a few key points and tips on entities with regular expressions.

[Writing JS code](/user-guide/how-to/build-skills/create-skill/customize-your-skill/best-practices)

Dos and Don’ts of JS programming during skill flow customizations.

[Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices)

Summarizes a few essential categories of queries that you must consider when you are preparing to perform regression testing on your agent.

[Agent Parallel development - Best practices](/user-guide/ref/best-practices-parallel-development)

Best practices when multiple developers are engaged to develop a single agent.

[Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs)

Frequently asked questions about parallel development in Q&A and Smalltalk skills.

[FAQs - Publish/Republish](/user-guide/how-to/manage-skills-store#frequently-asked-questions-faqs)

[skills to skill store](/user-guide/how-to/manage-skills-store#frequently-asked-questions-faqs)

Few commonly asked FAQs about skill store, import, and publish:

[Best practices -Publishing a skill to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#best-practices)

Few best practices that you can follow for publishing a skill to skill store

[General keynotes (FAQs)](/user-guide/ref/frequently-asked-questions-faqs)

Lists a few frequently asked questions by the users about intent processing, training phrases, and regex entities.

---

## Source: https://docs.avaamo.com/user-guide/ref/best-practices-parallel-development

The following document highlights the best practice when multiple developers are engaged to develop a single agent.

Avaamo suggests the approach of each developer having their copy of the agent when they have to develop and collaborate on a single agent. See [Copy agent](/user-guide/how-to/build-agents/manage-agents/make-a-copy), for more information.

The following lists recommended steps for agent parallel development:

1.  Each developer pushes their skills (including the entities and javascript) into the store. See [Publish skills](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.
    
2.  A master copy of the agent can be composed of the skill store skills. See [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.
    
3.  Integrated testing happens on the master copy. See [Test agents](/user-guide/how-to/build-agents/test-agents), for more information.
    
4.  The master copy of the agent is pushed to **Testing**. The testing agent gets pushed into Staging and the Staging agent gets pushed into the production. See [Agent life cycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle) and [Promote agents](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.
    

## 

Merging Changes

This section lists steps that can be used to merge local changes to working copy in the agent in the following cases:

*   [Merging changes in the shared entities](/user-guide/ref/best-practices-parallel-development#merging-changes-in-the-shared-entities)
    
*   [Merging changes in the shared Javascript](/user-guide/ref/best-practices-parallel-development#merging-changes-in-the-shared-javascript)
    

### 

Merging changes in the shared entities

If two or more skills refer to the same entity and there are local changes to that entity in a working copy of the agent, then you must merge local changes to working copy in the agent manually.

It is recommended to:

*   Use the entity export functionality to export entity values from the master copy and the working copy to do a diff. See [Export entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#export), for more information.
    
*   You can then do a **diff** and **merge** the changes.
    

On Mac

Windows

`$diff file1.csv file2.csv`

The following lists a few recommended tools to use:

*   FileMerge: This is a built-in tool that is installed as part of the Apple Developer tools.
    
*   Visual Studio Code
    

The following lists a few recommended tools to use:

*   Meld: You can use a visual diff tool such as Meld - [http://meldmerge.org/](http://meldmerge.org/)
    
*   Visual Studio Code
    

### 

Merging changes in the shared JavaScript

If two or more skills refer to the same JS and there are local changes to that JS in a working copy of the agent, then you must merge local changes to a working copy in the agent manually.

It is recommended to:

*   Save the content of the JavaScript into a local file from the master copy and the working copy.
    
*   You can then do a **diff** and **merge** the changes.

---

## Source: https://docs.avaamo.com/user-guide/ref/parallel-development-qa-and-smalltalk-faqs

The following lists a few frequently asked questions about parallel development in Q&A and Smalltalk skills.

### 

1\. What are some of the recommended best practices?

The following lists a few best practices to consider:

*   **Adding and editing Q&A** - Multiple developers can add or edit questions and answers simultaneously in the same Q&A or Smalltalk skill, encouraging faster development of the skill. As a best design practice, it is recommended to distribute a set of intents among developers, so that it is easy to maintain and manage and results in seamless collaboration.
    
*   **Adding languages** - Multiple developers can add and save language packs simultaneously in the Q&A skill. Each language pack can be saved independently. As a best practice, it is recommended that individual developers work on a single language pack independently. It helps to easily manage and maintain language packs.
    

### 

2\. Can I edit Dialog skill, when another user is editing a Q&A skill simultaneously?

Yes, they can. One developer can unlock the agent and edit the Dialog skill, while the other developer works on the Q&A. Editing Q&A skills required lock only at each intent level.

### 

3\. Can I import Q&A using CSV, when another user is editing a Q&A intent in the same skill?

No, you cannot. You can import only when all of the existing questions and answers in the Q&A skill are unlocked.

### 

4\. Can I delete all (Clear) Q&A, when another user is editing a Q&A intent in the same skill?

No, you cannot. You can clear all the Q&A only when all of the existing questions and answers in the Q&A skill are unlocked

### 

5\. Can I publish a Q&A skill, when another user is editing a Q&A intent of the same skill?

Yes, you can. At the point of publishing, whatever is saved in the Q&A skill, is published to the Skill store.

### 

6\. Can I import/re-import other skills from the skill store, when another user is editing a Q&A intent?

Yes, you can. One developer can unlock the agent and import other skills, while the other developer works on the Q&A. Editing Q&A skills required lock only at each intent level. The same holds good for publish/re-publish as well.

---

## Source: https://docs.avaamo.com/user-guide/ref/frequently-asked-questions-faqs

The following lists a few generic keynotes about intent processing, training data, and regex entities.

### 

Intent processing

*   If there are multiple Q&A with the exact same query, then the response from the first matching skill is displayed.
    
*   The Smalltalk response is displayed only when the user query (including punctuations) exactly matches the training data provided in the Smalltalk.
    

See [Intent execution sequenc](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)e, for more information.

### 

Training data

*   If you want training data that must match specific and generic queries, then it is recommended to provide generic training data. **Example**: If you wish to match "I want my fund value" and "I want fund value", then it is recommended to use "I want fund value" in the training data.
    
*   Training data must not be in all caps, as caps words are considered as stop words during processing.
    

### 

Spell correction

*   The platform corrects the spelling of only words where the corrected spelling is at least 4 characters.
    
*   Spell correction is not done for System location entities and English dictionary words.
    
*   By default, the spell correction is not done for system entities, it can be added as custom entity values if you wish to make spell correction work.
    
*   Spell correction identifies and corrects the phrase in the user query that is closest to the training data rather than correcting it to the best match. **Example**: Consider that you have the following data in your agent:
    
    *   Dictionary: lone
        
    *   Entity types: Loan types -> Personal loan, Housing loan
        
    *   Skill -> Get loan
        
    *   Training data -> I want Axis bank personal loan
        
    

Note that here best phrase match for "lon" is "lone". However, when the user query is "I want Axis bank personal lon" , lon gets corrected to "loan" instead of "lone", since that is closest to the training data.

*   Use "Skip lemmatization" to avoid plural words of English words getting unnecessarily mapped to other entities. **Example**: AlMedia is a US City. Consider that you have pizza\_sizes entity type with Medium as one of the sizes. In the user query, "I want to order medium size pizza", both US City and pizza\_size entities are extracted, as Medium is the singular form of Media that is also a value in the US city entity type. So, if both are used in a skill and you do not want to keep deleting slots, use "Skip lemmatization" when you are creating entity type.
    

See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent) and [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ref/webinars

[Introduction to v5.0 and Answers](/user-guide/ref/webinars/introduction-to-v5.0-and-answers)[Agent life-cycle and Agent permissions](/user-guide/ref/webinars/agent-life-cycle-and-agent-permissions)

---

## Source: https://docs.avaamo.com/user-guide/ref/webinars/introduction-to-v5.0-and-answers

This is a deep-dive webinar on the Agent life cycle and Agent Permissions. This is the agenda for the webinar:

*   Introduction to 5.0
    
*   Avaamo Answers
    
*   Agent
    
*   Skills
    
    *   Dialog Skill
        
    *   Q&A Skill
        
    *   Smalltalk Skill
        
    
*   Agent capabilities
    
    *   Access control and Permissions
        
    *   Life cycle management
        
    *   Skill Store
        
        *   Company Skills
            
        *   Avaamo Skills
            
        
    
*   Migration from v4.0 to 5.0
    

## 

Presentation

2MB

[Introduction to v5.0\_answers.pptx](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-M7kXR0e0k3tD5u4NEXY%2F-M7kawQf-Bw1H5jmNlS4%2FIntroduction%20to%20v5.0_answers.pptx?alt=media&token=ea7f5fd4-04c3-42ca-a2f2-8da58eb50300)

Download[Open](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-M7kXR0e0k3tD5u4NEXY%2F-M7kawQf-Bw1H5jmNlS4%2FIntroduction%20to%20v5.0_answers.pptx?alt=media&token=ea7f5fd4-04c3-42ca-a2f2-8da58eb50300)

Introduction to v5.0 and Answers

## 

Video

## 

Useful links

*   [What's new in Avaamo Conversational AI Platform v5.0?](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new)
    
*   [Release notes v5.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes)

---

## Source: https://docs.avaamo.com/user-guide/ref/webinars/agent-life-cycle-and-agent-permissions

This is a deep-dive webinar on the Agent life cycle and Agent Permissions. At the end of the webinar, you will be able to:

*   Understand the concept of agent life-cycle and agent permissions.
    
*   Understand how to set up users, roles, and agent permissions to participate in different stages of agent life-cycle.
    
*   Promote agents from one stage to another.
    
*   Pull updates from the previous stage.
    

## 

Presentation

3MB

[Life cycle management- A deep dive.pdf](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-M3Ljydef_pL1VxmTeCU%2F-M3M4GPR4y_g5Maua9tz%2FLife%20cycle%20management-%20A%20deep%20dive.pdf?alt=media&token=6f6b28e5-30cc-4e6e-afea-b7bbc3c8d746)

PDF

Download[Open](https://2934665269-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LpXFTiTgns4Ml77XGi3%2F-M3Ljydef_pL1VxmTeCU%2F-M3M4GPR4y_g5Maua9tz%2FLife%20cycle%20management-%20A%20deep%20dive.pdf?alt=media&token=6f6b28e5-30cc-4e6e-afea-b7bbc3c8d746)

Agent life cycle management - A deep dive

## 

Video

## 

Useful links

*   [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions)
    
*   [Plan your development process (Agent life cycle)](/user-guide/how-to/plan-your-development-process-agent-life-cycle)
    

## 

FAQs

### 

1\. Is there an option to provide bulk edit to users?

You can choose the option **Anyone within Company can edit the agent** while assigning permissions**.** With this option, all users within company can view and edit the agent. However, if you wish to provide edit permissions to specific set of users, then you must assign permissions individually to each user. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

### 

2\. Can the permissions be applied at skill level?

No, permissions are applicable only at agent level.

### 

3\. Can we perform regression testing in production?

No, it is recommended to perform all your regression testing in Testing environment itself.

---
