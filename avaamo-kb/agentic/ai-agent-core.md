# AI Agent — Core (Create / Configure / Debug / Monitor)
> 47 pages

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/overview-key-features

The `AI Agent` is a next-generation agent built to power highly intelligent and dynamic voice or text-based conversations. With advanced context awareness and adaptive response capabilities, AI Agents elevate query handling and user engagement—delivering interactions that feel more natural, intuitive, and human-like than ever before.

With AI agents a new type of skill - `Prompt skills` is also introduced in this release. Powered by prompt skills, these agents are designed to understand, reason, and act – independently and effectively.

There is no need for extensive training, as required with Classic agents. Instead, you can define all instructions using the [Prompt Skill](/user-guide/ai-agent/skills/prompt-skill), significantly reducing the time needed to build a skill. Along with prompts, you can build complex scenarios using built-in functions, and customized functions.

You can create multiple prompt skills, and the agent can seamlessly redirect interactions from one skill to another based on user queries, ensuring a smooth and dynamic conversation flow.

## 

Sneak peek

Here's a quick sneak peek at the AI agent:

**Note**: AI agent is enabled on demand. Contact your dedicated Customer Success Manager for further assistance.

On the home page, an `AI Agent` can be easily identified and distinguished from other agents by its unique icon, which includes a small logo within it.

