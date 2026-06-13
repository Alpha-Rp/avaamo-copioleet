# AI Agent — Dialog Skill
> 10 pages

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill

[Quick overview](/user-guide/ai-agent/skills/dialog-skill/quick-overview)[Create dialog skill](/user-guide/ai-agent/skills/dialog-skill/create-dialog-skill)[Build and manage dialogs](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs)[Test Dialog skill](/user-guide/ai-agent/skills/dialog-skill/test-dialog-skill)[Debug Dialog skill](/user-guide/ai-agent/skills/dialog-skill/debug-dialog-skill)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/quick-overview

The Dialog skill in AI agents enables you to build agents that behave `deterministically` while still retaining `agentic flexibility`. It combines the structured reliability of dialog flows with the intelligence and spontaneity of AI-driven prompts, making it suitable for complex, real-world conversational scenarios.

Examples: The following are a few examples where dialog skill can be used to create multi-turn conversations:

*   Building a flow for diagnosing a patient using symptoms.
    
*   Ordering a pizza.
    
*   Creating an insurance policy.
    

In AI agents, the prompt skill first interacts with the user and identifies the intent. When the request requires a multi-step workflow, the agent transfers the conversation to the dialog skill. The dialog skill then guides the user through the required steps to complete the task.

## 

How does dialog skill work?

A dialog skill is built using two key components:

1.  **Prompt skill (orchestrator)** Acts as the entry point for every conversation. It decides `which dialog flow to invoke` based on user input.
    
2.  **Dialog skills (flows)** Handle structured conversations such as ordering, tracking, or support flows. These follow deterministic dialog logic similar to classic dialog skills.
    

**Conversation flow**

1.  User message is first handled by the **prompt skill**.
    
2.  The prompt (orchestrator) identifies the intent using instructions.
    
3.  A function call transfers control to the relevant **dialog skill**.
    
4.  Subsequent messages are handled by that dialog flow.
    
5.  If the dialog skill cannot handle a message, control returns to the orchestrator.
    

## 

Key concepts in dialog skill

### 

Instructions (replacing training data)

Flow skill replaces rigid training data with `instructions`.

*   Instructions define _when_ a dialog flow should be invoked.
    
*   They are flexible and expressive (for example, “invoke this flow if the user chooses any non-veg item”).
    
*   This removes the need to maintain long lists of sample utterances.
    

Refer [Instructions](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/instructions), for more information.

### 

Agentic text

Flow skill contains a new response type called **Agentic Text**.

**Note:** The Agentic Text feature is not enabled by default. Contact `Avaamo Support` to enable.

*   Instead of static responses, the agent uses instructions to generate responses dynamically.
    
*   Example: _“Ask the user what size of pizza they want.”_
    

This enables more natural, less repetitive conversations.

Refer [Agentic text](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#agentic-text), for more information.

### 

Entity definition

Entity handling in the dialog skill is simplified and more flexible.

Entities can be defined in one of the following ways:

#### 

**Entity**

*   Define an entity with a name and a description.
    
*   The description is passed to the LLM to extract the entity value from user input.
    

Example:

Name: _pizza\_type_

Description: _This is the size of the pizza, which can be small, medium, or large_

**Entity extraction script**

*   Use a **JavaScript (JS) block** to extract entities.
    

**Note:** If provided, the extraction script takes precedence over name and description.

Refer [Add Invocation](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/add-invocation), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/create-dialog-skill

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/ai-agent/create-an-ai-agent), for more information.
    
*   If you wish to edit an agent, navigate to the Agents tab in the top menu, search for the agent, and open it. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To create Dialog skills:**

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add Skill**.
    
*   In the **Skill Builder** page, select **Dialog Skill** and click **Create**.
    
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

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill. By default, a key is provided when you create a skill. You can change it to any user-friendly identifier.​

Supported characters: Alphanumeric and underscore​.

It is recommended that the key be at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.​

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](https://app.gitbook.com/o/-LpXFbuTM3h40PfxYgao/s/-LpXFTiTgns4Ml77XGi3/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), such as the Goto node, and in [regression testing](https://app.gitbook.com/o/-LpXFbuTM3h40PfxYgao/s/-LpXFTiTgns4Ml77XGi3/how-to/build-agents/test-agents/regression-testing). It helps in easy identification and readability.

20 characters

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs

[Add invocation](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/add-invocation)[Flow designer - Overview](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/flow-designer-overview)[Add user intent](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/add-user-intent)[Build skill responses](/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/build-skill-responses)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/add-invocation

Invocation defines when a dialog skill should be triggered in response to user input. Instead of relying solely on fixed training phrases, invocation uses instruction-based matching, allowing the platform to intelligently determine when the skill should run.

This approach provides more flexibility and improves the agent’s ability to understand variations in user requests.

### 

How invocation works

When a user sends a message to the agent, the platform evaluates the input against the invocation configuration of each dialog skill. If the input matches the defined instructions, the corresponding skill is triggered, and the conversation flow begins.

Invocation helps ensure that the correct skill is activated when the user expresses a relevant intent.

## 

Define Invocation

Invocation can be defined using entities as follows.

### 

**Entities**

Invocation intent using entity name and description. This approach is suitable for simple and flexible intent matching.

**How to add an Entity**

Consider creating an Order skill to place a pizza order in a Pizza agent.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill,](/user-guide/ai-agent/skills/dialog-skill/create-dialog-skill) for more information.
    
