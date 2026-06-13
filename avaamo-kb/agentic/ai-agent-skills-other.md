# AI Agent — Prompt / Built-in / Other Skills
> 19 pages

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills

[Built-in skills](/user-guide/ai-agent/skills/built-in-skills)[Knowledge skill](/user-guide/ai-agent/skills/knowledge-skill)[Prompt skill](/user-guide/ai-agent/skills/prompt-skill)[Dialog skill](/user-guide/ai-agent/skills/dialog-skill)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/built-in-skills

## 

Welcome skill

AI Agents display customized welcome messages across multiple channels — including Web, Microsoft Teams, iOS, and Android. This feature lets you greet users at the start of a conversation with a personalized message, helping create an engaging, guided experience.

#### 

Supported message types

You can configure different types of welcome messages using the Welcome skill:

*   **Text:** A simple text-based greeting or introduction.
    
*   **Card:** A structured message containing visuals or buttons.
    
*   **Quick-reply:** A message with suggested replies for quick user actions.
    
*   **JavaScript:** You can leverage a set of objects and functions to customize and create enterprise skill responses using JavaScript.
    

**To add a welcome message to the agent**:

*   In the `Agent > Skills` page, click `Welcome Message` skill.
    

*   In the `Welcome message` pop-up, customize the message as required, and click `OK`. You can add different types of responses in the message. You can apply the [response filter](/user-guide/how-to/build-agents/configure-agents/add-response-filters) to the welcome message.
    

*   Once configured, users can see the welcome message when they start a conversation with the AI Agent, ensuring a smoother, more guided chat experience.
    

## 

Outro message

The `Outro message` allows you to create and send a customized message to the user after the AI agent’s primary response. This helps make conversations feel more natural and engaging by suggesting relevant next steps or follow-up actions.

For Example:

After a user books a flight from Delhi to Bangalore, the agent can display the confirmation message and then post an outro message such as:

*   “Do you want to book a return ticket?”
    
*   “Would you like to book a hotel in Bangalore?”
    

By using outro messages, you can guide users toward related actions or offer helpful suggestions without interrupting the main response flow.

**Note:** Outro support is available only for function call responses within the prompt skill and applies exclusively to web and digital channels that support text messaging.

#### 

Supported message types

You can configure different types of welcome messages using the Welcome skill:

*   **Text message:** A simple text-based greeting or introduction.
    
*   **Card message:** A structured message containing visuals or buttons.
    
*   **Quick-reply message:** A message with suggested replies for quick user actions.
    

**To add an outro message to the agent**:

*   In the `Agent > Skills` page, click `Outro` skill.
    

*   In the `Outro message` pop-up, customize the message as required, and click `OK`. You can add different types of responses in the message. You can apply the [response filter](/user-guide/how-to/build-agents/configure-agents/add-response-filters) to the outro message.
    

**Note:** Predefined response filters (`Dialog` and `LLaMB Skill`) are available for the `Outro Message Skill.`

### 

**To create an outro, follow these steps:**

1.  **As a prerequisite, create a custom response filter:**
    
    *   Navigate to **Settings** and create a custom response filter.
        
    *   The executed tool function information will be available in the context.
        
    *   Refer to the [Response filters](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-response-filters) documentation for guidance on creating a custom response filter.
        
    
    **Example:**
    
2.  **Add the outro response:**
    
    *   Go to the **Skill** page and click **Outro**.
        
    *   Add your desired outro response and attach the response filter created in step 1.
        
    

Once the agent executes the tool function (e.g., `bookFlight`), the outro evaluation is triggered. Based on the defined criteria in the response filter, the appropriate outro message is selected and sent to the user.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill

[Create prompt skill](/user-guide/ai-agent/skills/prompt-skill/create-prompt-skill)[Add prompt](/user-guide/ai-agent/skills/prompt-skill/add-prompt)[Prompt Versions](/user-guide/ai-agent/skills/prompt-skill/prompt-versions)[Functions](/user-guide/ai-agent/skills/prompt-skill/functions)[Advanced Settings](/user-guide/ai-agent/skills/prompt-skill/advanced-settings)[MCP integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration)[Debug Log](/user-guide/ai-agent/skills/prompt-skill/debug-log)[Multi-agent architecture in Avaamo](/user-guide/ai-agent/skills/prompt-skill/multi-agent-architecture-in-avaamo)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/create-prompt-skill

The **Prompt Skill** enables you to create responses using simple effective prompts without any extensive training. It guides the AI agents to interpret, process, and respond to user queries.

It is ideal for handling open-ended queries where a structured multi-step dialog is not required. Prompt Skill leverages AI-driven completions to generate contextual responses based on user input.

Examples: The Prompt skill can be used in scenarios such as:

*   To book a flight ticket or a doctor's appointment
    
*   Providing an informational response, like FAQs or knowledge base answers.
    
*   Retrieving and displaying dynamic information based on a single input.
    

In the Avaamo Platform, you can easily create and customize Prompt skills using a simple interface, allowing you to configure specific responses to be triggered by a user’s input. The platform enables seamless integration of the Prompt skill into various workflows with minimal technical effort.

Based on your requirements, you can create a new Prompt skill.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/ai-agent/create-an-ai-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search, and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To create Prompt skills:**

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add Skill**.
    
*   In the **Skill Builder** page, select **Prompt Skill** and click **Create**.
    
*   Specify the following details and click **Create**:
    

Parameters

Description

Maximum length

Set as Entry Point

Click the checkbox to enable this option. When enabled, the skill is triggered at the `start of the conversation.`

If multiple skills are configured, enabling this option designates it as the `starting skill`, initiating the conversation from the agent. **Note:** When there is only one Prompt Skill, this option is enabled automatically.

NA

Skill Avatar

You can upload an image to represent the digital avatar of the agent.

A built-in crop tool is available to adjust the image size as needed.

The file size should be 2MB maximum.

Skill name

Indicates the name of the prompt skill

190 characters

Skill description

Indicates the description of the prompt skill. Use this to specify the purpose of the skill.

2000 characters

Skill instructions

A set of predefined phrases to be displayed on the UAT page.

1000 characters for each instruction

Skill key

A unique identifier assigned to the skill for programmatic identification. It is used for functionalities such as skill transfer and other integrations.

190 characters

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/add-prompt

The `Prompt Input` field allows you to configure the agent’s behavior by defining custom instructions or responses. This section specifies how the agent should handle interactions, including responses to user queries, system messages, and specific actions. You can enter a structured prompt incorporating variables to dynamically personalize the agent's responses.

