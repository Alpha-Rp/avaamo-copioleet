# How-To — Miscellaneous
> 3 pages

---

## Source: https://docs.avaamo.com/user-guide/how-to/plan-your-development-process-agent-life-cycle

Typically, any agent goes through different stages in its life cycle from inception to production - Development, Testing, Staging, and Production. You can leverage the Avaamo Platform to iteratively design and build agents through all these different stages of the life cycle followed in any enterprise product development. This approach enables:

*   **Structured release management process**: You can develop, test, stage, and then deploy the agents in different environments within the Avaamo Conversation AI Platform. Based on your roles and permission, you can promote an agent from one stage to another in its life cycle. When an agent is promoted, an exact clone of the agent is created in the promoted environment. Users with the required roles can work on the agent in the promoted environment without affecting the agent in other stages. See [Stages in agent lifecycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle#stages-in-agent-life-cycle), for more information.
    
*   **Different teams to participate and collaborate:** This approach also allows different teams to participate and collaborate in different stages of the agent life cycle. See [Roles in the agent life cycle](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions#roles-in-agent-life-cycle), for more information on how to assign the required roles and permissions for users in different stages of an agent life cycle.
    

The following illustration depicts the life cycle of an agent in the Avaamo Platform:

See [How does it work?](/user-guide/how-to/plan-your-development-process-agent-life-cycle#how-does-it-work) to understand the completed workflow of an agent life cycle.

## 

Stages in the agent life cycle

The agent life cycle is comprised of various stages in which an agent is deployed and executed within the Avaamo Conversation AI Platform:

*   **Development**: This is the environment in which the development team originally develops
    
    the agents, skills, and configurations around agents.
    
*   **Testing:** This is the environment in which the testing team perform either manual testing or
    
    automated checks using a tool like regression testing to test and certify the functionality (new and changed) of the agents and skills.
    
*   **Staging**: This is an environment for testing that exactly resembles a production environment. It seeks to mirror an actual production environment as closely as possible and may connect to other production services, using production or other pre-production integrations system configurations.
    
*   **Production**: The production environment is also known as live, as it is the environment that users directly interact with. Deploying agents to production is the most sensitive step and mostly done by very specific teams with access to a production system where the Avaamo agent is integrated. A production environment includes sensitive access information with which agents are integrated such as API access token of other production systems, system username password of other production systems.
    

## 

How does it work?

Broadly, the following lists a typical workflow in an agent life cycle:

**Note**: See [Design agents](/user-guide/how-to/build-agents/design-agents), for more information on best practices for building agents in the Avaamo Platform.

### 

Create users and roles

Identify a team of people responsible for working in different stages of an agent's life cycle. Create users and assign required roles to collaborate and participate in different stages such as Development, Testing, Staging, and Production. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

**Development**

The following illustration depicts a typical workflow of an agent in the development stage:

*   Gather all the requirements for developing an agent. Start and plan from a small definitive set of requirements.
    
    *   Developers can start designing the agent by learning all the best practices. See [Design agents](/user-guide/how-to/build-agents/design-agents), for more information.
        
    *   Build the agent either from scratch or by importing from sample agents. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
        
    *   Developers must ensure to test their agents incrementally using Simulator. See [Simulator](/user-guide/how-to/build-agents/test-agents#simulator), for more information.
        
    *   Developers can use debugging tools such as Debug logs, JSErrors, or Conversation history to analyze and fix defects. See [Debug agents](/user-guide/how-to/build-agents/debug-agents), for more information. Individual skills can also be debugged using insights and logs provided at the skill level.
        
    
*   Once the first iteration of development is completed, the developer notifies a tester and provides at least view permission for the agent to the tester. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.
    

**Key points (Development)**:

*   Involve only Developers during agent development.
    
*   Perform unit testing at each stage as you develop agents.
    

### 

**Testing**

The following illustration depicts a typical workflow of an agent in the testing stage:

*   The tester promotes the agent from development to testing stage,
    
    *   A tester can use manual checks or automated checks tools such as Regression testing to test the agents. See [Regression Testing](/user-guide/how-to/build-agents/test-agents#regression-testing), for more information.
        
    *   During testing, testers communicate with the developers to fix issues and defects. The developer fixes these issues in the development stage that can be pulled by the tester using the **Pull updates** option. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.
        
    

*   Once the testing is completed and certified, the tester notifies a staging user and provides at least view permission for the agent to the staging user.
    

**Key points (Testing)**:

*   Involve only Testers in the Testing phase.
    
*   Perform thorough regression testing on your agents.
    

### 

**Staging**

The following illustration depicts a typical workflow of an agent in staging:

*   The staging user promotes the agent from testing to the staging stage.
    
    *   During staging, a staging user may connect to other production services, using production or other pre-production integrations system configurations.
        
    *   Similar to the testing stage, the staging user communicates with the developers to fix issues and defects. The developer fixes these issues in the development stage that can be pulled into testing and then staging using the Pull updates option. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.
        
    

*   Once the staging environment is stable, the staging user tester notifies a production user and provides at least view permission for the agent to the production user.
    

**Key points (Staging)**:

*   The staging environment must be an exact replica of your production environment.
    
*   Perform thorough testing on your agent before moving to production.
    

### 

**Production**

The following illustration depicts a typical workflow of an agent in production:

*   The production user promotes the agent from staging to the production stage.
    
    *   This is where the agent is live, as it is the environment that users directly interact with.
        
    *   Any defects or issues that require hotfixes can be implemented in the production environment itself. However, a production user must ensure to communicate the same to the developer working on the same agent in the development environment. This ensures that the changes are implemented in the development instance and any pull's from the development does not overwrite the changes to the production hot-fixes.
        
    *   If there are any major changes required, then it is recommended that the agent goes through the complete cycle beginning from the development stage.
        
    

Improvements and enhancements to an agent is an iterative process and the cycle from development to production continues. Avaamo Platform provides several tools and roles to monitor the performance of the agents. These can be used to continuously improve the agent to provide a better user experience. See [Monitor agents](/user-guide/how-to/build-agents/monitor-and-analyze), for more information.

**Key points (Production)**:

*   Do not perform any testing or debugging in the production environment.
    
*   Do not perform any load or regression testing in the production environment. Such testing must be done in the staging or testing environment.
    

## 

Key points

It is recommended to make a note of the following key points applicable to the agent life cycle:

*   An agent can be promoted from one stage to another only once. Once promoted, you cannot revert the operation. However, you can delete the promoted agent and promote it again from its previous stage.
    
*   When an agent is promoted to the next stage,
    
    *   The user who promoted the agent is the owner of the agent in the promoted stage. As an owner of the agent, the owner can also add other team members as required.
        
    *   The first step as an owner of the agent in any stage is to configure the agent with variables specific to the environment. See [Define environment variables](/user-guide/how-to/build-agents/configure-agents/define-environment-variables), for more information.
        
    *   An exact clone of the agent is created in the promoted environment. Users with the required roles can work on the agent in the promoted environment without affecting the agent in other stages.
        
    
*   The user in the promoted environment can use the Pull updates option available for each promoted agent to pull the updates from the previous stage.
    
*   Note that not all agent details are promoted or pulled from one stage to another when you promote or pull updates. See [What are not promoted or pulled?](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates#what-are-not-promoted-or-pulled) for more information.
    
*   Currently, all the notification process between stages is outside the scope of the platform and must be handled externally.

---

## Source: https://docs.avaamo.com/user-guide/how-to/manage-skills-store

Typically, an enterprise comprises of multiple agents, where each agent is a product on its own that helps users accomplish certain tasks. **Example**: Consider a finance company that handles three products - mutual funds, insurance, and home loans. Correspondingly, for each of these products company can build agents - "Mutual Fund agent", "Insurance Policy agent", and a "Home Loan agent".

Based on the business requirements, you can build different types of skills in each of your agents. Frequently, the functionality required for some of the skills across agents can be similar. The skills developed in one agent can be re-used in other agents within a company to accelerate the agent development process. Such re-usable skills can be published to **skill store**. See [Publish to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information. Once published, you can re-use the skills by importing the skill from skill store to the agent for quickly developing agents, instead of building skills from scratch. See [Import skill from skill store](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.

**Example**: Considering the finance company agents - "Mutual Fund agent", "Insurance Policy agent", and a "Home Loan agent", paying a premium requires a similar set of training data, entities, and JavaScript code across all these agents. You can develop a skill "Premium Payment" once in "Mutual Fund agent", publish to skill store, import to "Insurance Policy agent" or "Home Loan agent", and with minimal or no changes re-use in the other agents.

The following is an illustration of how publishing skills and importing skills work in the Avaamo Platform:

Hence, **skill store** is a centralized repository of all the published skills across different categories. In the Avaamo Platform UI, click the **Skill store** option in the top menu to view all skills in skill store:

## 

Skills in skill store

There are two groups of skills in the skill store:

*   **Avaamo skills**: Collection of various in-built skills across certain pre-defined categories already available in the skill store such as Travel, Healthcare, and ServiceDesk. These are pre-trained skills curated and managed by Avaamo. These skills are not specific to a company and available to all the users using the Avaamo Platform.
    

*   **Company skills**: When you are developing an agent, based on the functionality of the skill, you can choose to publish the skill to the skill store. These skills are specific to your company and available only to the users within the company.
    

The following table summarizes the key differences between Avaamo skills and Company skills:

Avaamo skills

Company skills

Collection of various in-built skills already available in the skill store across certain pre-defined categories.

Collection of all published skills available in your company skills across certain user-defined categories

Curated and managed by Avaamo

Curated and managed by people within your company

Cannot publish skills to Avaamo skill store

People within your company with appropriate roles and permissions can publish to the company skill store. See [Publish to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.

Not specific to a company and available to all the users using the Avaamo Platform.

Specific to a company and available only to the users within the company.

**Key Points**:

*   Before publishing skills to skill store, consider editing the category name in your **Company skills** based on your business model. Click the category in the **Company skills** to edit the category name. See [Publish to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), for more information.
    
*   Click **\+ New category** to add additional categories.
    
*   Only users with the **Settings** role can edit the category name. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    

Click any skill in the skill store, to view the entities, JavaScript files, and document links included in the skill at the time of publishing the skill.

## 

Search skills in skill store

You can search for skills in the Skill store by using the skill name or skill description provided at the time of publishing the skill. Additionally, each published skill also includes a skill version and sample training data of the skill that helps to identify the purpose of the skill.

**Key Points**:

*   To aid better search, it is recommended to provide the skill name, description, and intents in a short descriptive way to completely understand what the skill does. This helps to easily search for the required skill in the skill store. See Design skills for more information on some examples and best practices.
    
*   Skill names are not unique.
    

*   In the Avaamo Platform UI, click the **Skill store** option in the top menu.
    
*   Navigate to the specific category in **Avaamo skills** or **Company skills** in the left navigation menu.
    
*   By default, all the skills in the skill store within a category are displayed in descending order of the last updated timestamp.
    
*   Search for specific skills in the skill store using the skill name or skill description. All the skills in the skill store that contains the search keyword in either the skill name or skill description are displayed.
    

## 

Delete skill from skill store

If a skill is no longer required in the skill store, you can delete the skill from the skill store using the **Delete** option and later publish the skill again from the agent as required.

**Note:** Only users with the **Settings** role can delete the skill from the Skill store. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

## 

Frequently asked questions (FAQs)

The following lists a few commonly asked FAQs about skill store, import, and publish:

### 

1\. Can all types of skills be published?

Yes, all skills - Dialog, Dynamic Q&A, Smalltalk, and Answers, can be published to the Skill store.

### 

2\. I have made some changes to my skill. What happens when I re-import it?

When you re-import a skill from the skill store, the skill in your agent is completely replaced with the skill from the skill store, except for duplicate entities and JS. Hence, all your local skills changes are overwritten. See [Re-import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.

### 

3\. How can I preserve the local changes in imported skills?

Currently, you can use the following methods to preserve your local changes:

*   Use **Make a copy** to create a duplicate copy of your agent. See [Make a copy](/user-guide/how-to/build-agents/manage-agents/make-a-copy), for more information.
    
*   Use the **Backup & Export** option to create a backup copy of your agent in your local system. Later, you can use the exported copy and **import** the same to any existing agent in any account.
    
    See [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.
    

You can use the skills from the copied agent or the imported agent to manually compare and merge.

### 

4\. Can I merge my local skill changes with an updated version of the skill in the skill store?

Currently, you cannot merge the local skill changes with the updated version of the skill in the skill store. When you re-import a skill from the skill store, the skill in your agent is completely replaced with the skill from the skill store, except for duplicate entities and JS. Hence, all your local skills changes are overwritten. See [Re-import skill](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.

### 

5\. Can I publish a skill that was imported from the skill store?

Yes. If you have appropriate permissions, you can publish a skill imported from the skill store. See [Roles and permissions](applewebdata://CC4E2907-AF33-493E-836D-F82990C2FC5E/@avaamo/s/avaamo/~/drafts/-M5k7GHD45QIIzLybGMd/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

6\. Can I publish multiple versions of skills to the skill store?

No. Only one version of skill published from an agent is available in the skill store.

### 

7\. Are there any best practices for publishing skills to skill store?

Yes, there are a few best practices that you can follow for publishing a skill to skill store. See [Best practices](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#best-practices), to learn more.

### 

8\. Can I revert a published skill to the skill store?

You cannot revert a published skill in the skill store. However, a user with the **Settings** role can delete the skill from the skill store and the skill can be published again. See [Delete skill from skill store](/user-guide/how-to/manage-skills-store#delete-skill-from-skill-store), for more information.

---

## Source: https://docs.avaamo.com/user-guide/how-to/agent-console

Avaamo platform supports integration with a **live agent** for scenarios, where there is a need for human intervention. If the user requests or if the agent senses dissatisfaction, frustration, anger, or if the agent has defined intents for transfer, it seamlessly transfers the conversation to a human agent system such as Avaamo Live Agent Or Zendesk. **Agent Console** is an interface of Avaamo live agent console for live agent interaction with users.

See [Switch to live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent), for more information.

## 

**Access Agent Console**

**Notes**:

*   This option is available only for users with the **Live agent** or **Admin** role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.
    
*   Currently, the Agent console is certified on the latest version of the Chrome browser.
    
*   Currently, each conversation with a live agent starts as a fresh chat, and hence the conversation history of the previous live agent chat is not available in the Agent Console.
    
*   Avaamo platform offers a new and enhanced Live agent console which is designed to enhance engagement and facilitate efficient workflow management for live agents during customer interactions. This is enabled only on demand. Contact Avaamo support, for further assistance. See [Live agent console](/user-guide/live-agent-console/overview), for more information.
    

*   In the Avaamo Platform Dashboard, right-click on the user name available at the top-right corner and click the **Agent Console** option.
    

*   The **Agent Console** page is opened in a new tab. This is the console used for Avaamo live agent interaction with users.
    
*   When a live agent chat is initiated, a new request is available in the Agent Console with a notification sound.
    

**Key Point**: Ensure that you have allowed notifications in your browser settings to receive the notification sound.

*   Click the request to start a live agent conversation with the user. You can view the user details and the IP address from where the request is initiated. See [Masking IP address in Agent Console](/user-guide/how-to/agent-console#masking-ip-address-in-agent-console), for more information on how to mask the IP address in the Agent Console for security reasons.
    

*   Click **Accept** to start the conversation with the user. By default, the last 30 messages between the agent and the user is sent to the live agent. This helps the live agent understand the context of the conversation better for responding to user queries. As you continue the conversation with the user, the text that you enter in the Agent Console is displayed to the user in the agent widget and vice-versa, thus facilitating a two-way communication:
    

**Note**: After you accept the chat request, you can also view the details of the user who initiated the request by clicking the User profile icon in the top-right corner

*   When a user terminates a chat or ends chat with a live agent, the following notification is received in the Live agent console that the chat is terminated:
    

## 

Masking location IP address in Agent Console

You can mask the location IP address in the Agent Console [for a specific agent](/user-guide/how-to/agent-console#at-the-agent-level). When masking is enabled, you cannot view the location IP address from where the request is initiated, as the location IP address is masked in the Live agent console.

The following illustration depicts how the location IP address is masked in the Accept chat request pop-up:

The following illustration depicts how the location IP address is masked in the User profile:

### 

**At the agent level**

IP address masking is enabled by default for all agents created after the 9.0.0 release. If you wish to enable IP address masking for an agent created prior, you can contact Avaamo Support to request activation for that specific agent. See [How to mask the location IP address in Agent Console?](/user-guide/overview-and-concepts/advanced-concepts/information-masking#10-how-to-mask-the-location-ip-address-in-agent-console), for more information.

---