*   If you wish to edit a skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search for and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu and click the required skill.
        
    

**To add an invocation intent**:

*   On the `Dialog skill` page, click `Edit` to unlock the skill.
    
*   Click `Invocation` in the left navigation menu.
    
*   Specify the details below in the invocation and click `Save`
    

Field

Description

Example

**Entity name**

Specifies the information required to trigger the invocation.

`_pizza_type_`

**Description**

Provides details about the entity and helps the system infer the entity value from the user’s input. The description supports up to `1000 characters` and is passed to the LLM for interpretation.

`_Indicates the type of pizza, such as vegetarian or non-vegetarian._`

### 

Entity Extraction Script

For advanced invocation scenarios, you can use an `Entity Extraction Script`. This method is recommended when invocation depends on complex conditions or strict validation rules.

*   The script is written in `JavaScript (JS)`.
    
*   It enables precise control over how entities are extracted.
    
*   You can implement custom logic such as keyword matching, rule-based checks, or NLP-based extraction.
    

**Note:** If both the entity name and description and an entity extraction script are configured, the extraction script takes precedence and overrides the name-and-description–based entity extraction.

### 

Post Processing

Specify any JS that is executed after the intent is invoked and before displaying the skill response. Custom JavaScript to dynamically reroute the flow and skip the current intent.

**Note**: Post-processing is where intent execution continues after matching the invocation intent; hence, when post-processing is enabled at the invocation intent, entity skipping is no longer relevant and is not evaluated.

See [Skill response execution](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence#at-dialog-skill-level), for more information on the sequence of execution.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/flow-designer-overview

The **Flow designer** is an intuitive conversational modeling tool that enables you to quickly build multi-turn conversational flows using user intents and responses. The Designer provides a comprehensive set of content templates, including surveys, forms, carousels, and rich media cards, to create beautiful, engaging conversational interfaces.

Refer [Flow designer,](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/dialog-designer-overview) for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/add-user-intent

You can build a conversational dialog flow by adding nodes with user intents and skill responses in the Dialog skill page.

Refer [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/build-and-manage-dialogs/build-skill-responses

Refer [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/test-dialog-skill

You can test your skill using the agent simulator from any page available in the skill's left navigation pane without navigating back to the main agent page.

From any page in the Dialog skill, click the **agent simulator** in the bottom right corner. Select a channel, Web or C-IVR, in which you wish to test. Note that this option is displayed if you have deployed your agent in both web and C-IVR channels. You can now ask queries and test if you are receiving appropriate responses from user queries.

**A few important examples are listed below**:

*   You can add new invocation intents to your **Dialog** skill and test agent using the agent simulator from the **Invocation intent** page itself, without navigating back to the main agent page.
    

*   You can build a multi-turn conversational flow in your `Dialog` skill and test agent using the agent simulator from the `Dialog Designer` page itself without navigating back to the main agent page.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/dialog-skill/debug-dialog-skill

In case you are unable to receive the expected response from the **Dialog** skill, you can debug using the following troubleshooting tips:

#### 

**Using Insights**

*   Click the eye icon below the user query to see the intent mapped to it.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, skill name, intent name, response node, and the language of the query.
    

*   You can then consider updating the conversation flow, if required, based on the details available in the insights.
    

#### 

Using Debug logs

Use console.log to log messages at specific steps in the script. This helps verify whether the script is executing as expected and identify points of failure. You can then use the **Debug logs** options in **Dialog skill** to display all the logs generated using console.log.

Consider that in the **Order skill** of the **Pizza agent**, you have logged **context** for an intent:

*   In the **Dialog skill** page, click the **Debug -> Debug logs** option in the left navigation menu.
    
*   Click the **agent** icon in the bottom-right corner.
    
*   Enter the pizza order details. Context details are displayed in the **Debug logs** window. Similarly, you can use **console.log** to log messages at specific steps in the script, as required.
    

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

#### 

Using Conversation history

You can check the user query from the [Conversation history](/user-guide/ai-agent/debug/conversation-history) to view the complete flow that caused an error or unexpected response.

---
