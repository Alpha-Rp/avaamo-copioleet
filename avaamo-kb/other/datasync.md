# DataSync AI
> 69 pages

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/overview-key-features

The `**DataSync AI**` is a powerful feature within [LLaMB](/user-guide/llamb/overview-key-features) designed to facilitate seamless content access across repositories such as `SharePoint, ServiceNow, Website,` and `Files`. It acts as an interface, enabling users to leverage resources stored in these repositories to enhance the capabilities of their LLaMB agents in responding to user queries effectively from the enterprise content.

Using `DataSync AI`, users can now integrate a wide variety of content directly from their repositories into the skill, streamlining the content integration and management process.

Previously, integrating URLs or documents into LLaMB content involved adding them individually to the Document group (refer to Document [Upload content](https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content)). With the introduction of DataSync AI, users can now integrate a wide variety of content directly from their repositories into the skill, streamlining the content integration and management process.

The following flow diagram illustrates the workflow of the DataSync AI with LLaMB:

## 

Key features

### 

Exploring diverse content sources

The `DataSync AI` provides flexibility by offering content ingestion from various content sources, such as `SharePoint, ServiceNow, Website,` and `Files`. Users can choose from these sources to integrate relevant content into their LLaMB skill, enhancing the versatility and adaptability of their content management workflows. This feature enables users to access and utilize information from various repositories tailored to their specific needs and preferences.

See [SharePoint Connector](/user-guide/datasync-ai/content-sources/sharepoint) and [ServiceNow connector](/user-guide/datasync-ai/content-sources/servicenow), for more information

### 

Seamless connection configuration

Setting up the connection between your content source and the LLaMB agent is straightforward. This process involves entering the necessary connection details, which ensures a smooth setup for your chosen data source. Following a few simple steps, you can quickly establish a functional link between the content source and your LLaMB agent, enabling efficient data retrieval and utilization.

### 

Curate your article selection

Tailor your search experience by selecting articles from the content source that meet your specific needs. Enhance your capabilities with the `Filter Articles` feature, now optimized to offer a wide selection from diverse knowledge bases. Apply advanced filters to refine your search, ensuring precise and customized results tailored to your specific needs.

### 

Personalize with document attributes

Customize your documents by selecting attributes that apply to all documents selected for ingestion. These attributes ensure accessibility to specific authorized groups.

Also, if you decide to introduce new attributes in the future for additional customization or refinement, the system fully supports this capability. This flexibility allows you to continually adapt and enhance document management according to evolving needs and preferences.

### 

Achieving seamless ingestion of your content

After selecting resources from the content source, they become instantly available in the LLaMB agent. When the status of all chosen articles and documents displays as `Ingested`, it confirms their accessibility within the document group of your agent skill. Additionally, you can easily track the total count of uploaded articles and documents for comprehensive management and monitoring.

Also, our system automatically synchronizes any updates made to ingested documents with your agent. This ensures that your agent remains synchronized with the latest information, whether it's minor edits or significant revisions, thereby maintaining data integrity throughout your operations.

See [Setup content sync](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content) for SharePoint Connector and [Setup content sync](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content) for ServiceNow connector, for more information.

### 

**Flexible synchronization modes**

DataSync offers two distinct synchronization options to meet different operational needs. **AutoSync** provides continuous updates, automatically pulling new or updated content from source systems at regular intervals, ensuring the knowledge base remains always current without manual intervention. **Sync Now** provides users with complete control over when synchronization occurs, enabling them to verify or prepare content before ingestion.

Both modes maintain detailed execution history for each sync run, enabling tracking, auditing, and troubleshooting. This flexibility allows organizations to strike a balance between the need for up-to-date information and control over system resources and ingestion timing.

Refer [AutoSync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync) and [SyncNow](/user-guide/datasync-ai/content-sources/common-actions/sync-now) for more information.

### 

**Ability to delete the content source**

This enhancement allows users to manage their content repositories more efficiently by deleting outdated, redundant, or irrelevant content sources directly from the DataSync interface. Removing such sources helps maintain a clean and organized knowledge base, ensuring that agents have access only to the most accurate and up-to-date information.

Refer [Delete job](/user-guide/datasync-ai/content-sources/common-actions/delete-job), for more information.

## 

Next steps

1.  Understand what is required in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/before-you-begin

Ensure that the following prerequisites are met before using DataSync AI.

