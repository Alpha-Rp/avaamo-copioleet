# Outreach
> 22 pages

---

## Source: https://docs.avaamo.com/user-guide/outreach/overview

In simple terms, Outreach is defined as "reach further than". Elaborating on the same concept, an outreach campaign program is about reaching out or providing services to a wider set of targeted audiences.

For example, you can set up a vaccination drive outreach campaign program and send invitations out to all the contacts to avail service. Such campaign programs help healthcare providers to communicate with their communities and patients in a targeted and efficient way.

Avaamo platform provides out-of-the-box features to set up an outreach campaign program.

## 

Key features

### 

AI-guided campaigns for complete automation

The `Outreach` feature allows you to empower your campaign with AI and make it conversational. You can now link your campaign with agents or assistants in the Avaamo Conversational AI Platform and make your campaign powerful with two-way communication. Recipients receiving the campaign message can converse back in the same channel and in the same campaign to complete the entire flow.

Not limited to the verticals, the table here shows different use cases and automation across Healthcare, Employee service, and Customer care:

Healthcare

Employee Service

Customer care

*   Appointment Reminder
    
*   Vaccination reminder
    
*   Reschedule
    
*   Preventive care reminder
    
*   Education
    
*   Self-care
    

*   Password updates
    
*   Outage alerts
    
*   Onboarding training
    
*   Benefits renewal
    
*   Certificate reminders
    
*   Wellness campaigns
    

*   Offers and Promotions
    
*   Subscription reminders
    
*   Scheduled maintenance
    
*   Order updates
    

### 

Self-serviceable "Campaign Composer"

Outreach comes with a Self-serviceable "Campaign Composer" that allows users to quickly set up a campaign in a guided, easy-to-use user interface. You can build and configure campaigns using the Campaign Composer with just 3 steps - Configure, Add Message, and Activate.

The "Campaign Composer" offers different scheduling options for you to send a campaign message immediately or schedule at a predefined agreed time or with a recurring option.

### 

Send campaign via any enterprise channel

Outreach enables enterprises to broadcast messages and reach wider audiences in channels of their choice. It comes with a set of built-in channels that are out-of-the-box -> SMS, MS Teams, C-IVR, and Custom channel.

By configuring your campaigns via the custom channel, you can now send campaign messages via any enterprise channel and are not limited only to channels such as SMS, C-IVR, or MS Teams. This widens the reach of the campaigns to a larger set of audience and better adoption of the Outreach campaign programs.

### 

Build a custom dashboard using Outreach APIs as per business needs

As a part of the Outreach Campaign release, the Avaamo Conversational AI Platform has introduced a few new Outreach APIs. You can use these APIs for reporting and debugging purposes. You can leverage these APIs to build a custom dashboard and integrate it with other downstream systems, gain insights, and improve the growing business needs.

The following are new APIs introduced as a part of the Outreach:

*   [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)
    
*   [Outreach Changelog API](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api)
    
*   [SMS Opt status API](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api)
    

## 

Key terms

Before you start creating your first outreach program, the following are a few terms of the Outreach feature available in the Avaamo Conversational AI Platform:

1.  **Recipient List**: List of users for whom the campaign is intended.
    
2.  **Template**: A customized re-usable message that is sent to the campaign recipients.
    
3.  **Filters:** Configure filters based on the column names and values in the recipient CSV such as location, age, date of birth, or gender. When a filter is associated with a campaign, the campaign is triggered to only those recipients matching the filter criteria.
    

See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.

---

## Source: https://docs.avaamo.com/user-guide/outreach/before-you-begin

### 

Basic requirements

*   Access to the Chrome browser. Currently, the Avaamo platform dashboard is certified on the latest version of the Chrome browser.
    
*   The window that renders the Avaamo Platform dashboard must have a resolution of 1366 × 768 for UI components to be displayed correctly. If you have a lower or higher screen resolution, the UI components in the dashboard may appear distorted.
    
*   Access to Avaamo Platform URL – https://<<instanceName>>.avaamo.com/. The instance name is provided to you by Avaamo.
    
*   Login credentials.
    
