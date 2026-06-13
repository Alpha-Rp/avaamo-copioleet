# Overview & Concepts
> 28 pages

---

## Source: https://docs.avaamo.com/user-guide/avaamo-conversational-ai-platform/master

**The Avaamo Conversational AI platform** is a cloud platform that automates the Conversational AI lifecycle. It provides an end-to-end framework for rapidly designing, developing, testing, and deploying enterprise agents into different applications or channels. Learn how to use the Avaamo Platform with our Quick Starts, Tutorials, and Samples.

New to Avaamo Conversational AI Platform? Get an understanding of the platform and a quick overview of important concepts.

*   [About Avaamo Conversational AI Platform](/user-guide/overview-and-concepts/about-avaamo-platform)
    
*   [Key Concepts](/user-guide/overview-and-concepts/quick-summary)
    

### 

Quick Start Steps

Start building agents using quick tutorials and quick start. Get an overview of the Avaamo Dashboard and some key concepts:

[](/user-guide/quick-start-tutorials/create-an-agent)

**Agent**

An agent is a container of skills. Configure, test, and debug your agent using an interactive agent builder. Deploy your agent across multiple channels. Monitor your agent performance using analytics and insights.

[](/user-guide/llamb/overview-key-features)

**LLaMB**

Import external documents that will be processed, cleansed, and classified into the conversational knowledge base.

[](/user-guide/quick-start-tutorials/add-q-and-a-skill)

**Dynamic Q&A**

Advanced Q&A skill to dynamically add entities and slots for your Q&A intents. Includes all the functionalities of the Q&A skill too.

[](/user-guide/quick-start-tutorials/add-smalltalk-skill)

**Smalltalk**

A form of Q&A skill that allows you to build a personality for your agent to represent the organization or respond to some of the casual questions the user might ask. Examples: 'Who built you?' or 'Who is your CEO?'.

[](/user-guide/quick-start-tutorials/add-dialog-skill)

**Dialog**

Create complex multi-turn conversations such as building flow for diagnosing a patient using symptoms using an interactive Dialog Designer.

### 

Next Steps

Get an in-depth step-by-step understanding of how-to:

[](/user-guide/how-to/plan-your-development-process-agent-life-cycle)

**Plan your development process (Agent life cycle)**

Leverage the Avaamo Platform to iteratively design and build agents through different stages of the life cycle followed in any enterprise product development.

[](/user-guide/how-to/build-skills)

**Build skills**

Skill is part of an agent that is specialized to understand and handle a specific task in the user conversation flow. Learn how to create, test, and manage skills.

[](/user-guide/how-to/build-agents)

**Build agents**

Agents help you handle various use cases. The Avaamo platform equips you to build agents that suit all your business needs.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/about-avaamo-platform

A **virtual** **agent** is an application that simulates a "human interaction". Using the **Avaamo Platform**, you can design, develop, test, and deploy enterprise **agents** catering to a wide spectrum of industries such as Banking, Insurance, Healthcare, and Telco (to name a few) enabling better customer engagement and satisfaction. This can be as simple as placing a pizza order to querying about a new insurance policy or checking bank loan status.

### 

Build an agent

Avaamo Platform provides an end-to-end environment with various tools for building enterprise agents right from its inception to production:

*   [Plan your development process](/user-guide/how-to/plan-your-development-process-agent-life-cycle): Typically, any agent goes through different stages in its life cycle - **Development, Testing, Staging, and Production**. You can leverage the Avaamo Platform to iteratively design and build agents through all these different stages of the life cycle followed in any enterprise product development.
    
*   [Build agents](/user-guide/how-to/build-agents): Use the interactive and robust UI of the Avaamo Platform to create agents, add skills to the agent, and configure agents with just a few clicks.
    
*   [Test agents](/user-guide/how-to/build-agents/test-agents): Use the Simulator and Regression Testing tools built in the Avaamo Platform to test your agents at each step as you build the agents.
    
*   [Deploy agents](/user-guide/how-to/build-agents/configure-agents/deploy): The agents can be deployed across multiple channels such as Facebook, Skype, Amazon Alexa (to name a few) enabling better customer engagement and satisfaction.
    
*   [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze): Monitor the performance of your agent on different channels using analytics and insights. Evaluate and improve your agent iteratively.
    

### 

Next steps

Understand the core concepts of the Avaamo Platform - [agents](/user-guide/overview-and-concepts/agents), [skills](/user-guide/overview-and-concepts/skills), [intents](/user-guide/overview-and-concepts/intents), [entities](/user-guide/overview-and-concepts/entity-types), and [slots](/user-guide/overview-and-concepts/slots). See [Example: All concepts together](/user-guide/overview-and-concepts/end-to-end-flow), for more information on how all the concepts come together when a user interacts with an agent.

Go through the quick start and tutorials to quickly get started with [creating agents](/user-guide/quick-start-tutorials/create-an-agent) and adding skills - [Answers](/user-guide/quick-start-tutorials/add-answers-skill), [Q&A](/user-guide/quick-start-tutorials/add-q-and-a-skill), [Smalltalk](/user-guide/quick-start-tutorials/add-smalltalk-skill), and [Dialog](/user-guide/quick-start-tutorials/add-dialog-skill) to your agent.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/quick-summary

Before getting into a deep-dive understanding of the key concepts used in the Avaamo Conversational AI Platform, here is a quick summary of key concepts and terms:

Concept

Description

[Agents](/user-guide/overview-and-concepts/agents)

An agent is synonymous with a "human agent". Similar to a human agent that has or is trained with different skills for responding to user queries, an agent is a "container of skills", each specialized to understand and handle a specific task in the user conversation flow.

**Example**: A Pizza agent can contain Membership and Rewards policy Answers skill, Order Pizza Dialog skill, FAQ Q&A skill, and Smalltalk skill for responding to different user queries.

[Skills](/user-guide/overview-and-concepts/skills)

Skill is part of an agent that is specialized to understand and handle a specific task in the user conversation flow.

**Example**: Order Pizza skill in a Pizza agent is responsible for taking the user through a conversation for capturing the required data to order a pizza.

[Intents](/user-guide/overview-and-concepts/intents)

An intent is an action in the user query that indicates what the user wishes to do.

**Example**: Order Pizza, Find weather, Report claim.

[Training Data](/user-guide/overview-and-concepts/intents)

For the agent to respond to user queries, each intent must be trained with specific sentences that are used as representative phrases for user queries. This set of sentences is referred to as the Training data set. Note that Training data are not user queries. Training data is a set of sentences that is used to train the intent for responding to user queries.

