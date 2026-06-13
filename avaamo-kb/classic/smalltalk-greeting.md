# Classic Agent — Smalltalk & Greeting Skills
> 8 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk

[Quick overview](/user-guide/how-to/build-skills/create-skill/using-smalltalk/quick-overview)[Create a new Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base)[Build and manage Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill)[Test Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a)[Debug Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/quick-overview

**Smalltalk** is a form of Q&A skill that allows you to build a personality for your agent to represent the organization. It can be used across agents developed by the organization. **Examples**: _"Who built you?_", _"Who is your CEO?"_, or _"Who should I reach out for support?"_

Smalltalk can also be used to engage the user when they are waiting for the completion of a task. It can be used to give additional information to the user about the agent.

Avaamo Platform provides built-in Smalltalk skills with the most frequently encountered casual conversations the users can have with the agent. These are **read-only skills**. If you wish to customize the Smalltalk, then you can create a custom Smalltalk skill according to your business requirements.

Few examples of customized Smalltalk in a Pizza agent - "_How about adding two sachets of mustard sauce?" or "How about a lemonade to gulp it down?_". The following is an illustration of how you can use and build Smalltalk in the platform:

The following is an illustration of a Smalltalk response in a pizza agent:

**Notes**:

*   Smalltalk does not participate in disambiguation. See [Disambiguation](/user-guide/overview-and-concepts/intents#disambiguation), for more information.
    
*   If you have the same intent in the system Smalltalk and custom Smalltalk, then the response from the custom Smalltalk takes precedence.
    

### 

Additional resources

The following lists a few additional resources available for you to get started on Dialog skills:

*   [Quick start video](/user-guide/quick-start-tutorials/add-smalltalk-skill)
    
*   [Webinar on Introduction to v5.0 and Answers](/user-guide/ref/webinars/introduction-to-v5.0-and-answers)
    

### 

Next steps

This section provides an in-depth understanding of the following:

*   [Create a new Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base): Start by creating a new Smalltalk skill or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.
    
*   [Build and manage Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill): Add questions and answers to your Smalltalk skill. Learn how to import Smalltalk and perform other common actions such as edit, clear, and delete.
    
*   [Test Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a): Test Smalltalk skill as you build using an agent simulator.
    
*   [Debug Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips): Debug Smalltalk skill using insights, debug logs, and conversation history.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base

Based on your requirement, you can either start by creating a new Smalltalk skill from scratch or by importing from any one of the available skills. See [Import skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base#import-skill), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   If you wish to edit an agent, then navigate to the Agents tab in the top menu, search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To create a Smalltalk skill:**

*   In the **Agent** page, navigate to the Skills option in the left navigation menu, click **Add Skill** in the **Agent skills** page.
    
*   In the **Skill builder** page, select **Smalltalk** and click **Create**.
    
*   Specify the following details and click **Create**:
    

Parameters

Description

Maximum length

Skill name

Indicates the name of the Smalltalk skill, primarily used to identify the skill.

50 characters

Description

Indicates the description of the skill. Use this to specify the purpose of the skill.

200 characters

Skill key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as Goto node and in [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing). It helps in easy identification and readability.

20 characters

Mask responses

Move the slider if you mask all the agent's responses of this skill in the conversation flow. When you enable masking for the skill, all the responses in the skill are masked and cannot be accessed. Note that this option is available only when masking is enabled for an agent. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

NA

A new empty Smalltalk skill is created. The next step is to [add questions and answers](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa) to the Smalltalk skill.

### 

Next steps

You can start by [adding questions and answers](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa) to your Smalltalk skill either manually or by importing a CSV file. Once the Smalltalk is uploaded successfully, your skill is ready for [testing](/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a). See [Debug Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips), for common troubleshooting tips.

**Key Points**:

*   If you have imported a skill, ensure to edit the name and description of the skill. See [Edit skill](/user-guide/how-to/build-skills/manage-skill#edit-skill), for more information.
    
*   Refer to [Design skills](/user-guide/how-to/build-skills/design-skill), for best practices and do's and don'ts while building a skill.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill

[Add questions and answers](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa)[Perform common actions](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions)

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa

In the **Customize Smalltalk** section of the Smalltalk skill, you can add user intents (questions) and skill responses (answers) manually or by importing a CSV file with the questions and answers. See [Import Smalltalk,](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#import-smalltalk) for more information.

**Key Points**:

*   Multiple developers can add questions and answers simultaneously in the same Smalltalk skill, encouraging faster development of the skill. As a best design practice, it is recommended to distribute a set of intents among developers, so that it is easy to maintain and manage and results in seamless collaboration.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create new Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base), for more information.
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent.
        
        See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

**Add questions and answers**

*   In the **Smalltalk** skill page, navigate to **Implementation -> Customize Smalltalk**
    
    option in the left navigation menu.
    
*   By default, the response of the default language as specified in the agent configuration is displayed.
    
*   Select the channel for which you wish to add the Q&A. Using this feature, you can add different customized responses for different channels as per your requirement. If you have deployed your agent in a specific channel for which you have not configured any response, then the response as specified in the "Default" option is considered. **Example**: Consider that you have deployed your agent in Web, Android, and iOS channels and you have configured responses only for the Android channel. For the Web and iOS channels, the responses as specified in the **Default** option are displayed.
    

**Note**: Only those channels that are enabled for your account or company are displayed in the Channel dropdown. If you wish to enable a channel, then contact Avaamo Support for further assistance.

*   If you have configured languages in your skill, select the language in which you wish to add the response. By default, the response of the default language as specified in the agent configuration is displayed. See [Add language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.
    

**Key Point:** With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination. Example: You can add a response specific to the Android channel in the French language.

*   Click the **plus icon** to add user questions and the skill responses (answers).
    
*   Add required [Intent](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa#intent) and [Prompt details](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa#prompt-details).
    
*   Click **Save** to save the Q&A.
    
*   You can continue to add questions and responses as required.
    

Your Smalltalk skill is ready for testing. See [Test Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a), for more information. You can also add languages, edit or delete Q&A, and import Smalltalk. See [Perform common actions](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions), for more information.

**Note**: If you have added response filters to the Smalltalk skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

### 

Intent

In the **Intent** tab, specify the following details:

Parameters

Description

Maximum length

Intent key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the intent name. By default, a key is automatically generated for you. Click **Edit** to update the key to any user-friendly identifier. Note that the intent key must be unique within the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information. You can use this in any [JS code customizations (Flow control)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control), [regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), and [query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for getting a closer look at the user conversations with the agent.

20 characters

Intent name

Indicates the name of the intent. Each intent name must be unique within the agent.

191 characters

User intent matches

Indicates the training data or variations for the intent. Type the required training data and press enter. You can add multiple training data to the intent as required.

There is no limit on the number of training data or training phrases that can be added to an intent. It is recommended that you follow the recommended best practices for adding training data. See [Intents and training data](/user-guide/how-to/build-skills/design-skill#intent-and-training-phrases-training-utterances-or-training-data), for more information.

Each of 300 characters

**Notes**:

*   If you have multiple intents with exactly the same training data, then the latest intent response is displayed to the user.
    
*   If you have multiple intents with similar training data, then the query goes for disambiguation.
    
*   The **Smalltalk** response is displayed only when the user query (including punctuations) exactly matches the training data provided in the Smalltalk.
    

*   You can also add intents to capture emojis and respond to emoji responses as required.
    

### 

Prompt details

In the **Prompt** **details** tab, specify the skill responses (answers) to user questions. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information. Note that [Advanced settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings) options available for the Dialog skill are not applicable to the Smalltalk skill

## 

Example: Add response filters

Consider that you wish to display different Smalltalk greeting messages for different users based on their location:

**User query**

**Indian user**

**US user**

How was your day?

Namaste. Doing great so far. Hope you are doing well.

Hey there. Doing great so far. Hope you are doing well.

### 

Step 1: Add user properties

Add a user property "Office City". See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

Step 2: Add response filters

Configure two response filters, one for "Location - India" and another for "Location - US". Add values for each of these as required. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters#add-response-filters), for more information.

### 

**Step 3**: **Add response filters to Smalltalk response**

*   Add a Smalltalk intent, say, "greeting" and with the user query "How was your day? ".
    
*   In the Skill messages, add two text responses:
    
    *   "Namaste. Doing great so far. Hope you are doing well." and apply the "Location - India" response filter.
        
    *   "Hey there. Doing great so far. Hope you are doing well." and apply the "Location - US" response filter.
        
    

### 

**Step 4: Test your agent**

*   In the web channel URL, set the custom\_properties\[office\_city\]=Bangalore. Specify the user query in your agent simulator and check if the response of the "Location - India" response filter is received.
    

*   In the web channel URL, set the custom\_properties\[office\_city\]=Boston. Specify the user query in your agent simulator and check if the response of the "Location - US" response filter is received.
    

*   You can also set custom properties using User.setProperty. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties) and [Test your web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel#test-your-web-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions

**Key points**:

*   Multiple developers can edit different questions and answers simultaneously in the same skill, encouraging faster development of the skill. A developer can edit and unlock a Q&A to edit the intents and responses.
    
*   See [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs), for common FAQs around parallel development of QA and Smalltalk skills.
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   If you wish to edit skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

Search Q&A

*   You can search based on the response filters, if you have added any for your Q&A intents.
    
*   You can search based on the responses added for different channels if you have added any for your Q&A intents.
    
*   You can search based on the languages if you have added any for your Q&A intents.
    

In the **Implementation -> Question & Answers** page, you can find the filters used in your Smalltalk responses. Use this to filter the responses and view the answers.

## 

Edit Smalltalk skill

You can edit the skill to update the skill name and description.

*   In the **Smalltalk skill** page, click the **pencil icon** at the top-left corner next to the skill name.
    
*   Edit the skill details.
    

**Note**: By default, the **Skill key** is non-editable.

*   Click **Edit** to edit the **Skill key**.
    
*   It is recommended to edit the skill key with caution.
    
*   If you update the **Skill key** and if the key is used say in JS code or in regression testing, then you must update the **Skill key** manually.
    

*   Click **Update** and click **Save** to save the skill details.
    

## 

Import Smalltalk

You can import a CSV file with all the questions and answers to a Smalltalk skill, instead of manually creating all the Q&As.

*   In the **Smalltalk skill** page, navigate to the **Implementation -> Customize Smalltalk** option in the left navigation menu.
    
*   Click the **Import** option.
    
*   In the **Import** pop-up, click **Browse** to browse a CSV file with Q&As. In the CSV file, the first column contains the name of the intent and the consecutive columns include variations of the intent. You can also click **Download Sample CSV**, for a sample file.
    
*   Click **Submit** to load all the Q&A's to the Smalltalk skill.
    

**Notes**:

*   You can import only when all of the existing questions and answers in the Q&A skill are unlocked.
    
*   You cannot import a Q&A with a duplicate intent name. An error message is displayed when you try to save the Q&A skill with a duplicate intent name.
    
*   The Intent name can be upto 192 characters.
    
*   For security reasons, by default, you can upload upto 10 files in a span of 60 seconds. The number of files and the frequency or interval within which they can be uploaded is a configurable parameter. Contact Avaamo Support, for further assistance.
    
*   The file must be UTF-8 encoded CSV. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    

### 

Error during import

If you get an error while uploading a CSV file, then you can consider using the following troubleshooting tips:

*   Check for duplicate intent name
    
*   Check if the intent name is within 192 characters
    
*   Check for non-UTF-8 characters. That can lead to exceptions too. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
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
    
*   Select **Unicode (UTF-8)** from the dropdown menu. See [Export to a UTF-8 encoded CSV](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#export-to-a-utf-8-encoded-csv), for more information.
    
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

*   In the **Smalltalk skill** page, navigate to the **Implementation -> Customize Smalltalk** option in the left navigation menu.
    
*   Click the **Clear** option.
    
*   An alert message is displayed. Click **Clear** in the alert message to clear all the questions and answers.
    

**Note**: You can clear all the Q&A only when all of the existing questions and answers in the Q&A skill are unlocked.

## 

Edit Q&A

You can edit the intents and responses of a Q&A in the **Smalltalk** skill.

*   In the **Smalltalk skill** page, navigate to the **Implementation -> Customize Smalltalk** option in the left navigation menu.
    
*   Select the **Channel** in which you wish to edit the Q&A.
    
*   Click the intent that you wish to edit.
    
*   Click **Edit** to unlock the intent.
    
*   Edit the [Intent](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa#intent) and [Prompt details](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa#prompt-details) as required.
    
*   Click **Save** to save the intent.
    

**Note**: By default, the **Intent key** is non-editable. Click **Edit** to edit the Intent key. It is recommended to edit the Intent key with caution. If you update the Intent key and if the key is used say in JS code or in regression testing, then you must update the Intent key manually.

*   If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click **Force unlock**, if you still wish to edit the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    

## 

Delete Q&A

You can delete a question and answer from a **Smalltalk skill** if Q&A's are no longer required.

*   In the **Smalltalk skill** page, navigate to the **Implementation -> Customize Smalltalk** option in the left navigation menu.
    
*   Click the intent that you wish to delete.
    
*   Click **Edit** to unlock the intent. If there is another user already editing the intent, then the name of the user editing the intent is displayed. Click **Force unlock**, if you still wish to delete the Q&A. Note that when you force unlock an intent, the changes made by the other user is lost. Hence, this option must be used with caution.
    

*   Click **Delete** to delete the intent. An alert message is displayed. Click **OK** in the alert message to delete the Q&A.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a

Once the **Smalltalk** is created or uploaded successfully to your skill, you can test to ensure the skill provides appropriate responses for user queries.

**Key Point**: If you have added response filters to the skill responses that use user properties, then to test the agent, you can set the custom\_properties\[user\_property\_key\]=value in the web channel URL. Example: custom\_properties\[office\_city\]=Bangalore. See [Create custom user properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/create-custom-user-properties), for more information.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can test a skill immediately after creating the skill. See [Create new Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base), for more information.
    
*   If you wish to test skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

You can test the Smalltalk skill in any of the following ways:

*   Using the **Agent simulator** from any page in the skill's left navigation pane
    
*   Using the **Test -> Simulator** option in the left navigation menu. This also displays the agent simulator in the bottom right corner.
    

### 

**Test using agent** simulator

*   In the agent simulator, select a channel Web or C-IVR in which you wish to test. Note that this option is displayed if you have deployed your agent in both web and C-IVR channels. You can now ask queries and test if you are receiving appropriate responses from user queries.
    

*   Consider that you have [added French language](/user-guide/how-to/build-agents/configure-agents/add-languages) in your agent. When you switch language to say French using [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch) command and ask any question from the Smalltalk skill in French, then the agent detects and responds to the question in French, as applicable:
    

**Note**: Smalltalk response is displayed only when the user query (including punctuations) exactly matches the training data provided in the Smalltalk.

---

## Source: https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips

In case you are unable to receive the expected response from the Smalltalk skill, you can debug using the following troubleshooting tips:

### 

**Using local skill testing**

*   Use the **Test** option in the Smalltalk skill to test the skill locally. See [Test Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/test-smalltalk-q-and-a), for more information. If you are not receiving the appropriate responses, then check the user query. Note that the Smalltalk response is displayed only when the user query (including punctuations) exactly matches the training data provided in the Smalltalk. Check and edit the user intents, if required. See [Edit Q&A](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#edit-q-and-a), for more information.
    
*   If you are receiving appropriate responses, then test the skill at the agent level. [Use insights](/user-guide/how-to/build-skills/create-skill/using-smalltalk/troubleshooting-tips#using-insights) in the agent testing for further debugging.
    

### 

**Using insights**

*   Click the **eye icon** below the user query to know the intent mapped to the query.
    

*   In the **Insights** pop-up, you can know if the query is mapped to the required intent type, intent name, skill name, response node, and the language of the query.
    

*   Add the query that is not handled \[mapped to unhandled intent\] by the agent as inline training data. See [Add questions and answers](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa), for more information.
    

### 

Using conversation history

The Smalltalk response is displayed only when the user query (including punctuations) exactly matches the training data provided in the Smalltalk. You can check the user query from the [conversation history](/user-guide/how-to/build-agents/debug-agents#conversation-history) and educate the users accordingly.

### 

Using debug logs

In case you are receiving a JS error in the Smalltalk response, check the [Debug log](/user-guide/how-to/build-agents/debug-agents#debug-log) for more details.

---
