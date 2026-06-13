# Classic Agent — Q&A & Dynamic Q&A Skills
> 39 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a

[Quick overview](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/quick-overview)[Create a new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill)[Build and manage Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill)[Test Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/test-dynamic-q-and-a-skill)[Debug Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/debug-dynamic-q-and-a-skill)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/quick-overview

Dynamic Q&A skill allows you to create responses that do not require multi-step dialogs with the user for a given question. Typically, the questions are Frequently Asked Questions (FAQs) related to your business, product, or service.

**Examples**:

*   FAQs for a Pizza agent
    
    *   How do you make pizza?
        
    *   What are your business hours?
        
    *   What is the corporate office address?
        
    
*   FAQs on a life insurance policy for an Insurance agent
    
    *   How do I open an account?
        
    *   How do I change my address details on file?
        
    *   What is FDIC?
        
    

A Dynamic Q&A skill can have one or more pairs of such questions and corresponding responses.

In the Avaamo Platform, you can create a new Dynamic Q&A skill by quickly uploading questions and answers or creating a custom response to user queries in CSV format. The following is an illustration of how you can use and build Q&A skill in the platform:

The following is an illustration of a Q&A skill response in a Pizza agent:

### 

Additional resources

The following lists a few additional resources available for you to get started on Q&A skills:

*   [Quick start video](/user-guide/quick-start-tutorials/add-q-and-a-skill)
    
*   [Webinar on Introduction to v5.0 and Answers](/user-guide/ref/webinars/introduction-to-v5.0-and-answers)
    

### 

Next steps

This section provides an in-depth understanding of the following:

*   [Create a new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill): Start by creating a new Dynamic Q&A skill or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.
    
*   [Build and manage Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill): Add questions and answers to your Dynamic Q&A skill. Learn how to import Q&A and perform other common actions such as edit, clear, and delete.
    
*   [Test Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/test-dynamic-q-and-a-skill): Test Q&A skill as you build using an agent simulator.
    
*   [Debug Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/debug-dynamic-q-and-a-skill): Debug Q&A skill using insights, debug logs, and conversation history.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill

