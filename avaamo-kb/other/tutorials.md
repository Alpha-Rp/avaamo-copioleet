# Tutorials & Exercises
> 62 pages

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/before-you-begin

Before you begin this tutorial, this section discusses some of the requisite software, tools, and accounts that are required.

### 

Pre-requisites

Ensure that you have met all the basic requirements before you begin. See [Basic requirements](/user-guide/quick-start-tutorials/pre-requisites#basic-requirements), for more information.

### 

Signing In to the Platform

Prior to completing the tutorial, you must have an account to sign-in to the platform. Contact support@avaamo.com, for more information.

### 

ServiceNow

You can use the account provider for performing the training, or if you want to use your own Service Now account you can sign up for a developer instance here: [https://developer.servicenow.com/app.do#!/home](https://developer.servicenow.com/app.do#!/home)

### 

PostMan

This application is used to demonstrate the API capabilities within the Avaamo platform. This application can be downloaded from here: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

### 

Facebook

To set up and configure a channel that uses Facebook Messenger you will need a Facebook account.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent

[Chapter 1: Getting started](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started)[‼️Chapter 2: Building an Answers skill (Deprecated)](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill)[Chapter 3: Building a Q&A skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill)[Chapter 4: Building a Smalltalk skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill)[Chapter 5: Building a Dialog skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill)[Chapter 6: Agent analytics](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics)[Chapter 7: Channels](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels)[Chapter 8: Live agent integration](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration)[Chapter 9: Language support](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support)[Chapter 10: Life-cycle management and agent permission](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission)[Chapter 11: Skill Store](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started

[Exercise 1.1: Cloning a sample agent](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.1-cloning-a-sample-agent)[Exercise 1.2: Asking questions to the agent](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.2-asking-questions-to-the-agent)[Exercise 1.3: Changing agent avatar and name](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.3-changing-agent-avatar-and-name)[Exercise 1.4: Changing welcome message](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.4-changing-welcome-message)[Exercise 1.5: Entity types](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.6-entity-types)[Exercise 1.6: Deploying your agent to a web page](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.6-deploying-your-agent-to-a-web-page)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.1-cloning-a-sample-agent

The easiest way to understand how agents work is by observing and understanding how a sample agent works. Once you login to your Avaamo dashboard, you are presented with 4 sample agents. These agents are

*   Sample: My Assistant
    
*   Sample Agent: Auto Insurance
    
*   Sample Agent: Service Desk
    
*   Sample Agent: Healthcare.
    

Pick the Sample Agent, Sample Agent: My Assistant. Make a copy of the Agent by clicking the hamburger menu and select the option - Make a Copy

Once the copy starts, the following message is displayed:

Click OK, the copy process runs in the background. Once the copy is complete, you now have a clone Agent that is ready.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.2-asking-questions-to-the-agent

Now that your agent is ready, try asking some questions and see how it responds. In your agent (Sample: My Assistant) try asking these questions:

Copy

    I want to order a medium cheese pizza
    What is the weather like in Seattle?
    I want to see some general news
    What's the stock price of Microsoft?

You can even use misspellings, try these examples:

Copy

    I want to oder a pizza
    What is the weater like in Seattle?
    I want to general nws?

If the agent is not sure what you are asking about it responds with a disambiguation question. Try these examples to see the behavior:

Copy

    I want to order a smed piza?
    I wnt to se news?
    Wht the stck pice of Microsft?

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.3-changing-agent-avatar-and-name

Click the edit icon (pencil) next to the agent name on the top left corner. The following pop-up is displayed, where you can edit agent name and description:

Follow these steps to change the Agent Name and Agent Avatar:

*   Let us change the Agent name to "My Assistant" by clicking on Agent Name.
    
*   To add a new Avatar, click Agent Avatar and upload an image for the agent, choose your favorite image, and upload it. Once you have made all your changes, go ahead and click the update button. Refresh your screen to see your changes.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.4-changing-welcome-message

To change the welcome message you can click the Greeting in the built-in skills section.

Once you are in the greeting message, delete the text output**,** and then add a card. In the description section of the card, add a short welcome message to your agent. For example:

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.6-entity-types

In the Agent menu, click _Entity types_ to observe and see the entities that the Agent is using. In our example we see that the agent is using the following entities:

*   Pizza Size
    
*   Pizza Toppings
    
*   US cities
    
*   US States
    
*   Stock Symbol
    
*   Stock Name
    

Let’s try to edit some entity types and add some alternate values.

*   Click the entity type Pizza Size and add value - Extra large. Our agent will now understand that extra large is a pizza size.
    
*   To this extra-large entity type add alternate values as shown below.
    

*   Save the changes in your agent.
    

### 

**Testing your Updated Entities**

Now that we have made so many changes to our Agent, let’s open up the Agent Simulator and ask some questions. Try incorporating the new entity types in your queries to see if the agent is able to understand the changes you have made.

### 

**Resources**

*   [Entity types](/user-guide/overview-and-concepts/entity-types)
    
*   [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-1-getting-started/exercise-1.6-deploying-your-agent-to-a-web-page

To deploy your Agent on the web navigate to Agent -> Configuration -> Channel -> View -> Test.

This will open the agent on a new webpage, you can now go ahead and test your agent.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill

[Exercise 2.1: Create an Answers skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.1-create-an-answers-skill)[Exercise 2.2: Uploading a document](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.2-uploading-a-document)[Exercise 2.3: Examining Answers knowledge base](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.3-examining-answers-knowledge-base)[Exercise 2.4: Building an Answers Skill from a URL](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.4-building-an-answers-skill-from-a-url)[Exercise 2.5: Training the knowledge models](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.5-training-your-skill-and-training-the-knowledge-models)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.1-create-an-answers-skill

Answers skill is deprecated in Atlas 8. See [Atlas 8 - Deprecated and removed features](/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features), for more information.

*   In the Agent page, navigate to the Skills option in the left navigation menu and click _Add skill_.
    
*   In the Skill builder page, select Answers and click Create.
    
*   Specify Skill name: Credit Card Policy and Skill description: FAQs related to credit card policy and click Create.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.2-uploading-a-document

In the Answers skill page, click _Add documents_ in the Documents tab. Click _Select files_, choose a PDF document, and click the _Import_ button.

Once the document is uploaded, and the training is completed, your Answers skill is now ready for use.

In the Agent page, click the agent avatar in the bottom-right corner. You can now ask questions to see if you are receiving appropriate responses. Click _View More_ to view the actual section in the document. All the conversations are stored in the answer history and you can view the same to fine-tune the skill.

Here are some example questions:

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.3-examining-answers-knowledge-base

To navigate to the knowledge goto **Answer Skill -> Implementation -> Knowledge**

To understand Answers better, click on the _Knowledge_ menu item in the skill menu. The knowledge page consists of five tabs:

*   Sections
    
*   Entities
    
*   Acronyms
    
*   Vocabulary
    
*   Knowledge graph
    

### 

**2.3.1 Sections**

Sections are chunks of content extracted and created based on the structure of the uploaded document. Each section contains the skill’s response to the user’s intent. You can add additional training data as required. Each section is displayed with a breadcrumb that indicates the page number from which the section is extracted and the corresponding section header.

Navigate to the _Sections_ tab and observe the sections that have been identified.

### 

**2.3.2** **Entities**

Entities are business terms in your document. All entities are identified and extracted from your document and classified as entities in this section. Here, you can either view all the entities from all the documents or select a specific document and view all the entities.

You can change the document by selecting the document from the dropdown in the top right corner of the page. Select an entity from the list and try adding all the values. Test this in the agent to see how it responds

### 

**2.3.3** **Acronyms**

If there is an acronym used in your document, then the acronym along with the full form is present in the acronyms tab. Here, you can view all the acronyms available in the document. You can get the definition of an acronym, like in the following examples:

_What is APR?_

_What is DPR?_

### 

**2.3.4** **Knowledge Graph**

This is a view-only graph that maps the relationship between words. This mapping is based on the document uploaded, the content and context of the document.

### 

**2.3.5** **Resources**

[View and Edit Knowledge](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.4-building-an-answers-skill-from-a-url

Here we learn how to build an Answers skill by providing a publicly accessible URL.

*   Create an Answers skill as we have done previously with the _Skill name_ Microsoft Support and _Skill description_ Answer Skill for Microsoft Office Support
    

*   In the Answers skill page, click on the button _Add URL_ in the Documents tab. In the popup, provide the URL, a name for the URL, and click the button Import URL.
    
*   Once the import is successful and training is complete, your Answers skill is now ready for use.
    

For the ease of understanding, the URL being used in this module is [Put a background picture on your slides](https://support.microsoft.com/en-us/office/put-a-background-picture-on-your-slides-7a17358c-b76e-4c94-84db-604e1bba76da?ui=en-us&rs=en-us&ad=us). You can either use this URL or use any other publicly available URL.

Here are some example queries to try with the URL provided above:

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-2-building-an-answers-skill/exercise-2.5-training-your-skill-and-training-the-knowledge-models

### 

**Retrain**

If you have edited the details of your uploaded document or URL then you need to retrain the document. You could also use this option if there has been an error during upload.

**To retrain follow the following steps**:

*   In the Answers Skill page, navigate to Implementation -> Documents option in the left navigation menu.
    
*   Click Retrain option, this starts a new cycle of extracting the content and creating a new knowledge base.
    

### 

**Edit**

Here you can make edits to your document. To make edits to your document

*   In the Answers Skill page, navigate to Implementation -> Documents option in the left navigation menu.
    
*   Click the Edit option. Update the title. (Attributes will be covered in the advanced training).
    

### 

**Adding Training Variations**

You can train the skill to increase the accuracy of the skill. In order to do so, we need to identify the section to which your question corresponds and then train the section with your question.

In our example- What is the late payment fee?, let’s add the training data: What is the late fee?

*   Navigate to Answers -> Implementation -> Knowledge -> Section
    
*   Search for the section using the search bar located in the section tab
    

*   Once you have found the section, let's add, What is the late fee? as training data to the Add Training Data section.
    
*   Save your changes in the Skill and test this variation in the Agent.
    
*   Repeat this exercise for 3 other sections of the document.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill

[Exercise 3.1: Train the Skill with Questions and Answer Pairs](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.1-create-a-q-and-a-skill)[Exercise 3.2: Adding Variations to Question and Answer Pairs](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.2-add-questions-and-answers)[Exercise 3.3: Configuring User Feedback](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.3-configuring-user-feedback)[Exercise 3.4: Adding an Introductory Message to Q&A Skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.4-adding-an-introductory-message-to-q-and-a-skill)[Exercise 3.5: Adding an Outro Message to your Q&A Skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.5-adding-an-outro-message-to-your-q-and-a-skill)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.1-create-a-q-and-a-skill

## 

**Create a Q&A Skill**

*   Navigate to **Agent -> Skills**
    
*   Click the _Edit_ button in the upper right-hand corner
    

*   Click on _Add Skill_ button
    
*   In the displayed page, click the _Q&A_ card
    

*   Specify the following details using the values from the picture below and click the _Create._
    

## 

**Add question and answers**

*   In the Q&A page, click Question & Answers in the Implementation tab.
    
*   Click plus icon to add user questions and the skill responses (answers).
    

*   Let us add intent and call it Order return and cancelation. Add the following training phrase and message to your intent from the text in the table below.
    

Training Phrase

Message

Can I cancel an existing order?

You can return your online order in store. If you do not have your receipt, you may return your purchase for in-store credit at our lowest selling price during the previous 30 days. You will need to provide a valid form of identification to return an item without a receipt. There are restrictions on special orders.

*   Repeat the same exercise for 3 more question-answer pairs of your choice.
    
*   Test your skill in the agent and see how it responds.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.2-add-questions-and-answers

By adding variations to the intents you have created, the skill can handle many more variations of the same question.

Let us add two more variations

Intent

Variation

Can I cancel an existing order?

I want to cancel an existing order

I have placed an order and want to cancel it. Can I cancel it now?

Save your changes in the skill, and save the changes in your agent. Test these changes in your agent and see how it responds.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.3-configuring-user-feedback

You can set up user feedback for your Q&A Skill too. By doing so you can keep track of helpful these answers have been to the user.

To set up feedback

*   Click the edit icon skill name
    
*   Enable feedback
    

*   Once you have enabled feedback in your skill, test your skill in the agent to see how feedback appears.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.4-adding-an-introductory-message-to-q-and-a-skill

An intro message is a small introductory message that precedes the answer from the agent.

*   To add an intro message to your Q&A skill, click the intro messages as shown below.
    

*   Add a small message as text input to the intro message as shown below.
    

*   Once you are done with the changes, save your changes, and test them in the agent.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-3-building-a-q-and-a-skill/exercise-3.5-adding-an-outro-message-to-your-q-and-a-skill

An outro is a message that follows the Q&A response.

*   To add an outro message to your Q&A skill, click the outro messages as shown below.
    

*   Add a small message as text input to the outro message as shown below.
    

*   Save the above changes and test them in the agent.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill

[Exercise 4.1: Default Smalltalk skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.1-default-smalltalk-skill)[Exercise 4.2: Creating a Smalltalk skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.2-creating-a-smalltalk-skill)[Exercise 4.3: Adding variations to your Smalltalk questions](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.3-adding-variations-to-your-smalltalk-questions)[Exercise 4.4: Train Q&A pairs with variations](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.4-train-q-and-a-pairs-with-variations)[Exercise 4.5: Test Smalltalk in your agent](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.5-test-smalltalk-in-your-agent)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.1-default-smalltalk-skill

Smalltalk is a form of Q&A skill that allows you to build a personality for your agent to represent the organization. It can be used across agents developed by the organization. Smalltalk has lesser priority as compared to Q&A skills.

Examples of Smalltalk questions are:

Copy

    Who built you?
    Who is your CEO?
    Which is your favourite sports team?

Open the Smalltalk skill in the skill builder and see what questions are already answered. Create a list of questions and answers that would want your agent to answer.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.2-creating-a-smalltalk-skill

*   In the Agent page, navigate to the _Skills_ option in the left navigation menu, click _Add skill_ button in the Agent skills page.
    
*   In the Skill builder page, select _Smalltalk_ and click _Create_.
    
*   Specify the following details and click _Create_:

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.3-adding-variations-to-your-smalltalk-questions

Just as we did in the previous step, add a question-answer pair to your new Smalltalk skill.

Adding Question and Answers

*   In the Smalltalk page, click Question & Answers in the Implementation tab.
    
*   Click plus icon to add user questions and the skill responses (answers).
    

*   Let us add intent and call it: Who is your CEO?. Add the following training phrases and messages to your intent
    

Training Phrase

Message

Who is your CEO?

Jason Smith is our CEO.

*   Repeat the same exercise for 3 more question-answer pairs of your choice.
    
*   Test your skill in the agent and see how it responds.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.4-train-q-and-a-pairs-with-variations

By adding variations to the intents you have created, the skill can handle many more variations of the same question.

Let us add two more variations:

Intent

Variation

Who is your CEO?

Tell me more about your CEO.

Where can I find information about your CEO?

Repeat this step and add 2 or more variations to all your Smalltalk pairs.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-4-building-a-smalltalk-skill/exercise-4.5-test-smalltalk-in-your-agent

Save your changes in the skill and save changes in the Agent. Test these changes in your agent and see how it responds.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill

[Exercise 5.1: Creating a Dialog skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.1-creating-a-dialog-skill)[Exercise 5.2: Creating a conversation flow](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.2-creating-a-conversation-flow)[Exercise 5.3: Capturing data from a conversation](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.3-capturing-data-from-a-conversation)[Exercise 5.4: Adding a JavaScript](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.4-adding-a-javascript)[Exercise 5.5: Test the Dialog skill](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.4-test-the-dialog-skill)[Exercise 5.6: Deploy your Agent on a Web Channel](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.5-deploy-your-agent-on-a-web-channel)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.1-creating-a-dialog-skill

Let us build a skill to create an incident using ServiceNow integration. Here are some ways people can ask the agent to create a ticket:

Copy

    I want to create a support ticket
    My printer is not working, create a ticket
    My Desktop is laggy, raise an incident

For the purpose of this exercise, we are limiting the training to these 3 phrases, you can go in and add more training data.

**To create a new Dialog skill**:

*   In the Agent page, click on the Skills option in the left navigation menu to display the Skills page. Click on the _Add skill_ button.
    
*   In the Skill builder page, select Dialog skill and click _Create_.
    
*   Specify the following details and click the _Create_ button:
    

*   Now, let us add some some training data to our invocation intent. After adding the training data, we can see that entities are automatically identified and slotted by the platform:
    

Let us create a conversation flow for this skill.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.2-creating-a-conversation-flow

We will be using a sample ServiceNow instance for my integration here. The mandatory fields to create a ticket are Short description, Description and Urgency.

*   Our first node will be used to capture the short description, let us create the first node:
    

*   Our Second node will be used to capture a detailed description of the issue reported. Let us create node 2.
    

*   Our third node will be used to capture the urgency of the ticket. Lets use a quick reply to show the urgency. The buttons will be:
    
    *   High
        
    *   Medium
        
    *   Low
        
    
*   Select the post message option for each of the buttons added to a quick reply.
    

*   At the end your conversation tree will look like above. Create a blank node 4, will be used to integrate with the service desk.
    

**Tip**: It is good to have validation for each node, for example, you can check if the short description is too short, or you can even check if the user entered the right urgency. You can use your validation code in post-processing.

Documentation that describes how to create a new dialog is found at this link: [Create a new Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.3-capturing-data-from-a-conversation

There are two ways to capture and store data from a conversation:

*   Using a JavaScript property `context.variables`.
    
*   Using Javascript methods: `Storage.user.set()` to store and `Storage.user.get()` to retrieve. For this example, you will be using context.variables. Context values are stored only along one single branch, if your conversation switches branches then the value is lost.
    

In the post-processing section of the document add this code for each node as shown below:

### 

Node 2

*   Name: `capture short description`
    
*   Intent Type: Training Phrases
    
*   Post Processing: Yes
    
*   Post Processing Script:`context.variables.short_description = context.last_message;`
    

### 

Node 3

*   Name: `capture description`
    
*   Intent Type: Custom Intent Code:
    
*   `return true`
    
*   Post Processing Script: `context.variables.short_description = context.last_message`;
    

### 

Node 4

*   Name: `Capture Urgency`
    
*   Intent Type = Custom Intent Code
    
*   `return true`
    
*   Post Processing: Yes
    
*   Post Processing Script: `context.variables.short_description = context.last_message;`

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.4-adding-a-javascript

Let us add the javascript that will create the incident

You can add the following code to your code block:

Copy

    var SERVICE_NOW_INSTANCE_ID = "66374";
    var SERVICE_NOW_URL = "https://dev"+SERVICE_NOW_INSTANCE_ID+".service-now.com/api/now/";
    var SERVICE_NOW_USERID = "admin";
    var SERVICE_NOW_PWD = "qPoOh5VfCsV5";
    let SERVICE_NOW_CALLER = "2def7d7edb3d330082fb6a49489619c0";
    
    function createNewIncident(description,urgency,sht_desc) {
      let caller = SERVICE_NOW_CALLER;  
      let url = SERVICE_NOW_URL+'table/incident'
      return await(fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Basic '+Buffer.from(SERVICE_NOW_USERID+':'+SERVICE_NOW_PWD).toString('base64')
        },
        body: JSON.stringify({
          "short_description": sht_desc,
       "caller_id": caller,
       "description": description,
          "severity": 8,
          "impact": 9,
          "urgency":urgency
        })
      }).then(function(response) {
        return response.json();
      })
      .then(function(apiJson) {
        console.log(apiJson.result);
        return apiJson.result.number;
      }));
    }
    
    
    let shortDescription = context.variables.short_description
    let description = context.variables.description
    let urgency = context.variables.urgency
    
    var incidentNumber = createNewIncident(shortDescription, description, urgency);
    if(incidentNumber){ 
     return ("Ticket "+incidentNumber+" has been created on your behalf.");
    }
    else{
     return "Unable to create a ticket at the moment. Please try again later.";
    }

Once the code has been written, save your changes to the skill and build the agent. Let us test the skill to see how it responds.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.4-test-the-dialog-skill

Click the agent icon on the bottom right corner of the screen and ask the agent questions that you have trained it with.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-5-building-a-dialog-skill/exercise-5.5-deploy-your-agent-on-a-web-channel

**To deploy your agent on a web channel,**

*   Navigate to Agent Configure -> Channels
    
*   Once in channels, click the view in the web channel card.
    

*   Click Test in the pop-up
    

*   Click on the Test button to view how your agent will appear in a web browser.You can change the background of the webpage by using the parameter “&background = <publicly accessible image URL>”

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics

[Exercise 6.1: Analytics Dashboard](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.1-analytics-dashboard)[Exercise 6.2: User Journey Display](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.2-user-journey-display)[Exercise 6.3: Query Insights](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.3-query-insights)[Exercise 6.4: Monitoring User Feedback](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.4-monitoring-user-feedback)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.1-analytics-dashboard

In the Agent Configuration menu, click Monitor to understand and view the analytics of the agent.

*   To find your top intents in the Agent, navigate to **Agent-> Monitor -> Analytics**
    

*   On this dashboard**,** you will see different conversation metrics associated with the agent. You can see the total queries, Active users, Channels, User Feedback, Top dialog skills, and top Q&A intent.
    
*   Observe the analytics for your agent and identify the top intents.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.2-user-journey-display

The User Journey displays the user’s journey through the conversation with the agent. This can be used to analyze the user’s experience with the agent that can also be used to improve the conversation flow.

*   To navigate to the User Journey navigate to **Agent-> Monitor -> User Journey**
    

*   Observe the user journey and see how the user converses with the Agent. Also**,** see where the conversations are dropping and analyze how it can be improved.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.3-query-insights

The query insights help to give you a closer look into the conversations that users have with your agent.

*   To navigate to Query Insights navigate to **Agent-> Monitor -> Query Insights**.
    

*   Select a date range, the agent, and filter the conversations to see each query and its associated insight in detail.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-6-agent-analytics/exercise-6.4-monitoring-user-feedback

The User Feedback shows the feedback received by the agent from the users for the selected date range. It displays the Intent, User Comments, Feedback, and Node. You can use this to analyze the experience of the user when they are interacting with your agent.

*   To navigate to the User Feedback navigate to **Agent-> Learning-> User Feedback**
    

*   In the User Feedback, you can see the user, Step (node), Intent type, Positive (Feedback), and message(if any).
    
*   Try giving some feedback to your Agent and observe that feedback here.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels

[Exercise 7.1: Configuring an agent in a web page](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.1-configuring-an-agent-in-a-web-page)[Exercise 7.2: Configuring a SMS Channel](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.2-configuring-a-sms-channel)[Exercise 7.3: Configuring a Facebook Messenger Channel](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.3-configuring-a-facebook-messenger-channel)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.1-configuring-an-agent-in-a-web-page

You can embed an Agent on a web page by just including a script tag block. You can retrieve the script tag to use by navigating to Agent-> Settings -> Channels.

Find the web channel on the page and click on the link View. A dialog appears, click on the Test button which shows the script tag:

### 

**Embedding the Agent in a Web Page**

In the course materials, we have provided a stylized web page in which you can showcase your agent. Perform the following:

1.  Download the HTML page from here to your local computer.
    
2.  Find the UUID that appears in the URL for the test page described above.
    
3.  Using your preferred HTML at the bottom of the page replace the UUID with the text ###replace with agent id### at the bottom of the page.
    
4.  Open the page in a web browser.
    
5.  You can open the chat window by clicking on the agent's avatar.
    
6.  Optionally you can click on one of the example queries listed under each of the cards for each of the listed skills.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.2-configuring-a-sms-channel

The next exercise is to configure your agent to communicate over an SMS channel.

The steps to configure the SMS channel:

1.  Navigate to Agent-> Settings -> Channels
    
2.  Find the SMS channel card and click on the Connect link.
    
3.  The Connect link will change to Disconnect.
    
4.  Use the telephone number provided to send an SMS message from your mobile.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-7-channels/exercise-7.3-configuring-a-facebook-messenger-channel

Configuring an agent to use Facebook Messenger requires configuration on Facebook and the Avaamo agent.

See [Setup and Configuration of Facebook Messenger](/user-guide/how-to/build-agents/configure-agents/deploy/facebook-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration

[Exercise 8.1: Invoking a Live Agent](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration/exercise-8.1-invoking-a-live-agent)[Exercise 8.2: Avaamo Live Agent Console](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration/exercise-8.2-avaamo-live-agent-console)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration/exercise-8.1-invoking-a-live-agent

If the agent detects either frustration or request to talk with the live agent then the user will be prompted to ask if they want to talk with a live agent:

Clicking on the Chat with an Agent link then connects you to the Live Agent Chat configured for the agent. In the case above this the built-in live agent in the Avaamo platform. You can explicitly invoke a request to the agent by typing: `#talk to agent` in the chat window.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-8-live-agent-integration/exercise-8.2-avaamo-live-agent-console

The Avaamo platform contains a built-in Live Agent Console that you can use the exercise the live agent handoff.

*   You open the Avaamo Live Agent Console by first navigating to the Agent Dashboard:
    

*   Next click on the circle in the upper corner of the browser which will display a pop-menu: 
    
*   Select the Agent Console menu item which then displays the agent console:
    

*   If there are pending agent conversations they will be shown at the bottom of the page. Click on the button which displays:
    
*   Click on the Accept button and then click on the conversation on the list. You can now have a direct conversation with the user via the agent chat window.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support

[Exercise 9.1: Adding a Language to an Agent](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support/exercise-9.1-adding-a-language-to-an-agent)[Exercise 9.2: Overriding Default Language Translation](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support/exercise-9.2-overriding-default-language-translation)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support/exercise-9.1-adding-a-language-to-an-agent

*   Open an agent and navigate to the **Agent-> Configuration -> Language**:
    
*   Click on the Add language button in the Language page which then displays a pop-up menu as shown here:
    

*   In the search text field type: Spanish. Next, select the menu item _Spanish (es-US)_ to select the US dialect of the Spanish language.
    
*   Save the agent. Open the agent chat window and type the following: #switch\_langage es-US. You can now interact with the agent in the Spanish language.
    
*   Use Google Translate to formulate Spanish questions from English like the following example (Using the My Assistant agent): _Order pizza_ => _Ordenar pizza_

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-9-language-support/exercise-9.2-overriding-default-language-translation

Existing output to the user is automatically translated but can be overridden by different responses in the added language.

First, you need to add the language to the dialog skill. In this example, we are using the **Order Pizza** skill. Adding a language is done similarly to the agent. Open the skill, navigate to **Configuration -> Language**. Add the language in the same manner as the previous exercise. Save the skill.

Navigate to the Implementation page and click on node 1. A dialog is then displayed. Click on the drop-down menu that is showing English (US) and select the item Spanish (es-US). The Spanish text is translated from English text by default. You can now override the Spanish as needed.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission

[Exercise 10.1: Understanding Life-Cycle Management](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission/exercise-10.1-understanding-life-cycle-management)[Exercise 10.2: Understand Agent Permission](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission/exercise-10.2-understand-agent-permission)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission/exercise-10.1-understanding-life-cycle-management

Typically the agent goes through different stages in its lifecycle right from the time of its inception to the time it is pushed into production. Agents typically follow Development, Testing, Staging, and production. In the new Avaamo 5.0, you can create users with different roles for collaborating in each stage of the agent lifecycle. This allows teams to develop, test, stage, and deploy agents in a different environment, thereby providing the required compliance.

**10.1.1** **Development**

Users with development roles gather requirements, configure the development environment, start designing and developing agents and skills as well as agents. The developers can also create copies of the agent and then prepare the agent for testing for the testing team.

**10.1.2** **Testing**

Users with a testing role testers can promote agents from development to testing environment, configure the test environment, test the agent’s functionality, and report bugs and issues. Once testing is complete they notify the staging users, to promote the bot from testing to staging.

**10.1.3** **Staging**

Users with the staging role can promote the agents from testing to staging, configure the staging environment, test the agent’s functionality by replicating production instance, report bugs, and issues. Staging users can also pull updates from testing to staging for re-testing the issues reported.

**10.1.4** **Production**

Users with the production role can promote agents from staging to the production environment. Production users can configure the production environment and report bugs and issuers in the live production instance. Production users can also pull updates from staging to production and also apply hot-fixes to the production if and when necessary.

**10.1.5** **Reference Documentation**

See [Plan your development process agent life cycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle), for more information.

Along with these stages, you can assign different roles to the users, to assign different roles:

*   Log in to the user profile
    
*   Grant roles such as Development, Testing, Staging, and Production
    

**Note:** You can only give access to the users if you have the setting role assigned. If you don’t have the setting role then contact your admin.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-10-life-cycle-management-and-agent-permission/exercise-10.2-understand-agent-permission

When you create an agent, you become the owner of the agent. Also, when a user promotes an agent, he becomes the owner of the agent. As the owner of the agent, you can now assign different permissions to different people within your company.

There are 4 types of permissions available for the agent:

*   **View** - Users can only view the agent, but cannot edit it
    
*   **Edit** - The users can view and edit the agent
    
*   **Publish** - Users can view agent, edit agent and publish skills from the agent to the skill store
    
*   **Owner** - Full access to the agent. Users can view agent, edit agent, publish agent from the agent to skill store, and edit agent permissions.
    

To give users permission to access your agent navigate to **Agent -> Configuration -> Permission**

See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store

[Exercise 11.1: Avaamo Skill store](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.1-avaamo-skill-store)[Exercise 11.2: Company Skill Store](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.2-company-skill-store)[Exercise 11.3: Creating new categories in the skill store](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.3-creating-new-categories-in-the-skill-store)[Exercise 11.4: Adding Skills to the Company skill store](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.4-adding-skills-to-the-company-skill-store)[Exercise 11.5: Updating a published skill to a new version](/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.5-updating-a-published-skill-to-a-new-version)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.1-avaamo-skill-store

The Avaamo skill store is the central repository of all the skills. These skills are prebuilt and pre-trained. You can use import these skills into your agent and use it as it is or customize it to your liking. To access the skill store navigate to Home Screen -> Skill Store.

In the skill store you will find prebuilt skills under the following categories:

*   Banking
    
*   Travel
    
*   Mutual fund,
    
*   Life Insurance
    
*   Telecom
    
*   Service Desk
    
*   Healthcare
    
*   Education
    
*   Stock Broking
    
*   Human Resources
    
*   Supply Chain
    
*   Health Insurance.
    

See [Avaamo skills](https://docs.avaamo.com/v5/how-to/manage-skills-store#avaamo-skills), for more information.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.2-company-skill-store

The Company skill store contains a collection of all published skills available in your company skill store across certain user-defined categories.

Avaamo Platform also allows you to group your company skills into different categories. By default, four categories are available - Category A, Category B, Category C, and Category D. Based on how you want to organize these skills, you can create your own categories and add them as well.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.3-creating-new-categories-in-the-skill-store

To create a new category in the skill store do the following:

• Navigate to company skills and click on New category

• Give your category a name and save. Your category will now appear in the company skills

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.4-adding-skills-to-the-company-skill-store

Once you are done building and testing the skill, and you would like to share your skill with other users, then click on the hamburger menu available in the skill and click on Publish to skill store as shown below:

Once you click on publish to skill store, fill in the skill details as shown below:

Click on publish and your skill will be available in the company skill store in the category you selected

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-1-creating-my-agent/chapter-11-skill-store/exercise-11.5-updating-a-published-skill-to-a-new-version

Once you publish a skill, you can make changes and upgrade your company skill store with the latest changes that you have made to your skill. Your skill can be upgraded by as shown below:

Click republish to the skill store, update the changes, and also change the version number to help users understand that you have changed/ updated your skill.

Once you have made all the changes, you will be asked if you want to update your skill. Click Yes

Your changes will now be available in the company skill store.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-3-advanced-topics

[Chapter 12: Debugging Tools](/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-22-debugging-tools)[Chapter 13: Programming](/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-23-programming)[Chapter 14: APIs](/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-24-apis)

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-22-debugging-tools

After completing the exercises in the lesson you will be able to:

*   Use logging to troubleshoot code
    
*   View Javascript errors
    

### 

**12.1** **Exercise: Logging Within JavaScript Blocks**

You can use console.log() to log errors and monitor these errors while testing the agent. Let us see how to add a console.log() a message and see it in the debug logs.

Navigate to your order pizza skill in my assistant agent:

*   In the first node of the Dialog skill add a message to the console.
    
*   Add a JavaScript response node in the first node and add the following code:
    

`console.log("Hello World! This is my first console.log")`

*   Navigate to your **Agent-> Debug-> Debug log**. This will open the debugging log on the left side of the screen. Test your agent and your console.log() statement will appear in the debugging logs.
    

It is a good practice to add console.log() in API calls so that it is easier to figure out errors if any**.**

### 

**12.2** **Exercise: Viewing JavaScript Errors**

You can view JavaScript errors from the agent dashboard.

*   To view JavaScript errors navigate to **Agent -> Debug -> JS Errors**
    
*   In the agent, My Assistant, navigate to JS errors to see if you can find any errors in your agent.
    

See [Debug agents](/user-guide/how-to/build-agents/debug-agents), for more information.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-23-programming

After completing the exercises in the lesson you will be able to:

*   Understand the capabilities of the context object
    
*   How to store and retrieve data from the agent
    
*   How to use environment variables for runtime configuration
    
*   How to send an SMS message from the agent.
    
*   How to send an email message from the agent.
    
*   How you can programmatically switch the language used by the agent
    

### 

**13.1** **Exercise: Context object**

See [Context](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context), for more information

### 

**13.2** **Exercise: Context variables**

See [Variables](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/variables), for more information

### 

**13.3** **Exercise: Storing and retrieving data**

See [Storage](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/storage), for more information

### 

**13.4** **Exercise: Environment variables**

See [Define environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables), for more information

### 

**13.5** **Exercise: Dynamic responses**

See [Build dynamic skill responses](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response), for more information

### 

**13.6** **Exercise: Sending an SMS**

See [SMS.send](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications#sms-send), for more information

### 

**13.7** **Exercise: Sending an Email**

See [Email.send](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications#email-send), for more information

### 

**13.8** **Exercise: Switching to another language**

See [Language.switch](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/language.switch), for more information.

---

## Source: https://docs.avaamo.com/user-guide/tutorials-and-exercises/part-3-advanced-topics/chapter-24-apis

After completing the exercises in the lesson you will be able to:

*   Understand how to authenticate your API client
    
*   Create and configure a custom channel
    
*   Send a message to an agent via an API
    
*   Getting messages from an agent
    

See [REST APIs](/user-guide/ref/avaamo-platform-api-documentation), for a complete list of supported APIs.

### 

**14.1** **Exercise: Authenticating to Avaamo APIs**

See [Header in Message API](/user-guide/ref/avaamo-platform-api-documentation/message-api#post-agent-messages), for more information.

### 

**14.2** **Exercise: Configuring a Custom Channel**

See [Custom Channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel), for more information.

### 

**14.3** **Exercise: Sending Messages to an Agent**

See [Examples](/user-guide/ref/avaamo-platform-api-documentation/message-api#examples), for more information.

### 

**14.4** **Exercise: Getting Messages from an Agent**

See [Get Message](/user-guide/ref/avaamo-platform-api-documentation/message-api#get-agent-messages), for more information.

### 

**14.5** **Exercise: Change Log**

See [Changelog](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis), for more information.

---
