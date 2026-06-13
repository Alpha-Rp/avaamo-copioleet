# Classic Agent — Dialog Skill (Dialog Designer)
> 26 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer

[Quick overview](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/quick-overview)[Create a new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill)[Build and manage dialogs](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill)[Test Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill)[Debug Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/quick-overview

Dialog skill allows you to create responses that require multi-step dialogs with the user for a given question to complete a task. Typically, Dialog skill is used for any custom skill that cannot be built using other skill types.

**Examples**: The following are a few examples where Dialog skill can be used to create multi-turn conversations:

*   Building flow for diagnosing a patient using symptoms.
    
*   Ordering a pizza.
    
*   Create an Insurance policy.
    

In the Avaamo Platform, you can create, design, and edit conversational flows quickly with minimal technical expertise using an interactive Dialog Designer. The following illustration depicts a sample flow of a pizza agent created using Dialog Designer:

The following is an illustration of a Dialog skill response in a Pizza agent:

### 

Additional resources

The following lists a few additional resources available for you to get started on Dialog skills:

*   [Quick start video](/user-guide/quick-start-tutorials/add-dialog-skill)
    
*   [Webinar on Introduction to v5.0 and Answers](/user-guide/ref/webinars/introduction-to-v5.0-and-answers)
    

### 

Next steps

This section provides an in-depth understanding of the following:

*   [Create a new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill): Start by creating a new Dialog skill or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.
    
*   [Build and manage Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill): Add invocation intents to your Dialog skill and build a multi-turn conversation flow using an interactive flow designer.
    
*   [Test Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill): Test Dialog skill as you build using regression testing and agent simulator.
    
*   [Debug Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill): Debug Dialog skill using insights, debug logs, and conversation history.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill

Based on your requirement, you can either start by creating a new Dialog skill or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    
*   You can apply the Outro messages to the Dialog skill. Refer [Global Outro skill](/user-guide/how-to/build-agents/add-skills-to-agent#global-outro-skill), for more information.
    

**To create Dialog skill:**

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add skill**.
    
*   In the **Skill builder** page, select **Dialog skill** and click **Create**.
    
*   Specify the following details and click **Create**:
    

Parameters

Description

Maximum length

Skill name

Indicates the name of the dialog skill.

50 characters

Skill description

Indicates the description of the dialog skill. Use this to specify the purpose of the skill.

200 characters

Skill key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill. By default, a key is provided when you create a skill. You can change it to any user-friendly identifier.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as Goto node and in [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing). It helps in easy identification and readability.

20 characters

Mask responses

Move the slider if you mask all the agent's responses of this skill in the conversation flow. When you enable masking for the skill, all the responses in the skill are masked and cannot be accessed. Note that this option is available only when masking is enabled for an agent. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

NA

*   Save your agent.
    

A new empty Dialog skill is created. See the , for more information on how to continue building dialogs.

### 

Next steps

You can start by adding an [invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent) to your skill. This is the intent that invokes this skill when added to an agent.

You can then continue to edit the skill by [building dialogs](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill) with user intents and skill responses. Ensure to [test your skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill) at each step. You can navigate to the [Debug](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill) section in the Dialog skill to troubleshoot your skill if required.

**Key Points**:

*   If you have imported a skill, ensure to edit the name and description of the skill. See [Edit skill](/user-guide/how-to/build-skills/manage-skill#edit-skill), for more information.
    
*   Refer to [Design skill](/user-guide/how-to/build-skills/design-skill), for best practices and do's and don'ts while building a skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill

[Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent)[Flow designer - Overview](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/dialog-designer-overview)[Change default greeting message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/change-default-greeting-message)[Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent)[Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses)[Perform common actions](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent

An **invocation intent** is an intent or a training phrase that invokes the skill when added to an agent. You can also add a custom JS code to invoke your intent if required.

As you enter training phrases for the invocation intent, the platform automatically extracts the slots and includes all the entities in your skill. Note the points:

*   The color of the phrases in the user utterances matches with the slots for easy identification.
    
*   In cases, where the slots are not extracted, you can right-click on the word or phrase to select and add slots manually. Note that you can manually extract only those slots for which the entities are already added in the Invocation intent.
    
*   In cases where you need any complex or custom extraction, then you can use the regular expression entity type. See [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent) and [examples](/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent), for more information.
    

**Key Point**: You can also create a post-processing script in the Dialog skill.

## 

**Adding invocation intent**

Consider that you wish to create an Order skill to place a pizza order in a Pizza agent.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu and click the required skill.
        
    

**To add an invocation intent**:

*   In the **Dialog skill** page, click **Edit** to unlock the skill.
    
*   Click **Invocation intent** in the left navigation menu.
    
*   Specify the intent key, type, training phrases, and post-processing details in the invocation intent and click **Save**:
    

### 

1\. Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name. By default, a key is automatically generated for you. You can also update the key to any user-friendly identifier.

**Supported characters**: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Note that the intent key must be unique within the skill.

### 

2\. Intent Type

Specify the type of intent:

*   **Training phrases**: Use this if you wish to specify training phrases as invocation intent.
    
*   **Custom code**: Use this if you wish to specify a JS as a custom intent instead of training phrases.
    
*   **Pre-unhandled**: Use this if you wish to specify a JS that is executed before executing the Unhandled node.
    

### 

3\. Training Phrases

Specify variations of user utterances that invoke this skill. This is enabled if you select Intent type as Training phrases. As you enter training phrases for the invocation intent, the platform automatically extracts the slots and includes all the entities in your skill. Note the points:

*   The color of the phrases in the user utterances matches with the slots for easy identification.
    
*   In cases, where the slots are not extracted, you can right-click on the word or phrase to select and add slots manually. Note that you can manually extract only those slots for which the entities are already added in the Invocation intent.
    
*   Click the slots to rename, if required.
    

**Notes**:

*   You can specify Training phrases upto 300 characters.
    
*   If you have specified intent type as Training phrases and if you require additional entities in the flow, then it must always be a part of the training data in the invocation intent.
    

**Key Points**:

*   If you want training data that must match specific and generic queries, then it is recommended to provide generic training data. Example: If you wish to match "I want my fund value" and "I want fund value", then it is recommended to use "I want fund value" in the training data.
    
*   You must retain only those entities that are required and delete the ones if not needed.
    

### 

4\. Custom Intent Handler

Specify a custom JS for invoking this skill. This is enabled if you select the Intent type as Custom code. Note that goto\_node is not supported in the custom intent handler, you must return true or false in this handler. If the code returns true, then it takes through the flow specified in the skill.

**Note**: If you have specified intent type as Custom code, then you can add required entities to the skill using the Add entity option. See [Entities](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent#7.-entities), for more information.

### 

5\. Pre-Unhandled Intent Handler

Specify a JS that is executed just before the Unhandled node. This is enabled if you select Intent type as Pre-unhandled. Note that goto\_node is not supported in the pre-unhandled intent handler, you must return true or false in this handler. If the code returns true, then it takes through the flow specified in the skill.

Few examples include:

*   Invoke a specialized live agent
    
*   Invoke a custom search or your own a website search
    

If you have multiple Dialog skills with pre-unhandled intents, then you can define a weightage for each of the pre-unhandled intent codes as per your business model. You can assign weightage with any number between 0 and 1, for example, 0.2, or 0.5. The pre-unhandled intent code with the highest weightage is considered.

**Example**: Consider that you can have two Dialog skills with pre-unhandled intent. One that invokes a custom search and another with your business website search. Based on the response received from each one of these, you can infer, assign weightage, and return weightage. The custom code with the highest weightage is considered.

**Note**: If you have specified intent type as **Pre-Unhandled**, then you can add required entities to the skill using the **Add entity** option. See [Entities](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent#7.-entities), for more information.

### 

6\. Add training set

This allows you to add training data in different languages. It is not required to train your skill in English only, you can train your skill in different languages.

*   Add language in **Configuration -> Languages** and save the skill.
    
*   Click **Add training set** in Invocation Intent.
    
*   Select the required language and add the training set in the selected language.
    

### 

7\. Entities

Based on the training phrases, the platform automatically extracts and includes all the required entities in your skill. Note the color of the phrases matches with entities for easy identification. You can review these entities and delete those not required for the skill. See [Add entity types to agent](applewebdata://9A520571-0A8D-4D20-9B69-57776C06AEDE/@avaamo/s/avaamo/~/drafts/-MEMRR4arlIeVAXDyv-N/how-to/build-agents/add-entity-types-to-agent) and [examples](applewebdata://9A520571-0A8D-4D20-9B69-57776C06AEDE/@avaamo/s/avaamo/~/drafts/-MEMRR4arlIeVAXDyv-N/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent), for more information.

**Key Points**:

*   User-defined entities take priority over system entities, in cases where both match the user intent.
    
*   Slot name must be unique across all entity types in an agent. When a user query is posted, the intent execution considers the training data across all the skills in the agent, hence, the slot name must remain unique across all entity types in an agent. **Example**: Consider that you have a slot name "otp" with entity type as "Number". In this case, if you try to add the same slot name "otp" for a different entity type "One-time password", then an error message is displayed that the slot name is already taken by another entity type.
    

*   If you have specified intent type as **Training phrases** and if you require additional entities in the flow, then it must always be a part of the training data in the invocation intent.
    
*   If you have specified intent type as **Custom code or Pre-unhandled**, then you can add required entities to the skill using the **Add entity** option:
    

### 

8\. Post Processing

Specify any JS that is executed after the intent is invoked and before displaying the skill response. Custom Javascript to dynamically reroute the flow and skip the current intent.

**Note**: Post-processing is where the intent execution still continues after matching the invocation intent; hence, when post-processing is enabled at the invocation intent, the entity skipping is no longer relevant and not evaluated.

See [Skill response execution](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence#post-processing-and-skill-response-execution), for more information on the sequence of execution.

## 

**Example 1:** Weather agent

Consider a skill "Find Weather" to help users find the current weather of a location. As you enter the training phrases in the invocation intent, the location entity and corresponding slot is automatically extracted from the training phrases. Here, the location entity is a system entity:

## 

**Example 2: Pizza agent**

Consider a skill "Order Pizza" to help users place a pizza order. Consider that you have also created two entity types:

*   pizza types - veg, non-veg
    
*   pizza toppings - cheese, tomato, onion, pepper
    

As you enter the training phrase with values from the entities, say "I want to order veg pepper pizza" in the invocation intent, the entities and corresponding slots are automatically extracted from the training phrase.

## 

**Example 3: Travel agent**

Consider a skill "Book Tickets" to help users book travel tickets. As you enter the training phrase in the invocation intent, the location entity and corresponding slot is automatically extracted from the training phrase. Here, the location entity is a system entity. Note that here, you can rename the slots to "from\_location" and "to\_location" which helps you identify the source and destination.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/dialog-designer-overview

The **Flow designer** is an intuitive conversational modeling tool that enables you to build multi-turn conversational flows quickly with user intents and responses. The **Designer** provides a comprehensive set of content templates such as surveys, forms, carousels, and rich media cards to create beautiful and engaging conversational interfaces.

## 

Components of a Flow designer

The following diagram illustrates the main components of the **Flow designer**:

## 

Scenario

Consider that you are building an **Order Pizza Dialog skill** in a Pizza agent that is responsible for taking the user through a conversation for capturing the required data to order a pizza.

1.  Create an entity type - Pizza types with "veg" and "non-veg" entity values. See [Add entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information.
    
2.  Start by adding invocation intent such as "I want to order veg pizza" to invoke the skill. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.
    
3.  Change default greeting message of the Dialog skill to "We have a wide variety of freshly baked pizzas. Would you like to order veg or non-veg pizza?". See [Change default greeting message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/change-default-greeting-message), for more information.
    
4.  The next step is where you build the flow by adding nodes in the Flow designer.
    

## 

Invocation intent key

This is the intent key provided at the time of creating the invocation intent. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.

You can also use the intent key to transfer the conversational flow to a different intent based on your business requirement. See [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) and [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information.

## 

Node

This is a primary component of the Flow designer. A node consists of user intent and a corresponding skill message. **Example**: Consider the following flow in the Order pizza skill.

*   After the skill is invoked, the first message that is displayed is "We have a wide variety of pizza. Would you like to order veg or non-veg pizza?"
    
*   When the user specifies the intent as "Veg" or "Non-Veg" pizza, then the corresponding message from the agent is to ask for toppings the user wishes to add to the pizza. The skill message here can be - "Great. Let's add some toppings. You can say something like onion, tomato, cheese, pepperoni, or a combination of these."
    
*   The intent "Veg" or "Non-Veg" pizza together with the skill message is referred to as a **node**.
    

### 

Creating a node

You can create a node in one of the following ways:

*   **Using the plus (+) icon**: This creates a node below the current node.
    
*   **Using the fork icon**: This creates a node as a forked branch to the current node. Use this when you are expecting different user intents for the same skill response.
    

**Example**: Considering the scenario of Order pizza skill, after the agent displays a message "We have a wide variety of freshly baked pizzas. Would you like to order veg or non-veg pizza?.", the user response can be "veg" or "non-veg". To implement this, you can create a node below the current node using the plus(+) icon to capture the user intent and corresponding response.

### 

User intent

User intent is where you capture the intention of what the user wishes to do. In the Flow designer, user intent is indicated using a red call-out bubble above "Add agent Response".

You can use one of the following options to specify the user intent - Training Phrase, Entity from Invocation Intent, System Intent, or Custom Code. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

**Example**: Considering the scenario of Order pizza skill, you can create a node with a user intent using the existing entity "Pizza types"

Each user intent is associated with a unique intent key that is specified at the time of creating the intent. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information. Each user intent within a skill is uniquely identified using the following notation "I _<<intent\_key>>_" **Example**: "I pizza\_types".

**Note**: The intent key for a forked branch node is the same for each child intent in the branch node.

You can also use the intent key to transfer the conversational flow to a different intent based on your business requirement. See [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) and [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information.

### 

Skill response

A skill message in the Flow designer is where you configure a response for the corresponding user intent. In the **Flow designer**, skill response is indicated using a red call-out bubble above "Add agent Response".

You can add rich responses to user queries in a Dialog skill. This can be as simple as a text message, card, quick reply, or complex JavaScript. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.

**Example**: Considering the scenario of Order pizza skill, after the user chooses a Pizza type - "veg" or "non-veg", you can proceed further in the conversational flow by asking the user to choose some toppings for your pizza:

## 

Next steps

Continue to build Pizza agent conversational flow by adding user intents and skill responses:

*   Explore the various ways in which you can add user intents. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.
    
*   Explore the different types of skill responses such as card, carousel, quick reply, Listview. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/change-default-greeting-message

After creating the invocation intent, the next step is to build a conversational dialog flow. By default, a greeting node is provided for you. Start by changing the default greeting message; this is the first message displayed to the user after the skill is invoked. You can then continue to [add user intents](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent) and [build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses) as required to build the dialog flow.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

**To change the default greeting message**:

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Click the default greeting message node, in the dialog flow.
    

*   Update the default greeting message in the **Message** box and click **OK**. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more detailed information on different skill responses and **Advanced Settings**.
    
*   Select the channel for which you wish to add the greeting message. Using this feature, you can add different customized responses for different channels as per your requirement. If you have deployed your agent in a specific channel for which you have not configured any response, then the response as specified in the "Default" option is considered. **Example**: Consider that you have deployed your agent in Web, Android, and iOS channels and you have configured responses only for the Android channel. For the Web and iOS channel, the responses as specified in the **Default response** option is displayed.
    
*   If you have configured languages in the skill, then a language dropdown is displayed. Select a language in which you wish to add the response.
    

**Key Point:** With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination. Example: You can add a response specific to the Android channel in the French language.

*   Click **Save**.
    
*   You can now test the skill after adding the invocation intent and updating the greeting message, using the simulator in the **Agent** page. See [Test Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill), for more information. Invoke the skill using the Invocation Intent and verify if the greeting message is displayed in the agent.
    

**Note**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent

[Overview](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview)[Training Phrases](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/training-phrases)[Existing entity](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/existing-entity)[System intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/system-intent)[Custom code](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/custom-code)[Instructions](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/instructions)[Voice entity model](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/voice-entity-model)[FAQs](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/faqs)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview

You can build a conversational dialog flow by adding nodes with user intents and skill responses in the Dialog skill page.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit a skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the agent's accuracy in understanding user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

**Key point:** See [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence), for more information on intent execution priority.

**To add user intents**:

*   In the **Dialog skill** page, click **Edit** to unlock the skill.
    
*   Click the **Implementation** option in the left navigation pane.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "`Add agent Response`" to add an Intent.
    
*   Specify the following details in the user intent:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192 characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. You can add one of the following intent types - [Training Phrases](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#training-phrases), [Existing Entity](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#existing-entity), [System Intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#system-intent), [Custom Code](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#custom-code), and [Instructions](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#instructions) based on your business requirements.

N/A

Post-processing

Indicates any JS that is executed after the intent is invoked and before displaying the skill response. See [Build skill responses using script and code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information.

N/A

## 

Intent types

In a Dialog skill, you can add the following types of intent for a node in the flow: Training Phrase, Existing Entity, System Intent, or Custom Code.

### 

Training Phrases

These are the inline user intents (utterances or phrases) in the conversation flow.

**Example**: I want to order pizza, I want a pizza delivery.

*   **Intent Type**: Select Training phrases.
    
*   **Training Phrases**: Enter the training phrase and click Add. You can continue to add multiple training phrases, as required. Based on the training phrases, the slots are automatically filtered for you.
    
*   **Add training set**: This allows you to add training data in different languages. It is not required to train your skill in English only, you can train your skill in different languages.
    
    *   Add language in **Configuration -> Languages** and save the skill.
        
    *   Click **Add training set** in Invocation Intent.
        
    *   Select the required language and add the training set in the selected language.
        
    
*   Click **Save**.
    

**Notes**:

*   You can specify Training phrases upto 300 characters.
    
*   If you want training data that must match specific and generic queries, then it is recommended to provide generic training data. **Example**: If you wish to match "I want my fund value" and "I want fund value", then it is recommended to use "I want fund value" in the training data.
    

### 

Existing Entity

These are intents with entities. Note that only the entities added to the skill in the **Invocation intent** page are displayed in the list. See [Invocation Intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information on adding entities to the skill.

**Example**: Consider that in the Order Pizza skill, the first message asks the user for the type of pizza - veg, non-veg. In return, you can specify an intent with these entities to process the user response and proceed further in the conversation flow.

*   **Intent type**: Select an Existing Entity.
    
*   **Select entity**: Start entering the entity type and the results are automatically filtered out in the list. Choose an entity from the list. You can add only one entity to user intent.
    
*   **Select entity value (Optional)**: Choose the values from the selected entity type. Only these values are matched in the user intent. Example: Consider the "pizza\_type" entity type with cheese, corn, and pineapple as values. You have selected "pizza\_type" in the user intent and only cheese and corn in the entity value. In this case, a user intent "I want to order veg pineapple pizza" is not matched to this node.
    
*   **Training data (Optional)**: Enter the training phrase and click Add. You can continue to add multiple training phrases, as required. You can add a combination of training data with an existing entity. This enables you to specify a stricter or restricted match of a user query that contains the selected entity. See [What if I have both training phrases and an existing entity in a user intent? How is the behavior defined?](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/overview#1.-what-if-i-have-both-training-phrases-and-an-existing-entity-in-a-user-intent-how-is-the-behavior) for more information on how matching is defined with an example.
    
*   Click **Save**.
    

### 

System intent

These are the system intents with pre-defined training phrases already available in the platform. The following system intents are supported in the platform - yes, no, frustration, live agent, cancel, repeat, go back, thank you.

**Example**: Consider that you wish to respond to the user's frustration by transferring to a live agent or via collecting feedback. You can create a user intent with frustration system intent and add a skill response to transfer to a live agent.

*   Select the **Intent type** as **System**.
    
*   In **Select entity**, you can start entering the entity type and the results are automatically filtered out in the list. You can add only one entity to a user intent
    
*   Choose the entity type from the list and click **Save**.
    

### 

Custom Code

These are intents with custom JavaScript code.

**Example**: You can create a custom intent with a regular expression to match the user-entered pizza order number. Alternatively, you can also create an entity with a regular expression. Note that goto\_node is not supported in the custom intent handler; you must return true or false in this handler.

*   Select the **Intent type** as **Custom code**.
    
*   Provide JavaScript in the Custom intent handler and click **Save**.
    

### 

Instructions

**Note:** This applies only to [AI agents](/user-guide/ai-agent/overview-key-features).

Instructions specify when a node should be invoked in response to user input. They replace traditional training phrases and enable more flexible, natural intent matching.

#### 

Example instructions

*   “Invoke this flow if the user wants to order a pizza.”
    
*   “Trigger this step when the user selects a vegetarian option.”
    
*   “Invoke the dialogue if the user asks about pizza delivery.”
    

These instructions allow the system to interpret user intent without requiring exact phrase matches.

*   In the **Invocation Intent** section, select **Instructions** as the intent type.
    
*   Enter an instruction that describes when the flow should be triggered.
    

## 

Frequently asked questions (FAQs)

### 

1\. What if I have both training phrases and an existing entity in a user intent? How is the behavior defined?

Consider that you have specified both a training phrase and an existing entity in a user intent:

The following table depicts how the intent matching to a user query works in this case:

User query

User intent match

With just date entity value. Example: Today, Tomorrow, 04 Jan 2000

Yes

Training data with entity value. Example: "I celebrate my birthday today"

Yes

Training data without entity value. Example: "I celebrate my birthday"

No

A user query other than those mentioned in the training data with entity value. Example: "I celebrate my anniversary today"

No

### 

2\. What is the maximum length of the training phrases?

You can specify Training phrases up to 300 characters.

### 

3\. What are the best practices of training phrases or training data?

The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill), for more information on intent training guidelines.

### 

4\. What is the intent execution sequence in a Dialog skill?

When a user posts a query to an agent, the agent understands and classifies the input and then selects an appropriate skill to engage with the user. Avaamo Platform evaluates all the intents and the intent with the best possible match is considered. There are three skills considered during intent execution - Dialog, Q&A, and Smalltalk.

If a Dialog skill is invoked at the agent level, then there is a specific order in which the intent within the Dialog skill gets executed. See [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/training-phrases

For an agent to respond to user queries, each intent must be trained with specific sentences that are used as representative phrases for user queries. This set of sentences is referred to as the **Training phrases.**

### 

Before you begin

Before you begin to add user intents in the Dialog skill conversational flow, it is recommended to have a thorough understanding of the following concepts:

*   [Intents and Training data](/user-guide/overview-and-concepts/intents)
    
*   [Entities](/user-guide/overview-and-concepts/entity-types)
    
*   [Slots](/user-guide/overview-and-concepts/slots)
    
*   [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)
    
*   [Best practices of designing a skill](/user-guide/how-to/build-skills/design-skill)
    

### 

What are training phrases?

These are the inline user intents (utterances or phrases) in the conversation flow. **Example**: I want to order pizza, I want a pizza delivery.

### 

How to use training phrases in user intents?

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill.
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192

characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. Select Training phrases.

N/A

Training Phrases

Enter the training phrase and click **Add**. You can continue to add multiple training phrases, as required. Based on the training phrases, the slots are automatically filtered for you.

Each training pharse can be maxium of 300 charactersClick **Save**.

Add training set

This allows you to add training data in different languages. It is not required to train your skill in English only, you can train your skill in different languages.

*   Add language in **Configuration -> Languages** and save the agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.
    
*   Click **Add training set.**
    
*   Select the required language and add the training set in the selected language.
    

N/A

Post-processing

Indicates any JS that is executed after the intent is invoked and before displaying the skill response.

Use this to dynamically reroute the flow and skip the current intent. **Example**: `if(context.variables.hasId==true){` `return goto_output(2)` `}`

See [Build skill responses using script and code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information.

N/A

### 

Key points

*   If you want training data that must match specific and generic queries, then it is recommended to provide generic training data. **Example**: If you wish to match "I want my fund value" and "I want fund value", then it is recommended to use "I want fund value" in the training data.
    
*   See [Intent and training phrases](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases-training-utterances-or-training-data), for more information on recommended best practices for using training phrases.
    
*   See [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence), for more information on intent execution priority

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/existing-entity

**Key point**: You can add an existing entity only when you have trained a sample query with the required entity extracted in the Invocation intent of the respective skill. For example: If you wish to use say a regex entity `order_number` in your implementation, then

*   Create an entity with the required regex. See [Add entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information.
    
*   Add a user query with the order number in the invocation intent. Example: `I want to check the status of my order 6BFC86`, the order\_number entity is extracted and available in the Invocation intent. See [Add Invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information
    
*   Next, in the Dialog skill implementation, you can add order\_number as an existing entity in the user intent.
    

If an intent refers to a verb or the action in the user query, then an entity refers to a noun (the object on which the action is performed) in the user query. **Example**: In the user query "I want to book tickets from San Francisco to New York", San Francisco and New York represent entities of type Location. See [Entities](/user-guide/overview-and-concepts/entity-types), for more information.

To respond to user queries accurately, it is important to extract the right entities from the user query to interpret the user's intent correctly.

### 

Before you begin

Before you begin to add user intents in the Dialog skill conversational flow, it is recommended to have a thorough understanding of the following concepts:

*   [Intents and Training data](/user-guide/overview-and-concepts/intents)
    
*   [Entities](/user-guide/overview-and-concepts/entity-types)
    
*   [Slots](/user-guide/overview-and-concepts/slots)
    
*   [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)
    
*   [Best practices of designing a skill](/user-guide/how-to/build-skills/design-skill)
    

### 

What is an Existing entity in user intent?

Existing entities are intents with entities. This helps to extract accurate entities from the user query in the conversation flow.

**Example**: Consider that in the Order Pizza skill, the first message asks the user for the type of pizza - veg, non-veg. You can create "pizza\_types" as an entity, and in the subsequent node, add an intent with this entity to process the user response and proceed further in the conversation flow.

### 

Why use an Existing entity in user intent?

Using existing entities in user intent helps in:

*   **Improving the accuracy** of responding to user queries, since the entities are detected properly in from user's query.
    
*   **Maintainability and Scalability**, since you just have to specify only one training phrase with an entity value, and the system automatically replaces it with other entity values of the same entity type in the training phrase. Example: In a Health assistant -> Appointment booking skill, the training phrases can be
    
    1.  I want to book an appointment with a Cardiologist
        
    2.  I want to book an appointment with a Neurologist
        
    3.  I want to book an appointment with a Physician, and so on
        
    
    If you have created an entity type say "Speciality" with values as Cardiologist, Neurologist, and Physician, you just have to specify training phrase - " I want to book an appointment with a Cardiologist" and the system automatically matches if the user utterance is "I want to book an appointment with a Physician" or any other entity value. It is not required for the agent to be trained in all such occurrences. Hence it is easy to maintain and scale. You can continue to add further values in your entity type, without having to modify your training phrase.
    
*   Automatically detect the entities in a user query and skip asking questions to the users for which the answers are already available in the initial query. This is referred to as [Entity skipping](/user-guide/overview-and-concepts/advanced-concepts/entity-skipping).
    
*   Re-using the entities across different virtual assistants or different skills in the same virtual assistant instead of requiring to train such common phrases repeatedly.
    

### 

When to use Existing entity?

Use the "Existing entity" option in the user intent when you expect an entity to be extracted at a specific point in the conversation flow.

### 

How to use Existing entity in user intents?

**Key point**: Only the entities added to the skill in the **Invocation intent** page are displayed in the list. See [Invocation Intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information on adding entities to the skill.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill.
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192

characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

**Supported characters**: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. Select **Existing entity**.

N/A

Select entity

Start entering the entity type and the results are automatically filtered out in the list.

Choose an entity from the list. You can add only one entity to user intent.

N/A

Select entity value (Optional)

Choose the values from the selected entity type. Only these values are matched in the user intent.

**Example**: Consider the "pizza\_type" entity type with cheese, corn, and pineapple as values. You have selected "pizza\_type" in the user intent and only cheese and corn in the entity value. In this case, a user intent "I want to order veg pineapple pizza" is not matched to this node.

N/A

Training data (Optional)

Enter the training phrase and click **Add**.

*   You can continue to add multiple training phrases, as required.
    
*   You can add a combination of training data with an existing entity. This enables you to specify a stricter or restricted match of a user query that contains the selected entity.
    
*   See [What if I have both training phrases and an existing entity in a user intent? How is the behavior defined?](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent#1-what-if-i-have-both-training-phrases-and-an-existing-entity-in-a-user-intent-how-is-the-behavior-defined) for more information on how matching is defined with an example.
    

N/A

Post-processing

Indicates any JS that is executed after the intent is invoked and before displaying the skill response.

Use this to dynamically reroute the flow and skip the current intent. **Example**: `if(context.variables.hasId==true){` `return goto_output(2)` `}`

See [Build skill responses using script and code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information.

N/A

*   Click **Save**.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/system-intent

An **intent** is an action in the user query that indicates what the user wishes to do. The same intent can be expressed in different ways by the user. Certain intents, such as repetition and politer, are all part of natural language in human conversation and are common in any conversational flow. For example,

*   In a Travel assistant, if the user wishes to confirm a booking, the user might say, Yes, Yeah.
    
*   Similarly, in a Health assistant, the same intent for confirmation such as yes, Yeah, Okay, and many such variations of "Yes" can be used to confirm refilling a prescription.
    

Instead of re-training the same phrases repeatedly, it is efficient and faster to have a set of pre-defined training phrases to capture such common user intents. These are referred to as System intents.

### 

Before you begin

Before you begin to add user intents in the Dialog skill conversational flow, it is recommended to have a thorough understanding of the following concepts:

*   [Intents and Training data](/user-guide/overview-and-concepts/intents)
    
*   [Entities](/user-guide/overview-and-concepts/entity-types)
    
*   [Slots](/user-guide/overview-and-concepts/slots)
    
*   [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)
    
*   [Best practices of designing a skill](/user-guide/how-to/build-skills/design-skill)
    

### 

What are system intents?

System intents are intents with pre-defined training phrases capturing the most common user intents in the conversational flow.

**Example**: Consider that you wish to respond to the user's frustration by transferring to a live agent or via collecting feedback. You can create a user intent with frustration system intent and add a response to transfer to a live agent.

### 

Why use system intents?

System intents hence help in:

*   Efficiently capturing different variations of the same intent that are commonly used in the conversational flow.
    
*   Reusing the system intents across different virtual assistants or different skills in the same virtual assistant instead of requiring to train such common phrases repeatedly.
    
*   Building conversational flow faster since it does not require any coding to be done by the users to build agents.
    
*   Improving the accuracy of recognizing such common intents in the conversational flow thereby providing a good user experience.
    

### 

List of system intents

The following system intents are supported in the platform - yes, no, frustration, live agent, cancel, repeat, go back, thank you.

### 

When and Where to use System intents?

System intents are like "fillers" in the middle of a conversational flow. They help in continuing further conversations with the users. Hence, system intents are available in Dialog skill that helps in building multi-turn conversational flows.

For example, In a "Refill prescription" skill of a Health assistant, you can build a conversational flow with system intents such as:

*   Yes, No -> To get confirmation from the user to proceed with refilling the prescription.
    
*   Repeat -> To repeat the prescription
    
*   Frustration -> To detect any frustration from the user and transfer to an agent.
    

### 

How to use system intents?

You can choose intent type as **System intent** when you add user intents to any node of the Dialog skill based on your conversational flow design. For example, in this **User intent**, "Yes" system intent is selected:

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192

characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. Select Training phrases.

N/A

Training Phrases

Enter the training phrase and click **Add**. You can continue to add multiple training phrases, as required. Based on the training phrases, the slots are automatically filtered for you.

Each training pharse can be maxium of 300 characters

Add training set

This allows you to add training data in different languages. It is not required to train your skill in English only, you can train your skill in different languages.

*   Add language in **Configuration -> Languages** and save the agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.
    
*   Click **Add training set.**
    
*   Select the required language and add the training set in the selected language.
    

N/A

Post-processing

Indicates any JS that is executed after the intent is invoked and before displaying the skill response.

Use this to dynamically reroute the flow and skip the current intent. **Example**: `if(context.variables.hasId==true){` `return goto_output(2)` `}`

See [Build skill responses using script and code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information.

N/A

*   Click **Save**.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/custom-code

When you build enterprise agents, there can be scenarios, where you wish to check for certain business logic and then trigger an intent. In such cases, Avaamo Platform allows you to write custom Javascript logic in the intents and then trigger the intents if the condition returns true.

### 

Before you begin

Before you begin to add user intents in the Dialog skill conversational flow, it is recommended to have a thorough understanding of the following concepts:

*   [Intents and Training data](/user-guide/overview-and-concepts/intents)
    
*   [Entities](/user-guide/overview-and-concepts/entity-types)
    
*   [Slots](/user-guide/overview-and-concepts/slots)
    
*   [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)
    
*   [Best practices of designing a skill](/user-guide/how-to/build-skills/design-skill)
    

### 

What are custom code intents?

These are intents with custom JavaScript code. See [Using Script and Code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information on the in-built library and objects available in the Avaamo Platform.

**Example**: You can create a custom intent with a regular expression to match the pizza order number entered by the user. Alternatively, you can also create an entity with a regular expression. Note that goto\_node is not supported in the custom intent handler, you must return true or false in this handler.

### 

How to use custom code intents?

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192

characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. Select **Custom code**.

N/A

Custom intent handler

Specify a Javascript function to parse user input. Return true to execute the intent or false to exit from intent.

N/A

*   Click **Save**.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/instructions

`Instructions` define how user input should trigger a specific conversation path. Instead of relying on example utterances alone, instructions allow developers and designers to describe intent conditions in clear, human-readable statements that the system evaluates using natural language understanding.

Instructions replace or complement traditional training phrases by providing the system with intent guidelines that determine when to invoke a dialogue flow or node.

### 

What are the instructions?

Instructions are declarative `intent conditions` written in natural language that describe when a flow or specific node should be triggered.

Unlike rigid training phrase lists, instructions are evaluated dynamically by the conversational engine to determine the appropriate invocation, enabling flexible intent matching across diverse user expressions.

### 

How to use instructions?

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the agent's accuracy in understanding user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    

Parameters

Description

Maximum length

Intent name

Indicates the name of the intent.

Each intent name must be unique within the skill.

192

characters

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Intent type

Indicates the type of user intent. Select `Instructions`.

N/A

`Instructions`

In the instruction text field, enter a natural language description of when this intent should be triggered.

N/A

*   Click **Save**.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/voice-entity-model

With the virtual world expanding, it is crucial to deliver virtual voice agents that are more sensitive, intuitive, and accurate. This helps is providing a more engaging experience with the user.

The first step towards enhancing accuracy is to understand the user query correctly. Hence, in any Conversational AI Platform, it is critical to extract and understand the entities accurately, since often that is the starting point of the conversation and it completes the user query. See [Entities](/user-guide/overview-and-concepts/entity-types), for more information.

**Example**: In the user query, "Can you book an appointment for John today?", the following entities must be extracted accurately to proceed further with booking appointment:

Entity

value

Name

John

date

today

Another example can be extracting the name and date of birth to authenticate a user for refilling a prescription.

If the information in the user query is understood correctly, then the entire conversation flow proceeds smoothly with the agent. This can lead to a good and pleasant user experience. With the **Voice entity model**, a virtual agent’s ability to extract precise entities during a conversation has considerably enhanced increasing conversational ease and experience.

### 

What is the Voice entity model?

Voice entity models are pre-built models to precisely detect relevant entities from the user's speech. It is a model built by using millions of actual user utterances combined with domain-specific data.

### 

Why use Voice entity models?

Voice entity models help us to:

*   Enhance the accuracy of interpreting user query and hence provides a good user experience
    
*   Accelerates agent development, since the same voice entity models can be used in multiple intent interpretations without having to code.
    

### 

When and where to use voice entity models?

Voice entity models are available when:

*   You have deployed your agent in the C-IVR channel. See [C-IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.
    
*   You are building a conversational flow using Dialog skills. See [Dialog skills](/user-guide/how-to/build-skills/create-skill/using-dialog-designer), for more information.
    

### 

List of Voice entity models

The following are the most commonly used voice entity models:

Entity Model

Description

Spoken example

Written example

Name

People Name including first and last name.

Matthew Brown

Matthew Brown

Email

Email Id

matthew at the rate avaamo dot com

matthew@avaamo.com

Spell Word

Spell Word

M a t h e w

Mathew

Date

Expected Date

twenty two of may two thousand and fourteen

22 of may 2014

Date of Birth

Expected date less than current date

twenty two of may two thousand and fourteen

22 of may 2014

Time

A specific time of day.

seven o'clock

7:00

Amount

A numerical value including whole numbers, fractions, and decimals.

twenty two

22

Age

A numerical value including whole numbers, fractions, and decimals.

twenty two years and six months

22 years and 6 months

Numbers

A numerical value including whole numbers, fractions, and decimals.

twenty two

22

Alphanumeric Sequence

A sequence of letters \[a-z\] and/or digits.

"a b c one two three"

ABC123

Alphabetical Sequence

A sequence of letters \[a-z\].

h q q g w r m y o

HQQGWRMYO

Digital Sequence

A digit sequence of any length.

one double oh two three

10023

Phone Number

A phone number, as used in the target locale.

plus one two one two five five five three seven one nine

+1-212-555-3719

Money

An amount of money with a currency unit name.

twelve dollars and eighty four cents

$12.84

Postal Code

A postal code, as used in the target locale.

k one a zero b one

K1A0B1

### 

How to use Voice entity models?

Voice entity models are available where you capture user intent in a Conversational-IVR flow using Dialog skills.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the **Agent** page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    
*   The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), for more information on intent training guidelines.
    

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Add user intents by creating a new node in one of the following ways:
    
    *   Click the **plus (+)** icon to add a new user intent and skill response in the node below the current node.
        
    *   Click the **fork** icon to add a new user intent and skill response as a forked branch to the current node.
        
    

*   Click the red call-out bubble above "Add agent Response" to add an Intent and specify the following details:
    
*   In the intent where you expect the user utterances to be of any of the voice entity models, select the required voice entity model from the **Voice entity model** list. See [Best practices](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/voice-entity-model#best-practices), for more information.
    

*   Click **Save**.
    

### 

Best practices

*   It is recommended to design the conversational flow to use only a single voice entity model per intent. This helps in improving the accuracy of user utterance recognition.
    
*   It is recommended to use the Voice entity model instead of [Voice hints](/user-guide/overview-and-concepts/advanced-concepts/voice-hints) as applicable. Voice entity models are more robust and help significantly increase the accuracy of user utterances.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/faqs

### 

1\. What if I have both training phrases and an existing entity in a user intent? How is the behavior defined?

Consider that you have specified both a training phrase and an existing entity in a user intent:

The following table depicts how the intent matching to a user query works in this case:

With just date entity value. Example: Today, Tomorrow, 04 Jan 2000

Yes

Training data with entity value. Example: "I celebrate my birthday today"

Yes

Training data without entity value. Example: "I celebrate my birthday"

No

A user query other than those mentioned in the training data with entity value. Example: "I celebrate my anniversary today"

No

### 

2\. What is the maximum length of the training phrases?

You can specify Training phrases upto 300 characters.

### 

3\. What are the best practices of training phrases or training data?

The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill), for more information on intent training guidelines.

### 

4\. What is the intent execution sequence in a Dialog skill?

When a user posts a query to an agent, the agent understands and classifies the input and then selects an appropriate skill to engage with the user. Avaamo Platform evaluates all the intents and the intent with the best possible match is considered. There are three skills considered during intent execution - Dialog, Q&A, and Smalltalk.

If a Dialog skill is invoked at the agent level, then there is a specific order in which the intent within the Dialog skill gets executed. See [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses

[Skill message window - Overview](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview)[Add skill messages (responses)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses)[Add buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons)[Add form elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements)[Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings)[Channel-wise supported responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/channel-wise-supported-responses)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview

In the **Skill message** window, you can add responses to user intents. The following lists the steps to add responses:

**Step 1: Select a channel**: You can add different customized responses for different channels your agent is deployed on. See [Channel-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#channel-specific-responses), for more information.

**Notes:**

*   You can also omit selecting a channel, if you do not wish to provide channel-specific responses.
    
*   If you have deployed your agent in a specific channel for which you have not configured any response, then the response as specified in the "Default response" option is considered. **Example**: Consider that you have deployed your agent in Web, Android, and iOS channels and you have configured responses only for the Android channel. For the Web and iOS channel, the responses as specified in the **Default response** option is displayed.
    

**Step 2: Select a language**: If you have added languages in your agent, you can customize responses specific to each language. See [Languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on how to add languages to an agent. See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information on how to customize the language responses.

**Note**: For [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) and [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa), you can set channel-specific and language-specific messages from the **Implementation -> Question & Answers** page.

**Step 3: Add response:** For each selected channel-language combination, you can add responses as per your requirements. You can also create multiple responses for each user intent, add tags, and create response filters as per your requirement. See [Add responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#add-responses-channel-language-combination), for more information.

**Key point**: With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination. **Example**: You can add a response specific to the Android channel in the French language.

## 

**Channel-specific responses**

Using this feature, you can add different customized responses for different channels as per your requirement.

**Note**: Only those channels that are enabled for your account or company are displayed in the Channel dropdown. If you wish to enable a channel, then contact Avaamo Support for further assistance.

**To add channel-specific response**:

*   In the **Skill message** window, select the channel for which you wish to add the response from the **Channel** dropdown.
    

*   If you have not configured any response for the selected channel, then the following message is displayed. Click **Add response** to proceed. See [Add responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#add-responses-channel-language-combination), for more information on how to add responses.
    

**Note:** For [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) and [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa), you can set channel-specific messages from the **Implementation -> Question & Answers** page.

*   If you have already configured a response for the selected channel, then the same is displayed. You can then edit the response as required.
    

## 

**Language-specific responses**

If you have added languages to your agent, you can view the list of languages in the language dropdown. This allows you to view and customize the responses in different languages. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

**To add language-specific response**:

*   By default, the response in en-US is displayed. Select a **language** from the dropdown. The translated responses of the specific language are displayed. You can customize the response in the selected language as required. See [Add responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#add-responses-channel-language-combination), for more information on how to add responses.
    

*   To customize the translation, click the text area where you wish to customize it. Specify the required custom translation. Note that when you provide a custom translation, the text area background is changed to blue. This helps you to easily identify custom and system-generated translations.
    
*   Click the button in the bottom-right corner of the text area, if you wish to reset the translation to system-generated translation. You can also click the reset button at the top, to reset all the text in the skill response to system-generated translation.
    

**Notes**:

*   For Greeting and Unhandled skills, you can add language-specific responses for those languages configured in your agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.
    
*   For [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) and [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa), you can set language-specific messages from the **Implementation -> Question & Answers** page.
    

## 

Add responses (Channel-Language combination)

In this section, for each selected channel-language combination, you can add responses as per your requirements. You can also create multiple responses for each user intent, add tags, and create response filters as per your requirement.

This section contains two main panels:

*   [Panel 1: Prompt details](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#panel-1-prompt-details): This is where you can configure and preview the responses using different in-built response types such as Text, Card, Quick reply.
    
*   [Panel 2: Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#panel-2-advanced-settings): In this panel, you can control skill flow, specify options to collect feedback, and specify idle prompt settings.
    

## 

Panel 1: Prompt details

The **Prompt details** panel is divided into three sections:

*   **Left section**: In this section, you can add multiple responses for the same user intent. See [Responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#responses), for more information.
    
*   **Middle section**: View the preview of the message. See [Response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#response) and [Voice response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#voice-response), for more information.
    
*   **Right section**: Add skill messages such as Text, Quick reply, and Card for each response. See [Messages](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#messages), for more information.
    

### 

Responses

This helps to identify responses when you have multiple responses for the same user intent. Click **Add** to add another response for the same user intent.

**Note**: If you add multiple responses for an intent without any response filter, then the system picks a random response from the set of multiple responses and displays it to the user.

*   For each response, you can enter the response name.
    
*   If you wish to use the default response for the selected channel, then move the slider **Use responses from default** to **Yes**.
    

**Note**: When you move the slider **Use responses from default** to "yes", then

*   The default response is used, even when you have configured a response for the selected channel.
    
*   The channel specific response is non-editable since you wish to use the default response for the selected channel.
    

You can add upto 50 responses to the same user intent. See [FAQs in Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#3-when-multiple-responses-with-response-filters-match-the-user-intent), for more details on the order of execution.

### 

Response

This is where you can preview the response added in the **Messages** section. Click the plus icon and select from the list of response types.

For each response type, you can enter the details in the **Messages** section. As you enter the details in the [Messages](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#messages) section, you can preview the same in the **Response** section.

### 

Voice response

If you have enabled voice in web, android, or iOS channels, then you can specifically add a response for voice in the **Voice response** panel. See [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), for more information on how to enable voice in web, android, or iOS channels.

**Notes**:

*   You can also configure voice hints and playback voice of the voice assistant in the web channel. See [Voice settings](/user-guide/how-to/build-agents/configure-agents/add-voice-settings), for more information.
    
*   If you have configured messages both in response and voice response, then the response message is displayed in the agent chat widget and the voice response is read out to the user.
    
*   You can also omit configured Voice responses. If you have not configured a Voice response, then the Response message is read out to the user. Note that for the voice messages to be read out from the Response message, it must be either [Text](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#text) or [Quick reply](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#quick-reply) response types.
    
*   Not all languages are supported in the voice assistant. See [Voice - Supported languages](applewebdata://F30A6D8E-2686-41CE-B971-3854BD2057D8/@avaamo/s/avaamo/~/drafts/-MYxGNUFf68iUPzf71u7/v/dev/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.
    

*   Select channel as either Web, Android, or iOS where you have enabled voice and wish to configure the voice response
    
*   Click the plus icon and select from the list of response types.
    

*   For each response type, you can enter the details in the **Messages** section. As you enter the details in the [Messages](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#messages) section, you can preview the same in the **Voice** **Response** section.
    

### 

Messages

This is where you make changes to the skill response by adding messages, images, buttons, and elements. See [Add a skill message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#add-a-skill-message), for more information.

**Note**: There is a 192 character limit for all the user-defined text fields.

#### 

**Tags**

Add tags to the skill responses, if you have configured any for the agent. This is useful when you wish to assess the usage of the agent by categorizing and tagging the intents distributed across different skill responses. As you type, a list of tags configured for your agent is displayed in the dropdown. You can also add multiple tags if required.

**Note**:

*   You can upto 50 tags for a skill response. See [Add tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
    
*   You can dynamically associate tags to responses using JS. See [Add tags (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js), for more information.
    

When the user query hits the node, all the corresponding tags added to the node are associated with the user query. You can view the top tags in the Analytics board. See [View analytics of top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags), for more information on the "Top Tags" Analytics board.

#### 

**Response filters**

Add filters to the skill responses, if you have configured any for the agent. This is useful when you wish to add different responses for the same user intent based on certain user properties such as location and status. As you type, a list of response filters configured for your agent is displayed in the dropdown. You can also add multiple response filters if required.

**Note**: You can add upto 50 response filters to a skill response. Each response filter is an AND condition; the response is displayed only when all the filters match. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.

When the user query hits the node, the corresponding response filters are applied and the appropriate response is displayed for the user. See [FAQs in Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#3-when-multiple-responses-with-response-filters-match-the-user-intent), for more details on the order of execution. Also, see [Example: Add response filters](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#example-add-response-filters).

#### 

**Skip translation**

Check this option, if you wish to skip translation to the detected language.

## 

**Panel 2**: **Advanced Settings**

In the **Advanced settings** tab of skill response, you can control skill flow, specify options to collect feedback, and specify idle prompt settings. If you have deployed your agent in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), then you can also specify Voice hints.

See [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.

**Notes**:

*   **Advanced settings** option is available only for Dialog skill responses.
    
*   To delete any field or element, hover on the field or element in the preview section and click the **Delete** icon.
    

## 

Example: Add response filters

Consider that you wish to display different responses for the same Dialog skill intent based on the user location property:

User query

Indian user

US user

I want to onboard a new employee

Alright. Let's start entering basic details. Can you enter the Aadhar number of the new employee? I will quickly check and fill in the other details.

Alright. Let's start entering basic details. Can you enter the SSN of the new employee? I will quickly check and fill in the other details.

### 

Step 1: Add user properties

Add a user property "Office City". See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

Step 2: Add response filters

Configure two response filters, one for "Location - India" and another for "Location - US". Add values for each of these as required. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#add-response-filters), for more information.

### 

**Step 3**: **Add response filters to Dialog skill response**

*   In the Skill messages, add two text responses:
    
    *   "Alright. Let's start entering basic details. Can you enter the Aadhar number of the new employee? I will quickly check and fill in the other details." and apply the "Location - India" response filter.
        
    *   "Alright. Let's start entering basic details. Can you enter the SSN of the new employee? I will quickly check and fill in the other details." and apply the "Location - US" response filter.
        
    

### 

**Step 4: Test your agent**

*   In the web channel URL, set the custom\_properties\[office\_city\]=Bangalore. Specify the user query in your agent simulator and check if the response of the "Location - India" response filter is received.
    

*   In the web channel URL, set the custom\_properties\[office\_city\]=Boston. Specify the user query in your agent simulator and check if the response of the "Location - US" response filter is received.
    

*   See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties) and [Test your web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel#test-your-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses

You can add rich responses to user queries in a Dialog skill. This can be as simple as a text message, card, quick reply, or complex JavaScript.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog Skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit a skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

**Key point**: If the agent response contains sensitive PII data such as name, account number, password, then it is recommended to mask the agent responses to protect user privacy. See [Agent response masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses), for more information.

**To add a skill response**:

*   In the **Dialog skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   In the conversation flow tree, click **Add agent response** in the node where you wish to add the skill response.
    

*   In the **Skill message** pop-up, on the left panel, click the plus (+) icon to open the list of skill responses and select the response type.
    

*   In the **Prompt details** tab,
    
    *   Specify details according to each response type - [Agent voice](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#agent-voice), [Voice menu](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#voice-menu), [Text](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#text), [Quick Reply](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#quick-reply), [Card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#card), [Carousel](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#carousel), [ListView](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view), [JavaScript](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#javascript), [Integrations](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#integrations), [Audio](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#audio), [Video](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#video), [Files](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#files), and [Switch Persona](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#switch-persona).
        
    *   Skip Translation: Check if you wish to skip the translation of this message when displayed to the user. By default, all the responses are translated into the detected languages.
        
    
*   Set [Advanced Settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) as required.
    
*   Click **OK** to save the skill response.
    

### 

Agent voice

**Note**: This option is enabled only if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

You can use "Agent voice" to add SSML tags as agent responses in your C-IVR channel. When you add the SSML tags, the text is read out by the agent to the user in the C-IVR channel.

*   In the **SSML response text area**, you can click the tags provided under SSML and add or modify the responses as required. See [Speech Synthesis Markup Language (SSML) Version 1](https://www.w3.org/TR/speech-synthesis11/#S3.1.), for more information.
    
*   In the Avaamo Platform, all standard SSML tags such as Speak, Break, Lang, Emphasis, Say As, Phoneme, and Sentence are supported: See [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information.
    
*   You can use the play button to play and preview the response. You can also download the file if required.
    

**Note**: You can view a list of all invalid SSML errors in the JS Errors page when a user query triggers a response from the node where SSML is configured and is invalid. See [JS Errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.

### 

Voice menu

**Note**: This option is enabled only if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

You can use the "Voice menu" to add menu options as agent responses for your C-IVR channel. When you add the voice menu option, the agent reads out the voice options in the format - "Press 1 or say <<button name specified>>".

*   Click the **\+** icon to add voice menu options:
    
    *   For each option, specify the button name that is read out in your voice menu option.
        
    *   **Voice command:** Executes the command and provides the response, if any. The voice command must be one of the invocation intent in the Dialog skill or intent in Q&A and Smalltalk skill.
        
    *   **Goto node**: Transfers the flow to the specified node number. As you type, the node number if available is displayed in the list. Select a node to transfer the flow. Specify in the format - <<Skill number>>.<<node number>>. Example: If you specify 4.2, then the flow is transferred to node 2 of skill number 4.
        
    *   **Goto main menu**: Transfers the flow to the main menu.
        
    *   **Spacing**: Indicates the number of seconds the agent waits before repeating the menu option. The default value is 0 seconds.
        
    *   **Repeat menu**: Indicates the number of times the menu is repeated. Enter 0 to not repeat the menu options. The default value is 0.
        
    
*   You can also add SSML tags along with the voice menu options. The text in the SSML tag is read out in the agent response before the voice menu option. This is optional. In the Avaamo Platform, all standard SSML tags such as Speak, Break, Lang, Emphasis, Say As, Phoneme, and Sentence are supported. See [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information. You can use the play button to play and preview the response. You can also download the file if required.
    

**Key Points**:

*   In the case of an unhandled response: The Agent voice or Voice menu configured in the unhandled response is read out to the user.
    
*   In the case of disambiguation: The disambiguation menu options are read out to the user to proceed further.
    

### 

Call forward

**Notes**:

*   This option is enabled only if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.
    
*   Call forward works only with real devices. Currently, the Call forward option is not supported in the agent simulator.
    

You can use a **Call forward** response to forward the call to another number such as a help center number or a call center number, in case the user requires any further assistance in the C-IVR flow.

*   In the Phone No. text box, provide the complete phone number with a country code.
    
*   In the **Message text box**, specify any message that you wish to be read out to the user before forwarding the call to the number.
    

**Note**: You can also add a call forward using a JS method. See [Forward call (C-IVR)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel), for more information.

### 

Text

You can use this to add simple display text. Example: Greeting message, Welcome message. In the Text response, enter the required text in the Message box.

**Note**: You can also access a context attribute using ${context.<<attributes>>} in a text message. See [Use Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context), for more examples.

### 

Quick reply

You can use a quick reply to add an acknowledgment to the user's questions or responses with buttons to provide any further options. Example: "Thank you", "you are welcome", "That sounds good". In the Quick Reply response, specify the following details:

*   **Message**: Enter the required text in the Message box. You can also access a context attribute using ${context.<<attributes>>} in the quick reply message. See [Use Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context), for more examples.
    
*   **Add Button**: Add buttons in the quick reply message, as required. See [Add Buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
    

### 

Card

You can use the card to add a rich detailed skill response with Title, Image, Description, Buttons, and Elements. Example: A card with a pizza image and a button to select a pizza size. In the Card response, specify the following details:

*   **Aspect ratio**: Select the aspect ratio. This is the ratio of the width to the height of an image.
    
*   **Title**: Enter the title of the card message.
    
*   **Showcase Image (Optional)**: Upload an image for your card. This is optional.
    
    *   Recommended image types: PNG, JPEG
        
    *   Recommended image size: 800px \* 420px (width to height)
        
    

**Notes**:

*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   In MS teams channel,
    
    *   Buttons on the card can show the label up to 45 characters.
        
    *   Embedded HTML for labels (HTML code inside title or description of a card) is not supported.
        
    *   See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
        
    

*   **Description**: Enter the description of the card message.
    
*   **Add Button**: Add buttons in the card message, as required. See [Add Buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
    
*   **Add Element (Optional)**: Add form element in the card message, as required. You can add upto 25 form elements to the card. See [Add Form Elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information.
    

### 

Carousel

You can use the carousel to add a set or series of cards, each with a Title, Image, Description, Buttons, and Elements. See [Card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#card), for more information. Click the plus (+) icon on the left to add more cards to the carousel. Example: A carousel of starter cards in a pizza order.

**Note**: You can add upto 25 cards to the carousel.

### 

Agentic text

You can use this to add simple text to the display. Instead of static responses, the agent uses this to generate responses dynamically.

**Note:** The Agentic Text feature is not enabled by default. Contact `Avaamo Support` to enable.

*   Example: _“Ask the user what size of pizza they want.”_
    

This enables more natural, less repetitive conversations.

### 

ListView

You can add a list of items or options with Title, Image, Description, and Buttons. Example: A list of special offer options in a pizza order. In the ListView response, specify the following details:

*   **Top Element Style**: Style for the first item in the list. By default, it is Large. A large element style provides more space at the top. Select Compact if this is not required.
    
*   **Items**: Add an item to the list. You can add upto 50 items in the ListView. Each item contains:
    
    *   **Title**: Specify the title of the item.
        
    *   **Subtitle (Optional)**: Specify the sub-title of the item.
        
    *   **Image (Optional)**: Upload any image for the item.
        
    *   **Add button**: Add button for the list item, as required. See [Add Buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
        
    

**Notes**:

*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   In the Microsoft Teams channel, the ListView top element style is only supported when an image is passed to the item due to the limitation on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    

*   **Add button (Optional)**: Add button for the entire list view, as required. See [Add Buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
    

### 

JavaScript

You can leverage Avaamo Platform's robust library with a rich set of objects and functions to customize and create enterprise skill responses using JavaScript.

*   See [Using Script and Code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for an exhaustive list of functionality that can be achieved using JS.
    
*   Use `CTRL+ENTER` key to toggle between fullscreen mode. You can view the complete list of built-in functions with syntax and examples in the Built-in functions window available in the JS editor. See [Built-in functions window](/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window), for more information.
    

**Note**: Any JS block must execute within 30 seconds and return a response back. If there is a JS block that takes more than 30 seconds, then you must consider reviewing the code and improving the response time.

### 

Integrations

You can integrate skills with other third-party services such as Oracle Right Now, Zendesk, Hybrid SDK (to name a few). The most common integrations is via API (REST, SOAP) or using Hybrid SDK. See [Integrate](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1), for more information.

### 

Audio

You can add an audio file to your skill response. **Example**: A set of instructions or notice. In the Audio response, click Upload mp3 to upload an mp3 audio file.

**Notes**:

*   You can upload only one file at a time.
    
*   Each file size can be upto 25MB.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    

### 

Video

You can add a video file to your skill response. Example: A demo of the product. In the Video response, click Upload video file to upload a video file.

**Notes**:

*   You can upload only one file at a time.
    
*   Each file size can be upto 25MB.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    

### 

Files

You can add a file to your skill response. **Example**: A form. In the **Files** response, click the **Upload file** to upload the file.

**Notes**:

*   You can upload only one file at a time.
    
*   Each file size can be upto 25MB.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    

### 

Delay

You can add this to include a delay between two responses. This helps the user to read the responses that are verbose, instead of displaying all the responses at once and hence provides a better conversational experience. By default, the value is displayed as 3 seconds. You can increase the time upto 30 seconds if required.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons

You can add different types of buttons to [Quick reply](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#quick-reply), [Card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#card), [Carousel](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#carousel), and [ListView](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#list-view) responses.

*   For each button, specify the button caption.
    
*   Additionally, depending on the button type, specify message, node number, URL, or HTML code, as required. You can add the following types of buttons:
    

*   [Call](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#call)
    
*   [Location](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#location)
    
*   [Date](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#date)
    
*   [Post message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#post-message)
    
*   [Goto node](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#goto-node)
    
*   [Webpage](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webpage)
    
*   [Webview (URL)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-url)
    
*   [Webview (HTML)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-html)
    

### 

Call

Allows you to create a link to a phone number. You must specify a complete phone number with a country code.

**Supported in**: Card, Carousel, List view

**Example**: The following is an example of the **Call** button in the **Card** response:

Post a query as specified in the intent to trigger the response. Click the **Call** button to create a link to a phone number. This creates the call link and tells the browser how to use the number.

You can use `context.last_message` to get the phone number specified in the **Call** button.

### 

Location

Displays the current location of the agent.

**Supported in**: Quick reply, Card, Carousel, and ListView

**Example**: The following is an example of the **Location** button in the **Quick reply** response:

Post a query as specified in the intent to trigger the response. Click the **Location** button to display the current agent location.

When the users click the **Location** button, the details of latitude and longitude along with complete address is available in `context.last_message` that can be used for further processing.

In the next node after the Location node, you can create an intent with a wildcard (training phrases intent without any training phrases) and in the post-processing perform necessary validations using latitude and longitude.

**Example**: In the pizza agent, you can validate the location, check for the nearby delivery stations, and update the delivery time.

**Notes**:

*   The Location button in Quick replies is deprecated by Facebook. See [https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies#locations](https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies#locations), for more information.
    
*   The Location button is not supported in the Microsoft Teams channel due to the limitation on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    

### 

Date

Displays a date picker.

**Supported in**: Quick reply, Card, Carousel, and ListView

**Example**: The following is an example of a **Date** button in the **Quick reply** response:

Post a query such as specified in the intent to trigger the response. Click the **Date of Birth** button to display a date picker:

You can use `context.last_message` to get the date selected by the user.

**Note**: The Date button is not supported in the Microsoft Teams channel due to the limitation on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.

### 

Post message

Post the specified message in the agent.

**Supported in**: Quick reply, Card, Carousel, and ListView

**Example**: The following is a sample example of the **Post message** button in the **Quick reply** response:

Post a query as specified in the intent to trigger the response. Click any of the buttons to post a message as specified in the response:

### 

Goto node

Transfers the flow to the specified node number.

**Supported in**: Quick reply, Card, Carousel, and ListView

**Example**: The following is a sample example of the **Goto node** button in the **Quick reply** response:

Post a query as specified in the intent to trigger the response. Click any of the buttons to Goto the respective node:

### 

Webpage

Navigates to the specified URL in a new browser tab.

**Supported in**: Card, Carousel, and ListView

**Supported channels**: Web, Facebook

Example: The following is a sample example of **Webpage** button in **ListView** response:

Post a query as specified in the intent to trigger the response. Click the "Know more..." button to navigate to the specified URL:

**Note**: Ensure that you have whitelisted all the URLs that are rendered inside the Team's web view or Task Module in the Teams App. See [Microsoft teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

### 

Webview (URL)

Navigates to the specified URL in the web view of the agent.

**Notes**:

*   The URL must be accessible without any privacy and security restrictions from the agent.
    
*   The link you are using must be allowed to be opened in an iframe.
    
*   Ensure that you have whitelisted all the URLs that are rendered inside the Team's web view or Task Module in the Teams App. See [Microsoft teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.
    

**Supported in**: Card, Carousel, and ListView

**Supported channels**: Web, Facebook

**Example**: See [Webpage](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webpage), except that the URL is displayed in the web-view, all other settings remain similar.

### 

Webview (HTML)

Displays the HTML in the web view of the agent. When you add a Webview button, you can choose the following types of views:

*   **Compact**: Displays a small compact view in the agent window.
    
*   **Tall**: Displays a view slightly bigger than the compact view in the agent window.
    
*   **Full**: Displays a view as big as the agent window.
    

**Supported in**: Card, Carousel, and ListView

**Supported channels**: Web, Facebook

**Example**: The following is a sample example of the Webview (HTML) button in ListView response:

Post a query as specified in the intent to trigger the response. Click the "Know more..." button to view the HTML content:

See [Create custom HTML web views](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/create-custom-html-web-views), for a complete example.

**Notes**:

*   Currently, Compact, Tall, and Full view are not supported in the Microsoft Teams channel due to the limitations on the channel's side. See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.
    
*   Webview (HTML) supports upto 65000 characters. If you have a requirement to use a larger HTML, then it is recommended to use [Webview (URL)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-url) option.
    
*   Specify HTML in the proper standard format. Include all the required elements such as HTML, HEAD, TITLE, and BODY. The "title" tag is displayed in the popup title. If you wish to omit the "title" tag, then it is still recommended to include an empty "title" tag, so that it adheres to proper HTML standards.
    
*   In case you wish to embed a video in your card input, then you can host it and use it as a "href". If you want to create a frame you can use the below code: `<iframe src="<<hosted file location>>" width="800" height= "500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements

You can add form elements to [Card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#card) responses. You can add the following form elements:

Form Element

Description

Single line text

Adds a single-line text field in the form.

Multi line text

Adds a multi-line text field in the form. Typically, used for descriptive fields.

Number

Adds a scroll bar at the end of the field to pick a number.

Date

Adds a date picker to the form. The default format is MM-DD-YYYY.

Poll

Adds radio-button elements in the form.

Checklist

Adds checkbox elements in the form.

Picklist

Adds options in a dropdown list.

Rating

Adds a 5-star rating field to the form.

### 

Key points

Make a note of the following key points related to form elements:

*   You can add upto 25 form elements to the card.
    
*   Make a note of the field identifier. You can use this to get the text entered by the user in JS using context.last\_message.<<ID>>. See [Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context), for more information.
    
*   See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information on programmatically creating all these form elements in card response with enhanced functionality.
    

### 

Example

Consider that you wish to create a registration form in your Pizza agent. This form captures all the details such as first name, date of birth, preferred choices of pizza.

**To create a form**:

*   Create a card response in the Flow designer. See Card, for more information.
    
*   Add the required form elements. the following is an example of all the form elements in Card response. Make a note of field identifiers.
    

*   Post a query as specified in the intent to trigger the response. The following form elements as defined in the card response is displayed in the agent:
    

*   You can access the form elements to get the text entered by the user in JS using context.last\_message.<<ID>>. See [Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings

In the **Advanced settings** tab of skill response, you can control skill flow, specify options to collect feedback, and specify idle prompt settings.

**Note**: The **Advanced settings** tab is available only for all the Dialog skill responses.

## 

Voice hints

**Note**: This option is enabled only if you have deployed your agent in the C-IVR channel. See the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

You can specify certain keywords or phrases as Voice hints in the response node that can help in providing better interpretation or recognition of the user response in the conversational IVR interaction. It helps in understanding the nuances of the dialect and provides clues or hints to the agent indicating that the user can provide such similar inputs at the specified node when the response is read out to the user.

See [Understanding Voice hints](/user-guide/overview-and-concepts/advanced-concepts/voice-hints), for more details on the concept and common FAQs.

### 

When to use?

You can use node-level voice hints when you require better accuracy or recognition at a specific node. Node level voice hints are applied when control is at the node level and then the voice hints at the agent level are considered.

You can also specify voice hints at the agent level in the **Agent Configuration -> Voice hints** page. However, you must use agent-level voice hints only when you have voice hints that are required to be used commonly by all the skills. See [Add voice hints](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#configure-voice-hints), for more information.

### 

**Add or remove voice hints**

*   Type the hints in the **Voice hints** text box and click the **+** icon. You can add any number of voice hints to a node, there is no limitation on the number.
    
*   To remove voice hints, click the **X** button on the voice hint that you wish to remove and save the response.
    

**Example**: Consider that you have an "Order Status" skill in your pizza agent that checks for the order status using the order number provided by the user. You have deployed your agent in the C-IVR channel. This example demonstrates how you can use voice hints in the Dialog skill flow. The following is an illustration of a sample flow:

In the first node, you start by asking for the order number from the user. Here, the user can provide an order number by entering the number in the phone's dial pad or the user can also read out the number (one, two, three).

In order to provide a better user experience and to enable continuous conversation with the user, you can provide these as voice hints. Notice here that when the user reads out the number "one", depending upon the accent or dialect, it can get interpreted as "one" or "won". In such cases, you can use voice hints to interpret numbers better. Example: In this use case, you can use an inbuilt voice hint such as `expecting_number.`Giving a voice hint as "`expecting_number`" enables the agent to understand that the user is indeed trying to say "one" and does not interpret or understand the word "one" as something else. It gives preference to the phrases in hints.

## 

Goto skill message

Displays the selected skill message and transfers the flow to the selected skill message after executing the current node.

Where to transfer?

How?

In the same Dialog skill

Select the skill response from the dropdown list. See [Example 1: Transfer in the same Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#example-1-transfer-in-the-same-dialog-skill), for more information.

To a different Dialog skill

Select the **Custom** option from the dropdown list and specify`<<skill_key>>.<<intent_key>>` in the textbox below the Custom option. See [Example 2: Transfer to different Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#example-2-transfer-to-different-dialog-skill), for more information.

To Greeting skill or main node

Select the **Custom** option and specify "main" in the textbox below the Custom option. See [Example 3: Transfer to main](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#example-3-transfer-to-main), for more information.

To other skills such as Dynamic Q&A, Smalltalk, Unhandled

Not supported

**Key Point**: A reset context slider is enabled when you select a message in "Goto skill message" and specify a value other than "None". See [Reset Context](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reset-context), for more information.

### 

Reference flow

For all the examples listed in this section, the following flow is used as a reference:

### 

Example 1: Transfer in the same Dialog skill

In the Order Pizza skill, consider that at the end of placing the order, you wish to check with the user if they would like to order one more pizza. If the user responds "yes", then you wish to transfer to the beginning node in the flow. See [Reference flow](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reference-flow), for more information on the sample flow of Order Pizza skill.

**To transfer the flow using Goto skill message**:

*   Click the skill response in the Order Pizza skill where you wish to transfer the flow.
    
*   In the **Advanced settings**, select **Goto skill message**.
    
*   Select the skill response from the dropdown list and click **OK**.
    

*   In the **Flow designer**, the **Goto skill message** is indicated using an arrow with the response it transfers to in the flow.
    

*   Click **Save** to save the flow details.
    
*   To test the flow, click the agent widget at the bottom-right corner. In the flow as you converse with the agent, you can see that the agent flow is transferred to the beginning node after executing the current skill response:
    

### 

Example 2: Transfer to different Dialog skill

In the Order Pizza skill, consider that at the end of placing the order, you wish to redirect the users to a registration form. See [Reference flow](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reference-flow), for more information on the sample flow of Order Pizza skill.

Registration is a part of another Dialog skill Register skill. The following illustration depicts sample flow of the Register skill:

**To transfer the flow using Goto skill message**:

*   Click the skill response in the Order Pizza skill where you wish to transfer the flow.
    
*   In the **Advanced settings**, select **Goto skill message**.
    
*   Select the **Custom** option from the dropdown list and specify`<<skill_key>>.<<intent_key>>` in the textbox below the Custom option.
    

*   Click **Save** to save the flow details.
    
*   In the **Flow designer**, the **Goto skill message** is indicated using an arrow with the response it transfers to in the flow.
    

*   To test the flow, click the agent widget at the bottom-right corner. In the flow as you converse with the agent, you can see that the agent flow is transferred to the specified node in the **Register skill** after executing the current skill response:
    

### 

Example 3: Transfer to main

In the Order Pizza skill, consider that at the end of placing the order, you wish to redirect the user to the main node. See [Reference flow](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reference-flow), for more information on the sample flow of Order Pizza skill.

**To transfer the flow using Goto skill message**:

*   Click the skill response where you wish to transfer the flow.
    
*   In the **Advanced settings**, select **Goto skill message**.
    
*   Select the **Custom** option and specify **main** in the textbox below the Custom option.
    

*   Click **Save** to save the flow details.
    
*   In the **Flow designer**, the **Goto skill message** is indicated using an arrow with the response it transfers to in the flow.
    

*   To test the flow, click the agent widget at the bottom-right corner. In the flow as you converse with the agent, you can see that the agent flow is transferred to the main node after executing the current skill response:
    

## 

Goto user intent

Transfers the flow to the specified intent after executing the current intent. Each user intent within a skill is uniquely identified using the following notation "I _<<intent\_key>>_".

**Example**: In the Order Pizza skill, go to delivery intent after taking the pizza order.

Where to transfer?

How?

To an intent in the same Dialog skill

Select the intent from the dropdown list.

To an intent in a different Dialog skill

Select the **Custom** option from the dropdown list and specify`<<skill_key>>.<<intent_key>>` in the textbox below the Custom option.

To Greeting skill or main

Select the **Custom** option and specify "main" in the textbox below the Custom option.

To other skills such as Dynamic Q&A, Smalltalk, Unhandled

Not supported

**Key Points**:

*   A reset context slider is enabled when you select an intent in "Goto intent" and specify a value other than "None". See [Reset Context](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reset-context), for more information.
    
*   Refer to the [examples in the Goto skill message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#goto-skill-message) section. Similarly, you can specify "Goto intent" as per your business requirement.
    

### 

Example 1: Transfer in the same Dialog skill

In the Order Pizza skill, consider that after the user selects the pizza type and pizza toppings, you wish to transfer the flow to order complete intent. See [Reference flow](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reference-flow), for more information on the sample flow of Order Pizza skill.

**To transfer the flow using Goto user intent**:

*   Click the skill response in the Order Pizza skill where you wish to transfer the flow.
    
*   In the **Advanced settings**, select **Goto user intent**.
    
*   Select the intent from the dropdown list and click **OK**.
    

*   In the **Flow designer**, the **Goto user intent** is indicated using an arrow with the response it transfers to in the flow.
    

*   Click **Save** to save the flow details.
    
*   To test the flow, click the agent widget at the bottom-right corner. In the flow as you converse with the agent, you can see that the agent flow is transferred to the complete order intent.
    

In the Order Pizza skill, consider that at the end of placing the order, you wish to redirect the user to the main node. See [Reference flow](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#reference-flow), for more information on the sample flow of Order Pizza skill.

**To transfer the flow using Goto skill message**:

*   Click the skill response where you wish to transfer the flow.
    
*   In the **Advanced settings**, select **Goto skill message**.
    
*   Select the **Custom** option and specify **main** in the textbox below the Custom option.
    

## 

Reset Context

Resets the context. This option is available when you select a node in "Goto skill message" or intent in "Goto user intent" and specify a value other than "None".

**Note**: By default, the context is reset at the leaf node of the Dialog skill. You can use the **Reset Context** slider to reset context in a non-leaf node. Note that when you do use Goto Skill Message from the last node of Advanced Settings, then the context is not reset as the agent is still in the same transactional flow and context.

**Example**: Consider the following conversation,

User => "I want to look for houses on rent near Westford".

Agent response => "Sorry right now there are none available, would you like to try a different locality?"

User => "Yes". In this node, you can reset the context and use Goto to navigate the user to the above skill response to reset and start searching again.

## 

Idle prompt

Transfers the flow to the specified skill response when there is no user activity for a certain number of specified seconds. **Example**: In the Order Pizza skill, go to a node to remind the user to complete order details.

**Notes:**

*   The maximum value of the Idle prompt can be up to 30 minutes. If you need to increase the idle prompt value, contact Avaamo Support with your use case details.
    
*   You can transfer the flow to a greeting node or to a node in the Dialog skill.
    
*   The maximum number of allowed redirections is five. An error occurs if an idle prompt exceeds this limit. The platform logs this issue on the JS Errors page with the message: `"The idle prompt has been halted as it has exceeded the limit."`
    

## 

Mark as goal

Move the slider if you wish to mark this node as the end of a goal. Goals are used to keep track of the number of transactions that have been processed in a given flow. You can use [insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) to track the transactions of a specific goal. **Example**: In the Order Pizza skill, at the end of completing the order details, you can mark it as a goal for the last node in the flow.

## 

Collect feedback

Move the slider if you wish to enable user feedback for this node. When you enable feedback for a node a thumbs up and thumbs down option is displayed to the user along with the response from the node.

*   **Thumbs up**: Indicates a positive feedback
    
*   **Thumbs down**: Indicates negative feedback. When a user clicks thumbs down, the following pop-up is displayed, which allows users to provide more details on your negative feedback. This information can be used in [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics) to continuously improve the user experience.
    

A report of all the user feedback can be view in the **Agent -> Learning -> User feedback** page to analyze the user experience with your agent. See [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback), for more information on how you can view feedback in the Analytics dashboard.

**Notes**:

*   You can add feedback in any response (Dialog, Q&A, Smalltalk) using a JavaScript`collectFeedback()`method. See [Add feedback (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback), for more information.
    
*   Currently, **Collect feedback** functionality is supported only in Web, Android, and iOS channels.
    

## 

Mask response

Move the slider if you mask all the agent's responses for this node in the conversation flow. When you enable masking for a node, all the agent responses such as text, cards, quick reply, user-uploaded files, videos, and audio are masked and cannot be accessed. Note that this option is available only when masking is enabled for an agent.

See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

**Note**: Information masking is not supported in the Microsoft Teams channel. See [Microsoft Teams Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/channel-wise-supported-responses

The following table summarizes the supported response types across the most commonly used channels for deployment in the Avaamo Platform. See [Deploy agents](/user-guide/how-to/build-agents/configure-agents/deploy), for a complete list of channels for deploying your agents.

Response type

Web / Android / iOS

Facebook (See notes)

C-IVR / Voice-enabled assistants

Custom Channel

Text

✅

✅

✅

✅

Quick reply

✅

✅

✅

✅

Card

✅

NA

NA

✅

Carousel

✅

✅

NA

✅

ListView

✅

✅

NA

✅

JavaScript

✅

NA

✅

✅

Integrations

✅

✅

✅

Audio

✅

✅

✅

Video

✅

✅

Files

✅

✅

Delay

✅

✅

✅

✅

Agent voice

✅

Voice menu

✅

Call forward

✅

Response type

SMS

MS Teams (See Notes)

Text

✅

✅

Quick reply

✅

✅

Card

✅

✅

Carousel

✅

✅

ListView

✅

JavaScript

✅

✅

Integrations

✅

✅

Audio

Video

Files

Delay

✅

✅

Agent voice

Voice menu

Call forward

**Notes**:

*   Facebook Messenger offers several content templates to display information in a conversational UI. However, there are certain limitations for each response type. See [Facebook Messenger Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-messenger-compliance), for more information.
    
*   For C-IVR and voice-enabled assistants, in Quick reply the following options are supported - Post message, Goto node.
    
*   Microsoft Teams offers several content templates to display information in a conversational UI. In order to ensure that conversation flows can be more quickly and accurately translated to the MS Teams chatbot UI, it is important to understand the elements that are not compliant with the MS teams channel. See [Microsoft teams compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/perform-common-actions

You can perform the following actions in the skill flow editor:

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog Skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the **Agent** page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

Edit Dialog skill

You can edit the skill to update the skill name and description as required.

*   In the **Dialog skill** page, click **Edit** to unlock the skill.
    
*   Click the **pencil icon** at the top-left corner next to the skill name.
    
*   Edit the skill details.
    

**Note**: By default, the skill key is non-editable. Click **Edit** to edit the skill key. It is recommended to edit the skill key with caution. If you update the skill key and if the key is used say in JS code or in regression testing, then you must update the skill key manually.

*   Click **Update** and click **Save** to save the skill details.
    

## 

Edit intents and responses

You can edit the intents and responses of a Dialog skill.

*   In the **Dialog Skill** page, click **Edit** to unlock the skill
    
*   Click the **Implementation** option in the left navigation pane. A dialog flow tree is displayed.
    
*   Click the intent that you wish to edit. Edit the intent details as required and click **Save**.
    

**Note**: By default, the **Intent key** is non-editable. Click **Edit** to edit the Intent key. It is recommended to edit the Intent key with caution. If you update the Intent key and if the key is used say in JS code or in regression testing, then you must update the Intent key manually.

*   Click the skill message that you wish to edit. Edit the [Prompt details](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses) and [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) as required and click **Save**. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.on
    

## 

Move nodes in the flow

In the dialog skill flow editor, **right-click** on any of the nodes to perform the following actions:

Actions

Description

Copy

Copies a single node or the entire branch within the same dialog flow or between agents. See [Copy node between agents](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/perform-common-actions#copy-node-between-agents), for more information.

Move left

Moves the node to its left in the dialog flow. This is not enabled for the left-most node in the dialog flow and for the first node or the root node in the flow.

Move right

Moves the node to its right in the dialog flow. This is not enabled for the right-most node in the dialog flow and for the first node or the root node in the flow.

Delete

Deletes either a single node or the entire branch and for the first node or the root node in the flow. This is not enabled for the first node or the root node in the flow.

Paste

Paste a copied node either to a new node or to an existing node. This is enabled only when you have a node that is copied. This is not enabled for the first node or the root node in the flow.

## 

Copy node between Dialog skills of agents

You can copy a single node or the entire branch from the Dialog skill of one agent to the Dialog skill of another agent.

*   Navigate to the Agent -> Dialog skill -> Implementation page of the agent from which you wish to copy the node. Right-click the node and click **Copy**. Choose if you wish to copy a single node or the entire branch from the agent.
    

*   Navigate to the Agent -> Dialog skill -> Implementation page of the agent to which you wish to copy the node or branch. Right-click the node where you wish to copy and click **Paste**. The following prompt is displayed:
    

*   Click in the area and press either CMD/CTRL + V. The following message is displayed:
    

*   Click **Paste** to complete the copy-paste of a single node or entire branch between agents
    

## 

Search, View, and Print

In the dialog skill flow editor, you can use the options provided at the right side of the editor to search, view, and print the flow.

### 

Search nodes

Click the **Search** icon on the right side of the editor. Start typing the intent name or the intent key that you wish to search. As you type, the results are filtered and displayed in the search.

Select the required node. The corresponding node is highlighted in the flow:

### 

Other actions

You can also perform the following actions

Actions

Description

Search

Search for the nodes in the dialog flow.

Zoom-in and Zoom-out

Use + and - icons to zoom in and zoom out respectively.

Maximize and Restore

Use this to view the dialog flow in full screen and to restore it back to the normal view.

Print

Use this to print the dialog flow.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill

You can test your skill using the agent simulator from any page available in the skill's left navigation pane without navigating back to the main agent page.

From any page in the Dialog skill click the **agent simulator** in the bottom right corner. Select a channel Web or C-IVR in which you wish to test. Note that this option is displayed if you have deployed your agent in both web and C-IVR channels. You can now ask queries and test if you are receiving appropriate responses from user queries.

**Note**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

**Few important examples are listed below**:

*   You can add new invocation intents to your **Dialog** skill and test agent using the agent simulator from the **Invocation intent** page itself without navigating back to the main agent page.
    

*   You can build a multi-turn conversational flow in your **Dialog** skill and test agent using the agent simulator from the **Dialog Designer** page itself without navigating back to the main agent page.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill

In case you are unable to receive the expected response from the **Dialog** skill, you can debug using the following troubleshooting tips:

### 

**Using Insights**

*   Click the eye icon below the user query to know the intent mapped to the query.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, skill name, intent name, response node, and the language of the query.
    

*   You can then consider updating the conversation flow, if required, based on the details available in the insights.
    

### 

Using Debug logs

Use console.log to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure. You can then use the **Debug logs** options in **Dialog skill** to display all the logs generated using console.log.

Consider that in the **Order skill** of the **Pizza agent**, you have logged **context** for an intent:

Copy

    console.log(context);

*   In the **Dialog skill** page, click the **Debug -> Debug logs** option in the left navigation menu.
    
*   Click the **agent** icon in the bottom-right corner.
    
*   Enter the pizza order details. Context details are displayed in the **Debug logs** window. Similarly, you can use **console.log** to log messages at specific steps in the script, as required.
    

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

### 

Using Conversation history

You can check the user query from the [Conversation history](/user-guide/how-to/build-agents/debug-agents#conversation-history) to view the complete flow that caused an error or unexpected response.

---