Based on your requirement, you can either start by creating a new Dynamic Q&A skill from scratch or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    
*   You can apply the Outro messages to the Dynamic Q&A skill. Refer [Global Outro skill](/user-guide/how-to/build-agents/add-skills-to-agent#global-outro-skill), for more information.
    

**To create Dynamic Q&A skill:**

*   In the **Agent** page, navigate to the Skills option in the left navigation menu, click **Add Skill** in the Agent skills page.
    
*   In the **Skill builder** page, select **Dynamic Q&A** and click **Create**.
    
*   Specify the following details and click **Create**:
    

Parameters

Description

Maximum Length

Skill name

Indicates the name of the Q&A skill, primarily used to identify the skill. The skill name must be less than 50 characters.

50 characters

Skill description

Indicates the description of the skill. Use this to specify the purpose of the skill. The skill description must be less than 200 characters.

200 characters

Skill key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as Goto node and in [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing). It helps in easy identification and readability.

20 characters

Collect Feedback

Indicates if you wish to enable user feedback or not. By default, it is set to false. Use the slider for setting to true.

Note that you can also disable feedback at the skill level and add feedback to individual responses using`collectFeedback()`method. See [Add feedback (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback), for more information.

Currently, **Collect feedback** functionality is supported only in Web, Android, and iOS channels.

NA

Mask responses

Move the slider if you mask all the agent's responses of this skill in the conversation flow. When you enable masking for the skill, all the responses in the skill are masked and cannot be accessed. Note that this option is available only when masking is enabled for an agent. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

NA

A new empty Dynamic Q&A skill is created.

### 

Next Steps

You can start by [adding questions and answers](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) to your Dynamic Q&A skill either manually or by importing a CSV file. Once the Q&A is added successfully, your Q&A skill is ready for [testing](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/test-dynamic-q-and-a-skill). See [Debug Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/debug-dynamic-q-and-a-skill), for common troubleshooting tips.

**Key Points**:

*   If you have imported a skill, ensure to edit the name and description of the skill. See the [Edit skill](/user-guide/how-to/build-skills/manage-skill#edit-skill), for more information.
    
*   Refer to [Design skills](/user-guide/how-to/build-skills/design-skill), for best practices and do's and don'ts while building a skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill

[Add questions and answers](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers)[Perform common actions](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers

In the **Questions and Answers** section, you can create user intents (questions) and skill responses (answers) manually or by importing a CSV file with Q&A. See [Import Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#import), for more information.

**Key Points**:

*   Multiple developers can add questions and answers simultaneously in the same Q&A skill, encouraging faster development of the skill. As a best design practice, it is recommended to distribute a set of intents among developers, so that it is easy to maintain and manage and results in seamless collaboration.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

**Add question and answers**:

*   In the **Dynamic Q&A** page, click **Question & Answers** in the **Implementation** tab.
    
*   Select the channel for which you wish to add the Q&A. Using this feature, you can add different customized responses for different channels as per your requirement. If you have deployed your agent in a specific channel for which you have not configured any response, then the response as specified in the "Default response" option is considered. Example: Consider that you have deployed your agent in Web, Android, and iOS channels and you have configured responses only for the Android channel. For the Web and iOS channel, the responses as specified in the Default response option is displayed.
    

**Note**: Only those channels that are enabled for your account or company are displayed in the Channel dropdown. If you wish to enable a channel, then contact Avaamo Support for further assistance.

*   If you have configured languages in your skill, then select the language in which you wish to add the response. By default, the response of the default language as specified in the agent configuration is displayed. See [Add language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information on how to add language-specific responses in the skill message.
    

**Key Point:** With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination. Example: You can add a response specific to the Android channel in the French language.

*   Click the plus icon to add user questions and the skill responses (answers).
    
*   Add required [Intent](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#intent), [Entities](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#entities), and [Prompt details](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#prompt-details).
    
*   Click **Save** to save the Q&A.
    
*   You can continue to add questions and responses as required.
    

Your Q&A skill is ready for testing. See [Test Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/test-q-and-a), for more information. You can also add languages, edit intents, and responses, and import Q&A. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions), for more information.

**Key point**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

### 

Intent

You can specify the user questions in the **Intents** tab.

Parameters

Description

Maximum length

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

**Supported characters**: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

20

characters

Intent name

Indicates the name of the intent.

Each intent name must be unique within the agent.

191

characters

Training phrases

Indicates the training data or variations for the intent. Type the required training data and press enter or click Add.

You can add multiple training data to the intent as required. There is no limit on the number of training data or training phrases that can be added to an intent.

It is recommended that you follow the recommended best practices for adding training data. See [Intents and training data](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases-training-utterances-or-training-data), for more information.

Note the following points on Training phrases:

*   When you add the training phrase, the entities and slots are automatically extracted and displayed.
    
*   The color of the phrases in the user utterances matches with the slots for easy identification.
    
*   In cases, where the slots are not extracted, you can right-click on the word or phrase to select and add slots manually. Note that you can manually extract only those slots for which the entities are already added in the Q&A intent.
    
*   Click the slots to rename, if required.
    
*   You can delete the slots if it not required. Corresponding entities in the [Entities](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#entities) tab are also deleted.
    

Each of

300 characters

**Key points**:

*   If you have multiple intents with exactly the same training data, then the latest intent response is displayed to the user.
    
*   If you have multiple intents with similar training data, then the query goes for disambiguation.
    
*   Slot name must be unique across all entity types in an agent. When a user query is posted, the intent execution considers the training data across all the skills in the agent, hence, the slot name must remain unique across all entity types in an agent. **Example**: Consider that you have a slot name "otp" with entity type as "Number". In this case, if you try to add the same slot name "otp" for a different entity type "One-time password", then an error message is displayed that the slot name is already taken by another entity type.
    

### 

Entities

In the **Entities** tab, you can view all the entities extracted for the Q&A intent. You can delete the entity if it is not required and the corresponding slots in the training phrases are also removed.

**Key point**: Slot name must be unique across all entity types in an agent. When a user query is posted, the intent execution considers the training data across all the skills in the agent, hence, the slot name must remain unique across all entity types in an agent. **Example**: Consider that you have a slot name "otp" with entity type as "Number". In this case, if you try to add the same slot name "otp" for a different entity type "One-time password", then an error message is displayed that the slot name is already taken by another entity type.

### 

Prompt details

In the **Prompt details** tab, specify the skill responses (answers) to user questions. You can also add filters to your responses and tag the responses for analytics. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.

Note that [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) options as available for the Dialog skill are not applicable to the Q&A skill.

## 

Add Intro and Outro messages

You can also specify Intro and Outro messages in the **Question & Answers** page:

*   **Intro messages**: Displayed before an answer to the user question. All skill messages can be added to an intro message. Typically, this is used to acknowledge the user question such as "Thank you for showing interest".
    
*   **Outro messages**: Displayed after an answer to the user question. All skill messages can be added to an outro message. Typically, this is used to collect feedback. You can also create a JS to navigate to a skill and a node.
    
*   Continue to add questions and responses as required.
    

## 

Example: Add response filters

Consider that you wish to display different responses for the same Q&A intent based on the user location property:

User query

Indian user

US user

Where is your store?

In India, you can find our stores in all major cities - Mumbai, Delhi, Chennai, Bangalore.

In the US, our store is located only in New York.

### 

Step 1: Add user properties

Add a user property "Office City". See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

Step 2: Add response filters

Configure two response filters, one for "Location - India" and another for "Location - US". Add values for each of these as required. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#add-response-filters), for more information.

### 

**Step 3**: **Add response filters to Q&A response**

*   Add a Q&A intent, say, "store" and with the user query "Where is your store? ".
    
*   In the Skill messages, add two text responses:
    
    *   "In India, you can find our stores in all major cities - Mumbai, Delhi, Chennai, Bangalore." and apply the "Location - India" response filter.
        
    *   "In the US, our store is located only in New York." and apply the "Location - US" response filter.
        
    

### 

**Step 4: Test your agent**

*   In the web channel URL, set the custom\_properties\[office\_city\]=Bangalore. Specify the user query in your agent simulator and check if the response of the "Location - India" response filter is received.
    

*   In the web channel URL, set the custom\_properties\[office\_city\]=Boston. Specify the user query in your agent simulator and check if the response of the "Location - US" response filter is received.
    

*   See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties) and [Test your web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel#test-your-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions

**Key points**:

*   Multiple developers can edit different questions and answers simultaneously in the same skill, encouraging faster development of the skill. A developer can edit and unlock a Q&A to edit the intents and responses.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the Skill. See [Create new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the **Agent** page, navigate to the **Skills** option in the left navigation menu. Search and open the required skill.
        
    

## 

Search Q&A

*   You can search based on the response filters, if you have added any for your Q&A intents.
    
*   You can search based on the responses added for different channels if you have added any for your Q&A intents.
    
*   You can search based on the languages if you have added any for your Q&A intents.
    

In the **Implementation -> Question & Answers** page, you can find the filters used in your Q&A responses. Use this to filter the responses and view the answers.

## 

Edit skill

You can edit the skill to update the skill name, description, enable or disable feedback as required.

*   In the **Dynamic Q&A skill** page, click the **pencil icon** at the top-left corner next to the skill name.
    
*   Edit the skill details.
    

**Note**: By default, the **Skill key** is non-editable.

*   Click **Edit** to edit the Skill key.
    
*   It is recommended to edit the **Skill key** with caution. If you update the **Skill key** and if the key is used say in JS code or in regression testing, then you must update the **Skill key** manually.
    

*   Click **Update** and click **Save** to save the skill details.
    

## 

Import Q&A

You can import a CSV file with all the questions and answers to a **Dynamic Q&A** skill, instead of manually creating all the Q&As.

*   In the **Dynamic Q&A Skill** page, navigate to the **Implementation -> Question & Answers** option in the left navigation menu, and click the Import option.
    
*   In the **Import** pop-up, click **Browse** to browse a CSV file with Q&As. You can also click Download Sample CSV, for a sample file. In the CSV file,
    
    *   The first column contains the name of the intent
        
    *   The second column contains a comma-separated list of questions
        
    *   The consecutive columns include variations of the intent
        
    

*   Click **Submit** to load all the Q&A's to the **Dynamic Q&A** skill.
    

**Notes**:

*   You can import only when all of the existing questions and answers in the Q&A skill are unlocked.
    
*   You cannot import a Q&A with a duplicate intent name. An error message is displayed when you try to save the Q&A skill with a duplicate intent name.
    
*   The Intent name can be upto 192 characters.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   The file must be UTF-8 encoded CSV. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    

### 

Error during import

If you get an error while uploading a CSV file, then you can consider using the following troubleshooting tips:

*   Check if your CSV file is valid. You can use any online CSV validator such as [https://csvlint.io/](https://csvlint.io/) to verify.
    
*   Check for duplicate intent name
    
*   Check if the intent name is within 192 characters
    
*   Check for non-UTF-8 characters. That can lead to exceptions too. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
*   Check if you have blank intents.
    
*   Check if each response is within 1028 characters.
    

### 

Export to a UTF-8 encoded CSV

#### 

Windows

**If you use Excel**

We do not recommend using Excel for exporting to .csv as it tends to create unreadable characters in .csv files.

**If you use Notepad**

*   Click on File
    
*   Choose Save As
    
*   There are three items to update in the Save dialog that comes up:
    
    *   Save as type: Change this to **All Files**
        
    *   Filename: name your file and add the .csv extension to it. **Example**: myupdates.csv
        
    *   Encoding: Click on the dropdown and choose UTF-8
        
    
*   Save
    

#### 

Mac

If you use _Excel for Mac_, it is highly recommended that you open your spreadsheet in either **Numbers** or **Google Sheets** to convert and export the final CSV file to UTF-8 encoding. Excel for Mac does not natively support the import or export of UTF-8 encoded files.

**If you use Numbers**

*   Click on File
    
*   Hover over Export
    
*   In the submenu that appears, choose CSV
    
*   Click on **Advanced Options** to show the **Text Encoding** dropdown
    
*   Select **Unicode (UTF-8)** from the dropdown menu. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
*   Click Next
    
*   Save
    

**Google Sheets**

*   Click File
    
*   Click on or hover over Download As
    
*   Choose the option _Comma-separated values (.csv, current sheet)_
    
*   After clicking on that option, your file will be automatically downloaded to your computer
    

## 

Clear all the Q&A

You can delete all the questions and answers in the Dynamic Q&A skill if they are no longer required.

*   In the **Dynamic Q&A skill** page, navigate to **Implementation -> Question & Answers**
    
    tab option in the left navigation menu.
    
*   Click the **Clear** option.
    
*   An alert message is displayed. Click **Clear** in the alert message to clear all the questions and answers.
    

**Note**: You can clear all the Q&A only when all of the existing questions and answers in the Q&A skill are unlocked.

## 

Edit Q&A

You can edit the intents and responses of a Dynamic Q&A skill.

*   In the **Dynamic Q&A Skill** page, navigate to **Implementation -> Question & Answers**
    
    tab option in the left navigation menu.
    
*   Select the **Channel** in which you wish to edit the Q&A.
    
*   Click the intent that you wish to edit and click **Edit** to unlock the intent.
    

*   Edit the [Intents](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#intent), [Entities](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#entities), and [Prompt details](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#prompt-details) as required.
    

**Note**: By default, the **Intent key** is non-editable. Click **Edit** to edit the Intent key. It is recommended to edit the Intent key with caution. If you update the Intent key and if the key is used say in JS code or in regression testing, then you must update the Intent key manually.

*   If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click **Force unlock**, if you still wish to edit the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    

*   Click **Save** to save the intent.
    

## 

Delete Q&A

You can delete a question and answer from the **Dynamic Q&A skill** if Q&A's are no longer required.

*   In the Dynamic Q&A Skill page, navigate to **Implementation -> Question & Answers**
    
    tab option in the left navigation menu.
    
*   Click the intent that you wish to delete.
    
*   Click **Edit** to unlock the intent. If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click **Force unlock**, if you still wish to delete the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    

*   Click **Delete** to delete the intent. An alert message is displayed. Click **OK** in the alert message to delete the Q&A.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/test-dynamic-q-and-a-skill

Once the question and answers are created or uploaded successfully to your skill, you can test to ensure the Q&A provides appropriate responses for user queries.

**Key point**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test a skill immediately after creating the skill. See [Create new Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill), for more information.
    
*   If you wish to test skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

You can test the Dynamic Q&A skill in any of the following ways:

*   Using the **Agent simulator** from any page in the skill's left navigation pane
    
*   Using the **Test -> Simulator** option in the left navigation menu. This also displays the agent simulator in the bottom right corner.
    

### 

**Testing using agent** simulator

*   In the agent simulator, select a channel Web or C-IVR in which you wish to test. Note that this option is displayed if you have deployed your agent in both web and C-IVR channels. You can now ask queries and test if you are receiving appropriate responses from user queries.
    
*   Note that the questions need not be exact. The variations are automatically handled by the system with appropriate responses.
    

*   Consider that you have [added French language](/user-guide/how-to/build-agents/configure-agents/add-languages) in your agent. When you switch language to say french using [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch) command and ask any question from the Q&A skill in French, then the agent detects and responds to the question in French, as applicable:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/debug-dynamic-q-and-a-skill

In case you are unable to receive the expected response from the **Dynamic Q&A** skill, you can debug using the following troubleshooting tips:

### 

**Using local skill testing**

*   Use the **Test** in the Dynamic Q&A page to test the skill locally. See [Test Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/test-dynamic-q-and-a-skill), for more information. If you are not receiving the appropriate responses, then check the user query and edit the user intents, if required. See [Edit skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#edit-skill), for more information.
    
*   If you are receiving appropriate responses, then test the skill at the agent level. [Use insights](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/debug-dynamic-q-and-a-skill#using-insights) in the agent testing for further debugging.
    

### 

**Using Insights**

*   Click the **eye icon** below the user query to know the intent mapped to the query.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, intent name, skill name, response node, and the language of the query.
    

*   Add the query that is not handled \[mapped to unhandled intent\] by the agent as inline training data. See [Add Questions and Answers,](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers) for more information.
    

### 

Using Conversation history

You can also check the user query from the [Conversation history](/user-guide/how-to/build-agents/debug-agents#conversation-history) to know the query for which the expected response is not displayed in the agent.

### 

Using Debug Logs

In case you are receiving a JS error in the Dynamic Q&A response, check [Debug Log](/user-guide/how-to/build-agents/debug-agents#debug-log) for more details.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1

[Quick overview](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/quick-overview)[Create a new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base)[Build and manage Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1)[Configure Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill)[Intro Outro Messages](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/intro-outro-messages)[Parsing Templates](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates)[Test Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/test-avaamo-answers)[Debug Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips)[Improving accuracy in Answers Skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/improving-accuracy-in-answers-skill)[Keeping content updated](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/keeping-content-updated)[Answers skill - FAQs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-faqs)[Answers REST APIs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/quick-overview

Typically, an enterprise contains a huge knowledge base often in the form of PDF documents or in any of the published URLs. The content can be unstructured (with images, texts, or tables), text in different formats (simple paragraphs, questions, and answers, or hierarchical sections), and in any layout (Example: multi-columnar in a single page). Manually, creating intents with training data and pre-defining responses requires a lot of manual effort and is time-consuming.

Answers allow you to leverage and extract the knowledge base already available in the enterprise to quickly build skills that can provide answers from enterprise content via conversations. You can create a quick and smart conversational knowledge base by importing any PDF, CSV or Excel documents, or content from any externally accessible URL.

You can also extract content from authenticated web pages or pages that are not directly/externally accessible using the parsing utility and content ingestion API.

You can then iteratively edit and fine-tune the extracted knowledge base in Answers, as required, to provide more accurate responses to user queries.

The following is an illustration of how you can use and build Answers in the platform:

The following is an illustration of the Answers skill response in a Pizza agent:

### 

You can also ingest content using Webhooks. See [Content Ingestion Using Webhooks](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion) for more information.

### 

Additional resources

The following lists a few additional resources available for you to get started on Avaamo Answers:

*   [Quick start video](/user-guide/quick-start-tutorials/add-answers-skill)
    
*   [Webinar on Introduction to v5.0 and Answers](/user-guide/ref/webinars/introduction-to-v5.0-and-answers)
    

### 

Next steps

This section provides an in-depth understanding of the following:

*   [Create a new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base): Start by creating a new Answers skill in your agent.
    
*   [Build and manage Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1): Learn how to build a knowledge base, edit the Answers skill, and fine-tune to improve responses to user queries.
    
*   [Test Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/test-avaamo-answers): Test to ensure the extracted knowledge base provides appropriate responses for user queries.
    
*   [Debug Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips): Few troubleshooting tips to debug Answers skill for most common scenarios.
    
*   [Answers skill - FAQs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-faqs): Lists a few frequently asked questions related to Answers skill:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To create Answers skill:**

*   In the Agent page, navigate to the Skills option in the left navigation menu, click **Add skill** in the Agent skills page.
    
*   In the **Skill builder** page, click **Answers**.
    
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

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as Goto node and in [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing). It helps in easy identification and readability.

20 characters

A new empty Answers skill is created. The next step is to add documents or URLs to the skill.

### 

Next Steps

You can start by [adding a document or URL](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1) to your Answers skill. Once some content is uploaded successfully, you have created a knowledge base and your Answers skill is ready for [testing](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/test-avaamo-answers).

You can manage the knowledge base in multiple ways. For example, you can edit the attributes of the uploaded documents or URLs to facilitate disambiguation, in cases where the answers to user queries are found in multiple documents or URLs. See [edit the knowledge base](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge) for more information.

You can then continue to fine-tune and [edit the knowledge base](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge). See [Debug Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips), for common troubleshooting tips.

**Key Points**:

*   If you have imported a skill, ensure to edit the name and description of the skill. See [Edit skill](/user-guide/how-to/build-skills/manage-skill#edit-skill), for more information.
    
*   Refer to [Design Skill](/user-guide/how-to/build-skills/design-skill), for best practices and do's and don'ts while building a skill. See [Edit Skill](/user-guide/how-to/build-skills/manage-skill#edit-skill), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1

[Create Document Groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups)[Upload Content](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1)[Tabular answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/tabular-answering)[Multilingual answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/multilingual-answering)[Content ingestion](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion)[View and edit knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge)[Perform common actions](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups

**Document Groups** are used for categorizing and managing information that you upload for the Answers skill. For example, you can upload information that belongs to different products in different document groups.

When you upload content to a document group, a knowledge base is created by extracting chunks of information from the content you upload. You can upload different types of documents such as PDF documents, HTML pages, Excel documents, CSV files, and Word documents (docx), Excel.

### 

Steps to create a document group

1.  Open the answers skill and click **Add group** to create a Document group.
    
2.  Enter the **Group Name** and **Description** and click **Create**.
    

The newly created group is displayed in the **Documents Group** page under **Implementation**. The count of **Total groups** is increased by one.

When you create a document group, a unique document group ID is generated. You can view the group ID when you click the three dots on the document group box and select **View/Edit**.

### 

View/edit a document group

You can view or edit a document group by clicking the three dots on the document group box and selecting **View/Edit**.

*   In the pop-up, you can view the details of the group such as the Skill ID and Group ID.
    
*   You can also edit the Group Name and Description.
    

### 

Delete a document group

When you delete a group, all the knowledge stored in the group is deleted along with the group.

Steps to delete a document group:

1.  Click the three dots on the document group box and select delete.
    
2.  Click **Yes, delete it!** in the confirmation box.
    

### 

Disable a document group

When you disable a group, all the knowledge in the group is disabled and is not made available to the user.

To disable a group, click the three dots on the document group box and select disable. Once a document group is disabled, it is marked as disabled.

A disabled group can be enabled at any time by clicking the three dots on the document group box and selecting enable.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1

Content is added to Document Groups. To upload content, you must first decide which document group you want to add the content to. See [Create Document Groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups) for more information on document groups.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

**Note**: You can use the **Status** dropdown in the right side of the page to filter the documents based on the document upload status. Along with the status, you can also view the count of documents for each status in the dropdown. This feature helps when you have a large set of documents uploaded in a document group and say you wish to view only errored-out documents in the group.

### 

**To upload Documents**

*   Choose the document group to which you want to add documents. Click on the document group to open it.
    
*   Click **Add Documents.**
    
*   Click **Select Files** to upload documents. You can upload multiple documents at a time.
    
*   Click Import and choose the following for each file:
    
    *   **Language**: Choose the language of the document. By default, the language is set to English. You can upload documents in any language as long as the language is configured or added to your agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on adding languages to your agent. See [Multi-lingual answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/multilingual-answering), for more information.
        
    *   **File Format**: For a pdf file, based on the way the file is formatted, pick the closest option from the following:
        
        *   **Indexed Section**: Choose this if the PDF document format is in the form of sections such as 1, 1.1, 1.2, 1.3,.....
            
        *   **Chapters, Articles, Sections, Appendices**: Choose this if the PDF document format is in the form of Chapters, Articles, Sections, Appendices such as Chapter 1, Section 1.2,...
            
        *   **Font based hierarchy, example**: Choose this if the format of the information in the PDF document is based on the font style.
            
        *   **Hierarchy in the form..**: Select this format if the PDF document format is in the form of roman letters, numbers, and alphabet bullet points.
            
        
    
*   Click **Import**. The content from the specified documents is extracted by the Avaamo Platform to seamlessly create a knowledge base. You can view the status of the upload for each document in the Status column. The following status values are displayed:
    
    *   **Uploaded:** The document has been added to the skill.
        
    *   **Queued:** The content is placed in a queue for further processing.
        
    *   **Extracting**: Chunks of content is being extracted.
        
    *   **Learning:** Entities, acronyms, vocabulary and knowledge graph are being generated.
        
    *   **Complete**: The document is uploaded successfully. Extracted knowledge from the document is populated and is ready to be used by any agent. See [View and Edit Knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.
        
    *   **Error**: The upload has errored out. In case of errors, you can click Error in the Status column to view more details. See [Debug Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips), for more information.
        
    *   **Warning:** No business vocabulary was found for the document.
        
    

**Key Points**:

*   Avoid documents with too many graphics as those are ignored.
    
*   PDFs must have permission to read-from and write-to and must not be access-controlled or password-protected.
    
*   All the text captured in one knowledge base must be under 2 MB in base Unicode representation.
    
*   Avaamo Answers supports uploading Word documents with `.docx` extension only.
    

### 

**To upload from URL**

*   Choose the document group to which you want to upload content from a URL. Click on the document group to open it.
    
*   Click **Add URL**.
    
*   Specify the following details:
    
    1.  **URL:** The URL from which content is to be uploaded.
        
    2.  **Title:** Name/title for this content - to identify it.
        
    3.  **Language**: The language of the content.
        
    4.  **Template:** The template for content that is added from a URL is always an HTML document.
        
    5.  **Attributes**: Attributes for the content uploaded from the URL.
        
    
*   Click **Create**. The content from the specified URL is extracted by the Avaamo Platform to seamlessly create a knowledge-base. You can view the status of the upload for each document in the Documents tab. The following status values are displayed:
    
    1.  **Uploading**: The information is being extracted and currently getting processed by the Avaamo Platform.
        
    2.  **Complete**: The URL is uploaded successfully.
        
    3.  **Error**: The upload has errored out. In case of errors, you can click Error in the Status column to view more details. See [Debug Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips), for more information.
        
    

**Key Points**:

*   Use the document parsing utility to upload multiple URLs at once. Contact Avaamo Support to get access to the document parsing utility.
    
*   Only the specific page in the URL is uploaded. Content from links to other pages or websites is not uploaded.
    
*   All URLs must be publicly available or the URLs must allow content to be downloaded by a scraping server.
    
*   URL must not redirect to an authorization page.
    
*   URL must allow cross-origin from the Avaamo Platform.
    
*   URL must not include assets like PDFs, Docx. If you wish to process asset-type documents (PDFs), then you can upload them as documents instead of URLs.
    
*   Avoid pages with browser-window popups.
    
*   All the text captured in one knowledge base must be under 2 MB in base Unicode representation.
    
*   You can upload documents in any language as long as the language is configured or added to your agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on adding languages to your agent. See [Multi-lingual answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/multilingual-answering), for more information.
    

**Note**: You can ingest content to Answers using any CMS Webhooks or pull content and upload it to the Answers knowledge base. See [Content ingestion using Webhooks](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion), for more information.

Contact Avaamo Support to start using this feature, and for more information on repo access and API documentation.

### 

Next Steps

Once the upload of documents or URLs to the knowledge base is successful, your Avaamo Answers skill is ready for testing. See [Test Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/test-avaamo-answers), for more information. You can continue to fine-tune and edit the knowledge base based on the user conversation history. See [View and Edit Knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.

You can also perform certain actions on the knowledge base such as retraining, editing the uploaded documents or URLs, or deleting the documents or URLs from the knowledge base, as required. See [Perform Common Actions](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/tabular-answering

Typically, in any enterprise content, tables are used to organize data that is too detailed or complicated to be described adequately in the text. This allows the reader to quickly search and get the results. Tables can be in any HTML document, or in the form of Excel or CSVs.

You can use Avaamo Answers to ingest documents with tables and later provide responses to user queries from the content available in the tables. With this feature, you can

*   Upload documents that are in a tabular format - Excels and CSVs
    
*   Upload documents that have tables - HTML and PDF
    
*   Get responses to user queries from the content available in Excel sheets, CSVs, tables embedded in PDFs, HTML
    

The answer skill can identify the exact row and column in the table where the response is present and extract the answer for the user.

The following illustration depicts how Avaamo answers can provide answers to a user query from the ingested table content:

### 

How to use it?

*   You can directly upload CSV and Excel files.
    
*   Use Avaamo’s content ingestion utility to ingest tables from HTML and PDF files that have tables in them.
    

Contact Avaamo Support, to get more details on the content ingestion utility.

### 

Key points

*   Contact Avaamo Support to start using this feature and for more information on repo access and API documentation.
    
*   Currently, this feature supports only cell retrieval queries. Aggregation-based answering (Sum, Count, Average) is not supported.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/multilingual-answering

Typically, in any global business, it is a necessity to design and build assistants or agents that can interact with the users in their local language. The Avaamo platform provides multilingual support for agent development in different languages, with English (en-US) as the default language. Users can converse with your agent in any local language and expect responses to be in the same local language.

This helps in:

*   Providing a wider reach of your agents. Makes agents more accessible to a broader scope of users.
    
*   Providing more personal experience with your agents since interacting in the local language is more natural and relatable.
    

Regardless of the language in which any information is stored in the knowledge base, the Answers skill can use the information to reply in the language that the user is conversing in. For example, consider that a user is conversing in Spanish with an Avaamo agent. The user asks for information that is stored in English in the knowledge base. The agent is capable of translating the information to Spanish and responding.

Hence, documents and content uploaded in any language can be used for answering queries.

### 

What is Multilingual answering?

You can use Avaamo Answers to ingest content in any of the [Avaamo-supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages) and provide responses to user queries from the content available in the user's preferred language. See [Add Document or URL](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information.

The following illustration depicts how Avaamo answers can provide responses to a user query in the local language from the ingested document in the corresponding language:

### 

### 

How to use it?

*   You must first add the language of the document you wish to upload to your agent. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on adding languages to your agent.
    

*   After the content is ingested, a knowledge base is created. See [View and edit knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.
    

*   You can now ask queries in the local language, say Spanish in this use case, and get the agent's response in Spanish. Note that if you ask a query in say English, the agent response in English is displayed.
    

**Note**: To switch from one language to another when conversing with the agent, the user has to type the command `#switch_lang language-code.`See [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch) and [Skill commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands)

### 

Key points

Avaamo Platform allows you to customize the translated responses of the agent in the **Configuration -> Language** tab. Currently, this cannot be used for customizing the translated response of the agent for the Answers skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion

You can create a quick smart conversational knowledge base by importing any PDF document or from any externally accessible URL using Answers skill. However, if you have an enterprise with a huge knowledge base, then uploading the documents or the URL to the Answers skill can be tedious and time-consuming. See [Add Document or URL](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information on how to ingest content using PDF documents and URLs to the Answers skill knowledge base.

Instead, you can use this new feature to configure webhooks to push content to Avaamo Platform using the API or run document parsing repo on a system to ingest content.

### 

How does this work?

**Note**: Contact Avaamo Support to start using this feature and for more information on repo access and API documentation.

Based on your requirements, you can ingest content in one of the following ways:

*   **Document parsing utility**: Most enterprise content websites have sitemaps with indexes and last modified timestamps. The content ingestion utility crawls through the pages provided in the sitemap to create an Answers skill with the knowledge base. This utility can be configured to be run periodically to keep the Answers skill upto date as and when the content is updated in the indexes. Filters can be added to upload content based on certain criteria - for example, to filter content that is only in the English language.
    
*   **Webhooks**: Answers can be set up as an application that can expose its functions using an API call. Those APIs can be configured with a CMS using Webhooks, such that whenever there is any update to the content, the CMS can call the APIs and update the Answers skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge

Once the upload of documents or URLs to the knowledge base is successful, you can view the extracted content to fine-tune and edit the knowledge base.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base), for more information.
    
*   If you wish to edit a skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

In the Answers Skill page, click **Implementation -> Document Groups** in the left navigation menu. Then, open the document group that you want to manage. The list of uploaded content for the selected document group is displayed.

Click **Knowledge** on the left panel. The knowledge extracted from the uploaded content in the document group is available as [sections](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#sections), [entities](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#entities), [acronyms](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#acronyms), and [vocabulary](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#vocabulary). A [knowledge graph](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#knowledge-graph) is built for you from the extracted content to visually represent the created knowledge base.

You can filter the extracted knowledge based on a document using the **Filter by Document** text box.

**Note:** Knowledge is extracted and organized for all the uploaded content in a single document group. [Section](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#sections), [entities](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#entities), [acronyms](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#acronyms), [vocabulary](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#vocabulary), and [knowledge graphs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#knowledge-graph) are created and maintained for a document group. To view information only for a specific document in the document group, use the **Filter by the Document** text box.

## 

Sections

Sections are chunks of content extracted and organized based on the structure of the uploaded document. Each section contains the skill’s response to the user’s intent. You can add additional training data as required.

The section hierarchy uses a breadcrumb to indicate the page number from which the section is extracted and the corresponding section header. The document from which the section is extracted is mentioned above in the section hierarchy.

You can perform the following actions from the Sections tab:

*   **Search a section**: Use the search icon to search for sections. You can search across all the documents in the document group or a specific document.
    
*   **Edit a section**: Select the required section and click Edit. You can add a new header or delete the existing header as required. Then, click Save**.**
    
*   **Add training data to a section**: Select the required section. Enter the required training data in the Add Training Data text box and click Add.
    
*   **Delete training data of a section**: Select the required section. A list of training data specified for the section is displayed. Click the X next to training data to delete it.
    
*   **Preview URL**: Select the required section, provide the preview URL for the section, and click **Add**. When a response from this section is displayed in the agent, then the **View more** link in the response navigates to the link specified in the **Preview URL** option. Instead of using a generic document URL for all the chunks, this helps you to fine-tune the responses and provide accurate navigation links that can be helpful to the users. Note that when you specify Preview URL for a chunk, then it takes precedence over document URL.
    

## 

Entities

You can perform the following actions from the Entities tab:

*   Add an entity: To add an entity, click Add Entity. Then, enter the new entity type and click Submit.
    
*   Search an entity: Use the search icon to search for an entity. You can search across all the documents in the document group or a specific document.
    
*   Add values for an entity: To add a value to an entity, select the required entity, enter the value and then click Add.
    
*   Delete value from an entity: Select an entity from the entity list. A list of values specified for the entity is displayed. Click the X mark to delete the value of the entity.
    

## 

Acronyms

In the Acronyms tab, you can manage acronyms (and their full forms) that were identified and extracted from the uploaded content. In cases where the user queries contain either the acronym or the full form, both are located from the knowledge base and displayed in the agent response.

You can perform the following actions from the Acronyms tab:

*   Search an acronym: Use the search icon to search for an acronym or its full form. You can search across all the documents in the document group or a specific document.
    
*   Add an acronym: To add an acronym, click Add Acronym. Then, enter the acronym with its full form and click Submit.
    
*   Delete an acronym: To delete an acronym, click Delete in the Actions column for the specific acronym. You can also search and delete an acronym.
    

## 

Vocabulary

In the **Vocabulary** tab, you can view and manage business vocabularies that are identified and extracted from the uploaded document. Extracted vocabulary helps the developers add synonyms in the context of a business and help normalize the user query. This improves the efficiency of the answering system.

You can perform the following actions in the Vocabulary tab:

*   Search a vocabulary: Use the search icon to search for a vocabulary. You can search across all the documents in the document group or a specific document.
    
*   Add a word: To add a vocabulary, click Add Word. Enter the word that you wish to add to the vocabulary list and click Submit.
    
*   Add synonym for a word: Select a word from the vocabulary list for which you want to add a synonym. Specify the synonym and click Add.
    
*   Delete synonym of a word: Select a word from the vocabulary list. The list of synonyms for the word is displayed. Click the X mark next to a synonym to delete it.
    

## 

Knowledge Graph

You can view a graphical representation of the knowledge base built from the uploaded content from the Knowledge Graph tab. This is view-only information on how various concepts are linked together in the uploaded document.

The default view is the Graph view. You can switch to the Tabular view for a tabular representation of the extracted knowledge base.

##

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions

You can perform the following actions on the Answers skill:

*   [Edit Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#edit-answers-skill)
    
*   [Retrain](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#retrain)
    
*   [Edit](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#edit)
    
    *   [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls)
        
    
*   [Delete the documents or URLs from the Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#delete)
    
*   [Add multiple URLs to the existing Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#add-multiple-urls-bulk-url-upload)
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage answers immediately after creating an Answers skill. See [Create new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the skill before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

Edit Answers skill

You can edit the skill name or description of an Answers skill.

*   In the **Answers skill** page, click the **pencil icon** at the top-left corner next to the skill name.
    
*   Edit the skill details.
    
*   Click **Update** on the pop-up box and click **Save** on the main page.
    

## 

Retrain

You can retrain the knowledge base, if you have edited the details of uploaded documents or URLs, or if the upload has errored out.

*   In the Answers Skill page, navigate to Implementation -> Documents Groups
    
    in the left navigation menu.
    
*   Click a Document group to open it.
    
*   Click the **Retrain** action for a document. A pop-up box is displayed to receive confirmation for retraining. Click Yes, Retrain.This action extracts the content again and creates a new knowledge base.
    

## 

Edit

You can perform the following actions using the Edit option for each uploaded document or URL:

*   Change the PDF file structure.
    
*   Add attributes to facilitate disambiguation.
    
*   Change the template if applicable.
    
*   Add a Preview URL - Indicates the URL that is opened when the user clicks **View more** in the Answers skill response.
    
    *   This field is optional.
        
    *   By default, when the user clicks **View more** in the Answer skill response, the URL or PDF mentioned during upload is opened. If you wish to specify a different URL from the actual URL or PDF that is used to upload knowledge to the Answers skill, then you can use the **Preview URL**.
        
    *   For example, a PDF document has been added to Answers, and the same PDF is hosted on a Sharepoint page or any other CMS. If the desired behavior is for the user to reach the Sharepoint page instead of downloading the PDF, then the **Preview URL** can be added.
        
    *   This option is available only in the **Edit** pop-up window.
        
    

**To edit the document or URL details**:

*   In the Answers Skill page, navigate to Implementation -> Document groups
    
    in the left navigation menu.
    
*   Click a document group to open it.
    
*   Click the **Edit** action for a document, perform the required updates, and click **Save**.
    

### 

Defining attributes for documents or URLs

You can define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation. This is useful when you have multiple documents or URLs that can provide answers to the same user query in an Answers skill. Instead of displaying the response in the form of a Carousel or ListView, you can define attributes that allow you to display the responses is the form of disambiguation option buttons. This aids in better conversational flow to the users and helps users accomplish their tasks easily.

Attributes are also useful to filter responses based on user properties such as region, roles, and products. For example: When a policy document is specific to a certain region, specifying the relevant attribute for that document enables the agent to provide the corresponding policy information to users who are trying to access this information from that specific region.

**Key Points**:

*   Document attributes must be a valid JSON.
    
*   You must define the same JSON attributes in all the documents or URLs for which you wish to facilitate disambiguation.
    
*   If the values for attributes have a common string, it gets trimmed to present cleaner options to the user. For example,
    
    *   Value for 1st document: "Create a chart in Excel"
        
    *   Value for 2nd document: "Create a chart in Powerpoint"
        
    *   Options presented are "Excel" and "Powerpoint", common value gets trimmed.
        
    

**Example**: Using Microsoft Office 365, you can, for example, create a chart, using Excel and Powerpoint. Further, there are multiple actions available for creating a chart within Excel or PowerPoint. If you have an Answers skill with these documents or URLs, then you can define attributes in each of the URLs for displaying the disambiguation options to the user. You can also specify the order of priority for disambiguation responses in the attributes.

**To define attributes:**

*   Identify the set of attributes from the documents or URLs that can be used to categorize the disambiguation responses. This is based on your business model. Considering the example of Microsoft Office 365, you can define "product" as an attribute name, and further within each product, you can define "action" as another attribute name.
    
*   Currently, you can define attributes only in JSON format. The following attributes are supported in the JSON:
    

Property

Description

<<attribute\_name>>

Indicates the name of the attribute that can be used to categorize the disambiguation response.

<<attribute\_name>> -> value

Indicates the attribute value that is displayed in your disambiguation response.

<<attribute\_name>> -> priority

Indicates the order of priority for disambiguation responses. This is useful to maintain a hierarchy of responses during disambiguation:

*   Priority 0 responses are displayed first.
    
*   Based on the user's responses to the priority 0 options, further disambiguation responses in the order of priority is displayed.
    
*   You can define any level of priority.
    
*   If the same attribute has different priorities in different documents, it can cause inconsistent behavior.
    

**Example**: User Query - "How to create a chart?", displays disambiguation responses with priority 0 options. Here, it is "Excel" and "Powerpoint". Further, if the user selects "Excel", then all priority 1 options with value as "Excel" in priority 0 is displayed to the user.

The following JSON is a sample example of attributes for Excel documents or URLs:

Define similar attributes for Powerpoint documents or URLs:

The following agent response is displayed to the user in case of disambiguation:

The following response is displayed when you select **Excel**:

## 

Delete

You can delete the document or URL from the knowledge base, if you have uploaded an incorrect document or URL or if the document is no longer required.

*   In the Answers Skill page, navigate to Implementation -> Document groups
    
    in the left navigation menu.
    
*   Click a document group to open it.
    
*   Click the Delete option. Click OK in the alert message to delete the document or URL from the knowledge base.
    

## 

Add multiple URLs - Bulk URL upload

Currently, in the Avaamo Platform UI, you can upload only one URL at a time. If you wish to build Avaamo Answers using multiple URLs, then you can use the document parsing utility to upload multiple URLs at once.

**Key Point**: Contact Avaamo Support to get access to the "Document Parsing Utility" required to load build URLs in Avaamo Answers skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create new Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

In the **Answers skill** page, navigate to the **Configuration** option in the left navigation menu to view the configuration options. Configuration options in the Answers skill help you to fine-tune your agent's responses.

### 

**Acronym Intro Message**

If this configuration option is selected, any acronyms from a user's query are first expanded in the response. This allows the user to know how the agent has expanded the acronym.

For example, if the user types 'What is ISP?'. The agent would first respond 'I am assuming by ISP you mean Internet Service Provider'.

If this configuration option is not selected, the agent directly responds to user queries that have acronyms without expanding them first. By default, the Acronym Intro Message option is selected.

### 

**Response type**

You can configure the default UI element to be used to display responses. You can choose between the accordion UI element or the Carousel UI element. If Accordion is selected, the main response is displayed using one main card and additional responses using expandable/collapsable links within another card. If Carousel is selected, the response is displayed using a Carousel. See [Skill Messages](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses) for more information on UI elements. By default, the Accordion view is selected.

**Note**: The **Accordion** view is not supported in the Microsoft Teams channel due to limitations on the channel's side; the Carousel view is displayed instead.

See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on deploying your agent in the MS Teams channel.

### 

**Feedback**

Choose **Enable Feedback** if you want to provide the option for users to give feedback on responses using thumbs up or thumbs down. Enabling this option allows you to track users' satisfaction with responses from your Answers skill. By default, Feedback is selected.

### 

**Render as HTML**

Select this option if you want to use rich HTML for the styling content in cards instead of plain text. By default, Render as HTML is selected.

### 

Use document name for card title

This option allows you to enable or disable displaying of the document title in the agent response when the response is rendered as HTML. When you disable **Use document name for card title** toggle, then document title is not displayed and only the section header is displayed in the agent response. See [Sections](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#sections), for more information.

**Notes**:

*   This option works only when **Render as HTML** option is enabled.
    
*   By default, in a newly created Answers skill, **Render as HTML** and **Use document name for card title** toggle options are enabled.
    

Use document name for card title = enabled

Use document name for card title = disabled

### 

**Trim text response**

Select this option if you want only the most relevant few lines from the response to be displayed instead of the whole section. The **Trim text response** toggle is used and applicable only for PDF content and has no effect on the HTML content.

### 

**De-duplicate response**

If there are multiple responses from the same document to a question, select this option to have all the responses combined into one single card. For example, for the question "How to book my flight ticket?", the document may have multiple options such as 'Booking from an agency' and 'Booking from our website'. If you want all the information to be displayed in a single card, choose this option. If you want each of the options to be displayed in different cards, do not choose this option. In occasions where the same information is repeated more than once in a document, selecting this option is useful to combine all the information into the same card. By default, the 'De-duplicate response' option is selected.

### 

**Open in New Tab**

Responses from Answer's skill usually have a **View More** link at the bottom of the response.

If the **Open in New Tab** option is selected, clicking the **View More** link displays information in a new tab in the current browser window. If this option is not selected, clicking the **View More** link displays the information in an independent iframe.

This is specifically helpful for authenticated webpages - where enabling this option opens the page in another tab if the user is already signed in; if this option is not enabled, the login page is displayed in an iframe. By default, the **Open in New Tab** option is not selected.

### 

**Use Preview App**

Responses from Answers skill usually have a **View More** link at the bottom of the response. When this option is selected, a copy of the relevant webpage is loaded onto an iframe on clicking **View More**.

This is specifically helpful for websites that have security restrictions on iframe loading. This option cannot be enabled when the **Open in New Tab** option is enabled. By default, this option is disabled.

### 

Display single table row

Select this option when you only want the row (instead of the entire table) that has the response to the user's question to be extracted and displayed along with the column names. In this case, only the single but entire row that has the response will be extracted and listed such that the information in each cell in a row is displayed against the column name.

Benefits of displaying only a single row instead of the entire table:

*   Allows the user to get a precise response.
    
*   Eliminates the need to scroll through the table to locate the information.
    
*   Allows information to be displayed clearly (without clutter and formatting issues) as there is just one row to be displayed. In addition, the column name against each cell provides a quick and easy understanding of the information displayed.
    

The following illustration depicts the difference between a full table display versus a single table row display in the Answers response for the same user query

Full table

Single table row

### 

Display concise tabular answer

Select this option when you want the responses from tables to be extracted and displayed as plain text - making the response conversational and easy to understand.

For example, the response to the query 'what is the IPO of burger king' is in a table. When this user query is posted to the agent, the response is extracted from the table and displayed as a sentence. The corresponding table from which the information is extracted is displayed below the generated sentence.

If this option is not selected, the entire table that contains the response is displayed and the specific response is highlighted.

### 

Translation configuration

The Translation configuration options are useful when you have the same content uploaded in multiple languages. It helps you to display relevant responses to the users based on the business requirement and languages of the uploaded document. The following options are available in the Configuration -> Translation section:

*   **Get responses only from documents in the query language**: Display responses only from the documents in which the user query is posted.
    
*   **Fallback to all documents**: If the response is not available in the user query language, then translated response, if available in another language document is displayed. By default, this toggle is enabled and functional only when the **Get responses only from documents in the query language** toggle is enabled.
    

**Note**: By default, in a newly created Answers skill the toggle **Get responses only from documents in the query language** is disabled.

Consider that you have the same content uploaded in English and French.

**Example 1**:

*   Get responses only from documents in the query language toggle = Enabled
    
*   Fallback to all documents = Enabled
    
*   User asks a question in French and the response is available in the French document
    
*   **Result**: Agent response from the French document is displayed
    

**Example 2**:

*   Get responses only from documents in the query language toggle = Enabled
    
*   Fallback to all documents = Enabled
    
*   User asks a question in French but the response is not available in the French document and is available in English content.
    
*   **Result**: Agent response from the English document is translated to French and displayed to the user
    

**Example 3**:

*   Get responses only from documents in the query language toggle = Enabled
    
*   Fallback to all documents = Disabled
    
*   User asks a question in French and the response is available in the French document.
    
*   **Result**: Agent response from the French document is displayed
    

**Example 4**:

*   Get responses only from documents in the query language toggle = Enabled
    
*   Fallback to all documents = Disabled
    
*   User asks a question in French but the response is not available in the French document and is available in English content.
    
*   **Result**: Unhandled response
    

### 

Answering mechanism

This option allows you to select a relevant model to be used by the Platform for providing agent responses based on the content type in your knowledge base. The platform uses the selected model to optimize the response and hence results in better accuracy.

The following options are available:

Mechanism

When to use?

Default

For all types of content. This is the default selected mechanism for any newly created Answers skill.

NLP Boost

Best suited for small to medium-sized Answers skills (upto 4000 chunks). If the document is large, then it is recommended to set the `Answering mechanism` to the `Default` option.

Legacy

Also works for all types of content and is selected for Answers skills created earlier to the [v6.2.0 release](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0). Using the Default model is a better option.

### 

**Search as fallback**

When this option is selected, the answer skill attempts to find the best possible responses for a query when an accurate response is not available. In other words, when no accurate responses are found, a simple search is performed to find any related content that may produce possible responses.

### 

**Disambiguation**

Disambiguation is the ability of the agent to distinguish between similar responses based on the context of a chat conversation. For example: Security policy for an organization may be different based on region. When an agent is able to perform disambiguation, the agent can categorize security policies based on regions - thereby improving accuracy in the chat conversation.

**Disambiguate using acronyms:** If this option is selected, the agent disambiguates between acronyms that can be expanded in more than one way. The agent provides the full forms of the acronym for selection. The agent uses the acronyms listed under the Acronyms tab in the knowledge base to perform this disambiguation. If your acronym is there in your knowledge base but is not extracted as an acronym and listed under the Acronyms tab, the agent does not disambiguate. See [Acronym](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#acronyms) for more information. For example, API can be expanded as Application Programming Interface or American Petroleum Institute. When the user's query has the term API, both the expansions are displayed for the user to choose. By default, this option is enabled.

### 

**Filter responses based on query keywords**

Select this option when you want to prioritize responses that have words that closely match the keywords used in the query. This option is provided with the intention to encourage responses that contain exact query keyword matches - thereby discouraging responses that do not contain direct matches. By default, this option is disabled. This option can be combined with the **Use Strict** option to do a strict filter on responses based on query keywords.

### 

**Strict Attribute Match**

Select this option when you want responses to be filtered exclusively based on attributes. This means that only responses from the knowledge base that match the attributes in context is displayed. If no responses are found that match relevant attributes, the agent notifies the user accordingly.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/intro-outro-messages

Intro Outro messages are friendly messages that you would want the agent to display before and after answering a question. The purpose of these messages is to make the conversation experience engaging and pleasant with the user.

For example, when asked a question, you can configure the agent to say something like "Sure, I can help you with that" before answering the question.

### 

Intro Messages

Use Intro messages to configure friendly messages to be displayed before the actual answer or response is displayed to the user's question. Examples of intro messages can be:

*   I can assist you with that.
    
*   Let me look that up for you.
    

### 

Outro Messages

Use Outro messages to configure friendly messages to be displayed after the actual answer or response is displayed to the user's question. Examples of outro messages can be:

*   I hope this helped.
    
*   Is there anything else that i can help you with?

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates

Parsing Templates are used to meaningfully extract chunks of content from information that is uploaded - so that they can be used to create or update the knowledge base of a document group. Every time you upload a document or URL to the Answers skill, a parsing template is required to parse the content that is uploaded.

Accuracy in Answers skill is directly related to how well content is extracted using a parsing template. Hence, ensuring that you are using the correct parsing template is important.

Typically, the Avaamo platform picks a suitable parsing template based on the content you are trying to upload.

Avaamo provides a list of parsing templates that can be used for different file types and content structures. For example, the Font-based hierarchy parsing template is used to extract content from a PDF document that has information organized based on font style.

The list of parsing templates that are used by Answers skill to extract content from documents and webpages is stored in the Parsing Templates page.

Details of the parsing templates that are mentioned in the page:

Name

Description

ID

Database ID for this template. You can use this identifier in the `Content Ingestion APIs -> parsing_template_id` parameter to upload documents or files.

Note that the parsing template identifier can vary based on the instance. When using the parsing template identifier in the APIs, for example, in the Content Ingestion API, pick the parsing template identifier relevant to your instance. See [Content Ingestion APIs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.

File Name

Name of the template

File Type

The file type for which this parsing template can be used when uploading.

Last Updated

The date on which this template was last uploaded.

Actions

Only the View action is available.

### 

Create a custom parsing template

In addition to the parsing templates provided by Avaamo, you can create and add your own template. Click **Add New** to add your own template.

Provide the following details in the **Create Parsing Template** dialog box.

*   **Name:** Name of the custom template
    
*   **Key:** Unique key for the template
    
*   **File type:** Choose a file type from the given options
    
*   **Template JSON:** The JSON file or template that will be used for parsing
    

**Notes**:

*   Creating a custom parsing template is use-case-specific. Contact Avaamo Support, for further assistance.
    
*   After you save the custom parsing template, a unique identifier is generated by the platform to identify the parsing template. You can use this identifier in the `Content Ingestion APIs -> parsing_template_id` parameter to upload documents or files. See [Content Ingestion APIs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.
    

### 

View, edit or delete a parsing template

You can edit or delete custom parsing templates that you create. However, you can only view the inbuilt parsing templates that are provided by Avaamo.

To view an inbuilt parsing template, click on the **View** action for the parsing template. To delete a custom parsing template, click on the **Delete** action for the parsing template.

Steps to edit a custom template:

1.  Click on the **Edit** action for the parsing template.
    
2.  Update the **Name**, **Key**, **File Type** or **Template JSON**.
    
3.  Click **Save** to update the changes.
    

### 

Inbuilt parsing templates

Details of the inbuilt parsing templates provided by Avaamo:

Name

Key

File Type

Power Point Presentation

PptxDocumentTemplate

pptx

MS Office Word Document

DocxDocumentTemplate

Docx

Word Document

DocDocumentTemplate

Doc

Font based hierarchy, example bold, italics, all caps

DocumentTemplateBOW

PDF

Indexed Sections

DocumentTemplateUBSStaffVetting

PDF

Chapters, Articles, Sections, Appendices

DocumentTemplateSamsungDDStudentInsurance

PDF

Hierarchy in the form of roman Letters, numbers, and alphabet bullet points

DocumentTemplateUBSBasel

PDF

Indexed Sections, example 1, 1.1, 1.2 ...

DocumentTemplateEricsson

PDF

HTML document - H1, H2, H3 etc.

avaamodocs

URL

CSV document - QnA format

QAExcelDocumentTemplate

CSV

Excel document

ExcelDocumentTemplate

Excel file

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/test-avaamo-answers

Once the documents or URLs are uploaded successfully to your skill, you can test to ensure the extracted knowledge provides appropriate responses for user queries. Further, you can view and fine-tune the knowledge base for providing more accurate responses.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   If you wish to test an already created agent, then navigate to the Agents tab in the top menu, search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
    
*   Currently, you can test the Answers skill only from the Agent page.
    

**To test the skill:**

*   In the Agent page, navigate to `Test -> Simulator` option in the left navigation menu. Alternatively, you can also test using the agent icon in the bottom right corner.
    
*   You can now ask queries and test if you are receiving appropriate responses from user queries. Also, note that certain keywords from the user queries are also highlighted in the response.
    

*   Click `View More` to view the actual section in the document or the URL.
    

**Key Points**:

*   All the conversations are stored in the Conversation history and you can view the same to fine-tune the knowledge base. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.
    
*   The `View more` link is visible for all responses, except for cases where a document has been uploaded using the `QAExcelDocumentTemplate` parsing template. Also, note that for any other CSV/XLSX document, clicking the "View more" link results in downloading a local copy of the uploaded CSV or XLSX document. See [Parsing templates](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates), for more information.
    

### 

Key points on "View more" Scrolling

If you have uploaded URLs (web pages) to the Answers skill, then the ability to scroll to a particular section in the webpage depends on the availability of one of the following in the webpage:

*   **Permalinks**: If the website supports permalinks, then the same can be used in the "View more" link to land at the target section of the page. Example: https://docs.avaamo.com/v5/#quick-starts
    
*   **Text search using (#:~:text=)**: This requires browser support. In this case, the "View more" link scrolls and highlights the first occurrence of the specified text:
    
    *   Chrome version 80 or above
        
    *   Unique header or part of the text for a section of the webpage. Example: https://docs.avaamo.com/v5/#:~:text=Quick%20Starts.
        
    

### 

Key points on highlighting in Answer responses

The following are key points to note for highlighting in the Answer responses:

*   Answer response highlighting works best when the user queries lead to direct answers from the knowledge base, typically, fact-based responses.
    
*   Highlighting works best when there are user queries with full proper statements rather than just sub-phrases.
    
    *   Positive example: Where is the IT support desk?
        
    *   Negative example: IT support desk
        
    
*   The presence of extremely business-specific terminology reduces the probability of getting a highlighted response.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/troubleshooting-tips

In case you are unable to receive the expected response from the Answers skill, refer to the following troubleshooting tips:

*   Check if the document or URL is uploaded successfully, without any errors. In case of any errors, click Error in the Status column to view more details.
    
*   For uploading the PDF documents, ensure that the appropriate file format is selected based on the provided options. See [File Format](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1#to-upload-pdf-documents), for more information. If you have specified incorrect file format, then [edit](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#edit) the format and [retrain](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#retrain) the knowledge base.
    
*   For uploading from URL, ensure that the URL is publically accessible without any firewall restrictions.
    
*   Try to [retrain](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#retrain) the errored-out documents or URLs, if required. If the error persists, contact the Avaamo Operation team, for more details.
    
*   If the upload is successful and yet you are not receiving the expected responses, then
    
    *   Click the eye icon below the user query to know the intent mapped to the query.
        
    *   In the insights pop-up, you can know if the query is mapped to the required intent type, name, response node, and the language of the query.
        
    *   Try to edit the knowledge base in any of the following ways:
        
        1.  Add additional training data to the extracted sections.
            
        2.  Add more values for the entities.
            
        3.  Add additional acronyms, if required.
            
        4.  Add additional synonyms for the extracted vocabulary.
            
        
        See [View and Edit Knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/improving-accuracy-in-answers-skill

There are some important techniques that can be used to improve the accuracy of the Answers skill.

### 

Appropriate parsing templates

Accuracy in Answers skill is directly related to how precisely the extraction happens. This extraction completely depends on the parsing templates that are being used. Specially in HTML pages where there are header, footers, and navigation panels, it is important to identify the main content for extraction and use the appropriate parsing template. If the available templates do not work well, it is necessary to create custom templates.

Before using a parsing template for bulk upload of documents, it is recommended to try it out with a few documents and check if the extraction works fine.

### 

Use APIs for bulk content upload

Whenever the volume of content to be ingested is large, such as content from CMS, it is better to use APIs to integrate with the CMS.

Using APIs for bulk content upload has the following advantages:

*   Avoid the creation of parsing templates.
    
*   Avoid the necessity to update maintain parsing templates to match the user interface - in cases where the design of the web pages changes.
    
*   Integration with the source system using API allows the knowledge base to be updated as and when the source content is updated.
    

### 

Adding custom domain-related terms

Adding domain-related terms as synonyms to words in the uploaded content. Sometimes, the answers skill may not be able to extract responses because terms and verbiages in the content might not be domain-specific. Adding domain-related terms as synonyms can improve accuracy. For examples, using synonyms like card, chip or processor when the content is about CPUs, the system can extract the relevant information easily.

### 

Using disambiguation strategies

Disambiguation is the ability of the agent to distinguish between similar responses based on the context of a chat conversation. For example: The security policy for an organization may be different based on region. When an agent is able to perform disambiguation, the agent can categorize security policies based on regions - thereby improving accuracy in the chat conversation.

You can disambiguate using:

*   Attributes: See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls)
    
*   Acronyms: See [Disambiguation](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#disambiguation)
    
*   Training data: See [Disambiguation](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#disambiguation)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/keeping-content-updated

If Answers skill is integrated with a content source or a CMS, there are two ways to keep the knowledge base updated whenever there are changes in the source content:

*   If you use webhooks to integrate with your content source, the webhooks updates the Answers skill knowledge base whenever the source content is updated.
    
*   Cron jobs can be configured to run periodically to look through the indexes or sitemaps of the content source to identify the content that has been updated and subsequently update the Answers skill knowledge base. Detailed information on how to configure cron jobs is available within the document parsing utility.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-faqs

This article lists a few frequently asked questions related to Answers skill:

### 

1\. What are the types of files I can load in the Answers skill?

The following are the different ways of uploading content:

*   Directly upload PDF, Excel, or CSV files.
    
*   Upload content from any externally accessible URL.
    
*   To upload .doc or .docx files, you can convert these files to PDF and then upload them.
    
*   Use CMS Webhooks to upload content from a Content Management System.
    
*   Use the document parsing utility to ingest content from websites
    
*   Upload video transcripts.
    
*   Upload information that is in the FAQ format.
    

See [Upload Content](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1) for more information.

### 

2\. Is there any limit on the number of URLs or PDF sizes?

There is no limit on the number of URLs that can be uploaded using the Answers skill. Further, you can upload multiple PDF documents and each PDF document can be more than 1000 pages. See [Key Points](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1#key-points), for more information.

### 

3\. How do I handle disambiguation in Answers skill?

Given following are the main ways to handle disambiguation in Answers skill:

*   You can define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.
    
*   You can disambiguate acronyms that can be expanded in more than one way.
    
*   You can disambiguate using training data in different sections.
    

### 

4\. Can we link this to any content management system?

Yes, you can use CMS Webhooks to pull content from a Content Management System and push it to Avaamo Platform. See [Content ingestion using Webhooks](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion) for more information.

### 

5\. What if my content is in Tabular format?

You can directly upload Excel or CSV files. Using the parsing utility, you can also upload PDF and HTML files that have tables in them. Responses to user queries can be fetched from the information in tables. See Tabular Answering for more information.

### 

6\. What languages are supported currently in Answers?

The Avaamo platform provides multilingual support for agent development in any of the Avaamo-supported languages, with English (en-US) as the default language. Avaamo Answers can also ingest content in other languages.

Answers can also translate information stored in other languages to the language in which the user is conversing and respond accordingly. For example, if the agent is conversing in Spanish, the skill can translate information stored in English and respond in Spanish.

### 

7\. Will Answers search text present on images?

No.

### 

8\. How to provide document metadata in Answers skill?

You can define attributes for the uploaded documents or URLs in your Answers skill. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

### 

9\. Does the user feedback on the Answer skill response be automatically trained back in the skill?

Currently, the feedback can be used only for analytical purposes only. If a user gives negative feedback on a card response for an Answers skill, you can check the feedback, update, tune, and retrain the Answers skill.

### 

10\. How to improve the accuracy of the Answers skill?

Please see the Improving Accuracy in Answers Skill page.

### 

11\. How does the agent disambiguate between responses that are found in more than one Answers skill?

When a response to a user query is found in multiple answers skills, the agent presents the names of the answers skills that have the response. Based on the answer skill that the user selects, the corresponding response is displayed.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis

[Answer prediction API](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/answer-prediction-api)[Content ingestion APIs (Recommended)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended)[Content ingestion APIs (Backward Compatibility)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-backward-compatibility)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/answer-prediction-api

## 

Post a query and get the response from Answers skill

`POST` `https://mx.avaamo.com/answers/v2/process-query`

Contact Avaamo Support to know the server name corresponding to your instance.

#### 

Headers

Name

Type

Description

access-token\*

String

User access token. You can get the user access token from the Settings -> Users page. Users must have at least view permission on the agent.

See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information on how to get the user access token.

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information on agent permissions.

#### 

Request Body

Name

Type

Description

kp\_id\*

Array

The Answers skill Id you want to predict the answer on. You can pass only one skill Id in the query parameter.

You can get the skill Id from the View/Edit Document Group pop-up window. See [Document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups#view-edit-a-document-group), for more information.

`Example: kp_id = [123]`

query\*

String

The query you want to predict the answer of.

If you are using this API in a JS node, then you can use [context.last\_message](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/get-last-message) to get the user query.

query\_id\*

String

Unique identifier for the query.

If you are using this API in a JS node, then you can use `context.message_uuid` to get the query identifier.

query\_insights -> detected\_language \*

String

Locale of the user query. See [Web - Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more detailed on supported languages.

conversation\_id\*

String

Unique identifier of the conversation.

You can get the conversation identifier from:

1\. [Conversation history URL](/user-guide/how-to/build-agents/debug-agents#using-conversation-history)

2\. [Get Messages API](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages)

3\. Message object when you are using the `Avaamo.onBotMessage` [callback function in the Web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/web-channel-callback-functions).

4\. If you are using this API in a JS node, then you can use `context.conversation_uuid`

request\_uuid\*

Strinf

Unique identifier of the request.

200: OK Success

Copy

    {
      "carousel": {
        "cards": [
          {
            "card": {
              "answering_score": 0.37092517817015064,
              "attributes": {},
              "chunk_id": 87223,
              "description": "<div class=\"dockp\"><h1>Privacy Policy</h1><p> </p></div>",
              "doc_id": 9821,
              "hybrid_score": 1.0996794251079722,
              "intent_key": "EeXUNgRR",
              "is_acronym": false,
              "language": "en-US",
              "links": [
                {
                  "title": "View More",
                  "type": "web_page",
                  "url": "https://www.google.com/?web_channel/documents"
                }
              ],
              "page_number": 1,
              "section_headers": [
                {
                  "chunk": 87223,
                  "header": "Terms of use - Chatbot Platform- Chatbots for Customer Service",
                  "id": 163518,
                  "rank": 10,
                  "text": "Terms of use - Chatbot Platform- Chatbots for Customer Service",
                  "translated_text": null
                },
                {
                  "chunk": 87223,
                  "header": "Privacy Policy",
                  "id": 163519,
                  "rank": 6,
                  "text": "Privacy Policy",
                  "translated_text": null
                }
              ],
              "text": false,
              "title": "Privacy policy"
            }
          }
        ],
        "description": "",
        "title": "Response from DocKP Engine"
      },
      "no_answer": false
    }

cURL

node JS

### 

Response attributes

The following is a sample API response:

#### 

Response Body

Attribute

Description

Type

Carousel -> Cards

Array of the response predicted for the given user query.

Array of JSON Object

#### 

Card response object

Attribute

Description

Type

chunk\_id

Unique chunk identifier

String

description

Description of the response returned

String

doc\_id

Unique document identifier

String

intent\_key

Unique intent identifier of the matched response.

String

language

Indicates the language of the response

String

links

View more link array of the matched response.

Array of JSON Object

section\_headers

Section headers array from the knowledge base of the matched response in the document.

Array of JSON Object

### 

Examples

The following is a sample POST request to use Answer prediction API:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended

## 

Upload document (HTML, URL) to the Answers knowledge base

`POST` `https://mx.avaamo.com/content-ingestion/parse-document`

#### 

Path Parameters

Name

Type

Description

mx.avaamo.com\*

URL

Avaamo instance where the data is to be uploaded. Example: https://m0.avaamo.com

Contact Avaamo Support to know the server name.

#### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type\*

json

application/json

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups#view-edit-a-document-group), for more information.

document\*

JSON Object

Document object that needs to be uploaded

document -> name\*

String

Name of the document.

Max length: 255 characters.

document -> type\*

String

Type of the document.

Supported values: html, url

document -> content

String

Content of the document HTML body/Text/Base64 text of PDF file.

This field is mandatory for HTML document types but not required for URLs.

Content must in the format:

`<title>Name of document</title><body>valid html content</body>`

document -> attributes

Key-value

Define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation or filtering.

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

document -> preview\_url\*

String

URL that needs to be opened when the user clicks in the response.

You can get the preview\_url from the Document group -> Document -> View/Edit page.

document -> language

String

Language of the document.

Default value: en-US

document -> parsing\_template

JSON

Template to be used to parse the document. This is a JSON file that can be configured as a template while parsing a URL with the purpose of better extraction of content from the URL during the parsing process.

Default value: default parsing template

Contact Avaamo Support to get access to the parsing template repository.

Note instead of defining the parsing template in the document -> parsing\_template object, it is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload. See [Parsing template page](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates), for more information.

document -> parsing\_template\_id\*

String

Specify the parsing template identifier that must be used to parse the document. You can get the identifier from the [Parsing template page](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates).

Default value: default parsing template identifier is used.

Note instead of defining the parsing template in the document -> parsing\_template object, it is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload.

parsing\_template -> template\_json

JSON

Custom template to parse a URL.

parsing\_template -> key

String

Key for inbuilt parsing template, if not provided custom template is used. See [Parsing template](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates#inbuilt-parsing-templates), for more information.

201: Created Successful request

400: Bad Request Bad request indicates payload is wrong

**Key points**:

*   Ensure that the right content is posted during upload as the HTML content is sanitized before processing.
    
*   All content must be present in the following tags: "h1", "h2", "h3", "h4", "h5", "p", "img", "span", "td", "figure", "ol", "ul", "dd", "dt", "a", "table", "details", "summary". This list can be modified by using parsing templates.
    
*   The maximum request size should not exceed 5 MB. Contact Avaamo Support, if the size exceeds the limit.
    
*   Password-protected PDFs are not supported.
    
*   The images inside HTML must be base64 encoded or must be public images.
    

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response for uploading a document:

#### 

Response Body

Attribute

Description

Type

chunks

Chunks of the uploaded document

Integer

response\_text -> created\_at

Created Datetime of document

String

response\_text -> document\_group

Knowledge pack identifier where document is uploaded

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> document\_properties

Document attributes, if any.

JSON

response\_text -> file\_type

Type of file uploaded

String

response\_text -> id

Document identifier

String

response\_text -> language

Document language identifier

String

response\_text -> language\_string

Document language code corresponding to the identifier

String

response\_text -> name

Document name

String

response\_text -> parsing\_template

Parsing template used to upload document

String

response\_text -> source\_file

Source file of the uploaded document, if any.

String

response\_text -> source\_url

Source URL of the uploaded document, if any.

String

response\_text -> status

UPLOADED/ERROR

String

response\_text -> updated\_at

Updated Datetime of document

String

response\_text -> updated\_by

User who updated the document

String

response\_text -> uuid

Unique identifier of the uploaded document

String

status

true if the document was uploaded successfully

String

last\_error

Last error encountered with respect to the document

String

### 

Examples

The following table lists a few sample use cases for uploading a document to the Answers skill:

Use case

Request payload

Uploading a document using URL

{

"document\_group\_id": 1,

"api\_server": "https://mx.avaamo.com",

"document": {

"name": "Avaamo Docs",

"type": "url",

"preview\_url": "https://docs.avaamo.com/user-guide/",

"parsing\_template\_id": "6"

}

}

Uploading a document using HTML

{

"document\_group\_id": 1,

"document": {

"content": "<title>Terms of Use</title><body><h1>Privacy Policy</h1><p>Avaamo, Inc. ('Avaamo') provides this Privacy Policy to inform you of our policies and procedures regarding the collection, use and disclosure of Personally Identifiable Information that we may obtain through the use of Avaamo products such as Avaamo Platform ('Software'), applications such as Avaamo Messenger ('Application'), and access to www.avaamo.com, referred to as ('Site').</p></body>",

"name": "Terms of Use",

"parsing\_template\_id": 6,

"type": "html",

"preview\_url": "https://avaamo.ai/privacy/",

"attributes": {"product": {"value": "Avaamo", "priority": 0}}

}

}

## 

Upload different types of files (pdf, docx, pptx, xlsx) to the Answers knowledge base

`POST` `https://mx.avaamo.com/content-ingestion/upload-file`

#### 

Path Parameters

Name

Type

Description

mx.avaamo.com\*

URL

Avaamo instance where the data is to be uploaded. Example: https://m0.avaamo.com

Contact Avaamo Support to know the server name.

#### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups#view-edit-a-document-group), for more information.

name

String

Name of the file.

Max length: 255 characters.

type

String

Type of the file.

Supported types: pdf, docx, pptx, xlsx

attributes

Key-value

Define attributes for the uploaded file in your Answers skill to facilitate disambiguation or filtering.

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

language

String

Language of the uploaded file.

Default value: en-US

parsing\_template

JSON

Template to be used to parse the document. This is a JSON file that can be configured as a template while parsing a URL with the purpose of better extraction of content from the URL during the parsing process.

Default value: default parsing template

Contact Avaamo Support to get access to the parsing template repository.

Note instead of defining the parsing template in the document -> parsing\_template object, it is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload. See [Parsing template page](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates), for more information.

parsing\_template\_id\*

String

Specify the parsing template identifier that must be used to parse the document. Use the right parsing template according to type of file you are uploading. You can get the identifier from the [Parsing template page](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates).

Default value: default parsing template identifier is used.

Note instead of defining the parsing template in the document -> parsing\_template object, it is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload.

parsing\_template -> template\_json

JSON

Custom template to parse a URL.

parsing\_template -> key

String

Key for inbuilt parsing template, if not provided custom template is used. See [Parsing template](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates#inbuilt-parsing-templates), for more information.

file\*

File object

The actual file that you wish to upload.

parsing\_lib

String

parsing\_lib for pdf extraction. For tabular parsing use pdftotree.

Default: pdfbox

201: Created Successful request

400: Bad Request Bad request indicates payload is wrong

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response for uploading a document:

#### 

Response Body

Attribute

Description

Type

status

true if the document was uploaded successfully

Boolean

response\_text -> id

Unique file identifier

String

response\_text -> name

File name

String

response\_text -> uuid

Unique identifier of the uploaded file. This is for internal use only.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> document\_properties

Document attributes, if any.

JSON

response\_text -> status

UPLOADED/ERROR

String

response\_text -> language

Document language identifier

String

response\_text -> language\_string

Document language code corresponding to the identifier

String

response\_text -> document\_group

Knowledge pack identifier where file is uploaded

String

response\_text -> source\_file

Source of the uploaded file

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

String

response\_text -> updated\_at

Updated Datetime of file

String

response\_text -> updated\_by

User who updated the file

String

last\_error

Last error encountered with respect to the document

String

### 

Examples

The following table lists a few sample use cases for uploading a document to the Answers skill:

Use case

Request payload

Uploading a word document

## 

Delete the document from the specified document group in the Answers skill.

`DELETE` `https://mx.avaamo.com/content-ingestion/delete-document`

#### 

Path Parameters

Name

Type

Description

mx.avaamo.com\*

URL

Avaamo instance where the data is to be uploaded. Example: https://m0.avaamo.com

Contact Avaamo Support to know the server name.

#### 

Headers

Name

Type

Description

content-type\*

JSON

application/json

access-token\*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

User must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information on agent permissions.

#### 

Request Body

Name

Type

Description

document\_group\_id\*

String

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

preview\_url

String

URL used to upload the document to the Answers skill. Use this if you have uploaded a document using a URL and wish to delete the document from the Answers skill.

You can get the preview URL from the Document group -> Document -> Edit pop-up window.

You must specify either preview\_url or document\_id in the delete payload request.

See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

document\_id

String

Unique identifier of the uploaded document to the Answers skill. Use this if you have uploaded a document directly to the Answers skill and wish to delete the document from the Answers skill.

You can get the document\_id from the Document group -> Document -> Edit pop-up window. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

You must specify either preview\_url or document\_id in the delete payload request.

200: OK Successful request

400: Bad Request Bad request indicates payload is wrong

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response for uploading a document:

#### 

Response Body

Attribute

Description

Type

status

true if the document was uploaded successfully

Boolean

response\_text -> id

Unique file identifier

String

response\_text -> name

File name

String

response\_text -> uuid

Unique identifier of the uploaded file. This is for internal use only.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> document\_properties

Document attributes, if any.

JSON

response\_text -> status

UPLOADED/ERROR

String

response\_text -> language

Document language identifier

String

response\_text -> language\_string

Document language code corresponding to the identifier

String

response\_text -> document\_group

Knowledge pack identifier where file is uploaded

String

response\_text -> source\_file

Source of the uploaded file

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

String

response\_text -> updated\_at

Updated Datetime of file

String

response\_text -> updated\_by

User who updated the file

String

last\_error

Last error encountered with respect to the document

String

### 

Examples

The following table lists a few sample use cases for deleting a document from the Answers skill:

Use case

Request payload

Delete a document that is uploaded using a URL

{

"document\_group\_id": 999,

"api\_server": "https://mx.avaamo.com", "preview\_url": "https://avaamo.ai/privacy/"

}

Delete a document uploaded that is uploaded directly

{

"document\_group\_id": 999,

"api\_server": "https://mx.avaamo.com", "document\_id": 556

}

## 

Update the document name and attributes

`PUT` `https://mx.avaamo.com/content-ingestion/update-document`

#### 

Path Parameters

Name

Type

Description

mx.avaamo.com\*

URL

Avaamo instance where the data is to be uploaded. Example: https://m0.avaamo.com

Contact Avaamo Support to know the server name.

#### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type\*

JSON

application/json

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page.

See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

document\*

JSON Object

Document object that needs to be uploaded

document -> name

String

Name of the document.

Max length: 255 characters.

document -> attributes

Key-value

Define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation or filtering.

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

document -> preview\_url\*

String

URL that needs to be opened when user clicks in the response. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

200: OK Successful request

400: Bad Request Bad request indicates payload is wrong

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response for updating the document:

#### 

Response Body

Attribute

Description

Type

status

true if the document was uploaded successfully

Boolean

response\_text -> id

Unique file identifier

String

response\_text -> name

File name

String

response\_text -> uuid

Unique identifier of the uploaded file. This is for internal use only.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> document\_properties

Document attributes, if any.

JSON

response\_text -> status

UPLOADED/ERROR

String

response\_text -> language

Document language identifier

String

response\_text -> language\_string

Document language code corresponding to the identifier

String

response\_text -> document\_group

Knowledge pack identifier where file is uploaded

String

response\_text -> source\_file

Source of the uploaded file

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

String

response\_text -> updated\_at

Updated Datetime of file

String

response\_text -> updated\_by

User who updated the file

String

last\_error

Last error encountered with respect to the document

String

### 

Examples

The following table lists a few sample use cases for updating documents to the Answers skill:

Use case

Request payload

Update the name of the document

{

"document\_group\_id": 1,

"api\_server": "https://mx.avaamo.com", "document": {

"name": "Avaamo User Manual",

"type": "url",

"preview\_url": "https://docs.avaamo.com/user-guide/"

}

}

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-backward-compatibility

**Note**: All the content ingestion APIs listed in the article are maintained solely for backward compatibility and are limited to support until version 6.4.0. However, these APIs will soon be marked as deprecated. Starting from version 7.0.0 onwards, it is recommended to transition to an enhanced and more efficient version of content ingestion APIs to ensure improved support. See [Content ingestion APIs (Recommended)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.

## 

Upload document (HTML, URL) to the Answers knowledge base.

`POST` `https://answers-ingest.aiavaamo.com/api/document`

#### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type\*

json

application/json

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups#view-edit-a-document-group), for more information.

api\_server\*

String

Avaamo instance where the data is to be uploaded. Example: https://mx.avaamo.com

Contact Avaamo Support to know the server name.

document\*

JSON Object

Document object that needs to be uploaded

document -> name\*

String

Name of the document.

Max length: 255 characters.

document -> type\*

String

Type of the document.

Supported values: html, url

document -> content

String

Content of the document HTML body/Text/Base64 text of PDF file.

This field is mandatory for HTML document types but not required for URLs.

Content must in the format:

`<title>Name of document</title><body>valid html content</body>`

document -> attributes

Key-value

Define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation or filtering.

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

document -> preview\_url\*

String

URL that needs to be opened when the user clicks in the response.

You can get the preview\_url from the Document group -> Document -> View/Edit page.

document -> language

String

Language of the document.

Default value: en-US

document -> parsing\_template

JSON

Template to be used to parse the document. This is a JSON file that can be configured as a template while parsing a URL with the purpose of better extraction of content from the URL during the parsing process.

Default value: default parsing template

Contact Avaamo Support to get access to the parsing template repository.

parsing\_template -> template\_json

JSON

Custom template to parse a URL.

parsing\_template -> key

String

Key for inbuilt parsing template, if not provided custom template is used. See [Parsing template](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates#inbuilt-parsing-templates), for more information.

200: OK Successful request

**Key points**:

*   Ensure that the right content is posted during upload as the HTML content is sanitized before processing.
    
*   All content must be present in the following tags: "h1", "h2", "h3", "h4", "h5", "p", "img", "span", "td", "figure", "ol", "ul", "dd", "dt", "a", "table", "details", "summary". This list can be modified by using parsing templates.
    
*   The maximum request size should not exceed 5 MB. Contact Avaamo Support, if the size exceeds the limit.
    
*   Password-protected PDFs are not supported.
    
*   The images inside HTML must be base64 encoded or must be public images.
    

cURL

node.JS

### 

Response attributes

The following is a sample API response for uploading a document:

#### 

Response Body

Attribute

Description

Type

chunks

Chunks of the uploaded document

Integer

response\_text -> created\_at

Created Datetime of document

String

response\_text -> document\_group

Knowledge pack identifier where document is uploaded

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> id

Document identifier

String

response\_text -> language

Document language

String

response\_text -> name

Document name

String

response\_text -> parsing\_template

Parsing template used to upload document

String

response\_text -> source\_file

Source file of the uploaded document, if any.

String

response\_text -> source\_url

Source URL of the uploaded document, if any.

String

response\_text -> status

UPLOADED/ERROR

String

response\_text -> updated\_at

Updated Datetime of document

String

response\_text -> updated\_by

User who updated the document

String

response\_text -> uuid

Unique identifier of the uploaded document

String

status

true if the document was uploaded successfully

String

### 

Examples

The following table lists a few sample use cases for uploading a document to the Answers skill:

Use case

Request payload

Uploading a document using URL

{

"document\_group\_id": 1,

"api\_server": "https://mx.avaamo.com",

"document": {

"name": "Avaamo Docs",

"type": "url",

"preview\_url": "https://docs.avaamo.com/user-guide/"

}

}

Uploading a document directly with HTML content

{

"document\_group\_id": 1,

"api\_server": "https://mx.avaamo.com",

"document": {

"content": "`<title>Name of document</title><body><p>valid html content</p></body>`",

"name": "Terms of Use",

"type": "html",

"preview\_url": "https://avaamo.ai/privacy/"

}

}

## 

Delete the document from the specified document group in the Answers skill.

`DELETE` `https://answers-ingest.aiavaamo.com/api/document`

#### 

Headers

Name

Type

Description

content-type\*

\-

application/json

access-token\*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

User must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information on agent permissions.

#### 

Request Body

Name

Type

Description

document\_group\_id\*

String

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

preview\_url

String

URL used to upload the document to the Answers skill. Use this if you have uploaded a document using a URL and wish to delete the document from the Answers skill.

You can get the preview URL from the Document group -> Document -> Edit pop-up window.

You must specify either preview\_url or document\_id in the delete payload request.

See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

api\_server\*

String

Avaamo Answers instance.

Contact Avaamo Support to get the API server URL.

document\_id

String

Unique identifier of the uploaded document to the Answers skill. Use this if you have uploaded a document directly to the Answers skill and wish to delete the document from the Answers skill.

You can get the document\_id from the Document group -> Document -> Edit pop-up window. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

You must specify either preview\_url or document\_id in the delete payload request.

200: OK Successful request

### 

Code request snippets

cURL

node.JS

### 

Examples

The following table lists a few sample use cases for deleting a document from the Answers skill:

Use case

Request payload

Delete a document that is uploaded using a URL

{

"document\_group\_id": 999,

"api\_server": "https://mx.avaamo.com", "preview\_url": "https://avaamo.ai/privacy/"

}

Delete a document uploaded that is uploaded directly

{

"document\_group\_id": 999,

"api\_server": "https://mx.avaamo.com", "document\_id": 556

}

## 

Update the document name and attributes

`PUT` `https://answers-ingest.aiavaamo.com/api/document`

#### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type\*

json

application/json

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page.

See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

api\_server\*

String

Avaamo instance where the data is to be uploaded.

Example: https://mx.avaamo.com

document\*

JSON Object

Document object that needs to be uploaded

document -> name

String

Name of the document.

Max length: 255 characters.

document -> attributes

Key-value

Define attributes for the uploaded documents or URLs in your Answers skill to facilitate disambiguation or filtering.

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

document -> preview\_url\*

String

URL that needs to be opened when user clicks in the response. See [Create document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups), for more information.

200: OK Successful request

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response for updating the document:

#### 

Response Body

Attribute

Description

Type

status

`true` if the document is updated successfully else `false`.

String

### 

Examples

The following table lists a few sample use cases for updating documents to the Answers skill:

Use case

Request payload

Update the name of the document

{

"document\_group\_id": 1,

"api\_server": "https://mx.avaamo.com", "document": {

"name": "Avaamo User Manual",

"type": "url",

"preview\_url": "https://docs.avaamo.com/user-guide/"

}

}

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer

[Build and manage Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill)[Configure Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/configure-q-and-a-skill)[Test Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/test-q-and-a)[Debug Q&A skill](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/troubleshooting-tips)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill

[Add questions and answers](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages)[Perform common actions](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages

In the Questions and Answers section, you can create user intents (questions) and skill responses (answers) manually or by importing a CSV file with Q&A. See [Import Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#import), for more information.

**Key Points**:

*   When you add a Q&A and save it, an intent identifier is generated for each Q&A. You can use this in any JS code customizations or in Query insights for getting a closer look at the user conversations with the agent.
    
*   Multiple developers can add questions and answers simultaneously in the same Q&A skill, encouraging faster development of the skill. As a best design practice, it is recommended to distribute a set of intents among developers, so that it is easy to maintain and manage and results in seamless collaboration.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

**Add questions and answers**

*   In the Q&A page, click Question & Answers in the Implementation tab.
    
*   By default, the response of the default language as specified in the agent configuration is displayed.
    
*   Select the channel for which you wish to add the Q&A. Using this feature, you can add different customized responses for different channels as per your requirement. If you have deployed your agent in a specific channel for which you have not configured any response, then the response as specified in the "Default" option is considered. **Example**: Consider that you have deployed your agent in Web, Android, and iOS channels and you have configured responses only for the Android channel. For the Web and iOS channels, the responses as specified in the Default option are displayed.
    

**Note**: Only those channels that are enabled for your account or company are displayed in the Channel dropdown. If you wish to enable a channel, then contact Avaamo Support for further assistance.

*   If you have configured languages in your skill, select the language in which you wish to add the response. See [Add language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.
    

**Key Point:** With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination. Example: You can add a response specific to the Android channel in the French language.

*   Click the plus icon to add user questions and the skill responses (answers).
    
*   Add required [Intent](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages#intent) and [Prompt details](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages#prompt-details).
    
*   Click **Save** to save the Q&A.
    
*   You can continue to add questions and responses as required.
    

Your Q&A skill is ready for testing. See [Test Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/test-q-and-a), for more information. You can also add languages, edit intents, and responses, and import Q&A. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions), for more information.

**Note**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

### 

**Intent**

Specify the user questions in the Intents tab:

Parameters

Description

Maximum length

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name.

By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

Note that the intent key must be unique within the skill.

20

characters

Intent name

Indicates the name of the intent.

Each intent name must be unique within the agent.

191

characters

Training phrases

Indicates the training data or variations for the intent. Type the required training data and press enter. You can add multiple training data to the intent as required. There is no limit on the number of training data or training phrases that can be added to an intent.

It is recommended that you follow the recommended best practices for adding training data. See [Intents and training data](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases-training-utterances-or-training-data), for more information.

Each of

300 characters

**Notes**:

*   Each intent name must be unique.
    
*   The Intent name can be upto 191 characters.
    
*   You can specify Training phrases upto 300 characters.
    
*   If you have multiple intents with exactly the same training data, then the latest intent response is displayed to the user.
    
*   If you have multiple intents with similar training data, then the query goes for disambiguation.
    

### 

Prompt details

In the **Prompt details** tab, specify the skill responses (answers) to user questions. The following skill responses are supported - Text, Quick Reply, Card, Carousel, Listview, Javascript. You can also add filters to your responses and tag the responses for analytics. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information. Note that [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) options available for the Dialog skill are not applicable to the Q&A skill.

## 

Add Intro and Outro messages

You can also specify Intro and Outro messages in the Question & Answers page:

*   Intro messages: Displayed before an answer to the user question. All skill messages can be added to an intro message. Typically, this is used to acknowledge the user question such as "Thank you for showing interest".
    
*   Outro messages: Displayed after an answer to the user question. All skill messages can be added to an outro message. Typically, this is used to collect feedback. You can also create a JS to navigate to a skill and a node.
    

## 

Example: Add response filters

Consider that you wish to display different responses for the same Q&A intent based on the user location property:

User query

Indian user

US user

Where is your store?

In India, you can find our stores in all major cities - Mumbai, Delhi, Chennai, Bangalore.

In the US, our store is located only in New York.

### 

Step 1: Add user properties

Add a user property "Office City". See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

Step 2: Add response filters

Configure two response filters, one for "Location - India" and another for "Location - US". Add values for each of these as required. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#add-response-filters), for more information.

### 

**Step 3**: **Add response filters to the Q&A response**

*   Add a Q&A intent, say, "store" and with the user query "Where is your store? ".
    
*   In the Skill messages, add two text responses:
    
    *   "In India, you can find our stores in all major cities - Mumbai, Delhi, Chennai, Bangalore." and apply the "Location - India" response filter.
        
    *   "In the US, our store is located only in New York." and apply the "Location - US" response filter.
        
    

### 

**Step 4: Test your agent**

*   In the web channel URL, set the custom\_properties\[office\_city\]=Bangalore. Specify the user query in your agent simulator and check if the response of the "Location - India" response filter is received.
    

*   In the web channel URL, set the custom\_properties\[office\_city\]=Boston. Specify the user query in your agent simulator and check if the response of the "Location - US" response filter is received.
    

*   See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties) and [Test your web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel#test-your-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions

**Key points**:

*   Multiple developers can edit different questions and answers simultaneously in the same skill, encouraging faster development of the skill. A developer can edit and unlock a Q&A to edit the intents and responses.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

Search Q&A

*   You can search based on the response filters, if you have added any for your Q&A intents.
    
*   You can search based on the responses added for different channels if you have added any for your Q&A intents.
    
*   You can search based on the languages if you have added any for your Q&A intents.
    

In the Implementation -> Question & Answers page, you can find the filters used in your Q&A responses. Use this to filter the responses and view the answers.

## 

Edit Q&A skill

You can edit the skill to update the skill name, description, enable or disable feedback as required.

*   In the **Q&A skill** page, click the **pencil icon** at the top-left corner next to the skill name.
    
*   Edit the skill details.
    

**Note**: By default, Skill key is non-editable. Click **Edit** to edit the Skill key. It is recommended to edit the skill key with caution. If you update the Skill key and if the key is used say in JS code or in regression testing, then you must update the skill key manually.

*   Click **Update** and click **Save** to save the skill details.
    

## 

Import Q&A

You can import a CSV file with all the questions and answers to a Q&A skill, instead of manually creating all the Q&As.

*   In the Q&A Skill page, navigate to the Implementation -> Question & Answers option in the left navigation menu.
    
*   Click the Import option.
    
*   In the Import pop-up, click Browse to browse a CSV file with Q&As. You can also click Download Sample CSV, for a sample file. In the CSV file,
    
    *   The first column contains the name of the intent
        
    *   The second column contains a comma-separated list of questions
        
    *   The consecutive columns include variations of the intent
        
    

*   Click Submit to load all the Q&A's to the Q&A skill.
    

**Notes**:

*   You can import only when all of the existing questions and answers in the Q&A skill are unlocked.
    
*   You cannot import a Q&A with a duplicate intent name. An error message is displayed when you try to save the Q&A skill with a duplicate intent name.
    
*   The Intent name can be upto 192 characters.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   The file must be UTF-8 encoded CSV. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    

### 

Error during import

If you get an error while uploading a CSV file, then you can consider using the following troubleshooting tips:

*   Check if your CSV file is valid.
    
*   Check for duplicate intent names.
    
*   Check if the intent name is within 192 characters
    
*   Check for non-UTF-8 characters. That can lead to exceptions too. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
*   Check if you have blank intents.
    
*   Check if each response is within 1028 characters.
    

### 

Export to a UTF-8 encoded CSV

#### 

Windows

**If you use Excel**

We do not recommend using Excel for exporting to .csv as it tends to create unreadable characters in .csv files.

**If you use Notepad**

*   Click **File**
    
*   Choose **Save As**
    
*   There are three items to update in the **Save** dialog that comes up:
    
    *   Save as type: Change this to **All Files**
        
    *   Filename: name your file and add the .csv extension to it. **Example**: myupdates.csv
        
    *   Encoding: Click on the dropdown and choose UTF-8
        
    
*   Save
    

#### 

Mac

If you use _Excel for Mac_, it is highly recommended that you open your spreadsheet in either **Numbers** or **Google Sheets** to convert and export the final CSV file to UTF-8 encoding. Excel for Mac does not natively support the import or export of UTF-8 encoded files.

**If you use Numbers**

*   Click on File
    
*   Hover over Export
    
*   In the submenu that appears, choose CSV
    
*   Click on **Advanced Options** to show the **Text Encoding** dropdown
    
*   Select **Unicode (UTF-8)** from the dropdown menu. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
*   Click Next
    
*   Save
    

**Google Sheets**

*   Click File
    
*   Click on or hover over Download As
    
*   Choose the option _Comma-separated values (.csv, current sheet)_
    
*   After clicking on that option, your file will be automatically downloaded to your computer
    

## 

Clear all the Q&A

You can delete all the questions and answers in the Q&A skill if they are no longer required.

*   In the Q&A Skill page, navigate to Implementation -> Question & Answers
    
    tab option in the left navigation menu.
    
*   Click the Clear option.
    
*   An alert message is displayed. Click Clear in the alert message to clear all the questions and answers.
    

**Note**: You can clear all the Q&A only when all of the existing questions and answers in the Q&A skill are unlocked.

## 

Edit Q&A

You can edit the intents and responses of a Q&A skill.

*   In the **Q&A Skill** page, navigate to **Implementation -> Question & Answers** tab option in the left navigation menu.
    
*   Select the **Channel** in which you wish to edit the Q&A.
    
*   Click the intent that you wish to edit.
    
*   Click **Edit** to unlock the intent.
    
*   Edit the [Intent](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages#intent) and [Prompt details](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages#prompt-details), as required.
    
*   If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click **Force unlock**, if you still wish to edit the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    
*   Click **Save** to save the intent.
    

## 

Delete Q&A

You can delete a question and answer from the Q&A skill if Q&A's are no longer required.

*   In the Q&A Skill page, navigate to Implementation -> Question & Answers
    
    tab option in the left navigation menu.
    
*   Click the intent that you wish to delete.
    
*   Click Edit to unlock the intent. If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click Force unlock, if you still wish to delete the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    
*   Click **Delete** to delete the intent. An alert message is displayed. Click OK in the alert message to delete the Q&A.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/configure-q-and-a-skill

[Add language translations](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/configure-q-and-a-skill/add-languages)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/configure-q-and-a-skill/add-languages

All the languages configured in the agent are displayed in the **Configuration -> Language** page. Here, you can add language translations that are used in the agent response based on the detected language of the user.

### 

Key points

*   The translations specified in the node level for the same text always take precedence over the skill-level translations. See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.
    
*   Multiple developers can work on language packs simultaneously in the Q&A skill. Each language pack can be saved independently. As a best practice, it is recommended that individual developers work on a single language pack independently. It helps to easily manage and maintain language packs.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

### 

**Add language translations**

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can build and manage dialogs (conversational flow) immediately after creating a Dialog skill. See [Create new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the **Agents** tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    *   In the **Agent** page, navigate to the **Skills** option in the left navigation menu. Search and open the required skill.
        
    

*   In the **Dynamic Q&A** **skill** page, navigate to the **Configuration -> Language** tab.
    
*   Select the language tab for which you wish to add translation
    
*   Click **Add translation** to enter the English text and corresponding translated text.
    
*   Click **Save** to save the translated text changes.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/test-q-and-a

Once the question and answers are created or uploaded successfully to your skill, you can test to ensure the Q&A provides appropriate responses for user queries.

**Key point**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   If you wish to test skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

You can test the Q&A skill in any of the following ways:

*   Using the Agent simulator from any page in the skill's left navigation pane
    
*   Using the Test -> Simulator option in the left navigation menu. This also displays the agent simulator in the bottom right corner.
    

### 

**Testing using agent** simulator

*   In the agent simulator, select a channel Web or C-IVR in which you wish to test. Note that this option is displayed if you have deployed your agent in both web and C-IVR channel. You can now ask queries and test if you are receiving appropriate responses from user queries.
    
*   Note that the questions need not be exact. The variations are automatically handled by the system with appropriate responses.
    

*   Consider that you have [added french languag](/user-guide/how-to/build-agents/configure-agents/add-languages)e in your Q&A skill. When you switch language to say french using [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch) command and ask any question from the Smalltalk skill in french, then the agent detects and responds to the question in french, as applicable:

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/troubleshooting-tips

In case you are unable to receive the expected response from the Q&A skill, you can debug using the following troubleshooting tips:

### 

**Using local skill testing**

*   Use the Test in the Q&A page to test the skill locally. See [Test Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/test-q-and-a), for more information. If you are not receiving the appropriate responses, then check the user query and edit the user intents, if required. See [Edit Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/perform-common-actions#edit-q-and-a), for more information.
    
*   If you are receiving appropriate responses, then test the skill at the agent level. [Use insights](/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips#using-insights) in the agent testing for further debugging.
    

### 

**Using Insights**

*   Click the eye icon below the user query to know the intent mapped to the query.
    

*   In the Insights pop-up, you can know if the query is mapped to the required intent type, intent name, skill name, response node, and the language of the query.
    

*   Add the query that is not handled \[mapped to unhandled intent\] by the agent as inline training data. See [Add Questions and Answers](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages), for more information.
    

### 

Using Conversation history

You can also check the user query from the [Conversation history](/user-guide/how-to/build-agents/debug-agents#conversation-history) to know the query for which the expected response is not displayed in the agent.

### 

Using Debug Logs

In case you are receiving a JS error in the Q&A response, check [Debug Log](/user-guide/how-to/build-agents/debug-agents#debug-log) for more details.

---