Additionally, `built-in prompts` can be utilized for common scenarios, ensuring consistency and ease of setup.

You can also use the [Functions](/user-guide/ai-agent/skills/prompt-skill/functions) in the prompt that enable the agent to interact with external systems, process data, or execute predefined tasks.

When designing a Prompt Skill for an AI agent, it is essential to structure the prompt thoughtfully to guide the Agent's behavior effectively. A well-structured prompt ensures that the Agent understands its role, communicates in the desired tone, handles user interactions appropriately, and respects all operational guardrails.

By defining clear sections—such as persona, responsibilities, use cases, and guardrails—you create a predictable and reliable user experience while maintaining compliance and efficiency. This approach helps tailor the Agent to specific business needs and interaction channels, whether it's chat, IVR, or email support.

## 

Recommended practices for adding Prompts

Adding prompts effectively is essential for ensuring consistent, human-like, and task-relevant responses from AI agents. The following best practices are recommended when designing and adding prompts to a healthcare or similar domain-focused assistant.

### 

1\. Define the objective

Each prompt must begin with a clear definition of its purpose and role.

*   **Name**: Assign a distinct role or identity to the assistant.
    
*   **Purpose**: Describe the core goal the assistant should fulfill.
    
*   **Scope**: Define what the assistant can and cannot do. Avoid overlap with unrelated responsibilities.
    
*   **Organization**: Specify the context or entity the assistant represents (e.g., a company, department, or product).
    

### 

2\. Establish the assistant's persona

Ensure the assistant communicates consistently by defining:

*   **Personality**: Choose traits appropriate for the assistant’s domain (e.g., friendly, empathetic, professional).
    
*   **Voice**: Describe how the assistant sounds — tone, pitch, pace.
    
*   **Tone**: Maintain a balance between casual and professional, depending on the user’s expectations.
    
*   **Language style**: Avoid jargon, use everyday language, and keep the tone natural and polished.
    
*   **Pronunciation and pacing**: Ensure clarity, especially for voice-based interactions.
    

### 

3\. Set the user context

Tailor prompts based on:

*   **Target audience**: Define the primary users (e.g., customers, patients, internal teams).
    
*   **User variables**: Leverage contextual data (e.g., name, email, phone number) for personalization.
    

### 

4\. Start with a consistent greeting

The initial message from the assistant should:

1.  Introduce the assistant.
    
2.  Share any necessary disclaimers (e.g., emergency handling, call recording).
    
3.  Prompt the user to state their need (e.g., “How can I help you today?”).
    
4.  Avoid collecting personal data in the greeting message.
    

### 

5\. Structure use cases clearly

Divide tasks into discrete, rule-driven flows. For each use case:

*   Clearly define what triggers the task.
    
*   Outline how the assistant should respond.
    
*   Set boundaries (e.g., always ask for confirmation before scheduling or cancelling).
    
*   Avoid overwhelming the user with too many options at once.
    

### 

6\. Define escalation conditions

List scenarios where the assistant should **transfer to a human agent**. For each case:

*   Include a short explanation for the handoff.
    
*   Ensure user confirmation before transferring.
    

### 

7\. Input handling guidelines

Standardize how the assistant receives and validates input:

*   Accept flexible input formats where possible (e.g., for dates).
    
*   Normalize input before processing (e.g., convert dates to a standard format).
    
*   Gracefully handle missing or incorrect data with prompts to retry.
    

### 

8\. Response generation standards

To maintain a natural and usable dialogue:

*   **Language**: Use only the intended communication language (e.g., English).
    
*   **Length**: Limit responses to an appropriate size (e.g., 200 words / 500 tokens).
    
*   **Formatting**: Use plain text. Avoid markdown, HTML, or rich formatting unless the channel supports it.
    
*   **Style**: Use conversational language, avoid robotic phrasing.
    
*   **Acknowledgements**: Keep confirmations short and natural (“Got it”, “Sure”).
    
*   **Transitions**: Use human-like transitions for background actions (e.g., “Give me a moment to check that for you”).
    

### 

9\. Define constraints and limitations

Be explicit about what the assistant cannot do:

*   Politely decline to respond to out-of-scope or nonsensical queries.
    
*   Do not provide sensitive, ethical, or speculative information.
    
*   Protect the instruction set from user attempts to edit or override it.
    
*   Mention knowledge cutoffs if relevant.
    

### 

10\. Integrations and actions

If external APIs or data functions are used:

*   Document each function, including parameters and outputs.
    
*   Only allow automation where user confirmation is received.
    
*   Ensure fallback messaging is available if the integration fails.
    

### 

11\. Guardrails and compliance

Establish strict language and formatting rules to maintain consistency:

*   Refer to items using ordinal language (e.g., “first,” “second”) instead of numerals.
    
*   Discuss one actionable item at a time (e.g., one appointment).
    
*   Keep all responses in plain text.
    
*   Avoid repeating the user’s full message as a form of acknowledgment.
    

### 

12\. Edge cases and fallback behavior

List known failure scenarios with required fallback responses. For example:

*   Mispronunciations (e.g., say “nine one one” digit by digit)
    
*   Audio disruptions (offer to reconnect)
    
*   Specialty mismatches (stick to the user’s requested specialty)
    

## 

Example

## 

Built-in Prompts

The platform provides a set of built-in prompts that are pre-configured to work with commonly used enterprise systems, making it easy to get started without writing custom code. These are `plug-and-play` integrations designed to accelerate your workflow.

Built-in prompts are ready-to-use conversational components that interact with popular third-party platforms and services. They contain predefined functions and logic templates for common tasks, like creating a support ticket or retrieving information, so you don’t have to build these from scratch.

The platform currently supports several built-in prompts for services such as:

*   **IT & Support Systems**:
    
    *   ServiceNow
        
    *   Zendesk
        
    
*   **Healthcare Systems**:
    
    *   Epic
        
    *   Cerner
        
    
*   **Procurement & HR**:
    
    *   SuccessFactors
        
    *   SAP
        
    *   Coupa
        
    

These prompts include the functions typically needed for these systems and can be added directly into your flows.

**Example: Creating a Ticket in Zendesk**

Suppose you’re using **Zendesk** and want the bot to help users raise support tickets. A built-in prompt for this might already include a function like `createTicket`. You can add this to your bot without writing any custom code.

### 

**How to use Built-in prompts**

You can browse the available built-in prompts from the prompt editor. Just select the required service and insert the built-in prompt into your flow. These are built to function automatically, helping you create and launch solutions more quickly.

**Steps to use built-in prompts:**

