# LLaMB (Language Model Builder)
> 39 pages

---

## Source: https://docs.avaamo.com/user-guide/llamb/overview-key-features

`**LLaMB - Large Language Model for Business**` is an exclusive product offering from the Avaamo Conversational AI Platform to harness the power of enterprise content coupled with Generative AI in your agents.

LLaMB is a new low-code framework for building powerful end-user generative AI agents in the enterprise safely, securely, and fast. LLaMB provides tools to eliminate hallucinations, integrate enterprise systems, and support any LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) of your choice.

LLaMB utilizes LLM technology to offer inherently personalized and summarized results while maintaining the required level of security and compliance for enterprises. It is a practical and secure approach to deploying LLMs in the enterprise, thereby enhancing the knowledge search experience for both employees and customers.

Here's a quick sneak peek at LLaMB:

This article outlines the key features of LLaMB and the next steps to leverage LLaMB product offering in the Avaamo Conversational AI Platform.

## 

Key features

### 

Conversation completeness - Full Sentences and Complete Answers

The LLaMB responses are precise and complete sentences, a similar answer you might expect when communicating with another person in a regular conversation. The responses are not limited to simple one-word responses but can include detailed explanations, descriptions, or discussions, depending on the complexity of the question. It makes your agent more intuitive and user-friendly, simulating human-like interactions.

The following is an illustration to depict how LLaMB can generate natural language answers, close to a human conversation:

*   **Natural input:** Users can input queries, commands, or prompts in a conversational style, using natural language rather than adhering to a specific syntax or format. Similarly, LLaMB can understand the context of the conversation and provide complete answers in a way that mirrors natural human conversation.
    
*   **Auto-waiting message:** While LLaMB is waiting to gather and collect information from verified sources, it informs users on the same and engages users in a conversation that feels comfortable and familiar.
    
*   **Generated precise answer:** LLaMB excels in providing precise and context-specific answer summarization and comprehension. Leveraging on the vast amount of data that is already ingested and trained in the knowledge base, LLaMB can understand and grasp the meaning of the input provided to it and generate appropriate and relevant summarized responses.
    
*   **Source attribution**: All responses from LLaMB are provided with a source reference, indicating precisely the source from which the answers are derived. This means that only verified content references fed to LLaMB are used for providing responses, resulting in accurate, trustworthy, and secure inferred answers.
    

### 

Rich Rendering of Tabular Content

LLaMB provides the capability to comprehend information within intricate tables, deducing responses to user queries directly from the table's content. Unlike merely identifying and highlighting answers within the table, LLaMB goes beyond interpreting the user's query, extracting pertinent information, and providing a summarized response. This nuanced approach ensures that LLaMB not only locates answers within the table but also comprehends the user's query contextually, delivering a concise summary of the relevant information.

The following is an illustration to depict how LLaMB can generate nuanced city/role-based answers from tabular content:

*   Each response from the LLaMB content includes a link to `in-line source` from where the response is derived.
    
*   LLaMB can auto-parse complex source tables.
    
*   No configuration or training is required to parse tables in LLaMB.
    

### 

Fluid conversations - Natural language answers

"Fluid conversations" is a phrase to describe a conversation that flows easily and naturally. LLaMB generates natural language answers to user queries that are coherent, contextually appropriate, and that is easily understandable by a person. LLaMB engages users in dialogue that closely mimics human conversation, hence enhancing user experience by making interactions more intuitive and enjoyable.

The following is an illustration to depict how LLaMB can generate natural language answers, close to a human conversation:

*   **Coreference resolution:** LLaMB can identify and link expressions in a text that refer to the same entity in a multi-turn conversation, hence, the responses are more accurate and coherent allowing the conversation to flow naturally.
    
*   **Human-like conversation**: LLaMB responses are not limited to simple one-word responses but can include detailed explanations, descriptions, or discussions, depending on the complexity of the question. It makes your agent more intuitive and user-friendly, simulating human-like interactions.
    
*   **Deep semantic understanding**: LLaMB can comprehend the meaning of language beyond surface-level syntax by understanding the context, and relationships between words, and grasping the nuances of language semantics.
    
*   **Conversational memory**: LLaMB can remember and maintain context throughout a conversation. This enables the system to understand references, callbacks, and evolving topics within the dialogue.
    

### 

Trust and Secure

LLM APIs are readily available for everyone's use. The primary concern when it comes to enterprise applications is "Trust and Security". Raw Model APIs when piped directly into the enterprise are very vulnerable. Moreover, these models are subject to adversarial attacks such as prompt injection.

LLaMB comes with all the key building blocks required to build and deploy enterprise LLM applications safely and securely. The following are key focus areas that help in building trust and security within enterprises when using LLaMB:

**Ownership and Control**: With LLaMB, you have the complete and absolute ownership of the data. This means that you own and control what data is ingested to LLaMB and this internally controls how the responses are presented to the users. LLaMB uses only the content ingested to generate answers. The answers are "generated" implying that LLaMB does not engage in learning from your usage. Each interaction is treated as an independent prompt, and the LLaMB doesn't retain information from prior messages in the conversation.

**Security**: With LLaMB, all the content you feed and the agent you build and deploy is via the Avaamo Conversational AI Platform. The platform combines enterprise-grade security features with rigorous compliance with industry standards to ensure your data is always protected and secure. See [Security at Avaamo](https://avaamo.ai/conversational-ai-security/) for more information on the compliances and security regulations list. The trust and security layer.

### 

Easy ingestion pipeline: No more parsing templates!

LLaMB can seamlessly process different types of file format ingestion such as PDF, Excel (xlsx), and Word documents (docx), eliminating the need for any preprocessing or parsing templates. For HTML content, the requirement for parsing templates has been drastically simplified.

This implies that the sole prerequisite before utilizing LLaMB is to have the content readily available. Once the content is prepared, the straightforward process involves enabling LLaMB, ingesting the content, and witnessing the seamless transformation without any additional complexities.

The following illustrates how LLaMB can generate nuanced vaccination/age/brand answers from multiple tabular content. Here, in the query, the vaccination is asked for a 15-year-old, unvaccinated person, and dosage is required from multiple brands.

*   **Multi-source summarization**: LLaMB can infer and summarize the content from multiple sources, say, for example, from multiple tables by understanding the context of the user's query, infer, and summarize precisely with appropriate contextual responses.
    
*   **Deep coreference resolution:** LLaMB can map context and co-reference from multiple sources based on the context in the user's query, summarize the results, and provide a comprehensive response to the user.
    
*   LLaMB can parse complex tables without the need for any pre-processing utility
    
*   **Multiple source attribution**: All responses from LLaMB are provided with a source reference, indicating precisely the source from which the answers are derived. If multiple sources of content are used for inferring answers, then multiple source attribution is provided. This means that only verified content references fed to LLaMB are used for providing responses, resulting in accurate, trustworthy, and secure inferred answers.
    
*   **Seamless content integration using the Content connector:** Using Content Connector, users can now integrate a vast variety of content directly from their repositories into the skill, streamlining the content integration and management process. See [Content connector](/user-guide/datasync-ai/overview-key-features), for more information.
    

See [Parsing templates](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates), for more information.

### 

Soft unhandled (Active redirect)

LLaMB provides the capability to gracefully redirect users when faced with unhandled responses, a feature known as `Soft Unhandled`.

In instances where the agent fails to comprehend a user query, it defaults to an unhandled intent response, stating, "_I am sorry. I don't have an answer for that._" The `Soft Unhandled` feature maintains the acknowledgment of the agent's inability to provide an answer but does so with a courteous and polished response. This feature aims to enhance user interaction by:

*   Creating a pleasant user experience during interactions.
    
*   Establishing a soft and reassuring tone in the agent's response.
    
*   Conveying the impression that, although unable to address certain queries, the agent is still actively assisting with those it can answer.
    

Soft Unhandled

Unhandled

See [Soft unhandled](/user-guide/llamb/soft-unhandled-active-redirect), for more information.

### 

Multi-language support

LLaMB enables seamless conversations in multiple languages. LLaMB supports real-time streaming translation across all supported languages in the Avaamo Conversational AI Platform. Users can interact with the agent in any supported language, and the agent will respond in the same language—even if the original content is in English. This enables a seamless multilingual experience without the need to maintain content in multiple languages, significantly expanding LLaMB’s global reach and accessibility.

Refer [Multi-language support](/user-guide/llamb/multi-language-support), for more information.

## 

Next steps

1.  Start by understanding [key terms](/user-guide/llamb/key-terms) in the LLaMB product.
    
2.  Understand what is required in the [Before you begin](/user-guide/llamb/before-you-begin) section.
    
3.  You are now ready to [get started](/user-guide/llamb/get-started) by exploring LLaMB in the Avaamo Conversational AI Platform.

---

## Source: https://docs.avaamo.com/user-guide/llamb/key-terms

This article introduces a few key terms specific to the LLaMB product in the Avaamo Conversational AI Platform:

*   **LLaMB**: `LLaMB - Large Language Model for Business` is an exclusive product offering from the Avaamo Conversational AI Platform to harness the power of enterprise content coupled with Generative AI in your agents. It is a full stack, low code toolset to build, deploy, and maintain LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) applications at enterprise scale. See [Overview - Key features](/user-guide/llamb/overview-key-features), for more information on LLaMB.
    