[User query](/user-guide/overview-and-concepts/intents#training-data)

User queries are queries posted by the user to the agent.

[Entities](/user-guide/overview-and-concepts/entity-types)

If an intent refers to a verb or the action in the user query, then an entity refers to a noun (the object on which the action is performed) in the user query.

**Example**: In the user query "I want to book tickets from San Francisco to New York", San Francisco and New York represent entities of type Location.

[Entity type](/user-guide/overview-and-concepts/entity-types#entity-types)

An entity type is a named collection of similar objects such as states in a country, all pediatricians, a list of product names or data types (Date, Email, Location). Each entity type contains one or more values.

[Slots](/user-guide/overview-and-concepts/slots)

When information is extracted from a user sentence, the first task is to identify the intent behind the user query. The next task is to extract parameters in the training data that complete the intent. These are referred to as Slots. Each slot maps to an [entity type](/user-guide/overview-and-concepts/entity-types#entity-types) for extraction and validation purposes.

**Example**: In the user query "I want to book tickets from San Francisco to New York this Friday", San Francisco and New York are Slots that represent Location entity type and Friday represents DateTime entity type.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/agents

An **agent** is synonymous with a "human agent". Similar to a human agent that has or is trained with different skills for responding to user queries, an agent is a "container of skills", each specialized to understand and handle a specific task in the user conversation flow. In the Avaamo Platform, an agent can contain the following types of skills:

*   [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk): Used for informal or casual user conversations.
    
*   [Dynamic Q&A (Question & Answers)](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a): Used for one-off questions and answers.
    
*   [Dialog](/user-guide/how-to/build-skills/create-skill/using-dialog-designer): Used for complex multi-turn conversational flows.
    
*   [Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1): Used to provide answers from enterprise content.
    

Answers skill is deprecated in Atlas 8. See [Atlas 8 - Deprecated and removed features](/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features), for more information.

When a user posts a query to an agent, the agent understands and classifies the input (text and voice) and selects an appropriate skill to engage with the user.

**Example**: A Pizza agent can contain Membership and Rewards policy Answers skill, Order Pizza Dialog skill, FAQ Q&A skill, and Smalltalk skill for responding to user queries.

Similarly, the following illustration depicts responses from a Dialog skill in a Pizza agent:

An **agent** is a primary interface for users to have a conversation across multiple channels such as Facebook, Microsoft Teams, Web, and Slack (to name a few).

**Key Points**:

*   Quickly get started with creating an agent and adding skills to the agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   Alternatively, you can also make a copy from one of the sample agents and start enhancing it.
    
*   Plan your development process. An agent goes through various iterations from its conception to production. See [Plan your development process (Agent life cycle)](/user-guide/how-to/plan-your-development-process-agent-life-cycle), for more information.
    
*   Get familiar with different UI elements of the agent dashboard. See the [Product overview](/user-guide/quick-start-tutorials/product-overview), for more information.
    
*   Understand the best practices, dos, and don'ts of designing an agent. See [Design agents](/user-guide/how-to/build-agents/design-agents), for more information.
    
*   As you build skills and add to the agent, you train the agent to respond to user queries. Further, with each user's conversations, the agent continuously learns and adapts iteratively to enhance the accuracy of the responses. See [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   Agents also provide several configuration options to add multiple languages, define environment variables, and other common settings. See [Configure agents](/user-guide/how-to/build-agents/configure-agents), for more information.
    
*   Iteratively test your agent at each step using Simulator and Regression Testing. See [Test agents](/user-guide/how-to/build-agents/test-agents), for more information.
    
*   The agents can also be deployed across multiple channels enabling better customer engagement and satisfaction. See [Deploy agents](/user-guide/how-to/build-agents/configure-agents/deploy), for more information.
    
*   Monitor the performance of your agent on different channels using analytics and insights. See [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze), for more information.
    

### 

Universal agent

In simple terms, a **Universal agent** is a "group of agents" that handles the tasks of multiple agents in a single conversational flow. It can integrate and connect with independent virtual agents to route, filter, and provide real-time responses.

The primary feature of a Universal agent is the ability to have "one" agent across multiple departments in an Enterprise organization. Typically, large enterprises can have multiple departments, each with its agents catering to different aspects of the organization. Since all agents are a part of the same organization, by integrating these into a Universal agent, you are providing a seamless and pleasant experience to the users.

The following illustration depicts an "Acme Enterprise" Universal agent linked with independent virtual agents such as - Acme HR, Acme IT, and Acme Finance. Each department can continue to build these agents independently. The user can just use one agent - the "Acme Enterprise" agent for all the queries across different departments:

See [Universal agents](/user-guide/how-to/build-agents/create-universal-agent), for more information.

### 

Advanced agents

In its fundamental nature, an `Advanced agent` achieves the "true" objective of a "Conversational Assistant" by involving the user in a dialogue closely resembling human interaction.

The `Advanced Agent` uses our next-generation inference engine to provide a better user experience. It takes on a personalized approach, understanding nuances in the conversation, transforming interactions from a robotic demeanor to a more pleasurable and "conversational" experience for the user.

To the developers, this translates to `**a significant reduction in the amount of training data**` needed for the agent to comprehend user queries. You only have to train your agent with minimal meaningful user queries. The `Advanced agent` is capable of comprehending numerous nuances and variations in user queries.

An `Advanced agent`, hence, stands out as distinctly superior, more intelligent, and more personalized compared to a `Standard agent`. The following illustrations depict a sample comparison of training data between a `Standard agent` and an `Advanced agent`:

Standard agent

Advanced agent

See [Advanced agents](/user-guide/how-to/build-agents/create-advanced-agent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/skills

**Skill** is part of an agent that is specialized to understand and handle a specific task in the user conversation flow. It is an atomic unit of work. **Example**: Order Pizza skill in a Pizza agent is responsible for taking the user through a conversation to capture the required data to order a pizza.

## 

Skill types

The following lists the types of skills in the Avaamo Platform:

### 

Smalltalk

Use this skill to create responses for informal or casual user conversations. **Example**: Responses for the following sentences:

This skill is created by the [Smalltalk designer](/user-guide/how-to/build-skills/create-skill/using-smalltalk).

### 

Dynamic Q&A

Use this skill to create responses for one-off questions and answers that do not require multi-step dialogs with the user for a given question. Typically, the questions are Frequently Asked Questions (FAQs) related to your business, product, or service.

This skill is created by the [Q&A designer](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a). Upload questions and answers or create a custom response to user queries in CSV format. **Example**: Create custom responses in a simple CSV format to certain specific queries on a pizza-making, delivery for a Pizza agent. Upload the CSV file to enrich your agent and provide accurate responses to user queries.

### 

‼️Answers (Deprecated)

Answers skill is deprecated in Atlas 8. See [Atlas 8 - Deprecated and removed features](/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features), for more information.

Use this skill to provide answers from your enterprise content.

This skill is created by the [Answers designer](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1). You can create an Answer skill by importing any PDF document or from any externally accessible URL. **Example**: Create a quick conversational Answers skill by uploading a PDF document with certain policy details regarding delivery, and rewards for a Pizza agent to provide answers for all the queries from the document.

### 

Dialog

Use this skill to build a multi-step conversational flow.

This skill is created by an interactive [Dialog designer](/user-guide/how-to/build-skills/create-skill/using-dialog-designer). You can create, design, and edit conversational flows quickly with minimal technical expertise. Typically, the Dialog skill is used for any custom skill that cannot be built using other skill types. **Example**: Create complex multi-turn conversations such as building flow for diagnosing a patient using symptoms.

See [Create and test skills](/user-guide/how-to/build-skills/create-skill), for more information.

## 

Summary

Consider asking the following questions when you have to decide which skill type the training data belongs to:

Consider asking the following questions when you have to decide which skill type the training data belongs to:

What is my training data?

Which skill type should I use?

Casual or informal conversations. Example: How was your day?

Smalltalk

Has one-off questions and answers that do not require multi-step dialogs with the user for a given question. Example: One-off questions about healthcare in your Health assistant.

Q&A

Needs multi-turn conversation to complete a task. Example: Create complex multi-turn conversations such as building flow for diagnosing a patient using symptoms.

Dialog

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/intents

An **intent** is an action in the user query that indicates what the user wishes to do.

As you build your agent and skills, you must train the agent to understand the user queries. Intents and training data are the basic building blocks of training your agent.

The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. Creating the right number of intents with the right number of training data samples for each intent is essential for a good user experience.

### 

Intent

In simple terms, the intent is a user's intention to act on something. For example, consider the following sentences about weather details:

Copy

    Show me yesterday's weather.
    How cold will it be tonight in Boston?

Here, all sentences are related to the same intent "Find Weather" expressed in different ways. Now, consider another example with the following user queries about insurance claims:

Copy

    I met with an accident. Can you help me create a new claim?
    I want to report a claim.
    Would you help me with a new claim?

All sentences are related to the same intent "Report claim" expressed in different ways.

**Key Points**:

*   A single skill can understand and respond to one or multiple user intents. **Example**: A "Reset password" Dialog skill that responds to only one intent of steps required to reset password or a Q&A skill that can comprise of multiple questions and responses.
    
*   As a best practice, it is recommended to name your intents with a combination of a verb and a noun that helps to identify the action and the object on which the action is performed. **Example**: Order Pizza, Find weather, Report claim.
    

### 

Training data

For an agent to respond to user queries, each intent must be trained with specific sentences that are used as representative phrases for user queries. This set of sentences is referred to as the **Training data set**.

**Key Points**:

*   Training data are not user queries. User queries are queries posted by the user to the agent. Training data is a set of sentences that are used to train the intent for responding to user queries.
    
*   Training data are also referred to as Training phrases or Training utterances.
    

**Example**: The following table lists a few examples of intent with training phrases:

Intent

Training Phrases

Order Pizza

I want to order veg cheese pizza with French Fries.

Find weather

I want to check Boston's weather tomorrow.

Report a new claim

I want to report a claim for policy number 08765434546.

**Key Points**:

*   An intent represents a specific named action identified by its training data.
    
*   See [Intent and training phrases](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases), to learn about the recommended best practices.
    

### 

Types of Intent

The following lists different types of intents that can be specified in the Avaamo Platform:

Intent Type

Description

Training Phrases

These are the inline user intents (utterances or phrases) in the conversation flow.

**Example**: I want to order pizza, I want to order a large cheese pizza.

Entity

These are intents with [entities](/user-guide/overview-and-concepts/entity-types).

**Example**: Consider that in the Order Pizza skill, the first message asks the user for the type of pizza (veg or non-veg). In return, you can specify an intent with these entities to process the user response and proceed further in the conversation flow.

System Intent

These are the system intents with pre-defined training phrases already available in the platform.

**Example**: Consider that you wish to respond to the user's frustration by transferring to a live agent or via collecting feedback. You can create a user intent with frustration system intent and add a skill response to transfer to a live agent.

Custom Code

These are intents with custom JavaScript code.

**Example**: You can create a custom intent with a regular expression to match the pizza order number entered by the user. Alternatively, you can also create an entity with a regular expression.

Pre-unhandled

You can define the pre-unhandled intents for the agent to give users a few more options and help with the query instead of just responding with an unhandled intent.

Unhandled

By default, for all the user queries that do not get matched to any predefined intents in the agent, the agent has a node within the flow to respond to the user's query with statements like -

_"I am sorry I do not understand." "I am sorry. I don't have an answer for that."_

These classify as unhandled queries as ideally, the user's query goes unanswered.

See [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

**Note**: The quality of the intents and their training determines the quality of the agent's accuracy in understanding the user queries. See [Design skill](/user-guide/how-to/build-skills/design-skill), for more information on intent training guidelines.

### 

Disambiguation

When a user intent does not match a specific intent, the agent responds with a selection of closest intent options, referred to as a disambiguation intent. If the user selects and responds with one of the options, the query is successful else it is categorized as a failed disambiguation query.

Here, we have queried "order". The agent has responded with the intents that support "order". This is categorized as disambiguation. If you select one of the above options, the query is a successful disambiguation query and if you select "none of these" then it is a failed disambiguation query.

**Notes**:

*   The top 5 closest disambiguations is displayed to the user.
    
*   Smalltalk does not participate in disambiguation.
    

### 

Wild card

You can add a wild card for the agent to avoid responding with unhandled intent. These wild card intents are saved with no training data. **Example**: In scenarios, where you are validating certain user input, you can handle invalid inputs in a wild card. In the wild card, you can, for example, navigate to specific nodes in the flow. If you are not using a wild card, then the invalid inputs go to an unhandled node. The wild card allows developers to have better flow control for handling such cases.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/entity-types

In simple terms, if an intent refers to a verb or the action in the user query, then an entity refers to a noun (the object on which the action is performed) in the user query. **Example**: In the user query "I want to book tickets from San Francisco to New York", San Francisco and New York represent entities of type Location.

### 

Entity types

An entity type is a named collection of similar objects such as states in a country, all pediatricians, a list of product names, or data types (Date, Email, Location). Each entity type contains one or more values. **Example**: An entity type named "US City" contains values - Los Altos, San Francisco, Los Angeles.

The following entity types are available in the Avaamo Platform:

*   **System entities**: In-built entities in your agents that can match the common data types such as Location, Date, DateTime, Person, Organization.
    
*   **Custom entities**: User-defined entities that represent the structured data related to your business. Few examples of customized entities in a Pizza agent - pizza size (small, medium, large), toppings (cheese, corn, tomato).
    

**Notes**:

*   When you define a custom entity, the custom entity values must be replaceable in all the training data, which implies that in all the intents the custom entity values must have the same meaning.
    
*   If you are using a date-time system entity in your training data and in a scenario where the only day and month is specified in the user query but not the year, the system picks the closest date to the current date. Example:
    
    *   Date in user query -> Feb 12
        
    *   Current date -> Aug 6, 2020
        
    *   Since Feb 12 2020 is closer than Feb 12, 2021, the year considered in the user query is 2020 instead of 2021.
        
    

### 

**Entity alternate values**

Some of the entity values may have one or more direct alternate values or other phrases/words considered equivalent in meaning.

**Examples**:

*   City entity type:
    

Entity value

Alternate value

San Francisco

SF

New York

NYC, The Big Apple

*   Pizza sizes entity type and alternate values
    

Entity value

Alternate value

small

12 inch

medium

14 inch

large

16 inch

See [Add new entity type](/user-guide/how-to/build-agents/add-entity-types-to-agent/add-new-entity-type), for more information on managing entity types and their values in the Avaamo Platform.

### 

Entity disambiguation

When a user value does not match a specific entity value at a node entity step in the conversation flow, the agent responds with a selection of closest entity values, referred to as entity disambiguation.

Consider that you have an entity type "Colorado Cities" with four values - Colorado Springs, Glenwood Springs, Hot Sulphur Springs, and Idaho Springs.

In the conversation flow, if a node entity "Colorado Cities" is expected and the user just enters "Springs" when asked for a Colorado city, then the system shows a disambiguation message to confirm for "Colorado Springs" or “Glenwood Springs” and any other entity value with Springs in "Colorado Cities" entity type.

**Notes**:

*   This disambiguation works even when there is a single option.
    
*   The top 5 closest disambiguations is displayed to the user.
    
*   Disambiguation options are from the selected entity node values.
    

### 

Name entity recognition

In certain scenarios, the entity values are also used as common words. Example: "I am looking for Doctor Treat" and "Chocolate is his favorite treat". Both of these mean different in different context. For such scenarios, you can create a custom name entity type for the Platform to appropriately recognize and extract the "Name" entity as required based on the context of the user query.

**Notes**:

*   This feature is applicable to only custom entity types.
    
*   Contact support to enable this feature for your agent.
    

**Example**:

User: "_I am looking for Doctor Bill_", extracts Bill as a name

Here, the name is a custom entity type and this query extracts _Bill_ as a name.

User: "_I am unable to find my bill_", does not extract bill as a name.

Here, the word "bill" is not extracted as a "Name" entity.

### 

Number entity extraction

When the user enters a number name instead of a number, the number name entity is automatically recognized and converted to a number if it is expected at a number entity step.

**Example**: If a user enters "two and half million", then it is automatically converted to 2500000 if it is expected at a number entity step or if a user enters a query as illustrated below then the number name is automatically converted to a number entity.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/slots

When information is extracted from a user sentence, the first task is to identify the intent behind the user query. The next task is to extract parameters in the training data that complete the intent. These are referred to as **Slots**. Each slot maps to an [entity type](/user-guide/overview-and-concepts/entity-types#entity-types) for extraction and validation purposes.

**Key Points**:

*   Based on the context, you can name each slot in the training data for easy identification.
    
*   The entity types that are to be added in the slots must be either available as system or custom entities in the agent.
    
*   Slots are not always required to complete a user intent. Example: "_Who is your CEO?_" is complete on its own without requiring a slot.
    
*   Typically, if slots are required to complete a user intent, then you must use a [Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer) to build a user conversation flow.
    

**Example 1**:

Copy

    Intent Name: Find Weather
    Training Data: How is the weather?
    Slot: none

In this example, there is no additional information on the place or city for which the weather details are required. Hence, no slots are extracted.

**Example 2**:

Copy

    Intent Name: Find Weather
    Training Data: How is the weather in [Los Altos]
    Slot: city = Los Altos [Entity Type: Location]

In this example, the training data contains only one slot, the city for which the weather details is required.

**Example 3**:

Copy

    Intent Name: Find flight
    Training Data: Find flight from [Boston] to [New York]
    Slots: 
    * from_city = Boston [Entity Type: Location]
    * to_city = New York [Entity Type: Location]

In this example, the training data contains two slots with the same entity type but with different purposes. Naming the slots appropriately, hence, helps in identifying the purpose of the slot.

In the Avaamo Platform, as you enter the training data for your skills, slots are automatically extracted and mapped to an entity type.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/end-to-end-flow

This article provides a few examples that help you to understand how all the concepts come together when a user interacts with an agent.

### 

Weather agent

The following diagram illustrates a simple flow of a user interacting with a Weather agent to find the weather details:

### 

Pizza agent

The following diagram illustrates a simple flow of a user interacting with a Pizza agent for placing a pizza order:

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts

[Entity skipping](/user-guide/overview-and-concepts/advanced-concepts/entity-skipping)[Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions)[Intent execution sequence](/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence)[Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking)[Tone and sentiment](/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment)[Language pack](/user-guide/overview-and-concepts/advanced-concepts/language-pack)[Restrict login IP address](/user-guide/overview-and-concepts/advanced-concepts/restrict-login-ip-address)[Voice hints - Improve accuracy](/user-guide/overview-and-concepts/advanced-concepts/voice-hints)[Collect feedback](/user-guide/overview-and-concepts/advanced-concepts/collect-feedback)

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/entity-skipping

Avaamo Platform provides the ability to automatically detect the entities in a user query and skip asking questions to the users for which the answers are already available in the initial query. This is referred to as entity skipping.

**Examples**:

Entity type

Entity values

Pizza types

Veg, Non-Veg, Vegan

Specialists

Cardiologist, Neurologist, Paediatrician

Account type

Savings, Current

Further, you can also link an entity type to a parent entity type. **Example**: state entity type as a parent of the city entity type. The state entity type can in turn be a child of the country entity type. See [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent), for more information.

**Notes**:

*   If at the same level, multiple entity intents are matched for a user query, then entities are not skipped, as the platform is unsure which flow to further navigate. On the other hand, if you have such a use case, then consider accessing your requirements and revisiting your flow if required.
    
*   Post-processing is where the intent execution still continues after matching a node; hence, when post-processing is enabled at a node, the entity skipping is no longer relevant and is not evaluated.
    

Consider the following sample flow implementation in an "Order Pizza" dialog skill for ordering pizzas:

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
    

Note that if you specify a value other than those mentioned in the entity values, then the query goes to an unhandled response.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions

Avaamo Platform allows you to create and associate users and groups to different out-of-the-box roles based on the user's responsibility in the company. A user or group can also be assigned to multiple roles as required. Broadly, roles can be categorized as follows:

*   **Agent Settings**: Typically, any agent goes through different stages in its life cycle from inception to production - **Development, Testing, Staging, and Production**. You can create users or groups with different roles for collaborating in each stage of the agent life cycle. This allows teams to develop, test, stage, and then deploy the agents in different environments within the Avaamo Conversation AI Platform, thereby providing the required compliance. See [Agent Settings](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions#agent-settings), for more information.
    
*   **Campaign Settings**: Avaamo Platform allows you to create and associate users and groups with different out-of-the-box campaign roles based on the user's responsibility in the company.
    
    See [Campaign Permissions](/user-guide/outreach/before-you-begin#campaign-permissions), for more information on different roles available for an outreach campaign.
    
*   **Live Agent Settings**: Avaamo Platform allows you to create and associate users and groups with different out-of-the-box live agent roles based on the user's responsibility in the company.
    
    See [Live Agent Roles](/user-guide/live-agent-console/before-you-begin#live-agent-roles), for more information on different roles available in the Avaamo Live Agent system.
    
*   **Global settings**: For managing users, groups, and roles, specifying privacy, and identity provider's details. These are not related to the agent life cycle. See [Global settings](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions#global-settings), for more information.
    

## 

Roles - At a glance

The following table summarizes the actions and the corresponding roles applicable to each action:

**Note**: Roles can be assigned to individual users and also to groups. When a role is assigned to a group, it is applicable to all the users of a group. See [Users and Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information on managing users and groups in the Avaamo Platform.

If a user belongs to multiple groups, then the roles applicable to a user are a union of all the roles from individual groups.

**Example**: Consider the following scenario:

*   Group 1 is associated with the Development role
    
*   Group 2 is associated with the Testing role
    
*   User John Miller is added to Group 1 and Group 2.
    

Roles applicable to John Miller -> Roles from Group 1 + Roles from Group 2. Hence, John Miller has both Development and Testing roles.

## 

Agent settings

The following roles are available in the Avaamo Platform to facilitate the collaboration between teams in the agent life-cycle:

### 

**Development**

Users with development roles gather requirements, configure the development environment, start designing and developing agents and skills (create an agent, edit the agent, add skills to the agent, make a copy of the agent), and finally prepare the agent for testing by the testing team. They are also responsible for fixing the issues reported by different teams. In parallel, they also continue with further development as required by the business.

### 

**Testing**

Users with a testing role can promote agents from development to testing environment, configure the testing environment, test the agent's functionality, report bugs, and issues. Correspondingly, they can also pull updates from development to testing for re-testing the issues fixed. Once testing is completed, they notify the staging users to promote the agent from testing to staging.

### 

**Staging**

Users with a staging role can promote agents from testing to the staging environment, configure the staging environment, test the agent's functionality by replicating production instances, report bugs and issues. Correspondingly, they can also pull updates from testing to staging for re-testing the issues fixed. Once testing is completed, they notify the staging users to promote the agent from staging to production.

### 

**Production**

Users with a production role can promote agents from staging to the production environment, configure the production environment, and report bugs and issues in the live production instance. Correspondingly, they can also pull updates from staging to production for the issues fixed. Minor defects can be fixed as hotfixes in the production instance. Production users must notify the issues and hot-fixes to the development team.

See [Users and Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information on how to manage users and groups with roles. Also see the [agent life cycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle#stages-in-agent-life-cycle), for more information on life cycle stages.

## 

Campaign settings

Avaamo Platform allows you to create and associate users and groups with different out-of-the-box campaign roles based on the user's responsibility in the company.

See [Campaign Permissions](/user-guide/outreach/before-you-begin#campaign-permissions), for more information on different roles available for an outreach campaign.

## 

Live agent settings

Avaamo Platform allows you to create and associate users and groups with different out-of-the-box live agent roles based on the user's responsibility in the company.

See [Live Agent Roles](/user-guide/live-agent-console/before-you-begin#live-agent-roles), for more information on different roles available in the Avaamo Live Agent system.

## 

Global settings

### 

Settings

Users with this role are responsible for managing users and groups and roles, specifying privacy, providing identity provider details. They can also access `Usage reports` for LLaMB, SMS, and Voice based on what is enabled for their account. See [Manage settings](/user-guide/how-to/manage-platform-settings), for more information.

Also, only users with the Settings role can edit the category name in the Skills store and delete skills from the Skills store. See the [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.

## 

Agent permissions

By default, when you create an agent, you are the **owner** of the agent. Additionally, when a user promotes an agent, the user who promoted the agent is automatically the owner of the agent in the promoted stage. As an owner of the agent, you can assign permissions to different people within your company for your agent as required.

Permissions can be assigned to individual users and also to groups. When permissions are assigned to a group, it is applicable to all the users of a group. See [Users and Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information on managing users and groups in the Avaamo Platform.

**Note**: If a user belongs to multiple groups and each group is assigned different permissions on the agent, then the permission applicable to a user is a union of all the permissions from individual groups.

**Example**: Consider the following scenario:

*   User 1 belongs to Group 1 and Group 2
    
*   Group 1 has View permission on the agent
    
*   Group 2 has Edit permission on the agent
    

Hence, User 1 has both View and Edit permission on the agent.

There are four types of permissions available for an agent:

*   **View**: Users can only view the agent but cannot edit the agent. Note that with this permission the user can still submit an Unhandled Query Analyzer (UQA) job. See [Unhandled Query Analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated), for more information.
    
*   **Edit**: Users can view and edit the agent.
    
*   **Publish**: Users can view agents, edit agents, and publish skills from the agent to the skill store.
    
*   **Owner**: Full access to the agent. Users can view agents, edit agents, publish skills from the agent to the skill store, and edit agent permissions.
    

The following table summarizes the actions and the corresponding agent permissions applicable for each action:

**Key Points**:

*   To view the agent, and get data from the agent using an API, a user must have at least read permission on the agent.
    
*   To make any data modifications on the agent in the UI or via API, the user must have at least edit permission on the agent.
    
*   Only an owner of the agent can delete the agent and configure the permissions of an agent.
    

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions/use-case-dedicated-platform-team-with-azure-saml

Avaamo Platform allows you to create and associate users and groups to different out-of-the-box roles based on the user's responsibility in the company. Roles focus on platform-level access. At the agent level, access can be controlled by the owner of the agent using permissions. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

Use case

Consider the following use-case:

*   Avaamo platform is integrated with MS Azure. See [SAML Support - MS Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure), for more information.
    
*   A particular line of business who wants to build an agent puts up a proposal to the Platform owner.
    
*   The Platform owner creates an agent for the team.
    
*   The agent modification is owned by the Business Development team.
    
*   The agent permissions are controlled by the Platform team.
    

Here, there is a dedicated Platform team to support multiple business units. Platform Owner group has the company level highest access on the platform. In the current use case, Platform Owner group hold the responsibility for all platform-level changes. This includes:

1.  Creating a new agent
    
2.  Provisioning of new and existing agent
    
3.  Making copies of agent
    
4.  Promotion of the agent
    
5.  Pulling updates from lower to a higher instance
    
6.  Deletion of the agent
    
7.  Backup and export copy
    
8.  Import an agent
    
9.  Publishing to skill store
    

The Business Development team of the agent can be either

1.  One for each business unit
    
2.  One for multiple business units
    
3.  Combination of the above
    

For example, consider, each business unit with its own developers. The HR business unit wants to build an agent with help of its developers. Let us see the groups suggestion for such a case below.

### 

MS-Azure setup

Based on the above use-case, groups in MS Azure can be created. The groups are for logical separation only with only user access in Azure app roles.

*   User access allows the group members to log in to the platform only.
    
*   For each agent, one-time access to the respective groups is provided.
    

AD Group

Azure App Role

Platform Owner

development, testing, staging, production, live\_agent, settings

Live Agent

live\_agent

Developer

user

Apart from the SAML setup, there is a one time per agent permission control to be setup.

### 

Avaamo Platform with AD Group

For the HR agent, the permissions can be distributed as follows:

Agent Stage

AD Group

Agent Permission

Development

Developer

Publish

Testing

Developer

View

Staging

Developer

View

Production

Developer

View

**Notes**:

*   During a first-time promotion for an agent. Group to be added in permission for the agent on the promoted instance as listed above.
    
*   In case of deletion of the agent and promotion again, the same permission must be replicated.
    

### 

Avaamo Platform with AD Group with Edit

*   Publish access is only available in the Development stage which offers publish to skill store. At a higher stage, it is equivalent to edit access.
    

**Note**: To publish to Skill store, development role access is required. As the development role is removed, the ownership to publish to the skill store is with Platform owners.

*   In case, you wish to offer Developers access on a higher stage, edit permission can be granted.
    
*   In a setup where the Platform team need full control and wishes to keep the same agent in sync across the stages, edit access on a higher stage is best avoided. Platform teams are advised to own changes on a higher instance especially on Production.
    

**Agent Stage**

**AD Group**

**Agent Permission**

Development

Developer

Publish

Testing

Developer

Edit

Staging

Developer

Edit

Production

Developer

View

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/intent-execution-sequence

When a user posts a query to an agent, the agent understands and classifies the input and then selects an appropriate skill to engage with the user. This article explains the **priority of intent execution** at the agent level and at the dialog skill level. Further, in the dialog skill, it illustrates post-processing and skill response flow.

## 

**At agent level**

Avaamo Platform evaluates all the intents and the intent with the best possible match is considered. There are three skills considered during intent execution - Dialog, Q&A, and Smalltalk. Further, a Dialog skill can be invoked using Custom Code or Training Phrases. You can also create Pre-Unhandled Dialog skills. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.

The following is the priority of the intent execution at the agent level:

### 

**Key points**

*   At any point during the intent execution, when the user query does not match with intent, then the agent responds with a selection of closest intent options, which is referred to as disambiguation.
    
*   If there are multiple Q&A with the exact same query, then the response from the first matching skill is displayed.
    
*   If you add Smalltalk questions in Q&A skill, then intent matching is affected. Hence, it is recommended not to use Smalltalk questions in the Q&A skill. See [Skills](/user-guide/overview-and-concepts/skills), to learn more about different types of skills and their purpose.
    

### 

Order of execution of custom code intents at **the** agent level

At the agent level, for the skills with custom code as intent type at invocation intent, the order of execution is the same as the order of the creation of respective skills. Example:

*   Skill A with custom code invocation intent - Created on 12th Dec 2021
    
*   Skill B with custom code invocation intent - Created on 13th Dec 2021
    

In the above scenario, Skill A's custom code executes first and then followed by Skill B. However, you have the flexibility to define the weightage in the JS code as per your business requirement. You can assign weightage with any number between 0 and 1, for example, 0.2, 0.5. The custom code with the highest weightage is considered.

**Example**: Consider that you can have two Dialog skills with pre-unhandled intent. One that invokes another skill in your agent to get the response and another with your business website search. Based on the response received from each one of these, you can infer, assign weightage, and return weightage. The custom code with the highest weightage is considered.

### 

**Switching between single-turn and multi-turn conversations**

Dynamic Q&A, Smalltalk, and a Dialog skill with a single node, and Answers are referred to as **single-turn conversations**. These are one-off questions and answers.

‌Dialog skill with multiple nodes and flows that requires back and forth agent user conversation to accomplish a particular task are referred to as **multi-turn conversations**.

‌In an agent-user interaction, it is quite common for a user to ask one-off questions or queries in between a Dialog multi-turn conversation. In such cases, the response if available for the one-off questions or queries is displayed. Post the response, when a user query is again posted, the conversation resumes from the node where it switched in the Dialog multi-turn conversation. This continues until a leaf node is reached in the Dialog skill.

‌**Example 1**:

Dialog skill 1:

‌

Dialog skill 2:

Consider the following agent-user interaction,

1.  User query -> "I want to find a doctor"
    
2.  Dialog skill 1 is invoked and the control is now at node 1.1
    
3.  User query -> "I want to refill my prescription"
    
4.  Dialog skill 2 is invoked and the control is now at node 2.1
    
5.  User query -> "Check for primary care physician in Boston area"
    
6.  Conversation resumes at node 1.3 in Dialog skill 1
    

**Example 2**:

Dialog skill 1:

Dynamic Q&A skill:

Consider the following agent-user interaction,

1.  User query -> "I want to find a doctor"
    
2.  Dialog skill 1 is invoked and the control is now at node 1.1
    
3.  User query -> "What are the symptoms of flu?"
    
4.  Dynamic Q&A is invoked and the response from Q&A is displayed.
    
5.  User query -> "Check for primary care physician in Boston area"
    
6.  Conversation resumes at node 1.3 in Dialog skill 1
    

## 

**At Dialog skill level**

In a Dialog skill, you can add the following types of intent for a node in the flow - Training Phrase, Entity from Invocation Intent, System Intent, or Custom Code. See [Add user intent](applewebdata://74CCEB77-913D-409C-9C05-3B021CA2A30A/@avaamo/s/v5/~/drafts/-LzKmdbdxTA2YT4BO1xi/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information.

If a Dialog skill is invoked at the agent level, then the Avaamo Platform executes the intent in the following priority within the Dialog skill:

**Note:** This order of intent execution is applicable for nodes at the same level.

**Key Point**: At any point during the intent execution, when the user query does not match with intent, then the agent responds with a selection of closest intent options, which is referred to as disambiguation.

## 

Post-Processing and skill response execution

In a dialog skill, during intent matching, you can add a post-processing script that is executed after the intent is invoked, and before displaying the skill response. In the post-processing script, you can also include certain flow control statements such as "goto\_node" that allows you to navigate to different nodes in the dialog flow. See [Build skill responses using script and code](/user-guide/how-to/build-skills/create-skill/customize-your-skill), for more information.

The following illustration depicts the post-processing and skill response execution flow:

**Note**: Post-processing is where the intent execution still continues after matching the invocation intent; hence, when post-processing is enabled at the invocation intent, the entity skipping is no longer relevant and not evaluated.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/information-masking

Typically, in certain domains such as Banking, Healthcare, and Finance, a user’s interaction with the agent can capture sensitive details such as the user’s identification number, policy number, email (to name a few). Therefore, it is critical to audit the data and protect data privacy.

This article explains the process of masking PII/PHI/GDPR compliance data within the Avaamo Conversational AI system. Information masking in the Avaamo Platform can be configured at two levels:

*   [Masking user properties](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-user-properties): This masks all the user information details such as email, first name, last name, SSN in all the agent's conversations. User properties, often used to store and reuse user-specific information like Social Security Numbers (SSNs), phone numbers, and email addresses, are also subject to masking. When such data is set using `User.setProperty()`, it is immediately masked if marked as sensitive. Once masked, these values are no longer accessible within the agent’s context, nor are they visible in logs or analytics, helping maintain strict privacy standards and regulatory compliance.
    
*   [Masking agent responses](/user-guide/overview-and-concepts/advanced-concepts/information-masking#masking-agent-responses): This masks all the agent's responses for a node in the conversation flow. Additionally, you can also enable masking of all the user-uploaded files. After masking, the uploaded files cannot be accessed in the Avaamo Platform, as they are physically deleted from the Platform.
    
    *   **User Query Masking** The Avaamo Platform automatically masks sensitive information in the user's messages before processing. This includes details identified through system-recognized entities such as names (`person`), dates (`date`), and predefined user properties like `first_name`. By applying user query masking, the platform ensures that personal or identifiable information is masked, preventing it from being stored or displayed in its original form.
        
    *   **Agent Response Masking** Agent responses can also contain sensitive information, especially when they echo or use dynamic content related to user input. The platform masks agent responses using the same entity recognition logic—covering entities like `person` or `date`—and also masks any user properties referenced in the response. This includes not only text responses but also data presented in files and forms shared by the agent, ensuring comprehensive coverage of potential data exposure points.
        
    

## 

Key points

**Note:** Masking purges the data, making it unrecoverable. The removed PII/ePHI data cannot be restored.

1.  Contact Avaamo Support to configure masking for your agent. See [Before you begin](/user-guide/overview-and-concepts/advanced-concepts/information-masking#before-you-begin), for more information.
    
2.  When you enable masking for an agent, the information is masked as per the masking configuration details across all the pages such as agent insights, conversation history, and query insights where the information can be viewed. See [Masking toggle](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-information-masking) in the Configuration -> Settings page, for more information on how to enable or disable masking for an agent.
    
3.  If you have deployed your agent in C-IVR or Phone channel and masking is enabled, then the audio files from the user responses are not available in the conversation history, since it can contain PII data.
    
4.  If you wish not to record the live agent interactions between users and live agents, then you can disable it using the `Save conversations` toggle button on the `Configuration -> Live agent` page. This feature is particularly useful for organizations handling sensitive data, offering them flexibility to align with internal data governance policies and regulatory requirements. See [Configure live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#configure-live-agent), for more information.
    
5.  Masking is always performed only on the information that resides on the Avaamo platform. All data sent to integrations—such as live agent interactions, custom channel interactions, or Microsoft Teams channel interactions—remains within the respective integration platforms and is subject to the data handling policies and rules of those third-party platforms. Avaamo does not have control over or the ability to mask this data.
    
6.  [Storage variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage) are not masked. As a best practice, it is recommended to clear out all sensitive storage variable information after using it during agent development itself.
    
7.  Currently, information masking is not supported for [Universal agents](/user-guide/how-to/build-agents/configure-agents/deploy/universal-agent). This implies that if you have a Universal agent with masking enabled for member agents, then even though the responses are masked in the member agents, the same responses remain unmasked in the Universal agent.
    
8.  If you update the masking configuration details, then masking the newly set-up fields is done for the new messages. If you wish to mask the newly set up fields in the previous messages of the conversation, then contact Avaamo Support for further assistance.
    

## 

Default masking behavior for new agents

All newly created agents will have data masking enabled by default to better protect Personally Identifiable Information (PII) and ensure compliance with data privacy regulations, right out of the box.

**What’s masked by default**:

**Key points:**

1.  Real-time masking is enabled by default, so any personal information in both your messages and the agent’s replies is automatically masked to keep your data safe.
    
2.  Masking support for `non-English` conversations is currently under continuous evaluation.
    

By default, the following personal information is automatically masked in real-time:

*   Date (example: date of birth)
    
*   email
    
*   person
    
*   phone
    
*   SSN
    
*   first\_name
    
*   last\_name
    
*   ip\_address
    
*   Any user-uploaded files
    

## 

Before you begin

The following illustration depicts the data masking process flow:

You must provide the following information to Avaamo Support to configure masking:

1.  Provide the agent details such as the agent name and the agent identifier.
    
2.  Provide a list of fields in the agent that must be masked in messages.
    
3.  Provide a list of user attributes such as first name, last name, and other custom user properties, that must be masked.
    
4.  By default, when masking is enabled, all the PII data in agent and user messages are masked in the conversation. This masks all the sensitive user information as per your requirement, and such data is not stored in the Avaamo Platform.
    

## 

Masking user properties

You can configure to mask user information details such as email, first name, last name, and SSN in all the agents' conversations. When you enable masking for an agent, the information is masked as per the masking configuration details across all the pages, such as agent insights, conversation history, and query insights, where the information can be viewed.

### 

Fields to Mask

By default, masking is enabled for certain fields. If you need to mask additional fields, use the table to specify the fields that should be masked in the Avaamo user interface to ensure compliance and maintain confidentiality.

Section

Field

Value / Notes

Agent and Instance Details

Agent ID

Instance

Entities Containing PII

Default masked system entities

date, email, person, phone, ssn

Additional entities (if any)

User Attributes Containing PII

Default masked user attributes

first\_name, last\_name, email, phone, ssn, ip\_address

Additional attributes / exceptions

Custom Use Cases

Use case description

Masking requirement

Masking Trigger (default)

Real-Time Masking

Enabled

File Masking

Enabled

Response Node Masking

Enabled

Data Retention Period

Retention Duration

### 

Test masking

After the configuration is completed, you can test the user message masking from your agent. Consider that you wish to mask the following:

*   **User email**: My email is [john@gmail.com](mailto:john@gmail.com). In the agent, click the eye icon to check query insights.
    

Similarly, you can verify the masked details in the conversation history and query insights:

*   **User's first name and last name when sent in custom channel**: Consider that in the custom channel, the user's first name is sent in the user properties:
    

In the **Conversation history** page, you can see that the `first_name` and `last_name`in the user conversation is masked,

## 

Masking agent responses

The Avaamo platform offers **masking agent responses** to protect sensitive information such as PII (Personally Identifiable Information) during agent interactions. This functionality ensures that only sensitive data is masked, while the rest of the response remains visible for clarity and debugging.

The system identifies and masks only the portions of the agent response that contain sensitive data. The non-sensitive content is left unmasked, allowing teams to review and understand the flow of the conversation without exposing private information.

**Notes**:

*   This behavior is `enabled by default` for all agents created after the feature rollout. For agents created prior, bot developers can manually enable masking from the [Agent Settings page](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-information-masking), or contact Avaamo Support for assistance.
    
*   If the agent response contains sensitive PII data such as name, account number, or password, then it is recommended to mask the agent responses to protect user privacy.
    

In the **Conversation history** page, you can view that the agent responses are masked. Note that even the original file is masked as **masked.png**. When you click **masked.png**, the original file is no longer available in the Avaamo Platform and cannot be accessed:

Similarly, you can also verify the masked details from the **Query insights** page.

## 

Frequently Asked Questions (FAQs)

### 

1\. Can masking be reverted?

Once masked, the original unmasked data is not available anywhere in the Avaamo Platform. Hence, masking cannot be reverted.

### 

2\. How is the PII (Personally identifiable information) data masked if my agent is deployed in the C-IVR channel?

If you have deployed your agent in the C-IVR or Phone channel and masking is enabled, then the audio files from the user responses are not available in the conversation history, since they can contain PII data.

### 

**3\. What happens to previous data when masking is enabled after a debugging period is over?**

If masking is enabled after a debugging period, all previously generated data that was unmasked due to masking being disabled will be masked. The platform applies masking to this data, ensuring it aligns with the current configuration.

### 

4\. If I disable masking, then will all the previous data get unmasked?

Once masked, the data cannot be retrieved back. At a later point in time, if you choose to disable masking, then all the previous data will still remain masked and will not get unmasked. However, going forward, the conversations after you disable masking will remain unmasked.

### 

5\. How to audit if all the data has been masked or not?

Avaamo Platform maintains a log of each record that is masked. Contact Avaamo Support for more details before you plan to audit.

### 

6\. I cannot see the Debug logs option. Why is that?

You can enable or disable the **Debug Logs** option from the **Settings** section in the agent's configuration. Refer [Enable Debug Log](/user-guide/how-to/build-agents/configure-agents/define-settings), for more information.

### 

7\. Some of the user names are not getting masked in the user messages. What do I do now?

Avaamo Platform covers the masking of the most commonly used names. However, if you do find certain names that are not getting masked, you can consider one of the following approaches:

1.  Create a custom entity with all such names and share the custom entity with Avaamo Support. Avaamo will then enable masking for the custom entity. Configuring masking is a one-time activity and you can continue to add names in the custom entity and all such names will get masked after masking has been set up.
    
2.  Periodically share a list of such names with Avaamo Support and we can continuously improve name entity recognition.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment

When a user query is posted to the Avaamo Platform, it inspects the query to detect tones such as (anger, fear, and happiness) and sentiment (positive, negative, neutral) in the user query. The platform has a set of default platform handlers for these emotions to respond back to the user appropriately. The tone is the emotion of the user expressed in the query. Sentiment explores attitudes, feelings, and expressed opinions of the user with respect to your agent.

Tone and sentiment can be used to build dialog strategies to adjust the conversation accordingly and hence improves user experience. It can be used to:

*   **Enhance Customer Service:** You can monitor customer conversations so you can respond to your customers appropriately and at scale. Use Tone & Sentiment detection to improve your agent's conversational flows by analyzing which flows are leaving your customers happy or frustrated.
    
*   **Switch to Live Agent:** The platform can auto-recognize user requests to talk to an agent or if it is not able to successfully handle user requests multiple times or if the user explicitly requests to auto-transfer to a live agent.
    
*   **Build "tone-based" dialog strategies:** Re-direct your customers to the appropriate dialog strategy based on their detected tone & sentiment. For example, a customer who is having a negative experience can be re-directed to a reward or upgrade flow, a survey, or simply switched to a live agent.
    
*   **React with a "human" touch:** At times based on the user's reactions, say anger, you can drive the agent to react with a sad emoji, an encouraging quote, or a friendly message. This gives a human touch to your agent.
    

Additionally, you can also utilize these sentiment analyzers for analyzing the conversations to either change flows or respond with appropriate messages as per your business requirement. See [Programmatically handling tone/sentiment](/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment#programmatically-handle-tone-sentiment), for more information.

### 

Tone and Sentiments

Avaamo Platform can detect the following tones from the user query:

Tone

Example

Anger

I am having the worst experience with you

Fear

I am worried my card will be misused

Happy

You are perfect!

Sad

this is depressing

Surprised

Oh my! that is good to know

Urgency

Hurry up! I wanted it yesterday

Avaamo Platform can detect the following sentiments from the user query:

Sentiment

Example

Positive

I like this agent

Negative

I hate this agent

Neutral

I want to open an account

You can view the detected tone and sentiment in the message insights. Click the **eye icon** below the user query to know the tone and sentiment of the query:

### 

Core skills and sentiment analysis

Avaamo's NLU engine comes bundled with a set of Core skills that can syntactically and semantically analyze user messages and automatically categorize these user messages into appropriate behavior buckets.

Some examples of sentiments and user tone that the core skills can understand are:

*   **Greeting Phrases**: Avaamo's NLU engine can auto-recognize and respond to greeting messages such as "Hi", "Hello", "Good morning", "GM" and many variants of greetings.
    
*   **Thank You**: Avaamo's NLU engine can auto-recognize and respond to various user messages to mean "Thank you" and several of its variants
    
*   **Transfer to Agent:** The platform can auto-recognize the user request to talk to an agent or if it is not able to successfully handle user requests multiple times or if the user explicitly requests to auto-transfer to a live agent.
    
*   **Frustration:** The platform can auto-recognize various frustration-related phrases as well as the tone that can indicate that the user is frustrated and you can choose to either send the user through an appropriate flow or pass the user to an agent to respond to the user.
    

### 

Programmatically handle tone/sentiment

In addition to these core skills, Avaamo also allows developers for analyzing the conversations to either change flows or respond with appropriate messages as per your business requirement. Examples:

*   You can create Smalltalk skills that can handle a lot of mundane, rhetorical, and simple questions that users might ask, allowing the agent to respond without having to trigger a flow.
    
*   User tone and sentiment can also be programmatically utilized within the flow. This information is available in the context insights (`context.insights.tone, context.insights.sentiment`) and accessible via JavaScript in the flow.
    

See [Detect user tone and sentiment](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/detect-user-tone-and-sentiment), for an example.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/language-pack

Typically, in any global business, it is a necessity to design and build assistants or agents that can interact with the users in their local language. The Avaamo platform provides multilingual support for agent development in different languages, with English (en-US) as the default language.

In the Avaamo Platform, you can add multiple languages to the agent, so that the agent can respond in different languages as per your business requirement both in text and voice.

## 

How does it work?

Adding a language to your agent is a simple three-step process:

*   [Step 1: Configure or add languages in your agent](/user-guide/overview-and-concepts/advanced-concepts/language-pack#step-1-configure-or-add-languages-in-your-agent)
    
*   [Step 2: Customize translations](/user-guide/overview-and-concepts/advanced-concepts/language-pack#step-2-customize-translations)
    
*   [Step 3: Test your agent](/user-guide/overview-and-concepts/advanced-concepts/language-pack#step-3-test-your-agent)
    

**Key Point**: Agent conversation starts with one language and continues in the same language. If you wish to change the language of the agent response, say, based on the user's request or response, then you can identify and switch the language in your agent.

See [Step 3: Test your agent](/user-guide/overview-and-concepts/advanced-concepts/language-pack#step-3-test-your-agent), for more information.

### 

Step 1: Configure or add languages in your agent

The first step is to add languages to your agent in the **Agent -> Configuration -> Languages** page. Consider that in your Pizza agent, you wish to add the French language to your agent.

*   In the **Agent page**, navigate to the **Configuration -> Language** tab option in the left navigation menu.
    
*   Click **Add languages** and select the **French** language from the dropdown.
    
*   Click **Save** to save the agent language configurations.
    

*   When you add a language, all the agent responses are automatically translated into the corresponding language. **Example**: In the Pizza agent, you can check the translated response of the Greeting skill.
    
    *   Click the **Greetings skill**.
        
    *   In the skill response, change the language to French (fr-FR). You can view the translated response of the greetings message.
        
    

See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages) for more information on how to add and manage languages in your agent.

### 

Step 2: Customize translations

You can add custom translations to the response based on your requirement. Custom translation can be added in the following ways:

Where?

When?

[Agent -> Configuration -> Languages page](/user-guide/how-to/build-agents/configure-agents/add-languages#add-translation)

*   Use this to provide translations for all sentences and texts used by the agent. Examples: text used in skills, persistent menu, live agent, etc.
    
*   Note that in all the cases, node-level translation has the highest priority. This implies that if you have the same translated text at the agent and the node-level, then the node-level translated response is displayed.
    

[Skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses)

*   Use this to provide translation for the selected skill responses.
    
    See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.
    

Consider that you wish to customize the greeting message in your Pizza agent. The default greeting message in English is "Welcome to MacPizza. How can I help you today?" and this is translated to "Bienvenue à MacPizza. Comment puis-je vous aider aujourd'hui?". You wish to customize to "Bonjour, bienvenue chez MacPizza. Comment puis-je vous aider aujourd'hui?."

*   In the **Agent page**, navigate to the **Configuration -> Language** tab.
    
*   Click **Add translation** to enter the English text and corresponding translated text.
    

**Note**: To customize the response of the Greeting skill, instead of adding the custom translation in the **Agent -> Configuration -> Languages** page, you can add the same in the Greeting skill response. See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.

### 

Step 3: Test your agent

You can use the **Language.switch** command to switch the language as required. Note that you can only switch to those languages that are configured in your agent. See [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch), for more information.

Consider that in your Pizza agent, based on certain criteria you wish to switch language to French.

*   Add a JS node in the Greeting message and switch the language as required - `Language.switch('fr-FR');`
    

*   Click OK.
    
*   Click **Save** to save your agent
    
*   Test your agent using the **Agent simulator** from the bottom-right corner. You can now view the custom-translated greeting message in French.
    

## 

Skip translation

When an agent is multi-lingual, then there can be scenarios, where even though the user is asking the question is a specific language say, French, you still want the agent to respond back in English for certain responses. This can be achieved using the **Skip translation** option available in the response pop-up window.

**Example**: Consider the following scenario,

*   You have added the French language to the agent.
    
*   In the response pop-up window, you checked the **Skip translation** option for French language response.
    

*   Now, when the user asks the question in French matching this intent, then the response is displayed in English.
    

## 

Supported languages

Avaamo platform supports 110+ languages in the web channel such as French, Arabic, Chinese, Polish, and many more. See [Web - supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for a complete list

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/restrict-login-ip-address

By default, Avaamo Platform Dashboard does not restrict login access based on IP addresses. However, for added security, you can control login access to the Avaamo Platform dashboard at the company level by specifying a range of allowed IP addresses on the company's profile. This feature helps in providing better overall security, remote access, and anonymity.

**Note**: When you define IP address restrictions for a profile, a login from any other IP address to the Avaamo Platform is denied. Dashboard users of the company can log in only through allowed or restricted IP addresses. This also restricts the integration of any [public APIs](/user-guide/ref/avaamo-platform-api-documentation) that use the user access token on your client-side dashboard, since the dashboard is accessible only through allowed or restricted IP addresses.

This article explains the process of setting up allowed IP addresses at the company level within the Avaamo Conversational AI system for restricted access.

### 

Set up allowed IP addresses

Contact Avaamo Support with the following details:

*   Company for which you wish to set up the allowed IP addresses
    
*   List or range of allowed IP addresses in the IPv4 format. Supported examples: 49.14.176.91, 49.37.165.0/16.
    

The Avaamo support configures the list of allowed IP addresses for your company as per the details received.

### 

Test restricted access

After the configuration is completed, Dashboard users of the company can log in only through allowed or restricted IP addresses. With valid login credentials to the Avaamo Platform Dashboard,

*   Login to the Avaamo Platform after connecting to IP address that is not in the allowed range. Access is denied and the following error message is displayed:
    

*   Login to the Avaamo Platform after connecting to IP address that is in the allowed range. You can log in successfully and access the Avaamo Platform dashboard.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/voice-hints

You can specify certain keywords or phrases in the Voice hints that can provide better interpretation or recognition of the user response in the conversational IVR interaction. Providing voice hints can significantly improve user interaction with your agent. When you add voice hints, the agent gives preference to the phrases provided in the hints when interpreting the user responses. This helps you to redirect the conversational flow smoothly.

The following lists a few use-cases where voice hints can be used:

*   To help agents understand certain nuances of dialects or accents of users.
    
*   To provide clues or hints to the agent indicating that the user can provide such similar inputs at the specified node when the response is read out to the user.
    

**Key Point**: It is recommended to use the Voice entity model instead of Voice hints as applicable. Voice entity models are more robust helps in significantly increasing the accuracy of user utterances. See [Voice entity model](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/voice-entity-model), for more information.

## 

**How does it work?**

Adding voice hints to your agent is a simple three-step process:

*   [Step 1: Identify the voice hints that you wish to add](/user-guide/overview-and-concepts/advanced-concepts/voice-hints#step-1-identify-the-voice-hints-that-you-wish-to-add)
    
*   [Step 2: Identify where to add voice hints](/user-guide/overview-and-concepts/advanced-concepts/voice-hints#step-2-identify-where-to-add-voice-hints)
    
*   [Step 3: Test and Monitor using conversation history](/user-guide/overview-and-concepts/advanced-concepts/voice-hints#step-3-test-and-monitor-using-conversation-history)
    

### 

Step 1: Identify the voice hints that you wish to add

One of the main challenges of adding voice hints is predicting the possible voice hints that are required to be added. The best way to know the voice hints required for an agent is by continuously monitoring the agent-user interactions using the Conversation history.

In the Conversation history, you can

*   Check for the user queries that went unhandled.
    
*   Analyze, if it is because of incorrect recognition and how adding a voice hint to the user phrase can help.
    

See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.

### 

Step 2: Identify where to add voice hints

Voice hints can be added at the agent level and node level:

Where?

When?

Agent -> Configuration -> Voice hints

*   Use this if you have phrases that are commonly used across skill
    
*   Adding all the voice hints at the agent level impacts the accuracy of the response, hence, it is recommended to carefully evaluate before adding voice hints at the agent level.
    
*   See [Add voice hints](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#configure-voice-hints), for more information.
    

Skill -> Advanced Settings -> Voice hints

*   Use node-level voice hints when you require better accuracy or recognition at a specific node.
    
*   Node level voice hints are applied when control is at the node level and then the voice hints at the agent level are considered.
    
*   See [Voice hints](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#voice-hints), for more information.
    

You can also use in-built Voice hints commands to specify certain commonly used voice hints. See [Voice hints commands](/user-guide/overview-and-concepts/advanced-concepts/voice-hints#voice-hints-commands), for more information.

### 

Step 3: Test and Monitor using conversation history

After you add the required voice hints and test it, monitor the conversation history to know if adding the voice hints helped in better recognition. Continue monitoring the conversation to learn voice hints that can be added to the agent. See [Test C-IVR channel](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone#test-c-ivr-channel), for more information.

## 

**Voice hints commands**

You can also use the following voice hints commands that help the agents in better recognition and identification of user responses for certain specific types of data:

*   **Dates**: If you are expecting a date response, then you can use `expecting_date` in the voice hints.
    
*   **Numbers**: If you are expecting a numeric response, then you can use `expecting_number` in the voice hints.
    
*   **Alphanumeric**: If you are expecting an alphanumeric response, then you can use `expecting_alphanumeric` in the voice hints.
    

## 

**FAQs**

### 

1\. I do not want to repeat adding voice hints at each node. Can I add all voice hints at the agent level itself?

You can use agent-level voice hints when you have voice hints that are required to be used commonly by different skills in an agent. Note that adding all the voice hints at the agent level impacts the accuracy of the response, hence, it is recommended to carefully evaluate before adding voice hints at the agent level.

**Example**: Consider that you have added an inbuilt voice hint `expecting_number` to recognize numbers better at the agent level, so that similar sounding phonetics such as "won" -> "one", "four" -> "for" get interpreted as numbers accurately. Now, since you have added this at the agent level, even when the user is actually trying to say "for", it gets recognized as "four" and this can lead to incorrect matches. In this case, adding a voice hint at the node level is a better option.

Hence, when you require better accuracy or recognition at a specific node, it is recommended to provide voice hints at the node level. These voice hints are only applicable to that node where it is specified. See [Advanced Settings -> Voice hints](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#voice-hints), for more information.

### 

2\. Can I add sentences in voice hints?

It is recommended to add phrases or words in voice hints.

### 

3\. How to add voice hints in bulk?

Currently, there is no option to add voice hints in bulk. You have to add it manually one at a time from the UI.

---

## Source: https://docs.avaamo.com/user-guide/overview-and-concepts/advanced-concepts/collect-feedback

You can allow users to provide feedback on their conversational experience with your agent. Feedback provided by users is used to learn and analyse the experience of the user when they are interacting with your agent. You can enable the collect feedback option for specific skills to provide users the option to provide feedback.

When you enable the collect feedback option, the thumbs up and thumbs down option to provide negative and positive feedback is displayed after the agent response is displayed.

When a user clicks thumbs down, a pop-up form appears that allows them to provide more details about the negative feedback. This information can be used in [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics) to continuously improve user experience.

### 

Enabling Feedback

Feedback can be enabled at the skill level for the Answer's skill and the Dynamic Q&A skill. When feedback is enabled at the skill level, feedback will be requested after every single response.

If you want feedback to be requested only at certain junctions or locations in a workflow, or only for certain responses, you can enable skill at the response level.

Skill

At the skill level

At the response level

Refer

Dialog skill

No

Yes. Using the Advanced Settings tab for a response or using the JS script

[Feedback for dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#collect-feedback)

Dynamic Q&A

Yes

Yes. Using the JS script function collectFeedback

[Create a new Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill)

Smalltalk

No

Using the JS script function collectFeedback

[Add feedback (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback)

Answers

Yes

No

[Configuring Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill)

LLaMB

Yes

No

[Create LLaMB Content skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill)

### 

Customizing the feedback form

The thumbs-up/thumbs-down feedback form can be customized. See [Customizing feedback form](/user-guide/how-to/build-agents/configure-agents/custom-feedback) for more information.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/product-overview

Broadly, the following are the primary components in the Avaamo Platform:

*   [Agent](/user-guide/how-to/build-agents): Agent acts as a container and includes everything you require to build an enterprise agent.
    
    *   [Skills](/user-guide/how-to/build-skills): Add different types of skills to the agent such as Answers, Dynamic Q&A, Smalltalk, and Dialog.
        
    *   [Entity types](/user-guide/how-to/build-agents/add-entity-types-to-agent): Add entity types to the agent that helps to identify and extract the named collection of similar objects from the user intents.
        
    *   [Configuration](/user-guide/how-to/build-agents/configure-agents): Add getting started message, persistent menu, define environment variables, switch to live agent, and configure to deploy in different channels.
        
    *   [Debug](/user-guide/how-to/build-agents/debug-agents): Use JS Errors, Logs, Agent Storage, and Conversation History to debug Agents.
        
    *   [Test](/user-guide/how-to/build-agents/test-agents): Use Simulator and Regression Testing to test agents.
        
    *   [Monitor](/user-guide/how-to/build-agents/monitor-and-analyze): Analyze agent performance using Analytics, User Journey, Query Insights, and User Feedback.
        
    
*   [Skills store](/user-guide/how-to/manage-skills-store): A centralized collection of all the published skills across different categories. Skills developed in one agent can be published to the skill store and re-used in other agents within a company to accelerate the agent development process.
    
    *   [Avaamo skills](/user-guide/how-to/manage-skills-store#avaamo-skills): Collection of various in-built skills across certain pre-defined categories already available in the skills store. These skills are not specific to a company and available to all the users using the Avaamo Platform.
        
    *   [Company skills](/user-guide/how-to/manage-skills-store#company-skills): In addition, when you are developing an agent, based on the functionality of the skill, you can choose to publish the skill to your company skills store. These skills are specific to a company and available only to the users within the company.
        
    
*   [Agent Console](/user-guide/how-to/agent-console): Avaamo platform supports integration with a live agent for scenarios, where there is a need for human intervention. If the user requests or if the agent senses dissatisfaction, frustration, anger, or if the agent has defined intents for transfer, it seamlessly transfers the conversation to a human agent system such as Avaamo Live Agent Or Zendesk. Agent Console is an interface of Avaamo live agent console for live agent interaction with users.
    
*   [Settings](/user-guide/how-to/manage-platform-settings): Add users and roles, manage privacy settings, and manage all the Identity Providers that support Single Sign-On (SSO) authentication for the dashboard.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites

### 

Basic requirements

*   Access to the Chrome browser. Currently, the Avaamo platform dashboard is certified on the latest version of the Chrome browser.
    
*   The window that renders the Avaamo Platform dashboard must have a 1366 × 768 resolution for UI components to be displayed correctly. If you have a lower or higher screen resolution, the UI components in the dashboard may appear distorted.
    
*   Access to Avaamo Platform URL – `https://<<instanceName>>.avaamo.com/`. The instance name is provided to you by Avaamo.
    
*   Login credentials.
    
*   Ensure you have roles and permissions as required. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information. Also see [Users and Roles](/user-guide/how-to/manage-platform-settings/users-and-permissions), for more information. **Example**: If you wish to create an agent, then you must be associated with a role that is authorized to build agents.
    

**Note**: To obtain the Avaamo Platform URL and login credentials, contact the Avaamo Operations team or email support@avaamo.com.

### 

Sign-in

The Avaamo platform instance uses secure login and requires users to log in with their registered email.

*   Users receive a unique, secure 8-digit login PIN via email to log in to the Avaamo instance. Ensure that you have configured your email server to receive an email from "welcome@avaamo.com". Check your spam folder if you do not receive the email in your inbox.
    
*   This is a one-time PIN and must be used within 5 mins.
    
*   If you resend the PIN more than 3 times in a row, a CAPTCHA challenge-response test must be cleared.
    
*   Once you clear the CAPTCHA challenge-response test, a new unique secure 8-digit login PIN is again sent to the registered email account.
    
*   If you enter the PIN incorrectly more than 5 times, your account will be locked, and you must contact the Avaamo support team for further assistance.
    

The Avaamo platform also supports Single Sign-on. See [Identity Providers](/user-guide/how-to/manage-platform-settings/identity-providers), for more information.

### 

Session time-out

For security reasons, all dashboard sessions log out (time out) after 12 hours of inactivity.

*   If a user attempts to perform any action in the session after 12 hrs of inactivity, the user is redirected to the login page.
    
*   Clicking a link, performing any action on the page, or refreshing the page resets the inactivity timer.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/create-an-agent

Avaamo Platform is a robust, flexible, and easy-to-use platform that allows you to build a wide variety of agents for different domains with just a few clicks. This section walks you through the steps of quickly creating a basic agent in the Avaamo Platform**.**

**Note**: Ensure you have met the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites) before creating a new agent.

**Key point**: As you start building your first agent in the Avaamo Conversational AI Platform, it is also recommended to know a few simple commands that are very useful. See [Agent commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands), for more information.

## 

Build an agent

Consider that you are required to build a Pizza agent for "MacPizza - a Quick Service Restaurant", where you can place online orders for pizzas. Your first step is to build a simple "Hello" or "Welcome" greeting message to the user. Iteratively, you can enhance the agent by adding additional skills and other functionalities, as required. See the , for more information.

Once you login to the Avaamo Platform, building an agent is just a 3-step process:

1.  [Create agent](/user-guide/quick-start-tutorials/create-an-agent)
    
2.  [Add greeting message to agent](/user-guide/quick-start-tutorials/create-an-agent#step-2-add-greeting-message-to-agent)
    
3.  [Test and view agent in action](/user-guide/quick-start-tutorials/create-an-agent#step-3-test-and-view-agent-in-action)
    

### 

Step 1: Create agent

An agent is an intelligent dialogue system that interprets and responds to the user’s conversation in natural language. It is a container of skills, each specialized to understand and handle a specific task in the user conversation flow. **Example**: In the Pizza agent, you can create an "Order Pizza" skill responsible for handling all pizza orders, similarly you can create a "FAQ" skill to handle all the Mac Pizza FAQs.

**To build an agent**:

*   In the Avaamo Platform UI, click the **Agents** option in the top menu, navigate to the **My agents -> Development** tab, click **Create agent**.
    
*   Enter the following required details and click **Create agent**:
    
    *   **Name**: Indicates the display name of your agent.
        
    *   **Description**: Indicates a brief description of your agent.
        
    

**Note**: Since this is your first agent, specify only the required details and skip the other details for now. See [Create agent](/user-guide/how-to/build-agents/add-skills), for more detailed information.

A new empty agent is created. The next step is to add a greeting message and other custom skills as per your business needs.

### 

Step 2: Add greeting message to agent

A new agent in the Avaamo Platform is already available with certain built-in skills. See [Built-in skills](/user-guide/how-to/build-agents/add-skills-to-agent#built-in-skills), for more information.

You can also create various custom skills using an interactive skill builder as per your business needs. See [Build skills](/user-guide/how-to/build-skills), for more information.

For the welcome message, you can use the pre-built Greeting skill already available in the agent.

**To add a greeting message to the agent**:

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu.
    

*   Your agent is already available with certain sample skills. Click Greeting skill.
    
*   In the **Skill message** pop-up, customize the message as required and click OK. You can add different types of responses (card, quick reply, carousel, etc..) in the message with response filters and tags. Since this is your first agent, you can just add a simple text message.
    
*   Click **Save**. Your first agent is ready for testing now.
    

### 

Step 3: Test and view agent in action

In the **Agent** page, click the agent icon in the bottom-right corner. You can view your customized welcome message in the agent.

## 

Next steps

Now that you have successfully built the first agent with a welcome message, you can dig deeper to learn the rich features available in the Avaamo Platform, and enhance the agent conversational flow to provide a great user experience. This document is built around the MacPizza agent use case. The next steps enable you to add and test the following skills in the agent:

*   [Add Answers skill](/user-guide/quick-start-tutorials/add-answers-skill)
    
*   [Add LLaMB skill](/user-guide/quick-start-tutorials/add-llamb-skill)
    
*   [Add Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a)
    
*   [Add Smalltalk skill](/user-guide/quick-start-tutorials/add-smalltalk-skill)
    
*   [Add Dialog skill](/user-guide/quick-start-tutorials/add-dialog-skill)

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/add-answers-skill

Answers skill is deprecated in Atlas 8. See [Atlas 8 - Deprecated and removed features](/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features), for more information.

You can start by creating a new Answers skill in the agent or importing an existing one to your agent.

Consider that you have a policy document in PDF format for "Mac Pizza Restaurant". This article explains how to:

1.  [Create a new Answers skill in the agent](/user-guide/quick-start-tutorials/add-answers-skill#step-1-create-a-new-answers-skill-in-the-agent)
    
2.  [Upload PDF document to the Answers skill](/user-guide/quick-start-tutorials/add-answers-skill#step-2-upload-pdf-document-to-the-answers-skill)
    
3.  [Test Answers skill](/user-guide/quick-start-tutorials/add-answers-skill#step-3-test-answers-skill)
    

### 

Step 1: Create a new Answers skill in the agent

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add skill**.
    
*   In the **Skill builder** page, select Answers and click **Create**.
    
*   Specify Skill name, Skill description, Skill key, and click **Create**. See [Create new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base), for more information.
    

*   A new empty Answers skill is created.
    

### 

Step 2: Upload PDF document to the Answers skill

*   In the **Answers skill** page, click **Add documents** in the **Documents** tab. Click **Select files** and upload the PDF document. See [Add Document or URL](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information.
    
*   Once the document is uploaded successfully, your **Answers skill** is now ready for testing.
    

### 

Step 3: Test Answers skill

*   In the **Agent** page, click the agent icon in the bottom-right corner. You can now ask queries and test if you are receiving appropriate responses from user queries.
    
*   Click **View More** to view the actual section in the document. All the conversations are stored in the answer history and you can view the same to fine-tune the skill. See [View and edit knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.
    

### 

Next steps

In the next step, learn how to quickly [add and test dynamic Q&A skill](/user-guide/quick-start-tutorials/add-q-and-a-skill) to the MacPizza agent.

Alternatively, for the newly added answers skill, you can also continue to fine-tune and edit the skill, based on the user conversation history. See [View and edit knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.

You can also perform certain actions on the skill such as retraining, editing the uploaded documents or URLs, or deleting the documents or URLs from the skill, as required. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/add-llamb-skill

You can start by either creating a LLaMB skill in the agent or by importing an existing skill to your agent.

Consider that you have a policy document in PDF format for "Mac Pizza Restaurant". This article explains how to:

1.  [Create a new LLaMB skill in the agent](/user-guide/quick-start-tutorials/add-llamb-skill#step-1-create-a-new-llamb-skill-in-the-agent)
    
2.  [Upload a PDF document to the LLaMB skill](/user-guide/quick-start-tutorials/add-llamb-skill#step-2-upload-pdf-document-to-the-llamb-skill)
    
3.  [Test LLaMB skill](/user-guide/quick-start-tutorials/add-llamb-skill#step-3-test-llamb-skill)
    

### 

Step 1: Create a new LLaMB skill in the agent

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add skill**.
    
*   In the **Skill builder** page, select LLaMB Content and click **Create**.
    
*   Specify Skill name, Skill description, Skill key, and click **Create**. See [Create new LLaMB skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information.
    

*   A new empty LLaMB skill is created.
    

## 

Step 2: Ingest enterprise content

You can easily ingest content into your LLaMB skill to enable accurate, context-aware responses. Refer [Ingest enterprise content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content), for more information.

## 

Step 3: Test LLaMB skill

If you are starting to explore LLaMB for the first time, then the best way to test a sample query is using the [Agent Simulator](/user-guide/llamb/get-started/step-3-test-your-agent#using-agent-simulator).

As you iteratively build the agent with LLaMB, you can further use the [UAT option in the Web channel](/user-guide/llamb/get-started/step-3-test-your-agent#using-the-uat-option-in-the-web-channel) to perform more comprehensive testing.

Refer [Test your agent](/user-guide/llamb/get-started/step-3-test-your-agent), for more information.

### 

Next steps

In the next step, learn how to quickly [add and test dynamic Q&A skill](/user-guide/quick-start-tutorials/add-q-and-a-skill) to the MacPizza agent.

Alternatively, for the newly added LLaMB skill, you can also continue to fine-tune and edit the skill, based on the user conversation history. See [View and edit knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.

You can also perform certain actions on the skill such as retraining, editing the ingested documents or URLs, or deleting the documents or URLs from the skill, as required. See [Perform common actions](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/add-q-and-a-skill

You can start by either creating a new Dynamic Q&A skill in the agent or by importing an existing skill to your agent.

Consider that you have some FAQs for "Mac Pizza Restaurant". This article explains how to

1.  [Create a new Dynamic Q&A skill in the agent](/user-guide/quick-start-tutorials/add-q-and-a-skill#step-1-create-a-new-dynamic-q-and-a-skill-in-the-agent)
    
2.  [Add question and answers to the Dynamic Q&A skill](/user-guide/quick-start-tutorials/add-q-and-a-skill#step-2-add-question-and-answers-to-the-dynamic-q-and-a-skill)
    
3.  [Test Dynamic Q&A skill](/user-guide/quick-start-tutorials/add-q-and-a-skill#step-3-test-dynamic-q-and-a-skill)
    

### 

Step 1: Create a new Dynamic Q&A skill in the agent

*   In the **Agent** page, navigate to the Skills option in the left navigation menu and click Add skill in the Agent skills page.
    
*   In the **Skill builder** page, select **Dynamic Q&A** and click **Create**.
    
*   Specify Skill name, Skill description, Skill key, and click **Create**. See [Create a new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill), for more information.
    

*   A new empty **Dynamic Q&A** skill is created.
    

### 

Step 2: Add question and answers to the Dynamic Q&A skill

*   In the **Dynamic Q&A** page, click **Question & Answers** in the **Implementation** tab.
    
*   Click the plus icon to add user questions and the skill responses (answers). See [Add Question and Answers](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers), for more information.
    

*   Click **Save** and click **Exit**. Your Dynamic Q&A skill is now ready for testing.
    

### 

Step 3: Test Dynamic Q&A skill

You can test the **Dynamic Q&A** skill using agent simulator from any page in the skill's left navigation pane and also using Simulator:

*   Using the **Agent simulato**r from any page in the skill's left navigation pane
    
*   Using the **Test -> Simulator** option in the left navigation menu.
    

Both of these options display the **Agent simulator** in the bottom-right corner of the page. You can now ask queries and test if you are receiving appropriate responses from user queries.

### 

Next Steps

In the next step, learn how to quickly [add and test Smalltalk skill](/user-guide/quick-start-tutorials/add-smalltalk-skill) to the Pizza agent.

Alternatively, for the newly added Dynamic Q&A skill, you can also add languages, edit intents, and responses, and import Q&A. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/add-smalltalk-skill

You can start by either creating a new Smalltalk skill in the agent or by importing an existing skill to your agent.

Consider that you wish to create some customized Smalltalk for "Mac Pizza Restaurant". This article explains how to

1.  [Create a new Smalltalk skill in the agent](/user-guide/quick-start-tutorials/add-smalltalk-skill#step-1-create-a-new-smalltalk-skill-in-the-agent)
    
2.  [Add question and answers to the Smalltalk skill](/user-guide/quick-start-tutorials/add-smalltalk-skill#step-2-add-question-and-answers-to-the-smalltalk-skill)
    
3.  [Test Smalltalk skill](/user-guide/quick-start-tutorials/add-smalltalk-skill#step-3-test-smalltalk-skill)
    

### 

Step 1: Create a new Smalltalk skill in the agent

*   In the Agent page, navigate to the Skills option in the left navigation menu and click Add skill in the Agent skills page.
    
*   In the Skill builder page, select Smalltalk and click Create.
    
*   Specify Skill name, Skill description, Skill key, and click Create. See [Create a new Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base), for more information.
    

*   A new empty Smalltalk skill is created.
    

### 

Step 2: Add question and answers to the Smalltalk skill

*   In the Smalltalk page, click Question & Answers in the Implementation tab. Add questions and answers or upload the CSV file. See [Add Question and Answers](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa), for more information.
    

*   Click Save and click Exit. Your Smalltalk skill is now ready for testing.
    

### 

Step 3: Test Smalltalk skill

You can test the Smalltalk skill in any of the following ways:

*   Using the Agent simulator from any page in the skill's left navigation pane
    
*   Using the Test -> Simulator option in the left navigation menu.
    

Both of these options display the Agent simulator in the bottom-right corner of the page. You can now ask queries and test if you are receiving appropriate responses from user queries.

### 

Next Steps

In the next step, learn how to quickly [add and test dialog skill](/user-guide/quick-start-tutorials/add-dialog-skill) to the Pizza agent.

Alternatively, for the newly added Smalltalk skill, you can also add languages, edit intents and responses, import and export Smalltalk. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/quick-start-tutorials/add-dialog-skill

You can start by either creating a new dialog skill in the agent or by importing an existing skill to your agent.

Consider that wish to create an "Order Skill" for "Mac Pizza Restaurant". This article explains how to:

1.  [Create a new Dialog skill in the agent](/user-guide/quick-start-tutorials/add-dialog-skill#step-1-create-a-new-dialog-skill-in-the-agent)
    
2.  [Add invocation intent to Dialog skill](/user-guide/quick-start-tutorials/add-dialog-skill#step-2-add-invocation-intent-to-dialog-skill)
    
3.  [Change default greeting message in Dialog skill](/user-guide/quick-start-tutorials/add-dialog-skill#step-3-change-default-greeting-message-in-dialog-skill)
    
4.  [Test Dialog skill](/user-guide/quick-start-tutorials/add-dialog-skill#step-4-test-dialog-skill)
    

**Note**: An invocation intent is an intent or a training phrase that invokes the skill when added to an agent. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.

### 

Step 1: Create a new Dialog skill in the agent

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add skill** in the Agent skills page.
    
*   In the **Skill builder** page, select **Dialog** and click **Create**.
    
*   Specify Skill name, Skill description, Skill key, and click **Create**. See [Create a new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    

*   A new empty **Dialog skill** is created.
    

### 

Step 2: Add invocation intent to Dialog skill

*   In the **Dialog skill** page, click **Invocation intent** in the left navigation menu. Specify the training phrases required to invoke the skill. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.
    

*   Save the skill. After creating the invocation intent, the next step is to build a conversational dialog flow. By default, a greeting node and an unhandled node is provided for you. Start by changing the default greeting message; this is the first message displayed to the user after the skill is invoked.
    

### 

Step 3: Change default greeting message in Dialog skill

*   In the **Dialog skill** page, click the **Implementation** tab.
    
*   Click the default greeting message node, in the dialog flow and update the greeting message. See [Change default greeting message](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/change-default-greeting-message) and [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more detailed information on different skill responses and **Advanced Settings**.
    

*   Click **Save**. You can now test the skill after adding the invocation intent and updating the greeting message.
    

### 

Step 4: Test Dialog skill

You can test the **Dialog skill** in any of the following ways:

*   Using the **Agent simulator** from any page in the skill's left navigation pane
    
*   Using the **Test -> Simulator** option in the left navigation menu.
    
*   Post a user query to invoke this skill. Verify if the greeting message of the skill is displayed in the agent. As you build the flow, you can continue to test and verify your flow incrementally.
    

**Note**: For extensive and continuous testing, you can use regression testing. See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), for more information.

### 

Next steps

You can continue to edit the skill by [building dialogs](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill) with user intents and skill responses. Ensure you [test your skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/test-skill) at each step.

You can navigate to the [Debug](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/debug-skill) section in the Dialog Studio to troubleshoot your skill if required.

---