1.  Open the prompt editor and click the `Built-in Prompts` button in the prompt input area.
    
2.  A categorized list of supported services will be displayed. These are grouped by use cases, such as `SAP` under the `Procurement` category.
    
3.  Select the appropriate tab to browse services relevant to your domain.
    
4.  For each service, a list of available functions is shown along with short descriptions.
    
5.  Click `Insert` to add the selected function to your prompt.
    
6.  After insertion, you can view and customize the added functions under the [Functions](/user-guide/ai-agent/skills/prompt-skill/functions) section in the configuration panel.
    

These built-in prompts simplify integration with commonly used services like Zendesk, ServiceNow, SAP, and others, enabling you to deliver solutions faster with minimal manual setup.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/prompt-versions

Prompt versioning helps you track, compare, and restore changes made to a prompt skill over time. Each update to a prompt skill is automatically saved as a new version, allowing you to safely iterate and roll back when needed.

### 

Version history overview

The first time a prompt skill is added and saved, `version 1` is created. A new version is created whenever you `save changes` to any of the following sections in a prompt skill:

*   Prompt content
    
*   Functions
    
*   Advanced settings
    

[Version comparison](/user-guide/ai-agent/skills/prompt-skill/prompt-versions#version-comparison) becomes available once a second version exists.

**To create a new version:**

1.  Open the agent and navigate to the `Prompt skill`.
    
2.  Make changes to one or more sections:
    
    *   Prompt
        
    *   Functions
        
    *   Advanced settings
        
    
3.  Click **Save**.
    

A new version is created and added to the version history.

### 

Version details and history

When a version is created, you can view the following details at a glance:

*   The `latest version` always appears at the top of the version list.
    
*   Each version includes these details:
    
    *   `Clone of`: Indicates the version from which the current version was generated.
        
    *   `Created by:`: Displays the name of the user who created the version.
        
    *   `Last modified`**:** Shows the date and time when the version was created.
        
    *   `Restored from`**:** Indicates the version from which the current version was restored.
        
    
*   You can click [View](/user-guide/ai-agent/skills/prompt-skill/prompt-versions#version-comparison) to see the details of a specific version.
    
*   Click [Restore](/user-guide/ai-agent/skills/prompt-skill/prompt-versions#restoring-a-previous-version) to apply the changes from the selected version to the latest version.
    
*   Versions are displayed with pagination:
    
    *   Up to 10 versions per page
        
    *   Up to 100 most recent versions are retained
        
    

### 

Version comparison

You can compare changes between any two versions to understand what was updated. This helps identify updates across prompt text, functions, and advanced settings.

**To compare versions:**

1.  Open the `Prompt Versions` section of the prompt skill.
    
2.  Click on `View` to open the selected prompt skill version.
    

1.  Select any two versions from the comparison dropdown.
    

1.  View the changes side by side.
    

Change in the prompt:

Change in the function calls:

Change in the Advanced settings:

1.  You can use `Expand all` or `Collapse all` to view or hide all change details at once.
    
2.  You can view the changes on the right side of each section with clear labels indicating whether a section is `Unchanged` or `Modified`.
    
3.  If you expand a section marked as Modified, you can see exactly what changed between the two versions, whether content was `added` or `removed`. For changes in the Prompt section, the comparison also highlights the exact locations where the updates occurred.
    

### 

Restore selected

You can now selectively restore specific sections instead of restoring all changes at once.

Each section includes a checkbox to control what is restored. On the Version Comparison page, the following sections include selectable checkboxes:

*   Prompt
    
*   Function Calls
    
*   Advanced Settings
    

Select one or more sections using the corresponding `checkboxes`. Click `Restore Selected`.

In the confirmation window, click `Yes, restore` to continue. The selected version is restored and saved as the latest version. Click `Cancel` to exit without restoring the version.

### 

Restoring a previous version

You can restore a prompt skill to an earlier version using the **Restore** option. This allows you to safely roll back changes while keeping a clear version history.

**How restoration works**

*   Restoring a version reverts the prompt skill to the selected version, including the `prompt`, `functions`, and `advanced settings`.
    
*   When a restore is performed, a new version is automatically created. This version includes a note indicating the previous version from which it was restored.
    
*   Restoring a version brings back all changes captured in that version at once.
    
*   If a version contains changes in only one section (for example, advanced settings), restoring that version updates only that section, as the other sections were unchanged.
    
*   The latest version, including restored versions, always appears at the top of the version list.
    

**To restore a version:**

1.  Open the `Prompt Versions` section of the prompt skill.
    
2.  Select the version you want to restore. Click `Restore`.
    
3.  In the confirmation window, click `Yes, restore` to continue. The selected version is restored and saved as the latest version. Click `Cancel` to exit without restoring the version.
    

### 

Pull and Promote behavior

*   Prompt versioning is supported in all stages: Development, Testing, Staging, and Production.
    
*   When an agent is `promoted` from one stage to another, the version history is not carried over. The promoted agent starts with a fresh version history, beginning from the copied state.
    
*   When you `pull` updates from one stage to another, a `new version` is created in the target stage that reflects the pulled changes.
    

### 

Export and import behavior

*   Version history is `not included` when exporting an agent.
    
*   Only the latest prompt version is exported.
    
*   When an agent is imported, versioning starts fresh from the imported state.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/functions

The `Functions` section allows you to define and configure the functions your agent can execute during customer interactions. This feature enables the agent to perform specific tasks dynamically in response to user inputs or system triggers.

### 

**Key Components**

**Function List:**

*   Displays the list of existing functions configured for the agent.
    
*   Click `Add New` to create a new function.
    
*   Functions can be deleted using the trash icon.
    

**Name:**

Enter a unique name for the function to identify it within the system.

**Declaration:**

The Declaration defines the function contract. It tells the agent what the function is, when it should be called, and what inputs it requires.

Example declaration

**Definition:**

The Definition contains the function's execution logic. This logic runs only after the function is invoked based on the declaration.

Example definition (corresponding to the above declaration)

### 

**Usage**

*   Functions enable the agent to interact with external systems, process data, or execute predefined tasks.
    
*   Well-defined functions enhance automation and improve the efficiency of customer interactions.
    
*   Ensure the function names and instructions are clear to avoid misinterpretation by the model.
    

After configuring a function, click **Save** to apply changes.

### 

**Use Case: Enhancing Customer Interaction with Functions in Prompts**

**Scenario: Booking a Doctor's Appointment**

An agent is designed to help users schedule doctor appointments through a conversational interface. To improve automation and efficiency, the assistant needs to integrate with an external appointment scheduling system.

**Prompt:**

If the user requests an appointment, call the function `book_appointment` with the provided details. If any detail is missing, ask the user before proceeding.

**Function Definition:** `**book_appointment**`

The function enables the assistant to process user requests and dynamically interact with the scheduling system.

**Function Declaration:**

**How the Function is Used in a Prompt:**

When a user interacts with the assistant and says: _"I want to book an appointment with Dr. Smith on April 5 at 10 AM."_

The assistant processes this input and uses the function:

The function interacts with the external system and returns:

The assistant then responds: _"Your appointment with Dr. Smith on April 5 at 10 AM is confirmed. Your confirmation number is APPT-12345."_

By using functions in prompts, the assistant enhances customer interactions and ensures precise, efficient task execution.

### 

Use Case: Rendering Multiple Web Elements from a Function Response

#### 

Scenario: Helping a User Select a Travel Package

An AI Agent is designed to help users explore and book travel packages. To guide the user effectively, the agent needs to:

*   Introduce available travel options
    
*   Display a **list of travel packages**
    
*   Allow the user to **select preferences or upload travel documents**
    

With support for **multiple web elements in a single function response**, the agent can present all these components together in a structured and interactive format.

#### 

Example Function Response

#### 

How the Interaction Works

When this function executes, the agent displays the elements in sequence:

1.  A **message** introducing available travel packages.
    
2.  A **list view** showing popular travel options.
    
3.  A **card input** allowing the user to select travel preferences or upload required documents.
    

### 

Create a function from the prompt

Prompt Skills allows you to create functions directly from the prompt. If a function name is used in the prompt but does not yet exist, the system helps you quickly create it without leaving the editor.

This improves the authoring experience by automatically creating the required function structure and avoiding unused or blank functions.

**Create a function from the prompt**

Follow these steps to create a function directly from the prompt:

1.  Open the `Prompt Skill`.
    
2.  In the `Prompt editor`, type the name of the function you want to use.
    

Example:`HrIT()`

1.  The function name appears as a clickable link.
    
2.  Click the function name. If the function does not exist, a `Function Not Found` dialog appears, asking whether you want to create the function. Click `Yes, create it`.
    

1.  It redirects you to the `Function creation` tab. Here, you can view the newly created function with the same name you referenced in the prompt. You can then update the function details, such as its declaration and definition, to meet your requirements.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings

[Advanced Settings](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-settings)[Advanced customization parameters](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters)[TTS properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/tts-properties)[Custom ASR properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/custom-asr-properties)[Idle nudge](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/idle-nudge)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-settings

The **Advanced Settings** section lets you configure and fine-tune your agent's behavior, ensuring optimal performance during customer interactions. This includes selecting the AI model, defining a voice persona, adding custom parameters, and adding ASR Entities.

### 

Model Selection

Users can choose from available AI models to power their assistants. The model determines the assistant's processing capability, response accuracy, and efficiency.

You can choose an AI model from the dropdown list.

### 

Voice Persona

The **Voice Persona** setting allows users to define the assistant's voice characteristics. Different voice personas cater to different user experiences, ensuring a more engaging, natural interaction.

You can choose a voice from the dropdown list.

### 

Advanced Customization Parameters

You can include custom parameters to fine-tune or modify the assistant’s behavior.

You can assign values by entering the parameter key and its parameter value in the available fields, and then click `Add`.

Below are some examples of Parameter key and Parameter Value.

Parameter key

Parameter Value

tts\_props

{"voice": "Heart"}

tts\_props

{"instructions": "Speak in a calm and friendly tone with clear pauses.","speed": <0.25–4.0>}

disable\_idle\_prompt

true

enable\_barge\_in

true

For example, enter `tts_props` in the Parameter Key field and `{"instructions": "Speak in a calm and friendly tone with clear pauses.","speed": <0.25–4.0>}` in the Parameter Value field. Then click **Add** to include the advanced custom parameters.

Refer [Advanced Customization Parameters](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters), for more information.

### 

ASR Entities

ASR Entities improve speech recognition accuracy in voice (IVR) interactions by guiding the system on expected input types. You can select the available ASR entities from the dropdown list.

**Available entities:**

*   Date
    
*   Time
    
*   Phone Number
    
*   Email
    
*   US Zip Code
    
*   Name
    

**What it does**

*   Improves recognition of structured inputs (as mentioned above)
    
*   Reduces errors due to noise or ambiguity
    
*   Enhances entity extraction in conversations

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters

The following parameters can be configured under `Advanced Customization Parameters` in a Prompt Skill to control conversation behavior.

Setting

Parameter Key

Description

[Greeting interruption control](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#greeting-interruption-control)

`ignore_user_speech_till_greeting`

Prevents user interruption until greeting playback completes.

[Disable barge-in](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#disable-barge-in)

`disable_barge_in`

Prevents user interruption while the agent is speaking.

[Enable barge-in](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#enable-disable-barge-in)

`enable_barge_in`

Controls whether user input can interrupt playback.

[Disable idle prompt scheduling](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#disable-idle-prompt-scheduling)

`disable_idle_prompt`

Stops idle nudge prompts after playback.

[Hang up after idle timeout](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#hang-up-after-idle-timeout)

`hangup_on_idle`

Ends the call when idle nudge limit is reached.

[Transfer to error handler on idle](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#transfer-to-the-error-handler-on-idle)

`enable_idle_error_handler`

Transfers control to error handler instead of hanging up.

[Enable/Disable TTS caching](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#enable-disable-tts-caching)

`enable_tts_caching`

Controls usage of TTS cache.

[Select TTS provider/model](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#select-tts-provider-model)

`tts_model`

Selects custom TTS provider or model.

[Custom TTS properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#custom-tts-properties)

`tts_props`

Additional voice configuration parameters.

[Custom ASR properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#custom-asr-properties)

`asr_props`

Speech recognition provider-specific settings.

[LLM context window size](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#llm-context-window-size)

`context_window_size`

Defines context trimming behavior.

[Filler sound while processing](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#filler-sound-while-processing)

`filler_audio`

Plays ambient audio while waiting for response.

[Idle nudge behavior configuration](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#idle-nudge-behavior-configuration)

`idle_nudge_config`

Overrides idle timing, count, and messages.

[Put call on hold programmatically](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#put-call-on-hold-programmatically)

`SmartCall.hold(time_in_milliseconds);`

Allows the agent to temporarily place the active call on hold using a JavaScript function.

[Switch voice programmatically](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#switch-voice-programmatically)

`TTS.setVoice('provider', 'voice-id');`

Allows you to dynamically change the Text-to-Speech (TTS) voice in JavaScript during the conversation.

[Session timeout notification](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#session-timeout-notification)

`enable_idle_timeout_notification`

Allows you to show a notification about the session timeout when a user's session ends due to inactivity.

[Idle session timeout](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#idle-session-timeout)

`idle_session_timeout`

Allows you to define the session timeout using advanced settings at the skill level, enabling more granular control over session behavior.

[Enable card submission context](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#enable-card-submission-context)

`enable_card_submission_context`

Allows you to enable AI Agents to retain values submitted through **card-based UI elements** (such as picklists and form inputs) and use them in subsequent responses.

### 

Greeting interruption control

Prevents user interruption until the greeting playback is completed.

*   Blocks user speech and DTMF input during the greeting.
    
*   If a warmup message is enabled, both the welcome and greeting messages must be completed before input is accepted.
    

### 

Disable barge-in

Prevents user interruption while the agent is speaking.

*   `true` → Disables interruption.
    
*   `false` → Allows interruption.
    

### 

Enable/Disable barge-in

Controls whether user input can interrupt agent playback.

*   `true` → Allows interruption.
    
*   `false` → Disables interruption (same effect as `disable_barge_in: true`).
    

### 

Disable idle prompt scheduling

Disables idle nudge scheduling after the agent finishes speaking.

*   `true` → No idle nudges will be scheduled.
    
*   `false` → Idle nudges follow configured behavior.
    

### 

Hang up after idle timeout

Ends the call automatically when the configured [idle nudge](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#idle-nudge-behavior-configuration) limit is reached.

*   Default idle limit is typically 3 nudges unless overridden using `idle_nudge_config`.
    

### 

Transfer to the error handler on idle

Transfers the conversation to the configured [Error Handler](/user-guide/ai-agent/configuration/settings#error-handler) when the idle limit is reached.

*   Can be used instead of hanging up.
    
*   Useful for fallback or escalation flows.
    

### 

Enable/Disable TTS caching

Controls whether Text-to-Speech responses are served from cache.

*   Enabled by default.
    
*   Only explicit `false` disables caching.
    

### 

Select TTS provider/model

Specifies the TTS provider or model to use.

**Note:** A [Voice Persona](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-settings#model-selection) dropdown is available in the TTS configuration UI. Setting `tts_model` in Advanced Parameters, overrides the selected Voice Persona and uses the specified provider/model instead.

Examples:

*   OpenAI
    
*   Avaamo
    
*   Google
    
*   ElevenLabs
    

### 

Custom TTS properties

Allows additional voice configuration parameters to be passed to the TTS provider.

Common fields:

*   `voice`
    
*   `model`
    
*   `speed`
    
*   `instructions`
    

Refer [TTS properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/tts-properties), for more information.

### 

Custom ASR properties

Provides provider-specific Automatic Speech Recognition (ASR) settings.

Typical options include:

*   hints
    
*   silence\_duration
    
*   sample\_rate
    

Refer [Custom ASR properties](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/custom-asr-properties), for more information.

### 

LLM context window size

Defines how many recent conversation items are retained in memory.

*   Older conversation history is trimmed.
    
*   Helps optimize LLM token usage and response speed.
    
*   The maximum context window size can be 10.
    

### 

Filler sound while processing

Plays an ambient sound while the system prepares a voice response.

Supported options:

*   loading
    
*   typing
    
*   office
    
*   cough
    
*   fan
    
*   finger\_tap
    
*   pencil\_tap
    

### 

Idle nudge behavior configuration

Overrides default idle behavior, including wait time, number of nudges, and spoken messages.

Controls:

*   Idle detection time (`duration_ms`)
    
*   Number of nudges (`max_nudges`)
    
*   Optional localized nudge messages
    

Final behavior depends on:

*   `hangup_on_idle`
    
*   `enable_idle_error_handler`
    

Refer [Idle nudge](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/idle-nudge), for more information.

### 

Put call on hold programmatically

Allows the agent to temporarily place the active call on hold using a JavaScript function.

**Example**

In this example, the call is placed on hold for **10 seconds** before the conversation resumes.

This method is typically used when the agent needs additional time to process backend logic, perform API calls, or wait for an external system response before continuing the conversation.

**Note:** There is no explicit minimum or maximum validation enforced for the `time_in_milliseconds` value used in `SmartCall.hold(time_in_milliseconds)`.

### 

Switch voice programmatically

Allows you to dynamically change the Text-to-Speech (TTS) voice in JavaScript during the conversation.

**Example**

In this example, the agent switches to the **Alloy** voice from the **OpenAI** TTS provider.

This capability is useful when different voices are required for specific scenarios, such as changing the voice persona during a conversation, switching language-specific voices, or adjusting the voice style based on the interaction context.

### 

Session timeout notification

Allows you to show a notification about the session timeout when a user's session ends due to inactivity.

**Example**

This improves transparency by clearly informing users when their session has ended due to inactivity.

### 

Idle session timeout

Support is available to configure idle session timeout at the Prompt Skill level for AI Agents.

You can define the session timeout using advanced settings at the skill level, enabling more granular control over session behavior.

**To configure the session timeout:**

Configure the following parameters under **Advanced Settings** of the prompt skill:

*   **idle\_session\_timeout\_text\_mins** – controls the timeout for text sessions
    
*   **idle\_session\_timeout\_voice\_mins** – controls the timeout for voice sessions
    

For example:

**key details**

*   Values are specified in **minutes** and support fractional inputs
    
*   Default values:
    
    *   Text: 10 minutes
        
    *   Voice: 5 minutes
        
    
*   Supported range:
    
    *   `0 < value ≤` corresponding system limits
        
    

### 

Enable card submission context

This feature allows AI Agents to retain values submitted through **card-based inputs** (such as picklists and form fields) and use them in subsequent responses.

When users submit information through form cards or picklists, the values can be stored in the LLM context. This allows the agent to reference previously provided inputs without asking the user to repeat them.

1.  Add the following parameter:
    

1.  Save the configuration

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings/tts-properties

You can customize voice behavior using the `tts_props` parameter in the Advanced Customization Parameters section. These properties allow you to control tone, pacing, personality, and other voice characteristics depending on the selected TTS provider.

### 

Supported TTS properties

The following fields are commonly used when configuring custom TTS behavior:

Field

Description

**voice**

Specifies the voice persona to use for speech synthesis.

**model**

Defines the TTS model to use (if supported by the provider).

**speed**

Controls the speech playback speed.

**instructions**

Provides voice style instructions such as tone, pacing, personality, or pronunciation guidance.

**stability**

_(ElevenLabs only)_ Controls voice consistency. Lower values allow more expressive variation.

**similarity\_boost**

_(ElevenLabs only)_ Adjusts how closely the generated voice matches the base voice model.

**style**

_(ElevenLabs only)_ Controls expressive intensity of the voice.

**use\_speaker\_boost**

_(ElevenLabs only)_ Enhances voice clarity and speaker emphasis.

### 

Speech speed configuration

The **speed** parameter is numeric and continuous rather than preset-based.

Provider

Supported Speed Range

**OpenAI TTS**

0.25 – 4.0

**ElevenLabs TTS**

0.7 – 1.2 (or null)

**Avaamo One-shot voices**

Speed is accepted but currently has no explicit min/max validation.

The available properties vary by provider.

### 

OpenAI custom configuration

If you select an **OpenAI voice persona** (such as Alloy, Ash, or Onyx), you can configure advanced voice behavior using `tts_props`.

#### 

Format

#### 

Example

#### 

What this configuration does

Property

Description

**instructions**

Defines how the voice should sound, including tone, pacing, emotion, pronunciation style, and delivery guidance.

**speed**

Controls speaking speed

*   Minimum: 0.25 (slower speech)
    
*   Maximum: 4.0 (faster speech)
    
*   Default: 1.0 (normal speed)
    

#### 

Example instruction components for OpenAI voices

You can provide detailed voice guidance inside the `instructions` field. For example:

*   **Affect / Personality** – Warm, professional medical concierge — attentive and reassuring.
    
*   **Tone** – Even, sincere, conversational. Avoid robotic or overly cheerful delivery.
    
*   **Pronunciation** – Clear and precise, especially for important details.
    
*   **Emotion** – Calm and reassuring during authentication or confirmations.
    
*   **Pacing** – Natural pace with micro-pauses between phrases.
    
*   **Pauses** – Insert short pauses before apologies or compliance notices.
    
*   **Accent** – Soft Southern American accent, warm but clear.
    
*   **Rhythm** – Slight melodic variation to avoid monotony.
    
*   **Acknowledgment Rule** – Briefly acknowledge the user’s response before proceeding.
    

#### 

Example acknowledgment phrases:

*   “Thank you for sharing that.”
    
*   “Alright, I understand.”
    
*   “Got it, thanks.”
    
*   “I appreciate that.”
    

### 

ElevenLabs custom configuration

If you select an **ElevenLabs voice persona**, you can configure voice parameters as follows.

#### 

Format

#### 

Example

#### 

What these properties control

Property

Description

**speed**

Controls speaking speed (0.7 to 1.2).

**style**

Adjusts expressive style intensity (0.0 to 1.0).

**stability**

Controls voice consistency (lower = more expressive variation).

**similarity\_boost**

Increases similarity to the original voice model.

**use\_speaker\_boost**

Enhances speaker clarity when set to `true`.

### 

Avaamo one-shot voice configuration

If you select an **Avaamo one-shot voice persona**, you can configure the voice using the following format.

#### 

Format

#### 

Example

#### 

What this configuration does

Property

Description

**voice**

Specifies the one-shot voice persona to use for TTS output.

**Key Notes:**

*   `tts_props` is provider-specific. Only supported parameters for the selected provider will be applied.
    
*   Invalid or unsupported properties may be ignored.
    
*   Always test the voice output after modifying `tts_props` to ensure the desired behavior.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings/custom-asr-properties

Provides provider-specific `Automatic Speech Recognition (ASR)` configuration settings. These parameters allow you to fine-tune speech recognition behavior, such as hinting at expected phrases, controlling silence detection, and adjusting audio input settings.

Copy

    asr_props: {
      "hints": "account number, policy id",
      "silence_duration": 2
    }

#### 

Common ASR configuration options

Parameter

Description

**hints**

Helps the ASR engine recognize expected phrases or domain-specific words more accurately.

**silence\_duration**

Specifies the duration of silence (in seconds) after which speech input is considered complete.

**sample\_rate**

Defines the audio sampling rate used for speech recognition.

**endOfSpeechTimeout**

Controls the end-of-utterance detection timeout (in milliseconds) for some ASR providers.

#### 

Provider-specific notes

*   **Avaamo ASR**
    
    *   Use `silence_duration` to determine when speech input has ended.
        
    *   Specify `sample_rate` in request parameters.
        
    
*   **Google / OpenAI ASR**
    
    *   Use `endOfSpeechTimeout` (milliseconds) for end-of-utterance detection instead of `silence_duration`.
        
    

#### 

Silence duration limits

There is `no explicit minimum or maximum validation` for the `silence_duration` parameter. However, it should be configured carefully to avoid premature or delayed speech detection.

#### 

Sample ASR configuration

This configuration:

*   Improves recognition for phrases like _account number_ and _policy id_
    
*   Uses a **16 kHz audio sampling rate**
    
*   Detects speech completion after **2 seconds of silence**
    
*   Sets an **end-of-utterance timeout of 2000 ms** for supported providers.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/advanced-settings/idle-nudge

You can configure idle nudge behavior at the `Prompt Skill level` using the `idle_nudge_config` parameter in Advanced settings. This allows you to control the idle wait duration, the number of nudges sent, and the messages played during user inactivity.

#### 

Example configuration

Copy

    idle_nudge_config: {
      "duration_ms": 7500,
      "max_nudges": 2,
      "nudge_messages": {
        "1": { "en": "This is the first idle nudge from our end." },
        "2": { "en": "This is the second idle nudge from our end." },
        "continue": { "en": "I'm not receiving any response, are you there?" },
        "hangup": {
          "en": "Since I haven't heard from you for a while, I'm going to hang up now. Please call back if you need assistance."
        }
      }
    }

#### 

What this configuration does

With the above configuration:

*   The system waits **7.5 seconds** (7500 milliseconds) after detecting user inactivity.
    
*   If there is no response, it plays the **first idle nudge message**.
    
*   If the user still does not respond, it plays the **second idle nudge message**.
    
*   After the configured nudges, the system plays a **final follow-up (“continue”) message** to attempt one more response.
    
*   If inactivity continues, the **hangup message** is played before transitioning to the configured terminal behavior (hangup or error handler).
    

The actual final action (hangup or transfer to error handler) depends on whether `hangup_on_idle: true` or `enable_idle_error_handler: true` is configured.

#### 

Parameter details

Parameter

Description

**duration\_ms**

Time (in milliseconds) the system waits before detecting inactivity and triggering a nudge.

**max\_nudges**

Maximum number of nudges to send. The final hangup or error-handler transfer counts as one nudge.

[**nudge\_messages**](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/idle-nudge#nudge_messages)

Customizable messages spoken at different stages of the idle flow.

**Note:**

1.  Following default configuration is used if no custom values are provided: `duration_ms: 7500` and `max_nudges: 3`.
    
2.  No explicit minimum or maximum validation for either `duration_ms` or `max_nudges`.
    

#### 

**nudge\_messages**

Indicates an array of nudge messages. Each array contains the following attributes:

Parameter

Description

**1**

First idle nudge message.

**2**

Second idle nudge message.

**continue**

Final follow-up message to attempt one more response.

**fallback**

Defines a final idle message to re-engage the user when earlier nudge messages go unanswered.

**hangup**

hangup message

#### 

Finalize idle behavior

To define what happens after the configured nudges:

*   Add `hangup_on_idle: true` to end the call after the final nudge. **OR**
    
*   Add `enable_idle_error_handler: true` to transfer control to the [error handler](/user-guide/ai-agent/configuration/settings#error-handler) rather than hang up.
    

Key notes:

*   This configuration overrides default or instance-level idle settings for the selected Prompt Skill.
    
*   If terminal behavior (hangup or error handler) is not configured, the system will not automatically transition after the final nudge.
    

### 

Extended example (multi-language configuration)

The following example demonstrates a more advanced configuration with **multi-language support**.

#### 

What this example does

*   The system waits 9 seconds before detecting idle behavior.
    
*   A maximum of 3 idle nudges is sent.
    
*   Messages are configured in multiple languages (English and Spanish).
    
*   `${lastAgentMessage}` dynamically repeats the previous agent response.
    
*   A `fallback message` is used if earlier nudges do not trigger a response.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/mcp-integration

[Introduction](/user-guide/ai-agent/skills/prompt-skill/mcp-integration/introduction)[Custom Integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration/custom-integration)[Built-in integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration/built-in-integration)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/mcp-integration/introduction

Prompt Skills support `MCP (Model Context Protocol) integrations`, allowing you to connect external MCP servers and selectively expose their tools to your agent. This gives you fine-grained control over which MCP integrations and tools are available during prompt execution.

MCP integrations in Prompt Skills allow you to extend agent capabilities by connecting external MCP servers and selectively exposing their tools. This provides greater flexibility to integrate third-party systems, reuse existing MCP-based workflows, and control exactly which tools are available to each Prompt Skill, without changing agent logic.

### 

Types of MCP integrations

Prompt Skills supports two types of MCP integrations, giving you flexibility to connect both predefined and custom MCP servers.

#### 

**Custom integration**

Use `Custom Integration` to connect your own MCP server.

With this option, you can:

*   Provide a custom connector URL
    
*   Define a name and description for the integration
    
*   Fetch and view the list of tools exposed by your MCP server
    
*   Select or deselect specific tools
    

This option is ideal when integrating proprietary services or external MCP endpoints not available as built-in connectors.

Refer [Custom Integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration/custom-integration), for more information.

#### 

**Built-in integration**

`Built-in Integrations` provide pre-configured MCP connectors for commonly used services.

With built-in integrations:

*   The connector details are already configured
    
*   Tools are automatically discovered
    
*   You only need to enable or disable the required tools
    

This option simplifies setup and helps you get started quickly with supported MCP servers.

Refer [Built-in integration,](/user-guide/ai-agent/skills/prompt-skill/mcp-integration/built-in-integration) for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/mcp-integration/custom-integration

Custom MCP Integration allows you to connect your own MCP server to a Prompt Skill and selectively enable the tools exposed by that server.

This option is useful when integrating proprietary systems or external MCP endpoints not available as built-in connectors.

**Notes**:

*   Click `Edit` to unlock the agent before editing.
    
*   You must have a `valid MCP connector URL`.
    

#### 

To add a Custom MCP Integration

1.  Open the `Agent` and navigate to the `Prompt Skill`. Select `MCP Integrations` from the left-side panel.
    

1.  If you are setting up the integration for the first time, you will see a dedicated card for `Custom integration`. Click `Add custom` to start setting up the integration.
    
    Alternatively, click `Add Integration` and select `Custom Integration`. A configuration panel appears on the right side of the page.
    

1.  Provide the following details:
    

Field

Description

Name

A unique name for the integration.

Description

A brief explanation of what this integration does.

Connector URL

The MCP endpoint URL that exposes the tools.

After entering the details, select the `I trust this server` checkbox to accept the consent. Click `Continue`.

**Note:** Ensure the MCP server URL is correct. If it's invalid, tools cannot be fetched. Please verify and try again.

1.  Now the system fetches the list of tools exposed by the MCP server.
    

From the fetched tool list:

*   Enable the tools you want to make available to the Prompt Skill.
    
*   Disable tools you do not want to expose.
    

Only enabled tools can be accessible during prompt execution. Review the selected tools.

1.  Click `Save`. A confirmation message is displayed indicating that the integration has been successfully configured. The custom MCP integration is now active for the Prompt Skill.
    

1.  Click `OK` to return to the MCP integration dashboard to view all integrations.
    

#### 

Update or Delete a custom integration

You can:

*   `Configure`: Edit the integration to update the tool selection. You can disable or enable the integration
    
*   `Delete`**:** Remove the integration if it is no longer required.
    

Changes take effect immediately after saving.

**Key points:**

*   A valid connector URL is mandatory to fetch tools.
    
*   Tool enable/disable states are preserved after saving.
    
*   Only selected tools are exposed to the Prompt Skill.
    
*   Invalid URLs prevent tool discovery.
    
*   Custom integrations can be updated or removed at any time.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/mcp-integration/built-in-integration

Built-in MCP Integration allows you to connect pre-configured MCP servers directly within a Prompt Skill. These connectors are predefined and simplify setup by automatically fetching available tools.

**Notes**:

*   Click `Edit` to unlock the agent before editing.
    
*   Initially, all connectors under `Built-in integration` are disabled. Contact Avaamo Support to enable the required connectors for your company.
    

#### 

To add a Custom MCP Integration

1.  Open the `Agent` and navigate to the `Prompt Skill`. Select `MCP Integrations` from the left-side panel.
    

1.  If you are setting up the integration for the first time, you can see a dedicated card for `Built-in Integration`. Click `Add Built-in` to start setting up the integration. Alternatively, click `Add Integration` and select `Built-in Integration`. A list of available built-in MCP connectors appears on the page.
    

1.  You can search for the connector from the list. Select the required built-in connector and click `Add`. The system automatically fetches the list of tools exposed by the selected built-in MCP connector.
    

**Note:** If you find the connector disabled, please contact `Avaamo support` to have it enabled.

From the fetched tool list:

*   Enable the tools you want to make available to the Prompt Skill.
    
*   Disable tools you do not want to expose.
    

Only enabled tools can be accessible during prompt execution. Review the selected tools.

1.  Click `Save`. A confirmation message is displayed indicating that the integration has been successfully configured. The custom MCP integration is now active for the Prompt Skill.
    

1.  Click `OK` to return to the MCP integration dashboard to view all integrations.
    

#### 

Update or Delete a custom integration

You can:

*   `Configure`: Edit the integration to update the tool selection. You can disable or enable the integration. After updating the information, click `Save`.
    
*   `Delete`**:** Remove the integration if it is no longer required.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/debug-log

In case you are unable to receive the expected response from the **Prompt** skill, you can debug using the following troubleshooting tips:

### 

Using Debug logs

Use console.log to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure. You can then use the **Debug logs** options in **Dialog skill** to display all the logs generated using console.log.

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

### 

Using Conversation history

You can check the user query from the [Conversation history](/user-guide/ai-agent/debug/conversation-history) to view the complete flow that caused an error or unexpected response.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/prompt-skill/multi-agent-architecture-in-avaamo

### 

Overview

Avaamo's multi-agent architecture enables multiple AI agents to collaborate to complete complex tasks within an enterprise environment. Instead of a single agent handling all responsibilities, different agents perform specialized tasks such as authentication, data retrieval, workflow execution, or integrations with enterprise systems.

Avaamo supports multi-agent collaboration through the `AI Agents platform`, which provides built-in orchestration capabilities. The orchestrator dynamically discovers and invokes the appropriate agent for the task, while maintaining conversation context and ensuring smooth coordination among agents.

### 

Architecture overview

Multi-agent architecture in Avaamo allows multiple AI agents to work together, with each agent handling a specific domain, such as IT support, HR, or procurement. In this architecture, the `master agent` serves as the central coordinator. All agent transfers are routed through this master agent.

Specialized agents, known as `child agents`, perform specific tasks such as authentication, workflow execution, or integration with enterprise systems, such as CRM or ERP. However, these agents do not communicate directly with each other. Instead, the master agent manages all interactions between them.

Because of this centralized orchestration model, interactions follow the pattern:

**User → Master Agent → Child Agent → Master Agent → Child Agent → User**

This ensures that the master agent always maintains control of the conversation flow and preserves the shared conversation state.

### 

Orchestration flow

When a user initiates an interaction, the `Master Agent` analyzes the user’s request to identify the appropriate workflow. Based on this analysis, the orchestration layer selects the most relevant specialized agent. The selected agent is then invoked to execute the task and return the response.

A typical interaction flow works as follows:

1.  A user initiates an interaction through a digital or voice channel.
    
2.  The **master agent** interprets the request and determines the appropriate workflow.
    
3.  The master agent **invokes the relevant child agent** to handle the domain-specific task.
    
4.  After completing the task, the child agent returns the result to the master agent.
    
5.  The master agent either responds to the user or invokes another agent if additional steps are required in the workflow.
    

Throughout the interaction, the **master agent maintains the shared conversation context**, including user information, session history, and conversation state. This ensures continuity and allows multiple agents to collaborate seamlessly within the same interaction.

### 

Key capability

#### 

Instant transfer support

Avaamo supports `instant agent transfer`, which allows the system to invoke another agent immediately without waiting for the current agent to respond.

Example:

*   `agent_key` refers to the unique identifier of the target agent that needs to be invoked.
    
*   When the `instant` parameter is set to `true`, the transfer occurs immediately, reducing delays in multi-agent workflows and improving interaction responsiveness.
    

If **instant: false (default),** then the agent may generate a response before invoking the next agent, which can introduce delays or unintended intermediate messages.

To ensure the transfer occurs without an intermediate message from the agent, the prompt should explicitly instruct the agent not to generate a response and to invoke the transfer function directly.

For example, the prompt can include instructions such as:

`Do not generate any message. Directly call the transfer function.`

This avoids intermediate outputs and ensures a smooth transition between agents.

This capability is critical for enabling seamless multi-agent orchestration and enhancing real-time user experience.

### 

**Use case example**

Consider an enterprise assistant built using Avaamo’s multi-agent architecture to support employees with different workplace requests. In this setup, a `front desk agent (master agent)` coordinates interactions between several specialized agents, such as IT support, HR, recruitment, and procurement.

In the example shown, the system includes the following specialized agents:

*   **Alex** – Front Desk Agent (Master Agent)
    
*   **Faith** – IT Helpdesk Agent
    
*   **Grace** – HR Specialist
    
*   **James** – Talent Acquisition Agent
    
*   **Grant** – Procurement Specialist
    

The `Alex - front desk agent` serves as the central coordinator, routing employee requests to the appropriate agent.

**Workflow example:**

Step

Interaction

Agent involved

Description

1

User says: “My laptop is not connecting to the VPN.”

Alex (Master Agent)

Alex analyzes the interaction and identifies it as an IT issue.

2

IT workflow invoked (using instant transfer)

Faith – IT Helpdesk Agent

Faith is invoked immediately and responds to the user with troubleshooting steps.

3

User says: “I want to apply for parental leave.”

Alex (Master Agent)

Alex evaluates the new interaction while maintaining conversation context.

4

HR workflow invoked (using instant transfer)

Grace – HR Specialist

Grace responds to the user with the leave application process.

5

User says: “I need a new office chair.”

Alex (Master Agent)

Alex identifies this as a procurement request.

6

Procurement workflow invoked (using instant transfer)

Grant – Procurement Specialist

Grant initiates the request and responds to the user with next steps.

Throughout the interaction:

*   The **master agent maintains the conversation state**
    
*   Specialized agents **execute domain-specific workflows**
    
*   The master agent **continues orchestrating the conversation flow**
    

This architecture enables organizations to build scalable enterprise assistants where multiple specialized agents collaborate while maintaining a unified user experience.

### 

Benefits

Using Avaamo’s multi-agent architecture allows organizations to:

*   Assign domain expertise to specialized agents
    
*   Maintain a single unified employee interaction point
    
*   Seamlessly route interactions across departments
    
*   Maintain conversation context across multiple workflows
    

This hub-and-spoke model ensures that employees interact with a single assistant while multiple specialized agents collaborate behind the scenes to resolve requests efficiently.

---
