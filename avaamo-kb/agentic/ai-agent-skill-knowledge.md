# AI Agent — Knowledge Skill
> 57 pages

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill

[Create knowledge skill](/user-guide/ai-agent/skills/knowledge-skill/create-knowledge-skill)[Add content to knowledge skill](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill)[View and edit knowledge](/user-guide/ai-agent/skills/knowledge-skill/view-and-edit-knowledge)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/create-knowledge-skill

The **Knowledge skill** is designed to empower AI agents by seamlessly integrating and processing information from a variety of content sources—such as documentation, product guides, FAQs, and enterprise systems. With this capability, the agent can deliver accurate, context-aware responses grounded in the most up-to-date information.

Using `Knowledge skill`, users can now integrate a wide variety of content directly from their repositories into the skill, streamlining the content integration and management process.

#### 

Key highlights

*   **Content integration**: Ingest structured and unstructured information from documents, web pages, repositories, and other sources.
    
*   **Real-time synchronization**: Connect with systems of record such as `SharePoint`, `ServiceNow`, `web platforms`, and `files` to ensure content is always current.
    
*   **Flexible synchronization modes**: Choose between `AutoSync` for continuous updates or `Manual` synchronization, with execution history tracking for visibility and control.
    
*   **Data management**: Improve processing and integration of information, ensuring consistency, accuracy, and reliability across the knowledge base.
    
*   **Scalability**: Support a wide range of content formats and sources, enabling AI agents to expand knowledge effortlessly.
    

The Knowledge skill lays the foundation for creating intelligent, self-sufficient AI agents that scale support, reduce manual intervention, and enhance the quality of information delivered to end users.

Based on your requirements, you can create a new Knowledge skill.

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   You can add skills immediately after creating an agent. See [Create agent](/user-guide/ai-agent/create-an-ai-agent), for more information.
    
*   To edit an agent, navigate to the Agents tab in the top menu, search for the agent, and then open it. See [Search agents](/user-guide/how-to/build-agents/manage-agents/other-common-actions#search-agents), for more information.
    
*   Click Edit to unlock the agent before editing.
    

**To create Knowledge skills:**

*   In the Agent page, navigate to the `Skills` option in the left navigation menu and click `Add Skill`.
    
*   In the `Skill Builder` page, select `LLaMB Content Skill.`
    
*   Specify the following details and click `Create skill`:
    

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

Indicates the internal primary key used in the Avaamo Platform for uniquely identifying the skill. By default, a key is provided when you create a skill. You can change it to any user-friendly identifier.

Supported characters: Alphanumeric and underscore

It is recommended that the key be at least three characters. As you type, the key is automatically converted to Snake Case. See [Snake Case](https://en.wikipedia.org/wiki/Snake_case), for more information.

Note that the skill key must be unique in the agent. You can specify the same identifier in the flow control prompts. It helps in easy identification and readability.

20 characters

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill

[Before you begin](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/before-you-begin)[SharePoint](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint)[ServiceNow](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow)[Web Sitemap](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap)[Web CSV Upload](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload)[Files](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files)[Confluence](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence)[Salesforce](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce)[Testing and validation](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/testing-and-validation)[Common actions](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/before-you-begin

Ensure that the following prerequisites are met before using Knowledge skill:

*   [Content readiness](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/before-you-begin#id-3.-content-readiness)
    
*   [Supported content source](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/before-you-begin#id-5.-supported-content-source)
    

### 

Content readiness

*   Before incorporating articles and documents into your content source, ensure all the information is fully prepared and comprehensive.
    
*   Verify that the chosen documents are completely finalized and suitable for use. It is recommended to avoid ingesting empty documents.
    
*   If the documents or articles contain attachments, ensure that these attachments are in PDF format. The maximum size should not exceed 5 MB.
    

### 

Supported content source

The Content Source is your database that contains all articles or documents intended for ingestion by the Knowledge skill. It provides a platform for configuring and efficiently using available data. Below are the different types of content sources available for configuration:

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint)

**SharePoint:**

A platform for collaborative document management and storage.

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow)

**ServiceNow:**

A cloud platform that provides service management software.

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap)

**Web Sitemap:**

The site from which you want to ingest articles into your agent.

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files)

**Files:**

Different types of files you want to ingest into your agent

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence)

