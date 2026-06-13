# Classic Agent — Skills (Manage / Design / LLaMB skill)
> 8 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills

[Design skills](/user-guide/how-to/build-skills/design-skill)[Create and test skills](/user-guide/how-to/build-skills/create-skill)[Manage skills](/user-guide/how-to/build-skills/manage-skill)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/design-skill

Skill is part of an agent that is specialized to understand and handle a specific task in the user conversation flow. **Example**: **Order Pizza skill** in a **Pizza agent** is responsible for taking the user through a conversation for capturing the required data to order a pizza.

Training the skill with a set of quality intents and each intent with the right number of training data/training phrases/training utterances determines the quality of the agent's accuracy in understanding the user queries. Creating the right number of intents with the right number of training data samples for each intent is essential to provide a good user experience.

This article describes the recommended best practices for designing a skill.

## 

Identify the purpose of skill

*   When you start designing an agent, consider defining the functionality of the agent in well-defined tasks.
    
*   For each specific task, you can build skills and later choose to publish the skill to your company skill store, for re-usability.
    
*   Modularizing and building skills also help to troubleshoot and debug skills in an agent.
    
*   Provide an appropriate name and description for each skill you build, as this name is used to identify the skill when publishes to the skill store.
    

## 

Intent and training phrases(training utterances or training data)

Creating the right number of intents with the right number of training data samples for each intent is essential to provide a good user experience. 5 to 10 training phrases is a good number to start with.

**Notes**:

*   This document is for reference only and the actual intent to be created varies for each use case.
    
*   It is not required for you to be a linguist. However, it is expected that the creator has good written communication skills.
    
*   "Importing" is a reserved keyword and hence it is recommended to not use in the training data.
    

### 

1\. **Avoid intent overlap**

*   Avoid combining multiple goals in one intent
    
*   Read the intent to identify overlaps
    

**Use Case**: To find a hospital or a specialist

Recommended

Not Recommended

*   Can you help me find a hospital?
    
*   Where is the nearest hospital?
    
*   Find a specialist for me.
    
*   I am looking for a pediatrician.
    

*   Find a hospital or specialist.
    
*   Search Something
    
*   Manage account
    

### 

**2\. Combine intents separated by entities**

Avoid creating separate intents when they mean the same with the difference only in entities**.**

**Use Case**: To find a tyre

Recommended

Not Recommended

I am looking for X2 tyres.

*   I am looking for X2
    
*   I am looking for tyres
    

### 

**3\. Write full sentences**

Writing full sentences helps the system comprehend the true intent of training data.

**Use Case**: To transfer money

Recommended

Not Recommended

I want to transfer money to India.

Transfer Money

### 

4\. **Avoid providing duplicate training data for a single intent**

*   Do not overtrain
    
*   Avoid including sentences in the training data that differ only by an alternate word
    

**Use Case**: To find a hospital or a specialist

Recommended

Not Recommended

*   Can you help me find a hospital?
    
*   Where is the nearest hospital?
    

Here, the following two training phrases are duplicate

for the same intent, since they differ only

by an alternate word:

*   Can you help me find a hospital?
    
*   Can you search for a hospital?
    

### 

**5\.** Avoid using the same or similar training data in different intents

Avoid using the same or similar training data that differ only by an alternate word in different intents. In such cases, different responses may be displayed to the user based on the closest match to the user's intent and it often results in confusion.

**Use Case**: Outlook email policy

Recommended

Not Recommended

Have a clearly defined intent with proper training data based on your use case. Avoid similar training data in different intents.

Intent 1: Outlook Email Policy

Training Data: Older emails are missing from Outlook

Intent 2: Outlook Missing Email

Training Data: Older emails are missing on Outlook

Here, both are different intents but the training data is similar and differs only by an alternative word

### 

**6\. Use slots for alternatives**

Create custom entity types that is generic.

**Use Case**: To open a bank account

**Recommended**:

*   I want to open a \[savings\] account.
    
*   I want to open a \[checking\] account.
    

### 

**7\. Use minimal words to convey meaning**

Leave out unnecessary and irrelevant words that do not contribute to the meaning of the sentence.

**Use Case**: To find a hospital or a specialist

Recommended

Not Recommended

Can you help me find a hospital?

Can you help me find a gigantic, sophisticated, huge hospital?

### 

**8\. Avoid spelling mistakes**

Spelling mistakes in the training data cause the system to make wrong spelling corrections for user queries.

**Use Case**: Quote status

Recommended

Not Recommended

Can you give me the status of my quote?