*   Ensure you have the required permissions to set up a campaign. See [Campaign permissions](/user-guide/outreach/before-you-begin#campaign-permissions), for more information.
    

**Note**: To obtain the Avaamo Platform URL and login credentials, contact the Avaamo Operations team or email support@avaamo.com.

### 

Sign-in

The Avaamo platform instance uses secure login and requires users to log in with their registered email.

*   Users receive a unique, secure 8-digit login PIN via email to log in to the Avaamo instance. Ensure that you have configured your email server to receive an email from "welcome@avaamo.com". Check your spam folder if you do not receive the email in your inbox.
    
*   This is a one-time PIN and must be used within 5 mins.
    
*   If you resend the PIN more than 3 times in a row, you must clear a CAPTCHA challenge-response test.
    
*   Once you clear the CAPTCHA challenge-response test, a new unique secure 8-digit login PIN is again sent to the registered email account.
    
*   If you enter the PIN incorrectly more than 5 times, your account will be locked, and you must contact the Avaamo support team for further assistance.
    

The Avaamo platform also supports Single Sign-on. See [Identity Providers](/user-guide/how-to/manage-platform-settings/identity-providers), for more information.

### 

Campaign permissions

Avaamo Platform allows you to create and associate users and groups with out-of-the-box campaign roles based on users' responsibilities within the company. A user or group can also be assigned to multiple roles as required. You can assign specific roles in the **Users -> Settings** page.

**Notes**:

*   **Users** page is available only for users with the **Settings** role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   This section describes **Campaign Settings**. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information on other roles and permissions.
    

The following table lists the roles available for the Campaign feature and the corresponding actions applicable to the role:

**Key point**: `Activate Campaign` role has the highest level of permission for the campaign feature. All actions on the campaign can be performed by the user associated with this role.

Action

Role - Activate Campaign

Role - Manage Campaign

Role - View Campaign

View Campaign details

✅

✅

✅

Download Campaign report

✅

✅

✅

Create Campaign

✅

✅

Update Campaign

✅

✅

Delete Campaign

✅

✅

Test Campaign

✅

✅

Activate Campaign

✅

Deactivate Campaign

✅

Create recipient list

✅

✅

Delete recipient list

✅

✅

Download recipient list

✅

✅

✅

View Template

✅

✅

✅

Create Template

✅

✅

Update Template

✅

✅

Delete Template

✅

✅

Create filter

✅

✅

Delete filter

✅

✅

View filter

✅

✅

✅

### 

Session time-out

For security reasons, all the dashboard sessions log out (time-out) after 12 hrs of inactivity.

*   If a user tries to perform any action on the sessions after 12 hrs of inactivity, then the user is redirected back to the login page.
    
*   Clicking a link, performing any action on the page, or refreshing a page resets the inactivity timer.
    

### 

Large campaigns

If you have a use case to send campaign messages to a large set of recipients, contact Avaamo Support for further assistance. As a pre-requisite, for large campaigns, the "from" number must be registered as a campaign number with the carrier provider before triggering the campaign.

---

## Source: https://docs.avaamo.com/user-guide/outreach/quick-start

[Campaign in SMS channel](/user-guide/outreach/quick-start/campaign-in-sms-channel)[Campaign in C-IVR channel](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel)[Campaign in MS Teams channel](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel)[Campaign in Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel)

---

## Source: https://docs.avaamo.com/user-guide/outreach/quick-start/campaign-in-sms-channel

This article describes how to create an outreach program for a vaccination drive using the SMS channel. Setting up an outreach program is just a 2-step process:

1.  [Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-sms-channel#step-1-create-a-new-recipient-list)
    
2.  [Create and test your campaign](/user-guide/outreach/quick-start/campaign-in-sms-channel#step-2-create-and-test-your-campaign)
    

**Note**: Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new outreach campaign program.

### 

Step 1: Create a new recipient list

The first step in any outreach program is to create a list of recipients for whom the outreach program is intended for. You can quickly set up a recipient list using a simple CSV file and upload it to your campaign.

**To create a new recipient list**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipients Lists** tab, and click **Create new recipient list -> Upload** **recipient list** option.
    
*   Provide a recipient list name and upload a CSV with the required recipient lists. Since this is your first campaign, keep the file format as **Avaamo**.
    

**Key points**:

*   The easiest way to upload a recipient list is to download a sample format of the recipient list, update or make a copy of the same file, rename it as required, and then upload the file.
    
*   For `SMS` channel, the only CSV column header that is mandatory is the **Phone** column.
    
    *   This is the number to which the campaign message is sent.
        
    *   The phone number must be a complete phone number including the country code. You can specify different types of phone formats such as +1 (25x) 67x-62xx, +125x67x62xx, or +125x67x62xx as per your convenience, and all such formats are supported in the Avaamo Platform for sending campaign messages.
        
    
*   Since this is your first outreach program and first recipient list, specify only the required details with a test phone number and skip the other details for now. See [Create new recipient list,](/user-guide/outreach/recipient-lists) for more detailed information.
    

### 

Step 2: Create and test your campaign

The final step in setting up an outreach program is creating a new campaign and testing it out.

**To create and test a new campaign**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Campaigns** tab, and click **Create new campaign -> SMS**.
    
*   In the **Configure** section, specify the following details:
    
    *   Campaign name, campaign description, pick the recipient list created in [Step 1: Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-sms-channel#step-1-create-a-new-recipient-list),
        
    *   Select the phone number for sending the campaign message. This list is a pre-loaded list for your company and click **Next**.
        
    
    
    
*   In the **Add Message** section, specify a simple text message to test out your first campaign and click **Next**.
    

*   In the **Activate** section, pick when you wish to send the outreach program to the users. You can either send it right after activating the campaign or at a specific scheduled time or on a recurring schedule. Since this is your first outreach program, enable **Send on activate** toggle option. See [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate) section, for more information on scheduling a campaign at a specific time.
    

*   Click **Create** to save your first campaign. A summary details pop-up is displayed. You can quickly glance at all the details and click **Activate** to test your campaign. Since you have opted to send the campaign on activation, an SMS message as per the selected template is sent to all the recipients.
    

### 

Next steps

Now that you have successfully created and tested your first outreach program, you can dig deeper and understand:

*   [How to schedule a campaign?](/user-guide/outreach/campaigns/create-new-campaign#activate)
    
*   [How to deactivate a campaign?](/user-guide/outreach/campaigns/manage-campaigns#deactivate-campaign)
    
*   [How to create customized SMS templates for different outreach programs?](/user-guide/outreach/templates)

---

## Source: https://docs.avaamo.com/user-guide/outreach/quick-start/campaign-in-c-ivr-channel

This article describes how to create an outreach program for a vaccination drive using the C-IVR channel. Setting up an outreach program is just a 2-step process:

1.  [Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel#step-1-create-a-new-recipient-list)
    
2.  [Create and test your campaign](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel#step-2-create-and-test-your-campaign)
    

**Note**: Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new outreach campaign program.

### 

Step 1: Create a new recipient list

The first step in any outreach program is to create a list of recipients for whom the outreach program is intended for. You can quickly set up a recipient list using a simple CSV file and upload it to your campaign.

**To create a new recipient list**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipients Lists** tab, and click **Create new recipient list**.
    
*   Provide a recipient list name and upload a CSV with the required recipient lists.
    

**Key points**:

*   The easiest way to upload a recipient list is to download a sample format of the recipient list, update or make a copy of the same file, rename it as required, and then upload the file.
    
*   For `C-IVR` channel, the only CSV column header that is mandatory is the **Phone** column.
    
    *   This is the number to which the campaign message is sent.
        
    *   The phone number must be a complete phone number including the country code. You can specify different types of phone formats such as +1 (254) 672-6232, +12546726232, or +12546726232 as per your convenience, and all such formats are supported in the Avaamo Platform for sending campaign messages.
        
    
*   Since this is your first outreach program and first recipient list, specify only the required details with a test phone number and skip the other details for now. See [Create new recipient list,](/user-guide/outreach/recipient-lists) for more detailed information.
    

### 

Step 2: Create and test your campaign

The final step in setting up an outreach program is creating a new campaign and testing it out.

**To create and test a new campaign**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Campaigns** tab, and click **Create new campaign > C-IVR / Phone Channel**.
    
*   In the **Configure** section, specify the following details:
    
    *   Campaign name, campaign description, pick the recipient list created in [Step 1: Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel#step-1-create-a-new-recipient-list), for more information.
        
    *   Select the phone number for sending the campaign message. This list is a pre-loaded list for your company and click **Next**.
        
    

*   In the **Add Message** section, specify a simple text message to test out your first campaign and click **Next**. You can also add messages from the predefined templates using [Load message template](/user-guide/outreach/templates#voice-message).
    

*   In the **Activate** section, pick when you wish to send the outreach program to the users. You can either send it right after activating the campaign or at a specific scheduled time or on a recurring schedule. Since this is your first outreach program, enable **Send on activate** toggle option. See [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate) section, for more information on scheduling a campaign at a specific time.
    

*   Click **Create** to save your first campaign. A summary details pop-up is displayed. You can quickly glance at all the details and click **Activate** to test your campaign. Since you have opted to send the campaign on activation, an IVR message as per the selected template is sent to all the recipients.
    

### 

Next steps

Now that you have successfully created and tested your first outreach program, you can dig deeper and understand:

*   [How to schedule a campaign?](/user-guide/outreach/campaigns/create-new-campaign#activate)
    
*   [How to deactivate a campaign?](/user-guide/outreach/campaigns/manage-campaigns#deactivate-campaign)
    
*   [How to create customized voice templates for different outreach programs?](/user-guide/outreach/templates#voice-message)

---

## Source: https://docs.avaamo.com/user-guide/outreach/quick-start/campaign-in-ms-teams-channel

Avaamo Conversational AI Platform allows you to trigger an outreach campaign and send messages to all the MS Teams App users via the MS Teams channel. This article describes how to create an outreach program for a course or academy drive using the MS Teams channel.

Setting up an outreach program is just a 3-step process:

1.  [Create an agent and deploy in MS Teams Channel](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-1-create-an-agent-and-deploy-in-ms-teams-channel)
    
2.  [Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-2-create-a-new-recipient-list)
    
3.  [Create and test your campaign](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-3-create-and-test-your-campaign)
    

**Note**: Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new outreach campaign program.

### 

Step 1: Create an agent and deploy in MS Teams Channel

The first step to trigger an outreach campaign via the MS Teams channel is to create an agent and then deploy the agent in the MS Teams channel. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

*   While you are deploying the agent in the MS Teams channel, if you wish to use the same agent to link to a campaign, then ensure that the corresponding Azure bot in the Azure Portal has been granted the `TeamsAppInstallation.ReadWriteSelfForUser.All` API Permissions. See [Channel Settings in Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#outreach), for more information.
    
*   In the MS Teams channel settings, in addition to the other settings, you must specify the Directory (Tenant ID) and Team's App ID for sending campaign messages using this agent. You can trigger the outreach campaign only to the users of the specified Azure directory. See [Step 2: Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-2-create-a-new-recipient-list), for more information.
    

### 

Step 2: Create a new recipient list

The next step in any outreach program is to create a list of recipients for whom the outreach program is intended for. You can quickly set up a recipient list using a simple CSV file and upload it to your campaign.

**To create a new recipient list**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipients Lists** tab, and click **Create new recipient list.**
    
*   Provide a recipient list name and upload a CSV with the required recipient lists.
    

**Key points**:

*   The easiest way to upload a recipient list is to download a sample format of the recipient list, update or make a copy of the same file, rename it as required, and then upload the file.
    
*   To trigger a campaign via `MS Teams` channel,
    
    *   The recipient list must be from the users of the Azure directory specified in the Channel settings. See [Channel Settings in Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#deploy-your-agent-to-microsoft-teams-channel), for more information.
        
    *   The recipient list CSV must contain an **email** column. This is the email receiving the campaign message.
        
    *   Ensure the email in the recipient list CSV is a part of the Azure directory for which the MS Teams channel is configured. See [Step 1: Setup the MS Teams channel](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-1-setup-the-ms-teams-channel), for more information.
        
    
*   Since this is your first outreach program and first recipient list, specify only the required details with a test email and skip the other details for now. See [Create new recipient list,](/user-guide/outreach/recipient-lists) for more detailed information.
    

### 

Step 3: Create and test your campaign

The final step in setting up an outreach program is creating a new campaign and testing it out.

**To create and test a new campaign**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Campaigns** tab, and click **Create new campaign -> Microsoft Teams**..
    
*   In the **Configure** section,
    
    *   Campaign name, campaign description, pick the recipient list created in [Step 1: Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-1-create-a-new-recipient-list)
        
    *   Select a channel from an existing agent to make your campaign conversational. Pick the agent deployed on the MS Teams channel with all the prerequisites and channel settings for triggering the campaign message. See [Step 1: Setup the MS Teams channel](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel#step-1-setup-the-ms-teams-channel), for more information.
        
    *   Click **Next** to proceed with the next step.
        
    

*   In the **Add Message** section, specify a simple text message to test out your first campaign and click **Next**. You can also add messages from the predefined templates using [Load message template](/user-guide/outreach/templates#ms-teams-message).
    

*   In the **Activate** section, pick when you wish to send the outreach program to the users. You can either send it right after activating the campaign or at a specific scheduled time. Since this is your first outreach program, enable **Send on activate** toggle option. See [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate) section, for more information on scheduling a campaign at a specific time.
    

*   Click **Create** to save your first campaign. A summary details pop-up is displayed. You can quickly glance at all the details and click **Activate** to test your campaign. Since you have opted to send the campaign on activation, a message in the Teams bot is sent to all the recipients.
    

### 

Next steps

Now that you have successfully created and tested your first outreach program, you can dig deeper and understand:

*   [How to schedule a campaign?](/user-guide/outreach/campaigns/create-new-campaign#activate)
    
*   [How to deactivate a campaign?](/user-guide/outreach/campaigns/manage-campaigns#deactivate-campaign)
    
*   [How to create customized MS Teams templates for different outreach programs?](/user-guide/outreach/templates#ms-teams-message)

---

## Source: https://docs.avaamo.com/user-guide/outreach/quick-start/campaign-in-custom-channel

Avaamo Conversational AI Platform allows you to trigger an outreach campaign via SMS, MS Teams, and C-IVR. However, if you wish to send outreach campaigns in any other enterprise channels, than those available, then you can configure and trigger the campaign via a custom channel. This widens the reach of the campaigns to a larger set of audience and better adoption of the Outreach campaign programs.

The following lists some of the other key benefits of configuring your campaign via the custom channel:

*   Custom channel also allows seamless data exchange between systems
    
*   Promotes flexibility and scalability as it eliminates the need to be tightly coupled with a specific channel.
    

This article describes how to create an outreach program using the Custom channel. The following lists the steps for setting up an outreach program via a Custom channel:

1.  [Create an agent and deploy in Custom Channel](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-1-create-an-agent-and-deploy-in-custom-channel)
    
2.  [Create Middleware - Message transformer](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-2-create-middleware-message-transformer)
    
3.  [Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-2-create-a-new-recipient-list)
    
4.  [Create and test your campaign](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-3-create-and-test-your-campaign)
    
5.  [Send status update from Middleware](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-5-send-status-update-from-middleware)
    

**Note**: Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new outreach campaign program.

The following diagram illustrates the data flow between the user, Avaamo platform, Middleware, and a Third-party system:

### 

Step 1: Create an agent and deploy in Custom Channel

The first step to trigger an outreach campaign via the Custom channel is to create an agent and then deploy the agent in the Custom channel.

*   Ensure that the custom channel is asynchronous.
    
*   The API URL in the custom channel must be the URL of the [Middleware - Message transformer](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-2-create-middleware-message-transformer) application interface.
    
*   See [Custom Channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel), for more information.
    

### 

Step 2: Create Middleware - Message transformer

Middleware acts as a message transformer to transform the message to and from the custom channel and third party respectively.

When a campaign is triggered,

*   The outgoing message or payload from the campaign is sent via the custom channel in the standard outgoing message payload format from the Avaamo Conversational AI Platform to the Middleware. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information on the outgoing message payload format.
    
*   The Middleware receives the payload and is responsible for transforming and sending the payload according to the standards the third-party receiver expects.
    

For the incoming messages from the recipient to the campaign,

*   The payload or message is first sent by the third party to the Middleware.
    
*   The Middleware receives the payload and is responsible for transforming and sending the payload according to the incoming message payload format expected by the Avaamo Conversational AI Platform. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information on the outgoing message payload format.
    

**Notes**:

*   The middleware component has the complete flexibility to use all the parameters in the custom channel outgoing payload to identify the recipient parameters.
    
*   Middleware transformer component is outside the scope of the Avaamo Conversational AI Platform. It is the responsibility of the party wishing to integrate a third-party channel with Avaamo to ensure that the Middleware is in place and working as expected.
    

### 

Step 3: Create a new recipient list

The next step in any outreach program is to create a list of recipients for whom the outreach program is intended for. You can quickly set up a recipient list using a simple CSV file and upload it to your campaign.

**To create a new recipient list**:

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipients Lists** tab, and click **Create new recipient list.**
    
*   Provide a recipient list name and upload a CSV with the required recipient lists.
    

**Key points**:

*   The easiest way to upload a recipient list is to download a sample format of the recipient list, update or make a copy of the same file, rename it as required, and then upload the file.
    
*   Since this is your first outreach program and first recipient list, specify only the required details with a test email and skip the other details for now. See [Create new recipient list,](/user-guide/outreach/recipient-lists) for more detailed information.
    

### 

Step 4: Create and test your campaign

*   In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Campaigns** tab, and click **Create new campaign -> Custom channel**.
    

*   In the **Configure** section, specify the following details:
    
    *   Campaign name, campaign description, pick the recipient list created in [Step 3: Create a new recipient list](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-3-create-a-new-recipient-list)
        
    *   Select a channel from an existing agent to make your campaign conversational. Pick the agent deployed on the Custom channel with all the prerequisites and channel settings for triggering the campaign message. See [Step 1: Create an agent and deploy on Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-1-create-an-agent-and-deploy-in-custom-channel), for more information.
        
    *   Click **Next** to proceed with the next step.
        
    

*   In the **Add Message** section, specify a text message and select the primary header such as email or phone number or uuid and click **Next**.
    
    *   The field selected in the primary header is the `client_uuid` in the custom channel outgoing payload.
        
    *   A campaign triggered to a recipient is hence identified by the combination of `channel_uuid and client_uuid` in the Avaamo Conversational AI Platform.
        
    *   See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information on the outgoing message payload format.
        
    

*   In the **Activate** section, pick when you wish to send the outreach program to the users. You can either send it right after activating the campaign or at a specific scheduled time. Since this is your first outreach program, enable **Send on activate** toggle option. See [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate) section, for more information on scheduling a campaign at a specific time.
    
*   Click **Create** to save your first campaign. A summary details pop-up is displayed. You can quickly glance at all the details and click **Activate** to test your campaign.
    
*   Since you have opted to send the campaign on activation, a message is sent via the Custom channel and received on the API URL as mentioned in the custom channel confirmation. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information on the outgoing message payload format.
    
*   It is Middleware's responsibility to transform the message to and from the custom channel and third party respectively. See [Step 2: Create Middleware - Message transformer](/user-guide/outreach/quick-start/campaign-in-custom-channel#step-2-create-middleware-message-transformer), for more information.
    

### 

Step 5: Send status update from Middleware

When a campaign message payload is sent to the Middleware via the custom channel, a `status_callback_url` is also sent in the payload for each recipient. The Middleware component can use the `status_callback_url` for sending the status of the outreach message back to the Avaamo Conversational AI Platform based on the status update received from the third party.

This helps to map the status of the campaign message to the corresponding recipient. Once the status is received via the callback URL, the same status is updated for the corresponding recipient in the campaign in the Avaamo Conversational AI Platform. You can also view the status in the [Campaign statistics](/user-guide/outreach/campaign-statistics) page.

See [Status Callback URL](/user-guide/outreach/outreach-rest-apis/status-callback-url-outreach-custom-channel), for more information on the API.

**Note**: Middleware transformer component is outside the scope of the Avaamo Conversational AI Platform. It is the responsibility of the party wishing to integrate a third-party channel with Avaamo to ensure that the Middleware is in place and working as expected.

### 

Next steps

Now that you have successfully created and tested your first outreach program, you can dig deeper and understand:

*   [How to schedule a campaign?](/user-guide/outreach/campaigns/create-new-campaign#activate)
    
*   [How to deactivate a campaign?](/user-guide/outreach/campaigns/manage-campaigns#deactivate-campaign)
    
*   [How to create customized Custom channel templates for different outreach programs?](/user-guide/outreach/templates#custom-message)

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaigns

[Create new campaign](/user-guide/outreach/campaigns/create-new-campaign)[Test campaign](/user-guide/outreach/campaigns/test-campaign)[Opting out of campaign](/user-guide/outreach/campaigns/opting-out-of-campaign)[Manage campaigns](/user-guide/outreach/campaigns/manage-campaigns)

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaigns/create-new-campaign

Avaamo Platform allows you to create multiple campaigns each with different schedules in just a few clicks. This section walks you through the steps of quickly creating a campaign in the Avaamo Platform.

**Notes**:

*   See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.
    
*   Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new campaign.
    

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Campaign** tab, and click **Create new campaign -> {{Delivery channel}} .** Supported channels - SMS, C-IVR, MS Teams, and Custom channel.

**Notes**:

*   C-IVR, MS Teams, and Custom channel delivery channel for outreach campaign is available only when it is enabled for the account. Contact Avaamo Support for further assistance.
    
*   For quick start, refer to the following topics
    
    *   [Campaign in SMS channel](/user-guide/outreach/quick-start/campaign-in-sms-channel)
        
    *   [Campaign in C-IVR channel](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel)
        
    *   [Campaign in MS Teams channel](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel)
        
    *   [Campaign in Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel)
        
    

A campaign consists of three sections:

1.  [Configure](/user-guide/outreach/campaigns/create-new-campaign#configure): In this section, you start by specifying the campaign name, and description, and pick a list of recipients for your campaign. Based on your requirements, you can configure a campaign with just one-way outbound calls or with two-way communication where the campaign recipients can communicate back to the campaign by responding to the same campaign message.
    
2.  [Add Message](/user-guide/outreach/campaigns/create-new-campaign#add-message): In this section, you specify the actual message that is sent to the recipients.
    
3.  [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate): This section is where you specify when to send the message to the recipients. You can send it immediately after activating the campaign or you can schedule it for a later time based on your business requirements.
    

## 

Configure

**Pre-requisite:** You must create a recipient list before creating a new campaign. See [Create new recipient list](/user-guide/outreach/recipient-lists), for more information.

In this section, you start by specifying the campaign name and description, pick a list of recipients for whom the campaign is intended, and select a delivery channel for your campaign. Specify the following details and click **Next**:

Parameters

Description

Maximum length

Campaign name

Indicates the name of the campaign.

50 characters

Campaign description

Indicates the description of the campaign. Use this to specify the purpose of the campaign.

200 characters

Select recipient list

Indicates the list of the recipients for whom the campaign is intended. Pick a recipient list from the dropdown.

*   Note that only those recipient lists that are not marked for testing are available in the dropdown.
    
*   See [Create new recipient list](/user-guide/outreach/recipient-lists), for more information on how to create a recipient list.
    

NA

### 

Phone: One-way communication

**Applicable for**: SMS and C-IVR channels

One-way campaigns are only outbound messages to the recipients. With this option, you can only send campaign messages to the recipients. There is no action performed when a recipient sends messages back to the campaign message.

In the **Create campaign -> Configure** section, select the **Phone** option. Provide a phone number for making the outbound calls. This is the number used to send the campaign message to the recipient. Phone number is a pre-loaded list for your company. Contact Avaamo Support for more information, if required.

### 

Link to Avaamo agent: Two-way communication

**Applicable for**: SMS, C-IVR, MS Teams, and Custom channels

In two-way communication, a campaign message is sent to the recipients and the campaign recipients can communicate back to the campaign by responding to the same campaign message. This is a very useful feature to make the campaign conversational and proactively enables users to quickly accomplish a wide variety of tasks.

For example, consider that you have sent a reminder to all the recipients of an upcoming vaccination drive. A recipient reads the reminder message but now wishes to reschedule the appointment due to some personal reasons. With two-way communication, the recipient can now send an SMS message back to the campaign asking for rescheduling.

**Pre-requisite**: Depending on the delivery channel for your campaign, you must have an agent with the corresponding channel enabled. Based on your requirement, you can design this agent to handle specific use cases, say, for example, rescheduling an appointment flow. See [Channels](/user-guide/how-to/build-agents/configure-agents/deploy), for more information.

In the **Create campaign -> Configure** section, select the **Link to Avaamo agent** option. Based on the delivery channel selected, all the agents where the corresponding channel is enabled and you have at least [View permission](/user-guide/how-to/build-agents/configure-agents/permissions) on the agent are listed in the dropdown.

Each agent is displayed using the following nomenclature - `<<Agent stage>> <<Agent name>>::<<channel name>>.` This helps users easily identify the right channel to select since the agent with the same name can exist in multiple stages.

**Note:** Ensure that a Prompt Skill is added in your AI Agent for the campaign to work properly.

Select the agent from the list as per your requirements, then click **Next**.

**Note**: When you link the campaign to an Avaamo agent, all the campaign conversations are also available in the Conversation history of the agent. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.

## 

Add Message

In this section, you specify the actual message that is sent to the recipients and click **Next** to proceed to the [Activate](/user-guide/outreach/campaigns/create-new-campaign#activate) section. Based on the selected delivery channel, you can either specify an SMS message, Voice message, or MS Teams message in this section.

### 

**Language-specific messages**

You can add customized campaign messages in all the different languages supported by the Avaamo Platform. See [Languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information on the list of supported languages in the Avaamo Conversational AI Platform.

*   The default supported language is en-US.
    
*   In the **Add message** section, click the + icon and select the language in which you wish to add the message.
    
    *   When you add a language, the response is automatically translated and displayed in the message area. All the other fields such as the response name, phone header, and country code as applicable are copied as-is in the new language tab.
        
    *   By default, the translation only gets added when adding a new language and is not a continuous process, which implies that if you have added a message in English and later update it, the translation is not updated for the other languages and remains the same as it was at the time of adding the new language. You can further customize the response as required.
        
    
*   You can also add and load language-specific templates. See [Create new template](/user-guide/outreach/templates#create-new-template), for more information.
    

### 

Response sets

You can add multiple responses for the same language and then apply different filters for each response in the response set. See [Filters](/user-guide/outreach/campaigns/create-new-campaign#filters-optional), for more information.

Click **Add** in the **Responses** section to add another response for the same language. For each response, you can enter the response name that helps you to identify the response.

**Note**: If you add multiple responses for a language without any filter, then the system picks a random response from the set of multiple responses and displays it to the user.

You can add up to 50 responses to the same language.

### 

Multiple campaign messages

**Supported channels**: SMS, MS Teams, Custom Channel

This feature allows you to trigger multiple messages to the same recipient using the same campaign configuration at the same time. It saves the time and effort of configuring the campaign from scratch and hence promotes the reusability of campaigns.

To configure multiple campaign messages, in the **Add message** tab, specify each message separated by `<avm-break-line/>` tag. You can add any number of messages, there is no restriction on the number of messages that can be configured using `<avm-break-line/>` tag.

Here, for this example, when a campaign is triggered, two SMS messages are sent to the user. Though a part of the same campaign, each message is delivered independently, which implies that each message can have its delivery status and failure reasons, if any.

Another example can be a healthcare campaign, where you have a set of SMS messages (instructions) that you wish to send to the patients before a procedure. You can configure multiple SMS messages using a simple `<avm-break-line/>` tag.

Once the campaign is triggered, you can view the complete status in the `Campaign statistics` page.

Click the help icon in the `Text Sent` column to view more details on the message delivery:

In the `Campaign statistics` page, you can also download reports for further analysis. Each message in a multi-message campaign sent to a recipient can be identified using a `recipient_uuid.` The `recipient_uuid` remains the same for each message in the multi-message list when multiple messages are sent to the same recipient. See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

**Notes**:

*   There is no option to add a delay between messages.
    
*   The order is which the campaign messages are sent to the recipient is dependent on the carrier provider.
    
*   If you have a use case, to trigger different messages at different times, then the best option is to configure and schedule a different campaign.
    
*   `recipient_uuid` is also available in the Outreach insights API. See [Outreach insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api), for more information.
    

### 

Phone header

**Applicable for C-IVR and SMS Delivery Channel**

You can [create a recipient list](/user-guide/outreach/recipient-lists) in either Avaamo format or any custom format according to your business requirements. When you wish to trigger a campaign in the C-IVR or SMS channel, all that is required is a phone number to which the campaign message must be sent. Phone numbers in the recipient CSV can be in multiple columns and are based on the use case, say as Phone number, Preferred Phone number, Home number.

In the **Select phone header** dropdown, a list of all the column headers from the selected recipient list is populated. Pick the appropriate column header containing the phone number of the recipients to which the campaign message must be sent. If the recipient list is in Avaamo format, then by default **phone** column header is selected in the dropdown.

### 

Email header

**Applicable for MS Teams Channel**

You can [create a recipient list](/user-guide/outreach/recipient-lists) in either Avaamo format or any custom format according to your business requirements. When you wish to trigger a campaign in the Microsoft Teams channel, all that is required is an email to which the campaign message must be sent.

In the **Select email header** dropdown, a list of all the column headers from the selected recipient list is populated. Pick the appropriate column header containing the email of the recipients to which the campaign message must be sent. If the recipient list is in Avaamo format, then by default **email** column header is selected in the dropdown.

### 

**Primary header**

**Applicable for Custom Channel**

You can [create a recipient list](/user-guide/outreach/recipient-lists) in either Avaamo format or any custom format according to your business requirements. When you wish to trigger a campaign in the Custom channel, all that is required is the primary header to which the campaign recipient is bound.

The field selected in the primary header is the `client_uuid` in the custom channel outgoing payload. A campaign triggered to a recipient is hence identified by the combination of `channel_uuid and client_uuid` in the Avaamo Conversational AI Platform. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information on the outgoing message payload format.

### 

**Country code - Optional**

**Applicable for SMS and C-IVR Channel**

This field is optional and allows you to specify the country code for the recipients. If a country code is specified, then all the recipient phone numbers are automatically prefixed with the designated code.

Given the mandatory requirement for recipient phone numbers to be in the E.164 format, which necessitates a country code, this feature proves valuable when working with recipient files that lack country codes.

### 

**Filters - Optional**

For each language, you can add multiple messages and for each message, you can associate filters. This allows you to reuse the same campaign configuration and tailor the messages to different sets of recipients as per the requirement. Adding filters is optional.

Note that if you add multiple responses without any filter, then when the campaign is triggered, a random message from the set of messages is picked and delivered to the recipient. See [Filters](/user-guide/outreach/filters), for more information.

### 

SMS Message

*   **Delivery Channel**: SMS
    
*   **Maximum length**: Each SMS message can be a maximum of 1600 characters. It is recommended to specify an SMS Message with less than 320 characters for better delivery of the message.
    

Indicates the actual text message sent to the user in the SMS channel. You can create a customized message using the column headers from your recipient list CSV. This helps you to make the message personal and reachable to users. See [Examples](/user-guide/outreach/templates#examples), for a few sample message templates.

Alternatively, if you already have a template, then click the **Load Message Template** link to reuse and select a pre-existing message.

**Key points**:

*   You can add customized campaign messages in all the different languages supported by the Avaamo Platform. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.
    
*   For each language, you can add multiple messages and for each message, you can associate filters to target a specific set of recipients. See [Filters](/user-guide/outreach/filters), for more information.
    

### 

MS Teams message

**Delivery Channel**: [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams)

Indicates the actual message sent to the user in the MS Teams channel. You can create a customized message using the column headers from your recipient list CSV. This helps you to make the message personal and reachable to users. See [Examples](/user-guide/outreach/templates#examples), for a few sample message templates.

Alternatively, if you already have a template, then click the **Load Message Template** link to reuse and select a pre-existing message.

**Key points**:

*   You can add customized campaign messages in all the different languages supported by the Avaamo Platform. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.
    
*   For each language, you can add multiple messages and for each message, you can associate filters to target a specific set of recipients. See [Filters](/user-guide/outreach/filters), for more information.
    

### 

Voice Message

**Delivery Channel**: C-IVR

Indicates the actual voice message sent to the user in the C-IVR channel. You can create a customized message using the column headers and SSML tags from your recipient list CSV. This helps you to make the message personal and reachable to users. See [Examples](/user-guide/outreach/templates#examples), for a few sample voice message templates. Alternatively, if you already have a template, then click the **Load Message Template** link to reuse and select a pre-existing message.

**Key Points**:

*   For each language, you can add multiple messages and for each message, you can associate filters to target a specific set of recipients. See [Filters](/user-guide/outreach/filters), for more information.
    
*   You can add customized campaign messages in all the different languages supported by the Avaamo Platform. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.
    

*   Click the SSML tags at the bottom of the message box to add the corresponding tag in the Message box area. You can use this to quickly construct messages using SSML tags. see [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information and examples on SSML tags.
    
*   Click the **Play** button below the message box to preview the voice message. This reads out the message in the selected voice persona and you can use this feature to alter the voice message as required.
    
*   **Voice persona**: If you have specified one-way communication (using Phone in the Configure section) then, you can pick the voice persona from the list of available personas in the Voice message section. Alternatively, if you are using a two-way communication by linking to an existing Avaamo agent, then the persona as configured in the C-IVR channel of the Avaamo agent is selected and displayed.
    

### 

Custom channel Message

**Delivery Channel**: Custom Channel

Indicates the actual message sent to the user in the Custom channel. You can create a customized message using the column headers from your recipient list CSV. This helps you to make the message personal and reachable to users. See [Examples](/user-guide/outreach/templates#examples), for a few sample message templates.

Alternatively, if you already have a template, then click the **Load Message Template** link to reuse and select a pre-existing message.

**Key points**:

*   You can add customized campaign messages in all the different languages supported by the Avaamo Platform. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.
    
*   For each language, you can add multiple messages and for each message, you can associate filters to target a specific set of recipients. See [Filters](/user-guide/outreach/filters), for more information.
    

## 

Activate

This section is where you specify when to send the message to the recipients. You can send it immediately after activating the campaign or you can schedule it for a later time based on your business requirements. Specify the activation method for your campaign and **Create**:

### 

Send on activate

Enable this toggle if you wish to send the campaign message to the recipients immediately after activation.

### 

**Schedule campaign**

Enable this toggle if you wish to set a specific time and date for sending the campaign message to the list of recipients.

*   Time: The time when the scheduled campaign message is sent.
    
*   Date: The date when the scheduled campaign message is sent. The scheduled date must be less than one year from the current date.
    
*   Timezone: The timezone of the selected time for the scheduled campaign.
    

### 

**Recurring campaign**

Enable this toggle if you wish to periodically send the campaign message to the list of recipients.

*   Timezone: The timezone of the selected time for the recurring campaign.
    
*   Start time: The time when the recurring campaign message is sent.
    
*   Repeat: Pick the frequency of the recurring campaign.
    
*   Ends: The date when the recurring campaign ends. The end date must be less than one year from the start date.
    
*   After: Number of occurrences after which the recurring campaign ends. Occurrences must be between 1 to 100.
    

### 

**Campaign failures**

Specify the email Ids of the users to receive campaign error notifications.

*   These errors are related to campaign configuration errors such as (SFTP file uploaded errors or Teams configuration errors) that result in a complete campaign failure.
    
*   These are not related to the errors in the [Campaign Statistics](/user-guide/outreach/campaign-statistics) page.
    
*   It is sent only for activated campaigns per campaign run. If you have a recurring campaign, then each time the campaign is executed and until the error is resolved, the error notification is sent to the emails configured in the **Campaign failures** section.
    

**Note**: You can enable all the toggles and accordingly the campaign message is sent on activation, also at the set specific time and date, and recurring as required. Ensure that the date and times in the scheduled campaign and recurring campaign are non-overlapping for a better user experience.

## 

Campaign summary details

After creating the campaign, a **Campaign summary** details pop-up is displayed.

*   You can quickly glance at all the details before actually activating or testing the campaign. Scroll to the right to view all the messages.
    
*   Click **View filter details** to view the list of recipients filtered for each language and response set to whom the campaign message is sent.
    

*   Click **Download CSV** to download the recipient list CSV. In this CSV, you can view
    
    *   The list of recipients and the filters applied against each recipient to whom the campaign message is triggered.
        
    *   The failed reason for all those recipients to whom the campaign message is not triggered.
        
    
*   Click **Test campaign**, if you wish to test your campaign with a selected set of test recipients before activating the campaign. See [Test campaign](/user-guide/outreach/campaigns/test-campaign), for more information.
    
*   Click **Activate** to activate your campaign. Based on the option selected in the **Campaign** -> **Activate** section, the SMS message is either sent immediately after activation or at a scheduled date.

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaigns/test-campaign

Before launching the campaign to a wider audience, it is recommended to do a test run with a list of test recipients. See [Create recipient list](/user-guide/outreach/recipient-lists#create-a-new-recipient-list), for more information on creating a test recipient list using the **Test recipient list** toggle.

You can test a campaign right after creating a campaign or using the **Test** option in the extended menu of the **Actions** column.

### 

Test your campaign

In the **Test campaign** pop-up window, pick a test recipient list from the dropdown. Only those recipient lists that are enabled for testing are listed in the dropdown. See [Create recipient list](/user-guide/outreach/recipient-lists#create-a-new-recipient-list), for more information on creating a test recipient list using the **Test recipient list** toggle.

When you pick a recipient list,

*   A list of users to whom a test message is sent is displayed. This list is picked from the recipient list CSV file.
    
*   SMS sent status - indicating whether the message is sent or not is displayed. When you load a recipient list, the status is `Pending`.
    

*   Click **Test**. The **SMS sent** column is updated `Yes` for all the numbers where the message is sent successfully. When the SMS message is not sent successfully, the **SMS sent** column is updated `No` and you can click **?** icon to know the specific reason for failure.

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaigns/opting-out-of-campaign

Although campaigns allow you to reach to a wider set of audience, not all campaign messages are welcome by the recipients. Some consider it an invasion of privacy or others may not be just interested in receiving any such message to their number.

Avaamo respects recipient's privacy and allows recipients to opt-out of receiving messages from the Avaamo platform to their number.

### 

Opting out

If a recipient no longer wishes to receive messages to a number, then the recipient can simply reply to the campaign message with any one of the following words to unsubscribe:

*   STOP
    
*   END
    
*   QUIT
    
*   CANCEL
    
*   UNSUBSCRIBE
    
*   STOPALL
    

When a recipient unsubscribes, then the campaign message is not sent. In the **Test campaign** pop-up, the following message for the corresponding recipient:

A similar message is also displayed in the CSV file when you download a campaign message history report from the **Campaign Statistics** page. See [Campaign Statistics](/user-guide/outreach/campaign-statistics), for more information.

### 

Opting in

To opt back in to receive messages from an unsubscribed number, the number that replied with STOP must send one of these keywords to start receiving messages back:

*   START
    
*   YES
    
*   UNSTOP

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaigns/manage-campaigns

In the **Outreach ->** **Campaigns** tab, you can edit, delete, test, activate, and deactivate campaigns based on the role you have in the Campaign settings. See [Campaign settings](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions#campaign-settings), for more information.

### 

Search campaign

In the **Outreach -> Campaigns** tab, start entering the text in the **Search** text box and press the **Enter** key or click the **Search** icon. The results are filtered and displayed based on the text entered in the **Search** text box.

You can also search for the active and inactive campaigns from the dropdown next to the **Create new campaign** button.

### 

View campaign

In the **Outreach ->** **Campaigns** page, click three ellipse dots in the **Actions** column of the campaign to view the extended menu and click **View** to view the current campaign details.

### 

Edit campaign

*   In the **Outreach ->** **Campaigns** page, click three ellipse dots in the **Actions** column of the campaign to view the extended menu and click **Edit.**
    
*   The **Edit campaign** pop-up window is displayed with all the campaign details. You can edit the details and click **Update** to save the details.
    

### 

Delete campaign

*   In the **Outreach ->** **Campaigns** tab, click three ellipse dots in the **Actions** column of the campaign to view the extended menu and click **Delete.**
    
*   Click **Delete** in the confirmation message to delete the campaign.
    

**Note**: It is recommended to use caution before deleting a campaign as the delete action cannot be undone.

### 

Test your campaign

This feature allows you to test the campaign with a list of a few test recipients before launching the campaign to a wider audience. See [Test campaign](/user-guide/outreach/campaigns/test-campaign), for more information.

### 

Activate and Deactivate campaign

Deactivating a campaign is useful when you wish to retain the settings of the campaign and wish to not use it or activate it at the moment.

*   In the **Outreach ->** **Campaigns** tab, click three ellipse dots in the **Actions** column of the campaign to view the extended menu and click **Deactivate.** Note that this option is displayed only for active campaigns. If a campaign is already deactivated, then you can use the **Activate** option to bring it back to an active state based on your requirement.
    
*   Click **Deactivate** in the confirmation message to deactivate the agent.

---

## Source: https://docs.avaamo.com/user-guide/outreach/recipient-lists

A **Recipient list** consists of a list of users to whom the campaign message must be sent. You can quickly create and upload a recipient list on the **Outreach -> Recipient Lists** page.

Option

Description

Recipient list name

Displays the name of the configured recipient list along with the source type icon.

Number of recipients

Displays the total number of recipients available in the recipient list. **Note:** For [Salesforce recipient lists](/user-guide/outreach/recipient-lists#connect-to-salesforce), the recipient count is dynamic and refreshes when `Test Connection` is clicked.

Updated on

Displays the last updated date, time, and the user who modified the recipient list.

Actions

Provides additional actions for managing the selected recipient list.

The following are some of the key features of the **Recipient Lists** section:

*   Quickly upload a list of recipients in a simple CSV file.
    
*   Flexible CSV format that can be used to create customized message templates.
    
*   Reuse the same list for different campaigns.
    
*   Build a separate list for a test run before launching the outreach program to the actual users.
    

The Recipient list page displays a list of all the recipient lists created for the Outreach program in descending order of created or updated timestamp. Each column contains the following details:

*   Recipient list name: Indicates the name of the recipient list provided at the time of creating the recipient list.
    
*   Number of recipients: Indicates the number of recipients in the recipient list CSV.
    
*   Updated on: Indicates the last updated timestamp of the recipient list. For a newly created recipient list, it indicates the created timestamp of the recipient list.
    
*   Action: You can use options in the Actions column to [download](/user-guide/outreach/recipient-lists#avaamo-file-format), [delete](/user-guide/outreach/recipient-lists#delete-a-recipient-list) or [view the recipient list](/user-guide/outreach/recipient-lists#view-a-recipient-list)
    

## 

Create a new recipient list

**Notes**:

*   See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.
    
*   Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new recipient list.
    

You can create a recipient list is one of the following ways:

*   [Upload file](/user-guide/outreach/recipient-lists#upload-file): Use this option if you wish to directly upload a CSV file with a list of recipients.
    
*   [SFTP](/user-guide/outreach/recipient-lists#sftp): Use this option if you wish to pick the recipient list from an SFTP server of your choice. When a campaign is triggered, the latest file available at the SFTP server location is used to populate the list of recipients.
    
*   [Connect to Salesforce](/user-guide/outreach/recipient-lists#connect-to-salesforce)**:** Use this option to create the recipient list from Salesforce data by configuring the Salesforce connection and selecting the required table/object.
    

**Key point**: The recipient file must be UTF-8-encoded CSV. See [Export to a UTF-8 encoded CSV](/user-guide/outreach/recipient-lists#export-to-a-utf-8-encoded-csv), for a few tips.

### 

Upload file

You can use the **Upload** **recipient list** option to directly upload a CSV file containing a list of recipients.

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipient Lists** tab, and click **Create New Recipient List -> Upload** **recipient list** option. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Recipient list name

Indicates the name of the recipient list. Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

File format

Choose a file format of the recipient CSV file.

*   If you are uploading Avaamo-compliant CSV format, then see [Avaamo file format](/user-guide/outreach/recipient-lists#avaamo-file-format), for more information.
    
*   You can also select Custom as a file format and upload a CSV file in any custom format, say for example Epic integration system as a recipient list. See [Custom file format,](/user-guide/outreach/recipient-lists#custom-file-format) for more information.
    

NA

Upload recipient list in CSV format

Click **Browse** to browse a CSV file with recipient details.

You can also click the **Sample recipient file** to download a sample recipient list file format. See [Recipient list CSV format](/user-guide/outreach/recipient-lists#avaamo-file-format), for more information.

NA

Test recipient list

Use this if you are creating a recipient list for a test run.

The test recipient lists are available in the Recipient list dropdown only when you wish to test the campaign. See [Test campaign](/user-guide/outreach/campaigns/test-campaign), for more information. In the

NA

The newly created recipient list is displayed in the **Recipient Lists** tab.

*   In the Recipient Lists tab, a recipient list marked for testing is indicated with a test tube icon , the recipient list not marked for testing is indicated with  icon.
    
*   Click the recipient list to view the configurations used to create it.
    

### 

SFTP

**Key point**: The SFTP file name must contain only letters and numbers without any spaces or special characters.

You can use the **SFTP** **connection** option if you wish to pick the recipient list from an SFTP server of your choice. When a campaign is triggered, the latest file available in the SFTP server location is used to populate the list of recipients. This allows you to update the recipient file list continuously and the newest list is picked by the Platform when the campaign is triggered.

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipient Lists** tab, and click **Create New Recipient List -> Upload recipient list using SFTP** option. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Recipient list name

Indicates the name of the recipient list. Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

File format

Choose a file format of the recipient CSV file.

*   If you are uploading Avaamo-compliant CSV format, then see [Avaamo file format](/user-guide/outreach/recipient-lists#avaamo-file-format), for more information.
    
*   You can also select Custom as a file format and upload a CSV file in any custom format, say for example Epic integration system as a recipient list. See [Custom file format,](/user-guide/outreach/recipient-lists#custom-file-format) for more information.
    

NA

SFTP Host

Indicates the URL of the SFTP server.

NA

Auth type

Indicates the auth type used by the SFTP server. Following auth types are supported:

*   Basic: Specify the username and password for connecting to the SFTP server.
    
*   Keys: Specify the username and required `pem` key for connecting to the SFTP server.
    

NA

Test Connection

Use this button if you wish to test the connection for the SFTP server.

NA

File path

Indicates the path of the recipient file from the SFTP server.

NA

Test recipient list

Use this if you are creating a recipient list for a test run.

NA

The newly created recipient list is displayed in the **Recipient Lists** tab.

*   In the **Recipient Lists** tab, the recipient list uploaded using SFTP is indicated using icon.
    
*   Click the recipient list to view the configurations used to create it.
    

### 

Connect to Salesforce

You can use the **Connect to Salesforce** option to create a recipient list using Salesforce data.

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Recipient Lists** tab, and click **Create New Recipient List -> Connect to Salesforce**.

Specify the following details and click **Create**:

Field

Description

Recipient list name

Name of the recipient list

Client ID

Salesforce Connected App Consumer Key

Client Secret

Salesforce Connected App Consumer Secret

Instance URL

Salesforce instance URL (for example, `https://your-domain.my.salesforce.com`)

Report ID

Salesforce Report ID used to fetch recipient data

API Version (optional)

Salesforce API version

Test recipient list

Enable this option if the recipient list is intended for testing purposes

## 

Recipient list file format

You can upload a recipient list CSV in one of the following formats - Avaamo or Epic. Each row in the CSV file is a recipient to whom the campaign message is sent. See [Avaamo file format](/user-guide/outreach/recipient-lists#avaamo-file-format) and [Epic file format](/user-guide/outreach/recipient-lists#epic-file-format), for more information.

**Notes**:

*   The column headings in the recipient list CSV can be used as `${column_name}` to create a customized message. These are placeholder values in the message. When an SMS or voice message is sent to a specific recipient, the placeholders `${column_name}` in the message are replaced with the corresponding column value from the CSV file.
    
*   All the special characters in the column heading must be removed and space must be replaced with an underscore character when used in the campaign message. Example: If the CSV column heading has "Appointment Date", then in the message template it must be used as `${appointment_date}`.
    

### 

Avaamo file format

The following is the Avaamo file format of the recipient list CSV:

Phone

email

<<user\_info\_1>>

<<user\_info\_2>>

<<value>>

<<value>>

<<value>>

<<value>>

*   Recipient information in the CSV file can contain details such as first name, email, last name, date, or time as per the scenario.
    
*   For `C-IVR and SMS delivery channels`, the only CSV column header that is mandatory is the **Phone** column.
    
    *   This is the number to which the campaign message is sent.
        
    *   For the C-IVR channel, the phone number format must be in the [E.164 format](https://www.itu.int/rec/T-REC-E.164/) (`- [+] [country code] [subscriber number including area code] and can have a maximum of fifteen digits`) in all cases.
        
    *   For the SMS channel, it is recommended to specify the phone number in [E.164 format](https://www.itu.int/rec/T-REC-E.164/), except when the recipient's phone number is a national number. In such cases, only the `Subscriber number` without the country code is sufficient. For example, if the "from" and "to" number of the campaign is from the US, then the "to" number which is the recipient number can be just the Subscriber number.
        
    

E.164 Format

Country Code

Country

Subscriber Number

+1616555xxxx

1

US

616555xxxx

+44345183xxxx

44

GB

345183xxxx

+55115743xxxx

55

BR

115743xxxx

*   For the `MS Teams delivery channel`, the only CSV column header that is mandatory is the **email** column.
    
    *   Ensure the email in the recipient list CSV is a part of the Azure directory for which the MS Teams channel is configured.
        
    *   You can find the details of the Azure directory of the MS Teams channel using the **Directory (Tenant) Id** in the MS Teams channel configuration page. See MS Teams, for more information.
        
    

The rest of the column headers in the recipient CSV file can be any user information that you wish to include for each recipient.

**Example:**

Phone

email

First name

Last name

+1556xxxx234

john@abccorp.com

John

Miller

+1678xxxx234

mark@abccorp.com

Mark

Smith

**Message template**:

When the message is sent to a recipient number, the placeholder values in the template are replaced with actual values corresponding to the number.

See [Templates](/user-guide/outreach/templates), for more examples**.**

### 

**Custom file format**

Avaamo Conversational AI Platform allows you to upload a custom recipient CSV file with customized column headers based on your business requirement. Unlike Avaamos-specific recipient file format where either phone or email column header is mandatory, the custom file format allows you the flexibility to upload CSV from any external system without any mandatory column requirement. Later, the mapping of the column headers from the recipient list CSV to the actual column to be used for delivering the campaign message can be done while configuring the campaign. See [Select phone header](/user-guide/outreach/campaigns/create-new-campaign#select-phone-header) and [Select email header](/user-guide/outreach/campaigns/create-new-campaign#select-email-header), for more information.

For example, A custom recipient CSV file can have the following columns - Name, Email, Official Email, Preferred phone number, Mobile phone number, Home number, DOB, and many other columns. Say that you are using the SMS channel to deliver the campaign and you wish to send an SMS to the number in the `Preferred phone number` column. You can map this header in the [Select phone header](/user-guide/outreach/campaigns/create-new-campaign#select-phone-header) dropdown while configuring the campaign. When the campaign is executed, the numbers in the `Preferred phone number` column is picked for delivering the campaign message.

**Example of the Custom file format: Epic file format**

Epic enables the secure flow of patient data between Epic sites and exchange-capable systems. You can automate Epic integration with the Outreach feature in the Avaamo Platform to consume the patient data and send a campaign message to the list of recipients obtained from the Epic API seamlessly.

Epic formats are company specific and can vary. The Avaamo platform provides flexibility to upload any Epic format, however, do note the following points to enable Epic integration with the Outreach feature in the Avaamo platform.

*   If `Authorised SMS` column is available, then the value in the `Authorised SMS` column is considered before sharing the campaign message. In such cases, the campaign message is sent only when `Authorised SMS` column is `Yes`. If `Authorised SMS` column is not available, then the campaign message is sent to all the users in the file.
    
*   A suggested way to automate the integration is to build an automated script for extracting patient data from the Epic integration and drop it to an SFTP location periodically.
    
*   Configure the SFTP details in the Outreach -> Recipient lists -> SFTP page. See [SFTP](/user-guide/outreach/recipient-lists#sftp), for more information.
    
*   You can continue to extract and update the same file from the Epic sites to the SFTP location and the Avaamo Platform picks the latest file when the campaign is triggered.
    

Epic enables the secure flow of patient data between Epic sites and exchange-capable systems. You can automate Epic integration with the Outreach feature in the Avaamo Platform to consume the patient data and send a campaign message to the list of recipients obtained from the Epic API seamlessly.

## 

**Download recipient list**

*   In the **Outreach ->** **Recipient Lists** tab, click three ellipse dots in the **Actions** column of the recipient list to view the extended menu and click **Download.**
    
*   A copy of the recipient CSV file is downloaded to your local machine.
    

## 

**Search recipient list**

In the **Outreach ->** **Recipient Lists** tab, start entering the text in the **Search** text box and press the **Enter** key or click the **Search** icon. The results are filtered and displayed based on the text entered in the **Search** text box.

## 

**View a recipient list**

In the **Outreach ->** **Recipient Lists** tab, click three ellipse dots in the **Actions** column of the recipient list to view the extended menu, and click **View** to view the recipient list setup details.

You can also click the recipient list name to view the recipient list setup details.

## 

**Delete recipient list**

*   In the **Outreach ->** **Recipient Lists** tab, click three ellipse dots in the **Actions** column of the recipient list to view the extended menu and click **Delete.**
    
*   Click **OK** in the confirmation message to delete the recipient list.
    

**Note**: You can delete a recipient list only when it is not associated with any campaign.

---

## Source: https://docs.avaamo.com/user-guide/outreach/templates

A **Template** is where you provide a customized message that is sent to recipients of your campaign. You can quickly create a template specific to your campaign in the **Outreach -> Templates** page.

The following are some of the key features of the **Templates** section:

*   Create a customized template by using the column headings in the recipient list CSV
    
*   Reuse the same template for different campaigns.
    

## 

Create new template

**Notes**:

*   See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.
    
*   Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new recipient list.
    

Based on the [delivery channel](/user-guide/outreach/campaigns/create-new-campaign#configure) of your campaign, you can create

*   [Text message template for an SMS channel](/user-guide/outreach/templates#text-message)
    
*   [Voice message template for the C-IVR channel](/user-guide/outreach/templates#voice-message)
    
*   [MS Teams message template for the MS Teams channel](/user-guide/outreach/templates#ms-teams-message)
    
*   [Custom message template for the Custom channel](/user-guide/outreach/templates#custom-message)
    

### 

**Text message**

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Templates** tab, and click **Create new template -> Text Message** to create an SMS message template. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Template name

Indicates the name of the template.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Template description

Indicates the description of the template. Use this to specify the purpose of the template.

200 characters

Language

Indicates the language in which you wish to create templates.

*   You can create templates in all the languages supported by the Avaamo Platform. See [Languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information on the list of supported languages in the Avaamo Conversational AI Platform.
    
*   The corresponding language template is displayed in the **Add message** section when you load the message template. See [Add message](/user-guide/outreach/campaigns/create-new-campaign#add-message), for more information.
    
*   The default language is en-US.
    
*   Click **Change** add select the required language in which you wish to create the template.
    

N/A

SMS template

Indicates the SMS message sent to the recipients.

To configure multiple campaign messages, specify each message separated by `<avm-break-line/>` tag. See [Multiple campaign messages](/user-guide/outreach/campaigns/create-new-campaign#multiple-campaign-messages), for more information.

You can create customized messages specific to your campaign using the column headers in the recipient lists CSV file. See [Recipient list CSV format](/user-guide/outreach/recipient-lists#recipient-list-file-format), for more information.

Each SMS message can be a maximum of 1600 characters

It is recommended to specify an SMS Message with less than 320 characters for better delivery of the message.

The newly created template is displayed in the **Templates** tab.

### 

**Voice message**

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Templates** tab, and click **Create new template -> Voice Message** to create a voice message template. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Template name

Indicates the name of the template.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Template description

Indicates the description of the template. Use this to specify the purpose of the template.

200 characters

Language

Indicates the language in which you wish to create templates.

*   You can create templates in all the voice-supported languages of the Avaamo Platform. See [Languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages#supported-languages), for more information on the list of supported languages in the Avaamo Conversational AI Platform.
    
*   The corresponding language template is displayed in the **Add message** section when you load the message template. See [Add message](/user-guide/outreach/campaigns/create-new-campaign#add-message), for more information.
    
*   The default language is en-US.
    
*   Click **Change** add select the required language in which you wish to create the template.
    

N/A

Agent Type

Indicates the type of agent the template is designed for. You can select whether the template is intended for an [AI Agent](/user-guide/ai-agent/overview-key-features) or a [Classic Agent](/user-guide/how-to/build-agents/add-skills).

N/A

Voice template

Indicates the voice message sent to the recipients.

You can create a customized message using the column headers and SSML tags from your recipient list CSV. See [Recipient list CSV format](/user-guide/outreach/recipient-lists#recipient-list-file-format), for more information.

See [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information and examples on SSML tags.

Configuring multiple campaign messages for the C-IVR channel is not supported.

It is recommeded to keep the voice message short and succint so that user's can understand it clearly.

**Key points**: Note the following key points about the voice message template:

*   You can click the SSML tags at the bottom of the message box to add the corresponding tag in the Message box area. You can use this to quickly construct messages using SSML tags. See [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information and examples on SSML tags.
    
*   To preview the message, click the **Play** button below the message box to preview the voice message. This reads out the message in the selected voice persona and you can use this feature to alter the voice message as required.
    
*   Pick the voice persona from the list of available personas in the Voice message section. This is the persona used to render the voice template
    

### 

MS Teams message

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Templates** tab, and click **Create new template > Teams Message** to create an MS Teams message template. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Template name

Indicates the name of the template.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Template description

Indicates the description of the template. Use this to specify the purpose of the template.

200 characters

Language

Indicates the language in which you wish to create templates.

*   You can create templates in all the languages supported by the Avaamo Platform. See [Languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information on the list of supported languages in the Avaamo Conversational AI Platform.
    
*   The corresponding language template is displayed in the **Add message** section when you load the message template. See [Add message](/user-guide/outreach/campaigns/create-new-campaign#add-message), for more information.
    
*   The default language is en-US.
    
*   Click **Change** add select the required language in which you wish to create the template.
    

N/A

Teams Message template

Indicates the message sent to the recipients via the MS Teams channel.

You can create customized messages specific to your campaign using the column headers in the recipient lists CSV file. See [Recipient list CSV format](/user-guide/outreach/recipient-lists#recipient-list-file-format), for more information.

In the Teams Message template, you can use:

*   Simple text messages
    
*   Any custom card Teams messages can be wrapped in a `CustomTeamsMessage` object and used as-is. See [Custom card Teams message](/user-guide/outreach/templates#custom-card-ms-teams-message), for an example.
    

To configure multiple campaign messages, specify each message separated by `<avm-break-line/>` tag. See [Multiple campaign messages](/user-guide/outreach/campaigns/create-new-campaign#multiple-campaign-messages), for more information.

It is recommeded to keep the campaign message short and succint so that user's can understand it clearly.

The newly created template is displayed in the **Templates** tab.

### 

**Custom message**

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Templates** tab, and click **Create new template -> Custom message** to create a message template for a custom channel. Specify the following details and click **Create**:

Parameters

Description

Maximum length

Template name

Indicates the name of the template.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Template description

Indicates the description of the template. Use this to specify the purpose of the template.

200 characters

Language

Indicates the language in which you wish to create templates.

*   You can create templates in all the languages supported by the Avaamo Platform. See [Languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information on the list of supported languages in the Avaamo Conversational AI Platform.
    
*   The corresponding language template is displayed in the **Add message** section when you load the message template. See [Add message](/user-guide/outreach/campaigns/create-new-campaign#add-message), for more information.
    
*   The default language is en-US.
    
*   Click **Change** add select the required language in which you wish to create the template.
    

N/A

Custom Message template

Indicates the message sent to the recipients via the Custom channel.

You can create customized messages specific to your campaign using the column headers in the recipient lists CSV file. See [Recipient list CSV format](/user-guide/outreach/recipient-lists#recipient-list-file-format), for more information.

Note that currently, only text messages are supported in the Custom Message template.

To configure multiple campaign messages, specify each message separated by `<avm-break-line/>` tag. See [Multiple campaign messages](/user-guide/outreach/campaigns/create-new-campaign#multiple-campaign-messages), for more information.

It is recommeded to keep the campaign message short and succint so that user's can understand it clearly.

The newly created template is displayed in the **Templates** tab.

## 

**Search template**

In the **Outreach -> Templates** tab, start entering the text in the **Search** text box and press the **Enter** key or click the **Search** icon. The results are filtered and displayed based on the text entered in the **Search** text box.

## 

**Edit template**

You can edit a template from the **Outreach -> Templates** tab. Click on any template in the **Templates** page to open the template in edit mode. Edit the required details and click **Update**.

## 

**Delete template**

*   In the **Outreach -> Templates** tab, click three ellipse dots in the **Actions** column of the template to view the extended menu and click **Delete.**
    
*   Click **OK** in the confirmation message to delete the template.
    

**Note**: You can delete a template only when it is not associated with any campaign.

## 

Examples

This section lists a few sample templates that you can refer to and customize for your use case. Consider the following CSV file:

email

First name

Last name

Date

Time

john@abccorp.com

John

Miller

20 Dec 2022

10:00 AM

mark@abccorp.com

Mark

Smith

23 Dec 2022

4:00 PM

**Note**: All the placeholder values in the template must be column names in the recipient CSV file.

### 

Vaccination drive

`SMS message / MS Teams message / Custom message`

`Voice message`

### 

Appointment confirmation

`SMS message / MS Teams message / Custom message`

`Voice message`

### 

Reschedule appointment as the clinic is closed

`SMS message / MS Teams message / Custom message`

`Voice message`

### 

Custom card MS Teams message

The following is an example of an Adaptive card message that can be used in an Outreach campaign via MS Teams channel:

---

## Source: https://docs.avaamo.com/user-guide/outreach/filters

You can configure filters based on the column names and values in the recipient CSV such as location, age, date of birth, or gender. When a filter is associated with a campaign, the campaign is triggered to only those recipients matching the filter criteria.

**Example**: Consider you wish to trigger campaign messages to only those recipients who are above 18 years of age. In this case, you can configure a filter - "Age greater than 18 years" and associate it with a campaign.

This feature combined with the ability to configure multiple messages in a single campaign for different languages, allows you to reuse the same campaign configuration and tailor the messages to different sets of recipients as per the requirement. It helps in:

*   Rapid development: You can use the same campaign and tailor the responses to different sets of recipients as per the requirement
    
*   Providing personalized responses, say, for example, based on the location of the user or department a user belongs to.
    

See [Campaign - Add Message](/user-guide/outreach/campaigns/create-new-campaign#add-message), for more information on how to associate filters to the campaign.

**Notes**:

*   See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.
    
*   Ensure you have met the [pre-requisites](/user-guide/outreach/before-you-begin) before creating a new recipient list.
    

### 

Create new filter - Attribute filter

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Filters** tab, and click **Create new filter -> Attribute Filter**. Specify the following details in the pop-up window:

Parameters

Description

Maximum length

Filter name

Indicates the name of the filter.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Filter description

Indicates the description of the filter. Use this to specify the purpose of the filter.

200 characters

Filter conditions

Indicates the conditions that are used to filter the recipient list.

*   Column: Column name in the recipient list CSV. Column names are case-sensitive, which implies that the name you provide in the filter condition must be an exact match and in the same case as the column name in the recipient list CSV.
    
*   Type: The type of data the column contains. Supported values: Text, Number, Date
    
*   Operator: Used to perform operations on column value with the specified criteria.
    
*   Criteria: Indicates the value that the actual column value in the recipient CSV must satisfy when applied with the operator. If the data type is Date, then the criteria can be in one of the following formats:
    
    *   YYYY-MM-DD
        
    *   YYYY/MM/DD
        
    

N/A

*   Note that the list of operators displayed is based on the type of data. The following are supported operators for each data type:
    

Data type

Operators

Number

*   Greater than
    
*   Less than
    
*   Equal to
    
*   Greater than or equal to
    
*   Less than or equal to
    
*   Include
    

Text

*   Equal to
    
*   Include
    

Date

*   Greater than
    
*   Less than
    
*   Equal to
    
*   Greater than or equal to
    
*   Less than or equal to
    
*   Include
    

*   Click **Add new Condition** and select the data type to add new filters. You can add up to 50 conditions in a single filter.
    
*   You can add multiple filters and each filter is an "AND" condition. For example: If you have added two filter conditions - one for "age" greater than 18 and another one for "country" equal to India, then only the recipients with the country as India **and** age greater than 18 are picked for delivering the campaign message.
    
*   **Include** operator: Each filter condition also has an "include" operator that allows you to specify multiple values. In this case, the filter is applied to either of the values mentioned in the criteria. This is an "OR" condition. For example: If you have added a country filter condition with the "include" operator and specified India and the United States, then the recipients with the country as either India or the United States are picked for delivering the campaign message.
    

Click **Create** after specifying all the details in the **Attribute filter** pop-up window. The newly created filter is displayed in the **Filters** tab. The **Attribute filter** is indicated using icon in the **Filters** tab.

### 

Create new filter - Code filter

These are filters with custom JavaScript code. You can use the **Code filter** option when you wish to check for certain business logic and then apply the recipient filter condition.

In the Avaamo Platform UI, click the **Outreach** option in the top menu, navigate to the **Filters** tab, and click **Create new filter -> Code Filter**. Specify the following details in the pop-up window:

Parameters

Description

Maximum length

Filter name

Indicates the name of the filter.

Provide a name that is easily identifiable to pick when you create a campaign.

50 characters

Filter description

Indicates the description of the filter. Use this to specify the purpose of the filter.

200 characters

JS code

Indicates custom Javascript code where you specify the filter condition to match with the recipient list.

You can use the following format to specify the column name from the CSV:

headers\["<<column\_name>>"\]

N/A

Click **Create** after specifying all the details in the **Code filter** pop-up window. The newly created filter is displayed in the **Filters** tab. The **Code filter** is indicated using icon in the **Filters** tab.

### 

**Search filter**

In the **Outreach -> Filters** tab, start entering the text in the **Search** text box and press the **Enter** key or click the **Search** icon. The results are filtered and displayed based on the text entered in the **Search** text box.

### 

Edit filter

You can edit a template from the **Outreach -> Filters** tab. Click on any filter in the **Filters** page to open the filter in edit mode. Edit the required details and click **Update**.

### 

Delete filter

*   In the **Outreach -> Filters** tab, click three ellipse dots in the **Actions** column of the filter to view the extended menu and click **Delete.**
    
*   Click **OK** in the confirmation message to delete the filter.
    

**Note**: You can delete a filter only when it is not associated with any campaign.

### 

Example 1: Multiple filters (Age + Location)

Consider you wish to trigger a campaign message based on the location of the user and to only those recipients who are above 18 years of age.

The following example demonstrates how to configure filters for this scenario. In this example, when you associate this filter with a campaign, only those recipients above the age of 18 and from either Mumbai or Pune location are picked for delivering the campaign message:

### 

Example 2: Multiple filters with Language (Age + Location in English and French)

Consider you wish to trigger a campaign message based on the location of the user and to only those recipients who are above 18 years of age. Further, you wish to send an English message to recipients from the United States and a French message to recipients from Canada.

The following example demonstrates how to configure filters and campaigns for this scenario:

*   Create a filter, say "Location - United States": Age > 18 and Location equals United States.
    

*   Create another filter, say "Location - Canada": Age > 18 and Location equals Canada.
    

*   In the Campaign -> Add Message section, you can add two messages
    
    *   One in en-US language and associate the "Location - United States" filter:
        
    *   Another one in fr-FR language and associate the "Location - Canada" filter:
        
    

Now, when the campaign is triggered, the French message is sent to all the recipients whose location is Canada and age above 18 years and the English message is sent to all the recipients whose location is United States and age above 18 years.

### 

Example 3: Code filter (All users with appointment date later than today)

Consider that you wish to trigger a campaign message to only those users whose appointment date is later than today.

In this scenario, you can configure filters using the Code filters as follows:

---

## Source: https://docs.avaamo.com/user-guide/outreach/campaign-statistics

The **Campaign statistics** page provides a data summary of the campaign sent out to the recipients. You can use this data for further analysis, debugging, and reporting purposes.

## 

Overall Campaign details

By default, the data for the most recent campaign sent out is displayed. For the past campaigns, select a specific date and time from the **Execution** dropdown.

**Note**: Up to 6 months of campaign runs are displayed in the `Execution` dropdown.

Click **View current campaign** at the top right corner to see the current campaign details. Click this link to view the latest campaign settings such as its name, intended target audience, scheduling, communication channels, filters, and configured recipient list.

For the selected campaign run date in the **Execution** dropdown, you can view the following details related to the campaign execution:

*   **Total recipients**: The total number of recipients to whom the campaign message is sent.
    
*   **Undelivered messages**: Displays the number of undelivered messages for the whole campaign in the following format: `<<Number of undelivered messages>>/<<Total number of messages>>`.
    
    *   Number of undelivered messages: Sum of undelivered messages across all the recipients of the campaign.
        
    *   Total number of messages: Sum of all the messages in the message count column.
        
    
*   **Link to agent**: Displays the agent details the campaign is linked to in case of a two-way campaign. In the one-way campaign, since no agent is linked to the campaign, N/A is displayed in the `Link to agent` block.
    
*   **Channel**: Channel used for delivering the campaign message.
    
*   **Campaign message history**: Displays the campaign sent status for each recipient for the selected date run of the campaign. See [Campaign messaging history](/user-guide/outreach/campaign-statistics#campaign-messaging-history), for more information.
    

The following is a sample campaign statistics displayed for one-way campaigns. Since no agent is linked in the one-way campaign, N/A is displayed in the `Link to agent` block:

The following is a sample campaign statistics displayed for two-way campaigns - the agent the campaign is linked to and the lifecycle stage of the agent are also displayed in this page.

*   Click the agent, if you wish to navigate and view the agent details.
    
*   If the campaign is linked to an agent and a conversation is established with the recipient, you can click the arrow icon against the recipient and navigate to the [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history) page to check the conversation in more detail.
    

## 

Campaign messaging history

**Note**: Upon encountering any recipient CSV parsing error during campaign execution, the system displays a detailed error message in the `Campaign statistics` UI page, specifying the line or row where the error occurred. Furthermore, if users have configured campaign failure notifications, an email containing the error details is notified to all the users. See [Campaign failures](/user-guide/outreach/campaigns/create-new-campaign#campaign-failures), for more information.

In the message history, you can view the following details:

*   The first column header is based on the campaign channel:
    
    *   For C-IVR or SMS channels, it is the recipient's phone number.
        
    *   For the MS Teams channel, the recipient's email is displayed.
        
    *   For [SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip)\-based voice campaigns, providing only the recipient’s phone number is not sufficient. Ensure the phone number is appended with the `IP destination SBC` for the campaign to work correctly. For example: `+91733xxxxxxx@64.xxx.xxx.xx`
        
    *   For the Custom channel, it is the primary field selected during campaign configuration.
        
    *   Click the arrow icon against the recipient and navigate to the [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history) page to check the conversation in more detail.
        
    
*   **Message count**: Number of messages that must be delivered to the recipient.
    
*   **Time**: Indicates the date and time when the campaign to the recipient was triggered.
    
*   **Text sent / Voice sent**: Click the help icon to view more details. In the`View message` pop-up, you can view detailed information on each message delivery status.
    

The following illustration is a `View message` a pop-up window of a [multi-message SMS campaign](/user-guide/outreach/campaigns/create-new-campaign#multiple-campaign-messages). You can view the phone number of the recipient, the language of the SMS messages, the number of failures, and the response set and provided in the Campaign configuration. Further, for each message in the multi-message campaign, you can view detailed information on the delivery status along with the reason for failure, if any, the time when the status was updated, and a message preview.

## 

Download reports

Click `Download` in the `Campaign message history` section to download the report. A pop-up message is displayed. Click `Ok` to download the report in a new tab.

**Key point**: The `Download` option now initiates an asynchronous job, facilitating the seamless download of larger campaign reports.

You can use this to get more details on the failed or undelivered messages and the reason for failure for further analysis.

In the downloaded report, apart from all the columns of the recipient list, the following details are available for each recipient:

*   `Campaign :: Recipient Uuid`: Unique identifier for each recipient in the campaign to whom the message is intended. If this is a multi-message campaign, then each message sent to the campaign is a separate row in the downloaded CSV report, however, in such cases, the `Campaign :: Recipient Uuid` remains the same for each message.
    
*   `Campaign :: To Phone`: The recipient's phone number. Applicable for SMS, C-IVR, and Custom Channel.
    
*   `Campaign :: To Email`: The recipient's email. Applicable for MS Teams and Custom Channel.
    
*   `Campaign :: Channel`: The campaign channel used for delivering the campaign message.
    
*   `Campaign :: Delivery Status`: Delivery status of the campaign message. See [Delivery status](/user-guide/outreach/campaign-statistics#delivery-status), for more information.
    
*   `Campaign :: Failed Reason`: Reason for failed delivery of campaign message to the recipient, if any. See [Error status](/user-guide/outreach/campaign-statistics#error-status), for more information.
    
*   `Campaign :: Sent At (UTC)`: UTC time when the campaign to the recipient was triggered.
    
*   `Campaign :: Response`: Name of the response set if configured for the campaign message. See [Create new campaign](/user-guide/outreach/campaigns/create-new-campaign#response-sets), for more information.
    

## 

Delivery status

Note the following campaign delivery status mapping for each channel:

Status

Description

Applicable channels

Sent

Request has been initiated successfully.

SMS

C-IVR

MS Teams

Custom channel

Failed

The recipient is filtered out or failed to send the request to the recipient since the email or phone number was not available.

For C-IVR, failed status is returned even when the user declines the call.

Check the [Error status](/user-guide/outreach/campaign-statistics#error-status) of the corresponding record for more information.

SMS

C-IVR

MS Teams

Custom channel

Pending

Status is pending when the recipient was engaged in another call at the same time when the campaign was triggered. The campaign message is later updated to Delivered, Undelivered, Failed when the recipient line is again available for usage.

C-IVR

Delivered

The message is successfully delivered to the recipient

SMS

C-IVR

Custom channel

Undelivered

Unable to deliver the message to the recipient.

Check the [Error status](/user-guide/outreach/campaign-statistics#error-status) of the corresponding record for more information.

SMS

C-IVR

Custom channel

Queued

Received the request, but the recipient is waiting in queue to process it.

MS Teams

Installed

Triggered the installation of the MS teams app to the recipient, waiting to send the campaign message.

MS Teams

## 

Error status

When there is a message failure and you have used SMS as the delivery channel for your campaign, then the following error can be returned when the SMS was not successfully sent to the recipient. You can refer to the specific error to check the possible causes and recommended ways to resolve the error:

1.  [SMS send rate limit exceeded](/user-guide/outreach/campaign-statistics#1.-sms-send-rate-limit-exceeded)
    
2.  [Permission to send an SMS has not been enabled for the region indicated by the 'To' number](/user-guide/outreach/campaign-statistics#2.-permission-to-send-an-sms-has-not-been-enabled-for-the-region-indicated-by-the-to-number)
    
3.  [Attempt to send to unsubscribed recipient](/user-guide/outreach/campaign-statistics#3.-attempt-to-send-to-an-unsubscribed-recipient)
    
4.  [This 'From' number has exceeded the maximum number of queued messages](/user-guide/outreach/campaign-statistics#4.-this-from-number-has-exceeded-the-maximum-number-of-queued-messages)
    
5.  ['To' number is not a valid mobile number](/user-guide/outreach/campaign-statistics#5.-to-number-is-not-a-valid-mobile-number)
    
6.  [Queue overflow](/user-guide/outreach/campaign-statistics#6.-queue-overflow)
    
7.  [Account suspended](/user-guide/outreach/campaign-statistics#7.-account-suspended)
    
8.  [Unreachable destination handset](/user-guide/outreach/campaign-statistics#8.-unreachable-destination-handset)
    
9.  [Message blocked](/user-guide/outreach/campaign-statistics#9.-message-blocked)
    
10.  [Message Delivery - Unknown destination handset](/user-guide/outreach/campaign-statistics#10.-message-delivery-unknown-destination-handset)
     
11.  [Landline or unreachable carrier](/user-guide/outreach/campaign-statistics#11.-landline-or-unreachable-carrier)
     
12.  [Message filtered](/user-guide/outreach/campaign-statistics#12.-message-filtered)
     
13.  [Message Delivery - Unknown error](/user-guide/outreach/campaign-statistics#13.-message-delivery-unknown-error)
     
14.  [Carrier network congestion](/user-guide/outreach/campaign-statistics#14.-carrier-network-congestion)
     
15.  [Content size exceeds carrier limit](/user-guide/outreach/campaign-statistics#15.-content-size-exceeds-carrier-limit)
     
16.  [Invalid message recipient](/user-guide/outreach/campaign-statistics#16.-invalid-message-recipient)
     
17.  [Channels message cannot have same From and To](/user-guide/outreach/campaign-statistics#17.-channels-message-cannot-have-same-from-and-to)
     

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

## Source: https://docs.avaamo.com/user-guide/outreach/campaign-faqs

This article lists a few frequently asked questions related to the Outreach Campaign:

### 

1\. Unable to view the Outreach option in my dashboard?

Ensure that you have appropriate permission to view the campaign option. See [Campaign permissions](/user-guide/outreach/before-you-begin#campaign-permissions), for more information.

Contact your Admin user with the Settings role to provide the required access or contact support for further assistance.

### 

2\. Why did the campaign SMS not get delivered?

A campaign SMS can fail to send the message due to several reasons. The **Campaign statistics** page provides a data summary of the campaign sent out to users. In the message history, you can click the help icon to view the specific reason for message failure for a recipient. See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

### 

3\. How can we find all the messages sent to a specific recipient?

You can view all the messages sent to a specific recipient on the Conversation history page in the **Campaign statistics** page. In the Campaign messaging history, click the arrow icon against the recipient and navigate to the [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history) page to check the conversation in more detail.

See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

### 

4\. How do I troubleshoot errors with the Outreach APIs?

*   Check if the API is working in any third-party tool such as Postman.
    
*   Check the signature, parameters, and headers of the API.
    
*   See the following Outreach APIs, for more information:
    
    *   [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)
        
    *   [Outreach Changelog API](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api)
        
    *   [SMS Reporting API](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api)
        
    *   [SMS Opt status API](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api)
        
    
*   If an error persists, contact Avaamo Support with further details.
    

### 

5\. How do I troubleshoot Campaign errors?

*   For SMS Gateway -> Use the System logs (from where APIs are called), phone number, time, SMS status reports, or SMS reporting API.
    
*   Outreach -> [Campaign statistics](/user-guide/outreach/campaign-statistics) and [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)

---

## Source: https://docs.avaamo.com/user-guide/outreach/outreach-rest-apis

[Outreach insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)[Outreach Changelog API](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api)[SMS Opt status API](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api)[Status Callback URL (Outreach Custom Channel)](/user-guide/outreach/outreach-rest-apis/status-callback-url-outreach-custom-channel)

---

## Source: https://docs.avaamo.com/user-guide/outreach/outreach-rest-apis/outreach-insights-api

## 

Get campaign insights

`GET` `https://cx.avaamo.com/api/v2/campaigns/insights`

Get a closer look at the user conversations with the campaign. You can use this API for debugging and reporting purposes. See [Campaigns](/user-guide/outreach/campaigns), for more information.

#### 

Query Parameters

Name

Type

Description

conversation\_uuid

String

Conversation identifier of the communication between campaign and the recipient. Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

You can get the conversation identifier from the [Conversation history URL](/user-guide/how-to/build-agents/debug-agents#using-conversation-history) or from the [Get Messages API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages) of the agent that is linked to the campaign.

`Example: conversation_uuid=17xxxxxxxx`

delivery\_channel

array

Channel in which the campaign message was delivered. Possible values: sms, voice, ms\_teams

`Example:`

`delivery_channel=sms`

start\_time

number

Timestamp from which the records are fetched.

The default value is the last three days from the specified `end_time` value.

Specify in UNIX Epoch Timestamp.

The Outreach Insights API allows you to retrieve data for the last 6 months. If the `start_time` specified in the data request exceeds this 6-month limit, the system automatically adjusts `start_time` to the maximum allowable range of the past 6 months.

end\_time

number

Timestamp until which the records are fetched. The default value is the current timestamp.

Specify in UNIX Epoch Timestamp in milliseconds.

page

integer

Page from which the entries must be fetched. Default: 1.

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

language

String

Language of the campaign message. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.

`Example 1:`

`language[]=en-US`

`Example 2:`

`language[]=en-US&language[]=hi-IN`

message\_uuid

String

Message identifier in the campaign conversation. Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

You can get the message identifier from the API response itself or from the [Get Messages API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages) of the agent that is linked to the campaign.

`Example: message_uuid=bc12xxxxxxxx`

execution\_id

integer

Identifier of a campaign run. You can get the `execution_id` from the API response itself.

`Example: execution_id=2x`

campaign\_id

integer

Campaign identifier. You can get the campaign identifier from the campaign URL.

`Example 1: campaign_id=17x`

`Example 2: campaign_id=13x, 45x`

to\_phone

String

The recipient's phone number to which the campaign message was sent.

Valid for SMS and Voice campaigns. Ensure that the value is URL encoded.

`Example: to_phone=222xxx5678`

from\_phone

String

The phone number from which the campaign message was sent to the recipients.

Valid for SMS and Voice campaigns. Ensure that the value is URL encoded.

`Example: from_phone=444666xxxx`

filter\_id

integer

Filter identifier that was applied for delivering the campaign message. You can specify multiple filters using a comma-separated list.

You can get the filter identifier from the campaign filter URL. See [Filters](/user-guide/outreach/filters), for more information.

`Example 1: filter_id=5x`

`Example 2: filter_id=5x,2x`

agent\_id

integer

Agent identifier. Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

You can get the agent identifier from the agent URL.

`Example: agent_id=17x`

response\_set\_id

integer

Response set identifier that was picked for delivering the campaign message. You can get the response set identifier from the API response itself. See [Response sets](/user-guide/outreach/campaigns/create-new-campaign#response-sets), for more information.

`Example: response_set_id=17x`

delivery\_status

String

Delivery status of the campaign message. Possible values: sent, failed, skipped, delivered, undelivered.

See [Campaign delivery status](/user-guide/outreach/outreach-rest-apis/outreach-insights-api#campaign-delivery-status), for more information.

`delivery_status[]=failed`

channel\_id

integer

Channel identifier. You must specify

`delivery_channel` query parameter to use `channel_id` in the query parameter.

You can get the response set identifier from the API response itself. Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

`Example: channel_id=5xx`

to\_email

String

The recipient's email to which the campaign message was sent.

Valid for MS Teams campaign. Ensure that the value is URL encoded.

`Example: to_email=john%40avaamo.com%0A`

recipient\_uuid

String

Unique identifier for each recipient. For multi-message campaign, the recipient\_uuid remains the same for each message in the multi-message list when sent to the same recipient. You can get the `recipient_uuid` from the API response itself.

`Example: recipient_uuid=bc12xxxxxxx`

user\[<<user\_properties>>\]

Array

[User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties) such as first name, last name `Example 1: user[first_name]=Mike`

`Example 2: user[last_name]=Bob`

`Example 3: user[first_name]=Mike&user[last_name]=Bob`

error\_code

String

Indicates the code for the error that occurred when delivering the campaign message to the corresponding recipient. You can get the `error_code` from the API [response](/user-guide/outreach/outreach-rest-apis/outreach-insights-api#entries) itself. `Example: error_code=AVM01, AVM02`

#### 

Headers

Name

Type

Description

access-token\*

String

The user access token. This API gets the insights of all the campaigns from the account the user is associated with.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

200 Successful request

**Notes**:

*   For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.
    
*   You can retrieve data from the Outreach Insights API for up to the past 6 months from the current date of access.
    
*   If the same user appears in multiple campaigns with the same primary header, the insights override the attributes from different CSV files, showing the most recent attributes in the latest insights.
    

### 

Campaign delivery status

Note the following campaign delivery status mapping for each channel:

Status

Description

Applicable channels

Sent

Request has been initiated successfully.

SMS

C-IVR

MS Teams

Custom channel

Failed

The recipient is filtered out or failed to send the request to the recipient since the email or phone number was not available.

For C-IVR, failed status is returned even when the user declines the call.

Check the [Error status](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#error-status) of the corresponding record for more information.

SMS

C-IVR

MS Teams

Custom channel

Pending

Status is pending when the recipient was engaged in another call at the same time when the campaign was triggered. The campaign message is later updated to Delivered, Undelivered, Failed when the recipient line is again available for usage.

C-IVR

Delivered

The message is successfully delivered to the recipient

SMS

C-IVR

Custom channel

Undelivered

Unable to deliver the message to the recipient.

Check the [Error status](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api#error-status) of the corresponding record for more information.

SMS

C-IVR

Custom channel

Queued

Received the request, but the recipient is waiting in queue to process it.

MS Teams

Installed

Triggered the installation of the MS teams app to the recipient, waiting to send the campaign message.

MS Teams

### 

Code request snippets

cURL

node.js

### 

Response attributes

The following is a sample response of a successful Outreach insights API request:

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

[entries](/user-guide/outreach/outreach-rest-apis/outreach-insights-api#entries)

Indicates an array of insights fetched across all the campaigns of an account.

Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

entries

Indicates an array of insights fetched across all the campaigns of an account. Each array contains the following attributes:

Attribute

Description

Type

id

Indicates an identifier of each insight entry. This is for internal purposes only.

Integer

recipient\_uuid

Unique identifier for each recipient. For multi-message campaign, the recipient\_uuid remains the same for each message in the multi-message list when sent to the same recipient.

String

delivery\_status

Indicates the delivery status of the campaign message. Possible values: sent, failed, skipped, delivered, undelivered.

See [Campaign delivery status](/user-guide/outreach/outreach-rest-apis/outreach-insights-api#campaign-delivery-status), for more information.

String

to\_phone

Indicates the recipient's phone number to which the campaign message was sent.

Valid and returned only for SMS and Voice campaigns.

String

to\_email

Indicates the recipient's email to which the campaign message was sent.

Valid and returned only for MS Teams campaign.

String

language

Indicates the language of the campaign message. See [Language-specific messages](/user-guide/outreach/campaigns/create-new-campaign#language-specific-messages), for more information.

String

execution

Indicates the identifier of a campaign run.

Integer

delivery\_channel

Indicates the channel in which the campaign message was delivered. Possible values: sms, voice, ms\_teams

String

from\_phone

Indicates the phone number from which the campaign message was sent to the recipients.

Valid for SMS and Voice campaigns. from\_phone is null for MS Teams campaigns.

String

filters

Indicates an array of filters that were applied for delivering the campaign message. Each filter array contains the identifier, the name of the filter, and if the filter was matched or not.

See [Filters](/user-guide/outreach/filters), for more information.

Array of JSON key-value pairs

response\_set

Indicates the response set that was picked for delivering the campaign message. The response set contains the identifier and name of the response set.

See [Response sets](/user-guide/outreach/campaigns/create-new-campaign#response-sets), for more information.

JSON key-value pairs

created\_at

Indicates the timestamp of when the insight was created in seconds.

UNIX epoch timestamp

user

Indicates any additional user properties fetched in the campaign insights.

**Example**:

"user": {

"phone": " 1 972 913 xxx",

"email": "john.miller@avaamo.com", "first\_name": "John",

"last\_name": "Miller"

}

JSON key-value pairs

content

Indicates the content of the campaign message.

String

conversation\_uuid

Indicates the conversation identifier of the communication between the campaign and the recipient.

Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

String

message\_uuid

Indicates the message identifier in the campaign conversation. A conversation can have multiple messages and each message has an identifier to uniquely identify the message in the conversation.

Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

String

campaign

Indicates the campaign details such as the identifier and name of the campaign.

JSON key-value pairs

agent

Indicates the agent details such as the identifier, name, and channel details of the agent.

Valid when the campaign is linked to an agent for two-way communication. See [Link to Avaamo agent](/user-guide/outreach/campaigns/create-new-campaign#link-to-avaamo-agent-two-way-communication), for more information.

JSON key-value pairs

error

Indicates the error that occurred when delivering the campaign message to the corresponding recipient. This is available only when the `delivery_status` is either failed or skipped.

String

error\_code

Indicates the code for the error that occurred when delivering the campaign message to the corresponding recipient.

String

### 

Examples

The following table lists a few sample use cases with query parameters:

Use case

Query parameter

Get insights of campaigns using multiple campaign IDs

`https://cx.avaamo.com/api/v2/campaigns/insights?campaign_id=12xx,56xx`

Get insights specific to a channel and delivery status

`https://cx.avaamo.com/api/v2/campaigns/insights?delivery_channel=ms_teams&delivery_status=failed`

Get insights using user properties

`https://cx.avaamo.com/api/v2/campaigns/insights?campaign_id=6xx, 6xx&user[first_name]=Mike&user[last_name]=Bob`

Get insights using error codes

`https://cx.avaamo.com/api/v2/campaigns/insights?error_code=AVM1015, AVM1010, AVM1001`

---

## Source: https://docs.avaamo.com/user-guide/outreach/outreach-rest-apis/outreach-changelog-api

## 

Get outreach changelog

`GET` `https://cx.avaamo.com/api/v2/outreach/change_logs.json`

Outreach campaigns go through several changes by different users in their life cycles. You can use the Outreach Changelog API to get a list of changes made to all the campaigns of an account.

#### 

Query Parameters

Name

Type

Description

start\_time

number

Timestamp from which the records are fetched.

If you specify timetoken and not end\_time, then the latest 5 entries up to the specified timetoken are fetched.

Specify UNIX Epoch Timestamp in milliseconds.

end\_time

number

Timestamp until which the records are fetched. Default is the current timestamp.

Specify UNIX Epoch Timestamp in milliseconds.

page

integer

Page from which the entries must be fetched. Default: 1

per\_page

integer

Number of entries fetched per page. Default: 25 Maximum value: 100

actions

String

Actions in an campaign for which you wish to get changelog.

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

User access token. This API gets the changelog of all the campaigns from the account the user is associated with.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least view permission on the campaign. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

200 Consider that you wish to get the latest change log from the agent. Use GET method and specify the URL https://cx.avaamo.com/dashboard/change\_logs?agent\_id= <<agent\_id>>&per\_page=1. The following is a sample JSON response returned:

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 1916,
        "total_pages": 1916,
        "time_token": 1676971459.482645,
        "entries": [
            {
                "id": 1707596,
                "resource": {
                    "id": 30,
                    "type": "Outreach::Template"
                },
                "action": "create",
                "changelog": "John Miller created template 'Vaccination test template'",
                "timestamp": 1676967911,
                "dashboard_user": {
                    "id": 368,
                    "display_name": "John Miller",
                    "email": "john@mycompany.com"
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

The following is a sample response of a successful API request:

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

Indicates the total number of entries in the campaign changelog.

Integer

total\_pages

Indicates the total number of pages calculated using per\_page. Note that total\_entries = per\_page \* total\_pages

Integer

time\_token

Indicates the timestamp at which the API response is returned in seconds.

UNIX epoch timestamp

[entries](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api#entries)

Indicates an array of change logs fetched from the campaign. Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

entries

Indicates an array of change logs fetched from the campaign. Each array contains the following attributes:

Attribute

Description

Type

id

Indicates a unique identifier for the changelog entry.

Integer

resource -> id

Indicates a unique identifier of the resource for which the changelog is listed such as the campaign identifier, recipient list identifier, filter identifier, or template identifier.

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

This is the timestamp when the changes for the campaign are persistent in the database.

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

Get changelogs within a specified period

*   start\_time: Specify the **from** timestamp in epoch format such as 1579149424
    
*   end\_time: Specify the **to** timestamp in epoch format such as 1579149436
    

**Example**: `https://cx.avaamo.com/api/v2/outreach/change_logs.json?start_time=1579149424&end_time=1579149436`

Get changelogs using pagination

*   page: Specify the page from which you wish to fetch records. By default, the value is 1.
    
*   per\_page: Specify the number of entries per page. By default, the value is 5.
    

**Example**:

`https://cx.avaamo.com/api/v2/outreach/change_logs.json?page=5&per_page=2`

Here, per\_page \* total\_pages = total\_entries

Get changelogs of all updated campaign records within a specified period

*   start\_time: Specify the **from** timestamp in epoch format such as 1579149424
    
*   end\_time: Specify the **to** timestamp in epoch format such as 1579149436
    
*   action: Specify **update**
    

**Example**: `https://cx.avaamo.com/api/v2/outreach/change_logs.json?start_time=1579149424&end_time=1579149436&actions=update`

---

## Source: https://docs.avaamo.com/user-guide/outreach/outreach-rest-apis/sms-opt-status-api

## 

Gets a list of Opt SMS status of the recipient numbers that have explicitly opted-in or opted-out across all the campaigns of an account

`GET` `https://cx.avaamo.com/api/v2/sms/opt-status.json`

By default, all the recipients are considered as opted-in to receive campaign messages, unless the recipients have explicitly opted out of the campaign. See [Opting out of campaign](/user-guide/outreach/campaigns/opting-out-of-campaign), for more information. To optimize the cost and to respect the user's privacy of opting out, it is useful to get a list of all such opted-out recipients before sending any campaign message.

#### 

Query Parameters

Name

Type

Description

to\_phone

String

The recipient's phone number to which the SMS was sent. Ensure that the value is URL encoded.

from\_phone

String

The phone number from which the SMS was sent to the recipients.

Ensure that the value is URL encoded.

start\_time

Number

Timestamp from which the records are fetched. If you specify `start_time` and not `end_time`, then the latest 3 entries up to the specified timetoken are fetched.

Specify in UNIX Epoch Timestamp in milliseconds.

status

String

The opt-status of the recipient's phone number at the time the record was created.

Note that this is useful when the same recipient's phone number has opted-out and opted-in multiple times. In such cases, the same recipient phone number can have multiple entries in the response for each such opt-status and the latest current opt-status.

Supported values: opt-in, opt-out

current\_status

String

Latest opt-status of the recipient's phone number.

Supported values: opt-in, opt-out

end\_time

Number

Timestamp until which the records are fetched. The default value is the current timestamp.

Specify in UNIX Epoch Timestamp in milliseconds.

page

integer

Page from which the entries must be fetched.

Default: 1

per\_page

integer

Number of entries fetched per page.

Default: 25

Maximum value: 100

#### 

Headers

Name

Type

Description

access-token\*

String

The user access token. This API gets the opt-status of all the recipient phone number's that have explicitly opted-in or opted-out from the account the user is associated with.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

200: OK Successful request

Copy

    {
        "current_page": 1,
        "per_page": 1,
        "total_entries": 9,
        "total_pages": 5,
        "time_token": 1675410047.186922,
        "entries": [
            {
                "to_phone": "+12929929902",
                "from_phone": "+19090909090",
                "created_at": "<<timestamp>>",
                "status": "opt-out",
                "current_status": "opt-out"
            }
        ]
    }
    

**Note**: For optimal API performance, the recommended time duration for fetching data from any of the REST APIs that support a date range or time period is 7 days.

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample response of a successful SMS Opt Status API request:

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

[entries](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api#entries)

Indicates an array of SMS message details fetched across all the campaigns of an account.

Number of entries in the array = Number specified in per\_page parameter.

JSON key-value pairs

#### 

entries

Indicates an array of SMS message details fetched across all the campaigns of an account. Each array contains the following attributes:

Attribute

Description

Type

from\_phone

Indicates the number from which the SMS was sent.

String

to\_phone

Indicates the number to which the SMS was sent.

String

created\_at

Indicates the timestamp of when the request was received by the carrier.

Note that "carrier" here, indicates the service responsible for delivering the SMS to the desired recipient.

UNIX epoch timestamp

status

Indicates the opt-status of the `to_phone` number at the time the record was created.

Note that this is useful when the same recipient's phone number has opted-out and opted-in multiple times. In such cases, the same recipient phone number can have multiple entries in the response for each such opt-status and the latest current opt-status.

Possible values: opt-in, opt-out.

*   **opt-in**: The `to_number` has subscribed to receive SMS from the `from_number`.
    
*   **opt-out**: The `to_number` has unsubscribed to receive SMS from the `from_number`.
    

String

current\_status

Indicates the latest opt-status of the `to_phone` number.

Possible values: opt-in, opt-out.

*   **opt-out**: The `to_number` has unsubscribed to receive SMS from the `from_number`.
    
*   **opt-in**: The `to_number` has subscribed to receive SMS from the `from_number`.
    

String

## 

Examples

The following table lists a few sample use cases with query parameters:

Use case

Query parameter

Get all the opted-out recipient numbers

`https://cx.avaamo.com/api/v2/sms/opt-status?current_status=opt-out`

Get the opt status of a specific recipient number

`https://cx.avaamo.com/api/v2/sms/opt-status?to_phone=%2B1909090909`

---

## Source: https://docs.avaamo.com/user-guide/outreach/outreach-rest-apis/status-callback-url-outreach-custom-channel

## 

Status of the campaign recipient via the custom channel.

`POST` `https://cx.avaamo.com/custom/v1/broadcast/messages/{{recipient_uuid}}/status`

The callback URL used by the campaign middleware component to send the status of the campaign recipient when a campaign is triggered via the custom channel. See [Campaign in Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel), for more information.

You can also use PUT instead of POST request

#### 

Path Parameters

Name

Type

Description

recipient\_uuid\*

String

Recipient conversation identifier. You can get the recipient\_uuid from the status\_callback\_url parameter in the custom channel payload of the outgoing campaign message. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#payload-details), for more information.

#### 

Headers

Name

Type

Description

Content-Type\*

String

application/JSON

#### 

Request Body

Name

Type

Description

error\_message

String

The error message, if any. The error message is considered only when the error code is not mentioned, else the standard error message corresponding to the error code is used or the error message is set to "Unknown error".

error\_code

Integer

The error code of the campaign message.

status\*

String

Status of the campaign message. Possible values are - sent, failed, delivered, undelivered, skipped.

When a campaign message is sent, the initial status is set as "sent".

200 Successful request

Copy

    {
        "success": true
    }

### 

Code request snippets

cURL

node.js

---