**Confluence:**

A professional collaborative workspace and documentation platform.

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload)

**Web CSV upload:**

The CSV from which you want to ingest articles into your agent.

[](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce)

**Salesforce:**

Cloud-based CRM platform that helps businesses manage customer relationships, sales, and support operations.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/pre-requisites

You can ingest SharePoint content into your Knowledge skill seamlessly using the SharePoint connector. This integration enables you to use the selected resources directly from SharePoint to train your agent effectively.

Ensure that the following pre-requisites are met before creating a `SharePoint` connector**:**

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Content source authorization details:** Ensure you have all necessary authorization details prepared for your content sources. Your SharePoint admin must provide you with the following information for each source:
    
    *   SharePoint Tenant Name
        
    *   SharePoint Tenant ID
        
    *   OAuth Client ID
        
    *   OAuth Client Secret

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `SharePoint`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/configure-connection)[Select sites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites)[Preview artifacts](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/preview-artifacts)[Set document attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Name

Name of the Configuration Maximum length: `255 characters`

Yes

SharePoint Tenant Name

It is the domain name in the URL of the SharePoint

`For example:` https://<tenant\_name>.sharepoint.com

Maximum length: `255 characters`

To be provided by SharePoint admin

Yes

SharePoint Tenant ID

To be provided by SharePoint admin

Yes

OAuth Client ID

To be provided by SharePoint admin

Yes

OAuth Client Secret

To be provided by SharePoint admin

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites

Select the sites where your documents and articles are available. You can view all available folders from your content source and choose any number of sites by selecting the checkbox next to them. Click `Next`.

You can also search for folders to quickly locate the folder where your articles or documents are stored.

You can also use the `Show selected at top` toggle to keep the selected folder displayed at the top of the list for easier access.

If you remember the name of the site, you can specify the site and the folder in the `Specific site`. Click on the `Specific Sites` tab, enter the folder name, and click `Add Site` to add one more such specific site.

**Note:**

1.  If you configure both the `Sites List` and `Specific Sites`, the selection precedence is determined by where you click the `Next` button. In the above example,
    
    *   If you click `Next` while on the `Sites List` screen, the `AI QA` and `ITSM` folders are selected.
        
    *   If you click `Next` while on the `Specific Sites` screen, the `hrpolicies/leave` folder is selected.
        
    
2.  Ensure that the folder name matches the specific site's actual name. You can confirm this using the URL of your content source.
    

Refer to the table below for examples.

URL

Specific site name

https://sample.sharepoint.com/sites/ITSM

ITSM

https://sample.sharepoint.com/sites/hrpolicies/leave

hrpolicies/leave

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/preview-artifacts

Here, you can view all documents, pages, and lists available from the folders you selected in the last step. You have the option to preview them before making your selection, ensuring they meet your specific needs.

Select the documents, pages, and lists by clicking the checkbox next to the file name. Click `Next`.

**In this section, you can:**

*   Preview articles before selecting them by clicking **View**.
    
*   Navigate across different pages to select articles.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, and `Failed` Documents

Processing

Number of Documents ingestion is under process

Ingested

Number of Documents ingested

Failed

Number of Documents failed to ingest

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: TITLE

Name of the documents

Column name: SITE

URL or folder name from where the document is selected.

Column name: TYPE

Type of articles ingested like Documents, Lists, or Pages

Column name: STATUS

Status of the articles. You can also filter with these statuses. `Queued`**:** Initial status of the articles while processing the ingestion

`Extracting`: Processing the information in the documents as Knowledge

`In Progress`**:** Ingestion process in progress `Ingested`**:** Articles successfully ingested `Error`**:** Ingestion was unsuccessful. Hover over the error status to view the reason.

Column name: ACTION

Click the three dots to `View, Delete, Edit and Reingest` the ingested document.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/pre-requisites

You can use ServiceNow as your content source to add the documents and articles. This integration enables you to use the selected resources to train your bot effectively.

Below are the Prerequisites for creating a `ServiceNow`:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Content source authorization details**: Ensure you have all necessary authorization details prepared for your content sources. Your ServiceNow admin should provide you with the following information for each source:
    
    *   Source Url
        
    *   User Name
        
    *   Password

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `ServiceNow`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter articles](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Source Url

It is the URL of the ServiceNow instance.

`For example: https://<tenant_name>.servicenow.com`

Maximum length: `255 characters`

To be provided by the ServiceNow admin

Yes

User Name

To be provided by the ServiceNow admin

Yes

Password

To be provided by the ServiceNow admin

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/filter-articles

It displays all the folders containing articles or documents in your `ServiceNow` knowledge base, enabling you to select multiple items by checking the boxes next to them in the `By Knowledge Base` section.

*   Additionally, you can use the `Advanced Filter` option to precisely filter articles by document status or workflow (such as Published, Active, or Valid to date) within the selected folders in the first step.
    

*   You can also configure the articles or documents using an `Custom query to select the Knowledge Articles` option. Click the Toggle button in front of the `Use Custom Query` option. Contact the ServiceNow admin or Avaamo support to get the custom query URL.
    

**Note:** If you configured `Filter Articles` with both options, the `Custom Query URL` option takes precedence.

*   Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/step-2-configure-content-source-and-ingest-content/set-document-attributes

### 

**Set static properties**

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

**Set dynamic attributes**

Here, you can set a predefined set of dynamic attributes.

Click the toggle to enable this option, then use the dropdown menu to select values to assign to the documents chosen in the previous step.

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

**Note:** Attachments within the documents are not accessible for viewing.

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, `Failed` and `others` articles.

Processing

Number of articles ingestion is under process

Ingested

Number of articles ingested

Failed

Number of articles with ingested status as Error

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: TITLE

Name of the document

Column name: NUMBER

Number of the document

Column name: DOCUMENT TYPE

Type of document ingested such as articles or attachments

Column name: STATUS

Status of the articles. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Reingest, Edit, and Delete` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/pre-requisites

You can ingest website content into your LLaMB skill seamlessly using the `Web sitemap` content source option. This integration enables you to extract relevant information directly from webpages, training your agent effectively with up-to-date, structured data.

Ensure that the following prerequisites are met before ingesting website content:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Website access and configuration details:** Verify that the following requirements are met before creating a website connector:
    
    *   **Valid website URL:** Ensure the URL is publicly accessible, or that you have the required access credentials if it is a restricted site.
        
    *   **Content accessibility:** The webpages should allow web scraping or data extraction ( site policies should permit access).
        
    *   **Structured page content:** Ensure that the website content is formatted correctly with readable text and metadata (avoid sites with heavy JavaScript rendering or dynamically loaded content).
        
    *   **HTTPS support:** The website should use HTTPS for secure content retrieval.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Web Sitemap`. Click `Next`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter web pages](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/filter-web-pages)[Set document attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Source Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Source URL

This is the URL of your knowledge base where all the articles you wish to ingest for the agents are available.

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/filter-web-pages

It displays all the URLs of the articles in the knowledge base or CSV file, enabling you to select multiple items by checking the boxes next to them in the `Select Sites` section. Click `Next`.

In this section, you can perform the following actions:

*   **Preview articles** before selecting them by clicking **View**.
    
*   **Check the last modified date** of each URL to understand when the content was last updated.
    
*   **Manually select the language** in which the document should be ingested. Choose the language from the dropdown, which lists all languages configured for the agent.
    

**Note:** The **Auto Detect Language** option must be turned off to manually select a language.

*   **Search for specific articles** using the search bar if you already know the URL.
    
*   **Navigate through different pages** to browse and select article URLs.
    
*   **View the total number of URLs** available and how many have been selected.
    
*   Use the **Auto Detect Language** toggle to automatically detect the document's language during ingestion.
    

#### 

Whitelist via CSV

This option allows you to selectively ingest specific URLs from a sitemap by uploading a CSV file containing the desired URLs. This feature helps you control which pages in the sitemap are included during ingestion.

The uploaded CSV file must contain a list of URLs that you want to ingest.

**Required format**

*   The CSV file must include a column header named `**loc**`.
    
*   Each row should contain a website URL.
    

**Example CSV format:**

After uploading the CSV file:

*   The system checks whether each URL in the CSV exists in the sitemap.
    
*   URLs that match entries in the sitemap are selected for ingestion.
    
*   URLs that are not part of the sitemap are ignored and not ingested.
    
*   The system displays the count of URLs that were not found in the sitemap.
    

This ensures that only valid sitemap URLs are processed.

**Note:** If the CSV file does not contain the `loc` header, an error is returned.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-sitemap/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, and `Failed` URLs

Processing

Number of URLs ingestion is under process

Ingested

Number of URLs ingested

Failed

Number of URLs failed to ingest

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: URL

Path of the URL. You can use any part it in the search bar to find it out.

Column name: STATUS

Status of the articles. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Edit, reingest, and delete` the ingested document.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   Insufficient content: Webpages with very little content may fail ingestion and be marked as errored.
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/pre-requisites

You can ingest website content into your LLaMB skill seamlessly using the `Web CSV Upload` content source option. This integration enables you to extract relevant information directly from webpages, training your agent effectively with up-to-date, structured data.

Ensure that the following prerequisites are met before ingesting website content:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Website access and configuration details:** Verify that the following requirements are met before creating a website connector:
    
    *   **Valid website URL:** Ensure the URLs in the CSV are publicly accessible, or that you have the required access credentials if the site is restricted.
        
    *   **Content accessibility:** The webpages in the CSV should allow web scraping or data extraction ( site policies should permit access).
        
    *   **Structured page content:** Ensure that the website content is formatted correctly with readable text and metadata (avoid sites with heavy JavaScript rendering or dynamically loaded content).
        
    *   **HTTPS support:** The website should use HTTPS for secure content retrieval.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Web CSV upload`. Click `Next`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter web pages](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/filter-web-pages)[Set document attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Source Name

Name of the Configuration

Maximum length: `255 characters`

Yes

CSV file

This file contains the URLs of the articles you want to ingest for the agents.

You can download a sample CSV file for reference. You can include the URL names in the CSV file. Click `Browse` to select the file from your local folder. And click.

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/filter-web-pages

It displays all the URLs of the articles in the knowledge base or CSV file, enabling you to select multiple items by checking the boxes next to them in the `Select Sites` section. Click `Next`.

In this section, you can perform the following actions:

*   **Preview articles** before selecting them by clicking **View**.
    
*   **Manually select the language** in which the document should be ingested. Choose the language from the dropdown, which lists all languages configured for the agent.
    

**Note:** The **Auto Detect Language** option must be turned off to manually select a language.

*   **Search for specific articles** using the search bar if you already know the URL.
    
*   **Navigate through different pages** to browse and select article URLs.
    
*   **View the total number of URLs** available and how many have been selected.
    
*   Use the **Auto Detect Language** toggle to automatically detect the document's language during ingestion.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/web-csv-upload/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, and `Failed` URLs

Processing

Number of URLs ingestion is under process

Ingested

Number of URLs ingested

Failed

Number of URLs failed to ingest

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: URL

Path of the URL. You can use any part it in the search bar to find it out.

Column name: STATUS

Status of the articles. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Edit, reingest, and delete` the ingested document.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   Insufficient content: Webpages with very little content may fail ingestion and be marked as errored.
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/pre-requisites

You can ingest file-based content into your LLaMB skill seamlessly by uploading supported files directly. This method allows you to use structured and unstructured documents to train your agent effectively.

Ensure that the following prerequisites are met before ingesting files:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **File readiness and access details:** Verify that the files meet the following requirements:
    
    *   **Supported formats:** Files must be in one of the supported formats — PDF, DOCX, TXT, HTML, or CSV.
        
    *   **Access permissions:** You must have read access to the files you plan to ingest.
        
    *   **File integrity:** Files must not be corrupted, password-protected, or contain unsupported embedded objects.
        
    *   **File organization:** Store files in an accessible location, such as your local system or a supported cloud source, before ingestion.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Files`. Click `Next`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/configure-connection)[Upload files](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/upload-files)[Set Document Attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Name

Name of the Configuration

Maximum length: `255 characters`

Yes

**Note:** You can choose either `Sitemap` or `URL` option to ingest articles into your agent.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/upload-files

You can upload various file types here to simplify data ingestion, making it easy to add your documents and seamlessly integrate important information into your system.

*   Click the `Drop your PDF, DOCX, XLSX, HTML, or CSV files here!` option or drag and drop files directly from your folder to ingest documents. You can select multiple files.
    

*   After selecting files, you can:
    

1.  Set preview URLs for each selected document individually. (A preview URL is mandatory for HTML files.)
    
2.  Change the name of the file in the `Source Name` field.
    
3.  View the file name, type, and size for each document.
    
4.  You can use the `Auto Detect Language` toggle to automatically detect the language of uploaded documents or files. When this option is enabled, manual language selection for individual documents is disabled.
    
5.  If the `Auto Detect Language` toggle is disabled, you can set the document language by selecting it from the dropdown available under the `Language` option. It displays the languages configured for the agent.
    
6.  Delete any file you do not wish to ingest.
    

*   Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/files/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can create new attributes and assign them to the documents you selected in the previous step.

1.  You can create new attributes to apply them to files.
    
2.  Click the dropdown menu and choose `+ Additional Attribute` to create a new attribute and assign a corresponding value.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

1.  Click `Submit`.
    
2.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles. Also, you can filter by status like `Ingested`, `Error`, or `In Progress`.
    

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, and `Failed` documents

Processing

Number of documents ingestion is under process

Ingested

Number of documents ingested

Failed

Number of articles failed to ingest

Column name: NAME

Name of the files

Column name: FORMAT

Type of the files

Column name: DATE ADDED

Date and time stamp of the file ingested

Column name: STATUS

Status of the articles. You can also filter with these statuses. `Queued`**:** Initial status of the articles while processing the ingestion

`In Progress`**:** Ingestion process in progress `Ingested`**:** Articles successfully ingested `Error`**:** Ingestion was unsuccessful `warning`: Ingestion process is unsuccessful with a warning.

Column name: ACTION

You can `View, and Edit` the ingested document.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/pre-requisites

You can use Confluence as your content source to add the documents and articles. This integration enables you to use the selected resources to train your bot effectively.

Below are the Prerequisites for creating a `Confluence connector`:

1.  Make sure to complete all the necessary actions outlined in the [Before you begin](/user-guide/ai-agent/before-you-begin) section.
    
2.  **Content source authorization details**: Ensure you have all necessary authorization details prepared for your content sources. Your Confluence admin should provide you with the following information for each source:
    
    *   Source Url
        
    *   User Email
        
    *   API Token

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Confluence`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter articles](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, configure the source-specific details.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Source Url

It is the URL of the Confluence instance.

`For example: https://<tenant_name>.confluence.com`

Maximum length: `255 characters`

To be provided by the Confluence admin

Yes

User Email

To be provided by the Confluence admin

Yes

API Token

To be provided by the Confluence admin

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/filter-articles

It displays all the folders containing articles or documents in your `Confluence` knowledge base, enabling you to select multiple items by checking the boxes next to them in the `Select Content` section. Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/confluence/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

**Note:** Attachments within the documents are not accessible for viewing.

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, `Failed` and `others` articles.

Processing

Number of articles ingestion is under process

Ingested

Number of the ingested articles

Failed

Number of articles with ingested status as Error

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: TITLE

Name of the articles

Column name: NUMBER

Identification number of the document

Column name: DOCUMENT TYPE

Type of document ingested such as articles or attachments

Column name: STATUS

Status of the articles. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

Click the three dots to `View, Delete, Edit and Reingest` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce

[Pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/pre-requisites)[Step 1: Select the content source type](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/pre-requisites

You can use `Salesforce` as your content source type for adding documents and articles. This integration enables you to use the selected resources to train your agent effectively.

Below are the Prerequisites for creating a `Salesforce`:

1.  Ensure you complete all actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Content source configuration details**: Ensure you have the following details available to configure Salesforce as a content source:
    
    *   Source URL
        
    *   OAuth Client ID
        
    *   OAuth Client Secret

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/servicenow/pre-requisites).
    
*   Click `Edit` to unlock the agent before making any changes.
    

1.  After creating the Knowledge skill, click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Salesforce`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter articles](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Source Url

It is the URL of the Salesforce instance.

`For example: https://<tenant_name>.salesforce.com`

Maximum length: `255 characters`

To be provided by the Salesforce admin

Yes

OAuth Client ID

To be provided by the Salesforce admin

Yes

OAuth Client Secret

To be provided by the Salesforce admin

Yes

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/filter-articles

It displays all the folders containing articles or documents in your Salesforce knowledge base, enabling you to select multiple items by checking the boxes next to them in the `By Types` section.

*   Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content/set-document-attributes

### 

**Set static properties**

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`. After successfully enabling the Advanced Attribute Handler, the status `Enabled` appears in front of the `Configure Document Transformation` option.
    
2.  You can view the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

**Note:** Attachments within the documents are not accessible for viewing.

Parameter

Description

Total Documents

It is the sum of the number of `Processing`, `Ingested`, `Failed` and `others` articles.

Processing

Number of articles ingestion is under process

Ingested

Number of articles ingested

Failed

Number of articles with ingested status as Error

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: TITLE

Name of the document

Column name: NUMBER

Number of the document

Column name: DOCUMENT TYPE

Type of document ingested such as articles or attachments

Column name: STATUS

Status of the articles. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Reingest, Edit, and Delete` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/testing-and-validation

Refer to this article [Test your agent](https://docs.avaamo.com/user-guide/llamb/get-started/step-3-test-your-agent)

#### 

Using Agent Simulator

1.  In the Agent page, navigate to the **Test -> Simulator** option in the left navigation menu. Alternatively, you can test using the agent icon in the bottom right corner.
    
2.  You can now ask queries and test if you receive appropriate responses from user queries.
    

1.  Click the source citations to view the actual source of the agent response.
    

1.  Click the Insights icon.
    

1.  You can view the "**Insights**".

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions

## 

Auto sync

The `Auto sync` feature allows you to synchronize articles automatically at regular time intervals. Once configured, the system checks for updates to the articles during that interval and automatically applies them to the existing job. This ensures that ingested articles remain up to date, so the generated responses include the most recent information.

**Note:** This option is not applicable for `Files` connectors.

**Setting up Auto sync**

1.  Navigate to the list of jobs and select the job you created.
    

1.  Access the extended menu by clicking the three dots next to the job name. Select the `Auto Sync` option.
    

1.  On the configuration page that opens, enter the required details. Click **Submit** to enable Auto sync for the selected job.
    

Option

Description

**Timezone**

Select the time zone from the available options in the dropdown list.

**Start time**

Select the date and time when Auto sync should start.

**Repeat**

Select the repeating pattern for Auto sync. Options include `Daily`, `Weekly`, `Monthly`, or `Minutely`.

**Repeat on**

Select the specific day(s) of the week when Auto sync should run.

**Ends**

Configure when Auto sync should stop. Options include: 1) Specify an end date, or 2) End after a certain number of occurrences.

