# Classic Agent — Skill Customization
> 71 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill

[Quick overview](/user-guide/how-to/build-skills/create-skill/customize-your-skill/quick-overview)[Built-in functions window](/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)[Test customizations](/user-guide/how-to/build-skills/create-skill/customize-your-skill/test-your-skill)[Debug JS code](/user-guide/how-to/build-skills/create-skill/customize-your-skill/troubleshooting-tips)[Coding best practices](/user-guide/how-to/build-skills/create-skill/customize-your-skill/best-practices)[Reference library](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/quick-overview

**Avaamo platform** allows you to build advanced and complex functionality into the skill by utilizing the skill engine's ability to understand CSS, HTML, and JavaScript (JS). It provides a robust library with a rich set of objects and functions that can be leveraged to customize and create enterprise skills catering to a wide variety of business requirements across different domains.

The **customizations** can be as basic as providing a new custom skin, creating custom HTML controls/custom intents, or building custom input cards to complex functionalities such as controlling skill flow, custom API integration, and notifications. Broadly, the following are some of the **key concepts, objects, functions** that help you to customize your skill:

*   [Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context): Encapsulates various details of the user’s interaction with the skill in a particular context. **Example**: If a user’s intent is "I want to order cheese pan pizza", then broadly a context object contains details of the user, skill, skill flow, and the intent applicable at that context. In addition, it also contains details on the insights and history of skill conversation.
    
*   [Storage (global, user)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage): Store information either for a **global session** (applicable for all the users interacting with the skill) or for a specific **user session**.
    
*   [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control): Customize the navigation of the conversation flow using JS functions such as **goto\_output, goto\_node, goto\_intent, idle\_prompt, and execute\_intent**.
    
*   [Notifications (SMS, Email)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications): This allows the skill to send **SMS** and **email** to the users.
    
*   [Skill Commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands): Lists some of the skill commands to perform actions such as clear, reset, transfer (to name a few) during a user’s interaction with the skill. Primarily used for testing and troubleshooting.
    

See [Reference library](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window

Avaamo Platform provides several built-in JS functions and NodeJS utility wrappers that can be used to build enterprise agents with ease and minimal development effort. To name a few use-cases, it can be handling custom intents, or building custom input cards to complex functionalities such as controlling skill flow, custom API integration, and SMS/Email notifications.

For an agent developer, it is very useful if the syntax and usage of all such functions are available in the JS editor itself during agent development. This helps in:

*   Faster development, since the required functions are accessible within the JS editor itself during agent development.
    
*   Writing JS code with correct syntax, since examples can be copied and hence it is less error-prone.
    
*   Browsing any additional functions that can be of use during the development
    

**Built-in functions** window lists all the out-of-box functions available in the Avaamo platform that can be used in your JS code during agent development.

In this window you can:

*   Search the supported built-in JS functions in the Avaamo Platform.
    
*   Copy the example snippets and paste them into the editor.
    
*   Click the documentation link for more in-depth information.
    

### 

Where is this available?

The **Built-in functions** window is available in the JS editor of the following pages:

*   Skill -> Implementation -> Add agent response -> Javascript. See [Add skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#javascript), or more information.
    
*   Configuration -> JS Files. See [Add JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files), for more information.
    
*   Configuration -> Custom feedback. See [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    

### 

How to use it?

In the JS editor,

*   Use cmd+enter to ctrl+enter to enter the full-screen mode.
    
*   Click **Built-in functions** in the top-right corner to view a list of supported functions. Each function contains a description, syntax, example, and link to the documentation portal for further information.
    
*   Enter any keyword in the **Search** bar to filter the results. The list of functions based on the keyword is filtered.
    
*   Click the documentation link to learn more about the function.
    
*   Click the copy icon in the syntax or example of the required function and paste it into the JS editor.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to

All the scenarios are based on the MacPizza agent use case, where you are building a skill for Mac Pizza - a Quick Service Restaurant to place orders for pizzas.

## 

Before you begin

The following are generic steps for all the How-to topics listed in this section:

*   Ensure you have met all the [pre-requisites](applewebdata://E72AA735-5E27-4FEA-9818-F9DC6DD2ACD7/@avaamo/s/avaamo/~/drafts/-LwMqtgHWkBhIW87lD6g/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](applewebdata://E72AA735-5E27-4FEA-9818-F9DC6DD2ACD7/@avaamo/s/avaamo/~/drafts/-LwMqtgHWkBhIW87lD6g/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9ae47367-043d-436a-bab1-053a8b89e2a1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Agent** page, navigate to the **Skills** option in the left navigation menu. Search and open the required skill. See [Search skill](applewebdata://E72AA735-5E27-4FEA-9818-F9DC6DD2ACD7/@avaamo/s/avaamo/~/drafts/-LwMqtgHWkBhIW87lD6g/how-to/build-skills/manage-skill#search-skill), for more information.
        
    

**Key Point**: It is recommended to have a good working knowledge of JavaScript, HTML, and CSS.

## 

Learn how-to

This section describes how-to customize skills with a rich set of objects and functions provided in the Avaamo Platform using certain common scenarios.

### 

Use Context

The following scenarios are covered to explain the usage of the context object :

*   [Get user details](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/to-get-user-details)
    
*   [Get last message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-last-message)
    
*   [Get entity and slot details](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-domain-entity-details)
    
*   [Create context variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-variables)
    
*   [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties)
    
*   [Detect user device](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-channel)
    
*   [Switch user’s language](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/switch-users-language)
    
*   [Transfer to live agent](https://docs.google.com/document/d/1kLeCPObAeXeon6viGnywY3_9HQxSmfs-YS-xB561Ekg/edit#heading=h.b0a7f5vp0nz8)
    
*   [Get skill conversation insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-insights)
    

See [context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context), for more information on attributes supported in the context object.

### 

Use Storage

The following scenarios are covered to explain the usage of the storage object :

*   [Set and get global variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage#set-and-get-global-variables)
    
*   [Set and get user variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage#set-and-get-user-variables)
    

See [storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage), for more information on attributes supported in the storage object.

### 

Control Skill Flow

You can control the navigation of skill flow in one of the following ways:

*   [Using post processing](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/controlling-skill-flow#using-post-processing)
    
*   [Using JS output](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/controlling-skill-flow#using-js-output)
    

See [Flow Control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information on various functions supported to control skill navigation flow.

### 

Send Notifications

You can send SMS and email notifications to the users from skill. The following scenarios are covered:

*   [Using Email](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/sending-notifications#email-notification)
    
*   [Using SMS](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/sending-notifications#sms-notification)
    

### 

Customize Skill UI

You can programmatically customize skill UI in the following ways:

*   [Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)
    
*   [Create custom HTML web view](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/create-custom-html-web-views)
    
*   [Define custom intents](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/define-matching-rules-using-custom-intents)
    

### 

Integrate with API

Seamlessly integrate skill response with [REST](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1#rest-api) and [SOAP](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1#soap-api) API using a simple fetch call.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context

[Get user details](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/to-get-user-details)[Get last message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-last-message)[Get slot details](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-domain-entity-details)[Get environment variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-environment-variables)[Create context variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-variables)[Set user property](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property)[Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties)[Detect user tone and sentiment](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-user-tone-and-sentiment)[Detect user device](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-channel)[Detect user channel](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-user-channel)[Switch user's language](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/switch-users-language)[Transfer to live agent](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/transfer-to-live-agent)[Get skill conversation insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-insights)[Show ambiguous intents](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/show-ambiguous-intents)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/to-get-user-details

You can get the user details such as first name, last name, email, mobile number interacting with the agent from [context.user](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user) object.

**Notes**:

*   In the text, quick reply, card, or carousel, you can use **${context.user.<<attributes>>}** to extract the user details.
    
*   In a JS node, you can use **context.user.<<attributes>>** to extract the user details.
    

Consider that you wish to display a greeting message with the user's first name in the MacPizza agent. You can extract the user name using [context.user.first\_name](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user) in the response as follows:

The following greeting message is displayed to the user:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-last-message

You can get the last message of the agent using [context.last\_message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context). You can use this to:

*   Re-iterate or reconfirm the user’s intention
    
*   Extract user’s intent from the last message and perform certain validations
    

**Notes**:

*   In the text, quick reply, card, or carousel, you can use **${context.last\_message}** to extract the last message sent by the user.
    
*   In a JS node, you can use **context.last\_message** to extract the last message.
    
*   You can use **context.last\_message.<<uuid>>** to access card responses in the last message of the user. See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information.
    
*   If you have added a form element to a card response, then the system generates an element uuid that can be used in **context.last\_message.<<uuid>>**. See [Add Form Elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information.
    

Consider that you have used [context.last\_message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context) to log the last message of the agent in the console log while ordering a pizza for debugging purposes:

In the agent, the following details are displayed in the console:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-domain-entity-details

You can get the slot details using **context.entities.<<slot\_name>>** from the [context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context) object.

Consider that you wish to get the status of your pizza order. You can start by asking the order number, and then display that order number back to the user for confirmation. Consider that you have created a regular expression entity for the order number. See [Entity type with regular expression](/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent#entity-type-with-regular-expression), for the complete example.

In the JS response node, you can use the **slot name** to display the order number as follows:

Copy

    return "Checking the status of your order - "+ context.entities.order_number + ". 
    Will update you in a moment.";

In the agent, the following response is displayed:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-environment-variables

You can get the environment variable details using **context.<<env\_name>>** from the [context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context) object.

Consider that you wish to get the value of an environment variable "DEV\_API\_URL" in the JS code and use it for further processing. See [Define environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables), for more information on how to configure environment variables in your agent.

In the JS response node, you can use the **environment variable name** to get the value of the defined environment variable as follows:

In the agent, the following response is displayed. Note that this is just an illustration to show how environment variables can be extracted from the context object:

**Note**: The environment variable name is case-sensitive. You must use the exact case as defined.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-variables

You can use **context.variables** as temporary variables to store information required for a skill flow at a particular node. See [context variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/variables), for more information.

Consider that at the end of placing a pizza order, you wish to display the final order details to the user. At each stage of taking the order details, you can store the values in a **context variable** and later use the same to display the final order details:

The following message is displayed in the agent:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property

You can use **User.setProperty** to set the user property of the specified key to the indicated value. See [setProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty), for more information.

**Note**: To set multiple user properties, you can use `User.setProperties` method. See [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties), for more information.

### 

Example 1: Set user property to a single value

Consider that when a user starts interacting with the MacPizza agent, you wish to check if the user is registered and if the user is not registered, then you wish to set the `customerType` property of a user to `guest`.

The following is a sample JS to set the user property:

Copy

    User.setProperty("customerType","guest");

The following is a sample JS to get the user property that is displayed in the console:

Copy

    console.log("Customer type is " + context.user.custom_properties.customerType);

You can also view the set user properties in the user conversation history. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information:

### 

Example 2: Set user property to an array of values

Consider that an employee works out of two locations - `India` and `Australia` and you wish to set the `country` user property to both of these values.

The following is a sample JS to set the user property to an array of values:

The following is a sample JS to get the user property that is displayed in the console:

You can also view the set user properties in the user conversation history. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties

You can use [context.user.custom\_properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user) to get any additional user properties specified by the channel when sending a request to the agent.

You can set custom properties in one of the following ways:

1.  **Using parameter in the web channel URL**: In the web channel, you can pass custom properties in the URL, using `custom_properties[<<key1>>]=<<value1>>` in the web channel URL. See [Customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#advanced-customization-parameters), for a complete list of parameters that can be passed in the web channel URL.
    
2.  Using **User.setProperty:** You can also set custom properties using **User.setProperty**. See [Set user property](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property), for more information.
    

**Note**: You can also access custom properties using `context.params.custom_properties` from the [User Authentication Handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler).

Consider that the MacPizza application sends the **custId** and **customerType** properties in the **context user** object through a [custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel) when a user starts interacting with the agent:

Copy

    {
      "bot_uuid": "edb408fb-de21-45ed-b899-915eb5cab81e",
      "channel_uuid": "5acc8a59-1c51-4735-8b28-dc2f0151533c",
      "event_type": "MESSAGE",
      "user": {
        "uuid": "9ac15843-151d-47fb-8b3d-930b89ce797e",
        "first_name": "Will",
        "last_name": "Smith",
        "layer_id": "e3e7372d-70ee-43cc-ad2d-747e477e88e5",
        "custom_properties": {
          "custId": "11521932",
          "customerType": "guest"
        }
      },
      "conversation": {
        "uuid": "c040161d7299f0c5b3d995fc086c1ce9"
      },
      "sender": "BOT",
      "message": {
        "text": "Hi Will welcome to Mac Pizza",
        "request_message_uuid": "92cdceb1-6a4f-4096-a002-7dd656a21c54",
        "sequence": 1
      }
    }

The following is a sample JS to get the custom user properties and [store in a user session](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage#set-and-get-user-variables) that can be used later:

Since there are "console log" statements in the above code, you can use [Debug logs](/user-guide/how-to/build-agents/debug-agents/debug-logs) to view the log statements:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-user-tone-and-sentiment

You can use `context.insights.tone` and `context.insights.sentiment` to detect tone and sentiment from a user query to either change flows or respond with appropriate messages as per your business requirement. See [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

Consider that when you detect if a user is sad from the user query and then wish to provide a comforting response to the user. You can create a custom Smalltalk skill to capture such intents and write a JS code as follows:

Copy

    if(context.insights.tone == "Sadness" && context.insights.sentiment == "negative")
      {
        return "I am sorry to learn that. How can I cheer you up today?";
      }
      

In the agent, when a user query with sadness is detected, then the following response is displayed:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-channel

You can use **context.user.getDevice()** to get the device details of the user interacting with the agent. See [getDevice()](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#getdevice), for more information.

Consider that for analytical purposes you wish to log the details of the "user agent" with which the user is interacting with the MacPizza agent. The following is a sample JS to get the channel details and display them on the console. Similarly, you can get channel details and later use an external API to send data for analytical purposes, as required:

Copy

    var device = await(context.user.getDevice());
    return "User agent details: " + device.user_agent;

In the agent, the "user agent" details are returned:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-user-channel

You can use **context.user.getChannel()** to get the device details of the user interacting with the agent. See [getDevice()](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#getdevice), for more information.

Consider that for analytical purposes you wish to log the details of the "Channel name" with which the user is interacting with the MacPizza agent. The following is a sample JS to get the channel details and display them on the console. Similarly, you can get channel details and later use an external API to send data for analytical purposes, as required:

Copy

    var channel = await(context.user.getChannel());
    return "Here is the channel name - " + channel.name;

In the agent, the channel details is displayed:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/switch-users-language

You can use [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch) to switch to a different language in the conversation. To detect the language used in the agent, you can use **context.insights.detected\_language**. See [insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

**Note**: You can switch to only those languages that are added to the skill.

Consider that in MacPizza agent, English and French languages are supported and you wish to switch based on user preference. You can use **Language.switch('fr-FR')** to achieve this functionality.

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/transfer-to-live-agent

You can transfer to a live agent using [Agent.transfer](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.transfer) method in JS.

Consider that in the MacPizza agent, for user intent, the response leads to an unhandled query. You can provide an option to transfer to a live agent. The following is a sample JS to transfer to a live agent:

Copy

    Agent.transfer();
    return "I am sorry, I am still learning. Transferring to an Agent for more assistance.";

The following response is displayed in the agent:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-insights

You can get the skill conversation insights using [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights). Typically, insights can be used for troubleshooting purposes to analyze the skill flow and to create a better user experience.

Consider that in the MacPizza agent, for user intent, the response leads to an unhandled query. You can use **context.insights** to further analyze the skill flow. The following is a sample JS to get the insight details from the context object and display on the console:

Copy

    console.log(context.insights);

In the agent, the following details are displayed in the console:

[Use context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context)[How-to](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/show-ambiguous-intents

You can use a set of closely matched intents to show the most "common questions" that are related to a user’s query in a particular context. This feature helps you to anticipate other questions that users might have as a follow-up that you can show in a section such as "Here’s related content" or as "Other Common Questions".

You can show the best answer and additionally show three “common questions” from the curated set of responses that are related to the user query. This feature can help in:

*   Reducing false positives and providing more options from a similar set of responses already available in the agent.
    
*   Providing a pleasant user experience where the agent attempts to provide the best possible answers from all possible available options in the agent.
    
*   Providing guided navigation that allows users to explore more options.
    

**Key Point**: You can achieve this functionality only when you have a set of responses applicable to the same context of a user query.

This example shows how to loop through the ambiguous intents in the pre-unhandled node.

**To show common questions:**

*   You must have a Dialog skill with a pre-unhandled node in the invocation intent. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.
    
*   In the JS of the pre-unhandled node, get a list of ambiguous intents from context.insights - context.insights.ambiguous\_intents
    

Copy

    if (!!context.insights.ambiguous_intents) {
        var common_questions = renderCommonQuestions(
           context.insights.ambiguous_intents
        );
    }

*   Loop through the top three disambiguous intents and add it to card links to display to the user. The following is a sample code:
    

Copy

    var renderCommonQuestions = (ambiguous_intents, display_num = 3) => {
        // Purpose: render list response for other common questions
        // Input: list of ambiguous intents
        // Output: list
        var common_links = [];
        for (var intent of ambiguous_intents) {
            common_links.push({
                type: "post_message",
                title: intent.document,
                value: intent.document
            })
            if (common_links.length === display_num) {
                break;
            }
        }
        var common_questions = {
            card: {
                description: "<b>Other Common Questions</b>",
                links: common_links
            }
        };
        return common_questions;
    }

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage

You can use storage functions to store variables in a [global session](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage#set-and-get-global-variables) (applicable to all the users) or store variables specific to a [user session.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage#set-and-get-user-variables)

**Key point**: It is recommended to use storage variables for transactional data that is specific to your agent or users, such as, agent configuration parameters, user attributes. Typically, these are in smaller data sets. For large data sets such as blob and files, which have thousands or millions of data records, the recommended approach is to develop external APIs for storing and managing such data. You can then pass parameters to query the API to get only filtered data that is required for your agent. Such large data sets must not be stored in the storage variables, as it may impact performance.

### 

Set and get global variables

You can use [Storage.global.set](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage#global-session) and [Storage.global.get](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage#global-session) to set the value and retrieve a value in a global session respectively.

Consider that you wish to get the status of your pizza order:

*   Get the order number from the user
    
*   Send an API request to an external application (Mac Pizza Application) to get the order status. Now, consider that the API request to get the order status requires an access token from an Authentication Service such as OAuth. As the access token remains the same across all the users, you can use **Storage.global.get** and **Storage.global.set** to set the value and retrieve a value in a global session respectively.
    

The following is a sample JS that stores the received API Bearer token from authentication service, gets the value, and the displays on the console:

Copy

    await(Storage.global.set("BearerToken", body.access_token)); //POST request body received from Auth service
    let storedvalue = Storage.global.get("BearerToken");
    console.log("Bearer token is - "+storedvalue);

### 

Set and get user variables

You can use [Storage.user.set](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage#user-session) and [Storage.user.get](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage#user-session) to set the value and retrieve a value in a user session respectively.

Consider that you wish to keep a count of all the unhandled user queries in the MacPizza agent such that if there are more than 2 unhandled queries in a user session, then a customized message is displayed. You can achieve this by, creating a JS node in the main node and set a count storage variable in a user session:

Copy

    await(Storage.user.set("unhandledCount", 0));

In the **Unhandled** intent, create a JS node to get the unhandled count from a user session and display a customized message based on the number of unhandled counts:

Copy

    if(Number(Storage.user.get("unhandledCount")) === 1){
     Storage.user.set("unhandledCount", 0);
     return "I am sorry, I am still learning. Visit MacPizza website, for more options.";
    }
    else{
     await(Storage.user.set("unhandledCount", 1));
     return "I am sorry, I am still learning. Can you rephrase your request?";
    }

The following response is displayed in the agent if there are more than 2 unhandled queries in a user session:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/controlling-skill-flow

You can use functions such as goto\_node, goto\_intent, execute\_intent, or goto\_output in the JS while building a skill flow for navigating to different nodes in the flow, based on your business requirements. See [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information.

Consider that at the end of placing a pizza order, you wish to navigate to another node that provides options to place order starters in the Order skill of the MacPizza agent. At the end of taking the order details,

*   You can add a JS node with **return goto\_node('<<skill\_key>>.<<intent\_key>>')** and navigate to the required node. See [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information.
    
*   You can also specify the same suing **Goto Skill Message** in the **Advanced Settings** of the response node. See [Advanced Settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.
    

In the agent, the navigation is displayed as follows:

Similarly, you can use JS in post-processing for navigating to different nodes in the flow based on your business requirements. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information on post-processing.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js

You can add tags dynamically to the skill response using `Tag.append('tag_name')`method. This is useful when you are dynamically constructing a response using JS and wish to add tags to the response.

**Notes**:

*   You can only add tags that are configured in your agent. See [Add tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information on how to configure. If you add a tag that is not configured in your agent, then an error is thrown. You can view the error in Debug -> JS errors page. See [Debug JS code](/user-guide/how-to/build-skills/create-skill/customize-your-skill/troubleshooting-tips), for more information.
    
*   You can add only one tag`Tag.append('tag_name')`method. If you wish to add multiple tags, then you can call this method multiple times as required. You can associate 50 tags to a skill response.
    

Consider that you are dynamically building a skill response using ListView. You can append tag before returning the response using Tag.append method:

Copy

    Tag.append('order');
    
    return [{
        "list_view": {
            "top_element_style": "compact",
            "items": [{
                    "title": "Coke",
                    "subtitle": "All Chilled",
                    "links": [{
                        "type": "post_message",
                        "title": "Get a pack of 5",
                        "value": "coke"
                    }]
                },
                {
                    "title": "Coffee",
                    "subtitle": "Cold",
                    "links": [{
                        "type": "post_message",
                        "title": "Buy one get one",
                        "value": "coffee"
                    }]
                }
            ]
        }
    }]; 

**Important:** `Tag.append` is deprecated; use `Tag.asyncAppend.`This method provides greater flexibility and simplifies implementation.

Use the example below:

You can view the top tags in the Analytics board. See [View analytics of top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags), for more information on the "Top Tags" Analytics board.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback

You can add feedback in any response (Dialog, Q&A, Smalltalk) using a JavaScript`collectFeedback()`method.

**Notes**:

*   Typically, feedback is collected in the last node of a flow. Hence, `collectFeedback()` method must be specified in the last JS block response.
    
*   You must always return a message after `collectFeeback()` method in the JS code.
    
*   Currently, the **Collect feedback** functionality is not supported in Facebook Messenger.
    

Consider that you wish to add feedback only for certain specific Q&A intents. You can

*   Disable **Collect feedback** slider for the Q&A skill. See [Edit Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#edit-skill), for more information.
    

*   Add a JS node in the Q&A response where you wish to collect feedback and use `collectFeedback()` method in the JS.
    

*   Click **OK** to save the response and **Save** to save the agent changes.
    
*   Click the agent chat widget at the bottom-right corner to test the agent. Provide a user query in the agent to trigger the Q&A response. You can see that the feedback is displayed only for this Q&A response.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/sending-notifications

You can send SMS notifications from the skill using the **SMS.send** function. See [Notifications](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications#email-send), for more information on the complete syntax.

Consider that after placing the order in **Mac Pizza Agent**, you wish to send an SMS notification to the user. The following is a sample JS to send SMS notifications with order details:

Copy

    SMS.send("Thank you for placing order. Your order has been placed successfully and will be delivered soon. Visit Mac Pizza website for more details",["+918889997654"]);

An SMS is sent according to the details mentioned in the **SMS.send** function:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/send-email-email.send

You can send email notifications from the skill using the **Email.send** function. See [Notifications](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications#email-send), for more information on the complete syntax.

Consider that after placing the order in **Mac Pizza Agent**, you wish to send an email notification to the user. The following is a sample JS to send email notifications:

Copy

    Email.send({ 
    from: ["admin@macpizza.com"],
     to: ["john@avaamo.com"],
     subject: "Mac Pizza Order Placed Successfully.",
     body: "Thank you for placing order. Your order has been placed successfully and will be delivered soon. Visit Mac Pizza website for more details."
    })

An email is sent according to the details mentioned in the **Email.send** function:

### 

SMS notification

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel

You can use `SmartCall.forward` method to forward the call to another number such as a help center number or a call center number, in case the user requires any further assistance in the C-IVR flow.

**Note**: This option works if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

Copy

    return SmartCall.forward(<<message>>,<<phoneno>>);

*   **message**: Specify any message that you wish to be read out to the user before forwarding the call to the number.
    
*   **phoneno**: Provide the complete phone number with a country code.
    

Consider that you have an "Order Status" skill in your pizza agent that checks for the order status using the order number provided by the user.

*   You have deployed your agent in the C-IVR channel.
    
*   You have designed a flow, where you wish to transfer the call to an agent if requested by the user.
    
*   You can use the following JS method to forward the call or use can use the [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#call-forward) response from the UI.
    

Copy

    return SmartCall.forward("Forwarding to an agent. Please wait.","+918887651234");

### 

For "**refer"** transfer mode

You can use `SmartCall.forward` method to forward the call to a SIP number when you have deployed your agents on [Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys), [SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip), [Nice InContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact) channels.

Copy

    return SmartCall.forward("<<message>>", "<<SIP number>>?call_type=sip", {<<Header>>});

**Note:**

*   You must get the <<SIP number>> from the customer call stack. This is the number where Avaamo Platform forwards the call.
    
*   You must also get the details of the specific headers that must be passed in the call forward request.
    

**Example**: The following example illustrates a Nice InContact SIP call forward request:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/hangup-call-c-ivr-channel

You can use `SmartCall.hangup` method to hang up the call in the C-IVR flow with a message.

**Note**: This option works if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

Copy

    return [<<message>>, SmartCall.hangup()];

Consider that you have an "Order Status" skill in your pizza agent that checks for the order status using the order number provided by the user. You have deployed your agent in the C-IVR channel. You have designed a flow, where you wish to hang up the call after reading out the status of the pizza order. You can use the following JS method to read out the message and hang up the call:

Copy

    return ['You order is on its way and will be delivered in 20 minutes. Hanging up the call now. Have a good day.',SmartCall.hangup()];

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Carousel response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/carousel)[ListView response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view)[Quick Reply response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply)[Delay](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/delay)[Graphs & Charts](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/graphs-and-charts)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card

You can add customized input cards and links as skill responses in a JS node. The following is the syntax to add a customized card input:

Copy

    "card": {
     "notification_message": "<<custom_feedback_message>>", 
     "title": "<<card_title>>",
     "description": "<<card_description>>",
     "showcase_image_path": "<<image_URL>>",
     "links": [{
     <<customized card links>>
     },...]
     "inputs": [{
     <<customized card input>>
     },...]
    }
    … - Indicates one or more parameter

**Key points**:

*   All the image types and sizes supported in the card input UI are also applicable when specifying images in the card input JS.
    
*   There is a 191-character limit for all the user-defined text fields except the description field. You can specify upto 60000 characters in the `description` field.
    
*   You can add upto 25 form elements to a card.
    
*   Note the following points regarding Custom feedback. See [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    
    *   Not all Card elements are supported in Custom feedback. See individual elements for more information.
        
    *   Currently, any media content including images is not supported in Custom feedback.
        
    
*   If the agent response contains sensitive PII data such as name, account number, and password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.
    

Attribute

Description

Type

notification\_message

Indicates the message displayed by the agent after providing custom user feedback. Note that this attribute is applicable only when you are using the custom feedback option.

See [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback#example-positive-feedback), for an example. For example, in this message, you can say "Thank you for your valuable feedback. We appreciate your time and response."

String

title

Indicates the title of the card.

String

description

Indicates the description of the card.

Note that the purpose of this field must be used to describe the element using simple text only. It is recommended to avoid using scripting in the description.

String

showcase\_image\_path

Indicates the image used for the card. See [Card Images](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-images), for more information.

Integer

inputs

Indicates an array of customized card inputs:

*   [Single Line Text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/single-line-text)
    
*   [Multi-Line Text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/multi-line-text)
    
*   [Date and Time](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time)
    
*   [Select (Picklist)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/select-picklist)
    
*   [File Upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload)
    
*   [Polls](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/polls)
    
*   [Checklist](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/checklist)
    
*   [Rating](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/rating)
    

An array of JSON key-value pairs.

links

Indicates an array of customized card links such as Post Message, Web Page, Deep Link, Navigation link (hidden\_content), and Web View.

See [Card Links](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links), for more information.

An array of JSON key-value pairs

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/single-line-text

You can add a single-line input card in the skill response.

## 

Syntax

The following is the syntax to add a single line of text in the card input:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   **hint** attribute is not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS teams channel.
    

Copy

    "card": {
     "inputs": [{
     "type": "single_line_text",
     "title": "<<text_title>>",
     *"sub_type": "<<single_text_subtype>>",
     *"should_validate": true/false,
     *"hint": "<<hint_text>>",
     *"format": "<<format>>",
     *"regex_format": "<<regex_format>>",
     *"default_value": "<<default_text>>",
     *"uuid": "<<secure_random_uuid>>"
     },...]
    }
    
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

title

Indicates the title of the text field.

String

sub\_type

Indicates the text subtype. Supported values:

*   **password**: Masks the characters entered by the user.
    
*   **number**: Allows a user to enter only numbers. A number scroll is provided to increment and decrement numbers.
    
*   **email**: Validates if the email is in the required format. You can use a hint to indicate the expected format.
    
*   **url**: Validates if the URL is in the required format. You can use a hint to indicate the expected format.
    

String

should\_validate

Indicates if the user can skip entering values for the field or not before submitting. By default, the value is set to true.

Boolean

hint

Indicates a sample hint for the user to enter the value in the field. This is displayed in the input field before the user enters a value.

String

format

Indicates the format in which the data is collected. The data entered by the user is automatically converted into the specified format.

Typically, can be used for a number field to collect time or phone numbers. Example: xx:xx, xxxxxxxxxx

String

regex\_format

Indicates regex validation to be performed on the field before submission.

String

default\_value

Indicates the default value displayed in the text field when rendered to the user.

String

uuid

Indicates a secure random UUID that can be used later to get the text entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

Text entered by the user is available in the

[context.last\_message](https://docs.google.com/document/d/1kLeCPObAeXeon6viGnywY3_9HQxSmfs-YS-xB561Ekg/edit#heading=h.sprg97pwog6).

Syntax: context.last\_message.<<uuid>> or context.last\_message\["<<uuid>>"\]

String

### 

Example 1

The following is a sample JS to provide a single text field in card input with different options:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the text entered by the user.

**Key Points:**

*   You can submit even without entering details of the Last Name since "should\_validate" is set **false** for the field.
    
*   Since the **email** field is set with **sub\_type** as **email**, on submission, the system validates if the email syntax is correct. However, it doesn’t validate if the email exists or not. The hint provides a sample example of the expected format for the email field.
    
*   Since the **phone number** field is set with **sub\_type** as a **number** and with a format, the numbers entered by the user are automatically converted into the specified format.
    
*   Since the **blog URL** field is set with **sub\_type** as **url**, on submission, the system validates if the URL syntax is correct. However, it doesn’t validate if the URL exists or not.
    

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/multi-line-text

You can add a multi-line input card in the skill response.

### 

Syntax

The following is the syntax to add a multi-line text in the card input:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields except `data_capture` field. You can specify upto 60000 characters in the `data_capture` field.
    
*   **hint** attribute is not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    

Copy

    "card": {
     "inputs": [{
     "type": "data_capture",
     "title": "<<text_title>>",
     *"should_validate": true/false,
     *"hint": "<<hint_text>>",
     *"default_value": "<<default_text>>",
     "uuid": "<<secure_random_uuid>>"
     },...]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

title

Indicates the title of the text field.

String

should\_validate

Indicates if the user can skip entering values for the field or not before submitting. By default, the value is set to true.

Boolean

hint

Indicates a sample hint for the user to enter the value in the field. This is displayed in the input field before the user enters a value.

String

default\_value

Indicates the default value displayed in the text field when rendered to the user.

String

uuid

Indicates a secure random UUID that can be used later to get the text entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

Option selected by the user is available in the context.last\_message.

Syntax: context.last\_message.<<uuid>>

String

### 

Example

The following is a sample JS to provide a multi-line text field in card input with hint text:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the text entered by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time

You can use date and time in the card input to provide a date picker for the user.

### 

Syntax

The following is the syntax to add a picklist response in the card input:

**Notes**:

*   There is a 191 character limit for all the user-defined text fields.
    
*   **format** and **disable\_weekends** attributes are not supported in the Microsoft Teams channel due to the limitations on the channel's side.
    
*   In the MS Teams channel, only the "date" type is supported due to the limitations on the channel's side.
    
*   See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    

Copy

    "card": {
     "inputs": [{
     "title": "<<cardTitle>>",
     "type": "date_time/date",
     "uuid": "<<secure_random_uuid>>",
     *"disable_weekends": true/false,
     *"default_value": "<<default_value>>",
     *"min_date": "<<min_date_value>>",
     *"max_date": "<<max_date_value>>",
     *"should_validate": true/false,
      "format": "<<date format>>",
     }]
    }
    * - Indicates optional parameter

Attribute

Description

Type

title

Indicates the title of the card.

String

uuid

Indicates a secure random UUID that can be used later to get the date and time entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

Date selected by the user is available in the context.last\_message.

Syntax: `context.last_message.<<uuid>>`

String

disable\_weekends

Indicates if weekends must be disabled in the date picker or not. This is an optional attribute.

This attribute is not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance), for more information.

Boolean

default\_value

Indicates the default value displayed in the date

picker in the format - MM/DD/YYYY HH:MM. If you

are using only Date, then you can skip specifying

HH:MM. This is an optional attribute.

String

min\_date

Indicates the minimum date or the start date

displayed in the date picker in the format -

MM/DD/YYYY HH:MM. If you are using only Date,

then you can skip specifying HH:MM. This is an

optional attribute.

String

max\_date

Indicates the maximum date or the end date

displayed in the date picker in the format -

MM/DD/YYYY HH:MM. If you are using only Date,

then you can skip specifying HH:MM. This is an

optional attribute.

String

should\_validate

Indicates if the user can skip entering values for the field or not before submitting. By default, the value is set to true.

Boolean

format

Indicates the date formats. By default, it is "DD-MM-YYYY HH:mm"

You can change the format accordingly Like

*   MM-DD-YYYY
    
*   DD-MM-YYYY
    

String

### 

**Examples**

**Example 1**: The following is a sample JS to provide a date picker in the card input without default values:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>`to get the date selected by the user.

**Example 2**: The following is a sample JS to provide a date picker in the card input with default values and other options:

In the agent, the following response is displayed:

Note that the date from the date picker is displayed in the specified format. You can use `context.last_message.<<uuid>>` to get the date selected by the user.

**Example 3**: The following is a sample JS to provide a date picker in the card input with only Date:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the date selected by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/select-picklist

You can use a picklist in the card input to provide a list of options for the user to choose from. This also acts as a search box that allows you to filter and select values.

## 

Syntax

The following is the syntax to add a picklist response in the card input:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   You can add any number of options to the picklist. However, only the first 50 options in a picklist are visible in the UI. As you start entering the text in the **Select** textbox of the picklist, the values are filtered and displayed in the list.
    
*   If you are using custom feedback, then for each option in the picklist you must specify the UUID. Currently, in the Custom feedback JS code, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page. See [Example 3: Custom feedback](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/select-picklist#custom-feedback), for a sample code. Also see [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    

Copy

    "card": {
     "inputs": [{
     "type": "picklist",
     "title": "<<picklist_title>>",
     *"default_value": "<<uuid_value>>",
     *"should_validate": true/false,
     "uuid": "<<secure_random_uuid>>",
     "options": [{
     *"uuid": "<<unique_id>>",
     "option": "<<value>>"
     },...]
     }]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

title

Indicates the title of the picklist.

String

default\_value

Indicates the default value selected in the picklist when rendered to the user. You must specify the uuid value from the options in the default value. Note that this is an optional attribute.

If you specify a default value and wish to see all the values in the picklist, then you must remove the default value in the search box.

String

should\_validate

Indicates if the user can skip entering values for the field or not. By default, the value is set to true.

Boolean

uuid

Indicates a secure random UUID that can be used later to get the option selected by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

Option selected by the user is available in the context.last\_message.

Syntax: context.last\_message.<<uuid>>

String

options

Indicates an array of options in the picklist. If you wish to specify the default value, then specify the following in each array element:

*   **uuid**: Indicates a secure random UUID that can be used to specify the default\_value. See Section 4.4 in
    
    [https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.
    
*   **option**: Value of the option
    

An Array of JSON key-value pairs

## 

Examples

### 

Picklist without default value

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Picklist with default value

In the agent, the following response is displayed:

Clear the default value in the search box, to display all the values in the picklist. You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Custom feedback

The following is a sample code to illustrate how to use Picklist in Custom feedback. Note that here, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page.

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload

You can add an input card with an option to upload files to your agent.

**Key points**:

*   You can upload any type of file, however, the maximum limit for each file is 4GB.
    
*   You can upload images of all types and resolutions. There is no restriction on the resolution of the image.
    
*   There is a 191-character limit for all the user-defined text fields.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   File upload is not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    

## 

Syntax

The following is the syntax to add an upload option in the card input:

Copy

    "card": {
     "inputs": [{
     "type": "file/file_group",
     "title": "<<upload_title>>",
     "uuid": "<<secure_random_uuid>>",
     *"should_validate": true/false,
     *"image_only": true/false
     },...]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

title

Indicates the title of file upload.

String

type

Indicates if you wish to select a single file or multiple files at a time for uploading:

*   file: This option allows you to select a single file
    
*   file\_group: This option allows you to select multiple files at a time
    

String

should\_validate

Indicates if the user can skip uploading a file or not. By default, the value is set to true.

Boolean

uuid

Indicates a secure random UUID that can be used later to access the file uploaded by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

File uploaded name is available in the [context.last\_message](https://docs.google.com/document/d/1kLeCPObAeXeon6viGnywY3_9HQxSmfs-YS-xB561Ekg/edit#heading=h.sprg97pwog6).

Syntax: context.last\_message.<<uuid>>

String

image\_only

Indicates if the file upload must allow uploading of only images or not. Set true to upload only images. By default, the value is false. Currently, this support is only for image file types.

Boolean

## 

Supported file types and size

Make a note of the following points related to the supported file types and sizes in the Avaamo Platform:

*   You can upload any type of file, however, the maximum limit for each file is 4GB.
    
*   You can upload images of all types and resolutions. There is no restriction on the resolution of the image.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    

## 

Examples

The following examples of file upload are listed:

*   [Single file upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#single-file-upload)
    
*   [Upload images only](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#upload-images-only)
    
*   [Access uploaded file and send email](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#access-uploaded-file-and-send-email)
    
*   [Upload multiple files](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#upload-multiple-files)
    
*   [Making file upload optional](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#making-file-upload-optional)
    

### 

**Single file upload**

The following is a sample JS to provide a file upload option:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` and `context.last_message.<<uuid>>.name` to access the name and identifier of the file that is uploaded.

### 

**Upload images only**

The following is a sample JS to provide a file upload option for images only:

In the agent, the following response is displayed:

Note that when you click upload, only image file types are enabled for uploading.

You can use `context.last_message.<<uuid>>.uuid` and `context.last_message.<<uuid>>.name` to access the name and identifier of the file that is uploaded.

### 

Access the uploaded file and send an email

**Note**: You can access the uploaded file only when files are not masked in the agent. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

Get the **Access Token** from **Agent -> Configuration -> Settings** page:

Add the following sample JS to access the uploaded file and send it as an email attachment:

**Note:** The URL in the sample JS provided above is deprecated and is no longer available as of the v8.2.0 release. Instead, use `context.last_message.<<uuid>>.url`. Refer to the sample JS below for accessing the uploaded file and sending it as an email attachment:

### 

Upload multiple files

The following is a sample JS to provide upload multiple files using file upload:

You can use `context.last_message.<<uuid>>` and `context.last_message.<<uuid>>.name` to access the name and identifier of the file that is uploaded.

### 

Making file upload optional

By default, when you use file upload via card, uploading a file is required. The system validates if the file is uploaded or not when the user clicks **Submit**. However, in certain cases, you can make the file upload optional.

The following is a sample JS to show how you can make file upload an optional parameter. Note that you can set "should\_validate" to "false" if you wish to make file uploading optional.

In the agent, you can submit the request successfully without uploading the file:

If you have uploaded a file, then you can use `context.last_message.<<uuid>>` and `context.last_message.<<uuid>>.name` to access the name and identifier of the file that is uploaded.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/polls

You can add an input card with an option to poll to capture the opinion or vote of the users interacting with the skill.

## 

Syntax

The following is the syntax to add a poll response:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   If you are using custom feedback, then for each option in the Polls you must specify the UUID. Currently, in the Custom feedback JS code, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page. See [Example 3: Custom feedback](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/polls#custom-feedback), for a sample code. Also see [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    

Copy

    
    "card": {
     "inputs": [{
     "type": "poll",
     "title": "<<poll_title>>",
     *"default_value": "<<uuid_value>>",
     *"should_validate": true/false,
     "uuid": "<<secure_random_uuid>>",
     "options": [{
     *"uuid": "<<secure_random_uuid>>",
     "option": "<<value>>"
     },...]
     }]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

**Attribute**

**Description**

**Type**

title

Indicates the title of the poll.

String

default\_value

Indicates the default value selected in the poll when rendered to the user. You must specify the uuid value from the options in the default value.

Note that this is an optional attribute.

String

should\_validate

Indicates if the user can skip entering values for the field or not. By default, the value is set to **true**.

Boolean

uuid

Indicates a secure random UUID that can be used later to get the text entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

File uploaded name is available in the [context.last\_message](https://docs.google.com/document/d/1kLeCPObAeXeon6viGnywY3_9HQxSmfs-YS-xB561Ekg/edit#heading=h.sprg97pwog6).

Syntax: context.last\_message.<<uuid>>

String

options

Indicates an array of options in the poll. If you wish to specify the default value, then specify the following in each array element:

*   **uuid**: Indicates a secure random UUID that can be used to specify the default\_value. See Section 4.4 in
    
    [https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.
    
*   **option**: Value of the option
    

An array of JSON key-value pairs

## 

**Examples**

### 

Polls without default value

The following is a sample code to illustrate how to use Polls in cards without providing any default value:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Polls with default values

The following is a sample code to illustrate how to use Polls in cards with a default value:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Custom feedback

The following is a sample code to illustrate how to use Polls in Custom feedback. Note that here, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page.

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/checklist

You can add an input card with a checklist for your end-users to select from.

## 

Syntax

The following is the syntax to add a checklist response:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   If you are using custom feedback, then for each option in the checklist you must specify the UUID. Currently, in the Custom feedback JS code, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page. See [Example 3: Custom feedback](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/checklist#custom-feedback), for a sample code. Also see [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    

Copy

    "card": {
     "inputs": [{
     "type": "checklist",
     "title": "<<checklist_title>>",
     *"default_value": "<<uuid_value>>",
     *"should_validate": true/false,
     "uuid": "<<secure_random_uuid>>",
     "options": [{
     *"uuid": "<<secure_random_uuid>>",
     "option": "<<value>>"
     },...]
     }]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

title

Indicates the title of the checklist.

String

default\_value

Indicates the default value selected in the checklist

when rendered to the user. This is a comma-separated list and you can specify multiple values.

You must specify the uuid value from the options in the default value. Note that this is an optional attribute.

String

should\_validate

Indicates if the user can skip entering values for the field or not. By default, the value is set to true.

Boolean

uuid

Indicates a secure random UUID that can be used later to get the text entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

If multiple checklists are used in a card, each checklist must have a unique UUID.

The option selected by the user is available in the [context.last\_message](https://docs.google.com/document/d/1kLeCPObAeXeon6viGnywY3_9HQxSmfs-YS-xB561Ekg/edit#heading=h.sprg97pwog6).

Syntax: context.last\_message.<<uuid>>

String

options

Indicates an array of options in the poll. If you wish to specify the default value, then specify the following in each array element:

*   **uuid**: Indicates a secure random UUID that can be used to specify the default\_value. See Section 4.4 in
    
    [https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.
    
*   **option**: Value of the option
    

An array of

JSON key-value

pairs

## 

**Examples**

### 

Checklist without default value

The following is a sample code to illustrate how to use Checklist in cards without providing any default value:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Checklist with default value

The following is a sample code to illustrate how to use Checklist in cards with a default value:

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

### 

Custom feedback

The following is a sample code to illustrate how to use Checklist in Custom feedback. Note that here, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page.

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/rating

You can add an input card with a rating system in the skill response.

### 

Syntax

The following is the format to add a rating response:

**Note**: There is a 191 character limit for all the user-defined text fields.

Copy

    "card": {
     "inputs": [{
     "type": "rating",
     "title": "<<rating_title>>",
     "uuid": "<<secure_random_uuid>>"
     }]
    }

**Attribute**

**Description**

**Type**

title

Indicates the title of the rating card.

String

uuid

Indicates a secure random UUID that can be used later to get the text entered by the user. See Section 4.4 in

[https://tools.ietf.org/html/rfc4122](https://tools.ietf.org/html/rfc4122), for more information.

Option selected by the user is available in the context.last\_message.

Syntax: context.last\_message.<<uuid>>

String

### 

Example

The following is a sample JS to specify rating in response:

Copy

    return {
      "card": {
        "inputs": [
          {
            "title": "Rate our service",
            "type": "rating",
            "uuid": "784cc8d5-b3d0-4cbc-89c4-4ef3c2fa43ea"
          }
        ]
      }
    }

In the agent, the following response is displayed:

You can use `context.last_message.<<uuid>>` to get the option selected by the user.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links

You can add customized card links in the skill response.

## 

Syntax

The following is the syntax to add customized card links:

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   Currently, in the custom feedback, the post\_message type is not supported. See [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.
    

Copy

    "card": {
     "links": [{
     "type": "<<link_type>>",
     "title": "<<link_title>>",
     *"url": "<<link_url>>",
     *"value": "<<link_value>>",
     *"srcdoc": "<<source_doc>>",
     *"webview_height_ratio": "<<view_type>>",
     *"hidden_content": "<<hidden_content>>",
     *"format": "<<date_picker_format>>"
     *"minDate": "<<date_picker_start_date>>",
     *"maxDate": "<<date_picker_end_date>>"
     },...]
    }
     * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

type

Indicate the type of link. Supported values:

*   web\_page
    
*   post\_message
    
*   deeplink. Note that this value is deprecated from v6.4.0 onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.
    
*   web\_view\_srcdoc
    
*   web\_view\_url
    
*   date
    

String

title

Indicates the title of the link.

String

url

Indicates the URL of the link.

String

value

Indicates the value of the link.

String

srcdoc

Indicate the HTML document to display in a

web view; all styles must be inline.

*   Webview (HTML) supports upto 65000 characters. If you have a requirement to use a larger HTML, then it is recommended to use [Webview (URL)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links#web-view-url) option.
    
*   Specify HTML in the proper standard format. Include all the required elements such as HTML, HEAD, TITLE, and BODY. The "title" tag is displayed in the popup title. If you wish to omit the "title" tag, then it is still recommended to include an empty "title" tag, so that it adheres to proper HTML standards.
    

String

webview\_height\_ratio

Indicates the view type of web view document

such as Compact, Tall, Full.

String

hidden\_content

Indicates hidden content not visible to the user. Typically, used for navigation flow such as the Goto node, and to start over the conversation from the beginning. See [hidden\_content](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links#hidden_content), for more information.

Note that when you have `hidden_content` in the Card links, the text displayed is as mentioned in the `value` and the `context.last_message` or the processed message in query insight contains `hidden_content.` See [Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context) and [Message insights](/user-guide/how-to/build-agents/debug-agents#using-insights), for more information.

This is an optional attribute.

String

format

Indicates the format of the date picker. This is an optional attribute.

String

minDate

Indicates the minimum date in the date picker link. minDate value must be specified in the same format used for the date picker. This is an optional attribute.

String

maxDate

Indicates the maximum date in the date picker link. maxDate value must be specified in the same format used for the date picker. This is an optional attribute.

String

## 

Examples

### 

Post message link

The following is a sample JS for the Post Message link:

In the agent, the following response is displayed:

### 

Web page link

The following is a sample JS for Web Page link:

In the agent, the following response is displayed:

### 

Date picker link

Use the following format to provide a date picker in a quick reply response. Here, `date_format` is any date format that you wish to display in the agent.

In the agent, the following response is displayed with a date picker link button:

Click the link to display the date picker:

**Deprecated**: You can also use`avaamo:#app/datepicker/messages/new?format=<<date_format>>`, for providing a date picker in the Card response.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Date picker link with minimum and maximum dates

Use the following format to provide a date picker in a quick reply response. Here, `date_format` is any date format that you wish to display in the agent.

In the agent, the following response is displayed with a date picker link button:

Click the link to display the date picker

**Deprecated**: You can also use`avaamo:#app/datepicker/messages/new?format=<<date_format>>`, for providing a date picker in the Card response.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Goto\_node

Use `#goto_node_<<skill_key>>.<<intent_key>>`in the `hidden_content` parameter of the card JS to navigate to a specific node in the flow.

In the agent, the following response is displayed. When you click the title link, it navigates to the corresponding goto node as specified in the quick reply JS:

**Deprecated**: You can also use `avaamo:#messages/hidden/%23goto_node_<skill_key>>.<<intent_key>>/new/<<message>>,`for navigation to a different node in the conversation flow.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Start\_over

Use `start over`in the `hidden_content` parameter of the quick reply JS to reset the current conversation and displays the greeting message. Note that this does not create a new conversation UUID.

Click the `Order from the start` title link to start the conversation from the beginning:

**Deprecated**: You can also `use avaamo:#messages/hidden/start%20over/new/<<message>>,`to start over the conversation from the greeting message.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Web view

The following is a sample JS for Web view:

In the agent, the following response is displayed:

### 

Web view URL

The following is a sample JS for Web view URL:

**Notes**:

*   The URL must be accessible without any privacy and security restrictions from the agent.
    
*   The link you are using must be allowed to be opened in an iframe.
    
*   Ensure that you have whitelisted all the URLs that are rendered inside the Team's web view or Task Module in the Teams App. See [Microsoft teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.
    

### 

Mail link

The following is a sample JS for mail URL:

In the agent, the following response is displayed:

You can click "email" to send an email to the specified email address.

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-images

You can add a card image to a customized input card using **showcase\_image\_path**. Upload the image to your own repository such as GitHub and specify the same image URL in the card input.

*   Recommended image types: PNG, JPEG
    
*   Recommended image size: 800px \* 420px (width to height)
    

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    

Copy

    return [{
      "card": {
        "showcase_image_path": "<<image_URL>>",
        "inputs": [
          {
            "type": "picklist",
            "title": "Pick",
            "uuid": "opt",
            "options": [
              "Cheese",
              "Corn",
              "Tomato",
              "Onion"
            ]
          }
        ]
      }
    }]

**Example**: The following is an example to add a card image:

[Card response (Javascript)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)[Build dynamic skill response](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/carousel

You can add a customized carousel in the skill responses. A carousel is an array of card inputs. See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information.

**Notes**:

*   You cannot add form elements such as picklist, rating, checklist in the carousel. See [Add Form Elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information.
    
*   There is a 191 character limit for all the user-defined text fields.
    
*   If the agent response contains sensitive PII data such as name, account number, password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.
    

### 

Syntax

Broadly, the following is the syntax to add a customized card input:

Copy

    "carousel": {
       "cards": [{
        <<customized cards>>
        },...]
    }
    … - Indicates one or more parameter

Attribute

Description

Type

[cards](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card)

Indicates an array of customized cards.

An array of JSON key-value pairs

### 

Examples

Example: The following is a sample JS for carousel skill response:

Copy

    return [{
        "carousel": {
            "title": "Payment Method",
            "cards": [
            {
                    "card": {
                        "title": "NetBanking",
                        "links": [{
                            "type": "post_message",
                            "title": "confirm",
                            "value": "confirm"
                        }]
                    }
                },
                {
                    "card": {
                        "title": "Cash on Delivery",
                        "links": [{
                            "type": "post_message",
                            "title": "confirm",
                            "value": "confirm"
                        }]
                    }
                },
            ]
        }
    }];
    

In the skill, the following response is displayed:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view

You can add a customized list view using JavaScript in an agent's response.

**Notes**:

*   There is a 191 character limit for all the user-defined text fields.
    
*   If the agent response contains sensitive PII data such as name, account number, password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.
    

### 

Syntax

Broadly, the following is the syntax to add a customized list view:

Copy

    "list_view": {
       *"top_element_style": "<<style_type>>",
       "items": [{
       "title": "<<item_title>>",
       *"subtitle": "<<item_subtitle>>",
       *"image_path": "<<image_url>>",
       "links": [{
        <<customized links>>
        },...]
       },...]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

top\_element\_style

Indicates the style type for the list view. Supported values - Large, Compact.

Default value is Large.

String

items

Indicates the array of items in the list view. You can add upto 50 items to the list. Each item contains the following details:

*   title: Title of the item
    
*   subtitle: Sub-title of the item
    
*   image\_path: Image used for the item. You can add an image similar to the way you add an image to a card. See [Card Images](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-images), for more information.
    
*   links: An array of customized card links such as Post Message, Web Page, Deep Link, and Web View.
    

Array

links

Indicates an array of customized list view links such as Post Message, Web Page, Deep Link, and Web View.

All the link types supported for card links are available in the list view also. See [Card Links](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links), for more information.

An array of JSON key-value pairs.

### 

Example

The following is a sample JS for list view:

In the agent, the following response is displayed:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply

You can use a quick reply to add an acknowledgment to the user’s questions or responses.

**Notes**:

*   There is a 191-character limit for all the user-defined text fields.
    
*   **Date Picker** link for Quick Reply is not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    
*   If the agent response contains sensitive PII data such as name, account number, password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.
    

## 

Syntax

The following is the syntax to add a quick reply response:

Copy

    quick_reply: {
        "content": "<<quick_reply_message_content>>",
        "links": [
          {
          "title": "<<link_title_1>>", 
          "type": "<<link_type_1>>", 
          "value": "<<link_value_1>>",
          *"format": "<<date_picker_format>>"
          *"minDate": "<<date_picker_start_date>>",
          *"maxDate": "<<date_picker_end_date>>"
         *"hidden_content": "<<hidden_content>>"
           },...
         ]
    }
    * - Indicates optional parameter
    … - Indicates one or more parameter

Attribute

Description

Type

content

Indicates the message content of the quick reply response.

String

links

Indicates an array of links in the quick reply response. Each array contains:

*   **title**: Title of the link
    
*   **type**: Type of link. Supported values are
    
    *   post\_message
        
    *   deeplink (used for providing links). Note that this value is deprecated from v6.4.0 onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.
        
    *   date
        
    
*   **value**: Value of the link. Note that `value parameter with URLs` is deprecated from v6.4.0 onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.
    
*   **hidden\_conten**t: Hidden content not visible to the user. Typically, used for navigation flow such as Goto node or start over. This is an optional attribute.
    
*   **format**: Specify the format of the date picker link.
    
*   **minDate:** Set the minimum date in the date picker link. minDate value must be specified in the same format used for the date picker.
    
*   **maxDate**: Set the maximum date in the date picker link. maxDate value must be specified in the same format used for the date picker.
    

An Array of JSON key-value pairs

## 

Examples

### 

Post message

The following is a sample JS to post a message in Quick reply:

In the agent, the following response is displayed with the provided quick reply links:

### 

Date picker

Use the following format to provide a date picker in a quick reply response. Here, `date_format` is any date format that you wish to display in the agent.

In the agent, the following response is displayed with a date picker link button:

**Deprecated**: You can also use`avaamo:#app/datepicker/messages/new?format=<<date_format>>`, for providing a date picker in the Quick reply response.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Date picker with Min and Max dates

Use the following format to provide a date picker in a quick reply response. Here, `date_format` is any date format that you wish to display in the agent.

**Deprecated**: You can also use`avaamo:#app/datepicker/messages/new?format=<<date_format>>&minDate=<<date in epoch format>>&maxDate=<<date in epoch format>>`, for providing a date picker in the Quick reply response.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Goto node

Use `#goto_node_<<skill_key>>.<<intent_key>>`in the `hidden_content` parameter of the quick reply JS to navigate to a specific node in the flow.

In the agent, the following response is displayed. When you click the Get Starters link button, it navigates to the corresponding goto node as specified in the quick reply JS:

Click the `Just starters for now` button to navigate to the starter node directly:

**Deprecated**: You can also `use avaamo:#messages/hidden/%23goto_node_<skill_key>>.<<intent_key>>/new/<<message>>,`for navigation to a different node in the conversation flow.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

### 

Start over

Use `start over`in the `hidden_content` parameter of the quick reply JS to reset the current conversation and displays the greeting message. Note that this does not create a new conversation UUID.

**Example**: The following is a sample JS to use a "Start over" in a quick reply:

In the agent, the following response is displayed with a start-over link button:

Click the `Wrong order` button to start the conversation from the beginning:

**Deprecated**: You can also `use avaamo:#messages/hidden/start%20over/new/<<message>>`to start over the conversation from the greeting message.

However, using `deeplink in the type parameter` and `specifying the URL in the value parameter` is deprecated from the v6.4.0 release onwards. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/delay

You can programmatically include a delay in the JS response using **\_.delay** function. This can be used to provide better user experience when you are using JS to perform backend API integrations.

If you expect multiple responses to be returned from the JS block, then you can introduce a delay between the responses. This provides a better conversational experience to the user by allowing them to read responses that are verbose, instead of displaying all the responses at once.

The following is a sample usage of delay in a Promise function:

Copy

    return new Promise ((res,rej) =>{
      _.delay(function(text){
        res(text);
       }, 3000, "Response after 3 seconds");
    });

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/graphs-and-charts

You can create chart visualizations such as Pie Chart, Bar Chart, Dial Chart using the data in your agent. The visualizations can be used in the description of cards created from JS or in webview with HTML source.

**Note**: The visualizations may not render on other channels such as Facebook and Twitter.

### 

Dial chart

You can find the source [here](https://github.com/avaamo/bot-response-visualizations/blob/master/dial-chart.html). Modify the size of the SVG and viewBox property values, as required.

**Note**: Pass one of these values to the _getChart_ method \[_low_, _moderately\_low_, _moderate_, _moderately\_high_, _high_\] and the pointer points to the respective part of the dial.

### 

Pie chart

Find the source code [here](https://github.com/avaamo/bot-response-visualizations/blob/master/pie-chart.html). The pie chart has its own legend too. The color of each slice of pie is customizable. The size of the overall pie is also customizable.

### 

Bar chart

Find the source [here](https://github.com/avaamo/bot-response-visualizations/blob/master/bar-chart.html). The bar chart has its own legend too. The color of each bar is customizable.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/create-custom-html-web-views

You can create custom HTML web views on **Web Channel** and **Facebook** for the skill responses configured using a card, carousel, or list view. See [Build Skill Response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses) and [Web Channe](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel)l, for more information on creating custom HTML web views for a **card, carousel, and list view**.

Consider that you wish to create a **custom HTML web view** that displays more details on how pizzas are prepared in the **Order Skill** of **Mac Pizza Agent** via a "Know more.." button.

**To create a custom HTML web view**:

*   Click the skill response where you wish to custom HTML web view.
    
*   Add a button, select **Webview (HTML)**.
    
*   Add HTML code and select a view such as **Compact**, **Tall**, and **Full**.
    

*   Click **OK** and **Save** the skill.
    
*   In the **Skill** page, click the agent icon in the bottom right corner. Either you can use **goto\_node\_<<node number>>** to directly test the node or specify intents that navigate to that node.
    
*   Click the link that is configured to display the web view. The custom web view HTML as specified in the response is displayed.
    

**Notes**:

*   Currently, Compact, Tall, and Full view are not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    
*   If the agent response contains sensitive PII data such as name, account number, password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/define-matching-rules-using-custom-intents

You can define your own matching rules using custom intents in nodes using JS. See [Build skill Response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information on creating user intents while building skill response.

Consider that you allow users to register in the MacPizza agent. You can create a Register skill to handle all registration-related user conversations. In the Register skill, you start by asking the name under which the user wishes to register. In order to match the name entered by the user in the skill, you can define a custom intent with matching rules.

The following is a sample JS that validates if the user has entered only a single word (assuming name in this case) using regex in [context.last\_message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context):

Copy

    var regex = /^[a-zA-Z]+$/;
    if(regex.test(context.last_message.trim())){
      return true;
    }

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1

[REST and SOAP API](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/rest-and-soap-api)[Hybrid SDK](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/hybrid-sdk)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/rest-and-soap-api

You can seamlessly integrate skill response with API using:

*   REST API response block
    
*   SOAP service call within a Javascript response block
    

## 

REST API

You can integrate skill response with REST API using a simple fetch call. In the node where you require to integrate with REST API, use the fetch API with required methods such as POST, GET. See [fetch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/advanced-js-libraries#fetch), for more information.

Consider that you wish to get the status of your pizza order:

1.  Get the order number from the user
    
2.  Send an API request to an external application (Mac Pizza Application) to get the order status.
    

The following is a simple GET call to get the order status:

Copy

    let query = "<<order_number>>";
    let api_url = "<<API_URL>>&q="+query;
    return fetch(api_url, {
     method: 'GET',
     headers: {
     'Content-Type': 'application/json'
     }
     }).then(res => res.json()).then(json => {
    …..process the JSON

## 

SOAP API

You can also integrate skill response with SOAP API. The following is a sample SOAP API block that can be used as a reference:

See [SOAP](https://en.wikipedia.org/wiki/SOAP), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/hybrid-sdk

Avaamo Platform is offered as a SaaS service that runs on AWS (Amazon Web Services) in multiple regions. All the conversations is through a secure, reliable, and scalable messaging infrastructure where each message is encrypted.

Typically, in business involving sensitive data such as banking and insurance or in-cases where the business has strict security measures that require the integration logic and access credentials to stay within the company network. Hence, it is required for the **Avaamo agent** to access on-premise applications and perform bi-directional interactions for providing value-added services to the user.

You can integrate with Avaamo Platform using **Hybrid SDK** that combines the performance, scale, and cost benefits of the cloud with the access control and permission limitations of enterprise data access.

**Key Point**: You can clone and use this repository [https://github.com/avaamo/hybrid\_sdk](https://github.com/avaamo/hybrid_sdk), to get started on Hybrid SDK integration.

### 

Pre-requisites

Ensure that the customer machine must be allowed to connect to the Avaamo servers via HTTPS

### 

How does it work?

Avaamo agents access company data. The accuracy and security of data is critical to provide a good user experience. Hence, when you are developing an agent, it is important to understand how agents can access company data.

Conventionally, the enterprise application exposes REST API/SOAP Web Services to the internet that can be consumed by the agent**.** This approach has the following limitations:

*   It opens up the service/data for all kinds of internet hacking.
    
*   Involves full IT services to open ports and set up security.
    
*   Requires exposing unrestricted security credentials with a third party.
    

Avaamo’s **Hybrid SDK** eliminates these problems by providing native integration SDKs to connect your data/services to the agent. It is easy and secure, where the integration logic and access credentials stay within the company network. The following illustration depicts the overall data flow in the Hybrid SDK:

1.  Avaamo SDK initiates and automatically connects to the Avaamo servers over the HTTPS connection. In this step, Avaamo agent credentials are used. You may initialize your custom logic and connect to your data/services in this step or wait for the agent requests to appear. The SDK handles the connectivity with the Avaamo Conversation engine and acts as the secure pipe to carry messages back and forth from the users.
    
2.  The user sends a message to the agent.
    
3.  Avaamo conversation engine that is driving the conversation with the user determines it needs to access data/service.
    
4.  A request is passed into your integration code via the SDK. Your code connects to your enterprise's systems to fetch necessary data or trigger further actions and a response is sent back to the Conversation engine.
    
5.  The conversation engine processes the service response and replies to the user.
    

This approach does not require any ports to be opened in the firewall or require you to set up a VPN. The only requirement is the machine must be allowed to connect to the Avaamo servers via HTTPS protocol. It is not even required to enable full internet access to that machine.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/test-your-skill

After you customize your skill, you can test the skill in the following ways:

*   In the **Skill** page, click agent icon in the bottom right corner. See [Test Skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill), for more information.
    

*   You can also use [skill commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands) as required for your testing:
    
    *   In cases where you have a custom script created at a particular node, then you can also use skill commands such as **#goto\_node\_<<node\_number>>** to directly display the output of a node.
        
    *   In cases where you wish to test skill in a specific language, then you can use bot commands such as **#switch\_lang <<languageCode>>**, example: **#switch\_lang fr-FR**

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/troubleshooting-tips

In cases where you find errors in the JS or you are unable to get the expected results, then you can further debug or troubleshoot in the following ways:

### 

Use \_debug\_ skill command

You can use _**debug**_ command to get a more detailed verbose output. In the **Dialog Studio** page, click the **agent** icon in the bottom right corner. Type **\_debug\_** command in the skill:

The detailed output is displayed in the agent simulator that contains details on the variables, insights, entities, last message (to name a few) that can be used to further troubleshoot:

See [\_debug\_](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands), for more information.

### 

Use console.log

Use **console.log** to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure. You can then use **Debug Logs** options in **Dialog Studio** to display all the logs generated using console.log.

Consider that in the **Order Status Skill** of MacPizza Agent, for an intent you have logged **context**:

Copy

    console.log(context);

In the **Dialog Studio** page, click the agent icon in the bottom right corner. Click **Debugging Logs** option from **Debug -> Debug Logs** menu. Enter the order number. Context details are displayed in the **Debug Logs** window.

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

See [Debug Logs](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/best-practices

This article suggests a few **Dos** and **Dont's** of JS programming during skill flow customizations.

### 

**Readability/Maintainability**

Use meaningful variables and function names to enhance the readability of the code. It is recommended to:

*   Use a space between variables and operators in expressions
    
*   Maintain the correct indentation (use SHIFT + TAB for auto indenting the code)
    
*   Remove obsolete code and debug comments that are no longer required.
    
*   Add one-line comments to help other developers understand the purpose of the function.
    

### 

**Modularity**

Do not repeat code when the same functionality is to be achieved in multiple places. Abstract large code block into modular functions with meaningful names and put in Common JS so that it can be used in different parts of the skill as required. Also, see the [best practices of using JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files#best-practices).

### 

**Exception handling**

Exception handling enables you to gracefully handle errors. The following are the recommended best practices:

*   Use exception handling for any code that might throw unexpected errors.
    
*   Avoid using try/catch for code that has definitive behavior.
    
*   Do not use exception handling for control flow.
    
*   You must handle all the errors inside the functions only as the errors cannot propagate outside of functions. This implies that you cannot throw an exception inside a function and catch it outside.
    

### 

Optimization

Use variables to store values returned by functions (if any) when that value is to be reused. Do not call the function again when using the value.

*   **Context variables**: It is recommended to use context variables wherever applicable for all transient or temporary data that needs to persist beyond the current JS scope. See [Context variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/variables), for more information.
    
*   **Storage variables**: Store information either for a global session (applicable for all the users interacting with agents) or for a specific user session. Storage functions are typically used to store values throughout the agent. See [Storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage), for information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library

[Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context)[User.setProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty)[User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties)[User.removeProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.removeproperty)[Storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage)[Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control)[Notifications](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications)[Agent commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands)[Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch)[Agent.transfer](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.transfer)[Agent.setContext](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.setcontext)[Advance JS libraries](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/advanced-js-libraries)[SmartCall (C-IVR)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/smartcall-c-ivr)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context

Context object encapsulates various details of the user’s interaction with the agent at a particular instance in the agent's flow. **Example**: If a user’s intent is "I want to order cheese pan pizza", then broadly, a context object contains details of the user, agent, agent flow, and the intent applicable at that instance in the agent flow. In addition, it also contains details on the insights and history of agent conversation.

### 

Syntax

A context attribute can be accessed using **${context.<<attributes>>}** in a text message or using **context.<<attributes>>** in JavaScript.

### 

Attributes

The following is a sample context JSON object:

**Note:** In the JSON structure, ellipses (...) are used for brevity. Refer to individual sections for more information.

Structure

Example 1

Example 2

Copy

    {
     "bot_id": 2154,
     "bot_layer_id": "fe8ee61c-f039-4cdc-8986-5bebec9edf08",
     "conversation_uuid": "1faa40c8253e65aa02bfd02fd8643d35",
     "user_uid": "dashboard_admin_test_user_696",
     "last_message": "i want to order cheese pan pizza",
     "visible_message": "i want to order cheese pan pizza",
     "last_message_timestamp": 1566205610480070,
     "last_message_custom_properties": {...},
     "message_uuid": "807dc584-1703-4b4e-b978-dce52a965e02",
     "device_uuid": "30809947-ec9a-4408-93ac-c7523d1f3058",
     "bot_name": "Mac Pizza",
     "bot_description": "order pizza and more",
     "is_validation_user": false,
     "phone": [...],
     "layer_id": "dashboard_admin_test_user_696",
     "last_name": "C",
     "first_name": "John",
     "custom_properties": {...},
     "<<env_variable>>": "https://cx.avaamo.com/v1/getdata.json",
     "email": [...],
     "location": [...],
     "organization": [...],
     "money": [...],
     "person": [...],
     "percent": [...],
     "url": [...],
     "credit_card": [...],
     "datetime": [...],
     "datetime_range": [...],
     "number": [...],
     "entities": {
     "<<slot_name_1>>": [...],
     "<<slot_name_2>>": [...]
    },
     "stepmain": {
     "input": "reset"
     },
     "variables": {...},
     "user": {...},
     "constants": {...},
     "insights": {...},
     "intent_name": "order pizza",
     "history": [...],
     "is_agent_enabled": true
    }

User query: I am very excited today I want to order pepper pan pizza. Where pepper and pan are both entity slots.

User query: I want to travel by air and sea. Where air and sea are both entity slots.

The following attributes are supported in the context object:

Attribute

Description

Type

bot\_id

Indicates a unique identifier of the agent.

Integer

bot\_layer\_id

Indicates a unique agent identifier internally used by the Avaamo platform.

String

conversation\_uuid

Indicates a unique identifier of conversation per user. Note that conversation/uuid is different for each user.

String

user\_uid

Indicates a unique identifier of the user interacting with the agent.

String

last\_message

Indicates the last message sent to the agent. For form fields, you can access last\_message in one of the following ways:

*   context.last\_message.ID
    
*   context.last\_message\["ID"\]
    
*   context.last\_message\[expression\]
    

Note that **context.last\_message** can store any valid Javascript object.

**Examples**:

// context.last\_message.ID

context.last\_message.da83d;

// context.last\_message\["ID"\]

context.last\_message\["3a62c2"\];

// context.last\_message\[expression\]

var control = "3a62c2";

context.last\_message\[control\];

See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more details.

String

visible\_message

Indicates the last visible message sent to the agent. Note that in case of hidden messages, visible and last messages can be different.

String

last\_message\_timestamp

Indicates timestamp of the last message sent by the user to the agent in milliseconds.

UTC Timestamp

last\_message\_custom\_properties

Indicates any additional user properties specified in the last message.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept":"quality"

},

JSON key-value pairs

message\_uuid

Indicates a unique identifier of the message.

String

device\_uuid

Indicates a unique identifier of the device from which the agent is being used.

String

bot\_name

Indicates the name of the agent specified during creation.

String

bot\_description

Indicates the description of the agent specified during creation.

String

is\_validation\_user

Indicates if queries posted to the agent are from an actual user or from regression tests. Returns true, if the queries posted to the agent are from regression tests.

Boolean

phone

Indicates an array of phone numbers of the user interacting with the agent.

**Example**: phone\["+16503835663", "+919999988888"\].

Array

layer\_id

Indicates a unique user identifier internally used by the Avaamo platform.

String

last\_name

Indicates the last name of the user interacting with the agent.

String

first\_name

Indicates the first name of the user interacting with the agent.

String

custom\_properties

Indicates any additional user properties specified when sending requests to the agent.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept":"quality"

},

**NOTE:** If you have set custom user properties, then you can use `context.user.custom_properties.<>` to get the value of the set property.

JSON key-value pairs

environment variables

Indicates the environment variables configured in your agent.

JSON key-value pairs

email

Indicates an array of email Ids of the user interacting with the agent.

**Example**: email\["john@gmail.com", "john@hotmail.com"\]

Array

location, organization, money, person, percent, URL, credit\_card, DateTime, datetime\_range, number

Indicates all the system entities that are predefined and available for all the agents. Note that values for these are populated as applicable during the execution of a user’s intent in the agent flow.

Array

entities -> <<slot\_name>>

Indicates slot names extracted and applicable during the execution of a user’s intent in the agent flow.

JSON with an array of slot\_name as key-value pairs

step<<node>>

Indicates the steps in the agent flow for which the user’s intent is executed. There can be multiple steps and each is specified as individual JSON key-value pairs.

<<node>> here refers to **main** for starting step or a specific node number. Example:

"step14": {

"input": "i want to order cheese pan pizza"

},

JSON key-value pairs

[variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/variables)

Indicates the temporary variables that are defined to store information required for the agent flow at a particular node.

JSON key-value pairs

[user](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user)

Indicates the details of the user interacting with the agent.

JSON key-value pairs

constants

Indicates environment variables constants defined for the agent. These environment variables are global for all users of the agent.

**Examples**: External service access credentials like web service login credentials, webservice\_username, webservice\_password.

JSON key-value pairs

[insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights)

Indicates insights into how the user’s intent was analyzed and matched in the agent flow.

JSON key-value pairs

[history](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/history)

Indicates the history of the message such as created date and time, actual message, and the sender of the message generated during the execution of the user’s intent in the agent flow.

JSON with an array of entity\_name as key-value pairs

intent\_name

Indicates the name of the intent that mapped to the user query.

String

is\_agent\_enabled

Indicates if the live agent is enabled or not for the agent.

Boolean

### 

When is the context reset?

*   By default, the context is reset at the leaf node of the Dialog skill. However, if you wish to retain certain values, then you can consider using other storage options depending on the use case. See [Use storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage), for more information.
    
*   If you wish to reset context in a non-leaf node, then you can use the **Reset Context** slider in the Skill Response -> Advanced Settings. See [Reset Context in Advanced Settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reset-context), for more information.
    
*   Note that when you use `execute intent, goto node, or goto output`from the leaf node, then the context is not reset as the agent is still in the same transactional flow and context. Example: Consider that in the last post-processing node of the Pizza order flow, you have specified `return execute_intent('main','I want to check my order status')`. When the specified intent is executed at the transferred node, the previous context is still available.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/variables

Context variables are temporary variables that can be used to store information required in an agent flow. The values stored in the context variables are available in that conversation flow unless you switch to another flow.

You can use **context.variables** in JavaScript blocks to retain information across multiple conversations. See [how to create context variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-variables), for a sample scenario.

**Key Points**:

*   It is recommended to use context variables for transactional data that is specific to your agent or users, such as agent configuration parameters, and user attributes. Typically, these are in smaller data sets. For large data sets such as blobs and files, which have thousands or lacs of data records, the recommended approach is to develop external APIs for storing and managing such data. You can then pass parameters to query the API to get only filtered data that is required for your agent. Such large data sets must not be stored in the context variables, as it may impact performance.
    
*   By default, the context is reset at the leaf node of the Dialog skill. You can use the **Reset Context** slider to reset context in a non-leaf node if required. See [Reset Context in Advanced Settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information. Also, see [When is context reset?](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context#when-is-the-context-reset) for more information
    

### 

Create context variables

Create context variables using the following syntax:

Copy

    context.variables.<<variable_name>> = <<value>>

Attribute

Description

variable\_name

Indicates the name of the variable. A variable name must be an alphanumeric string and must be unique within the agent flow.

value

Indicates the value to be assigned to the variable. It can be any of the data types supported in JavaScript, for example, numbers, strings, boolean, arrays and objects:

*   context.variables.count =0;
    
*   context.variables.toppings=\["pepper", "cheese","olives"\];
    

### 

Get context variables

**Get** the context variable using the key and assign it to another variable.

Copy

    var val = context.variables.<<variable_name>>;

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user

Context user contains the details of the user interacting with the agent. The following functions are supported:

*   [context.user.getDevice()](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#getdevice); function to detect the device used by the user interacting with the agent.
    
*   [context.user.getChannel()](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#getchannel); function to get the channel details used by the user interacting with the agent.
    

### 

Attributes

The following is a sample JSON of user details in the context object:

Copy

    "user": {
     "phone": null,
     "layer_id": "dashboard_admin_test_user_696",
     "last_name": "C",
     "first_name": "John",
     
     "custom_properties": {}
     },

Attribute

Description

Type

phone

Indicates an array of phone numbers of the user interacting with the agent.

Array

layer\_id

Indicates a unique user identifier internally used by the Avaamo platform.

String

last\_name

Indicates the last name of the user interacting with the agent.

String

first\_name

Indicates the first name of the user interacting with the agent.

String

custom\_properties

Indicates any additional user properties specified when sending requests to the agent.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept": "quality"

},

JSON key-value pairs

call\_sid

Indicates the unique ID for any incoming or outgoing voice call successfully created in the C-IVR channel.

String

user\_phone\_number

Indicates the phone number used by the user for connecting to the C-IVR channel.

String

agent\_phone

Indicates the phone number used by the agent assigned for connecting to the C-IVR channel. You can view the agent's phone number in the C-IVR channel settings. See [Conversational IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

String

sso\_token

Indicates the user access token

This is set only when the agents are deployed in MS Teams channel with user access token enabled. See [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

String

### 

getChannel

You can use **context.user.getChannel()** to get channel details used by the user interacting with the agent. The following is a sample **context.user.getChannel()** JSON object:

**Key point**: Use await when you wish to assign the result to a variable and use it later.

`var channel = await(context.user.getChannel());`

`return channel.name;`

Attribute

Description

Type

name

Indicates the name of the channel with which the user is interacting with the agent.

String

uuid

Indicates a unique identifier of the channel.

String

type

Indicates the type of channel with which the user is interacting with the agent such as C-IVR, web, Facebook, SMS, voice, WhatsApp.

String

### 

getDevice

You can use **context.user.getDevice()** to get device details used by the user interacting with the agent. The following is a sample **context.user.getDevice()** JSON object:

**Key point**: Use await when you wish to assign the result to a variable and use it later.

`var device = await(context.user.getDevice());`

`return device;`

Attribute

Description

Type

device\_uuid

Indicates a unique identifier of the device

String

os\_name

Indicates the operating system of the device with which the user is interacting with the agent.

String

user\_agent

Indicates the browser’s user agent, applicable only for the web channel.

String

zone\_offset

Indicates the time zone offset from GMT for the user.

Decimal

utc\_offset

Indicates the time zone offset from UTC for the user.

Decimal

location\_info

Indicates the IP address of the user machine, applicable only for the web channel.

JSON key-value pairs

locale

Indicates the locale used by the browser, applicable only for the web channel.

String

last\_visited\_page

Indicates the URL of the platform application last visited by the user, applicable only for the web channel.

String

last\_visited\_page\_title

Indicates the title of the last page visited by the user, applicable only for the web channel.

String

channel

Indicates the type of channel with which the user is interacting with the agent such as C-IVR, web, Facebook, SMS, voice, WhatsApp.

String

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user-1

Context live\_agent\_user contains the details of the live agent interacting with the user.

**Note:** The `context.live_agent_user` object is available only within quick response templates in the Live Agent console. See [Quick response template](/user-guide/live-agent-console/supervisor/quick-responses#create-a-new-quick-response), for more information.

### 

Attributes

The following is a sample JSON of user details in the context object:

Copy

    "live_agent_user": {
     "phone": null,
     "layer_id": "dashboard_admin_test_user_696",
     "last_name": "C",
     "first_name": "John",
     "custom_properties": {}
     },

Attribute

Description

Type

phone

Indicates an array of phone numbers of the user interacting with the agent.

Array

layer\_id

Indicates a unique user identifier internally used by the Avaamo platform.

String

last\_name

Indicates the last name of the user interacting with the agent.

String

first\_name

Indicates the first name of the user interacting with the agent.

String

custom\_properties

Indicates any additional user properties specified when sending requests to the agent.

**Example**:

"custom\_properties": {

"employee\_id":12345,

"dept": "quality"

},

JSON key-value pairs

call\_sid

Indicates the unique ID for any incoming or outgoing voice call successfully created in the C-IVR channel.

String

user\_phone\_number

Indicates the phone number used by the user for connecting to the C-IVR channel.

String

agent\_phone

Indicates the phone number used by the agent assigned for connecting to the C-IVR channel. You can view the agent's phone number in the C-IVR channel settings. See [Conversational IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

String

sso\_token

Indicates the user access token

This is set only when the agents are deployed in MS Teams channel with user access token enabled. See [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

String

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights

Context insights indicate how the user’s intent was analyzed and matched in the agent flow. You can use this information to debug agents. The following is a sample JSON of insights details in context object:

Copy

    {
      "analyzed_document": "I am very excited today I want to order veg cheese pizza",
      "document": "I am very excited today I want to order veg cheese pizza",
      "domain_ids": [
        41948
      ],
      "entities": [
        {
          "entity": "pizza_types",
          "entity_type": "pizza_types",
          "entity_value": "veg",
          "domain_key": "bot_inline_domain_497ba7c2-5677-42f2-940d-616c688357c5",
          "value": "veg",
          "current_value": "veg",
          "index": 43,
          "derived_parent": true,
          "parent_entity_key": null,
          "custom_entity_type": true
        },
        {
          "entity": "pizza_toppings",
          "entity_type": "pizza_toppings",
          "entity_value": "cheese",
          "domain_key": "bot_inline_domain_497ba7c2-5677-42f2-940d-616c688357c5",
          "value": "cheese",
          "current_value": "cheese",
          "index": 43,
          "parent_entity_key": "pizza_types",
          "custom_entity_type": true
        }
      ],
      "featured_tokens": [
        "i",
        "am",
        "very",
        "excite",
        "today",
        "i",
        "want",
        "to",
        "order",
        "veg",
        "cheese",
        "pizza"
      ],
      "featured_tokens_lemma_map": {
        "am": "am",
        "cheese": "cheese",
        "excited": "excite",
        "i": "i",
        "order": "order",
        "pizza": "pizza",
        "to": "to",
        "today": "today",
        "veg": "veg",
        "very": "very",
        "want": "want"
      },
      "id": null,
      "lemma": "i am very excite today i want to order veg cheese pizza",
      "negation": false,
      "original_document": "I am very excited today I want to order veg cheese pizza",
      "pos": [
        [
          "i",
          "NN"
        ],
        [
          "am",
          "VBP"
        ],
        [
          "very",
          "RB"
        ],
        [
          "excited",
          "JJ"
        ],
        [
          "today",
          "NN"
        ],
        [
          "i",
          "VBP"
        ],
        [
          "want",
          "VBP"
        ],
        [
          "to",
          "TO"
        ],
        [
          "order",
          "NN"
        ],
        [
          "veg",
          "NNS"
        ],
        [
          "cheese",
          "JJ"
        ],
        [
          "pizza",
          "NN"
        ]
      ],
      "sentiment": "neutral",
      "tone": "Surprise",
      "raw_document": "I am very excited today I want to order veg cheese pizza",
      "bow_normalized_document_with_stopwords": "i very excite datetime want order veg randomA pizza",
      "bow_normalized_document": "excite datetime want order veg randomA pizza",
      "bow_words": [
        "want",
        "veg",
        "randoma",
        "pizza",
        "order",
        "excite",
        "datetime"
      ],
      "normalized_document": "excite datetime want order veg randomA pizza",
      "featured_normalized_tokens": "excite datetime want order veg randomA pizza",
      "normalized_tokens": "excite datetime want order veg randomA pizza",
      "multiIntentEligible": false,
      "bow_score": 1,
      "entities_already_processed": true,
      "intent": "node_intent_node_1",
      "intent_name": "Test",
      "skill_name": "Test",
      "score": 1,
      "es_score": 23.346571,
      "confidence_score": 0,
      "training_datum_id": 1386989,
      "intent_id": 212186,
      "intent_type": "INLINE::INTENT",
      "bot_key": "1",
      "skill_key": "1",
      "intent_key": "3",
      "matching_document": "I want to order veg cheese pizza",
      "second_best_result": null,
      "detected_language": "en-US",
      "original_text": "I am very excited today I want to order veg cheese pizza",
      "is_transaction": false
    }

Attribute

Description

Type

analyzed\_document

Indicates the original user intent being analyzed.

String

document

Indicates the actual intent in the agent flow that is used to analyze the user query.

String

entities

Indicates an array of entities used to analyze the user’s intent.

An array of JSON key-value pairs.

featured\_tokens

Indicates an array of lemma tokens generated from the user’s intent.

Here, **tokens** are characters separated by spaces that provide a convenient logical separation of phrases/sentences into words.

Array

featured\_tokens\_lemma\_map

Indicates the mapping between each token and lemma token from the user’s intent.

This indicates how each token is converted to a lemma token.

Example: Ordering in lemma token is order.

Array

negation

Indicates if the user’s intent included negation words. Example: I do not want to order cheese pan pizza. In this case, negation is set to true.

Boolean

original\_document

Indicates the original user intent being analyzed.

String

pos

Indicates parts of speech (pos) from the user’s intent.

See [Part-of-speech tagging](https://en.wikipedia.org/wiki/Part-of-speech_tagging), for more information.

Array

tone

Indicates the tone of the user query such as anger, fear, happy.

See [Tone and sentiment](/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment), for more information.

String

sentiment

Indicates the sentiment in the user query such as Positive, Negative, Neutral.

See [Tone and sentiment](/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment), for more information.

String

raw\_document

Indicates the original user intent being analyzed.

String

new\_normalized\_document

Indicates the user intent after being normalized.

String

new\_normalized\_document\_query

Indicates the user’s intent after removing the stopwords such as I, am, want, etc.

String

normalized\_tokens

Indicates the list of tokens from the user’s intent after normalization.

String

entities\_already\_processed

Indicates if the entities are processed or not.

Boolean

intent

Indicates the name of the intent used while analyzing the user’s query.

String

training\_datum\_id

Indicates the training of the intent used while analyzing the user’s query.

Integer

intent\_id

Indicates a unique identifier of the intent.

Integer

intent\_name

Indicates the name of the intent used while analyzing the user’s query.

String

intent\_type

Indicates the type of intent such as Inline, System intents, Knowledge Packs (Smalltalk and Q&A)

String

skill\_key

Indicates unique key of the skill.

String

intent\_key

Indicates the unique key of the intent.

String

second\_best\_result

Indicates the next best result obtained while analyzing the user’s intent, if any

String

detected\_language

Indicates the language detected while analyzing the user’s intent.

String

knowledge\_pack\_id

Indicates the identifier of the knowledge pack, if any, used to analyze the user’s intent.

String

raw\_utterance

Indicates the "as-is" utterances of the user's speech in the IVR channels.

Note that these are the exact spoken utterances without any modifications such as removing noise, filtering words, or modifying anything in the user's speech.

String

**Note**: All the parameters in the context->insights object other than those listed in the table above are for internal usage only. For example, multiIntentEligible, es\_score, confidence\_score and other such parameters not listed above on the table are for internal usage only.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/history

Context history is an array of message history with details such as created date and time, actual message, and the sender of the message generated during the execution of the user’s intent in the agent's flow. The following is a sample JSON of history details in context object:

Copy

    "history": [
        {
          "created_at": 1566282974986,
          "last_message": "i want to order cheese pan pizza",
          "last_message_schema_identifier": "output_14",
          "last_message_sent_by": "user"
        }
      ]

**Attribute**

**Description**

**Type**

created\_at

Indicates timestamp of the message sent by the user to the agent in milliseconds.

UTC Timestamp

last\_message

Indicates the last message sent to the agent.

String

last\_message\_schema\_identifier

Indicates the node identifier of the last message.

String

last\_message\_sent\_by

Indicates the user who sent the last message to the agent.

String

**Note**: You can view upto the last 20 messages in the context.history object.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty

Sets the user property of the specified key to the indicated value. The value can be a single value or an array of values.

If you wish to set multiple user properties with different key-value pairs, then use `User.setProperties`. See [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties), for more information.

**Syntax**:

Copy

    User.setProperty("<<key>>","<<value>>")  
    
    User.setProperty("<<key>>",["<<value1>>","<<value2>>",...])
    
    … - Indicates one or more parameter

### 

**Parameters**

*   **key** - This can be any of the attributes in the user object or can be any custom user-defined properties. See [Attributes](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#attributes), for more information.
    
*   **value** - This is a string value the specified key is set to. You can also set an array of values to the specified key.
    

**Key point**: To get the value of the attributes set in the user object, you can use `context.user.<<key>>`. If you have set any other custom user properties, then you can use `context.user.custom_properties.<<key>>` to get the value of the set property.

### 

**Examples**

Examples

How to get the value?

User.setProperty("last\_name","Williams")

context.user.last\_name

User.setProperty("customerType","guest")

context.user.custom\_properties.customerType

User.setProperty("country",\["India","Australia"\])

context.user.custom\_properties.country

See [Set user property](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property), for a sample scenario.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties

Sets the user property of the specified key to the indicated value. To set multiple user properties, you can specify a comma-separated list of key-value pairs in the `User.setProperties` method.

**Syntax:**

Copy

    User.setProperties({"<<key1>>":"<<value1>>","<<key2>>":"<<value2>>","<<key3>>":"<<value3>>",...})
    
    User.setProperties({"<<key1>>":["<<value1>>","<<value2>>",...],"<<key2>>":["<<value1>>","<<value2>>",...],...})
    
    ... - Indicates one or more parameter

### 

**Parameters**

*   **key** - This can be any of the attributes in the user object or can be any custom user-defined properties. See [Attributes](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#attributes), for more information.
    
*   **value** - This is a string value the specified key is set to. You can also set an array of values to the specified key.
    

**Key Point**: To get the value of the attributes set in the user object, you can use `context.user.<<key>>`. If you have set any other custom user properties, then you can use `context.user.custom_properties.<<key>>` to get the value of the set property.

### 

**Examples**

Examples

How to get the value?

`User.setProperties({"first_name":"david","last_name":"williams","id":"1123"})`

`Context.user.custom_properties`

`User.setProperties({"student_name": ["david","sally","james" ],"guardian_name":["williams","gomez"]})`

`Context.user.custom_properties`

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.removeproperty

Delete or remove the specified user property added for a user. See [User.setProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty) and [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties), for more information on adding user properties in JS code.

**Syntax**:

Copy

    User.removeProperty("<<key>>")  

### 

**Parameters**

*   **key** - This can be any of the attributes in the user object or can be any custom user-defined properties. See [Attributes](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#attributes), for more information.
    

**Key Point**: To get the value of the attributes set in the user object, you can use `context.user.<<key>>`. If you have set any other custom user properties, then you can use `context.user.custom_properties.<<key>>` to get the value of the set property.

### 

**Examples**

Examples

How to verify?

`User.removeProperty("last_name")`

Check the user profile in the Conversation History page. The property for the user is no longer available. See [User icon](/user-guide/how-to/build-agents/debug-agents/conversation-history#user-icon), for more information.

`User.removeProperty("customerType")`

Check the user profile in the Conversation History page. The property for the user is no longer available. See [User icon](/user-guide/how-to/build-agents/debug-agents/conversation-history#user-icon), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage

Store information either for a global session (applicable for all the users interacting with agents) or for a specific user session. You can use **set** and **get** functions to set the value and retrieve value respectively from storage variables.

Storage functions are typically used to store values throughout the agent. Storage variables can also be used to track analytical information. Example: You can keep track of the number of unhandled user queries in a session. See [how-to use storage variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage), for a sample scenario.

**Key Point**: It is recommended to use storage variables for transactional data that is specific to your agent or users, such as, agent configuration parameters, user attributes. Typically, these are in smaller data sets. For large data sets such as blob and files, which have thousands or millions of data records, the recommended approach is to develop external APIs for storing and managing such data. You can then pass parameters to query the API to get only filtered data that is required for your agent. Such large data sets must not be stored in the storage variables, as it may impact performance.

**Note**: You can use global storage (Storage.global.set and Storage.global.get) in the User authentication handler. However, you cannot use user storage variables in the User authentication handler, as the user is not created yet. See [User Authentication Handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

### 

Global Storage

The following is the syntax to set and get global storage variables:

Copy

    Storage.global.set("<<variableName>>", value);
    Storage.global.get("<<variableName>>");

### 

**Example (Global Storage)**

The following is a sample JS that stores the received API Bearer token from the authentication service, gets the value, and displays on the console:

Copy

    //POST request body received from Auth service
    await(Storage.global.set("BearerToken", body.access_token)); 
    let storedvalue = Storage.global.get("BearerToken");
    console.log("Bearer token is - "+storedvalue);

**Note:** API Bearer token is applicable to all the users and hence stored in a global session instead of a user session.

### 

**User Storage**

The following is the syntax to set and get user storage variables:

*   **variableName**: Indicates the variable name that is used to set or get values
    
*   **value**: Indicates the value to be set in the variable.
    

### 

**Example (User Storage)**

The following is a sample JS that stores the first name of the user, gets the value, and displays on the console:

The following is another example to store a JSON object in a user session:

### 

**Key Notes**

Note the following key points:

*   You can store only string values in the storage variables.
    
*   You can view and monitor the storage variables using stored data features. See [Storage data](/user-guide/how-to/build-agents/debug-agents#using-storage), for more information.
    
*   **Storage.set** and **Storage.user.set** are asynchronous calls and return a promise. After calling these functions, if it is required to use the values within the same scope of skill flow using **Storage.user.get** (execute intent, goto nodes, or output messages), then you must **await** for the returned promise. **Example**:
    

*   **Storage.user** variables are set with reference to the user who is using the agent. These values are different for different users.
    
*   If you have a requirement to use storage variables to set multiple values consecutively, then instead of calling **await** multiple times to set storage variables, you can use a single **await** with **Promise.all**. This can help to significantly improve the response time of your agent.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control

You can use goto\_node, goto\_intent, goto\_output, execute\_intent, and idle\_prompt functions in JS to customize the agent flow navigation. See [how-to control skill flow](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/controlling-skill-flow), for a sample scenario.

**Key Points**:

*   Flow control statements are applicable only to Dialog skills. You can transfer only to the Dialog skill nodes or to the main node.
    
*   goto\_node and goto\_output are not supported in Returning User Message Handler JS block.
    
*   goto\_node and goto\_output perform the same functionality and you can use them both interchangeably.
    
*   goto\_intent is not supported in "custom intent" JS sections or in "pre-unhandled" intent.
    
*   execute\_intent works only in post-processing.
    
*   Intents that lead to disambiguation responses are not supported in execute\_intent.
    
*   You can add upto 5 continuous iterations of flow control statements in a single execution. As a best practice, it is recommended to revisit your flow if it requires more than 5 continuous iterations of flow control statements.
    

### 

At a glance

The following table summarizes the key points of different flow control statements that can be used in JS to customize the agent flow navigation:

Flow control

What?

Output node

Post-processing

JS intents

goto\_node

Displays and transfers the flow to the skill message configured at the specified intent after executing the current node.

✅

✅

❌

goto\_output

Displays and transfers the flow to the skill message configured at the specified intent after executing the current node.

✅

✅

❌

execute\_intent

Transfers the flow to the specified intent

and executes the specified intent.

❌

✅

❌

goto\_intent

in post-processing

Transfers the flow to the specified node and executes the current user query in the transferred node.

❌

✅

❌

goto\_intent in the output node

Transfers the flow to the specified intent and waits for the next user query to be executed at the transferred intent.

✅

❌

❌

### 

goto\_node

Displays and transfers the flow to the skill message configured at the specified intent after executing the current node.

Examples

Description

return goto\_node('starters');

Displays the skill message configured at the "starters" intent and correspondingly transfers the flow.

return goto\_node('register\_skill.registration\_start');

Displays the skill message configured at the "registration\_start" intent in "register\_skill" skill and correspondingly transfers the flow.

return goto\_node('main');

Displays the message configured in the "Greeting skill" or main node and transfers the flow to the main node.

### 

goto\_intent

goto\_intent behavior is different in the output node and post-processing. When you specify goto\_intent in the output node, you are indicating at which intent the next user query must be evaluated. When you specify goto\_intent in post-processing you are indicating at which node the current user query must be evaluated.

#### 

goto\_intent in output node

goto\_intent in the output node transfers the flow to the specified intent and waits for the next user query. The next user's query is evaluated at the transferred intent. This behavior is similar to the "Goto Intent" option available in the Advanced settings. See [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.

The following lists a few examples of goto\_intent in the output node:

Examples

Description

return goto\_intent('starters');

Transfers the flow to the specified intent in the current skill.

return goto\_intent('register\_skill.registration\_start');

Transfers the flow to "registration\_start" intent in "register\_skill" skill.

return goto\_intent('main')

Transfers the flow to the first or the main step of the agent.

#### 

goto\_intent in post-processing

When the goto\_intent is specified in post-processing, the user's intent is still not completely evaluated. The current user query or the intent specified in goto\_intent (if any) is evaluated at the transferred node.

goto\_intent in post-processing transfers the flow to the specified node and executes the current user query in the transferred node (if the intent is not specified in goto\_intent). If you have specified an intent in goto\_intent, then the intent is executed at the transferred node:

*   If the query in the transferred node returns true, then the response is delivered by the transferred node.
    
*   If the query in the transferred intent returns false, then an unhandled response is delivered.
    

The following lists a few examples of goto\_intent in post-processing:

Examples

Description

return goto\_intent('starters');

Transfers the flow to the specified intent in the current skill and executes the current user query at the transferred node.

return goto\_intent('register\_skill.registration\_start');

Transfers the flow to "registration\_start" intent in "register\_skill" skill and executes the current user query at the transferred node.

return goto\_intent('starters', 'I want to get some starters.')

Transfers the flow to the specified intent in the current skill and executes the specified intent 'I want to get some starters.' at the transferred node.

### 

goto\_output

Transfers the flow to the specified node number or main and displays the output of the node.

Examples

Description

return goto\_output('starters');

Displays the skill message configured at the "starters" intent and correspondingly transfers the flow.

return goto\_output('register\_skill.registration\_start');

Displays the skill message configured at the "registration\_start" intent in "register\_skill" skill and correspondingly transfers the flow.

return goto\_output('main');

Displays the message configured in the "Greeting skill" or main node and transfers the flow to the main node.

### 

execute\_intent

Transfers the flow to the specified intent number and executes the specified intent. Since an intent can have multiple nodes, you can use execute\_intent for transferring to different nodes within an intent, based on some condition in the post-processing JavaScript.

Examples

Description

return execute\_intent(1,'order pizza');

Transfers the flow to intent number 1 and executes 'order pizza' intent in the current skill.

return execute\_intent(2.3,'order pizza');

Transfers the flow to intent number 3 in skill number 2 and executes 'order pizza' intent at 2.3

return execute\_intent('main','I want to check my order status');

Transfers the flow to the main node and executes the intent 'I want to check my order status' at the main node.

### 

idle\_prompt

Indicates the response time the agent waits for the user query and post the wait period the skill message configured at the specified intent is displayed.

**Example**: return idle\_prompt(10,'main');

The agent waits for 10 seconds and then transfers the flow to the main node or the "Greeting skill" and displays a message as configured at the "Greeting skill".

**Note**: You can transfer the flow to a greeting node or to a node in the Dialog skill.

### 

Examples

The following Dialog flow is used as a reference for the examples provided in the comparison table:

The following Q&A skill is used as a reference for the examples provided in the comparison table:

**Example 1**: Consider the execution of the following statement in the **post-processing** script of node 2:

return goto\_node('4');

return goto\_output('4');

return goto\_intent('4','yes');

return execute\_intent('3','yes');

return execute\_intent('3','no');

return goto\_intent('4');

**Key point:** Here, note the following point when "return goto\_intent('4');" statement is executed. Since the current user query is "veg" and that is not handled at node number 4, an unhandled response is returned.

**Example 2**: Consider the execution of the following statement in the **post-processing** script of node 15:

return goto\_node('main');

return goto\_output('main');

return execute\_intent('main','Tell me more about reward policy');

**Example 3**: Consider the execution of the following statement in the **output node** of node 18:

return goto\_node('10');

return goto\_output('10');

return goto\_intent('10');

**Key point:** Here, note the following point when the "return goto\_intent('10');" statement is executed. This transfers the execution to intent number 10 and waits for the next user's input. The next user's input is evaluated at intent number 10.

**Example 4**: Consider the execution of the following statement in the **output node** of node 15:

return goto\_node('main');return goto\_output('main');

return goto\_intent('main');

return goto\_node('main');

return goto\_output('main');

return goto\_intent('main');

**Key point:** Here, note the following point when the "return goto\_intent('main');" statement is executed. This transfers the execution to the 'main' node and waits for the next user's input. The next user's input is evaluated at 'main'.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications

The **SMS.send** and **Email.send** functions allows the agent to send notifications to the user.

### 

**SMS.send**

The following is the syntax to send SMS notifications:

Copy

    SMS.send("message", ["phoneNumber1","phoneNumber2",...],*{from_phone: channelPhone});
    
    * - Indicates optional parameter
    … - Indicates one or more parameters

Parameter

Description

message

Indicates SMS message. The length of the message is according to the standard supported for SMS messages.

\["phoneNumber1”,”phoneNumber2",...\]

Indicates a comma-separated list of phone numbers prefixed with + followed by the country code.

from\_phone

Indicates the number from which the SMS is sent.

#### 

**Example**

Copy

    SMS.send("Successfully placed order",["+16503835663", "+919999988888"]);

Copy

    SMS.send("Successfully placed order", ["+16503835663", "+919999988888"], {from_phone: "+19809890090"});

### 

Email.send

The following is the syntax to send Email notifications:

Copy

    Email.send({to: ["<<toMailId_1>>","<<toMailId_2>>",...],
    *cc: ["<<ccMailId_1>>","<<ccMailId_2>>",...],
    *bcc: ["<<bccMailId_1>>","<<bccMailId_2>>",...],
    from: "<<fromMailId>>",
    *subject: "<<emailSubject>>",
    *body: "<<plainTextMessage>>",
    *html:`<<html>>`,
    *attachments:[
    {filename:"<<filename1>>",content:"<<base64EncodedFormat>>",encoding:"base64"},
    {filename:"<<filename2>>",content:"<<base64EncodedFormat>>",encoding:"base64"},
    ...] });
    
    * - Indicates optional parameter
    … - Indicates one or more parameters

**Parameter**

**Description**

to: \["<<toMailId\_1>>",<<toMailId\_2>>",...\]

Indicates a comma separated list of the recipient email Ids. It is mandatory to specify at-least one recipient email Id.

\*cc: \["<<ccMailId\_1>>","<<ccMailId\_2>>",...\]

Indicates a comma-separated list of the cc email Ids. This is an optional parameter.

\*bcc: \["<<bccMailId\_1>>","<<bccMailId\_2>>",...\]

Indicates a comma-separated list of the bcc email Ids. This is an optional parameter.

from: "<<fromMailId>>"

Indicates the email Id of the sender.

\*subject: "<<emailSubject>>"

Indicates the subject of the email. This is an optional parameter

\*body: "<<plainTextMessage>>"

Indicates the body of email message in plain text format. Use can use **html** to send HTML formatted messages in email.

Note that if you use **body** and **html** both to send an email message, then the message in **html** takes precedence over the message in the **body**.

\*html:\`<<html>>\`

Indicates the body of the email message in HTML format. To embed image attachments, add an HTML tag - **<img src="cid:<<contentId>>>"/>**.

Similarly, you can also embed any other files such as text, pdf.

Note that if you use **body** and **html** both to send an email message, then the message in **html** takes precedence over the message in the **body**.

\*attachments:\[{

filename:"<<filename1>>",

content:"<<base64EncodedFormat>>",

encoding: "base64"

},

{

filename:"<<filename2>>",

content:"<<base64EncodedFormat>>",

encoding: "base64"

},...

Indicates an array of attachments sent in the email. Each attachment must include the following parameters:

*   **filename**: Name of the file attached.
    
*   **content**: Base64 encoded format for the file.
    
*   **encoding**: Currently, the supported format is "base64".
    
*   Each attachment size < 10 MB
    

**Examples:** The following lists a few examples to send email notifications from the agent:

**Plain text message**:

**HTML message**:

**Image attachment in the message:**

**Image in the email message**:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands

The following commands can be used by the user interacting with the agent to perform certain actions as required. Typically, these commands are used by the agent developers for debugging and troubleshooting the queries in the agent simulator:

Agent commands

Description

#clear

Clears the conversation history, resets the context, and starts from the beginning. Note that the conversation history is not deleted, only the history in the agent window is cleared.

#transfer to agent / #talk to agent

Transfers the chat to a live agent.

#end agent

Ends the live agent conversation.

The command `#end agent` is not applicable to Universal agents, since the live agent interactions are handled by individual member agents. See [Connecting to live agent in Universal agent](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started#connecting-to-a-live-agent), for more information.

#goto\__node\_<<skill\_key.intent\_key_\>>

The agent displays the response configured of the specified skill response.

Typically, this command is used to troubleshoot issues in an agent in a non-production environment. You cannot use this command directly in an agent that is in a production environment. However, you can still use this as a hidden\_content in [Quick reply](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply) and [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card) responses.

**Example**: #goto\_node\_macpizza\_order.starters

#goto\_node\_1 or #goto\_node\_main

The agent displays the response configured in the Greeting skill.

reset

Resets the current conversation with the agent and displays the greeting message. Note that reset does not create a new conversation uuid.

\_debug\_

Displays the details of the last query. The debug command provides all the details of the query, user, insights, and skill message.

Typically, this command is used to troubleshoot issues in an agent in a non-production environment. Hence, this command does not work in a production environment.

#switch\_lang <<languageCode>>

Switches the agent's conversation language to the selected language. You can switch to only those languages that are added to the agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

**Example**: #switch\_lang fr-FR

You can switch back to the default language using `#switch_lang auto`.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch

**Syntax**:

Language.switch('<<language-code>>');

**Example**:

Language.switch('fr-FR');

**Notes**:

*   You can only switch to those languages that are configured in your agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.
    
*   The Language code must be according to IETF language tag standards. Example: en-US, fr-FR, hi-IN

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.transfer

**Syntax**:

Agent.transfer();

**Example**: To display a message in the agent after an agent transfer:

Agent.transfer();

return "Transferring to Agent" ;

**Notes**: When you are using Agent.transfer() in JS node to transfer to a live agent, then

*   It gives you enhanced control of when to transfer to a live agent and what must be done once the transfer is completed.
    
*   Since it gives you more flexibility, you can set conditions required before transferring to a live agent. Hence, working hours set in the Live agent page is no longer applicable. If any working hours is required before transferring to a live agent, it must be handled within the JS code itself before using Agent.transfer().
    

See [Live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent), for more information on how to transfer to a live agent in the UI.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.setcontext

Sets the live agent context of the specified key to the indicated value before transferring to the live agent. To set multiple context values, you can specify a comma-separated list of key-value pairs in the `Agent.setContext` method.

### 

**Syntax**

Copy

    Agent.setContext({"<<key1>>":"<<value1>>","<<key2>>":"<<value2>>","<<key3>>":"<<value3>>",...})
    
    ... - Indicates one or more parameter

### 

**Parameters**

*   **key** - This can be any of the attributes in the user object or can be any custom user-defined properties. See [Attributes](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user#attributes), for more information.
    
*   **value** - This is a string value the specified key is set to.
    

**Key Points**:

*   To get the value of the attributes set in the user object, you can use `context.user.<<key>>`. If you have set any other custom user properties, then you can use `context.user.custom_properties.<<key>>` to get the value of the set property.
    
*   Alternatively, you also write any Javascript code to say make an API call, fetch the details, and then update the agent context. You can also update the agent context based on the user properties.
    

### 

**Example**

If you wish to transfer all the requests from "India" to say Team India rather than the default team, then you can set the agent context and use the same key in the routing rules. See [Example: Routing rule based on location](/user-guide/live-agent-console/supervisor/rule-based-routing#example-routing-rule-based-on-user-location), for a sample demonstration.

This callback gets triggered before transferring to the live agent and hence can be used in setting the routing rules, to route the requests to different teams in the live agent system based on the location of the user. See [Rule-based routing](/user-guide/live-agent-console/supervisor/rule-based-routing), for more information.

`Agent.setContext({"location":"India"});`

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/advanced-js-libraries

The Avaamo platform provides several wrapper functions on a list of native NodeJS libraries (npm packages) that can be used in Javascript during customization. See [NodeJS V8.16.0](https://nodejs.org/docs/latest-v8.x/api/), for more information.

### 

async

*   Supported version - **"async":"~0.7.0".** See [async npm package](https://www.npmjs.com/package/async/v/0.7.0), for more information.
    
*   Provides functions for working with asynchronous JavaScript.
    
*   The following is an example to use map function in async :
    

Copy

    async.map(['file1','file2','file3'], fs.stat, function(err, results){
        // results is now an array of stats for each file
    });

### 

await

*   Supported version - **"asyncawait":"^1.0.6".** See [asyncawait npm package](https://www.npmjs.com/package/asyncawait/v/1.0.6), for more information.
    
*   Used in asynchronous calls, when you must **await** for the returned promise.
    
*   The following is an example to use await in an API call:
    

Copy

     return await(fetch(url, {
        method: 'POST',
        agent: agent,
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        timeout: 200000
      }).then((res) => {
      ....//Process the result
      }));

### 

AWS

*   Supported version - **"aws-sdk":"^2.48.0".** See [aws-sdk npm package](https://www.npmjs.com/package/aws-sdk/v/2.48.0), for more information.
    
*   Used to connect AWS SDK services.
    
*   The following is an example to display a list of S3 buckets in the console:
    

### 

Buffer

*   Supported version - **"buffer":"^8.16.0".** See [buffer npm package](https://nodejs.org/docs/latest-v8.x/api/buffer.html), for more information.
    
*   Instances of the **Buffer** class are similar to arrays of integers but correspond to fixed-sized, raw memory allocations outside the V8 heap.
    
*   The following are a few examples to use the **buffer** function:
    

### 

cipher

You can use **rijndaelEncrypt** in cipher function for encryption.

### 

crypto

*   Supported version - **"crypto":"~8.16.1"**. See [Crypto npm package](https://nodejs.org/docs/latest-v8.x/api/crypto.html), for more information.
    
*   Used for cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions
    
*   The following is an example to use **crypto** function:
    

### 

https

*   Supported version - **"https":"~8.16.1"**. See [Https npm package](https://nodejs.org/docs/latest-v8.x/api/https.html), for more information.
    
*   Used for sending https requests in an API call.
    
*   The following is an example to use **https.agent** function:
    

### 

jsdom

*   Supported version - **"jsdom":"^9.8.3"**. See [jsdom npm package](https://www.npmjs.com/package/jsdom/v/9.8.3), for more information.
    
*   Used for testing and scraping real-world web applications.
    
*   The following is an example that uses **jsdom** to parse a raw HTML:
    

### 

JWT

*   Supported version - **"jsonwebtoken": "^7.4.0"**. See [JWT npm package](https://www.npmjs.com/package/jsonwebtoken/v/7.4.0), for more information.
    
*   JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
    
*   The following are a few examples of using JWT token:
    

### 

fetch

*   Supported version - **"node-fetch":"^1.6.1"**. See [node-fetch npm package](https://www.npmjs.com/package/node-fetch), for more information.
    
*   Used in API calls to fetch responses from a request.
    
*   The following is an example to use fetch the response from API call:
    

**Note**: When you use the nodeJS fetch library and do not specify the user-agent, a default value is sent in the fetch call. This may not work based on the client API security policy. You can overwrite the default user-agent with any customized string that the client API accepts.

### 

lodash

*   Supported version - **"lodash":"^4.14.1**"**.** See [lodash npm package](https://www.npmjs.com/package/lodash/v/4.14.1), for more information
    
*   JS helper library for arrays, strings, and objects.
    
*   The following is an example to use **\_.first()** and **\_.last()** in **lodash** function:
    

### 

moment

*   Supported version - **"moment":"^2.20.1".** See [Moment npm package](https://momentjs.com/docs/), for more information
    
*   Used for date and time operations.
    
*   The following is an example to use **moment** function:
    

### 

Promise

*   Supported version - **"promise":"^7.1.1".** See [Promise npm package](https://www.npmjs.com/package/promise/v/7.1.1), for more information
    
*   Used in asynchronous calls to indicate the completion of the processing carried out by the asynchronous function.
    
*   The following is an example to use **promise** function:
    

### 

Soap

*   Supported version - **"soap":"^0.17.0".** See [SOAP npm package](https://www.npmjs.com/package/soap/v/0.17.0), for more information
    
*   Used for making SOAP calls to an external source.
    
*   The following example demonstrates how to use **uuid** for generating unique identifiers:
    

**Example:** The following is an example to create a new SOAP client from a WSDL URL:

### 

uuid

*   Supported version - **"uuid":"^2.0.2".** See [uuid npm package](https://www.npmjs.com/package/uuid/v/2.0.2), for more information
    
*   Used for generating a unique identifier.
    
*   The following is an example to use **uuid** for generating unique identifiers:
    

### 

xmldom

*   Supported version - **"xmldom":"^0.1.22".** See [XMLDOM npm package](https://www.npmjs.com/package/xmldom/v/0.1.22), for more information.
    
*   Typically, used to parse XML response returned from API call.
    
*   The following is an example demonstrates to use **xmldom** for parsing response received from SOAP call:
    

### 

form-data

*   Supported version - **"form-data":"^3.0.0".** See [form-data npm package](https://www.npmjs.com/package/form-data), for more information.
    
*   A library to create readable `"multipart/form-data"` streams. Can be used to submit forms and file uploads to other web applications.
    
*   The following is an example that demonstrates to use **form-data** for constructing a form with 3 fields that contain a string, a buffer, and a file stream and to use in use https-response stream

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/smartcall-c-ivr

You can use the following function in your C-IVR flow to either forward a call or to hang up the call with a message:

*   [SmartCall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/smartcall-c-ivr#smartcall.forward):
    
    *   Forward the call to another number such as a help center number or a call center number, in case the user requires any further assistance in the C-IVR flow.
        
    *   This is also used to forward the call to a SIP number when you have deployed your agents on [Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys), [SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip), [Nice InContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact) channels.
        
    
*   [SmartCall.hangup](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/smartcall-c-ivr#smartcall.forward-sip): Hangs up the call in the C-IVR flow with a message.
    

**Note**: This option works if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

### 

SmartCall.forward

The following is the syntax to forward the call to a number with a message in the C-IVR flow:

Copy

    return SmartCall.forward(<<message>>,<<phoneno>>);

#### 

**Example**

Copy

    return SmartCall.forward("Forwarding to an agent. Please wait.","+918887651234");

See [Forward call (C-IVR channel)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel), for a sample scenario.

### 

SmartCall.forward (SIP)

The following is the syntax to forward the call to a number with a message in SIP:

Copy

    return SmartCall.forward("<<message>>", "<<SIP number>>?call_type=sip", {<<Header>>});

#### 

**Example**

See [Forward call (C-IVR channel)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for a sample scenario.

### 

SmartCall.hangup

The following is the syntax to hang up the call in the C-IVR flow with a message:

#### 

**Example**

See [Hangup call (C-IVR channel)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/hangup-call-c-ivr-channel), for a sample scenario.

---