This article outlines the [key features](/user-guide/ai-agent/overview-key-features#key-features) of AI agents and the [next steps](/user-guide/ai-agent/overview-key-features#next-steps) to leverage these agents in the Avaamo Conversational AI Platform.

## 

Key features

### 

**Natural and dynamic conversations**

Unlike traditional structured flows, an AI agent enables real-time, human-like interactions with flexibility in conversation order, emotional intelligence, and natural responsiveness to user inputs.

The examples below demonstrate how the AI agent embodies these qualities, offering a more dynamic experience compared to the Classic agent (formerly known as the Standard agent).

AI agent flow

Classic agent

### 

Autonomous decision-making

The AI Agent can make decisions based on predefined goals and contextual data without human intervention. It dynamically adjusts its actions based on real-time inputs and past interactions.

The examples below illustrate how the AI agent adapts its actions based on real-time inputs and makes intelligent decisions aligned with predefined goals.

Example 1

Example 2

### 

Seamless Skill Transfer

The AI agent can seamlessly transfer conversations between different skills while maintaining context, ensuring a smooth and uninterrupted user experience. Using predefined functions, the agent intelligently hands off tasks — for example, moving from general assistance to specialized hotel booking.

This capability allows the AI agent to manage complex workflows efficiently, guiding users through multiple services without manual intervention or loss of conversation flow.

### 

**Multimodal Interaction**

The AI Agent supports `voice and text-based interactions`, providing users with a seamless conversational experience.

*   **Voice Interaction:** Offers a human-like conversation experience, making interactions more natural and engaging.
    

*   **Text Interaction:** Provides structured responses in a chat format, ensuring clarity and consistency.
    

### 

**Smart Integration with LLaMB**

The AI agent integrates seamlessly with LLaMB to enable smooth context transfer and adaptive automation. This integration allows the agent to carry forward user context across interactions and leverage LLaMB's advanced capabilities to automate responses and actions dynamically. As a result, users experience more accurate, relevant, and efficient assistance, even as conversations shift across topics or tasks.

### 

**Context-aware responses**

The AI Agent dynamically adapts to user inputs using predefined `prompt skills`, eliminating the need for a fixed question-answer sequence.

Users can **edit or change their inputs at any moment** without restarting the conversation.

For example, while booking a flight, if a user mistakenly enters the wrong **destination**, they can **correct it mid-conversation** without restarting the process.

### 

**Enhanced query handling**

The AI Agent efficiently manages **multi-turn and complex queries**, allowing seamless transitions between different tasks.

It switches between prompt skills effortlessly to answer related questions.

For example, if a user is booking a flight but suddenly wants to check their past booking details, they can do so without disrupting the current flow—simply by asking about past bookings.

### 

**Comprehensive conversation logging**

The system records complete conversation history, including user-agent interactions, function calls with parameters, transcripts, and corresponding audio recordings for reference.

### 

**Cost efficiency - Build agents faster**

AI agents are cost-efficient, require no training, and eliminate the need for complex dialog flows. They enable faster development and quick iteration, allowing teams to experiment and refine results easily through prompt adjustments.

### 

**No-Code/Low-Code**

Prompts enable non-technical users to interact with AI systems effectively, eliminating the need to write code.

### 

**Fluid Conversation**

AI agents maintain natural, flowing conversations without sounding robotic. They understand context across turns, enabling users to speak freely without rigid commands.

### 

**Follow-On**

Agents can ask for and remember key follow-up information—like your location or preferred provider—right after initial intent is captured, helping personalize and complete the task.

### 

**Switch Topic Mid-Conversation**

Users can change topics on the conversation—for example, asking about a service or trying a demo before booking an appointment. The agent can seamlessly switch focus without losing the overall context.

### 

**Agent Callback**

When the AI agent can not resolve an issue, it can collect necessary details and schedule a callback from a human agent, ensuring continuity and a smooth handoff.

### 

**Interruption**

Users can interrupt the AI agent mid-response (e.g., “Actually, never mind”) and the agent stops and adjusts based on the new input, instead of continuing its scripted response.

### 

**Silence**

AI agents can handle user silence smartly, either pausing to wait for input or gently prompting the user to resume the interaction after a certain time.

### 

**Try to break it**

Even if users try to confuse or “break” the agent with odd inputs or edge cases, the agent follows enterprise guardrails to stay on task, stay secure, and avoid hallucinations or inappropriate responses.

### 

**Detect Frustration**

By picking up signals like repeated inputs, negative language, or abrupt changes in tone, the AI can detect user frustration and adapt by simplifying, escalating, or offering human support.

## 

Next steps

*   Understand what is required in the [Before you begin](/user-guide/ai-agent/before-you-begin) section.
    
*   Start by creating a new [AI agent](/user-guide/ai-agent/create-an-ai-agent).
    
*   You are now ready to [get started](/user-guide/ai-agent/get-started) by exploring AI agents in the Avaamo Conversational AI Platform.
    

Refer [AI Agent](/user-guide/ai-agent/overview-key-features), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/before-you-begin

Ensure that the following prerequisites are met before using the AI agent in the Avaamo Conversational AI Platform :

1.  [License to use AI agent](/user-guide/ai-agent/before-you-begin#id-1.-license)
    
2.  [Know the supported deployment channels](/user-guide/ai-agent/before-you-begin#id-3.-deployment-channels)
    
3.  [Know the supported languages](/user-guide/ai-agent/before-you-begin#id-4.-supported-language)
    

### 

1\. License

AI agents are enabled on demand. Contact your dedicated Customer Success Manager for further assistance in enabling AI agents in your account.

### 

2\. Deployment channels

AI agents can be deployed in the following channels:

*   [Web](/user-guide/ai-agent/configuration/channels/web-enabled-by-default)
    
*   [MS Teams](/user-guide/ai-agent/configuration/channels/microsoft-teams-ms-teams)
    
*   [IVR](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone)
    
*   [SIP](/user-guide/ai-agent/configuration/channels/sip)
    
*   [Webex](/user-guide/ai-agent/configuration/channels/webex)
    
*   [SMS](/user-guide/ai-agent/configuration/channels/sms)
    
*   [MCP](/user-guide/ai-agent/configuration/channels/mcp)
    

### 

3\. Supported languages

AI agents support all [platform-supported](/user-guide/overview-and-concepts/advanced-concepts/language-pack#supported-languages) languages.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/create-an-ai-agent

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).

Consider that you need to build a **ticket booking agent** for **Galaxy Cinemas**, a movie theater where customers can book tickets and select their seats online.

In the Avaamo Platform UI, click the `Agents` option in the top menu, navigate to the `Development` tab, and select `AI Agent` under `Create`**.**

Specify the `Agent name, Agent description`and `Agent avatar` for the `AI agent`.

Parameters

Description

Agent name

Indicates the name of the agent. As you promote the agent to different stages in the life cycle (Testing, Staging, and Production), this name is used to identify the agent in the different stages.

Agent description

Indicates the description of the agent. Use this to specify the purpose of the agent.

Agent avatar

Indicates the avatar used for identifying the agent. Browse and choose your avatar image. Agent avatar file name must be in UTF-8 format.

\- Recommended image types: PNG, JPEG - Recommended image size: 200px \* 200px

On the home page, an `AI Agent` can be easily identified and distinguished from other agents by its unique icon, which includes a small logo within it.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/get-started

Once you have created an **AI Agent**, follow these steps to configure and build it effectively.

### 

[**Add Skills**](/user-guide/ai-agent/skills)

In this step, you define the **actions** your agent should perform by adding skills. You can choose from two types of skills:

*   [Prompt skill](/user-guide/ai-agent/skills/prompt-skill) – Uses predefined prompts to generate responses.
    
*   [Knowledge skill](/user-guide/ai-agent/skills/knowledge-skill) – Leverages LLaMB capabilities for advanced AI-driven interactions.
    
*   [Dialog skill](/user-guide/ai-agent/skills/dialog-skill) – Use this skill to build a multi-step conversational flow.
    

### 

[**Configuration**](/user-guide/ai-agent/configuration)

This step allows you to set up additional configurations to **enhance the functionality** of your AI agents. Advanced settings help fine-tune the agent's behavior and responses for a more optimized experience.

### 

[**Debug**](/user-guide/ai-agent/debug)

In the **Debug** step, you review the data stored by the skill and analyze logs generated from your JavaScript code. This helps in identifying and fixing any issues in the agent's functionality.

### 

[**Test**](/user-guide/ai-agent/test)

Finally, you use the **Simulator** to test your skill with different `sample queries`. This ensures that your agent behaves as expected and provides accurate responses before deployment.

You can test using either the `AI Agent` or `Classic Agent` types. In the `AI Agent` testing mode, a mobile screen-style widget is displayed, allowing users to interact with the agent in a conversational interface.

In the `Classic Agent` testing mode, the traditional agent widget is shown. You can click on it to start the conversation.

Refer [Test channel settings](/user-guide/ai-agent/configuration/channels/web-enabled-by-default#test-channel-settings), for detailed information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration

[Channels](/user-guide/ai-agent/configuration/channels)[Environment variables](/user-guide/ai-agent/configuration/environment-variables)[JS files](/user-guide/ai-agent/configuration/js-files)[Language](/user-guide/ai-agent/configuration/language)[Live agent](/user-guide/ai-agent/configuration/live-agent)[Permissions](/user-guide/ai-agent/configuration/permissions)[Persistent menu](/user-guide/ai-agent/configuration/persistent-menu)[Response filters](/user-guide/ai-agent/configuration/response-filters)[Settings](/user-guide/ai-agent/configuration/settings)[Tags](/user-guide/ai-agent/configuration/tags)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels

[Web (Enabled by default)](/user-guide/ai-agent/configuration/channels/web-enabled-by-default)[Microsoft Teams (MS Teams)](/user-guide/ai-agent/configuration/channels/microsoft-teams-ms-teams)[SIP](/user-guide/ai-agent/configuration/channels/sip)[Conversational IVR (C-IVR) or Phone](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone)[Webex](/user-guide/ai-agent/configuration/channels/webex)[SMS](/user-guide/ai-agent/configuration/channels/sms)[MCP](/user-guide/ai-agent/configuration/channels/mcp)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/web-enabled-by-default

Web channel comes with many configuration options that make configuring and deploying your agent in the web channels easier.

**To configure a web channel:**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   By default, a web channel is always enabled. On the Channels page, click **View** in the Web Channel.
    

*   Specify the Channel name, Channel description, and other required details in each section of the Web channel configuration based on your business requirements:
    
    *   [Channel details](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/channel-details): Provide channel name, and description, and enable or disable channel as required.
        
    *   [Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme): Customize the look and feel of the agent widget.
        
    *   [Agent widget configuration](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration): Configure various customizable parameters such as default locale, user name, and scroll behavior (to name a few) for your agent widget.
        
    *   [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/voice): Enable a voice assistant to your web channel that can engage the users in intelligent conversations by understanding and interpreting the dialects and accents of the users.
        
    *   [Deployment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deployment): Provides you a script to embed in the website source code for rendering the agent.
        
    *   [AI Agent](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/ai-agent): Provides you a script to embed in the website source code for rendering the agent.
        
    *   [Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security): Configure authentication mechanisms for your agent.
        
    *   [Advanced](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced): Provide any other additional customizable parameters and configure auto-complete URL.
        
    *   [UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat): For UAT users, add UAT queries and perform testing on the agent before deploying the agent to production. The UAT option is available in the Web channel only when LLaMB is enabled for your account. See [LLaMB](/user-guide/llamb/overview-key-features), for more information.
        
    
*   Click **Save** and click **Test** to test the web channel.
    
*   A test link is displayed in the new window. Click the agent icon to test. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    
*   After you configure web channel settings, you can also view, edit, disconnect, and delete web channel settings as per your requirements. See [Manage web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/manage-web-channel), for more information.
    
*   You can also deploy your agent through multiple instances of web channels simultaneously. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.
    

**Key Points:**

*   Each section also includes "Learn more" links that point to relevant topics in the documentation for further reading and understanding.
    
*   You can set many of these parameters from the UI or using [customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#customization-parameters). However, setting a parameter in the customization parameters section always takes precedence over the value set in the UI.
    

## 

Test channel settings

**Note:** You must have at least one skill configured to test your agent.

There are two types of testing for AI agents as it supports `Voice` and `Text` types of conversation.

1.  After you save your web channel configuration settings, click `Test` and select `AI Agent`**.**
    
    *   A new tab will open, displaying the agent name, details, and instructions you provided during the agent creation process. Refer [Create an AI agent](/user-guide/ai-agent/create-an-ai-agent), for more information.
        
    *   You can view a demo view of the agent, presented in a mobile-like interface, featuring your agent's avatar.
        
    *   Ensure that you have made the agent publically accessible in the Channel configuration.
        
    *   To test the interactions:
        
        *   Click **Voice** to test voice conversations.
            
        *   Click **Text** to test text-based conversations.
            
        
    

1.  After you save your web channel configuration settings, click `Test` and select `Classic Agent`**.**
    

*   In a new tab, a sample code and demo agent are displayed.
    
*   Ensure that you have made the agent publically accessible in the Channel configuration.
    
*   For local debugging, create a sample HTML page and host it locally using apache or Node.js's http-server or any other appropriate option. See [https://www.npmjs.com/package/http-server#installation](https://www.npmjs.com/package/http-server#installation), if you wish to explore the node-js approach.
    

**Note**: In the chatbot URL, the parameters **demo=true** and **action=demo** are used for internal purposes only.

## 

Embed your agent in iFrame

After you save your web channel configuration settings, click **Test.**

*   Copy the URL displayed in the browser.
    
*   In the URL, update demo.html to channel.html and include the URL in your iFrame source. The following is a sample HTML code:

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/microsoft-teams-ms-teams

**Microsoft Teams** is a proprietary business communication platform developed by [Microsoft](https://en.wikipedia.org/wiki/Microsoft), as part of the [Microsoft 365](https://en.wikipedia.org/wiki/Microsoft_365) family of products. Microsoft Teams is a chat-based collaboration platform that includes document sharing, online meetings, and numerous other valuable features for business communications.

The agents developed on the Avaamo platform can be deployed on the Microsoft Teams channel.

Refer [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/sip

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

Session Initiation Protocol (SIP) is a means of initiating and sending voice and other unified communications services through the Internet. It is a protocol used to initiate, maintain, and terminate real-time sessions that include voice, video, and messaging applications. See [SIP](https://datatracker.ietf.org/doc/html/rfc3261), for more information.

Agents developed on the Avaamo platform can be deployed to the SIP channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/ai-agent/configuration/channels/sip#before-you-begin)
    
2.  [Deploy your agent in SIP](/user-guide/ai-agent/configuration/channels/sip#deploy-your-agent-in-sip)
    
3.  [Manage channel settings](/user-guide/ai-agent/configuration/channels/sip#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of SIP. You must configure this in the channel settings. See [Deploy your agent in SIP](/user-guide/ai-agent/configuration/channels/sip#deploy-your-agent-in-sip), for more details.
    
*   Avaamo requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Deploy your agent in SIP

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a SIP channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in SIP Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the SIP channel. Note that you can have upto 150 characters in the channel name.

Identifier

Indicates the identifier (or FQDN) of SIP.

Languages

Select the language in the voice or the persona to be used by your agent in the interactive phone conversations with the user.

*   As with any enterprise voice, audio, or video application, each region or country has its own dial-in number. Similarly, in the SIP channel, you select the language for the region or country where you want to share the configured number. If you wish to share the number across multiple regions, set up a SIP channel for each language. Note that a single SIP channel is dedicated to a single language.
    
*   You can select only those languages for which the agent is configured and those that are supported in the SIP channel. If you switch to a language not supported in the SIP channel, the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Enable Noise Filter

When enabled, background noise is filtered out during user input. This improves recognition accuracy by reducing interference from non-speech sounds.

Fallback Forward Configuration

Defines the backup handling flow when the AI agent cannot process the user’s request. The request is forwarded to the specified destination along with the required headers.

Forward Destination

Specifies the phone number to which incoming calls will be forwarded.

Forward Headers

Custom headers to be included while forwarding the request. Headers should be specified in JSON object format.

Enable warmup message

Enables playback of a static message at the start of a phone call to mask call setup latency. After enabling this option, you must specify the message to play. After enabling the toggle, a message input window opens where you can enter up to 255 characters. The configured message is played while the call setup continues in the background.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Allow Barge In

When enabled, callers can interrupt the agent while it is speaking and immediately provide input, without waiting for the response to finish.

Enable Custom User Authentication

Use this if you wish to enable custom authentication for your agents deployed on the phone channels using JavaScript code. See [User authentication handler](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

SIP configuration

Displays the SIP connection details required for configuring the SIP endpoint, including port, data flow encryption type, FQDN, protocol, and domain. It also provides an option to download the SIP certificate for a secure communication setup. Click `Download SIP Certificate` to download a "pem" file of the SIP certificate. This must be used to configure Avaamo Platform SIP details on the customer's side of the call center stack. Note that Avaamo also requires customer source IPs to allow traffic to Its SIP. Send a request to Avaamo Support to whitelist the IP addresses.

Incoming request

Defines the signaling and media security settings used for inbound SIP communication.

SIP signaling

Select the SIP signaling protocol for outbound SIP requests. You can choose between standard SIP or secure SIP over TLS (SIPS).

Media security

Select the media transport security method for audio communication. You can choose between standard RTP or encrypted SRTP for secure audio transmission.

cURL request

Displays a sample cURL request that can be used to initiate a call from the configured SIP channel. This option becomes available after the SIP channel is saved. You can use the channel UUID generated after saving the SIP channel in the [Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api) cURL request.

HTTP request

Displays a sample HTTP API request that can be used to initiate a call from the configured SIP channel. This option becomes available after the SIP channel is saved.

*   Click **Save** to save the SIP channel configuration details.
    
*   After saving, you can view the sample cURL request and HTTP request as shown below.
    

### 

Option available in the SIP conversation flow

Click the transcripts icon to learn more about how your agent interprets the user's responses.

Click the `insights (eye) icon` to view detailed conversation insights, including how the agent interpreted the interaction.

If functions are invoked during the conversation, the `function name and its arguments` are displayed under `tool parameters` for better debugging.

Click the `download option` to save the conversation recording for further analysis.

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone

You can deploy the agents built on the Avaamo Platform into your phone channel. This allows callers to converse naturally with agents via an interactive voice response (IVR) system to achieve the desired results without having to navigate lengthy audio menus. This feature can help to reduce live-agent calls, improve call routing, and provide a good user experience.

After a successful configuration, a phone number is generated in the `Activated phone number` area; this is the number you can use to connect to your agent via the C-IVR channel.

**To configure a C-IVR channel:**

*   In the `Agent` page, navigate to the `Configure` > `Channels` option in the left navigation menu.
    
*   On the Channels page, click `Connect` in the C-IVR Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the C-IVR channel. Note that you can have upto 150 characters in the channel name.

Languages

Select the language and configure the voice or persona your agent will use in interactive phone conversations with the user. Each language has a different set of voice personas that you can choose from.

*   As with any enterprise voice, audio, or video application, each region or country has its phone number to dial. Similarly, in the C-IVR channel, you choose the language of the region or country where you wish to share the configured number. If you wish to share the number across multiple regions, set up a C-IVR channel for each language. Note that one C-IVR channel is specific to only one language.
    
*   You can select only those languages for which the agent is configured and those that are supported in the C-IVR channel. If you have switched to a language not supported in the C-IVR channel, the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Defines how a live agent is invited into the conversation when escalation is required. Supports **Invite** (conference style where the bot stays in the call) or **Refer** (the call is handed over to the agent directly).

Enable Noise Filter

When enabled, background noise is filtered out during user input. This improves recognition accuracy by reducing interference from non-speech sounds.

Fallback Forward Configuration

Defines the backup handling flow when the AI agent cannot process the user’s request. The request is forwarded to the specified destination along with the required headers.

Forward Destination

Specifies the phone number to which incoming calls will be forwarded.

Forward Headers

Custom headers to be included while forwarding the request. Headers should be specified in JSON object format.

Allow Barge In

When enabled, callers can interrupt the agent while it is speaking and immediately provide input, without waiting for the response to finish.

SMS message options

Enable this option and specify a message, if you wish to send an SMS message to the caller when the call gets disconnected and/or when the call is completed. Specify the SMS text message in the respective options as required. Note that a single SMS can have upto 150 characters.

Send an SMS after completion of call

Enable this option and specify a message, if you wish to send an SMS message to the caller when the call is completed. Note that a single SMS can have upto 150 characters. If a call is hung up after a successful dialogue between the user and the agent, that is a user asks a query and the agent responds back to the query, then it is considered as complete.

Send an SMS if call disconnects

Enable this option and specify a message if you wish to send an SMS message to the caller when the call gets disconnected. Note that a single SMS can have up to 150 characters. A call is considered disconnected when the user asks a query and, before the agent's response is received, the call is hung up. This is the case when the user is between conversation flows.

Enable custom user authentication

Use this if you wish to enable custom authentication for your agents deployed on the phone channels using JavaScript code. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

Enable wait time tone

Use this option if you wish to play an idle tone to the user in case the agent is taking a little longer to respond.

Rather than experiencing silence or a lack of input, the introduction of a tone serves to engage the user actively and assures that the agent will respond shortly. For example, the system generates a typing tone when processing DTMF/keypad input.

Select file

Once you enable the wait time tone, the option to upload a file becomes available. You can customize the wait time tone by uploading an audio file that plays an idle tone for the user. The file must not exceed 10 seconds and should be within 5 MB in size.

Click **Select File**, then choose and upload the desired file for the wait time tone.

Enable warmup message

Enables playback of a static message at the start of a phone call to mask call setup latency. After enabling this option, you must specify the message to play. After enabling the toggle, a message input window opens where you can enter up to 255 characters. The configured message is played while the call setup continues in the background.

*   Click `Save` to store the C-IVR channel configuration.
    
    *   Once saved, a phone number is generated in the `Activated phone number` section. Use this number to connect to your agent.
        
    *   Once saved, cURL and HTTP requests are generated in the respective sections.
        
    
*   You can also use the `Test call` option to verify the setup. Enter a phone number, then click Trigger to confirm that calls are being placed successfully.
    

*   You can also use the generated cURL and HTTP request after saving the configuration to initiate calls using the [Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api).
    

**Key Points**:

*   After successfully saving the C-IVR configuration, you have the option to add "Agent voice", "Voice menu", and "Voice hints" to the agent responses. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses) and [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.
    
*   If you have deployed your agent in the C-IVR or Phone channel and masking is enabled, then the audio files from the user responses are not available in the conversation history, since it can contain PII data. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for information.
    
*   You can also enable custom voice for your C-IVR agents in the Avaamo Platform. Contact Avaamo Support for more information.
    

### 

Test C-IVR channel

After you save your C-IVR channel configuration settings, you can test the C-IVR channel using Agent Simulator from the bottom-right corner of the page. See [Agent simulator](https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/simulator), for more information.

If you select the IVR/Phone option, the C-IVR-activated phone number is displayed with a phone icon.

Click the phone icon to dial the activated phone number and test your conversation flow. Click the transcripts icon to learn more about how your agent interprets the user's responses.

Click the `insights (eye) icon` to view detailed conversation insights, including how the agent interpreted the interaction.

If functions are invoked during the conversation, the `function name and its arguments` are displayed under `tool parameters` for better debugging.

Click the `download option` to save the conversation recording for further analysis.

Refer [Conversational IVR (C-IVR) or Phone](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/webex

## 

Webex channel integration

The Avaamo Conversational AI Platform now supports `Webex` as a communication channel, enabling AI agents to interact seamlessly with users directly within the Webex collaboration environment. This integration allows organizations to leverage existing workflows while providing AI-powered assistance, making conversations more interactive and context-aware.

**Note:** This channel only supports AI agents.

### 

What is Webex channel integration?

The Webex channel integration allows AI agents to engage users within Webex teams and spaces, eliminating the need to switch platforms for information or support. Users can interact with AI agents via `text messages` and `adaptive cards`, enabling a smooth conversational experience within the enterprise collaboration environment.

This integration is handy for:

*   Internal employee support and queries
    
*   Customer engagement through Webex collaboration spaces
    
*   Automating routine tasks, such as approvals, reminders, and notifications
    

### 

Before you begin

Before connecting your Webex channel to Avaamo, you must **create a Webex bot** and obtain the following details:

*   **Bot Username**
    
*   **Access Token**
    
*   **Bot ID**
    

These details are necessary to connect your Webex bot to the Avaamo platform. Refer to [Create Webex Bot](https://developer.webex.com/messaging/docs/bots) for detailed instructions.

### 

Benefits of Webex channel integration

*   **Enhanced user experience:** Users can interact with AI agents without switching platforms.
    
*   **Faster task completion:** Interactive cards and contextual AI responses streamline workflows.
    
*   **Enterprise-ready:** Securely integrates with corporate Webex accounts while maintaining compliance and auditability.
    
*   **Scalable deployment:** Supports multiple AI agents and Webex spaces, enabling broad adoption across teams or departments.
    

### 

Deploy your agent to Webex channel

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

1.  Navigate to the **Agent** page and go to **Configuration > Channels** in the left navigation menu.
    
2.  On the **Channels** page, click **Connect** under the Webex channel.
    

1.  Specify the following details and click Save.
    

Parameter

Description

Mandatory

Name

Indicates the **Name** used to identify the Webex channel.

Yes

Bot Username

Name of your Webex bot as it will appear in Webex and Webex App Hub.

Yes

Access Token

Access token for your Webex bot.

Yes

Bot ID

Unique system-generated ID for your Webex bot.

Yes

Now you can view the AI agent in your [Webex messaging](https://web.webex.com/sign-in) space. Start sending and receiving messages with AI agents directly in Webex.

## 

Webex Compliance

Webex offers several content templates to display information in a conversational UI. To ensure that conversation flows can be translated more quickly and accurately into the Webex UI, it is important to understand the elements that are not compliant with the Webex channel.

The following is a list of non-compliant elements in Adaptive cards when rendered in the Webex channel:

Adaptive cards

*   [Webview HTML](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-html)
    
*   Multiple [File Upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload)
    
*   [Webview URL](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-url)
    
*   [Carousel view](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/sms

SMS (short message service) is a text messaging service component of most telephone, internet, and mobile-device systems. It uses standardized communication protocols to enable mobile devices to exchange short text messages. SMS is also employed in mobile marketing.

Refer [SMS](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/channels/mcp

The `MCP` channel allows you to expose an Avaamo agent to external MCP-compatible AI applications. Once configured, you can use the generated MCP URL to connect your agent from supported MCP clients.

**Note:**

1.  The MCP channel is disabled by default. Request `Avaamo support` to enable it for your company.
    
2.  This channel is only applicable to [AI agents](https://docs.avaamo.com/user-guide/~/revisions/w6XooqwSnn5nli7tpn2Y/ai-agent).
    

1.  Navigate to the `Agent` page and go to `Configuration > Channels` in the left navigation menu.
    
2.  On the `Channels` page, click `Connect` under the MCP channel.
    

1.  Specify the following details and click `Save`.
    

Parameter

Description

Mandatory

Name

Indicates the `Name` used to identify the MCP channel.

Yes

1.  After saving, the `Channel URL` generated for the agent is displayed. You can copy this URL and use it to configure your supported MCP clients.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/environment-variables

You can define environment variables from the `Configuration -> Environment variables` option. These are constants that can be accessed anywhere in the agent and are global to all users of the agent.

**Examples**: External service access credentials like web service login credentials, webservice\_username, webservice\_password.

Refer [Environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/integrations



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/js-files

You can create and add JavaScript files to the agent from the `Configuration -> Add JS files` option. This feature is used to enhance the functionality of the agent.

Refer [JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/language

You can add multiple languages to the agent so that the agent can respond in different languages. The translated text of the language is used in the agent response based on the detected language of the agent.

Refer [Language](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/live-agent

[Pre-built live agent](/user-guide/ai-agent/configuration/live-agent/pre-built-live-agent)[Custom live agent](/user-guide/ai-agent/configuration/live-agent/custom-live-agent)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/live-agent/pre-built-live-agent

The Avaamo platform supports integration with a **live agent** for scenarios when there is a need for human intervention. If the user requests it, the agent senses dissatisfaction, frustration, or anger, or the agent has defined transfer intents, the conversation seamlessly transfers to a human agent system, such as Live Agent or Zendesk.

Refer [Pre-built live agent](/user-guide/ai-agent/configuration/live-agent/pre-built-live-agent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/live-agent/custom-live-agent

The Avaamo Platform provides prebuilt live-agent integrations with Avaamo, Oracle RightNow, and Zendesk. However, if you wish to transfer to a live agent other than the ones available, you can configure a custom live agent. When you configure a custom live agent in the Avaamo platform, you also provide a webhook URL that serves as an endpoint for sending and receiving requests and responses to and from the Avaamo platform.

When the user interacts with the virtual assistant and requests to speak to a live agent, the request is sent to the live agent (chat application) via a webhook call. The **Live agent integrator** transforms payloads to and from the Avaamo platform and the **Custom live agent,** respectively.

Refer [Custom live agent,](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent) for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/permissions

By default, when you create an agent, you are the **owner** of the agent. Additionally, when a user promotes an agent that the user is automatically the owner of the agent in the promoted stage. As an owner of the agent, you can assign permissions to different people within your company for your agent as required. This allows different users to participate and collaborate in each stage of the agent life-cycle.

There are four types of permissions available for an agent:

*   **View**: Users can only view the agent but cannot edit the agent. Note that anyone with at-least view permission on the agent can submit the Unhandled query analyzer job.
    
*   **Edit**: Users can view and edit the agent.
    
*   **Publish**: Users can view agents, edit agents, and publish skills from the agent to the skills store.
    
*   **Owner**: Full access to the agent. Users can view agents, edit agents, publish skills from the agent to the Skill store, and edit agent permissions.
    

Refer [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/persistent-menu

A `Persistent menu` lets you specify menu options that remain available to the user. A persistent menu clearly communicates your agent's core capabilities to both first-time and returning users. This is an optional configuration.

Refer [Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/response-filters

You can configure response filters based on the user properties, such as location, manager status, or exempt/non-exempt status. Later, you can use these response filters to filter skill responses for the same user intent in an agent. **Example**: In an HR agent, consider the user query "When is the year-end bonus paid?". Bonus paid for Indian and US employees can be different. You can define multiple responses for an intent based on user properties, so the agent’s response differs for an Indian user and a US user.

Refer [Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/settings

You can specify the general settings from the `Configuration > Settings` option. Also, note the agent authentication keys generated by the platform, which can help you access specific details about your agent.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure the agent immediately after creating an agent. See [Create AI agent,](/user-guide/ai-agent/create-an-ai-agent) for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

### 

User authentication handler

You can authenticate users via the agent across web, phone, and SMS channels using this block. Here, you can write any custom JS code based on your requirements, and it gets executed to authenticate the user before the agent loads. This helps secure all communication through the agent by authenticating the user before using the channel.

Refer [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

### 

Error handler

This feature enhances error handling and fallback management within the AI agent. It allows developers to define a custom error handler that dynamically forwards requests when a system error occurs.

Enhanced to support dynamic values in Forward Headers, allowing the use of storage variables or JavaScript blocks for scenarios such as passing the called phone number.

You can add custom JavaScript code in the Error Handler to handle the following situations:

1\. **Call forwarding:** When the system fails, forward the call to a specific number defined in the Error Handler.

Use the function `return SmartCall.forward(<from>, <to>)` to forward a call to a specific number if the system fails to continue the call.

2\. **Call hang-up:** When the system fails, gracefully disconnect the call by specifying a return message.

Use the function `return SmartCall.hangup()` to disconnect the call if the system fails to continue.

3\. **Return message:** If the bot is text-based, you can also discontinue the session with a custom message.

Use the function `return { message: {} }` to display a message if the system fails to continue the chat.

### 

Advanced features

The following options are available in Advanced features:

#### 

Enable debug logs

The `Enable Debug Logs` option allows users to enable or disable debug logs at the `agent level`. This feature provides better control over log visibility for troubleshooting and debugging. This is especially useful when masking is enabled, as logs are otherwise suppressed.

See [Enable debug logs](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-debug-logs), for more information.

#### 

Enable hybrid SDK

If you wish to integrate the Avaamo Platform using the Hybrid SDK, then you must enable the Hybrid SDK in the `Agent > Settings page`. The Platform then opens the channel to listen for requests in the Hybrid SDK integration. By default, this communication is not available unless the **Enable Hybrid SDK** option is enabled.

See [Hybrid SDK](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/hybrid-sdk), for more information.

#### 

Disable citation link security

Citation link security controls the expiration of citation links generated in AI Agent responses.

By default, citation links expire 24 hours after they are generated. You can disable citation link security to keep citation links accessible without expiration.

**Key details:**

*   By default, citation links expire 24 hours after generation.
    
*   When citation link security is disabled, citation links remain accessible without expiration.
    
*   Useful for debugging, troubleshooting, and sharing persistent references with users.
    
*   It is recommended to keep citation link security enabled to maintain secure and controlled access to citation content.
    

#### 

Enable feedback

The `Enable Feedback` option allows users to collect feedback from end users at the agent level. When enabled, this feature displays a feedback option after each response, allowing users to rate the accuracy or usefulness of the bot’s answers.

This helps administrators and developers assess response quality, identify areas for improvement, and fine-tune the agent’s performance. Disabling this option hides the feedback prompt from users, ensuring a cleaner interface when feedback collection is not required.

Refer [Collect feedback,](/user-guide/overview-and-concepts/advanced-concepts/collect-feedback) for more information.

#### 

Enable previous context

The `context persistence` capability allows the agent to retain the conversation context even after a period of user inactivity.

When a user resumes a conversation after being idle for an extended duration (for example, an hour or a day), the system preserves the previous session context. This enables the agent to understand and respond based on the earlier conversation history, eliminating the need for the user to repeat previous information.

**To enable this feature:**

1.  Go to **Configuration > Settings > Advanced Settings**.
    
2.  Select the checkbox **Enable Previous Context**.
    

This feature ensures a more seamless and natural conversational experience by maintaining context across sessions and minimizing repetitive interactions.

#### 

Enable Agentic V2

Agentic V2 introduces major enhancements focused on faster response times, smoother conversational flow, and improved handling of real-world voice interactions.

**To enable this feature:**

1.  Go to **Configuration > Settings > Advanced Settings**.
    
2.  Select the checkbox **Enable Agentic V2**.
    

**It enables**

*   **Direct LLM streaming:** The system streams LLM output directly to the TTS engine, allowing the bot to start speaking while the response is still being generated, reducing time to first audio
    
*   **Improved response timing:** LLM processing starts immediately after the user stops speaking, minimizing the gap between user input and bot response
    

Agentic V2 delivers a significantly more responsive and natural voice experience, enabling real-time, human-like conversational interactions at scale.

### 

Information Masking

Masking allows you to protect PII/PHI/GDPR compliance data within the Avaamo Conversational AI system. There are ways to configure information masking in the Avaamo Platform based on your business requirements.

Refer [Enable information masking](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-information-masking), for more information.

### 

Notifications

You can use notifications to send error notification reports to the users, as required.

**Error notification**: In this field, specify the email IDs of the users who need to receive error notifications if JS errors are encountered during agent interaction. Error notifications are sent with a 15-minute gap between each email.

**Time zone:** Select the time zone to generate the daily usage report. If no timezone is selected in this field, then the UTC timezone is considered.

**Add email IDs for daily usage reports and error notifications**

*   Specify the email IDs of the users in the `Daily usage report` and `Error notification` field.
    
*   Click the + icon to add the email ID.
    
*   Click `Save` to save the changes made to the page.
    

**Error notification emails**

Each error notification email has the following information:

*   The stage in the application in which the errors occurred. Stage refers to development, testing, staging, or production. If errors occurred in more than one stage, separate notification emails are sent for each stage.
    
*   A link to the JS errors page.
    
*   The errors and the corresponding details of each error. The email lists up to 25 errors. If there are more than 25 errors, a link is provided to view all the errors.
    
*   A link to send an email to all the agent owners.
    

### 

Agent authentication keys

The following are the authentication keys generated by the Platform for an agent. Typically, these keys are used in an API when you are required to authenticate an agent:

*   **Agent UUID**: A unique agent identifier generated by the platform.
    
*   **Agent AccessToken**: This access token is used only for Conversation API and Message API operations.
    
*   **API Token**: This access token is used for all the Dashboard operations except for Conversation API and Message API operations.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/configuration/tags

Tags help you to understand the usage of agents by categorizing the user intents distributed across different skill responses. It helps you to analyze the top-used intent categories and the way users interact with the agent. It gives a different perspective on viewing and understanding user-agent interactions. See View analytics of [top tags](/user-guide/ai-agent/monitor/analytics#top-tags), for more information on the "Top Tags" Analytics board.

Refer [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/debug

[Error Log](/user-guide/ai-agent/debug/error-log)[Debug log](/user-guide/ai-agent/debug/debug-log)[Storage](/user-guide/ai-agent/debug/storage)[Conversation history](/user-guide/ai-agent/debug/conversation-history)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/debug/error-log

You can view all the error details that occurred during the execution of responses from the agent. This section helps developers to monitor, filter, and analyze error logs effectively.

#### 

**Histogram**

*   This graph provides a **visual representation of errors over time**, allowing you to spot patterns or spikes quickly.
    
*   **X-axis:** Displays the dates within the selected range.
    
*   **Y-axis:** Shows the count of errors recorded on each date.
    

#### 

**Filter Error logs**

**By type:**

Use the filter dropdown to view only `Errors` or only `Warnings`. Select the required option from the dropdown to apply the filter.

**By skill type**

Use the `Skill type` filter to view JS errors for a specific skill. Select a skill from the dropdown (which lists all skills associated with the agent) to narrow down the error list.

**By date:**

Use the date filter to view Error logs within a specific date range (up to 90 days). By default, the page shows errors from the last 30 days.

Click the date picker and choose one of the preset ranges, Last 30 days, Previous 15 days, or Today, or select `Custom Range`. For a custom range, pick a start date, drag to the end date, and click `Apply`.

#### 

**Search JS error logs**

Use the **Search** option to find error logs by entering a `conversation_uuid` or `conversation_session_ID`. This helps you quickly locate specific conversations and troubleshoot issues more efficiently.

#### 

**Log Table**

This table lists the individual error entries in detail. The main columns include:

*   **Type:** Specifies the type of error.
    
*   **Skill:** Identifies the skill associated with the error.
    
*   **Conversation UUID:** A unique identifier for the conversation.
    
*   **Conversation Session ID:** Unique identifier assigned to each conversation session between a user and an agent.
    
*   **Timestamp:** Indicates the exact date and time when the error occurred.
    
*   **Actions:** Provides options to interact with each log entry. Click `View` to see details.
    

### 

Key features

The error logging system provides a streamlined way to detect, analyze, and resolve issues across your application. Here's how each feature helps improve visibility and troubleshooting:

**Unified Error Log** Instead of checking multiple sources, you get a single view that consolidates all API and JavaScript errors. This makes it easier to troubleshoot issues without switching between tools or logs.

**Proactive Alerts** You don’t have to wait for users to report problems. The system can alert you in real time when issues arise, such as a sudden latency spike or a runtime error, so you can respond quickly.

**Deep Insights** Each error entry includes detailed metadata, such as the error type, the skill or component involved, and the exact time it occurred. This helps you understand what went wrong and when. You can also export logs for later review or share them with your team.

**Integrated Debugger** Troubleshooting is faster when everything you need is in one place. The built-in debugger lets you dig into errors directly from the log view, helping you trace the cause and test solutions without switching environments.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/debug/debug-log

You can use the **console.log** statement in the Javascript node to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure.

Refer [Debug logs](/user-guide/how-to/build-agents/debug-agents/debug-logs), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/debug/storage

You can view all the data stored either for a global session (applicable for all the users interacting with agents) or for a specific user session in your agent.

Refer [Storage](/user-guide/how-to/build-agents/debug-agents/storage), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/debug/conversation-history

The **Conversation history** page displays the agent's records and all of its user interactions for the selected agent.

*   Click any conversation to see the details. The URL also includes a unique identifier for the conversation. This is referred to as conversation\_uuid. You can use this in APIs. See [Conversation API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api), for an example.
    
*   You can search through history to find specific conversations, messages, and users.
    

**Notes**:

*   Currently, list view responses are not displayed in the conversation history.
    
*   Conversation history is not real-time, and it may take up to 2 minutes for the Conversation history to be updated.
    

The **Conversation history** page includes a search bar, agent profile icon, and user profile icon.

### 

Search bar

You can use the **Search** bar to search through conversation titles and message content. This helps you narrow down user queries and the agent’s response to the query.

#### 

Conversations

Each conversation in the `Conversation history` page is grouped by user name. You can search for conversations related to a specific user by entering the user's name in the search bar. All conversations for the user, or messages containing the user name, are displayed in the results.

#### 

Messages

You can search the conversation history for messages. These messages can be user queries or the agent's response. To search for a message, enter its content in the search bar.

All messages containing the searched content are displayed. Click the message to view the details and the conversations.

Note that if you have deployed your agent in C-IVR or the Phone channel, user responses are available as audio files in the `Conversation history`.

#### 

**Conversation Transcript and Audio Playback**

The transcript feature provides a comprehensive view of the user-agent conversation, available at the bottom of the conversation history. It covers both text and voice interactions, helping you clearly understand the flow and context of each conversation.

For voice conversations, an audio recording is also available alongside the written transcript. You can play the audio directly within the interface to gain deeper insights into the interaction, which is especially useful when tone or pronunciation needs to be reviewed.

This feature is valuable not only for understanding conversations but also for debugging and troubleshooting purposes. By reviewing both the transcript and the audio, you can easily identify discrepancies, misinterpretations, or technical issues that may have occurred during the conversation, enabling faster resolution and improved user experience.

Additionally, the session end reason is displayed at the bottom of the transcript, providing additional context for analyzing why the conversation ended.

#### 

Query insights

You can view query insights for a specific response directly from the `Conversation History` page. Click the `eye icon` available next to each response to open the Query Insights panel and view detailed information about how the query was processed.

This helps you analyze user interactions and better understand agent responses.

Further, you can view the Query context of the generated response. Click `Query Context` to view all the chunks involved in the response creation.

You can also view the label `Strong match` which means the chunks deemed most relevant to the question and that contributed **significantly** to generating the answer.

Click any `chunk` to view detailed information.

*   **Document Name**: The name of the document from which the chunk was derived.
    
*   **Intent Key**: The specific intent used in response generation.
    
*   **URL:** The source of the document, as specified during ingestion.
    
*   **User custom properties:** User-defined custom properties are displayed here.
    
*   **Descriptions**: Additional contextual information about the chunk.
    

### 

Agent profile icon

The agent profile icon button lets you edit your profile and change the view of the conversation history page. You can perform the following actions:

*   View the agent avatar by clicking the profile option.
    
*   Change the outlook of the **Conversation history** page by clicking the **Compact view** option.
    
*   Logs you out from the Avaamo platform dashboard.
    

### 

User icon

You can view the details of a user in the conversation by clicking the user profile icon:

*   The email address and other custom user authentication details are provided in the **Custom user authentication handler** and **Returning user message handler**. See [Define settings](/user-guide/how-to/build-agents/configure-agents/define-settings), for more information.
    
*   The channel through which the user interacted with the agent.
    
*   The link for the agent.
    
*   The location of the user's IP.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test

You can iteratively test the agent while writing the prompt to ensure it provides appropriate responses to user queries using the `Simulator` option.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/simulator

You can test the agent once you complete the prompt to ensure it provides appropriate responses to user queries using the `Simulator` option.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/ai-agent/create-an-ai-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search, and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click `Edit` to unlock the agent before editing.
    

You can test your agent using the Agent Simulator from any page in the agent’s left navigation pane without returning to the main agent page. This feature allows for rapid development and testing without leaving your current workspace. It enables end-to-end testing of the agent’s conversational flow from any page, enhancing the development experience by making it more seamless and efficient.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/regression-testing



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/regression-testing/get-started

You can use regression testing to ensure that changes made to an AI Agent do not adversely affect existing behavior. AI Agents continuously evolve through updates to prompts, skills, knowledge sources, functions, configurations, and conversation flows. While these changes are intended to improve the agent, they can sometimes introduce unintended behavior or inconsistencies in existing use cases.

Regression testing helps validate that the agent continues to respond as expected after modifications. It enables teams to automatically test predefined conversation scenarios, compare actual responses against expected outcomes, and identify deviations before changes are promoted to production.

Typical use cases include:

*   Updating prompts or instructions
    
*   Adding, modifying, or removing skills
    
*   Updating knowledge sources or ingested content
    
*   Introducing new functions or integrations
    
*   Modifying routing, transfer, or escalation flows
    
*   Validating voice and text experiences across different scenarios
    

By automating validation across multiple conversation paths, regression testing helps maintain response quality, consistency, and reliability as AI Agents evolve.

## 

Run regression test

You can run regression testing by uploading a CSV file with regression test data.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test an agent immediately after creating it and adding skills to it. See [Create agent](/user-guide/ai-agent/create-an-ai-agent) and [Add skills to agent,](/user-guide/ai-agent/skills) for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the `Avaamo Platform UI`, navigate to the `Agents` tab in the top menu. Search for and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click `Edit` to unlock the agent before editing.
        
    

*   In the `Agent` page, click the `Test` \> `Regression testing` option in the left navigation menu
    
*   Click the `Upload test file` option and specify the following details:
    

**Key Point**: It is recommended to review the regression test file and incorporate all the recommended best practices. See [Regression test best practices](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices), for more information.

Parameters

Description

Maximum length

Language

The language in which you wish to execute the regression test. By default, the regression test is executed in English.

NA

Test Name

The name of the test suite. Provide a name that helps you to identify the regression testing being performed.

Note that the `Test name` must be unique and is mandatory.

100 characters

Select version

The version of the regression test format.

*   See Agentic V1
    
*   See Agentic dialog
    

NA

Scenario CSV

Scenario CSV indicates the CSV file containing the regression test scenario to be uploaded. Click `Browse` to browse a CSV file. You can also click the `Sample test file` to download a sample regression test file. This helps you to know the format required for the regression test file. See the [Regression test file format](/user-guide/ai-agent/test/regression-testing/regression-test-file-format) for more information.

If you upload a CSV file that does not conform to the format required for the regression test, an appropriate error message displaying the row number of the first encountered error is displayed.

NA

Metadata CSV

Indicates the optional CSV file containing metadata for the regression test.

Click `Browse` to browse a CSV file. You can also click the `Sample test file` to download a sample regression test file. This helps you to know the format required for the regression test file.See the [Regression test file format](/user-guide/ai-agent/test/regression-testing/regression-test-file-format) for more information.

*   Click `Submit`. This action starts the regression testing on the agent, based on test cases in the uploaded file.
    

After submitting, the following information is displayed on the Regression testing page:

*   In the `Regression file` column, the `Test name` specified during the time of upload is displayed along with the date and time of the regression test run.
    
*   In the `Status` column, `In Progress` status is displayed indicating that the test run is in progress. Click `Refresh` to refresh the status. See [View status and results](/user-guide/ai-agent/test/regression-testing/get-started#view-status-and-results), for more information.
    
*   Click `Download input CSV` in the `Actions` column, to download the uploaded input test file in CSV format. See [Download input CSV](/user-guide/ai-agent/test/regression-testing/get-started#download-input-csv), for more information.
    

**Key Points**:

*   You can upload only one file at a time for regression testing. You can delete this file and upload another file, as required.
    
*   Since the user executing the regression tests is a validation user, if you are required to pass certain tokens or validations for your tests to execute, then you can use the property`context.is_validation_user` and pass required tokens as hard-coded tokens.
    

## 

**View status and results**

In the `Regression testing` page, you can view the status and results of regression testing. You can download the regression testing result file in CSV format.

**Key Point**: Each query in regression testing must be resolved and executed within 10 seconds. The queries that do not resolve within 10 seconds are marked as **Failed**.

### 

**Regression file**

The `Regression file` column displays the name of the test file and the time of the test run.

**Note**: If you specified a file name that is longer than 30 characters, then the first 30 characters are displayed in the Regression file column. You can hover over the file name to view the complete file name.

### 

**Status**

The `Status` column displays the status and version of the regression test along with the `date` and `time` of completion. The following values are displayed:

*   **In-Progress**: Indicates that the testing is still in progress and the system is executing the test cases from the uploaded file.
    
*   **Completed**: Indicates that all the test cases are executed. You can also download the result file. See [Actions](/user-guide/ai-agent/test/regression-testing/get-started#actions-run-delete-results), for more information.
    
*   **Failed**: Indicates that there was some failure executing the test cases.
    

### 

**Result**

In the `Results` column, you can view the overall results of the regression testing.

*   **Total Scenario**: In the Regression testing v1 format, Total queries indicate the total number of rows in the Regression test file. Each row is a test query. Note that, in this format, each row can also be a flow, if you are testing a multi-turn conversation. See [Regression test file format](/user-guide/ai-agent/test/regression-testing/regression-test-file-format), for more information.
    
*   **Passed**: Number of test cases where the "Expected intent" and "Matched intent" match. See [Download results](/user-guide/how-to/build-agents/test-agents/regression-testing#download-results), for more information on the regression result file.
    
*   **Failed**: Number of test cases where the "Expected intent" and "Matched intent" do not match. The "Matched intent" value of a failed test helps to further troubleshoot the issue in the agent. See [Download results](/user-guide/how-to/build-agents/test-agents/regression-testing#download-results), for more information on the regression result file.
    

### 

**Result**

The `Result` section provides a summary of the regression test execution and helps you quickly assess the overall quality and consistency of the AI Agent's responses.

**Total scenarios:** Indicates the total number of scenarios executed during the regression run.

A scenario can consist of a single interaction or multiple conversation steps. Each scenario is identified by a unique `Scenario ID` in the [Scenario CSV](/user-guide/ai-agent/test/regression-testing/regression-test-file-format#scenario-csv) file.

**Passed:** Indicates the number of scenarios that successfully met the evaluation criteria. See [Download Detailed Report](/user-guide/ai-agent/test/regression-testing/get-started#download-detailed-report), for more information on the regression result file.

A scenario is marked as Passed only when:

*   Every step within the scenario is executed successfully.
    
*   The similarity score for each step meets or exceeds the configured threshold (80% by default).
    

**Failed:** Indicates the number of scenarios that did not meet the evaluation criteria. See [Download Detailed Report](/user-guide/ai-agent/test/regression-testing/get-started#download-detailed-report), for more information on the regression result file.

A scenario is marked as Failed when:

*   One or more steps within the scenario score below the configured threshold.
    
*   The conversation flow deviates from the expected sequence.
    
*   The agent generates a response that does not sufficiently match the expected response.
    

### 

**Performance metrics**

This displays the `Accuracy` and `F1 Score` using the standard machine learning formula.

**Note:** For Agentic V1 agents, the `Performance Metrics` option is not displayed by default. This option becomes available for Agentic dialogs only.

Term

Definition

Formula

Accuracy

Indicates how accurate is the data model.

It is a fraction of the predictions that the data model got right.

Accuracy = TP + TN / TP + TN + FP + FN

Precision

Indicates what proportion of positive identifications was actually correct.

Precision =

TP / TP + FP

Recall

Indicates what proportion of actual positives was identified correctly.

Recall =

TP / TP + FN

F1 Score

This is the weighted average of Precision and Recall. F1 score reaches its best value at 1 and worst value at 0

**Note**: The following terminologies are used in the formula:

*   TP = True Positive
    
*   TN = True Negative
    
*   FP = False Positive
    
*   FN = False Negative
    

The goal is to achieve a higher F1 Score. To aim for a better F1 Score, you can check

*   If there is sufficient training data in your agent.
    
*   Check whether the test cases are accurate for validating your agent.
    

### 

**Language**

The language in which the regression test is executed. By default, the regression test is executed in English.

### 

**Actions**

You can perform various actions, such as running, deleting, and downloading, on the test suite and its runs. See [Actions](/user-guide/ai-agent/test/regression-testing/get-started#actions-run-delete-results), for more information.

## 

Actions (Run, Delete, Results)

You can perform the following actions in the **Regression testing** page for each test suite:

*   [Run](/user-guide/ai-agent/test/regression-testing/get-started#run): Repeat executing the test cases if the previous run failed or when you have modified a specific flow in your agent.
    
*   [Delete](/user-guide/ai-agent/test/regression-testing/get-started#delete): If the test data is incorrect or you wish to upload another file for regression testing
    
    delete the current test file and upload another file.
    
*   [Download Detailed Report](/user-guide/ai-agent/test/regression-testing/get-started#download-detailed-report): Download the results of regression testing in a CSV format.
    
*   [Download input CSV](/user-guide/ai-agent/test/regression-testing/get-started#download-input-csv): View the input values used for regression testing.
    

### 

Run

You can rerun the test cases if the previous run failed or if you have modified a specific flow in your agent.

**To re-run regression test**:

*   In the `Actions` column, click `Run`**.**
    

*   An alert message is displayed for confirmation. Click `OK`.
    
*   A new run of regression testing is started.
    
    *   In the `Status` column, `In Progress` status is displayed indicating that the test run is in progress. Click `Refresh` to refresh the status. See [View status and results](/user-guide/ai-agent/test/regression-testing/get-started#view-status-and-results), for more information.
        
    *   Click `Download input CSV` in the `Actions` column, to download the uploaded input test file in CSV format. See [Download input CSV](/user-guide/ai-agent/test/regression-testing/get-started#download-input-csv), for more information.
        
    

### 

Delete

If the test data is incorrect, or if you wish to upload a different file for regression testing, delete the current test file and upload a new one.

**To delete the regression test**:

*   In the `Actions` column, click `Delete`**.**
    
*   An alert message is displayed for confirmation. Click `OK`.
    
*   The corresponding regression test is deleted.
    

### 

Download Detailed Report

You can download the regression test results in CSV format.

**To download results of regression testing**:

*   Click `three dots` (Elipsis) "…" in the `Actions` column.
    
*   Click `Download Detailed Report` to download the results in CSV format.
    
*   A copy of the result file is downloaded to your local machine. See [Understanding results](/user-guide/ai-agent/test/regression-testing/regression-test-file-format#understanding-results), for more information on interpreting the regression test results.
    

### 

Download input CSV

You can download the uploaded input regression test file as a CSV. You can use this for further analysis of the test results.

**To download the input CSV file for the regression test**:

*   Click `three dots` (Elipsis) "…" in the `Actions` column.
    
*   Click `Download input CSV` to download the uploaded input test file in CSV format.
    
*   A copy of the input test file is downloaded to your local machine.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/regression-testing/regression-test-file-format

This article describes the legacy version of the regression test file format and explains how to interpret results after executing the regression test using this format.

*   [File format](/user-guide/ai-agent/test/regression-testing/regression-test-file-format#file-format)
    
*   [Understanding results](/user-guide/ai-agent/test/regression-testing/regression-test-file-format#understanding-results)
    

## 

File format

### 

Scenario CSV

The Scenario CSV file defines the conversation scenarios that are executed during regression testing. It contains the sequence of user interactions and the expected responses that are used to validate agent behavior.

Each row in the file represents a step within a conversation. Multiple rows can belong to the same scenario, allowing you to test complete multi-turn conversations.

The regression engine executes each scenario step by step and compares the actual agent response with the expected response using similarity scoring.

The following are the details of the format:

Column 1

Column 2

Column 3

Column 4

<<scenario\_id>>

<<sequence>>

<<query>>

<<response>>

*   **Scenario ID:** The unique identifier of the test scenario to execute.
    
*   **Sequence**: Indicates the expected flow in which the user query is tested. This can be a comma-separated list of the expected flow sequence if you wish to test a multi-turn conversation.
    
*   **Query**: Indicates a sample query. If you wish to test a multi-turn conversation, you can add each node's responses in an additional column.
    
*   **Response**: Response expected from the agent
    

#### 

Single-step scenario

Single-step scenarios are useful for validating individual responses.

Scenario ID

Sequence

User Query

Expected Response

1001

1

What are your business hours?

Our business hours are Monday through Friday, 9 AM to 5 PM.

#### 

Multi-step scenario

Multi-step scenarios are useful for validating conversational flows that span multiple turns.

Scenario ID

Sequence

User Query

Expected Response

2001

1

I need help with my account

I can help with your account. What would you like to do?

2001

2

Reset my password

I can help you reset your password.

2001

3

Yes, continue

Your password reset request has been initiated.

All steps must pass for the scenario to be considered successful.

### 

**Metadata CSV**

The Metadata CSV file allows you to simulate additional context during regression testing. This is useful for validating scenarios where agent behavior depends on user properties, system time, or interaction mode.

By associating metadata with a scenario, you can test how the agent responds under specific conditions without requiring actual users, channels, or waiting for a particular time of day.

#### 

Supported metadata types

**User properties**

User properties enable you to simulate values that would normally be available during a live conversation.

Examples include:

*   Customer ID
    
*   Membership status
    
*   Account type
    
*   JWT-derived attributes
    
*   Contact center metadata
    
*   Queue information
    

This allows you to validate flows that depend on user-specific information.

**System time**

System time simulation allows you to execute regression scenarios as if they occurred at a specific date and time.

This is useful for validating:

*   Business hour routing
    
*   Live agent transfer availability
    
*   Holiday-specific responses
    
*   Time-based workflows
    

Without time simulation, testing such scenarios would require waiting until the actual time condition occurs.

**System mode**

System mode determines whether the scenario is executed in **Text** or **Voice** mode.

This enables validation of channel-specific behavior, including:

*   Voice-specific prompts
    
*   Different response styles for voice and text
    
*   Call-handling workflows
    
*   Voice transfer scenarios
    

#### 

Example use cases

Scenario

Metadata

Test live agent transfer during business hours

System Time

Validate VIP customer workflow

User Properties

Test registered versus unregistered caller flows

User Properties

Verify voice-specific prompts

System Mode

Validate after-hours responses

System Time

#### 

Best practices

*   Include metadata only when required by the scenario.
    
*   Reuse metadata across similar test cases whenever possible.
    
*   Create separate scenarios when the same query is expected to produce different responses based on user properties or system time.
    
*   Keep metadata aligned with real-world values used by the production agent.
    

Using Metadata CSV helps create more realistic regression tests and ensures that conditional agent behavior continues to function correctly after updates and configuration changes.

## 

**Understanding results**

Consider the following test result of a regression test run:

For each row in the test results, the following columns are displayed:

Column

Description

**Scenario ID**

Unique identifier for the test scenario being executed. Multiple rows with the same Scenario ID represent different turns within the same conversation.

**Sequence**

The order of the conversation turn within the scenario. For example, 1 indicates the first user interaction, 2 indicates the second, and so on.

**Conversation Session ID**

Unique identifier of the conversation session used during the test execution.

**Conversation History URL**

URL that links to the conversation transcript or conversation history for review and debugging.

**User Message**

The input message sent by the user during that conversation turn.

**Expected Response**

The predefined response or behavior expected from the agent for the given user message.

**Actual Response**

The response generated by the agent during test execution.

**Score %**

Similarity or evaluation score indicating how closely the actual response matches the expected response. Higher values indicate better alignment.

**Reason**

Explanation of why the response received the assigned score or why the evaluation failed. This may include mismatches, missing information, or deviations from the expected response.

**Objective Assess**

Indicates whether the response satisfied the evaluation objective. Common values include `yes` or `no`.

**Status**

Overall result of the evaluation for that turn, such as `PASSED` or `FAILED`.

**Run Mode**

The channel or mode used during testing, such as `voice` or `text`.

**System Time**

Timestamp indicating when the interaction or evaluation was executed.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1

This article describes the new and improved version of the regression test file format referred to as "Version 2 (V2)" and how to understand results after executing the regression test using the V2 format.

*   [File format](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#file-format)
    
*   [Understanding results](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#understanding-results)
    

## 

Why Version 2 format?

Version 2 file format of regression testing is a new improved version. The basic principle of writing the test case differs in V1 and V2 formats and the improved format in V2 addresses certain shortcomings of the V1 format.

*   Regression test - V1 format file, is a long list of comma-separated flows with skill and intent keys, along with the responses of each node in an additional column required to test multi-turn conversations. See [Regression test file format - V1](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#file-format), for more information.
    
*   Regression test - V2 format file, is based on test identifiers. Each step in the flow is a row and hence, there are no additional columns of response nodes are required in the V2 format to test multi-turn conversations. Based on the way the test identifiers are defined, the platform infers the flow and the sequence of execution. See [Regression test file format - V2](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#file-format), for more information.
    

The following table summarizes a few key differences and improvements of the Regression test - V2 format file:

Areas

Regression test file format - V1

Regression test file format - V2

Ease-of-use

Understanding and writing test cases is a time-consuming process.

Test identifiers make it easier to write test cases.

Multi-turn conversation flow testing

Requires a long list of comma-separated flows with skill and intent keys and many additional columns with responses for each node.

Requires the developers to write the test cases with proper test identifiers, each in a separate row. The rest of the inference of grouping and executing the test cases is done by the Platform.

Scalability and Maintainability

With the comma-separated list, it is not easy to scale and maintain new test cases or to augment the existing test cases.

Troubleshooting any error in the test case is time-consuming.

Helps to enhance the existing test case flow just by adding new identifiers.

Troubleshooting any error is easier since each row is a separate test case in a flow.

Flow control testing

A limitation of the V1 format, as it is only based on the skill key and intent key.

Allows complete test coverage of the flow control statements as it offers a combination of both intent and response node matching.

## 

File format

The regression test file must be in CSV format. The following are the details of the format:

ID

QUERY

TYPE

EXPECTED\_VALUE

<<unique\_id-<<sequence\_id>>

<<test Query>>

<<response\_source>>

<<skill\_key>>.<<intent\_key>>

*   **ID:** Unique identifier of each test case. The identifier must be in the format - `<<unique_id>>-<<sequence_id>>,` for all cases except when the conversation is not multi-turn. Although, it is recommended to provide the full format, in such cases, only a unique identifier is sufficient. For example, If you wish to test Smalltalk or Q&A response, then the ID can be "PizzaFAQ" instead of "PizzaFAQ-1". Each row of the CSV file is a test case to execute.
    
    *   `unique_id` can be any user-defined value.
        
    *   `sequence_id` must be numbers such as 1,2,3.
        
    *   `unique_id` and `sequence_id` must be separated by a hyphen.
        
    *   A multi-turn conversation flow is grouped by `unique_id` and executed in the sequence as mentioned by `sequence_id`. In simple terms, a group of rows with the same `unique_id` represents a flow to be executed according to the sequence in the `sequence_id`.
        
    *   See [Dialog skill](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#dialog-skill), for more an example and more information.
        
    
*   **QUERY:** The user query to be executed.
    
*   **TYPE:** Indicates the response source that specifies where the user query is executed. For example, if the user query must match an intent or a response node in the Dialog skill. See [Type - Response source](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#type-response-source), for more information and supported values.
    
*   **EXPECTED\_VALUE:** Indicates the skill and intent key where the user query execution is expected to match.
    

**Note**: The column headers are in capital case separated by an underscore.

## 

Type - Response source

You can specify the following response types in the regression test file:

TYPE

EXPECTED\_VALUE

Description

`intent`

`<<skill_key>>.<<intent_key>>`

Response source is an intent in the Dialog skill, Q&A, or Smalltalk. This is to test the query against a respective skill intent match.

See [Dialog skill - intent match](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#dialog-skill-intent-match), for an example.

See [Q&A](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#dialog-skill-response-node-match), for an example.

`response_node`

`<<skill_key>>.<<intent_key>>`

Response source is a response node in the Dialog skill designer. This is to test the query against a Dialog skill response node match. Useful when,

*   The same intent match has different responses from different nodes based on the use case.
    
*   Test flow control scenarios such as Goto\_node.
    

See [Dialog skill - response node match](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#dialog-skill-response-node-match), for an example.

`intent`

`agent_request`

Test if the query triggers a live agent.

See [Live agent](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`agent_transfer`

Expected value is `agent_transfer` when the live agent is triggered and transferred using `#talk to agent` command.

See [Live agent](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`agent_terminate`

Expected value is `agent_terminate` when the live agent is terminated using `#end agent` command.

See [Live agent](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`unhandled`

The agent must not give a valid response to this query. It must be an unhandled response.

See [Unhandled](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#unhandled), for an example.

`intent`

`smalltalk`

Test if the agent replies with a system Smalltalk response.

`disambiguation`

`disambiguation`

Test if the agent replies with the disambiguation response for the given intent.

See [Disambiguation](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#disambiguation), for an example.

`disambiguation`

`<<skill_key>>.<<intent_key>>|<<skill_key>>.<<intent_key>>`

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#understanding-results), for more information on understanding how the disambiguation results are evaluated.

**Notes**: Ensure that there is no space before or after any separators such as "I" in the regression test file.

**Key points**: To get the skill key and the intent key,

*   In the desired conversational flow, post the query you wish to test in the agent chat widget at the bottom-right corner.
    
*   Click the eye icon to view the message insights.
    
*   From the message insights, you can get the skill key and the intent key. Use this to specify the expected intent match in the Regression test file:
    

*   It is not required to specify system intents such as "None of these", "#end agent" when you are testing a flow. You can omit such system intents during testing.
    

## 

Use case

Consider the following conversation flow in the Order Pizza skill with the skill key as "macpizza\_order".

The following is an example of different response types in the regression test file:

ID

QUERY

TYPE

EXPECTED VALUE

OrderPizza-1

I want to order pizza

intent

macpizza\_order.1

OrderPizza-2

veg

intent

macpizza\_order.2

OrderPizza-3

cheese

intent

macpizza\_order.4

OrderPizzaStarter-1

I want to order pizza

intent

macpizza\_order.1

OrderPizzaStarter-2

veg

intent

macpizza\_order.2

OrderPizzaStarter-3

cheese

response\_node

macpizza\_order.starters

PizzaLiveAgent

I want to talk to an agent

intent

agent\_request

StoreFAQ

where is your store?

intent

mac\_pizza\_faqs.store\_faqs

Unhandled

do you use organic ingredients?

intent

unhandled

OrderFAQDisambiguation

order

disambiguation

macpizza\_order.1|mac\_pizza\_faqs.order\_faq

Disambiguation

order

disambiguation

disambiguation

### 

Dialog skill - intent match

The pizza placing order flow in the above diagram can be tested as follows:

ID

QUERY

TYPE

EXPECTED\_VALUE

OrderPizza-1

I want to order pizza

intent

macpizza\_order.1

OrderPizza-2

veg

intent

macpizza\_order.2

OrderPizza-3

cheese

intent

macpizza\_order.4

**Note**: Since all the unique identifiers are the same, they are grouped and executed in the following order `OrderPizza-1 -> OrderPizza-2 -> OrderPizza-3` based on the sequence identifier.

### 

Dialog skill - response node match

Consider the following conversation flow in the Order Pizza skill with the skill key as "macpizza\_order".

The pizza placing order flow in the above diagram can be tested as follows:

ID

QUERY

TYPE

EXPECTED\_VALUE

OrderPizzaStarter-1

I want to order pizza

intent

macpizza\_order.1

OrderPizzaStarter-2

veg

intent

macpizza\_order.2

OrderPizzaStarter-3

cheese

response\_node

macpizza\_order.starters

**Notes:**

*   Since all the unique identifiers are the same, they are grouped and executed in the following order `OrderPizzaStarter-1 -> OrderPizzaStarter-2 -> OrderPizzaStarter-3` based on the sequence identifier.
    
*   Node 4 has a flow control statement and the response is from the `starters` node. `OrderPizzaStarter-3` test case is to evaluate the response from the flow control statement.
    

### 

Live agent

Consider that in the MacPizza agent, you have enabled live agent interaction. See [Switch to live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent), for more information. You can test the transfer to the live agent using the following regression test case:

ID

QUERY

TYPE

EXPECTED\_VALUE

PizzaLiveAgent

I want to talk to an agent

intent

agent\_request

TalktoAgent

#transfer to agent

intent

agent\_transfer

TerminateAgent

#end agent

intent

agent\_terminate

### 

Q&A

Consider the following Q&A skill:

You can test the Q&A skill using the following regression test case:

ID

QUERY

TYPE

EXPECTED\_VALUE

StoreFAQ

where is your store?

intent

mac\_pizza\_faqs.store\_faqs

### 

Unhandled

Consider that in the MacPizza agent, the query "_do you use organic ingredients?_", goes to an unhandled query. You can test the unhandled case using the following regression test case:

You can test the Q&A skill using the following regression test case:

ID

QUERY

TYPE

EXPECTED\_VALUE

Unhandled

do you use organic ingredients?

intent

unhandled

### 

Disambiguation

Consider that in the MacPizza agent, the query "order", goes to disambiguation with options from a dialog skill "Order pizza" and from a Dynamic Q&A skill "MacPizza FAQs". You can test the disambiguation case using the following regression test case:

You can test the Q&A skill using the following regression test case:

ID

QUERY

TYPE

EXPECTED\_VALUE

Disambiguation

order

disambiguation

disambiguation

OrderDisambiguation

order

disambiguation

macpizza\_order.1

OrderFAQDisambiguation

order

disambiguation

disambiguation:macpizza\_order.1|mac\_pizza\_faqs.order\_faq

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/ai-agent/test/regression-testing/regression-test-file-format-1#understanding-results), for more information on understanding how the disambiguation results are evaluated.

### 

Card responses

If you have card responses in your agent, then you specify the card response in the regression file using the following format:

*   **field\_id**: Identifier of the form element in the card. See [Add form elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information
    
*   **value**: Value of the form element. This can be a simple string or can be an array of values based on the form element.
    

Example 1 (for form elements with an array of values: Checklist): Consider the following Card response in a Dialog skill node:

You can specify the "User query" in the regression test file as follows:

Example 2 (for a simple string input such as single-line element, multi-line element, date, number, rating, poll, and picklist): The following is an example of a single-line element card response that can be used in the regression file:

## 

**Understanding results**

For each row, in addition to ID, QUERY, and TYPE, the following columns are displayed in the results CSV:

*   EXPECTED\_VALUE: Indicates the expected value to be matched during the regression test run.
    
*   MATCHED\_VALUE: Indicates the actual value that matched during the regression test run.
    
*   RESULT: If the Expected value and Matched value are the same, the result is PASSED, else it is marked as FAILED. In a flow, if one row fails execution, then the subsequent rows in the flow are skipped from execution. Such cases are marked as SKIPPED.
    
*   INSIGHTS: Insights on how the query was analyzed are available in JSON format. You can use this for further analysis and debugging. See [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/test/regression-testing/guidelines-and-best-practices

### 

Preparing regression test cases for AI Agents

Users interact with AI Agents in many different ways. Some users ask complete, grammatically correct questions, while others use short phrases, incomplete requests, ambiguous statements, or queries with spelling mistakes. An effective regression suite should validate that the agent responds correctly across all these variations.

This article outlines the key categories of user queries to consider when building regression test cases for AI Agents. Including sufficient test coverage across these categories helps ensure that the agent continues to behave consistently as prompts, skills, knowledge sources, functions, and conversation flows evolve.

### 

Overview

One of the most effective ways to build regression test cases is to analyze real user interactions in **Conversation History**. Reviewing several months of conversation data can help identify common user behaviors, frequently asked questions, and variations in query patterns.

A good regression suite should verify that:

*   The agent responds correctly to supported use cases
    
*   Existing conversational flows continue to work as expected
    
*   Recent changes do not introduce unintended behavior
    
*   Responses remain consistent across different conversation paths
    
*   User-specific, time-based, and channel-specific scenarios continue to function correctly
    

When creating regression test cases, it is recommended to include multiple query variations for each use case. This helps validate the agent's ability to handle different ways users may express the same intent.

### 

Best practices

#### 

Modularize test cases

Consider organizing regression scenarios into logical groups based on the agent implementation.

Examples include:

*   Separate regression suites for different languages
    
*   Separate suites for individual skills or business functions
    
*   Separate suites for knowledge-based and transactional workflows
    
*   Separate suites for scenarios involving external integrations
    
*   Separate suites for text and voice experiences when applicable
    

Modularizing test cases simplifies maintenance and allows faster execution when only a subset of functionality needs validation.

#### 

Include multiple query variations

For each use case, include several variations that represent how real users may interact with the agent.

It is recommended to include at least five query variations for every major use case. More variations provide better coverage and help identify inconsistencies in agent behavior.

### 

Query categories to include

#### 

Well-formed queries

These are complete, grammatically correct user requests where the intent is clearly expressed.

Examples:

*   "I would like to reset my password."
    
*   "Can you help me update my account information?"
    
*   "I want to check the status of my order."
    

The agent should consistently identify the user's intent and provide the expected response.

#### 

Incomplete or short queries

Many users communicate using brief phrases rather than complete sentences.

Examples:

*   "Password reset"
    
*   "Order status"
    
*   "Update account"
    

The agent should be able to infer the intended action and continue the conversation appropriately.

#### 

Ambiguous queries

These queries do not clearly indicate the user's objective and may be interpreted in multiple ways.

Examples:

*   "I need help."
    
*   "Something isn't working."
    
*   "Can you assist me?"
    

Regression testing should verify that the agent responds appropriately, either by asking clarifying questions or guiding the user toward the correct flow.

#### 

Queries containing spelling errors

Users frequently make typing mistakes when interacting with agents.

Examples:

*   "resset my pasword"
    
*   "updat account info"
    
*   "ordeer status"
    

Regression testing should verify that the agent can still understand and respond correctly to common spelling variations.

#### 

Long and conversational queries

Users may provide detailed explanations instead of concise requests.

Examples:

*   "I recently changed my phone number and can no longer access my account. Can you help me update my information and regain access?"
    
*   "I placed an order a few days ago and would like to know whether it has already shipped."
    

The agent should correctly identify the primary user goal and provide an appropriate response.

#### 

Multi-turn conversations

AI Agents often support workflows that span multiple conversation turns.

Examples include:

*   Authentication flows
    
*   Appointment scheduling
    
*   Live agent transfers
    
*   Guided troubleshooting
    
*   Data collection forms
    

Regression testing should validate that the agent maintains context and follows the expected conversation sequence across all steps.

#### 

User property-based scenarios

Some agent behaviors depend on user-specific information.

Examples:

*   Customer tier or membership status
    
*   Authenticated user details
    
*   Contact center metadata
    
*   Channel-specific attributes
    

Regression tests should verify that the correct responses and actions occur when different user properties are provided.

#### 

Time-based scenarios

Certain responses may vary depending on business hours, holidays, or other time-dependent conditions.

Examples:

*   Live agent transfer availability
    
*   Office hours notifications
    
*   Scheduled service availability
    

Regression testing should validate behavior across different simulated times and dates.

#### 

Voice and text scenarios

Responses may differ between voice and text interactions.

Examples:

*   Voice-specific prompts
    
*   Shortened responses for voice channels
    
*   DTMF and call-handling workflows
    

Regression tests should validate both text and voice experiences when the agent supports multiple channels.

### 

Recommendation

Build regression suites using real user interactions wherever possible. Combining historical conversation data with coverage across all query categories helps ensure that AI Agents remain accurate, consistent, and reliable as they evolve over time.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor

[Analytics](/user-guide/ai-agent/monitor/analytics)[Query insights](/user-guide/ai-agent/monitor/query-insights)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/analytics

The Avaamo platform includes a built-in Analytics tool that visually represents agent and user interactions. This tool provides valuable insights into user engagement, helping you understand how users interact with your assistant. By leveraging these statistics, you can identify areas for improvement and optimize your agent to better align with your business requirements.

You can view the insights on the Analytics page as shown below:

## 

Select filter criteria

You can filter analytics results using the `Date range` and other `additional filter criteria` such as channel, tags, language, intent type, and Prompt Skill using the `Filter` option.

### 

Date Range

By default, the date range is a week (7 days) from the current date.

*   Click the date range to choose from various preset options based on your requirements.
    
*   You can view the Analytics board for the following periods:
    
    *   Yesterday
        
    *   Today
        
    *   Last 7 Days
        
    *   Last 14 Days
        
    *   Last 28 Days
        
    *   Last 90 Days
        
    *   Last 180 Days
        
    
*   To define a custom period, click `Custom Range` and select the start and end dates. The Analytics board allows you to view up to six months of data.
    

### 

Additional filter criteria

Click the filter icon next to the **Engagement** option to select additional filter criteria based on your requirements.

For each filter criteria, you can `select multiple values` as per your requirement.

**Key points**:

*   If you add multiple values within "a" filter criteria, then each value is an "OR" condition. **Example**: If you select the "Web" channel, "French" and "English" language, then the results displayed are for the selected date range in the "Web" channel" AND the "French" OR "English" language.
    
*   Only active intents are displayed in all the filter criteria.
    

You can select the following filters:

*   **Channel**: A list of the channels which has user queries in the selected date range is displayed.
    
*   **Language**: A list of all the languages which has user queries in the selected date range
    
    is displayed.
    
*   **Intent type**: A list of types of skills available.
    
*   **Prompt skill**: List of prompt skills available in the agent.
    
*   **Tag:** A list of all the custom tags available in your agent is displayed.
    

Click **Apply** to apply the filters and to view the results. Click **Clear** to clear all the selected filters.

## 

View results (Analytics board)

Based on the selected date range and filter criteria, the results are filtered and the data in the corresponding analytics boards are displayed. You can click any one of the blocks for a more detailed view. Note that the same filters selected in the "Analytics" are applied in the detailed view too.

### 

**Query**

The `Query` analytics board displays the total number of queries received by the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria. You can view a chart displaying the day-wise breakdown of queries received by the agent.

When you click the `chart` in the analytics board `Queries`, a table with a list of user queries in the selected date range is displayed.

1.  Each row in the table displays the following details:
    

**User query**: The user query that matches the search criteria.

**User**: The user with the date and time when the query was posted.

**Skill**: The name of the skill to which the user query belongs.

**Skill type**: Type of skill corresponding to the user query.

**Channel (Channel type)**: Name and the type of channel from which the user query was posted.

**Action**: Click `View Messages` in the `Action` column to view the conversation history corresponding to the user query. See Conversation history, for more information.

1.  You can further filter this page by skill type and view data monthly or yearly. Additionally, you can select a custom date range as needed.
    
2.  Click `ellipsis (three dots) -> Advance insights` at the right side of the table to view details in the `Query insights` page. See Query Insights, for more information.
    
3.  You can view the query analytics based on skill type for a specific day by hovering over the day in the chart.
    

### 

**Call Sessions**

The `Call Sessions` analytics board displays the total number of call sessions that occurred in the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Text Sessions**

The `Text Sessions` analytics board displays the total number of text sessions that occurred in the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Active Users**

The `Active users` analytics board displays the number of users interacting with the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Agent intervention**

The `Live Agent Transfers` analytics board displays the number of conversations transferred to Live Agent in the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Channels**

The `Channels` analytics board displays the percentage of agent-user interaction in different channels the agent is deployed on, for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Languages**

The `Languages` analytics board displays the percentage of agent-user interaction in different languages the agent is deployed on, for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Top Tags**

The `Top tags` page displays the report of the frequently triggered intent-tagged categories across different skill responses for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Top Prompt Skills**

The `Top Prompt Skills` analytics board displays the report of the frequently triggered Prompt skill intents in the agent for the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

### 

**Top Document Searched**

The `Top Documents Searched` widget displays a report of the most frequently searched documents across various skill responses based on the selected filter criteria. See [Select filter criteria](/user-guide/ai-agent/monitor/analytics#select-filter-criteria), for more information on the available filter criteria.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/call-analytics



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/query-insights

The query insights feature helps gives you a closer look into the conversations that users have with your agent. You can also use the insights to search and export the data for these words/phrases.

Refer [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/sms-gateway-analytics



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/outreach-dashboard



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/monitor/executive-dashboard



---

## Source: https://docs.avaamo.com/user-guide/ai-agent/best-practices

[JavaScript error handler guide](/user-guide/ai-agent/best-practices/javascript-error-handler-guide)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/best-practices/javascript-error-handler-guide

### 

Overview

The JavaScript Error Handler enables custom handling of runtime and real-time voice errors during conversations. When an error occurs, the platform invokes the configured error handler script with error details populated in `context.error`.

The handler can be used to:

*   Send fallback messages to users
    
*   Retry or guide the LLM using instructions
    
*   Forward calls to agents
    
*   Hang up calls gracefully
    
*   Trigger internal notifications, such as emails
    

### 

How it works

When an error occurs:

1.  The platform invokes the error handler
    
2.  Error details are available in:
    
    Copy
    
        context.error
    
3.  The handler evaluates the error type
    
4.  Based on the error, the handler can:
    
    *   Return `null`
        
    *   Return an `avm_instruction`
        
    *   Forward or hang up the call
        
    *   Send messages or emails
        
    

## 

Return value behavior

Return value

Behavior

`null`

Platform handles the error automatically

When `null` is returned:

*   The platform handles retries automatically
    
*   Non-fatal errors may trigger LLM retry logic
    
*   For `ResponseFailed`, error details are not passed to the LLM
    
*   For other errors, metadata may be passed internally
    

`{ status: "...", avm_instruction: "..." }`

Sends instructions to the LLM and regenerates a response. Use this only when explicit LLM guidance is required.

For example:

**Note:** 1. Always end error handling blocks with `return null`. Use `return { avm_instruction }` only when explicit guidance needs to be provided to the LLM. 2. Always match using:

Multiple errors can share the same `name` value while having different `error_name` values.

## 

Supported error handling actions

**Send a message:** Sends a spoken or text response to the user.

**Forward a call:** Transfers the call to another SIP destination.

**Hang up a call:** Disconnects the call.

## 

Common error types

### 

Errors worth handling

Error name

Event type

Description

Fatal

Recommended action

`ABRUPT_DISCONNECT`

`ABRUPT_DISCONNECT`

Call disconnected completely

Yes

Send internal email only

`AbruptRealtimeClosure`

`RealTimeEvent`

OpenAI WebSocket disconnected

Semi-fatal

Forward or hang up call

`ResponseFailed`

`RealTimeEvent`

LLM failed to generate response

No

Return `null`

`RealTimeError`

`RealTimeEvent`

Real-time event failure

No

Return `null`

`IdleTimeout`

`IdleTimeout`

User inactive after nudges

No

Forward, hang up, or guide LLM

`InvalidFunctionArguments`

`InvalidFunctionArguments`

Invalid tool arguments

No

Retry tool call

`FunctionNotFound`

`PromptTool`

Unknown tool invoked

No

Guide LLM

`TTSError`

`TTS`

Text-to-speech failed

No

Retry or send fallback

### 

Errors that do not require handling

These errors are automatically handled by the platform.

Error name

Event type

Platform behavior

`InvalidReturnType`

`PromptTool`

Platform handles invalid JS response

`OutroJSError`

`OutroJSError`

Safely skipped

`InvalidTransferSkillKey`

`TransferSkill`

Platform handles

`InvalidInstructionsError`

`PromptInstructions`

Platform disconnects

`InputTokenWarning`

`RealTimeEvent`

Logged internally

## 

Error handling examples

Complete working example demonstrating all error cases.

## 

Recommended best practices

*   Always match on:
    
*   Use `return null` for retryable platform-managed errors
    
*   Use `avm_instruction` only when explicit LLM guidance is required
    
*   Do not use LLM instructions after `AbruptRealtimeClosure`
    
*   Do not attempt call control after `ABRUPT_DISCONNECT`
    
*   Use internal email notifications only for fatal disconnected sessions

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/faqs



---