## 

Manual Sync

This option allows you to manually sync all ingested articles immediately after updating them. Even if Auto sync is set up, you can manually sync articles at any time. This gives users the flexibility to update and sync content to the created job whenever needed.

**Note:** This option is not applicable for `Files` connectors.

**Setting up Manual sync**

1.  Navigate to the list of jobs and select the job you created.
    

1.  Access the extended menu by clicking the three dots next to the job name. Select the `Sync Now` option.
    

1.  It immediately synchronizes all updated content from your database with the created job.
    

## 

View job details

You can view the details of a job after it is created.

Access the extended menu by clicking the three dots next to the job name. Select the `View job details` option. You can view the following details.

Option

Description

Content Sources

**Job ID**

A unique identifier assigned to the job for tracking and reference purposes.

SharePoint, ServiceNow, Website, Files, Confluence

**Initiated by**

The name or ID of the user who started the job.

SharePoint, ServiceNow, Website, Files, Confluence

**Initiated at**

The date and time when the job was started.

SharePoint, ServiceNow, Website, Files, Confluence

**Client ID**

Unique identifier of the client, provided by Admin

SharePoint, SalesForce

**Client Secret**

Password provided by Admin

SharePoint, SalesForce

**Tenant**

Name of the tenant, provided by Admin

SharePoint

