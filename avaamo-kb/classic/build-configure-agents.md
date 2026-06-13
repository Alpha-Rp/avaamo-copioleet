# Classic Agent — Build & Configure Agents
> 116 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents

[Train your agent](/user-guide/how-to/build-agents/train-your-agent)[Design agents](/user-guide/how-to/build-agents/design-agents)[Types of agent](/user-guide/how-to/build-agents/types-of-agent)[Create Classic agent](/user-guide/how-to/build-agents/add-skills)[Create Universal agent](/user-guide/how-to/build-agents/create-universal-agent)[Create Advanced agent](/user-guide/how-to/build-agents/create-advanced-agent)[Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent)[Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent)[Configure agents](/user-guide/how-to/build-agents/configure-agents)[Test agents](/user-guide/how-to/build-agents/test-agents)[Debug agents](/user-guide/how-to/build-agents/debug-agents)[Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze)[Learning - Continuous Improvement](/user-guide/how-to/build-agents/learning-continuous-improvement)[Manage agents](/user-guide/how-to/build-agents/manage-agents)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/train-your-agent

For an agent to respond to user queries, each intent must be trained with specific sentences that are used as representative phrases for user queries. This set of sentences is referred to as the Training data set.

One of the main challenges of training your agent is predicting the possible set of queries users might ask your agent. Training your agent, hence, is an iterative and continuous process, and training with the right amount of intents and phrases is essential for a good user experience. It is a process of teaching your Avaamo agent how to respond to the user's intentions.

The following diagram broadly illustrates the recommended guidelines to get started with your agent development:

**Note**: Throughout your agent development process, it is recommended that you refer to suggested best practices and guidelines. This can help you to increase agent accuracy and provide a good user experience.

### 

**Bootstrap**

*   Get a list of possible user queries for your agent.
    
*   Group the user queries with common intents.
    
*   Identify the skills from the intent. An agent is a container of skills, each specialized to understand and handle a specific task in the user conversation flow. **Example**: In the **Pizza agent**, you can create an "Order Pizza" skill responsible for handling all pizza orders, similarly you can create a "FAQ" skill to handle all the Mac Pizza FAQs. See [Skills](/user-guide/overview-and-concepts/skills), for more information.
    
*   Classify the intents into one of the following buckets - Training phrases, Entity, System entity, or Custom code. See [Intents](/user-guide/overview-and-concepts/intents), for more information.
    
*   Train your agent with these initial sets of queries to bootstrap your agent. See [Build agents](/user-guide/how-to/build-agents), for more information.
    

### 

Share and test

*   With the initial set of queries trained in your agent, self-test your agent to see if the intents and entities are getting identified and extracted properly. See [Test your agent](/user-guide/how-to/build-agents/test-agents), for more information.
    
*   It is strongly recommended to create a thorough regression test file and continuously improve at each stage of agent development.
    
*   Share your prototype agent with test users. This helps to further train your agent with real user queries rather than speculations.
    
*   Avaamo Platform allows you to promote your agent to different stages of the agent life cycle and parallelly continue the development phase. See [Agent life cycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle), for more information on how you can use the Avaamo Platform effectively in a structured release management process.
    

### 

**Review and monitor**

*   Review all the user conversations, especially those that are unhandled or went as disambiguous by your agent. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history) and [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information on these tools. They can help you sift through the conversation quickly.
    
*   Monitor your agent using **Analytics**. See [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze), for more information.
    

### 

Improvise

*   Use [Agent diagnostics](/user-guide/how-to/build-agents/learning-continuous-improvement/agent-diagnostics-deprecated) and [Unhandled query analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated) tools in the Avaamo Platform to further analyze the quality of the agent's training data. Contact Avaamo Support, to enable these tools for your account.
    
*   Train your agent using the details from the tool to further improve the prediction accuracy. Continue with Step 2.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/design-agents

An agent is synonymous to a "human agent". Similar to a human agent that has or is trained with different skills for responding to user queries, an agent is a "container of skills", each specialized to understand and handle a specific task in the user conversation flow. When a user posts a query to an agent, the agent understands and classifies the input (both text and voice) and then selects an appropriate skill to engage with the user.

Agents help you handle various use cases. The Avaamo platform equips you to build agents that suit all your business needs. Understanding the purpose of your agent and designing the agent in the right way with all the recommended best practices and guidelines is essential for a good user experience.

## 

1\. Define the purpose of the agent

Here are a few questions that can help you define the purpose of your agent:

*   Why do you want to build an agent?
    
*   Who is your target audience?
    
*   How will your customers discover your agent?
    
*   What kind of use cases would you want your agent to handle?
    
*   What would you define as a successful agent interaction?
    
*   Does your agent reflect your company's brand?
    
*   Do you need to integrate the agent into existing systems?
    

## 

2\. Knowing your audience

*   Understand that the needs and wants of your audience are important for the success of any agent.
    
*   You need to know your customers — the demographics they belong to, and the kind of questions they might have.
    
*   You can study previous interactions and equip your agent to respond to queries that they might frequently ask.
    
*   Knowing your customer base well enough will determine the success of your agent.
    

## 

3\. Design your agent right

With well-defined business requirements in place, you can get started on designing your agent.

*   The Avaamo platform allows you to quickly focus your efforts on developing a framework for the agent. Here, you start visualizing and incorporating the use cases and define a user journey.
    
*   Ensure that you build the journey in such a way that it makes for the best user experience. Focus on developing just the framework, you can improve that later by adding Javascript or integration services codes. Use in-line intents, to begin with.
    
*   The framework itself can be used to demonstrate the agent to the users or the proxy users to ensure that the agent design is as expected.
    
*   Keep this question in mind always: "is the agent intuitive for someone who is using the agent for the first time?". If not, then redo, test, and review.
    

See [Build skills](/user-guide/how-to/build-skills) and [Build agents](/user-guide/how-to/build-agents), for more information.

## 

4\. **Add a good greeting message**

Creating a good first impression of your agent with users matters and will help to engage the users positively.

*   Your welcome message is designed to help your users understand that the users are talking to an agent, and it is one of the most important messages.
    
*   You can add the functionality of the agent to its welcome message.
    
*   By listing its functionality upfront, the agent keeps your users from being disappointed and gives them ideas and instructions on how to engage further.
    

In this greeting message example of a medical assistant, notice how the functionalities of the agent are listed upfront. This guides and eases user navigation and also provides a good first impression to the users:

See [Greeting skill](/user-guide/how-to/build-agents/add-skills-to-agent#greeting-skill), for more information.

## 

5\. Entity types vs Dictionaries vs Training variations

*   **Entity types**: An entity type is a named collection of similar objects such as states in a country, all pediatricians, a list of product names, or data types (Date, Email, Location). Each entity type contains one or more values. **Example**: An entity type named "US City" contains values - Los Altos, San Francisco, Los Angeles. See [Entities](/user-guide/overview-and-concepts/entity-types), for more information.
    
*   **Dictionaries**: A dictionary, in the agent, is a collection of words or phrases that hold a specific meaning to your business. **Example**: You are creating an HR agent regarding the employee bonus policies. Here, EB (Employee bonus), QEB (Quarterly Employee Bonus), and such terminologies can be added to the dictionary. See [Dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries), for more information.
    
*   **Training variations**: For an agent to respond to user queries, each intent must be trained with specific sentences that are used as representative phrases for user queries. This set of sentences is referred to as the Training data set. See [Intent and Training Data](/user-guide/overview-and-concepts/intents), for more information.
    

When you are deciding on whether you must create an entity type, dictionary, or training variations, consider answering these questions:

What are the values I have?

Where should it go?

Are the values a logical grouping of nouns e.g. scheme name, which holds the same meaning across all training variations for the agent?

Consider defining these as entity types and values. See [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent), for more information.

Are these values not typical dictionary words but hold specific meaning to your business?

Consider defining these in the dictionary.

See [Add dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries), for more information.

Are these just regular words for which you have given some alternate synonyms?

For example, eat -> grab, gobble, drink. Consider adding them as training data variations for the intent. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent) and [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

**Example**: The following table lists a few use cases and corresponding categorizations:

Use case

How to define them?

AEM: Adobe Experience Manager

Dictionaries

KYC: Know your customer

Dictionaries

Policy: Plan, Strategy

Training variations

Correction: change, updated

Training variations

Ticket type: Incident, Request Item, Change Request, Problem

Entity type

Account type: Savings, Current, Recurring, Fixed

Entity type

**Note**: Spell correction is performed on words in the user query by identifying and correcting the phrase that is closest to the training data. Hence, only those words that are a part of either part of training data, entities, or dictionary are spell-corrected.

## 

**6: Prepare for ambiguities and misunderstandings**

Program your agent to deal proactively with any ambiguities and misunderstandings. If your agent detects various entities and is unsure of a response, have your agent ask related questions, suggest a possible next step, and remedy misunderstandings. This way, if your agent's answer is not satisfactory, your users will have several other questions to choose from, and this will not result in an interrupted agent conversation flow.

Anticipating follow-up questions can go a long way is building confidence with the user and navigating through the conversation flow. Leverage the Platform's capability to gather a set of closely matched intents related to a user’s query in a particular context. This helps you to anticipate follow-up questions users might have. Consider showing these in a section such as "Here’s related content" or as "Other Common Questions". This feature can help in:

*   Reducing false positives and providing more options from a similar set of responses already available in the agent.
    
*   Providing a pleasant user experience where the agent attempts to provide the best possible answers from all possible available options in the agent.
    
*   Providing guided navigation allows the user to explore more options.
    

You can show the best answer and additionally show three "common questions" from the curated set of responses that are related to the user query.

See [how to show ambiguous intents](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/show-ambiguous-intents), for a sample scenario and example.

## 

**7: Take advantage of the auto-complete (Type-ahead) feature**

Leverage the auto-complete feature to reduce false positives and significantly improve accuracy. By presenting the user with a list of available options, the user likely selects one of those options for which accurate curated responses are already available in the agent.

See [Auto-complete in web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel#example-3-auto-complete), for more information.

## 

**8: Test rigorously**

One of the key factors for the success of any agent is thorough testing. Continuous testing is required for each skill to reach the maximum level of accuracy. These skills must be reviewed from time to time and improvements can be made to enhance the experience of the interaction between your users and the agent.

See [Test agents](/user-guide/how-to/build-agents/test-agents), for more information.

## 

9\. Detect frustration and handle it

Unhappy customers are inevitable. The goal of the agent is not to wear them down or impress them with their smarts. The goal is to respond to the queries in a satisfactory manner. Design your agent to detect and understand dissatisfaction and frustration in the customer's tone. Handle the situation by integrating human intervention.

See [Frustration](/user-guide/how-to/build-agents/add-skills-to-agent#frustration) and [Unhandled skills](/user-guide/how-to/build-agents/add-skills-to-agent#unhandled-skill), for more information.

## 

10\. Continuously train the agent

Once the agent is deployed, closely monitor the initial interactions, and gather feedback to understand how your users are interacting with the agent. Gathering these use cases and adding them to your agent's conversation flow can improve user interaction over time.

Once you deploy the agent, ensure that you monitor the agent and its unhandled queries. You can categorize these unhandled queries into three categories:

1.  Other variants of user requests for services that the agent already supports. These variants have to be added to the agent's training data.
    
2.  New service requests that users are making of the agent, that you want to add to the agent's scope as part of a roadmap. These will be added over time when you have developed new intents and responses in your agent.
    
3.  Service requests that you feel are totally out of scope for the agent. For example, a user may query the agent for the latest football score, while your agent may have nothing to do with sports. These may be discarded since you feel your agent should not be servicing these requests. Be helpful and while telling the user these questions you cannot help with, please suggest frequently asked questions so that users are reminded of the purpose and scope of your agent.
    

See [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze), for more information.

While developing your agent, take into account the various channels that your agent would be deployed on. Understand the specific impacts of those channels on your agent development.

As an example, Facebook Messenger has many limitations on message sizes that you will want to incorporate into your agent for the best experience across channels.

## 

**Don’ts**

*   Do not overlap the purpose of the agent. Keeping your requirements clear always helps you to design your agent effectively. If you have two sets of requirements that serve different purposes, consider creating two different agents.
    
*   Do not overdesign or clutter your agent. Start with the basic set of requirements and test it. Iteratively build over the basic framework.
    
*   Do not ignore JS Errors in your agent. Periodically plan to check for JS Errors and clean it up. See [JS Errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/types-of-agent

In the Avaamo Conversational AI Platform, you can create the following types of agents:

*   A `Classic Agent` who has conversational expertise in a certain domain or sector. See [Create Basic Agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   A `Universal Agent` can handle the tasks of more than one agent by integrating with multiple virtual assistants (or agents). See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent) for more information.
    
*   An `Advanced Agent` delivers human-like, personalized interactions with less training data, making it smarter and more efficient than a Standard agent.
    
*   An `AI Agent` leverages advanced models to understand context deeply, enabling fluid, dynamic conversations. It adapts to user inputs in real time, providing intelligent responses for a more natural and engaging experience.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-skills

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).

Consider that you are required to build a **Pizza agent** for "Mac Pizza - a Quick Service Restaurant", where you can place online orders for pizzas.

*   In the Avaamo Platform UI, click the **Agents** option in the top menu, navigate to the **Development** tab, and select **Classic Agent** under **Create**.
    
*   Specify the following details and click **Create**:
    

Parameters

Description

Agent name

Indicates the name of the agent. As you promote the agent to different stages in the life cycle (Testing, Staging, and Production), this name is used to identify the agent in the different stages.

Agent description

Indicates the description of the agent. Use this to specify the purpose of the agent.

Agent avatar

Indicates the avatar used for identifying the agent. Browse and choose your avatar image. Agent avatar file name must be in UTF-8 format.

\- Recommended image types: PNG, JPEG - Recommended image size: 200px \* 200px

A new empty agent is created with certain pre-built skills. See the next steps mentioned below for more information on how to continue adding skills to your agent.

### 

Next steps

In the next steps, you can continue to enhance your agent by:

*   Updating the default [built-in skills](/user-guide/how-to/build-agents/add-skills-to-agent#built-in-skills) with a greeting message to the user
    
*   [Adding custom skills](/user-guide/how-to/build-agents/add-skills-to-agent#custom-skills) using an interactive skill builder

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent

[Key terms](/user-guide/how-to/build-agents/create-universal-agent/key-terms)[Overview - Get started](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started)[Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents)[Manage member agents](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents)[Intent detection and routing](/user-guide/how-to/build-agents/create-universal-agent/intent-detection-and-routing)[Context management](/user-guide/how-to/build-agents/create-universal-agent/context-management)[Disambiguation](/user-guide/how-to/build-agents/create-universal-agent/disambiguation)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/key-terms

This article introduces a few key terms specific to Universal agents:

1.  **Universal agent**: In simple terms, a **Universal agent** is a "group of agents" that handles tasks of multiple agents in a single conversational flow. It can integrate and connect with independent virtual agents to route, filter, and provide real-time responses. See [Overview - Get started](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started), for more information.
    
2.  **Member agent**: Each agent linked to the Universal agents is referred to as a **Member agent**. Any existing Avaamo agent can be added as a member agent to a Universal agent. See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents), for more information.
    
3.  **Universal agent channel**: A channel to be created in the member agent. This allows the Universal agent to establish a communication channel with the corresponding member agent. This channel has to be created in the member agent. See [Universal agent channel](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent), for more information.
    
4.  **Dispatch handler**: By default, when a user query is posted, all the member agents that are enabled and available in the Universal agents are probed before providing a response to the user. Using the Dispatch handler, you can specify a list of member agents that you wish to probe instead of all member agents based on certain conditions. See [Dispatch handler](/user-guide/how-to/build-agents/configure-agents/define-settings#dispatch-handler), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/overview-get-started

**Note**: You can create Universal agents only if it is enabled in your account. Contact Avaamo Support for further assistance.

In simple terms, a **Universal agent** is a "group of agents" that handles tasks of multiple agents in a single conversational flow. It can integrate and connect with independent virtual agents to route, filter, and provide real-time responses.

The primary feature of a Universal agent is the ability to have "one" agent across multiple departments in an Enterprise organization. Typically, large enterprises can have multiple departments, each with its own individual agents catering to different aspects of the organization. Since all agents are a part of the same organization, by integrating these into a Universal agent, you are providing a seamless and pleasant experience to the users.

The following illustration depicts an "Acme Enterprise" Universal agent linked with independent virtual agents such as - Acme HR, Acme IT, and Acme Finance. Each department can continue to build these agents independently. The user can just use one agent - the "Acme Enterprise" agent for all the queries across different departments:

### 

How does it work - Quick Overview?

Each agent linked to the Universal agents is referred to as a **Member agent**. When a user query is posted to a Universal agent, it routes the user’s intent to the appropriate **Member agent** for simple Q&A or multi-turn conversations, renders member responses inline, and also manages the conversation context.

The main purpose of a Universal agent is to centralize agent interaction across multiple departments, domains, or sectors. Users can use one agent to find responses to queries that span multiple sectors.

On the home page, the Universal agent can be identified and differentiated from other agents as the icon for the Universal agent has a soft shadow extending from it.

### 

Create a Universal agent

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).

*   In the Avaamo Platform UI, click the **Agents** option in the top menu, navigate to the **Development** tab, and select **Universal Agent** under **Create**.
    
*   Specify the **Agent name**, **Agent description,** and **Agent avatar** for the Universal agent. Refer [Create a new agent](/user-guide/how-to/build-agents/add-skills) for more information on these fields.
    

### 

Open or view a Universal agent

Any newly created Universal agent is displayed on the **Agents** page. You can open or view a Universal agent by either clicking on the agent name, or clicking on the 3 dots under **Actions** for the Universal agent and selecting **View**.

### 

Delete a Universal agent

**Notes**:

*   It is recommended to use this option with caution because when you force unlock an agent all the unsaved changes made by the other user is lost.
    
*   In order to use this option, you must at least have edit permission on the agent.
    

1.  On the **Agents** page, click the 3 dots under **Actions** for the universal agent that you want to delete.
    
2.  Select **Delete**. The agent is deleted and a confirmation box notifying you of the successful deletion of the agent is displayed.
    

### 

Make a copy of a Universal Agent

You can make a copy of your Universal agent using the **Make a copy** option. When you copy an agent, an exact clone of the Universal agent is created. This is similar to the **Make a copy** option available for independent agents. See [Make a copy](/user-guide/how-to/build-agents/manage-agents/make-a-copy), for more information.

You can always rename a Universal agent's copy by opening the agent and clicking the pencil icon (edit icon) next to the Universal agent's name.

### 

Skill in a Universal agent

A newly created universal agent has the **Greetings,** **Unhandled** and **Smalltalk** skills in it by default. You can configure this skill as required. See [Built-in skills](/user-guide/how-to/build-agents/add-skills-to-agent#built-in-skills), for more information.

**Note:** Currently, the Frustration built-in skill is not available in the Universal agent. Frustration built-in skill requires configuring live agent option which is currently available only in the individual member agents.

Besides the **Greetings, Unhandled** and **Smalltalk** skills, you cannot create any other skill as the purpose of the universal agent is to combine and centralize the tasks of multiple agents. Hence, instead of the option to add skills, you have the option to add member agents. See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents) for more information.

### 

Configure Universal agents

The following options are available for configuration in Universal agents:

*   **Channels**: Currently, you can deploy a Universal agent only on a Web, Android, or iOS channel. See [Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel) for more information.
    
*   **Permissions:** The procedure to manage access and permission remains the same as applicable for any regular agent. See [Add permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.
    
*   **Persistent menu:** The procedure to add a persistent menu remains the same as applicable for any regular agent. See [Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu), for more information.
    
*   **Settings:** See [Define settings](/user-guide/how-to/build-agents/configure-agents/define-settings) to understand how to manage general settings for your Universal agent.
    
    *   Note that `Max question repeat count` and `options in Advanced settings` are available only in the Member agents. These options are very specific on how individual agents prefer to handle the flow and hence are relevant only to the Member agents. This also provides better flexibility as it allows the member agents to handle these settings independently.
        
    *   The **Dispatcher handler** option is available only for Universal agents. In this handler, you can provide a script that is called before probing the member agents. For example, you can use this handler for setting up conditions before probing the member agents. See [Dispatch handler](/user-guide/how-to/build-agents/configure-agents/define-settings#dispatch-handler), for more information.
        
    

### 

Connecting to a live agent

When the user requests to talk to a live agent, links to the live agent for each member agent are displayed. The user can select which member's live agent the user wants to talk to.

**Notes**:

*   The skill command `#end agent` is not applicable to Universal agents, since the live agent interactions are handled by individual member agents. See [Skill commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands), for more information.
    
*   A Live agent interaction in the Universal agents is an explicit action. It requires users to choose which live agent in the available member agents they wish to connect with. Hence, the live agent transfer rules such as "Silent switch" and "Switch to live agent for unhandled queries" are not applicable in the live agent interactions of a Universal agent. See [Live agent transfer rules](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-transfer-rules), for more information.
    

### 

Debug Universal agents

All the options available to debug agents such as JS errors, Debug log, Storage, and Conversation history are available in the Universal agents too. See [Debug agents](/user-guide/how-to/build-agents/debug-agents), for more information.

**Notes:**

*   When a query is posted to a Universal agent, then the conversation is recorded in the Conversation history of the Universal agent and in the corresponding member agent from where the response is received.
    
*   JS errors, Debug logs, and Storage pages display details relevant only to the Universal agent.
    

### 

Test Universal agents

You can test Universal agents using the Simulator and using Regression testing. Regression testing in Universal agents allows you to test queries with its member agents.

*   See [Agent simulator](/user-guide/how-to/build-agents/test-agents/simulator), for more information.
    
*   See [Regression testing in Universal agents](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents), for more information on the format that you can use to test Universal agents.
    

### 

Monitor Universal agent

The **Monitor -> Analytics** page in the Universal agent provides a unified analytics dashboard for monitoring the usage across the member agents along with the total queries, unhandled queries, and disambiguations. See [Analytics in Universal agents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent), for more information.

### 

Key points

*   Currently, Universal agents do not participate in Agent life cycle stages.
    
*   Currently, Universal agents can be deployed on the Web, iOS, and Android channels.
    
*   Only supports conversation in the English language.
    
*   Currently, [information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking) is not supported in Universal agents. This implies that if you have a Universal agent with masking enabled for member agents, then even though the responses are masked in the member agents, the same responses remain unmasked in the Universal agent.
    
*   You can also use `context.memberAgents` to get a list of all enabled member agents. The returned object is an array and you can use this information in any JS block of the Universal agent to get the member key and member name:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/add-member-agents

Member agents are independent agents that are connected to a universal agent. See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started#create-a-universal-agent), for more information. There are two steps for adding a member agent to a Universal agent.

**Step 1:** [Generate the member agent's UUID and access token](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#generate-the-member-agents-uuid-and-access-token)

**Step 2:** [Add member agent to the universal agent](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#add-member-agent-to-the-universal-agent)

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add member agents to a Universal agent immediately after creating the Universal agent. See [Create Universal agent](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started#create-a-universal-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Universal** **Agent** page, navigate to the **Member agents** option in the left navigation menu to add the Member agents.
        
    

### 

Generate the member agent's UUID and access token

A member agent can be connected with a Universal agent only using the UUID and access token of the member agent. Hence, it is necessary to generate a UUID and access token for the member agent and provide this information to those who are in charge of the Universal agent - so that they can establish a connection to the member agent.

See [Configure universal agent](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent#configure-universal-agent) to understand the steps to generate a UUID and access token for the member agent:

### 

Add member agent to the Universal agent

A connection can be established to a member agent only after you receive the UUID and access token of the member agent. See [Generating UUID and access token](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#generate-the-member-agents-uuid-and-access-token), for more information.

*   In the **Agent -> Member Agents** page, click **Add Member Agent**.
    
*   Currently, you can add only Avaamo agents. Hence, select the platform type **Avaamo.**
    
*   Enter the generated UUID and Access token in the **Member UUID** and **Member Access token** fields respectively. See [Generating UUID and access token](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#generate-the-member-agents-uuid-and-access-token), for more information.
    
*   Enter a unique key for this member agent in the **Member key** field and click **Next**. The **Add Member Agent** pop-up box is displayed with the details of the member agent.
    

*   Click **Add.** The member agent is added to the Universal agent in the **Agent -> Member agents** page. Each member agent displays the member agent name, key, skills, and last updated date that helps to identify the member agent.
    

**Note**: The member agent can always disable its connection with the universal agent. See [Disconnecting from the universal agent](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent#disconnecting-from-the-universal-agent), for more information.

See [Manage member agents](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents), for more information on how to delete, disable, and view member agents.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents

In the **Agents** -> **Member agents** section, you can perform the following actions for each Member agent as per your requirement:

*   [View member agent](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#view-member-agent)
    
*   [View member details](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#view-member-details)
    
*   [Delete](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#delete-member-agent)
    
*   [Disable](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#disable-member-agent)
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can perform all these actions immediately after adding member agents to the Universal agent. See [Create universal agent](/user-guide/how-to/build-agents/create-universal-agent/overview-get-started#create-a-universal-agent) and [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing and publishing.
        
    

### 

View member agent

Since a Universal agent is a "group of individual member agents", during Universal agent development it is helpful if the user can view the member agent implementation.

**Note**: Viewing the member agent is based on the permissions provided to the user at the member agent level. See [roles and permission](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions#agent-permissions) for information on permissions.

1.  Click the 3 dots in the box of the member agent that you wish to open.
    
2.  Select **View member agent**. The member agent opens in a separate tab if the user has sufficient permissions, else the unauthorized message is displayed.
    

### 

View member details

The basic details of the member agent such as UUID, owner, and member agent access token can be viewed:

1.  Click the 3 dots in the box of the member agent - whose basic details you wish to view.
    
2.  Select **View member details**. A pop-up box with the details of the member agent is displayed.
    

### 

Delete member agent

You can delete a member agent from the Universal agent if it is no longer required.

*   Click the 3 dots in the box of the member agent that you wish to delete.
    
*   Select **Delete** and provide confirmation in the pop-up**.** The member agent is deleted from the Universal agent. To add the deleted member agent back, you must provide the member agent's UUID and access token. See [add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents) for more information.
    

### 

Disable member agent

You can disable a member agent from the Universal agent as required. When you disable a member agent, the Universal agent does not use the member agent to respond to queries. When any user query is posted to the Universal agent with a disabled member agent, a corresponding error message is displayed in the JS error indicating the same. See [JS errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.

**To disable a member agent**:

*   Click the 3 dots in the box of the member agent that you wish to disable.
    
*   Select **Disable** and provide confirmation in the pop-up**.** The member agent is disabled from the Universal agent. You can always enable a disabled member agent at any time by clicking the 3 dots in the box of the member agent and selecting **Enable.**

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/intent-detection-and-routing

Universal agents detect the intent and route the conversation to the appropriate member that can fulfill the user’s request in the best possible way. It leverages the training imparted to the individual members for intent detection and hence no duplication of training is required. This provides a seamless experience to the user.

Agent routes requests to the appropriate member agent for simple Q&A or multi-turn conversations, renders member responses inline, and also manages the conversation context. See [Context management](/user-guide/how-to/build-agents/create-universal-agent/context-management), for more information.

**Key point**: When you are in the transactional flow with a member agent and a user query is posted, then

*   The user query is routed to the current member agent first for intent detection.
    
*   If the user's intent does not match the current member agent's intent, only then it is routed to the rest of the member agents for further intent matching.
    
*   If the conversation is already in a transactional flow and a query results in disambiguation, then the disambiguation options also are within the context of the member agent that is currently in the transactional flow. This setup allows the Universal agent to keep the conversation within the context of a member agent when there are shared intents between member agents. See [Disambiguation](/user-guide/how-to/build-agents/create-universal-agent/disambiguation), for more information.
    

The following illustration depicts an "Acme Enterprise" Universal agent linked with independent virtual agents such as - Acme HR, Acme IT, and Acme Finance.

Each agent is trained independently. For example, the Acme HR agent has a Q&A skill with intents and responses.

When a user query such as "When is the bonus paid this year?" is posted to the Acme Enterprise Universal agent, the Universal agent routes the user's intent to the appropriate member agent, Acme HR in this case, and renders the response in the Acme Enterprise assistant itself.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/context-management

Universal agents allow switching of intents mid-way through a dialog from one member agent to another. When multiple-member agents are participating in a conversation, the Universal agent can switch the conversational flow back and forth between the member agents based on the context of the conversation and the requirement of the user - without losing track of the flow.

This ability of the Universal agent to switch contexts between member agents without losing the flow of the conversation and produce the desired outcome is called **Intent switching**.

In the following illustration, a user starts a conversation with a request to update the address.

*   This is a Dialog skill in Acme HR agent which is a part of the Universal agent Acme Enterprise.
    
*   However, in the middle of the conversation, the user switches to another intent asking about employee Id. This is a Q&A skill in Acme IT agent which is also a part of the Universal agent Acme Enterprise.
    
*   You can observe, how the conversations switch seamlessly based on the user intent, and later when the user switches back with the Employee ID, the conversation resumes with the Dialog skill flow in the Acme HR agent.
    
*   The conversation and context are retained without losing track of the flow.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-universal-agent/disambiguation

When the response to a user query is found in more than one member agent (more than one member agent has the same intent), the Universal agent disambiguates between the responses by listing the member agents that have the response - the names of the first two member agents are displayed; the **More Options** link lists the names of the other member agents that have a response.

Once the member agent responds, all subsequent queries in the workflow (regardless of whether intents span over more than one agent) are answered by the same member agent. This is applicable even in the case of disambiguation. If subsequent query results in disambiguation, then disambiguation options also are within the context of the member agent that is currently in the transactional flow. This setup allows the Universal agent to keep the conversation within the context of a member agent when there are shared intents between member agents.

Similarly, when a member agent has more than one response (more than one intent is available for the response), disambiguation options are provided for the user to select the context for the response.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/create-advanced-agent

**Note**: You can create Advanced agents only if it is enabled in your account. Contact Avaamo Support for further assistance.

In its fundamental nature, an Advanced agent achieves the core objective of a "Conversational Assistant" by involving the user in a dialogue closely resembling human interaction.

It utilizes an advanced inference engine behind the scenes to boost user experience and takes on a personalized approach, understanding nuances in the conversation, and transforming interactions from a robotic demeanor to a more pleasurable and "conversational" experience for the user.

For developers, this translates to a substantial reduction in the amount of training data needed for the agent to comprehend user queries. Consequently, an `Advanced agent` stands out as distinctly superior, more intelligent, and more personalized compared to a `Classic agent`. The following illustrations depict a comparison of training data between a `Classic agent` and an `Advanced agent`:

Classic agent

Advanced agent

## 

Key features

### 

**Human-like conversation**

`Advanced agent` responses are not limited to simple one-word responses but can include detailed explanations, descriptions, or discussions, depending on the complexity of the question. It makes your agent more intuitive and user-friendly, simulating human-like interactions.

### 

**Deep semantic understanding**

`Advanced agents` can comprehend the meaning of language beyond surface-level syntax by understanding the context, and relationships between words, and grasping the nuances of language semantics. This implies there is a massive reduction in the amount of training data required by the agent to understand the user query.

The following illustration demonstrates how an `Advanced agent` is capable of understanding different nuances and variations of "create and incident" training data:

### 

**Conversational memory**

`Advanced agents` can remember and maintain context throughout a conversation. This enables the system to understand references, callbacks, and evolving topics within the dialogue.

## 

Quick preview

Here's a quick sneak peek at the `Advanced agent`:

## 

Create an Advanced agent

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).

*   In the Avaamo Platform UI, click the **Agents** option in the top menu, navigate to the **Development** tab, and select **Advanced Agent** under **Create.**
    
*   Specify the `Agent name, Agent description`and `Agent avatar` for the `Advanced agent`. See [Create Classic agent](/user-guide/how-to/build-agents/add-skills), for more information on these fields.
    

## 

Skill in an Advanced agent

A newly created Advanced agent has the `Greetings, Frustration, Unhandled and Smalltalk` skills in it by default. You can configure this skill as required. See [Built-in skills](/user-guide/how-to/build-agents/add-skills-to-agent#built-in-skills), for more information.

All custom skills supported in the `Classic agent` are available in the `Advanced agent` also. See [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.

**Note**: The [Import skills](/user-guide/how-to/build-agents/add-skills-to-agent#import-skills) option is available only in `Classic agents`.

## 

Training an Advanced agent

The Advanced agent can comprehend numerous nuances and variations in user queries. The process of adding training data, such as in the [Invocation intent of a Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent) or a [Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) , remains consistent with that of the `Classic agent`. However, there is a significant reduction in the volume of training data required.

The best way to train the agent is to start with a minimal set of meaningful training data, perform testing, and then iteratively train and build the agent.

1.  Start with a small set of training data
    
2.  Test with a few sets of users
    
3.  Add additional training as required
    
4.  Perform UAT with UAT users. This gives an idea of the actual production use case testing
    
5.  Add additional training as required
    
6.  Roll it out to the production users
    
7.  Monitor and improvise
    

For example, here in the invocation intent of a Dialog skill, "create an incident" training data can handle variations such as "require assistance for a problem" without any additional training. In such cases, it is not required to add additional training data.

## 

What is not supported in Advanced agent?

Currently, except for the following modules, all other modules available for the `Classic agent` apply to the `Advanced agent` too:

*   [Import skills](/user-guide/how-to/build-agents/add-skills-to-agent#import-skills)
    
*   [Dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries)
    
*   All operations of Skills store - [Publish](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#publish-skill), [Re-publish](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#republish-skill), [Re-import](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills#re-import-skill) skills
    
*   [Entities](/user-guide/overview-and-concepts/entity-types)
    

## 

Migrating to Advanced agent

*   Currently migrating from a `Classic agent` to an `Advanced agent` is a manual process. Contact your dedicated Customer Success Manager for further assistance.
    
*   Importing a `Classic agent` into an `Advanced agent` is not supported.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-skills-to-agent

Skill is part of an agent that is specialized to understand and handle a specific task in the user conversation flow. **Example**: 'Order Pizza' skill in a Pizza agent is responsible for taking the user through a conversation to capture data necessary to order a pizza.

A new agent in the Avaamo Platform is already available with certain [built-in skills](/user-guide/how-to/build-agents/add-skills-to-agent#built-in-skills) (**Greeting**, **Unhandled**). You can also create various [custom skills](/user-guide/how-to/build-agents/add-skills-to-agent#custom-skills) from scratch using an interactive skill builder as per your business needs or [import a skill](/user-guide/how-to/build-agents/add-skills-to-agent#import-skills) closest to your business and edit the imported skill, as required.

**Key Point**: Although you can specify the unhandled prompt response at an individual skill level, specifying in the built-in skills at the agent level provides a centralized approach to compare results across multiple skills and then generate a response. **Example:** In a **Pizza agent**, for an unhandled skill, you can check for a specific skill type (Order skill) and then display an unhandled message "Sorry, I am unable to understand your request. Can I connect you to a customer service representative for ordering a pizza?".

See [Manage skills](/user-guide/how-to/build-skills/manage-skill), for more information on how to edit, update, delete, and publish skills to the Skill store.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Agent** page, navigate to the **Skills** option in the left navigation menu to view all the pre-built skills and custom skills.
        
    

## 

Built-in skills

The following lists the pre-built skills available in the agent. You can customize these skills as required:

*   [Greeting skill](/user-guide/how-to/build-agents/add-skills-to-agent#greeting-skill)
    
*   [Unhandled skill](/user-guide/how-to/build-agents/add-skills-to-agent#unhandled-skill)
    
*   [Smalltalk](/user-guide/how-to/build-agents/add-skills-to-agent#smalltalk)
    
*   [Frustration](/user-guide/how-to/build-agents/add-skills-to-agent#frustration)
    
*   [Outro Skill](/user-guide/how-to/build-agents/add-skills-to-agent#outro-skill)
    

### 

Greeting skill

You can use the prebuilt **Greeting** skill in the agent for adding a customized welcome message to the user.

**To add greeting message to agent**:

*   In the **Agent -> Skills** page, click **Greeting** skill.
    
*   In the **Greeting message** pop-up, customize the message as required and click **OK**. You can add different types of responses (a card, quick reply, carousel, etc..) in the message. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
    

*   Click **Save.**
    
*   Click the agent icon in the bottom-right corner to view the customized welcome message. Note that if you have deployed the agent in C-IVR channel, then you get the option to choose Web or C-IVR channel
    

### 

Unhandled skill

You can use pre-built **Unhandled** skill in the agent for adding a customized response for unhandled user queries.

When a user query is not understood by the agent, it responds with the unhandled intent. By default, "_**I am sorry. I don't have an answer for that.**__"_ is the unhandled response by the agent. However, you can customize the response in your agent by adding other options for linking to different pages, additional questions, or search on different pages, or even detect spam in the **Unhandled** skill.

**To add an unhandled message to the agent**:

*   In the **Agent** **\-> Skills** page, click **Unhandled** skill.
    
*   In the **Skill message** pop-up, customize the message as required and click **OK**. You can add different types of responses (a card, quick reply, carousel, etc..) in the message. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
    
*   Click **Save.**
    

**Example**: Consider that in the **Pizza** **agent,** you are required to process the unhandled intent as follows:

1.  For any unhandled query during a pizza order, you wish to redirect the user to the website for more options to search.
    
2.  For all other unhandled queries, you wish to provide an option to the user for transferring to a live agent.
    

You can write JS code in the **Unhandled skill** to handle such scenarios.

### 

Smalltalk

Avaamo Platform provides a built-in Smalltalk skill with the most frequently encountered casual conversations the users can have with the agent.

This is a **read-only** skill. If you wish to customize the Smalltalk, then you can create a custom Smalltalk skill according to your business requirements. See [Build skills using Smalltalk](/user-guide/how-to/build-skills/create-skill/using-dialog-designer), for more information.

**Notes**:

*   Smalltalk does not participate in disambiguation. See [Disambiguation](/user-guide/overview-and-concepts/intents#disambiguation), for more information.
    
*   If you have the same intent in the system Smalltalk and custom Smalltalk, then the response from the custom Smalltalk takes precedence.
    

### 

Frustration

Avaamo Platform provides a built-in frustration Smalltalk skill to detect and respond to user frustration queries. This is a **read-only skill**.

Click **Talk to Customer Rep** to view the skill response.

If you wish to customize the Smalltalk, then you can create a custom Smalltalk skill according to your business requirements. See [Build skills using Smalltalk](/user-guide/how-to/build-skills/create-skill/using-dialog-designer), for more information.

Note that you must first remove the system frustration Smalltalk from the Live agent settings, for the customized frustration Smalltalk responses to get triggered. See [Live agent transfer rules in Pre-built live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-transfer-rules), for more information.

### 

Outro skill

The Outro skill allows you to create and post a customized message to the user after an agent’s response. It can be used in skills that produce single-instance responses, such as [Dynamic Q&A,](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a) [Dialog](/user-guide/how-to/build-skills/create-skill/using-dialog-designer), [](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a)and [LLaMB](/user-guide/llamb/overview-key-features) skills. It improves the user experience by providing a clear, standardized message after the agent responds as per your business requirements. It helps to streamline and provide consistent communication across all interactions.

A common use case is to post disclaimers or system-generated messages, such as `This is a system-generated message, please do not reply` after the agent's response say in a Dynamic Q&A skill.

**Key points:**

1.  The Outro Message is not displayed after the Dynamic Q&A response if an [Outro message](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/intro-outro-messages#outro-messages) is already added within the Dynamic Q&A skill
    
2.  This feature is available only for [Classic](/user-guide/how-to/build-agents/add-skills) and [Advanced](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced) Agents.
    
3.  The Outro message is displayed after the agent's response only when there is no idle prompt configured for that particular node/intent.
    
4.  These are not applicable for `Custom small talk.`
    

**To create an Outro skill:**

*   In the `Agent page`, navigate to the `Skills` option in the left navigation menu.
    
*   On the Skill Builder page, select `Outro` in the `Built-in Skills` section.
    

*   Customize the message as required in the Outro message pop-up and click `OK`. You can add different types of responses (a card, quick reply, carousel, etc..) in the message. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
    
*   You can apply the Outro skill to different skills using a response filter. After adding the response, assign the response filter such as [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a), [LLaMB](/user-guide/llamb/overview-key-features), or [Dialog](/user-guide/how-to/build-skills/create-skill/using-dialog-designer). The outro message is displayed only for the agent responses of that selected skill. To apply the outro message for all the skill responses, leave the response filter blank.
    

**Case 1:** In the following illustration, a outro message is configured to be displayed for all the Dynamic Q&A responses:

In the agent response, the message configured in the outro skill is displayed providing an enriched experience to the user.

**Case 2**: You can utilize custom code to create a specific dialog skill as a response filter. This allows you to apply Outro messages to a particular skill.

In the following example, `view_bookings` is used as the skill key. Implement the custom code `return (context.insights.skill_key == "<<skill_key>>");` to define the dialog skill as the response filter.

When configuring the Outro skill, you can select this response filter as demonstrated below.

**Example 1: Simple Outro Skill**

*   Message**:** "Thank you for chatting with us. Have a great day!"
    
*   Response filters: No response filters selected.
    
*   Application**:** Applied to all the responses for all the skills like LLaMB, Dialog, and Dynamic Q&A.
    

**Example 2: Customized Outro for Specific Skill Type**

*   Message**:** "This concludes our session on product information. If you have more questions, feel free to ask!"
    
*   Response filters: Dynamic Q&A
    
*   Application**:** Applied to all the responses of the Dynamic Q&A skill.
    

## 

Custom skills

Based on your business requirements, you can create either a new skill from scratch or by importing from any of the sample skills. See [Import skills](/user-guide/how-to/build-agents/add-skills-to-agent#import-skills), for more information.

**Key point**:

**To create a new custom skill in an agent**:

*   In the **Agent -> Skills** page, click **Add skill**.
    
*   You can add the following types of skills on the **Skill builder** page:
    
    *   [Dialog](/user-guide/how-to/build-skills/create-skill/using-dialog-designer): Use this skill to build a multi-step conversational flow. You can create, design, and edit conversational flows quickly with minimal technical expertise. Typically, the Dialog skill is used for any custom skill that cannot be built using other skill types. **Example**: Create complex multi-turn conversations such as building flow for diagnosing a patient using symptoms.
        
    *   [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a): Use this skill to create responses for one-off questions and answers. Upload questions and answers or create a custom response to user queries in CSV format. **Example**: Create custom responses in a simple CSV format to certain specific queries on a pizza making, delivery for a **Pizza agent**. Upload the CSV file to enrich your agent and provide accurate responses to user queries.
        
    *   [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk): Use this skill to create responses for informal or casual user conversations. **Example**: Responses for the following sentences:
        
    
    *   [Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1): Use this skill to provide answers from your enterprise content. You can create, design, and edit conversational flows quickly with minimal technical expertise.
        
    *   [LLaMB](/user-guide/how-to/build-skills/create-skill/llamb): LLaMB: Use this skill to generate AI-powered responses based on enterprise content and context. **Example:** Responses to queries like “What’s the refund policy?” or “How does your product work?”
        
    

## 

Import skills

Instead of creating skills from scratch, you can import from any available published skills in the skill store that is closest to your business and then edit the skill as required. When you import a skill, an exact clone of the skill is created in the agent. Users with the required roles can work on the imported skill in the agent without affecting the skill in the skill store. See [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.

**To import a skill**:

*   In the **Agent** **\-> Skills** page, click **Import skill**.
    
*   In the **Import skill** pop-up, a list of all the skills that are not already imported in the agent is displayed.
    
*   Search and select a skill. Click **Import to Agent**.
    

*   You can view a copy of the imported skill in the **Custom skills** section.
    

**Notes**:

*   When you import a skill, an exact independent clone of the skill is created in the agent. Users with the required roles can edit the imported skill in the agent without affecting the skill in the skill store.
    
*   Only users with **Edit, Publish,** or **Owner** permission for the agents can import a skill from skills store.
    
*   If you import a skill with duplicate entities, then a warning message is displayed. Click Continue to retain the agent copy.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent

[Quick overview](/user-guide/how-to/build-agents/add-entity-types-to-agent/quick-overview)[Add entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type)[Manage entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types)[Manage entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-type)[Examples](/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent/quick-overview

In simple terms, if an intent refers to a verb or the action in the training data, then an entity refers to a noun (the object on which the action is performed) in the training data.

**Example**: If a user types "_I want to order pizza_", then certain additional information on the toppings and pizza size is required before placing a successful order. Here, toppings and pizza size is a collection of similar values. This collection is referred to as an entity type.

### 

Entity types and entity values

An entity type is a named collection of similar objects such as states in a country, all pediatricians, a list of product names or data types (Date, Email, Location). Each entity type contains one or more values. **Example**: An entity type named "US City" contains values - Los Altos, San Francisco, Los Angeles. The following entity types are available in the Avaamo Platform:

*   **System entities**: In-built entities in your agents that can match the common data types such as Location, Date, DateTime, Person, Email, URL.
    
*   **Custom entities**: User-defined entities that represent the structured data related to your business. Few examples of customized entities in a **Pizza agent** - pizza size (small, medium, large), toppings (cheese, corn, tomato).
    

Each entity type contains entity values. Some of the entity values may have one or more direct alternate values or other phrases/words considered equivalent in meaning. **Examples**: San Francisco: SF and New York: NYC | The Big Apple.

### 

How does it work?

When information is extracted from a user sentence, the first task is to identify the intent behind the user query. The next task is to extract parameters in the training data that completes the intent. These are referred to as **Slots**. Each slot maps to an **entity type** for extraction and validation purposes. In the Avaamo Platform, as you enter the training data for your skills, slots are automatically extracted and mapped to an entity type.

The following diagram illustrates a simple flow of a user interacting with a Pizza agent for placing a pizza order:

See [Slots](/user-guide/overview-and-concepts/slots) and [Entity skipping](/user-guide/overview-and-concepts/advanced-concepts/entity-skipping), for more examples.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type

**Avaamo Platform** provides several in-built system entities in your agents that can match the common data types such as Location, Date, DateTime, Person, Email, URL. In addition, you can also create new **entities (custom and system)** within the agent and add to your agent skills. Custom entities created for an agent are available only for that agent. System entities are available across all the agents. **Example:** For a pizza agent, you can consider adding the following entity types and values:

*   Pizza size: small, medium, large
    
*   Pizza type: veg, non-veg
    
*   Pizza toppings: cheese, corn, tomato, chicken, pepperoni
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add entity types to an agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

### 

**Add new entity type**

*   In the **Agent -> Entity types** page, click **Add new**.
    
*   In the **Create new entity type** pop-up, specify the following details, and click **create**:
    

Parameters

Description

Name

Indicates the name of the entity type. This identifies the entity type when you are searching and adding entity types for skill in an agent.

Key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the entity type. It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Description

Indicates the description of the agent. Use this to specify the purpose of the entity type.

Skip Lemmatization

Indicates if the extracted entity from the user query must be matched to **lemma** (Canonical form, dictionary form, or citation form of a group of words) or not. **Example**: run, runs, ran and running are forms of the same [lexeme](https://en.wikipedia.org/wiki/Lexeme), with run as the lemma.

**Example**: You have created an entity type for pizza toppings with "cheese" as one of its values.

Consider user queries - "I want to order cheese pizza" and "I want to order pizza with lots of cheeses".

*   With Skip Lemmatization checked - Only "I want to order veg cheese pizza" is extracted and matched correctly.
    
*   With Skip Lemmatization unchecked - Both the queries are matched and extracted correctly. Here, cheese and cheeses are forms of the same lexeme, with cheese as the lemma.
    

See [Lemmatization](https://en.wikipedia.org/wiki/Lemmatisation), for more information.

**Note**: This is not applicable to entities with regular expression.

Parent entity type

Indicates the parent entity type linked to this entity type. A child entity type can be linked to only one parent entity type. However, the parent entity type itself can be a child of some other entity type, and currently, there is no limitation on the number of such links supported in the Avaamo Platform.

**Example**: State entity type can be parent entity type to city entity type. For the pizza agent, pizza type can be a parent entity type to pizza toppings.

With the parent, child linking of the entity types, you can leverage Avaamo Platform capability to understand and respond to user queries by skipping entities. See [Entity skipping](/user-guide/overview-and-concepts/advanced-concepts/entity-skipping), for more information. Also see [Entity skipping - Entity type linked to parent entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent#entity-skipping-entity-type-linked-to-parent-entity-type), for a detailed example.

**Note**: Parent entity type is not applicable for entities with regular expression.

Regular expression

Indicates a regular expression that is used to match the value of the extracted entity from the training data. You cannot link a parent entity type to a regular expression entity. See [Regex entity (Key-points)](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#regex-entity-key-points), for more information.

**Example**: You can create an entity type to match a regular expression such as pizza order number sequence in the user sentence. Later, when you create a node in the dialog, you can select this entity for processing user intent for the order number. See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

A new empty entity type is created. In the **Entities** page, you can add entity values and alternate values. See [Add entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#add), for more information.

### 

**Next steps**

You can also edit the entity type or delete an entity type, as required. See [Manage entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-type), for more information.

Also see [Example - Pizza agent](/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent), for more examples on usages of entity types.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types

In the **Entities** page, you can manage entity values and its alternate values for an entity type, using the following actions:

*   [Add](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#add)
    
*   [Edit](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#edit)
    
*   [Delete](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#delete)
    
*   [Export](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#export)
    
*   [Import](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#import)
    

**Key points**:

*   You can also right-click and open the entity types in a new browser tab or window. This reduces the number of clicks and helps you to work with your skills parallelly as you view or modify the entity types.
    
*   There is no limit on the number of values in an entity type. However, you can manage only upto 10,000 entity values in the UI. If you have an entity with more than 10,000 values, then it is recommended to export entity values to a CSV file from the UI, perform operations (edit or add values) in the exported file and then import the entity values back to the agent.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add values to entity types immediately after creating an entity type. See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information.
    
*   If you wish to edit an entity type in an agent, then:
    
    *   Navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Agent** page, navigate to the **Entity types** option in the left navigation menu. Search and open the required entity type. See [Search entity types](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#search-entity-types), for more information.
        
    

## 

Add

*   In the **Entities** page, enter the entity value and click **Add.**
    
*   For each entity value, enter an alternate value in the **Alternate value** text box and click **Add**. **Examples**: San Francisco: SF and New York: NYC | The Big Apple.
    
*   If you have selected a parent entity type, then specify the corresponding parent entity value.
    
*   If you are creating an entity type with a regular expression, then specify the required regular expression and check the **Regular expression** option.
    

### 

Regex entity (Key-points)

Note the following key points on regex entities:

*   Identify a pattern for your regular expression that has defined boundaries. If a regular expression pattern is very generic without any boundaries, then it can result in unintended entity extraction from the user query. Hence, this can result in incorrect matches. Few examples of regular expression entity without boundaries:
    
    *   A regex pattern that matches any word with 5 letters.
        
    *   A regex pattern that matches any set of characters with hyphens.
        
    
*   Verify if the regular expression is valid.
    
*   Check if the regular expression contains any special character in your regex.
    
*   Regex entity is extracted only from the first capture group as an entity value. Example:
    

*   Multiple occurrences of the same is also extracted from the training sentences.
    
*   If there is more than one regex in the entity and if more than one regex pattern matches, then the first matched pattern is considered.
    
*   Regex entity values are case-insensitive.
    
*   Only those regex patterns that work with JavaScript is supported.
    
*   Use the non-capturing group (?:pattern) when you need to repeat a grouping but do not need to use the captured value that comes from a traditional (capturing) group. Example:
    

*   Avoid catastrophic backtracking. See [Exponential backtracking](https://en.wikipedia.org/wiki/ReDoS#Exponential_backtracking), for more information.
    

## 

Edit

In the **Entities** page, click the entity value you wish to edit. Update the entity value, remove or add alternate values as required.

## 

Delete

You can delete an entity value from an entity type using the delete icon next to the entity value row. Alternatively, you can delete all the entity values of an entity type in the agent, if they are no longer required.

*   In the **Entities** page, click **Clear all** option.
    
*   An alert message is displayed. Click **Clear** in the alert message to clear all the entities.
    
*   Click **Save.**
    

## 

Export and Import entity values

### 

Export

*   In the **Entities** page, click the **Export** option.
    
*   A CSV file is downloaded with entity values and its alternate values. You can edit this CSV file and import the values back to the platform.
    

**Example 1**: Entity with values (No parent entity)

**types**

value

alternative-1

alternative-2

non-veg

non-vegetarian

veg

vegan

vegetarian

**Example 2**: Entity with values linked to the parent entity, Here, pizza\_types is a parent entity type of pizza\_toppings.

**toppings**

types

value

non-veg

chicken

veg

onion

non-veg

pepperoni

veg

tomato

### 

Import

*   In the **Entities** page, click the **Import values** option.
    
*   In the **Import** pop-up, click **Browse** to browse a CSV file with entity values. In the CSV file, the first column contains the name of the entity value and the consecutive columns include alternate values. You can also click **Download Sample CSV**, for a sample file.
    
*   Click **Submit** to load all the entities to the agent. Import automatically saves the entity values.
    

**Notes**:

*   You cannot import a duplicate entity value. An error message is displayed, when you try to save the entity type.
    
*   When you import entity values to an entity type in an agent, the entity type key must match. Additionally, when you import entity values with a parent entity type, then the entity type key and all the parent entity values must match.
    
*   You can import upto 100000 entity values. If you wish to import more than 100000 entity values, then contact Avaamo Support.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-type

In the **Entities** page, you can [edit](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-type#edit-entity-type) or [delete](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-type#delete-entity-type) an entity type, as required.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add values to entity types immediately after creating an entity type. See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information.
    
*   If you wish to edit an entity type in an agent, then:
    
    *   Navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Agent** page, navigate to the **Entity types** option in the left navigation menu and open the required entity type.
        
    

### 

### 

Edit entity type

*   In the **Entity type** page, click the **edit** icon next to the entity type name at the top.
    
*   In the **Entity type** pop-up, edit the details as required and click **Update**. See **Parameters** table in [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information.
    

### 

Delete entity type

*   In the **Entities** page, click **Delete** in the **Actions** columns for the entity type, you wish to delete.
    
*   Click **OK** in the confirmation message. The entity type is deleted in the **Entities** page.
    

**Notes**:

*   You can delete an entity only if the entity is not used in any agent skills.
    
*   If you wish to delete a parent entity type, then you must first delete all the child entity types it is linked to and then delete the parent entity type.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/add-entity-types-to-agent/example-pizza-agent

Consider the following sample flow implementation in an "Order Pizza" dialog skill for ordering pizzas:

**Note**: If at the same level, multiple entity intents are matched for a user query, then entities are not skipped, as the platform is unsure which flow to further navigate. On the other hand, if you have such a use-case, then consider accessing your requirements and revisiting your flow if required

Also, consider the following sample flow implementation in an "Order Status Pizza" dialog skill for getting status of a pizza order:

### 

Entity type - Simple use case

*   Create an entity type "Pizza type" for types of pizzas. See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type) and [Add entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#add), for more information
    

*   In your Dialog skill, the user intent "pizzatype" is mapped to the entity type "pizza\_type". See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.
    

*   Test the agent using the agent icon at the bottom-right corner:
    

*   Click the eye icon, you can view the entity extracted in the user query.
    

Note that if you specify a value other than those mentioned in the entity values, then the query goes to an unhandled response.

### 

Entity skipping - Entity type linked to parent entity type

*   Create an entity type "Pizza toppings" and specify "Pizza type" as the parent entity type. See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type) and [Add entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#add), for more information.
    

*   In your Dialog skill, the user intent "pizzatoppings" is mapped to the entity type "pizza\_toppings". See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.
    

*   Test the agent using the agent icon at the bottom-right corner. Note that as the entities are extracted from the user query, the platform understands that the details on the pizza type and pizza toppings are already provided by the user. Hence, those responses are skipped and the skill response after the pizza toppings is displayed to the user.
    

*   Click the eye icon, you can view the entity extracted in the user query.
    

### 

Entity type with regular expression

*   Create an entity type "Order number" with a regular expression for the order number. In this example, the order number starts with a character followed by four numbers. See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type) and [Add entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types#add), for more information.
    

*   In your Dialog skill, the user intent "order number" is mapped to the entity type "order number". See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.
    

*   Test the agent using the agent icon at the bottom-right corner.
    

*   Click the eye icon, you can view the entity extracted in the user query.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents

[Channels](/user-guide/how-to/build-agents/configure-agents/deploy)[Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback)[Dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries)[Environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables)[Get started screen](/user-guide/how-to/build-agents/configure-agents/introduce-agent-get-started) [JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files)[Language](/user-guide/how-to/build-agents/configure-agents/add-languages)[Live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent)[Permissions](/user-guide/how-to/build-agents/configure-agents/permissions)[Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu)[Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters)[Settings](/user-guide/how-to/build-agents/configure-agents/define-settings)[Tags](/user-guide/how-to/build-agents/configure-agents/add-tags)[User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties)[Voice settings](/user-guide/how-to/build-agents/configure-agents/add-voice-settings)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy

[Web (Enabled by default)](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel)[Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps)[iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps)[Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams)[Facebook](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel)[Skype for Business](/user-guide/how-to/build-agents/configure-agents/deploy/skype)[WhatsApp](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp)[SMS](/user-guide/how-to/build-agents/configure-agents/deploy/sms)[Facebook Workplace](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace)[Amazon Alexa](/user-guide/how-to/build-agents/configure-agents/deploy/alexa)[WeChat](/user-guide/how-to/build-agents/configure-agents/deploy/wechat)[SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip)[Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys)[Nice InContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact)[Cisco PCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce)[Cisco UCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce)[Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel)[Conversational IVR (C-IVR) or Phone](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone)[Universal agent](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent)[Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings)[Web - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages)[Voice - Supported languages and Browsers](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel

[Overview](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview)[Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel)[Channel details](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/channel-details)[Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme)[Widget configuration](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration)[Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/voice)[Deployment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deployment)[AI Agent](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/ai-agent)[Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security)[Advanced](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced)[UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat)[Web channel callback functions](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/web-channel-callback-functions)[Authorization using JWT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt)[Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel)[Manage web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/manage-web-channel)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview

Avaamo Platform provides the ability to deploy your agent across multiple channels such as Web, Facebook, Skype, Android, iOS (to name a few). Web channel is the "de-facto" channel that is used across most of the implementations and has a wide variety of use-cases that it caters to.

You can deploy the agents built on the Avaamo Platform into your enterprise websites to facilitate easy communication with web users.

**Note**: Web channel is enabled by default.

## 

Use case analysis

The following lists a few use-cases that depict the capabilities of Web channel:

*   [Use-case 1: Add customized layouts](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-1-add-customized-layouts)
    
*   [Use-case 2: Collect unified analytics](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-2-collect-unified-analytics)
    
*   [Use-case 3: Maintain different user sessions](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-3-maintain-different-user-sessions)
    
*   [Use-case 4: Enable/Disable deployed agent](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-4-enable-disable-deployed-agent)
    
*   [Use-case 5: Add voice capability](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-5-add-voice-capability)
    

### 

**Use-case 1: Add customized layouts**

Different websites within the same organization can have different "look and feel" for each website. When an agent is deployed on a website, it may be required just to customize the skin of the agent based on the website it is deployed on, while retaining the other functionalities of the agent as-is.

With the ability to deploy "one agent" across multiple instances of a web channel, you can style your agent for each web channel instance separately. This allows you to maintain a "single code-base" for your agent and still have the ability to provide a different look and feel for your deployed agent on different instances of the web channel.

See [Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#theme), for more information.

See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information on deploying "one agent" across multiple instances of a web channel

### 

**Use-case 2: Collect unified analytics**

As different web channels are part of the same organization, from the business point of view, it becomes necessary to collect unified analytics when an agent is deployed across different web channels.

Consider that you have deployed your agent in two channels - internal website and external website. With unified analytics, you can get the required metrics to do a traffic analysis -

`How many users came through the internal website and how many through the external website?.`

This provides you with collective data points to analyze and monitor further. Each channel traffic is captured separately in the **Channel** Analytics dashboard. This not only allows you to monitor each channel’s metrics separately but also provides unified analytics cutting across different web channels. See [Channels](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#channels), for more information.

### 

**Use-case 3: Maintain different user sessions**

For security reasons, it may be required to deploy your agent on an internal authenticated website and to deploy the same agent on an external public website. Consider a use-case, where:

*   A user opens "Tab 1" and logs in to the internal website to access the agent
    
*   The same user opens "Tab 2" and accesses the agent on an external public-facing website
    

Here, the sessions of the user when accessed via the internal website must not affect the user session on the external website.

With the ability to deploy the same agent across multiple channels, each web channel instance is unique. The sessions maintained across each web channel instance applies only to that channel and do not affect the agent deployed in another web channel instance.

See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information on deploying "one agent" across multiple instances of a web channel.

### 

**Use-case 4: Enable/Disable deployed agent**

Consider that you have an agent already deployed on a website. You have some maintenance work or a major release or an outage in any integrated system for which you wish to take the agent offline from the deployed website.

Web Channel configuration provides the ability to achieve this use case with ease, by using the **Enable/Disable toggle** in the **Channel details**.

When you **Disable** the web channel, the agent widget pop-up is not displayed on the website. You can enable it back using the same slider when your agent is again ready to be deployed.

See [Channel details](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#channel-details), for more information.

### 

**Use-case 5: Add voice capability**

Voice-enabled platforms are very easy to use as it involves users to carry on conversations without having to type or swipe. **AI-enabled voice agents** engage the users in intelligent conversations to help narrow down choices for users when options are similar. These systems are available 24x7 for service - just like websites - but have the capability to process complicated transactions and orders even during "off" hours.

You can add a voice assistant to your web channel that can engage the users in intelligent conversations by understanding and interpreting the dialects and accents of the users.

*   Voice assistants can provide real-time transcriptions in the selected locale of your voice messages. You can also configure various parameters related to the playback and audio capability of your web channel.
    
*   Voice capability coupled with security that can be managed at each web channel instance, enables enterprise-wide deployment of agents with multiple levels of authentication and authorization options.
    

See [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), for more information.

## 

Before you begin

*   Ensure that your agent is ready and tested to be deployed
    
*   Ensure you have cookies enabled on the site where you wish to deploy your agent.
    

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only web channel is enabled by default.

## 

Supported browsers

The agent widget is supported in the latest version of all the advanced browsers such as Safari, Firefox, Internet Explorer 11 onwards, and Google Chrome (to name a few).

**Deprecation notice**: In the v6.2.0 release, the agent widget support on the Internet Explorer browser is deprecated. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#deprecation-notice), for more information.

**Notes on Accessibility**:

*   **Firefox browser on Mac**: By default, tabbing is not enabled in the Firefox browser on Mac. To turn it on, you must:
    
    *   Navigate to `Firefox's Preferences > Advanced > General`, then uncheck "Always use the cursor keys to navigate within pages" in the Firebox browser.
        
    *   Next, you have to open your Mac's System Preferences app, then go to `Keyboard > Shortcuts`, then select the "All Controls" radio button.
        
    
*   **Safari browser on Mac**: By default, tab through links is not enabled in the Safari browser on Mac. To turn it on, you must open Safari's Preferences, go to Advanced, and check the "Press Tab to highlight each item on a webpage" checkbox.
    
*   See [Handling common accessibility problems](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility), for more information.
    

## 

Next steps

When you deploy your agents on the Avaamo platform in the web channel, you can also configure different customization parameters and custom properties in the web channel based on the requirements. See [Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel

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

There are two types of testing for AI agents as it supports `Voice` and `Text` types of conversation.

After you save your web channel configuration settings, click **Test.**

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

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/channel-details

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

**To configure a channel details in the web channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   In the **Channel details** section, you can specify the channel name and channel description.
    

### 

Enabled

Default: Enabled

Toggle the slider to enable and disable the channel.

The "Enable/Disable" toggle allows you to retain the channel settings even when you choose to disable the channel. Note that when you disable the channel, the agent widget pop-up is not displayed on the website. You can enable it back using the same slider when your agent is again ready to be deployed.

This is helpful when you have some maintenance work or a major release or an outage in any integrated system for which you wish to take the agent offline from the deployed website.

### 

Channel name

Maximum length: 50 characters

Specify a name to identify the web channel. The channel name allows you to identify the web channel and is useful when you wish to deploy your agent in multiple web channels.

Note that the channel name must be unique and is mandatory.

### 

Channel description

Maximum length: 200 characters

Describe the purpose of the channel.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme

In the **Theme** section, you can customize the look and feel of your agent.

This feature and the ability to deploy "one agent" across multiple instances of a web channel enable you to style your agent for each instance separately. This allows you to maintain a "single code base" for your agent and still provide a different look and feel for your deployed agent on different instances of the web channel. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.

### 

**Agent theme**

In the **Agent Theme** section, you can select the color scheme of the web channel.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

**To configure the agent theme**:

*   On the `Agent -> Channels` page, click `View` on the Web Channel.
    
*   In the `Channels -> Theme` section, click the `Agent theme` dropdown to choose a theme based on your styling requirements.
    
*   Choose a theme based on your requirements from the dropdown.
    

*   Click `Save` and click `Test` to test the agent.
    
*   A test link is displayed in the new window. Click the agent icon to test. The agent widget is displayed with the new theme. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

**Mercury theme**

`Mercury` is the default theme for all newly created agents and newly created web channels in the Avaamo Conversational AI Platform.

The primary styling components of the `Mercury` theme offer a better display of user inputs and agent responses and hence aid in a better user experience. The following table shows the styling details of the `Mercury` theme:

Primary color

Font color

Agent message background-color

User message background-color

#ffffff

#374151

#ffffff

#2b0060

*   **Streaming responses:** `Mercury` theme renders streaming responses through the typing animation to the user, eliminating idle waiting time. Streaming is intuitive, especially when there is a delay in agent response. It creates an impression to the user that the agent is responding and helps in actively engaging the user in the conversation flow.
    
*   **Wider agent widget:** `Mercury` theme has a wider agent widget and provides more text area to display the agent response. For short responses, this can avoid scrolling to read answers.
    
*   **Enhanced readability:** A clean UI in the `Mercury` theme with an enhanced white-tone usage, makes the theme look brighter and cleaner (less cluttered), thus enhancing readability when compared to the other themes.
    
*   **Stop generating answers:** Users can stop generating answers in the `Mercury` theme. This helps the users to pause generating text in an ongoing conversation intermittently. This feature provides flexibility to the users in controlling the flow of interaction, allowing users to gather additional information, process intermediate results, or make decisions based on previous responses. To continue generating responses, users can just post queries back to the agent.
    

#### 

Feedback suggestions on thumbs-down

One of the significant improvements in the `Mercury` theme is the feedback collected from the users on the thumbs-down option for a response. In the `Mercury` theme, the feedback collected from the UAT users differs from what is collected from the production users.

For production users who are actual customers, the feedback collected is open-ended and enables users to provide more descriptive suggestions.

The feedback collected at the UAT stage aims towards collecting more specific details since UAT users are subject matter experts and testers within the account who are more aware of the agent and what is built into it when compared to the production users. Hence, the feedback collected at the UAT stage can be instrumental in fine-tuning the agent. See [UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat), for more information.

To provide feedback on the thumbs-down option, select the category and specify a detailed explanation for the selected category in the feedback pop-up window.

You can view user feedback on the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page and also under [Learning -> User Feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) section. Alternatively, you can use the [User Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api) to collect feedback periodically to learn from and analyze users' experiences when interacting with your agent.

**Key points**:

*   Use [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback) to override the default feedback options.
    
*   You can specify upto 60000 characters in the "Please explain" text area.
    

### 

Themes comparison

The following table depicts supported themes and styling comparisons:

Mercury & Mercury 2.0

Messenger

Blue

Orange

Red

Green

*   Primary color: #ffffff
    
*   Font color: #374151
    
*   Display agent or user name: Agent name is displayed.
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #2b0060
    
*   Message display: Left -> Agent Message, Right -> User Message
    

*   Primary color: #0d86de
    
*   Font color: #001c33
    
*   Display agent or user name: No
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #DCDCDC
    
*   Message display: Left -> Agent Message, Right -> User Message
    

*   Primary color: #0d86de
    
*   Font color: #666666
    
*   Display agent or user name: Yes
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #f6fbfe
    
*   Message display: Agent and User messages are displayed one below the other
    

*   Primary color: #FBA361
    
*   Font color: #001c33
    
*   Display agent or user name: No
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #fffaf6
    
*   Message display: Agent and User messages are displayed one below the other
    

*   Primary color: #F17375
    
*   Font color: #666666
    
*   Display agent or user name: Yes
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #fef9fa
    
*   Message display: Agent and User messages are displayed one below the other
    

*   Primary color: #48C27C
    
*   Font color: #666666
    
*   Display agent or user name: Yes
    
*   Agent message background-color: #ffffff
    
*   User message background-color: #f4fbf7
    
*   Message display: Agent and User messages are displayed one below the other
    

Although there are no visual changes between Mercury and Mercury 2.0, several functional and accessibility enhancements have been introduced, as outlined below.

change

mercury theme

mercury theme 2.0

message region ARIA role (desktop)

`region`

`log`

header title element

`<h2>` used for title

Semantic hierarchy: `<h1>` for bot name in chat window, `<h2>` for bot name in conversation view, `<h3>` for card/carousel titles

send button initial state

disabled by default; enabled only when text is entered (`aria-label="Send"`)

disabled by default; enabled only when text is entered (`aria-label="Send"`, `aria-disabled="true"`)

bot menu container

`div` with direct links

semantic `<ul>` menu with `<li>` items

quick replies markup

visual list without semantic labeling

`<ul>/<li>` structure with `aria-label="quick reply options"`

list-view cards

`div` wrappers with divider elements

semantic `<ul>/<li>` structure with ARIA label ("list options"); no divider elements

default card action links

rendered as `div` groups

rendered as semantic `<ul>/<li>` with ARIA label ("card actions")

### 

**Custom CSS**

You can provide a custom skin to the agent deployed on the Web channel using custom CSS. This provides a unique and personal experience to the user interacting with the agent. **Example**: font, background color, logo (to name a few). See [Web Channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel), for more information on Custom CSS.

**Key Points**:

*   To create a custom CSS, you must identify the CSS selector that must be customized. Locate or inspect the web element in the Chrome browser, identify the CSS selector, and then customize in Custom CSS as required.
    
*   The maximum Custom CSS code limit is 65535 characters and the maximum file size is 64 KB. If you have a CSS file that exceeds this limit, then you can consider one of the following approaches:
    
    *   Remove unnecessary CSS data.
        
    *   Minify the data by eliminating unwanted characters.
        
    *   If you have a larger CSS file, then it is recommended to use the External CSS approach. See [External CSS](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#custom-css-url), for more information.
        
    

Consider that you wish to customize the background color of the messages displayed in the MacPizza agent. Currently, without custom CSS, the MacPizza agent has messages displayed with a transparent background.

**To style the agent**:

*   Locate or inspect the web element in the Chrome browser and identify the CSS selector that must be customized.
    
*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Theme** section, customize the CSS selector as required in the **Custom CSS** text-area. The following is a sample CSS that customizes the look and feel of the agent messages:
    

*   Click **Save** and click **Test** to test the agent.
    
*   A test link is displayed in the new window. Click the agent icon to test. The agent widget is displayed with customized CSS changes. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

**Custom CSS URL**

Instead of adding inline custom CSS, you can provide an externally hosted CSS URL for better maintainability.

**To add custom CSS URL**:

*   Identify and create custom CSS as per your styling requirement. See [Custom CSS](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#custom-css), for more information on how to identify and customize the CSS selectors.
    
*   Upload the CSS file in any publically accessible URL**.** Ensure that the mime type is "text/css".
    
*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Theme** section, add the CSS URL in the **Custom CSS URL** textbox.
    

*   Click **Save** and click **Test** to test the agent.
    
*   A test link is displayed in the new window. Click the agent icon to test. The agent widget is displayed with customized CSS changes as specified in the Custom CSS URL. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Custom CSS class

Using the **Custom CSS class**, you can provide a qualifier or namespace that helps you to define custom CSS elements within scope. Adding a qualifier helps you to define the scope where the CSS must be applied so that it does not interfere with the style of the same element in the parent website where the agent is deployed.

**To add custom CSS class**:

*   Identify the custom CSS class name that you wish to specify.
    
*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Theme** section, add the custom CSS class in the **Custom CSS class** textbox. You can use the custom CSS class to style the elements so that it does not interfere with the style of the same element in the parent website where the agent is deployed.
    

*   Click **Save** and click **Test** to test the agent.
    
*   A test link is displayed in the new window. Click the agent icon to test. The agent widget is displayed with customized CSS changes. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

**Key point**: When you specify a custom CSS class and save the web channel settings, the class is applied in the <body> tag. You can use this class to define custom CSS elements within the scope.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration

**Before configuring the widget in the web channel**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Widget configuration** section, you can configure various customizable parameters such as default locale, user name, and scroll behavior (to name a few) for your agent widget.
    

### 

Display user name in chat

This option can be used to display user names in the agent chat widget during agent-user conversations.

**Notes**:

*   This works only for those themes that support user name display. This option is not supported by the default messenger theme.
    
*   By default, this option is not enabled.
    

**To enable displaying user name in chat widget**:

*   In the **Channels -> Widget configuration** section, slide the toggle **Display user name in chat** to **Yes**.
    

*   Click **Save** and click **Test** to test the agent.
    
*   A test link is displayed in the new window. Click the agent icon to test.
    

Consider that you have selected the Orange theme for your agent chat widget. See [Agent theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#agent-theme), for more information. Notice that the user name is now displayed in the agent chat widget:

### 

Default web channel locale

This option is to set the default locale for the web channel. All the languages configured in the agent is displayed in the dropdown. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

**Notes**:

*   By default, the web channel locale is English (en-US).
    
*   When you set a language as default in the **Configuration -> Language** page, then the default language set in the respective channels is not considered. The agent's default language set in the **Configuration -> Language** page takes precedence. See [Make default](/user-guide/how-to/build-agents/configure-agents/add-languages#make-default-language), for more information on how to set the default language from the **Configuration -> Language** page
    

**To choose the default web channel locale:**

*   In the **Channels -> Widget configuration** section, select the default web channel locale, and say French from the dropdown.
    

*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. You can now see that the default locale of the web channel is changed to French.
    

*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Show previous history on load

There are two configuration options related to showing the previous history on load:

Name

Description

Values

Default

Show previous history on load

Whether to show the previous history in the agent chat widget or not on load.

Enabled / Disabled

Enabled

Number of previous messages to show

Number of previous messages to show in agent chat widget on load. You can set a maximum value of 200.

Number

10

By default, when the agent chat widget is opened, it displays the last 10 messages of the agent-user interaction.

**To disable previous history in chat widget**:

*   In the **Channels -> Widget configuration** section, slide the toggle **Show previous history on load** to **No**.
    
*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. You can now see that the previous history of messages is not displayed.
    

**Note**:

When `Show previous history on load` is disabled,

1.  The conversation history is still available, but the past conversation in the agent is cleared to the users when they open the agent in the browser tab. Hence, only the greeting message is displayed to the user, not past conversations.
    
2.  For AI agents, the greeting message is displayed each time a new session is initiated, including when the user refreshes the page, exits and revisits the agent, or logs out and logs back in.
    

*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Collect user information

This option can be used to ask the user for email, first name, and last name before allowing access to agent chat widget.

**Note**: By default, this option is not enabled.

**To enable collect user information option**:

*   In the **Channels -> Widget configuration** section, slide the toggle **Collect user information** to **Yes**.
    
*   Select the user details such as the first name, last name, email, and language that you wish to ask the user before accessing the agent.
    

*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. If you wish to test for a new user, then ensure that all the cookies are cleared. Click the agent icon to test. The selected user information is displayed in the chat widget.
    

*   Enter the details and press next.
    

*   If you have selected a theme that supports displaying of user name and enabled [Display user name](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#display-user-name-in-chat) in the chat option, then you can view the same name in the agent-user interactions.
    
*   The collected user information details is also available in the [context.user](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user) object, if you wish to access it later for any other purposes.
    
*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Agent typing animation

There are two configuration options to show the agent typing animation:

Name

Description

Values

Default

Show agent typing animation

Show agent typing animation while waiting for agent response.

Typically used when you have external API calls to generate agent responses.

Enabled / Disabled

Enabled

Agent typing animation duration (milliseconds)

Duration of the agent typing animation.

Typically used when you have external API calls to generate agent responses.

milliseconds Example: 30000 for 30 seconds.

5000

By default, the **Show agent typing animation** option is enabled. When it is enabled, the typing animation is displayed as follows in the agent widget:

**To disable agent typing animation option in chat widget**:

*   In the **Channels -> Widget configuration** section, slide the toggle **Show agent typing animation** to **No**.
    
*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. Click the agent icon to test. You can now see that the agent typing animation is not displayed. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Draggable

This option can be used to make the embedded web channel window draggable around the page.

**Note**: By default, this option is not enabled.

**To enable draggable option in chat widget**:

*   In the **Channels -> Widget configuration** section, slide the toggle **Is agent widget draggable in the page?** to **Yes**.
    

*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. Click the agent icon to test. As you place the cursor on the agent chat widget, a draggable icon  is displayed. You can use this to drag the agent chat widget anywhere in the page.
    

*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Scroll behaviour

This option can be used to decide if the agent messages must scroll to the top or bottom in the chat widget.

*   **Top**: Scrolls to the top of the first agent message after the user sends a query.
    
*   **Bottom**: Scrolls user to the last message from the agent.
    

**Note**: By default, the scroll behavior is set to **Top.**

**To set the scroll behavior**:

*   In the **Channels -> Widget configuration** section, select the **Scroll behavior**. Here, the scroll behavior is set to the **Bottom**.
    

*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. Click the agent icon to test. You can now see that it scrolls the user to the last message from the agent.
    
*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

**Stream message**

This option is useful when you wish to render streaming responses to the user via typing animation instead of displaying it at once.

Streaming is intuitive, especially when there is a delay in agent response. It creates an impression to the user that the agent is responding and helps actively engage the user in the conversation flow.

**To enable the Stream message option**:

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   Slide the toggle **Stream message** to Yes in the **Channels -> Widget configuration** section.
    
*   Click **Save** and click **Test** to test the agent. A test link is displayed in the new window. Click the agent icon to test.
    
*   You can now view the agent responses rendered as a stream with an option to stop generating the response.
    
*   You can stop generating responses to pause generating text in an ongoing conversation intermittently. This feature provides flexibility to the users in controlling the flow of interaction, allowing users to gather additional information, process intermediate results, or make decisions based on previous responses. To continue generating responses, users can just post queries back to the agent.
    
*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

**Send attachment**

This option is useful when users have to send attachments in the live agent conversations from the agent to the live agent.

**To enable the file attachment option**:

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Widget configuration** section, slide the toggle **Send attachment** to **Yes**.
    
*   Click **Save** and click **Test** to test the agent. A test link opens in a new window. Click the agent icon to test.
    
    *   You can now see an attachment icon before the `Send` option in the agent widget. The attachment button is displayed only when the user is connected to a Live Agent.
        
    *   Click the `Attachment icon` to send an attachment from your system.
        
    *   You can send only one attachment at a time with a maximum size of 4 GB. You can send attachments of any type, there is no restriction on the type of attachments that you can send.
        
    *   Select the attachment you wish to send. The file format and filename are displayed in the message box.
        
    *   Once the attachment is sent, live agents and users can click the file to view its details.
        
    *   To include a message with an attachment, you must first send the attachment, followed by a separate message to the user.
        
    *   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
        
    

**Note**: When you upload an attachment using the upload icon, the agent responds with an unhandled message.

*   You can have a [Dialog skill with pre-unhandled intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent#id-5.-pre-unhandled-intent-handler), or any [Dialog skill with custom code intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent#id-4.-custom-intent-handler) to process it accordingly.
    
*   `context.last_message.<<uuid>>` and `context.last_message.<<uuid>>.name` contains the name and identifier of the uploaded file. You can use this information for further processing as per the business requirements.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/voice

**Note**: Digital voice feature is enabled only on-demand. Contact Avaamo Support, for further assistance.

In this section, you can enable a digital voice assistant to your web channel that can engage the users in intelligent conversations by understanding and interpreting the dialects and accents of the users.

Voice assistants can provide real-time transcriptions in the selected locale of your voice messages. Voice capability coupled with security that can be managed at each web channel instance, enables enterprise-wide deployment of agents with multiple levels of authentication and authorization options. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.

**Before configuring voice in the web channel**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

### 

Enable voice

This option allows you to enable real-time transcriptions of the agent messages in the selected locale.

**To enable voice**:

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Voice** section, slide the toggle **Enable voice** to **Yes**. By default, this option is disabled.
    
*   Click **Save.**
    

**Notes**:

*   This feature is enabled only on-demand. Contact Avaamo Support, for further assistance.
    
*   When you enable voice, you can also add a response specifically for the voice messages. See [Voice response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#voice-response), for more information.
    
*   You can also configure voice hints and playback voice of the voice assistant in the web channel. See [Voice settings](/user-guide/how-to/build-agents/configure-agents/add-voice-settings), for more information.
    
*   See [Voice - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information on languages supported for voice-enabled assistants.
    

*   Click **Test** to test the agent. A test link is displayed in the new window. Click the agent icon to test.
    
*   You can now see that a speaker icon 🔈 and the mic icon 🎙️ is displayed in the agent chat widget.
    
    *   By default, the speaker icon is muted. Click the speaker icon to unmute and test voice responses.
        
    *   Click the microphone and talk to the agent. If you have configured your agent in different languages, then you can select the language from the dropdown to switch the language.
        
        *   See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on how to add languages to agents.
            
        *   See [Voice - Supported languages](applewebdata://A1481F33-5936-4FC2-8002-1EDF872E2E7C/@avaamo/s/avaamo/~/drafts/-MdvcAchJH77OfMz93JB/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information on languages supported for voice-enabled assistants.
            
        
    

*   You can talk to the agent in the selected language. The text you speak is automatically transcripted by the agent and displayed in the text box.
    

*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Send the voice message automatically

This option allows the voice messages to be sent without requiring you to click **Send** in the agent chat widget.

By default, when you speak using the microphone in the agent chat widget, the messages are displayed in the text box but not sent until you click **Send** button.

**To enable this feature**:

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Voice** section, slide the toggle **Enable voice** to **Yes**. By default, this option is disabled.
    
*   Click **Save** and click **Test** to test the skill. A test link is displayed in the new window. Click the agent icon to test. Click the microphone and talk to the agent. Your messages are sent to the agent without requiring you to click **Send** in the agent chat widget.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deployment

You can use the script provided in the **Deployment** section to deploy your agent in any web channel.

*   Click the copy icon in the text area to copy the script provided in "Copy your embed code".
    

*   Right-click anywhere on your website and open the HTML document, scroll down to the end of the page, copy the script provided in the web channel detail page immediately above the end of the body tag in your HTML page.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/ai-agent

Note: This option applies only to `AI agents`. Refer to [Configure web channel](/user-guide/ai-agent/configuration/channels/web-enabled-by-default) for more information.

You can use the script provided in the `**Deployment**` section to deploy your agent in any web channel.

### 

Enable User Form

This option allows you to collect user details before the user begins a conversation with the agent. Select the checkbox to enable this feature.

## 

Deployment

You can use the script provided in the `**Deployment**` section to deploy your agent in any web channel.

The **AI Agent** tab provides options to configure and deploy your agent on the web channel. From this tab, you can set up user interaction requirements, choose voice processing capabilities, and use the deployment script to integrate the agent into your website.

*   Click the copy icon in the text area to copy the script provided in "Copy your embed code".
    

**Key point:**

The copied code contains,

Where `container` can be any valid selector where you want the widget to appear.

For example, if set to `'body'`, the widget attaches to the `<body>` of the page.

*   Right-click anywhere on your website, open the HTML document, scroll down to the end of the page, and copy the script provided in the web channel detail page, immediately above the end of the body tag in your HTML page.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security

In the **Security** section, you can secure your agent with different authentication mechanisms as per your requirements.

**Before configuring security details in the web channel**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

In the **Security** section, you can specify the following details:

Parameters

Description

Default

Is agent publicly accessible on any website?

Use this option if you wish to make the agent publicly accessible on any website.

Toggle the slider to enable and disable as required.

Disabled

Use custom user authentication

Use this if you wish to enable custom authentication for your agents deployed on web and mobile channels using JavaScript code.

Toggle the slider to enable and disable as required.

See [User authentication handle](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler)r, for more information.

Disabled

Cookie expires in (hours)

Use this configuration option to set the expiry time for cookies in your browser by specifying the duration (in hours) for which the cookies remain active. See [Cookie expires in (hours)](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security#cookie-expires-in-hours), for more information.

Must specify a value in the range of 1-8760 hours.

Allowed domains

Specify a space-separated list of domains where the agent is accessible. Use this if the agent is not publicly accessible.

While adding the URL, If a URL has both a domain and a subdomain, include both. If it only has a domain, mention just the domain name.

Examples:

`https://www.google.com` → `**www.google.com**`

`https://example.com` → `**example.com**`

NA

JWT secret key

The key that must be used to encode user information when a JWT token is passed in the web channel URL.

Click the **Copy** icon at the end of the textbox to copy the JWT secret key.

See [Authentication using JWT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt), for more information.

NA

### 

Cookie expires in (hours)

The cookie configuration option allows you to configure the expiry time for cookies in your browser by setting a specific duration (in hours) for which the cookies remain active. This functionality ensures that user sessions can be automatically terminated after inactivity, providing better control over session management.

**Key features:**

*   You can set the number of hours for cookie expiration. The user's session expires once the specified time has passed, and the agent stops responding due to inactivity.
    
*   You can not keep this field empty and must specify a value in the range of 1-8760 hours.
    

For example, if you set `Cookie expires in (hours)` for one hour. After one hour of inactivity, the agent stops responding and displays the error message: "`Please check your network connection`". You need to restart the conversation from the beginning by refreshing the agent.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced

In the **Advanced** section, you can provide any advanced configuration such as any [additional customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#advanced-customization-parameters) or an [autocomplete URL](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#query-autocomplete-url), if required.

You can include additional parameters to the web channel such as user information and theme.

**Notes**:

*   You can set many of these parameters from the UI also. However, setting a parameter in the customization parameters section always takes precedence over the value set in the UI.
    
*   avm-siri theme is supported only in text-based web channels.
    

**Before configuring the advanced customization parameters in the web channel**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

**To add advanced customization parameters**:

*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Advanced** section, specify the key in the **Key** text box and the corresponding value. See [Customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#customization-parameters), for more information.
    

*   Click **Save** and click **Test** to test the skill. See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

Customization parameters

Parameter Name

Description

Values

debug

To show the debug icon with every agent response. Useful to see the message insights.

true/false

Default: false

show\_bot\_typing

Show agent typing animation while waiting for agent response.

Typically used when you have external API calls to generate agent responses.

true/false

Default: true

bot\_typing\_duration

Duration of the agent typing animation.

Typically used when you have external API calls to generate agent responses. Set it to 0 if you do not wish to use the agent typing animation.

milliseconds

Example: 30000 for 30 seconds.

Default: 500 milliseconds

audio\_visible

Whether the voice reading feature is enabled or not.

true/false

Default: false

audio\_on

This is to enable the speaker icon 🔈 in the chat widget.

true/false

Default:false

theme

The color scheme of the web channel

avm-messenger

avm-blue

avm-red

avm-orange

avm-green

avm-siri

avm-mercury

Default: avm-mercury

draggable

Whether the embedded web channel window is draggable around the page or not.

true/false

Default: false

history

Whether to show the previous history of messages on page load or not.

Note that when you set history=false, the conversation history is still available, but the past conversation in the agent is cleared to the users when they open the agent in the browser tab. Hence, only the greeting message is displayed to the user and not the past conversations.

true/false

Default: true

voice\_auto\_send

Whether to send the voice message automatically

true/false

collect\_info

Whether to ask the user for email, first name, and last name before allowing access to the web channel or not

true/false

Default: false

scroll\_behaviour

Decides if the agent must scroll to the top or bottom.

**show\_full\_response**: Scrolls to the top of the first agent message after the user sends a query.

**bottom**: Scrolls user to the last message from the agent.

show\_full\_response

/bottom

Default: top

user\_info

user\_info is the JWT information containing {uuid: unique\_id, first\_name:, last\_name, email: } signed with the agent's secret.

See [Authentication using JWT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt), for more information.

JWT token Default:

Identifies as an anonymous user and assigns - user <<random\_uid>>

voice\_on

Whether the new agent message is read out by default

true/false

Default: false

voice\_locale

Whether the voice is set to the selected locale of the agent. Note that you must add a locale to the agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

Locale specified in standard [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag#Syntax_of_language_tags)

css\_url

If you have an external CSS file URL, then the external CSS file URL is considered instead of custom CSS in the web channel setting

External CSS file URL

css\_class

You can provide a qualifier or namespace that helps you to define custom CSS elements within scope.

Custom CSS class

locale

This is the default locale for the web channel, for this language needs to be included in the agent.

Locale specified in standard [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag#Syntax_of_language_tags)

Default: English (en-US)

custom\_properties

Used to pass custom properties in web channel URL without using JWT.

If you are using JWT, you can pass JWT using user\_info. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for an example.

\[<<key1>>\]=<<value1>>

Key, value pair of custom properties

query\_autocomplete\_url

A set of pre-canned questions as per your requirement. Currently, this feature is supported only in the English language.

JSON file in any publically accessible URL such as Github

message

This message is posted as a user query to the agent as soon as it is invoked.

For example, you can post #clear message to tag the greeting message so that it can be captured in Analytics.

String

<<custom message>>

**Example**: message="#clear"

floating\_label\_enabled

When enabled, the placeholder moves above the field as a floating label when the user focuses on the field or begins typing, instead of disappearing.

true/false

Default: false

enable\_idle\_timeout\_notification

When enabled, after a user session ends due to inactivity, a message is displayed in the conversation informing the user that the session has timed out.

true/false

Default: false

#### 

**Example 1: User information**

Next, configure the agent settings for the Web Channel.

*   You can request the user information before allowing the user to interact with the agent, and add _collect\_info=true_ in the query string of the agent script URL. **Example**: web\_channels/2f36cccd-b872-4830-abc5-e606350c1089.js?
    

#### 

**Example 2: Movable chatbox**

You can make the chatbox draggable or movable for the user's convenience. Add _draggable=true_ in the query string.

### 

Query autocomplete URL

**Notes**:

*   Currently, this is supported only in the English (en-US) language.
    
*   If you have [enabled voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#enable-voice) in the agent, then auto-complete works only if the "Send the voice message automatically" option is disabled. See [Send the voice message automatically](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#send-the-voice-message-automatically), for more information.
    

The auto-complete feature provides a list of query options to the user as the user starts entering the query in the agent. This feature can reduce false positives and significantly improve accuracy. By presenting the user with a list of available options, the user likely selects one of those options for which accurate curated responses are already available in the agent.

**To test query autocomplete URL**:

*   Identify a set of pre-canned questions as per your requirement and create a JSON file:
    

*   Upload the JSON file to any publicly accessible URL.Upload the JSON file in any publically accessible URL.
    
*   On the **Agent -> Channels** page, click **View** on the Web Channel.
    
*   In the **Channels -> Advanced** section, add the JSON URL in the **Query autocomplete URL** textbox.
    

*   Click `Save` and click `Test` to test the skill.
    
*   A test link is displayed in the new window. Click the agent icon to test. As you type the text, the auto-complete list is displayed in the agent.
    

*   See [Test channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#test-channel-settings), for more information on how to test the web channel.
    

### 

**Enable Markdown Format**

This option allows you to use the `Markdown` format for LLaMB response. By default, this option is unchecked.

**Note:** To utilize this option, ensure you re-ingest the document before enabling it.

*   Markdown simplifies formatting, making generating and displaying elements like paragraphs, tables, bullet points, and hyperlinks easier.
    
*   This change enables more flexible and universal formatting options, thereby enhancing readability and improving compatibility with LLaMB.
    

**To enable the MD Format option**:

*   On the `Agent > Channels` page, click `View` on the Web Channel.
    
*   Navigate to `Channels > Advanced`**.**
    
*   Click `Advanced` tab in the left panel of the channel configuration widget.
    
*   Locate the `Enable Markdown Format` option under `LLaMB Settings`**.** Click the checkbox next to the option to enable it.
    
*   Click `Save` and click `Test` to test the agent. A test link is displayed in the new window. Click the agent icon to test.
    

### 

Disable citation links

In LLaMB responses, citation links are references provided by the agent to indicate the source of information. They often point to [ingested documents](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content) or [preview URLs](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit) added during the document ingestion. This feature adds credibility to the information displayed to the user.

Disable citation links option allows you to enable/disable [citation links](/user-guide/llamb/citation-links) in the LLaMB responses. By default, citation links are always displayed in LLaMB responses.

**Note**: This option is visible only when **Enable Markdown Format** is checked under **LLaMB Settings**.

**How to Enable or Disable citation links:**

*   In the `Agent` page, navigate to the `Configure > Channels` option in the left navigation menu.
    
*   On the Channels page, click `View` in the Web Channel.
    
*   Click `Advanced` tab in the left panel of the channel configuration widget.
    
*   Click `Enable Markdown format` under `LLaMB Settings` to view the `Disable Citation links` option. By default, citation links are always displayed in LLaMB responses; hence, this option is unchecked.
    
*   Check to disable the citation links, and uncheck to display them in LLaMB responses.
    
*   Click `Save` and click `Test` to test the agent. A test link is displayed in the new window. Click the agent icon to test
    

When citation links are enabled

When citation links are disabled

### 

Enable concise response

This feature enhances the conversational experience by generating shorter, more natural, and to-the-point responses while preserving key information in LLaMB responses

**Note**: This option is visible only when **Enable Markdown Format** is checked under **LLaMB Settings**.

When `Enable Concise Responses` is turned on, the agent prioritizes brevity and conversational fluency. Instead of providing lengthy, detailed responses, it focuses on delivering information in a clear and engaging manner for users.

**How to Enable or Disable the Option:**

*   On the `Agent` page, navigate to the `Configure > Channels` option in the left navigation menu.
    
*   On the Channels page, click `View` in the Web Channel.
    
*   Click `Advanced` tab in the left panel of the channel configuration widget.
    
*   Click `Enable Markdown format` under `LLaMB Settings` to view the `Enable concise response` option. By default, this option is unchecked.
    
*   Check to disable the concise LLaMB responses and uncheck to enable concise LLaMB responses.
    
*   Click `Save` and click `Test` to test the agent. A test link is displayed in a new window. Click the agent icon to test
    

Before enabling

After enabled

**Key point:**

When using Agent Assist or AI Agent, where precise responses are required and source links are not needed, you can disable them using these options.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat

User acceptance testing (UAT) is a crucial step before deploying your agents to the production environment. It helps to ensure that the agent meets user requirements, functions correctly in a real-world setting, and provides a high level of quality and satisfaction.

Here's a quick demo of the `**UAT**` feature:

### 

Why UAT of agents?

Some of the key benefits include:

*   **Validation of requirements**: UAT helps to gather user feedback from UAT users before deploying the agent in the live production environment. Hence it helps to validate that the system aligns with the intended functionality outlined in the initial requirements.
    
*   **Quality Assurance:** UAT helps to identify defects, bugs, or discrepancies that may have been overlooked during earlier stages of testing. It helps to ensure a higher level of quality before the agent is made available to a wider audience.
    
*   **Cost-effective:** Identifying and fixing issues during the UAT phase is generally more cost-effective than addressing them after the agent has been deployed in the production environment.
    
*   **Accelerates agent deployment**: When you iteratively add more functionality to your agent, the UAT queries can serve as a good test bed to perform quick end-to-end testing if the agents before deploying the agents to production.
    

### 

Who should use UAT?

UAT feature is exclusively built for user acceptance testers who are subject matter experts and are aware of the agent functionality. Testers can use the UAT feature to set up the required test queries, perform UAT on the agent, and provide required feedback.

Developers can then view the feedback provided during UAT testing from the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page and also under [Learning -> User Feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) section. Alternatively, developers can also use the [User Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api) to collect feedback periodically to learn and analyze the experience of the user when they are interacting with your agent.

### 

Before UAT

*   Identify the `categories` of the testing areas. Here, a category can be used to classify your UAT queries into different groups, based on functionalities, modules, or use cases. Categories help to maintain the UAT queries effectively.
    
*   Evaluate what must be accomplished at the end of UAT testing for each category. Have a list of UAT queries that closely mimic the production use cases for each category.
    

**Before configuring UAT section in the web channel**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing the agent.
        
    

### 

Add UAT queries

In the Avaamo Conversational AI Platform, the `UAT` option is available in the Web channel. It allows you to set up a pre-defined set of test queries to conduct UAT on the agents before deploying the agent in production.

**To add UAT test queries**:

*   On the `Agent -> Channels` page, click `View` on the Web Channel.
    
*   In the `Channels -> UAT` section, you can add test queries for each category.
    
    *   By default, three categories are already available in the UAT page.
        
    *   Click `Add new category` to add a new category of queries.
        
    *   Click the extended menu on the category to edit the category name or delete the category.
        
    

*   For each category, type the query in the `Type in your query` textbox and click `Add` to add new UAT queries.
    
*   Click `Save` to save the UAT categories and queries.
    

**Notes**:

*   Currently, there is no limit on the number of categories to add in the UAT page. However, it is recommended to keep the categories close to the number of functionalities or modules that you wish to test.
    
*   Currently, there is no limit on the number of queries to add. It is recommended to add at least 50 UAT queries for each category for a thorough evaluation.
    
*   A Category name can be up to 191 characters and must be unique
    
*   The query within the same category must be unique.
    

### 

Perform UAT

After configuring the UAT, click the `View` option in the `Channels -> UAT` section to test the queries.

The UAT link is displayed in the new tab. The instructions and categories are displayed on the left side of the page. The agent is displayed towards the right.

*   Click the `Category` to view the queries corresponding to each category.
    
*   Click the query in the `Category`, the query is displayed in the agent widget, executed in the agent widget and the response corresponding to the query is displayed.
    
*   Click the thumbs up and thumbs down option to provide feedback.
    
*   In the thumbs-down option, you can specify more granular details that can help in tuning the agent for a better user experience.
    

If you are using a `Mercury` theme, the feedback collected on the thumbs-down option from the UAT users differs from what is collected from the production users. In the `Mercury` theme, the feedback collected at the UAT stage aims towards collecting more specific details since UAT users are subject matter experts and testers within the account who are more aware of the agent and what is built into it when compared to the production users. See [Mercury theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme#mercury-theme), for more information.

The following illustration depicts the feedback collected on the thumbs-down option in the `Mercury` theme:

The following illustration depicts the feedback collected on the thumbs-down option in the `Messenger` theme:

### 

Reviewing UAT feedback

Developers can view the user feedback from the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page and also under [Learning -> User Feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) section.

The following is an illustration of the `User feedback` section in the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page:

Alternatively, Developers can also use the [User Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api) to collect feedback periodically to learn and analyze the experience of the user when they are interacting with your agent.

### 

Key points

The following are some of the key points to note in the UAT feature:

*   Since the primary audience of this feature is UAT users, message insights for the responses are not displayed in the agent widget.
    
*   UAT queries and responses are available in the Conversation history for further review and debugging is required. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.
    
*   UAT link is similar to the link generated when you click `Test` option in the web channel. If the agent is publically accessible, then the UAT link is also publically accessible and can be shared with the UAT users for testing.
    
*   All the Web channel configurations apply for the agent in the UAT environment. For example, if the web channel theme is `Messenger`, then the agent widget in the UAT link uses the `Messenger` theme.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/web-channel-callback-functions

You can also perform certain customization such as open and close the agent, send messages to the agent deployed in the web channel using JS. The agents deployed on web channels have web pages with **callback functions** embedded. These callback functions help to customize the user interaction with the agent. The Avaamo platform supports the following available callback functions

*   Avaamo.onBotMessage
    
*   Avaamo.hideEditor()
    
*   Avaamo.showEditor()
    
*   Avaamo.onFirstUserMessage
    
*   Avaamo.onFirstBotMessage
    
*   Avaamo.onChannelLoaded
    
*   Avaamo.onChatIframeLoad
    
*   Avaamo.onChatBoxOpen
    
*   Avaamo.onChatBoxClose
    
*   Avaamo.logout()
    
*   Avaamo.openChatBox()
    
*   Avaamo.closeChatBox()
    
*   Avaamo.toggleChatBox()
    

### 

**Open and Close**

You can open and close the agent programmatically with the following code:

Copy

    
    window.Avaamo.openChatBox();
    
    
    window.Avaamo.closeChatBox();
    
    
    window.Avaamo.toggleChatBox();

Consider that you wish to keep the agent in the open state when the agent is loaded. You can pass the **openChatbox** in the **chatBox.load** function. You can view the sample code when you click **Test** in the web channel.

The following is a sample code to keep the agent in the open state when the agent is loaded:

### 

**Send message**

To send a message programmatically to the agent on behalf of the user.

This function also accepts an optional second parameter that can be used to send a more meaningful message to the agent. If the second param is passed, the first param is used as a display message to the user in the chat window and the second param is used by the agent as the actual message:

### 

**Avaamo.onBotMessage**

This function once configured is executed for every response received from the agent:

### 

**Avaamo.hideEditor() / Avaamo.showEditor()**

You can hide the text input box on the agent. This is useful in scenarios where the user has other input options like a select list, a dropdown list, date selection, number box, etc.

**To hide or show the text box**:

1.  Right-click on the agent, click on “inspect” and then click on the console.
    
2.  Enter <<Avaamo.hideEditor()>> and the text box is hidden.
    
3.  Enter <<Avaamo.showEditor()>> to display the text box again.
    

If you have persistent menu, then use **Avaamo.hideEditor({hideMenu: true});** to hide persistent menu and **Avaamo.showEditor({showMenu: true});** to show the persistent menu.

Consider that you wish to display a form when the agent is loaded and wish to proceed further only when the user submits the form. You can view the sample code when you click "**Test"** in the web channel. The following is a sample code to hide the text editor when the form card displays and show for other messages:

### 

**Avaamo.onFirstUserMessage**

This function once configured is executed every time an end-user sends the first message to initiate the agent conversation.

### 

**Avaamo.onFirstBotMessage**

This function once configured is executed every time the agent displays the greeting message.

### 

**Avaamo.onChannelLoaded**

This function once configured on the client-side where the agent is embedded in the HTML page is executed every time the agent is displayed. This is applicable only for web channels.

### 

**Avaamo.onChatIframeLoad**

This function once configured is executed every time the agent chat window frame loads.

### 

**Avaamo.onChatBoxOpen**

This function once configured is executed every time the agent chat window loads.

### 

**Avaamo.onChatBoxClose**

This function once configured is executed every time the agent chat window closes.

### 

**Avaamo.logout()**

This function can be used in the agent for the user to log out of an active agent session. The user is logged out of the agent but not the deployed channel. All the conversation with the agent is lost and the users must start a new session to interact with the agent.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt

Consider that you have agents deployed to a web channel that can be accessed only via authentication. In such cases, customers can generate a JWT token and pass the user information to the agent at the time the agent is initialized to authorize the users using the following steps:

*   [Generate JWT token](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt#generate-jwt-token)
    
*   [Embed JWT token in the web URL](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt#embed-jwt-token-in-the-web-url)
    

Later, in the Platform, you can access the user information using a context object. See [Accessing user information](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt#accessing-user-information).

## 

**Enable custom user authentication**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the **Channels** page, click **View** in Web Channel.
    
*   In the **Security** section, check **Use custom user authentication** and click **Save**.
    

*   Click **Save** to save the changes to the agent.
    

## 

**Generate JWT token**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the **Channels** page, click **View** in the Web Channel**.**
    
*   In the **Security** section, click the **Copy** icon at the end of the **JWT secret key** textbox to copy the key. You must use the HS256 algorithm with the secret key to encode the user information.
    

*   The **JWT** is generated for passing a unique user identifier, first name, last name, email/phone (if available), and other optional user information that the agent can use to enhance its interaction with the user. See [JWT](https://jwt.io/), for more information on how to encode user payload with the secret key using the HS256 algorithm:
    

**Note:** JWT is used for **signature verification only**. It is recommended **not to include sensitive information or PII** such as access tokens or phone numbers within the token payload.

**Example 1**: The following is a sample user payload with some basic user details such as email, and phone, all of which are single string values :

**Example 2**: The following is a sample user payload with some basic user details such as email, and all are single string values and an additional country property with an array of values:

**Key Points**: Ensure that _uuid_ is used in the payload. This is used to maintain a single identity across the channel and multichannel sync.

## 

Embed JWT token in the web URL

The generated JWT token must be embedded in the **user\_info** parameter of the channel URL:

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the **Channels** page, click **View** in the Web Channel and **Test**.
    
*   A sample script is generated that is used to deploy the agent to a web-page:
    

*   The user information can be passed to this script by adding the URL parameter **user\_info** to the embedded URL:
    

## 

Accessing user information

The information passed via the JWT can be accessed in the agent using the **context.user** object. You can use the following code to access the uuid (unique id) assigned to the user:

**Key Point:** The uuid property is not accessible inside the agent in JavaScript. ${context.user.custom\_properties.uuid} does not return any value. You must pass another property containing the same value if you need to access it in JavaScript.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel

Typically, large enterprises can have multiple websites catering to different aspects of the organization. Since all web channels are a part of the same organization, it may be required to deploy the same agent or assistant across different web channels.

Avaamo Platform allows you to deploy "one" agent across multiple instances of the web channel. This allows you to style, customize configurations, maintain different user sessions, and manage security for each web channel instance separately.

See [Use-case analysis](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-analysis), for more information on few example use cases.

**To deploy your agent in multiple instances of web channel**:

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in Web Channel and follow the steps in [Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel) to deploy your agent into another instance of the web channel.
    

*   Once you configure web channel settings, you can view, edit, disconnect, and delete web channel settings. See [Manage web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/manage-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/manage-web-channel

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirement. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

You can also deploy your agent through multiple web channels simultaneously. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/android-apps

You can deploy the agents built on the Avaamo Platform into your Android channel to facilitate easy communication with Android mobile users. This helps to clearly distinguish and monitor the user interactions from the Android channel separately. See [Channels in Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics), for more information.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

### 

Channel settings

**Key points**:

*   All the properties, parameters, and callback functions as applicable for the web channel are also available for the Android channel. See [Web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel), for more information.
    
*   After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.
    
*   You can also deploy your agent on multiple instances of the Android channel similar to the web channel. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.
    

The following lists a few properties that distinguish a Web channel from an Android channel:

*   **Advanced -> Android page URL:** Indicates the page where the agent is deployed for Android mobile users. See [Suggested steps to deploy](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps#suggested-steps-to-deploy), for more information on this feature can be useful.
    

Properties

Description

Android page URL

Indicates the page where the agent is deployed for Android mobile users.

Embed code

Script that must be embedded in the Android apps to render the agent. Note that this URL is different from the web channel URL.

*   **Deployment -> Copy your embed code**: Script that must be embedded in the Android channel to render the agent. Note that this URL is different from the web channel URL. See [Suggested steps to deploy](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps#suggested-steps-to-deploy), for more information on this feature can be useful.
    

### 

Suggested steps to deploy

Consider that you have a website where you are required to deploy your agent. You wish to monitor the user interactions from the web channel and Android Apps channel separately for analytics. You can deploy your agent in both the channels with the same user experience as follows:

Consider that you have a website where you are required to deploy your agent. You wish to monitor the user interactions from the web channel and Android channel separately for analytics. You can deploy your agent in both the channels as follows:

*   Create a blank page that has the same base URL as the website. **Example**: If your website is http://www.macpizza.com/, then you can create a blank page with http://www.macpizza.com/android.php.
    
*   In the Android channel page, specify the URL http://www.macpizza.com/android.php in the **Android page URL**.
    
*   Deploy your agent in the page http://www.macpizza.com/android.php using the **Embed code** in the Android channel.
    
*   Test your agent from any Android device to verify the implementation.
    
*   In the main website http://www.macpizza.com/ source, include the script tag with the following code:
    

The following is a detailed script that checks if the device is android and launches the agent URL accordingly:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps

You can deploy the agents built on the Avaamo Platform into your iOS channel to facilitate easy communication with iOS mobile users. This helps to clearly distinguish and monitor the user interactions from the iOS channel separately. See [Channels in Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics), for more information.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

### 

Channel settings

**Key points**:

*   All the properties, parameters, and callback functions as applicable for the web channel are also available for the iOS channel. See [Web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel), for more information.
    
*   After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.
    
*   You can also deploy your agent on multiple instances of the iOS channel similar to the web channel. See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel), for more information.
    

The following lists a few properties that distinguish web channel from iOS channel:

*   **Advanced -> iOS page URL:** Indicates the page where the agent is deployed for iOS mobile users. See [Suggested steps to deploy](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps#suggested-steps-to-deploy), for more information on this feature can be useful.
    

Properties

Description

iOS page URL

Indicates the page where the agent is deployed for iOS mobile users.

Embed code

Script that must be embedded in the iOS apps to render the agent. Note that this URL is different from the web channel URL.

*   **Deployment -> Copy your embed code**: Script that must be embedded in the iOS channel to render the agent. Note that this URL is different from the web channel URL. See [Suggested steps to deploy](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps#suggested-steps-to-deploy), for more information on this feature can be useful.
    

### 

Suggested steps to deploy

Consider that you have a website where you are required to deploy your agent. You wish to monitor the user interactions from the web channel and iOS channel separately for analytics. You can deploy your agent in both the channels as follows:

*   Create a blank page that has the same base URL as the website. **Example**: If your website is "http://www.macpizza.com/", then you can create a blank page with "http://www.macpizza.com/ios.php".
    
*   In the iOS channel page, specify the URL "http://www.macpizza.com/ios.php" in the **iOS page URL**.
    
*   Deploy your agent in the page "http://www.macpizza.com/ios.php" using the **Embed code** in the iOS channel.
    
*   Test your agent from any iOS device such as an iPhone or iPad to verify the implementation.
    
*   In the main website "http://www.macpizza.com/" source, include the script tag with the following code:
    

The following is a detailed script that checks if the device is iOS and launches the agent URL accordingly:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams

**Microsoft Teams** is a proprietary business communication platform developed by [Microsoft](https://en.wikipedia.org/wiki/Microsoft), as part of the [Microsoft 365](https://en.wikipedia.org/wiki/Microsoft_365) family of products. Microsoft Teams is a chat-based collaboration platform complete with document sharing, online meetings, and many more extremely useful features for business communications.

The agents developed on the Avaamo platform can be deployed on the Microsoft teams channel. In this article, the following steps are detailed:

*   [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#before-you-begin)
    
*   [Deploy your agent in Microsoft teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#deploy-your-agent-to-microsoft-teams-channel)
    
*   [Test channel](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#test-channel)
    
*   [Agent typing indicator](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#agent-typing-indicator)
    
*   [Hero card support](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#hero-card-support)
    
*   [Webview in MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#webview-in-ms-teams)
    
*   [Streaming in MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#streaming-in-ms-teams)
    
*   [Microsoft Teams Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance)
    
*   [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#manage-channel-settings)
    

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

## 

**Before you begin**

### 

**Generic**

1.  Get the **Application ID** and **Secret key** details of the Azure bot that is created in the Microsoft Azure Portal. This is later required when you deploy your agent on the Microsoft Teams channel in the Avaamo Platform. See [Create an Azure Bot resource](https://docs.microsoft.com/en-us/azure/bot-service/abs-quickstart?view=azure-bot-service-4.0&tabs=userassigned), for more information.
    
    *   Check with your MS Azure admin to get the details of the Azure bot.
        
    *   Ensure that this bot is configured to communicate with the Teams channel.
        
    *   Ensure that the bot is registered as a Multi-tenant App. The multi-tenant organization is what enables the Azure Bot Service servers to authenticate requests coming from the bot through Azure servers.
        
    
2.  Publish the Microsoft Teams App that connects with the Azure bot created in Step #1 in your organization. See [Publish to your organization](https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/publish#publish-to-your-organization), for more information.
    
3.  Get the **ID of the Microsoft Teams App** that connects with the Azure bot created in Step #1. This is optional but required if you wish to test the channel configuration or use the same agent to trigger an Outreach campaign in the Avaamo Platform. See [Manage your apps in Developer Portal](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/manage-your-apps-in-developer-portal), for more information.
    
    *   Check with your MS Teams admin to get the App ID.
        
    *   Ensure that you have whitelisted the domain of all the URLs that are rendered inside the Team's web view or Task Module in the Teams App.
        
        *   If you are using [Webview (HTML)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-html), then since the HTML is rendered from the Avaamo platform, the Avaamo Platform domain (`*.avaamo.com`) must be whitelisted in the Teams App.
            
        *   If you are using [Webview (URL)](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-url), then you can mention any external website, as long as the website domain is whitelisted in the Teams App and the URL supports cross-site origin requests. **For example**: In the Card input, you may wish to link an external website say `www.macpizza.com` as a Webview URL. In this case, you must ensure that the same domain (`macpizza.com)` is whitelisted in the Teams App and the URL supports cross-site origin requests.
            
        *   See [Webview in MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#webview-in-ms-teams), for an example.
            
        
    

### 

Outreach

If you wish to use the same agent to trigger an outreach campaign, then ensure that the `TeamsAppInstallation.ReadWriteSelfForUser.All` API Permission is granted to your Azure bot in the Azure portal.

**Key points**:

*   `TeamsAppInstallation.ReadWriteSelfForUser.All` permission allows a Teams app to read, install, upgrade, and uninstall itself to any user, without a signed-in user. See [Application permissions](https://learn.microsoft.com/en-us/graph/permissions-reference#application-permissions-71), for more information.
    
*   The published app manifest must have the `webApplicationInfo` property. The app `Id` given in the `webApplicationInfo` property and the `app Id` used to generate the access token must match. This is as per the Permission guidelines from Microsoft Teams. See [Permissions](https://learn.microsoft.com/en-us/graph/api/userteamwork-list-installedapps?view=graph-rest-1.0&tabs=http), for more information.
    

**For the MS Teams Outreach campaign**:

*   `TeamsAppInstallation.ReadWriteSelfForUser.All` permission is required to trigger install MS Teams App API calls.
    
*   Suppose this permission is not granted by the Azure admin. In that case, the campaign message can still be delivered to the users as long as the user has installed the MS Teams App before triggering the campaign and the user has had any previous conversation with the Avaamo agent via the MS Teams App.
    
*   If this permission is not granted by the Azure admin and the Azure bot is also not installed, then the following message is displayed in the [Campaign statistics](/user-guide/outreach/campaign-statistics) page - "_Either recipient email is not present in the Azure Active Directory or mandatory permissions are not given in the Azure bot._"
    
*   If the user uninstalls the MS Teams App, then the campaign message is not delivered to the user irrespective of the MS Teams App permission.
    
    *   In such cases, the "_Conversation was either blocked or deleted by the user"_ error message is displayed in the [Campaign statistics](/user-guide/outreach/campaign-statistics) page.
        
    *   If you still wish to install the MS Teams App for the specific user, contact Avaamo support for further assistance.
        
    
*   See [Campaign in MS Teams](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel), for more information.
    

### 

Integration (User access token)

If you wish to integrate on behalf of the user with other applications using the user access token, then you must ensure that the following pre-requisites are met:

1.  Ensure that you have configured the Azure bot in the Azure portal with appropriate OAuth connection settings.
    
2.  Ensure that you have successfully connected the Azure bot with the configured SSO settings.
    

See [Configure your app in Azure AD](https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/authentication/bot-sso-register-aad?tabs=botid), for more information.

## 

Deploy your agent to Microsoft Teams channel

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in the **Microsoft Teams** channel and specify the following details:
    

Parameter

Description

Mandatory

Name

Indicates the **Name** used to identify the Microsoft Teams channel.

Mandatory

Language

Indicates the language used in the Teams channel for communication. All the languages configured for the agent are listed here. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

Mandatory

App ID

Indicates the App ID of the Azure bot that is generated when you created a bot in Microsoft Bot Development Framework. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#before-you-begin), for more information.

Mandatory

App Secret

Indicates the Secret key of the Azure bot that is generated when you created a bot in Microsoft Bot Development Framework. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#before-you-begin), for more information.

Mandatory

Directory (tenant) ID

Indicates the Directory or Tenant ID of the Azure bot that is generated when you created a bot in Microsoft Bot Development Framework.

See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#outreach), for more information.

Optional,

Mandatory for Outreach Campaigns. See [Outreach](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel), for more information

Team's App ID

Indicates the ID of the Microsoft Teams App that includes the Azure bot used in configuring the Teams channel. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#before-you-begin), for more information.

Optional

Get user access token

When this option is enabled, the OAuth user access token generated in the Azure bot is available in the `context.user.sso_token` object. You can use this token to access other applications such as Microsoft Graph API on behalf of the user.

*   See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#integration-user-access-token), for more information.
    
*   See [Use case: Get user access token](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams/use-case-get-user-access-token), for an example.
    
*   See [context.user](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user), for more information on the context object.
    

Optional

Enable hero card

By default, MS Teams responses are displayed in the Adaptive Card format. To render responses in the Hero Card format, you can enable the `Enable hero card` option on the MS Teams channel configuration page.

See [Enable hero card](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#enable-hero-card), for more information

Optional

Enable Show more button

By default, a complete response is displayed for the user in the MS Teams channel. This feature is designed for streaming responses and is useful when displaying summarized lengthy responses from LLaMB in the MS Teams channel.

When enabled, it renders a partial response with a `Show more` button. Users can click the button to view the remaining response. This enhances the user experience by quickly displaying partial messages, reducing the wait time for full message rendering.

**Note**: `Show more` option is displayed only when responses are rendered from the LLaMB skill.

Optional

Enable Markdown format

Indicates if Markdown formatting should be applied to LLaMB responses. By default, responses are displayed without Markdown styling. Select this option to enable Markdown formatting.

Custom user authentication

Use this if you wish to enable custom authentication to authenticate users before posting a message via the MS Teams Send API. Note that this option works only with the [MS Teams Send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api).

Toggle the slider to enable and disable it as required.

See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#sms-channel), for more information.

NA

Disable Incoming Request Authorization

By default, the platform authenticates all requests from Microsoft Azure. You can now choose to disable this authentication using this option.

*   By default, the checkbox is enabled, enforcing strict validation. When enabled, such requests will return a 400 Bad Request response.
    
*   If unchecked, unauthorized requests triggered directly from a browser or third-party source will be blocked with a 403 Forbidden response.
    

*   Click **Save**. An endpoint URL is generated. Copy the URL and specify the endpoint in your Azure portal. Contact your MS Azure admin to configure the endpoint URL in the Azure bot.
    
*   Additionally, some sample scripts with POST requests are also generated by the Platform that can be used as a reference to POST MS Teams messages from the channel. See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.
    

## 

Test channel

**Pre-requisite**: Ensure that you have installed the MS Teams App in the local environment where you wish to test the channel.

After you save the channel configuration settings, click **Test.** The Team App is launched in the new tab. You can now send queries and test the channel as per the conversation flow designed in your agent.

## 

Agent typing indicator

Agent typing indicator is an indicator displayed to the user while they wait for the agent's response. Typically, this is useful when you have external API calls to generate agent responses where you can expect some delay in responses. This enhances the user experience interacting with the Avaamo agent in the MS Teams channel.

**Key points:**

*   When the agent response contains multiple replies, then the typing indicator is visible only for the first agent reply.
    
*   There is a default timeout of 20 seconds for the typing indicator. If the agent replies in 2 seconds, then the typing indicator gets disabled in 2 seconds. If the agent fails to reply to the user query, then the typing indicator is visible for 20 seconds.
    

## 

Enable hero card

By default, MS Teams responses are displayed in the Adaptive Card format. To render responses in the Hero Card format, you can enable the `Enable hero card` option on the MS Teams channel configuration page.

This functionality proves beneficial when dealing with numerous responses containing embedded HTML code within the card's title or description. As this is not supported in the Adaptive Card format, toggling `Enable hero card` option allows HTML tags to be rendered as-is in the MS Teams channel using Hero cards.

**Key points**:

*   When the response includes input form elements, it is rendered using Adaptive Cards, regardless of whether the `Enable Hero Card` toggle is enabled or not.
    
*   Certain elements are not compliant in MS Teams when using Hero cards. See [Microsoft Teams Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance), for more information.
    
*   Based on the business requirements, if you have a higher volume of responses that need to adhere to the Adaptive Card format, it is advisable not to enable the `Enable Hero Card` toggle. Instead, selectively render Hero Card responses using JavaScript as needed. See [Hero card support using JS](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#hero-card-support-using-js), for more information.
    
*   Listview responses in Hero card are rendered as a Carousel in the MS Teams channel.
    
*   Buttons are shown stacked at the bottom of the card. Button text is always on a single line and is truncated if the text exceeds the button width. Any additional buttons beyond the maximum number supported by the card are rendered in a Carousel. See [Add buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
    
*   See the following links for more information
    
    *   [Properties of a Hero card](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference#properties-of-a-hero-card)
        
    *   [Types of cards](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference?source=recommendations#features-that-support-different-card-types)
        
    *   [Format cards with HTML](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cdesktop%2Csimple-html#format-cards-with-html)
        
    

## 

Hero card support using JS

You can add customized cards such as **Hero cards** in the Avaamo Platform to be rendered in the MS Teams channel. This enables you to create rich text responses such as Cards, ListView, and Carousels in the MS Teams channel.

**Key point**: Hero cards response supports language translation. This implies that you can render rich card elements using Hero cards in all the languages supported in the Avaamo Platform. See [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information.

**To add a Hero Card in the agent response**:

1.  Add a Javascript (JS) response type in the skill response window. See [Add skill messages](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#javascript), for more information on how to add a JS response type.
    
2.  The format to use the Hero cards remains the same as supported in the MS teams. The only addition is to wrap the JSON of Hero cards in `CustomTeamsMessage` object. See [Hero cards in MS teams](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference#hero-card), for more information.
    

#### 

Example 1: Card response

The following illustration represents how the card is rendered in the MS teams channel:

#### 

Example 2: Carousel response

The following illustration represents how the carousel is rendered in the MS teams channel:

#### 

Example 3: Hero card language support

Consider that you have configured your agent in the French language. In the agent conversation, you switched the language to French. The following illustration represents the Hero card response rendered in the MS teams channel in the French language:

## 

Webview in MS Teams

**Pre-requisite**: Ensure that you have whitelisted `*.avaamo.com` in the Teams App where you wish to render the HTML. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#before-you-begin), for more information.

Consider the following Webview (HTML) example in a Card response:

The following is the HTML snippet that you wish to render:

When the user clicks the **Book Course** button, then the Webview is rendered as follows in the MS teams App:

## 

Streaming in MS Teams

**LLaMB's streaming** responses in Microsoft Teams are designed to break down lengthy agent replies into manageable parts. This feature includes a "**Show more**" button, enabling users to expand content gradually. This approach enhances clarity and streamlines the user experience effectively.

## 

Microsoft Teams Compliance

Microsoft Teams offers several content templates to display information in a conversational UI. To ensure that conversation flows can be more quickly and accurately translated to the MS Teams chatbot UI, it is important to understand the elements that are not compliant with the MS Teams channel.

The following is a list of non-compliant elements in Adaptive and Hero cards when rendered in the MS Teams channel:

Adaptive cards

Hero cards

*   [Persistent Menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu)
    
*   [Information Masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking)
    
*   [Collect Feedback](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#collect-feedback)
    
*   [File Upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload)
    
*   [Compact, Tall, and Full view for Webview.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/create-custom-html-web-views)
    
*   [Input fields Format attribute.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time)
    
*   [List View top element style only supported when Image is passed to the item.](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#listview)
    
*   [Location and Date buttons on a card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons).
    
*   hint attribute in [Single line text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/single-line-text) and [Multi-line text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/multi-line-text) card responses.
    
*   [disable\_weekends attribute for the date](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time).
    
*   [Date Picker link for Quick Reply.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply)
    
*   [JS card with type: "date\_time", only supported type is "date"](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time).
    
*   [Answers skill response with Accordion view.](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill) (Carousel view is displayed instead)
    
*   [Buttons on the card can show the label up to 45 characters.](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#card)
    
*   [Embedded HTML for labels](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#card): HTML code inside the title or description of a card.
    
*   See [Types of cards](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference?source=recommendations#features-that-support-different-card-types), for more information.
    

*   [Persistent Menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu)
    
*   [Information Masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking)
    
*   [Collect Feedback](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#collect-feedback)
    
*   [File Upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload)
    
*   [Compact, Tall, and Full view for Webview.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/create-custom-html-web-views)
    
*   [Input fields Format attribute.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time)
    
*   [Location and Date buttons on a card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons).
    
*   hint attribute in [Single line text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/single-line-text) and [Multi-line text](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/multi-line-text) card responses.
    
*   [disable\_weekends attribute for the date](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time).
    
*   [Date Picker link for Quick Reply.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply)
    
*   [JS card with type: "date\_time", only supported type is "date"](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/date-and-time).
    
*   [Answers skill response with Accordion view.](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill) (Carousel view is displayed instead)
    
*   [Buttons on the card can show the label up to 45 characters.](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#card)
    
*   [Carousel view is displayed for ListView. Top element style is not supported.](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view)
    
*   [Webview HTML is not supported.](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-html)
    
*   When the response includes input form elements, it is rendered using Adaptive Cards, regardless of whether the `Enable Hero Card` toggle is enabled or not. See [Form elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information.
    
*   Buttons are shown stacked at the bottom of the card. Button text is always on a single line and is truncated if the text exceeds the button width. Any additional buttons beyond the maximum number supported by the card are rendered in a Carousel. See [Add buttons](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons), for more information.
    
*   See the following links for more information
    
    *   [Properties of a Hero card](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference#properties-of-a-hero-card)
        
    *   [Types of cards](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference?source=recommendations#features-that-support-different-card-types)
        
    *   [Format cards with HTML](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cdesktop%2Csimple-html#format-cards-with-html)
        
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect, and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams/use-case-get-user-access-token

This article describes a use case to demonstrate the usage of `Get user access token` configuration option in the MS Teams channel. It explains how to integrate with Microsoft Graph API on behalf of the user in the Avaamo Conversational AI Platform using the user access token.

### 

Pre-requisite

You must deploy your agent in the MS Teams channel with the `Get user access token` enabled. See [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

### 

Agent implementation

Consider that you wish to use the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) and access your information. Since you have enabled `Get user access token` option in the MS Teams channel, you can now access the API using the user access token available in the `context.user.sso_token` property.

The following is a sample code demonstrating the usage of the user access token and how the same token can be used to access other applications on behalf of the user:

Copy

    let resp = fetch("https://graph.microsoft.com/v1.0/me", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${context.user.sso_token}`
        }
    }).then(e => e.json()).then(e => e);
    resp = await (resp);
    console.log("user", context.user);
    console.log("resp", resp);
    return resp;

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance.

The Facebook channel configuration on the Avaamo platform helps you deploy your agent on your Facebook page.

You can [configure the Facebook channel](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/untitled) on your agent to use the features supported by the Avaamo platform:

*   [Facebook file caching](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-buttons#facebook-file-cache): You can upload media files such as a video or an image or a GIF on your agent for the users to play and view the file multiple times with no buffering or streaming.
    
*   [1:1 aspect ratio for images](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/image-aspect-ratio-facebook): You can upload images with the 1:1 aspect ratio that displays as a square image.
    
*   [Camera button](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-buttons#camera-button): You can add a camera button for users to open the camera.
    
*   [Handover protocol](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/handover-protocol-integration-facebook): You can enable two or more Facebook apps to participate in a conversation by passing control of the conversation between them.
    
*   [Manual Configuration](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-channel-manual-configuration): You can manually configure the Facebook channel on the Avaamo platform for new apps.
    
*   [Personas](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/persona-configuration): You can create different avatars for the agent.
    
*   [Send scheduled messages](/user-guide/ref/avaamo-platform-api-documentation/message-api): You can schedule messages (using message API) to be displayed on your agent for the users who are subscribed to the Facebook page.
    

**Notes:**

*   Audio and video responses are not supported in the Facebook channel
    
*   If you have more than one message in the response, then it is recommended to either
    
    *   Add delays between messages in the response, or
        
    *   Split it into two response messages, so that the responses get delivered in the proper sequence when sent to the Facebook channel.
        
    
    Though the messages are sent sequentially from the Avaamo Platform to the Facebook channel, the FB channel processes this asynchronously, and hence sequencing cannot be assured. The amount of delay to be added between messages is by the trial and error method.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/untitled

The agent developed on the Avaamo platform can be deployed on different channels. Facebook is a popular social media platform. You can deploy your agent on Facebook by clicking on the **Channels** tab on the Visual Editor.

*   Select Facebook Messenger. You will be redirected to see the Facebook Login page.
    
*   Enter the **login details** of the account you would like to use, to deploy the agent.
    
*   Give the necessary permissions for the Avaamo platform to access the Facebook page. On the **Connect** popup window:
    

*   Select the **Default Locale** for the agent.
    
*   Select the Facebook Page to deploy the agent.
    
*   Click on **Save** to deploy the agent.
    

Now, the Facebook Messenger will have the agent deployed and options to **View** and **Test** the agent. By clicking on View, you can see the settings that you have configured for the agent. To test the agent, click **Test** and the agent opens in Facebook in a new window.

Here you can test the agent as an end-user.

**Note**: You can manually configure the Facebook channel by adding a new application. [Read more](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel).

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-channel-manual-configuration

The agent developed on the Avaamo platform can be deployed on different channels. Facebook is a popular social media platform. You can deploy your agent on Facebook by clicking on the **Channels** tab on the Visual Editor.

**Note**: You can also configure the Facebook channel without creating a new application. [Read more](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel).

Here, let us configure the Facebook Channel manually to add your application.

*   Open a browser and go to [developer.facebook.com](https://developers.facebook.com/)
    
*   Login with your Facebook login credentials.
    
*   Click on **My Apps** and select your product.
    
*   Click on **Create a New App**.
    

*   Enter a **Display Name**.
    
*   Click on **Create App ID**.
    
*   In the **Settings -> Basic** page, select the checkbox for **Get Started with the Pages API** and click on Confirm.
    

*   Now, you can add an App Icon, Enter the Avaamo URL for Terms of Service URL and Privacy Policy URL. You can also choose a category, and make the required changes. And click on **Save Changes**.
    

### 

**Page Access Token**

The manual configuration of the Facebook Messenger as a channel on the Avaamo platform requires a Page Access Token. To generate a token on [developers.facebook.com](https://developers.facebook.com/) and configure the same on Avaamo UI follow the steps below:

*   Click on **Dashboard** on the left pane and go to **My Products**.
    

*   Click on **Settings** under Messenger. Under **Token Generation** select the page you want to create the token for (from the drop-down list) and the **Page Access Token** is generated.
    

Now, on the Avaamo UI, go to the Visual Editor and click on Channels. Click on Connect under Facebook Messenger.

On the popup window, select the slider for Yes to enable **Manual Configuration**.

*   Enter the Page Name of the Facebook page.
    
*   Enter the App ID of the Facebook page.
    
*   Enter the Page Access Token, and click on Save. The Channel Settings are saved and the Webhook URL is generated.
    

### 

**Webhook**

The Webhook setup requires the Callback URL from the Avaamo platform. So, on the Channels page click on **View** under Facebook Messenger. The Channel Settings popup window has the Webhook URL details required to set up Webhook on [developers.facebook.com](https://developers.facebook.com/).

To set up the Webhook URL, click on **Dashboard** on the left pane and go to **My Products**. Click on Settings under Messenger.

Under Webhooks, click on **Setup Webhooks**.

On the New page Subscription popup window,

*   Enter the Callback URL and Verify Token from Channels page on Avaamo UI.
    
*   Select the checkboxes under **Subscription Fields**, and click on **Verify and Save**.
    

Subscribe to the page under Webhooks and you are ready to use your agent on Facebook Messenger.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/handover-protocol-integration-facebook

The Facebook Messenger Platform's handover protocol enables two or more Facebook apps to participate in a conversation by passing control of the conversation between them. This feature can be used in many ways to enrich your agent experience on the Messenger. For example, this protocol makes it possible for a Page to simultaneously use one Facebook app to build an agent for handling automated responses, and another Facebook app for customer service with live agents.

#### 

Prerequisites

To use the handover protocol, you must assign only one app with the Primary Receiver role and at least one app the Secondary Receiver role on your Facebook Page settings.

Learn how to create a Primary App on the [_https://developers.facebook.com/_](https://developers.facebook.com/)_._

## 

Generate API Token

The user needs to generate an API Token to use the Handover Protocol on Facebook for Developers portal. This token is then used on the Avaamo UI to generate the Webhook URL. To generate the token:

*   Login to your account on Facebook for Developers portal.
    
*   Click on Create Page, to create a new page on your Facebook account.
    

*   Enter the Display Name and Contact Email to Create a New App ID.
    

*   Go to the Primary App Dashboard and under the “Add a Product ” section, click on “Set Up” under Messenger.
    

*   On the Token Generation popup window, select the Facebook page, and generate the Page Access Token.
    

Copy the Page Access Token, this will be added on the Avaamo UI under the Facebook channel to generate the Webhook token.'

## 

Generate Webhook Token

*   In the **Agent** page, navigate to the **Configuration -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in Facebook Messenger.
    
*   On the popup window, enable the switch to Yes for Manual Configuration and Reuse Videos.
    

*   Enter the Page Name, Page ID, and Page Access Token values from the Facebook page and app.
    
*   Click Save.
    

Once you click save, it will generate the Webhook URL and Verification Token.

Copy and save the Webhook URL to setup Webhook on your Facebook app.

## 

Set up Webhooks

To set up the Webhooks, go to your Facebook app and under Webhooks section click on Setup Webhooks.

Select all the subscription fields, enter the Webhook URL and access token from the manual configuration on the Avaamo UI and click on Verify and Save.

Select your page from the drop-down and click on "Subscribe".

Under App Review for Messenger, add the submission of pages\_messaging.

For a Secondary app, create the secondary app on your Facebook account and follow the same steps with the secondary agent. And connect to the agent to the secondary app on the same Facebook page.

Go to your Facebook page and click on Settings then go to Messenger Platform.

Under Connected Apps, you will have primary and secondary apps. Now, click on Configure.

Select your preference for the primary and secondary app.

**Note**: By default, all messages are sent to the Primary Receiver app. When control of the conversation is passed to another, the Messenger Platform will send messages from the conversation to it instead. Only one app may control the conversation at a time.

Now, from Avaamo agents we need to switch the agent's response based on user queries for the response.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/persona-configuration

The Facebook channel integration on the Avaamo platform supports creating new and fun **Personas** for your agent, deployed on your Facebook page. Personas are like the different avatars that you can assign to your agent.

#### 

**Prerequisites**

Let us create a fun persona for our agent, ensure you have the following:

*   Admin access to your Facebook page.
    
*   Images that need to be used as agent avatars.
    
*   Access to the agent to configure personas.
    

**Note**: This persona concept is available only on the Facebook channel.

## 

Configure Persona on Avaamo Platform

You would need to configure the persona for the agent on the Avaamo platform by using javascript code or by selecting the persona option under agent skill's responses.

### 

Javascript Code

To add Facebook persona feature to your agent using the javascript code, follow the steps below:

*   In the **Agent** -> **Configuration -> JS files** tab, click **Add new**.
    
*   Specify the name of the JS file and click **Create**.
    
*   A new empty JS file is created. In the **Scripts** page, click the JS file and add the code as required.
    

Copy

    if(!Storage.global.get("Jerry")){
      let Jerry = await(Facebook.findOrCreatePersona({name: "Jerry", profile_picture_url: "https://i.pinimg.com/originals/c0/16/7f/c0167fe13c1217112025cc41ae20abfc.jpg"}));
      Storage.global.set("Jerry", Jerry.id);
    }

*   Click Save.
    
*   In the **Agent** -> **Skills** tab select the required skill.
    
*   In the **Dialog skill** page, click the **Implementation** tab.
    
*   Click on the intent and on the user intent window, enable the switch to **Yes** for post-processing.
    

*   For the Post-processing Script enter the javascript code.
    

*   Click on Save to add the javascript code to the agent flow.
    

### 

Persona Button

To add the Facebook persona feature to your agent using the persona button, follow the steps below:

*   In the **Configuration -> Settings** tab, click on **Add New** in Persona section.
    
*   Enter the name of the persona and upload a persona avatar.
    

*   Click on the dialog designer tab and click on the skill response where you want to add the persona feature. Click on the plus icon and select **Switch Persona** from the list.
    

*   On the right panel, under persona, select the persona you want your skill to switch.
    

## 

Agent on Facebook

When the agent is deployed on the Facebook channel, the persona will be available to the end-user. When the end-user query matches with the ‘User Intent’, then the responding agent persona avatar will change as per the persona configured.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/image-aspect-ratio-facebook

The preferred aspect ratio of images for social media channels is the 1:1 aspect ratio. The Avaamo platform supports the uploading of the images in a 1:1 aspect ratio to get the square images.

To upload images in the 1:1 aspect ratio on the Avaamo platform:

*   In the **Dialog skill** page, click the **Implementation** tab.
    
*   In the conversation flow tree, click **Add skill response**.
    
*   Enable the slider button to **Yes** for upload.
    
*   Click on the upload button and select the image.
    

*   Select 1:1 from the drop-down list on the top. Click on Done and then, click on OK to save the image upload.
    

**Note**: The same process can be followed to upload an image in the 1:1 aspect ratio for a carousel agent response.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-buttons

The Facebook file caching slider button helps you upload media files such as videos or images or a GIF on your agent for the end-users to play and view the file multiple times with no buffering or streaming.

To access the button:

*   Click Channels, and click on connect under Facebook Messenger.
    
*   On the Connect popup window, enable the slider for "Use Facebook file caching for images, GIFs and videos" to Yes.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-messenger-compliance

Facebook Messenger offers several content templates to display information in a conversational UI. It is important to understand the specifications of these templates so that conversation flows can be more quickly and accurately translated to the Messenger chatbot UI.

### 

**Text bubble**

Used for simple text and conversations. Can be used to display the largest blocks of text for all content types:

*   Upto 640 characters, which is by far the largest text container.
    
*   No support for rich text such as bolding, italics, color, etc.
    
*   No URL linking within the text bubble (except for tel #s). However, you can add up to 3 link buttons to the bottom of the text message.
    
*   Each text message can contain a max of 640 characters
    
*   Upto 3 buttons can be added to a text message
    

See [Text responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#text), for more information on building text response in your agent.

### 

**Cards & Carousels**

**Note**: See [Generic Template Reference](https://developers.facebook.com/docs/messenger-platform/reference/templates/generic), for more information on limitations from the Facebook Messenger.

For displaying products and services and a quick summary:

*   Allows for an image
    
*   The title has an 80 character limit
    
*   The subtitle has an 80 character limit
    
*   Buttons is limited to 3
    
*   Up to 5 carousel items allowed
    

See [Card](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#card) and [Carousel](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#carousel) response, for more information on building card and carousel response in your agent.

### 

**List Template**

Good for showing FAQs and items that require more text than offered in cards (80 vs 20 characters). See [ListView](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#listview) response, for more information on building ListView response in your agent.

Currently, ListView is displayed as [Carousel](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/facebook-messenger-compliance#cards-and-carousels) in the Facebook Messenger channel, since ListView is not supported in FB Messenger.

### 

**Quick Replies**

A very space-efficient and quick way to move through flows.

*   Button title has a 20 character limit. Beyond 20 characters, the button title gets truncated.
    
*   After a button is clicked it disappears
    
*   You can have upto 10 quick reply buttons
    
*   Note that the Location button in Quick replies is deprecated by Facebook. See [https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies#locations](https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies#locations), for more information.
    

See [Quick reply](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#quick-reply) response, for more information on building a Quick reply response in your agent.

### 

**Persistent menu**

A **Persistent menu** allows you to specify menu options that are always available to the user. Having a persistent menu easily communicates the basic capabilities of your agent for first-time and returning users.

*   Menu items are limited to 3 for the top level, and 5 items for any submenus.
    
*   The title is limited to 30 characters
    
*   You can have at most 3 hierarchical levels of menu\_item in total
    

See [Add persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu), for more information.

### 

**Webview**

Using webviews, you can augment your agent's user experience with features that might be difficult to offer using only message bubbles.

*   A good way to handle lots of text
    
*   Ability to link to a website
    
*   Scrolls
    
*   Rich formatting (its a webpage)
    

See [WebView](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-buttons#webview-url), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/skype

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

**Skype for Business** (formerly **Microsoft Lync** and **Office Communicator**) is an enterprise instant messaging software developed by **Microsoft** as part of the **Microsoft Office** suite. It is designed for use with the on-premises Skype for Business Server software, and software as a service version offered as part of Office 365. It supports text, audio, and video chat, and integrates with Microsoft Office components such as Exchange and SharePoint.

The agents developed on the Avaamo platform can be deployed on the Skype for Business channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/skype#before-you-begin)
    
2.  [Deploy your agent to Skype for Business channel](/user-guide/how-to/build-agents/configure-agents/deploy/skype#deploy-your-agent-to-skype-for-business-channel)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/skype#manage-channel-settings)
    

## 

**Before you begin**

*   You must create a bot in Microsoft Bot Development Framework. See [Microsoft Bot Framework](https://dev.botframework.com/), for more information.
    
*   Note down the **Application ID** and **Secret key** generated when you create a bot in Microsoft Bot Development Framework. This is later required when you deploy your agent on the Skype for Business channel in the Avaamo Platform.
    

## 

Deploy your agent to Skype for Business channel

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in **Skype for Business** channel.
    
*   Specify the **Application ID** and **Secret key** generated when you created a bot in Microsoft Bot Development Framework. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/skype#before-you-begin), for more information.
    
*   Add the bot registered on MS Bot Framework to the Skype for Business environment. See [Add a bot to Skype for Business](https://docs.microsoft.com/en-us/skype-sdk/skype-for-business-bot-framework/docs/overview#add-a-bot-to-skype-for-business), for more information.
    

## 

Supported Versions ( Limitations )

The Skype for Business channel works with Skype for Business Online and Skype for Business Hybrid environments only. See [Supported Skype for Business versions](https://docs.microsoft.com/en-us/skype-sdk/skype-for-business-bot-framework/docs/overview#version-suport), for more information.

### 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp

WhatsApp Messenger is a freeware and cross-platform messaging with Voice over IP (VoIP) service. The application runs from a mobile device but is also accessible from desktop computers; the service requires its users to provide a standard cellular mobile number.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

The agents built on the Avaamo Platform can be deployed on WhatsApp. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#before-you-begin)
    
2.  [WhatsApp Registration](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#whatsapp-registration)
    
3.  [Deploy your agent to WhatsApp channel](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#deploy-your-agent-to-whatsapp-channel)
    
4.  [WhatsApp Business API Configuration](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#whatsapp-business-api-configuration)
    
5.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#manage-channel-settings)
    

## 

Before you begin

The process to integrate WhatsApp with the Avaamo platform requires the prerequisites of the **WhatsApp Setup** (business and technical) and **Avaamo Integration**.

### 

**WhatsApp Business Setup**

*   [Set up your WhatsApp Account on the Facebook Business Manager](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#set-up-your-whatsapp-account).
    
*   [Add a Phone Number to your WhatsApp Account](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#phone-number).
    
*   [Add a Verified Name to your WhatsApp Account](/user-guide/how-to/build-agents/configure-agents/deploy/whatsapp#add-verified-name).
    

#### 

**Set up your WhatsApp Account**

Login into your **Facebook Business Manager** account to set up the WhatsApp account.

**Note**: See [Create a WhatsApp Account](https://www.facebook.com/business/help/2087193751603668?id=2129163877102343), for detailed information on setting up the WhatsApp account.

#### 

**Phone Number**

Every WhatsApp account must have a phone number. The phone number that you intend to use with WhatsApp must have no previous registration or affiliation with WhatsApp. There are three types of phone numbers you can use for this product:

*   Landlines - The landline numbers can be used if the developers have access to them and can answer a phone call if required during the setup process.
    
*   Cellular - The cellular numbers can be used only if the number has not been used on WhatsApp in the last 6 months.
    
*   1-800 or toll-free numbers - The toll-free numbers can be used only if the number is capable of receiving SMS or voice calls directly. You cannot use numbers that are behind an IVR. (If you have a phone number already registered using a manual code before, then it continues to work normally.)
    

**Note**: See [Connect your phone number to your WhatsApp Business API account](https://www.facebook.com/business/help/456220311516626?helpref=faq_content#), for detailed information on adding a phone number to the WhatsApp account.

#### 

**Add Verified Name**

The WhatsApp account must have a verified name added to it. The verified name can be a maximum of 256 characters and must not contain an emoticon or any variation of the word "WhatsApp".

**Note**: See [Verified Name Guide](https://developers.facebook.com/docs/whatsapp/guides/vname#set-up), for detailed information on adding a verified name to the WhatsApp account,

### 

**WhatsApp Technical Setup**

The successful integration of WhatsApp as a channel with the bot developed on the Avaamo platform is the deployment of the **WhatsApp Business API Client** software. This software can be deployed on the customer premise, within a docker container or in an instance within AWS (Amazon Web Services). This is evaluated based on the restrictions imposed by your network security requirements.

**Note**: See [network requirements](https://developers.facebook.com/docs/whatsapp/guides/network-requirements) to consider your deployment option.

#### 

**Environment Setup**

The WhatsApp Client Software needs to run on a **Container** platform that helps create a channel connected to the **Avaamo** platform. For example:

*   Docker EE or Docker CE, or
    
*   Containers-as-a-Service (CaaS) such as Amazon Elastic Container Service (ECS) and the WhatsApp Client Docker image, or
    
*   Deploy WhatsApp Client on an AWS instance.
    

**Docker**

The WhatsApp Client Image requires a [Docker,](https://www.docker.com/) a container platform that lets you run the WhatsApp Business API Client. A [Docker Compose](https://docs.docker.com/compose/) is also required. Docker Compose is bundled with Docker for macOS and Windows but it requires a separate installation on Linux.

**Note**: See [Installation and Upgrading](https://developers.facebook.com/docs/whatsapp/guides/installation), for detailed information on installing the WhatsApp Business API Client using Docker Compose,

**AWS**

For the customers who wish to deploy the WhatsApp Business API Client using Amazon Web Services(AWS) must set up a valid AWS account and be familiar with working on AWS.

**Note**: See [Deploying the WhatsApp Business API with Amazon Web Services](https://developers.facebook.com/docs/whatsapp/aws), for detailed information on deploying the WhatsApp Business API Client using AWS

## 

WhatsApp Registration

The WhatsApp Registration requires a Phone Number and Verified Name Certificate. Details on creating the Verified Name Certificate is found in the section [Phone Number and Name Certificate](https://developers.facebook.com/docs/whatsapp/api/account). The phone number and verified name certificate are then used to complete the registration with the WhatsApp Business API Client.

WhatsApp Business API Client provides a REST interface to perform the registration. The end-point is where you either have the Docker image running or AWS Instance IP address.

Follow the steps below to register WhatsApp for the Avaamo platform:

1.  Initial login to change the admin password
    
2.  Login using new admin password
    
3.  Create a non-admin user for use by the Avaamo platform
    
4.  Request registration code
    
5.  Register account with registration code
    

For the example (using cURL) that follow assume the following credentials: Admin User => admin Admin Password => conversation123 User => channel User Password => channel123 End-Point => myhost.com:9090

#### 

**Initial Login and Setting Password**

The initial login and password setup requires the admin password to be changed, prior to performing any of the registration steps. This is performed by:

Here, the Basic Authentication is used as given by the header:

Where the authentication string is formed by base64 encoding of “admin:secret” that are the credentials by default. Base64 encoding is easily performed by [base64encode](https://www.base64encode.org/).

#### 

**Login Using New Password**

Login to your account with the new password to access the bearer token:

This returns the following output that contains the bearer token:

#### 

**Create User**

You can create a new user on WhatsApp by using the following code:

The bearer token value is from the previous call that logged in the admin user.

#### 

**Requesting a Registration Code**

The Registration code is returned by submitting the phone number and verified name on WhatsApp. The code is sent via voice or SMS (depending on your request). The example below is the call request of the registration code via voice:

#### 

Account Registration

The final step is to perform the actual account registration:

## 

Deploy your agent to WhatsApp channel

The WhatsApp account is set up and registered. Now, let us integrate the WhatsApp channel with the Avaamo platform.

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in the WhatsApp channel.
    

*   Specify the following details:
    
    *   The **Channel Name** is the phone number registered with the WhatsApp account.
        
    *   The **Webhook URL** is the end-point of the WhatsApp Business API client.
        
    *   The **Connection Credentials** are the base64 encoding of the user-created within the WhatsApp Business API client.
        
    *   Click **Save**.
        
    

Now, click view under WhatsApp to open the Configuration window to get the WhatsApp Webhook URL. Make a note of the URL. This is the URL you must specify in the WhatsApp Business API Configuration:

## 

WhatsApp Business API Configuration

Login into the WhatsApp Business API Client account using the admin credentials to add the WhatsApp Webhook URL.

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/sms

SMS (short message service) is a text messaging service component of most telephone, internet, and mobile-device systems. It uses standardized communication protocols to enable mobile devices to exchange short text messages. SMS is also employed in mobile marketing.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance.

The agents developed on the Avaamo platform can be deployed on the SMS Channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#overview)
    
2.  [Deploy your agent to SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms#deploy-your-agent-to-sms-channel)
    
3.  [Deploy in multiple SMS channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/sms#deploy-in-multiple-sms-channel-instances)
    
4.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/sms#manage-channel-settings)
    

## 

**Before you begin**

*   Customers must have the SMS channel functionality enabled for their dashboard.
    
*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu. On the Channels page, click **Connect** in SMS Channel. If the SMS channel is not enabled, the following message is displayed:
    

*   Contact support@avaamo.com to enable the SMS channel.
    

## 

**Deploy your agent to SMS channel**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   In the Channels page, specify the following parameters and click **Connect**.
    

Parameters

Description

Maximum length

Channel name

Specify a name to identify the web channel. Channel name allows you to identify the SMS channel and is useful when you wish to deploy your agent in multiple web channels.

Note that the channel name must be unique and is mandatory.

50

characters

Custom user authentication

Use this if you wish to enable custom authentication to authenticate users before posting a message via the SMS Send API. Note that this option works only with the [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api).

Toggle the slider to enable and disable it as required.

See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#sms-channel), for more information.

NA

*   A phone number is **auto-generated** by the Avaamo platform. This is the number from which the SMS message is sent to the users. If you wish to have a different number other than the one generated by the platform, then contact Avaamo Support for further assistance.
    
*   Additionally, some sample scripts with POST requests are also generated by the Platform that can be used as a reference to POST SMS messages from the channel. See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.
    
*   To **test** the channel, send an SMS with an end-user query to the phone number displayed in the SMS channel.
    

## 

Deploy in multiple SMS channel instances

Avaamo Platform allows you to deploy "one" agent across multiple instances of the SMS channel. This allows you to maintain different user sessions, and manage security for each SMS channel instance separately.

**To deploy your agent in multiple instances of SMS channel**:

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in SMS Channel and follow the steps in [Deploy your agent to SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms#deploy-your-agent-to-sms-channel) to deploy your agent into another instance of the SMS channel.
    

The following illustration depicts two SMS channels configured for the same agent. One SMS channel has Custom user authentication enabled and the other channel is without custom user authentication:

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace

Facebook Workplace is a work collaboration tool built from Facebook. The Workplace helps teams and organizations collaborate efficiently wherever they work. See [Integrating with Workplace](https://developers.facebook.com/docs/workplace/introduction), for more information.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

The agents developed on the Avaamo platform can be deployed on Facebook Workplace. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace#before-you-begin)
    
2.  [Integrating your Facebook Workplace bot with Avaamo agent](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace#integrating-your-facebook-workplace-bot-with-avaamo-agent)
    
3.  [Testing Integration](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace#test-integration)
    
4.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace#manage-channel-settings)
    

## 

Before you begin

**Pre-requisite**:

*   The customer requiring the deployment of Avaamo agent on Facebook Workplace has already set up a Facebook workplace account.
    
*   Custom integration is set up in the Facebook Workplace for integrating your Facebook Workplace bot with an Avaamo agent. See [Custom Integrations](https://developers.facebook.com/docs/workplace/custom-integrations-new/), for more information.
    

Ensure that you get the following information from the customer before deploying the Avaamo agent on Facebook Workplace:

*   **App Secret, App ID, and Access Token**: This information is available in the Admin panel of the Facebook Workplace bot when you set up a custom integration. See [Custom Integrations](https://developers.facebook.com/docs/workplace/custom-integrations-new/), for more information.
    

*   **Page ID and Company Domain:** This information is available when you access the page that is created when you set up a custom integration. This is visible within your Workplace community. You can get the Page ID and Company Domain from the page URL:
    

## 

**Integrating your Facebook Workplace bot with Avaamo agent**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy an agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in the Facebook Workplace channel.
    
*   Specify all the details in the pop-up page and click **Save**. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-workplace#before-you-begin), for more information on how to get these details.
    

## 

Test integration

After saving the Facebook Workplace channel details in the Avaamo platform successfully, your agent is ready to be tested in the Facebook Workplace:

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Test** in the **Facebook Workplace** channel.
    

*   This launches the Facebook page "https://<<Company Domain>>.workplace.com/chat/t/<<Page ID>>". Note that here Company Domain and Page ID are the details that you have specified
    
    during the integration of your Facebook Workplace bot with Avaamo agent.
    
*   On the Facebook page, you can test the queries corresponding to your Avaamo agent and check if you are receiving appropriate responses.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/alexa

Amazon Alexa, known simply as Alexa, is a virtual assistant AI technology developed by Amazon. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system. Users are able to extend the Alexa capabilities by installing "skills".

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

The agents developed on the Avaamo platform can be deployed on Amazon Alexa. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#before-you-begin)
    
2.  [Creating an Alexa skill in the Amazon Developer Console](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#creating-an-alexa-skill-in-the-amazon-developer-console)
    
3.  [Connecting your Alexa skill to an Avaamo agent](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#connecting-your-alexa-skill-to-an-avaamo-agent)
    
4.  [Testing Integration](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#test-integration)
    
5.  [Publishing Alexa Skills](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#publish-alexa-skills)
    
6.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#manage-channel-settings)
    

## 

Before you begin

Ensure you have the following information that is required for connecting your Alexa skill to your agent:

*   **Invocation Name** – This phrase is usually just the name of the company and it is used for invoking the agent through Alexa. For example, you can say, "Alexa, ask \[invocation name\]."
    
*   **Endpoint URL** – This is used to connect Alexa to the agent. To get the endpoint URL:
    
    *   Select the "Channels" tab on the navigation bar
        
    *   Find the Amazon Alexa channel
        
    *   Click View
        
    *   Copy the Endpoint URL that is displayed in the pop-up window.
        
    
*   **JSON text (or .json file)** – You can copy and paste the following JSON text. Ensure you change the invocation name (replace "tutorial" with "\[your invocation name\]").
    

**Key Point**: The following example is a CATCH\_ALL scenario just for demonstration purposes. Ideally, you must define specific intents that must be used in the Alexa skill. See [Create the Interaction Model for Your Skill](https://developer.amazon.com/en-US/docs/alexa/custom-skills/create-the-interaction-model-for-your-skill.html), for more information.

## 

Creating an Alexa skill in the Amazon Developer Console

Visit the [Alexa Skills Kit Developer Console](https://developer.amazon.com/alexa/console/ask) and sign in if necessary. If you do not already have an Amazon Developer Account, you must first create an account [here](https://developer.amazon.com/).

**To create an Alexa skill in the Amazon Developer Console**:

*   Open [Alexa Skills Kit Developer Console](https://developer.amazon.com/alexa/console/ask) and click **Create Skill**. Note that if you wish to update a skill that you have already created, click the required skill in the list and skip to Step 4.
    

*   In the **Create new skill** page, specify the skill name, select **Custom** model, and click **Create Skill**.
    

*   In the Template page, select **Start from scratch** template and click **Choose**.
    

*   In the **Custom template** page, click **JSON Editor**. Paste the JSON code as specified in the Before you begin a section and click **Build Model**. Note that the invocation name in the JSON must be unique.
    

*   After the build is successful, a notification message is displayed. The next step is to configure the endpoint to connect your Alexa skill with the Avaamo agent.
    

## 

Connecting your Alexa skill to an Avaamo agent

In the **Custom Template** page, click **EndPoint.** Select **HTTPS** and specify the following details:

*   Specify the endpoint URL from the Amazon Alexa channel in the Avaamo Platform. See Before you begin, for more information.
    
*   In the SSL certificate, select "My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority" option.
    
*   Click **Save Endpoints**. Your integration is now ready for testing.
    

## 

Test integration

You can test integration in the console and using an Alexa device. If you want to immediately test your agent from an Alexa Enabled device (such as an Echo Dot), you can skip testing from the console. See [Test with an Alexa device](/user-guide/how-to/build-agents/configure-agents/deploy/alexa#test-with-an-alexa-device), to directly test on any Alexa enabled device.

*   Click **Test** tab and choose **Development** option in "Skill testing is enabled in:" dropdown.
    
*   Click and hold the microphone and then say the invocation phrase to begin the conversation. You can also type the invocation phrase.
    

**Notes**:

*   Alexa only hears you when you click and hold the microphone
    
*   You can always type or say reset if you wish to restart the conversation.
    
*   If you want to immediately test your agent from an Alexa Enabled device (such as an Echo Dot), you can skip testing from the console.
    

#### 

Test with an Alexa Device

1.  Download the Amazon Alexa app.
    
2.  Log in with your Amazon account username and password (use the same account that you were just using to build your Alexa Skill).
    
3.  In the **Skills & Games** menu option, verify if your skill is listed under **Dev**.
    
4.  Make sure the Amazon Alexa app is open and you are connected to Wi-Fi.
    
5.  Use the invocation phrase of your skill to begin the conversation with your virtual assistant. You can say, “Alexa, ask \[invocation phrase\]”).
    
6.  Engage in conversation and experience the future of conversational assistance. Note that you can always say "reset" if you wish to restart the conversation.
    

## 

Publish Alexa skills

When you are done with the testing, you can publish your Alexa Skill. A private skill is published live but is not available in the Alexa skill store. See [Create and Publish Private Skills (Developer Console)](https://developer.amazon.com/en-US/docs/alexa/alexa-for-business/create-and-publish-private-skills-devconsole.html), for more information on how to publish Alexa skills.

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/wechat

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

WeChat allows users to interact with a fast, simple, secure messaging channel. WeChat provides many features such as text messaging, hold-to-talk voice messaging, broadcast (one-to-many) messaging, video calls and conferencing, video games, photograph and video sharing, as well as location sharing.

The agents developed on the Avaamo platform can be deployed on the WeChat channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/skype#before-you-begin)
    
2.  [Deploy your agent in WeChat](/user-guide/how-to/build-agents/configure-agents/deploy/wechat#deploy-your-agent-in-wechat)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/wechat#manage-channel-settings)
    

## 

**Before you begin**

*   You must register for a WeChat Official Account. You also need to enable webhook integration for the agent to send and receive messages. See [WeChat Official Accounts Registration Process](https://wechatwiki.com/wechat-resources/wechat-official-account-registration-fees/), for more information.
    
*   For testing and integration purposes, you can use the WeChat Sandbox environment to integrate and test the agent.
    
    *   Register and log in to the WeChat Sandbox environment.
        
    *   After successful sign-in, make a note of the WeChat Sandbox App ID and App Secret in the WeChat Sandbox portal environment. This is later required when you deploy your agent on the WeChat channel in the Avaamo Platform.
        
    *   On the bots platform, use the App ID and App Password to generate the Webhook URL and Access Token. Make a note of this information.
        
    

## 

Deploy your agent in WeChat

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   On the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in the **WeChat** channel.
    
*   Provide a name for the WeChat channel.
    
*   Specify the **App ID** and **App Password** generated on the WeChat Sandbox portal page. Also, enter the **Webhook URL** and **Access Token** that you generated in the bots platform. Contact Avaamo Support if you need help with generating the Webhook URL and Access Token. See [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/wechat#before-you-begin), for more information.
    
*   Click **Save**.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/sip

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

Session Initiation Protocol (SIP) is a means of initiating and sending voice and other unified communications services through the Internet. It is a protocol used to initiate, maintain, and terminate real-time sessions that include voice, video, and messaging applications. See [SIP](https://datatracker.ietf.org/doc/html/rfc3261), for more information.

Agents developed on the Avaamo platform can be deployed to the SIP channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/sip#before-you-begin)
    
2.  [Deploy your agent in SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip#deploy-your-agent-in-sip)
    
3.  [Option available in the SIP conversation flow](/user-guide/how-to/build-agents/configure-agents/deploy/sip#option-available-in-the-sip-conversation-flow)
    
4.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/sip#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of SIP. You must configure this in the channel settings. See [Deploy your agent in SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip#deploy-your-agent-in-sip), for more details.
    
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

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user.

Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its own phone number to dial. Similarly, in the SIP channel, you choose the language of the region or country where you wish to share the configured number. If you wish to share the number in multiple regions, then set up the SIP channel specific to each language. Note that one SIP channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the SIP channel. If you have switched to a language that is not supported in the SIP channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

Allow Barge In

When enabled, callers can interrupt the agent while it is speaking and immediately provide input, without waiting for the response to finish.

Enable wait time tone

Use this option if you wish to play an idle tone to the user in case the agent is taking a little longer to respond.

Rather than experiencing silence or a lack of input, the introduction of a tone serves to engage the user actively and assures that the agent will respond shortly. For example, the system generates a typing tone when processing DTMF/keypad input.

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

Displays a sample cURL request that can be used to initiate a call to the configured SIP channel. This option becomes available after the SIP channel is saved. You can use the channel UUID generated after saving the SIP channel in the [Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api) cURL request.

HTTP request

Displays a sample HTTP API request that can be used to initiate a call to the configured SIP channel. This option becomes available after the SIP channel is saved.

*   Click **Save** to save the SIP channel configuration details.
    
*   After saving, you can view the sample cURL request and HTTP request as shown below
    

*   Note that Avaamo also requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Option available in the SIP conversation flow

Click the transcripts icon to learn more about how your agent interprets the user's responses.

Click the `insights (eye) icon` to view detailed conversation insights, including how the agent interpreted the interaction.

If functions are invoked during the conversation, the `function name and its arguments` are displayed under `tool parameters` for better debugging.

Click the `download option` to save the conversation recording for further analysis.

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/genesys

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

Genesys SIP Server is the Genesys software component that provides an interface between your telephony hardware and the rest of the Genesys software components in your enterprise. It translates and keeps track of events and requests that come from, and are sent to the telephony device. See [Genesys SIP](https://docs.genesys.com/Documentation/SIPS#:~:text=Genesys%20SIP%20Server%20is%20the,sent%20to%20the%20telephony%20device), for more information.

The agents developed on the Avaamo platform can be deployed on the Genesys channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/genesys#before-you-begin)
    
2.  [Deploy your agent in Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys#deploy-your-agent-in-genesys)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/genesys#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of Genesys SIP. You must configure this in the channel settings. See [Deploy your agent in Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys#deploy-your-agent-in-genesys), for more details.
    
*   Avaamo requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Deploy your agent in Genesys

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a Genesys channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in Genesys Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the Genesys channel. Note that you can have upto 150 characters in the channel name.

Identifier

Indicates the identifier (or FQDN) of Genesys SIP.

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user. Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its own phone number to dial. Similarly, in the Genesys channel, you choose the language of the region or country where you wish to share the configured number. If you wish to share the number in multiple regions, then set up the Genesys channel specific to each language. Note that one Genesys channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the Genesys channel. If you have switched to a language that is not supported in the Genesys channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

*   Click **Save** to save the Genesys channel configuration details.
    
*   Click **Download SIP Certificate** to download a "pem" file of the SIP certificate. This must be used to configure Avaamo Platform Genesys SIP details on the customer's side of the call center stack.
    

*   Note that Avaamo also requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only web channel is enabled by default.

The agents developed on the Avaamo platform can be deployed on the **Nice InContact** channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact#before-you-begin)
    
2.  [Deploy your agent in Nice InContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact#deploy-your-agent-in-nice-incontact)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of Nice InContact SIP. You must configure this in the channel settings. See [Deploy your agent in Nice InContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact#deploy-your-agent-in-nice-incontact), for more details.
    
*   Avaamo requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Deploy your agent in Nice InContact

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a Nice inContact channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in **Nice inContact** Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the Nice InContact channel. Note that you can have upto 150 characters in the channel name.

Identifier

Indicates the identifier (or FQDN) of Nice InContact SIP.

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user. Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its own phone number to dial.
    
*   Similarly, in the Nice InContact channel, you choose the language of the region or country where you wish to share the configured number.
    
*   If you wish to share the number in multiple regions, then set up the Nice InContact channel specific to each language. Note that one Nice InContact channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the Nice InContact channel. If you have switched to a language that is not supported in the Nice InContact channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

*   Click **Save** to save the SIP channel configuration details.
    
*   Click **Download SIP Certificate** to download a "pem" file of the SIP certificate. This must be used to configure Avaamo Platform Nice InContact SIP details on the customer's side of the call center stack.
    

*   Note that Avaamo also requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

Cisco Packaged Contact Center Enterprise (Packaged CCE or PCCE) provides an enterprise-class contact center deployment model that is easy to install, configure, and administer. See [Cisco PCCE](https://developer.cisco.com/docs/packaged-contact-center/), for more information.

The agents developed on the Avaamo platform can be deployed on the **Cisco PCCE** channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce#before-you-begin)
    
2.  [Deploy your agent in Cisco PCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce#deploy-your-agent-in-nice-incontact)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of Cisco PCCE SIP. You must configure this in the channel settings. See [Deploy your agent in Cisco PCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-pcce#deploy-your-agent-in-nice-incontact), for more details.
    
*   Avaamo requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Deploy your agent in Cisco PCCE

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a Cisco PCCE channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in **Cisco PCCE** Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the Cisco PCCE channel. Note that you can have upto 150 characters in the channel name.

Identifier

Indicates the identifier (or FQDN) of Cisco PCCE SIP.

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user.

Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its own phone number to dial.
    
*   Similarly, in the Cisco PCCE channel, you choose the language of the region or country where you wish to share the configured number.
    
*   If you wish to share the number in multiple regions, then set up the Cisco PCCE channel specific to each language. Note that one Cisco PCCE channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the Cisco PCCE channel. If you have switched to a language that is not supported in the Cisco PCCE channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

*   Click **Save** to save the SIP channel configuration details.
    
*   Click **Download SIP Certificate** to download a "pem" file of the SIP certificate. This must be used to configure Avaamo Platform Cisco PCCE SIP details on the customer's side of the call center stack.
    

*   Note that Avaamo also requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

Cisco's Unified Contact Center Enterprise (UCCE) helps deliver proactive and personalized customer experiences for contact centers. Fault tolerance helps ensure uninterrupted operation. See [Cisco UCCE](https://www.cisco.com/c/en_in/products/contact-center/unified-contact-center-enterprise/index.html), for more information.

The agents developed on the Avaamo platform can be deployed on the **Cisco UCCE** channel. In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce#before-you-begin)
    
2.  [Deploy your agent in Cisco UCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce#deploy-your-agent-in-nice-incontact)
    
3.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce#manage-channel-settings)
    

## 

Before you begin

*   Get the identifier (or FQDN) of Cisco UCCE SIP. You must configure this in the channel settings. See [Deploy your agent in Cisco UCCE](/user-guide/how-to/build-agents/configure-agents/deploy/cisco-ucce#deploy-your-agent-in-nice-incontact), for more details.
    
*   Avaamo requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Deploy your agent in Cisco UCCE

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a Cisco UCCE channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in **Cisco UCCE** Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the Cisco UCCE channel. Note that you can have upto 150 characters in the channel name.

Identifier

Indicates the identifier (or FQDN) of Cisco UCCE SIP.

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user.

Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its own phone number to dial.
    
*   Similarly, in the Cisco UCCE channel, you choose the language of the region or country where you wish to share the configured number.
    
*   If you wish to share the number in multiple regions, then set up the Cisco UCCE channel specific to each language. Note that one Cisco UCCE channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the Cisco UCCE channel. If you have switched to a language that is not supported in the Cisco UCCE channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Select the request mode for Live agent transfer in SIP:

*   **invite**: Initiate a dialog for establishing a call. The request is sent by a user agent client to a user agent server.
    
*   **refer**: Ask the recipient to issue a request for the purpose of call transfer. Note that this is a default method used in the Avaamo Platform and this works for both SIP and PSTN approaches.
    

See [Smartcall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel#for-refer-transfer-mode), for more information on how to transfer and forward the call in SIP.

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

*   Click **Save** to save the SIP channel configuration details.
    
*   Click **Download SIP Certificate** to download a "pem" file of the SIP certificate. This must be used to configure Avaamo Platform Cisco UCCE SIP details on the customer's side of the call center stack.
    

*   Note that Avaamo also requires customer source IPs in order to allow traffic to Avaamo SIP. Send a request to Avaamo Support to whitelist the IP addresses.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel

Avaamo Platform provides several pre-built channels such as Web, Facebook Messenger, and Skype (to name a few) to deploy agents. However, if you wish to deploy agents into a channel other than those available, then you can configure and deploy agents into a custom channel.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

In this article, the following steps are detailed:

1.  [Overview](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#overview)
    
2.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#overview)
    
3.  [Configure custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#configure-custom-channel)
    
4.  [Test custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#test-custom-channel)
    
5.  [Troubleshooting tips](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#troubleshooting-tips)
    
6.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#manage-custom-channel)
    
7.  [Key points](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#key-points)
    

## 

Overview

A custom channel configured in the Avaamo Platform acts as an interface between the Platform and external application. This provides flexibility to integrate the Avaamo Platform with any enterprise application seamlessly.

The following diagram illustrates the data flow between Avaamo Platform and the custom channel:

The user interacting with the agent sends/receives messages to/from a custom channel. The custom channel integrates with the Avaamo platform via Avaamo API and Webhook calls to send and receive messages, respectively.

## 

Before you begin

Ensure you meet the following pre-requisites before configuring and deploying your agent to a custom channel:

*   Understand the external application with which you wish to integrate the Avaamo Platform using the custom channel.
    
*   Understand the payload parameters of the sample [incoming request](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#incoming-request) (from the custom channel to Avaamo Platform).
    
*   Understand the payload parameters of the sample [outgoing request](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#outgoing-request) (from Avaamo Platform to custom channel). The interface hosting the URL must be able to consume this payload structure. Also, note the [supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses) in the outgoing request.
    
*   Get the API URL exposed by the external application interface.
    
*   See [Key points](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#key-points), for important points to note regarding the custom channel.
    

## 

Configure custom channel

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

**To configure a custom channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in Custom Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the custom channel.

Synchronous

Indicates if synchronous mode must be used for API calls or not. In this mode, an API call from your application waits until the agent responds to the user message.

By default, all API calls are asynchronous**.** In this mode, the API returns as soon as the message from the user is posted without waiting for the agent response.

**Notes:**

*   It is recommended to use asynchronous mode.
    
*   You cannot use a live agent when you set up a custom channel in synchronous mode, as live agent responses are always asynchronous.
    

WhatsApp Compatible Response

Indicates if the response is WhatsApp compatible or not. This is applicable only when using WhatsApp as a custom channel. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information.

Enable Markdown format

Indicates if Markdown formatting should be applied to LLaMB responses. By default, responses are displayed without Markdown styling. Select this option to enable Markdown formatting.

**Note:** To utilize this option, ensure that you re-ingest the document before enabling it

Disable citation links

This feature allows you to enable/disable [citation links](/user-guide/llamb/citation-links) that appear in the agent's responses. **Note:** The `Enable Markdown format` option must be enabled to access this feature.

Enable concise responses

Enabling this option improves conversations by producing shorter, more natural, and more concise responses while retaining essential information. **Note:** The `Enable Markdown format` option must be enabled to access this feature.

Sanitize Response

Indicates if the HTML tags must be removed in the agent response or not. By default, all the responses are sanitized. Uncheck to remove sanitization.

API URL

Indicates the API URL exposed by the external application interface. This is invoked when an agent sends a message to the user. This is required only if you are using the asynchronous mode for API calls.

Default Locale

Indicates the default locale used in the agent conversations for the selected custom channel. Alternatively, the default language can also be set by adding the

"locale" parameter in the API payload while making a post request from the custom channel.

**Note**: The Default Locale dropdown list is displayed only if the languages are added to the agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

*   Click **Save** to save the custom channel configuration details. A UUID indicating a unique identifier of the custom channel is generated by the Platform. Additionally, some sample scripts for the incoming request (from the custom channel to Avaamo Platform) and outgoing requests (from Avaamo Platform to the custom channel) are also generated by the Platform that can be used as a reference.
    

**Key Points**:

*   It is recommended to use asynchronous mode for a custom channel as it provides improved application performance and responsiveness, thereby enhancing the user experience.
    
*   Make a note of the UUID - unique identifier of the channel used for communications between the custom channel and the Avaamo Platform.
    
*   Though a custom application can be developed using any programming language, you can refer to a [sample](https://www.npmjs.com/package/avaamo-customchannel) example that uses Node.js for developing a custom application.
    
*   When using Agent Assist or AI Agent, where precise responses are required and source links are not needed, you can disable them using these options.
    

### 

Incoming request

On saving the custom channel settings, a sample curl script and a sample HTTP POST request for the incoming request (from the custom channel to Avaamo Platform) is generated by the Platform:

**Note**: These scripts indicate a reference sample for incoming requests. The actual message varies based on the business requirement.

**Curl script**: The following JSON is a sample curl script:

**HTTP Request**: The following JSON is a sample HTTP POST request:

The following table lists the parameters of Curl script/HTTP request:

Parameters

Description

channel\_uuid

Indicates a unique identifier of the custom channel. Note that this is the same as UUID.

user/first\_name (Optional)

Indicates the first name of the user interacting with the agent.

If the first name is not specified, then the first name is considered as "You".

Though this is an optional parameter, it is recommended to include the first name in the payload, as it helps to identify the user in the agent conversation.

user/last\_name (Optional)

Indicates the last name of the user interacting with the agent.

If the last name is not specified, then the last name is null.

Though this is an optional parameter, it is recommended to include the last name in the payload, as it helps to identify the user in the agent conversation.

custom\_properties (Optional)

Specify all the user additional properties such as property\_id as key-value pairs in **user.custom\_properties** of the outgoing payload request and the same is returned in the callbacks.

You can also set a key to an array of values in the custom\_properties. For example:

It is recommended to set these properties only when required.

user/uuid

Indicates the unique identifier of the user interacting with the agent. This must be generated by the custom channel (external system) to uniquely identify each user and must adhere to the UUID v4 format.

message/text

Indicates a text message sent by the user to the agent. Currently, only text messages are supported.

locale (Optional)

Indicates the locale identifier according to 639-2 standard with country code in which the agent responds back. If the locale is not specified, then the default locale as specified during custom channel configuration is used.

Note that you must first add the locale you wish to use in the custom channel to Agent's languages. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.

**Key Point:** It is mandatory to specify channel\_uuid, user/uuid, and message/text in the incoming request.

### 

Outgoing request

On saving the custom channel settings, a sample outgoing request (from the Avaamo Platform to the custom channel) is generated by the Platform. An outgoing request indicates the payload response sent by the Avaamo platform to the Webhook URL for the request received from the custom channel. The interface hosting the URL must be able to consume this payload structure.

**Notes**:

*   The payload is different for synchronous and asynchronous modes.
    
*   By default, the payload is in JSON format.
    
*   In asynchronous mode, if there are multiple responses for an incoming request, then each response payload is sent individually from the Platform to the custom channel.
    
*   The payload indicates a reference sample of outgoing requests. The actual agent reply varies based on the business requirement.
    

#### 

Payload details

**Payload in asynchronous mode**: The following JSON is a sample outgoing request in asynchronous mode:

Payload (Single Response):

Payload (Multiple Responses):

The following table lists the parameters of an outgoing request in asynchronous mode:

Parameters

Description

bot\_uuid

Indicates a unique identifier of the agent.

channel\_uuid

Indicates a unique identifier of the channel.

event\_type

Indicates the type of message. Supported values are:

*   MESSAGE: This is the event type for each message that is posted to the custom channel.
    
*   AGENT\_MODE\_CHANGE: This is an additional event type sent to the custom channel by the Avaamo platform to the Webhook URL when the conversation is transferred to a live agent and when the live agent conversation is terminated. See [Test live agent transfer via the custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#test-live-agent-transfer-via-custom-channel), for a sample scenario.
    

user

Indicates the user details sending the request to the agent:

*   **uuid**: User unique Id sent in the incoming request by the custom channel.
    
*   **first\_name**: First name sent in the incoming request by the custom channel. If the first name is not specified, then the first name is considered as "You".
    
*   **Last\_name**: Last name sent in the incoming request by the custom channel. If the last name is not specified, then the last name is null.
    
*   **layer\_id**: Internal user Id used by Avaamo Platform.
    
*   **custom\_properties**: Any custom user properties that are sent in the payload by the custom channel and returned in the callbacks.
    

See [context.user](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/user) object, for more information.

For an outreach campaign, the custom properties include the details of the recipient. The field selected in the primary header of the campaign is the `client_uuid`. A campaign triggered to a recipient is hence identified by the combination of the `channel_uuid and client_uuid`. See [Campaign in Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel), for more information.

conversation/uuid

Indicates a unique identifier of conversation per user. Note that conversation/uuid is different for each user.

sender

Indicates the sender of the message. Currently, the only value supported is BOT.

message

Indicates agent response message sent in the payload to the custom channel by the Avaamo Platform. Apart from the actual response, each agent response message also includes:

*   **request\_message\_uuid**: Indicates a unique identifier of the incoming request messages to the custom channel when a user query is posted. request\_message\_uuid is null when there is an incoming message from the live agent. See [request\_message\_uuid](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#notes-on-request_message_uuid), for more information and examples.
    
*   **sequence**: Indicates the sequence of the agent response message. There can be multiple responses for an incoming request, each identified with the request\_message\_uuid and sequence. Note that the request\_message\_uuid is the same for each agent response.
    
*   **total\_messages**: Indicates the total number of messages in the response of the outgoing payload. This is useful when the multiple responses are received in the payload and since it is the asynchronous mode, the sequence of messages is not in a defined order. You can use total messages and sequence to render the message back in proper order.
    

One JS response node is considered as one message with one sequence. If you have a JS response node that returns multiple messages in a single node, then it is recommended to split the messages into multiple nodes to ensure proper sequence.

See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information.

mode

This value is available only when the conversation is transferred to a live agent and when the live agent conversation is terminated:

*   AGENT: Mode is set to AGENT when the conversation is transferred to a live agent.
    
*   BOT: Mode is set to BOT when the live agent conversation is terminated and transferred back to the agent.
    

status\_callback\_url

This is specific to Outreach campaigns only and is sent only when an outreach message is sent via the custom channel.

`status_callback_url` is sent for each recipient with a unique `uuid` in the URL. This helps to map the status of the campaign message to the corresponding recipient. Once the status is received via the callback URL, the same status is updated for the corresponding recipient in the campaign. You can view the status in the [Campaign statistics](/user-guide/outreach/campaign-statistics) page.

See [Campaigns in Custom channel](/user-guide/outreach/quick-start/campaign-in-custom-channel), for more information.

#### 

**Notes on request\_message\_uuid:**

During the agent -> user interaction, request\_message\_uuid always has a value when a message is posted to a custom channel since there is always a response back from the Avaamo Platform. This is the interaction between the human (user) to agent via a custom channel, where there is a guaranteed response from the agent for every message that the user sends. Hence, the incoming message is always associated with a request\_message\_uuid.

During a custom channel to live agent interaction, the request\_message\_uuid is null when there is an incoming message from the live agent. This is the interaction between the human (user) to human (live agent) via the custom channel, where there is no guaranteed response for every message that the user sends. Example: The user can send 3 messages and the live agent can just send one message as a response or vice-versa. Hence, the incoming message from the live agent cannot be associated with a request\_message\_uuid.

**Payload in synchronous mode**: The following JSON is a sample outgoing request in synchronous mode:

The following table lists the parameters of an outgoing request in synchronous mode:

Parameters

Description

uuid

Indicates a unique identifier of the request message.

content

Indicates the content sent in the incoming request by the custom channel.

created\_at

Indicates created date and time of the agent response message in seconds.

bot\_replies

Indicates agent response message sent in the payload to the custom channel by the Avaamo Platform. Apart from the actual response, each agent response message also includes:

*   **request\_message\_uuid**: Indicates a unique identifier of the incoming request messages.
    
*   **sequence**: Indicates the sequence of the agent response message. There can be multiple responses for an incoming request, each identified with the **request\_message\_uuid** and **sequence**. Note that the **request\_message\_uuid** is the same for each agent response.
    

See [Supported agent response](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses)s, for more information.

conversation/uuid

Indicates a unique identifier of conversation between a user and the agent. Note that conversation/uuid is different for each user.

**Key Points**:

*   Make a note of different UUIDs - agent, conversation, and user. This is required for the custom channels to integrate with the Avaamo platform.
    
*   It is important for the custom channel to understand the agent response message sent by the Platform so that the same can be displayed to the user. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-bot-responses), for more information.
    

#### 

Supported agent responses

Consider that you have an agent designed for MacPizza - a Quick Service Restaurant where you can place an online order for pizza and the agent is deployed on a custom channel. The following table lists sample agent responses for different response types sent to the custom channel from Avaamo Platform:

**Notes**:

*   All the responses listed here are for synchronous mode.
    
*   The payload response for "a card with titles" and "a card without a title" is different. Check the Card tab for an example.
    

Text

Card

Quick Reply

Carousel

List View

JS

Disambiguation

Video, Audio, File

**Text**, for example, simple text message such as “Good Morning”

**Response**: Text message

**WhatsApp Compatible Response**: Text message

**Card**, for example, Card with two buttons for pizza types, a title, subtitle, and an image

**Response**: **attachment** has an array of possible button options, as designed for the node. The payload property of each option is an identifier of the intent.

**Card without title:**

**WhatsApp Compatible Response**: Text message

**Notes**:

*   Elements such as single-line text, multiline text, poll, checklist, number are not supported in the custom channel.
    
*   image\_url is not supported in WhatsApp Compatible Response.
    

**Quick Reply**, for example, a quick reply to deliver pizza.

**Response**: **attachment** has an array of possible button options, as designed for the node. The payload property of each option is an identifier of the intent.

**WhatsApp Compatible Response**: Text message

**Notes**:

*   Elements such as single-line text, multiline text, poll, checklist, number are not supported in the custom channel.
    
*   image\_url is not supported in WhatsApp Compatible Response.
    

**Carousel**, for example: Choosing from a carousel of starters in a pizza order, each starter with a different image, options, title, and description.

**Response**: **attachment** has an array of possible button options, as designed for the node. The payload property of each option is an identifier of the intent.

**WhatsApp Compatible Response:** A text message with options.

**Note**: image\_url is not supported in WhatsApp Compatible Response

**List View**, for example: Choosing from a list of veg pizzas, a title, and an image.

**Response**: **attachment** has an array of possible button options, as designed for the node. The payload property of each option is an identifier of the intent.

**WhatsApp Compatible Response:** A text message with options.

**Notes**:

*   Elements such as single-line text, multiline text, poll, checklist, number are not supported in the custom channel.
    
*   image\_url is not supported in WhatsApp Compatible Response
    

**JS**, for example, a welcome message with the user name.

**Response**: Text message

**WhatsApp Compatible Response**: Text message

**Disambiguation response -** When the agent finds a user query ambiguous, it responds with disambiguation options.

**Response**: **quick\_replies** is an array with possible button options, as designed for the node. The payload property of each option is an identifier of the intent.

**WhatsApp Compatible Response**: Text message with options.

Not Supported

**Key Points**:

*   Elements such as single-line text, multiline text, poll, checklist, number that can be used for ListView and Card are not supported in the custom channel.
    
*   **Video**, **Audio**, and **File** response types are not supported in the custom channel.
    
*   Note the following in a WhatsApp Compatible Response:
    
    *   The response is in the form of a text message where all the links and input options are converted into a numbered list. Newline (\\n) is used as a separator between the title, sub-title, and each individual option.
        
    *   image\_url is not supported.
        
    *   Options are indexed so that the agent remembers the response.
        
    *   When sending a response back to the agent from WhatsApp for ListView, Quick Reply, Card, or Carousel responses, even if the user types a numerical value from the options provided, the context.last\_message stores the actual text corresponding to the numerical value. If the user provides an invalid input, then the flow goes to the unhandled node. Example: If the user sends 1 back to the agent and option 1 corresponds to "cheese", then the value in context.last\_message is "cheese".
        
    

## 

Test custom channel

After you configure the custom channel details, you can test the configuration in one of the following ways:

*   Use the sample curl script from any terminal or any other REST client app. Check and verify if you are receiving the response back as required. Note that if you have configured a custom channel in the asynchronous mode, then you must verify the responses in the webhook URL. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information.
    

*   Use the sample HTTP POST request from any tool such as Postman, send the request, and verify if you are receiving a response back. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information.
    

**Key Points**:

*   If you have configured the custom channel for asynchronous mode, then for testing purposes you can test the webhooks by generating a sample API URL from any webhook tester sites such as from Webhook.site.
    
*   If you have configured the custom channel for asynchronous mode, then the agent responses must be verified in the application where the response is posted back.
    
*   The agent responses differ if you have checked WhatsApp Compatible Response. See [Supported agent responses,](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses) for more information on different types of responses.
    

## 

Test live agent transfer via custom channel

**Note**: Ensure that the live agent is enabled for your agent. See [Switch to live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent), for more information.

After you configure the custom channel details, you can test the live agent transfer as follows:

*   Use the sample curl script from any terminal or any other REST client app. Check and verify if you are receiving the response back as required. Note that if you have configured a custom channel in the asynchronous mode, then you must verify the responses in the webhook URL. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information.
    
*   Post the query "talk to live agent" to the custom channel. The following response is received in the custom channel:
    

*   Post the query "#transfer to agent" to the custom channel. The following set of responses are received in the custom channel:
    

Response 1:

Response 2: Note that here, event\_type is "AGENT\_MODE\_CHANGE" and mode is "AGENT".

Response 3:

*   Post the query "#end agent" to the custom channel. The following set of responses are received in the custom channel:
    

Response 1:

Response 2: Note that here, even type is "AGENT\_MODE\_CHANGE" and mode is "BOT".

## 

Troubleshooting tips

In cases where you are unable to receive the expected agent response, refer to the following troubleshooting tips:

*   Check if you are receiving the expected responses in the web channel. See [Test Agents](/user-guide/how-to/build-agents/test-agents), for more information.
    
*   If you are not receiving the expected responses in the web channel, then debug the skills in the agent. See [Debug agents](/user-guide/how-to/build-agents/debug-agents), for more information.
    
*   Not all agent responses are supported in the custom channel. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information on different types of responses.
    
*   The agent responses differ if you have checked WhatsApp Compatible Response. See [Supported agent responses](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#supported-agent-responses), for more information on different types of responses.
    
*   Check if you are sending the correct channel and user UUID in the incoming request.
    
*   If you are using any tool such as Postman to verify the HTTP POST request, then you can also check for the standard HTTP error codes in the response. Contact Avaamo Operations Team, for further assistance.
    

## 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect, and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

You can also deploy your agent through multiple custom channels simultaneously. On the Channels page, click **Connect** in the Custom Channel and follow the steps in [Configure Custom Channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#configure-custom-channel) to deploy your agent into another custom channel.

## 

Key points

*   It is recommended to use asynchronous mode for a custom channel as it provides improved application performance and responsiveness, thereby enhancing the user experience.
    
*   Make a note of the UUID - the unique identifier of the channel used for communications between the custom channel and the Avaamo Platform.
    
*   Though a custom application can be developed using any programming language, you can refer to a [sample](https://www.npmjs.com/package/avaamo-customchannel) example that uses Node.js for developing a custom application.
    
*   Collecting feedback is not supported in the custom channel.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone

You can deploy the agents built on the Avaamo Platform into your phone channel. This allows the callers to converse naturally with the agents via interactive voice responses (IVR) to get the desired results without having to navigate long audio menus. This feature can help to reduce live-agent calls, improve call routing, and provide a good user experience.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

When you deploy your agents on the Avaamo platform, you can also add multiple languages for your agent's response, specify the timeout seconds, and choose the SMS option on call completion or when the call gets disconnected.

In this article, the following steps are detailed:

1.  [Before you begin](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#before-you-begin)
    
2.  [Configure C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#configure-c-ivr-channel)
    
3.  [Test C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#test-c-ivr-channel)
    
4.  [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#manage-c-ivr-channel)
    
5.  [Frequently asked questions](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#frequently-asked-questions)
    

## 

Before you begin

Ensure that you have the C-IVR channel enabled for your account. If it is not enabled for your account, contact Avaamo Support for further assistance

## 

Configure C-IVR channel

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing**.**
        
    

**To configure a C-IVR channel:**

After a successful configuration, a phone number is generated in the `Activated phone number` area, and this is the number you can use to connect to your agent via the C-IVR channel.

*   In the `Agent` page, navigate to the `Configure` > `Channels` option in the left navigation menu.
    
*   On the Channels page, click `Connect` in the C-IVR Channel.
    
*   Specify the following channel setting details:
    

Parameter

Descriptions

Name

Indicates the **Name** used to identify the C-IVR channel. Note that you can have upto 150 characters in the channel name.

Languages and

Playback Voice for

Select the language and configure the voice or the persona to be used by your agent in the interactive phone conversations with the user. Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the "Playback voice for <<language>>" section:

*   As with any enterprise voice, audio, or video application, each region or country has its phone number to dial. Similarly, in the C-IVR channel, you choose the language of the region or country where you wish to share the configured number. If you wish to share the number in multiple regions, then set up the C-IVR channel specific to each language. Note that one C-IVR channel is specific to only one language.
    
*   To hear the voice preview, type any text in the text area and click the play button. You can also download the voice preview if required.
    
*   You can select only those languages for which the agent is configured and those that are supported in the C-IVR channel. If you have switched to a language that is not supported in the C-IVR channel, then the agent responds in the default language.
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) and [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

Live agent transfer mode

Defines how a live agent is invited into the conversation when escalation is required. Supports `Invite` (conference style where the bot stays in the call) or `Refer` (the call is handed over to the agent directly).

Speech timeout

Indicates a maximum wait time of the agent within which a user response is expected. If the user response is not received within the time-out period, then an automated message is rendered back to the user indicating that the agent is awaiting the user response. Currently, this is a standard message and cannot be customized.

*   The default value is 1 second.
    
*   Use the up and down arrows to increase or decrease time as required.
    

Allow Barge In

When enabled, callers can interrupt the agent while it is speaking and immediately provide input, without waiting for the response to finish.

SMS message options

Enable this option and specify a message, if you wish to send an SMS message to the caller when the call gets disconnected and/or when the call is completed. Specify the SMS text message in the respective options as required. Note that a single SMS can have upto 150 characters.

Send an SMS after completion of call

Enable this option and specify a message, if you wish to send an SMS message to the caller when the call is completed. Note that a single SMS can have upto 150 characters. If a call is hung up after a successful dialogue between the user and the agent, that is a user asks a query and the agent responds back to the query, then it is considered as complete.

Send an SMS if call disconnects

Enable this option and specify a message, if you wish to send an SMS message to the caller when the call gets disconnected. Note that a single SMS can have upto 150 characters. A call is considered disconnected when the user asks a query and before the agent response is received the call gets hung up. This is the case when the user is in between a conversation flow.

Enable custom user authentication

Use this if you wish to enable custom authentication for your agents deployed on the phone channels using JavaScript code. See [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler), for more information.

Enable wait time tone

Use this option if you wish to play an idle tone to the user in case the agent is taking a little longer to respond.

Rather than experiencing silence or a lack of input, the introduction of a tone serves to engage the user actively and assures that the agent will respond shortly. For example, the system generates a typing tone when processing DTMF/keypad input.

Select file

Once you enable the wait time tone, the option to upload a file becomes available. You can customize the wait time tone by uploading an audio file that plays an idle tone for the user. The file must not exceed 10 seconds and should be within 5 MB in size.

Click **Select File**, then choose and upload the desired file for the wait time tone.

*   Click `Save` to save the C-IVR channel configuration details. A phone number is generated in the `Activated phone number` area, and this is the number that can be used to connect to your agent.
    

*   Once saved, cURL and HTTP requests are generated in the respective sections. You can use these to initiate calls using the [Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api).
    

**Key Points**:

*   After you successfully save the C-IVR configuration, you can add "Agent voice", "Voice menu", and "Voice hints" to the agent responses. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses) and [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.
    
*   If you have deployed your agent in the C-IVR or Phone channel and masking is enabled, then the audio files from the user responses are not available in the conversation history, since it can contain PII data. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for information.
    
*   Currently, you cannot [transfer to a live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent) that is configured in the Avaamo Platform from the C-IVR channel. Instead, it is recommended that you use [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#call-forward) for connecting to live agents.
    
*   You can also enable custom voice for your C-IVR agents in the Avaamo Platform. Contact Avaamo Support, for more information.
    

## 

Test C-IVR channel

After you save your C-IVR channel configuration settings, you can test the C-IVR channel using Agent Simulator from the bottom-right corner of the page. See [Agent simulator](/user-guide/how-to/build-agents/test-agents/simulator), for more information.

If you select the IVR / Phone option, then C-IVR activated phone number is displayed with a phone icon.

Click the phone icon to dial the activated phone number and test your conversation flow. Click the transcripts icon to learn more about how your agent is interpreting the user's responses.

Click the `insights (eye) icon` to view detailed conversation insights, including how the agent interpreted the interaction.

Click `Query Context` to view all the chunks involved in the response creation.

**View reasoning**: An option in Query Context that generates and displays reasoning for chunks labeled as `strong match`, `match`, or `not relevant`, explaining why each chunk was selected and how it contributes to the final response.

You can also view the label `Strong match` which means the chunks deemed most relevant to the question and that contributed significantly to generating the answer.

Click any `chunk` to view detailed information.

## 

Manage channel settings

**Note**: When you re-deploy a C-IVR channel, a new number is assigned and the existing phone number is removed from the channel.

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

You can also deploy your agent through multiple C-IVR channels simultaneously. On the Channels page, click **Connect** in the C-IVR channel and follow the steps in [Configure C-IVR Channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#configure-c-ivr-channel) to deploy your agent into another custom channel.

## 

Frequently asked questions

### 

1\. How to improve the accuracy or recognition of speech in the C-IVR channel?

You can specify certain keywords or phrases in the **Voice hints** that can provide better interpretation or recognition of the user response in the conversational IVR interaction. Providing voice hints can significantly improve user interaction with your agent. When you add voice hints, the agent gives preference to the phrases provided in the hints when interpreting the user responses. This helps you to redirect the conversational flow smoothly. See [Voice hints](/user-guide/overview-and-concepts/advanced-concepts/voice-hints), for more information.

### 

2\. How is the PII (Personally identifiable information) data masked if my agent is deployed in the C-IVR channel?

If you have deployed your agent in the C-IVR or Phone channel and masking is enabled, then the audio files from the user responses are not available in the conversation history, since it can contain PII data.

### 

3\. The agent is not recognising my response. What should I do?

In cases where you are unable to receive the expected agent response, refer to the following troubleshooting tips:

*   Use the Agent simulator -> Chat transcripts to know how your agent is interpreting the responses from the user. See [Test C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#test-c-ivr-channel), for more information.
    
*   Try adding Voice hints and check if that helps in improving the recognition of the user responses. You can add [Voice hints at the agent level](/user-guide/how-to/build-agents/configure-agents/add-voice-settings) and also for a node at the Dialog skill in the [Advanced settings -> Voice hints section](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#voice-hints).
    

### 

4\. I am unable to transfer to a live agent from the C-IVR channel. What can I do?

Currently, you cannot [transfer to a live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent) that is configured in the Avaamo Platform from the C-IVR channel. Instead, it is recommended that you use [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#call-forward) for connecting to live agents.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent

Avaamo Platform allows you to connect different individual agents into one central agent referred to as the **Universal agent**. Here, each individual agent of the Universal agent is called a Member agent. See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent), for more information.

**Note**: You can connect to a channel only if it is enabled for your account or company. If you wish to enable a channel, then contact Avaamo Support for further assistance. Note that only the web channel is enabled by default.

The first step for a member agent to connect to a Universal agent is generating its own UUID and access token. This allows the Universal agent to establish a communication channel with the corresponding member agent.

### 

Configure Universal agent

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can deploy the agent to a channel after creating and building an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

**To configure a Universal agent channel:**

*   In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.
    
*   On the Channels page, click **Connect** in Universal agent.
    
*   Enter the name of the connector that helps you to identify the Universal agent it is connecting to. As a recommended practice, you can provide the name of the Universal agent here. Click **Save**.
    
*   The **UUID** and **Access Token** are generated. Make a note of the generated UUID and Access Token. You must specify these when adding a member agent to the Universal agent. See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#adding-the-member-agents-to-the-universal-agent), for more information.
    

### 

Manage channel settings

After you configure the channel settings, you can view, edit, disconnect and delete the channel settings as per your requirements.

You can also deploy a member agent in different Universal agents as required. On the Channels page, click **Connect** in the Universal agent and follow the steps in [Configure Universal agent](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent#configure-universal-agent) to complete the setup.

### 

Disconnecting from the Universal agent

The member agent's connection with the Universal agent can be disconnected at any time from the Configuration -> Channel page of the member agents. This provides owners of member agents complete control over their agents while at the same time being able to lend their agents to be used by Universal agents.

Once disconnected from a Universal agent, the Universal agent cannot use the member agent. This implies that when a user query is posted to the Universal agent, it probes only those member agents that are enabled and connected. When any user query is posted to the Universal agent with a disconnected member agent, a corresponding error message is displayed in the JS error indicating the same. See [JS errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.

You can always connect again to the Universal agent by clicking **Connect** in the universal agent channel box. See [Manage channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings), for more information.

### 

Regenerate credentials

Click **Regenerate credentials** to generate a new access token and UUID. You can use this option if you suspect that the credentials are compromised, or as a regular routine.

**Key points**:

*   Once you regenerate the credentials of a member agent that is linked to a Universal agent, then the member agent is disconnected from the Universal agent. When any user query is posted to the Universal agent with a disconnected member agent, a corresponding error message is displayed in the JS error indicating the same. See [JS errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.
    
*   If you wish to link the member agent again, then you must first [delete the member agent](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#deleting-or-disabling-member-agents) from the Universal agent and add the member agent back with the regenerated credentials. See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents), for more information.
    
*   Analytics for member agents is displayed in the Universal agents -> Monitor -> Analytics page even if credentials are invalid or the member agent is deleted. See [Analytics - Universal agents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent), for more information
    
*   Regression testing for disabled or invalid credentials or deleted member agent fails and returns false. See [Regression testing - Universal agents](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings

This article lists certain common actions you can perform after configuring a channel:

*   [View and edit channel settings](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings#view-and-edit)
    
*   [Disconnect a channel](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings#disconnect)
    
*   [Delete a channel](/user-guide/how-to/build-agents/configure-agents/deploy/manage-channel-settings#delete)
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   After creating and building an agent, you can deploy the agent to a channel. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](applewebdata://9AE47367-043D-436A-BAB1-053A8B89E2A1/@avaamo/s/avaamo/~/edit/drafts/-Lsoojy2kKRX1KXPWAZ2/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing
        
    

In the **Agent** page, navigate to the **Configure -> Channels** option in the left navigation menu.

### 

View and Edit

The following steps describe how to view and edit channel settings:

1.  On the **Channels** page, click **View** on the channel you wish to edit.
    
2.  Channel Settings as configured are displayed. Edit the channel settings as required and click **Save** to save the channel settings.
    

### 

Disconnect

The following steps describe how to disconnect an agent deployed on a channel:

*   On the Channels page, click **Disconnect** in the Channel.
    
*   An alert message is displayed. Click **OK**.
    
*   The agent is disconnected and no longer deployed on the corresponding channel. However, note that the configured channel is still available on the Channels page and you can click **Connect** to re-deploy the agent back on the corresponding channel if required.
    

**Note**: Disconnecting the channel also invalidates its end-point URL. Hence, disconnecting a channel must be done with caution, as the end-point URL if used in any other integrations also gets invalidated.

### 

Delete

The following steps describe how to delete custom channel settings:

*   On the Channels page, click **Delete** in the Custom Channel.
    
*   An alert message is displayed. Click **OK**.
    
*   The configured channel is no longer available on the **Channels** page; hence, the agent is no longer deployed on the corresponding channel.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages

This article lists the supported languages in the Web channel (for "text" only):

**Notes**:

*   This article lists the supported languages when the Avaamo Conversational AI platform is hosted in its own cloud instance.
    
*   See [Voice - Supported languages and Browsers](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information on the list of languages supported in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) and in the [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channel where voice is enabled
    

1.  "af-ZA"
    
2.  "sq-AL"
    
3.  "am"
    
4.  "ar-SA"
    
5.  "hy-AM"
    
6.  "az-Latn-AZ"
    
7.  "bn"
    
8.  "eu-ES"
    
9.  "be-BY"
    
10.  "bs"
     
11.  "bg-BG
     
12.  "my"
     
13.  "ca-ES"
     
14.  "ceb"
     
15.  "zh-CN"
     
16.  "zh-Hans"
     
17.  "zh-TW"
     
18.  "zh-Hant"
     
19.  "co"
     
20.  "hr-HR"
     
21.  "cs-CZ"
     
22.  "da-DK"
     
23.  "nl-NL"
     
24.  "nl-BE"
     
25.  "en-US"
     
26.  "en-GB"
     
27.  "en-AU"
     
28.  "en-IN"
     
29.  "eo"
     
30.  "et-EE"
     
31.  "fil"
     
32.  "tl"
     
33.  "fi-FI"
     
34.  "fr-FR"
     
35.  "fr-CA"
     
36.  "gl-ES"
     
37.  "ka-GE"
     
38.  "de-DE"
     
39.  "el-GR"
     
40.  "gu-IN"
     
41.  "ht"
     
42.  "haw"
     
43.  "he-IL"
     
44.  "hi-IN"
     
45.  "hmn"
     
46.  "hu-HU"
     
47.  "is-IS"
     
48.  "id-ID"
     
49.  "ga"
     
50.  "it-IT"
     
51.  "ja-JP"
     
52.  "jv"
     
53.  "jw"
     
54.  "kn-IN"
     
55.  "kk-KZ"
     
56.  "km"
     
57.  "ko-KR"
     
58.  "ku"
     
59.  "ky-KG"
     
60.  "lo"
     
61.  "la"
     
62.  "lv-LV"
     
63.  "lt-LT"
     
64.  "lb"
     
65.  "mk-MK"
     
66.  "mg"
     
67.  "ms-MY"
     
68.  "ml"
     
69.  "mt"
     
70.  "mi"
     
71.  "mr-IN"
     
72.  "mn-MN"
     
73.  "ne"
     
74.  "nb-NO"
     
75.  "nb"
     
76.  "nn"
     
77.  "ny"
     
78.  "ps"
     
79.  "fa-IR"
     
80.  "pl-PL"
     
81.  "pt-BR"
     
82.  "pt-PT"
     
83.  "pa-IN"
     
84.  "ro-RO"
     
85.  "ru-RU"
     
86.  "sm"
     
87.  "gd"
     
88.  "sr-Latn-CS"
     
89.  "sn"
     
90.  "sd"
     
91.  "si"
     
92.  "sk-SK"
     
93.  "sl-SI"
     
94.  "so"
     
95.  "es-ES"
     
96.  "es-US"
     
97.  "su"
     
98.  "sw-KE"
     
99.  "sv-SE"
     
100.  "tg"

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages

This article lists the supported languages and supported browsers in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) and in the [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#enable-voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels where voice is enabled.

## 

Supported browsers

The following lists the browsers and devices supported in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) and in the [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#enable-voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels where voice is enabled:

Browser

 Windows 10

 Mac

 iOS

 Android

 Edge

✅

 Chrome

✅

✅

✅

✅

 Firefox

✅

✅

✅

 Safari

N/A

✅

✅

**Notes**:

*   All the devices listed in the table above refer to the latest version.
    
    *   Mobile browser running on iOS 11.3.1 and onwards support Microphone and Speaker.
        
    *   For the iOS mobile app (build on top of WKWebView), the supported iOS version is from 14.3 onwards.
        
    *   Microphone and Speaker options are only enabled in iOS-supported versions. In other versions, Microphone and Speaker options are not visible. See [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), for more information.
        
    
*   All the browsers listed in the table above refer to the latest available version.
    
*   IE 10, IE 11, and Opera browsers are not supported for voice.
    
*   Keyboard accessibility is NOT enabled by default on a Mac.
    
    *   See [Enabling Keyboard Accessibility on a Mac](https://dequeuniversity.com/mac/keyboard-access-mac), for more information on enabling accessibility using System Preferences or Safari Preferences.
        
    *   If you are using Firefox on a Mac, you must also enable the following settings to enable accessibility:
        
        1.  MacOs -> System Preferences -> Keyboard -> shortcuts -> Keyboard -> Use keyboard navigation to move focus between controls
            
        2.  MacOS -> System Preferences -> Keyboard -> shortcuts -> Keyboard -> Turn keyboard access on or off
            
        
    

## 

Supported languages

The following is a list of languages supported in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) and in the [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#enable-voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels where voice is enabled:

1.  "en-US"
    
2.  "en-AU"
    
3.  "is-IS"
    
4.  "ja-JP"
    
5.  "ko-KR"
    
6.  "nb-NO"
    
7.  "pl-PL"
    
8.  "pt-BR"
    
9.  "pt-PT"
    
10.  "ro-RO"
     
11.  "ru-RU"
     
12.  "es-US"
     
13.  "sv-SE"
     
14.  "tr-TR"
     
15.  "cy-GB"
     
16.  "es-ES"
     
17.  "de-DE"
     
18.  "da-DK"
     
19.  "nl-NL"
     
20.  "fr-FR"
     
21.  "it-IT"
     
22.  "en-IN"
     
23.  "en-GB"
     
24.  "fr-CA"
     
25.  "hi-IN"
     
26.  "zh-CN"
     
27.  "zh-Hans**"**
     
28.  **"**zh-TW**"**
     
29.  **"**zh-Hant**"**
     

**Note**: This article lists the supported languages when the Avaamo Conversational AI platform is hosted in its own cloud instance.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/custom-feedback

In the **Agent -> Configuration -> Custom feedback** page, you can customize the user feedback form as per your requirement using Javascript (JS) code. This feature helps to:

*   Build user feedback forms that are robust and intuitive. You can now create a custom feedback form by leveraging the rich set of objects and functions in the Avaamo Platform.
    
*   Enhance how you can collect feedback from the users. Since the feedback form can now be tailored to suit your business requirements, it enables you to collect relevant and effective feedback from users. The collected feedback can be used to significantly enhance the user's experience when interacting with your agent.
    
*   Create different custom feedback forms for both positive and negative feedback.
    

See [Collect feedback](/user-guide/overview-and-concepts/advanced-concepts/collect-feedback), for more information on understanding the concept and various ways in which you can collect feedback from the users.

### 

Add custom user feedback

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure custom feedback to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the Agent page, navigate to the **Configuration -> Custom feedback** option in the left navigation menu.
    
*   By default, the custom user feedback toggle is disabled. Toggle the slider to enable this option.
    
*   In the **Positive feedback** tab, specify the custom JS feedback form you wish to invoke when the user clicks the thumbs-up option in feedback.
    
*   In the **Negative feedback** tab, specify the custom JS feedback form you wish to invoke when the user clicks the thumbs-down option in feedback.
    
*   Click **Save** to save the details. To invoke the custom feedback form, you must enable collecting user feedback option at the skill or intent level as per your requirements. See [Example](/user-guide/how-to/build-agents/configure-agents/custom-feedback#example) section, for a sample end-to-end illustration.
    

### 

Key points

Note the following important points about custom feedback:

*   By default, the Custom user feedback option is disabled.
    
*   Custom user feedback option when enabled
    
    *   Overrides the default feedback form provided by the platform. This implies that if you enable the toggle and do not provide any custom feedback form, then no form is displayed to the user.
        
    *   Shows syntax errors(if any) in the JS code for custom feedback on the feedback pop-up form.
        
    *   Is applicable wherever the user feedback is displayed to the user throughout the agent.
        
    
*   Currently, you can only use Card elements to create a custom user feedback form. See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information.
    
    *   In the Custom feedback, the Card returned must be a single object and not an array.
        
    *   If you are using [Polls](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/polls#example-2-polls-with-default-values), [Checklist](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/checklist#example-2-checklist-with-default-value), or [Picklist](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/select-picklist#example-2-picklist-with-a-default-value) in Cards, then for each option in the card element you must specify the UUID. Currently, in the Custom feedback JS form, it is recommended to use user-friendly identifiers for UUIDs instead of a random-generated number in the "Options" object as it helps you to identify the message in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page.
        
    *   Currently, in the custom feedback, the post\_message type is not supported in Card links. See [Card links](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links), for more information.
        
    *   Currently, any media content including images is not supported in Custom feedback.
        
    
*   Use `CTRL+ENTER` key to toggle between fullscreen mode. You can view the complete list of built-in functions with syntax and examples in the Built-in functions window available in the JS editor. See [Built-in functions window](/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window), for more information.
    
*   All the feedback provided via the custom feedback form is recorded in the Analytics and can be viewed in the **User feedback** page for further analysis. See [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback), for more information.
    
*   If you have any error in the custom feedback JS code template, then
    
    *   An appropriate template error message is displayed when you are in debug mode, say when you are testing the custom feedback using the Agent simulator. This helps you to troubleshoot and correct the error as a developer of the agent.
        
    *   If you are in a non-debug mode, say, testing the same scenario using the Test button in the Web channel, then since you are viewing as a user, an error message that something went wrong is displayed.
        
    

### 

Example

Consider in your agent that you wish to collect feedback on how the service was helpful to the users for all the questions and responses in the Q&A skill.

*   In the **Agent ->** **Configuration -> Custom feedback** page, enable **Custom user feedback** toggle.
    
*   In the **Positive feedback** tab, specify the custom form as per your requirement. Currently, you can only use Card elements to create a custom user feedback form. See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information. The following code is a sample illustration of the custom feedback form:
    

*   Enable the **Collect feedback** option for the Q&A skill. See [Collect feedback](/user-guide/overview-and-concepts/advanced-concepts/collect-feedback#enabling-feedback), for more information.
    

*   You can now test the agent. Click the agent icon at the bottom-right corner to invoke the agent simulator. Specify the intent to invoke the Q&A skill where feedback is enabled. After the Q&A response, a thumbs-up and thumbs-down icon is displayed in the agent.
    

*   Click the thumbs-up option in the feedback. The following pop-up is displayed as configured in the Agent -> Configuration -> Custom feedback -> Positive feedback tab.
    

*   Provide the feedback and click **Submit**. Note the message displayed in the agent after providing feedback is from the "notification\_message" attribute.
    

*   You can view the submitted feedback in the [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) page for further monitoring and analysis.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-dictionaries

A dictionary, in the agent, is a collection of words or phrases that holds a specific meaning to your business. The following lists a few use-cases:

*   **HR agent:** You are creating an HR agent regarding the employee bonus policies. Here, EB (Employee bonus), QEB (Quarterly Employee Bonus), and such terminologies can be added to the dictionary.
    
*   **SSN agent:** In the United States, a Social Security number (SSN) is a nine-digit number issued to U.S. citizens, permanent residents, and temporary (working) residents. You are creating an agent that helps to apply SSN, change, and get details of an SSN. Here, SSN can be a dictionary word.
    
*   **MLS:** A multiple listing service (MLS) is a marketing database, set up by a group of co-operating real estate brokers to provide accurate and structured data about properties for sale. You are creating an agent that helps to list your property in MLS and update the MLS details. Here, MLS or MLSListing can dictionary words.
    

These words once added to the agent dictionary are considered differently when understanding user queries. One such consideration is spelling correction. The system does not attempt spelling correction when it encounters these words in user queries. You can also specify alternate values to these dictionary entries. The alternate values are considered equivalent to the original word or phrase. **Example**: Alternate values for "MLS" can be "multiple listing service", "mlslisting".

When you are creating dictionaries, you can also configure dictionaries using these response filters, if required. This is useful when the business terminology varies based on user properties such as location. Example: PTO in US => Vacation. PTO in India => Leave. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.

**Key Point**: When you create multiple dictionaries, as a best practice, it is recommended to add a dictionary value only in one dictionary. Avoid adding the same dictionary value in multiple dictionaries.

### 

Quick overview

A dictionary in the Avaamo Platform is very similar to the dictionary feature in Microsoft Word.

In MS Word, when you type any word that is not recognized, the word gets highlighted either due to a spelling error or due to the word not being in the MS Word dictionary. You can then choose to correct the spelling error or add the word to the MS Word dictionary.

Similar to the way you add words not recognized by MS word to the MS Word dictionary, you can also add words or phrases that hold specific meaning to your business to the Avaamo Platform dictionary.

### 

Create a new dictionary

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add languages to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configure -> Dictionaries** option in the left navigation menu.
    
*   In the **Create new dictionary** pop-up, specify the name, description, and select the response filter (if any). Click **Create**.
    

*   In the **Dictionaries** page, enter the word and click **Add.** For each word, enter the alternate value in the **Alternate value** text box and click **Add**, if required.
    

You can also export, import, edit, and delete words, as required from this page similar to entity values. See [Manage entity values](/user-guide/how-to/build-agents/add-entity-types-to-agent/manage-entity-types), for more information.

**Key point**: You can also right-click and open the dictionaries in a new browser tab or window. This reduces the number of clicks and helps you to work with your skills parallelly as you view or modify the dictionary values.

### 

Examples

*   Consider the following skills in an agent - Update MLS Listing and SSN FAQ.
    
*   Invocation intent in Update MLS Listing:
    

*   Q&A in SSN FAQ:
    

*   **User Query**: _What is SSN?, What is social security number?_
    

Without Dictionary

With Dictionary

*   **User Query**: _I want to update details of my mls, I want to update details of my mlslisting_
    

Without Dictionary

With Dictionary

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/define-environment-variables

You can define environment variables from the **Configuration -> Environment variables** option. These are constants that can be accessed anywhere in the agent and are global to all users of the agent. **Examples**: External service access credentials like web service login credentials, webservice\_username, webservice\_password.

The environment variables are used to configure the environment details when an agent is promoted from one stage to another.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure an agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Configuration -> Environment variables** tab, specify the **name** and **value** of the environment variable and click **Add.**
    

**Key point**: You must specify the variable names according to the Javascript variable standards. See [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp), for more information.

*   You can add multiple environment variables as required. Use **Delete** option in the Actions column to delete an environment variable.
    
*   Click **Save.**
    

**Note**: You can also access the environment variable in the JS code. See [Get environment variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-environment-variables), for an example.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/introduce-agent-get-started

The **Get Started** message is displayed when a user interacts with the agent for the first time. The message is designed to help introduce and describe your agent as well as provide branding opportunities for first-time users. This message is not displayed for returning users. This is an optional configuration.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure an agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

There are two panels on the **Get Started** page, the right panel is a preview of how the configuration is displayed in your agent and the left panel is where you can configure details.

**To configure the Getting started message**:

*   In the **Agent** page, navigate to the **Configure -> Get started screen** option in the left navigation menu.
    
*   Move the slider to **Yes** to **Enable** the feature.
    
*   Specify the following details:
    
    *   **Showcase image**: You can upload an image such as your brand image or company banner in the getting started message using the showcase image. Move the slider to **Yes** to **Enable** the feature.
        
        *   Note that the optimal size of the image is 720 x 560px.
            
        *   Select **Show the welcome message as a notification**, to display the welcome message as a notification pop-up. Note that this is displayed for all users and not only returning users.
            
        
    *   **Show agent name and description**: Select this option if you wish to display the agent name and description in the **Get started screen.**
        
    *   **Show agent avatar:** Select this option if you wish to display the agent avatar in the **Get started screen.**
        
    *   **Welcome message**: Enter a welcome message for the first-time users of the agent. Use this to specify the company name, tagline, or any such information to describe your agent. This also provides a notification sound, when the agent is loaded.
        
    *   **Disclaimer**: Enter the disclaimer title and description, if any. Use this to specify and company disclaimers in your agent for first-time users.
        
    

**Note:** The notification sound is activated when the agent is loaded for the first time. However after the page is reloaded, it is activated, only when the user interacts with any part of the webpage where the agent widget is deployed.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-js-files

You can create and add JavaScript files to the agent from the **Configuration -> Add JS files** option. This feature is used to enhance the functionality of the agent. **Example**: Consider an "Order Status Pizza" skill for checking the status of a pizza order. You can take the order number from the user and get the order status via an API request to an external application (Mac Pizza Application). You can create and add a JS file, say, "orderStatus.js" to perform this functionality. See [REST API](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/rest-and-soap-api#rest-api), for an example.

The following lists a few advantages of using JS files:

*   **Easy Maintenance and Troubleshooting**: You can create JS files such that each file performs one specific task. It helps in easy maintenance and troubleshooting of errors in JS files. See [JS errors](/user-guide/how-to/build-agents/debug-agents#js-errors), for more information.
    
*   **Easy Identification**: Modularizing the JS files also helps to identify and select the right JS files during publishing skills to the Skills store. See [Publish skill to skills store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.
    
*   **Reusability**: The JS files added to the agent are available across all the skills in the agent. Hence, if you have certain functionalities that are common across all the skills, you can add JS with common functions at the agent level and use it across all the skills. **Example**: You can have a common function to authenticate a user in a JS file and re-use that function in other JS files, as required.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add JS files immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    

### 

**Create JS file**

*   In the **Configuration -> JS files** tab, click **Add new**.
    
*   Specify the name of the JS file and click **Create**.
    
*   A new empty JS file is created. In the **Scripts** page, add the code in the JS file as required.
    
    *   See [Using Script and Code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for an exhaustive list of functionality that can be achieved using JS.
        
    *   Use `CTRL+ENTER` key to toggle between fullscreen mode. You can view the complete list of built-in functions with syntax and examples in the Built-in functions window available in the JS editor. See [Built-in functions window](/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window), for more information.
        
    

Copy

    let greetingHandler = {
        getTimeOfDay: () => {
          var g = null;
          let m = moment();
    
          var split_afternoon = 12; //24hr time to split the afternoon
          var split_evening = 17; //24hr time to split the evening
          var currentHour = parseFloat(m.format("HH"));
        let zone_offset = await(context.user.getDevice()).zone_offset;
        currentHour += zone_offset;
    
          if(currentHour >= split_afternoon && currentHour <= split_evening) {
              g = "afternoon";
          } else if(currentHour >= split_evening) {
              g = "evening";
          } else {
              g = "morning";
          }
    
        return g;
      }
    }
    

*   Click **Save.**
    

### 

Edit JS file

*   In the **Configuration -> JS files** tab, click the JS file that you wish to edit.
    
*   Click **Edit** to unlock the JS file and edit the JS file.
    

*   If there is another user already editing the JS file, then the name of the user editing the JS file is displayed. Click **Force unlock**, if you still wish to edit the JS file. Note that when you force unlock a JS file, the changes made by the other user are lost. Hence, this option must be used with caution.
    

*   You can also click the edit icon next to the JS file to edit the name of the JS file.
    

*   Click **Save** to save the JS file.
    

### 

Delete JS file

*   In the **Configuration -> JS files** tab, click the overflow menu icon for the JS file you wish to delete.
    

*   Click **Delete.** If there is another user already editing the JS file, then the same message is displayed to the user. Click **Force delete** to delete the JS file.
    

### 

Open in a new tab

*   In the **Configuration -> JS files** tab, click the overflow menu icon for the JS file you wish to open in a new tab.
    

*   Click **Open in New tab.** The JS file is opened in a new browser tab.
    
*   If there is another user already editing the JS file, then the name of the user editing the JS file is displayed. Click **Force unlock**, if you still wish to edit the JS file. Note that when you force unlock a JS file, the changes made by the other user are lost. Hence, this option must be used with caution.
    

### 

Best practices

The following lists a few best practices that you can follow when using JS file functionality:

*   As skills perform well-defined tasks, it is also recommended to modularize your JS code accordingly, by creating separate JS files for each task.
    
*   Do not place all the common code functionality into one common JS. Instead, logically break and modularize code into different JS files. This helps in easy maintenance. It also helps in debugging and troubleshooting the issues in JS files. See [JS errors](/user-guide/how-to/build-agents/debug-agents#js-errors), for more information.
    
*   Name the JS file in a way that helps you to identify if the JS file is used in a specific skill or for a specific task. This also helps to identify and select the right JS files during publishing skills to the skill store. See [Publish skill to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.
    
    **Examples**:
    
    *   greetingHandler.js - JS file for displaying a greeting message to the user based on the time of the day.
        
    *   orderStatus.js - JS file for getting the status of the pizza order using the order number.
        
    
*   Use namespaces in your JS file. This helps to avoid conflicts if you are using the same variable names and functions in multiple JS files. **Example**: Use "let" to define the variable scope:
    

In the code, you can call **getTimeofDay** as follows:

See [Best practices](/user-guide/how-to/build-skills/create-skill/customize-your-skill/best-practices), for general guidelines on programming.

### 

Example

In the MacPizza agent, consider that the following JS files and methods are added:

*   `greetingHandler.getTimeofDay()` - Used in the greeting message to display greetings according to the time of the day.
    
*   `orderStatus.getstatus(<<orderNumber>>)` - Check the status of the pizza order using the order number.
    

**Example 1**: In the Greetings skill, you can call greetings.getTimeofDay() method as follows:

Test the agent to view the response:

**Example 2**: In the Order Status skill, you can call the `orderStatus.getstatus(<<orderNumber>>)` the method in a JS response:

Note that here, the JS file and functions are defined at the agent level and all the methods are available at the skill level.

*   Test the agent to view the response:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-languages

You can add multiple languages to the agent so that the agent can respond in different languages. The translated text of the language is used in the agent response based on the detected language of the agent.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add languages to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configuration -> Language** tab option in the left navigation menu.
    
*   Click **Add languages** and select the language from the dropdown.
    

*   Add multiple languages using the plus (+) icon in the **Language.**
    
*   When you add a language, all the agent responses are automatically translated into the corresponding language. If you wish to view the translated text in a specific node, then navigate to the corresponding node to view the translated response. See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.
    

**Note**: Currently, custom translation is not supported for feedback and cancel buttons.

### 

Add translation

You can customize the translated responses of the agent in the **Configuration -> Language** tab.

*   Use this to provide custom translations for all sentences and texts used by the agent. Examples: text used in skills, persistent menu, live agent, etc.
    
*   Note that in all the cases, node-level translation has the highest priority. This implies that if you have the same translated text at the agent and the node-level, then the node-level translated response is displayed.
    

To add the required translated text in the **Language** tab:

*   In the **Agent** page, navigate to the **Configuration -> Language** tab.
    
*   Click **Add translation** to enter the English text and corresponding translated text.
    

### 

Delete language

You can delete a language from the skill using the **Delete** option in the **Configuration -> Language** tab.

### 

Make default language

You can add a language and click **Make default** to make the selected language in the language tab as the default language for responding to the user queries.

By default, when you navigate to the Implementation tab in any skill, the response of the default language as specified in the agent configuration is displayed.

Similarly, you can click **Remove default** to remove the respective language as default.

**Notes**:

*   This is applicable only for Web, Android, and iOS channels.
    
*   The language set in the channel settings is always given priority over the default language set in the Configuration -> Language page. See [Default web channel locale](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#default-web-channel-locale), for more information on how to set the default language in the web channel.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent

[Pre-built live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent)[Custom live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent

Avaamo platform supports integration with a **live agent** for scenarios when there is a need for human intervention. If the user requests or if the agent senses dissatisfaction, frustration, anger, or if the agent has defined intents for transfer, it seamlessly transfers the conversation to a human agent system such as Live Agent Or Zendesk.

**Notes**:

*   You can set up different rules for transferring a conversation to a live agent in the Avaamo platform. See [Live agent transfer rules](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-transfer-rules), for more information.
    
*   Currently, you cannot [transfer to a live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent) that is configured in the Avaamo Platform from the C-IVR channel. Instead, it is recommended that you use [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#call-forward) for connecting to live agents.
    

Avaamo Platform provides pre-built live agent integration with **Avaamo, Oracle Right Now, and Zendesk**. You can also configure your own custom live agent. See [Custom live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent), for more information.

### 

Configure live agent

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure a live agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

**To configure a live agent**:

*   In the **Agent** page, navigate to the **Configure -> Live agent** option in the left navigation menu.
    

*   Move the slider **Live agent system** to **Enabled** to use this feature.
    
*   **Save conversations**:
    

To ensure compliance with data privacy regulations such as PII, PHI, and GDPR, the Avaamo Conversational AI system now includes a **Save Conversations** toggle. This feature provides administrators with granular control over whether live agent interactions are stored within the system

Using this toggle button, you can choose not to record live agent interactions in the agent conversation history. By default, the Save conversations toggle button is enabled, which implies that live agent conversations between users and live agents are saved in the conversation history. This option helps to protect users' sensitive data in live agent conversations.

**Key points**:

*   Avaamo Conversational AI platform has always been GDPR compliant. Information masking can be used to protect PII/PHI/GDPR compliance data. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.
    
*   This applies only to all the live agent conversations saved in the Avaamo platform. The live agent conversation data in the external live agent systems such as Oracle, Zendesk, or any custom live agents must be handled separately by the respective systems according to the business requirements.
    
*   If the **Save conversations** toggle is set to **No**, then no data or chat conversations between the users and live agents are saved in the Avaamo platform. At the specific section in the Conversation history page, a system message indicating the same is displayed. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    

*   In the **Select a live agent system** dropdown, you can select one of the following live agent systems:
    
    *   **Avaamo**: No configuration required.
        
    *   **Oracle Right Now**: Configure using UserName, Password, and Site Name details provided by Oracle Right Now.
        
    *   **Zendesk**: Configure using the Chat Account Key provided by Zendesk. See [Zendesk integration](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent/zendesk-integration), for more information.
        
    *   **Custom**: Configure your own custom live agent. See [Custom live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent), for more information.
        
    

### 

Live agent avatar

You can add a unique live agent avatar in the **Configuration -> Live agent** page. This feature helps:

*   Users to easily distinguish a real virtual agent from a virtual assistant.
    
*   Developers to abide by the privacy regulations of an organization as in certain organizations there can be a legal requirement to have a different avatar for a real virtual agent versus a virtual assistant.
    

**To configure a live agent avatar**:

*   Move the slider **Live agent persona** to **Enabled**.
    
*   Click **Upload image** to upload a unique live agent avatar.
    
    *   Recommended image types: PNG, JPEG
        
    *   Recommended image size: 200px \* 200px
        
    
*   Provide a unique live agent name so that the user can identify the conversation with the live agent. The live agent name is displayed in the agent chat widget for all the themes except the **Messenger** theme. See [Agent theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#agent-theme), for more information.
    
*   Click **Save** to save the live agent configuration changes.
    

The following is an illustration where you can view the live agent avatar when a user initiates chat with a live agent:

The following is an illustration where you can view the live agent avatar and live agent name when a user initiates a chat with a live agent. Note that the theme used here for the agent is the [Orange theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#agent-theme).

### 

Automated messages

You can configure automated messages for the agent to display during the transfer process:

*   **Switch to agent:** Enter a message to inform the user that the conversation is transferred to a live agent. You can also configure different responses in the messages such as text, card, carousel. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
    

*   **Waiting message:** Enter a message that is displayed when the agent has not responded after a specified time. Use this message to acknowledge the user's patience and inform them of the wait duration. Currently, you can configure only simple text messages in the response.
    

*   **Time-out message:** Enter a message that is displayed when there are no agents available even after the specified time. Use this message to inform the user of the unsuccessful transfer to a live agent. Currently, you can configure only simple text messages in the response.
    

*   **Agent terminated chat:** Enter a message that is displayed after an agent terminates the conversation. Use this message to inform the user, the end of the conversation from the live agent. Currently, you can configure only simple text messages in the response.
    

*   **Switch to agent message:** Specify a message that is displayed when a user returns to the agent from live agent mode. You can also configure different responses in the messages such as text, card, carousel. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
    

### 

Live agent transfer rules

You can configure a few specific rules for the agent to transfer the conversation to a live agent.

*   **Intents to match:** You can add the intents that the agent can match with the user query and transfer the conversation. These intents must be defined in the agent.
    
*   **Silent switch**: You can select the checkbox for the silent switch, for the agent to transfer the conversation without any automated messages. You can also specify a message that is displayed in the agent when transferring to a live agent.
    
*   **Switch to live agent for unhandled queries:** You can program the agent to transfer the conversation for unhandled queries:
    
    *   Select the checkbox for the number of unhandled queries the agent will process before making the transfer.
        
    *   Select the checkbox for the user query message length, for the agent to make the transfer.
        
    *   Select the checkbox for the silent switch, for the agent to transfer the conversation without any automated messages.
        
    

### 

Working hours

You select the checkbox for working hours so that the agent transfers the conversation only during the specified period. In the **Working Hours** section, you can specify the following details:

*   **Time zone** of working hours
    
*   **From** and **To** time of working hours
    
*   **Weekly holidays**. Note that during weekly holidays, the agent does not transfer the conversation to a live agent.
    
*   **Unavailable message**: Enter the message that is displayed when a request to transfer to a live agent is after working hours. Use this message to indicate the unavailability and the working hours to the user.
    

If you cannot specify the proper working hours using the options provided, then you can also specify a custom Javascript to handle the working hours by enabling **Custom working hours handler.** The following is a sample JS for defining custom working hours:

You must return true or false from the Custom working hours handler:

*   When you return true, it implies that the agent is available and the automated messages as configured for the agent availability is displayed. See [Automated messages](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#automated-messages), for more information.
    
*   When you return false, it implies that the agent is unavailable and the message as configured in "Unavailable message" is displayed.
    

**Note**: You can also transfer to a live agent in JS using Agent.transfer() method. See [Agent.transfer](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.transfer), for more information. When you are using Agent.transfer() in JS node to transfer to a live agent, then

*   It gives you enhanced control of when to transfer to a live agent and what must be done once the transfer is completed.
    
*   Since it gives you more flexibility, you can set conditions required before transferring to a live agent in the JS itself. If any working hours is required before transferring to a live agent, it must be handled within the JS code itself before using Agent.transfer(). Hence, working hours set in the Live agent page is no longer applicable.
    

### 

Callbacks

You can program the live agent system to give users options to execute scripts before the transfer of the conversation, time-out, and agent termination.

You can use [Agent.setContext](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.setcontext) to set live agent context based on the user properties which can be used to set up routing rules. For example, you can set the context based on the user location and set up a rule in the Live agent system to transfer all the requests from the specific user location to a different team. See [Example: Routing rule based on location](/user-guide/live-agent-console/supervisor/rule-based-routing#example-routing-rule-based-on-user-location), for a sample demonstration.

**Examples**: To request user feedback after an agent conversation, to cancel the transfer, or to request a callback from an agent.

The following is a sample code snippet for requesting user feedback after agent conversation:

**Notes**:

*   Place this script in the **After terminated** section. This is just a sample script and you can customize this as per your requirement.
    
*   Thumbs up and Thumbs down are the default feedback options in the system, the customized feedback does not provide these options and customized feedback is not available in Analytics.
    
*   You must use storage variables to capture and fetch back the customized feedback. See [How-to use storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/using-storage), for more information.
    

In the sample script, you are using Post message API to post a message to the user after a live agent conversation. See [Post messages](/user-guide/ref/avaamo-platform-api-documentation/message-api#post-messages), for more information. You can also post different messages using cards and quick reply using Post message API.

### 

Agent chat transcript

You can export the chat history of the conversation between live agents and the users for a selected date range in a CSV format.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent/zendesk-integration

You can integrate the Avaamo Platform with Zendesk for live agent interactions, for scenarios, when there is a need for human intervention. When integrated with the Avaamo Platform, if the user requests, or if the agent senses dissatisfaction, frustration, or anger, or if the agent has defined intents for transfer, it seamlessly transfers the conversation to Zendesk.

### 

Pre-requisites

*   You must have an account set up with Zendesk for a chat.
    

*   Once that chat is set up, click the profile icon -> Check connection to find the account key.
    

*   Make a note of the account key.
    

See [How do I find my Chat Account Key?](https://support.zendesk.com/hc/en-us/articles/203661666-Setting-up-Zendesk-Chat-in-Zendesk-Support#topic_sdz_2hq_sgb) for more information.

### 

Integrate with Zendesk

*   In the **Agent** page, navigate to the **Configure -> Live agent** option in the left navigation menu.
    
*   Specify the account key, in the **API key** text box provided for Zendesk integration.
    

*   Click **Save**.
    

### 

Test your integration

*   In the **Agent** page, navigate to the **Test -> Simulator** option in the left navigation menu. Alternatively, you can also test using the **agent icon** in the bottom-right corner.
    
*   Transfer the chat to the live agent. For testing purposes, you can use the skill command **#transfer to agent or #talk to agent.**
    

*   In the Zendesk dashboard, a message to serve the request is displayed. Click the message.
    

*   Type a message in the agent. You can view the response in the Zendesk chat window.
    

*   Type a message in Zendesk. You can view the text in the agent.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent

Avaamo Platform provides pre-built live agent integration with Avaamo, Oracle Right Now, and Zendesk. However, if you wish to transfer to a live agent other than those available, then you can configure a custom live agent. When you configure a custom live agent in the Avaamo platform, you also provide a webhook URL that is used as an endpoint to send and receive requests and responses to and from the Avaamo platform.

When the user interacts with the virtual assistant and requests to speak to a live agent, the request is sent to the live agent (chat application) via a webhook call. The **Live agent integrator** is used to transform the payloads to and from the Avaamo platform and the **Custom live agent** respectively.

The following diagram illustrates the data flow between the user, Avaamo platform, and Custom live agent:

**Note**: Currently, you cannot [transfer to a live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent) that is configured in the Avaamo Platform from the C-IVR channel. Instead, it is recommended that you use [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#call-forward) for connecting to live agents.

## 

Configure custom live agent

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure a custom live agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

**To configure a custom live agent:**

*   In the **Agent** page, navigate to the **Configuration -> Live Agent** option in the left navigation menu.
    
*   Move the slider to **Yes** to **enable** the live agent feature.
    
*   In the **Select a Live Agent System** dropdown, select **Custom** from the dropdown list.
    
*   Enter the **Webhook URL** of the live agent application you are using.
    
*   Enter any additional key-value pairs in the format `key:value` that must be passed in the **Header** for authenticating the request from the Avaamo platform to the live agent application. This field is optional and currently, only one key-value pair is supported.
    
*   Click **Save** to save custom live agent settings. An API **Access Token** is generated that is used for communication between Avaamo Platform and custom live agent.
    

**Notes:**

*   You can configure only a single live agent for an Avaamo Agent.
    
*   You cannot delete the configured live agent on the platform, you can only disable it. Move the **Enable** slider button on the top. It moves to **No**.
    
*   To change a live agent, you can edit the agent in the **Agent** page and select a new live agent.
    
*   You can also configure a **Live agent avatar**, **Automated Messages**, **Live Agent Transfer Rules**, **Working Hours**, **Callbacks**, and **Agent Transcripts**. See [Pre-built Live Agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent), for more information.
    

**Key Point**: Make a note of the **API access token** and **Webhook URL**. These are used for communications between the Avaamo Platform and custom live agents.

## 

OAuth2 authorization

In scenarios where the connection to the custom live agent is not directly exposed and available only through an OAuth2 provider, the Avaamo platform provides you the option to connect to a custom live agent using the authorization token issued by the OAuth2 provider.

### 

Pre-requisite

*   The first step is to register the Avaamo application with the OAuth2 provider. Registration allows the OAuth2 provider to uniquely identify the Avaamo application.
    
*   Make a note of the client ID and client secret. The app needs these keys when negotiating for access tokens with the authorization server.
    

### 

Enable **OAuth2 authorization**

After registering the application with the OAuth2 provider, the next step is to configure the custom live agent system with OAuth2 details in the Avaamo platform:

**To enable OAuth2 authorization in custom live agent**:

*   In the **Live agent** page, toggle the OAuth2 authorization slider to enable OAuth2 authorization. Note that this is visible only when you select **Custom** as the Live agent.
    
*   Specify the following details for OAuth2 authorization:
    

Parameters

Description

Client ID

The client ID obtained after registering the Avaamo application with the OAuth2 provider.

Client secret key

The client secret key obtained after registering the Avaamo application with the OAuth2 provider.

Authorization URL

This is the URL from the OAuth2 provider used to obtain authorization for the Avaamo application.

*   Click **Save** to the OAuth2 details.
    

### 

How does **OAuth2 authorization work?**

The following diagram illustrates the steps on how the authorization token can be obtained from the OAuth2 provider and passed through different layers when a live agent chat with the custom live agent is requested from an Avaamo agent:

*   User requests transfer to the custom live agent
    
*   Avaamo requests an authorization token from the OAuth2 provider using the Authorization URL, Client ID, and Client secret key. See [Enable OAuth2 authorization](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#enable-oauth2-authorization), for more information.
    
*   OAuth2 provides the authorization token.
    
*   Avaamo connects to the custom live agent using the authorization token. The "Authorization: Bearer <token>" will be sent as a part of the request headers while making HTTP requests to the custom live agent webhook URL.
    

**Note:** Making API calls using the OAuth 2.0 access token may encounter errors if the access token is no longer valid because the token expired or was revoked. In this case, the resource server will return a 4xx error code. In this case, steps 2 and 3 get repeated, to get the new access token using the client secret key.

## 

Live agent request

When a user requests a transfer of the conversation from the **Avaamo Agent** to the **Live Agent**, the **Avaamo Agent** sends a webhook call via the webhook endpoint to the chat application used for the live agent. The live agent then responds with API to accept the request. The basic flow of the live agent request is illustrated in the diagram below:

The four requests that get processed during the interaction between Avaamo Platform and custom live agent are:

*   [Chat request](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#chat-request): New chat request sent over the Webhook URL.
    
*   [Accept request](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#accept-request): Chat request is accepted by sending an API request to accept the chat in response to the webhook call request. A corresponding payload is sent over the Webhook URL once the chat is accepted.
    
*   [Chat in-progress](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#chat-in-progress): After the request is accepted by the custom live agent, the user can communicate with the custom live agent by sending messages via the Avaamo Agent. The live agent responds by sending a message to the user from the live agent via API.
    
*   [End request](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#end-request): A live agent session can be terminated via API request and the corresponding message is received by the user interacting with the Avaamo Agent.
    

### 

Chat request

Consider that you wish to transfer to a live agent while interacting with **Mac Pizza Agent**:

When a user sends a transfer request to a custom live agent, the following payload is sent over the Webhook URL:

See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the payload parameters.

#### 

**Retrieve requests**

You can retrieve all of the current chat requests sent by the **Avaamo agent** to the live agent using the following API:

*   **URL:** `https://cx.avaamo.com/live_agent/custom/conversations/requests.json?access_token=<token>`, **access\_token** is the API Access Token as generated by Avaamo Platform while configuring a custom live agent. See [Configure Custom Live Agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#configure-custom-live-agent), for more information.
    
*   **Method**: GET
    
*   **Success response code:** 200
    
*   **Response**: In response, the requests are an array of all the chat requests sent by the **Avaamo agent** to the live agent. The following is a sample JSON response received:
    

See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the parameters sent in the API.

**Key Points**:

*   The event\_type for a new chat request is **new\_chat\_request**.
    
*   Make a note of **conversation\_uuid**. This is used in the API when a chat request is accepted
    

### 

Accept request

The live agent request is accepted by sending the following API in response to the webhook call request:

*   **URL**: `https://cx.avaamo.com/live_agent/custom/conversations/<conversation_uuid>/accept_chat.json?access_token=<token>`
    
    *   **access\_token** is the API Access Token as generated by the Avaamo platform while configuring custom live agents. See [Configure Custom Live Agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#configure-custom-live-agent), for more information.
        
    *   **conversation\_uuid** is the unique conversation identifier generated per user. Use the conversation\_uuid as generated when a chat request is sent. See [Chat Request](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#chat-request), for more information.
        
    
*   **Method**: PUT
    
*   **Success response code:** 200
    
*   **Response**: The following is a sample JSON response:
    

See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the response parameters.

When the live agent chat request is accepted the following payload is sent over the Webhook URL:

See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the payload parameters.

**Key Points**:

*   The event\_type for an accepted chat request is **chat\_request\_accepted.**
    
*   Chat requests must be accepted for users to interact with a live agent. If a chat request is on hold or rejected, then the corresponding messages as configured in the live agent are displayed and the conversation is returned back to the **Avaamo Agent**.
    

### 

Chat in-progress

After the request is accepted by the custom live agent, the user can communicate with the custom live agent by sending a message via the Avaamo Agent.

The following payload is sent over the Webhook URL:

*   In the URL, access\_token is the API Access Token as generated by the Avaamo platform while configuring custom live agents. See [Configure custom live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#configure-custom-live-agent), for more information.
    
*   See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the payload parameters.
    

The live agent responds by sending a message to the user from the live agent via API:

*   **URL**: `https://cx.avaamo.com/live_agent/custom/messages.json?access_token=<token>`
    
*   **Method**: POST
    
*   **Data**:
    

See [Payload parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the API request and responses.

Correspondingly, the following message is received in the Avaamo Agent:

### 

End request

A live agent session can be terminated using the following API:

*   **URL**: `https://cx.avaamo.com/live_agent/custom/conversations/<conversation_uuid>/end_chat.json?access_token=<token>`
    
    *   **access\_token** is the API Access Token as generated by the Avaamo platform while configuring custom live agents. See [Configure Custom Live Agent](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#configure-custom-channel), for more information.
        
    *   **conversation\_uuid** is the unique conversation identifier generated per user. Use the conversation\_uuid as generated when a chat request is sent. See [Chat Request](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#chat-request), for more information.
        
    
*   **Method:** DELETE
    
*   **Response:** HTTP 204 No content - Success
    

Correspondingly, the following message is received in the Avaamo Agent:

When the live agent chat is terminated, the following payload is sent over the webhook URL -

See [Payload Parameters](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#payload-parameters), for more details on the payload parameters.

**Note -** The message uuid, event uuid, conversation uuid, user uuid, are all unique identifiers and help differentiate between users and conversations.

### 

**Payload parameters**

The webhook calls and APIs use the following parameters to process a request:

Parameters

Description

event

Indicates the event details -

*   **uuid**: Indicates a unique Id assigned for the event.
    
*   **event\_type**: Indicates the type of event. The following are the supported event types - new\_chat\_request, chat\_request\_accepted, user\_message, and chat\_terminated.
    
*   **created\_at**: Indicates the created date and time of the event in seconds.
    
*   **chat\_request/uuid**: Indicates a unique Id of the chat request.
    

conversation/uuid

Indicates a unique identifier of conversation per user. Note that conversation/uuid is different for each user.

display\_name

Indicates display name of the conversation in the following format: **<<Avaamo Agent Display Name>>, <<User First Name>>**.

bot

Indicated the details of the **Avaamo Agent**.

*   **bot\_uuid**: Indicates a unique identifier of the agent.
    
*   **display\_name**: Indicates the display name of the agent as specified while creating the agent.
    
*   **description**: Indicates the description of the agent as specified while creating the agent.
    

user

Indicates the user details sending the request to the **Avaamo Agent** -

*   **uuid**: Indicates a unique Id assigned to the user.
    
*   **first\_name**: Indicates the first name sent in the incoming request by the user.
    
*   **last\_name**: Indicates the last name sent in the incoming request by the user. If the last name is not available, then the last name is null.
    
*   **email**: Indicates the user’s email address.
    
*   **layer\_id**: Indicates an internal user Id used by the Avaamo platform.
    
*   **custom\_properties**: Indicates any custom key-value pairs that are sent in the payload by the custom channel and returned in the callbacks.
    
*   **display\_name**: Indicates the display name of the user.
    

device

Indicated the details of the device -

*   **device\_uuid**: Indicates a unique identifier of the device.
    
*   **channel\_name**: Indicates the channel where the user is interacting with the **Avaamo Agent**.
    
*   **last\_visited\_page**: Indicates the URL of the last page visited by the user.
    

message

Indicates the message details by the user and the **Avaamo Agent**.

*   **uuid**: Indicates a unique identifier of the message
    
*   **content**: Indicates the content of the message.
    
*   **content\_type**: Indicates the content type of the message. Currently, only text is supported.
    
*   **created\_at**: Indicates the created date and time of the event in seconds.
    

## 

Test custom live agent

With the custom live agent configured for your **Avaamo agent**, you can test the live agent to gain user perspective:

*   Test the agent by clicking on the icon at the bottom right corner of the **Dialog Studio** page.
    
*   Ask for a live agent and check if the **Avaamo agent** is able to transfer the conversation.
    

*   Check if the appropriate payload is sent over the Webhook URL as configured in the custom live agent settings.
    
*   You can retrieve all of the current chat requests sent by the **Avaamo agent** on the live agent with the following API: `https://cx.avaamo.com/live_agent/custom/conversations/requests.json?access_token=<token>`
    
*   Check on your live agent if the agent is able to accept the conversation. When the chat request is accepted, a payload is sent over the Webhook URL as configured in the custom live agent settings.
    
*   Test for the payload sent over the Webhook URL and the response from the live agent via API during chat conversations, once the request is accepted. See [Chat In-Progress](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#chat-in-progress), for more information.
    

**Key Points**:

*   You can test the APIs using a tool like **Postman**.
    
*   You can test webhooks by generating a sample API URL from any webhook tester sites such as from **Webhook.site**.
    

## 

Troubleshooting tips

In cases where you are unable to receive the expected **Avaamo agent** response, refer to the following troubleshooting tips:

1.  Ensure that the live agent feature is enabled.
    
2.  Ensure the right webhook URL is entered.
    
3.  Ensure the correct API token is used parsed.
    
4.  You can retrieve all of the current chat requests sent by the **Avaamo Agent** on the live agent using the following API: `https://cx.avaamo.com/live_agent/custom/conversations/requests.json?access_token=<token>`
    
5.  You can also use **ngrok** to help with development and debugging.
    
6.  If you are using any tool such as **Postman** to verify the HTTP request, then you can also check for the standard HTTP error codes in the response. Contact **Avaamo Operations Team**, for further assistance.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/permissions

By default, when you create an agent, you are the **owner** of the agent. Additionally, when a user promotes an agent that the user is automatically the owner of the agent in the promoted stage. As an owner of the agent, you can assign permissions to different people within your company for your agent as required. This allows different users to participate and collaborate in each stage of the agent life-cycle.

There are four types of permissions available for an agent:

*   **View**: Users can only view the agent but cannot edit the agent. Note that anyone with at-least view permission on the agent can submit the Unhandled query analyzer job. See [Unhandled query analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated), for more information.
    
*   **Edit**: Users can view and edit the agent.
    
*   **Publish**: Users can view agents, edit agents, and publish skills from the agent to the skills store.
    
*   **Owner**: Full access to the agent. Users can view agents, edit agents, publish skills from the agent to the Skill store, and edit agent permissions.
    
*   **Analytics**: Users can view
    
    *   **Getting Started** screen
        
    *   **Debug → Conversation history**
        
    *   **Monitor → Analytics**
        
    *   **Monitor → User journey**
        
    *   **Monitor → Query insights**
        
    

The following table summarizes the actions and the corresponding agent permissions applicable for each action:

**Key Point**: Only the owner of the agent can edit the permissions for the agent.

## 

Group-level permissions

Permissions can be assigned to individual users and also to groups. When permissions are assigned to a group, it is applicable to all the users of a group. Managing permission at the group level is easier and efficient. See [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups), for more information.

**Example 1**: Consider that you have created a group and assigned edit permission to the group in 10 agents. You wish to provide edit permission to all 10 agents for a new user. Instead of providing edit permission to the user individually in each agent, you can simply add the user to the group and the permission applicable to the group is now available to the new user too.

**Example 2**: Consider that you need to assign a user and provide edit permission for 10 different agents. Instead of assigning Users and providing edit permission for all the 10 agents, you can add users to the group which is assigned and provided edit permission for all the 10 agents

See [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#creating-and-managing-groups-in-the-avaamo-platform), for more information on managing users and groups in the Avaamo Platform.

**Note**: If a user belongs to multiple groups and each group is assigned different permissions on the agent, then the permission applicable to a user is a union of all the permissions from individual groups.

**Example**: Consider the following scenario:

*   User 1 belong to Group 1 and Group 2
    
*   Group 1 has View permission on the agent
    
*   Group 2 has Edit permission on the agent
    

Hence, User 1 has both View and Edit permission on the agent.

## 

**Configure permissions**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure permissions immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, navigate to the **Configuration -> Permissions** option in the left navigation menu.
    
*   In the **Permissions** pop-up, you can configure the following permissions and click **Save**:
    
    *   **Anyone within Company can view the agent**: With this option, all users within the company can only view the agent.
        
    *   **Anyone within Company can edit the agent**: With this option, all users within the company can view and edit the agent.
        
    *   **Only specific people/groups can access the agent**: When you select this option, you can search, select people or groups within your company, and provide the required access such as - View, Edit, Publish, or Owner. Type the users or groups and click **Add** to give specific permissions.
        
    

The following illustration depicts how to assign specific permissions to selected users and groups in an agent:

## 

Example

Consider that an agent with the following permissions assigned to the users:

*   John Miller - Owner
    
*   Max Williams - View
    
*   Mark Smith - Edit
    
*   Tom Wilson - Publish
    

### 

View

For the user (Max Williams) with only view permission, the **Edit** button to unlock the agent is not available. Hence, the user can only view the agent and cannot perform any edit operations on the agent:

### 

Edit

For the user (Mark Smith) with only edit permission, the **Edit** button to unlock the agent is available. The user can perform edit operations on the agent. However, the user cannot publish the skills from the agent to skills store, as the publish option is disabled:

### 

Publish

For the user (Tom Wilson) with publish permission, the **Edit** button to unlock the agent is available. The user can perform the following actions on the agent:

*   The user can perform edit operations on the agent.
    
*   The user can publish skills from the agent to the Skill store.
    

*   The user can only view the permissions of the agent. Users cannot update the permissions of the agent.
    

### 

Owner

The user, John Miller, is the owner of the agent and can view agents, edit agents, publish skills from the agent to the Skill store, and edit agent permissions.

### 

Analytics

For the user (Max Williams) with only `analytics` permissions, either assigned directly or through a group, the Edit button to unlock the agent is unavailable. Hence, the user can only view these options of the agent and cannot perform any edit operations on the agent:

*   Getting Started screen with limited access
    
*   Debug → Conversation history
    
*   Monitor → Analytics: The charts on the analytics page are not interactive and cannot be clicked.
    
*   Monitor → User journey
    

## 

FAQs

### 

1\. How do I get super admin access to see all agents in a company?

By default, the developer who creates the agent is the owner of the agent. The owner is the highest permission to any agent. Only the owner of the agent can modify the permissions for their respective agent. An organization that wishes to have visibility on all agents, can inculcate a practice internally to ensure adding the required permission among the below three on all the existing and new agents. See [Configure permissions](/user-guide/how-to/build-agents/configure-agents/permissions#configure-permissions), for more details.

1.  Anyone within Company can view the agent
    
2.  Anyone within Company can edit the agent
    
3.  Only specific people/groups can access the agent
    
4.  Add the right required permission to the required people/groups. See, [View](https://docs.avaamo.com/v5/how-to/build-agents/configure-agents/permissions#view), [Edit](https://docs.avaamo.com/v5/how-to/build-agents/configure-agents/permissions#edit), [Publish](https://docs.avaamo.com/v5/how-to/build-agents/configure-agents/permissions#publish), [Owner](https://docs.avaamo.com/v5/how-to/build-agents/configure-agents/permissions#owner) for more details
    

**Note**: In case of any other reasons, if an organization needs the list of agents created under their company with the respective owners, you can reach out to support with the use-case details.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-persistent-menu

A **Persistent menu** allows you to specify menu options that are always available to the user. Having a persistent menu easily communicates the basic capabilities of your agent for first-time and returning users. This is an optional configuration.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure an agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

There are two panels in the **Persistent menu** page, the right panel is a preview of how the configuration is displayed in your agent and the left panel is where you can configure details. In the right panel, you can select options on how you wish to display the menu options in the agent:

*   **Expanded**: By default, the menu option is expanded in the agent. However, the user can collapse the menu options in the agent, if required.
    
*   **Always Expanded**: By default, the menu option is expanded and always stays expanded in the agent. The user cannot collapse the menu options.
    
*   **Collapsed**: By default, the menu option is collapsed in the agent. However, the user can expand the menu options in the agent, if required.
    

## 

**Configure persistent menu**

*   In the **Agent** page, navigate to the **Configure -> Persistent menu** option in the left navigation menu.
    
*   You can add multiple menu options using **Add action**. The following types are supported:
    
    *   [Web page (In-app)](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#web-page-in-app)
        
    *   [Web page (External Browser)](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#web-page-external-browser)
        
    *   [Deeplink](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#deeplink)
        
    *   [Post message](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#post-message)
        
    

### 

Web page (In-app)

Use this when you wish for navigating to the specified URL and to open the menu in the agent chat widget.

**Key points**:

*   Specify complete URL
    
*   This is applicable only when the agent is deployed on the Web channel.
    
*   Select **Append user identity** if you wish to append the encrypted JWT token of user details in the URL. See [Append user identity](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#append-user-identity), for more information.
    

**Example**: Consider that you wish to create a persistent menu "Help" that navigates to the specified URL and opens the menu in the agent chat widget:

*   For this use case, the following sample HTML is created and hosted in a publically accessible URL
    

*   In-order to render the **Help** menu, the following Custom CSS is configured in the Agent -> Channels -> Web -> Theme section. See [Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#custom-css), for more information.
    

The following is the Custom CSS used in this example:

*   Navigate to **Configuration -> Persistent menu** and specify the following details:
    
    *   Name: Help
        
    *   Type: Web page (In-app)
        
    *   Link: <<link of the HTML that is publically hosted>>
        
    

*   Click **Save** to save the persistent menu details.
    
*   Click the agent widget icon at the bottom-right corner to test the agent.
    
*   Click the **Persistent menu** in the agent typing text area.
    

*   In the **Persistent menu,** click `Help` link.
    

*   You can view the Help menu displayed in the agent chat widget:
    

### 

Web page (External Browser)

Use this option for navigating to the specific URL in a new browser tab.

**Key points**:

*   Specify complete URL
    
*   This is applicable only when the agent is deployed on the Web or Facebook channel.
    
*   Select **Append user identity** if you wish to append the encrypted JWT token of user details in the URL. See [Append user identity](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#append-user-identity), for more information.
    

**Example**: Consider that you wish to create a persistent menu that navigates to the home page of the MacPizza website:

*   Navigate to **Configuration -> Persistent menu** and specify the following details:
    
    *   Name: MacPizza - Home
        
    *   Type: Web page (External Browser)
        
    *   Link: [https://macpizza.com/](https://macpizza.com/)
        
    

*   Click **Save** to save the persistent menu details.
    
*   Click the agent widget icon at the bottom-right corner to test the agent.
    
*   Click the **Persistent menu** in the agent typing text area.
    

*   In the **Persistent menu,** click `MacPizza - Home` link.
    

*   The specified URL is opened in a new browser tab.
    

### 

Deeplink

Currently, deep links can be used only to navigate to a specific node in the flow in the Persistent menu. See [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more information.

Use `avaamo:#messages/hidden/%23goto_node_<skill_key>>.<<intent_key>>/new/<<message>>`, for navigation to a different node in the conversation flow.

**Example**: Consider that you wish to create a persistent menu that navigates to a specific node in the flow:

*   Navigate to **Configuration -> Persistent menu** and specify the following details:
    
    *   Name: Register me
        
    *   Type: Deep Link
        
    *   Link: `avaamo:#messages/hidden/%23goto_node_register_skill.start/new/Registration-Begin`
        
    

*   Click **Save** to save the persistent menu details.
    
*   Click the agent widget icon at the bottom-right corner to test the agent.
    
*   Click the **Persistent menu** in the agent typing text area.
    

*   In the **Persistent menu,** click `Register me` link.
    

*   The flow navigates to the specified node in the persistent menu:
    

*   You can also click the eye icon to view if the menu option has navigated to the desired skill and intent key:
    

### 

Post message

Use this to post a specific message to the agent.

**Example**: Consider that you wish to create a persistent menu that posts a message in the agent:

*   Navigate to **Configuration -> Persistent menu** and specify the following details:
    
    *   Name: Order pizza
        
    *   Type: Post message
        
    *   Link: I want to order pizza
        
    

See [Flow control](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), for more details on goto node.

*   Click **Save** to save the persistent menu details.
    
*   Click the agent widget icon at the bottom-right corner to test the agent.
    
*   Click the **Persistent menu** in the agent typing text area.
    

*   In the **Persistent menu,** click `Order Pizza` link.
    

*   You can see the message is posted in the agent:
    

**Note**:

*   The following notification messages are displayed in the persistent menu. Note that these are applicable only if you are using the Facebook channel to deploy your agents.
    

The "number of persistent menu items" restriction is due to the limitations of Facebook messenger See [call\_to\_actions in the properties section](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu#properties), for more information.

## 

Append user identity

The **JWT** is generated for passing a unique user identifier, first name, last name, email/phone (if available), and other optional user information that the agent can use to enhance its interaction with the user. See [JWT](https://jwt.io/), for more information on how to encode user payload with the secret key using the HS256 algorithm:

*   The following is a sample user payload. Currently, only the following properties can be extracted from the JWT token - uuid, first\_name_,_ last\_name, email, and timetoken.
    

**Example**: Consider that you wish to create a persistent menu that navigates to the home page of the MacPizza website and append the encrypted JWT token of user details in the URL.

*   Navigate to **Configuration -> Persistent menu** and specify the following details:
    
    *   Name: MacPizza - Home
        
    *   Type: Web page (External Browser)
        
    *   Link: [https://macpizza.com/](https://macpizza.com/)
        
    *   Check the "Append user identity" check box.
        
    

*   In the **Persistent menu,** click `MacPizza - Home` link.
    

*   The specified URL is opened in a new browser tab and the encrypted JWT token is passed in the **user\_jwt\_token** URL parameter.
    

## 

Persistent Menu Compliance

Persistent menu is supported only in the following channels:

*   [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel)
    
*   [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps)
    
*   [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps)
    
*   [Facebook (except Deeplink)](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-response-filters

You can configure response filters based on the user properties such as location, manager status, or exempt/non-exempt status. Later, you can use these response filters to filter skill responses for the same user intent in an agent. **Example**: In an HR agent, consider the user query "When is the year-end bonus paid?". Bonus paid for Indian and US employees can be different. You can define multiple responses for an intent based on the user's properties so that agent’s response is different for an Indian user and a US user. See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

This feature helps in:

*   Rapid agent development: You can use the same agent and tailor the responses based on different user properties.
    
*   Providing personalized responses for the same user intent, say, for example, based on the location of the user, or department a user belongs to, or time zone.
    
*   Configuring filtered responses completely in the UI without writing any JS code
    

See the following topics for more information on how to add the response filters to skill responses:

*   [Build Dialog skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses)
    
*   [Add questions and answers in Q&A responses](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages)
    
*   [Add questions and answers in Smalltalk responses](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa)
    

Make a note of the following before you add, edit, or delete response filters in agents.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add languages to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

## 

Add response filters

You can add two types of response filters: User property and Custom code.

*   In the Agent page, navigate to the **Configuration -> Response filters** option in the left navigation menu.
    
*   Click **Add filter**. Select one of the following options:
    

Filters

Description

User property

Use this to filter responses based on user properties. See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information. Specify the following details:

*   Name of the response filter.
    
*   User property for which you wish to define the response filter.
    
*   Enter values for the selected user property and click **Add**. Each value in the filter is an OR condition; the filter is applied even if one of the values match. Note that you can add upto 50 values to a user property.
    

Custom code

Use this to filter responses based on any other custom condition that cannot be configured using user property. The custom code specified here acts as a response filter. Specify the following details:

*   Name of the response filter.
    
*   Enter the custom JS code for defining your filter. The JS must return true or false or a number. The Response filter is applied if the JS code returns true or a number. If the JS code returns 0, then it is considered false and the response filter is not applied in this case.
    

*   Click **Add** to add more conditions to the filter. Each condition in the filter is an AND condition; the filter is applied only when all the conditions match. This option is only available for response filters created using user properties. Note that you can add upto 50 conditions in a response filter.
    

## 

Edit response filters

*   In the Agent page, navigate to the **Configuration -> Response filters** option in the left navigation menu.
    
*   Update the name, user properties, and values of the required Response filters. Click **Save**. If the response filter is used in the skill responses, then the response filters in the corresponding skill responses are also updated.
    

## 

Delete response filters

*   In the Agent page, navigate to the **Configuration -> Response filters** option in the left navigation menu.
    
*   Click **Delete** to delete the filter. You can also click the **Delete** icon to delete values from the response filters.
    

**Note**: You can only delete a response filter that is not used in any skill response. If a response filter is used in any skill response, then a warning message is displayed. You must first remove the response filters in all the skill responses before deleting the response filter.

## 

Frequently asked questions (FAQs)

### 

1\. When multiple conditions are added in a response filter

Each condition in the filter is an AND condition; the filter is applied only when all the conditions match. This option is only available for response filters created using user properties.

### 

2\. When multiple responses filters are added to a skill response in the user intent

Each response filter is an AND condition; the response is displayed only when all filters match.

### 

3\. When multiple responses with response filters match the user intent

When you add multiple responses to intent, then the responses are evaluated as follows:

*   All those responses with no response filters have a return value of 1.
    
*   The response filter with user property matches has a return value of 1.
    
*   The response filter with JS code matches where JS code returns true and has a return value of 1.
    
*   If the response filter with the JS code matches and the JS code returns a number, then the number is considered as the return value.
    
*   Among the set that matches, if all of them have an equal return value, then a random response is displayed, else the one that has the highest return value is displayed to the user.
    

Consider that you have added the following responses with the response filters for an intent (Dialog, Q&A, or Smalltalk):

*   Resp1 -> Response filter based on user property
    
*   Resp2 -> Response filter based on user property
    
*   Resp3 -> Response filter using Custom JS code. Returns 2.
    
*   Resp4 -> Response filter using Custom JS code. Returns true.
    
*   Resp5 -> Response filter using Custom JS code. Returns 2.
    
*   Resp6 -> Response filter using Custom JS code. Returns 3.
    

The following table summarizes the response displayed to the user. The tick mark indicates that the response filter matched:

Scenario

Resp1

Resp2

Resp3

Resp4

Resp5

Resp6

Result

a

✅

✅

Random

b

✅

✅

Resp3

c

✅

✅

Random

d

✅

✅

Resp6

e

✅

✅

Resp3

f

✅

✅

Random

### 

4\. When multiple responses are added to an intent without any response filter

If you add multiple responses for an intent without any response filter, then the system picks a random response from the set of multiple responses and displays it to the user.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/define-settings

You can specify the general settings of the agent such as persona, notifications, and question repeat count from the **Configuration -> Settings** option. Also, you can note the agent authentication keys generated by the platform that can help you access certain details about your agent.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

## 

Returning user message handler

You can write a JavaScript code in the **Returning user message handler** that is executed when the returning user accesses the agent and the returning value is sent as an agent response.

**Note**: `goto_node` and `goto_output` are not supported in the Returning User Message Handler JS block.

**Example**: Consider that you have specified the following JS code in the **Returning user message handler**:

Copy

    return [{
        quick_reply: {
            "content": "Would you like help with any of the following?",
            "links": [{
                    "title": "Placing an order",
                    "type": "post_message",
                    "value": "Just mention type of pizza with your toppings and you are good to go."
                },
                {
                    "title": "Kids Menu",
                    "type": "post_message",
                    "value": "All our menu items are customizable for kids."
                },
                {
                    "title": "Others",
                    "type": "post_message",
                    "value": "We will connect with a customer service representative."
                }
            ]
        }
    }]

Consider that you have already accessed the agent once and you are accessing it again. The JavaScript code as specified in the **Returning user message handler** is executed, and you can view the following message in the agent as soon as you access it:

## 

User authentication handler

You can authenticate the users using the agent in the web, phone, or SMS channels using this block. Here, you can write any custom JS code based on your requirements and it gets executed to authenticate the user before the agent loads. This helps secure all communication through the agent by authenticating the user before using the channel.

**Note**: You can use global storage (Storage.global.set and Storage.global.get) in the User authentication handler. However, you cannot use user storage variables in the User authentication handler, as the user is not created yet. See [Storage variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage), for more information.

### 

Web and Phone Channels

Ensure that you have enabled custom user authentication in the Web channel. See [Web channe](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#security)l, for more information.

The JS code has a "key" (uuid) embedded in the agent URL, and this "key" is then parsed through the Avaamo server and then to the client. Once authenticated by the client-server, the user can interact with the agent. The diagram below explains the process of authentication of a user interacting with the agent through the Avaamo server to the client-server:

**To add custom user authentication for your agent in the web channel**:

Ensure that you have enabled custom user authentication in the Web channel. See [Web channe](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#security)l, for more information.

*   In the **Agent -> Settings** page, navigate to the **User authentication handler** block to add the JavaScript code.
    
*   You can access the custom properties and other properties passed through the web channel using `context.params` in the User Authentication Handler.
    
*   You can pass any parameters in the return value, however, passing `uuid` is mandatory. Here, `role` and `authStatus` are returned to the agent along with `uuid`.
    

*   Click **Save.**
    

**To test the agent:**

*   Navigate to **Agent -> Channels**. Click **View** in Web channel. Click **Test** to test the agent.
    
*   A demo test URL is displayed in the new tab. Click the agent icon at the bottom-right corner.
    
*   Once the JavaScript code is added, it is called every time the agent loads. You can view the same update in the user profile of conversation history.
    

*   If the user is not authenticated, then the agent displays a blue screen with a 403 error.
    

### 

SMS channel

Ensure that you have enabled custom user authentication in the SMS channel. See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms#deploy-your-agent-to-sms-channel), for more information.

**To add custom user authentication for your agent in the SMS channel**:

*   In the **Agent -> Settings** page, navigate to the **User authentication handler** block to add the JavaScript code.
    
*   You can access the custom properties passed through the SMS channel using `context.params` in the User Authentication Handler. See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.
    
*   You can pass any parameters in the return value, however, passing `to_phone` is mandatory. Here, `uuid` is returned to the agent along with `to_phone.`
    

**To test the agent:**

*   Navigate to **Agent -> Channels**. Click **View** in the SMS channel.
    
*   Copy the POST request and send a sample request using the SMS Send API.
    
*   Based on your implementation in the User authentication handler, if the user is authenticated, then the SMS message is sent to the specified to\_phone number.
    

**Note**: The user authentication handler for the SMS channel is triggered only when custom user authentication is enabled in the [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms) and the message is posted via [SMS send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api).

### 

MS Teams channel

Ensure that you have enabled custom user authentication in the MS Teams channel. See [MS Teams channel](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for more information.

**To add custom user authentication for your agent in the MS Teams channel**:

*   In the **Agent -> Settings** page, navigate to the **User authentication handler** block to add the JavaScript code.
    
*   You can access the custom properties passed through the MS Teams channel using `context.params` in the User Authentication Handler. See [MS Teams Send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api), for more information.
    
*   You can pass any parameters in the return value, however, passing `email` is mandatory. Here, `uuid` and `message` are returned to the agent along with `email.`
    

**To test the agent:**

*   Navigate to **Agent -> Channels**. Click **View** in the MS Teams channel.
    
*   Copy the POST request and send a sample request using the MS Teams Send API.
    
*   Based on your implementation in the User authentication handler, if the user is authenticated, then the Teams message is sent to the specified email.
    

**Note**: The user authentication handler for the MS Teams channel is triggered only when custom user authentication is enabled in the [MS Teams channel](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams) and the message is posted via [Microsoft Teams send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api).

#### 

OAuth type of authorization

The diagram below explains the authorization process of a user interacting with the agent through the Avaamo server to the client-server using an OAuth type of authorization.

## 

None of these handlers (Disambiguation)

Currently, when there is a disambiguation response, the agent displays a set of options along with **None of these** option. By default, when you click on **None of these**, a standard text is displayed. You can use this handler and write a JS code to override the standard response and display any other message or actions you wish to perform when the user clicks **None of these** option in disambiguation.

**Example**: Consider that you have specified the following JS code in **None of these** handlers:

During disambiguation, if you click **None of these** option, then the **Quick Reply** message is displayed in the agent response:

## 

Dispatch handler

**Note:** This option is available only for **Universal agents**.

In this handler, you can provide a script that is called before probing the member agents. For example, you can use this handler for setting up conditions before probing the member agents.

By default, when a user query is posted, all the member agents that are enabled and available in the Universal agents are probed before providing a response to the user. In this section, you can specify a list of member agents that you wish to probe in a return statement:

Here, the `key` indicates the member agent key provided at the time of adding the member agent. See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents), for more information.

You can also use `context.memberAgents` to get a list of all enabled member agents. The returned object is an array and you can use this information in the Dispatch handler to get the member key and member name:

**Example**: Consider that you are authenticating the user and based on the user details, you are setting the `customerType` user property in the Greeting skill of the Universal agent. According to type of the user, say "guest" or "auth", you wish to probe specific member agents. You can use the following JS code in the Dispatch handler to conditionally probe member agents as per the requirement:

## 

Max question repeat count

Indicates the maximum number of times a question is automatically repeated to the user in the conversation flow that is already in progress. By default, the value is 3.

**Example**: Consider that you have an Order skill and FAQ skill in the MacPizza agent. Consider the following conversation flow in the agent:

*   You have started the conversation with "I want to order pizza".
    
*   This has invoked the Order skill, hence the next step in the Order skill flow is displayed to the user, such as, "We have a wide variety of freshly baked pizzas. Would you like to order veg or non-veg pizza?".
    
*   Instead of answering this question, you asked another question from the FAQ, "where is your store?". The agent displays the response from the FAQ skill and repeats the follow-up question from the Order skill for which the user is yet to answer.
    
*   If you continue to ask questions, instead of answering the follow-up question from the Order skill, then the follow-up question is again repeated and this continues to the number of times the "Max Question Repeat Count" is set.
    

Consider that you have set **Max question repeat count** to 1. The following is an illustration of how "Max Question Repeat Count" works in the Avaamo Platform:

**Notes**:

*   When a question gets repeated, only the question part is repeated, the other text/output in the response does not get repeated.
    
*   Also, in the question repetition, the configurations specified in the **Advanced settings** configuration of the skill message response are not applied. See [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings), for more information.
    

## 

Advanced features

The following options are available in Advanced features:

### 

Disable multi-intent

Avaamo Platform provides the ability to respond to queries belonging to multiple intents in the agent.

**Example**: Consider that you have an Order skill and FAQ skill in the MacPizza agent. You can ask a query with one intent from the Order skill and another from the FAQ skill, "_I want to order pizza and where is your store?_". The agent responds to both queries.

**Notes**:

*   Currently, **Multi-intent** works only if you have two intents separated by "and" and at least one of the intents is from Q&A. If you have more than two intents separated by "and", then the response of only the first two intents is returned.
    
*   Smalltalk intents are not supported in multi-intents, which implies that if you have multi-intents and one of them is a Smalltalk, then the response of Smalltalk is not returned.
    

If you wish to disable this option, then you can check **Disable multi-intent** in the **Agent -> Settings** page. In such cases, the response displayed in the agent is random.

### 

Disable Co-reference query generation

An `agent` can remember and maintain context throughout a conversation. This enables the system to understand references, callbacks, and evolving topics within the dialogue. However, co-reference may not be required for all use cases. In specific scenarios where co-reference resolution might introduce errors or unnecessary complexity, you can choose to disable co-reference.

**Note**: This feature applies to Classic agents using the LLaMB skill.

Here are some cases when it might be appropriate to disable co-reference:

*   **Processing Isolated or Short Texts**: When dealing with isolated sentences, short commands, or brief messages, co-reference resolution is often unnecessary because each piece of text is self-contained and does not refer back to previous content.
    
*   **Avoiding Misinterpretation in Ambiguous Contexts**: In cases where co-references can lead to ambiguity or misinterpretation, such as texts with frequent use of similar pronouns, disabling co-references can prevent incorrect associations.
    
*   **Domain-Specific Applications**: In certain domain-specific applications, such as some technical or legal documents, the explicit structure and terminology make co-reference resolution less useful. Disabling it can simplify the processing pipeline.
    

### 

Disable citation link security in the LLaMB response

The Avaamo Platform provides an option to `enable or disable citation link security` in LLaMB responses. By default, [citation links](/user-guide/llamb/citation-links) expire 24 hours after generation.

Go to `Configurations > Settings` in the Avaamo Platform. Under `Advanced Settings`, click the checkbox to `Disable Citation Link Security`. This feature is useful for debugging, troubleshooting, or sharing persistent references with users.

**When citation links are disabled:**

*   The generated citation links in LLaMB responses can be accessed at any time, without any time restrictions.
    
*   There is no expiration limit for accessing these links.
    
*   Users can revisit citation links whenever needed, ensuring persistent access to the referenced information.
    

See [Citation links](/user-guide/llamb/citation-links), for more information.

### 

Disable disambiguation

The user queries that do not match with intent, and the agent responds with a selection of the closest intent options, is a disambiguation intent. If the user selects and responds with one of the options, the query is successful, else it is categorized as a failed disambiguation query.

Here, we have queried "order". The agent has responded with the intents that support "order". This is categorized as disambiguation. So, if we select one of the above options, the query is a successful disambiguation query, and if we select "none of these" then it is a failed disambiguation query.

By default, a disambiguation response is enabled in the agent. If you wish to not display such responses, then you can check **Disable Disambiguation.** The following is an illustration of how the response is displayed in the agent when **Disable Disambiguation** is checked:

### 

Do not translate entity values

By default, the entity values in different languages are always translated to en-US before intent matching. However, in certain scenarios, translating the entity values may result in a completely different meaning in the corrected query and can result in unexpected intent matches. In such cases, you can enable the checkbox `Do not translate entity values`. When you enable this checkbox entity values are not translated to en-US and are used as-is for intent matching.

**Note:** By default, `Do not translate entity values` is disabled, which implies that entity values are always translated to en-US before intent matching.

**Example**: Consider the following entity values in an agent:

The following table illustrates the difference when `Do not translate entity values` is enabled versus when it is disabled. You can observe that when `Do not translate entity values` is enabled the entity values are considered as-is and not translated to en-US.

Do not translate entity value enabled

Do not translate entity value disabled

### 

Enable Hybrid SDK

If you wish to integrate Avaamo Platform using **Hybrid SDK**, then you must **Enable Hybrid SDK** in the **Agent -> Settings** page. The Platform then opens up the channel to listen to requests in Hybrid SDK integration. By default, this communication is not available unless the **Enable Hybrid SDK** option is enabled. See [Hybrid SDK](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/integrate-with-api-1/hybrid-sdk), for more information.

### 

Enable debug logs

The `Enable Debug Logs` option allows users to enable or disable debug logs at the `agent level`. This feature provides better control over log visibility for troubleshooting and debugging. This is especially useful when masking is enabled, as logs are otherwise suppressed.

*   When enabled all logs generated using console.log are displayed.
    
*   When the checkbox is unchecked, logging is disabled, and no logs are displayed.
    

**Note:**

1.  By default, this option is **disabled**.
    
2.  `Enable debug logs` setting is preserved during pull and promotion.
    
3.  In production, the `enable_debug_logs` setting is disabled by default, cannot be modified by users, and can only be enabled or disabled through a request to the support team.
    

## 

Enable information masking

Masking allows you to protect PII/PHI/GDPR compliance data within the Avaamo Conversational AI system. There are ways to configure information masking in the Avaamo Platform based on your business requirements. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

Once configured, you can use the **Information masking** toggle to enable or disable masking for an agent. Hence, developers can test and debug masking during the development and testing phase.

**Key point**: For masking user messages where patterns or entities are required, developers must contact Avaamo Support with all the required masking configurations. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more details.

By default, the **Information masking** toggle is enabled for all newly created agents. Slide the toggle to disable/enable masking for the agent. When it is enabled, information or data in the agent is masked as per the masking configurations.

## 

Retention period

The retention period configuration allows users to define how long data remains accessible before it is masked. This feature provides **agent-level control** over data masking, ensuring compliance with data privacy policies while maintaining system reliability.

For example, if the retention period is set to 10 minutes, any PII data in the conversation is automatically masked the next time the process runs after the 10-minute window.

You can set the `Retention period` when `Information masking` is enabled from the `Settings` page:

Masking behavior based on retention period values:

Condition

Masking Behavior

**Within Retention Period**

Data remains unmasked and accessible.

**After Retention Period**

Data is automatically masked.

**No Retention Period Set (0 minutes)**

Data is masked as soon as it is processed

**Note:**

1.  The toggle to enable or disable masking is enabled by default in the production agent.
    
2.  The masking and retention period settings are not editable by bot developers in the production agent and can only be modified by contacting support.
    
3.  The default retention period is zero. You can configure it only when information masking is enabled.
    

Retention Period and Mask Enable Configuration Life Cycle

Action

Retention Period Carried Forward

Mask Enable Configuration Carried Forward

Pull from Dev to Stage

No

No

Pull from Stage to Prod

No

No

Promote from Dev to Stage

Yes

Yes

Promote from Stage to Prod

Yes

No, it is enabled by default regardless of the configuration in the staging environment.

## 

Persona

You can add new personas to your agent and this can be used to configure persona for the Facebook channel. See [Persona Configuration](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel/persona-configuration), for more information.

*   In the **Agent -> Configuration -> Settings** page, click **Add new** in **Persona**.
    
*   Specify the name of the persona and add an image to the agent avatar.
    
*   Click **Add Persona** and **Save** to save the agent details.
    

## 

Notifications

You can use notifications to send daily usage and error notification reports to the users, as required.

**Daily usage report:** In this field, specify the email IDs of the users who need to get a daily report on agent usage. The first daily usage report is generated at 1:00 AM in the time zone specified in the **Time Zone** field and the next consolidated report is generated after 24 hours and so on.

**Error notification**: In this field, specify the email IDs of the users who need to receive error notification if JS errors are encountered during agent interaction. Error notifications are sent with a 15 minutes gap between each email.

**Time zone:** Select the time zone to generate the daily usage report. If no timezone is selected in this field, then the UTC timezone is considered.

#### 

Add email IDs for daily usage reports and error notifications

*   Specify the email IDs of the users in the **Daily usage report** and **Error notification** field.
    
*   Click + icon to add the email ID.
    
*   Click **Save** to save the changes made to the page.
    

#### 

Error notification emails

Each error notification email has the following information:

*   The stage in the application in which the errors occurred. Stage refers to development, testing, staging, or production. If errors occurred in more than one stage, separate notification emails are sent to notify errors in each stage.
    
*   A link to the JS errors page.
    
*   The errors and the corresponding details of each error. The email lists a maximum of 25 errors. If there are more than 25 errors, a link is provided to view all the errors.
    
*   A link to send an email to all the agent owners.
    

## 

Agent authentication keys

The following are the authentication keys of an agent that are generated by the Platform. Typically, these keys are used in an API when you are required to authenticate an agent:

*   **Agent UUID**: A unique agent identifier generated by the platform.
    
*   **Agent AccessToken**: This access token is used only for Conversation API and Message API operations.
    
*   **API Token**: This access token is used for all the Dashboard operations except for Conversation API and Message API operations.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-tags

Tags help you to understand the usage of agents by categorizing the user intents distributed across different skill responses. It helps you to analyze the top used intent categories and the way users are interacting with the agent. It gives a different perspective of viewing and understanding the user-agent interactions. See [View analytics of top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags), for more information on the "Top Tags" Analytics board.

You can define and add any number of tags to a skill response. **Example**: In an HR-Payroll agent, you can define and add a "Bonus" tag for all bonus-related responses. See the following topics for more information on how to add tags to skill responses:

*   [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#tags)
    
*   [Add tags using JS](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js)
    

**Notes**:

*   Currently, you cannot associate tags to Answers skill responses.
    
*   The tag name can be upto 192 characters. Special characters are allowed in the tag name.
    

Make a note of the following before you add, edit, or delete tags in agents.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add languages to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

### 

Types of Tags

The following tag types are available in the Avaamo Platform:

*   **System tags**: In-built reserved system tags that are internally generated and managed by the platform. All system tags are prefixed with `System::` keyword. Currently, there is only one system tag - `System::Agent::Transfer` that is used to track all the agent interventions. See [Agent intervention](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#agent-intervention), for more information.
    
*   **Custom tags**: User-defined custom tags that represent the ways in which you wish to track data related to your business. Few examples of customized tags in an HR agent - Bonus, Payroll.
    

**Note**: In the Configuration -> Tags page only custom tags are displayed.

### 

Add tag

*   In the Agent page, navigate to the **Configuration -> Tags** option in the left navigation menu.
    
*   Click **Add tag** and specify the tag name.
    
*   Continue adding multiple tags as required. Note that the tag name must be unique to an agent. You cannot begin a tag with the `System::` keyword, as it is a reserved tag.
    

### 

Edit tag

*   In the Agent page, navigate to the **Configuration -> Tags** option in the left navigation menu.
    
*   A list of all the custom tags is displayed. Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Edit.**
    
*   Update the tag name and click **Update**. If the tag is used in responses, then all the tags in the responses are also updated.
    

### 

Delete tag

*   In the Agent page, navigate to the **Configuration -> Tags** option in the left navigation menu.
    
*   Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Delete.**
    

**Note**: You can only delete a tag that is not used in any skill response. If a tag is used in any skill response, then a warning message is displayed. You must first remove the tags in all the skill responses before deleting the tag.

### 

Next steps

*   Add the defined tags in your agent to your skill responses as per the business requirement. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#tags), for more information.
    
*   You can also add tags using JS to the skill responses. See [Add tags using JS](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js), for more information.
    
*   Once you add tags with the skill response and a user query hits the node, all the corresponding tags added to the node are associated with the user query. You can view the top tags in the Analytics board. See [View analytics of top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags), for more information on the "Top Tags" Analytics board.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-user-properties

In certain scenarios, the response for the same user intent in an agent can vary based on certain user properties such as location, manager status, or exempt/non-exempt status. You can configure such user properties of an agent in the **Configuration -> User properties** section. Later, you can use these user properties to create response filters that can be used to filter skill responses for the same user intent in an agent. See [Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.

Make a note of the following before you add, edit, or delete user properties in agents.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add languages to the agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

### 

Add user properties

*   In the Agent page, navigate to the **Configuration -> User properties** option in the left navigation menu.
    
*   Click **Add user property** and specify the following details:
    
    *   Enter the name of the user property such as city, country
        
    *   Specify the property key. This is an internal primary key used in the Avaamo Platform for uniquely identifying the property. It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.
        
    
*   Continue adding multiple user properties as required. Note that the user property name must be unique to an agent.
    

### 

Edit user properties

*   In the Agent page, navigate to the **Configuration -> User properties** option in the left navigation menu.
    
*   Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Edit.**
    
*   Update the user property name and click **Update**. If the user property is used in Response filters, then the user property name in all the **Response filters** is also updated.
    

### 

Delete user properties

*   In the Agent page, navigate to the **Configuration -> User properties** option in the left navigation menu.
    
*   Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Delete.**
    

**Note**: You can only delete a user property that is not used in any response filters. If a user property is used in any response filter, then a warning message is displayed. You must first remove the user property in all the response filters before deleting the user property.

### 

User properties in Response filters

You can use these user properties to create response filters that can be used to filter skill responses for the same user intent in an agent. See [Response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.

### 

User properties in Query insights export

By default, in the exported query insights CSV file, all the configured user properties in the agent are also exported. If you have deployed your agent in the C-IVR channel, then you can configure the following properties that can help you get better query insights:

*   **user\_phone\_number**: Indicates the phone number used by the user for connecting to the C-IVR channel.
    
*   **agent\_phone**: Indicates the phone number used by the agent assigned for connecting to the C-IVR channel. You can view the agent's phone number in the C-IVR channel settings. See [Conversational IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.
    
*   **call\_sid**: Indicates the unique ID for any incoming or outgoing voice call successfully created in the C-IVR channel.
    

See [Query insights export](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights#export-query-insights-data), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-voice-settings

In the **Voice settings** section, you can specify voice hints and add playback voice for your digital voice assistants.

**Note**: You can add voice hints and playback voice for only those languages configured in your agent and supported for voice assistants. See [Voice - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.

## 

Speech recognition

You can specify certain keywords or phrases as **Voice hints** in the agent configuration that can help in providing better interpretation or recognition of the user response in voice interaction. This is useful when you wish to deploy your agents in the [C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) or wish to enable voice in [web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), or [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels.

It helps in understanding the nuances of the dialect and provides clues or hints to the agent for better recognition. See [Understanding Voice hints](/user-guide/overview-and-concepts/advanced-concepts/voice-hints), for more details on the concept and common FAQs.

### 

When to use?

You can use agent-level voice hints when you have voice hints to be used commonly by different skills in an agent.

**Note**: Adding all the voice hints at the agent level impacts the accuracy of the response, hence, it is recommended to carefully evaluate before adding voice hints at the agent level.

**Example**: Consider that you have added an inbuilt voice hint `expecting_number` to recognize numbers better at the agent level, so that similar sounding phonetics such as "won" -> "one", "four" -> "for" get interpreted as numbers accurately. Now, since you have added this at the agent level, even when the user is actually trying to say "for", it gets recognized as "four" and this can lead to incorrect matches. In this case, adding a voice hint at the node level is a better option.

Hence, when you require better accuracy or recognition at a specific node, it is recommended to provide voice hints at the node level. These voice hints are only applicable to that node where it is specified. See [Advanced Settings -> Voice hints](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#voice-hints), for more information.

### 

Configure voice hints

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can configure permissions immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

**Example 1**: Consider that your agent is deployed on the C-IVR channel with en-IN as the default language. An Indian user is interacting with your agent and trying to say "Mail account". Because of a different accent/dialect, the agent is understanding the phrase "Male account" and "Mail account" phrase is used in multiple skills. In such cases, you can add a "Mail account" voice hint in the "en-IN" language in the **Agent Configuration -> Voice settings** page.

*   In the **Agent** page, navigate to the **Configuration -> Voice hints** option in the left navigation menu.
    
*   In the **Speech recognition** section, all the languages configured in your agent and supported for voice are displayed. For each language, the number of hints configured is also displayed.
    
    *   See [Voice - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.
        
    *   See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on how to add languages to your agent.
        
    

*   Click **Manage hints** in the **Actions** column to add or remove voice hints for a language.
    
*   In the pop-up, you can either add or delete the voice hints:
    
    *   **Add**: Enter the voice hint in the text box and click the plus icon. Note that you cannot add duplicate voice hints.
        
    *   **Delete**: Click the cross icon for the voice hints that are no longer required and you wish to remove.
        
    

*   Close the pop-up and click **Save** to save the Voice settings configurations. For each language, the number of hints configured is updated and displayed
    

**Note**: Voice hints provided in the **Speech recognition** section is applicable across [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps), and [C-IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) channel.

## 

Synthesis

In this section, you can configure the voice or the persona to be used by your agent, when you enable voice in [web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), or [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels. For the C-IVR channel, you can specify the voice or persona in the C-IVR channel settings. See [C-IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

In the **Synthesis** section, all the languages configured in your agent and supported for voice are displayed. For each language, the default persona selected is also displayed.

*   See [Voice - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/voice-supported-languages), for more information.
    
*   See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on how to add languages to your agent.
    

Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the **Voice - Playback voice** section:

To hear the voice preview, type any text in the text area **Sample text for voice playback** and click the play button. You can also download the voice preview if required.

**Note**: Playback voice provided in the **Synthesis** section is applicable across [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channel.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents

[Simulator](/user-guide/how-to/build-agents/test-agents/simulator)[Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing)[Regression testing - Universal agents](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/simulator

You can test the agent iteratively as you build conversational flow to ensure the agent provides appropriate responses for user queries using the **Simulator** option.

You can also test your agent using the agent simulator from any page available in the agent's left navigation pane without navigating back to the main agent page. This feature helps you to rapidly develop and test your agents immediately without exiting the current page. It enables you to test the end-to-end agent's conversational flow from any page where you are developing your agent and hence makes the development experience smoother and pleasant.

**Key points**:

*   Currently, this feature is not supported for the Answers skill.
    
*   Since the **Conversation history** page opens in a new tab, the agent simulator is not available in the **Conversation history** page
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test the agent immediately after creating and adding skills to the agent. See [Create agent](/user-guide/how-to/build-agents/add-skills) and [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

### 

**Test agent using simulator**

*   In the **Agent** page, click **Test -> Simulator** option in the left navigation menu. Alternatively, you can also test using the **agent icon** in the bottom-right corner.
    
*   Select a channel Web or C-IVR in which you wish to test. This option is displayed if you have deployed your agent in both web and C-IVR channels. See [Conversational IVR (C-IVR) or Phone channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.
    

*   If you select the IVR / Phone option, then C-IVR activated phone number is displayed with a phone icon.
    

*   Click the phone icon to dial the activated phone number and test your conversation flow. Click transcripts to further know how your agent is interpreting the responses from the user.
    

*   If you select the Web channel option, then a demo agent is displayed. You can now ask queries and test if you are receiving appropriate responses from user queries.
    

*   If you have enabled voice for your web assistants, then you see a speaker icon 🔈 and the mic icon 🎙️ is displayed in the agent chat widget. See [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), for more information on how to test voice-enabled assistants.
    

### 

### 

**Test invocation intent**

You can add new invocation intents to your **Dialog** skill and test agent using the agent simulator from the **Invocation intent** page itself without navigating back to the main agent page.

### 

Test Dialog flow

You can build a multi-turn conversational flow in your **Dialog** skill and test agent using the agent simulator from the **Dialog Designer** page itself without navigating back to the main agent page.

### 

Test Q&A

You can add new questions and answers to your Q&A skill or Smalltalk skill and test agent using the agent simulator from the **Questions and Answers** page itself without navigating back to the main agent page.

### 

Test entity values

You can add new entity values in an entity type and test query using the agent simulator from the **Entity values** page itself without navigating back to the main agent page.

### 

Test dictionary values

You can add new dictionary values and test queries using the agent simulator immediately from the **Words** page itself without navigating back to the main agent page.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing

[Get started](/user-guide/how-to/build-agents/test-agents/regression-testing/get-started)[Regression test file format - V1](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format)[Regression test file format - V2](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1)[Regression testing best practices](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing/get-started

You can use regression testing to ensure that any recent program or code change does not adversely affect existing features. Skills evolve continuously, with the addition of a new training phrase, the underlying natural language model gets updated. The updated model might not understand some phrase, which was understood earlier.

A regression test is needed to ensure the agent works as expected after making changes anywhere in the agent. The changes include adding, removing, or updating training data in an intent, addition of new intents, and flow optimization (to name a few).

## 

Run regression test

You can run regression testing by uploading a CSV file with regression test data.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test an agent immediately after creating and adding skills to the agent. See [Create agent](/user-guide/how-to/build-agents/add-skills) and [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agent** page, click the **Test -> Regression testing** option in the left navigation menu
    
*   Click the **Upload test file option** and specify the following details:
    

**Key Point**: It is recommended to review the regression test file and incorporate all the recommended best practices. See [Regression test best practices](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices), for more information.

Parameters

Description

Maximum length

Language

The language in which you wish to execute the regression test. By default, the regression test is executed in English.

This is useful when your agent is configured in multiple languages. If you wish to execute the regression test in say "French", then

*   Click **Change** and select **fr-FR** from the list.
    
*   Create and upload the regression file in "French".
    

NA

Test Name

The name of the test suite. Provide a name that helps you to identify the regression testing being performed.

Note that the **Test name** must be unique and is mandatory.

100 characters

Select version

The version of the regression test format. The latest regression test format is V2.

*   See [Regression test file format - V1](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for legacy format.
    
*   See [Regression test file format - V2](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1), for the latest regression test file format.
    

NA

CSV file

Click **Browse** to browse a CSV file with regression test cases.

You can also click the **Sample test file** to download a sample regression test file. This helps you to know the format required for the regression test file. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.

If you upload a CSV file that is not according to the format required for the regression test, then an appropriate error message with the row number of the first error encountered is displayed.

NA

*   Click **Submit**. This action starts the regression testing on the agent, based on test cases in the uploaded file.
    
    *   In the **Regression file** column, the **Test name** specified during the time of upload is displayed along with the date and time of the regression test run.
        
    *   In the **Status** column, **In Progress** status is displayed indicating that the test run is in progress. Click **Refresh** to refresh the status. See [View status and results](/user-guide/how-to/build-agents/test-agents/regression-testing#view-status-and-results), for more information.
        
    *   Click **Download input CSV** in the **Actions** column, to download the uploaded input test file in CSV format. See [Download input CSV](/user-guide/how-to/build-agents/test-agents/regression-testing#download-input-csv), for more information.
        
    

**Key Points**:

*   You can upload only one file at a time for regression testing. You can delete this file and upload another file, as required.
    
*   Since the user executing the regression tests is a validation user, if you are required to pass certain tokens or validations for your tests to execute, then you can use the property`context.is_validation_user`and pass required tokens as hard-coded tokens.
    

## 

**View status and results**

In the **Regression testing** page, you can view the status and results of regression testing. You can download the regression testing result file in CSV format.

**Key Point**: Each query in the regression testing must resolve and get executed within 10 seconds. The queries that do not resolve within 10 seconds are marked as **Failed**.

### 

**Regression file**

The **Regression file** column displays the name of the test file and the time of the test run.

**Note**: If you specified a file name that is longer than 30 characters, then the first 30 characters are displayed in the **Regression file** column. You can hover over the file name to view the complete file name.

### 

**Status**

The **Status** column displays the status of the regression test along with the date and time of completion. The following values are displayed:

*   **In-Progress**: Indicates that the testing is still in progress and the system is executing the test cases from the uploaded file.
    
*   **Completed**: Indicates that all the test cases are executed. You can also download the result file. See [Actions](/user-guide/how-to/build-agents/test-agents/regression-testing#actions-re-run-delete-results), for more information.
    
*   **Failed**: Indicates that there was some failure executing the test cases.
    

### 

**Result**

In the **Results** column, you can view the overall results of the regression testing.

*   **Total queries**:
    
    *   In the Regression testing version 1 format, Total queries indicate the total number of rows in the Regression test file. Each row is a test query. Note that, in this format, each row can also be a flow, if you are testing a multi-turn conversation. See [Regression test file format - V1](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.
        
    *   In the Regression testing version 2 format, Total queries indicate the total number of flows in the Regression test file. Each step in the flow is a row and based on the way the test identifiers are defined, the platform infers the flow and the sequence of execution. See [Regression test file format - V2](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1), for more information.
        
    
*   **Passed**: Number of test cases where the "Expected intent" and "Matched intent" match. See [Download results](/user-guide/how-to/build-agents/test-agents/regression-testing#download-results), for more information on the regression result file.
    
*   **Failed**: Number of test cases where the "Expected intent" and "Matched intent" do not match. The "Matched intent" value of a failed test helps to further troubleshoot the issue in the agent. See [Download results](/user-guide/how-to/build-agents/test-agents/regression-testing#download-results), for more information on the regression result file.
    

### 

**Performance metrics**

This displays the **Accuracy** and **F1 Score** using the standard machine learning formula.

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
    

The goal must be to obtain a better F1 Score. To aim for a better F1 Score, you can check

*   If there is sufficient training data in your agent.
    
*   Check if the test cases are accurate to validate your agent.
    

### 

**Language**

The language in which the regression test is executed. By default, the regression test is executed in English.

### 

**Actions**

You can perform various actions such as run, delete, and download on the test suite and its runs. See [Actions](/user-guide/how-to/build-agents/test-agents/regression-testing#actions-re-run-delete-results), for more information.

## 

Actions (Run, Delete, Results)

You can perform the following actions in the **Regression testing** page for each test suite:

*   [Run](/user-guide/how-to/build-agents/test-agents/regression-testing#run): Repeat executing the test cases again, if the previous run has errored out or when you have modified a certain flow in your agent.
    
*   [Delete](/user-guide/how-to/build-agents/test-agents/regression-testing#delete): If the test data is incorrect or you wish to upload another file for regression testing
    
    delete the current test file and upload another file.
    
*   [Download results](/user-guide/how-to/build-agents/test-agents/regression-testing#download-results): Download the results of regression testing in a CSV format.
    
*   [Download input CSV](/user-guide/how-to/build-agents/test-agents/regression-testing#download-input-csv): View the input values used for regression testing.
    

### 

Run

You can repeat executing the test cases again, if the previous run has errored out or when you have modified a certain flow in your agent.

**To re-run regression test**:

*   In the **Actions** column, click **Run.**
    

*   An alert message is displayed for confirmation. Click **OK**.
    
*   A new run of regression testing is started.
    
    *   In the **Status** column, **In Progress** status is displayed indicating that the test run is in progress. Click **Refresh** to refresh the status. See [View status and results](/user-guide/how-to/build-agents/test-agents/regression-testing#view-status-and-results), for more information.
        
    *   Click **Download input CSV** in the **Actions** column, to download the uploaded input test file in CSV format. See [Download input CSV](/user-guide/how-to/build-agents/test-agents/regression-testing#download-input-csv), for more information.
        
    

### 

Delete

If the test data is incorrect or you wish to upload another file for regression testing delete the current test file and upload another file.

**To delete the regression test**:

*   In the **Actions** column, click **Delete.**
    
*   An alert message is displayed for confirmation. Click **OK**.
    
*   The corresponding regression test is deleted.
    

### 

Download results

You can download the regression testing result in a CSV format.

**To download results of regression testing**:

*   Click **three dots** (Elipsis) "…" in the **Actions** column.
    
*   Click **Download results** to download the results in CSV format.
    
*   A copy of the result file is downloaded to your local machine. See [Understanding results](/user-guide/how-to/build-agents/test-agents/regression-testing#understanding-results), for more information on interpreting the regression test results.
    

### 

Download input CSV

You can download the uploaded input regression test file in CSV format. You can use this for further analysis of the test results.

**To download the input CSV file for the regression test**:

*   Click **three dots** (Elipsis) "…" in the **Actions** column.
    
*   Click **Download input CSV** to download the uploaded input test file in CSV format.
    
*   A copy of the input test file is downloaded to your local machine.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format

This article describes the legacy version of the regression test file format referred to as "Version 1" and how to understand results after executing the regression test using the legacy regression test file format.

*   [File format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#file-format)
    
*   [Understanding results](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#understanding-results)
    

## 

File format

Your regression test file must be in CSV format. Each row of the CSV file is a test case to execute. The following are the details of the format:

Column 1

Column 2

<<Flow>>

<<Query>>

*   **Flow**: Indicates the expected flow in which the user query is tested. This can be a comma-separated list of the expected flow sequence if you wish to test a multi-turn conversation.
    
*   **Query**: Indicates sample query. In case you wish to test a multi-turn conversation, then you can add the responses of each node in an additional column.
    

**Note**: It is not required to specify system intents such as "None of these", "#end agent" when you are testing a flow. You can omit such system intents during testing.

The following response types can be specified in the regression test file:

**Key point**: To get the skill key and the intent key,

*   In the desired conversational flow, post the query you wish to test in the agent chat widget at the bottom-right corner.
    
*   Click the eye icon to view the message insights.
    
*   From the message insights, you can get the skill key and the intent key. Use this to specify the expected intent match in the Regression test file:
    

Response source

Format

Description

A node in the Dialog skill designer

`<<skill_key>>.<<intent_key>>`

Test the query against a Dialog skill intent match.

See [Dialog skill](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#dialog-skill), for an example.

Live agent

`live_agent`

Test if the query triggers a live agent.

See [Live agent](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#live-agent), for an example.

Q&A

Custom Smalltalk

`<<skill_key>>.<intent_key>`

Test the query against a Q&A and Custom Smalltalk intent match.

See [Q&A, Smalltalk](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#q-and-a-smalltalk), for an example.

Answers

`<<skill_key>>.<intent_key>`

Test the query against Answers skill intent match.

See [Answers](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#answers), for an examples

Unhandled

`unhandled`

The agent must not give a valid response to this query. It must be an unhandled response.

Disambiguation

`disambiguation`

Test if the agent replies with the disambiguation response for the given intent.

`disambiguation:<<skill_key>>.<<intent_key>>|<<skill_key>>.<<intent_key>>`

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/how-to/build-agents/test-agents/regression-testing#result), for more information on understanding how the disambiguation results are evaluated.

Built-in Smalltalk

`smalltalk`

Test if agent replies with system Smalltalk response.

**Notes**: Ensure that there is no space before or after any separators such as comma or "I" in the regression test file.

### 

Dialog skill

Consider the following conversation flow in the Order Pizza skill with the skill key as "macpizza\_order".

The pizza placing order flow in the above diagram can be tested with this row:

Column 1

Column 2

Column 3

Column 4

1,macpizza\_order.order\_invocation\_key,

macpizza\_order.pizza\_types,

macpizza\_order.pizza\_toppings

I want to order pizza

veg

cheese

*   1 -> welcome node
    
*   The user gives input “I want to order pizza”, which is in column 2.
    
*   This takes to the following skill and intent key -> "macpizza\_order.order\_invocation\_key".
    
*   The user gives the input "veg", which is column 3
    
*   This takes to the following skill and intent key -> "macpizza\_order.pizza\_types".
    
*   The user gives the input "cheese", which is column 4
    
*   This takes to the following skill and intent key -> "macpizza\_order.pizza\_toppings".
    

**Note**: 1 is the welcome node of the agent.

### 

Live agent

Consider that in the MacPizza agent, you have enabled live agent interaction. See [Switch to live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent), for more information. You can test the transfer to the live agent using the following regression test case:

Column 1

Column 2

1,live\_agent

I want to talk to an agent

### 

Q&A, Smalltalk

To test Q&A or Smalltalk responses, specify the `<<skill_key>>.<intent_key>`in the first column of the regression testing file:

You can test Q&A and Smalltalk using the following regression test case:

Column 1

Column 2

1,mac\_pizza\_faqs.store\_faqs

where is your store?

### 

Answers

To test Answers responses, specify the `<<skill_key>>.<intent_key>`in the first column of the regression testing file:

You can test Answers using the following regression test case:

Column 1

Column 2

1,macpizza\_policy.RTIor1cb

Can you explain Avaamo's privacy policy for PII?

### 

Unhandled

Consider that in the MacPizza agent, the query "_do you use organic ingredients?_", goes to an unhandled query. You can test the unhandled case using the following regression test case:

Column 1

Column 2

1,unhandled

do you use organic ingredients?

### 

Disambiguation

Consider that in the MacPizza agent, the query "order", goes to disambiguation with options from a dialog skill "Order pizza" and from a Dynamic Q&A skill "MacPizza FAQs". You can test the disambiguation case using the following regression test case:

Column 1

Column 2

1,disambiguation

order

disambiguation:macpizza\_order.order\_invocation\_key

order

disambiguation:macpizza\_order.order\_invocation\_key|mac\_pizza\_faqs.order\_faq

order

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/how-to/build-agents/test-agents/regression-testing#understanding-results), for more information on understanding how the disambiguation results are evaluated.

### 

Card responses

If you have card responses in your agent, then you specify the card response in the regression file using the following format:

*   **field\_id**: Identifier of the form element in the card. See [Add form elements](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-form-elements), for more information
    
*   **value**: Value of the form element. This can be a simple string or can be an array of values based on the form element.
    

Example 1 (for form elements with an array of values: Checklist): Consider the following Card response in a Dialog skill node:

You can specify the same in the regression test file as follows:

Example 2 (for a simple string input such as single-line element, multi-line element, date, number, rating, poll, and picklist): The following is an example of a single-line element card response that can be used in the regression file:

## 

**Understanding results**

Consider the following test result of a regression test run:

For each row in the test results, the following columns are displayed:

### 

Flow

The flow in which the given query is executed.

### 

**Result**

The result of executing the test case.

Case

Result

Description

Flow without disambiguation

Success

When the "Expected intent" and "Matched intent" match

Flow without disambiguation

Failure

When the "Expected intent" and "Matched intent" do not match.

Note that if a query evaluates to a disambiguation response and there is a node specified in "Expected intent", then the result is evaluated as **Failure**, even if "Expected intent" is in the set of disambiguation responses.

Flow with

disambiguation options

Success

When all the specified disambiguation options in the flow is present in the "Matched intent".

Flow with disambiguation options

Failure

If one of the disambiguation options specified in the Flow does not match the "Matched intent"

### 

**Expected intent**

The expected intent as mentioned in the uploaded test case.

### 

**Query**

The query for which the flow is executed.

### 

**Matched intent**

The actual matched intent after executing the query in the specified flow.

### 

Last message query insights

For all the failed cases, insights on how the query was analyzed are available in JSON format. You can use this for further analysis and debugging. See [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1

This article describes the new and improved version of the regression test file format referred to as "Version 2 (V2)" and how to understand results after executing the regression test using the V2 format.

*   [File format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#file-format)
    
*   [Understanding results](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#understanding-results)
    

## 

Why Version 2 format?

Version 2 file format of regression testing is a new improved version. The basic principle of writing the test case differs in V1 and V2 formats and the improved format in V2 addresses certain shortcomings of the V1 format.

*   Regression test - V1 format file, is a long list of comma-separated flows with skill and intent keys, along with the responses of each node in an additional column required to test multi-turn conversations. See [Regression test file format - V1](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#file-format), for more information.
    
*   Regression test - V2 format file, is based on test identifiers. Each step in the flow is a row and hence, there are no additional columns of response nodes are required in the V2 format to test multi-turn conversations. Based on the way the test identifiers are defined, the platform infers the flow and the sequence of execution. See [Regression test file format - V2](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#file-format), for more information.
    

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
        
    *   See [Dialog skill](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#dialog-skill), for more an example and more information.
        
    
*   **QUERY:** The user query to be executed.
    
*   **TYPE:** Indicates the response source that specifies where the user query is executed. For example, if the user query must match an intent or a response node in the Dialog skill. See [Type - Response source](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#type-response-source), for more information and supported values.
    
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

See [Dialog skill - intent match](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#dialog-skill-intent-match), for an example.

See [Q&A](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#dialog-skill-response-node-match), for an example.

`response_node`

`<<skill_key>>.<<intent_key>>`

Response source is a response node in the Dialog skill designer. This is to test the query against a Dialog skill response node match. Useful when,

*   The same intent match has different responses from different nodes based on the use case.
    
*   Test flow control scenarios such as Goto\_node.
    

See [Dialog skill - response node match](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#dialog-skill-response-node-match), for an example.

`intent`

`agent_request`

Test if the query triggers a live agent.

See [Live agent](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`agent_transfer`

Expected value is `agent_transfer` when the live agent is triggered and transferred using `#talk to agent` command.

See [Live agent](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`agent_terminate`

Expected value is `agent_terminate` when the live agent is terminated using `#end agent` command.

See [Live agent](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#live-agent), for an example.

`intent`

`unhandled`

The agent must not give a valid response to this query. It must be an unhandled response.

See [Unhandled](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#unhandled), for an example.

`intent`

`smalltalk`

Test if the agent replies with a system Smalltalk response.

`disambiguation`

`disambiguation`

Test if the agent replies with the disambiguation response for the given intent.

See [Disambiguation](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#disambiguation), for an example.

`disambiguation`

`<<skill_key>>.<<intent_key>>|<<skill_key>>.<<intent_key>>`

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#understanding-results), for more information on understanding how the disambiguation results are evaluated.

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

Test if the agent responds with the disambiguation options specified in the pipe-separated list. See [Result](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1#understanding-results), for more information on understanding how the disambiguation results are evaluated.

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

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices

Users can interact with your agent in different ways. Some user queries are completely correct grammatical sentences, other user queries can be just phrases, or some user queries can be ambiguous. It is important to test if your agent is trained to handle and respond to all such user queries as desired.

This article summarizes a **few essential categories** **of queries** that you must consider when you are preparing to perform regression testing on your agent. It is recommended to have sufficient queries in all these categories to ensure that you have tested your agent with real user queries that can be used to interact with your agent.

### 

Overview

One of the practical ways to build regression testing is by learning how users are interacting with the agent using the Conversation history. You can take a dump of 2-3 months of data to understand the way users interact with your agent. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information. A good regression test is the one that tests the skill ability to detect all intents it is expected to handle based on the training data and at the same time does not give wrong answers for questions that it is not trained on.

If you are writing regression testing for the first time,

*   Review all the best practices for creating the regression test cases. See [Regression testing best practices](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices), for more details.
    
*   Download a sample regression file format and build the regression test cases by evaluating all the best practices. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more details.
    

If you already have regression testing test cases,

*   You can download the latest run of regression test input files. See [Download input CSV](/user-guide/how-to/build-agents/test-agents/regression-testing#download-input-csv), for more details.
    
*   Review all the best practices for augmenting your test cases. See [Regression testing best practices](/user-guide/how-to/build-agents/test-agents/regression-testing/guidelines-and-best-practices), for more details.
    
*   Build the regression test cases by evaluating all the best practices. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more details.
    

### 

Use case

For the purpose of understanding, consider a simple example with the following data:

*   "Auto Loan" agent
    
*   One Dialog skill "Buy Auto Loan" with invocation intent "I want an auto loan".
    
*   Simple greeting message in the skill that says "Sure. I can help with auto loan."
    

**Notes**:

*   Examples for all the categories are demonstrated using an agent simulator. The same set of queries can be used for regression testing too. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), to learn more on how to create a CSV file with test cases.
    
*   It is recommended to have at least 5 queries for an intent. **Example**: If there are 100 intents, then it is recommended to have 500 test queries in the regression file. It is a common practice to have more than 5 queries for each intent.
    

### 

1\. Modularize test cases

Consider creating test cases with well-defined boundaries based on your agent implementation. A few examples are listed below:

*   If your agent is configured in multiple languages, then consider creating a separate regression file for each language.
    
*   Create separate regression file for each skill. For example, for all Dynamic Q&A skills in the agent, you can create one regression file.
    
*   If you have external integrations, then consider creating a separate regression file with external integration. This enables faster execution of the test cases where external integration is not required.
    
*   It is recommened to create regression file with a maximum of 50000 test cases.
    

### 

2\. Well-formed queries

These are the user queries that are completely correct grammatical sentences with proper intents. Very few users interact with the agent using well-formed queries. For example, in the "Auto Loan" agent, you can test with these variations that the users can ask:

Note that these are not the variations the agent is trained with. Here, the Platform recognizes the intent in the user query accurately and an appropriate response is displayed to the user.

### 

3\. Incomplete/short queries

Most of the user queries are incomplete or short queries usually is the form of two or three phrases that are abstract and not clear. For example, in the "Auto Loan" agent, you can test with these variations that the users can ask:

Note that even with minimal user query data, since the Platform is able to recognize a part of the intent, a set of options closely matching the intent is displayed.

### 

4\. Ambiguous queries

These are the user queries that can be either short phrases or can be complete sentences but the intent is not clear. For example, in the "Auto Loan" agent, you can test with these variations that the users can ask:

Note that even with ambiguous user queries, since the Platform is able to recognize a part of the intent, a set of options closely matching the intent is displayed.

### 

5\. Spelling errors

Most of the user queries also can contain spelling errors. For example, in the "Auto Loan" agent, you can test with these variations that the users can ask:

Note that as long as the Platform is able to reasonably determine the accuracy of the intent from the user query, it is not required to train the agent for all such spelling corrections, as these are automatically handled in the agent.

### 

6\. Long sentences

There are certain user queries that can contain very long sentences in which the intents are not directly implied or the intent gets combined with multiple sentences. For example, in the "Auto Loan" agent, you can test with these variations that the users can ask:

Note that even with such long sentences, the Platform is able to recognize the intent and an appropriate response is displayed to the user.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents

**Note**: See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent), for more information on what a Universal agent is and how to use it.

You can test Universal agents using Regression testing. Regression testing in Universal agents allows you to test queries with its member agents.

The process of running the regression testing and viewing the status and its results remains the same as with the independent agents. See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), for more information.

The only difference between the Regression testing in the independent agents and the Regression testing in the Universal agents is the Regression testing file format. A sample Regression testing file format can be downloaded in the **Upload test file** pop-up window. You can use this as a reference to build the test cases that you wish to execute in the Universal agents.

**Notes**:

*   Currently, Universal agents are supported only in the English language. Hence, you can execute regression testing of Universal agents only in the English language.
    
*   Regression testing for [disabled](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#disable-member-agent) or [invalid credentials](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent#regenerate-credentials) or [deleted member agent](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#delete-member-agent) fails and returns false.
    

### 

Regression testing file format

Your regression test file must be in CSV format. Each row of the CSV file is a test case to execute. The following are the details of the format:

Column 1

Column 2

<<Flow>>

<<Query>>

*   **Flow**: Indicates the expected flow in which the user query is tested. This can be a comma-separated list of the expected flow sequence if you wish to test a multi-turn conversation.
    
*   **Query**: Indicates sample query. In case you wish to test a multi-turn conversation, then you can add responses of each node in an additional column.
    

You can specify the following response types can be specified in the regression test file:

Response source

Format

Description

A response from the member agent

`<<member_key>>`

Test the query against a Member agent intent match.

You can get the member\_key in the Agent -> Member agent page. See [Add member agent](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents#add-member-agent-to-the-universal-agent), for more information.

See [Member agent](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents#member-agent), for an example.

Unhandled

`unhandled`

The agent must not give a valid response to this query. It must be an unhandled response. This is similar to testing an unhandled scenario with independent agents.

See [Unhandled](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#unhandled), for an example.

Disambiguation

`disambiguation`

Test if the agent replies with the disambiguation response for the given intent.

See [Disambiguation](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents#disambiguation), for an example.

`disambiguation:<<member_key>>|<<member_key>>`

Test if the agent responds with the disambiguation options specified in the pipe-separated list.

See [Result](/user-guide/how-to/build-agents/test-agents/regression-testing#result), for more information on understanding how the disambiguation results are evaluated.

Built-in Smalltalk

`smalltalk`

Test if the agent replies with a system Smalltalk response. This is similar to testing an unhandled scenario with independent agents.

**Notes**:

*   Currently, the regression testing format in Universal agents has only information about which member agent to execute. Within the member agents, the further path of execution is not available in the test file. Hence, partial path execution (for example: 1.3,1.5) which can be performed with normal agents cannot be executed in Universal agent regression testing.
    
*   Ensure that there is no space before or after any separators such as comma or "I" in the regression test file.
    

### 

Example: Scenario

Consider the following Universal agent example Acme Enterprise with three member agents - Acme Finance, Acme HR, and Acme IT.

### 

Member agent

Consider the following sample user conversation flow:

You can test the same flow in the Regression testing using the following format:

Column 1

Column 2

Column 3

Column 4

1,acme\_hr,acme\_it,acme\_finance

When is the bonus paid this year?

Oh my official email Id is not configured yet. Can you help me?

Okay, also, need to declare the income tax for this year. Can you help me?

### 

Disambiguation

Consider the following sample user conversation flow that results in disambiguation:

You can test the same flow in the Regression testing using the following format:

Column 1

Column 2

1,disambiguation:acme\_hr|acme\_finance

update details

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents

In case you are unable to receive the expected response from the agent, you can debug using the following troubleshooting tips:

**Key points**:

*   **Defining entities:**
    
    *   Entities must be a logical grouping of nouns e.g. scheme name, which holds the same meaning across all training variations for the agent.
        
    *   An entity must be relevant to your intent and must provide a specific context for an intent.
        
    *   You must retain only those entities and slots that are required by the skill to process.
        
    
*   **Defining skills**:
    
    *   FAQ type skills must be Q&A, all casual and informal queries must be Smalltalk.
        
    *   If you have Smalltalk as Q&A intents, then the priority of intent processing gets affected. Smalltalk has a lower priority when compared to Q&A. See the [Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence), for more information.
        
    *   Also, note that Smalltalk does not participate in disambiguation.
        
    
*   **Disable skill as that is no longer required**: If a skill that is no longer required is enabled, then the entities from that node still participate. The best practice is to disable the skill if it is no longer required.
    

## 

**Using Insights**

*   Click the eye icon below the user query to know the intent mapped to the query.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, name, skill key, intent key, entities, and the language of the query.
    

*   You can use this information to update the conversation flow, as required, based on the details available in the insights.
    

**Key Points**:

*   By default, the insights eye icon is available in the agent widget at the bottom-right corner when you are accessing the agent from the dashboard. You can enable the insights icon using debug parameter in the web channel URL if required. See [Customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#customization-parameters), for more information.
    
*   In the insights, at times additional entities are extracted. This is because in the agent all the entities that are available in any of the agent's skills are considered for extraction as it may be required in any of the JavaScript. But only those entities that are used in the slot of a training phrase are used to match the training phrases. So even if the entity is extracted, the slot is not created for that entity, it is not used for intent matching.
    

## 

Using JS errors

In case, you have JavaScript code in your agent, then you can check for any errors using the **JS errors** option. In this section, you can view errors related to SSML, live agent, custom channel, Regex entities, and JS errors across nodes. The following illustrates a few scenarios:

*   In the **Agent** page, click **Debug -> JS errors** option in the left navigation menu.
    
*   A list of JS Errors are displayed in the following format:
    
    *   **Message**: Indicates the message or user query in the skill at the point of error.
        
    *   **Step**: Indicates the node number in the flow that caused the error.
        
    *   **Sender**: Indicates the details of the user who sent the message.
        
    *   **Time**: Indicates the time of error creation.
        
    *   **JS error**: Indicates the details of the JS error in the format - `{"error":"<error>","line":<line number>,"section":"<section where error is present>"}`
        
    
*   Correct the JS errors in the conversation flow, based on the error details displayed in the **JS errors** page.
    

**Notes**:

*   You can use the **Clear All** option to clear all JS errors.
    
*   The error messages are sorted based on the descending order of error creation time.
    
*   All errors get displayed only when the specific cases are triggered in the conversation flow with a user query. For example, Regex entity error is displayed only when you use the entity in the conversation flow and it gets triggered in the conversation flow.
    

## 

Using Debug logs

Use **console.log** to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure. You can then use **Debug logs** options in **Dialog skill** to display all the logs generated using console.log.

Consider that in the **Order Status skill** of the **Pizza agent**, you have logged **context** for an intent:

*   In the **Agent** page, click **Debug -> Debug logs** option in the left navigation menu.
    
*   Click the agent icon in the bottom-right corner.
    
*   Enter the order number. Context details are displayed in the **Debug logs** window. Similarly, you can use **console.log** to log messages at specific steps in the script, as required.
    

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

## 

Using Storage

You can view all the data stored either for a global session (applicable for all the users interacting with agents) or for a specific user session in your agent.

*   In the **Agent** page, click **Debug -> Storage** option in the left navigation menu.
    
*   You can search within a specified date range or using key values of the storage variables.
    

## 

Using Conversation history

The **Conversation history** page displays the records of the agent and all of its user interactions for the selected agent.

*   Click any conversation to see the details. In the URL, you can also see a unique identifier for the conversation. This is referred to as conversation\_uuid. You can use this in APIs. See [Conversation API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api), for an example.
    
*   You can search through history to find specific conversations, messages, and users.
    

**Notes**:

*   Currently, list view responses are not displayed in the conversation history.
    
*   Conversation history is not real-time and it may take upto 2 minutes for the Conversation history to be updated.
    
*   In the Configuration -> Live agent page if the **Save conversations** toggle is set to **No**, then no data or chat conversations between the users and live agents are saved in the Avaamo platform. At the specific section in the Conversation history page, a system message indicating the same is displayed.
    

The **Conversation history** page includes a search bar, agent profile icon, and user profile icon.

### 

Search bar

You can use the **Search** bar to search through conversation titles and message content. This helps you narrow down user queries and the agent’s response to the query.

#### 

Conversations

Each conversation in the **Conversation history** page is grouped by user name. You can search for conversations related to a specific user by entering the user name in the search bar. All the conversation for the user or message containing the user name is displayed in the result.

#### 

Messages

You can search the conversation history with messages. These messages can be user queries or the agent's response. To search with a message, type the message content in the search bar.

All the messages with the searched message content are displayed. Click the message to view the details and the conversations.

Note that if you have deployed your agent in C-IVR or Phone channel, then the user responses are available as audio files in the **Conversation history**.

### 

Agent profile icon

The agent profile icon button allows you to edit the profile and change the view of the conversation history page. You can perform the following actions:

*   View the agent avatar, first name, last name, and the job description. You can also view any custom user authentication setting if you have provided any.
    
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

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents/insights

By default, the insights eye icon is available in the agent widget at the bottom-right corner when you are accessing the agent from the dashboard. You can enable the insights icon using **Debug** parameter in the web channel URL if required. See [Customization parameters](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#customization-parameters), for more information.

**To view message insights**:

*   Click the eye icon below the user query to know the intent mapped to the query.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, name, skill key, intent key, entities, and the language of the query.
    

*   If you are viewing the Message insights of a Universal agent, then you can know the member agent and the member key that matches the query. See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent), for more information on what a Universal agent is.
    

*   You can use this information to update the conversation flow, as required, based on the details available in the insights.
    

**Key Point**: In the insights, at times additional entities are extracted. This is because in the agent all the entities that are available in any of the agent's skills are considered for extraction as it may be required in any of the JavaScript. But only those entities that are used in the slot of a training phrase are used to match the training phrases. So even if the entity is extracted, the slot is not created for that entity, it is not used for intent matching.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents/js-errors

In case you have included JavaScript code in your agent, you can check for script errors (if any) in the **JS errors** page. Here, you can view errors related to SSML, live agent, channel, Regex entities, and JS errors across nodes. The link to the **JS errors** page is under **Debug** on the left navigation pane.

Details provided about each of the errors in the list:

*   **Type:** Indicates whether the JavaScript execution resulted in an Error or a Warning.
    
*   **Message**: Indicates the message in the skill at the point of error.
    
*   **Step**: Indicates the node number in the flow that caused the error.
    
*   **Sender**: Indicates the details of the user or agent who sent the message.
    
*   **Time**: Indicates the time the error was created, as per the system time.
    
*   **JS error**: Indicates the details of the JS error.
    

Using the details displayed in the **JS errors** page, you can correct the JS errors in the conversation flow.

### 

Filter JS errors

**To filter the JS errors based on a date range**:

You can filter the error list to view only errors that occurred within a specific date range, up to 90 days.

**Note**: By default, errors that occurred in the last 30 days are displayed in the JS errors page.

1.  Click on the date selection box to select a date range.
    
2.  The first three options allow you to select errors for the last 30 days, the previous 15 days, or the current date. The fourth option, which is a custom range, allows you to select errors for a date range that you specify.
    
3.  To select errors for a custom date range, select the **Custom Range** option. In the calendar window, click on the start date of the date range. Then drag the mouse (do not click and drag; simply drag) to the end date of the date range, and click it. You have selected the date range. Finally, click **Apply**.
    

The total number of errors for the agent is displayed at the top of the page. However, only 25 errors are listed per page. Use pagination to navigate and view other errors.

**Notes**:

*   You can use the **Clear All** option to clear all JS errors.
    
*   The error messages are sorted in descending order by error creation time.
    
*   All errors get displayed only when the specific cases are triggered in the conversation flow with a user query. For example, Regex entity error is displayed only when you use the entity in the conversation flow and it gets triggered in the conversation flow.
    

**Filtering JS errors by type:**

You can filter the JS error list to view only **Errors** or only **Warnings**. To apply the filter, click the dropdown and select the desired error type, **Error** or **Warning**.

### 

Export JS errors to a CSV file

Using the **Export** option, you can download all the errors on the current page and other pages to a single CSV file. This can be used as a reference and for further analysis.

**To export JS errors to a CSV file**:

1.  You can first filter the required data using the date range. See [Filter JS errors based on date range](/user-guide/how-to/build-agents/debug-agents/js-errors#filter-js-errors-based-on-a-date-range), for more information.
    
2.  Click **Export.** A copy of the error file is downloaded to your local machine. Note that the **Time** for each error in the downloaded CSV file is in UTC timezone.
    
3.  File exports include only the log results that match the currently applied filter.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents/storage

You can view all the data stored either for a global session (applicable for all the users interacting with agents) or for a specific user session in your agent.

*   In the **Agent** page, click **Debug -> Storage** option in the left navigation menu.
    
*   You can search within a specified date range or using key values of the storage variables.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents/debug-logs

You can use the **console.log** statement in the Javascript node to log messages at specific steps in the script. This helps to verify if the script is executing as expected and to identify points of failure. You can then use the **Debug logs** options in **Dialog skill** to display all the logs generated using console.log.

Consider that in the **Order Status skill** of the **Pizza agent**, you have logged **context** for an intent:

Copy

    console.log(context);

*   In the **Agent** page, click the **Debug -> Debug logs** option in the left navigation menu.
    
*   Click the agent icon in the bottom-right corner.
    
*   Enter the order number. Context details are displayed in the **Debug logs** window. Similarly, you can use **console.log** to log messages at specific steps in the script, as required.
    

**Note**: In the `Debug logs` pop-up window, a maximum of 50 consecutive `Console.log` statements can be printed.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/debug-agents/conversation-history

The **Conversation history** page displays the records of the agent and all of its user interactions for the selected agent.

*   Click any conversation to see the details. In the URL, you can also see a unique identifier for the conversation. This is referred to as conversation\_uuid. You can use this in APIs. See [Conversation API](/user-guide/ref/avaamo-platform-api-documentation/conversation-message-api), for an example.
    
*   You can search through history to find specific conversations, messages, and users.
    

**Notes**:

*   Currently, list view responses are not displayed in the conversation history.
    
*   Conversation history is not real-time and it may take upto 2 minutes for the Conversation history to be updated.
    

The **Conversation history** page includes a search bar, agent profile icon, and user profile icon.

### 

Search bar

You can use the **Search** bar to search through conversation titles and message content. This helps you narrow down user queries and the agent’s response to the query.

#### 

Conversations

Each conversation in the `Conversation history` page is grouped by user name. You can search for conversations related to a specific user by entering the user name in the search bar. All conversations for the user, or messages containing the user's name, are displayed in the results.

#### 

Messages

You can search the conversation history for messages. These messages can be user queries or the agent's response. To search with a message, type the message content in the search bar.

All messages containing the searched content are displayed. Click the message to view the details and the conversations.

Note that if you have deployed your agent in the C-IVR or Phone channel, user responses are available as audio files in the `Conversation history`.

When you hover over a message in the conversation history, a `Copy icon` appears before the seen/tick indicator. Clicking this icon opens a direct link to that specific message, including its UUID.

Select the conversation and hover over a message in the conversation history, a `Copy icon` appears before the seen/tick indicator.

Clicking this icon generates a `direct link to that specific message`, including the message UUID.

For example:

https://c6.avaamo.com/web/#messenger/conversations/71dxxxxxxxxxxxxx03dd?messageUuid=98d150xxx-xxx-xxx-xxx-xx3cc2a7e1\\

When you copy a message link and open it, the referenced message is highlighted with a `yellow background` for a few seconds.

#### 

Query insights

You can view query insights for a specific response directly from the `Conversation History` page. Click the `eye icon` available next to each response to open the Query Insights panel and view detailed information about how the query was processed.

This helps you analyze user interactions and better understand agent responses.

Further, you can view the Query context of the generated response. Click `Query Context` to view all the chunks involved in the response creation.

**View reasoning**: An option in Query Context that generates and displays reasoning for chunks labeled as `strong match`, `match`, or `not relevant`, explaining why each chunk was selected and how it contributes to the final response.

You can also view the label `Strong match` which means the chunks deemed most relevant to the question and that contributed significantly to generating the answer.

Click any `chunk` to view detailed information.

*   **Document Name**: The name of the document from which the chunk was derived.
    
*   **Intent Key**: The specific intent used in response generation.
    
*   **URL:** The source of the document, as specified during ingestion.
    
*   **User custom properties:** User-defined custom properties are displayed here.
    
*   **Descriptions**: Additional contextual information about the chunk.
    
*   **Reasoning**: Explanation of why the chunk was selected for generating the answer
    

### 

Agent profile icon

The agent profile icon button allows you to edit the profile and change the view of the conversation history page. You can perform the following actions:

*   View the agent avatar, first name, last name, and the job description. You can also view any custom user authentication setting if you have provided any.
    
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

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze

[Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics)[Analytics - Universal agent](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent)[SMS Gateway Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/sms-gateway-analytics)[User journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey)[Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze/analytics

The Avaamo platform comes with a built-in **Analytics** tool that gives a graphical representation of the agent and user interaction. It helps you learn and understand how users are interacting with your assistant. With these statistics, you can decide how and where to further improve your agent based on your business requirements.

## 

View analytics

The built-in **Analytics** tool provides various filter options to slice and dice the data in different cross-sections that can help you get a specific set of results for the use cases. **Example**: You can get a count of total queries received by the agent in the "Web" channel. See [Example - Use cases](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#examples-use-cases), for more examples.

**To view analytics**:

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view **Analytics**. See [Search agents](https://docs.avaamo.com/v5/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   In the **Agent's** page, click **Monitor -> Analytics**. A list of built-in **Analytics** for the agent in the selected date range is displayed.
    
*   By default, the date range is a week (7 days) from the current date. You can also select different date ranges as per your requirement to filter results. See [Date range](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#date-range), for more information.
    
*   Select any additional filter criteria such as channel, tags, language, intent type, and intent using the **Filter by** option. See [Additional filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#additional-filter-criteria), for more information.
    
*   Click **Download** to download a PDF copy of the current Analytics board. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    
*   Click any one of the blocks for a more detailed view:
    
    *   [Total queries](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#total-queries)**:** Total number of queries received by the agent.
        
    *   [Active users](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#active-users)**:** Total number of active users who interacted with the agent.
        
    *   [Agent intervention](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#agent-intervention)**:** Total number of system live agent transfers.
        
    *   [Channels](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#channels)**:** User interactions from the different channels the agent is deployed on. The Analytics page supports upto 100 channels per channel type.
        
    *   [Languages](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#languages): User interactions pertaining to different languages the agent is configured for.
        
    *   [User feedback](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback)**:** Total feedback received by the agent and is segregated into positive and negative feedback.
        
    *   [User journey](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-journey)**:** Visual representation of a user’s journey through the conversation with the agent.
        
    *   [Top Dialog skills](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-dialog-skills)**:** Most frequently triggered intents, entities, and responses by users in Dialog skill.
        
    *   [Top Q&A intents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-q-and-a-intents): Most frequently triggered intents, entities, and responses by the user queries, defined in the Q&A skills of the agent.
        
    *   [Top Smalltalk intents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-smalltalk-intents): Most frequently triggered intents, entities, and responses by the user queries, defined in the Smalltalk skill of the agent.
        
    *   [Top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags): Most frequently used intent tagged categories across different skill responses.
        
    

**Note:** For production agents, the Analytics dashboard can take upto 5 minutes for the data to be reflected and displayed; for development agents, the data is reflected immediately.

## 

Step 1: Select filter criteria

You can filter analytics results using the [Date range](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#date-range) and other [additional filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#additional-filter-criteria) such as channel, tags, language, intent type, and intent using the "Filter" option. See [Example - Use cases](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#examples-use-cases), for more examples.

**Key points**:

*   Date range and each filter in the additional filter criteria is an "AND" condition. Example: If you select the "Web" channel, "French" language, then the results displayed are for the selected date range in the "Web" channel" and for the "French" language.
    
*   Within "a" filter criteria, if you add multiple values, then each value is an "OR" condition. Example: If you select the "Web" channel, "French" and "English" language, then the results displayed are for the selected date range in the "Web" channel" AND for the "French" OR "English" language.
    

### 

Date range

By default, the date range is a week (7 days) from the current date.

*   Click the date range to select different date options as per your requirement.
    
*   You can also view the **Analytics** board for Yesterday, Today, Last 7 Days, Last 14 Days, Last 28 Days, Last 90 Days, and Last 180 Days.
    
*   Click **Custom range** to pick your own date range by selecting the start and end dates. You can view upto 6 months of data in the Analytics board.
    

### 

Additional filter criteria

*   Click the **Filter by** option to select additional filter criteria as per your requirement.
    

*   For each filter criteria, you can **select multiple values** as per your requirement.
    

**Key points**:

*   If you add multiple values within "a" filter criteria, then each value is an "OR" condition. **Example**: If you select the "Web" channel, "French" and "English" language, then the results displayed are for the selected date range in the "Web" channel" AND for the "French" OR "English" language.
    
*   Only active intents are displayed in the **Intent** filter criteria. For the rest of the filters such as Channels, Languages, and Tags, both active and deleted values are displayed, for viewing the past analytical data.
    

*   You can select the following filters:
    
    *   **Channel**: A list of the channels which has user queries in the selected date range is displayed.
        
    *   **Language**: A list of all the languages which has user queries in the selected date range
        
        is displayed.
        
    *   **Intent type**: A list of intent types such as Inline and Q&A are displayed. The following intent types are available:
        
        *   Q&A intent
            
        *   Inline Intent
            
        *   Javascript Intent
            
        *   Pre unhandled intent
            
        *   Entity
            
        *   Agent Request
            
        *   System
            
        *   Wild card
            
        *   Smalltalk
            
        *   Answers skill
            
        
    *   **Intent**: Based on the intent types selected, a list of intents corresponding to the selected intent types is displayed. Note that only active intents are displayed in this list, deleted intents are not displayed in this list.
        
    *   **Tag**: A list of all the custom tags available in your agent is displayed. See [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
        
    
*   Click **Apply** to apply the filters and to view the results. The list of all the filters applied is displayed and the Analytics board data is filtered and displayed based on the applied filters.
    
    *   Within "a" filter criteria, if you select multiple values, then only the first selected value is displayed with a count of remaining filter values.
        
    *   Click the filter criteria to expand and view the selected values.
        
    

**Note**:

*   If you have selected all the filter criteria, then +1 is displayed at the end. Click +1 to view the complete set of additional filters applied.
    

*   The applied filter criteria is also displayed in the detailed page of each Analytics board.
    

*   Click **Clear** to clear all the selected filters.
    

#### 

Examples - Use cases

The following lists a few use cases and the filter options you can apply to get results for the specific use case:

Use case

Filter options

Q&A queries in the "Web" channel over the last 3 months

Date range: Last 90 days

Channel: Web

Intent type: Q&A intent

Inline queries in the "French" language in the 6 months

Date range: Last 180 days

Language: French

Intent type: Inline intent

Queries that hit the "Order" tag in the last 3 months in the "Web" channel

Date range: Last 90 days

Tag: Order

## 

Step 2: View results (Analytics board)

Based on the selected date range and filter criteria, the results are filtered and the data in the corresponding analytics boards are displayed. You can click any one of the blocks for a more detailed view. Note that the same filters selected in the "Analytics" are applied in the detailed view too.

### 

Agent success rate

The percentage of the agent success rate indicates the number of user queries the agent has responded to successfully for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

**Note**: Agent success rate is not applicable when filtered with Intents and/or Tags, as the parameters required for Agent Success Rate calculation do not apply. Agent success rate requires counts such as disambiguous intent count and unhandled intent count. Since intents and tags are applied on exact intent matching, disambiguous intent counts and unhandled intent counts do not apply in such cases.

The agent success rate is the success rate percentage calculated using the success\_rate\_count and messages\_count parameters in the `aggregate_stats` object from the Usage API. See [Usage API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage), for more information on parameters used in this formula:

`Agent success rate = (success_rate_count/messages_count) * 100`

When you choose a date range to display the analytics, the Agent success rate analytics also displays a percentage, indicating a dip or a rise in the success rate percentage statistics. The percentage of dip or rise is calculated from the Usage API using the following formula. See [Usage API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage), for more information on parameters used in this formula:

`Agent success rate dip or rise percentage = [(Agent success rate in aggregate_stats/ Agent success rate in previous_interval_stats) * 100] - 100`

`If the difference is positive then a rise is indicated. Similarly, if the difference is negative, then a dip is indicated.`

**Note**: This also includes disambiguation queries. If the user specifies that the disambiguation options are not applicable, then the disambiguation query is a failure and is not counted in the success rate.

### 

Total queries

The **Total queries** analytics board displays the total number of queries received by the agent for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

The percentage of dip or rise is calculated from the messages\_count parameter in the Usage API using the following formula. See [Usage API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage), for more information on parameters used in this formula:

`Total queries dip or rise percentage = [(messages_count in aggregate_stats - messages_count in previous_internal_stats)/messages_count in aggregate_stats]*100.`

When you choose a date range to display the analytics, the total queries analytics also displays a percentage, indicating a dip or a rise in the total queries percentage statistics:

`If the difference is positive then a rise is indicated. Similarly, if the difference is negative, then a dip is indicated.`

When you click the **Total Queries** analytics board, a table with a list of user queries in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the **Query insights** page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use **Query Type** and the **Data range** to further filter for a specific set of queries in the selected date range. By default, the results are displayed for all query types. You can further on a specific query type as required:
    
    *   Successful Queries: All the queries that matched an intent successfully are displayed in the result.
        
    *   Disambiguation: All the queries that led to disambiguation are displayed in the result.
        
    *   Unhandled queries: All the queries that went unhandled are displayed in the result.
        
    *   Agent transfer: All the queries that led to agent transfer are displayed in the result.
        
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    
*   A PDF copy of the dashboard is downloaded to your local machine. You can use this for reporting purposes and for further analysis.
    

### 

Active users

The **Active users** analytics board displays the number of users who interacted with the agent for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

The percentage of dip or rise is calculated from the session\_count parameter in the Usage API using the following formula. See [Usage API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage), for more information on parameters used in this formula:

`Active users dip or rise percentage = [(session_count in aggregate_stats - session_count in previous_internal_stats)/session_count in aggregate_stats]*100.`

When you choose a date range to display the analytics, the Active user's analytics also displays a percentage indicating a dip or a rise in the Active user's percentage statistics:

`If the difference is positive then a rise is indicated. Similarly, if the difference is negative, then a dip is indicated.`

When you click the **Active users** analytics board, a table with a list of user queries in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Agent intervention

The **Agent intervention** analytics board displays the number of live agent transfers for the selected filter criteria when a user requested a live agent transfer explicitly or when the conversation switched to "Live agent". See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

**Notes**:

*   You can switch to a live agent by settings some rules in the Live agent transfer rules in the Agent -> Configuration -> Settings page. See [Live agent transfer rules](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-transfer-rules), for more information.
    
*   You can also switch to a live agent via a JavaScript node based on certain conditions in the agent flow. See [Agent.transfer](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/agent.transfer), for more information.
    

The percentage of dip or rise is calculated from the interventions\_count parameter in the Usage API using the following formula. See [Usage API,](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/usage) for more information on parameters used in this formula:

`Agent Intervention dip or rise percentage = [(interventions_count in aggregate_stats - interventions_count in previous_internal_stats)/interventions_count in aggregate_stats]*100.`

When you choose a date range to display the analytics, the Agent Intervention's analytics also displays a percentage indicating a dip or a rise in the Agent Intervention's percentage statistics:

`If the difference is positive then a rise is indicated. Similarly, if the difference is negative, then a dip is indicated. Note that the dip arrow for agent intervention is displayed in green colour and rise arrow in red colour. This is because when there is a dip, it implies that there is less agent intervention and hence agent is performing better.`

**Note**: The percentage of dip or rise is not shown if the 'Interventions\_count' is 0 for the previous\_interval\_stats.

When you click the **Agent intervention** analytics board, a table with a list of user queries with live agent transfers in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format `<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click the **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. By default, all the agent interventions are tagged with a default system tag - `System::Agent::Transfer` . You can view the same information in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) and [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Channels

The **Channels** analytics board displays the percentage of agent-user interaction in different channels the agent is deployed on, for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

When you click the **Channels** analytics board, a table with a list of user queries in the selected date range and the selected channel is displayed.

**Note**: The Analytics page supports upto 100 channels per channel type.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Languages

The **Languages** analytics board displays the percentage of agent-user interaction in different languages the agent is deployed on, for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

When you click the **Languages** analytics board, a table with a list of user queries in the selected date range and the selected language is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

User feedback

The **User feedback** analytics board displays the feedback received by the agent from the users for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria. The feedback is segregated into positive and negative feedback.

**Key Points**:

*   If you have used JS to collect feedback programmatically, then it is not captured in the **User feedback** analytics board. See [Add feedback (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback), for an example.
    
*   Collecting feedback in the custom channel is not supported. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#key-points), for more information.
    

When you click the **User feedback** analytics board, a table with a list of user queries where the user feedback was given in the selected date range is displayed. See [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback), for more information.

### 

User journey

The **User journey** page displays the user's journey through the conversation with the agent for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

This feature can be used to analyze the user's experience with the agent that can also be used to improvise the conversation flow. See the [User journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey), for more information.

At each step, you can click the **+** icon to further drill down on how the user journey progressed.

### 

Top Dialog skills

The **Top Dialog skills** analytics board displays the report of the frequently triggered Dialog skill intents in the agent for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

When you click the **Top Dialog skills** analytics board, a table with a list of user queries of the top Dialog skill intents in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Top Q&A intents

The **Top Q&A intents** analytics board displays the report of the frequently triggered intents defined in the Q&A for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information.

When you click the **Top Q&A intents** analytics board, a table with a list of user queries of the top Q&A intents in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Top Smalltalk intents

The **Top Smalltalk intents** page displays the report of the frequently triggered intents defined in the Smalltalk for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

When you click the **Top Smalltalk intents** analytics board, a table with a list of user queries of the top Q&A intents in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format`<<Skill_key>>.<<Intent_key>>` only for Dialog skills. For the other skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Actions**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

**Top LLaMB Content intents**

**Note**: `Top LLaMB Content intents` block is displayed on for agents where LLaMB Content skill is enabled. See [LLaMB](/user-guide/llamb/overview-key-features), for more information.

The **Top LLaMB Content intents** analytics board displays the report of the frequently triggered intents in the agent for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

When you click the **Top LLaMB Content intents** analytics board, a table with a list of user queries of the top Dialog skill intents in the selected date range is displayed.

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date and time when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. For `LLaMB Content skill`, the node is `<<Document_name>>::<<Section>>`
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

### 

Top tags

The **Top tags** page displays the report of the frequently triggered intent-tagged categories across different skill responses for the selected filter criteria. See [Step 1: Select filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-1-select-filter-criteria), for more information on the available filter criteria.

**Note**: Since intents can be tagged only to custom tags and not system tags, this board display **top custom tags** triggered across different skill responses for the selected filter criteria. See [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.

This feature is useful when you have a particular category of user intent distributed across different skill responses and you wish to assess the usage of those intents in the user-agent interactions. It gives a different perspective on viewing and understanding user-agent interactions.

**Example**: In the HR agent, you can have different tags for - Bonus, Employee Referral, Pension, Payroll, Onboarding, Hike, (to name a few) related intents across skill responses in the agent.

In order to use this feature, you must:

1.  Configure different tags in the agent based on the user intents in the Agent Configuration -> Tags section. See [Add tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
    
2.  Add tags to skill responses. See tags details in the following links, for more information:
    
    *   [Build Dialog skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#tags)
        
    *   [Add questions and answers in Q&A responses](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages)
        
    *   [Add questions and answers in Smalltalk responses](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa)
        
    

*   Each row in the table displays the following details:
    
    *   **User query**: The user query that matched the search criteria.
        
    *   **Intent**: The intent corresponding to the user query.
        
    *   **Intent type**: The intent type corresponding to the intent.
        
    *   **Skill**: The Skill where the intent belongs to.
        
    *   **User**: The user with the date time of when the query was posted.
        
    *   **Node**: The node to which the user query was matched to. Node details are displayed in the format `<<Skill_key>>.<<Intent_key>>`. For the Greeting skill, the main node, and the built-in Smalltalk skills, the node is 1.
        
    *   **Channel type**: The type of channel from which the user query was posted.
        
    *   **Channel**: The name of the channel.
        
    *   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
        
    
*   Use the search bar to filter the data in the table. You can filter on only the data from the **User query** column.
    
*   Click **ellipsis (three dots) -> Advance insights** at the right side of the table to view details in the Query insights page. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.
    
*   Use the **Data range** to further filter for a specific set of queries in the selected date range.
    
*   Click the **Download** option to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.
    

## 

Step 3: Download PDF

Click the **Download** option at the top-right corner to download the Analytics dashboard in PDF format.

The data as viewed in the UI is available in the downloaded PDF. A PDF copy of the Analytics dashboard is downloaded to your local machine. You can use this for reporting purposes and for further analysis.

**Note**: Currently, the applied filter criteria are not displayed in the downloaded PDF.

## 

Frequently asked questions (FAQs)

### 

1\. How frequently is the Analytics dashboard updated?

For production agents, the Analytics dashboard can take upto 5 minutes for the data to be reflected and displayed; for development agents, the data is reflected immediately.

### 

2\. Agent intervention board is not showing any dip or rise. Why?

The percentage of dip or rise is not shown if the 'Interventions\_count' is 0 for the previous\_interval\_stats. See [Agent intervention](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#agent-intervention), for more information.

### 

3\. Is the Active users counted even when a user has not had any conversation with the agent?

Scenario - "The webpage loads and the agent popup opens, the welcome message is shown, the user has not had any conversation with the agent and he continues with the website. Will he be counted as an active user in the dashboard?"

Answer - Yes, Since the agent is opened on the page, the session is established and the user will be counted.

### 

5\. What if I leave the agent open for a long time? How are Active users calculated in this case?

Scenario - "Suppose I opened the agent and had a conversation in the morning, left the window open, and came back in the evening. Will he count as a single user or two users?

Answer - The active user is counted as a single user.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent

The **Analytics** tool for Universal agents gives a graphical representation of the statistics on agent and user interaction. It provides usage and related information on both the universal agent and its member agents.

**To view the analytics of an agent**:

1.  Navigate to the **Agents** tab on the top menu.
    
2.  Search and click any agent for which you wish to view **Analytics**. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
3.  On the **Agent's** page, click **Monitor -> Analytics**. A list of built-in **Analytics** for the agent in the selected date range is displayed.
    

By default, the date range is a week (7 days) from the current date. You can also select different date ranges as per your requirement to filter results. See [Date range](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#date-range), for more information.

Click **Download** to download a PDF copy of the current Analytics board. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

### 

**Analytics Board - Information**

The analytics board for the Universal agent has the following blocks. Clicking on a block provides a detailed view.

*   [Total queries](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent#total-queries-for-universal-agent)**:** Total number of queries received by the agent.
    
*   [Unhandled queries](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent#unhandled-queries-for-universal-agent): Number of queries that failed to match any known intent.
    
*   [Disambiguation queries](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent#disambiguation-queries-for-universal-agent): Number of queries that required disambiguation.
    
*   [Channels**:**](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent#channels-for-universal-agent) The channels through which the agent interacted and the percentage of user interaction through each of these channels.
    
*   [Member agent blocks](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent#member-agent-blocks-for-universal-agent): Analytics box for each member agent shows the number of queries handled by each member agent.
    

### 

Total queries for Universal agent

The **Total queries** block displays the total number of queries received by the Universal agent. When you click the **Total Queries** block, a graph (that measures the queries received based on dates) followed by a table with the details of each user query within the selected date range is displayed.

Each row in the table displays the following information:

*   **User query**: The user's query.
    
*   **Intent**: The intent corresponding to the user query.
    
*   **Intent type**: The intent type corresponding to the intent.
    
*   **Member agent:** The member agent that handled the query.
    
*   **User**: The user name, and the date-time when the user posted the query.
    
*   **Node**: Currently, the node value is always 1 for Universal agents.
    
*   **Channel type**: The type of channel from which the user query was posted.
    
*   **Channel**: The name of the channel.
    
*   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    

Click **Download** to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

### 

Unhandled queries for Universal agent

The **Unhandled Queries** block displays the total number of queries that were not handled by the agent. When you click on this block, a graph (that measures the unhandled queries received based on dates) followed by a table with the details of each unhandled query within the selected date range is displayed.

Each row in the table displays the following information:

*   **User query**: The query that the Universal agent did not handle.
    
*   **Intent**: As this is an unhandled query, the intent is also unhandled.
    
*   **Intent type**: The intent type for all unhandled queries is unhandled.
    
*   **User**: The user name, and the date-time when the user posted the query.
    
*   **Channel type**: The type of channel from which the user query was posted.
    
*   **Channel**: The name of the channel.
    
*   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    

Click **Download** to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

### 

Disambiguation queries for Universal Agent

The **Disambiguation Queries** block displays the total number of queries that required the system to provide disambiguation options. When you click on this block, a graph (that measures the disambiguation queries received based on dates) followed by a table with the details of each disambiguation query within the selected date range is displayed.

Each row in the table displays the following information:

*   **User query**: The query that required disambiguation.
    
*   **Intent**: As this is a disambiguation query, the intent is also disambiguation.
    
*   **Intent type**: The intent type for all disambiguation queries is disambiguation.
    
*   **User**: The user name, and the date-time when the user posted the query.
    
*   **Channel type**: The type of channel from which the user query was posted.
    
*   **Channel**: The name of the channel.
    
*   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    

Click **Download** to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

### 

Channels for Universal Agent

The Channels block displays the channels through which the agent interacted and the percentage of user interaction through each of these channels. When you click this block, a graph (that measures each channel usage) followed by a table with a list of user queries handled by each channel within the selected date range is displayed.

Each row in the table displays the following information:

*   **User query**: The query that is handled by a channel.
    
*   **Intent**: The intent corresponding to the user query.
    
*   **Intent type**: The intent type corresponding to the intent.
    
*   **Member agent:** The member agent that handled the query.
    
*   **User**: The user name, and the date-time when the user posted the query.
    
*   **Channel type**: The type of channel from which the user query was posted.
    
*   **Channel**: The name of the channel.
    
*   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
    

Click **Download** to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

**Note**: Currently, the Intent and Intent type is always "Universal Agent Member Intent" for queries that are responded by the member agents of a Universal agent. If you wish to understand the exact Intent and Intent type that matched in the Member agent, then you must refer to the corresponding analytics board of the Member agent or the Conversation history of the Member agent.

### 

Member agent blocks for Universal agent

For each member agent of a Universal agent, a corresponding member agent analytics block is displayed.

**Note**: Analytics for member agents is displayed even if credentials are invalid or the member agent is deleted. See [Regenerate credentials](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent#regenerate-credentials) and [Delete member agent](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents#delete-member-agent), for more information.

A member agent's block displays the number of queries handled by the member agent and the number of skills in that member agent.

*   When you click this box, a graph (that measures the queries handled by the member agent based on dates) followed by a table with the details of each query handled by the member agent within the selected date range is displayed.
    
*   When you click the number of skills, the corresponding member agent is opened is a new tab. The member agent opens in a separate tab if the user has sufficient permissions, else an unauthorized message is displayed.
    

Each row in the table displays the following information:

*   **User query**: The query handled by the member agent.
    
*   **Member agent:** The name of the member agent.
    
*   **User**: The user name and the date-time when the user posted the query.
    
*   **Channel type**: The type of channel from which the user query was posted.
    
*   **Channel**: The name of the channel.
    
*   **Action**: Click **View Messages** in the **Action** column to view the conversation history corresponding to the user query. See [Conversation history](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill#using-conversation-history), for more information.
    

Click **Download** to download the dashboard in PDF format. See [Download PDF](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#step-3-download-pdf), for more information.

**Note**: Currently, the Intent and Intent type is always "Universal Agent Member Intent" for Universal agents. If you wish to understand the exact Intent and Intent type that matched in the Member agent, then you must refer to the corresponding analytics board of the Member agent or the Conversation history of the Member agent.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze/sms-gateway-analytics

In simple terms, an SMS gateway allows a device to send or receive text messages in the form of Short Message Service (SMS) transmissions between local and/or international telecommunications networks.

Emulating the same concept in the Avaamo Conversational AI Platform is the `SMS Send API`. This API acts as an SMS Gateway. You can use the `SMS Send API` to send an agent's greeting message as an SMS to the specified phone number. In turn, the user can respond back to the agent via SMS and this can initiate a conversation flow based on the way you have designed your agent. See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.

**SMS Gateway Analytics** allows you to view the SMS report of the messages sent through the SMS Send API. With these statistics, you can decide how and where to further improve the user experience with your agent based on your business requirements.

**Note**: SMS Gateway Analytics is available only when the SMS channel is enabled for the agent. See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information.

**To view SMS Gateway Analytics**:

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view **Analytics**. See [Search agents](https://docs.avaamo.com/v5/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   In the **Agent's** page, click **Monitor -> SMS Gateway Analytics**. A list of SMS gateway reports is displayed.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze/user-journey

The **User Journey** page displays the user's journey through the conversation with the agent. This feature can be used to analyze the user's experience with the agent that can also be used to improvise the conversation flow.

**To view user journey**:

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view the user's journey. See [Search agents](https://docs.avaamo.com/v5/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   In the **Agent's** page, click **Monitor -> User Journey**. A graphical representation of the user's journey starting from the Greeting Message is displayed for the selected date range.
    

### 

Navigate in the user's journey

For each path, it displays the number of times the intent or skill is used by all users and its corresponding average percentage. Click + icon to expand the graph further to view the details of each path.

### 

Search in the user's journey

By default, the journey of all the skills along with agent transfer and the unhandled journey is displayed. You can search user's journey using the following options:

*   **Date range**: Click the date range and select the required date range for which you wish to view the user's journey.
    
*   **Skill type**: Uncheck **All** and select the specific skill types - Answers, Q&A, Smalltalk, and/or Dialog skills for which you wish to view the user's journey.
    
*   **Unhandled queries**: Uncheck **All** and select **Unhandled** to wish the user's journey for unhandled queries.
    
*   **Agent transfer**: Uncheck **All** and select **Agent transfer** to wish the user's journey that led to Agent transfer.
    

### 

Download user journey

Click the **Download** option at the top-right corner to download the user's journey in PDF format.

A PDF copy of the user's journey is downloaded to your local machine. You can use this for reporting purposes and for further analysis.

**Notes**:

*   Currently, the applied filter criteria is not displayed in the downloaded PDF.
    
*   The downloaded PDF only shows the journey till the intent level or first node of the intent. You can use this for reporting purposes and for further analysis, as required.
    
*   The downloaded PDF is a single-page export for the entire specified period.
    

### 

Other actions

In the User journey page, use the options provided on the right side to perform the following actions:

Actions

Description

Date range

Click the date range and select the required date range for which you wish to view the user's journey.

Zoom-in and Zoom-out

Use + and - icons to zoom in and zoom out respectively.

Maximize and Restore

Use this to view the user's journey in full screen and to restore it back to the normal view.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/monitor-and-analyze/query-insights

The query insights feature helps gives you a closer look into the conversations that users have with your agent. You can also use the insights to search and export the data for these words/phrases.

## 

**Search query insights**

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view user feedback. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
    
*   In the **Agent** page, click **Monitor -> Query insights**.
    

*   You can filter the conversations based on a date range, goal, channel, tags, and intent types such as Smalltalk, Q&A, Inline, Disambiguation, Unhandled queries, JS intent, and other filter options as required.
    
*   Click **Search** to see the result for the selected agent.
    

**Note**: By default, all the agent interventions are tagged with a default system tag - `System::Agent::Transfer`. If you wish to search for all agent interventions, then it is recommended to filter using `System::Agent::Transfer` tag instead of Agent Request and Agent Transfer intent type. See [Agent interventions](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#agent-intervention), for more information.

### 

Date range filter

The Date range filter allows you to search and filter results in the specified date range and timezone.

*   By default, the last 7 days and the current timezone as per the user browser's local timezone are selected in the **Date range** filter.
    
*   Click the **Date range** filter to select different date options and timezone as per your requirement and click **Apply**.
    
*   Click **Custom range** to pick your own date range by selecting the start and end dates.
    

## 

View results

For the specified search criteria, each row in the Query insights displays the following columns:

*   **User query**: The user query and the user name that matched the search criteria. Click the arrow for navigating to the corresponding **Conversation history**.
    
*   **Intent**: The Node, Intent type, Intent, and skill that matched the user query.
    
    *   Node details is displayed in the format`<<Skill_key>>.<<Intent_key>>`for Dialog skills. For the rest of the skills, the node is 1.
        
    *   Click the skill in the **Intent** column for navigating to the respective skill.
        
    
*   **Channel**: The channel applicable to the user query.
    
*   **Created at**: The date and time of the user query. This is based on the selected date and timezone in the **Date range** filter. See [Date range filte](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights#date-range-filter)r, for more information.
    
*   **Action**: Click **Insights** in the **Action** column to view the message insights of the user query. This provides a deeper understanding of how the user query was matched such as the response node that matched, the entities extracted if any, and the sentiment of the user query.
    

*   Click **Response** in the **Action** column to view the agent response for the user query.
    

**Notes**:

*   Live agents are considered as custom intents. To track the live agent interactions, you can use "Live agent" or "Talk to agent" in the Intent filter and search for the results.
    
*   "To node" indicates to which node the conversation flow has matched and hence, this is displayed for all intent types except Q&A intents.
    

## 

Export query insights data

You can export upto 6 months of data at a time based on your search criteria from the Query insights page.

*   Specify the search criteria in the **Search** section.
    
*   Click the **Export** option to export data based on the search criteria.
    
*   When you click **Continue**, an export job is created based on the search criteria. An email notification is sent to you upon completion.
    

**Key points**:

*   It may take a while to export the data based on your search results.
    
*   By default, in the exported CSV file all the configured user properties in the agent are also exported. See [User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.
    
*   If you have deployed your agent in the C-IVR channel, then you can configure the following properties that can help you get better query insights:
    
    *   **user\_phone\_number**: Indicates the phone number used by the user for connecting to the C-IVR channel.
        
    *   **agent\_phone**: Indicates the phone number used by the agent assigned for connecting to the C-IVR channel. You can view the agent's phone number in the C-IVR channel settings. See [Conversational IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.
        
    *   **call\_sid**: Indicates the unique ID for any incoming or outgoing voice call successfully created in the C-IVR channel.
        
    
    See [User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.
    
*   In the exported CSV, an additional column `Created At (UTC)`is available that shows time in the UTC timezone.
    
*   When exporting a Query Insights CSV with non-English characters, ensure it is opened or saved with `UTF-8 encoding` in Excel to display characters correctly. Refer [documentation](https://support.microsoft.com/en-us/office/opening-csv-utf-8-files-correctly-in-excel-8a935af5-3416-4edd-ba7e-3dfd2bc4a032) for more information.
    

*   Click the **View export jobs** option to view the last 10 export jobs.
    
    *   **Request time**: Time of data export request.
        
    *   **Export data**: The search criteria used to export data. Click **Show more** if you wish to view additional search criteria if any.
        
    *   **Status**: Indicates the status of the export job. The status can have the following values:
        
        *   **Complete**: The export job is completed without any errors. Click the **Download** link to download the exported data based on the search criteria.
            
        *   **Failed**: The export job has failed with errors. Contact Avaamo Support for further assistance.
            
        *   **In-Progress**: The export job is still in progress. An email notification is sent to you upon completion. You can still delete a job that is in progress, however, you can download the export file only after the job is completed.
            
        
    *   **Actions**: You can download the exported data or delete the jobs that are no longer required.
        
    *   Click **Refresh** to view the latest status of **In-Progress** export jobs.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/learning-continuous-improvement

[Overview](/user-guide/how-to/build-agents/learning-continuous-improvement/overview)[User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback)[‼️Query analyzer (Deprecated)](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated)[‼️Agent diagnostics (Deprecated)](/user-guide/how-to/build-agents/learning-continuous-improvement/agent-diagnostics-deprecated)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/learning-continuous-improvement/overview

You can learn and understand the user's experience with your agent by monitoring your agent continuously using out-of-the-box tools such as [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics), [User Journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey), and [Query insights](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights). It helps to monitor and learn how well your agent is being used. With these statistics, you can decide how and where to further improve your agent based on your business requirements. See [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze), for more information.

One of the most important ways to improvise your agent is by learning how well is your agent trained. The "Learning" section provides certain out-of-the-box tools that can help in improving your agent training data. This helps to improve the overall accuracy of the agent and thereby increases the business value of the agent.

**Key Point**: Training, hence, is an iterative and continuous process. See [Train your agent](/user-guide/how-to/build-agents/train-your-agent), for more information.

The following Learning tools are available in the Avaamo Platform to improvise your agent continuously:

### 

User feedback

The **User feedback** page displays the feedback received by the agent from the users for the selected date range. It displays the Intent, User Comments, Feedback, and Node. This feature is used to learn and analyze the experience of the user when they are interacting with your agent.

See [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback), for more information.

### 

Unhandled query analyzer

This tool helps to understand the user queries that went to unhandled, pre-unhandled, or disambiguation. It provides recommendations on new intents and suggests updates to improve the overall accuracy of the agent.

See [Unhandled query analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated), for more information.

### 

Agent diagnostics

Agent diagnostics tool analyzes all the intents and their associated training data to determine the quality of the current training data in Dialog and Q&A intents. It helps to understand:

*   If the training data is adequate
    
*   If you have duplicate training data
    
*   If you have malformed or invalid training data
    

See [Agent diagnostics](/user-guide/how-to/build-agents/learning-continuous-improvement/agent-diagnostics-deprecated), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/learning-continuous-improvement/feedback

The **User feedback** page displays the feedback received by the agent from the users for the selected date range. It displays the Intent, User Comments, Feedback, and Node. This feature is used to learn and analyze the experience of the user when they are interacting with your agent.

See [Collect feedback](/user-guide/overview-and-concepts/advanced-concepts/collect-feedback), for more information on understanding the concept and various ways in which you can collect feedback from the users.

**To view feedback**:

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view user feedback. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
    
*   In the **Agent's** page, click **Learning -> User feedback**. By default, user feedback for the last 7 days is displayed.
    
*   Click the **Date picker** to specify a custom date range. A list of user feedback for the agent in the selected date range is displayed.
    

*   For each intent where the feedback is collected, the following details are displayed:
    
    *   **User**: Indicates the identifier of the user who provided the feedback.
        
    *   **Step**: This is the `<<Skill_key>>:<<Intent_key>>` of the node in Dialog skill where the feedback is collected. For the Q&A skill, the step is always 1. See [Flow designer](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/dialog-designer-overview), for more details on the skill key and intent key.
        
    *   **Intent**: Indicates the intent name provided in the respective skill for which the feedback is collected.
        
    *   **Intent Type**: Indicates the type of intent such as Inline, Entity, or Q&A for which the feedback is collected.
        
    *   **Skill**: Indicates the name of the skill for which the feedback is given.
        
    *   **Positive**: Indicates if the feedback by the user is positive or negative.
        
    *   **Message**: Indicates any message submitted by the user while providing feedback.
        
    
*   Click the arrow icon for the feedback where you wish to view the conversation history. You can use this to analyze the conversational flow for any troubleshooting.
    
*   Click **Export** to download the user feedback in a CSV format. This can be used as a reference and for further analysis.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated

An agent receives and responds to voluminous amounts of queries. These agent responses are pre-defined with intents and entities in your agent and your agent is trained to respond to the user queries.

However, a few queries go unhandled as the agent cannot map them to the predefined intents. By default, for all the user queries that do not get matched to any predefined intents in the agent, the agent has a node within the flow to respond to the user's query with statements like -

_"I am sorry I do not understand." "I am sorry. I don't have an answer for that."_

These classify as unhandled queries as ideally, the user query goes unanswered.

In certain other cases, when a user's intent does not match a specific intent, the agent responds with a selection of closest intent options, referred to as a disambiguation intent.

In a few others, the agent might respond to the user query but not with the expected results.

Overall, in order to improve the accuracy and experience with the agent, it is critical to analyze all these queries and continually improve the agent training data.

## 

What is QA?

The Query Analyzer tool can go through all of the end-user queries and provide suggestions to improve the training data of the agent. The purpose of QA is to:

1.  Find out the queries that can be used to train existing intents
    
2.  Find out the queries that can be used to create new skills or intents
    
3.  Find out the words or phrases which can be used to improve entity values
    
4.  Find out the words or phrases which can be used to create new entity types
    

## 

Why is QA required?

As the agent grows in volume, it is very difficult to analyze the user queries manually and understand why these user queries went unhandled or disambiguation. This effort is tremendous and time-consuming.

QA helps us to accelerate, learn and improve the agent training data by not only analyzing all the queries but also suggesting the required changes in the agent to further improve the accuracy of the agent.

## 

When to run QA?

It is recommended to run QA in the following scenarios:

1.  After Go-live or in the Staging and Production environments.
    
2.  It is recommended that you wait for a good round of testing to complete before running QA.
    
3.  After an agent is in production, it is recommended to wait for at least a week and then run QA.
    
4.  It is not recommended to run QA in Development and Testing environment.
    

## 

Enabling QA

Contact Avaamo Support to enable QA for your agent.

## 

Running QA

**Note**: Anyone with at-least view permission on the agent can submit a QA job. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information. This is useful in production agents, as typically only read-only permissions are provided to the business users. It helps them to run the QA job to analyze the queries and further improvise the user experience with the agent.

You can run QA from the **Agent ->** **Learning -> Query analyzer** page.

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view user feedback. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
    
*   In the **Agent's** page, click **Learning -> Query analyzer** and select the following parameters:
    
    *   Start date: Select or specify the start date in dd/mm/yyyy format. By default, the Start date is one month before the current date. The Start date can be upto 6 months before the end date.
        
    *   End date: Select or specify the start date in dd/mm/yyyy format. By default, this is the current date.
        
    *   Types of queries to analyze: Select the types of queries you wish to analyze. By default, Unhandled and Pre-Unhandled are selected.
        
    

*   Click **Submit job**. A background job is submitted that run all the selected type of user queries in the specified date range. Note that based on the volume of data, the background job may take upto a few minutes to display the results.
    

*   As the job progress, you can view the status in the **Job Pipeline**.
    
*   Click **Cancel Job**, if you wish to cancel the submitted job.
    
*   When the job is completed, the results analyzed are displayed in the respective sections. See [Understanding results](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated#understanding-results), for more information.
    

### 

Understanding results

After the job is completed, the results are displayed in the respective sections. You can learn these results and analyze further on how to further improve your agents.

*   Click **Re-run Job** if you wish to perform a fresh run of the QA job.
    
*   Click **Export Job** if you wish to export all the job results into a CSV file. You can also click **Export** from the specific sections. This export the queries and the intent types in a CSV format.
    
*   Intent types are classified as follows:
    
    *   **Junk**: Queries that are recognized by the system as not holding any intent/entity. A few examples are listed below:
        
        *   Gibberish queries
            
        *   One word or less than 5 chars
            
        *   Command queries, eg reset, #clear
            
        *   Only numbers, no words query
            
        *   When language is not detected as English: If translation or language pack is enabled, then the translated queries are also used. If the translated query is not available but a different language is detected, then it is not used and is classified as Junk.
            
        
    *   **Unclassified**: Queries that do not fall under any existing intent, and are not asked frequently enough to have a new intent.
        
    *   **Handled**: Queries that match existing intents if asked again.
        
    *   **Duplicate**: If the same query occurs repeatedly, one utterance is maintained for the pipeline and the rest are marked as duplicates.
        
    *   **Smalltalk**: Casual conversation such as Greetings and wishes.
        
    

### 

Summary

In the **Summary** tab, the following details are displayed:

*   Analyzed Date Range: Indicates the date range for which the current QA job was run.
    
*   Last run of job: Indicates the date of the last QA job.
    
*   Total queries analyzed: Indicates the total number of user queries analyzed by the QA job for the selected date range.
    
*   Queries classified in Existing Intents: Indicates the list of queries where you can enhance training data for existing dialog and QnA intents from unhandled queries
    
*   Matched Queries: Indicates a list of all other queries that are Handled.
    
*   Queries Classified in New Intents: Indicates the list of queries for which you can create new intents to improve accuracy.
    
*   Other Queries: Indicates a list of all other queries that are Junk, Unclassified, Duplicate, or Smalltalk.
    
*   Click **Export** in each block to export the queries and the intent types in a CSV format. You can use this to further analyze and check if training data can be further improvised.
    

### 

Existing intents

In the **Existing intents** tab, you can view a list of queries where you can enhance training data for existing dialog and QnA intents from unhandled queries in the existing intents.

You can click on each intent and view the recommended list where the training data can be enhanced.

### 

New intents

In the **New intents** tab, you can view a list of queries for which you can create new intents to improve accuracy.

You can click on each intent and view the recommended list where new training data can be created.

## 

Validating and testing

After you make all the required changes in the agent, you can validate the same by running Regression testing for the newly implemented changes in the agent. You can check if such queries still result in unhandled responses or if the accuracy of the agent has improved. See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/learning-continuous-improvement/agent-diagnostics-deprecated

The success of your agent depends upon how accurately it can respond to user queries. The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. Creating the right number of intents with the right number of training data samples for each intent is essential to provide a good user experience.

If your agent is trained incorrectly or with insufficient training data, then it can lead to unexpected matches to the user queries, leading to an unpleasant user experience. Hence it is recommended to periodically review, understand, and improve the quality of training data. This can significantly improve the accuracy of your agent and helps in providing a pleasant user experience.

## 

What is agent diagnostics?

Agent diagnostics tool analyzes all the intents and their associated training data to determine the quality of the current training data in Dialog and Q&A intents. It helps to understand:

*   If the training data is adequate
    
*   If you have duplicate training data
    
*   If you have malformed or invalid training data
    

## 

Enabling agent diagnostics

Contact Avaamo Support to enable agent diagnostics for your agent.

## 

Running agent diagnostics

You can run AD from **Agent ->** **Learning -> Agent Diagnostics** page.

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view user feedback. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
    
*   In the **Agent's** page, click **Learning -> Agent diagnostics**

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents

[Promote and pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates)[Make a copy](/user-guide/how-to/build-agents/manage-agents/make-a-copy)[Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents)[Activity monitor](/user-guide/how-to/build-agents/manage-agents/activity-monitor)[Other common actions](/user-guide/how-to/build-agents/manage-agents/other-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates

As the agent goes through different stages in its life cycle, you can promote agents from one stage to another using the **Promote** option. See [Promote an agent](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates#promote-an-agent), for more information.

Similarly, when you make certain changes in the previous stage of the life cycle, you use the **Pull updates** option to pull the updates from the previous stage to the current stage. See [Pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates#pull-updates), for more information.

**Notes**:

*   See [Plan your development process (Agent life cycle)](/user-guide/how-to/plan-your-development-process-agent-life-cycle), for more information
    
*   Promote and Pull updates options are specific to the roles and permissions defined for each user. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    

### 

Promote an agent

*   In the **Agents** page, click the **Stage** tab (Development, Testing, Staging) from where you wish to promote the agent.
    
*   Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Promote.**
    
*   If there are users editing the agent, then the following message with a list of the users and the module being edited by the user is displayed. You can review the current changes in progress and decide to either cancel promoting or click **Next** to continue promoting the agent to the next stage.
    

*   The following pop-up message is displayed. Type **accept** in the confirmation message box and click **Accept** to complete promoting the agent from the current stage to the next stage. Click **Cancel** if you wish to decline the changes and not proceed with the promotion.
    

*   When an agent is promoted to the next stage,
    
    *   The user who promoted the agent is the agent's owner in the promoted stage. As the agent's owner, you can also add other team members as needed.
        
    *   The first step as an owner of the agent in any stage is to configure the agent with variables specific to the environment. See [Define environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables), for more information.
        
    *   An exact clone of the agent is created in the promoted environment. Users with the required roles can work on the agent in the promoted environment without affecting the agent in other stages.
        
    

**Note**: An agent can be promoted from one stage to another only once. Once promoted, you cannot revert the operation. However, you can delete the promoted agent and promote it again from its previous stage.

### 

Pull updates

*   In the **Agents** page, click the tab (Testing, Staging, Production) from where you wish to pull updates to the agent.
    
*   Click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Pull updates.**
    

*   If users are editing the agent, a message with a list of users and the module being edited by each user is displayed. You can review the current changes in progress and decide to either cancel pulling the updates or click **Next** to continue to pulling updates from the previous stage.
    

*   The **Pulling updates** pop-up window is displayed. In this window, you can view a high-level summary of the agent changes that will be pulled from the previous stage to the current stage.
    

*   Each update is categorized as Created, Updated, or Deleted - to help you easily identify the type of change. Against each category, you can view a count of the updates made.
    
*   For [AI agents](/user-guide/ai-agent/overview-key-features), the [Advanced Options](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates#advanced-options) section allows you to select from a list of added or modified knowledge skills to pull specific updates.
    
*   Click **Download CSV** to download a detailed summary of the updates in CSV format. This helps you to analyze the changes further.
    
*   After verifying all changes, type accept in the confirmation message box, then click Accept to complete pulling updates from the previous stage to the current stage.
    
*   Click **Cancel** to decline the changes and not proceed with pull updates.
    

**Key points**:

*   Currently, changes in the following Configuration pages are not displayed in the **Pull updates** window: Settings, Channel, Live chat agent, Persistent menu, and Custom feedback.
    
*   The Pull Updates window provides a summary of changes in the agent between two environments. However, if you wish to audit in-depth details, you can refer to the [Changelog API - V2](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api-v2).
    
*   When you pull changes from the source stage to the current stage, the Auto Sync settings are **not** pulled. For example**,** If you change the Auto Sync option in the source stage and pull it into the current stage, the current stage’s Auto Sync configuration remains unchanged.
    

### 

Advanced options

The `Advanced Options` section provides a detailed list of all added or modified LLaMB content. From this list, you can choose exactly which updates you want to pull, giving you more control over the update process.

The changes are categorized as follows:

*   **To be created**: Newly added LLaMB skills
    
*   **To be updated**: Existing LLaMB skills that have been modified
    

All checkboxes in this section are selected by default during knowledge skill pull updates, reducing manual effort.

### 

What is not promoted or pulled?

The following lists the items or configurations that are not promoted or pulled from the source to the target agent:

*   The agent's name and description are used primarily to identify the agent at a specific stage.
    
*   Channel configuration
    
*   Permissions
    
*   Notification settings and Personas
    
*   Details available in Debug, Test, Monitor, and Learning
    
*   Only the following Live agent Automated messages are pulled:
    
    *   Switch to Live Agent Message
        
    *   Switch to Agent Message
        
    *   Working hours
        
    *   Callback messages
        
    

**Notes**:

*   A few items, such as environment variables and web channel configurations, are promoted only the first time, as this helps progress faster through the agent life-cycle stages, rather than recreating them manually. In subsequent pulls, as it can overwrite existing data, certain items may not be pulled from the previous stage.
    
*   When the updates are pulled, for those items that are promoted or pulled from one stage to another, the changes from source agents are copied and overwritten into the target agent.
    
*   For the items or configurations that are not promoted or pulled, the changes in the target agent are retained.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/make-a-copy

You can make a copy of your agent using the **Make a copy** option. When you copy an agent an exact clone of the agent is created.

**Notes**:

*   This option is available only when you have at-least edit permission on the agent.
    
*   This option is available only in the Development stage of the agent life-cycle.
    
*   When you "Make a copy" of an agent, the cloned or copied agent is independent and does not have any references to the skills from the original agent. All copies of the skills in the cloned agent are independent copies.
    

**Make a copy** feature is useful in parallel development, where multiple developers can work on a single agent simultaneously. Avaamo suggests the approach of each developer having their copy of the agent when they have to develop and collaborate on a single agent. See [Best practices - Parallel Development](/user-guide/ref/best-practices-parallel-development), for more information.

### 

How does it work?

*   In the **Agents** page, click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Make a Copy.**
    
*   Click **OK** in the confirmation message.
    
*   An exact copy of the agent with the name **"**Copy of <<agent\_name>>" is created in the **Agents** tab.
    

### 

What agent details are not copied?

The following lists the items or configurations that are not copied from the original (source) to the copied (target) agent:

*   Channel configuration
    
*   Permissions
    
*   Notification settings and Personas
    
*   Environment variables
    
*   Details available in Debug, Test, Monitor, and Learning

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/export-and-import-agents

You can create a backup copy of your agent in your local system using the **Backup & Export** option. Later, you can use the exported copy and **import** it into any existing agent in any account.

When you export an agent, an exact snapshot of the agent at that point in time is exported to a ZIP file. The following lists a few use cases of this feature:

*   Import to an existing agent within the same company
    
*   Import to an existing agent of a different company
    
*   Import an agent when you wish to create a new similar agent
    

**Notes:**

*   **Backup & export** option is available only in the Development stage of the agent life-cycle and only when you have at least view permission on the agent. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   **Import to agent** option is available in the Development stage of the agent life-cycle and only when you have at least edit permission on the agent. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   Importing the agent creates an exact copy of the exported agent. Hence, all the existing details in the imported agent are entirely replaced. (except those listed in [What agent details are not imported?](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents#what-agent-details-are-not-imported))
    
*   Import and export work only in the same version of the platform. This implies that you cannot export your agent in 5.1 and import it in the 5.2 version or you cannot export an agent in 5.2 and import it back to the 5.1 version.
    
*   You can export and import agents upto a maximum size of 4 GB.
    

## 

How does it work?

### 

**Export an agent**

*   In the **Agents -> Development** tab, click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Backup & Export.**
    
*   If the agent is getting exported for the first time, then the following pop-up is displayed. Click "Export Zip" to export a fresh copy of the agent.
    

*   You can exclude the LLaMB skill from the export by clearing the checkbox.
    
*   If the agent has already been exported before, then in the pop-up message, the following details are displayed:
    
    *   "First name" and "Last name" of the user who last exported the agent
        
    *   Timestamp of when the agent was last exported
        
    *   A link to download the last exported zip file
        
    
    You can either download the last exported zip file or click "Export Zip" to export the agent.
    

*   When you click "Export zip", a zip file of the agent "<<agent\_name>>\_<<agent\_id>>\_<<timestamp>>.zip" is downloaded to your local system. The zip file is a collection of files (JSON, images) of the agent as available at that point in time.
    

### 

**Import an agent**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can import to an agent immediately after creating an agent. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

*   In the **Agents -> Skills** page, click **Import to agent** option.
    
*   Browse the exported zip file and click **Open**. In the import message, click **OK** to import.
    
*   An exact copy of the exported agent is created in the agent. See [What agent details are not imported?](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents#what-agent-details-are-not-imported) for more information.
    

## 

What agent details are not imported?

The following lists the agent items or configurations that are not imported from the source to the target agent:

*   Answers skill. Also note that if the target agent has answer skills, they are cleared after import.
    
*   Live-agent settings
    
*   Channel configuration
    
*   Permissions
    
*   Notification settings and Personas
    
*   Environment variables: Copied if the target agent does not have any environment variables.
    
*   Details available in Debug, Test, Monitor, and Learning
    

**Notes**: For the items or configurations that are copied from source to target, the existing details in the target agent are cleared out and completely replaced with the details of the source except for a few items such as Web channel and environment variables.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/activity-monitor

For an enterprise agent, as the demand and usage of the agent increase, the number of use cases required to build in the agent also increases substantially. To ensure faster adoption of the increasing agent demand, it is critical to build and deliver the agents faster. Hence, parallel development, which allows multiple developers to work on the agent simultaneously is a key factor in rapid agent development and reduces the turnaround time to build the agent.

Activity monitor helps you to get a snapshot of a list of all the developers working on the agent and the module they are working on. It is available for every agent and shows the list of users editing the agent at any given point in time. This allows developers to collaborate and work efficiently, thus promoting rapid agent development.

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).

**To view the activity monitor of an agent**:

*   Navigate to the **Agents** tab on the top menu.
    
*   Search and click any agent for which you wish to view or edit. See [Search agents](https://docs.avaamo.com/v5/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   If there are developers working on the agent, then the initials of the developers are displayed in the agent header section.
    

*   Click the initials to view the **Activity monitor**. In the **Activity monitor** pop-up, you can view the user editing a module and the time since the module has been locked by the user. For example, in the following illustration, a user Tom Wilson is editing a JS file named GreetingHandler and it is locked since Nov 24, 1:06 PM.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/other-common-actions

In the **Agents** tab, you can search, delete, and view agents based on the roles and permissions assigned to you on the agent. See [Roles and permission](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions)s, for more information.

### 

Search agents

You can search for agents using the search icon available at each stage of the agent life cycle. In the **Agents** tab, start entering the text in the **Search** text box. The results are filtered and displayed as you enter the text.

### 

Delete agent

In the **Agents** page, click three ellipse dots in the **Actions** column of the agent to view the extended menu and click **Delete.** Click **Delete** in the confirmation message to delete the agent. Note that this action cannot be undone.

**Notes**:

*   It is recommended to use this option with caution because when you force unlock an agent all the unsaved changes made by the other user are lost.
    
*   In order to use this option, you must at least have edit permission on the agent.
    
*   You can delete an agent only when it is not locked by any other user.
    

### 

View agent

In the **Agents** tab, click three ellipse dots in the Actions column of the agent to view the extended menu and click **View.** The details of the agent are displayed in the **Agent** page.

### 

Force unlock

You can use the **Force unlock** option when you wish to edit an agent that is locked by another user. In the **Agents** page, click the **lock** button. A message is displayed to force unlock the agent. Click **OK** to force unlock the agent.

**Notes**:

*   It is recommended to use this option with caution because when you force unlock an agent, all the unsaved changes made by the other user are lost.
    
*   In order to use this option, you must at least have edit permission on the agent.

---