*   **Generations**: An agent can either respond to users by referencing a previously stored answer (in its cache), or by using an LLM. Only the LLM-based responses count towards your generation quota. Generations are displayed in the `LLaMB -> Usage` page at the account level. See [Generation Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage#generation-usage), for more information.
    
*   **Cached responses**: For faster results and better efficiency the responses generated by LLaMB are cached. If a user asks the same or similar query, then instead of generating a response from LLM, the cached response is displayed to the user. See [Generation Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage#generation-usage), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/before-you-begin

Ensure that the following prerequisites are met before using LLaMB in the Avaamo Conversational AI Platform :

1.  [License to use LLaMB](/user-guide/llamb/before-you-begin#id-1.-license)
    
2.  [Be ready with the required enterprise content](/user-guide/llamb/before-you-begin#id-2.-content-readiness)
    
3.  [Know the supported deployment channels](/user-guide/llamb/before-you-begin#id-3.-deployment-channels)
    
4.  [Know the supported languages](/user-guide/llamb/before-you-begin#id-4.-supported-language)
    
5.  [Read through the best practices before using LLaMB](/user-guide/llamb/before-you-begin#id-5.-best-practices-and-guidelines)
    

### 

1\. License

LLaMB is enabled on demand. Contact your dedicated Customer Success Manager for further assistance to enable LLaMB in your account.

### 

2\. Content readiness

You can ingest the following types of documents in the `LLaMB Content` skill:

*   URL - Publicly accessible HTML content
    
*   CSV (Comma-separated values)
    
*   Microsoft Word document (docx)
    
*   Microsoft PowerPoint (pptx)
    
*   Microsoft Excel (xlsx)
    
*   HTML documents (html)
    

**Key points**:

*   If you are getting started with LLaMB, start with a simple document.
    
*   If you are using a PDF, check if the PDFs must have permission to read from and write to and not be access-controlled or password-protected.
    

### 

3\. Deployment channels

LLaMB can be deployed in the following channels:

*   [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel)
    
*   [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps)
    
*   [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps)
    
*   [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams)
    
*   [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel)
    

### 

4\. Supported language

LLaMB supports all [platform-supported](/user-guide/overview-and-concepts/advanced-concepts/language-pack#supported-languages) languages. However, documents can only be ingested in **en-US**, while user inputs and agent responses can be in multiple languages.

### 

5\. Best practices and guidelines

Building an enterprise agent is an iterative process and if this is the first time you are exploring LLaMB, then it is recommended to follow some of the curated set of best practices. See [LLaMB FAQs](/user-guide/llamb/llamb-faqs), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started

[Step 1: Create LLaMB Content skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill)[Step 2: Ingest enterprise content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content)[Step 3: Test your agent](/user-guide/llamb/get-started/step-3-test-your-agent)

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-1-create-llamb-content-skill

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   To edit an agent, navigate to the Agents tab in the top menu, search, and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    
*   You can apply the Outro messages to the LLaMB skill. Refer [Global Outro skill](/user-guide/how-to/build-agents/add-skills-to-agent#global-outro-skill), for more information.
    

**Key point:** PII data is masked by default in all LLaMB responses.

**To create LLaMB Content skill:**

*   In the Agent page, navigate to the Skills option in the left navigation menu, and click `Add skill` in the Agent Skills page.
    
*   In the `Skill builder` page, click `LLaMB Content`.
    
*   Specify the following details and click `Create`:
    

Parameters

Description

Maximum length

Skill name

Indicates the name of the skill.

50 characters

Skill description

Indicates the description of the skill. Use this to specify the purpose of the skill.

200 characters

Skill key

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill.

Supported characters: Alphanumeric and underscore

It is recommended that the key is of at least 3 characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the [flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as Goto node. It helps in easy identification and readability.

20 characters

Collect Feedback

Indicates whether you wish to enable user feedback. By default, it is set to true. Use the slider for setting to false.

NA

A new empty `LLaMB Content` skill is created. The next step is to add documents or URLs to the skill.

### 

Next Steps

You can start by [ingesting any of the supported file formats](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1) into your `LLaMB Content` skill. Once some content is uploaded successfully, you have created a knowledge base and your `LLaMB Content` skill is ready for [testing](/user-guide/llamb/get-started/step-3-test-your-agent).

You can then continue to fine-tune and edit the knowledge base by adding vocabularies and acronyms. See [Edit knowledge base](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content

[Create document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups)[Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content)[Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes)[View and edit knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge)[Common actions](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions)[Parsing templates](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates)[Advanced Settings](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings)

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups

`Document Groups` are used for categorizing and managing content uploaded in your agent. For example, you can upload information that belongs to different products in different document groups.

When you upload content to a document group, a knowledge base is created by extracting chunks of information from the content you upload.

You can upload any PDF or HTML pages in your `LLaMB content` skill. See [Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content), for more information.

### 

Steps to create a document group

1.  Open the `LLaMB content skill` and click `Add group` to create a Document group.
    
2.  Specify the following details and click `Create`:
    

Parameters

Description

Maximum length

Group name name

Indicates the name of the document group.

50 characters

Group description

Indicates the description of the document group. Use this to specify the purpose of the group.

200 characters

The newly created group is displayed in the `Documents Group` page. The count of `Total groups` is increased by one.

When you create a document group, a unique document group ID is generated. You can view the group ID when you click the three dots on the document group box and select `View/Edit`.

### 

View/edit a document group

You can view or edit a document group by clicking the three dots on the document group box and selecting `View/Edit`.

*   In the pop-up, you can view the details of the group, such as the Skill ID, Group ID, and Group UUID.
    
*   You can edit the `Group Name` and `Description`.
    

### 

Delete a document group

When you delete a group, all the knowledge stored in the group is deleted along with the group.

Steps to delete a document group:

1.  Click the three dots on the document group box and select delete.
    
2.  Click `Yes, delete it!` in the confirmation box.
    

### 

Disable a document group

When you disable a group, all the knowledge in the group is disabled and is not made available to the user.

To disable a group, click the three dots on the document group box and select disable. When a document group is disabled, it is marked as disabled.

A disabled group can be enabled at any time by clicking the three dots on the document group box and selecting the enable option.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content

You can ingest the following types of documents in the `LLaMB Content` skill:

*   URL - Publicly accessible HTML content
    
*   CSV (Comma-separated values)
    
*   Microsoft Word document (docx)
    
*   Microsoft PowerPoint (pptx)
    
*   Microsoft Excel (xlsx)
    
*   HTML documents (html)
    

**Note:** You can also ingest your articles or documents using the DataSync feature. Refer [DataSync](/user-guide/datasync-ai/overview-key-features), for for more information.

To upload content, you must first decide which document group you want to add the content to. See [Create Document Groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups) for more information on document groups.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create LLaMB skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information.
    
*   If you wish to edit skills in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

You can use the `Status` dropdown on the right side of the page to filter the documents based on the document upload status. Along with the status, you can also view the document count for each status in the dropdown. This feature helps when you have a large set of documents uploaded to a document group and want to view only the errored documents in the group.

### 

**Upload Documents**

*   Choose the document group to which you want to add documents. Click the `Document group` to open it.
    
*   Click `Add Documents`**.**
    
*   Click `Select Files` to upload documents. You can upload multiple documents at a time.
    
*   Add a `Preview URL` - Indicates the URL that is opened when the user clicks [Citation links](/user-guide/llamb/citation-links) in the response. This field is optional.
    
*   `Auto language detection toggle:` Allows you to enable or disable automatic detection of the uploaded document’s language.
    
*   `Language selection`**:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    
*   Click `Import`. The Avaamo Platform extracts content from the specified documents to seamlessly create a knowledge base. You can view the upload status for each document in the [Status](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content#document-status) column.
    

**Key Points**:

*   Avoid documents with too many graphics as those are ignored.
    
*   PDFs must have permission to read from and write to and must not be access-controlled or password-protected.
    
*   All text captured in a single knowledge base must be under 2 MB in base Unicode representation.
    

### 

**Upload from URL**

*   Choose the document group to which you want to upload content from a URL. Click on the document group to open it.
    
*   Click `Add URL`.
    

*   Specify the following details:
    
    1.  **URL:** The URL from which content is to be uploaded.
        
    2.  **Title:** Name/title for this content - to identify it.
        
    3.  **Language**: The language of the content.
        
    4.  **Template:** The template used for parsing the content. For URLs, is always an HTML document.
        
    5.  **Attributes**: Attributes associated with the content. Attributes allow you to personalize responses based on the user properties. See [Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes), for more information.
        
    
*   Click `Create`. The content from the specified URL is extracted by the Avaamo Platform to create a knowledge base seamlessly. You can view the status of the upload for each document in the `Documents` tab. You can view the status of the upload for each document in the [Status](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content#document-status) column.
    

**Key Points**:

*   It is recommended to use the Content Ingestion APIs to upload multiple URLs. See [Content Ingestion API](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.
    
*   Only the specific page in the URL is uploaded. Content from links to other pages or websites is not uploaded.
    
*   URL must not redirect to an authorization page.
    
*   URL must allow cross-origin from the Avaamo Platform.
    
*   URL must not include assets like PDFs, Docx. If you wish to process asset-type documents (PDFs), then you can upload them as documents instead of URLs.
    
*   Avoid pages with browser-window popups.
    
*   All the text captured in one knowledge base must be under 2 MB in base Unicode representation.
    

### 

Upload from API

You can also upload content using Content ingestion APIs. This allows you to set up a pipeline to ingest the content from any external system seamlessly. See [Content Ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

### 

Upload using DataSync

You can upload content using DataSync, which offers flexibility by allowing ingestion from various sources, such as `SharePoint, Websites, files,` and `ServiceNow`. Users can choose from these sources to integrate relevant content into their LLaMB skill, enhancing the versatility and adaptability of their content management workflows. See [DataSync AI](/user-guide/datasync-ai/overview-key-features), for more information.

### 

Document status

The `Status` can be any of the following values based on the status of the uploaded content:

*   **Uploaded:** The document has been added to the skill.
    
*   **Queued:** The content is placed in a queue for further processing.
    
*   **Extracting**: Chunks of content are being extracted.
    
*   **Learning:** Acronyms and vocabulary are being generated.
    
*   **Complete**: The document is uploaded successfully. The extracted knowledge from the document has been populated and is ready for use by any agent. See [View and Edit Knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.
    
*   **Error**: The upload failed. In case of errors, you can click `Error` in the `Status` column to view more details. See [Troubleshooting tips](/user-guide/llamb/troubleshooting-tips), for more information.
    
*   **Warning:** No business vocabulary was found in the document.
    

### 

Next Steps

After successfully ingesting the content, your agent is ready for testing. See [Test your agent](/user-guide/llamb/get-started/step-3-test-your-agent), for more information. You can continue to fine-tune and edit the knowledge base based on the user conversation history. See [View and Edit Knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.

You can also perform specific actions on the knowledge base such as retraining, editing the uploaded documents or URLs, or deleting the documents or URLs from the knowledge base, as required. See [Common actions](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes

In enterprise organizations, content is extensive and often tailored to specific user groups. LLaMB facilitates seamless content ingestion and allows you to associate attributes with uploaded content.

Document attributes are valuable for filtering responses and creating personalized responses based on user properties like region, roles, and products. By creating user properties and associating document attributes with the ingested content in LLaMB, personalized responses can be efficiently generated from your enterprise content.

### 

Scenario: How to use it?

Consider a scenario in an enterprise organization where different privacy policies apply based on the employee's region. There is a requirement to display responses from the appropriate region-specific privacy policy according to the employee's location.

For example, if an employee from India inquires about the privacy policy, the response must be provided from the policy applicable to the India region. Similarly, if an employee from the US inquires about the privacy policy, the response must be sourced from the policy applicable to the US region.

### 

Step 1: Identify attributes

Identify the set of attributes from the URLs you wish to ingest into your LLaMB content and understand how the content is organized. Categorizing the content helps in determining the necessary attributes for creating personalized responses.

For example, you can define "region" as an attribute name for regional content. Similarly, for a set of Microsoft Office 365 suite URLs, you could define "product" as an attribute name. Another example is using "status" as an attribute to display responses based on the employee's status.

### 

Step 2: Create user property

The next step is to create a user property based on your identified attributes.

For the [given scenario](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes#scenario-how-to-use-it), you can create a `region`user property in the `Configuration -> User property` section. See [User property](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

Step 3: Associate document attributes with the URL

Ingest the URL into your LLaMB Content skill and associate attributes based on the ingested content. Document attributes can be any name-value pair formatted as valid JSON. You can specify the attributes either at the time of [uploading the URL](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content#upload-from-url) or if the URL has already been uploaded, you can [edit the document](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit) to associate the required attributes.

**Key points:**

*   Document attributes must be valid JSON.
    
*   Ensure that the name of the user property matches the document attribute.
    

Property

Description

<<attribute\_name>>

Indicates the name of the attribute. Ensure that the name of the user property matches the document attribute.

<<attribute\_name>> -> value

Indicates the attribute value associated with this content.

**Example 1:** Adding an Attribute with a Single Value Associated with a Key

**Example 2:** Adding an Attribute with an Array as the Value

### 

Step 4: Set user property

You can set the user properties in various ways based on your requirements.

*   Using [User.setProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty) or [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties) in the conversational flow. Example: In the Greeting node or the User authentication handler as per your requirements.
    
*   If you are using a custom channel, then you can specify user properties in the custom channel payload. See [Custom channel](/user-guide/llamb/custom-channel), for more information.
    

For the [given scenario](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes#scenario-how-to-use-it), the user property is directly set in the Greeting node.

**Key points**:

*   The hardcoded value used in this example is for demonstration purposes only. In a real enterprise setting, user property values are typically set dynamically, such as from an API response following user authorization.
    
*   If the user properties are not set, all ingested content in your agent, regardless of attributes, is used to render responses.
    

### 

Step 5: Test the conversation flow to view personalized responses

Open the agent simulator and ask a query from the uploaded Privacy Policy document.

In this example, the uploaded Privacy Policy document has the "region" attribute set to "India." Since the user property is set to "India," the responses is displayed from the document with the region attribute set to "India."

Now, update the user property to "China" and ask a query from the uploaded Privacy Policy document. Since the user property is set to "China" and there are no documents with the region attribute set to "China," an unhandled response is displayed.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge

Once the upload of documents or URLs to the knowledge base is successful, you can view the extracted content to fine-tune and edit the knowledge base, if required.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage a skill immediately after creating the skill. See [Create LLaMB skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information.
    
*   If you wish to edit a skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the agent before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

*   In the `LLaMB Content` page, click `Document Groups` in the left navigation menu and open the document group that you wish to view.
    
*   The list of uploaded content for the selected document group is displayed.
    
*   Click `Knowledge` on the left panel. The knowledge extracted from the uploaded content in the document group is available as [sections](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#sections), [acronyms](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#acronyms), and [vocabulary](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#vocabulary).
    
*   You can filter the extracted knowledge based on a document using the `Filter by Document` text box.
    

**Note:** Knowledge is extracted and organized for all the uploaded content in a single document group. [Section](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge#sections), [acronyms](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge#acronyms), and [vocabulary](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge#vocabulary) are created and maintained for a document group. To view information only for a specific document in the document group, use the `Filter by the Document` text box.

## 

Sections

Sections are chunks of content extracted and organized based on the structure of the uploaded document. Each section contains the skill’s response to the user’s intent. You can add additional training data as required.

The section hierarchy uses a breadcrumb to indicate the page number from which the section is extracted and the corresponding section header. The document from which the section is extracted is mentioned above in the section hierarchy.

If the chunk contains a table, then the `Toggle table` option is displayed, allowing users to view the tabular format of the extracted content. Click that option to expand and collapse the table content.

You can perform the following actions from the Sections tab:

*   **Search a section**: Use the search icon to search for sections. You can search across all the documents in the document group or a specific document.
    
*   **Edit a section**: Select the required section and click Edit. You can add a new header or delete the existing header as needed. Then, click Save**.**
    

*   **Translate table:** Allows you to view the table translated from the document’s original language into English. Click the `Toggle table` option below the original table to switch to the translated view.
    

## 

Acronyms

In the Acronyms tab, you can manage acronyms (and their full forms) identified and extracted from the uploaded content. In cases where the user queries contain either the acronym or the full form, both are located from the knowledge base and displayed in the agent response.

You can perform the following actions from the Acronyms tab:

*   **Search an acronym**: Use the search icon to search for an acronym or its full form. You can search across all the documents in the document group or a specific document.
    
*   **Add an acronym**: To add an acronym, click `Add Acronym`. Then, enter the acronym (abbreviation) with its full form and click `Submit`. Abbreviations can be upto 191 characters and full-form can be upto 255 characters.
    
*   **Delete an acronym**: To delete an acronym, click `Delete` in the Actions column for the specific acronym. You can also search and delete an acronym.
    

## 

Vocabulary

In the **Vocabulary** tab, you can view and manage business vocabularies identified and extracted from the uploaded document. Extracted vocabulary helps the developers add synonyms in the context of a business and helps normalize the user query. This improves the efficiency of the answering system.

You can perform the following actions in the Vocabulary tab:

*   **Search a vocabulary**: Use the search icon to search for a vocabulary. You can search across all the documents in the document group or a specific document.
    
*   **Add a word**: To add a vocabulary, click `Add Word`. Enter the word that you wish to add to the vocabulary list and click Submit.
    
*   **Add synonym for a word**: Select a word from the vocabulary list for which you want to add a synonym. Specify the synonym and click `Add`.
    
*   **Delete synonyms of a word**: Select a word from the vocabulary list. The list of synonyms for the word is displayed. Click the `X` mark next to a synonym to delete it.
    

## 

Importance of section headers

#### 

Section header in parsing model

At the time of content ingestion, the [`Parsing Model`](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates) automatically extracts section headers from the document. This process relies on a set of heuristics such as:

*   Font type and size
    
*   Bold text
    
*   Capitalized letters
    
*   Numbered sections
    

These heuristics help the model identify and separate section headers. However, the accuracy of this extraction may vary, leading to potential inefficiencies depending on the model’s performance.

#### 

Editable section headers

Once extracted, the section headers are editable, allowing for fine-tuning of the LLaMB skill. In cases where a query fails to retrieve a relevant response, users can manually modify or add the appropriate section header to the associated content chunk. This improves the chances of accurately answering the query.

#### 

Enhancing query relevance

Users can provide missing relevance between the chunk and the query by associating a section header with a content chunk. The section headers act as a bridge to enhance the model's understanding of the content, especially when supplemented with additional metadata, such as:

*   Tags
    
*   Keywords

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions

You can perform the following actions on the `LLaMB Content skill`:

*   [Edit skill](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit-skill)
    
*   [Retrain](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#retrain)
    
*   [Edit](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit)
    
*   [Delete the documents or URLs from the skill](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#delete)
    

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can manage the skill immediately after creating the skill. See [Create LLaMB skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information.
    
*   If you wish to edit the skill in an agent, then:
    
    *   Navigate to the Agents tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents#search-agents), for more information.
        
    *   Click Edit to unlock the skill before editing.
        
    *   In the Agent page, navigate to the Skills option in the left navigation menu. Search and open the required skill.
        
    

## 

Edit skill

You can edit the skill name or description of the skill.

*   In the `LLaMB skill` page, click the `pencil icon` at the top-left corner next to the skill name.
    
*   Edit the skill details. See [Create LLaMB Content skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information on the fields in the `Edit` pop-up window.
    
*   Click `Update` on the pop-up box and click `Save` on the main page.
    

## 

Retrain

You can retrain the knowledge base if you have edited the details of uploaded documents or URLs, or if the upload has errored out.

*   In the `LLaMB Content Skill` page, navigate to Documents in the left navigation menu.
    
*   Click the `Document group` you wish to open.
    
*   Click the `Retrain` action for a document. A pop-up box is displayed to receive confirmation for retraining. Click `Yes, Retrain`. This action extracts the content again and creates a new knowledge base.
    

## 

Edit

**Note**: You can view the unique document identifier in the `Edit` option for each uploaded document. This is useful when you are using [Content ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis) to update or delete documents from the LLaMB Content skill.

You can update the following details using the `Edit` option for each uploaded document:

*   Update the title of the uploaded document.
    
*   Update or delete the document attribute. See [Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes), for more information.
    
*   Add a Preview URL - Indicates the URL that is opened when the user clicks [Citation links](/user-guide/llamb/citation-links) in the response.
    
    *   This field is optional.
        
    *   By default, when the user clicks `Citation links` in the response, the URL or PDF mentioned during upload is opened. If you wish to specify a different URL from the actual URL or PDF that is used to upload knowledge to the skill, then you can use the `Preview URL`.
        
    *   For example, a PDF document has been added to LLaMB Content, and the same PDF is hosted on a Sharepoint page or any other CMS. If the desired behavior is for the user to reach the Sharepoint page instead of downloading the PDF, then the `Preview URL` can be added.
        
    *   This option is available in the `Edit` pop-up window or while [Uploading content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content) to the group.
        
    

**To edit the document or URL details**:

*   In the `LLaMB Content Skill` page, navigate to Documents in the left navigation menu.
    
*   Click the `Document group` you wish to open.
    
*   Click the `Edit` action for a document, perform the required updates and click `Save`.
    

## 

Delete

You can delete the document or URL from the knowledge base, if you have uploaded an incorrect document or URL or if the document is no longer required.

*   In the `LLaMB Content Skill` page, navigate to Documents in the left navigation menu.
    
*   Click the `Document group` you wish to open.
    
*   Click the `Delete` option. Click `OK` in the alert message to delete the document or URL from the knowledge base.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates

**Note**: Parsing template is required only when uploading content to LLaMB via URL.

Parsing templates serve the purpose of extracting chunks of content from uploaded information, enabling the creation or updating of a document group's knowledge base.

LLaMB can process PDF files seamlessly, eliminating the need for any preprocessing or parsing templates. For HTML content, the requirement for parsing templates has been drastically simplified. In this article, you can learn how to build custom parsing templates to ingest HTML content based on your requirements.

### 

Overview

Open the `LLaMB content skill` and click `Parsing templates` in the left navigation. A list of all the inbuilt parsing templates is displayed. These are non-editable templates that can only be viewed for quick reference.

Name

Description

ID

Database ID for this template. You can use this identifier in the `Content Ingestion APIs -> parsing_template_id` parameter to upload documents or files.

Note that the parsing template identifier can vary based on the instance. When using the parsing template identifier in the APIs, for example, in the Content Ingestion API, pick the parsing template identifier relevant to your instance. See [Content Ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

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

In addition to the parsing templates provided by Avaamo, you can create new custom templates to ingest HTML content based on your requirements. Click **Add New** to add your template.

Provide the following details in the **Create Parsing Template** dialog box.

*   **Name:** Name of the custom template.
    
*   **Key:** Unique key for the template.
    
*   **File type:** Choose a file type from the given options. Currently, this applies only to URLs.
    
*   **Template JSON:** The JSON file or template that will be used for parsing.
    

**Notes**:

*   Creating a custom parsing template is use-case-specific. Contact Avaamo Support, for further assistance.
    
*   After you save the custom parsing template, a unique identifier is generated by the platform to identify the parsing template. You can use this identifier in the `Content Ingestion APIs -> parsing_template_id` parameter to upload documents or files. See [Content Ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings

The **Advanced settings** section offers enhanced configuration options, providing teams with greater flexibility and control over how agents generate and present LLaMB responses. These capabilities enable administrators and developers to maintain consistency in tone, context, and user experience while still supporting customization for various use cases.

A key part of Advanced settings is the ability to configure the following options, allowing teams to shape how the system communicates during processing and when handling long responses.

1.  [Intro messages](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#intro-message)
    
2.  [Response cutoff message](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#response-cutoff-message)
    
3.  [Custom formatting instructions](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#custom-formatting-instructions)
    
4.  [Unhandled Options](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#unhandled-options)
    

### 

Intro message

An **intro message** is a short placeholder message shown to the user while LLaMB processes and generates a response. This message helps maintain a natural conversational flow by indicating that the system is working on the request. Examples include:

*   “Let me check that for you…”
    
*   “Just a moment while I look that up…”
    

To configure intro messages, navigate to the `Advanced settings` section within the LLaMB skill page.

You can select and use any of the predefined messages or create your own based on your use case. To add a new message, click `+ Add new`. A dialog window opens where you can enter your custom message.

After writing the message, click `Save`.

Advanced settings provide full flexibility for shaping how intro messages appear:

*   **Complete customization:** You can add, edit, or delete any intro message displayed before the LLaMB response.
    
*   **Optional display:** If preferred, intro messages can be removed entirely, allowing responses to appear without any introductory text.
    
*   **No hard limits:** There are no restrictions on the number of intro messages you can create or on their character length.
    
*   **Flexible message management:** Teams can maintain multiple variations, ranging from brief greetings to detailed introductions, depending on the conversational needs.
    

### 

Response cutoff message

A **response cutoff message** is displayed when the generated output exceeds the maximum output token limit configured for a specific LLaMB skill. LLaMB then returns the truncated answer along with a message informing the user that the full response could not be provided due to length restrictions. This ensures transparency and helps users understand why an answer may appear incomplete.

To configure response cutoff messages, navigate to the `Advanced settings` section within the LLaMB skill page.

To add a new message, click `+ Add new`. A dialog window opens where you can enter your custom message. After writing the message, click `Save`.

### 

Custom formatting instructions

Custom formatting instructions allow you to define the tone, structure, and layout of agent responses. By configuring these settings, you can control how the agent communicates, ensuring that every answer adheres to the preferred writing style, formatting pattern, and presentation guidelines for your use case.

To configure custom formatting instructions, navigate to the `Advanced settings` section within the LLaMB skill page.

Click `Edit`

After writing the message, click `Save`.

### 

Unhandled Options

The Unhandled Options setting allows you to control how the system responds when it cannot find an answer to a user query. This lets you choose between the existing fallback behavior and a more guided, user-friendly experience when no response is available.

**Note:** This option is supported only when the [Soft Unhandled](/user-guide/llamb/soft-unhandled-active-redirect) skill is configured using a JavaScript block.

To configure custom formatting instructions, navigate to the `Unhandled Options` section within the LLaMB skill page.

When Unhandled Options are disabled

When Unhandled Options are enabled

*   The system follows the current fallback method.
    
*   A basic unhandled response is shown with no enhancements.
    

*   The system provides a cleaner, more helpful fallback response.
    
*   Suggested follow-up questions are displayed clearly, each as a clickable button, making it easier for users to continue the conversation.

---

## Source: https://docs.avaamo.com/user-guide/llamb/get-started/step-3-test-your-agent

If you are starting to explore LLaMB for the first time, then the best way to test a sample query is using the [Agent Simulator](/user-guide/llamb/get-started/step-3-test-your-agent#using-agent-simulator).

As you iteratively build the agent with LLaMB, you can further use the [UAT option in the Web channel](/user-guide/llamb/get-started/step-3-test-your-agent#using-uat-option-in-web-channel) to perform more comprehensive testing.

**Key points**:

*   `Mercury` theme is the recommended theme for LLaMB. See [Mercury theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme), for more information.
    
*   You can test LLaMB content through Regression Testing. Refer [Regression Testing](/user-guide/llamb/regression-testing), for more details.
    
*   User inputs and agent responses can be in multiple languages. However, Documents can only be ingested in **en-US**.
    

### 

Using Agent Simulator

*   On the Agent page, navigate to the`Test -> Simulator` option in the left navigation menu. Alternatively, you can test using the agent icon in the bottom right corner.
    
*   You can now ask queries and test if you receive appropriate responses from user queries.
    

*   Click on the `source citations` to view the actual source of the agent's response. This allows you to see the details of the `data chunk` used to answer the user's query. Refer [Query context](/user-guide/llamb/get-started/step-3-test-your-agent#query-context) for more information.
    

### 

Query context

You can gain deeper visibility into how LLaMB generates responses with the new `Query Context` feature in `Message insights`.

This helps you understand how different parts of your data contribute to the response—making it easier to debug, optimize, and trust the results. Some of the key benefits include:

*   Enhanced visibility into the chunks used to generate responses
    
*   Chunk-based responses show how queries are matched with relevant data
    
*   Improved debugging with traceable chunk information for better optimization
    
*   Greater transparency into how LLaMB builds and delivers answers
    

Click `Query Context` to view all the chunks involved in the response creation.

**View reasoning**: An option in Query Context that generates and displays reasoning for chunks labeled as `strong match`, `match`, or `not relevant`, explaining why each chunk was selected and how it contributes to the final response.

You can also view the label `Strong match` which means the chunks deemed most relevant to the question and that contributed significantly to generating the answer.

Click any `chunk` to view detailed information.

*   **Document Name**: The name of the document from which the chunk was derived.
    
*   **Intent Key**: The specific intent used in response generation.
    
*   **URL:** The source of the document, as specified during ingestion.
    
*   **Document Attributes:** Attributes assigned to the document during ingestion.
    
*   **User custom properties:** User-defined properties are displayed here.
    
*   **Descriptions**: Additional contextual information about the chunk.
    
*   **Reasoning:** Explanation of why the chunk was selected for generating the answer
    

### 

Using the UAT option in the Web channel

User Acceptance Testing (UAT) option in the Web channel allows you to set up a pre-defined set of test queries to conduct UAT on the agents before deploying the agent in production.

You can use these queries to quickly test your agent as you iteratively build the agent with LLaMB. User Acceptance Testing is crucial because it acts as a final validation step, ensuring that the agent meets user expectations and is ready for deployment into the production environment.

See [UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat), for more information.

### 

Regression testing

Regression testing is a tool for verifying that an agent's responses are accurate and consistent with previous versions. It helps ensure that queries and their corresponding responses remain correct even as the underlying models and AI tools evolve.

Refer [Regression Testing](/user-guide/llamb/regression-testing), for more details.

---

## Source: https://docs.avaamo.com/user-guide/llamb/custom-channel

After building and testing your LLaMB agent, the next step is to select the deployment channel. The Avaamo Platform offers several pre-built channels, including Web, iOS, Android, and MS Teams, for deploying agents with LLaMB. If you need to deploy agents to a channel not listed, you can configure and deploy agents to a custom channel.

Deploying LLaMB agents in a custom channel enhances the ability to seamlessly integrate LLaMB with any enterprise application, increasing accessibility for users.

### 

How does it work?

Custom channel support has been a core feature for all agents within the Avaamo Platform since its inception. This capability now includes agents with LLaMB skills.

The overview, concept, configuration, incoming request payload, and testing for Custom channels remain unchanged when enabling them for agents with LLaMB skills. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel), for more information.

The only modification is in the payload of the outgoing message sent by the Avaamo platform to the Webhook URL for requests from the custom channel. The rest of the payload parameters and their usage remain unchanged. See [Outgoing request](/user-guide/llamb/custom-channel#outgoing-request), for more information.

### 

Outgoing request

An outgoing request indicates the payload response sent by the Avaamo platform to the Webhook URL for the request received from the custom channel. The interface hosting the URL must be able to consume this payload structure.

The following is a simple payload response of an outgoing request for an agent with a `text` response (Here the response is from Greeting skill which is a simple `text` response):

When the response is from the LLaMB skill, instead of a `text` response, a `stream` response is sent by the Avaamo Platform that contains a `URL.`

You can consume the payload and use the streaming URL to get chunks of responses and then process the request as required. The following is a simple payload response of an outgoing asynchronous request where the response is from the LLaMB skill:

See [Outgoing request in the Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#outgoing-request) for more information on all the other parameters in the payload.

**Notes**:

*   Currently, there is no set expiration date for the streaming URL.
    
*   All the other functionality of the custom channel remains the same as applicable to the agents without LLaMB skills, including custom user properties. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/soft-unhandled-active-redirect

LLaMB provides the capability to gracefully redirect users when faced with unhandled responses, a feature known as `Soft Unhandled`.

In instances where the agent fails to comprehend a user query, it defaults to an unhandled intent response, stating, "_I am sorry. I don't have an answer for that._" The `Soft Unhandled` feature maintains the acknowledgment of the agent's inability to provide an answer but does so with a courteous and polished response.

**Note:** Soft unhandled messages are now supported in multiple languages.

### 

How does this help?

This feature aims to enhance user interaction by:

*   Creating a pleasant user experience during interactions.
    
*   Establishing a soft and reassuring tone in the agent's response.
    
*   Conveying the impression that, although unable to address certain queries, the agent is still actively assisting with those it can answer.
    

Soft Unhandled

Unhandled

### 

How does it work?

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/quick-start-tutorials/create-an-agent), for more information.
    
*   To edit an agent, navigate to the Agents tab in the top menu, search, and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To enable the Soft unhandled feature in your LLaMB agent**:

*   In the `Agent -> Skills` page, click `Unhandled` skill.
    
*   In the `Skill message` pop-up,
    
    *   Click the `Delete` icon next to the existing default text message to delete the message.
        
    *   Add a `Javascript response` and add the following code. See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses), for more information.
        
    

*   Click `Save` and test your agent. When testing your agents, based on the context or relevance soft-unhandled response is displayed. If the user query is irrelevant and out of context, then the agent still displays an unhandled response. See [Test your agent](/user-guide/llamb/get-started/step-3-test-your-agent), for more information.
    

### 

Feedback on Soft-Unhandled response

By default, feedback options - thumbs up and thumbs down are not displayed for soft-unhandled responses. If you wish to configure the feedback option for soft-unhandled response:

*   Retain the default unhandled response as-is.
    
*   Add a Dialog skill with `Pre-unhandled intent` , in the invocation intent, specify the following code:
    

See [Pre-unhandled intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent#id-5.-pre-unhandled-intent-handler), for more information.

*   In the first node of the `Pre-unhandled Dialog skill`, add the following code:
    

*   Enable the `Collect feedback` option in the `Advanced Settings` section. See [Advanced Settings](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#collect-feedback), for more information.
    

*   Test the agent to view the thumbs-up and thumbs-down options on soft-unhandled responses:
    

### 

Soft unhandled multilingual support

The Avaamo platform supports **soft unhandled messages in multiple languages**, enhancing user experience for multilingual audiences. When a user’s query is related to the document but does not match any exact information, the system now returns the soft unhandled message in the user’s selected conversation language.

The image below illustrates a soft unhandled message displayed in Hindi.

---

## Source: https://docs.avaamo.com/user-guide/llamb/improve-user-experience-feedback-analytics

The best way to improve user experience with LLaMB is by collecting early user feedback from the domain experts and SMEs in the UAT stage itself. You can also leverage the Analytics board to draw some inference on the the usage of intents in your `LLaMB Content skill`.

This article covers the following topics that can help improve user experience with the `LLaMB Content skill`:

1.  [Using user feedback](/user-guide/llamb/improve-user-experience-feedback-analytics#user-feedback)
    
2.  [Using Analytics](/user-guide/llamb/improve-user-experience-feedback-analytics#insights-from-analytics)
    

## 

User Feedback

Regularly collecting and analyzing user feedback allows for ongoing improvements and adjustments, ensuring the agent evolves in response to the user's needs.

User feedback is crucial for various reasons:

*   Provides valuable insights into users' expectations.
    
*   Highlights the areas where improvements can be made to enhance the overall user experience.
    
*   Identifies issues, bugs, or unexpected behaviors that can be addressed promptly.
    

### 

Collecting user feedback

The suggested approach to collect feedback is to start early in the UAT phase. Gather user feedback from UAT users before deploying the agent in the live production environment. User feedback obtained during UAT varies from that collected in a production environment.

Within the UAT environment, the emphasis is on gathering detailed and accurate feedback to enhance the user experience before deploying the agent to the actual production users. The users can use the thumbs-up or thumbs-down option to provide the feedback. See [UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat), for more information.

The following illustration depicts the feedback collected on the thumbs-down option:

After the agent is deployed in the production environment, the actual users can share the feedback using thumbs up and thumbs down options in the agent response. When the user selects the thumbs-down option, the agent collects a few details from the user that can help is fine-tuning the agent:

### 

Monitor user feedback

You can view the user feedback from the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page and also under [Learning -> User Feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) section.

Alternatively, you can also use the [User Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api) to collect feedback periodically to learn and analyze the user's experience when interacting with your agent.

### 

Analyze feedback and improvise

When using LLaMB, the following are a few recommendations that can help incorporate user feedback and improve the overall user experience of the agent:

*   Check if all the documents and URLs are ingested successfully in LLaMB without any errors. See Troubleshooting tips, for inputs on resolving errors if any.
    
*   Isolate the problem;
    
    1.  Check if the source from where the answer is inferred in the agent does contain the expected response from the user. If not, consider updating the source.
        
    2.  If the source contains the expected response, but you are unable to get the expected behavior, check if updating the knowledge base on the `LLaMB Content skill`, can help. See [View and edit knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.
        
    3.  If the behavior persists after #1 and #2, contact Avaamo Support for further assistance.
        
    

### 

Insights from Analytics

The `Top LLaMB Content intents` block in the `Monitor -> Analytics` page gives you valuable insights into the top user intents responding to the user query.

It helps you learn and understand how users are interacting with your assistant. With these statistics, you can decide how and where to further improve your agent based on your business requirements.

See [Top LLaMB Content intents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-llamb-content-intents), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/citation-links

In LLaMB responses, citation links are references provided by the agent to indicate the source of information. They often point to [ingested documents](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content) or [preview URLs](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit) added during the document ingestion. This feature adds credibility to the information displayed to the user.

For example, when LLaMB responds based on an ingested document, it can include a clickable hyperlink pointing to the section or location in the document from which the information was drawn. This enables users to view the source for more context or additional details.

## 

**Citation links security**

When a citation link is included in a response, it is authenticated and authorized before redirecting to the document's URL with an expiration time. This ensures that only the intended users can access the document for a limited time.

### 

1\. Authorization Expiry

**Key point:** Authorization Expiry applies exclusively to non-web channels.

*   The citation links have an expiration time of **24 hours** from the moment of generation.
    

**For example:** When a user submits a query to the agent and the agent responds with citation links, these links remain valid for 24 hours. Access is prohibited if the citation links are accessed beyond this period or from the same response after the expiration. To retrieve a valid citation link, the user must resubmit the original query to generate new citation links, which can then be used to access the referenced document.

*   Document URLs have an expiration time of **one minute** from the moment of generation.
    

### 

2\. URL format

The format of the citation link includes security tokens for validation. Below is the format:

Copy

    https://cx.avaamo.com/llamb/messages/{message_uuid}/documents/{document_uuid}?lt={base64_encoded_JWT_token}&page={page_number}

## 

**Key points**

*   Authorization Expiry applies exclusively to non-web channels.
    
*   Citation links in the [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history) page are always accessible without limitations on access duration and can be used for debugging.
    

## 

Configure citation links to open in the same tab

You can configure LLaMB citation links to open in the same browser tab rather than a new one by setting a document-level attribute.

#### 

Add the `avm_target` attribute

To control the link behavior, include the following parameter in the document attributes:

#### 

How it works

*   When the `avm_target` attribute is set to `"self"`, the citation link automatically appends the query parameter `avm_target=self`.
    
*   The document opens in the `same browser tab` instead of a new tab.
    
*   If the attribute is not configured, the default link behavior is applied.
    

This configuration allows you to control how citation links behave, enabling a more seamless navigation experience based on your use case.

---

## Source: https://docs.avaamo.com/user-guide/llamb/multi-language-support

### 

Multi-language support in LLaMB responses

LLaMB enables seamless, real-time conversations in multiple languages, enhancing the user experience across diverse regions. With real-time streaming translation, LLaMB supports all languages available in the Avaamo Conversational AI Platform.

Users can interact with the agent in any supported language, and the agent will respond in the same language, even if the original content is authored in English. This eliminates the need to maintain separate content for each language, simplifying content management while ensuring a natural and fluid conversation flow.

By leveraging this capability, organizations can effortlessly expand their global reach, providing a consistent and localized experience for users worldwide.

Below is a sneak peek of LLaMB’s multi-language support in action. You can see how responses are generated in the respective languages when the same question is asked in English (en-US) and French (fr-FR).

Follow these steps to enable and test multilingual support in your LLaMB agent:

1.  **Ingest content in English:** Prepare and ingest your documents in English. Document ingestion currently supports only the `en-US` locale. Refer [Ingest enterprise content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content), for more information.
    
2.  **Enable markdown format:** Ensure that the Markdown format is enabled for your agent in the channel configuration. Refer [Enable markdown format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format), for more information.
    
3.  **Add languages to your agent**
    
    *   Navigate to `Configuration > Language`.
        
    *   Click `Add Languages`.
        
    *   Select the desired language(s) from the dropdown list.
        
    *   Click `Save`. Refer [Languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information.
        
    
4.  **Test multilingual capability in simulator**
    
    *   Open the [Simulator](/user-guide/how-to/build-agents/test-agents/simulator).
        
    *   Initially, ask a question in English — you will receive responses in English.
        
    *   To switch the language, use the command: `#switch_lang <language_code>` _For example:_ `_#switch_lang fr-FR_` _to switch to French._
        
    *   After switching, ask a question in the selected language. The agent will respond in the same language.
        
    

### 

Support for multilingual document ingestion

LLaMB supports multilingual document ingestion, allowing you to upload, train, and query documents in multiple languages. This capability improves accessibility, accuracy, and global usability by enabling the system to process content and respond in the user’s selected conversation language.

LLaMB can automatically detect a document's language during ingestion, eliminating the need to specify it in the request payload manually. This reduces errors, speeds up processing, and ensures more reliable handling of non-English content.

**Note:** Automatic language detection is available only for API-based document ingestion.

If you provide a language parameter during ingestion, LLaMB uses that language for extraction. If no language is provided, LLaMB automatically identifies the document’s language and processes it accordingly. Refer [Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content) and [Content ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

If no language is specified, LLaMB detects the document’s language during ingestion.

If you provide a language code, LLaMB uses the specified language and does not perform auto-detection.

### 

Key points

*   **Language-aware ingestion:** You can specify the document’s language by passing the appropriate language code (for example, `es-ES`, `fr-FR`, `sv-SE`) during ingestion.
    
*   **Agent configuration:** Add or configure the target language in the agent settings before ingestion to ensure proper processing and response handling.
    
*   **Comprehensive file support:** Multilingual ingestion works with all supported document types, including PDF, Word, Excel, PowerPoint, CSV, and HTML.
    
*   **Cross-language querying:** LLaMB can understand and respond to queries in English, the document’s original language, or any other supported non-English language, depending on the user's selected conversation language.

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing

[Get started](/user-guide/llamb/regression-testing/get-started)[Regression test file format](/user-guide/llamb/regression-testing/regression-test-file-format)[Run regression test](/user-guide/llamb/regression-testing/run-regression-test)[Understanding results](/user-guide/llamb/regression-testing/understanding-results)[How to improve accuracy?](/user-guide/llamb/regression-testing/how-to-improve-accuracy)[FAQ's](/user-guide/llamb/regression-testing/faqs)[Best Practices](/user-guide/llamb/regression-testing/best-practices)

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/get-started

Regression testing is a tool used to verify that responses generated by an agent are accurate and consistent with previous versions. It helps ensure that queries and their corresponding responses remain correct over time, even as the underlying models and AI tools evolve.

The goal of regression testing is to ensure that query responses remain consistent over time, providing users with confidence in the agent’s performance and reliability.

To access LLaMB regression testing, go to the `Agent` page and click `Test > LLaMB Regression` in the left navigation menu.

**Note:** The LLaMB Regression Test option is visible only if the agent is configured with an `LLaMB` content skill.

The regression setup is similar to that of classic agents, but the steps for preparing the input file and analyzing the results differ significantly.

### 

**Next steps**

1.  Start by preparing the [regression test input file](/user-guide/llamb/regression-testing/regression-test-file-format).
    
2.  [Run the regression test.](/user-guide/llamb/regression-testing/run-regression-test)
    
3.  [Analyze the results](/user-guide/llamb/regression-testing/understanding-results) to gain insights and identify opportunities for [improvement](/user-guide/llamb/regression-testing/how-to-improve-accuracy).

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/regression-test-file-format

A regression test file contains a set of questions, the actual answer to each question, which is the ground truth, and any user properties specific to that answer.

**Key point:** Collaborate with Subject Matter Experts to build a regression test file in the Discovery phase itself.

### 

File format

The following is a sample regression test input file.

Your regression test file must be in CSV format. Each row of the CSV file is a test case to execute. The following are the details of the format:

Column 1

Column 2

Column 3

QUESTION

GROUND TRUTH

USER PROPERTIES

*   **Question** – The query or input provided by a user to the agent. Only up to 1000 questions are supported per file.
    

**Note:** You can run a maximum of 1,000 questions per day. Contact Avaamo Support to request a change to the daily limit configuration.

*   **Ground Truth** – The expected answer for a given query serves as the reference point to evaluate whether the agent’s response is accurate and meaningfully aligned with the query’s intent. This field is optional and is used for comparison to evaluate the accuracy of the agent’s response. If left blank, the system generates the ground truth for all queries after the test is completed.
    
*   **User Properties** – [Attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes) or metadata assigned at the user level, which can influence personalization and response generation. This field is optional**.**

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/run-regression-test

You can run regression testing by uploading a CSV file with regression test data.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/llamb/before-you-begin).
    
*   You can test an agent after creating and adding LLaMB skills to the agent. See [Create agent](/user-guide/how-to/build-agents/add-skills) and [Create LLaMB Content skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill) to agent, for more information.
    
*   If you wish to edit an agent, then:
    
    *   In the **Avaamo Platform UI**, navigate to the **Agents** tab in the top menu. Search and open the required agent. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
        
    *   Click **Edit** to unlock the agent before editing.
        
    

## 

Upload test file

On the `Agent` page, click `Test > Regression Testing` in the left navigation menu.

Click the `Upload test file` option and specify the following details:

**Key Point**: It is recommended to review the regression test file and incorporate all the recommended best practices. See [Regression test best practices](/user-guide/llamb/regression-testing/best-practices), for more information.

Parameters

Description

Maximum length

Test Name

The name of the test suite. Provide a name that helps you to identify the regression testing being performed.

Note that the **Test name** must be unique and is mandatory.

100 characters

CSV file

Click **Browse** to browse a CSV file with regression test cases.

You can also click the **Sample test file** to download a sample regression test file. This helps you to know the format required for the regression test file.

If you upload a CSV file that is not according to the format required for the regression test, then an appropriate error message with the row number of the first error encountered is displayed.

1000 rows

Click `Submit`. This action starts the regression testing on the agent, based on the test cases in the uploaded file.

*   In the **Regression file** column, the `Test name` specified during the time of upload is displayed along with the date and time of the regression test run.
    
*   In the **Status** column, `In Progress` status is displayed indicating that the test run is in progress. Click `Refresh` to retrieve the latest status. See [View status and results](/user-guide/llamb/regression-testing/run-regression-test#view-status-and-results), for more information.
    
*   Click **Download Input CSV** in the **Actions** column, to download the uploaded input test file in CSV format. See [Download Input CSV,](/user-guide/llamb/regression-testing/run-regression-test#download-input-csv) for more information.
    

If you do not wish to upload a test file, click `Cancel` .

## 

**View status and results**

In the `Regression testing` page, you can view the status and results of regression testing. You can download the regression testing result file in CSV format.

### 

**Regression file**

The `Regression file` column displays the name of the test file and the time of the test run.

### 

**Status**

The `Status` column displays the status of the regression test along with the date and time of completion. The following values are displayed:

*   **In-Progress**: This indicates that the testing is still in progress and that the system is executing the test cases from the uploaded file.
    
*   **Completed**: Indicates that all the test cases are executed. You can also download the result file. See [Actions](/user-guide/llamb/regression-testing/run-regression-test#actions), for more information.
    
*   **Failed**: Indicates that there was some failure executing the test cases. In such scenarios, you can [rerun](/user-guide/llamb/regression-testing/run-regression-test#run) the test.
    

### 

**Result**

In the **Results** column, you can view the overall outcomes of the regression testing. The following details are displayed:

*   **Total Queries:** Total number of queries present in the input file.
    
*   **Passed:** Number of generated responses that passed the test out of the total queries.
    
*   **Failed:** Number of generated responses that failed the test out of the total queries.
    

### 

Language

The language in which the regression test is executed. By default, the regression test is executed in English.

### 

**Actions**

You can perform the following actions:

1.  [Run](/user-guide/llamb/regression-testing/run-regression-test#run)
    
2.  [Delete](/user-guide/llamb/regression-testing/run-regression-test#delete)
    
3.  [Download Results](/user-guide/llamb/regression-testing/run-regression-test#download-results)
    
4.  [Download Input CSV](/user-guide/llamb/regression-testing/run-regression-test#download-input-csv)
    

#### 

Run

You can re-run the regression tests after making any changes to the LLaMB skill, such as updating a document, its attributes, or its group.

To re-run regression test:

*   In the `Actions` column, click `Run`**.**
    

*   An alert message is displayed for confirmation. Click `OK`.
    
*   A new run of regression testing is started.
    
    *   In the `Status` column, `In Progress` status is displayed indicating that the test run is in progress. Click `Refresh` to retrieve the latest status. See [View status and results](/user-guide/llamb/regression-testing/run-regression-test#view-status-and-results), for more information.
        
    *   Click `Download Input CSV` in the `Actions` column, to download the uploaded input test file in CSV format. See [Download Input CSV](/user-guide/llamb/regression-testing/run-regression-test#download-input-csv), for more information.
        
    

#### 

Delete

If the test data is incorrect or you wish to upload another file for regression testing delete the current test file and upload another file.

To delete the regression test:

*   In the `Actions` column, click `Delete`**.**
    
*   An alert message is displayed for confirmation. Click `OK`.
    
*   The corresponding regression test is deleted.
    

#### 

Download Results

You can download the regression testing result in a CSV format.

To download the results of regression testing:

*   Click `three dots` (Ellipsis) "…" in the `Actions` column.
    
*   Click `Download Results` to download the results in CSV format.
    
*   A copy of the result file is downloaded to your local machine. See [Understanding Results](/user-guide/llamb/regression-testing/understanding-results), for more information on interpreting the regression test results.
    

#### 

Download Input CSV

You can download the uploaded input regression test file in CSV format. You can use this for further analysis of the test results.

To download the input CSV file for the regression test:

*   Click `three dots` (Ellipsis) "…" in the `Actions` column.
    
*   Click `Download Input CSV` to download the uploaded input test file in CSV format.
    
*   A copy of the input test file is downloaded to your local machine.

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/understanding-results

You can download the test results once the test is completed. See [Download Results](/user-guide/llamb/regression-testing/run-regression-test#download-results), for more information. The following is a sample regression test input file.

### 

**How to understand the result file?**

Each query from the input file is evaluated against the ground truth. The result file contains details of all the queries in the following format:

Column 1

Column 2

Column 3

Column 4

Column 5

Column 6

QUESTION

GROUND TRUTH

USER PROPERTIES

GENERATED ANSWER

RESULT

ERROR

*   **QUESTION:** This refers to the query asked of the agent. It is the input provided by the user during testing.
    
*   **GROUND TRUTH:** This represents the accurate and meaningfully aligned answer to the query. If the input file does not provide a ground truth, it is generated automatically after the test run.
    
*   **USER PROPERTIES:** These are attributes defined at the user level that may influence the response. See [Document Attributes,](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes) for more information.
    
*   **GENERATED ANSWER:** This is the answer produced by the LLaMB in response to the given question. These generated responses contribute to the total number of generations counted in your LLaMB usage. See [LLaMB Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.
    

**Note:** The LLaMB regression generation count is an estimate and does not follow a 1:1 mapping. The total count may vary depending on the type of queries and metric evaluations performed, and it can range from **0 to 4**.

*   **RESULT:**
    
    *   The query is considered as PASSED, indicating that the generated response is factually correct, contextually appropriate, and aligned with the ground truth.
        
    *   The query is considered as FAILED, indicating that the generated response is either factually incorrect, contextually inappropriate, or not aligned with the ground truth.
        
    
*   **ERROR:** This indicates the reason why the issue occurred or why LLaMB failed to generate a response. If any errors appear in your result file, contact Avaamo Support for assistance. These are the different types of warnings you can get:
    

Types of warnings

Solution

Warning: Ground truth data is missing. Please provide it to estimate metrics.

Provide the correct ground truth data in the expected format to enable metric estimation.

Warning: No valid chunks found for the input query.

Check whether the document contains valid information or the Document Group is disabled.

Warning: All LLaMB skills are currently disabled.

Enable the LLaMB skill

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/how-to-improve-accuracy

Ensuring that queries achieve a good correctness score is essential for validating the agent's performance. To improve results, follow these steps:

1.  **If no ground truth is specified in the regression test input file:**
    
    *   The system generates a ground truth for those queries.
        
    *   Review the generated ground truths, update them to match your expected answers, and rerun the regression test.
        
    
2.  **If ground truth is specified in the input file:**
    
    *   Modify the ground truth based on the expected answers and rerun the regression test.
        
    
3.  **If your** [**result files**](/user-guide/llamb/regression-testing/understanding-results) **have a status of FAIL:**
    
    *   Check if the added ground truth is present in the ingested content.
        
    *   Improve section headers to enhance content clarity and relevance. Refer [section header](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge#sections), for complete details.
        
    *   Debug the answers by referring to the generated errors and warnings, and refine the input file before re-executing the test. Refer to errors and warnings in [Understanding results](/user-guide/llamb/regression-testing/understanding-results), for reference.
        
    

By following these steps, you can systematically improve test results and enhance the agent's performance.

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/faqs

**1\. What happens if an incorrect input file is uploaded for testing?**

An incorrect input file may contain **syntax errors, incorrect entries, or invalid data**, leading to errors and abnormal metric values in the results.

**2\. What should be done if the results are showing as FAIL?**

A **FAIL** indicates that the generated response is either factually incorrect, contextually inappropriate, or not aligned with the ground truth. Further debugging is required to identify the root cause and address any underlying issues.

**3\. How do you analyze the results of a regression test?**

Once the regression test is completed:

*   The UI displays the total number of queries along with a breakdown of passed and failed queries. This offers a directional analysis of the uploaded file's quality.
    

Refer [Understanding results](/user-guide/llamb/regression-testing/understanding-results), for complete details about this.

**4\. What should be done after conducting a regression test?**

After running a regression test, [analyze the results file](/user-guide/llamb/regression-testing/understanding-results) to identify any discrepancies or failures. If the test results do not meet expectations or fail to generate the correct responses, review the data and make necessary adjustments to [improve accuracy](/user-guide/llamb/regression-testing/how-to-improve-accuracy).

**5\. What do the different columns in the input and results files represent?**

Refer [Regression test file format](/user-guide/llamb/regression-testing/regression-test-file-format) and [Understanding results](/user-guide/llamb/regression-testing/understanding-results), for complete details about this.

#### 

**6\. What happens if the input regression file does not specify any user properties, but the ingested document includes them?**

If the input regression file does not define any `user_properties`, but the ingested document is associated with specific document properties, the regression results are still generated without filtering based on those properties.

#### 

7\. How to test soft unhandled queries during regression testing

To verify soft unhandled responses, include the marker `<avm-stream-aborted>` in either the `ground_truth` or `generated_answer` fields. This helps identify cases where the system gracefully aborted the stream without triggering a hard failure.

---

## Source: https://docs.avaamo.com/user-guide/llamb/regression-testing/best-practices

*   Collaborate with **subject matter experts** to build a regression test file during the discovery phase.
    
*   Iteratively test and improve throughout the development and testing phase before entering the UAT phase of the project.
    
*   **Use a sample file for reference:** To prevent errors in the input file, use the sample file available for download during the input file upload process. Refer to [Run regression test](/user-guide/llamb/regression-testing/run-regression-test) for more details.
    
*   **Match query and test language:** To avoid inconsistent results in regression tests, always ensure that the `selected test language` matches the `input file language`. This helps in accurately evaluating responses.
    
*   **Avoid using incorrect input files:**
    
    *   Ensure the input file does not contain empty query fields.
        
    *   Ensure there are no extra rows or extra columns.
        
    *   Ensure there are no blank entries between queries.
        
    *   Ensure the input file is not empty.
        
    
    If any of these conditions are found, the upload of an input file gets rejected.
    
*   **Use corrected queries:** Ensure all queries are properly structured and refined to improve response accuracy. You can test the conversation in the web channel to validate the corrected query before using it in the input file.
    
*   **Use fully formed queries:** Avoid incomplete or fragmented queries or short queries, as they may lead to inaccurate responses. Always provide clear, complete, and well-structured input to ensure responses are accurate and consistent.
    
    **Examples of fully formed queries:**
    
    *   **Short query:** EPF? **Fully formed query:** What is EPF?
        
    *   **Co-referencing query:** **Q1:** What is the population of Japan? **Q2:** And how about France? **Fully formed query:** What is the population of France?
        
    *   **Fragmented query:** New York weather **Fully formed query:** How is the weather today in New York?
        
    
*   **Avoid co-reference in queries:** Queries should be self-contained without relying on the previous context to generate accurate results.
    
*   **Check for spelling errors:** Ensure all queries are free from typos and spelling mistakes to avoid misinterpretation by the model.
    
*   **Limit per regression test file:** Each regression test file should contain a maximum of **1,000 questions** to ensure efficient processing and accurate evaluation.
    
*   **Ground Truth relevance:**
    
    *   Ensure that the `ground_truth` is **directly aligned with the intent** of the query.
        
    *   It should reflect the **ideal or expected answer** that the model is being evaluated against.
        
    
*   **Completeness of Ground Truth:**
    
    *   Avoid partial or vague `ground_truth` responses.
        
    *   Ensure the expected answer is **complete and self-contained**, offering sufficient context for an accurate assessment.
        
    
*   **Leveraging** `**user_properties**` **for contextual responses**
    
    *   Use `user_properties` effectively to retrieve context-specific responses.
        
    *   This helps align model outputs with relevant `document_properties` from source content, ensuring answers are contextualized based on both user and document metadata.
        
    
*   **Be precise when expecting specific answers**
    
    *   When asking a query that expects a **specific number or type of answers,** be clear and precise in your wording. This ensures consistency and clarity in the model’s responses.

---

## Source: https://docs.avaamo.com/user-guide/llamb/troubleshooting-tips

In case you are unable to receive the expected response from LLaMB, the following few troubleshooting tips can help:

*   Check if the URL you are trying to upload is publicly accessible without any firewall restrictions. Make a GET request in any API tool such as Postman and check if you are receiving the proper response.
    
*   Check if the PDFs must have permission to read from and write to and must not be access-controlled or password-protected.
    
*   Check if the document or URL is uploaded successfully, without any errors. For errors, click **Error** in the **Status** column to view more details.
    
*   Try to [retrain](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#retrain) the errored-out documents or URLs, if required. If the error persists, contact Avaamo Support, for more details.
    
*   If the upload is successful and yet you are not receiving the expected responses, then
    
    *   Click the eye icon below the user query to know the intent mapped to the query.
        
    *   In the insights pop-up, you can know if the query is mapped to the required intent type, name, response node, and the language of the query.
        
    *   Try to edit the knowledge base in any of the following ways:
        
        1.  Add additional training data to the extracted sections.
            
        2.  Add additional acronyms, if required.
            
        3.  Add additional synonyms for the extracted vocabulary.
            
        
        See [View and edit knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-faqs

This article lists a few frequently asked questions about LLaMB:

### 

1\. How is LLaMB different from existing Answer skills?

At the surface level, although, both (LLaMB and Answers skill) appear to leverage and tap into the existing knowledge base and deliver answers sourced from enterprise content; however, unlike Answers, LLaMB extends much beyond the mere ingestion and delivery of answers from enterprise content.

LLaMB is an exclusive product offering from `Atlas 8` onwards in the Avaamo Conversational AI Platform to harness the power of enterprise content coupled with Generative AI in your agents.

It is a full stack, low code toolset to build, deploy, and maintain LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) applications at enterprise scale.

Many key features in LLaMB help in generating inherently personalized and summarized results while maintaining the required level of security and compliance for enterprises. It is a practical and secure approach to deploying LLMs in the enterprise, thereby enhancing the knowledge search experience for both employees and customers. See [Overview - Key features](/user-guide/llamb/overview-key-features), for more information.

### 

2\. How does LLaMB handle hallucinations with Generative responses?

No Hallucination!

By carefully managing the content sources and documents provided to LLaMB, you can leverage the "best of both worlds" approach. This means that only verified content references are fed to LLaMB, resulting in accurate, trustworthy, and secure inferred answers.

### 

3\. How to trust the answers from LLaMB?

The primary concern when it comes to enterprise applications is "Trust and Security". Raw Model APIs when piped directly into the enterprise are very vulnerable. Moreover, these models are subject to adversarial attacks such as prompt injection.

With LLaMB, you have complete and absolute ownership of the data. This means that you own and control what data is ingested to LLaMB and this internally controls how the responses are presented to the users. LLaMB uses only the content ingested to generate answers.

### 

4\. How secure is my content in LLaMB?

With LLaMB, all the content you feed and the agent you build and deploy is via the Avaamo Conversational AI Platform. The platform combines enterprise-grade security features with rigorous compliance with industry standards to ensure your data is always protected and secure. See [Security at Avaamo](https://avaamo.ai/conversational-ai-security/) for more information on the compliances and security regulations list. The trust and security layer

### 

5\. Does LLaMB auto-learn from the previous responses?

No, each interaction is treated as an independent prompt, and the LLaMB doesn't retain information from prior messages in the conversation. The answers are "generated" implying that LLaMB does not engage in learning from your usage. This enables you to have complete ownership and control on the responses provided to the user.

### 

6\. How to migrate from Answers to LLaMB?

*   Create an LLaMB skill. See [Create LLaMB skill](/user-guide/llamb/get-started/step-1-create-llamb-content-skill), for more information.
    
*   Ingest the required content. See [Ingest enterprise content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content), for more information.
    
*   For bulk ingestion, you can leverage [Content Ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis). You can also upload multiple documents at a time from the UI. See [Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content), for more information.
    
*   Disable the Answers skill
    
*   Test with the LLaMB skill. See [Test agent](/user-guide/llamb/get-started/step-3-test-your-agent), for more information.
    

### 

7\. Can Answers and LLaMB co-exist?

It is not recommended to have Answers and LLaMB skills both enabled in the same agent as the knowledge-base content between Answers and LLaMB can overlap. Overlapping the same knowledge content can lead to confusion and unpleasant user experience.

### 

8\. What are the types of files I can load in LLaMB?

You can ingest the following types of documents in the `LLaMB Content` skill:

*   URL - Publicly accessible HTML content
    
*   CSV (Comma-separated values)
    
*   Microsoft Word document (docx)
    
*   Microsft Powerpoint (pptx)
    
*   Microsoft Excel (xlsx)
    
*   HTML documents (html)
    

See [Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content), for more information.

### 

9\. Can LLaMB parse tables?

Yes, it can parse and generate summarized, coherent, and contextually appropriate responses. See [Rich Rendering of Tabular Content](/user-guide/llamb/overview-key-features#rich-rendering-of-tabular-content), for more information.

### 

10\. What languages are supported in LLaMB?

Currently, you can ingest content only in the en-US language in the `LLaMB Content skill`. However, user inputs and agent responses can be in multiple languages. Refer [Supported language](/user-guide/llamb/before-you-begin#id-4.-supported-language), for more information.

### 

11\. What should I do when the Generation quota is reached?

Contact Avaamo Support, for immediate assistance. It is recommended to contact Avaamo Support when the generation quota hits 75% of usage for prompt action. See [Usage analytics](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.

### 

12\. How long are the responses Cached?

For faster results and better efficiency, the responses generated by LLaMB are cached. Once a response is cached, it is always available for future use as per the [data retention policy](/user-guide/ref/data-retention) and not deleted from the cache until then. This helps in optimizing the generation cost. See [Usage analytics](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.

### 

13\. Can I configure cached response duration?

Currently, Once a response is cached, it is always available for future use as per the [data retention policy](/user-guide/ref/data-retention) and not deleted from the cache until then.

### 

14\. Is there any limit on the number of URLs or PDF sizes?

There is no limit on the number of URLs that can be uploaded using the `LLaMB Content` skill. Further, you can upload multiple PDF documents and each PDF document can be more than 1000 pages. See [Upload Content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content), for more information.

### 

15\. Will LLaMB search text present on images?

No. Currently, this feature is not supported.

### 

16\. How to improve the user experience with LLaMB ?

Currently, there are two primary ways to analyze the user experience and further improve your agent:

*   [Using user feedback](/user-guide/llamb/improve-user-experience-feedback-analytics#user-feedback)
    
*   [Using Analytics](/user-guide/llamb/improve-user-experience-feedback-analytics#insights-from-analytics)
    

### 

17\. Can I extract Usage analytics data from any API?

Currently, there is no API available to extract Usage analytics data. See [Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.

### 

21\. Can LLaMB perform computation operations?

Currently, there is no support for any computation operations in LLaMB.

### 

22\. Can you test LLaMB using Regression testing?

Yes, You can test LLaMB content using Regression testing. Refer [Regression Testing](/user-guide/llamb/regression-testing), for more information.

### 

23\. What channels can LLaMB be deployed on?

LLaMB can be deployed in the following channels:

*   [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel)
    
*   [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps)
    
*   [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps)
    
*   [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams)
    

**24\. Are there any elements always shown in English, irrespective of the user’s language?** Yes. The following elements are expected to appear in English, regardless of the user’s language settings:

*   Acronyms
    
*   Digits
    
*   Document name
    
*   Citation links

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-rest-apis

[Content ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis)[LLaMB Reasoning API](/user-guide/llamb/llamb-rest-apis/llamb-reasoning-api)

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-rest-apis/content-ingestion-apis

## 

Upload document (HTML, URL) to LLaMB

`POST` `https://{{instance-name}}.avaamo.com/llamb-content-skill/content-ingestion/upload-web`

**Note:**

1.  The rate limit for the upload-web API is capped at 50 uploads per minute. Contact Avaamo Support with your use-case details if you wish to increase the rate limit for the API.
    
2.  Replace `{{instance-name}}` with your actual instance name, such as `c6` or `h1`.
    

**Recommendation:**

It is recommended to use the `upload-file` API instead of the `upload-web` API when uploading HTML content to the system. This approach ensures better control and consistency in content management. Using the upload-file API offers several advantages:

1.  **Content Persistence:** The uploaded HTML content is explicitly stored in the database, ensuring it is readily available for future reference.
    
2.  **Seamless Retraining:** Since the content is saved, it can be easily accessed during document retraining operations initiated through the UI.
    

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

content-type

String

application/JSON

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups#view-edit-a-document-group), for more information. **Note:** You can use either the `document_group_id` or a combination of `agent_id` and `document_group_uuid` in the request body. Both approaches are supported.

agent\_id

Number

Agent identifier.

You can get the agent identifier from the agent URL.

document\_group\_uuid

String

Unique user identifier for the document group.

You can get the document group UUID from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups#view-edit-a-document-group), for more information.

document\*

JSON

Document object that needs to be uploaded

document -> name\*

String

Name of the document.

Max length: 255 characters.

document -> attributes

Key-value

Define attributes for the uploaded documents or URLs in your LLaMB skill to facilitate disambiguation or filtering.

Example: `"attributes": "{\"key\": \"value\"}`"

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes), for more information.

document -> type\*

String

Type of the document.

Supported values: html, url

document -> preview\_url\*

String

Mandatory only for uploading HTML content.

Display the URL that needs to be opened when the user clicks the source citation in the response.

You can get the preview\_url from the Document group -> Document -> View/Edit page.

document -> language

String

This refers to the document's language. If you specify a language during ingestion, LLaMB uses that language to extract the content. If you do not provide, LLaMB automatically detects the document’s language and processes it accordingly.

document -> parsing\_template\_id\*

Integer

Specify the parsing template identifier that must be used to parse the document. You can get the identifier from the [Parsing template](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates) page.

Default value: default parsing template identifier is used.

It is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload.

document -> source \*

String

If uploading from a URL, `source` is the actual source URL from where the content must be ingested.

If uploading a HTML content, `source` is the raw HTML content.

Raw HTML Content must be in the following format:

`<title>Name of document</title><body>valid html content</body>`

400: Bad Request Bad

200: OK Successful request

Request indicates the payload is wrong

**Key points**:

*   Ensure that the right content is posted during upload, as the HTML content is sanitized before processing.
    
*   All content must be present in the following tags: "h1", "h2", "h3", "h4", "h5", "p", "img", "span", "td", "figure", "ol", "ul", "dd", "dt", "a", "table", "details", "summary". This list can be modified by using parsing templates.
    
*   The maximum request size should not exceed 5 MB. Contact Avaamo Support, if the size exceeds the limit.
    

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

true if the document was updated successfully

Boolean

response\_text -> id

Unique document identifier

Integer

response\_text -> name

Document name

String

response\_text -> uuid

Unique internal identifier of the document.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> status

Status can be any one of the following values: Uploaded, Queued, Extracting, Learning, Complete, Error, or Warning.

See [Status](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#document-status), for more information.

String

response\_text -> document\_group

Group identifier of the updated document.

Integer

response\_text -> source\_url

Source of the URL used for uploading the document.

String

response\_text -> source\_file

Source of the file used for uploading the document.

String

response\_text -> preview\_url

Preview URL of the updated document.

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

Integer

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

The following table lists a few sample use cases for uploading a document to LLaMB:

Use case

Request payload

Uploading a document using URL

Uploading a document using HTML

Uploading a document using HTML using `agent_id` and `document_group_uuid`

## 

Upload different types of files (pdf, docx, pptx, xlsx, csv, html) to LLaMB

**Note:**

1.  The rate limit for upload-file API is capped to 50 uploads per minute. Contact Avaamo Support with your use-case details if you wish to increase the rate limit for the API.
    
2.  Replace `{{instance-name}}` with your actual instance name, such as `c6,` `h1`.
    

`POST` `https://{{instance-name}}.avaamo.com/llamb-content-skill/content-ingestion/upload-file`

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

You can get the document group identifier from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups#view-edit-a-document-group), for more information. **Note:** You can use either the `document_group_id` or a combination of `agent_id` and `document_group_uuid` in the request body. Both approaches are supported.

agent\_id

Number

Agent identifier.

You can get the agent identifier from the agent URL.

document\_group\_uuid

String

Unique user identifier for the document group.

You can get the document group UUID from the Document group -> View/Edit page. See [View or edit document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups#view-edit-a-document-group), for more information.

name

String

Name of the file.

Max length: 255 characters.

type

String

Type of the document.

Supported types: pdf, docx, pptx, xlsx, csv

attributes

Key-value

Define attributes for the uploaded documents or URLs in your LLaMB skill to facilitate disambiguation or filtering.

Example: `"attributes": {"key": "value"}`

Attributes can be metadata of the document. You define attributes in key-value pairs. See [Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes), for more information.

language

String

This refers to the file's language. If you specify a language during ingestion, LLaMB uses that language to extract the content. If you set auto\_detect\_language to true, LLaMB automatically detects the document’s language and processes it accordingly.

source\*

String

The actual file that you wish to upload. Source is the file path location of the document.

preview\_url\*

String

Display URL that needs to be opened when the user clicks the source citation link in the response.

Mandatory only for uploading HTML files.

You can get the preview\_url from the Document group -> Document -> View/Edit page.

document -> parsing\_template\_id

Integer

Specify the parsing template identifier that must be used to parse the document. You can get the identifier from the [Parsing template](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/parsing-templates) page Default value: The default parsing template identifier is used.

It is recommended to create the parsing template in the Parsing template page and use the parsing\_template\_id in the API payload.

document -> auto\_detect\_language

String

If a user wants to upload a non-English document, LLaMB automatically detects its language if you set it to `true.`

200: OK Successful request

**Key points**:

*   The maximum request size should not exceed 5 MB. Contact Avaamo Support, if the size exceeds the limit.
    
*   You can upload only one file at a time.
    
*   Password-protected PDFs are not supported.
    

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

true if the document was updated successfully

Boolean

response\_text -> id

Unique document identifier

Integer

response\_text -> name

Document name

String

response\_text -> uuid

Unique internal identifier of the document.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> status

Status can be any one of the following values: Uploaded, Queued, Extracting, Learning, Complete, Error, or Warning.

See [Status](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#document-status), for more information.

String

response\_text -> document\_group

Group identifier of the updated document.

Integer

response\_text -> source\_url

Source of the URL used for uploading the document.

String

response\_text -> source\_file

Source of the file used for uploading the document.

String

response\_text -> preview\_url

Preview URL of the updated document.

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

Integer

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

The following table lists a few sample use cases for uploading a document to LLaMB:

Use case

Request payload

Uploading a pdf document

Uploading a html file

Uploading a html file using `agent_id` and `document_group_uuid`

## 

Delete the document from the specified document group

`DELETE` `https://{{instance-name}}.avaamo.com/llamb-content-skill/content-ingestion/delete-document`

#### 

Headers

Name

Type

Description

access-token\*

String

The user access token.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information

User must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information on agent permissions.

content-type

String

application/JSON

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Integer

Unique identifier of the document group from which you wish to delete a document.

You can get the document group identifier from the Document group -> View/Edit page. See [Create document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups), for more information.

document\_id\*

Integer

Unique identifier of the document that you wish to delete from the document group.

You can get the document\_id from the Document group -> Document -> Edit pop-up window. See [Edit document](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit), for more information.

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

true if the document was deleted successfully

Boolean

response\_text -> id

Unique document identifier

Integer

response\_text -> name

Document name

String

response\_text -> uuid

Unique internal identifier of the document.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> document\_properties

Document attributes, if any.

JSON

response\_text -> status

Status can be any one of the following values: Uploaded, Queued, Extracting, Learning, Complete, Error, or Warning.

See [Status](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#document-status), for more information.

String

response\_text -> document\_group

Group identifier of the deleted document

Integer

response\_text -> source\_url

Source of the URL used for uploading the document.

String

response\_text -> source\_file

Source of the file used for uploading the document.

String

response\_text -> preview\_url

Preview URL of the deleted document.

response\_text -> created\_at

Created datetime of document

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload document

Integer

response\_text -> updated\_at

String

response\_text -> updated\_by

User who updated the file

String

last\_error

Last error encountered with respect to the document

String

### 

Examples

The following table lists a few sample use cases for deleting a document from the `LLaMB Content` skill:

Use case

Request payload

Delete a document from a document group

## 

Update the document name or document preview URL

`PUT` `https://{{instance-name}}.avaamo.com/llamb-content-skill/content-ingestion/update-document`

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

content-type

String

application/JSON

#### 

Request Body

Name

Type

Description

document\_group\_id\*

Number

Unique identifier for the document group.

You can get the document group identifier from the Document group -> View/Edit page.

See [Create document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups), for more information.

document\*

JSON Object

Document object that needs to be updated.

document -> name

String

Name of the document.

Max length: 255 characters.

document -> preview\_url

String

URL that needs to be opened when user clicks in the response. See [Create document groups](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups), for more information.

document -> document\_id\*

Integer

Unique identifier of the document that you wish to update from the document group.

You can get the document\_id from the Document group -> Document -> Edit pop-up window. See [Edit document](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions#edit), for more information.

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

true if the document was updated successfully

Boolean

response\_text -> id

Unique document identifier

Integer

response\_text -> name

Document name

String

response\_text -> uuid

Unique internal identifier of the document.

String

response\_text -> document\_type

Type of the document uploaded

String

response\_text -> status

Status can be any one of the following values: Uploaded, Queued, Extracting, Learning, Complete, Error, or Warning.

See [Status](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#document-status), for more information.

String

response\_text -> document\_group

Group identifier of the updated document.

Integer

response\_text -> source\_url

Source of the URL used for uploading the document.

String

response\_text -> source\_file

Source of the file used for uploading the document.

String

response\_text -> preview\_url

Preview URL of the updated document.

String

response\_text -> created\_at

Created Datetime of file

String

response\_text -> file\_type

Type of file uploaded

String

response\_text -> parsing\_template

Parsing template used to upload file

Integer

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

Use case

Request payload

Update the name of the document

Update the preview URL of the document

## 

Document Status

The `Status` can be any of the following values based on the status of the uploaded content:

*   **Uploaded:** The document has been added to the skill.
    
*   **Queued:** The content is placed in a queue for further processing.
    
*   **Extracting**: Chunks of content are being extracted.
    
*   **Learning:** Acronyms and vocabulary are being generated.
    
*   **Complete**: The document is uploaded successfully. The extracted knowledge from the document is populated and ready to be used by any agent. See [View and Edit Knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.
    
*   **Error**: The upload has errored out. In case of errors, you can click `Error` in the `Status` column to view more details. See [Troubleshooting tips](/user-guide/llamb/troubleshooting-tips), for more information.
    
*   **Warning:** No business vocabulary was found in the document.

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-rest-apis/llamb-reasoning-api

The LLaMB Reasoning API allows you to fetch chunk-level relevancy analysis for a generated response using the `Agent ID` and `Message UUID`.

This API helps developers understand why specific chunks were considered relevant or irrelevant during answer generation.

`POST` `https://{{instance-name}}.avaamo.com/api/v1/agents/{agent_id}/query_insights/{message_uuid}/reasoning.json`

### 

Headers

Name

Type

Description

access-token\*

String

Unique access token of the user.

You can get the user access token from the Settings -> Users page. See [Users](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token) or [Groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#access-token-for-users-in-groups), for more information.

Users must have at least edit permission on the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

content-type

String

application/JSON

### 

Path parameters

Parameter

Type

Description

`agent_id`

Integer

Unique identifier of the agent

`message_uuid`

UUID

Unique identifier of the message. Can be obtained from [Insights API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights).

200: OK Successful request

Copy

    {
        "status": "success",
        "analysis_cache_hit": true,
        "conversation_uuid": "de976cxxxxxxxxxxxxxdb097d296e37b",
        "message_uuid": "bfxxxxf5-xxxx-xxxx-xxxx-7e4xxxxxb9c9",
        "generated_answer_history_id": 11xx65,
        "analysis": {
            "rSBwe4O6": {
                "match": true,
                "reasoning": "This chunk discusses using a chain to answer questions with source citation, including mentioning specific resources for achieving this."
            },
            "rOPER12I": {
                "match": true,
                "reasoning": "The chunk provides context on adding sources in question answering, which directly relates to the user's question about adding sources."
            },
            "I6zsoaJe": {
                "match": false,
                "reasoning": "This chunk is about DataSync features for content integration and synchronization, which is unrelated to adding sources in question answering."
            },
            "RvhhshMZ": {
                "match": false,
                "reasoning": "The chunk discusses Salesforce as a content source within a Knowledge Skill, which is unrelated to the process of adding sources to question answering."
            },
            "lIeYocMi": {
                "match": false,
                "reasoning": "This chunk is about adding the ADT plugin to Eclipse and is unrelated to adding sources in question answering."
            },
            "mxVuwbBQ": {
                "match": false,
                "reasoning": "Similar to chunk 4, this is about Eclipse configuration and not connected to the topic of adding sources."
            },
            "jgkpeAmp": {
                "match": true,
                "reasoning": "This chunk specifically mentions the 'query_with_sources' method, which is relevant to using sources in question answering, directly supporting the concept described in the generated answer."
            },
            "d1pUWXit": {
                "match": false,
                "reasoning": "The chunk covers general content ingestion across platforms without specific relevance to adding sources in question answering."
            },
            "CAvIrpli": {
                "match": false,
                "reasoning": "The content discusses integration and ingestion of enterprise content but does not relate to the concept of sourcing in question answering."
            },
            "vPQDMmjM": {
                "match": false,
                "reasoning": "This chunk covers general platform updates on content ingestion but does not address the specific topic of adding sources during question answering."
            }
        }
    }

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response:

### 

Response fields

Attribute

Description

Type

`status`

Status of the API response

String

`analysis_cache_hit`

Indicates whether the analysis was retrieved from cache. Supported values: `true`, `false`

Boolean

`conversation_uuid`

Unique identifier of the conversation

String

`message_uuid`

Unique identifier of the message

String

`generated_answer_history_id`

Identifier for the generated answer history

Integer

[`analysis`](/user-guide/llamb/llamb-rest-apis/llamb-reasoning-api#analysis-object)

Chunk-level relevancy analysis

Object

#### 

Analysis object

Each `key` (For example: `I6zsoaJe`, `vPQDMmjM`)inside the `analysis` object represents a `chunk_id` generated by LLaMB.

Field

Type

Description

`match`

Boolean

Indicates whether the chunk matched the generated response. Supported values: `true`, `false`

`reasoning`

String

Explanation describing why specific chunks were considered for the generated response.

### 

Response status codes

Status code

Description

`200`

Successful request

`500`

Internal server error

`422`

Unprocessable entity (invalid or incorrect parameters)

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters

[Overview](/user-guide/llamb/llamb-filters/overview)[Key terms](/user-guide/llamb/llamb-filters/key-terms)[Social filters](/user-guide/llamb/llamb-filters/social-filters)[Grounding filters](/user-guide/llamb/llamb-filters/grounding-filters)[Brand protection filters](/user-guide/llamb/llamb-filters/brand-protection-filters)[Hallucination filters](/user-guide/llamb/llamb-filters/hallucination-filters)

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/overview

Avaamo's LLaMB is a new low-code framework designed to enable the safe, secure, and rapid development of powerful generative AI agents for enterprise use. Leveraging large language model (LLM) technology, LLaMB delivers personalized and summarized results while ensuring the necessary levels of security and compliance for enterprise applications. It provides a practical and secure solution for deploying LLMs, enhancing knowledge search experiences for both employees and customers.

However, implementing LLaMB introduces substantial challenges such as,

*   Data security
    
*   Mitigating prompt injection attacks, where malicious inputs manipulate the model into generating harmful outputs.
    
*   Instances of jailbreaks, where users bypass safety mechanisms to elicit inappropriate or dangerous responses from the AI, further expose system vulnerabilities.
    
*   Safeguarding against the disclosure of sensitive information and managing the generation of insecure or biased outputs are critical concerns.
    

This section details the filters and tools in LLaMB that provide robust and comprehensive safeguards essential for enterprise-grade LLM applications:

[](/user-guide/llamb/llamb-filters/social-filters)

**Social filters**

Detect and filter harmful content in both user prompts and generated outputs in the following categories

*   Racism
    
*   Hate
    
*   Violence
    
*   Self-harm
    
*   Sexual harassment
    
*   Discrimination
    
*   Drugs
    

[](/user-guide/llamb/llamb-filters/grounding-filters)

**Grounding filters**

Ensures the quality, accuracy, and relevance of the generated output, and helps to "ground" the models in the context of the specific use-case to obtain accurate and relevant output.

[](/user-guide/llamb/llamb-filters/brand-protection-filters)

**Brand Protection filters**

Protect your brand, and ensure that your content is safely and ethically used.

*   Brand Awareness
    
*   Business taxonomy
    

[](/user-guide/llamb/llamb-filters/hallucination-filters)

**Hallucination filters**

Eliminate hallucinations and help in the detection and correction of fabricated or false content generated by the model.

By integrating these rigorous input validation, continuous monitoring, and strict data privacy measures, LLaMB offers a secure and efficient approach to enterprise AI deployment.

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/key-terms

Terms

Description

Neural classification model

A neural classification model is a machine learning model that uses neural networks to categorize input data into predefined classes or categories.

See [Neural networks](https://en.wikipedia.org/wiki/Neural_network_\(machine_learning\)), for more information.

Jailbreak Attacks

These are user prompts that ask the model to roleplay a character, answer with arguments, or pretend to be superior to moderation instructions, thus provoking the model to break the rules set in the System Message.

See [Prompt Engineering](https://en.wikipedia.org/wiki/Prompt_engineering), for more information.

Indirect Attacks

Indirect attacks, or indirect prompt injection attacks, are techniques used to manipulate language models by exploiting indirect pathways to achieve an unintended output. Instead of directly asking the model to perform a restricted action or generate inappropriate content, an indirect attack involves crafting inputs that lead the model to produce such outputs through subtle and indirect means.

See [Prompt Engineering](https://en.wikipedia.org/wiki/Prompt_engineering), for more information.

Few-shot examples

Few-shot prompting is a technique to enable in-context learning where examples are provided in the prompt to steer the model to better performance.

See [Prompt Engineering](https://en.wikipedia.org/wiki/Prompt_engineering), for more information.

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/social-filters

In simple terms, `Social filtering` is the process of identifying and managing content that is inappropriate, harmful, or irrelevant based on certain criteria in any of the following categories - Racism, Hate, Violence, Self-harm, Sexual harassment, Discrimination, and Drugs.

### 

Social filter categories

Using the neural multi-class classification models, the `Social filtering` system in LLaMB identifies and determines its severity based on predefined criteria in both input prompts and output completions in the following main categories:

Category

Description

Racism

Content promoting discrimination and prejudice against people based on their race or ethnicity.

Hate

Content promoting hate against specific groups.

Violence

Content promoting violence against specific groups, endorsing illegal weapon use, or providing related instructions, or encouraging or aiding in various criminal activities

Self Harm

Content encouraging self-harm or lacking appropriate health resources.

Sexual harassment

Encouraging sexual acts, particularly with minors, or explicit content.

Discrimination

Content promoting unfair or prejudicial distinctions between people based on the groups, classes, or other categories to which they belong or are perceived to belong, such as race, gender, age, religion, physical attractiveness, or sexual orientation.

Drugs

Promoting illegal production or use of controlled substances.

### 

How does it work?

The following are some of the key features that describe how social filtering in LLaMB works:

*   **Real-time evaluation:** `Social filtering` is applied synchronously, meaning that both the input prompts and the generated outputs are evaluated in real-time. This ensures that the harmful content is identified and filtered before it can be displayed or processed further.
    
*   **Zero tolerance against harmful content:** The default social filtering configuration is set to filter at the **strict** severity threshold for all the [listed content harm categories](/user-guide/llamb/llamb-filters/social-filters#kaurp122tf8c) for both prompts and completions, implying a zero-tolerance approach for both input prompts and output completions.
    
*   **Customized blocklist for output content**: Blocklists are used to prevent specific terms or patterns from appearing in the output generated by LLaMB. These blocklists can be customized as per your business requirement and aim at ensuring the responsible use of LLaMB by blocking inappropriate, harmful, or undesirable content. When a blocklist is applied to a social filter, any prompt or generated content that matches an item in the blocklist is blocked.
    
*   **Prompt shields against jailbreak attacks, and indirect attacks**: These shields are designed to filter or annotate user prompts that might present a risk of bypassing social filters. LLaMB provides a framework to define and enforce rules around acceptable topics, responses, and dialogue paths, it prevents harmful or inappropriate outputs from large language models. This is particularly important for protecting against vulnerabilities like jailbreaks and prompt injections. Rules are used to:
    
    *   Either reject the input, stop further processing, or adjust the input to ensure safety and appropriateness.
        
    *   Either block the output, preventing it from reaching the user, or modify it to ensure it aligns with content guidelines and user expectations.
        
    *   To handle messages in their standard forms and determine whether to act, call the LLM for the next step or a response, or choose a predefined reply, ensuring the conversation stays relevant and appropriate.
        
    *   Reject a chunk, stopping it from being used to prompt the LLM, or modify the relevant chunks to ensure that only accurate and safe information is utilized.
        
    
*   **Policies to safeguard content**: LLaMB defines policies that help in safeguarding both inputs (prompt classification) and response classification. It helps in indicating whether a given prompt or response is safe/unsafe, and if unsafe based on a policy.
    

### 

Examples

**Example 1**: The following example illustrates an example LLaMB agent and how the **Zero-tolerance** threshold filters the content from generating derogatory responses:

**Example 2**: A few other instances to illustrate how LLaMB social filters detect inappropriate input prompts and prevent generating any harmful responses with its Strict threshold policy:

**Example 3**: The following example demonstrates how prompt shield works against jailbreak attacks:

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/grounding-filters

Grounding filters ensure the quality, accuracy, and relevance of the generated output, and help to "ground" the models in the context of the specific use case to obtain accurate and relevant output.

### 

How does it work?

Grounding filters in LLaMB work on two primary metrics:

*   **Answer relevancy:** This metric calculates the degree to which the generated response accurately and appropriately addresses the given input or query. It measures how well the generated answer matches the given prompt. Answers with incomplete or unnecessary information get lower scores, while more relevant answers get higher scores. The score is determined using the question, the context, and the answer.
    
*   **Context relevancy:** Context relevancy metrics calculate the degree to which the generated response accurately addresses and aligns with the context provided by the input. It gauges the relevancy of the retrieved context, calculated based on both the question and contexts. LLaMB uses techniques like transformers and attention mechanisms to better capture and understand the context. Embeddings help the model retain and relate to contextual information effectively.
    

### 

Examples

The following example illustrates an example LLaMB agent and how grounding filters help in generating accurate responses with relevant context:

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/brand-protection-filters

LLaMB `Brand protection` filters involve implementing strategies and mechanisms to ensure that the outputs generated by the model are always in favor of the company and do not harm or misrepresent a brand's image, reputation, or values.

## 

How does it work?

There are two primary phases for implementing brand protection filters:

1.  [Pre-Go-Live Phase](/user-guide/llamb/llamb-filters/brand-protection-filters#pre-go-live-phase): In this phase, you work with Avaamo Support to configure brand protection filters tailored to your account. This includes validating the filters with experts to ensure that the model comprehends the specific taxonomy and branding requirements of your account.
    
2.  [Post-Go-Live Phase](/user-guide/llamb/llamb-filters/brand-protection-filters#post-go-live-phase): The first two weeks after going live are critical. It is recommended to continually review and monitor the conversations to maintain a consistent narrative in all interactions, thereby protecting the brand's image, reputation, and values.
    

## 

Pre-Go-live phase

### 

Step 1 - Configure your brand in LLaMB

The first step towards ensuring `Brand protection` is to configure the filters based on your business taxonomy and the brand details.

1.  Contact Avaamo Support with your company name, instance, and agent details to get started.
    
2.  Share the brand names, and business taxonomy list in the format provided by Avaamo Support.
    
3.  To add [few-shot examples](/user-guide/llamb/llamb-filters/key-terms) specific to your business, share with Avaamo Support a few examples in user-query, response format.
    
4.  Based on the business taxonomy and brand details, a customized `Brand protection` filter is configured for your account using the following two primary principles:
    
    *   **Strict system instructions**: Strict system instructions are provided to a language model during inferencing to ensure that it consistently answers in favor of the company and does not harm or misrepresent a brand's image, reputation, or values. These instructions dictate that the model should never generate responses that could harm the company's reputation or suggest any form of liability. The guidelines mandate a positive portrayal of the company's products, services, and policies. Additionally, the model is directed to avoid any statements that might be construed as negative or critical. This ensures a consistent and favorable narrative in all interactions, aligning with the company's strategic interests.
        
    *   **Few-shot examples**: To reinforce the system instructions, few-shot examples are integrated into the training data. Positive examples include responses like, "_The latest product from \[Company\] is outstanding, offering cutting-edge features and unmatched quality that set it apart in the market,_" and "_\[Company\] excels in customer service, ensuring that every customer is satisfied with prompt and professional support._" Negative examples, illustrating what to avoid, include, "_I don't have any information on that,_" and "_I'm not able to provide an answer to that question._" These examples help the model understand the desired tone and content of its responses while steering clear of potentially harmful topics.
        
    

### 

Step 2 - Validate the control

*   You will receive a confirmation from Avaamo Support after the Brand protection configuration is completed.
    
*   Use your business experts or SMEs to run the brand protection validation. See [Categories and Examples](/user-guide/llamb/llamb-filters/brand-protection-filters#id-4zakda4rsiw4), for more information.
    

### 

Step 3 - More questions or need help?

*   During validation, in case of any questions or queries, contact Avaamo Support for further assistance.
    
*   When you reach out to Avaamo Support, provide us with your response to the Jailbreak question. How would you respond to the question?
    
*   Avaamo Support will review the request and update the configurations if required.
    
*   Repeat [Step 2](/user-guide/llamb/llamb-filters/brand-protection-filters#step-1-configure-your-brand-in-llamb) until you achieve the desired result.
    

## 

**Post-Go-Live** phase

### 

Step 1 - Review and Monitor

The first 2 weeks after going live, review every thumbs-down feedback in a given 24-hour period. See [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics) and [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information on how to extract the analytics data.

### 

Step 2 - Report the observations for swift action

*   Report your observation and attach an Urgency.xls file with the Jailbreak query, current response, and suggested response.
    
*   All brand protection production scenarios are considered at the highest severity and Avaamo Support will take immediate action based on the information provided.
    

**Note**: This is the emergency response that suppresses LLaMB-generated response instantly. This works on question similarity. There is no need to add a lot of variations, however, Avaamo Support can add variations you tested.

## 

Categories and Examples

### 

About your brand/company

### 

Competitor queries

### 

Comparison queries

### 

Protecting brand image

### 

Unsupported activities

### 

Unreleased products/services

### 

Market predictions

### 

Make projections

---

## Source: https://docs.avaamo.com/user-guide/llamb/llamb-filters/hallucination-filters

A hallucination filter in LLaMB involves a mechanism designed to detect and mitigate instances where the model generates false, misleading, or fabricated information.

## 

How does it work?

The hallucination filter in LLaMB works by detecting and generating faithful responses to the claims made in the answer from the given context.

The generated answer is considered faithful if all the claims made can be inferred from the given context. To determine this, a set of claims from the generated answer is first identified. Each of these claims is then cross-checked with the provided context to verify whether it can be inferred from that context.

## 

**Post-Go-Live** phase

### 

Step 1 - Review and Monitor

The first 2 weeks after going live, review every thumbs-down feedback in a given 24-hour period. See [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics) and [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information on how to extract the analytics data.

### 

Step 2 - Report the observations for swift action

*   Report your observation and attach an Urgency.xls file with the Jailbreak query, current response, and suggested response.
    
*   All hallucination production scenarios are considered at the highest severity and Avaamo Support will take immediate action based on the information provided.
    

**Note**: This is the emergency response that suppresses LLaMB-generated response instantly. This works on question similarity. There is no need to add a lot of variations, however, Avaamo Support can add variations you tested.

## 

Examples

The following example illustrates how the hallucination filters work in LLaMB by generating faithful and factual responses:

---