**Tenant ID**

Unique identifier of the tenant, provided by Admin

SharePoint

**User Name**

The user name of the ServiceNow, provided by the Admin

ServiceNow

**Password**

Password of the ServiceNow, provided by the Admin

ServiceNow

**Source URL**

URL of the ServiceNow, provided by the Admin

ServiceNow, SalesForce

**ServiceNow Query URL**

Query URL that contains information about articles/documents ingested

ServiceNow

**User Email**

Email address associated with the configured content source

Confluence

**API Token**

API token used for authenticating the Confluence connection. Click `Update`, enter the new API token, and click `Save` to update the token.

Confluence

**Confluence URL**

URL of the connected Confluence instance

Confluence

## 

Delete job

You can delete the job after it is created. If you no longer need the job, or it is duplicated by another job, you can delete it, which removes all articles ingested under this job ID.

Access the extended menu by clicking the three dots next to the job name. Select the `Delete job` option.

Click `Delete` in the confirmation window to proceed and remove the job.

## 

Email Notifiers

You can configure email notifications to alert stakeholders whenever a job fails. This helps teams monitor job health, quickly identify failures, and take timely corrective action.

When email notifiers are configured, the system sends a notification to the specified email addresses if a job fails. For example, if an [auto-sync](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions#auto-sync) job scheduled to run at a specific time fails, the configured recipients receive an immediate alert.

#### 

Email Notifiers support the following:

#### 

Source-level alerts

You will receive notifications when a content source encounters issues such as:

*   Credential failures
    
*   Connectivity issues
    
*   Other source-level errors
    

**Note:** These alerts do not include individual document-level failures.

#### 

Execution summary notifications

You will receive a summary email after each job execution.

*   A summary is sent after every execution completes
    
*   If an execution or auto-sync finishes before the scheduled interval, the summary is sent immediately
    

This helps you stay up to date on job outcomes without having to manually check the system.

**Note:** A notification email is sent only if at least one document is in `ingested`, `queued`, or `error` status. If all documents are `skipped`, no summary email is generated.

**To configure email notifications:**

1.  Navigate to the required job.
    
2.  Click the three-dot menu next to the job name and select `Email Notifiers`.
    

1.  In the Notification Settings dialog:
    
    *   Toggle `Source Level Alerts` to enable notifications for source-level issues
        
    *   Toggle `Execution Summary` to receive summary emails
        
    *   Select the `Interval` for execution summary (for example: 15 minutes, 30 minutes, 1 hour, etc.)
        
    
2.  Add up to five email addresses, using `+ Add` to include them one by one. Click `Save` to apply the configuration.
    

## 

View the version of the job

You can view different versions of a job by clicking the dropdown option located at the top-right corner of the job.

**Note:** This option is not applicable for `Files` connectors.

This feature is handy if you have used `Auto sync` or `Sync Now`. It lets you view the history of article synchronizations for the job. By comparing different versions, you can identify what content has been updated, added, or changed over time. This helps ensure that you always have a clear record of changes and can track updates efficiently.

To view different versions of a job:

1.  Navigate to the `Jobs` list and select the job you want to review.
    
2.  Locate the dropdown menu at the top-right corner of the page. Click the dropdown and select a version from the list. The selected job version, along with its ingested articles or documents, is displayed.
    

## 

Document Transformation

If you missed configuring attributes during ingestion, or if you want to update attributes for already ingested documents or articles, you can use the `Document Transformation`. This feature allows you to apply or modify document attributes using custom JavaScript logic during a sync run.

This approach allows you to safely validate attribute logic before applying it across documents during a sync operation.

**To configure the advanced Document Transformation**

1.  Navigate to the required Knowledge skill and select the job.
    
2.  Click the three-dot menu next to the job name and select `Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the Document Transformation.
    

**Note**:

1.  The configured JavaScript is saved as part of the post-processing configuration and is applied **only when a Sync Now or Auto Sync operation is triggered**.
    
2.  Disabling the Document Transformation prevents the script from running during subsequent syncs.
    
3.  **Import and export support:** Document Transformation scripts are preserved during agent export and restored on import, eliminating the need to reconfigure attribute logic.
    
4.  **Agent promotion continuity:** When an agent is promoted from Development to Testing, Staging, or Production, existing Document Transformation scripts are automatically copied to the promoted agent.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the Document Transformation panel. Update the test input with actual sample data.
    

**Key capabilities**

*   **Dynamic attribute assignment using JavaScript:** Use custom JavaScript to assign attributes to documents dynamically based on your logic.
    
*   **Bulk update document metadata:** Update properties such as name, language, and preview URL for ingested documents.
    
*   **Filter documents during ingestion:** Apply custom logic to filter documents based on fields such as `last_updated_at`, `sys_updated_on`, or `last_updated`, and mark older documents as errored.
    

1.  Click `Run Test` to preview the document or article attributes after applying the JSON from the `Test Transformation` section and verify that the JavaScript logic produces the expected output before selecting `Save & Apply`.
    

1.  Once you have configured and tested the Document Transformation, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration. The Document Transformation can be applied the next time [AutoSync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync) or [SyncNow](/user-guide/datasync-ai/content-sources/common-actions/sync-now) is triggered.
    
*   **Save & Apply** – Save the configuration and immediately run a `manual sync` to apply the Document Transformation to the selected documents.
    

1.  If you Save & Apply, you can view and verify the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

## 

Add URLs

The `Add URLs` feature allows you to add more URLs to an existing `Web CSV` content source after the job has been created. This provides flexibility to continuously expand and update the web content available to your agent without creating additional content source groups.

To use this feature:

1.  Navigate to the `Web CSV` job where you want to add new files.
    
2.  Access the extended menu by clicking the three dots next to the job name. Click the `Add URLs` option.
    

1.  In the Add URLs dialog:
    

*   Enter the URL to be added
    
*   Optionally provide a name for the URL
    
*   `Auto Detect Language` is enabled by default. Disable it to manually select the document language
    
*   Click `Add Another URL` to include multiple URLs
    

1.  Click `Add URL`
    
2.  URLs added become available for ingestion after the next [Sync Now](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions#manual-sync) or [Auto Sync](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions#auto-sync) operation.
    

## 

Action

The `Action` column on the page lists all ingested documents or articles and allows you to perform the following actions:

*   **View:** Open and review the ingested article or document. This opens the ingested document in a separate tab.
    
*   **Edit:** Modify the Name, attributes, and preview URL assigned to the article or document. You can also view the Document UUID and Language (Only for the `Files` content source type).
    
*   **Delete:** Remove an individual article or document from the job.
    
*   **Reingest:** Reingest an article or document that was previously ingested or encountered an error during ingestion. This is not applicable to the `Files` content source type.

---

## Source: https://docs.avaamo.com/user-guide/ai-agent/skills/knowledge-skill/view-and-edit-knowledge

Once the upload of documents or URLs to the knowledge base is successful, you can view the extracted content to fine-tune and edit the knowledge base, if required.

Refer [View and edit knowledge](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/view-and-edit-knowledge), for more information.

---