Can you give me the status of my quot?

### 

**9\. Use proper case for all words**

The most common mistake is writing a full sentence in lowercase.

**Use Case:** Car service center in Bangalore**.**

Recommended

Not Recommended

Where is the Lexus service center in Bangalore?

Here, “L” in Lexus helps to identify a proper car brand.

Where is the lexus service center in bangalore?

### 

10\. **Ensure proper punctuation marks**

*   It helps to identify the sentence type (declaration, question) and boundary.
    
*   Missed or incorrect punctuation marks may make the training data completely unusable in some circumstances.
    
*   Include punctuation marks such as period ( . ), comma ( , ), question mark ( ? ), exclamation point ( ! ), apostrophe( ' ), quotation mark ( "" ), and hyphen ( - ) as required.
    

**Use Case:** To transfer money

Recommended

Not Recommended

*   What is the status of the transfer?
    
*   I transferred money to my mother last week.
    

*   What is the status of the transfer
    
*   I transferred money to my mother last week
    

### 

**11\. Readable intent name**

*   In cases of disambiguation, the intent name is used as a button label. Hence, the intent names must be human-readable.
    
*   Note that intent names can be longer with a full sentence
    

**Recommended**:

*   Open a savings account
    
*   Find a specialist for me.
    
*   Get warranty information.
    

### 

12\. Generic vs specific training phrases

If you want training data that must match specific and generic queries, then it is recommended to provide generic training data. **Example**: If you wish to match "I want my fund value" and "I want fund value", then it is recommended to use "I want fund value" in the training data.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill

[Dialog](/user-guide/how-to/build-skills/create-skill/using-dialog-designer)[Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a)[Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk)[‼️Answers (Deprecated)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1)[LLaMB](/user-guide/how-to/build-skills/create-skill/llamb)[Using Javascript and Code](/user-guide/how-to/build-skills/create-skill/customize-your-skill)[Q&A (Backward Compatibility)](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/llamb

`**LLaMB - Large Language Model for Business**` is an exclusive product offering from the Avaamo Conversational AI Platform to harness the power of enterprise content coupled with Generative AI in your agents.

LLaMB is a new low-code framework for building powerful end-user generative AI agents in the enterprise safely, securely, and fast. LLaMB provides tools to eliminate hallucinations, integrate enterprise systems, and support any LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) of your choice.

LLaMB utilizes LLM technology to offer inherently personalized and summarized results while maintaining the required level of security and compliance for enterprises. It is a practical and secure approach to deploying LLMs in the enterprise, thereby enhancing the knowledge search experience for both employees and customers.

Here's a quick sneak peek at LLaMB:

This article outlines the key features of LLaMB and the next steps to leverage LLaMB product offering in the Avaamo Conversational AI Platform.

Refer [LLaMB](/user-guide/llamb/overview-key-features), for detailed information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/manage-skill

[Import and Re-import skills](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills)[Publish and Re-publish skills](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store)[Other common actions](/user-guide/how-to/build-skills/manage-skill/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills

Instead of creating skills from scratch, you can [import](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills#import-skill) from any available published skills in the skill store that is closest to your business and then edit the skill as required. Further, once imported to your agent, you can also [re-import skills](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills#re-import-skills) from the **skill** store to bring the latest copy of the skill from the skill store. See [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.

**Key Point**: See [Frequently asked questions (FAQs)](/user-guide/how-to/manage-skills-store#frequently-asked-questions-faqs), for a list of common questions on publishing and re-publishing of skills to skill store.

### 

Pre-requisites

Only users with **Edit, Publish,** or **Owner** permission for the agents can import or re-import a skill from the Skill store. See [Users and Roles](/user-guide/how-to/manage-platform-settings/users-and-permissions#roles-in-agent-life-cycle) and [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can import skills from the skill store immediately after creating a new agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent) and [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing and publishing.
        
    

### 

Import skill

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Import skill**.
    

*   In the **Import skill** pop-up, a list of all the skills that are not already imported in the agent is displayed.
    
*   Search and select a skill. Click **Import to Agent**.
    

*   You can view a copy of the imported skill in the **Custom skills** section.
    
*   **Save** your agent.
    

**Key points**:

1.  When you import a skill, an exact independent clone of the skill is created in the agent. Users with the required roles can edit the imported skill in the agent without affecting the skill in the skill store.
    
2.  All the entity types and JS files available in the skill from the skill store are imported to the skill in the agent.
    
3.  If you import a skill with duplicate entities and JS files, then a warning message is displayed. Click **Continue** to retain the agent copy.
    
4.  If you have already imported a skill from the skill store, then you can re-import the skill, if required, to get the latest changes of the skill from the skill store. See [Re-Import skills](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills#re-import-skills), for more information.
    
5.  When importing a skill, only translations of those languages that are supported by the agent are imported. If you wish to import the skill language that is not in the agent, then you must first add the language to the agent and then import the skill.
    
6.  In cases where custom translation for specific sentences or text is available at both the skill level and agent level, the agent-level translation is given priority.
    
7.  Since an imported skill language is considered only when the language is a part of the agent configuration, any node-level translations of the languages that are not a part of the agent are not imported either.
    

### 

Re-Import skill

This option is displayed only for those skills in the agent that are already imported from the skill store.

When you click **Re-import from Skill store**, the skill in your agent is completely replaced with the skill from the skill store, except for duplicate entities and JS. Note the following points on re-import:

*   All the entity types and JS files available in the skill from the skill store are imported to the skill in the agent.
    
*   If you re-import a skill with duplicate entities and JS, then a warning message is displayed. Click Continue to retain the agent copy.
    
*   Currently, you cannot merge the local skill changes with the skill in the skill store. However, you can use the following methods to preserve your local changes:
    
    *   Use **Make a copy** to create a duplicate copy of your agent. See [Make a copy](/user-guide/how-to/build-agents/manage-agents/make-a-copy), for more information.
        
    *   Use **Backup & Export** option to create a backup copy of your agent in your local system. Later, you can use the exported copy and **import** the same to any existing agent in any account. See [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.
        
    

You can use the skills from the copied agent or the imported agent to manually compare and merge.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store

Based on the business requirements, you can build different types of skills in each of your agents. Frequently, the functionality required for some of the skills across agents can be similar. The skills developed in one agent can be re-used in other agents within a company to accelerate the agent development process. Such re-usable skills can be published to **skill store**. See [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.

**Key Points**:

*   See [Best practices](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#best-practices) that you can follow for publishing a skill to skill store.
    
*   See [Frequently asked questions (FAQs)](/user-guide/how-to/manage-skills-store#frequently-asked-questions-faqs), for a list of common questions on publishing and re-publishing.
    

### 

Pre-requisites

Only **Development** role users and with **Publish** or **Owner** permission for the agents can publish, re-publish skill to skill store. See [Users and Roles](/user-guide/how-to/manage-platform-settings/users-and-permissions#roles-in-agent-life-cycle) and [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can publish skills to skill store immediately after creating skills in the agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent) and [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing and publishing.
        
    

### 

Publish skill

To re-use the skill across multiple agents in your account, you can publish skills to skill store:

*   In the **Agent -> Skills** page, click **Publish to skill store** in the overflow menu icon for the skill you wish to publish.
    
*   In the **Publish skill -> Skill details**, specify the following details that help to identify the skill in the skill store:
    

Fields

Description

Skill name

The skill name is automatically populated from the current name of the skill. This is the name that is used to identify the skill in the skill store. However, you can also change the name, if required. Use a combination of verb + noun to name your skill. **Example**: Instead of naming the skill as "ResetPassword", consider adding a noun, "ResetPassword - AWS".

Description

The description is automatically populated from the current description of the skill. However, you can also change the description, if required. Keep the description succinct and short while mentioning the purpose of the skill.

Things you can say

List the top three queries the skill can respond to. This must help to easily demonstrate the understanding capability of the skill.

Category

Select the category under which you wish to publish the skill in the skill store. Before publishing skills to skill store, consider editing the category name in your **Company skills** based on your business model. Click the category in the **Company skills** to edit the category name. See [Manage skill store](/user-guide/how-to/manage-skills-store), for more information.

Version

Specify the version of the skill. It is recommended that you increment the version as you publish successive versions of skill to skill store. Note that only one version of the skill is retained in the skill store.

You can also communicate the availability of the new version to the developers. Currently, this communication is manual, there is no automatic notification to developers when a skill is re-published with a new version.

Document link

Any external document link that contains more details about the skill. You can use this to explain the skill details that the developers can learn about before importing the skill from the skill store.

What's new

Briefly describe new changes or updates to the skill before publishing or re-publishing. This helps developers to understand the changes if they wish to re-import a skill from skill store to their agent.

*   In the **Publish skill -> Entity types**, a list of all the entity types in the agent is displayed. The entities used in the skill is automatically selected and displayed to you. Additionally, you can select the other entity types as required before publishing your skill.
    
*   In the **Publish skill -> Javascript**, a list of all the JS files used by the agent is displayed. You can select the ones used by your skill before publishing. See [Add JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files), for more information.
    
*   Click **Publish**. The skill is now published to the company skill store under the selected category.
    

**Key Points**:

*   The skills published in the skill store are independent clones with all required data needed for it.
    
*   You can only publish to the skill store under your **Company skills**. You cannot publish to **Avaamo skills**.
    
*   Currently, Answers skill cannot be published to skill store.
    

### 

Republish skill

After you publish the skill to the Skill store, you can continue to work on the skill independently in your agent and later re-publish the skills again to the skill store.

**Key points**:

*   Republishing a skill from an agent is a complete replacement of that skill in the skill store. Only one version of the skill published from an agent is available in the skill store.
    
*   There is no restriction on the number of times you can re-publish a skill from an agent to the skill store.
    

*   In the **Agent -> Skills** page, click **Re-publish to skill store** in the overflow menu icon for the skill you wish to re-publish.
    
*   In the **Publish** skill pop-up, specify the details required for publishing. See [How to publish?](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#how-to-publish) for more information.
    

### 

Best practices

The following lists a few best practices that you can follow for publishing a skill to skill store:

*   When you start designing an agent, consider defining the functionality of the agent in well-defined tasks. For each specific task, you can build skills and choose to publish the skill to your company skill store for re-usability. See [Design skills](/user-guide/how-to/build-skills/design-skill), for more information.
    
*   When you start creating skills, the name the skill in such a way that helps you easily identify the skill and its functionality. Use a combination of verb + noun to name your skill. **Example**: Instead of naming the skill as "ResetPassword", consider adding a noun, "ResetPassword - AWS".
    
*   When you publish a skill, ensure that in **Things you can say** section, you list the top three queries the skill can respond to. This must help to easily demonstrate the understanding capability of the skill.
    
*   Increment the version as you publish successive versions of skill to skill store. You can also communicate the availability of the new version to the developers.
    
*   Maintain a document with the skill details and update the document as and when you re-publish the skill with a new version. Currently, this communication is manual, there is no automatic notification to developers when a new skill version is re-published with a new version.
    
*   You cannot revert a published skill in the skill store. However, a user with the **Settings** role can delete the skill from the skill store and the skill can be published again. See [Delete skill from skill store](/user-guide/how-to/manage-skills-store#delete-skill-from-skill-store), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/manage-skill/perform-common-actions

In the **Agents** -> **Skills** section, you can [open skill in a new tab](/user-guide/how-to/build-skills/manage-skill/perform-common-actions#open-skill-in-a-new-tab), [enable/disable custom skills](/user-guide/how-to/build-skills/manage-skill/perform-common-actions#enable-disable-skill), and [delete skill](/user-guide/how-to/build-skills/manage-skill/perform-common-actions#delete-skill), as per your requirement.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can publish skills to the skill store immediately after creating skills in a new agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent) and [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent), for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the Avaamo Platform UI, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing and publishing.
        
    

### 

Open skill in a new tab

In the **Agents** **\-> Skills** tab, click overflow menu icon available against each custom skill and click **Open In New Tab**. The skill is displayed in the new tab. This feature is useful during the agent development process when you can open skill in a new tab, make some changes to skill in the new tab, and then build, save, and test the agent; while the skill is still in the new tab.

Based on the business requirements, you can build different types of skills in each of your agents. Frequently, the functionality required for some of the skills across agents can be similar. Hence, a skill developed in one agent can be re-used in other agents within a company to accelerate the agent development process. Such re-usable skills can be published to **skills store**. See [Manage skills store](/user-guide/how-to/manage-skills-store), and [Publish skill to skills store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.

### 

Enable/Disable skill

In cases, where you do not want the skill's flow or implementation to be processed for a user query in your agent, you can disable the skill, instead of deleting the skill from the agent. Later, you can also enable the skill, as required.

*   In the **Agents** **\-> Skills** tab, click three ellipse dots in the skill block and click **Enable** to enable a disabled skill and click **Disable** to disable an enabled skill.
    
*   The skill is marked for enabling or disabling, based on the action you have selected. Click **Undo**, if you wish to revert the action.
    
*   Click **Save.**
    

### 

Delete skill

*   In the **Agents** **\-> Skills** tab, click three ellipse dots in the skill block and click **Delete** to the skill from the agent.
    
*   The skill is marked for **Delete**. Click **Undo**, if you wish to revert the action.
    
*   Click **Save.**

---