1.  [LLaMB license](/user-guide/datasync-ai/before-you-begin#id-1.-llamb-license)
    
2.  [Basic understanding of LLaMB](/user-guide/datasync-ai/before-you-begin#id-2.-basic-understanding-of-llamb)
    
3.  [Content readiness](/user-guide/datasync-ai/before-you-begin#content-readiness)
    
4.  [Create LLaMB content skill and document group](/user-guide/datasync-ai/before-you-begin#create-llamb-skill-and-document-group)
    
5.  [Supported content source](/user-guide/datasync-ai/before-you-begin#supported-content-source)
    

### 

1\. LLaMB license

DataSync AI works along with LLaMB and is enabled on demand. Contact your dedicated Customer Success Manager for further assistance to enable LLaMB in your account.

### 

2\. Basic understanding of LLaMB

Understand the overall features and basic understanding of how LLaMB works. See [Overview](/user-guide/llamb/overview-key-features) and [Get Started](/user-guide/llamb/get-started), for more information.

### 

3\. Content readiness

*   DataSyncAI works with LLaMB. Ensure that all the prerequisites for LLaMB are met. See [Before you begin](/user-guide/llamb/before-you-begin), for more information.
    
*   Before incorporating articles and documents into your content source, ensure all the required information is fully prepared and comprehensive.
    
*   Verify that the chosen documents are completely finalized and suitable for use. It is recommended to avoid ingesting empty documents.
    
*   If the documents or articles contain attachments, ensure that these attachments are in PDF format. The maximum size should not exceed 5 MB.
    

### 

4\. Create LLaMB content skill and document group

The Content Connector ingests source articles or documents into a document group. To facilitate this process, ensure you have an LLaMB content skill and a document group configured. Follow these steps to create an LLaMB content skill and document group:

1.  In the `Agent page`**,** navigate to the `Skills` option in the left navigation menu, and click `Add` `skill` in the Agent Skills page. Refer to [Create LLaMB Content skill](https://docs.avaamo.com/user-guide/llamb/get-started/step-1-create-llamb-content-skill) to create LLaMB Content skill.
    
2.  Create the Document Group under the LLaMB Content skill. Refer to [Create document groups](https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/create-document-groups) for more information.
    

### 

5\. Supported content source

The Content Source is your database that contains all articles or documents intended for ingestion by the LLaMB skill. It provides a platform for configuring and efficiently utilizing available data. Below are the different types of content sources available for configuration:

[](/user-guide/datasync-ai/content-sources/sharepoint)

**SharePoint:**

A platform for collaborative document management and storage.

[](/user-guide/datasync-ai/content-sources/servicenow)

**ServiceNow:**

A cloud platform that provides service management software.

[](/user-guide/datasync-ai/content-sources/web-sitemap)

**Web Sitemap:**

The site from which you want to ingest articles into your agent.

[](/user-guide/datasync-ai/content-sources/files)

**Files:**

Different types of files you want to ingest into your agent

[](/user-guide/datasync-ai/content-sources/confluence)

**Confluence:**

An professional collaborative workspace and documentation platform.

**Web CSV upload:**

The CSV from which you want to ingest articles into your agent.

**Salesforce:**

Cloud-based CRM platform that helps businesses manage customer relationships, sales, and support operations.

These options enable seamless integration and management of diverse data sources within the LLaMB environment.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources

[SharePoint](/user-guide/datasync-ai/content-sources/sharepoint)[ServiceNow](/user-guide/datasync-ai/content-sources/servicenow)[Web Sitemap](/user-guide/datasync-ai/content-sources/web-sitemap)[Web CSV upload](/user-guide/datasync-ai/content-sources/web-csv-upload)[Files](/user-guide/datasync-ai/content-sources/files)[Confluence](/user-guide/datasync-ai/content-sources/confluence)[Salesforce](/user-guide/datasync-ai/content-sources/salesforce)[Common actions](/user-guide/datasync-ai/content-sources/common-actions)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint

[Pre-requisites](/user-guide/datasync-ai/content-sources/sharepoint/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/sharepoint/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/pre-requisites

You can ingest SharePoint content into your LLaMB skill seamlessly using the SharePoint connector. This integration enables you to use the selected resources directly from SharePoint to train your agent effectively.

Ensure that the following pre-requisites are met before creating a `SharePoint connector`**:**

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Content source authorization details:** Ensure you have all necessary authorization details prepared for your content sources. Your SharePoint admin must provide you with the following information for each source:
    
    *   SharePoint Tenant Name
        
    *   SharePoint Tenant ID
        
    *   OAuth Client ID
        
    *   OAuth Client Secret

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click **Edit** to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync.`
    
2.  Click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `SharePoint`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/configure-connection)[Select sites](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites)[Select documents pages and lists](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-documents-pages-and-lists)[Set Document Attributes](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/configure-connection

This section lists the steps to configure the selected content source with the required details to complete the ingestion.

Specify the following details and click `Next`.

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

Document Group

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites

Select the sites where your documents and articles are available. You can view all available folders from your content source and choose any number of sites by selecting the checkbox next to them. Click `Next`.

You can also search for folders to quickly locate the folder where your articles or documents are stored.

You can also use the `Show selected at top` toggle to keep the selected folder displayed at the top of the list for easier access.

If you remember the site name, you can specify the site and its folder. Click on the `Specific Sites` tab, enter the folder name, and click `Add Site` to add one more such specific site.

**Note:**

1.  If you configure both the `Sites List` and `Specific Sites`, the selection precedence is determined by where you click the `Next` button. In the above example,
    
    *   If you click `Next` while on the `Sites List` screen, the `hrpolicies and Team Site` folders are selected.
        
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

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-documents-pages-and-lists

Here, you can view all documents, pages, and lists available from the folders you selected in the last step. Click `View` to preview them before making your selection, ensuring they meet your specific needs.

Select the documents, pages, and lists by clicking the checkbox next to the file name. Click `Next`.

1.  Click the option `Exclude by` to filter out specific document types during ingestion. Files with selected extensions are excluded from initial ingestion, sync, and auto-sync, and are neither ingested nor re-added in subsequent syncs, even if selected during folder selection.
    

*   You can `manually enter file extensions` to exclude additional document types
    
*   Supports exclusion of file types not available in the dropdown, such as `.png`, `.aspx`, `.jpg`, `.jpeg`, `.mp4`, and `.m4a`
    

1.  **Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    
2.  **Auto detect language:** You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/set-document-attributes

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
    
*   **Save** – Save the configuration. After saving, the status `Enabled` appears next to the option name.
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

Parameter

Description

Total Documents

It is the sum of the number of Processing, Ingested, and Failed articles.

Processing

Number of articles ingestion under process

Ingested

Number of articles ingested

Failed

Number of articles with ingested status as Error

Others

It is the combined total of all `Skipped` and `Warning` statuses.

Column name: TITLE

Name of the documents

Column name: SITE

URL or folder name from where the document is selected.

Column name: TYPE

Type of articles ingested like Documents, Lists, or Pages

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

Click the three dots to `View, Delete, Edit and Reingest` the ingested document.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow

[Pre-requisites](/user-guide/datasync-ai/content-sources/servicenow/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/servicenow/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/pre-requisites

You can use ServiceNow as your content source to add the documents and articles. This integration enables you to use the selected resources to train your bot effectively.

Below are the Pre-requisites for creating a `ServiceNow connector`:

1.  Make sure to complete all the necessary actions outlined in the "[Before you begin](/user-guide/datasync-ai/before-you-begin)" section.
    
2.  **Content source authorization details**: Ensure you have all necessary authorization details prepared for your content sources. Your ServiceNow admin should provide you with the following information for each source:
    
    *   Source Url
        
    *   User Name
        
    *   Password

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync`.
    
2.  Click `Add Content Source` under Content Sources to start creating a new job.
    

**NOTE:** Once the job is created, it can not be edited or deleted

1.  Select the content source type as `ServiceNow`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter Articles](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/configure-connection

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

It is the URL of the ServiceNow instance

`For example: https://<instance_name>.servicenow.com`

Maximum length: `255 characters`

To be provided by ServiceNow admin

Yes

User Name

To be provided by ServiceNow admin

Yes

Password

To be provided by ServiceNow admin

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

#### 

Switch to Catalog

The `Switch to Catalog` option allows you to control the type of data ingested from ServiceNow.

By default, the `Catalog` toggle is `OFF`. When the toggle is turned `ON`, the system retrieves data from the catalogs available in ServiceNow.

You can create catalogs in ServiceNow, and the created catalogs appear in the next step when the `Switch to catalog` option is enabled.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/filter-articles

If you enable the `Switch to catalog` option in the previous step, all available catalog options are displayed. You can select the required catalogs by checking the corresponding checkboxes, or select all catalogs using the checkbox next to `Catalog Name`.

If you disable the `Switch to catalog` option in the previous step, It displays all the folders containing articles or documents in your `ServiceNow` knowledge base, enabling you to select multiple items by checking the boxes next to them in the `By Knowledge Base` section.

*   Click the option `Exclude by` to filter out specific document types during ingestion. Files with selected extensions are excluded from initial ingestion, sync, and auto-sync, and are neither ingested nor re-added in subsequent syncs, even if selected during folder selection.
    
    *   You can `manually enter file extensions` to exclude additional document types
        
    *   Supports exclusion of file types not available in the dropdown, such as `.png`, `.aspx`, `.jpg`, `.jpeg`, `.mp4`, and `.m4a`
        
    
*   **Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    
*   **Auto detect language:** You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.
    
*   Additionally, you can use the `Advanced Filter` option to precisely filter articles by document status or workflow (such as Published, Active, or Valid to date) within the selected folders.
    

*   You can also configure the articles or documents using an `Custom query to select the Knowledge Articles` option. Click the Toggle button in front of the `Use Custom Query` option. Contact the ServiceNow admin or Avaamo support to get the custom query URL. Click `Next`.
    

**Note:** If you configured `Filter Articles` with both options, the `Custom Query URL` option takes precedence.

#### 

Examples of custom URLs for ServiceNow content ingestion

To ingest content from ServiceNow using a **custom query URL**, the end user must have valid **ServiceNow API access**.

Below are example URL formats:

**1\. Ingesting knowledge base articles**

**Base URL format:**

**Example with filters:**

*   Retrieve only published articles of a specific number:
    
*   Retrieve a specific article without additional filters:
    

**2\. Ingesting catalog items**

**Base URL format:**

**Example with a specific item name:**

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/servicenow/step-2-configure-content-source-and-ingest-content/set-document-attributes

You can assign attributes to all selected documents in two ways:

1.  **Set static properties:** These are user-defined attributes created under the [User Properties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property) section. You can either choose from the existing list or create a new one using the `+ Additional Attribute` option.
    
2.  **Set dynamic attributes:** These attributes are inherited from the documents selected in the previous step. You can choose the desired attribute from the dropdown menu and apply it to the documents.
    

Click the dropdown menu to view and choose from the available options.

**Note:** Attributes shown here can be created under `Configuration > User properties`. See [Create user property](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property), for more information.

1.  You can also create new attributes here. Click the dropdown menu and choose `+ Additional property` to create a new attribute and assign a corresponding value.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value such as `value1, value2.`

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
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

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

Type of document ingested such as articles, catalog item or attachments

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

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap

[Pre-requisites](/user-guide/datasync-ai/content-sources/web-sitemap/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/web-sitemap/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/pre-requisites

You can ingest website content into your LLaMB skill seamlessly using the `Web sitemap` content source option. This integration enables you to extract relevant information directly from webpages, training your agent effectively with up-to-date, structured data.

Ensure that the following prerequisites are met before ingesting website content:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Website access and configuration details:** Verify that the following requirements are met before creating a website connector:
    
    *   **Valid website URL:** Ensure the URL is publicly accessible, or that you have the required access credentials if it is a restricted site.
        
    *   **Content accessibility:** The webpages should allow web scraping or data extraction ( site policies should permit access).
        
    *   **Structured page content:** Ensure that the website content is formatted correctly with readable text and metadata (avoid sites with heavy JavaScript rendering or dynamically loaded content).
        
    *   **HTTPS support:** The website should use HTTPS for secure content retrieval.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click **Edit** to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync.`
    
2.  Click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Web Sitemap`.
    

#### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter web pages](/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/filter-web-pages)[Set document attributes](/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you can proceed to configure the specific details of that source.

Specify the following details and click `Next`.

Parameter

Description

Mandatory

Source Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Source Url

It is the URL of the instance from where you wish to ingest articles.

`For example: https://www.example.com`

Maximum length: `255 characters`

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/filter-web-pages

It displays all the URLs of the articles in the knowledge base or CSV file, enabling you to select multiple items by checking the boxes next to them in the `Select Sites` section. Click `Next`.

In this section, you can perform the following actions:

*   **Preview articles** before selecting them by clicking **View**.
    
*   **Manually select the language** in which the document should be ingested. Choose the language from the dropdown, which lists all languages configured for the agent.
    

**Note:** The **Auto Detect Language** option must be turned off to manually select a language.

*   **Search for specific articles** using the search bar if you already know the URL.
    
*   **Navigate through different pages** to browse and select article URLs.
    
*   **View the total number of URLs** available and how many have been selected.
    
*   Use the **Auto Detect Language** toggle to automatically detect the document's language during ingestion.
    
*   Use the search bar to find and choose an article if you already know its URL.
    
*   Navigate across different pages to select article URLs.
    

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

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-sitemap/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

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

Column name: URLs

Path of the URL. You can use any part it in the search bar to find it out.

Column name: STATUS

Status of the URLs. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Edit, Reingest, Delete` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   Insufficient content: Webpages with very little content may fail ingestion and be marked as errors.
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload

[Pre-requisites](/user-guide/datasync-ai/content-sources/web-csv-upload/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/web-csv-upload/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/pre-requisites

You can ingest website content into your LLaMB skill seamlessly using the **Web CSV upload** content source option. This integration enables you to extract relevant information directly from webpages, training your agent effectively with up-to-date, structured data.

Ensure that the following prerequisites are met before ingesting website content:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **Website access and configuration details:** Verify that the following requirements are met before creating a website connector:
    
    *   **Valid website URL:** Ensure the URL is publicly accessible, or that you have the required access credentials if it is a restricted site.
        
    *   **Content accessibility:** The webpages should allow web scraping or data extraction ( site policies should permit access).
        
    *   **Structured page content:** Ensure that the website content is formatted correctly with readable text and metadata (avoid sites with heavy JavaScript rendering or dynamically loaded content).
        
    *   **HTTPS support:** The website should use HTTPS for secure content retrieval.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click **Edit** to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync.`
    
2.  Click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Web CSV Upload`.
    

#### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter web pages](/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/filter-web-pages)[Set document attributes](/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you can proceed to configure the specific details of that source.

Specify the following details and click `Next`.

Parameter

Description

Mandatory

Source Name

Name of the Configuration

Maximum length: `255 characters`

Yes

CSV File

You can either enter the path of the CSV file you wish to ingest or click the `Browse` option to select the file from your folder.

A sample CSV file is also available for download to help you follow the correct format. You can include the URL names in the CSV file.

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/filter-web-pages

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

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/web-csv-upload/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

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

Column name: URLs

Path of the URL. You can use any part it in the search bar to find it out.

Column name: STATUS

Status of the URLs. You can also filter with these statuses.

*   **Queued:** Initial status of the content while waiting to be processed for ingestion
    
*   **Uploaded:** Content successfully uploaded and ready for processing
    
*   **Extracting:** Content is being extracted and prepared for ingestion
    
*   **Learning:** The Ingestion process is in progress, and the content is being trained
    
*   **Ingested:** Content successfully ingested and available for use
    
*   **Warning:** Content ingested with minor issues or partial data
    
*   **Skipped:** Content intentionally not ingested due to duplication or unsupported criteria
    
*   **Error:** Ingestion was unsuccessful due to a processing issue. Hover over the error status to view the reason.
    

Column name: ACTION

You can `View, Edit, Reingest, Delete` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   Insufficient content: Webpages with very little content may fail ingestion and be marked as errors.
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files

[Pre-requisites](/user-guide/datasync-ai/content-sources/files/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/files/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/pre-requisites

You can ingest file-based content into your LLaMB skill seamlessly by uploading supported files directly. This method allows you to use structured and unstructured documents to train your agent effectively.

Ensure that the following prerequisites are met before ingesting files:

1.  Ensure that you complete all the necessary actions outlined in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  **File readiness and access details:** Verify that the files meet the following requirements:
    
    *   **Supported formats:** Files must be in one of the supported formats — PDF, DOCX, TXT, HTML, or CSV.
        
    *   **Access permissions:** You must have read access to the files you plan to ingest.
        
    *   **File integrity:** Files must not be corrupted, password-protected, or contain unsupported embedded objects.
        
    *   **File organization:** Store files in an accessible location, such as your local system or a supported cloud source, before ingestion.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click **Edit** to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync.`
    
2.  Click `Add Content Source` under Content Sources.
    

1.  Select the content source type as `Website`.
    

#### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/configure-connection)[Upload files](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/upload-files)[Set document attributes](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/configure-connection

In the second step, after selecting the content source type, you proceed to configure the specific details of that source.

*   Specify the following details and click `Next`.
    

Parameter

Description

Mandatory

Source Name

Name of the Configuration

Maximum length: `255 characters`

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/upload-files

You can upload various types of files here to simplify data ingestion, making it easy to add your documents and seamlessly integrate important information into your system.

*   Click the `Drop your PDF, DOCX, XLSX, HTML, or CSV files here!` option or drag and drop files directly from your folder to ingest documents.
    

*   After selecting files, you can:
    

1.  Set preview URLs for each selected document individually. (A preview URL is mandatory for HTML files.)
    
2.  Change the name of the file in the `Source Name` field.
    
3.  View the file name, type, and size for each document.
    
4.  You can use the `Auto Detect Language` toggle to automatically detect the language of uploaded documents or files. When this option is enabled, manual language selection for individual documents is disabled.
    
5.  If the `Auto Detect Language` toggle is disabled, you can set the document language by selecting it from the dropdown available under the `Language` option. It displays the languages configured for the agent.
    
6.  Delete any file you do not wish to ingest.
    

*   Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/set-document-attributes

1.  You can also create new attributes here. Click the dropdown menu and choose `+Additional Attribute` to create a new attribute and assign a corresponding value.
    

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value, such as `value1, value2.`

1.  Click `Submit`.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

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

You can `Edit, and View` the ingested document. Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

**Note:** If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence

[Pre-requisites](/user-guide/datasync-ai/content-sources/confluence/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/confluence/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/pre-requisites

You can use Confluence as your content source to add the documents and articles. This integration enables you to use the selected resources to train your bot effectively.

Below are the Prerequisites for creating a `Confluence connector`:

1.  Make sure to complete all the necessary actions outlined in the "[Before you begin](/user-guide/datasync-ai/before-you-begin)" section.
    
2.  **Content source authorization details**: Ensure you have all necessary authorization details prepared for your content sources. Your Confluence admin should provide you with the following information for each source:
    
    *   Source Url
        
    *   User Email
        
    *   API Token

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync`.
    
2.  Click `Add Content Source` under Content Sources to start creating a new job.
    

**NOTE:** Once the job is created, it can not be edited or deleted

1.  Select the content source type as `Confluence`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content), for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter Articles](/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/configure-connection

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

It is the URL of the Confluence instance

`For example: https://<companyname>.atlassian.net`

Maximum length: `255 characters`

To be provided by the Confluence admin

Yes

User Email

To be provided by the Confluence admin

Yes

API Token

To be provided by the Confluence admin

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/filter-articles

It displays all the folders containing articles or documents in your `Confluence` knowledge base, enabling you to select multiple items by checking the boxes next to them in the `Select Content` section. Click `Next`.

1.  Click the option `Exclude by` to filter out specific document types during ingestion. Files with selected extensions are excluded from initial ingestion, sync, and auto-sync, and are neither ingested nor re-added in subsequent syncs, even if selected during folder selection.
    

*   You can `manually enter file extensions` to exclude additional document types
    
*   Supports exclusion of file types not available in the dropdown, such as `.png`, `.aspx`, `.jpg`, `.jpeg`, `.mp4`, and `.m4a`
    

1.  **Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    
2.  **Auto detect language:** You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/confluence/step-2-configure-content-source-and-ingest-content/set-document-attributes

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
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.
    

1.  You can view all ingested documents for the job you created here. Enter keywords in the search bar to search for specific ingested articles.
    

**Note:** Attachments within the documents are not accessible for viewing.

Parameter

Description

Total Documents

It is the sum of the number of Processing, Ingested, Failed, and others articles.

Processing

Number of articles ingested

Ingested

Number of attachments included in the ingested articles

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

**Note:** If a document shows the status of `Error.` The following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce

[Pre-requisites](/user-guide/datasync-ai/content-sources/salesforce/pre-requisites)[Step 1: Select the content source type](/user-guide/datasync-ai/content-sources/salesforce/step-1-select-the-content-source-type)[Step 2: Configure content source and ingest content](/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/pre-requisites

You can use Salesforce as your content source to add the documents and articles. This integration enables you to use the selected resources to train your bot effectively.

Below are the Pre-requisites for creating a `Salesforce connector`:

1.  Make sure to complete all the necessary actions outlined in the "[Before you begin](/user-guide/datasync-ai/before-you-begin)" section.
    
2.  **Content source authorization details**: Ensure you have all necessary authorization details prepared for your content sources. Your Salesforce admin should provide you with the following information for each source:
    
    *   Source URL
        
    *   OAuth Client ID
        
    *   OAuth Client Secret

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/step-1-select-the-content-source-type

**Notes**:

*   Ensure you have met all the [pre-requisites](https://docs.avaamo.com/user-guide/quick-start-tutorials/pre-requisites).
    
*   Click `Edit` to unlock the agent before editing.
    

1.  After creating the agent, navigate to `Configuration>DataSync`.
    
2.  Click `Add Content Source` under Content Sources to start creating a new job.
    

**NOTE:** Once the job is created, it can not be edited or deleted

1.  Select the content source type as `Salesforce`.
    

### 

Next Steps

After selecting the content source from which you wish to import articles or documents, you can configure and ingest it by entering the necessary connection details. This ensures a smooth setup for your chosen content source.

Refer to [Step 2: Configure content source and ingest content,](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/salesforce/step-2-configure-content-source-and-ingest-content) for more information.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content

[Configure connection](/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/configure-connection)[Filter Articles](/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/filter-articles)[Set Document Attributes](/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/set-document-attributes)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/configure-connection

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

It is the URL of the Salesforce instance

`For example: https://<instance_name>.Salesforce.com`

Maximum length: `255 characters`

To be provided by the Salesforce admin

Yes

OAuth Client ID

To be provided by the Salesforce admin

Yes

OAuth Client Secret

To be provided by the Salesforce admin

Yes

Document Group ID

Unique identifier of the document group. You can select from the dropdown list. All the document group IDs in the LLaMB skill of the agent are displayed.

Yes

API Server

This is the prefilled option with the API server name

Auto filled

Access Token

This is automatically filled by default for every user.

Auto filled

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/filter-articles

It displays all the folders containing articles or documents in your `Salesforce` knowledge base, enabling you to select multiple items by checking the boxes next to them in the `By Folder` section.

1.  Click the option `Exclude by` to filter out specific document types during ingestion. Files with selected extensions are excluded from initial ingestion, sync, and auto-sync, and are neither ingested nor re-added in subsequent syncs, even if selected during folder selection.
    

*   You can `manually enter file extensions` to exclude additional document types
    
*   Supports exclusion of file types not available in the dropdown, such as `.png`, `.aspx`, `.jpg`, `.jpeg`, `.mp4`, and `.m4a`
    

1.  **Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    
2.  **Auto detect language:** You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.
    

Click `Next`.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/salesforce/step-2-configure-content-source-and-ingest-content/set-document-attributes

In this step, you can assign attributes to the documents selected in the previous step.

1.  Choose from previously added attributes in the dropdown, or select `+ Additional Attribute` to create a new one and provide the corresponding value. The selected attributes are applied to all documents.
    

**Note:** Attributes shown here can be created under `Configuration > User properties`. See [Create user property](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/set-user-property), for more information.

**Note:** You can assign multiple values to the same attribute by passing a comma-separated value such as `value1, value2.`

### 

Configure Document Transformation

You can apply attributes selectively to documents using condition-based logic defined in custom JavaScript.

1.  Click `Configure Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the attribute handler.
    

1.  Under `Configure` `Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the attribute handler panel. Update the test JavaScript input with actual sample data.
    

1.  Click `Run Test` to validate the script execution. Review the output to confirm that the attributes are updated correctly for the selected document or article.
    

1.  Once you have configured and tested the attribute handler, choose one of the following actions:
    

*   **Cancel** – Discard the changes if you do not want to apply the attribute configuration.
    
*   **Save** – Save the configuration.
    

1.  Click `Submit`.
    
2.  You can view the configured attributes using the `View document attributes` option.
    

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

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions

[Auto sync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync)[Sync Now](/user-guide/datasync-ai/content-sources/common-actions/sync-now)[Upload files](/user-guide/datasync-ai/content-sources/common-actions/upload-files)[View job details](/user-guide/datasync-ai/content-sources/common-actions/view-job-details)[Delete job](/user-guide/datasync-ai/content-sources/common-actions/delete-job)[Email Notifiers](/user-guide/datasync-ai/content-sources/common-actions/email-notifiers)[Document Transformation](/user-guide/datasync-ai/content-sources/common-actions/document-transformation)[Document Transformation capabilities](/user-guide/datasync-ai/content-sources/common-actions/document-transformation-capabilities)[Add URLs](/user-guide/datasync-ai/content-sources/common-actions/add-urls)[View job version history](/user-guide/datasync-ai/content-sources/common-actions/view-job-version-history)[Actions](/user-guide/datasync-ai/content-sources/common-actions/actions)

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/auto-sync

The `Auto sync` feature allows you to synchronize articles automatically at regular time intervals. Once configured, the system checks for updates to the articles during that interval and automatically applies them to the existing job. This ensures that the ingested articles remain up to date, so the responses generated include the most recent information.

**Note:** This option is not available for `Files` connectors.

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

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/sync-now

This option allows you to manually sync all ingested articles immediately after updating them. Even if Auto sync is set up, you can manually sync articles at any time. This provides users with the flexibility to update and sync content to the created job as needed.

**Note:** This option is not available for `Files` connectors.

**Setting up Manual sync**

1.  Navigate to the list of jobs and select the job.
    

1.  Access the extended menu by clicking the three dots next to the job name. Select the `Sync Now` option.
    

1.  Click `Sync Now` in the confirmation window, to proceed and sync the job. It synchronizes all updated content from your database to the created job immediately.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/upload-files

The **Upload files** feature allows you to add more files to an existing _Files_ content source after the job has been created. This gives you the flexibility to update and expand the content available to your agent continuously.

**Note:** This option is available only for `Files` connectors.

To use this feature:

1.  Navigate to the **Files** job where you want to add new files.
    
2.  Click the **Upload** option.
    
3.  Select the files from your system that you want to include.
    
4.  Upload the selected files to your job.
    

Once uploaded, the new files will be processed and included in your agent’s training data, ensuring your agent has access to the most up-to-date content.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/view-job-details

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

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/delete-job

You can delete a job at any time if it is no longer needed or duplicates an existing one. Deleting a job also removes all articles ingested under that job ID.

1.  To delete a job, click the three-dot menu next to the job name and select `Delete job`.
    

1.  In the confirmation window, click `Delete` to confirm and permanently remove the job.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/email-notifiers

You can configure email notifications to alert stakeholders whenever a job fails. This helps teams monitor job health, quickly identify failures, and take timely corrective action.

When email notifiers are configured, the system sends a notification to the specified email addresses if a job fails. For example, if an auto-sync job scheduled to run at a specific time fails, the configured recipients receive an immediate alert.

### 

Email Notifiers support the following:

#### 

Source-level alerts

You will receive notifications when a content source encounters issues such as:

*   Credential failures
    
*   Connectivity issues
    
*   Other source-level errors
    

**Note:** These alerts do not include individual document-level failures.

#### 

Document error alerts

Document Error Alerts allow you to receive email notifications when individual documents fail during ingestion. This helps you quickly identify and troubleshoot document-level issues, including JavaScript processing errors.

When enabled, notifications are sent to the configured email addresses whenever a document encounters an ingestion error. These errors are also available on the [JS Errors](/user-guide/how-to/build-agents/debug-agents/js-errors) page for further investigation.

#### 

Execution summary notifications

You will receive a summary email after each job execution.

*   A summary is sent after every execution completes
    
*   If an execution or auto-sync finishes before the scheduled interval, the summary is sent immediately
    

This helps you stay up to date on job outcomes without having to manually check the system.

**Note:** A notification email is sent only if at least one document is in `ingested`, `queued`, or `error` status. If all documents are `skipped`, no summary email is generated.

**To configure email notifications:**

1.  Navigate to the job.
    
2.  Click the three-dot menu next to the job name and select `Email Notifiers`.
    

1.  In the Notification Settings dialog:
    

*   Toggle `Source Level Alerts` to enable notifications for source-level issues
    
*   Enable the `Document Error Alerts` toggle to receive notifications for document-level issues
    
*   Toggle `Execution Summary` to receive summary emails
    
*   Select the `Interval` for execution summary (for example: 15 minutes, 30 minutes, 1 hour, etc.)
    

1.  Add up to five email addresses, using `+ Add` to include them one by one. Click `Save` to apply the configuration.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/document-transformation

If you missed configuring attributes during ingestion, or if you need to update attributes, name, and preview URL for already ingested documents or articles, you can use the `Document Transformation`. This feature enables you to apply or modify document attributes, name, and preview URL using custom JavaScript logic during a sync run.

The Document Transformation supports bulk append or update of document attributes at the job level in the DataSync AI tool, allowing attributes to be applied to selected documents as required.

This approach also allows you to safely validate attribute logic before applying it across documents during a sync operation, reducing the risk of incorrect attribute updates.

**Note:**

*   **Import and export support:** `Document Transformation` scripts are preserved during agent export and restored on import, eliminating the need to reconfigure attribute logic.
    
*   **Agent promotion continuity:** When an agent is promoted from Development to Testing, Staging, or Production, existing `Document Transformation` scripts are automatically copied to the promoted agent.
    

**To configure the advanced Document Transformation**

1.  Navigate to the required DataSync job.
    
2.  Click the three-dot menu next to the job name and select `Document Transformation`.
    

1.  A side panel opens with the configuration options. Toggle the `Enabled` switch to enable the `Document Transformation`.
    

1.  Under `Configure Transformation Logic`, provide the JavaScript code that returns the updated attributes you want to apply to the documents.
    
2.  In the `Test Transformation` option in the `Document Transformation` panel. Update the test input with actual sample data.
    

**Key capabilities**

*   **Dynamic attribute assignment using JavaScript:** Use custom JavaScript to assign attributes to documents dynamically based on your logic.
    
*   **Bulk update document metadata:** Update properties such as name, language, and preview URL for ingested documents.
    
*   **Filter documents during ingestion:** Apply custom logic to filter documents based on fields such as `last_updated_at`, `sys_updated_on`, or `last_updated`, and mark older documents as errored.
    

Refer [Document Transformation capabilities](/user-guide/datasync-ai/content-sources/common-actions/document-transformation-capabilities), for more information.

1.  Click `Run Test` to preview the document or article attributes after applying the JSON from the `Test Transformation` section and verify that the JavaScript logic produces the expected output before selecting `Save & Apply`.
    

1.  Once you have configured and tested the `Document Transformation`, choose one of the following actions:
    

*   **Cancel** – **Discards** the changes if you do not want to apply the attribute configuration.
    
*   **Save** – **Saves** the configuration. The Document Transformation can be applied the next time [AutoSync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync) or [SyncNow](/user-guide/datasync-ai/content-sources/common-actions/sync-now) is triggered.
    
*   **Save & Apply** – **Saves** the configuration and immediately runs `manual sync` to apply the Document Transformation to the selected documents.
    

1.  You can view and verify the configured attributes using the `View document attribute` option.
    

1.  When you click this option, a pop-up opens that displays the document's attribute details. You can also download the attributes as a CSV file for further analysis or use.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/document-transformation-capabilities

## 

Overview

Document Transformation enables you to modify and enrich documents using JavaScript either during or after ingestion. It helps standardize metadata, improve search relevance, and enforce governance rules across indexed content.

## 

Key capabilities

### 

Dynamic attribute assignment

Use custom JavaScript to assign attributes to documents based on source-specific fields and business logic. This enables flexible tagging and metadata enrichment across different data sources.

#### 

Template: ServiceNow

**Goal:** Set the `location` attribute based on the `ServiceNow Article number`.

**Note:** The article number, e.g., "`KB0000028`," may change for every instance.

Copy

    function getAttributes() {
      const { number } = context.document;
    
      let locationValue = (number === 'KB0000028') ? "Australia" : "USA";
    
      return {
        "location": {
          "value": locationValue
        }
      };
    }
    
    return { "attributes": getAttributes() };

This code assigns a `location` attribute to a document based on its `article number`.

*   Reads the `number` field from `context.document`
    
*   Checks the value:
    
    *   If `number` is `'KB0000028'` → sets `location` to `Australia`
        
    *   Otherwise → sets `location` to `USA`
        
    
*   Returns the result in the required `attributes` format
    

#### 

Template: SharePoint

**Goal:** Set the `location` attribute based on the SharePoint document's artifact name (file name).

**Note:** The document's artifact name `spanish_sunflowers.pdf,` may change for every instance.

#### 

Template: Salesforce

**Goal:** Set the `location` attribute based on the Salesforce record number.

#### 

Template: Confluence

**Goal:** Set the `location` attribute based on the Confluence record number.

#### 

Template: Web sitemap and Web CSV upload

**Goal:** Set the `ID` attribute based on the document's URL.

### 

Bulk metadata updates

Modify document properties such as name, language, and preview URL to standardize content and improve consistency across indexed documents.

**Note:** Metadata and language updates are not limited to the preview URL and can be applied using any available context variables.

#### 

Template: Web sitemap and Web CSV upload (URL-based transformation)

**Goal:** Assign attributes, update the document name, and set the preview URL dynamically based on the document URL.

#### 

Template: Salesforce (record number–based transformation)

**Goal:** Assign attributes and update the document name dynamically based on the Salesforce record number.

#### 

Template: ServiceNow (article-based transformation)

**Goal:** Assign attributes and update the document name based on the ServiceNow article number.

#### 

Template: SharePoint (file-based transformation)

**Goal:** Assign attributes, update the document name, and set the preview URL based on the file name.

#### 

Template: Confluence (page-based transformation)

**Goal:** Assign attributes, update the document name, and set the preview URL based on the Confluence page ID.

### 

Date-based document filtering

Apply conditional logic to filter documents using fields such as `last_updated_at`, `sys_updated_on`, or `last_updated`. Documents that do not meet the defined criteria (for example, outdated content) can be excluded by marking them as errored.

#### 

Supported date field formats

Context field

Supported sources

Format

`sys_updated_on`

ServiceNow, SharePoint, Salesforce

ISO date string

`last_updated_at`

Confluence

ISO date string

`last_updated`

Web

Unix epoch timestamp in milliseconds

**Key points:**

*   The sample snippets convert values to JavaScript `Date` objects to ensure consistent cross-source date comparison.
    
*   For epoch-based fields such as `last_updated`, you can alternatively define the cutoff date in epoch milliseconds and compare the values directly without converting them to `Date` objects.
    

#### 

Goal

Filter out outdated documents during ingestion using source-specific date fields. Documents older than the defined cutoff date are marked as errored and excluded from indexing. You can also configure custom error messages and view the reason for documents that failed to load by hovering over the error status.

#### 

ServiceNow, SharePoint, Salesforce

**Uses:** `sys_updated_on`

#### 

Confluence

**Uses:** `last_updated_at`

#### 

Web

**Uses:** `last_updated`

### 

Update the language for a specific document

#### 

Goal

Dynamically update the language of a document based on its URL while preserving existing metadata.

#### 

Web example

**Example**

URL

Language

https://avaamo.ai/form-tests/

fr-FR

Other URLs

No change

#### 

Invalid language code behavior

If an invalid or unsupported language code is configured via JavaScript during document transformation, the document is marked as **Error** during ingestion.

The following behaviors are supported:

Scenario

Behavior

Language code is valid in format, but not configured in the agent (for example, `fr-FR` not added to the agent)

The document is marked as an error with the message: `Ingestion Failed (The language provided (<LANGUAGE_CODE>) is not added to the agent)`

Language code format is invalid (for example, `Hindi`, `French`)

The document is marked as an error with the message: `Ingestion Failed (The language provided (<LANGUAGE_CODE>) is invalid)`

#### 

Notes

*   Replace `<CUTOFF_DATE_ISO>` with your desired date in the format YYYY-MM-DDT00:00:00Z for `example: 2025-02-12T00:00:00Z`
    
*   Replace `<YOUR_URL>` with the target document URL
    
*   Replace `<LANGUAGE_CODE>` with a valid language code (e.g., `en-US`, `fr-FR`). Agent must be configured with these languages.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/add-urls

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
    
2.  URLs added become available for ingestion after the next [Sync Now](/user-guide/datasync-ai/content-sources/common-actions/sync-now) or [Auto Sync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync) operation.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/view-job-version-history

You can view different versions of a job by clicking the dropdown option located at the top-right corner of the job.

**Note:** This option is not applicable for `Files` connectors.

This feature is handy if you have used **Auto sync** or **Sync Now**. It allows you to access the history of article synchronizations for the job. By comparing different versions, you can identify what content has been updated, added, or changed over time. This helps ensure that you always have a clear record of changes and can track updates efficiently.

To view different versions of a job:

1.  Navigate to the **Jobs** list and select the job you want to review.
    
2.  Locate the dropdown menu at the top-right corner of the page. Click the dropdown and choose a version from the list of available options. The selected job version, along with its ingested articles or documents, is displayed.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/content-sources/common-actions/actions

The `Action` column on the page lists all ingested documents or articles and allows you to perform the following actions:

*   **View:** Open and review the ingested article or document. This opens the ingested document in a separate tab.
    
*   **Edit:** Modify the Name, attributes, and preview URL assigned to the article or document. You can also view the Document UUID and Language (Only for the `Files` content source type).
    
*   **Delete:** Remove an individual article or document from the job.
    
*   **Reingest:** Reingest an article or document that was previously ingested or encountered an error during ingestion. This is not applicable to the `Files` content source type.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/testing-and-validation

Refer to this article [Test your agent](https://docs.avaamo.com/user-guide/llamb/get-started/step-3-test-your-agent)

#### 

Using Agent Simulator

1.  In the Agent page, navigate to the **Test -> Simulator** option in the left navigation menu. Alternatively, you can test using the agent icon in the bottom right corner.
    
2.  You can now ask queries and test if you receive appropriate responses from user queries.
    

1.  Click the source citations to view the actual source of the agent response.
    

1.  Click the Insights icon.
    

1.  You can view the "**Insights**".

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/troubleshooting-tips

1.  Ensure you are in Edit mode before creating a job. If the "**Add Content Source**" option is still not enabled after switching to Edit mode, **refresh your browser.**
    
2.  **What steps should I take if my document status shows as "Error" after creating the job?**
    

If a document shows the status of `Error`, then the following tips can help:

*   Empty article: Check to ensure the document is not empty
    
*   API issues: Verify that the API connections are functioning as expected
    
*   Insufficient permissions: Ensure that you have the necessary permissions to access and ingest the document
    

In such situations, create a new ingestion job and attempt to reingest the document. This often resolves the problem.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/datasync-ai-faqs

### 

1\. **Is it possible to utilize multiple content sources within the same document group?**

You can do it by creating separate jobs and mentioning the same document group.

### 

**2\. How many articles or documents can be ingested simultaneously?**

There is no limit to the number of articles or documents that can be ingested simultaneously.

### 

**3\. Can I remove or delete the ingested article or document?**

Yes, you can delete, edit, or retrain the ingested document. Refer to the article [Common actions](https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content/common-actions).

### 

**4\. If the content is updated after ingestion, then does it automatically update in the agent's skill?**

Yes, if a document is updated after it has been ingested into your skill or system, those updates automatically reflect in your agent. Refer Setup content sync for SharePoint Connector and Setup content sync for ServiceNow connector, for more information

### 

**5\. What if the same document’s different versions are ingested into the skill?**

The system updates the existing document by replacing it with the most recently ingested version, ensuring that only one version is maintained.

### 

6\. What happens if the ingested article/document contains an attachment?

It ingests the attachment if it is in PDF format. Refer [Before you begin](/user-guide/datasync-ai/before-you-begin), for more details.

---

## Source: https://docs.avaamo.com/user-guide/datasync-ai/datasync-ai-use-cases

## 

Use Case: Accessing Holiday Calendar Information for Employees from the US Region

### 

Objective:

To enable employees from the United States (US) region to access specific contract policy information tailored to their area using a content management system.

### 

Actors:

1.  Employee from the India region
    
2.  Content manager or administrator
    

### 

Prerequisites:

1\. The content management system is set up and operational.

2\. Documents detailing contract policies for various regions, including US and others, are available for ingestion.

### 

Normal Flow:

#### 

1\. Create a Document for the US Region Holiday calendar:

\- The content manager creates a document outlining the holiday calendar for employees from the US region.

#### 

2\. Ingest Document for US Region:

\- The content manager uses the content connector to ingest the document into the system.

\- Sets the attribute "**Region**" with the value "**US**" (United States).

#### 

3\. Test Scenario - Accessing via Simulator:

\- The content manager tests the scenario by accessing the agent from a simulator.

\- The simulated user asks, "**May I know about the holiday calendar?**"

\- Since the simulated user is from a non-US region (e.g., India), the system checks for documents related to contract policy for non-US region employees.

\- If no document is found for the non-US region, the system does not provide an answer.

#### 

4\. Ingest Document for Other Regions (e.g., India):

\- Recognizing the need for regional specificity, the content manager then creates and ingests another document specifically for employees from India.

\- Sets the attribute "**Region**" with the value "**India**."

#### 

5\. Test Scenario - Accessing Updated Information:

\- The simulated user, now from India, asks the same question about the contract policy.

\- The system retrieves and presents information from the document meant for India region employees, acknowledging the updated ingestion.

### 

Postconditions:

\- Employees from the United States region can access relevant contract policy information tailored to their region.

\- The system dynamically retrieves and presents information based on the user's region attribute, ensuring accurate and contextually relevant responses.

### 

Exceptional Flow:

\- If documents specific to a user's region are not ingested or available, the system should inform the user that no information is currently accessible for their region's contract policy.

### 

Business Benefits:

**Efficiency:** Provides targeted information to employees based on their region, reducing ambiguity and ensuring compliance.

**Customization:** Allows for customization and refinement of content attributes, supporting continuous adaptation to meet evolving regional needs.

**Accuracy:** Enhances answer accuracy by delivering region-specific information, improving user satisfaction and operational effectiveness.

---
