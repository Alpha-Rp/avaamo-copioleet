# Release Notes
> 123 pages

---

## Source: https://docs.avaamo.com/user-guide/about-releases/release-notes

Release notes are provided for each major and minor release of the product with comprehensive details on new features, enhancements, changes, deprecations, and removals within a release version.

Key information within the release notes includes:

*   **Release name:** A release name for a feature release to facilitate easy recognition.
    
*   **Version Information:** Clearly articulating the version number or release identifier of the platform.
    
*   **Release Date:** Indicating the date on which the release becomes accessible to users.
    
*   **Overview or Summary:** Provide a concise overview or summary of the significant changes and improvements introduced in the release.
    
*   **New Features:** Describing any new functionalities or features integrated into the platform.
    
*   **Enhancements:** Detailing improvements or optimizations made to existing features.
    
*   **Deprecated Features:** Features maintained solely for backward compatibility with minimal support in the platform.
    
*   **Removed Features:** Features deprecated in earlier releases and subsequently completely removed from the platform.
    

### 

Useful links

*   [All releases](/user-guide/release-notes-old/all-releases)
    
*   [Release life cycle](/user-guide/about-releases/release-life-cycle)

---

## Source: https://docs.avaamo.com/user-guide/about-releases/release-life-cycle

### 

Beta (**Limited Availability)**

A beta release is a pre-release version of a feature, product, or enhancement that is made available to a select group of users for testing before the official launch.

Although nearly complete, Beta features are subject to change before they reach General Availability (GA). Beta features documentation is also subject to change before GA. It is not recommended to use Beta features in production.

Beta features are enabled for select customers to provide early feedback to the product team before GA.

Contact Avaamo Support or your dedicated Customer Success Manager to enable Beta features.

### 

General Availability (GA)

General Availability (GA) features have new or enhanced functionality and are enabled by default for all customers. This stage follows the beta phase and signifies that the product has undergone thorough testing, refinement, and validation.

### 

Deprecated

Continuously evaluating product capabilities, Avaamo consistently works towards enhancing overall customer value by upgrading older features with significantly improved alternatives. This process is executed with meticulous attention to ensuring continuous backward compatibility.

Typically, deprecated features still exist in the product for backward compatibility but will be removed in a subsequent release. However, the specific availability of a deprecated feature can vary with each release. Refer to the release notes of the particular version for precise information on the dates of availability.

Features slated for removal in a future release undergo a deprecation phase, first during which suitable alternatives are provided. While in the deprecated state, capabilities remain accessible but are not subject to further enhancements.

**Key point**: Deprecated features will only receive critical bug fixes and security updates until they are entirely phased out from the product. There are no SLA commitments for deprecated features.

### 

Removed

Removed features are no longer present in the product. Upon upgrading to a newer release, any use cases dependent on a removed feature will no longer work. No further support is offered for bug fixes or enhancements to a removed feature.

The removal of deprecated capabilities occurs in the subsequent major or minor release at the earliest. The specific date for removal will be communicated later. This systematic approach provides customers with at least one release cycle to adjust their implementation to a new version of a deprecated capability before the actual removal occurs.

Contact your dedicated Customer Success Manager to evaluate the usage of a removed feature in the platform.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0

The Avaamo Conversational AI Platform `10.0.0` release includes 8 new features, and 60 enhancements.

### 

New features

This release includes the introduction of these new features:

1.  [Introducing the Dialog skill for AI agents](/user-guide/recent-releases/release-notes-v10.0.0/introducing-the-dialog-skill-for-ai-agents)
    
2.  [Introducing Multi-agent architecture in Avaamo](/user-guide/recent-releases/release-notes-v10.0.0/introducing-multi-agent-architecture-in-avaamo)
    
3.  [Introducing Conversational Intelligence (CI)](/user-guide/recent-releases/release-notes-v10.0.0/introducing-conversational-intelligence-ci)
    
4.  [Introducing new content sources for DataSync](/user-guide/recent-releases/release-notes-v10.0.0/introducing-new-content-sources-for-datasync)
    
5.  [Introducing document transformation support in datasync](/user-guide/recent-releases/release-notes-v10.0.0/introducing-document-transformation-support-in-datasync)
    
6.  [Add your own LLM and TTS providers](/user-guide/recent-releases/release-notes-v10.0.0/add-your-own-llm-and-tts-providers)
    
7.  [Introducing agent metering](/user-guide/recent-releases/release-notes-v10.0.0/introducing-agent-metering)
    
8.  [Introducing MCP channel](/user-guide/recent-releases/release-notes-v10.0.0/introducing-mcp-channel)
    

### 

Enhancements

Enhancements are categorized according to the Avaamo Conversational AI Platform modules for streamlined navigation. Following is the list of all the enhancements in the 10.0.0 release:

AI agents

#### 

Knowledge skill updates

*   [Enhancements to knowledge skill pull updates](/user-guide/recent-releases/release-notes-v10.0.0#enhancements-to-knowledge-skill-pull-updates)
    
*   [Enhanced document filters and statuses in Knowledge skill](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-document-filters-and-statuses-in-knowledge-skill)
    
*   [Multilingual document ingestion support for Knowledge skill](/user-guide/recent-releases/release-notes-v10.0.0#multilingual-document-ingestion-support-for-knowledge-skill)
    
*   [Language selection for Knowledge skill file ingestion](/user-guide/recent-releases/release-notes-v10.0.0#language-selection-for-knowledge-skill-file-ingestion)
    
*   [Improved control over language auto-detection in content ingestion](/user-guide/recent-releases/release-notes-v10.0.0#improved-control-over-language-auto-detection-in-content-ingestion)
    
*   [Export agents with optional Knowledge skill data](/user-guide/recent-releases/release-notes-v10.0.0#export-agents-with-optional-knowledge-skill-data)
    
*   [Email notifications for failed jobs](/user-guide/recent-releases/release-notes-v10.0.0#email-notifications-for-failed-jobs)
    
*   [Enhanced DataSync SharePoint connector for nested documents and attachments](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-datasync-sharepoint-connector-for-nested-documents-and-attachments)
    

#### 

LLaMB & AI capabilities

*   [Priority-based progressive search for LLaMB skills](/user-guide/recent-releases/release-notes-v10.0.0#priority-based-progressive-search-for-llamb-skills)
    
*   [Non-union priority search for LLaMB skills](/user-guide/recent-releases/release-notes-v10.0.0#non-union-priority-search-for-llamb-skills)
    
*   [Real-time LLM context optimization improvements](/user-guide/recent-releases/release-notes-v10.0.0#real-time-llm-context-optimization-improvements)
    
*   [Configurable context window size](/user-guide/recent-releases/release-notes-v10.0.0#configurable-context-window-size)
    
*   [Custom formatting instructions for responses](/user-guide/recent-releases/release-notes-v10.0.0#custom-formatting-instructions-for-responses)
    
*   [New source format for citations](/user-guide/recent-releases/release-notes-v10.0.0#new-source-format-for-citations)
    
*   [LLaMB support for multi-intent queries](/user-guide/recent-releases/release-notes-v10.0.0#llamb-support-for-multi-intent-queries)
    

#### 

Prompt skills & agent orchestration

*   [Introducing prompt versioning](/user-guide/recent-releases/release-notes-v10.0.0#introducing-prompt-versioning)
    
*   [Support for multiple web elements in function responses](/user-guide/recent-releases/release-notes-v10.0.0#support-for-multiple-web-elements-in-function-responses)
    
*   [Support for retaining contextual data with UI responses](/user-guide/recent-releases/release-notes-v10.0.0#support-for-retaining-contextual-data-with-ui-responses)
    
*   [Support for JS block in welcome messages](/user-guide/recent-releases/release-notes-v10.0.0#support-for-js-block-in-welcome-messages)
    
*   [Immediate (silent) transfer option for AI agent](/user-guide/recent-releases/release-notes-v10.0.0#immediate-silent-transfer-option-for-ai-agent)
    

#### 

Voice & telephony experience

*   [Improved voice agent experience with processing-indicator typing sound](/user-guide/recent-releases/release-notes-v10.0.0#improved-voice-agent-experience-with-processing-indicator-typing-sound)
    
*   [Reduced typing filler audio volume](/user-guide/recent-releases/release-notes-v10.0.0#reduced-typing-filler-audio-volume)
    
*   [Warm-up message support for AI agents](/user-guide/recent-releases/release-notes-v10.0.0#warm-up-message-support-for-ai-agents)
    
*   [Improved barge-in handling during warm-up message playback](/user-guide/recent-releases/release-notes-v10.0.0#improved-barge-in-handling-during-warm-up-message-playback)
    
*   [Adaptive TTS caching for faster responses](/user-guide/recent-releases/release-notes-v10.0.0#adaptive-tts-caching-for-faster-responses)
    
*   [Default ASR model update](/user-guide/recent-releases/release-notes-v10.0.0#default-asr-model-update)
    

#### 

Idle handling & session management

*   [Idle transfer to the error handler](/user-guide/recent-releases/release-notes-v10.0.0#idle-transfer-to-the-error-handler)
    
*   [Skipped bot error logging for idle nudges](/user-guide/recent-releases/release-notes-v10.0.0#skipped-bot-error-logging-for-idle-nudges)
    
*   [Advanced idle nudge configuration](/user-guide/recent-releases/release-notes-v10.0.0#advanced-idle-nudge-configuration)
    
*   [Session timeout notification for the Web channel](/user-guide/recent-releases/release-notes-v10.0.0#session-timeout-notification-for-the-web-channel)
    
*   [Input token utilization warning and automatic session disconnection](/user-guide/recent-releases/release-notes-v10.0.0#input-token-utilization-warning-and-automatic-session-disconnection)
    

#### 

MCP & integrations

*   [Support for MCP integrations in Prompt Skills](/user-guide/recent-releases/release-notes-v10.0.0#support-for-mcp-integrations-in-prompt-skills)
    

#### 

Debugging, logs & developer experience

*   [Enhanced error logs with a search option](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-error-logs-with-a-search-option)
    
*   [Warning for large function call responses in error logs](/user-guide/recent-releases/release-notes-v10.0.0#warning-for-large-function-call-responses-in-error-logs)
    
*   [Transcript availability for digital sessions](/user-guide/recent-releases/release-notes-v10.0.0#transcript-availability-for-digital-sessions)
    

LLaMB

*   [Citation links in regression test files](/user-guide/recent-releases/release-notes-v10.0.0#citation-links-in-regression-test-files)
    
*   [Custom formatting instructions for LLaMB responses](/user-guide/recent-releases/release-notes-v10.0.0#custom-formatting-instructions-for-llamb-responses)
    
*   [Enhanced support for multilingual document ingestion](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-support-for-multilingual-document-ingestion)
    
*   [Pull specific LLaMB skill changes](/user-guide/recent-releases/release-notes-v10.0.0#pull-specific-llamb-skill-changes)
    
*   [Response cutoff message translation](/user-guide/recent-releases/release-notes-v10.0.0#response-cutoff-message-translation)
    
*   [Support for opening citation links in the same tab](/user-guide/recent-releases/release-notes-v10.0.0#support-for-opening-citation-links-in-the-same-tab)
    
*   [Improved unhandled query responses](/user-guide/recent-releases/release-notes-v10.0.0#id-4.-improved-unhandled-query-responses)
    

DataSync

*   [Enhanced document filters and statuses in DataSync](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-document-filters-and-statuses-in-datasync)
    
*   [Multilingual document ingestion support for DataSync](/user-guide/recent-releases/release-notes-v10.0.0#multilingual-document-ingestion-support-for-datasync)
    
*   [Language selection for file ingestion in DataSync](/user-guide/recent-releases/release-notes-v10.0.0#language-selection-for-file-ingestion-in-datasync)
    
*   [Email notifications for failed jobs](/user-guide/recent-releases/release-notes-v10.0.0#email-notifications-for-failed-jobs)
    
*   [Editable document titles for improved citations](/user-guide/recent-releases/release-notes-v10.0.0#editable-document-titles-for-improved-citations)
    
*   [Improved SharePoint ingestion for nested documents and attachments](/user-guide/recent-releases/release-notes-v10.0.0#improved-sharepoint-ingestion-for-nested-documents-and-attachments)
    

Channels

**MS teams**

*   [SSO flow improvements for Microsoft Teams](/user-guide/recent-releases/release-notes-v10.0.0#sso-flow-improvements-for-microsoft-teams)
    

**SMS channel**

*   [Enhanced security validation for SMS channel](/user-guide/recent-releases/release-notes-v10.0.0#enhanced-security-validation-for-the-sms-channel)
    

**Web channel**

*   [Floating label support for input fields](/user-guide/recent-releases/release-notes-v10.0.0#floating-label-support-for-input-fields)
    
*   [Attachment button visibility updated for Live Agent sessions](/user-guide/recent-releases/release-notes-v10.0.0#attachment-button-visibility-updated-for-live-agent-sessions)
    

Export agents

[Export agents with optional LLaMB skill data](/user-guide/recent-releases/release-notes-v10.0.0#export-agents-with-optional-llamb-skill-data)

JS error

[Improved filtering options in the JS errors page](/user-guide/recent-releases/release-notes-v10.0.0#improved-filtering-options-in-the-js-errors-page)

Masking

[Control masking with safelist patterns](/user-guide/recent-releases/release-notes-v10.0.0#control-masking-with-safelist-patterns)

Platform

[File transfer capture support for custom live agent integrations](/user-guide/recent-releases/release-notes-v10.0.0#file-transfer-capture-support-for-custom-live-agent-integrations)

Query insights

[Citation links in query insights](/user-guide/recent-releases/release-notes-v10.0.0#citation-links-in-query-insights)

Conversation history

*   [Query context visibility in conversation history insights](/user-guide/recent-releases/release-notes-v10.0.0#query-context-visibility-in-conversation-history)
    
*   [Copy option in the conversation history](/user-guide/recent-releases/release-notes-v10.0.0#copy-option-in-the-conversation-history)
    
*   [Editable document titles for improved citations](/user-guide/recent-releases/release-notes-v10.0.0#conversation-history-limited-to-six-months)
    

## 

AI agents enhancements

### 

Enhancements to knowledge skill pull updates

In this release, we have introduced several improvements to streamline the pull updates workflow for Knowledge Skill content:

*   **Automatic selection during pull updates:** All checkboxes under `Advanced options` and all LLaMB skills in the change log popup are now selected by default, ensuring a complete and consistent pull updates process with minimal manual effort.
    
*   **Updated naming:** The label `“Skill: Knowledge”` has been renamed to `“Skill: LLaMB content”` in the pull updates popup for better clarity.
    
*   **Refreshed icon:** The LLaMB skill icon has been updated to align with the latest design standards.
    

Refer [Promote and pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

### 

Enhanced document filters and statuses in Knowledge skill

This release introduces multiple improvements to document filtering, status visibility, and ingestion transparency within the DataSync UI:

**Multi-select status filter:** A new multi-select dropdown lets users apply multiple document statuses simultaneously, enabling more flexible, efficient filtering.

**New “Others” category in top statistics:** A new `Others` tile appears alongside existing categories, helping teams quickly identify document counts that do not fall under ingestion, failed, or progressing statuses. This ensures alignment between categorized counts and the total document count. The Others category count represents the combined total of all `Skipped` and `Warning` statuses.

**Detailed status insights:** Hovering over **Warning**, **Error**, and **Skipped** statuses reveals the underlying issue or reason.

**Introducing the Skipped status:** The new `Skipped` status identifies documents that are intentionally ignored during the ingestion. This status includes a tooltip explaining why the content was skipped.

For example, suppose the content remains unchanged in Web, ServiceNow, or SharePoint sources between runs, whether triggered manually via Sync Now or via auto-sync. In that case, the system skips the ingestion process.

**Key points:**

*   URLs imported via CSV are always processed and marked as `Ingested`, and do not show `Skipped`.
    
*   Forcing re-ingestion of a single document from the menu overrides existing states, moving the document to `Ingested`.
    

Refer [Knowledge Skill](/user-guide/ai-agent/skills/knowledge-skill), for more information.

### 

Multilingual document ingestion support for Knowledge skill

In this release, `multilingual document ingestion` is added to the Knowledge skill, allowing it to process documents in any language supported by the platform. You can now upload documents or files in any language supported by the platform, expanding flexibility for global and multilingual use cases.

You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.

You can view these translated chunks in the Knowledge section.

For example, if you ingest a document in French and ask a question in English, the agent interprets the content and responds in the language configured for the conversation, ensuring a seamless multilingual experience.

Refer [Knowledge Skill](/user-guide/ai-agent/skills/knowledge-skill), for more information.

### 

Language selection for Knowledge skill file ingestion

In this release, we are introducing a new `Language selection` option for file-based content ingestion in Knowledge Skills. You can view this option during file ingestion. This enhancement improves content-processing accuracy, ensures better handling of non-English documents, and helps the system generate more reliable responses from the ingested data.

You can select the language in the `Upload Files` step. Click the dropdown to display the languages configured for the agent.

**Note:** The language selection option is disabled when the Auto-detect toggle is enabled

Refer [Knowledge Skill](/user-guide/ai-agent/skills/knowledge-skill), for more information.

### 

Improved control over language auto-detection in content ingestion

In this release, the system’s ability to automatically detect the language of uploaded files has been improved. Auto-detection is now `disabled by default` for more controlled ingestion. If you want to enable automatic language identification while uploading files through the API, you can do so by setting the payload parameter `auto_detect_language` to `true`.

This update prevents unintended language misclassification during ingestion and allows developers to explicitly control when auto-detection runs, resulting in more accurate content processing and cleaner knowledge organization.

Below is the example payload:

Refer [Content ingestion APIs](https://docs.avaamo.com/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

### 

Export agents with optional Knowledge skill data

In this release, we introduce a new checkbox in the agent export flow that lets users include or exclude Knowledge Skills in the export. By default, all applicable skills are included. Users can clear the checkbox to exclude LLaMB skills from the exported agent.

**Note:** This feature is enabled by default; the checkbox is selected.

This enhancement includes two scenarios:

*   **Fresh export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

*   **Repeated export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

This improvement provides greater control and improves export performance, especially for agents with large skill datasets.

Refer [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.

### 

Email notifications for failed jobs

In this release, we introduce the `Email Notifiers` to configure email notifications for failed jobs in Knowledge Skill. You can now add email addresses to receive alerts whenever a job fails for any reason.

For example, if an auto-sync is scheduled to run at a specific time and the job fails, the configured email recipients are immediately notified. This alert helps teams detect failures early, respond quickly, and minimize data sync disruptions.

**To configure email notifications:**

1.  Navigate to the required job.
    
2.  Click the three-dot menu next to the job name and select `Email Notifiers`.
    

1.  Add up to **five email addresses**, using **\+ Add** to include them one by one. Click **Save** to apply the configuration.
    

Refer [Email Notifiers](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/common-actions#email-notifiers), for more information.

### 

Enhanced DataSync SharePoint connector for nested documents and attachments

In this release, the `DataSync SharePoint connector` has been enhanced to support viewing and selecting all documents, files, and attachments, including those nested within folders and subfolder structures.

You can also search for folders in the `Select Sites` step to quickly locate the folder where your articles or documents are stored. You can also use the `Show selected at top` toggle to keep the selected folder displayed at the top of the list for easier access.

This improvement enables more comprehensive content discovery and ingestion while preserving document integrity and associated metadata.

Refer [SharePoint](/user-guide/ai-agent/skills/knowledge-skill/add-content-to-knowledge-skill/sharepoint), for more information.

### 

Priority-based progressive search for LLaMB skills

In this release, we introduce **Priority-based Progressive Search** for LLaMB skills. This new search capability formalizes progressive search behavior, previously implemented through custom logic, into a native, priority-driven mechanism that reduces latency and improves search efficiency.

With priority-based search, queries are executed in a defined order, starting with **P0** (highest priority) and proceeding up to **P4** (default maximum environment-level priority, configurable at the skill level). The system sequentially searches by priority, returning results as soon as a relevant match is found, yielding faster, more predictable responses.

This enhancement supports two types of attributes:

*   **Static attributes**: Always included in every search (for example, `department: manager`)
    
*   **Dynamic (priority) attributes**: Evaluated progressively based on their assigned priority
    

Priority-based search is activated by configuring user attributes in the new multi-priority format. Existing static attribute configurations remain fully supported to ensure backward compatibility.

**Benefits**

*   Fast, strict matches first; broader searches only when needed
    
*   Predictable expansion behavior across any number of priorities
    
*   Natural fallback when data is missing or empty
    
*   Cleaner ranking control through scope-aware weighting
    

This enhancement simplifies the implementation of progressive search while delivering safer, faster, and more controllable knowledge retrieval.

#### 

Examples

**Example A: Progressive local to global search**

The search gradually expands and then reverts to a global search.

**Input**

**Search flow**

1.  **Priority 0**: English only
    
2.  **Priority 1**: English, Spanish
    
3.  **Priority 2**: English, Spanish, French
    
4.  **Priority 3**: English, Spanish, French, German
    
5.  **Priority 4**: All languages (no language filter)
    

**Example B: Multiple dynamic attributes with a static attribute**

Static attributes (this ensures backward compatibility) remain constant, while dynamic attributes expand by priority.

**Input**

**Search flow**

1.  Manager documents in English
    
2.  Manager documents in English and Spanish, scoped to the India region
    
3.  Manager documents across all listed languages (English, Spanish, French, and German) and regions (India and USA).
    
4.  Manager documents across India and USA region, with no language restriction (fallback)
    

### 

Non-union priority search for LLaMB skills

In this release, we introduce **Non-union priority search**, an enhancement to priority-based progressive search that gives finer control over how user attributes are evaluated during retrieval.

With non-union priority search enabled, LLaMB evaluates **each priority level independently rather than** cumulatively combining attributes across priorities. This ensures that results are sourced exclusively from the matched priority level, preventing unintended context mixing.

This enhancement gives teams greater control over how LLaMB evaluates prioritized attributes, resulting in more predictable and accurate responses.

**Note:** Union-based priority search is enabled by default. To disable it and use **non-union priority search**, please contact **Avaamo Support**.

**Example: Union vs non-union priority search**

The following example illustrates the difference between the **default (union)** behavior and **non-union** priority search.

**Default behavior (union = true)**

**Input**

**Generated scopes (maxPriority = 4)**

**Queries performed**

*   Q1 (p0): English
    
*   Q2 (p1): English, Spanish
    
*   Q3 (p2): English, Spanish, French
    
*   Q4 (p3): English, Spanish, French, German
    
*   Q5 (p4): All languages (no `user_language` filter)
    

In this mode, attributes are cumulatively combined as priority increases.

* * *

**Non-union behavior (union = false)**

**Input**

**Generated scopes (maxPriority = 4)**

**Queries performed**

*   Q1 (p0): English
    
*   Q2 (p1): Spanish
    
*   Q3 (p2): French
    
*   Q4 (p3): German
    
*   Q5 (p4): All languages (no `user_language` filter)
    

In this mode, each priority level is evaluated independently, and attributes are not combined across priorities.

### 

Real-time LLM context optimization improvements

In this release, improvements have been introduced to optimize LLM context handling for real-time AI Agent interactions across both `Digital (Web)` and `CIVR` channels.

These enhancements focus on reducing unnecessary context sent to the LLM while preserving conversation quality and the reliability of function execution.

### 

Configurable context window size

A new advanced Prompt Skill setting, `context_window_size` allows you to control how many recent conversation items are retained in the LLM context (maximum: 10). When the configured limit is reached, older messages are automatically trimmed to reduce token usage and optimize performance.

**Example:** Setting `context_window_size: 10` retains the 10 most recent conversation items in the active context.

This update enhances response speed, reduces token consumption, and improves overall reliability for real-time agent interactions.

Refer [LLM context window size](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#llm-context-window-size), for more information.

### 

Custom formatting instructions for responses

In this release, we are introducing `Custom Formatting Instructions` for responses. This feature allows teams to define the tone, structure, and layout of every generated response, ensuring consistent communication that aligns with organizational guidelines and specific use-case requirements.

To configure custom formatting instructions, navigate to the `Advanced settings` section within the Knowledge skill page.

1.  Click `Edit`
    
2.  After writing the message, click `Save`.
    

Refer [Advanced settings](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#custom-formatting-instructions), for more information.

### 

New source format for citations

In this release, we have introduced a new citation source format. This enhancement ensures that all citations displayed in LLaMB responses follow a cleaner, more consistent, and easy-to-read structure. The updated format makes it simpler for users to understand where each piece of information originated, improving transparency and overall readability.

To enable or change the citation format for your agent, **contact Avaamo Support**.

You can now choose between two display styles for showing citation sources in responses:

1.  **ReferenceFootnotes** This is the existing format where sources appear as: `Source: [1] [2]`)
    

1.  **InlineLinksWithSeparators** _(new)_ This new format displays citation sources inline with clear separators, offering a more readable, user-friendly presentation.
    

### 

LLaMB support for multi-intent queries

In this release, **LLaMB now supports multi-intent queries for AI Agents**. With this enhancement, the system can process multiple intents expressed within a single user query and generate a consolidated response.

With this, LLaMB can interpret and handle multiple requests in a single query, improving response accuracy and coverage.

In AI Agents, multiple queries can also be passed programmatically as an **array in a function call**.

Example:

**Example:**

_“Please connect me to the billing department and give me the visiting hours for the radiology department.”_

In this scenario, the system identifies both intents—**connecting to the billing department** and **providing radiology visiting hours**—and processes them within a single interaction.

This enhancement improves the agent’s ability to handle complex user requests, resulting in more natural conversations and more comprehensive responses.

### 

Introducing prompt versioning

In this release, we introduce `prompt versioning` at the prompt skill level, giving you better control and visibility into how prompts evolve over time.

This enhancement helps teams safely iterate on prompts, roll back changes when needed, and maintain consistency across environments, making prompt development more reliable and auditable.

Each time you save changes to a prompt skill, whether in the `prompt content`, `functions`, or `advanced settings,` the system automatically creates a new version. The initial save creates version 1, and subsequent changes generate additional versions, ensuring that every meaningful update is tracked.

**Key highlights**

*   **Automatic version creation:** A new version is created whenever the prompt, functions, or advanced settings change.
    
*   **Side-by-side comparison:** Compare any two versions in parallel to clearly understand what has changed.
    
*   **Restore with confidence:** Roll back to a previous version to revert the prompt skill to an earlier state. Restoring creates a new version marked as restored, and the latest version always appears at the top.
    
*   **Pagination:** Versions are paginated with up to 10 versions per page, and the latest 100 versions are retained for easier navigation.
    
*   **Stage-aware versioning:** Versioning is supported across all stages (development, testing, staging, and production). Pulling updates from one stage to another creates a new version in the target stage.
    
*   **Export and import behavior:** Version history is not included during export. On import, the latest version is copied, and versioning starts fresh for the new agent.
    

Refer to [Prompt versions](/user-guide/ai-agent/skills/prompt-skill/prompt-versions), for more information.

### 

Support for multiple web elements in function responses

In this release, AI Agents now support rendering multiple web elements from a single function response. This allows different UI components to be rendered together in a single response.

This enhancement allows bot developers to send multiple messages from a function response in digital channels, where previously only one message was supported.

*   A single-function response can now include multiple web elements, such as messages, list views, and quick-reply buttons.
    
*   Elements are rendered in sequence, ensuring a coherent and guided user experience.
    

**Key points**

*   Enables richer interaction patterns, such as displaying a message first, then presenting a list view or quick-reply options.
    
*   Allows combining multiple UI components into a single response to provide users with better context.
    

### 

Support for retaining contextual data with UI responses

In this release, the platform has been enhanced to retain additional contextual data when responses include UI elements such as cards, carousels, or messages. This allows the agent to reference that information in subsequent interactions.

This improvement enables richer conversational experiences, improving follow-up question handling and overall conversation continuity.

**For example:**

In this example, the card UI is displayed to the user, while the additional `cricket metadata` is preserved in the context. This allows the agent to answer follow-up questions, such as `Who is his favorite cricketer?` or `Who is his favorite bowler?` using the stored contextual information.

### 

Support for JS block in welcome messages

In this release, we are adding support for using JS blocks within welcome messages. This means you can now insert a JS block to generate dynamic, personalized, and context-aware greetings. With this enhancement, your welcome messages can fetch user-specific data, apply conditional logic, display tailored content, and create more engaging first interactions for your users.

### 

Immediate (silent) transfer option for AI agent

In this release, we add support for an **immediate (silent) execution option** for agent transfers and call control actions. Bot developers can now trigger transfers, forwards, or hangups **without waiting for the agent’s response**.

This enhancement enables faster, more controlled call flows—especially useful for silent routing, immediate handoffs, and programmatic call termination.

**What’s new**

*   Added an `instant: true` parameter to the following functions:
    
    *   `PromptSkill.transfer(skill, { instant: true })`
        
    *   `SmartCall.forward(message, to, headers, { instant: true })`
        
    *   `SmartCall.hangup({ instant: true })`
        
    

**Behavior change**

*   **Default behavior:** The platform waits for the agent response and reads it out, with a maximum timeout of 20 seconds.
    
*   **New behavior (with** `**instant: true**`**):** The action is executed immediately. The system does not wait for or read any agent message and performs the transfer, forward, or hangup without delay.
    

### 

Improved voice agent experience with processing-indicator typing sound

In this release, a `typing sound` has been introduced to bridge the silent gap between when a user finishes speaking and when the agent begins its response. This improvement enhances the voice interaction experience by clearly indicating that the system is processing the user’s input.

**Channels supported:** CIVR, Agentic Widget Voice

**Configuration:** Ensure `filler_audio` : `typing` is added in the `Prompt Skill > Advanced Settings > Advanced customization parameters.`

**Some examples of filler audios are:** `"loading", "typing","office","cough","fan","finger_tap","pencil_tap"`

**How it works**

*   When the user stops speaking, a short typing sound plays until the agent starts responding, helping avoid moments of silence.
    
*   If the user resumes speaking while the typing sound is playing, it stops immediately. Once the new input is processed, the typing sound may play again briefly before the agent responds.
    

### 

Reduced typing filler audio volume

The volume of the typing filler audio has been reduced to create a more natural, less intrusive conversational experience during idle periods.

### 

Warm-up message support for AI agents

In this release, a `warm-up message` has been introduced for the `C-IVR` and `SIP Channel` to improve the call start experience. This message is played at the beginning of a call while the actual call setup continues in parallel, helping reduce perceived latency and avoid early call drops.

This enhancement improves user experience during call initiation, especially in scenarios with higher startup latency.

**To enable the warm-up message:**

1.  Navigate to the **CIVR / Phone channel configuration**.
    
2.  Enable the **Warm-up message** toggle.
    
3.  Enter the static message text in the input box that appears when the option is enabled.
    
4.  Save the configuration.
    

**Key Points:**

*   Supported for the C-IVR and SIP Channels in AI Agents only
    
*   Warm-up messages can be added, updated, enabled, disabled, or removed
    
*   The feature is `optional`; calls continue to work without a warm-up message
    
*   Compatible with `multiple TTS providers`
    

Refer [C-IVR](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone) and [SIP](/user-guide/ai-agent/configuration/channels/sip#manage-channel-settings) for more information.

### 

Improved barge-in handling during warm-up message playback

In this release, barge-in behavior during warm-up and greeting message playback has been enhanced to ensure a consistent and controlled IVR experience.

Previously, if a user entered DTMF input during the warm-up message playback, the system immediately interrupted the message and processed the input.

With this enhancement, the barge-in logic has been updated with the following behavior (applicable to both **DTMF and audio barge-in**):

*   If a **welcome message is enabled**, barge-in is automatically disabled until the entire welcome and greeting message has finished playing, regardless of configuration.
    
*   If no welcome message is configured, barge-in behavior follows the existing configuration settings.
    

This update ensures that critical greeting or welcome messages are delivered completely before user input is processed, improving call flow consistency and overall user experience.

### 

Adaptive TTS caching for faster responses

In this release, we introduce an enhanced **Text-to-Speech (TTS) Cache System** that improves response speed by intelligently caching audio for an agent’s most frequently used phrases.

The system identifies an agent’s **Top N high-frequency phrases** through a daily background job and stores the corresponding audio in MongoDB. During conversations, the Conversation Engine dynamically determines whether a phrase is eligible for caching, ensuring that only the most relevant content is cached.

**Key benefits**

*   **Faster responses:** Cache hits return audio in ~10–50 ms, compared to ~500–2000 ms for cache misses.
    
*   **Reduced costs:** Selective caching yields 40–60% savings in TTS API usage.
    
*   **Faster call start experience:** Platform-wide analysis shows that **67.31%** of utterances are repetitive, of which 32.58% are greetings. As a result, greeting responses benefit the most from caching, making the **initial agent greeting noticeably faster** and improving the overall call start experience.
    

### 

Default ASR model update

In this release, the V6 ASR model is now the default. Standardizing on `V6` ensures consistent performance, reduces configuration discrepancies across environments, and simplifies troubleshooting.

**Note:** Contact Avaamo Support if you need to change this configuration or enable additional model options.

ASR model selection has been streamlined across channels to ensure consistency and simplify configuration:

*   **Web channel:** The `V6 ASR model` is selected by default, and the option to switch to other models has been removed.
    

Before

After release

*   **CIVR/SIP channel:** The `V6 ASR model` is selected by default, And option to switch to other models has been removed.
    

Before release

After release

**Key Points:**

**For existing (old) agents**

*   If an ASR model other than V6 was previously selected, the ASR selection options remain available in the UI.
    
*   Selecting any model other than V6 is not allowed.
    
*   After selecting V6 and saving the configuration, the ASR selection options are permanently removed from the channel UI.
    

### 

Idle transfer to the error handler

This enhancement allows the agent to transfer the call to the error handler after a configured number of idle nudges. From the error handler, bot developers can decide whether to transfer the call, end it, or take any other custom steps as needed.

**How to enable:**

1.  Navigate to the **Prompt Skill** where you want to configure idle transfer functionality.
    
2.  Go into **Advanced settings**.
    
3.  In **Advanced customization parameters**, add: `enable_idle_error_handler: true`
    

Remove `hangup_on_idle` if previously configured.

1.  Save and exit.
    
2.  Navigate to **Configuration > Settings > Error handler**.
    
3.  Provide the required JavaScript as needed.
    
4.  Save and test the configuration.
    

Refer [Transfer to the error handler on idle](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters#transfer-to-the-error-handler-on-idle), for more information.

### 

Skipped bot error logging for idle nudges

To prevent unnecessary log pollution, bot errors are no longer raised for idle nudges. Control still transfers correctly to the configured end state (hangup or error handler) without creating error log entries.

### 

Advanced idle nudge configuration

In this release, support for `idle_nudge_config` has been added to the [Advanced customization parameters](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters) of prompt skills, enabling skill-level configuration of idle nudge timing, count, and messages.

**How to configure:**

1.  Navigate to the **Prompt Skill** where you want to set idle nudge behavior.
    
2.  Go into **Advanced settings**.
    
3.  In **Advanced customization parameters**, add an `idle_nudge_config`, for example:
    

**Parameter details:**

*   **duration\_ms** – Time to wait before detecting an idle nudge (in milliseconds).
    
*   **max\_nudges** – Number of nudges to provide (the final hangup or transfer also counts as one).
    
*   **nudge\_messages** – Spoken messages that can be customized for each stage.
    

**Key points:**

To finalize behavior:

*   Add `hangup_on_idle: true` for hangup, **or**
    
*   Add `enable_idle_error_handler: true` to transfer control to the error handler.
    

Refer [Idle nudge](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/idle-nudge), for more information.

### 

Session timeout notification for the Web channel

In this release, a `session timeout notification` has been introduced for the Web channel. With this enhancement, when a user session ends due to inactivity, a message is displayed in the conversation informing the user that the session has timed out.

You can enable this feature by setting the `enable_idle_timeout_notification` parameter to `true` under the Prompt skill's `Advanced` settings. Navigate to `Advanced` \> `Advanced customization parameters`.

This enhancement improves transparency by clearly informing users when their session has ended due to inactivity.

Refer [Advanced customization parameters](/user-guide/ai-agent/skills/prompt-skill/advanced-settings/advanced-customization-parameters), for more information.

### 

Input token utilization warning and automatic session disconnection

In this release, a new safeguard has been added to help manage the use of input tokens. The system now displays a warning when token consumption approaches the configured threshold. If the threshold is exceeded, the session is automatically disconnected to prevent overuse and ensure optimal system performance.

### 

Support for MCP integrations in Prompt Skills

In this release, MCP server integrations are introduced in Prompt Skills, allowing you to connect external MCP servers and selectively enable their tools.

This enhancement gives you greater flexibility to extend agent capabilities with external services, while maintaining clear control over which tools are enabled and accessible within each Prompt Skill.

Navigate to the `MCP Integrations` section via the left menu of the Prompt Skills, allowing users to:

*   Add custom and built-in MCP connectors
    
*   Explore and choose from the available connectors in the Built-in MCP connectors list.
    
*   Fetch and view the list of tools exposed by the MCP connectors
    
*   Enable or disable specific tools
    
*   Create, update, or delete MCP connectors
    

For custom integrations, tools are automatically fetched once a valid connector URL is provided. If the URL is invalid, the tools cannot be retrieved. Tool enablement states are preserved once configured.

Refer [MCP integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration), for more information.

### 

Enhanced error logs with a search option

In this release, the error logs section has been improved with new searching capabilities:

**Search option added:** You can search error logs using `conversation_uuid` and `conversation_session_uuid` for more targeted and efficient troubleshooting.

**Session UUID visibility:** The listing page now displays the conversation session UUID directly, making it easier to quickly identify, correlate, and analyze specific conversation flows.

These enhancements significantly reduce the time spent locating specific error events, improve traceability across sessions, and provide clearer insights during debugging and root-cause analysis.

Refer [Error logs](/user-guide/ai-agent/debug/error-log), for more information.

### 

Warning for large function call responses in error logs

In this release, the platform surfaces a **warning in the Error Log dashboard** when a function call returns an unusually large response (e.g., a response containing a very large payload, such as a 10,000-character string).

When such a large response is returned from a function call in JavaScript:

*   A **FunctionCallOutputWarning** is logged in the **Error Log** with details such as skill name, conversation ID, and stack trace.
    
*   The warning indicates that the function output size may impact response handling.
    

For normal-sized function return values, no warning is generated, and the function executes as expected.

In addition, `function response sanitization` has been implemented for UI components such as `cards`**,** `carousels`**,** `list views`**,** and `quick replies`. This reduces the function response size by approximately 70%, thereby minimizing LLM context length and improving real-time performance.

This enhancement improves observability and helps developers identify and debug issues related to oversized function outputs without affecting standard function behavior.

### 

Transcript availability for digital sessions

In this release, conversation transcripts are now available for `digital sessions` in the [conversation history](/user-guide/ai-agent/debug/conversation-history). This enhancement ensures that transcripts are accessible across all session types, providing better visibility into user interactions and improving review and troubleshooting workflows.

## 

LLaMB enhancemnets

### 

Citation links in regression test files

In this release, we introduce `citation links in regression result files`, making it easier to trace and verify the sources used during regression testing. Each test result can now include direct citation links, allowing reviewers to quickly validate responses against their original knowledge sources.

This enhancement improves transparency, simplifies verification of results, and helps teams confidently assess response accuracy during regression testing.

**Note:** To enable citation links in the regression test result file, please reach out to **Avaamo Support**.

### 

Custom formatting instructions for LLaMB responses

In this release, we are introducing `Custom Formatting Instructions` for LLaMB responses. This feature allows teams to define the tone, structure, and layout of every generated response, ensuring consistent communication that aligns with organizational guidelines and specific use-case requirements.

To configure custom formatting instructions, navigate to the `Advanced settings` section within the LLaMB skill page.

Click `Edit`

After writing the message, click `Save`.

Refer [Advanced Settings](https://docs.avaamo.com/user-guide/llamb/get-started/step-2-ingest-enterprise-content), for more information.

### 

Enhanced support for multilingual document ingestion

In this release, multilingual document ingestion is expanded to support documents uploaded via the platform UI, previously limited to API-based ingestion.

**Key enhancements include:**

**UI-based auto-detection control:** You can now enable or disable language auto-detection for all selected documents uploaded via the UI.

**Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](https://docs.avaamo.com/user-guide/configuration/language) for the agent, allowing accurate classification of the uploaded document.

**Header editing improvements:** For multilingual documents, the original header is non-editable, while the translated (English) header is editable. English documents continue to behave as before.

**Original and translated view toggle:** A new toggle allows you to switch between the original and translated tables for easier review and editing.

Refer [Multi-language support](/user-guide/llamb/multi-language-support), for more information.

### 

Pull specific LLaMB skill changes

In this release, the LLaMB skill now supports pulling updates for `specific LLaMB skill changes` between stages. This improvement gives users greater control over stage deployments and helps prevent accidental updates to unrelated LLaMB skills.

When you add or modify an LLaMB skill during development and then initiate an update to production, the system now displays all detected changes under `Advanced Options`. You can review the list and selectively choose which updates to apply, ensuring that only the intended LLaMB skill changes are applied to the production agent.

The changes are categorized as follows:

*   **To be created**: Newly added LLaMB skills
    
*   **To be updated**: Existing LLaMB skills that have been modified
    

This enhancement ensures safer, more predictable deployments and improved version management across stages.

Refer [Promote and pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

### 

Response cutoff message translation

In this release, the `Response Cutoff Message` is automatically translated based on the user’s query language.

This ensures a consistent and seamless multilingual experience, allowing users to receive cutoff notifications in the same language as their interaction.

Refer [Response cutoff message](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings#response-cutoff-message), for more information.

### 

Support for opening citation links in the same tab

In this release, citation links generated through [LLaMB](/user-guide/llamb/overview-key-features) can be configured to open in the `same browser tab.` By adding the following attribute to the document attributes:

This enhancement provides greater control over navigation behavior and improves the end-user browsing experience.

Refer [citation links](/user-guide/llamb/citation-links), for more information.

### 

Improved unhandled query responses

In this release, a new `Unhandled Options` option has been added under `Advanced Settings` in the LLaMB Skill. This option lets you choose how the system should respond when it cannot find an answer. It gives you more control over the fallback experience and makes unhandled responses easier for users to understand and act on.

**Note:** This option is supported only when the Soft Unhandled skill is configured using a JavaScript block.

When turned off:

When turned on:

The system continues to follow the current behavior and displays a basic fallback response.

The system provides a cleaner, more helpful response. Suggested follow-up questions are shown clearly, each as a clickable button, making it easier for users to continue the conversation.

Refer [Advanced Settings](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings), for more information.

## 

DataSync enhancements

### 

Enhanced document filters and statuses in DataSync

This release introduces multiple improvements to document filtering, status visibility, and ingestion transparency within the DataSync UI:

**Multi-select status filter:** A new multi-select dropdown lets users apply multiple document statuses simultaneously, enabling more flexible, efficient filtering.

**New “Others” category in top statistics:** A new `Others` tile appears alongside existing categories, helping teams quickly identify document counts that do not fall under ingestion, failed, or progressing statuses. This ensures alignment between categorized counts and the total document count. The Others category count represents the combined total of all `Skipped` and `Warning` statuses.

**Detailed status insights:** Hovering over `Warning`, `Error`, and `Skipped` statuses reveal the underlying issue or reason.

**Introducing the Skipped status:** The new `Skipped` status identifies documents that are intentionally ignored during the ingestion. This status includes a tooltip explaining why the content was skipped.

For example, suppose the content remains unchanged in Web, ServiceNow, or SharePoint sources between runs, whether triggered manually via Sync Now or via auto-sync. In that case, the system skips the ingestion process.

**Key points:**

*   URLs imported via CSV are always processed and marked as `Ingested`, and do not show `Skipped`.
    
*   Forcing re-ingesting a single document from the menu overrides existing states, moving the document to `Ingested`.
    

### 

Multilingual document ingestion support for DataSync

In this release, `multilingual document ingestion` has been added to DataSync, enabling it to process documents in any language the platform supports. You can now upload documents or files in any language supported by the platform, expanding flexibility for global and multilingual use cases.

You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploaded document.

### 

Language selection for file ingestion in DataSync

In this release, we are introducing a new `Language selection` option for file-based content ingestion in DataSync. You can view this option during file ingestion. This enhancement improves content-processing accuracy, ensures better handling of non-English documents, and helps the system generate more reliable responses from ingested data.

You can select the language in the [Upload Files](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/upload-files) step. Click the dropdown to display the languages configured for the agent.

**Notes:** The language selection option is disabled when the `Auto-detect toggle` is enabled

You can verify the configured language after the file or document is ingested. Navigate to the individual document’s `Actions` section, click the `three-dot menu`, and select `Edit` to view the language of the ingested document content.

Refer [Files](/user-guide/datasync-ai/content-sources/files), for more information.

### 

Email notifications for failed jobs

In this release, we introduce the `Email Notifiers` to configure email notifications for failed jobs. You can now add email addresses to receive alerts whenever a job fails for any reason.

For example, if an auto-sync is scheduled to run at a specific time and the job fails, the configured email recipients are immediately notified. This alert helps teams detect failures early, respond quickly, and minimize data sync disruptions.

**To configure email notifications:**

1.  Navigate to the required job.
    
2.  Click the three-dot menu next to the job name and select `Email Notifiers`.
    

1.  Add up to `five email addresses`, using `+ Add` to include them one by one. Click `Save` to apply the configuration.
    

Refer [Email Notifiers](/user-guide/datasync-ai/content-sources/common-actions/email-notifiers), for more information.

### 

Editable document titles for improved citations

In this release, you can edit document titles across supported content sources, both during ingestion and after ingestion.

This enhancement improves citation clarity, makes document references more meaningful in agent responses, and gives you greater flexibility to manage content naming without re-ingesting documents.

You can now:

*   **Files:** Edit the file name at the time of upload.
    

*   **Web CSV upload:** Provide a custom name in the CSV file; the specified name is applied to the corresponding URL during ingestion.
    
*   **SharePoint, ServiceNow, Confluence, Web Sitemap, and Salesforce:** Update document titles after ingestion via the three-dot menu.
    

### 

Improved SharePoint ingestion for nested documents and attachments

In this release, the `DataSync SharePoint connector` has been enhanced to support viewing and selecting all documents, files, and attachments, including those nested within folders and subfolder structures.

This improvement enables more comprehensive content discovery and ingestion while preserving document integrity and associated metadata.

You can search for folders in the [Select Sites](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites) step to quickly locate where your articles or documents are stored. Additionally, use the `Show Selected at Top` toggle to keep your chosen folder displayed at the top of the list for easier access.

## 

Channel enhancements

### 

SSO flow improvements for Microsoft Teams

In this release, the SSO flow for the `Microsoft Teams channel` has been enhanced as part of the transition away from the deprecated SDK and the upgrade to the new cloud adapter. These changes were necessary because Microsoft deprecated the previously used SSO process, requiring internal updates to maintain compatibility and provide a smoother authentication experience for users.

Refer [Deprecation details](https://learn.microsoft.com/en-us/azure/bot-service/what-is-new?view=azure-bot-service-4.0) from Microsoft for more information.

### 

Enhanced security validation for the SMS channel

In this release, an extra security layer has been added to the SMS channel to verify the authenticity of requests originating from Twilio. This enhancement improves protection against unauthorized or spoofed traffic and ensures more reliable message handling.

### 

Floating label support for input fields

In this release, we are introducing floating label support for input fields in the web channel. You can enable this feature by setting the `floating_label_enabled` parameter to `true` under the web channel’s `Advanced` settings. Navigate to `Advanced` \> `Advanced customization parameters.`

Once enabled, the placeholder becomes a floating label above the field when the user focuses on the field or begins typing, rather than disappearing.

Before start typing

After start typing

This enhancement helps maintain field context during input, improves accessibility for screen reader users, and aligns with accessibility best practices and client UX requirements.

Refer [Web](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced), for more information.

### 

Attachment button visibility updated for Live Agent sessions

In this release, the visibility of the `attachment upload button` has been updated to improve user experience during agent interactions.

Previously, when [Send attachment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#send-attachment) was enabled, the attachment option remained visible throughout the conversation, even while the user interacted with the agent. With this enhancement, the `attachment button is displayed only when the user is connected to a Live Agent`. Once the live agent session ends and the conversation returns to the agent, the attachment option is automatically hidden.

This change ensures that file uploads are available only in the appropriate context, creating a clearer, more intuitive user experience.

## 

Other enhancements

### 

Export agents with optional LLaMB skill data

In this release, we introduce a new checkbox in the agent export flow that lets users include or exclude LLaMB skills in the export. By default, all applicable skills are included. Users can clear the checkbox to exclude LLaMB skills from the exported agent.

**Note:** This feature is enabled by default.

This enhancement includes two scenarios:

*   **Fresh export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

*   **Repeated export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

This improvement provides greater control and improves export performance, especially for agents with large skill datasets.

Refer to [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.

### 

Improved filtering options in the JS errors page

In this release, enhanced filtering capabilities have been added to the `JS errors` page. Users can now filter errors by type, such as `Warning` or `Error`**,** making it easier to isolate specific issues, focus on relevant problem areas, and streamline debugging and analysis.

Additionally, file exports now include `only the log results that match the currently applied filter`, ensuring clean, relevant, and targeted exports for further review or reporting.

Refer [JS errors](/user-guide/how-to/build-agents/debug-agents/js-errors), for more information.

### 

Control masking with safelist patterns

In this release, we introduce `Safelist masking patterns`, which let you prevent specific words or word groups from being masked.

For example, if you configure the system to mask all numbers in queries, responses, or both, specific terms such as RoBE-19 that contain numerals can be excluded from masking.

This enhancement provides greater control and flexibility in data masking, ensuring that essential terms remain readable while sensitive information remains protected.

To add safelist masking patterns, contact `Avaamo Support` with the list of words or patterns you want to exempt from masking.

### 

File transfer capture support for custom live agent integrations

In this release, support for capturing file transfers in custom live agent integrations has been introduced. Previously, file transfer events were not recorded. With this enhancement, all file transfers are now fully tracked, providing complete visibility into conversation activity.

### 

Citation links in query insights

In this release, citation links are now displayed in query insights across both the `Web channel` and the `Conversation History` pages. This enhancement makes it easier to trace responses back to their original knowledge sources directly from insights, improving transparency and simplifying verification during analysis and troubleshooting.

*   This is especially useful for **voice channels**, where responses are not visually inspectable during live interactions.
    
*   Citation links help **bot developers debug and validate responses** by clearly identifying which knowledge sources were used.
    
*   You can use citation visibility during testing and analysis, and disable it later if required for production environments.
    

Citation link in Web Channel:

Citation link in Conversation history:

### 

Query context visibility in conversation history

In this release, query contexts are now available in the `Conversation History` view.

Previously, query contexts were displayed only for `web channel query insights`. With this enhancement, the same contextual information is now surfaced directly in Conversation History, making it easier to understand how user queries were interpreted and processed across channels.

This improvement provides better visibility into query behavior and helps with debugging and analysis of agent responses.

Refer [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history#query-insights), for more information.

### 

Copy option in the conversation history

In this release, a `Copy option` has been added to the `Conversation History` page to make it easier to reference specific messages.

Select the conversation and hover over a message in the conversation history, a `Copy icon` appears before the seen/tick indicator.

Clicking this icon generates a `direct link to that specific message`, including the message UUID.

For example:

`https://c6.avaamo.com/web/#messenger/conversations/71dxxxxxxxxxxxxx03dd?messageUuid=98d150xxx-xxx-xxx-xxx-xx3cc2a7e1`

When you copy a message link and open it, the referenced message is highlighted with a `yellow background` for a few seconds.

This enhancement allows users to quickly copy and share links to individual messages within a conversation for easier troubleshooting, collaboration, and reference.

Refer [Conversation History](/user-guide/how-to/build-agents/debug-agents/conversation-history#conversations), for more information.

### 

Conversation history limited to six months

In this release, the `Conversation History` page has been updated to display only the `last six months of data.`

With this change, conversations older than six months are no longer available in the UI, ensuring alignment with data retention policies.

Refer [Conversation History](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.1. The following are some of the key fixes included in this release:

1.  [Analytics access control in permissions](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1#analytics-access-control-in-permissions)
    
2.  [Date range selection in Agent Metering](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1#date-range-selection-in-agent-metering)
    
3.  [Restrict visibility of unmasked conversational data](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1#restrict-visibility-of-unmasked-conversational-data)
    
4.  [Agentic text default behavior update in Dialog Skill](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1#agentic-text-default-behavior-update-in-dialog-skill)
    
5.  [Six-month limit on conversational data visibility](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1#six-month-limit-on-conversational-data-visibility)
    

### 

Analytics access control in permissions

In this release, an **Analytics option** has been added under **Permissions** to provide more granular access control.

**Note:** This applies to both AI agents and Classic Agents.

With this enhancement, users assigned **Analytics permission** (either `directly` or through a `group`) can access only the following areas:

*   **Getting Started** screen with limited access
    
*   **Debug → Conversation history**
    
*   **Monitor → Analytics:** Users cannot interact with the charts found on the analytics page.
    
*   **Monitor → User journey**
    

This ensures controlled access to analytics and monitoring features while restricting access to other parts of the platform.

Refer [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

### 

Date range selection in Agent Metering

In this release, the `Date range selector` in `Agent Metering` for `Usage Overview` has been enhanced to make it easier to select predefined or custom date ranges.

With this improvement, users can:

*   Select from standard ranges such as **Today, Last 7 Days, Last 14 Days, Last 28 Days**, and more
    
*   Choose a **custom date range** directly from the calendar view
    
*   Quickly filter and analyze usage data based on the selected time period
    

This enhancement improves usability by making it easier to navigate and analyze agent usage trends over specific time intervals.

Refer [Agent Metering](/user-guide/agent-metering/usage-overview#id-2.-usage-over-time), for more information.

### 

Restrict visibility of unmasked conversational data

In this release, a new security enhancement has been introduced to restrict the visibility of conversational data until masking is complete.

With this feature, any conversation containing potentially sensitive data (PII) cannot be displayed across the platform until the masking process is complete.

This feature can be enabled at the company level. Reach out to `Avaamo Support` to enable it for your organization.

**Restricted visibility across the platform:** While masking is in progress, conversational data is hidden in the following areas with the message `Data is under masking process`:

*   Messages within the Conversation History, along with query insights for specific responses
    
*   The results table on the Query Insights page, along with the exported query insights data
    
*   Analytics Overview pages
    
*   JS Errors page
    
*   API responses
    

### 

Agentic text default behavior update in Dialog Skill

In this release, the **Agentic Text** feature in the Dialog Skill for AI Agents is now **disabled by default**. If required, this feature can be enabled on demand by contacting **Avaamo Support**.

Agentic Text enables dynamic, instruction-based response generation within dialog flows, allowing agents to produce more natural and flexible responses compared to static messages.

Refer [Dialog skill](/user-guide/ai-agent/skills/dialog-skill), for more information.

### 

Six-month limit on conversational data visibility

In this release, conversational data older than `six months` is no longer displayed across the platform.

With this enhancement, data beyond the six-month retention window is restricted from visibility in the following areas:

*   [Conversation History](/user-guide/how-to/build-agents/debug-agents/conversation-history)
    
*   [Insights](/user-guide/how-to/build-agents/debug-agents/insights)
    
*   [Analytics Overview screens](/user-guide/how-to/build-agents/monitor-and-analyze/analytics)
    
*   [User Journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey)
    
*   [SMS Gateway Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/sms-gateway-analytics)
    

This ensures better data governance and aligns data visibility with retention policies across the platform.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.2. The following are some of the key fixes included in this release:

1.  [Configurable idle session timeout at prompt skill level](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#configurable-idle-session-timeout-at-prompt-skill-level)
    
2.  [Masked display of user details in conversation history](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#masked-display-of-user-details-in-conversation-history)
    
3.  [Document type exclusion in DataSync ingestion](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#document-type-exclusion-in-datasync-ingestion)
    
4.  [Support for classic agent sessions in Agent Metering](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#support-for-classic-agent-sessions-in-agent-metering)
    
5.  [CIVR channel enhancements for transcripts and function insights](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#civr-channel-enhancements-for-transcripts-and-function-insights)
    
6.  [Auto-closure of inactive transferred sessions](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#auto-closure-of-inactive-transferred-sessions)
    
7.  [Improved email notification feature for DataSync](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2#improved-email-notification-feature-for-datasync)
    

### 

Configurable idle session timeout at prompt skill level

In this release, support has been added to configure `idle session timeout` at the Prompt Skill level for AI Agents.

With this enhancement, users can define the `idle_session_timeout` in `Advanced Settings` at the skill level, allowing more granular control over session behavior.

You can now configure session timeouts at the prompt skill level using advanced parameters:

*   **idle\_session\_timeout\_text\_mins** – for text sessions
    
*   **idle\_session\_timeout\_voice\_mins** – for voice sessions
    

**Key points:**

*   Values are in minutes (supports decimals)
    
*   Defaults: 10 mins (text), 5 mins (voice)
    
*   Range: `0 < value ≤ corresponding limits of Vault variable`
    

This enhancement provides greater flexibility in managing session timeouts for specific use cases while ensuring alignment with system-level constraints.

### 

Masked display of user details in conversation history

In this release, user details are no longer displayed in `Conversation History` until masking is complete.

With this enhancement, when user attributes containing PII are not yet masked:

*   The data is replaced with a placeholder message: `Data is under masking process`
    
*   For masked user attributes, values are displayed as `masked text (XXXX)` matching the original length
    

This behavior applies when real-time masking is enabled, ensuring that sensitive user information is not exposed prematurely. To enable this feature, contact Avaamo support.

### 

Document type exclusion in DataSync ingestion

In this release, an option has been added to `exclude specific document types` during DataSync ingestion and sync processes. Files with selected extensions are excluded from initial ingestion, sync, and auto-sync processes, and even if selected in folder selection, they are not ingested or re-added in subsequent syncs.

With this enhancement, users can select file extensions in the exclude filter to prevent those file types from being ingested. Users can also add custom extensions by typing them.

**Supported content sources and extensions:** This feature applies to file-based sources such as SharePoint, ServiceNow, Salesforce, and Confluence, and supports exclusion of file types, including `.pdf`, `.docx`, `.html`, `.txt`, `.xlsx`, `.xls`, `.csv`, and `.pptx`.

This enhancement provides better control over content ingestion by allowing users to filter out unwanted document types, improving data relevance and efficiency.

### 

**Support for classic agent sessions in Agent Metering**

In this release, conversation sessions for Classic Agents are now included in Agent Metering.

Previously, Agent Metering displayed session data only for AI Agents. With this enhancement:

*   [Usage Overview](/user-guide/agent-metering/usage-overview) of Digital Sessions now includes conversation sessions from both AI Agents and Classic Agents
    
*   Provides a more comprehensive view of overall agent usage
    

This improvement ensures better visibility and unified tracking of session metrics across all agent types.

Refer [Usage Overview](/user-guide/agent-metering/usage-overview), for more information.

### 

CIVR channel enhancements for transcripts and function insights

In this release, enhancements have been made to the `AI Agent CIVR channel` to improve visibility into conversation details.

With this update:

*   The channel now provides `real-time transcription` during interactions
    

*   Clicking the `insights (eye) icon` displays detailed conversation insights
    

*   When functions are invoked, the `function name and its arguments` are shown as part of the `tool parameters`
    

*   You can `download the recordings` of these conversations
    

This enhancement improves debugging and transparency by allowing developers to better understand function execution and conversation flow.

Refer [Conversational IVR (C-IVR) or Phone](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone#test-c-ivr-channel), for more information.

### 

Auto-closure of inactive transferred sessions

In this release, improvements have been made to handle scenarios where `live agent` transferred conversations remain open indefinitely when the user does not return after a transfer.

It also allows developers to build transfer flows without handling idle edge cases and rely on consistent session termination and data for monitoring, testing, and performance evaluation.

Previously, even after summarization and closure were triggered, sessions could remain active if the user did not respond, leading to incomplete session states and missing transcripts.

With this enhancement:

*   Sessions that remain open after transfer are `automatically closed after ~1.5 hours of inactivity`
    
*   The `Session End` event and transcript are generated and made available in `Conversation History`
    

This improvement ensures better session lifecycle management, prevents stale connections, and ensures consistent availability of conversation transcripts.

### 

Improved email notification feature for DataSync

In this release, the `Email Notifier` has been updated with the following enhancements:

*   **Source-level alerts:** Receive notifications when a content source encounters issues such as credential failures, connectivity problems, or other source-level errors.
    

**Note:** This does not include individual document-level failures.

*   **Execution summary:** Get a summary email after each execution completes. If an execution or auto-sync finishes before the scheduled interval, the summary is sent immediately.
    

This enhancement enables teams to proactively monitor and address ingestion issues, improving the reliability of content sync processes in production.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.3. The following are some of the key fixes included in this release:

1.  [Dynamic header for DataSync summary notifications](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#dynamic-header-for-datasync-summary-notifications)
    
2.  [Enhanced document type exclusion in DataSync](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#enhanced-document-type-exclusion-in-datasync)
    
3.  [Document Transformation enhancements in DataSync AI](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#document-transformation-enhancements-in-datasync-ai)
    
4.  [Multilingual document ingestion support in DataSync](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#multilingual-document-ingestion-support-in-datasync)
    
5.  [Improved card width in Microsoft Teams conversation view](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#improved-card-width-in-microsoft-teams-conversation-view)
    
6.  [Mercury 2.0 theme – accessibility capabilities](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3#mercury-2.0-theme-accessibility-capabilities)
    

### 

Dynamic header for DataSync summary notifications

In this release, the `DataSync notification email subject` has been enhanced to dynamically reflect the status of document ingestion.

With this enhancement, the email subject updates based on the current state of documents:

*   **\[REVIEW REQUIRED\]:** Displayed when at least one document is in an error state.
    
*   **\[IN\_PROGRESS\]:** Displayed when documents are queued or currently under processing.
    
*   **\[COMPLETED\]:** Displayed when all documents are either complete, skipped, or in a warning state.
    

This improvement provides clearer visibility into ingestion status directly within the email subject, helping users quickly understand progress and take necessary action.

Refer [Email Notifiers](/user-guide/datasync-ai/content-sources/common-actions/email-notifiers) for more information.

### 

Enhanced document type exclusion in DataSync

In this release, the `document type exclusion` feature in DataSync has been enhanced to provide greater flexibility.

Previously,

*   Document types could only be excluded by selecting from the predefined `Excluded by` dropdown options
    
*   It was not possible to exclude document types beyond the available list
    

Now,

*   You can manually enter file extensions to exclude additional document types, including those not available in the dropdown (such as `.png`, `.aspx`, `.jpg`, `.jpeg`, `.mp4`, `.m4a`), in addition to supported types like `.pdf`, `.docx`, `.doc`, `.pptx`, `.ppt`, `.xls`, `.csv`, `.txt`, and `.html`.
    

This improvement allows better control over ingestion by enabling users to exclude a wider range of document types based on their requirements.

### 

Document Transformation enhancements in DataSync AI

In this release, the `Document Transformation` feature in DataSync AI has been enhanced to provide greater control over document ingestion and metadata management.

**Document filtering based on the document’s last updated date attribute**

With this enhancement, users can filter documents by the last updated date attribute before ingestion.

Key capabilities:

*   Filter documents using date fields such as:
    
    *   `sys_updated_on` for ServiceNow, SharePoint, SalesForce
        
    *   `last_updated_at` for Confluence
        
    *   `last_updated` for web
        
    
*   JS attribute to filter documents based on the last updated date during ingestion
    
*   Ability to provide a clear reason when documents are filtered out
    

**Assigning language via Document Transformation for document ingestion jobs**

You can now bulk-assign or update the `language` attribute for documents using Document Transformation. Users can specify the language at the document or job level within the transformation script.

*   Specify the language at the document or job level within the transformation script
    
*   Documents are ingested successfully when the specified language is added (supported) in the agent
    
*   Documents are marked with an error, and an appropriate message is displayed when the specified language is not added (not supported) in the agent
    

Example:

**Gracefully prevent document ingestion using conditional logic in the post-processing script**

You can now stop document ingestion by returning an `error` key from the post-processing script based on conditional logic.

*   Return an object with an `error` key to stop ingestion for specific documents
    
*   A custom error message appears in the UI for the document whose ingestion has been stopped.
    

Example:

These enhancements improve flexibility and control over document ingestion and metadata handling in DataSync AI.

Refer [Document Transformation](/user-guide/datasync-ai/content-sources/common-actions/document-transformation), for more information.

### 

Multilingual document ingestion support in DataSync

In this release, multilingual document ingestion support has been extended across all DataSync content sources. Previously, multilingual ingestion was supported only for `Web Sitemap` and `Web CSV Upload` sources. With this enhancement, you can now ingest documents in any supported language across additional sources such as:

*   ServiceNow
    
*   SharePoint
    
*   Salesforce
    
*   Confluence
    

**Key capabilities:**

*   **Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.
    

*   **Auto detect language:** You can also use the `Auto Detect Language` toggle if you want the system to automatically identify the language of the uploading documents.
    

This improvement provides greater flexibility in handling multilingual content across enterprise data sources.

### 

Improved card width in Microsoft Teams conversation view

In this release, the `card width` in the Microsoft Teams conversation window has been increased to improve content visibility.

With this enhancement:

*   Cards now utilize a `larger width within the conversation view`
    
*   Improves readability of content such as lists, tables, and quick replies
    
*   Reduces unnecessary vertical scrolling
    

Before

After

This update enhances the usability of cards in Microsoft Teams by making content easier to read and interact with directly within the chat interface.

### 

Mercury 2.0 theme – accessibility capabilities

In this release, the new Mercury 2.0 theme is introduced for web and mobile channels to enhance accessibility.

*   **Semantic HTML rendering:** Content is now rendered using appropriate HTML elements (e.g., `<h1>`, `<h2>`, `<h3>`) by default, ensuring correct structure and improved accessibility
    
*   **ARIA support:** The theme includes proper handling of ARIA attributes such as `aria-label`, `aria-hidden`, and more
    
*   **Improved component accessibility:** Components now inherently support better accessibility behavior, including correct heading levels and keyboard navigation
    

Corrected heading hierarchy in chat iframe ensures proper structure and improved screen reader navigation.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.4. The following are some of the key fixes included in this release:

1.  [Reasoning in Query Insights](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4#reasoning-in-query-insights)
    
2.  [SIP channel enhancements for transcripts and function insights](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4#civr-channel-enhancements-for-transcripts-and-function-insights)
    
3.  [Support for Salesforce record-based recipient lists in Outreach](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4#support-for-salesforce-record-based-recipient-lists-in-outreach)
    
4.  [Confluence DataSync enhancements](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4#confluence-datasync-enhancements)
    
5.  [Outbound SIP Call API](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4#outbound-sip-call-api)
    

### 

Reasoning in Query Insights

In this release, `reasoning` has been added to `Query Insights` to provide better visibility into why specific chunks were selected and used to generate the response.

**Note:** This applies to both the `web channel` and `Conversation History`.

**With this enhancement, users can:**

*   View `chunk-level reasoning` within Query Context
    
*   Understand why specific chunks were selected for answer generation
    
*   Access reasoning using the `View reasoning` option in Query Context
    
*   View reasoning across both `real-time interactions` and `historical conversations`
    

Reasoning is dynamically generated and fetched from the `LLaMB layer`, ensuring alignment with the retrieval and response logic.

This enhancement improves transparency, trust, and explainability by showing how responses are generated, while also helping debug issues and ensuring the right context is used.

**To view this in the web channel:**

*   Click the `eye icon` in the conversation to open Insights. Click `Query Insights` and navigate to `Query Context.`
    

*   Click `View reasoning`**.** The window refreshes and generates reasoning for each chunk. Select a chunk labeled `Strong match` or `Match`
    
*   View the `reasoning` displayed as an note, explaining why the chunk was selected for generating the answer
    

Refer [Query insights](/user-guide/llamb/get-started/step-3-test-your-agent#query-context), for more information.

### 

SIP channel enhancements for transcripts and function insights

In this release, enhancements have been made to the `SIP channel` to improve visibility into conversation details.

With this update:

*   The channel now provides `real-time transcription` during interactions
    

*   Clicking the `insights (eye) icon` displays detailed conversation insights
    

*   When functions are invoked, the `function name and its arguments` are shown as part of the `tool parameters`
    

*   You can `download the recordings` of these conversations
    

This enhancement improves debugging and transparency by allowing developers to better understand function execution and conversation flow.

### 

**Support for Salesforce record-based recipient lists in Outreach**

In this release, we have introduced support for configuring `Salesforce` reports as `recipient lists` in `Outreach`.

Users can create recipient lists by configuring the Salesforce connection along with the corresponding Salesforce Report ID. During campaign creation, the configured Salesforce recipient list can be selected directly.

At runtime, the campaign fetches recipient data directly from the Salesforce report and delivers campaign messages to the retrieved recipients.

This enhancement simplifies recipient list management by enabling seamless integration with Salesforce report data for Outreach campaigns.

Refer [Create a new recipient list](/user-guide/outreach/recipient-lists#create-a-new-recipient-list), for more information.

### 

Confluence DataSync enhancements

In this release, a few enhancements have been made to improve the reliability and usability of Confluence ingestion in DataSync.

With this enhancement:

*   Users can now update invalid or expired API tokens using the new `Update` option without recreating the Confluence job under [Job details](/user-guide/datasync-ai/content-sources/common-actions/view-job-details) option.
    

*   After updating the token and running `Sync Now`, previously selected documents are re-ingested successfully
    
*   Confluence tree loading is optimized with `lazy loading`, where child nodes are fetched only when expanded.
    
*   A loading indicator is displayed while fetching child nodes during tree expansion
    

These enhancements improve ingestion reliability, simplify token management, and provide a smoother browsing and sync experience for Confluence content sources.

### 

Outbound SIP Call API

In this release, new REST APIs have been introduced to:

*   **Outbound Call API:** Initiate outbound SIP calls using a BYO carrier model
    
*   **Calls insights API:** Retrieve outbound call insights with filtering and pagination support
    

Create (POST)

Get (GET)

The Calls Insights API supports filtering using parameters such as `status`, `conversation_uuid`, `call_sid`, `to_phone`, `from_phone`, `start_time`, and `end_time`.

See [Outbound SIP Call API](/user-guide/ref/avaamo-platform-api-documentation/outbound-sip-call-api), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.5. The following are some of the key fixes included in this release:

1.  [Support for adding additional URLs in Web CSV content sources](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5#support-for-adding-additional-urls-in-web-csv-content-sources)
    
2.  [Masking support for LLaMB content](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5#masking-support-for-llamb-content)
    
3.  [Updated default masking behavior for non-production agents](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5#updated-default-masking-behavior-for-non-production-agents)
    
4.  [LLaMB Reasoning API](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5#llamb-reasoning-api)
    
5.  [Added support for programmatically initiating outbound calls via the C-IVR channel](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5#added-support-for-programmatically-initiating-outbound-calls-via-the-c-ivr-channel)
    

### 

Support for adding additional URLs in Web CSV content sources

In this release, the `Web CSV` content source in DataSync has been enhanced with an `Add URLs` option, enabling users to add additional URLs to an existing content source job without creating a new one.

**Note:** URLs added to a Web CSV content source are ingested during the next [Sync Now](/user-guide/datasync-ai/content-sources/common-actions/sync-now) or [Auto Sync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync) operation.

With this enhancement:

*   Users can now append additional URLs to an existing Web CSV content source
    
*   Eliminates the need to create separate source groups for incremental URL additions
    

This improvement streamlines the process of managing and scaling Web CSV-based content ingestion.

Refer [Add URLs](/user-guide/datasync-ai/content-sources/common-actions/add-urls), for more information.

### 

Masking support for LLaMB content

In this release, an option has been added to control masking behavior for `LLaMB queries and responses.`

**Note:** Contact Avaamo support to enable this option.

With this enhancement:

*   When `Mask LLaMB Content` is `enabled`, LLaMB queries and responses are masked, including citations containing PII data
    

This enhancement provides better control over the visibility of sensitive information in LLaMB-generated content.

### 

Updated default masking behavior for non-production agents

In this release, the default masking behavior for non-production agents has been updated to simplify development and testing workflows.

With this enhancement:

*   Masking is `disabled by default` for newly created agents in the `Development` stage
    
*   The default `retention period` is now set to `10 minutes`
    
*   When promoting agents:
    
    *   From `Development → Staging,` existing masking configurations are retained except for the `enabled` flag
        
    *   From `Staging → Production`, masking is automatically enabled with default configurations
        
    
*   During Pull updates:
    
    *   Test and Staging environments retain previous masking configurations except for the `enabled` flag
        
    *   Production configurations are not overridden
        
    
*   When copying an agent, masking is disabled by default
    
*   During `Export`/`Import`, the masking configurations from the imported agent are not carried forward. The existing masking configuration of the base agent is retained
    

This enhancement provides a more streamlined development experience while ensuring that masking is effectively enforced in production environments.

### 

LLaMB Reasoning API

In this release, support has been added for the `LLaMB Reasoning API,` enabling users to fetch the relevancy analysis directly using the `Agent ID` and `Message UUID`.

This API provides detailed reasoning for why specific chunks were considered for the generated response.

Create (POST)

This enhancement helps developers better understand answer generation and improve debugging, relevancy analysis, and content validation in LLaMB.

See [LLaMB Reasoning API](/user-guide/llamb/llamb-rest-apis/llamb-reasoning-api), for more information.

### 

Added support for programmatically initiating outbound calls via the C-IVR channel

In this release, the C-IVR channel has been enhanced with support for programmatically initiating outbound calls using generated sample cURL and HTTP requests. After saving the C-IVR channel, these sample requests are automatically generated and can be used to initiate outbound calls.

With this enhancement:

*   Users can programmatically initiate outbound calls through the C-IVR channel
    
*   Sample cURL and HTTP requests are automatically generated after channel creation
    
*   Simplifies outbound call configuration and testing workflows for C-IVR channels
    

This enhancement improves the outbound calling experience for C-IVR by simplifying API-based outbound call initiation workflows.

Refer [Conversational IVR (C-IVR) or Phone](/user-guide/ai-agent/configuration/channels/conversational-ivr-c-ivr-or-phone), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.6

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 10.0.6. The following are some of the key fixes included in this release:

1.  [Document error alerts for DataSync](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.6#document-error-alerts-for-datasync)
    
2.  [Disable citation link security for AI Agent responses](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.6#disable-citation-link-security-for-ai-agent-responses)
    

### 

Document error alerts for DataSync

In this release, `Document Error Alerts` have been added to `Email Notifiers` for DataSync content sources, enabling users to receive notifications when individual documents fail during ingestion.

Email notifications were limited to source-level issues and execution summaries. With this enhancement, users can now monitor and receive alerts for document-level ingestion failures.

**Note:** This feature is not applicable for `Files` content source

With this enhancement:

*   A new `Document Error Alerts` option is available under `Email Notifiers`
    
*   Users receive notifications when an individual document fails to ingest
    
*   Notifications are sent to the email addresses configured for the content source
    
*   Document-level errors are also logged and available on the [JS Errors](/user-guide/how-to/build-agents/debug-agents/js-errors) page for troubleshooting and analysis
    

**Default behavior**

*   **For new content sources**, Document Error Alerts are enabled by default
    
*   **For** **existing content sources**, users must manually enable Document Error Alerts to receive notifications
    

This enhancement provides greater visibility into document ingestion issues, enabling users to identify and resolve content-specific failures more efficiently.

Refer [Email Notifiers](/user-guide/datasync-ai/content-sources/common-actions/email-notifiers), for more information.

### 

Disable citation link security for AI Agent responses

In this release, AI Agents have been enhanced with an option to `disable citation link security`, providing greater flexibility in how citation links are accessed and shared.

Previously, citation links generated in responses expired 24 hours after generation to ensure secure and controlled access. With this enhancement, you can disable citation link expiration when persistent access to citations is required.

**Key highlights**

*   Disable citation link security from `Configuration` \> `Settings`
    
*   By default, citation links continue to expire after 24 hours
    
*   Useful for debugging, troubleshooting, and sharing persistent references with users
    

**Note:** It is recommended to keep citation link security enabled to maintain secure and controlled access to citation content.

This enhancement provides more flexibility in managing and sharing citation links generated by AI Agents

See [Advanced features](/user-guide/ai-agent/configuration/settings#advanced-features), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-the-dialog-skill-for-ai-agents

The `Dialog Skill` introduces a new way to design conversational experiences for AI Agents by combining the strengths of deterministic dialogue flows with the flexibility of **agentic AI behavior**.

It enables developers to build structured, predictable conversation flows while still allowing the agent to respond intelligently to varied and natural user inputs. This approach bridges the gap between traditional rule-based dialogues and modern AI-driven interactions.

### 

How Dialog Skill works

The Dialog Skill operates by combining `prompt-based orchestration` with structured dialogue flows:

*   A `Prompt Skill` acts as the orchestrator.
    
*   Based on user input, the orchestrator dynamically routes the request to the appropriate `dialogue flow`.
    
*   Within the flow, the agent follows a structured path while still generating intelligent responses where required.
    

This hybrid model ensures both control and flexibility in handling conversations.

### 

Key highlights

#### 

Deterministic yet agentic behavior

Dialog Skill combines predefined dialogue flows with AI-driven decision-making. This allows agents to handle complex scenarios reliably while still adapting to varied user inputs.

#### 

Prompt-based orchestration

Conversations begin with a Prompt Skill that dynamically routes user queries to the correct dialogue flow. This ensures the right flow is triggered without relying on rigid mappings.

#### 

Instruction-driven flow invocation

Instead of using fixed training sentences, Dialog Skill uses **instructions** to determine when to invoke a flow. This enables more natural intent recognition and broader coverage of user queries.

#### 

Agentic text responses

Dialog Skill introduces **agentic text responses**, which generate dynamic replies based on instructions rather than static predefined messages. This improves the naturalness and variability of responses.

#### 

Enhanced entity handling

Entities can be defined using:

*   Simple descriptions
    
*   Custom JavaScript-based extraction logic
    

This provides greater flexibility and control over how user inputs are interpreted within flows.

#### 

Seamless flow transfers

Dialog Skill supports smooth transitions between different dialogue flows. This ensures that conversations can move across multiple flows without losing context.

#### 

Text-based support

Dialog Skill is currently supported for **text channels**, while maintaining compatibility with existing dialogue capabilities.

### 

Benefits

The Dialog Skill enables teams to:

*   Build **structured and predictable conversation flows**
    
*   Handle **complex, real-world user interactions**
    
*   Improve **intent matching using flexible instructions**
    
*   Create **dynamic and natural responses**
    
*   Maintain **control over conversation logic while leveraging AI flexibility**

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-multi-agent-architecture-in-avaamo

Avaamo’s **multi-agent architecture** enables multiple AI agents to collaborate to complete complex tasks within an enterprise environment. Instead of relying on a single agent to handle all responsibilities, this approach allows different agents to specialize in specific domains such as authentication, data retrieval, workflow execution, and integrations.

With built-in orchestration, Avaamo ensures that these agents work together seamlessly while maintaining a unified conversational experience for the user.

### 

Key highlights

#### 

Centralized orchestration

A **master agent** serves as the central coordinator, analyzing user requests and routing them to the appropriate specialized agents, ensuring a smooth, controlled interaction flow.

#### 

Specialized agents for domain tasks

Multiple **child agents** handle specific domains such as IT, HR, or procurement. Each agent focuses on its area of expertise, improving accuracy and efficiency.

#### 

Seamless agent collaboration

Agents do not communicate directly with each other. Instead, all interactions are routed through the master agent, preserving conversation context and ensuring consistency.

#### 

Context-aware interactions

The master agent maintains shared conversation context, including user data, session history, and workflow state, enabling smooth transitions between agents.

#### 

Instant agent transfer

Supports **instant transfer** between agents, allowing immediate invocation of the next agent without intermediate responses, improving responsiveness and user experience.

### 

Benefits

Multi-agent architecture provides:

*   Scalable handling of complex enterprise workflows
    
*   Improved accuracy through domain-specific agents
    
*   A unified user experience across multiple services
    
*   Efficient routing and execution of tasks
    
*   Seamless context preservation across interactions
    

Refer [Multi-agent architecture in Avaamo](/user-guide/ai-agent/skills/prompt-skill/multi-agent-architecture-in-avaamo), for more information

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-conversational-intelligence-ci

`Conversational Intelligence (CI)` is an AI-driven analytics capability that provides deep insights into customer interactions across digital and voice channels. It enables organizations to analyze conversations at scale and understand how users interact with their agents.

CI works across `Classic Agents,` `AI Agents,` and `Agent Copilot`, offering a unified and centralized analytics layer for monitoring, analyzing, and improving conversational experiences.

### 

How Conversational Intelligence works

Conversational Intelligence analyzes the entire conversation, including transcripts and call metadata, to understand the context, user intent, and sentiment behind interactions. Instead of relying on predefined tags or rigid conversation flows, it uses AI to interpret natural conversations and generate meaningful insights.

This approach makes CI particularly effective for modern conversational systems where interactions are dynamic, non-linear, and driven by AI agents.

### 

Key capabilities

#### 

AI-driven conversation analysis

CI analyzes complete conversation transcripts and related metadata to identify patterns such as user intent, sentiment, and conversation outcomes. This enables a deeper understanding of customer interactions without requiring manual tagging.

#### 

Designed for modern AI conversations

Traditional analytics systems rely on predefined conversation trees and tagging. CI adapts to fluid, AI-driven conversations, making it well-suited to analyzing interactions generated by AI agents.

#### 

Centralized analytics platform

CI provides a single analytics layer across all bots and communication modes. This eliminates the need for custom tagging frameworks or external analytics tools.

#### 

Chat with your data

Users can interact with analytics data through a conversational interface, allowing them to ask questions about trends, user behavior, or conversation outcomes and receive AI-generated insights.

#### 

Weekly insight emails

Automated weekly summaries provide stakeholders with a snapshot of key metrics and emerging trends without requiring manual analysis.

#### 

Rich insights and reporting

CI includes visualization and reporting capabilities such as:

*   Interactive charts and dashboards
    
*   Date-based filtering for analyzing trends
    
*   Automated weekly summary emails
    

These features help teams track performance and identify opportunities for improvement.

### 

Benefits

Conversational Intelligence provides an AI-first analytics framework that enables teams to:

*   Understand user behavior and conversation patterns
    
*   Identify issues and opportunities in customer interactions
    
*   Improve agent performance and user experience
    
*   Analyze conversations across channels from a single platform
    

By replacing legacy tagging approaches with an intelligent analytics layer, CI helps organizations generate accurate, actionable insights from every conversation.

Refer [Conversational Intelligence](/user-guide/conversational-intelligence-ci/overview), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-new-content-sources-for-datasync

DataSync enables organizations to ingest and manage knowledge from multiple sources, ensuring AI Agents access accurate, up-to-date information. With this update, DataSync expands its ingestion capabilities by introducing `new enterprise content sources` and refining the way website content is ingested.

These enhancements allow teams to connect additional knowledge repositories and provide better control over how web content is imported into the platform.

## 

What’s new in DataSync content sources

The following improvements have been introduced to expand and streamline content ingestion:

*   **New enterprise content sources**
    
    *   [Salesforce](/user-guide/datasync-ai/content-sources/salesforce)
        
    *   [Confluence](/user-guide/datasync-ai/content-sources/confluence)
        
    
*   **Refined web content ingestion:** Website ingestion has been split into two dedicated content sources:
    
    *   [Web Sitemap](/user-guide/datasync-ai/content-sources/web-sitemap)
        
    *   [Web CSV Upload](/user-guide/datasync-ai/content-sources/web-csv-upload)
        
    

These changes improve how organizations connect their knowledge systems and manage website-based content.

### 

Salesforce content source

The `Salesforce content source` enables organizations to ingest knowledge from Salesforce systems. This enables AI Agents to retrieve information from Salesforce knowledge bases and make it available during conversations.

#### 

Benefits

*   Access Salesforce knowledge articles within AI Agent responses
    
*   Centralize customer support and operational knowledge
    
*   Keep AI responses aligned with Salesforce documentation
    

### 

Confluence content source

The `Confluence content source` enables DataSync to ingest documentation stored in Confluence spaces. This is particularly useful for organizations that maintain product documentation, internal knowledge, or operational guides within Confluence.

#### 

Benefits

*   Ingest structured documentation from Confluence spaces
    
*   Make internal documentation searchable by AI Agents
    
*   Provide accurate answers based on internal knowledge repositories
    

### 

Web Sitemap content source

The `Web Sitemap` content source allows you to ingest website content using a sitemap file. DataSync scans the sitemap and lists all available webpages so that you can review and select the pages to ingest.

#### 

Capabilities

*   Discover all URLs available in a sitemap
    
*   Select specific webpages for ingestion
    
*   Preview webpages before ingestion
    
*   Filter or whitelist pages when needed
    

This method is useful for ingesting entire sections of a website or large documentation portals.

### 

Web CSV Upload content source

The `Web CSV Upload` content source allows you to ingest webpages by uploading a CSV file that contains a list of URLs.

#### 

Capabilities

*   Upload a CSV file containing URLs
    
*   Assign custom names to URLs during ingestion
    
*   Select only specific pages to ingest
    

This method is useful when you want to ingest specific webpages instead of an entire sitemap.

## 

Key points

*   **New enterprise integrations:** Salesforce and Confluence are now available as content sources for ingesting knowledge.
    
*   **Improved website ingestion:** The earlier Website content source has been split into two dedicated sources, `Web Sitemap` and `Web CSV Upload`.
    
*   **Flexible web ingestion workflows:** Choose between sitemap-based discovery or uploading a CSV file containing specific URLs.
    
*   **Better knowledge coverage:** AI Agents can access knowledge from enterprise documentation systems and websites.
    
*   **Centralized knowledge management:** Content from multiple repositories can be ingested and managed through DataSync.
    

### 

Next steps

1.  Start by understanding [Overview](/user-guide/datasync-ai/overview-key-features) in the DataSync AI.
    
2.  Understand what is required in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
3.  You are now ready to ingest using [Content sources](/user-guide/datasync-ai/content-sources) by exploring DataSync AI in the Avaamo Conversational AI Platform.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-document-transformation-support-in-datasync

**Document Transformation** in DataSync enables dynamic assignment and modification of document metadata using custom JavaScript logic. This capability provides greater control over how metadata is generated, updated, and managed during and after the ingestion process.

With this feature, developers can define logic to automatically assign attributes such as **location, category, or other metadata fields**, as well as update key properties like the `document name and preview URL.` These values become part of the document metadata and can be used for `filtering, authorization, search relevance,` and `downstream agent logic.`

### 

Key highlights

#### 

Enable document transformation

You can enable Document Transformation in DataSync configuration to start using custom JavaScript for attribute assignment.

#### 

Dynamic attribute assignment using JavaScript

Use JavaScript to evaluate document metadata and assign attributes based on custom logic. For example, you can derive a location attribute based on document identifiers or content.

#### 

Post-ingestion attribute updates

If attributes were not configured during ingestion, or if updates are required for already ingested documents, you can use Document Transformation to apply or modify attributes during a sync run.

#### 

Test transformation logic

You can validate your JavaScript logic before applying changes. This helps ensure that attributes are correctly generated and applied during sync operations.

#### 

View and export attributes

You can review applied attributes using the `View document attributes` option. Attributes can also be `exported as a CSV file` for auditing, troubleshooting, and further analysis.

#### 

Debug and logs

Logs generated from your JavaScript code are available in the `debug logs`, allowing developers to monitor execution and troubleshoot issues effectively.

#### 

Controlled application of changes

Transformation logic is executed only during `Sync Now` or `Auto Sync` operations. Changes are applied after the sync completes, ensuring safe and consistent updates.

#### 

Error handling

If errors occur in the JavaScript logic:

*   Documents with missing or invalid critical attributes are marked with an **error status**
    
*   This prevents unintended exposure of improperly configured documents
    
*   Detailed error information is available in the **JavaScript extension error logs**
    

### 

Benefits

Document Transformation provides:

*   Flexible metadata management using custom logic
    
*   Ability to `dynamically assign` and `update attributes`
    
*   Improved control over `search relevance` and `access control`
    
*   Enhanced debugging and validation capabilities

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/add-your-own-llm-and-tts-providers

The `Add your own LLM and TTS providers` capability allows organizations to integrate their preferred Large Language Model (LLM) and Text-to-Speech (TTS) providers into the platform. This enables teams to customize AI capabilities based on their infrastructure, performance requirements, or compliance policies.

With this feature, developers can configure external AI providers and use them for generating responses and voice output within AI Agents.

### 

Key points

*   **Custom AI provider integration:** Configure and use your own LLM and TTS providers instead of relying only on default platform models.
    
*   **Flexible model selection:** Choose specific models and endpoints based on performance, latency, or cost requirements.
    
*   **Centralized configuration:** Manage custom AI providers from a single configuration interface.
    
*   **Voice customization:** Configure external TTS providers to control voice output for voice-enabled agents.
    
*   **Enterprise-ready integration:** Supports integration with enterprise-hosted or third-party AI services.
    

### 

LLM configuration

You can configure your own **LLM provider** by specifying the required connection details.

Typical configuration parameters include:

*   **Provider:** The LLM provider to use.
    
*   **Model:** The model name used for generating responses.
    
*   **Endpoint:** The API endpoint used to access the model.
    
*   **Deployment name:** The deployment identifier for the configured model.
    
*   **API version:** The API version supported by the provider.
    
*   **API key:** Authentication key used to access the provider.
    

Once configured, the selected LLM can be used by AI Agents to generate responses during conversations.

Refer [LLM configuration](/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm#llm-configuration), for more information.

### 

TTS configuration

The platform also supports configuring **custom Text-to-Speech providers** for voice-enabled interactions. This allows organizations to control how agent responses are converted into spoken audio.

Typical configuration parameters include:

*   **Provider:** The TTS service provider.
    
*   **Model:** The voice model used for speech generation.
    
*   **Endpoint:** API endpoint for the TTS service.
    
*   **Deployment name:** The configured deployment identifier.
    
*   **API version:** API version used by the provider.
    
*   **API key:** Authentication key for accessing the service.
    

These settings determine how the agent generates spoken responses during voice interactions.

Refer [TTS configuration](/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm#tts-configuration), for more information.

### 

Force configuration option

When configuring custom LLM or TTS providers, a **Force** toggle is available. This option allows the custom configuration to override existing instance-level settings.

*   If **Force is disabled**, the system continues using the instance-level configuration.
    
*   If **Force is enabled**, the system overrides the instance-level configuration and uses the custom provider settings configured at the company level.
    

**Note:** The Force option does not apply to the LLaMB configuration section.

### 

Benefits

Using custom LLM and TTS providers allows organizations to:

*   Integrate AI services that align with internal policies
    
*   Optimize performance and latency based on deployment needs
    
*   Maintain control over AI infrastructure
    
*   Customize voice output for conversational experiences
    

This capability provides greater flexibility for organizations building AI-powered conversational experiences on the platform.

Refer [LLM settings - Add your own LLM](/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-agent-metering

`Agent Metering` provides real-time visibility into AI agent usage across Voice and Digital communication modes. It enables teams to monitor session consumption, understand interaction patterns, and proactively manage usage to ensure smooth and reliable operations.

With Agent Metering, organizations can track how their agents are used, identify trends, and avoid unexpected usage overruns by gaining better visibility and control.

### 

How Agent Metering works

Agent Metering captures and aggregates usage data across different communication modes, providing a centralized view of agent activity. It helps teams understand:

*   How many sessions are being consumed
    
*   How usage is trending over time
    
*   Where usage thresholds are being approached
    

This enables proactive monitoring and improved operational planning.

### 

Key components

Agent Metering consists of two main sections:

#### 

Usage Overview

The **Usage Overview** section provides a real-time view of usage and quota status across Voice and Digital communication modes.

It includes:

*   **Session counts** for both communication modes
    
*   **Usage trends over time** to analyze patterns
    
*   **Detailed session-level insights** to monitor agent activity
    

This helps teams track consumption and make informed decisions about usage and scaling.

#### 

Notification Setup

The **Notification Setup** section allows you to configure alerts based on usage thresholds.

You can:

*   Set **threshold values** for usage
    
*   Configure **email notifications**
    
*   Monitor usage across **Voice and Digital communication modes**
    

Notifications are triggered when configured thresholds are reached, helping teams take timely action.

### 

Benefits

Agent Metering enables organizations to:

*   Gain **real-time visibility** into agent usage
    
*   Monitor and analyze **interaction patterns**
    
*   **Proactively manage quotas** and avoid overages
    
*   Ensure **reliable agent operations**
    
*   Stay informed through **automated notifications**

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v10.0.0/introducing-mcp-channel

The **MCP (Model Context Protocol) channel** enables external AI systems to connect to and interact with Avaamo AI Agents. This allows organizations to integrate their agents into broader AI ecosystems and make them accessible from external tools and platforms.

**Note:** The MCP channel is supported only for **AI Agents**.

### 

How the MCP channel works

The MCP channel provides a way to expose an AI Agent as an endpoint accessible to MCP-compatible clients. By generating an **MCP URL**, you can connect external AI systems—such as conversational tools or AI applications—to your Avaamo agent.

Once connected, external systems can invoke the agent and leverage its capabilities within their own workflows.

### 

Key capabilities

#### 

External AI integration

The MCP channel allows external AI tools to interact directly with Avaamo agents, enabling seamless integration with existing AI workflows.

#### 

MCP URL-based access

Each agent configured with the MCP channel provides a **unique MCP URL** that can be used to connect to compatible clients.

#### 

Compatibility with MCP clients

Supports integration with **MCP-compatible clients**, allowing agents to be used across different AI platforms and tools.

#### 

Centralized control

Even when accessed externally, agent behavior, workflows, and responses remain managed within the Avaamo platform, ensuring consistency and governance.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0

The Avaamo Conversational AI Platform 9.0.0 release includes two new features and 25 enhancements.

## 

New features

### 

Introducing DataSync AI 2.0

In this release, DataSync AI is updated to version 2.0, introducing several enhancements designed to make the feature more effective and easier to use.

Refer [DataSync AI,](/user-guide/recent-releases/release-notes-v9.1.0/introducing-the-datasync-2.0) for more information.

### 

Knowledge skill 2.0

In this release, Knowledge Skill integrates with DataSync 2.0 to align seamlessly with AI agents. This enables direct ingestion of knowledge articles into the skill without creating an LLaMB skill or document group.

Refer [Knowledge skill](/user-guide/recent-releases/release-notes-v9.1.0/introducing-knowledge-skill-2.0), for more information.

## 

Enhancements

These enhancements are categorized according to the modules within the Avaamo Conversational AI Platform for streamlined navigation.

This release includes enhancements related to the following existing features:

Module

Enhancements

AI Agents

*   [Outreach support for AI agents](/user-guide/recent-releases/release-notes-v9.1.0#outreach-support-for-ai-agents)
    
*   [Microsoft Teams outreach support for AI agents](/user-guide/recent-releases/release-notes-v9.1.0#microsoft-teams-outreach-support-for-ai-agents)
    
*   [Enhanced chat experience with file uploads](/user-guide/recent-releases/release-notes-v9.1.0#enhanced-chat-experience-with-file-uploads)
    
*   [Flexible configuration for text-to-speech providers](/user-guide/recent-releases/release-notes-v9.1.0#flexible-configuration-for-text-to-speech-providers)
    
*   [Personalized onboarding with welcome messages](/user-guide/recent-releases/release-notes-v9.1.0#personalized-onboarding-with-welcome-messages)
    
*   [Guided follow-up experience in conversations](/user-guide/recent-releases/release-notes-v9.1.0#guided-follow-up-experience-in-conversations)
    
*   [Enhanced fallback management with auto call forwarding](/user-guide/recent-releases/release-notes-v9.1.0#enhanced-fallback-management-with-auto-call-forwarding)
    
*   [Webex channel for AI-powered interactions](/user-guide/recent-releases/release-notes-v9.1.0#webex-channel-for-ai-powered-interactions)
    
*   [Selective knowledge skill updates between stages](/user-guide/recent-releases/release-notes-v9.1.0#selective-knowledge-skill-updates-between-stages)
    
*   [Multi-language support for CIVR campaigns](/user-guide/recent-releases/release-notes-v9.1.0#multi-language-support-for-civr-campaigns)
    
*   [Collect user feedback on agent responses](/user-guide/recent-releases/release-notes-v9.1.0#collect-user-feedback-on-agent-responses)
    
*   [Enhanced troubleshooting with debug logs](/user-guide/recent-releases/release-notes-v9.1.0#enhanced-troubleshooting-with-debug-logs)
    
*   [Improved live agent session termination](/user-guide/recent-releases/release-notes-v9.1.0#improved-live-agent-session-termination)
    
*   [Configuration control for Hybrid SDK](/user-guide/recent-releases/release-notes-v9.1.0#configuration-control-for-hybrid-sdk)
    
*   [Additional enhancements for AI Agent experience](/user-guide/recent-releases/release-notes-v9.1.0#additional-enhancements-for-the-ai-agent-experience)
    

LLaMB

*   [Disclaimer note support for long responses](/user-guide/recent-releases/release-notes-v9.1.0#disclaimer-note-support-for-long-responses)
    
*   [Improved content extraction in document uploads](/user-guide/recent-releases/release-notes-v9.1.0#improved-content-extraction-in-document-uploads)
    
*   [Multilingual support for soft unhandled messages](/user-guide/recent-releases/release-notes-v9.1.0#multilingual-support-for-soft-unhandled-messages)
    
*   [Smart intent disambiguation for multiple skill matches](/user-guide/recent-releases/release-notes-v9.1.0#smart-intent-disambiguation-for-multiple-skill-matches)
    
*   [Markdown rendering enabled by default for new channels](/user-guide/recent-releases/release-notes-v9.1.0#markdown-rendering-enabled-by-default-for-new-channels)
    

MS Teams

*   [Formatting flexibility for Teams channel responses](/user-guide/recent-releases/release-notes-v9.1.0#formatting-flexibility-for-teams-channel-responses)
    
*   [Support for single-tenant bots in Microsoft Teams](/user-guide/recent-releases/release-notes-v9.1.0#support-for-single-tenant-bots-in-microsoft-teams)
    

Agent configuration

[JS errors page: Improved error classification](/user-guide/recent-releases/release-notes-v9.1.0#js-errors-page-improved-error-classification)

**Deprecation and removal notice**: See [Deprecated and removed features,](/user-guide/deprecated-and-removed-features/v9.1.0-deprecated-features) for a complete list

of all the deprecated and removed features in the `v9.1.0` release.

## 

AI Agents enhancements

### 

Outreach support for AI agents

In this release, Outreach has been enhanced to support AI Agents in voice campaigns, enabling two-way, context-aware conversations with users. The AI Agent connection is established only after the recipient’s first response, ensuring a more natural and seamless interaction.

**Note:** Outreach capacity depends on client-specific concurrent call quotas, which can be expanded as needed.

This enhancement expands the use of Outreach for scenarios such as appointment scheduling, service reminders, and other interactive engagements.

Refer [Outreach](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel), for more information.

### 

Microsoft Teams outreach support for AI agents

In this release, AI Agents can now be integrated with Outreach in Microsoft Teams, enabling agents to send proactive messages and engage users directly in Microsoft Teams channels for more seamless, interactive communication.

Refer [Outreach](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel), for more information.

### 

Enhanced chat experience with file uploads

In this release, AI Agents have been enhanced to support file uploads in both the Web channel and Microsoft Teams. Users can share documents directly during conversations.

This enhancement enhances the user experience by enabling a more seamless, interactive chat. The AI Agent can then analyze the uploaded content to provide relevant responses, extract key information, or perform actions based on the file’s content.

#### 

**Web channel:**

*   File uploads can be enabled via input cards in the AI Agent flow.
    
*   Create and execute the upload card function to display it in the Web channel.
    

*   When a user submits the card, the LLM receives `**#avm-card-submitted**`. Ensure the prompt includes a section to handle this event and invoke a function to access the uploaded file via `**context.last_message**`.
    
*   Uploaded files can be viewed later. Refer to the [File upload](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload), for detailed instructions on viewing uploaded documents.
    

#### 

**Microsoft Teams:**

*   Users can upload files directly within Teams channels by clicking the **\+ icon** and selecting **Attach file**.
    

*   AI Agents can then access and process the uploaded documents within the conversation.
    

### 

Flexible configuration for text-to-speech providers

In this release, we have enhanced the platform to support various Text-to-Speech (TTS) providers, including **Piper**, **ElevenLabs**, and **Google**. This enhancement provides greater flexibility to choose the preferred provider for generating high-quality voice output.

To configure, go to the **Skill** page, select the desired prompt skill, open **Advanced Settings**, and choose the preferred provider from the **Voice Persona** dropdown.

Refer [Advanced Settings,](/user-guide/ai-agent/skills/prompt-skill/advanced-settings) for more information.

### 

Personalized onboarding with welcome messages

In this release, we have enhanced AI Agents to configure welcome messages across the Web, MS Teams, iOS, and Android channels. The greeting skill can display text, card, or quick-reply type messages at the start of a conversation, providing a more engaging and guided user experience.

This feature helps end users by providing clear guidance at the start of interactions, setting expectations, and offering quick access to standard options.

Go to the **Skills** page and locate the **Welcome message** skill.

Refer [Welcome message](/user-guide/ai-agent/skills/built-in-skills#welcome-skill), for more information.

### 

Guided follow-up experience in conversations

In this release, we have enhanced AI Agents to support **outro messages**, enabling agents to send a **custom follow-up response** after a tool function is executed. Outro messages help make conversations more natural and engaging by providing **relevant suggestions or next steps** without interrupting the main response flow.

For example, after a user books a flight from Delhi to Bangalore, the agent can display the primary response and then send an outro message like:

*   “Do you want to book a return ticket?”
    
*   “Would you like to book a hotel in Bangalore?”
    

This feature guides users toward related actions and enhances the overall conversational experience.

Go to the **Skills** page and locate the **Outro message** skill.

Refer [Outro message](/user-guide/ai-agent/skills/built-in-skills#outro-message), for more information.

### 

Enhanced fallback management with auto call forwarding

In this release, we have enhanced AI Agents with the **Auto call forward** feature to improve error handling and fallback management. This feature allows developers to define a [custom error handler](/user-guide/ai-agent/configuration/settings#error-handler) that dynamically forwards calls or messages when a system error occurs.

The feature has been enhanced to support dynamic values in Forward Headers, allowing the use of storage variables or JavaScript blocks for scenarios such as passing the caller's phone number.

**Use cases include:**

1.  **Call forwarding:** When the system fails, forward the call to a specific number defined in the Error Handler.
    
    Use the function `return SmartCall.forward(<from>, <to>)` to forward a call to a particular number if the system fails to continue the call. Example:
    
2.  **Call hang-up:** When the system fails, gracefully disconnect the call by specifying a return message.
    
    Use the function `return SmartCall.hangup()` to disconnect the call if the system fails to continue. Example:
    
3.  **Return message for text-based bots:** If the bot is text-based, you can also discontinue the session with a custom message.
    
    Use the function `return { message: {} }` to display a message if the system fails to continue the chat. Example:
    

This enhancement helps **end users** by ensuring a smooth experience even when errors occur, either by forwarding calls, gracefully disconnecting, or providing clear fallback messages.

### 

Webex channel for AI-powered interactions

In this release, we are excited to introduce `Webex channel support`, enabling seamless bot-to-user communication through Webex, a widely used enterprise collaboration platform. This enhancement helps end users by allowing them to interact with AI Agents directly within Webex, reducing the need to switch platforms and enabling faster, context-aware communication.

The Webex channel enables AI Agents to deliver a smooth, interactive experience for users within their existing collaboration workflows.

**Note:**

*   Webex channel support is available **only for AI Agents**.
    
*   Currently, the channel supports **text messages and adaptive cards**.
    

**To configure:**

1.  Navigate to the **Agent** page and go to **Configuration > Channels** in the left navigation menu.
    
2.  On the **Channels** page, click **Connect** under the Webex channel.
    

Refer [Webex](/user-guide/ai-agent/configuration/channels/webex), for more information.

### 

Selective knowledge skill updates between stages

In this release, you can now pull updates for specific changes made to knowledge skills between stages. This enhancement provides greater control over stage deployments and minimizes the risk of unintentionally updating unrelated knowledge skills.

For instance, if you add or modify a knowledge skill during development and want to update it in production, the system now lists all added or altered skills under `Advanced Options`. From this list, you can choose which changes to apply, ensuring that only the selected updates are reflected in the production agent.

The system categorizes the changes as follows:

*   **To be created:** Newly added knowledge skills.
    
*   **To be updated:** Existing knowledge skills that have been modified.
    

This selective update mechanism ensures precision and flexibility in managing knowledge skill updates across different stages.

Refer [Promote and pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

### 

Multi-language support for CIVR campaigns

In this release, CIVR campaigns have been enhanced to support multiple languages. This update allows you to create and manage campaigns in users’ preferred languages, delivering a more personalized and inclusive experience.

It helps improve engagement and ensures consistent performance across diverse linguistic audiences.

### 

Collect user feedback on agent responses

In this release, we have introduced the ability to enable or disable the **Feedback** option for AI Agent responses. When this feature is enabled, end users see a **“”** with a thumbs-up or thumbs-down icon after the agent’s response, allowing them to provide quick feedback.

This feature helps you gather insights into user satisfaction and understand how users interact with your agent, enabling continuous improvement in response quality and relevance.

Refer [Enable feedback](/user-guide/ai-agent/configuration/settings#enable-feedback), for more information.

### 

Enhanced troubleshooting with debug logs

In this release, the **Debug Logs** option has been introduced for AI agents, allowing developers to enable or disable debug logging at the agent level.

This enhancement provides greater control over troubleshooting and makes it easier to identify, analyze, and resolve issues effectively.

Refer [Enable debug logs](/user-guide/ai-agent/configuration/settings#enable-debug-logs), for more information.

### 

Improved live agent session termination

This release includes a fix that ensures the `#end agent` command properly ends the conversation in live agent mode.

With this update, entering the `#end agent` command now reliably closes the live agent session. It returns control to the AI Agent, ensuring accurate session closure and a smoother transition back to automated handling.

### 

Configuration control for Hybrid SDK

In this release, a new **Hybrid SDK** toggle has been introduced, allowing users to enable or disable Hybrid SDK integration easily.

This enhancement simplifies configuration management by removing the need for manual setup and provides greater flexibility in managing HybridSDK functionality.

Refer [Enable hybrid SDK](/user-guide/ai-agent/configuration/settings#enable-hybrid-sdk), for more information.

### 

Additional enhancements for the AI agent experience

This release introduces several improvements to enhance voice quality, reliability, and developer control for AI Agents. These updates ensure more natural, stable, and contextually aware interactions across both voice and SIP-based environments.

#### 

**1\. Voice quality and personalization**

To make AI Agent conversations sound more human, branded, and engaging, several upgrades have been made to the voice experience:

*   **Audio upsampling:** All AI Agents in CIVR now process and output audio at higher fidelity, minimizing tinny or robotic tones. This enhancement also improves speech recognition accuracy.
    
*   **New voice personas – Fable, Nova, and Onyx:** Expanded voice options enable organizations to select voices that best match their brand identity, creating a consistent, recognizable “voice” for their AI Agents.
    
*   **Internal: TTS persona control:** An early-stage capability enables fine-tuning of tone, pitch, and delivery style within prompt skills, helping create voices that sound empathetic, authoritative, or friendly depending on context.
    
*   **Call recording voice clarity:** Eliminated overlapping or mixed voice artifacts in CIVR recordings, ensuring cleaner archives for audits and debugging.
    

#### 

**2\. Stability and failover resilience**

In this release, we’ve made several improvements to ensure smoother operation and uninterrupted experiences, even when unexpected issues occur.

*   **Seamless service continuity:** The system can now automatically switch between available service providers to keep operations running without interruption.
    
*   **Automatic call redirection:** If a voice channel encounters an issue, incoming calls are automatically forwarded to a backup number, reducing downtime and maintaining a smooth user experience.
    

#### 

**3\. Call experience improvements**

Enhancements focused on delivering smoother, uninterrupted call flows:

*   **Message completion guarantee:** Resolved cases where messages were cut off before hangup or call forwarding, ensuring users always hear complete responses.
    
*   **Long DTMF stability:** Added support for multi-digit DTMF inputs, enabling more accurate entry of long numeric responses, such as phone numbers or account IDs.
    

#### 

**4\. Sessions API for SIP vendors**

To simplify integrations while preserving conversational context, this release introduces the **Avaamo Session API**, enabling SIP-based contact centers to pass minimal metadata while securely maintaining full session history.

*   SIP vendors can now include an `X-SESSION-ID` (and optionally a phone number) in SIP headers.
    
*   The session context and transcripts can be retrieved securely via the Avaamo Session API. Refer to **Vonage – Avaamo Session API for SIP Integration** for more information.
    

#### 

**5\. Dynamic barge-in control**

AI Agents now support dynamic enablement or disablement of barge-in to optimize conversational flow.

*   **Recommendation:** Keep barge-in disabled by default, and enable it for longer enumerations such as appointment lists or medication details.
    
*   **Configuration options:**
    
    *   _Agent level (Advanced Settings):_ `enable_barge_in: true/false`
        
    *   _JavaScript level:_ `AsrModel.setConfig({"enable_barge_in": true/false});`
        
    

## 

LLaMB Enhancements

### 

Disclaimer note support for long responses

In this release, we have enhanced the response handling mechanism to include a **disclaimer message** at the end of very long responses. This disclaimer appears only when the [Markdown format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format) is enabled in the channel.

This enhancement ensures that source citation links remain visible even in lengthy responses.

This update improves the user experience by maintaining transparency and accessibility of source information, even in detailed AI-generated responses.

**Note:** The disclaimer message can be `customized` **or** `disabled` by contacting Avaamo Support.

**Example:** A disclaimer note is automatically displayed at the end of a long response to inform users that the message has been truncated or simplified for readability.

### 

Improved content extraction in document uploads

In this release, we have introduced a new parsing mechanism that significantly enhances content extraction across multiple file types when uploading via API. These improvements apply to newly uploaded content or files processed through the [Upload document API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-document-html-url-to-llamb).

These enhancements ensure more accurate, structured content extraction, improving the quality of ingested data and making it easier to search, reference, and use in downstream AI interactions or content-retrieval workflows.

**Key enhancements:**

*   **Markdown parsing for HTML content:** The platform now automatically extracts additional formatting elements, such as italics, bullet points, and list tags, and converts them into Markdown format. This improvement is enabled **by default** and does not require any additional parameters when using the Upload document API.
    
*   **Section header and hierarchy detection in PDF files:** The system can now detect and extract `section headers, hierarchical structures, and tables` from PDF files for better content organization and readability. To enable this capability, include the parameter `"parsing_lib": "markdown"` in the [Upload file API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-different-types-of-files-pdf-docx-pptx-xlsx-csv-html-to-llamb).
    

Refer [Content ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

### 

Multilingual support for soft unhandled messages

In this release, we have enhanced the **soft unhandled** message handling to support **multiple languages**. When a user’s query is related to the document but does not match any exact information, the system now returns the soft unhandled message in the user’s selected conversation language.

This update improves the user experience for multilingual audiences by maintaining language consistency throughout the conversation. It helps users better understand the context of soft unhandled responses and encourages smoother, language-appropriate follow-up interactions.

The image below illustrates a soft unhandled message displayed in Hindi.

Refe [Soft unhandled (Active redirect),](/user-guide/llamb/soft-unhandled-active-redirect) for more information.

### 

Smart intent disambiguation for multiple skill matches

In this release, we have enhanced **LLaMB's intent handling** to automatically resolve cases where a user query matches **multiple skills**. Previously, users had to select a skill from the dashboard manually. With this update, LLaMB now intelligently resolves ambiguities, ensuring a smoother, faster response flow.

**Key highlights:**

*   **Automatic resolution:** Eliminates the need for manual skill selection when multiple matches occur.
    
*   **Optimized for multi-skill environments:** Especially useful when multiple skills manage different content sources or when similar skills exist across development, staging, and production environments.
    

This enhancement improves response accuracy and user experience by reducing manual intervention and ensuring that the most relevant skill is automatically selected.

### 

Markdown rendering enabled by default for new channel**s**

In this release, we have enabled Markdown rendering by default for all newly created channels to enhance the presentation of LLaMB responses. This ensures that formatted text elements, such as bold, italics, bullet points, and hyperlinks, are displayed as intended without requiring any additional configuration.

Channels created before this update retain their existing Markdown settings, which can be manually adjusted at any time from the [channel configuration](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format) page if needed.

This enhancement improves readability and consistency in response formatting across channels, providing users with an engaging conversational experience.

## 

MS Teams enhancements

### 

Formatting flexibility for Teams channel responses

In this release, we have introduced a new option to enable or disable Markdown formatting for `LLaMB responses` in the `Microsoft Teams` channel. This setting allows administrators to control whether responses are rendered using Markdown.

This enhancement gives users greater control over message presentation and ensures that responses align with the desired visual and formatting preferences within Teams.

You can configure this option directly from the Microsoft Teams configuration page.

Refer [Microsoft Teams (MS Teams),](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams) for more information.

### 

Support for single-tenant bots in Microsoft Team**s**

In this release, the Avaamo platform now supports `single-tenant bots` for Microsoft Teams, following Microsoft’s deprecation of multi-tenant bot creation.

*   **New bots:** All newly created bots default to a `single-tenant configuration.`
    
*   **Existing bots:** Channels configured with multi-tenant bots continue to function, but `multi-tenant Azure bot credentials cannot be used` for new channels.
    
*   **Migration:** To migrate, create a new `single-tenant Azure app` and map it to the Avaamo MS Teams channel, or follow Microsoft Teams migration documentation.
    

This enhancement ensures compliance with Microsoft’s updated bot architecture while providing a seamless setup for new Teams integrations.

## 

Agent configuration enhancements

### 

JS errors page: Improved error classification

In this release, we have enhanced the `JS Errors` page with a new **“**`Type`**”** column that indicates whether an entry is an `Error` or a `Warning`.

This improvement allows developers to quickly assess the severity and nature of JavaScript issues, making it easier to prioritize, debug, and resolve problems efficiently.

Refer [JS errors,](/user-guide/how-to/build-agents/debug-agents/js-errors) for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.1. The following are some of the key fixes included in this release:

1.  [Custom formatting instructions for LLaMB responses](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#custom-formatting-instructions-for-llamb-responses)
    
2.  [Enhanced support for multilingual document ingestion](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#enhanced-support-for-multilingual-document-ingestion)
    
3.  [Enhanced document filters and statuses in DataSync](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#enhanced-document-filters-and-statuses-in-datasync)
    
4.  [Multilingual document ingestion support for DataSync](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#multilingual-document-ingestion-support-for-datasync)
    
5.  [SSO flow improvements for Microsoft Teams](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#sso-flow-improvements-for-microsoft-teams)
    
6.  [Enhanced security validation for SMS channel](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#enhanced-security-validation-for-sms-channel)
    
7.  [Response cutoff message translation](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#response-cutoff-message-translation)
    
8.  [Improved filtering options in the JS errors page](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#improved-filtering-options-in-the-js-errors-page)
    
9.  [File transfer capture support for custom live agent integrations](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1#file-transfer-capture-support-for-custom-live-agent-integrations)
    

### 

Custom formatting instructions for LLaMB responses

In this release, we are introducing `Custom Formatting Instructions` for LLaMB responses. This feature allows teams to define the tone, structure, and layout of every generated response, ensuring consistent communication that aligns with organizational guidelines and specific use-case requirements.

To configure custom formatting instructions, navigate to the `Advanced settings` section within the LLaMB skill page.

Click `Edit`

After writing the message, click `Save`.

Refer [Advanced Settings](/user-guide/llamb/get-started/step-2-ingest-enterprise-content), for more information.

### 

Enhanced multilingual document ingestion support for LLaMB

In this release, multilingual document ingestion is expanded to support documents uploaded via the platform UI, previously limited to API-based ingestion.

**Key enhancements include:**

**UI-based auto-detection control:** You can now enable or disable language auto-detection for all selected documents uploaded via the UI.

**Language selection when auto-detection is off:** If you turn off auto-detection, you can manually select the document’s language from a dropdown. The dropdown displays all [languages configured](/user-guide/ai-agent/configuration/language) for the agent, allowing accurate classification of the uploaded document.

**Header editing improvements:** For multilingual documents, the original header remains non-editable while the translated (English) header can be edited. English documents continue to behave as before.

**Original and translated view toggle:** A new toggle allows you to switch between the original and translated tables for easier review and editing.

### 

Enhanced document filters and statuses in DataSync

This release introduces multiple improvements to document filtering, status visibility, and ingestion transparency within the DataSync UI:

**Multi-select status filter:** A new multi-select dropdown lets users apply multiple document statuses simultaneously, enabling more flexible, efficient filtering.

**New “Others” category in top statistics:** A new `Others` tile appears alongside existing categories, helping teams quickly identify document counts that do not fall under ingestion, failed, or progressing statuses. This ensures alignment between categorized counts and the total document count. The Others category count represents the combined total of all `Skipped` and `Warning` statuses.

**Detailed status insights:** Hovering over **Warning**, **Error**, and **Skipped** statuses reveals the underlying issue or reason.

**Introducing the Skipped status:** The new `Skipped` status identifies documents that are intentionally ignored during the ingestion. This status includes a tooltip explaining why the content was skipped.

For example, suppose the content remains unchanged in Web, ServiceNow, or SharePoint sources between runs, whether triggered manually via Sync Now or via auto-sync. In that case, the system skips the ingestion process.

**Key points:**

*   URLs imported via CSV are always processed and marked as **Ingested**, and do not show **Skipped**.
    
*   Force re-ingesting a single document from the menu overrides existing states, moving the document to **Ingested**.
    

### 

Multilingual document ingestion support for DataSync

In this release, multilingual document ingestion is added to DataSync, allowing it to process documents in any language supported by the platform. You can now upload documents or files in any language supported by the platform, expanding flexibility for global and multilingual use cases.

You can also use the **Auto Detect Language** toggle if you want the system to automatically identify the language of the uploaded document.

### 

SSO flow improvements for Microsoft Teams

In this release, the SSO flow for the **Microsoft Teams channel** has been enhanced as part of the transition away from the deprecated SDK and the upgrade to the new cloud adapter. These changes were necessary because Microsoft deprecated the previously used SSO process, requiring internal updates to maintain compatibility and provide a smoother authentication experience for users.

Refer [Deprecation details](https://learn.microsoft.com/en-us/azure/bot-service/what-is-new?view=azure-bot-service-4.0) from Microsoft for more information.

### 

Enhanced security validation for the SMS channel

In this release, an extra security layer has been added to the SMS channel to verify the authenticity of requests originating from Twilio. This enhancement improves protection against unauthorized or spoofed traffic and ensures more reliable message handling.

### 

Response cutoff message translation

In this release, the **Response Cutoff Message** is automatically translated based on the user’s query language. This ensures a consistent and seamless multilingual experience, allowing users to receive cutoff notifications in the same language as their interaction.

### 

Improved filtering options in the JS errors page

In this release, enhanced filtering capabilities have been added to the **JS errors** page. Users can now filter errors by type, such as **Warning** or **Error,** making it easier to isolate specific issues, focus on relevant problem areas, and streamline debugging and analysis.

Additionally, file exports now include **only the log results that match the currently applied filter**, ensuring clean, relevant, and targeted exports for further review or reporting.

Refer [JS errors](/user-guide/how-to/build-agents/debug-agents/js-errors), for more information.

### 

**File transfer capture support for custom live agent integrations**

In this release, support for capturing file transfers in custom live agent integrations has been introduced. Previously, file transfer events were not recorded. With this enhancement, all file transfers are now fully tracked to provide complete visibility into conversation activity.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.2

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.2. The following are some of the key fixes included in this release:

1.  [Introducing Salesforce as a content source for DataSync (Beta)](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.2#introducing-salesforce-as-a-content-source-for-datasync-beta)
    
2.  [Pull specific LLaMB skill changes](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.2#pull-specific-llamb-skill-changes)
    

### 

Introducing Salesforce as a content source for DataSync (Beta)

In this release, DataSync AI now supports `Salesforce` as a content source, allowing you to bring Salesforce records directly into your agent knowledge.

This feature is currently in beta and intended for testing; feedback is appreciated.

With this enhancement, DataSync seamlessly processes information from Salesforce, including cases, knowledge articles, and custom objects, alongside other supported content sources. This helps agents provide accurate, context-aware responses based on the latest data available in your Salesforce environment.

This feature extends DataSync's reach, making it easier to unify enterprise knowledge and keep your agents consistently up to date.

### 

Pull specific LLaMB skill changes

In this release, the LLaMB skill now supports pulling updates for **specific LLaMB skill changes** between stages. This improvement gives users greater control over stage deployments and helps prevent accidental updates to unrelated LLaMB skills.

When you add or modify an LLaMB skill during development and then initiate an update to production, the system will now display all detected changes under `Advanced Options`. You can review the list and selectively choose which updates to apply, ensuring only the intended LLaMB skill changes move to the production agent.

The changes are categorized as follows:

*   **To be created**: Newly added LLaMB skills
    
*   **To be updated**: Existing LLaMB skills that have been modified
    

This enhancement ensures safer, more predictable deployments and improved version management across stages.

Refer [Promote and pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.3. The following are some of the key fixes included in this release:

1.  [Language selection for file ingestion in DataSync](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3#language-selection-for-file-ingestion-in-datasync)
    
2.  [Control masking with safelist patterns](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3#control-masking-with-safelist-patterns)
    
3.  [Export agents with optional LLaMB skill data](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3#export-agents-with-optional-llamb-skill-data)
    
4.  [Email notifications for failed jobs](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3#email-notifications-for-failed-jobs)
    

### 

Language selection for file ingestion in DataSync

In this release, we are introducing a new **Language selection** option for file-based content ingestion in DataSync. You can view this option during file ingestion. This enhancement improves content-processing accuracy, ensures better handling of non-English documents, and helps the system generate more reliable responses from ingested data.

You can select the language in the [Upload Files](/user-guide/datasync-ai/content-sources/files/step-2-configure-content-source-and-ingest-content/upload-files) step. Click the dropdown to display the languages configured for the agent.

**Notes:** The language selection option is disabled when the Auto-detect toggle is enabled

You can verify the configured language after the file or document is ingested. Navigate to the individual document’s **Actions** section, click the **three-dot menu**, and select **Edit** to view the language of the ingested document content.

Refer [Files](/user-guide/datasync-ai/content-sources/files), for more information.

### 

Control masking with safelist patterns

In this release, we introduce `Safelist masking patterns`, which let you prevent specific words or word groups from being masked.

For example, if you configure the system to mask all numbers in queries, responses, or both, specific terms such as RoBE-19 that contain numerals can be excluded from masking.

This enhancement provides greater control and flexibility in data masking, ensuring that essential terms remain readable while sensitive information remains protected.

To add safelist masking patterns, contact `Avaamo Support` with the list of words or patterns you want to exempt from masking.

### 

Export agents with optional LLaMB skill data

In this release, we introduce a new checkbox in the agent export flow that lets users include or exclude LLaMB skills in the export. By default, all applicable skills are included. Users can clear the checkbox to exclude LLaMB skills from the exported agent.

**Note:** This feature is enabled by default; the checkbox is selected.

This enhancement includes two scenarios:

*   **Fresh export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

*   **Repeated export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

This improvement provides greater control and improves export performance, especially for agents with large skill datasets.

Refer to [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.

### 

Email notifications for failed jobs

In this release, we introduce the **Email Notifiers** to configure email notifications for failed jobs. You can now add email addresses to receive alerts whenever a job fails for any reason.

For example, if an auto-sync is scheduled to run at a specific time and the job fails, the configured email recipients are immediately notified. This alert helps teams detect failures early, respond quickly, and minimize data sync disruptions.

**To configure email notifications:**

1.  Navigate to the required job.
    
2.  Click the three-dot menu next to the job name and select **Email Notifiers**.
    

1.  Add up to **five email addresses**, using **\+ Add** to include them one by one. Click **Save** to apply the configuration.
    

Refer [Email Notifiers](/user-guide/datasync-ai/content-sources/common-actions/email-notifiers), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.4. The following are some of the key fixes included in this release:

1.  [Introducing Conversational Intelligence (CI)](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4#introducing-conversational-intelligence-ci)
    
2.  [Introducing Confluence as a content source for DataSync](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4#introducing-confluence-as-a-content-source-for-datasync)
    
3.  [Citation links in regression test files](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4#citation-links-in-regression-test-files)
    
4.  [Citation links in query insights](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4#citation-links-in-query-insights)
    

### 

**Introducing Conversational Intelligence (CI)**

In this release, we introduce `Conversational Intelligence (CI),` a powerful, AI-driven analytics layer that provides deep insights across digital and voice interactions. CI works seamlessly across `classic agents, AI agents, and Agent Copilot,` providing a unified, centralized way to analyze conversations at scale.

**Key points:**

*   **AI-driven conversation analysis:** CI analyzes the entire conversation_,_ including transcripts and call metadata, to understand context, intent, and sentiment, rather than relying on rigid conversation trees.
    
*   **Built for modern AI conversations:** Unlike legacy tag-based systems, CI adapts naturally to fluid, non-linear AI agent conversations, making it the most effective way to analyze AI-driven interactions.
    
*   **Centralized analytics platform:** Eliminates the need for custom tagging logic or external dashboards by providing a single analytics layer for all bots and channels.
    
*   **Chat with your data:** Users can interact with insights using a conversational interface to ask questions and explore trends.
    
*   **Rich insights and reporting:** Includes charts, date-based filtering, and automated weekly summary emails.
    

Conversational Intelligence replaces legacy tagging approaches with a smarter, scalable, AI-first analytics solution, helping teams gain accurate, actionable insights from every customer interaction.

### 

**Introducing Confluence as a content source for DataSync**

In this release, DataSync adds support for `Confluence` as a content source, enabling you to ingest Confluence pages and spaces directly into your knowledge base. This integration keeps agent knowledge aligned with the latest documentation, runbooks, and team updates maintained in Confluence.

By automatically syncing Confluence content, agents can deliver more accurate, up-to-date responses without manual uploads, reducing maintenance effort and improving response quality.

Refer [Confluence](/user-guide/datasync-ai/content-sources/confluence), for more information.

### 

**Citation links in regression test files**

In this release, we introduce **citation links in regression result files**, making it easier to trace and verify the sources used during regression testing. Each test result can now include direct citation links, allowing reviewers to quickly validate responses against their original knowledge sources.

This enhancement improves transparency, simplifies result verification, and helps teams confidently assess response accuracy during regression testing.

**Note:** To enable citation links in the regression test result file, please reach out to **Avaamo Support**.

### 

**Citation links in query insights**

In this release, citation links are now displayed in query insights across both the `Web channel` and the `Conversation History` pages. This enhancement makes it easier to trace responses back to their original knowledge sources directly from insights, improving transparency and simplifying verification during analysis and troubleshooting.

*   This is especially useful for **voice channels**, where responses are not visually inspectable during live interactions.
    
*   Citation links help **bot developers debug and validate responses** by clearly identifying which knowledge sources were used.
    
*   You can use citation visibility during testing and analysis, and disable it later if required for production environments.
    

Citation link in Web Channel:

Citation link in Conversation history:

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.5

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.5. The following are some of the key fixes included in this release:

1.  [Attribute handler support in datasync](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.5#attribute-handler-support-in-datasync)
    
2.  [Default prompt template for new prompt skills](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.5#default-prompt-template-for-new-prompt-skills)
    
3.  [Selective restore options for version comparison](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.5#selective-restore-options-for-version-comparison)
    

### 

Attribute handler support in datasync

In this release, we are introducing `Configure Advanced Attribute Handler` support in `DataSync`, a powerful new capability that lets you dynamically assign custom attributes to documents using JavaScript.

With this enhancement, developers can write JavaScript logic that returns specific attributes during ingestion, allowing metadata such as location, category, or other fields to be calculated and applied automatically. These attributes become part of the document’s metadata and can be used for filtering, authorization, search relevance, and downstream logic in your agents.

This enhancement enhances document ingestion flexibility and provides richer control over how document metadata is created and managed during the DataSync process.

**Key highlights:**

*   **Enable attribute handler:** Turn on the attribute handler in the DataSync configuration to use custom JavaScript for attribute assignment.
    
*   **Post-ingestion attribute updates:** If attributes were not configured during ingestion, or if you need to update attributes for already ingested documents or articles, you can use the Advanced Attribute Handler. This feature allows you to apply or modify document attributes using custom JavaScript logic during a sync run.
    
*   **Test attribute logic:** Validate the JavaScript logic and verify the updated attributes before applying them across documents during a sync operation.
    
*   **View and export attributes:** Easily review the attributes applied to documents using the View document attributes option and export them as a `CSV file` to audit changes, troubleshoot issues, and support further analysis.
    
*   **Custom JS for dynamic attributes:** Use JavaScript to evaluate document metadata and return attributes based on your logic (e.g., setting a location based on document number).
    
*   **Debug and logs:** Logs from your JavaScript are visible in debug logs to help with development and troubleshooting.
    
*   **Controlled application:** Attribute logic is executed during sync runs (Sync Now or Auto Sync), and changes take effect only after a sync. This ensures safe, predictable application of attribute logic.
    
*   **Error handling:** If incorrect JavaScript causes an error during execution, documents with missing or invalid critical attributes will be marked in error status to prevent unintended exposure. Detailed error information is available in the JavaScript extension error logs.
    

### 

Default prompt template for new prompt skills

When you create a new Prompt Skill, a simple `default prompt` is now automatically available in the prompt editor. The default prompt includes a `sample function` to help you get started faster. The sample function connects the Knowledge Handler with the agentic agent to handle Knowledge Skill–related queries.

This enhancement reduces initial setup effort and provides clear guidance on structuring prompts and defining functions when building or configuring prompt skills.

This enhancement also creates a sample function, as shown below:

Refer [Prompt skill](/user-guide/ai-agent/skills/prompt-skill/create-prompt-skill), for more information.

### 

Selective restore options for version comparison

In this release, the `Version Comparison` page has been enhanced to support `selective restoration` of changes. You can now choose which sections of a version you want to restore instead of restoring all changes.

Checkboxes are now available for the following sections if the changes are made:

*   Prompt
    
*   Function Calls
    
*   Advanced Settings
    

You can select one or more sections, and the restore action applies only to those sections. This enhancement provides better control over version restoration and improves the overall version management experience.

Refer [Restore selected](/user-guide/ai-agent/skills/prompt-skill/prompt-versions#restore-selected), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.6. The following are some of the key fixes included in this release:

1.  [Improved function creation experience in prompt skills](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#improved-function-creation-experience-in-prompt-skills)
    
2.  [Warm-up message enhancements](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#warm-up-message-enhancements)
    
3.  [Add your own LLM and TTS providers](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#add-your-own-llm-and-tts-providers)
    
4.  [Editable document titles for improved citations](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#editable-document-titles-for-improved-citations)
    
5.  [Agent metering](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#agent-metering)
    
6.  [Attribute handler enhancements](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#attribute-handler-enhancements)
    
7.  [Improved SharePoint ingestion for nested documents and attachments](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6#improved-sharepoint-ingestion-for-nested-documents-and-attachments)
    

### 

Improved function creation experience in prompt skills

In this release, function handling in Prompt Skills has been improved to streamline the authoring experience.

When you reference a function name in a prompt that does not yet exist, the system now automatically creates the function with the required declarations. Additionally, instead of retaining an unused blank function, the newly created function is initialized with a placeholder declaration that matches the provided function name, ensuring a cleaner, more intuitive setup.

This enhancement reduces manual cleanup, avoids duplicate or empty functions, and makes it easier to begin defining function logic immediately.

**For example:** If you type `HrIT()` in the prompt, and the function does not already exist, clicking the function name shows a `Function Not Found` prompt asking whether you want to create it.

When you select `Yes, create it`, the system creates the function with the same name (`HrIT`) along with a placeholder declaration, allowing you to immediately start defining the function logic.

### 

Warm-up message enhancements

In this release, warm-up message support has been expanded and enhanced to improve the call start experience across voice channels.

1.  Warm-up messages are now supported for the `SIP channel`, in addition to the phone channel, allowing agents to play a static message while call setup continues in the background.
    
2.  Support has also been added for warm-up messages of up to `255 characters`, ensuring that longer configured messages are delivered completely during call initiation without truncation.
    

These enhancements provide greater flexibility when configuring warm-up messages and help reduce perceived latency across supported voice channels.

### 

Add your own LLM and TTS providers

In this release, you can now configure your own `LLM` and `TTS providers` to power your AI agents, giving you greater flexibility and control over conversational capabilities.

This enhancement allows teams to integrate preferred language models and text-to-speech services, enabling customized AI behavior and voice quality based on specific business or technical requirements.

With support for custom providers, you can tailor your agents to your existing AI stack while maintaining seamless integration within the platform.

Refer [LLM Settings - Add your own LLM](/user-guide/how-to/manage-platform-settings/llm-settings-add-your-own-llm), for more information.

### 

Editable document titles for improved citations

In this release, you can edit document titles across supported content sources, both during ingestion and after ingestion.

This enhancement improves citation clarity, makes document references more meaningful in agent responses, and gives you greater flexibility to manage content naming without re-ingesting documents.

You can now:

*   **Files:** Edit the file name at the time of upload.
    

*   **Web**
    
    *   **URLs (CSV upload):** Provide a custom name in the CSV file; the specified name is applied to the corresponding URL during ingestion.
        
    *   **Sitemap:** Edit individual document names on the ingestion page after ingestion is complete.
        
    
*   **SharePoint, ServiceNow, Confluence, and Salesforce(beta):** Update document titles after ingestion using the three-dot menu options.
    

### 

Agent metering

In this release, `Agent Metering` provides real-time visibility into AI agent usage across Voice and Digital communication modes. This enhancement helps teams monitor session consumption, understand interaction patterns, proactively manage quotas, and ensure reliable operations without unexpected usage overruns.

Agent Metering includes two key sections:

**Usage Overview:** View real-time quota status and session usage across `Voice` and `Digital` communication modes. This includes session counts, usage trends over time, and detailed session-level insights to help monitor agent activity and manage consumption effectively.

**Notification Setup:** Configure usage notifications for each channel to stay informed about quota consumption. Notifications can be configured to proactively alert teams when usage thresholds are met.

Refer to [Agent metering](/user-guide/agent-metering/overview), for more information.

### 

Attribute handler enhancements

In this release, several improvements have been made to the `Advanced Attribute Handler` to ensure consistency and reduce manual configuration across environments.

*   **Import and export support:** Attribute Handler scripts are preserved during agent export and restored on import, eliminating the need to reconfigure attribute logic.
    
*   **Agent promotion continuity:** When an agent is promoted from Development to Testing, Staging, or Production, existing Attribute Handler scripts are automatically copied to the promoted agent.
    

These enhancements help maintain attribute configurations across environments and simplify agent migration and lifecycle management.

### 

Enhanced DataSync SharePoint connector for nested documents and attachments

In this release, the `DataSync SharePoint connector` has been enhanced to support viewing and selecting all documents, files, and attachments, including those nested within folders and subfolder structures.

This improvement enables more comprehensive content discovery and ingestion while preserving document integrity and associated metadata.

You can search for folders in the [Select Sites](/user-guide/datasync-ai/content-sources/sharepoint/step-2-configure-content-source-and-ingest-content/select-sites) step to quickly locate where your articles or documents are stored. Additionally, use the `Show Selected at Top` toggle to keep your chosen folder displayed at the top of the list for easier access.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.7. The following are some of the key fixes included in this release:

1.  [Introducing MCP as a new channel](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7#introducing-mcp-as-a-new-channel)
    
2.  [Support for MCP Integrations in Prompt Skills](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7#support-for-mcp-integrations-in-prompt-skills)
    
3.  [Query context visibility in conversation history insights](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7#query-context-visibility-in-conversation-history-insights)
    
4.  [Increased entity description limit in Flow Skill](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7#increased-entity-description-limit-in-flow-skill)
    
5.  [Support for opening citation links in the same tab](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7#support-for-opening-citation-links-in-the-same-tab)
    

### 

Introducing MCP as a new channel

In this release, we introduce a new channel, **MCP**, which enables external AI systems to connect to and invoke Avaamo agents within their own workflows.

**Note:** This channel is applicable only for AI agents.

With the MCP channel, you can connect existing MCP-compatible clients (such as ChatGPT or other AI tools) directly to Avaamo agents using a generated MCP URL.

This enhancement enables seamless integration of Avaamo agents into broader AI ecosystems while maintaining full control over agent workflows and responses.

Refer [MCP](/user-guide/ai-agent/configuration/channels/mcp), for more information.

### 

Support for MCP Integrations in Prompt Skills

In this release, MCP server integrations are introduced in Prompt Skills, allowing you to connect external MCP servers and selectively enable their tools.

This enhancement gives you greater flexibility to extend agent capabilities with external services, while maintaining clear control over which tools are enabled and accessible within each Prompt Skill.

Navigate to the `MCP Integrations` section via the left menu of the Prompt Skills, allowing users to:

*   Add custom and built-in MCP connectors
    
*   Explore and choose from the available connectors in the Built-in MCP connectors list.
    
*   Fetch and view the list of tools exposed by the MCP connectors
    
*   Enable or disable specific tools
    
*   Create, update, or delete MCP connectors
    

For custom integrations, tools are automatically fetched once a valid connector URL is provided. If the URL is invalid, the tools cannot be retrieved. Tool enablement states are preserved once configured.

Refer [MCP integration](/user-guide/ai-agent/skills/prompt-skill/mcp-integration), for more information.

### 

Query context visibility in conversation history insights

In this release, query contexts are now available in the `Conversation History insights` view.

Previously, query contexts were displayed only for `web channel query insights`. With this enhancement, the same contextual information is now surfaced directly in Conversation History, making it easier to understand how user queries were interpreted and processed across channels.

This improvement provides better visibility into query behavior and helps with debugging and analysis of agent responses.

Refer [Conversation history,](/user-guide/ai-agent/debug/conversation-history) for more information.

### 

Increased entity description limit in Flow Skill

In this release, the character limit for the `Entity Description` field in Flow Skill has been expanded.

Previously, the description field was limited to 190 characters. Now you can add upto 1000 characters in the Description field.

This enhancement provides greater flexibility for documenting entities and defining richer contextual information within Flow Skills.

### 

Support for opening citation links in the same tab

In this release, citation links generated through LLaMB can be configured to open in the `same browser tab.` By adding the following attribute to the document attributes:

This enhancement provides greater control over navigation behavior and improves the end-user browsing experience.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.1.8. The following are some of the key fixes included in this release:

1.  [Floating label support for input fields](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#floating-label-support-for-input-fields)
    
2.  [Attachment button visibility updated for Live Agent sessions](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#attachment-button-visibility-updated-for-live-agent-sessions)
    
3.  [Attribute Handler updates](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#attribute-handler-updates)
    
4.  [Copy option in the conversation history](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#copy-option-in-the-conversation-history)
    
5.  [Separate content sources for Web Sitemap and Web CSV Upload](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#separate-content-sources-for-web-sitemap-and-web-csv-upload)
    
6.  [Extended conversation history visibility](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8#extended-conversation-history-visibility)
    

### 

Floating label support for input fields

In this release, we are introducing floating label support for input fields in the web channel. You can enable this feature by setting the `floating_label_enabled` parameter to `true` under the web channel’s `Advanced` settings. Navigate to `Advanced` \> `Advanced customization parameters.`

Once enabled, the placeholder becomes a floating label above the field when the user focuses on the field or begins typing, rather than disappearing.

Before start typing

After start typing

This enhancement helps maintain field context during input, improves accessibility for screen reader users, and aligns with accessibility best practices and client UX requirements.

Refer [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced), for more information.

### 

Attachment button visibility updated for Live Agent sessions

In this release, the visibility of the `attachment upload button` has been updated to improve user experience during agent interactions.

Previously, when [Send attachment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#send-attachment) was enabled, the attachment option remained visible throughout the conversation, even while the user interacted with the agent. With this enhancement, the `attachment button is displayed only when the user is connected to a Live Agent`. Once the live agent session ends and the conversation returns to the agent, the attachment option is automatically hidden.

This change ensures that file uploads are available only in the appropriate context, creating a clearer, more intuitive user experience.

### 

Updates to Attribute Handler (Document Transformation)

In this release, a few updates have been made to the `Attribute Handler` feature to improve clarity and functionality.

1.  `Attribute Handler` has been renamed to `Document Transformation` across the platform and UI.
    
2.  The `Document Transformation` option can now be used to update the `name` and `preview URL` of ingested documents in bulk.
    
3.  You can verify the applied changes using the `View document attributes` option.
    

**Note:** If the `name` or `preview_url` attributes are set to `null` during ingestion, they cannot be updated using Document Transformation.

These updates make it easier to manage document metadata and provide clearer terminology within the platform.

### 

Copy option in the conversation history

In this release, a `Copy option` has been added to the `Conversation History` page to make it easier to reference specific messages.

Select the conversation and hover over a message in the conversation history, a `Copy icon` appears before the seen/tick indicator.

Clicking this icon generates a `direct link to that specific message`, including the message UUID.

For example:

https://c6.avaamo.com/web/#messenger/conversations/71dxxxxxxxxxxxxx03dd?messageUuid=98d150xxx-xxx-xxx-xxx-xx3cc2a7e1\\

When you copy a message link and open it, the referenced message is highlighted with a `yellow background` for a few seconds.

This enhancement allows users to quickly copy and share links to individual messages within a conversation for easier troubleshooting, collaboration, and reference.

Refer [Conversation History](/user-guide/how-to/build-agents/debug-agents/conversation-history#conversations), for more information.

### 

Separate content sources for Web Sitemap and Web CSV Upload

In this release, the `Website content source` has been refactored and split into two dedicated content sources: `Web Sitemap` and `Web CSV Upload`.

With this enhancement, you can now:

*   Use [Web Sitemap](/user-guide/datasync-ai/content-sources/web-sitemap) to ingest content using a website's sitemap.
    
*   Use [Web CSV Upload](/user-guide/datasync-ai/content-sources/web-csv-upload) to upload and ingest a list of URLs provided in a CSV file.
    

This separation provides clearer configuration options and a more streamlined ingestion workflow for website-based content.

### 

Extended conversation history visibility

In this release, the `Conversation History` page has been enhanced to display conversations from the past 6 months, making it easier for users to access and review older interactions.

Refer [Conversation History](/user-guide/how-to/build-agents/debug-agents/conversation-history#conversations), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/introducing-the-datasync-2.0

**DataSync 2.0** is a robust content integration and synchronization capability within the Avaamo Conversational AI Platform, designed to empower agents by seamlessly ingesting, processing, and managing information from multiple content sources. This ensures that agents deliver accurate, context-aware, and up-to-date responses.

## 

Key Highlights of DataSync 2.0

### 

Comprehensive life cycle management

DataSync 2.0 now supports the complete agent life cycle, from content ingestion and synchronization to updates and deletion. This enhancement ensures smooth and efficient management of all content sources throughout the agent’s operation.

With this capability, you can:

*   **Ingest** content from multiple sources such as files, websites, or enterprise connectors.
    
*   **Synchronize** content automatically or manually to keep your agent’s knowledge up to date.
    
*   **Update** existing content sources without recreating jobs, enabling incremental updates.
    
*   **Delete** outdated or irrelevant content sources when no longer needed.
    

This end-to-end life-cycle support streamlines content management, reduces manual effort, and ensures your agent always operates with the most up-to-date, accurate data.

### 

Keep your data updated with scheduled syncs

The scheduler option allows you to set up automatic, recurring synchronization for supported content sources. By defining a preferred schedule, you can ensure that your content is updated regularly without manual intervention. This feature helps maintain data consistency and ensures that all ingested information remains current across the platform.

Refer [Auto Sync](/user-guide/datasync-ai/content-sources/common-actions/auto-sync), for more information.

### 

Manual synchronization with one click

The manual sync option enables users to initiate synchronization for any content source with a single click. This provides an easy and efficient way to refresh content on demand without waiting for scheduled syncs. It ensures that the latest updates from your connected sources are immediately reflected, keeping your data current and consistent across the platform.

Refer [Sync Now](/user-guide/datasync-ai/content-sources/common-actions/sync-now), for more information.

### 

Access detailed logs of previous sync executions

DataSync now keeps a detailed record of all synchronization executions, allowing users to view and analyze previous runs. This helps track sync activity, review results, and diagnose issues quickly. Maintaining an execution history provides better visibility, greater accountability, and easier troubleshooting across all supported content sources.

Refer [View job version history](/user-guide/datasync-ai/content-sources/common-actions/view-job-version-history), for more information.

### 

Efficient navigation for large document collections

Pagination support enhances the user experience when working with large document collections. Instead of loading all documents at once, DataSync now divides them into smaller, manageable pages. This improves navigation, reduces load time, and ensures smoother performance when browsing or managing extensive content sources.

### 

Effortless content discovery across sources

The dynamic search option allows users to locate specific documents within individual content sources quickly. You can search using document names, partial matches, or even parts of the document URL. This feature streamlines content discovery, helping users efficiently find and manage the information they need within large datasets.

### 

**View synchronization results by status**

The filter-by-status feature enables users to list documents or articles by ingestion status, such as "Ingested," "Error," or "In Progress." This functionality helps users quickly identify problem areas, track ingestion progress, and manage content more efficiently.

### 

**Remove outdated or unused content sources**

Users can now delete any outdated or unused content source directly from the DataSync interface. This feature helps maintain a clean and organized workspace by allowing you to remove unnecessary or redundant data sources easily.

Refer [Delete job](/user-guide/datasync-ai/content-sources/common-actions/delete-job), for more information.

### 

**Enhanced performance for large-scale operations**

This release strengthens the system’s ability to manage large ingestion and synchronization workloads more efficiently. Improved scalability and stability ensure consistent performance, faster processing, and greater reliability even under heavy operational demands.

### 

Actions available for an ingested document

**Ability to update the preview URL:** Users can now modify a document's preview URL after ingestion, ensuring accurate content verification and updated linking.

**Ability to update attributes after ingestion:** The attributes or metadata of ingested documents can be edited at any time, offering greater flexibility in managing document details.

**Ability to delete a single document:** You can remove individual documents without deleting the entire content source, keeping data organized and precise.

**Ability to re-ingest a single document:** Specific documents can be re-synced independently to refresh content without running a complete synchronization job.

Refer [Actions](/user-guide/datasync-ai/content-sources/common-actions/actions), for more information.

### 

**Easily upload multiple documents at once**

The Files content source now supports bulk uploads, allowing users to add multiple documents in a single action. This enhancement simplifies large-scale ingestion and saves time when managing extensive document collections.

### 

**Add new files to an existing Files content source**

Users can now upload additional files to an already created Files content source. This capability supports incremental updates, enabling content expansion or modification without recreating jobs.

## 

Why Use DataSync 2.0?

DataSync 2.0 provides a **production-ready foundation** for creating intelligent, self-sufficient AI agents that:

*   Deliver accurate and context-aware responses
    
*   Reduce manual intervention and operational overhead
    
*   Scale knowledge efficiently across multiple content sources, including **web platforms** and **files**
    
*   Ensure secure, reliable, and high-quality knowledge delivery to end users
    

## 

Next steps

1.  Understand what is required in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.
    
2.  Refer [DataSync AI](/user-guide/datasync-ai/overview-key-features), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.1.0/introducing-knowledge-skill-2.0

The `Knowledge skill` is a core capability of the Avaamo Conversational AI Platform, designed to empower AI agents to access, process, and deliver information from multiple content sources accurately, efficiently, and at scale.

**Note:** For organizations with **DataSync enabled**, all newly created Knowledge Skills continue to point to the DataSync UI for streamlined content management.

### 

What is a Knowledge skill?

The Knowledge skill allows AI agents to seamlessly ingest and interact with content from diverse sources, including:

*   Product documentation
    
*   User manuals and guides
    
*   FAQs and help articles
    
*   Enterprise knowledge systems
    

This integration ensures AI agents deliver context-aware, up-to-date, and accurate responses, reducing manual intervention and enhancing the overall quality of user interactions.

### 

Getting started with Knowledge skill

1.  Navigate to the `Agent` page in the Avaamo platform.
    
2.  Select `Skills` from the left navigation menu.
    
3.  Click `Add skill`.
    
4.  On the `Skill Builder` page, choose the `Knowledge skill`.
    

1.  Select your `content source` and begin ingesting your documents.
    

Refer Content sources, for more information.

### 

Key highlights of Knowledge skill

Building on the foundation of `DataSync`, Knowledge Skill includes robust features for content integration, synchronization, execution history, error handling, and scalability. In addition, it introduces these key differentiators:

#### 

1\. Flat knowledge structure

Unlike LLaMB, which relied on separate document groups, Knowledge Skill ingests all content into a single unified skill. This simplifies organization, search, and retrieval, making knowledge management straightforward and scalable.

#### 

**2\. Centralized view for content and ingestion management**

The new Knowledge tab provides a unified location within each skill to manage all content-related operations. It consolidates content sources, ingestion history, and synchronization details, providing users with a clear, organized view of the knowledge associated with that specific skill. This improves accessibility, simplifies monitoring, and enhances overall management efficiency.

Refer [View and edit knowledge](/user-guide/ai-agent/skills/knowledge-skill/view-and-edit-knowledge), for more information.

#### 

**3\. Monitor synchronization progress instantly**

Knowledge Skill 2.0 offers real-time synchronization status updates from LLaMB, enabling users to track the progress and completion of sync operations without delay. This ensures greater visibility into the synchronization process and helps in promptly identifying any issues.

#### 

**4\. Pull specific knowledge skill changes**

As part of **Knowledge Skill 2.0**, you can now pull updates for particular changes made to knowledge skills between stages. This improvement gives users greater control over stage deployments and prevents unintended updates to unrelated knowledge skills.

For example, when you add or modify a knowledge skill during development and plan to update it in production, the system displays a list of the added or modified skills under `Advanced Options`. From this list, you can select the specific changes to apply, ensuring that only the chosen updates are reflected in the production agent.

#### 

**5\. Ability to view a single document:**

Users can preview or inspect individual records within the Knowledge Skill 2.0 interface for quick review and validation.

### 

Benefits of using the Knowledge skill

*   **Intelligent AI agents:** Deliver accurate, context-aware responses consistently.
    
*   **Simplified knowledge management:** Single, unified structure for all content.
    
*   **Scalable operations:** Efficient handling of large volumes of content with full execution history and error tracking.
    
*   **Enhanced user experience:** Provides reliable, timely information, improving engagement and trust.
    

### 

Next steps

*   Understand what is required in the [Before you begin](/user-guide/ai-agent/before-you-begin) section.
    
*   Start by creating a new [AI agent](/user-guide/ai-agent/create-an-ai-agent).
    
*   You are now ready to [get started](/user-guide/ai-agent/get-started) by exploring AI agents in the Avaamo Conversational AI Platform.
    

Refer [Knowledge skill](/user-guide/ai-agent/skills/knowledge-skill), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0

The Avaamo Conversational AI Platform `9.0.0` release includes a new agent - the `AI agent`, 3 new features, and 17 enhancements.

## 

**New AI agent**

The Avaamo Conversational AI Platform introduces a new `AI agent` in this release.

The `AI agent` is a next-generation agent built to power highly intelligent and dynamic voice or text-based conversations. With advanced context awareness and adaptive response capabilities, the `AI Agent` elevates query handling and user engagement, delivering more natural, intuitive, and human-like interactions.

**Note**: The AI agent is enabled on demand. Contact your dedicated Customer Success Manager for further assistance.

See [AI Agents](/user-guide/recent-releases/release-notes-v9.0.0/introducing-ai-agents), for more information.

## 

New features

This release includes the introduction of the 3 new features:

1.  [LLaMB Content Regression Testing](/user-guide/recent-releases/release-notes-v9.0.0/introducing-llamb-content-regression-testing)
    
2.  [Voice Usage](/user-guide/recent-releases/release-notes-v9.0.0/introducing-voice-usage)
    
3.  [Aura – your smart support agent](/user-guide/recent-releases/release-notes-v9.0.0/meet-aura-your-smart-support-agent)
    

## 

Enhancements

Enhancements are categorized according to the Avaamo Conversational AI Platform modules for streamlined navigation. Following is the list of all the enhancements in the 9.0.0 release:

Module

Enhancements

LLaMB

Content ingestion improvements

*   [HTML uploads made easy: Upload directly from the UI—no API needed.](/user-guide/recent-releases/release-notes-v9.0.0#html-uploads-made-easy)
    
*   [Enhanced stability with rate limits in content ingestion APIs](/user-guide/recent-releases/release-notes-v9.0.0#rate-limits-in-content-ingestion-apis)
    

User experience improvements

*   [LLaMB goes multilingual: Conversation with LLaMB in any Avaamo-supported language.](/user-guide/recent-releases/release-notes-v9.0.0#llamb-goes-multilingual)
    
*   [Configurable response rendering in LLaMB – Enable concise answers and citation links as needed](/user-guide/recent-releases/release-notes-v9.0.0#configurable-response-rendering-in-llamb)
    

Troubleshooting and Debugging

*   [Observability: Gain deeper Insights into LLaMB Response Chunks](/user-guide/recent-releases/release-notes-v9.0.0#observability-deeper-insights-into-llamb-response-chunks)
    

Analytics

*   [Export LLaMB usage reports](/user-guide/recent-releases/release-notes-v9.0.0#export-llamb-usage-reports)
    

Security

*   [Disable citation link security in LLaMB response](/user-guide/recent-releases/release-notes-v9.0.0#disable-citation-link-security-in-llamb-responses)
    

Information Masking

*   [Default masking for new agents](/user-guide/recent-releases/release-notes-v9.0.0#default-masking-for-new-agents)
    
*   [Retention period: Set how long data is retained before masking](/user-guide/recent-releases/release-notes-v9.0.0#retention-period)
    
*   [Improved response masking: Now only PII data is masked](/user-guide/recent-releases/release-notes-v9.0.0#improved-response-masking-now-only-pii-data-is-masked)
    
*   [Enhanced Agent details API response with masking information](/user-guide/recent-releases/release-notes-v9.0.0#enhanced-agent-details-api-response-with-masking-information)
    

Usage reports

[Track your product usage in one place](/user-guide/recent-releases/release-notes-v9.0.0#usage-reports-track-your-product-usage-in-one-place)

Web channel security configuration

[Cookie expiry setting for better session management](/user-guide/recent-releases/release-notes-v9.0.0#cookie-expiry-setting-for-better-session-management)

Configuration > Settings

*   [Enable debug logs for easier troubleshooting](/user-guide/recent-releases/release-notes-v9.0.0#enable-debug-logs-for-easier-troubleshooting)
    
*   [Disable co-reference for agents without context](/user-guide/recent-releases/release-notes-v9.0.0#disable-co-reference-for-agents-without-context)
    

MS Teams Channel configuration

[Disable incoming request authorization in MS Teams channel](/user-guide/recent-releases/release-notes-v9.0.0#disable-incoming-request-authorization-in-ms-teams-channel)

Conversational IVR (C-IVR) or Phone channel

[Customize wait-time audio](/user-guide/recent-releases/release-notes-v9.0.0#customize-wait-time-audio)

## 

Changes

This release includes changes related to the following modules:

1.  [Updated location of Enable Markdown format option](/user-guide/recent-releases/release-notes-v9.0.0#enable-markdown-format)
    
2.  [Mask user IP toggle on the Privacy page](/user-guide/recent-releases/release-notes-v9.0.0#mask-user-ip-on-the-privacy-page)
    
3.  [Refreshed UI for the Login page](/user-guide/recent-releases/release-notes-v9.0.0#refreshed-ui-for-the-login-page)
    
4.  ["Standard agent" is now "Classic agent"](/user-guide/recent-releases/release-notes-v9.0.0#standard-agent-is-now-classic-agent)
    
5.  [Domain configuration now centralized under Web Channel settings](/user-guide/recent-releases/release-notes-v9.0.0#domain-configuration-now-centralized-under-web-channel-settings)
    

## 

LLaMB enhancements

### 

HTML uploads made easy

In this release, the content ingestion in LLaMB has been enhanced to support direct HTML file uploads from the UI, removing the dependency on ingestion APIs for this use case. This update streamlines the ingestion workflow, enabling faster onboarding of web content in LLaMB.

Previously, only HTML URLs could be ingested through the UI, while HTML file uploads required using [Content ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis).

See [Upload Documents](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content#upload-documents), for more information.

### 

Rate limits in content ingestion APIs

In this release, the [upload-web](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-document-html-url-to-llamb) and [upload-file](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-different-types-of-files-pdf-docx-pptx-xlsx-csv-html-to-llamb) Content Ingestion APIs now include a `rate limit` parameter, capped at **50 uploads per minute**. This improvement enhances system performance and promotes efficient use of resources.

See [Content Ingestion API](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

### 

LLaMB goes multilingual

This release enhances multi-language support for LLaMB, enabling real-time streaming translation across all [supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages) in the Avaamo Conversational AI Platform.

Users can now interact with the agent in any of the supported languages and the agent responds in the same language—even if the original content is in English. This provides a smooth, multilingual experience without needing content in multiple languages and a wider reach for LLaMB across the globe.

**Notes**:

*   To use this feature, ensure your agent is enabled for **Markdown format**. See [Enable MarkDown format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format), for more information.
    
*   Languages can be added via configuration, allowing flexibility based on your user base.
    
*   While conversations can be multilingual, documents must be ingested in English (en-US).
    

Refer [Multi-language support](/user-guide/llamb/multi-language-support), for more information.

### 

Configurable response rendering in LLaMB

In this release, the configuration options for rendering responses in LLaMB have been enhanced with the following options in the agent's channel configuration settings:

*   **Enable concise response**: For shorter, natural replies that retain key info—ideal for quick summaries, with full details available via citation links. See [Enable concise response](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-concise-response), for more information.
    

Before enabling

After enabling - Responses are short with key info

*   **Disable citation links**: To remove [citation links](/user-guide/llamb/citation-links) in LLaMB agent responses. See [Disable citation links](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#disable-citation-links), for more information.
    

Before enabling

After enabling - Citation links are not displayed

**Notes**:

*   Ensure that the [Enable Markdown Format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format) option is enabled to view this setting.
    
*   When using Agent Assist or AI Agent, where precise responses are required and source links are not needed, you can disable them using these options.
    

### 

Observability: Deeper insights into LLaMB response chunks

This release introduces new `Query Context` feature in `Message insights` for LLaMB responses, providing detailed visibility into the **chunks** used to generate each LLaMB response.

This helps you understand how different parts of your data contribute to the response—making it easier to debug, optimize, and trust the results.

**Key highlights**:

*   Enhanced visibility into the chunks used to generate responses
    
*   Chunk-based responses show how queries are matched with relevant data
    
*   Improved debugging with traceable chunk information for better optimization
    
*   Greater transparency into how LLaMB builds and delivers answers
    

Click `Query context` to see all the chunks used in forming the answer. Chunks marked as `Strong match` indicate high relevance to your query.

Click any `chunk` to explore detailed info such as - Document name, Source URL, Intent used, Custom properties, and Additional descriptions to know exactly how user attributes and document properties are aligned to generate the response.

See [Query context](/user-guide/llamb/get-started/step-3-test-your-agent#query-context), for more information.

### 

Export LLaMB usage reports

In this release, you can now easily export your LLaMB usage data for better tracking and analysis.

**Key highlights**:

*   Access the feature by navigating to: `Profile Icon > Settings > Usage Reports > LLaMB Usage`
    
*   Click `Export Usage Report` to download your data
    
*   Get a CSV report of your LLaMB usage, including regression testing details
    
*   Use it to analyze agent-wise trends, optimize usage, and make data-driven decisions
    

See [LLaMB Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.

### 

Disable citation link security in LLaMB responses

In this release, you now have the option to disable citation link expiration in LLaMB responses from the `Settings` page under the `Configuration` section.

**Key highlights**:

*   By default, citation links expire 24 hours after generation. See [Citation links](/user-guide/llamb/citation-links), for more information.
    
*   When disabled, links remain accessible at any time without any expiry restrictions. It is recommended to keep citation link security enabled at all times to maintain secure and controlled access.
    
*   Useful for debugging, troubleshooting, or sharing persistent references with users
    

This gives you more flexibility in how you manage and share LLaMB-generated links.

See [Advanced features](/user-guide/how-to/build-agents/configure-agents/define-settings#advanced-features), for more information.

## 

Masking enhancements

### 

Default masking for new agents

Starting this release, all newly created agents have information masking enabled by default to better protect Personally Identifiable Information (PII) and ensure compliance with data privacy regulations, right out of the box.

**Note:** Masking support for non-English conversations is currently under continuous evaluation.

**What’s enabled by default**:

**Key points:**

Real-time masking is enabled by default, so any personal information in both your messages and the agent’s replies is automatically purged to keep your data safe.

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
    

See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.

### 

Retention period

In this release, the `Information masking` feature has been enhanced with configurable `Retention Period` support.

The retention period in masking defines the duration for which data remains accessible before masking is applied. This enhancement enables agent-level control over data masking, supporting compliance with data privacy regulations while maintaining system performance.

**Key Points:**

It is recommended that the retention period be set to a maximum of 24 hours to ensure smooth data access for live agent use cases and enable timely data exports.

For example, if the retention period is set to 10 minutes, any PII data in the conversation is automatically masked the next time the process runs after the 10-minute window.

You can set the `Retention period` when `Information masking` is enabled from the `Settings` page:

See [Retention period](/user-guide/how-to/build-agents/configure-agents/define-settings#retention-period), for more information.

### 

Improved response masking: Now only PII data is masked

In this release, enhanced the response node masking functionality. Previously, the entire response was masked if [skill level](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill) and [node level](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#mask-response) masking were enabled. With this improvement, only the PII data within agent responses is masked, while the rest of the response remains visible.

This enhancement provides greater clarity by allowing you to see the non-sensitive parts of the response, making it easier to understand the conversation flow. It also significantly improves debugging and troubleshooting, as you can now review the visible parts of the response without compromising sensitive data.

**Key point:** This behavior is `enabled by default` for all agents created after the feature rollout. For agents created prior, you can manually enable masking from the [Agent Settings page](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-information-masking), or contact Avaamo Support for assistance.

Before 9.0

After 9.0

### 

Enhanced Agent details API response with masking information

In this release, the `Agent details API` has been updated to include the following new response attributes with masking configuration details:

Field

Description

realtime\_masking\_enabled

Indicates whether real-time masking is enabled for the agent or not.

api\_masking\_enabled

Indicates if masking via API is enabled or not for the agent.

retention\_period

Defines the retention period for the agent, measured in minutes.

mask\_responses\_from\_all\_nodes

Indicates if masking responses from all nodes is enabled or not for the agent.

system\_entity\_types

An array of system entity types that are masked.

custom\_entity\_types

An array of custom entity types that are masked.

response\_masking\_pattern

An array of regular expression patterns that must be masked in the agent's response.

user\_properties

An Array of custom and system user attributes that are masked.

See [Agent details API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/agent-details), for more information.

## 

Usage reports - Track your product usage in one place

You can now access all your billing and usage statistics for LLaMB, Voice, and SMS in a centralized new `Usage reports` section—designed for admins and user groups to monitor product usage in your account.

**What you can track:**

*   **LLaMB Usage** See how many queries are generated and gain real-time insights to optimize usage. In the previous release, `LLaMB usage` page was accessible from the top menu, now it is centralized and moved under `Usage reports` section. See [LLaMB Usage](/user-guide/how-to/manage-platform-settings/usage-reports/llamb-usage), for more information.
    
*   **SMS Usage** Monitor how many SMS messages were sent and get an understanding of your expected billing for each month. In the previous release, `SMS usage` was a separate page in the `Settings` section, now it is centralized and moved under `Usage reports` section. See [SMS usage,](/user-guide/how-to/manage-platform-settings/usage-reports/sms-usage) for more information.
    
*   **Voice Usage** Provides insights into voice usage associated with the company’s license configuration. It allows you to track the number of incoming and outgoing calls made on your account. See [Voice Usage](/user-guide/how-to/manage-platform-settings/usage-reports/voice-usage), for more information.
    

Everything you need to understand and manage your usage for LLaMB, Voice, and SMS—is now in one easy-to-access place.

## 

Cookie expiry setting for better session management

In this release, the `Security` section in the `Web channel` configuration page has been enhanced with an option `Cookie expires in (hours)` option.

**Key highlights**:

*   Set how long browser cookies stay active (between 1–8760 hours). You cannot set the value to **zero.**
    
*   Helps auto-expire user sessions after inactivity, improving session management
    
*   Once expired, users see: _"Please check your network connection"_ and must refresh to restart the conversation
    
*   If no value is set, the default expiry duration is 1 year.
    

See [Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security), for more information.

## 

Disable co-reference for agents without context

In this release, the agent configuration option has been enhanced with `Disable co-reference query generation` under the `Settings` tab. This enhancement allows Classic agents with LLaMB skill to maintain or ignore conversational context based on specific use cases, giving you greater control over how user inputs are interpreted.

Navigate to `Configuration>Settings` in the left navigation menu, and locate the option `Disable Co-reference query generation` under Advanced features.

See [Disable Co-reference query generation](/user-guide/how-to/build-agents/configure-agents/define-settings#disable-co-reference-query-generation), for more information.

## 

Enable debug logs for easier troubleshooting

In this release, the `Settings` section on the configuration page has been enhanced with the option `Enable debug logs`.

**Key highlights**:

*   Toggle debug logs on or off at the agent level
    
*   Especially useful when masking is enabled, as logs are otherwise suppressed
    
*   When enabled all logs generated using `console.log` are displayed.
    
*   When the checkbox is unchecked, logging is disabled, and no logs are displayed.
    

**Notes:**

1.  By default, this option is **disabled**.
    
2.  `Enable debug logs` setting is preserved during pull and promotion.
    

See [Enable debug logs](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-debug-logs), for more information.

## 

Disable incoming request authorization in MS Teams channel

In this release, the [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams) channel configuration has been enhanced with the `Disable Incoming Request Authorization` checkbox option under the `Security Options` tab.

**Key highlights**:

*   By default, the platform authenticates all requests from Microsoft Azure
    
*   You can now choose to disable this authentication using a checkbox
    
*   When enabled: unauthorized requests return a 400 Bad Request
    
*   When disabled: unauthorized third-party requests are blocked with a 403 Forbidden
    

See [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

## 

Customize wait-time audio

In this release, the Conversational IVR (C-IVR) channel configuration now includes an option to upload a custom wait time tone. You can customize the wait time tone by uploading an audio file that plays an idle tone for the user.

**Key points**:

*   The upload option becomes available once the `Enable wait time tone` setting is enabled. Click **Select File**, then choose and upload the desired file for the wait time tone.
    
*   The file must not exceed 10 seconds in duration and must be within 5 MB in size.
    

See [Conversational IVR (C-IVR) or Phone](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

## 

Changes

### 

Enable markdown format

In this release, the location of `Enable Markdown Format` option has been changed in the Web, Mobile (Android, iOS), and Custom channel configurations as follows:

#### 

Web, Android, iOS

Before 9.0

After 9.0

Widget Configuration -> Use MD format

Advanced settings -> LLaMB Settings. See [Enable Markdown format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format), for more information.

#### 

Custom channel

Before 9.0

After 9.0

Appears on the first custom channel configuration page where you specify the initial custom channel settings

Appears after saving the initial custom channel configuration in the LLaMB settings section. See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#configure-custom-channel), for more information.

### 

**Mask user IP on the Privacy page**

In this release, the `Mask user IP` toggle at the company level on the [Privacy](/user-guide/how-to/manage-platform-settings/privacy) page has been removed.

Since all the masking configurations are at the agent level, to maintain consistency, the `Mask user IP` option is now available at the agent level masking and is enabled by default for all new agents. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information. To configure IP address masking specific to your agent, contact `Avaamo Support`.

**Notes**:

*   Only the location of the Mask User IP option has been changed from the company level to the agent level, the functionality of this feature remains unchanged.
    
*   If Mask user IP is enabled for your company before the 9.0.0 release, then all the agents in the company have this option enabled by default after the upgrade.
    

### 

Refreshed UI for the Login page

In this release, the user interface (UI) of the Avaamo platform's `Login` page has been revamped with a modern UI, featuring a refreshed color scheme, improved layout, and refined typography to deliver a fresh look for the 9.0 release.

**Note**: Only the UI of the `Login` page has been refreshed in the 9.0.0 release. The login functionality remains unchanged.

#### 

Login page before the 9.0 release:

#### 

Login page after the 9.0 release:

### 

"Standard agent" is now "Classic agent"

In this release, we are renaming the `Standard agent` to `Classic agent` to improve nomenclature consistency and support a clearer understanding of available agent experiences as the platform evolves.

You can view this change on the agent creation page, where you can now select `Classic agent` instead of `Standard agent` from the `Create` dropdown.

### 

Domain configuration now centralized under Web Channel settings

In this release, the option `Mention the domain to which the web channel resources are allowed to be loaded` has been removed from the [Security Policy](/user-guide/how-to/manage-platform-settings/security-policy) page.

The configuration has been moved to the `Web Channel > Security > Allowed Domains` section for more effective management. Ensure that all allowed domains are specified here.

Refer [Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/security), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.1

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.1. These patches include:

1.  Performance improvement to AI agents
    
2.  Minor bug fixes to AI agents
    

Fix patch release

Release date

Release v9.0.1

28th June 2025

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.2

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.2. The following are some of the key fixes included in this release:

1.  [JS errors page: Improved error classification](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.2#js-errors-page-improved-error-classification)
    
2.  [Response handling: Long responses with a disclaimer note](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.2#response-handling-long-responses-with-a-disclaimer-note)
    
3.  [Deprecation – Tag.append](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.2#deprecation-tag.append)
    

### 

JS errors page: Improved error classification 

*   A new **“Type” column** is available in the **JS Errors page** to indicate whether it is an **Error** or a **Warning**.
    
*   This enhancement enables developers to quickly assess the severity and nature of JavaScript issues, facilitating faster debugging and resolution.
    

Refer [JS errors](/user-guide/how-to/build-agents/debug-agents/js-errors), for more information.

### 

Response handling: Long responses with a disclaimer note 

*   For very long responses, the agent now displays a **disclaimer message** at the end.
    
*   This disclaimer appears only when the **Markdown format** is enabled in the channel. Refer [Enable Markdown Format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#enable-markdown-format), for more information.
    
*   This update ensures source citation links are retained even in lengthy responses, addressing the earlier issue of them being hidden.
    

**Note:**

*   The note message can be `customized` or `disabled` by requesting Avaamo support.
    

Example of how the disclaimer note is displayed at the end of a long response:

### 

Deprecation – `Tag.append` 

*   The `Tag.append` method is now **deprecated**. This method must be called within an `async` block, which limits its usage.
    
*   Developers should use `**Tag.asyncAppend**`, that can be applied universally without requiring an `async` block. This method provides greater flexibility and simplifies implementation.
    

Refer [Add tags (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.3

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.3. The following are some of the key fixes included in this release:

1.  [Support for Microsoft Teams single-tenant bots](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.3#support-for-microsoft-teams-single-tenant-bots)
    
2.  [Content ingestion improvements](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.3#content-ingestion-improvements)
    

### 

**Support for Microsoft Teams single-tenant bots**

With Microsoft deprecating multi-tenant bot creation, the Avaamo platform now supports single-tenant bots for Microsoft Teams.

*   All newly created bots default to a single-tenant configuration.
    
*   Existing channels with a multi-tenant configuration continue to function, but multi-tenant Azure bot credentials cannot be used in newly created channels, as Avaamo now supports single-tenant bots by default.
    
*   To migrate, follow the Microsoft Teams documentation or create a new single-tenant Azure app and map it to the Avaamo MS Teams channel.
    

### 

Content ingestion improvements

Introducing a new parsing mechanism that enhances content extraction across multiple file types via API. This improvement applies to newly uploaded content or files via API.

*   **Markdown parsing for HTML content:** Automatically extracts additional formatting elements, such as italics and list tags, and converts them into markdown. This enhancement is applied by default from this release onward, requiring no additional parameters when you upload using the [Upload document](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-document-html-url-to-llamb) API.
    
*   **Section header and hierarchy detection in PDF files:** Allows extraction of section headers, section hierarchies, and tables for better content organization. To use this, pass the parameter `"parsing_lib": "markdown"` in the [Upload file](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-different-types-of-files-pdf-docx-pptx-xlsx-csv-html-to-llamb) API.
    

### 

**MS Teams – Control over Markdown format**

An option is now available to enable or disable Markdown formatting for LLaMB responses in the Microsoft Teams channel. You can configure this setting on the MS Teams configuration page to control whether responses are rendered in Markdown format.

Refer [Microsoft Teams (MS Teams)](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#deploy-your-agent-to-microsoft-teams-channel), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.4

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.4. The following are some of the key fixes included in this release:

1.  [Introducing the DataSync 2.0 (Beta)](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.4#id-1.-introducing-the-datasync-2.0-beta)
    
2.  [Soft unhandled – multilingual support](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.4#id-2.-soft-unhandled-multilingual-support)
    

### 

1\. Introducing the DataSync 2.0 (Beta)

> This feature is currently in beta and intended for testing; feedback is appreciated.

The **DataSync** is designed to empower AI agents by seamlessly integrating and processing information from various content sources, including documentation, product guides, FAQs, and enterprise systems. With this capability, the agent can deliver accurate, context-aware responses grounded in the most up-to-date information.

Navigate to `Configuration>DataSync` to access.

#### 

Key highlights

*   **Content integration**: Ingest structured and unstructured information from documents, web pages, repositories, and other sources.
    
*   **Real-time status synchronization**: Connect with systems of record such as `SharePoint`, `ServiceNow`, `web platforms`, and `files` to ensure content is always current.
    
*   **Flexible synchronization modes**: Choose between `AutoSync` for continuous updates or `Manual` synchronization, with execution history tracking for visibility and control. This is not applicable to content sources like `Files`.
    
*   **Scalability:** Support a wide range of content formats and sources, enabling AI agents to expand knowledge effortlessly.
    
*   **Scheduler or recurring option for content sources:** Automate ingestion cycles to keep knowledge up-to-date without manual intervention.
    
*   **Execution history maintenance:** Track, review, and audit previous synchronization runs for improved transparency.
    
*   **Pagination, search, and filter options:** Simplify navigation and management of large content repositories.
    
*   **Ability to delete content sources:** Remove redundant or outdated sources to maintain a clean and relevant knowledge base.
    
*   **Real-time status polling from LLaMB:** Monitor ingestion and synchronization processes with live updates.
    
*   **Improved scalability and stability:** Handle growing data volumes efficiently while ensuring robust system performance.
    

DataSync lays the foundation for creating intelligent, self-sufficient AI agents that scale support, reduce manual intervention, and enhance the quality of information delivered to end-users.

### 

2\. Soft unhandled – multilingual support 

Enhanced to ensure soft unhandled messages are returned in the user’s selected language. When a query is related to the document but does not match exact information, the message now prompts the user in the same conversation language to rephrase or ask another document-related query.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.5

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.5. The following are some of the key fixes included in this release:

1.  [Default markdown support for new channels](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.5#id-1.-default-markdown-support-for-new-channels)
    
2.  [DataSync enhancements](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.5#id-2.-datasync-enhancements)
    

### 

**1\. Default markdown support for new channels**

All newly created channels include Markdown rendering enabled by default for LLaMB responses. This enhancement ensures that formatted text elements, such as bold, italics, bullet points, and hyperlinks, are rendered as intended without additional setup.

Channels created before this update remain unchanged and retain their existing Markdown configuration. Markdown settings can be manually adjusted from the channel configuration page if needed.

### 

2\. DataSync enhancements

This release includes several improvements to the **DataSync 2.0 (Beta)** version, enhancing usability, consistency, and data security.

**Key enhancements:**

*   **Unlimited ingestion:** The rate limit has been removed — you can now ingest any number of files without restriction.
    
*   **Improved pull/promote process:** Enhanced reliability and performance for data pull and promote operations within DataSync.
    
*   **Dynamic attributes for ServiceNow:** Added support for dynamically pulling attributes from ServiceNow to streamline data synchronization.
    
*   **Duplicate validation:**
    
    *   Duplicate files are not allowed.
        
    *   Duplicate job names are restricted.
        
    
*   **Delete confirmation:** A Consent button has been added before deleting any ingested document in DataSync AI to prevent accidental deletions.
    
*   **Preview URL update:** Support added for updating the `preview URL` when editing a document.
    
*   **Improved data security:** The `View Job Details` pop-up no longer displays the user’s access token.
    
*   **Consistent messaging:** Consent and confirmation messages have been updated to align with the platform’s design and style guidelines.
    
*   **Product stability:** Other cosmetic updates and minor bug fixes have been implemented to enhance overall stability and performance.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.6

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 9.0.6. These patches include:

1.  Performance improvement to AI agents
    
2.  Minor bug fixes to AI agents
    

Fix patch release

Release date

Release v9.0.6

27th October 2025

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/introducing-ai-agents

The `AI Agent` is a next-generation agent built to power highly intelligent and dynamic voice or text-based conversations. With advanced context awareness and adaptive response capabilities, AI Agents elevate query handling and user engagement—delivering interactions that feel more natural, intuitive, and human-like than ever before.

With AI agents a new type of skill - `Prompt skills` is also introduced in this release. Powered by prompt skills, these agents are designed to understand, reason, and act – independently and effectively.

There is no need for extensive training, as required with Classic agents. Instead, you can define all instructions using the [Prompt Skill](/user-guide/ai-agent/skills/prompt-skill), significantly reducing the time needed to build a skill. Along with prompts, you can build complex scenarios using built-in functions, and customized functions.

You can create multiple prompt skills, and the agent can seamlessly redirect interactions from one skill to another based on user queries, ensuring a smooth and dynamic conversation flow.

## 

Sneak peek

Here's a quick sneak peek at the AI agent:

**Note**: AI agent is enabled on demand. Contact your dedicated Customer Success Manager for further assistance.

On the home page, an `AI Agent` can be easily identified and distinguished from other agents by its unique icon, which includes a small logo within it.

This article outlines the [key features](/user-guide/recent-releases/release-notes-v9.0.0/introducing-ai-agents#key-features) of AI agents and the [next steps](/user-guide/recent-releases/release-notes-v9.0.0/introducing-ai-agents#next-steps) to leverage these agents in the Avaamo Conversational AI Platform.

## 

Key features

### 

**Natural and dynamic conversations**

Unlike traditional structured flows, an AI agent enables real-time, human-like interactions with flexibility in conversation order, emotional intelligence, and natural responsiveness to user inputs.

The examples below demonstrate how the AI agent embodies these qualities, offering a more dynamic experience compared to the Classic agent (formerly known as the Standard agent).

AI agent flow

Classic agent

### 

Autonomous decision-making

The AI Agent can make decisions based on predefined goals and contextual data without human intervention. It dynamically adjusts its actions based on real-time inputs and past interactions.

The examples below illustrate how the AI agent adapts its actions based on real-time inputs and makes intelligent decisions aligned with predefined goals.

Example 1

Example 2

### 

Seamless Skill Transfer

The AI agent can seamlessly transfer conversations between different skills while maintaining context, ensuring a smooth and uninterrupted user experience. Using predefined functions, the agent intelligently hands off tasks — for example, moving from general assistance to specialized hotel booking.

This capability allows the AI agent to manage complex workflows efficiently, guiding users through multiple services without manual intervention or loss of conversation flow.

### 

**Multimodal Interaction**

The AI Agent supports `voice and text-based interactions`, providing users with a seamless conversational experience.

*   **Voice Interaction:** Offers a human-like conversation experience, making interactions more natural and engaging.
    

*   **Text Interaction:** Provides structured responses in a chat format, ensuring clarity and consistency.
    

### 

**Smart Integration with LLaMB**

The AI agent integrates seamlessly with LLaMB to enable smooth context transfer and adaptive automation. This integration allows the agent to carry forward user context across interactions and leverage LLaMB's advanced capabilities to automate responses and actions dynamically. As a result, users experience more accurate, relevant, and efficient assistance, even as conversations shift across topics or tasks.

### 

**Context-aware responses**

The AI Agent dynamically adapts to user inputs using predefined `prompt skills`, eliminating the need for a fixed question-answer sequence.

Users can **edit or change their inputs at any moment** without restarting the conversation.

For example, while booking a flight, if a user mistakenly enters the wrong **destination**, they can **correct it mid-conversation** without restarting the process.

### 

**Enhanced query handling**

The AI Agent efficiently manages **multi-turn and complex queries**, allowing seamless transitions between different tasks.

It switches between prompt skills effortlessly to answer related questions.

For example, if a user is booking a flight but suddenly wants to check their past booking details, they can do so without disrupting the current flow—simply by asking about past bookings.

### 

**Comprehensive conversation logging**

The system records complete conversation history, including user-agent interactions, function calls with parameters, transcripts, and corresponding audio recordings for reference.

### 

**Cost efficiency - Build agents faster**

AI agents are cost-efficient, require no training, and eliminate the need for complex dialog flows. They enable faster development and quick iteration, allowing teams to experiment and refine results easily through prompt adjustments.

### 

**No-Code/Low-Code**

Prompts enable non-technical users to interact with AI systems effectively, eliminating the need to write code.

### 

**Fluid Conversation**

AI agents maintain natural, flowing conversations without sounding robotic. They understand context across turns, enabling users to speak freely without rigid commands.

### 

**Follow-On**

Agents can ask for and remember key follow-up information—like your location or preferred provider—right after initial intent is captured, helping personalize and complete the task.

### 

**Switch Topic Mid-Conversation**

Users can change topics on the conversation—for example, asking about a service or trying a demo before booking an appointment. The agent can seamlessly switch focus without losing the overall context.

### 

**Agent Callback**

When the AI agent can not resolve an issue, it can collect necessary details and schedule a callback from a human agent, ensuring continuity and a smooth handoff.

### 

**Interruption**

Users can interrupt the AI agent mid-response (e.g., “Actually, never mind”) and the agent stops and adjusts based on the new input, instead of continuing its scripted response.

### 

**Silence**

AI agents can handle user silence smartly, either pausing to wait for input or gently prompting the user to resume the interaction after a certain time.

### 

**Try to break it**

Even if users try to confuse or “break” the agent with odd inputs or edge cases, the agent follows enterprise guardrails to stay on task, stay secure, and avoid hallucinations or inappropriate responses.

### 

**Detect Frustration**

By picking up signals like repeated inputs, negative language, or abrupt changes in tone, the AI can detect user frustration and adapt by simplifying, escalating, or offering human support.

## 

Next steps

*   Understand what is required in the [Before you begin](/user-guide/ai-agent/before-you-begin) section.
    
*   Start by creating a new [AI agent](/user-guide/ai-agent/create-an-ai-agent).
    
*   You are now ready to [get started](/user-guide/ai-agent/get-started) by exploring AI agents in the Avaamo Conversational AI Platform.
    

Refer [AI Agent](/user-guide/ai-agent/overview-key-features), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/introducing-llamb-content-regression-testing

In this release, a new feature `LLaMB Content Regression Testing` has been introduced for LLaMB. Previously available only for other skills, this functionality has now been extended to include LLaMB-specific skills.

Regression testing is a tool for verifying that an agent's responses are accurate and consistent with previous versions. It helps ensure that queries and their corresponding responses remain correct, even as the underlying models and AI tools evolve.

The goal of regression testing is to ensure that query responses remain consistent over time, providing users with confidence in the agent’s performance and reliability.

To access LLaMB regression testing, go to the `Agent` page and click `Test > LLaMB Regression` in the left navigation menu.

**Note:** The LLaMB Regression Test option is visible only if the agent is configured with an `LLaMB` content skill.

## 

How to use it?

The steps to set up regression, execute it, and download the results remain similar to those of classic agents; however, the regression test file format for preparing the input file and analyzing the results differs in LLaMB. See [LLaMB regression testing](/user-guide/llamb/regression-testing), for more information.

### 

Step 1: Prepare regression test input file

A regression test file contains a set of questions, the actual answer to each question, which is the ground truth, and any user properties specific to that answer.

**Key point:** Collaborate with Subject Matter Experts to build a regression test file in the Discovery phase itself.

The following is a sample regression test input file. See [Regression test file format](/user-guide/llamb/regression-testing/regression-test-file-format), for more information.

### 

Step 2: Run the regression test

Running LLaMB remains the same as running regression for classic agents. See [Run regression test](/user-guide/llamb/regression-testing/run-regression-test), for more information.

### 

Step 3: Analyze the results and improvise

You can analyse the results after the run by downloading the file, which includes details of the pass/fail statistics for each query.

The following is a sample regression test input file. See [Understanding results](/user-guide/llamb/regression-testing/understanding-results), for more information.

Next step is to improve your accuracy. See [How to improve accuracy?](/user-guide/llamb/regression-testing/how-to-improve-accuracy) for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/introducing-voice-usage

In this release, a new usage report `Voice Usage` has been introduced in the `Settings` section.

This page helps you to track the anticipated voice billing usage associated with the company’s license configuration. It allows you to track monthly incoming and outgoing calls on your account and export usage reports for further analysis.

Click your `Profile` icon at the top-right corner, navigate to `Settings -> Usage Reports` to access the `Voice Usage` option.

**Note:** This page is available only for users with the `Settings` role. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

See [Voice Usage](/user-guide/how-to/manage-platform-settings/usage-reports/voice-usage), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/meet-aura-your-smart-support-agent

The `Aura` is an AI-powered assistant designed to deliver immediate, accurate, and contextual first-level support.

It empowers agent developers and business teams by providing instant resolutions to common queries, significantly reducing dependency on other teams.

Powered by [LLaMB](/user-guide/llamb/get-started), Aura taps into Avaamo’s documentation and internal knowledge base to bring you the right information quickly. By leveraging the latest advancements in natural language processing and contextual AI, the Aura ensures 24/7 availability and high accuracy across a wide range of support scenarios.

Here's a quick sneak peek at the Aura:

### 

Key objectives

*   **Enhance self-service experience:** Aura agent enables users to resolve their queries independently, fostering confidence and improving overall satisfaction.
    
*   **Accelerate resolution time:** Aura agent helps users find solutions quickly without waiting for human intervention by providing real-time, context-aware answers.
    
*   **Improve Operational Efficiency:** Solution engineers can focus on complex cases as Aura efficiently manages repetitive and straightforward inquiries.
    

### 

Aura for everyone

*   **Developers:** Instantly access documentation, integration guides, and troubleshooting steps while building or maintaining agents.
    
*   **Business Teams:** Obtain quick clarifications on agent functionalities, configurations, and operational best practices.
    
*   **Solution engineers:** Retrieve validated solutions to frequent queries, reducing resolution time for recurring issues.
    

### 

Conversation with Aura

Aura is your built-in AI assistant, accessible to all logged-in users across the platform. No matter where you are in the dashboard, just click the `Aura` icon to open the chat window and start interacting. Use Aura to get instant help, find answers to your questions, or receive guidance—right when you need it.

**Example questions you can ask Aura:**

*   _What channels can LLaMB be deployed on?_
    
*   _How do I get my SharePoint content into Avaamo LLaMB ?_
    
*   _If the content is updated in ServiceNow after ingestion in Avaamo LLaMB, then does it automatically update in the agent?_
    

### 

How to use Aura

1.  Navigate to the **Avaamo Dashboard**.
    
2.  Locate and click the **Aura logo** on the top sidebar. This appears on any section of the Avaamo dashboard.
    

1.  It redirects you to Aura's landing page, which displays a set of predefined questions.
    

1.  To ask a question, type your query in the input field at the bottom of the page and press **Enter** or click the **Send** button.
    
2.  Aura responds with an answer relevant to your query.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/watch-the-webinar-on-v9.0.0

Take a look at the webinar on v9.0.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v9.0.0/introducing-generative-ai

This release introduces **Generative AI Configuration** as a new feature for `standard agents`.

Generative AI Configuration enables users to integrate generative AI capabilities into their agents. This feature refines the agent's responses and adapts to conversational nuances, delivering natural and personalized responses. It transcends mechanical responses, offering a more interactive and natural human user experience.

Previously, these capabilities were exclusive to advanced agents. By extending them to standard agents, the update significantly enhances their functionality and value, empowering them with advanced AI-driven response generation.

You can enable it on the agent page by navigating to `Configuration>Generative AI Configuration.`

#### 

Key Features of Generative AI Configuration

1.  **Monitor Usage of Generative AI** Track and analyze the usage of generative AI within your agent, gaining insights into how often and effectively these capabilities are being utilized.
    
2.  **Enable Generative AI** Activate generative AI features for your agent to unlock advanced response capabilities, enhancing interaction quality and user experience.
    
3.  **Select Agent Personas** Customize your agent's personality by selecting from predefined personas, allowing it to adopt a tone and style that aligns with your brand or audience.
    
4.  **Enable Contextual Query Correction** Improve query interpretation by enabling automatic corrections based on context, ensuring better understanding and more accurate responses.
    
5.  **Generate Q&A Responses Using LLM** Leverage large language models (LLMs) to generate precise and contextually relevant answers for Q&A scenarios automatically.
    
6.  **Utilize LLM for Q&A Inference** Use LLMs to process and infer the best possible answers to user queries, ensuring high-quality and accurate responses.
    
7.  **Use LLM for Dialog Inference** Enhance conversational capabilities by using LLMs to infer and deliver natural, contextually appropriate dialog responses.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.2.0

The Avaamo Conversational AI Platform v8.2.0 release includes **one new feature** and **7 enhancements.**

## 

New feature - Introducing DataSync AI

This release introduces a new feature referred to as `DataSync AI`**.**

The `DataSync AI` is a powerful feature within [LLaMB](/user-guide/llamb/overview-key-features) designed to facilitate seamless content access across repositories such as `SharePoint` and `ServiceNow`. It acts as an interface, enabling users to leverage resources stored in these repositories to enhance the capabilities of their LLaMB agents in responding to user queries effectively from the enterprise content.

The following flow diagram illustrates the workflow of the DataSync AI.

See [Introducing DataSyncAI](/user-guide/recent-releases/release-notes-v8.2.0/whats-new-v8.2.0-introducing-datasync-ai), for more information.

## 

Enhancements

These enhancements are categorized according to the modules within the Avaamo Conversational AI Platform for streamlined navigation.

This release includes enhancements related to the following existing features:

Module

Enhancements

Built-in Skills

[Enhanced personalization: Outro message support](/user-guide/recent-releases/release-notes-v8.2.0#enhanced-personalization-outro-message-support)

Live agent Console

[Enhanced personalization: Live agent translation for Avaamo Live Agent](/user-guide/recent-releases/release-notes-v8.2.0#enhanced-personalization-live-agent-translation-for-avaamo-live-agent)

MS Teams

[Improved user experience: Show more toggle to render long responses in MS Teams channel](/user-guide/recent-releases/release-notes-v8.2.0#improved-user-experience-show-more-toggle-to-render-long-responses-in-ms-teams-channel) [Improved user experience: Table Rendering for LLaMB Responses in Microsoft Teams](/user-guide/recent-releases/release-notes-v8.2.0#improved-user-experience-table-rendering-for-llamb-responses-in-microsoft-teams)

Outreach

[Outreach insight API: Filter campaigns using multiple campaign IDs and user properties](/user-guide/recent-releases/release-notes-v8.2.0#outreach-insight-api-filter-campaigns-using-multiple-campaign-ids-and-user-properties)

C-IVR improvements

[Improved ASR](/user-guide/recent-releases/release-notes-v8.2.0#improved-asr)

Accessibility enhancements

[Improved voice-over narration for card elements](/user-guide/recent-releases/release-notes-v8.2.0#improved-voice-over-narration-for-card-elements)

**Deprecation notice**: See [Deprecated features,](/user-guide/deprecated-and-removed-features/v8.2.0-deprecated-features) for all the deprecated features in the `v8.2.0` release.

### 

Enhanced personalization: Outro message support

In this release, the personalization experience with the user has been enhanced with a new `Outro` feature.

This enhancement allows you to create and post a customized message to the user after an agent’s response. It is beneficial for skills that provide one-off replies, such as [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a) and [LLaMB](/user-guide/llamb/overview-key-features) skills as it improves the user experience by providing a clear, standardized message after the agent responds as per your business requirement. It helps to streamline and provide consistent communication across all interactions.

A common use case is to post disclaimers or system-generated messages, such as `This is a system-generated message, please do not reply` after the agent's response say in a Q&A skill.

In the following illustration, the outro message is configured to be displayed for all the Dynamic Q&A responses:

In the agent response, the message configured in the outro skill is displayed after the agent's response:

See [Outro skill](/user-guide/how-to/build-agents/add-skills-to-agent#outro-skill), for more information.

### 

Enhanced personalization: Live agent translation for Avaamo Live Agent

This release enhances language support for live agent transfers by enabling real-time translation between the end user and the live agent.

Users can now chat with live agents in 100+ supported languages on the Avaamo Platform, while agents continue to communicate in English. The end-user's language is translated into English for the live agent, and the agent's response is translated back into the user's language. This seamless real-time translation ensures smooth communication when a conversation is transferred to a live agent.

Key advantages of this feature include:

*   **Personalized User Experience:** Users can communicate in their native language, enhancing the overall interaction.
    
*   **Cost and Maintenance Reduction:** Live agent translation removes the need for a multilingual agent team, allowing customers to communicate in their preferred languages. This feature enables businesses to cater to a diverse customer base without requiring agents to be fluent in every supported language, optimizing staffing and minimizing the risk of miscommunication.
    
*   **Improved Operational Efficiency:** The need for specific routing rules to detect the user's language and direct them to the appropriate live agent is eliminated, streamlining the process.
    

Here's an example that demonstrates live agent translation where the user's local language is French:

*   **End user to Live agent**: Messages from the end user in French are translated into English for the live agent.
    

*   **Live agent to End User**: Responses from the live agent in English are translated back to French for the end user.
    

See [Live Agent Translation](/user-guide/live-agent-console/live-agent/live-agent-translation)[,](/user-guide/how-to/build-agents/add-skills-to-agent) for more information.

### 

Improved user experience: Show more toggle to render long responses in MS Teams channel

In the release, the MS Teams channel configuration page has been enhanced with a new `Enable Show more button` option.

This feature is designed for streaming responses and is useful when displaying summarized lengthy responses from LLaMB in the MS Teams channel. When enabled, it renders a partial response with a `Show more` button, enabling users to expand content gradually.

This enhances the user experience by quickly displaying partial messages, reducing the wait time for full message rendering. This approach enhances clarity and streamlines the user experience effectively.

**Note**: `Show more` option is displayed only when responses are rendered from the LLaMB skill.

See [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

### 

Improved user experience: Table Rendering for LLaMB Responses in Microsoft Teams

In this release, the table rendering process in agent's responses is significantly improved.

Previously, users had to click the **View Table** button to view the entire table in a separate popup window. While this approach provided a focused view, it required additional user interaction to access the content.

Now, instead of displaying the **View Table** button, tables are directly rendered within the chat screen itself, allowing for immediate access to the data without any extra steps.

This enhancement streamlines the user experience by eliminating the need for popups and allowing users to view table data in line with their conversation. This update simplifies the workflow, reduces interruptions, and enhances the overall user interaction with table data.

See [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

### 

Outreach insight API: Filter campaigns using multiple campaign IDs and user properties

In this release, we have enhanced the outreach insights API with the following:

1.  **Multiple Campaign ID Filtering**: You can now filter campaigns using multiple campaign IDs. Previously, this feature was limited to a single campaign ID, restricting the scope of your analysis. With this enhancement, you can gain insights across various campaigns simultaneously, providing a broader understanding of your outreach performance.
    
2.  **Filter the messages using user properties:** This allows users to filter campaigns using predefined, fixed [user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties). This enhancement helps quickly locate and manage messages based on standard user attributes. Example: `first_name` , `last_name`
    

See [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api), for more information.

### 

Improved ASR

In this release, Automatic Speech Recognition (ASR) has been fine-tuned with a new and improved model. The following are some of the key benefits of the new ASR model:

*   Better quality recognition
    
*   Better extraction of alphanumerics
    

### 

Improved voice-over narration for card elements

When an agent response contains a card element, VoiceOver now narrates the message: `'Bot sent, Card. Use Shift Tab to navigate through the items.'` Previously, it narrated the message as `'Bot sent, Card'.`This functionality is designed to enhance the accessibility of the system, particularly for those who use assistive technologies to interact with content.

This helps the users who use assistive technologies be properly informed about available navigation shortcuts, improving the overall accessibility and usability of the interface.

**Note:** Use standardized selectors when applying CSS. Relying on non-standard selectors like `aria-label` or others may lead to design inconsistencies when displaying content in the agent interface.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.1

This fix patch release contains critical bug fixes, performance fixes, and minor bug fixes. The following are some of the key fixes included in this release:

1.  [LLaMB: Security for Citation links](/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.1#llamb-security-for-citation-links)
    
2.  [LLaMB: Response formatting fixes](/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.1#llamb-response-formatting-fixes)
    

## 

LLaMB: Security for Citation links

*   Citation links now expire 24 hours after generation, restricting access to a specific timeframe.
    
*   Additional checks ensure links are accessible only to authenticated, authorized users.
    
*   The citation link format now includes security tokens for validation, as detailed below:
    
    *   Old Citation Link Format:
        
        Copy
        
            https://llambx.avaamo.com/answers/external/document-groups/{document-group_id}/documents/{document_uuid}#page={page_no}
        
    *   New Citation Link Format:
        
        Copy
        
            https://cx.avaamo.com/llamb/messages/{message_uuid}/documents/{document_uuid}?lt={base64_encoded_JWT_token}&page={page_number}
        
    

**Important**: All existing citation links in the Conversation history, Query insights, and agent conversations will expire 24 hours after patch release 8.2.1. Contact Avaamo support to regain access.

See [Citation link](/user-guide/llamb/citation-links), for more information.

## 

LLaMB: Response formatting fixes

*   LLaMB responses support markdown formatting with the `Use MD Format` option, enabling rich text elements like bold, italics, and hyperlinks.
    
*   Hyperlinks within the ingested documents are accessible through the LLaMB Responses.
    

**Important:**

1.  The [`Use MD Format`](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#use-md-format) option is available for [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel), [Custom](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#configure-custom-channel), and, Mobile ([Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps) and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps)) channels.
    
2.  To utilize this option, ensure you re-ingest the document before enabling it.
    

See [Use MD Format](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#use-md-format), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.2

This fix patch release contains critical bug fixes, performance fixes, and minor bug fixes. The following is one of the key fixes included in this release:

## 

LLaMB: Security for Citation links

**Authorization Expiry** for citation links now applies exclusively to non-web channels and is no longer applicable to web channels.

Refer [Citation links](/user-guide/llamb/citation-links), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.2.0/whats-new-v8.2.0-introducing-datasync-ai

The `**DataSync AI**` is a powerful feature within **LLaMB** designed to facilitate seamless content access across repositories such as **SharePoint** and **ServiceNow**. It acts as an interface, enabling users to leverage resources stored in these repositories to enhance the capabilities of their LLaMB agents in responding to user queries effectively from the enterprise content.

Previously, integrating URLs or documents into LLaMB content involved adding them individually to the Document group (refer to Document [Upload content](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/upload-content)). With the introduction of DataSync AI, users can now integrate a wide variety of vast content directly from their repositories into the skill, streamlining the content integration and management process.

The following flow diagram illustrates the workflow of the DataSync AI.

## 

Key features

### 

Exploring diverse content sources

The **DataSync AI** provides flexibility by offering content ingestion from a selection of content sources, such as **SharePoint** and **ServiceNow**. Users can choose from these sources to integrate relevant content into their systems or applications, enhancing the versatility and adaptability of their content management workflows. This feature ensures that users can access and utilize information from diverse repositories based on their needs and preferences.

See [SharePoint Connector](/user-guide/datasync-ai/content-sources/sharepoint) and [ServiceNow Connector](/user-guide/datasync-ai/content-sources/servicenow), for more information

### 

Seamless connection configuration

Setting up the connection between your content source and the LLaMB agent is straightforward. This process involves entering necessary connection details, which ensures a smooth setup for your chosen data source. Following a few simple steps, you can quickly establish a functional link between the content source and your LLaMB agent, enabling efficient data retrieval and utilization.

### 

Curate your article selection

Tailor your search experience by selecting articles from the content source that meet your specific needs. Enhance your capabilities with the '**Filter Articles**' feature, now optimized to offer a wide selection from diverse knowledge bases. Apply advanced filters to refine your search, ensuring precise and customized results catering to your requirements.

### 

Personalize with document attributes

Customize your documents by selecting attributes that apply to all documents selected for ingestion. These attributes ensure accessibility to specific authorized groups.

Also, if you decide to introduce new attributes in the future for additional customization or refinement, the system fully supports this capability. This flexibility allows you to continually adapt and enhance document management according to evolving needs and preferences.

### 

Achieving seamless ingestion of your content

After selecting resources from the content source, they become instantly available in the LLaMB agent. When the status of all chosen articles and documents displays as "**Ingested**," it confirms their accessibility within the document group of your agent skill. Additionally, you can easily track the total count of uploaded articles and documents for comprehensive management and monitoring.

Also, our system automatically synchronizes any updates made to ingested documents with your agent. This ensures that your agent remains synchronized with the latest information, whether it's minor edits or significant revisions, thereby maintaining data integrity throughout your operations.

See Setup content sync for SharePoint Connector and Setup content sync for ServiceNow connector, for more information.

See [DataSync AI](/user-guide/datasync-ai/overview-key-features)[,](https://app.gitbook.com/o/-LpXFbuTM3h40PfxYgao/s/-LpXFTiTgns4Ml77XGi3/~/changes/4192/datasync-ai) for detailed information.

## 

Next steps

1.  Understand what is required in the [Before you begin](/user-guide/datasync-ai/before-you-begin) section.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.2.0/watch-the-webinar-on-v8.2.0

Take a look at the webinar on v8.2.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.1.0

The Avaamo Conversational AI Platform Atlas 8.1.0 release includes **10** **enhancements** and a few bug fixes.

For streamlined navigation, these enhancements are categorized according to the modules within the Avaamo Conversational AI Platform:

Module

Enhancements

LLaMB

[Custom channel support - Integrate LLaMB with any enterprise application seamlessly](/user-guide/recent-releases/release-notes-v8.1.0#integrate-llamb-with-any-enterprise-application-seamlessly)

LLaMB

[Improved source citations in LLaMB responses](/user-guide/recent-releases/release-notes-v8.1.0#improved-source-citation-in-llamb-responses)

LLaMB

[Improved personalization using document attributes](/user-guide/recent-releases/release-notes-v8.1.0#improved-personalization-using-document-attributes)

Advanced agents

[Enhance the conversational experience by enabling/disabling co-reference](/user-guide/recent-releases/release-notes-v8.1.0#enhance-the-conversational-experience-by-enabling-disabling-co-reference)

User property

[Improved personalization: Assign multiple values to single user property](/user-guide/recent-releases/release-notes-v8.1.0#improved-personalization-assign-multiple-values-to-single-user-property)

C-IVR channel configuration improvements

[Ease of use - UI toggle to enable wait time tone](/user-guide/recent-releases/release-notes-v8.1.0#ui-toggle-to-enable-wait-time-tone)

Entities

[Enhance the accuracy by enabling/disabling entity value translation](/user-guide/recent-releases/release-notes-v8.1.0#enhance-the-accuracy-by-enabling-disabling-entity-value-translation)

New REST APIs

*   [User property API (Create, Get, Update, and Delete)](/user-guide/recent-releases/release-notes-v8.1.0#user-property-api-create-get-update-and-delete)
    
*   [Get message insights](/user-guide/recent-releases/release-notes-v8.1.0#get-message-insights)
    

Updated REST API

*   [Standardization of Analytics Message API](/user-guide/recent-releases/release-notes-v8.1.0#standardization-of-analytics-message-api)
    

### 

Integrate LLaMB with any enterprise application seamlessly

In this release, the deployment channel support for LLaMB has been enhanced. You can now deploy LLaMB in the `Custom channel` . This expands the capability to seamlessly integrate LLaMB with any enterprise application, making it more accessible to users.

Custom channel support has been a fundamental feature for all agents within the Avaamo Platform since its inception. With this release, this capability has been expanded to include agents equipped with LLaMB skills.

The user interacting with the agent sends/receives messages to/from a custom channel. The custom channel integrates with the Avaamo platform via Avaamo API and Webhook calls to send and receive messages. See [Custom channel](/user-guide/llamb/custom-channel), for more information,

In the previous release, you could deploy LLaMB only on the Web, MS Teams, Android, and iOS channels, limiting its reachability.

### 

Improved source citation in LLaMB responses

This release has improved the source citations within LLaMB responses to enhance readability and optimize space utilization. The citations are now concise and streamlined, allowing users to focus more on the responses while still providing easy access to the citation references when required.

Enhanced source citation (v8.1.0)

Earlier source citation (v8.0.0)

In this release,

*   Each source citation is sequentially numbered and displayed within square brackets, such as \[1\]
    
*   Multiple source citations are consolidated into a single line after the response, with each citation separated by a space, such as \[1\] \[2\] \[3\]
    
*   Users can hover on the numbers to display the actual document name and click the document name to display the actual source.
    

In previous versions, each source citation was displayed on a separate line labeled "View source". This approach resulted in excessive use of space, particularly when multiple citations were present, diverting attention from the response to the sources.

### 

Improved personalization using document attributes

In this release, you can associate attributes to the uploaded URLs for rendering personalized responses to the users based on business requirements.

Typically, in enterprise organizations, content is extensive and often tailored to specific user groups. LLaMB facilitates seamless content ingestion and allows you to associate attributes with the uploaded content. Document attributes are valuable for filtering responses and creating personalized responses based on user properties like region, roles, and products.

For example: When a policy document is specific to a certain region, specifying the relevant attribute for that document enables the agent to provide the corresponding policy information to users trying to access information from a specific region.

See [Document attributes](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/document-attributes), for more information.

### 

Enhance the conversational experience by enabling/disabling co-reference

In this release, the configuration option for Advanced agents has been enhanced with a new checkbox `Disable Co-reference query generation`in the `Agent Configuration -> Settings` page.

An `Advanced agent` can remember and maintain context throughout a conversation. This enables the system to understand references, callbacks, and evolving topics within the dialogue. However, co-reference may not be required for all the use cases. In specific scenarios where co-reference resolution might introduce errors or unnecessary complexity, you can choose to disable co-reference.

**Notes**:

*   By default, the co-reference option for Advanced agents is enabled.
    
*   `Disable Co-reference query generation` option is available only for Advanced agents.
    

See [Disable Co-reference query generation](/user-guide/how-to/build-agents/configure-agents/define-settings#disable-co-reference-query-generation), for more information.

### 

Improved personalization: Assign multiple values to single user property

This release significantly boosts the ability to deliver personalized experiences through Avaamo agents. Now, in this release, you can assign an array of values to a single user property.

While personalized responses using user properties have been available since the 5.x release, they were restricted to single-value strings like "employee\_status" or "customerType." By utilizing user properties, you could authorize users via JWT, and when coupled with response filters, generate personalized responses.

However, a single-user property often requires multiple values in a true enterprise setting. For instance, an employee can have a hybrid location spanning two countries. With this enhancement, you can now assign an array of values to a single user property, enabling enhanced authentication and personalized responses based on these values.

This improvement is a significant advancement in personalized response creation, facilitating scalability at the enterprise level without being constrained by the limitations of single, simplistic user properties.

#### 

How to use?

User.setProperty

User.setProperties

Authorize using JWT

User properties in custom channel

**Syntax**:

See [User.setProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty), for more information.

**Syntax**:

See [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties), for more information.

You can now pass multiple values in a user property based on the requirement and authorize the users using JWT. Earlier, only single-valued user property was supported.

The following is a sample user payload with some basic user details such as email, and all are single string values and an additional country property with an array of values:

See [Authorization using JWT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/authentication-using-jwt), for more information.

With this release, you can pass multiple values in a property in the custom channel payload. Earlier, only single-valued user property was supported in the custom channel payload.

The following is a sample user payload with some basic user details such as email, and all are single string values and an additional country property with an array of values:

See [Custom channel](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel), for more information.

### 

UI toggle to enable wait time tone

In this release, the C-IVR channel configuration page has been enhanced with a new toggle option `Enable wait time tone`.

The ability to enable a wait time or idle tone has been available since the Atlas 8 release, where it proves particularly useful when an agent needs additional time to respond, keeping the user engaged and informed that a response is forthcoming. See [Voice idle tone in Atlas 8 release notes](/user-guide/recent-releases/release-notes-v8.0#voice-idle-tone), for more information.

Previously, in the Atlas 8 release, developers had to contact Avaamo Support to activate this feature. Now, they can enable it directly from the channel configuration page, and hence,

*   It is convenient and easy to use. Sliding the toggle option will enable the idle tone. Note that by default, the toggle is disabled.
    
*   Provides developers complete control over when to enable and disable as per the requirements.
    
*   Faster development cycle, since developers need not reach Avaamo Support to enable or disable this feature.
    

See [C-IVR channel configuration](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

### 

Enhance the accuracy by enabling/disabling entity value translation

In this release, the configuration option for agents has been enhanced with a new checkbox `Do not translate entity values` in the `Agent Configuration -> Settings` page.

By default, the entity values in different languages are always translated to en-US before intent matching. However, in certain scenarios, translating the entity values may result in a completely different meaning in the corrected query and can result in unexpected intent matches. In such cases, you can enable the checkbox `Do not translate entity values`. When you enable this checkbox entity values are not translated to en-US and are used as-is for intent matching.

**Note:** By default, `Do not translate entity values` is disabled, which implies that entity values are always translated to en-US before intent matching.

See [Do not translate entity values](/user-guide/how-to/build-agents/configure-agents/define-settings#do-not-translate-entity-values), for more information.

### 

User property API (Create, Get, Update, and Delete)

In this release, a new REST API has been introduced to:

*   Create new user property in the agent
    
*   Get all the user properties from the agent
    
*   Update the user property value in the agent for a specified key
    
*   Delete user property in the agent with the specified key
    

Create (POST)

Get (GET)

Update (PUT)

Delete (DELETE)

See [User property API](/user-guide/ref/avaamo-platform-api-documentation/user-property-api), for more information.

### 

Get message insights

In this release, a new REST API has been introduced to get insights using the message UUID. Example: In the custom channel response, message UUID is returned and you can use the message UUID to get the insights using this API.

See [Message insights](/user-guide/ref/avaamo-platform-api-documentation/agent-api/message-insights), for more information.

### 

Standardization of Analytics Message API

In this release, the `Analytics Message API` has been standardized with the following changes:

*   A new response attribute `layer_id` has been added to the user object. `layer_id`serves as a unique identifier for each user.
    
*   **first\_name**: If the user information is collected, then `first_name` indicates the first name of the user corresponding to the message, or else it is displayed as "You". See [Collect user information](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#collect-user-information), for more details.
    

The following is a sample response returned by the Analytics Message API:

See [Message API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.0

The Avaamo Conversational AI Platform `Atlas 8` release includes 1 new product, 3 new features, and 13 enhancements.

**New product:** The Avaamo Conversational AI Platform introduces a new product `LLaMB - Large Language Model for Business` in this release. See [Introducing LLaMB](/user-guide/recent-releases/release-notes-v8.0/introducing-llamb), for more information.

**New features**: This release includes the introduction of the 3 new features:

1.  [Mercury theme](/user-guide/recent-releases/release-notes-v8.0/introducing-mercury-theme)
    
2.  [User Acceptance Testing (UAT) in the Web channel](/user-guide/recent-releases/release-notes-v8.0/introducing-uat-in-web-channel)
    
3.  [Advanced agent](/user-guide/recent-releases/release-notes-v8.0/introducing-advanced-agent)
    

**Enhancements**: This release includes enhancements related to the following existing features:

Module

Enhancements

Outreach

*   [Faster campaign execution](/user-guide/recent-releases/release-notes-v8.0#faster-campaign-execution)
    
*   [Campaign configuration improvements](/user-guide/recent-releases/release-notes-v8.0#campaign-configuration-improvements)
    
*   [Improved error handling with Recipient CSV](/user-guide/recent-releases/release-notes-v8.0#improved-error-handling-with-recipient-csv)
    

Live agent console

*   [View real-time conversation duration](/user-guide/recent-releases/release-notes-v8.0#view-real-time-conversation-duration)
    
*   [Changelog API](/user-guide/recent-releases/release-notes-v8.0#changelog-api)
    
*   [Live Sessions to monitor real-time information](/user-guide/recent-releases/release-notes-v8.0#live-sessions-to-monitor-real-time-information)
    
*   [Send attachments to live agents](/user-guide/recent-releases/release-notes-v8.0#send-attachments-to-live-agents)
    

Web channel

[Enable streaming messages via typing animation](/user-guide/recent-releases/release-notes-v8.0#enable-streaming-messages-via-typing-animation)

MS Teams

[MS Teams channel configuration improvements](/user-guide/recent-releases/release-notes-v8.0#ms-teams-channel-configuration-improvements)

Accessibility

[Accessibility enhancements](/user-guide/recent-releases/release-notes-v8.0#accessibility-enhancements)

SMS channel

[Track SMS billing using SMS Usage report](/user-guide/recent-releases/release-notes-v8.0#track-sms-billing-using-sms-usage-report)

C-IVR improvements

*   [Improved ASR](/user-guide/recent-releases/release-notes-v8.0#improved-asr)
    
*   [Voice idle tone](/user-guide/recent-releases/release-notes-v8.0#voice-idle-tone)
    

Javascript code

[Remove user property](/user-guide/recent-releases/release-notes-v8.0#remove-user-property)

**Changes:** This release includes changes related to the following modules:

*   [Campaign statistics page](/user-guide/recent-releases/release-notes-v8.0#campaign-statistics-ui)
    
*   [Outreach insights API](/user-guide/recent-releases/release-notes-v8.0#outreach-insights-api)
    
*   [Label change: Create new agent](/user-guide/recent-releases/release-notes-v8.0#label-change-create-new-agent)
    

**Deprecation and removal notice**: See [Deprecated and removed features](/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features), for a complete list

of all the deprecated and removed features in the `Atlas 8` release.

## 

Outreach enhancements

### 

Faster campaign execution

In this release, significant enhancements have been made to the performance of campaign execution times for both SMS and Voice through internal code optimizations. This optimization greatly scales the campaign, enabling it to handle huge recipients efficiently.

This performance improvement extends to the download functionality of the campaign execution report from the `Campaign statistics` page. Given the optimized campaign execution time capable of managing larger loads, the campaign download report option has also been refined to handle similar demands. The `Download` option now initiates an asynchronous job, facilitating the seamless download of larger campaign reports.

See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

### 

Campaign configuration improvements

In this release, a new optional textbox `Country Code` has been introduced in the `Campaign -> Add Message` section, allowing users to specify the country code for recipients. This feature applies exclusively to SMS and voice campaigns.

Given the mandatory requirement for recipient phone numbers to be in the E.164 format, which necessitates a country code, this feature proves valuable when working with recipient files that lack country codes. By specifying a country code, all recipient phone numbers are automatically prefixed with the designated code, ensuring smooth delivery of campaign messages.

Previously, in the absence of a country code, the campaign would encounter failure with an invalid phone number error message, or users had to execute a pre-processing job to append the campaign recipients with a country code before initiating the campaign, thereby introducing delays to the campaign execution time.

See [Country code](/user-guide/outreach/campaigns/create-new-campaign#country-code-optional), for more information.

### 

Improved error handling with Recipient CSV

In this release, enhancements have been made to the error handling process during Recipient CSV parsing to facilitate more effective troubleshooting of campaign failures.

Upon encountering any recipient CSV parsing error during campaign execution, the system now displays a detailed error message in the `Campaign statistics` UI page, specifying the line or row where the error occurred. Furthermore, if users have configured campaign failure notifications, an email containing the error details is notified to all the users. See [Campaign failures](/user-guide/outreach/campaigns/create-new-campaign#campaign-failures), for more information.

See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

## 

Live agent console enhancements

### 

View real-time conversation duration

In this release, the `Live Agent Console` has been enhanced with a real-time conversation duration timer. Live agents can view this timer for all currently active chat requests in the Live agent console.

The conversation duration timer is a valuable indicator for managing customer support interactions efficiently, meeting SLAs, and enhancing the overall customer experience. It provides real-time insights into the progress of each chat and allows live agents to make informed decisions.

See [View real-time conversation duration](/user-guide/live-agent-console/live-agent/view-real-time-conversation-duration), for more information.

### 

Changelog API

In this release, the `Live Agent Console` has been enhanced with a new `Changelog API`.

You can use the Changelog API to view all the configuration changes performed by the live agent (such as live agent status updates) and the supervisors (such as configuration changes in Teams, Routing rules, or Quick responses).

See [Live Agent Changelog API](/user-guide/live-agent-console/live-agent-console-rest-apis/live-agent-changelog-api), for more information.

### 

Live Sessions to monitor real-time information

In this release, the `Live agent console` for Supervisors has been enhanced with a new `Live Sessions` page.

`Live Sessions` enable supervisors to monitor real-time information on the customer wait time and conversation duration of all the active and queued chat requests within the company. This provides valuable insights into traffic patterns and workload, allowing them to optimize chat routing and create specialized teams with specific skill sets, ultimately enhancing customer satisfaction.

See [Live sessions](/user-guide/live-agent-console/supervisor/live-sessions), for more information.

### 

Send attachments to live agents

In this release, the `Web channel` configuration has been enhanced with a Send attachment option in the `Channels -> Widget configuration` section. This option is useful when users have to send attachments in the live agent conversations from the agent to the live agent.

In the agent, the attach icon is enabled allowing the users to send file attachments. See [Send attachment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#send-file-attachment), for more information.

## 

Enable streaming messages via typing animation

In this release, the Web channel configuration option has been enhanced with a new option `Stream message` in the web channel configuration page.

Enabling this option renders streaming responses through the typing animation to the user instead of displaying the response at once, eliminating idle waiting time. Streaming is intuitive, especially when there is a delay in agent response. It creates an impression to the user that the agent is responding and helps actively engage the user in the conversation flow.

See [Widget configuration -> Stream message](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/widget-configuration#stream-message), for more information.

## 

MS Teams channel configuration improvements

In this release, the MS Teams channel has been enhanced with a new option `Enable hero card` in the channel configuration page. Hero card support has been available since the [v6.3.0 release](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#hero-card-support).

In the `Atlas 8` release, when you enable the option `Enable hero card` in the MS Teams Channel configuration, it renders the responses by default in Hero cards instead of Adaptive cards in the MS Teams channel. This functionality proves beneficial when dealing with numerous responses containing embedded HTML code within the card's title or description. As this is not supported in the Adaptive Card format, toggling `Enable hero card` option allows HTML tags to be rendered as-is in the MS Teams channel using Hero cards.

See [Enable hero card](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#enable-hero-card), for more information.

See [MS Teams Compliance](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#microsoft-teams-compliance), to understand the elements that are not compliant with the MS Teams channel for Hero cards.

## 

Accessibility enhancements

In this release, the Accessibility inclusivity in the agents built using the Avaamo Conversation AI Platform has been improved. The following are a few key areas where `**accessibility has been incorporated**` in this release based on WCAG 2.0 (Web Content Accessibility Guidelines):

*   **Mercury theme:** In this release, a new theme - `Mercury` has been introduced and all elements within the `Mercury theme` are accessible in a manner consistent with the other existing themes. For instance, the streaming of responses which is exclusively a part of the `Mercury theme` is now accessible. See [Mercury theme](/user-guide/recent-releases/release-notes-v8.0/introducing-mercury-theme), for more information on the newly introduced theme.
    
*   **Auto-complete combo box**: When the [auto-complete combo box](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/advanced#query-autocomplete-url) is open, the user can press the `Escape` button once to minimize or hide the combo box, and press the `Escape` button again to clear the text in the search input or the message text box in the agent widget according to the W3C ARIA Authoring Patterns combo box.
    
*   **Welcome screen - Get started screen**: The user interface (UI) elements on the [Get Started screen](/user-guide/how-to/build-agents/configure-agents/introduce-agent-get-started) are now equipped with accessibility features, mirroring those found in the agent widget. The accessibility capabilities applied to the UI elements within the agent widget are also applicable to the elements on the [Get Started screen](/user-guide/how-to/build-agents/configure-agents/introduce-agent-get-started). For example, the ability to use keyboard navigation to access the welcome text in the `Get Started screen` or the ability to read out the entire welcome message text when the screen reader is enabled.
    
*   **Error messages**: When the screen reader is activated, it now audibly conveys any error messages present in the agent widget. For instance, if a form response requires a mandatory text entry, and the user submits the form without providing the required text, an error message is displayed in the agent widget. These error messages are now audibly communicated, enhancing accessibility for users relying on screen readers.
    

## 

Track SMS billing using SMS Usage report

In this release, a new page `SMS Usage` has been introduced in the `Settings` section. This page is valuable for users with the SMS channel enabled in their agents, providing a means to monitor and track SMS usage within their accounts.

You can also export the usage report from this page to analyze further. The page helps you to track the anticipated SMS billing associated with the company-level SMS configuration.

See [SMS usage](/user-guide/how-to/manage-platform-settings/usage-reports/sms-usage), for more information.

**Note**: The `SMS Usage` page is available only for users with the Settings role.

## 

C-IVR improvements

### 

Improved ASR

In this release, Automatic Speech Recognition (ASR) has been fine-tuned with a new and improved model. The following are some of the key benefits of the new ASR model:

*   Better quality recognition
    
*   Custom noise reduction (Background noise reduction)
    
*   Better extraction of alphanumerics
    

**Note**: Contact Avaamo Support with your use case to enable this for your account.

### 

Voice idle tone

In this release, enhancements have been made to the user experience, specifically in scenarios where the agent requires additional time to respond with an idle tone.

Rather than experiencing silence or a lack of input, the introduction of a tone serves to actively engage the user and assures that the agent will respond shortly. For example, the system generates a typing tone when processing DTMF/keypad input.

**Note**: Contact Avaamo Support with your use case to enable this for your account.

## 

Remove user property

In this release, the user property in the Javascript code has been enhanced with a new method `User.removeProperty` to delete or remove the specified user property added for a user.

See [User.removeProperty](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.removeproperty), for more information.

## 

Changes

### 

Campaign statistics UI

In this release, the following are the changes incorporated in the `Campaign statistics UI` for consistency and accurate label representation:

*   The `Date Range` label in the `Campaign Statistics UI` has been refined to `Execution`provide a more precise indication of the date in the drop-down. The date in the drop-down refers to the campaign run or execution date.
    
*   In alignment with the `Analytics UI` and to maintain a consistent user experience across the platform, the `Execution Date` drop-down now allows users to select up to 6 months of campaign runs.
    

See [Campaign statistics](/user-guide/outreach/campaign-statistics), for more information.

### 

Outreach insights API

To ensure optimal performance and consistency, the date range in the Outreach Insights API has been modified to enable retrieval of a maximum of 6 months of data in a single fetch.

See [Outreach insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api), for more information.

### 

Label change: Create new agent

In this release, a new agent called the [Advanced Agent](/user-guide/recent-releases/release-notes-v8.0/introducing-advanced-agent) has been introduced. To differentiate creating an advanced agent vs the normal one, the normal agent is referred to as a "Standard agent". This is only a label change, all the functionalities of this agent remain as before the `Atlas 8` release.

A new **Create** dropdown in the `Dashboard -> Development` tab with options to create **Standard agent** and **Advanced agent** has been included.

Note that when an `Advanced agent` is enabled for the account, the `Create new agent` label remains as-is without any change.

See [Create Standard agent](/user-guide/how-to/build-agents/add-skills) and [Create Advanced agent](/user-guide/how-to/build-agents/create-advanced-agent) for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.0/introducing-llamb

The Avaamo Conversational AI Platform introduces a new product `**LLaMB - Large Language Model for Business**` in the `Atlas 8` release.

LLaMB is a new low-code framework for building powerful end-user generative AI agents in the enterprise safely, securely, and fast. LLaMB provides tools to eliminate hallucinations, integrate enterprise systems, and support any LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) of your choice.

It utilizes LLM technology to offer inherently personalized and summarized results while maintaining the required level of security and compliance for enterprises. It is a practical and secure approach to deploying LLMs in the enterprise, thereby enhancing the knowledge search experience for both employees and customers.

Here's a quick sneak peek at LLaMB:

This article outlines the key features of LLaMB and the next steps to leverage LLaMB product offering in the Avaamo Conversational AI Platform.

**Note**: LLaMB is enabled on demand. Contact your dedicated Customer Success Manager for further assistance.

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

LLM APIs are readily available for everyone's use. The primary concern when it comes to enterprise applications is "Trust and Security". Raw Model LLM APIs when piped directly into the enterprise are vulnerable to adversarial attacks.

LLaMB comes with all the key building blocks required to build and deploy enterprise LLM applications safely and securely. The following are key focus areas that help in building trust and security within enterprises when using LLaMB:

**Ownership and Control**: With LLaMB, you have the complete and absolute ownership of the data. This means that you own and control what data is ingested to LLaMB and this internally controls how the responses are presented to the users. LLaMB uses only the content ingested to generate answers. The answers are "generated" implying that LLaMB does not engage in learning from your usage. Each interaction is treated as an independent prompt, and the LLaMB doesn't retain information from prior messages in the conversation.

**Security**: With LLaMB, all the content you feed and the agent you build and deploy is via the Avaamo Conversational AI Platform. The platform combines enterprise-grade security features with rigorous compliance with industry standards to ensure your data is always protected and secure. See [Security at Avaamo](https://avaamo.ai/conversational-ai-security/) for more information on the compliances and security regulations list. The trust and security layer.

### 

Easy ingestion pipeline: No more parsing templates!

LLaMB can process PDF files seamlessly, eliminating the need for any preprocessing or parsing templates. For HTML content, the requirement for parsing templates has been drastically simplified.

This implies that the sole prerequisite before utilizing LLaMB is to have the content readily available. Once the content is prepared, the straightforward process involves enabling LLaMB, ingesting the content, and witnessing the seamless transformation without any additional complexities.

The following is an illustration to depict how LLaMB can generate nuanced city/role-based answers from multiple tabular content:

*   **Multi-source summarization**: LLaMB can infer and summarize the content from multiple sources, say, for example, from multiple tables by understanding the context of the user's query, infer, and summarize precisely with appropriate contextual responses.
    
*   **Deep coreference resolution:** LLaMB can map context and co-reference from multiple sources based on the context in the user's query, summarize the results, and provide a comprehensive response to the user.
    
*   LLaMB can parse complex tables without the need for any pre-processing utility
    
*   **Multiple source attribution**: All responses from LLaMB are provided with a source reference, indicating precisely the source from which the answers are derived. If multiple sources of content are used for inferring answers, then multiple source attribution is provided. This means that only verified content references fed to LLaMB are used for providing responses, resulting in accurate, trustworthy, and secure inferred answers.
    

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

## 

Next steps

1.  Start by understanding [key terms](/user-guide/llamb/key-terms) in the LLaMB product.
    
2.  Understand what is required in the [Before you begin](/user-guide/llamb/before-you-begin) section.
    
3.  You are now ready to [get started](/user-guide/llamb/get-started) by exploring LLaMB in the Avaamo Conversational AI Platform.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.0/introducing-uat-in-web-channel

In the `Atlas 8` release, a new feature `**UAT**` has been introduced in the web channels.

It allows you to set up a pre-defined set of test queries to perform User acceptance testing (UAT) on the agents before deploying the agent in production. This is a crucial step in the agent's life cycle to ensure that the agent meets user requirements, functions correctly in a real-world setting, and provides a high level of quality and satisfaction.

Here's a quick demo of the `UAT` feature:

### 

Key benefits

The following are some of the key benefits of performing UAT on agents:

*   **Validation of requirements**: UAT helps to gather user feedback from UAT users before deploying the agent in the live production environment. Hence it helps to validate that the system aligns with the intended functionality outlined in the initial requirements.
    
*   **Quality Assurance:** UAT helps to identify defects, bugs, or discrepancies that may have been overlooked during earlier stages of testing. It helps to ensure a higher level of quality before the agent is made available to a wider audience.
    
*   **Cost-effective:** Identifying and fixing issues during the UAT phase is generally more cost-effective than addressing them after the agent has been deployed in the production environment.
    
*   **Accelerates agent deployment**: When you iteratively add more functionality to your agent, the UAT queries can serve as a good test bed to perform quick end-to-end testing of the agents before deploying the agents to production.
    
*   **Collecting effective feedback**: UAT helps to collect feedback from the testers who are subject matter experts with more experience in mimicking the exact production scenarios and hence is a valuable source of information to further improve your agent.
    

### 

Who should use UAT?

UAT feature is exclusively built for user acceptance testers who are subject matter experts and are aware of the agent functionality. Testers can use the UAT feature to set up the required test queries, perform UAT on the agent, and provide required feedback.

Developers can then view the feedback provided during UAT testing from the [Monitor -> Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#user-feedback) page and also under the [Learning -> User Feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback) section. Alternatively, developers can also use the [User Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api) to collect feedback periodically to learn and analyze the experience of the user when they are interacting with your agent.

### 

Before UAT

*   Identify the `categories` of the testing areas. Here, a category can be used to classify your UAT queries into different groups, based on functionalities, modules, or use cases.
    
*   Evaluate what must be accomplished at the end of UAT testing for each category. Have a list of UAT queries that closely mimic the production use cases for each category.
    

### 

How does it work?

In the `Channels -> UAT` section, you can add test queries for each category. Here, a category can be used to classify your UAT queries into different groups, based on the say, functionalities, modules, or use cases. `Categories` helps to ensure complete coverage of your test cases.

After configuring the UAT with categories and test queries, you can test the queries using the `View` option in the `Channels -> UAT` section.

In the UAT testing page, the instructions and categories are displayed on the left side of the page. The agent is displayed towards the right. Click the category and corresponding queries to test in the agent widget.

See [UAT](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/uat), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.0/introducing-mercury-theme

In the `Atlas 8` release, a new refreshed theme `**Mercury**` for web channels has been introduced. The primary styling components of the `Mercury` theme offers a cleaner, bright display of user inputs and agent responses, provides streaming responses, and aids in a better user experience.

Here's a quick demo of the `Mercury` theme:

## 

Key features

*   **Streaming responses:** `Mercury` theme renders streaming responses through the typing animation to the user, eliminating idle waiting time. Streaming is intuitive, especially when there is a delay in agent response. It creates an impression to the user that the agent is responding and helps in actively engaging the user in the conversation flow.
    
*   **Wider agent widget:** `Mercury` theme has a wider agent widget and provides more text area to display the agent response. For short responses, this can avoid scrolling to read answers.
    
*   **Enhanced readability:** A clean UI in the `Mercury` theme with an enhanced white-tone usage, makes the theme look brighter and cleaner (less cluttered), thus enhancing readability when compared to the other themes.
    
*   **Stop generating answers:** Users can stop generating answers in the `Mercury` theme. This helps the users to pause generating text in an ongoing conversation intermittently. This feature provides flexibility to the users in controlling the flow of interaction, allowing users to gather additional information, process intermediate results, or make decisions based on previous responses. To continue generating responses, users can just post queries back to the agent.
    

## 

User Feedback

One of the significant improvements in the `Mercury` theme is the feedback collected from the users on the thumbs-down option for a response.

The thumbs-down pop-up screen in the `Mercury` theme has been enhanced with specific options that allow the users to provide detailed descriptions of how the response can be fine-tuned to get the expected behavior. The open-ended responses allow users to provide a detailed description of the selected option in the pop-up screen.

In the `Mercury` theme, the feedback collected at the UAT stage aims towards collecting more specific details since UAT users are subject matter experts and testers within the account who are more aware of the agent and what is built into it when compared to the production users. Hence, the feedback collected at the UAT stage can be instrumental in fine-tuning the agent.

## 

How to use it?

`Mercury` is the default theme for all newly created agents and newly created web channels in the Avaamo Conversational AI Platform.

If not enabled for your agent, you can navigate to the `Agent -> Channels` page and click `View` on the Web Channel. In the `Channels -> Theme` section, click the `Agent theme` dropdown to choose the `Mercury` theme based on your styling requirements. For [LLaMB](/user-guide/recent-releases/release-notes-v8.0/introducing-llamb), `Mercury` is the recommended theme.

See [Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/theme), for more information.

---

## Source: https://docs.avaamo.com/user-guide/recent-releases/release-notes-v8.0/introducing-advanced-agent

In this release, a new agent called the `**Advanced Agent**` has been introduced.

In its fundamental nature, an `Advanced agent` achieves the "true" objective of a "Conversational Assistant" by involving the user in a dialogue closely resembling human interaction.

The `Advanced Agent` uses our next-generation inference engine to provide a better user experience. It takes on a personalized approach, understanding nuances in the conversation, transforming interactions from a robotic demeanor to a more pleasurable and "conversational" experience for the user.

To the developers, this translates to `**a significant reduction in the amount of training data**` needed for the agent to comprehend user queries. You only have to train your agent with minimal meaningful user queries. The `Advanced agent` is capable of comprehending numerous nuances and variations in user queries.

An `Advanced agent`, hence, stands out as distinctly superior, more intelligent, and more personalized compared to a `Standard agent`. The following illustrations depict a sample comparison of training data between a `Standard agent` and an `Advanced agent`:

Standard agent

Advanced agent

Here's a quick sneak peek at the `Advanced agent` in the v8.0.0 release:

**Notes**:

*   `Advanced agent` is enabled on demand. Contact Avaamo Support with your use case to enable this feature for your account. Note that the `Advanced agent` is included as part of the base platform and does not require an additional license fee.
    
*   All the existing Standard agents before v8.0.0 continue to remain as-is. If you wish to migrate from a Standard agent to an Advanced agent, see [Migrating to Advanced agent](/user-guide/recent-releases/release-notes-v8.0/introducing-advanced-agent#migrating-to-advanced-agent), for more information.
    

## 

Key features

### 

**Human-like conversation**

Advanced agent responses are not limited to simple one-word responses but can include detailed explanations, descriptions, or discussions, depending on the complexity of the question. It makes your agent more intuitive and user-friendly, simulating human-like interactions.

### 

**Deep semantic understanding**

Advanced agents can comprehend the meaning of language beyond surface-level syntax by understanding the context, and relationships between words, and grasping the nuances of language semantics. This implies a massive reduction in the amount of training data required by the agent to understand the user query.

The following illustration demonstrates how an `Advanced agent` is capable of understanding different nuances and variations of "Create an incident" training data when compared to a `Standard agent`:

**Advanced agent**:

**Standard agent:**

### 

**Conversational memory**

An `Advanced agent` can remember and maintain context throughout a conversation. This enables the system to understand references, callbacks, and evolving topics within the dialogue.

## 

How does it work?

Creating an `Advanced agent` is similar to creating a `Standard agent` and most of the functionalities available in the `Standard agent` are also available in the `Advanced agent`.

See [Advanced agent](/user-guide/how-to/build-agents/create-advanced-agent), for more information.

## 

Migrating to Advanced agent

*   Currently migrating from a `Standard agent` to an `Advanced agent` is a manual process. Contact your dedicated Customer Success Manager for further assistance.
    
*   Importing a Standard agent into an Advanced agent is not supported.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v7.0.0

[Introducing Live agent console](/user-guide/release-notes-old/v7.0.0/introducing-live-agent-console)[Introducing Outreach](/user-guide/release-notes-old/v7.0.0/introducing-outreach)[Release notes v7.0.0](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v7.0.0/introducing-live-agent-console

The version v7.0 brings a new generation **Avaamo Live Agent Console**. The new and enhanced live agent is a comprehensive package that enables our contact center system to deliver an enhanced customer experience with seamless live-agent interaction, thereby improving customer satisfaction.

At the core of this product lies the primary objective of enabling live agents to operate with greater intelligence, speed, and effectiveness, enhancing their overall performance.

## 

Key features

This section broadly describes some of the key features of the new `Live agent console`. See [Live agent console - Quick Overview](/user-guide/live-agent-console/overview#live-agent-console-quick-overview), for a more detailed list of main features in the `Live agent console`.

### 

**Guided navigation and workflow**

The new `Live agent console` is a rich, engaging, and refreshed interface to manage the complete workflow of live agent interactions. The interface enhances engagement and facilitates efficient workflow management for live agents during customer interactions.

Within the console, live agents have the ability to simultaneously view multiple requests and effortlessly accept new chat requests through an intuitive and user-friendly interface. The following illustration showcases several essential features of the Live agent console, empowering live agents to efficiently manage customer conversations:

See [Live agent](/user-guide/live-agent-console/live-agent), for more information.

### 

**Quick response composer**

Quick responses play a vital role in a live agent system, offering numerous benefits that improve the efficiency and effectiveness of customer support. It helps to streamline live agent interactions, boost productivity, and help customers receive timely, accurate, and consistent responses from knowledgeable agents.

Supervisors can use the Live agent console workflow to create a collection of standardized responses or templates for recurring inquiries. In the given instance, you can observe a compilation of pre-defined responses created by a Supervisor specifically for the repetitive responses required for a healthcare agent. See [Quick responses](/user-guide/live-agent-console/supervisor/quick-responses), for more information.

Live agents can utilize quick responses as-is or rephrase them to provide improved and precise responses that contribute to an enhanced customer experience. A live agent can access the set of all the quick responses just by typing # in the message text box:

See [Use quick responses](/user-guide/live-agent-console/live-agent/use-quick-responses), for more information on how live agents can leverage the quick responses created in the system.

### 

**Collaborate, Contribute, and Resolve**

Enable efficient team collaboration and issue resolution by utilizing the Live Agent console to create teams based on their expertise. Through this console, live agents can seamlessly transfer requests to appropriate teams within the organization that possess the necessary skills and knowledge to address the specific request. This collaborative approach promotes the effective utilization of team members' skills, leading to faster issue resolution.

With teams, you can maximize the potential of diverse teams within the organization to ensure proper and efficient issue resolution.

The following example demonstrates a scenario where a live agent, upon reviewing the conversation history, recognizes that the query can be better addressed by another team. Consequently, the live agent decides to transfer the request to a more suitable team even without initiating a conversation with the user.

In this demonstration, observe the process of a live agent seamlessly transferring an ongoing conversation with a user to another team within the organization. This showcases the ability of a live agent to initiate a request transfer during an active conversation, ensuring smooth and efficient communication between teams.

*   See [Teams](/user-guide/live-agent-console/supervisor/teams), for more information on how Supervisors can create teams in your organization.
    
*   See [Transfer to another team](/user-guide/live-agent-console/live-agent/transfer-to-another-team), for more information on how live agents can transfer requests to teams within the organization.
    

### 

View reports to gain insights

Reports enable Supervisors to view real-time customer wait time and queue status. This provides valuable insights into traffic patterns and workload, allowing them to optimize ticket routing and create specialized teams with specific skill sets, ultimately enhancing customer satisfaction.

For instance, Supervisors can leverage the traffic data to develop standardized responses or establish and manage routing rules. In the following example, Supervisors can assess the current traffic usage, including metrics such as wait time, and make informed decisions to update routing rules or explore alternative methods to enhance the overall customer experience.

*   See [Reports](/user-guide/live-agent-console/supervisor/reports), for more information.
    
*   See [Advanced configurations](/user-guide/live-agent-console/advanced-configurations), for more information on setting up routing rules.
    

### 

Omnichannel experience

Avaamo Conversational AI Platform has the capability to deploy agents in various channels such as Mobile Channels (iOS and Android), MS Teams, Facebook, and Custom Channels.

The new Live agent console provides an omnichannel experience to the live agents interacting with the users, which implies, that although users can interact with the Live agent via different channels where the agent is deployed, all the conversations irrespective of the channel used by the user are seamlessly delivered to the Live agent console.

## 

Get started

Contact Avaamo Support to get started and enable the new Live agent console for your account. See [Live agent](/user-guide/live-agent-console/overview), for complete product information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v7.0.0/introducing-outreach

In this release, a new product - **Outreach** has been introduced.

**Outreach** is an AI-based proactive Customer and Employee Communication Platform that proactively contacts and converses with users/ patients/ customers/ employees.

It empowers you to focus on high-value and automation-ready use cases in your enterprise. Outreach enables enterprises to broadcast messages and reach wider audiences in channels of their choice.

For example, you can set up a vaccination drive outreach campaign program and send invitations out to all the contacts to avail service. Such campaign programs help healthcare providers to communicate with their communities and patients in a targeted and efficient way.

Avaamo platform provides out-of-the-box features to set up an outreach campaign program. A few key features are listed in this article.

## 

Key features

### 

AI-guided campaigns for complete automation

`Outreach` allows you to empower your campaign with AI and make it conversational. You can now link your campaign with agents or assistants in the Avaamo Conversational AI Platform and make your campaign powerful with two-way communication. Recipients receiving the campaign message can converse back in the same channel and in the same campaign to complete the entire flow.

Not limited to the verticals, the table here shows different use cases and automation across Healthcare, Employee service, and Customer care:

Healthcare

Employee Service

Customer care

*   Appointment Reminder
    
*   Vaccination reminder
    
*   Reschedule
    
*   Preventive care reminder
    
*   Education
    
*   Self-care
    

*   Password updates
    
*   Outage alerts
    
*   Onboarding training
    
*   Benefits renewal
    
*   Certificate reminders
    
*   Wellness campaigns
    

*   Offers and Promotions
    
*   Subscription reminders
    
*   Scheduled maintenance
    
*   Order updates
    

### 

Self-serviceable "Campaign Composer"

Outreach comes with a Self-serviceable "Campaign Composer" that allows users to quickly set up a campaign in a guided, easy-to-use user interface. You can build and configure campaigns using the Campaign Composer with just 3 steps - Configure, Add Message, and Activate.

The "Campaign Composer" offers different scheduling options for you to send a campaign message immediately or schedule at a predefined agreed time or with a recurring option.

### 

Send campaign via any enterprise channel

Outreach enables enterprises to broadcast messages and reach wider audiences in channels of their choice. It comes with a set of built-in channels that are out-of-the-box -> SMS, MS Teams, C-IVR, and Custom channel.

By configuring your campaigns via the custom channel, you can now send campaign messages via any enterprise channel and are not limited only to channels such as SMS, C-IVR, or MS Teams. This widens the reach of the campaigns to a larger set of audience and better adoption of the Outreach campaign programs.

### 

Build a custom dashboard using Outreach APIs as per business needs

As a part of the Outreach Campaign release, the Avaamo Conversational AI Platform has introduced a few new Outreach APIs. You can use these APIs for reporting and debugging purposes. You can leverage these APIs to build a custom dashboard and integrate it with other downstream systems, gain insights, and improve the growing business needs.

The following are new APIs introduced as a part of the Outreach:

*   [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)
    
*   [Outreach Changelog API](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api)
    
*   [SMS Opt status API](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api)
    

## 

Get started

Contact Avaamo Support to get started and enable the new Outreach for your account. See [Outreach](/user-guide/outreach/overview), for complete information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0

The Avaamo Conversational AI Platform v7.0.0 release includes 2 new products, 4 enhancements, 1 change, and 2 deprecation notices distributed as follows:

**New products:** This release includes the introduction of the 2 products:

1.  [Introducing Live agent console](/user-guide/release-notes-old/v7.0.0/introducing-live-agent-console)
    
2.  [Introducing Outreach](/user-guide/release-notes-old/v7.0.0/introducing-outreach)
    

**Enhancements**: This release includes enhancements related to the following existing features:

Module

Enhancements

MS Teams Channel

*   [Broadcast messages via MS Teams using a new MS Teams Send API](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#broadcast-messages-via-ms-teams-using-a-new-ms-teams-send-api)
    

Answers

*   [Support for uploading Microsoft Word and Powerpoint documents](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#support-for-uploading-microsoft-word-and-powerpoint-documents)
    
*   [Improved ingestion of documents with custom parsing templates](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#improved-ingestion-of-documents-with-custom-parsing-templates)
    
*   [Improved accuracy for small to medium-sized Answers skill](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#improved-accuracy-for-small-to-medium-sized-answers-skill)
    

**Changes:** This release includes changes related to the endpoints of Content Ingestion APIs. See [Content Ingestion APIs](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#content-ingestion-apis), for more information.

**Deprecation notices**: In this release, note the following deprecation notices:

*   `Conversation ID` column in the Live agent chat transcript export.
    
*   `from_date`, `to_date`, and `utc_offset` query parameters in the following Analytics APIs:
    
    *   Successful messages
        
    *   User sessions
        
    *   Messages
        
    *   Unhandled messages
        
    
*   `See`[Deprecation notices](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0#deprecation-notices), for more information.
    

## 

Enhancements

### 

Broadcast messages via MS Teams using a new MS Teams Send API

In this release, as a part of MS Teams channel enhancement, a new REST API - **MS Teams channel Send API** has been introduced.

This API allows you to post or broadcast messages via the MS Teams channel without user intervention or activity. Since this is a REST API, it comes with the various advantages of REST API and can be easily integrated with any enterprise application where REST API integration is applicable.

Using this API, you can post a message via the MS Teams channel to the specified email. After a successful request, a conversation is established and can be tracked using `email` from the Conversation history page. See [Conversation history](/user-guide/how-to/build-agents/debug-agents/conversation-history), for more information.

In the earlier release, if you had to broadcast a message via the MS Teams channel, the only way was to configure a campaign via the MS Teams channel and then post the message via a campaign. With the new `MS Teams Send API`, "Broadcasting messages to users" is de-coupled from campaigns and made interoperable across different systems. See [Microsoft Teams Send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api), for more information.

As a part of the new `MS Teams Send API,` the ability to authenticate users before sending messages via `MS Teams Send API` has been provided with the **Custom user authentication** option in the MS Teams channel page.

Note that this option works only with the `MS Teams Send API` and you can use this option along with the new [MS Teams Send API](/user-guide/ref/avaamo-platform-api-documentation/microsoft-teams-send-api) to authenticate users in the [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel) before sending MS Teams message. This helps secure communication between the user and the agent via the MS Teams channel.

See [MS Teams channel](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information. Also see [Custom user authentication](/user-guide/how-to/build-agents/configure-agents/define-settings#ms-teams-channel), for an example.

### 

Support for uploading Microsoft Word and PowerPoint documents

In this release, the Answers skill has been enhanced with the ability to upload Microsoft Word (.docx) and Microsoft Powerpoint (.pptx) documents both via UI and via Content ingestion APIs.

The following illustration shows a Microsoft Word document successfully uploaded to the Answers knowledge base via UI:

See [Upload documents](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information.

To upload files such as Microsoft Word, Microsoft Powerpoint, or Microsoft Excel the content ingestion API has been enhanced with a new Upload file API:

See [Content ingestion APIs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.

To support the ingestion of the documents, two new parsing templates for Microsoft Word and Microsoft PowerPoint are included in the in-built parsing template list. When you are uploading .docx or .pptx documents via Content ingestion APIs, you can use the corresponding parsing template identifier to facilitate seamless ingestion of the documents to the Answers knowledge base:

See [Parsing templates](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/parsing-templates), for more information.

### 

Improved ingestion of documents with custom parsing templates

In this release, the ingestion of documents that require custom parsing templates has been improved with the ability to pass the `Custom parsing template identifier` in the Content Ingestion APIs. This eliminates the need for specifying the parsing JSON in the API which is tedious, cannot be reused, and error-prone.

Instead, you can configure custom parsing templates in the Answers skill and then simply use the parsing template identifier in the Content ingestion APIs. This promotes better reusability, is less error-prone, and can be maintained efficiently.

See [Content ingestion APIs (Recommended)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.

### 

Improved accuracy for small to medium-sized Answers skill

In this release, the NLP boost option in the Answering mechanism has been improved with better accuracy. The NLP boost option is best suited for small to medium-sized Answers skills (upto 4000 chunks).

See [Answering mechanism configuration](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#answering-mechanism), for more information.

## 

Changes

### 

Content Ingestion APIs

In this release, with the view of streamlining and providing better support, note the following endpoint changes in Content Ingestion APIs:

Action

Old API Endpoint

New API Endpoint

Upload document

`https://answers-ingest.aiavaamo.com/api/document`

`ACTION: POST`

`https://mx.avaamo.com/content-ingestion/parse-document`

Delete document

`https://answers-ingest.aiavaamo.com/api/document`

`ACTION: DELETE`

`https://mx.avaamo.com/content-ingestion/delete-document`

Update document

`https://answers-ingest.aiavaamo.com/api/document`

`ACTION: PUT`

`https://mx.avaamo.com/content-ingestion/update-document`

**Note**: Although the older Content ingestion APIs continue to work as-is in v7.0, they will have limited support and will soon be marked as deprecated. Starting from version 7.0.0 onwards, it is recommended to transition to an enhanced and more efficient version of content ingestion APIs to ensure improved support. See [Content ingestion APIs (Recommended)](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/content-ingestion-apis-recommended), for more information.

## 

Deprecation notices

### 

Conversation ID column in Agent Chat transcript export

In this release, with the view of streamlining the Agent chat transcript CSV export report, the Conversation ID column is deprecated in the report. The conversation ID column is an internal column only and hence it is not useful for users who are downloading the report.

See [Agent chat transcript](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#agent-chat-transcript), for more information.

#### 

When is the support completely stopped?

This feature will be removed from the next release onwards.

#### 

What action to take?

In case you are using the deprecated CSV column names for any further processing, ensure that the right column name and values are used from the v7.0.0 release onwards.

### 

from\_date, to\_date, UTC\_offset query parameters in Analytics APIs

In this release, with the view of streamlining and providing consistent query parameters in the Analytics APIs, the `from_date`, `to_date`, and `utc_offset` query parameters are deprecated in the following Analytics APIs and consolidated into two new date query parameters `from_timetoken` and `to_timetoken` to filter data based on date:

*   [Successful messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/successful-messages)
    
*   [User sessions](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/user-sessions)
    
*   [Messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages)
    
*   [Unhandled messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/unhandled-messages)
    

`from_timetoken` and `to_timetoken` allows you to filter based on the Unix Epoch timestamp and is used in all other REST APIs provided by the Avaamo Conversation AI Platform. See [Note on Epoch timestamp in REST APIs](/user-guide/ref/avaamo-platform-api-documentation/quick-overview#note-of-epoch-timestamp-in-rest-apis), for more information on the benefits of using Epoch time.

#### 

When is the support completely stopped?

This feature will be removed from the next release onwards.

#### 

What action to take?

In case you are using the deprecated query parameters in any further data processing, ensure that the right query parameters are used from the v7.0.0 release onwards.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases

[v6.4.x](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x)[v6.3.x](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x)[v6.2.x](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x)[v6.1.x](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x)[v6.0.x](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x

[What's new in v6.4.0?](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/whats-new-in-v6.4.0)[Release notes v6.4.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0)[Watch the webinar on v6.4.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/watch-the-webinar-on-v6.4.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/whats-new-in-v6.4.0

In this release, a new feature - **An outreach campaign program** has been introduced.

In simple terms, Outreach is defined as "reach further than". Elaborating on the same concept, an outreach campaign program is about reaching out or providing services to a wider set of targeted audiences.

For example, you can set up a vaccination drive outreach campaign program and send invitations out to all the contacts to avail service. Such campaign programs help healthcare providers to communicate with their communities and patients in a targeted and efficient way.

Avaamo platform provides out-of-the-box features to set up an outreach campaign program.

The following are a few key capabilities of this feature:

*   Make conversational AI proactive: Instead of customers reaching out to conversational AI, the outreach program in the Avaamo Conversational AI platform reaches out to customers.
    
*   Campaign scheduling: Ability to send a campaign message immediately, schedule at a predefined agreed time, or as a recurring schedule.
    
*   Faster reach to a wider audience
    
*   Ability to configure campaigns in multiple channels such as SMS, C-IVR, and MS Teams.
    

**Note**: The outreach feature is enabled on-demand. Contact Avaamo Support, for further assistance.

### 

Key terms

Before you start creating your first outreach program, the following are a few terms of the Outreach feature available in the Avaamo Conversational AI Platform:

*   **Recipient List**: List of users for whom the campaign is intended.
    
*   **Template**: A customized re-usable message that is sent to the campaign recipients.
    
*   **Filters**: Configure filters based on the column names and values in the recipient CSV such as location, age, date of birth, or gender. When a filter is associated with a campaign, the campaign is triggered to only those recipients matching the filter criteria.
    

See [Quick start](/user-guide/outreach/quick-start), for a quick article on creating your first outreach program.

### 

Campaign channel

In this release, an outreach campaign can be configured in the following channels:

1.  [SMS](/user-guide/outreach/quick-start/campaign-in-sms-channel)
    
2.  [C-IVR](/user-guide/outreach/quick-start/campaign-in-c-ivr-channel)
    
3.  [MS Teams](/user-guide/outreach/quick-start/campaign-in-ms-teams-channel)
    

### 

Outreach - REST APIs

The following are new APIs introduced as a part of the Outreach feature:

*   [Outreach Insights API](/user-guide/outreach/outreach-rest-apis/outreach-insights-api)
    
*   [Outreach Changelog API](/user-guide/outreach/outreach-rest-apis/outreach-changelog-api)
    
*   [SMS Reporting API](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api)
    
*   [SMS Opt status API](/user-guide/outreach/outreach-rest-apis/sms-opt-status-api)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0

The Avaamo Conversational AI Platform v6.4.0 release includes 1 new feature, 7 enhancements, and 1 change distributed as follows:

**New feature:** This release includes the introduction of a new **Outreach Campaign** feature**.** See [What's new in v6.4.0?](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/whats-new-in-v6.4.0) for more information.

**Enhancements**: This release includes enhancements related to the following existing features:

Module

Enhancements

MS Teams

[MS Teams: Ability to integrate with other applications on behalf of the user](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#ms-teams-ability-to-integrate-with-other-applications-on-behalf-of-the-user)

Accessibility

[Accessibility improvements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#accessibility-improvements)

Regression testing

[Regression testing file format - Version 2](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#regression-testing-file-format-version-2)

REST APIs

[Performance improvements in Analytics APIs](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#performance-improvements-in-analytics-apis)

Answers skill

[Filter documents in the Answers skill based on the upload status](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#filter-documents-in-the-answers-skill-based-on-the-upload-status)

Javascript code

[Ability to set multiple user properties in a single method](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#ability-to-set-multiple-user-properties-in-a-single-method)

Analytics

[SMS Gateway Analytics](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#sms-gateway-analytics)

**Changes:** This release includes changes related to the following modules:

*   Defining attributes for documents or URLs. See [Enforce document attributes to be a JSON](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#enforce-document-attributes-to-be-in-json), for more information.
    
*   Deeplink URL value in agent responses. See [Deeplink URL value](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deeplink-url-value), for more information.
    

**Deprecation notice**: In this release, the usage of URLs for deep links in the agent responses has been deprecated. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of new features, enhancements, and changes in the v6.4.0 release:

New features

Enhancements

Changes

New feature

Component

[Outreach](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/whats-new-in-v6.4.0)

*   Dashboard -> Outreach
    
*   REST APIs -> Outreach Insights API
    
*   REST APIs -> Outreach Changelog API
    
*   REST APIs -> SMS Reporting API
    
*   REST APIs -> SMS Opt status API
    

Enhancements

Component

[MS Teams: Ability to integrate with other applications on behalf of the user](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#ms-teams-ability-to-integrate-with-other-applications-on-behalf-of-the-user)

*   Channels -> MS Teams
    

[Accessibility improvements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#accessibility-improvements)

*   Agent widget
    

[Regression testing file format - Version 2](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#regression-testing-file-format-version-2)

*   Regression test
    

[SMS Gateway Analytics](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#sms-gateway-analytics)

*   Monitor -> SMS Gateway Analytics
    

[Performance improvements in Analytics APIs](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#performance-improvements-in-analytics-apis)

*   Analytics - Message API
    
*   Analytics - Unhandled API
    
*   Analytics - Successful Message API
    
*   Analytics - User Session API
    

[Filter documents in the Answers skill based on the upload status](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#filter-documents-in-the-answers-skill-based-on-the-upload-status)

*   Answers skill -> Document groups
    

Change

Component

[Deeplink URL value](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deeplink-url-value)

*   Deeplinks in Quickreply
    
*   Deeplinks in Card
    
*   Deeplinks in Carousel
    
*   Deeplinks in ListView
    
*   Deeplinks in Persistent menu
    

[Enforce document attributes to be a JSON](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#enforce-document-attributes-to-be-in-json)

*   Answers skill -> Edit -> Update Document
    

## 

Enhancements

### 

MS Teams: Ability to integrate with other applications on behalf of the user

In this release, the MS Teams channel has been enhanced with a new `Get user access token` configuration option. When this option is enabled, the OAuth user access token generated in the Azure bot is available in the `context.user.sso_token` object. You can use this token to access other applications on behalf of the user seamlessly.

See [MS Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams) and [Use case: Get user access token](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams/use-case-get-user-access-token), for more information.

### 

Accessibility improvements

In this release, the Accessibility inclusivity in the agents built using Avaamo Conversation AI Platform has been improved. The following are a few key enhancements incorporated in this release:

*   **Accessibility improvements specific to Windows:** In the Windows High Contrast mode as enabled via Windows settings, the focus indication of the agent icon button at the bottom-right corner has been enhanced and the border of the chat window is accessible and easy to identify.
    
*   **Minimize the agent widget using the Escape button**: The user can now press the `Escape` button on the keyboard to minimize the agent widget at any point in time in the conversation flow, as long as the focus is inside the agent chat widget.
    

### 

Regression testing file format - Version 2

In this release, the regression test file format has been enhanced with a new and improved version referred to as - Version 2 (V2) format.

Regression test - V2 format is based on test identifiers. Based on the way the test identifiers are defined, the platform infers the flow and the sequence of execution. The following example demonstrates a sample Regression test - V2 format file:

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

See [Regression test file format - V2](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format-1), for more information.

### 

SMS Gateway Analytics

In this release, the **Monitor** section of the agent has been enhanced with a new analytics page referred to as **SMS Gateway Analytics**.

SMS Gateway Analytics is a dashboard that allows you to view the SMS report of the messages sent through the SMS Send API. With these statistics, you can decide how and where to further improve the user experience with your agent based on your business requirements.

**Note**: SMS Gateway Analytics is available only when the SMS channel is enabled for the agent. See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information.

See [SMS Gateway Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/sms-gateway-analytics), for more information.

### 

Performance improvements in Analytics APIs

In this release, the performance of the following APIs has been improved, to allow fetching a larger set of records at a faster rate.

*   [Analytics - Message API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages)
    
*   [Analytics - Unhandled API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/unhandled-messages)
    
*   [Analytics - Successful Message API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/successful-messages)
    
*   [Analytics - User Session API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/user-sessions)
    

Along with this improvement, note that there is also a recommendation for time duration mentioned for all the REST APIs where you can specify a date range. For optimal API performance, the recommended time duration for fetching data from any REST APIs supporting a date range or time period is 7 days.

### 

Filter documents in the Answers skill based on the upload status

In this release, the Document groups page has been enhanced with a new **Status** dropdown. It helps you to filter documents based on their upload status. Along with the status, you can also view the count of documents for each status in the dropdown. This feature is helpful when you have a large set of documents uploaded in a document group and say you wish to view only errored-out documents in the group.

See [Document groups](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/create-document-groups) and [Upload Content](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information.

### 

Ability to set multiple user properties in a single method

In this release, the ability to set user property in the Javascript code has been enhanced with a new method `User.setProperties`.

The new method accepts multiple key-value pairs in the input parameters, hence the agent developers can set all the user properties in a single call instead of using multiple calls for setting user properties individually using [`User.setProperty`](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperty). It helps in optimizing the code and making the code more efficient.

See [User.setProperties](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/user.setproperties), for more information.

## 

Changes

### 

Enforce document attributes to be in JSON

In this release, the validation for defining the attributes for the uploaded documents or URLs in the Answers skill has been changed. When you specify the document attributes in the **Update Document** pop-up window, the platform validates and allows you to proceed only if it is a valid JSON.

**Note**: For existing documents with invalid attributes, there is no impact. It will continue to work as before.

In the previous release, it was possible to save attributes with invalid JSON, and since the attributes were in invalid JSON format, it was not used by the Answers skill and hence was not useful.

See [Defining attributes for documents or URLs](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#defining-attributes-for-documents-or-urls), for more information.

### 

Deeplink URL value

In this release, the URL parameter value of Deeplink responses has been changed for security reasons. With this change, the URL, even when copied and used in the browser does not redirect to any site as there is no valid domain or host.

**Key points**:

*   The URL change is backward compatible and the old URL in your agent implementation continues to work as-is.
    
*   In this release, the usage of URLs in deep links is deprecated due to security reasons. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#deprecation-notice), for more information.
    

The following lists a few examples of this change:

Deeplink type

Old URL for Deeplink

New URL for Deeplink

Date picker

`https://web.avaamo.com#app/datepicker/messages/new?format=<<date_format>>`

`avaamo:#app/datepicker/messages/new?format=<<date_format>>`

Goto node

`https://web.avaamo.com#messages/hidden/%23goto_node_<<skill_key>>_<<intent_key>>/new/<<message>>`

`avaamo:/#messages/hidden/%23goto_node_<<skill_key>>_<<intent_key>>/new/<<message>>`

Start over

`https://web.avaamo.com#messages/hidden/start%20over/new/start`

`avaamo:#messages/hidden/start%20over/new/start`

See the following modules for more information:

*   [Deeplinks in Quickreply](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply#values-in-deeplinks)
    
*   [Deeplinks in Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links#deep-links)
    
*   [Deeplinks in Carousel](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/carousel)
    
*   [Deeplinks in ListView](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view)
    
*   [Deeplinks in Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#deep-link)
    

## 

Deprecation notice

As per the security guidelines, the usage of URLs for deep links in the agent responses has been deprecated from the v6.4.0 release onwards.

Instead, you can use an improved and easy-to-use format for providing deep links. See [What action to take?](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/release-notes-v6.4.0#what-action-to-take) for more information. The easy-to-use format helps towards providing a pleasant development experience for the developers implementing the agent in the Avaamo Conversational AI Platform.

### 

Why?

In the legacy implementation, developers had to specify URLs in the value parameter for deep links when a date picker response was required. For example, the following is a sample JS to use a date picker in a quick reply response:

The legacy implementation was tedious to use and error-prone. Debugging and troubleshooting the errors caused by the incorrect usage of URLs was time-consuming. The new format for using deep links is simple and easy to use, hence making the development experience pleasant.

### 

When is the support completely stopped?

This feature will be removed from the next release onwards.

### 

What action to take?

Use the following format for using deep links in agent responses (Quick reply, Cards, Persistent menu, Carousel):

Function

Example formats in Quick Reply

Date picker

Date picker with min and max dates

Goto node

start over

See the following modules for more information:

*   [Deeplinks in Quickreply](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/quick-reply#values-in-deeplinks)
    
*   [Deeplinks in Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/card-links#deep-links)
    
*   [Deeplinks in Carousel](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/carousel)
    
*   [Deeplinks in ListView](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/list-view)
    
*   [Deeplinks in Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu#deep-link)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x/watch-the-webinar-on-v6.4.0

Take a look at the webinar on v6.4.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x

[Release notes v6.3.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0)[Watch the webinar on v6.3.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/watch-the-webinar-on-v6.3.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0

The Avaamo Conversational AI Platform v6.3.0 release includes 8 **enhancements** and in order to make the navigation around the enhancements easier, they are classified as follows based on the modules in the Avaamo Conversational AI Platform:

Module

Enhancements

SMS channel v2.0

*   [Deploy "one" agent across multiple SMS channel instances](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#deploy-one-agent-across-multiple-sms-channel-instances)
    
*   [Authenticate users before sending SMS messages](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#authenticate-users-before-sending-sms-messages)
    
*   [New SMS channel outbound API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#new-sms-channel-outbound-api)
    
*   [SMS.send function update to include "from\_phone"](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#sms.send-function-update-to-include-from_phone)
    

MS Teams

*   [Hero card support](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#hero-card-support)
    
*   [Translation support in Hero cards](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#translation-support-in-hero-cards)
    

Live agent

[Add a unique live agent avatar to easily distinguish it from your virtual assistant](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#live-agent-avatar)

Agent

[Parallel development of Agents](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#parallel-development)

**Removal notice**: In this release, the **FB camera effect** feature support is removed from the Avaamo Conversational AI Platform. See [Removal notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#removal-notice), for more information.

## 

SMS Channel v2.0

In this release, a new version of the SMS channel - **SMS channel v2.0** has been introduced. The new version of the SMS channel is a significant revamp of the existing SMS channel. The following are the key highlights of the SMS channel v2.0:

*   [Deploy "one" agent across multiple SMS channel instances](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#deploy-one-agent-across-multiple-sms-channel-instances)
    
*   [Authenticate users before sending SMS messages](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#authenticate-users-before-sending-sms-messages)
    
*   [New SMS channel outbound API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#new-sms-channel-outbound-api)
    
*   [SMS.send function update to include "from\_phone"](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#sms.send-function-update-to-include-from_phone)
    

### 

Deploy "one" agent across multiple SMS channel instances

In this release, you can deploy "one agent" across multiple instances of an SMS channel. The following lists a few use cases where this feature can be useful:

**Use-case 1: Collect unified analytics:** Provide unified analytics cutting across different instances of SMS channels. See [Channel analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#channels), for more information,

**Use-case 2: Maintain different user sessions:** For security reasons, you can deploy your agent across multiple instances of an SMS channel with different authentication mechanisms. See [Custom user authentication](/user-guide/how-to/build-agents/configure-agents/deploy/sms#custom-user-authentication), for more information.

The following illustration depicts two SMS channels configured for the same agent. One SMS channel has custom user authentication enabled and the other channel is without custom user authentication:

See [Deploy in multiple SMS channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/sms#deploy-in-multiple-sms-channel-instances), for more information.

### 

Authenticate users before sending SMS messages

In this release, the SMS channel configuration has been enhanced with the **Custom user authentication** option. You can use this option along with the new [SMS channel outbound API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#new-sms-channel-outbound-api) to authenticate users in the [User authentication handler](/user-guide/how-to/build-agents/configure-agents/define-settings#user-authentication-handler) before sending an SMS. This helps secure communication between the user and the agent via the SMS channel.

See [SMS channel](/user-guide/how-to/build-agents/configure-agents/deploy/sms), for more information. Also see [Custom user authentication](/user-guide/how-to/build-agents/configure-agents/define-settings#sms-channel), for an example.

### 

New SMS channel outbound API

In this release, as a part of SMS channel enhancement, a new REST API - **SMS channel outbound API** has been introduced.

Using this API, you can post an agent's greeting message as an SMS to the specified phone number. The recipient can respond back to the SMS channel, and based on the way you have implemented your agent it can initiate a conversational dialogue with your agent.

This API also allows you to pass any custom parameters as per your requirement in the body payload that can be used to authenticate users before sending SMS messages. See [Authenticate users before sending SMS messages](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0#authenticate-users-before-sending-sms-messages), for more information.

See [SMS Send API](/user-guide/ref/avaamo-platform-api-documentation/sms-send-api), for more information.

### 

SMS.send function update to include "from\_phone"

In this release, the `SMS.send` built-in function has been enhanced to include optional `from_phone` parameter. This helps users to identify the number from which the SMS was sent to the user.

See [SMS.send](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/notifications#sms.send), for more information.

## 

MS Teams channel enhancements

In this release, the MS Teams channel has been enhanced with the following features:

*   Add customized cards such as **Hero cards**. With this enhancement, you can now create rich text responses in the MS Teams channel.
    
*   Translate the responses of Hero cards based on the language switched to during the agent conversation. With this enhancement, you can render rich card elements using Hero cards in all the languages supported in the Avaamo Platform.
    

### 

Hero card support

In this release, the MS Teams channel has been enhanced with the ability to add customized cards such as **Hero cards**. With this enhancement, you can now create rich text responses such as Cards, ListView, and Carousels in the MS Teams channel.

The format to use the Hero cards remains the same as supported in the MS teams. The only addition is to wrap the JSON of Hero cards in `CustomTeamsMessage` object. See [Hero cards in MS teams](https://learn.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-reference#hero-card), for more information.

The following is a sample Hero card JSON structure to render a simple card:

The following illustration represents how the card is rendered in the MS teams channel:

See [Hero card support](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#hero-card-support), for more information and examples.

In the earlier release, Hero cards were not supported in the MS Teams channel, hence there was limited support in rendering rich card elements.

### 

Translation support in Hero cards

In this release, the MS teams channel has been enhanced with the ability to **translate the responses of Hero cards** based on the language switched to during the agent conversation. Note that you can only switch to those [languages configured](/user-guide/how-to/build-agents/configure-agents/add-languages) in your agent.

With this enhancement, you can render rich card elements using Hero cards in all the languages supported in the Avaamo Platform. See [Supported languages](/user-guide/how-to/build-agents/configure-agents/deploy/web-supported-languages), for more information.

Consider that you have configured your agent in the French language. In the agent conversation, you switched the language to French. The following illustration represents the Hero card response rendered in the MS teams channel in the French language:

See [Hero card support](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams#hero-card-support), for more information and examples.

## 

Parallel development

For an enterprise agent, as the demand and usage of the agent increase, the number of use cases required to build in the agent also increases substantially. To ensure faster adoption of the increasing agent demand, it is critical to build and deliver the agents faster. Hence, parallel development, which allows multiple developers to work on the agent simultaneously is a key factor in rapid agent development and reduces the turnaround time to build the agent.

Earlier, in the Avaamo Platform as a part of promoting parallel development of agents, the ability to allow parallel development of Dynamic Q&A, Q&A, and Smalltalk skills was introduced in release v5.4.0. See [Release notes v5.4.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0#2.-ability-to-allow-parallel-development-of-dynamic-q-and-a-q-and-a-and-smalltalk-skills), for more information.

In this release, the parallel development of an agent has been further enhanced to include two main components of the platform - Dialog skills and JS files. At a high level, the following changes have been implemented in this release:

*   **Ability to independently work on Dialog skills without locking the entire agent**: There is no agent-level lock required to work on a Dialog skill. A lock is now available at the Dialog skill level.
    
*   **Ability to independently work on JS files without locking the entire agent**: No agent-level lock is required to work on a JS file. A lock is now available at the JS file module level. This allows developers to work on multiple JS files parallelly since the lock is at the JS file level and not at the agent level.
    
*   **Activity Monitor - Ability to view details of the developers working on the agent**: Activity monitor is available for every agent that shows the list of users editing the agent at any given point in time. This allows developers to collaborate and work efficiently, thus promoting rapid agent development.
    

With these improvements, developers can now work parallelly on different skills in the agent.

The following **Activity Monitor** illustration depicts two users simultaneously working on the same agent. One user - John Miller is working on the Dialog skill and another user Tom Wilson is working on a Q&A intent.

Refer to the following topics for a more in-depth understanding:

*   [Dialog skills](/user-guide/how-to/build-skills/create-skill/using-dialog-designer)
    
*   [JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files)
    
*   [Promote and Pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates)
    
*   [Activity monitor](/user-guide/how-to/build-agents/manage-agents/activity-monitor)
    

In the previous release, the only way to work on a Dialog skill or JS file was to obtain the lock at the agent level. This prevented other developers from working on different skills in the agent. This resulted in slower development and subsequently affected the agent development and delivery time.

## 

Live agent avatar

In this release, the live agent configuration has been enhanced with the ability to add a unique live agent avatar in the **Configuration -> Live agent** page. This feature helps:

*   Users to easily distinguish a real virtual agent from a virtual assistant.
    
*   Developers to abide by the privacy regulations of an organization as in certain organizations there can be a legal requirement to have a different avatar for a real virtual agent versus a virtual assistant.
    

The following is an illustration where you can view the live agent avatar when a user initiates chat with a live agent:

See [Live agent avatar](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-avatar), for more information.

In the previous release, there was no option to add a different live agent avatar. Hence, it was not clear to the users whether they were having a conversation with the virtual assistant or with a live agent.

## 

Removal notice

In this release, the **FB camera effect** feature support has been removed from the Avaamo Conversational AI Platform due to a lack of usage.

There is no usage observed for this feature since its inception in the v5.0 release dated Jan 15th, 2020, and hence the **FB camera effect** button option is removed for the Card, Carousel, and ListView response types:

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/watch-the-webinar-on-v6.3.0

Take a look at the webinar on v6.3.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x

[Release notes v6.2.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0)[Watch the webinar on v6.2.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/watch-the-webinar-on-v6.2.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0

The Avaamo Conversational AI Platform v6.2.0 release includes 13 enhancements and 1 change distributed as follows:

**Enhancements**: In order to make the navigation around the enhancements easier, they are classified as follows based on the modules in the Avaamo Conversational AI Platform:

Module

Enhancements

Accessibility

*   [Enhance agent accessibility with consistent navigation and voice-over rendering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#enhance-agent-accessibility-with-consistent-navigation-and-voice-over-rendering)
    

Dialog Designer

*   [Upload files, audios, and videos in Q&A and Smalltalk](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#upload-files-audios-and-videos-in-q-and-a-and-smalltalk)
    

Channel

*   [Show agent typing indicator while waiting for agent response in MS Teams channel](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#show-agent-typing-animation-while-waiting-for-agent-response-in-ms-teams-channel)
    

Live agent

*   [Protect interactions with live agents by not recording them](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#protect-interactions-with-live-agents-by-not-recording-them)
    
*   [Analyze all the agent interventions in the improved Agent intervention analytics](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#analyze-all-the-live-agent-interventions-in-the-improved-agent-intervention-analytics)
    

Masking

*   [Provide developers flexibility to control and manage agent response masking](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#provide-developers-flexibility-to-control-and-manage-agent-response-masking)
    

Query insights

*   [Search and export results using timezone in Query insights to interpret results accurately](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#search-and-export-results-using-timezone-in-query-insights-to-interpret-results-accurately)
    
*   [Performance improvements for Message API and Query insights API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#performance-improvements-for-message-api-and-query-insights-api)
    

Answers

*   [Use document name for card title in Answers skill response](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#use-document-name-for-card-title-in-answers-skill-response)
    
*   [Improve accuracy with the right model, based on the content in the Answers skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#improve-accuracy-with-the-right-model-based-on-the-content-in-the-answers-skill)
    
*   [Fine-tune language-specific responses in the Answers skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#fine-tune-language-specific-responses-in-the-answers-skill)
    
*   [Add chunk preview URL for Answers](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#add-chunk-preview-url-for-answers)
    
*   [Improved Answer prediction API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#improved-answer-prediction-api)
    

**Changes:** This release includes changes related to the following existing features:

1.  [Trim text response toggle in the Answers configuration](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#trim-text-response-toggle-in-the-answers-configuration)
    

**Deprecation notice**: In this release, the agent widget support on the Internet Explorer browser is deprecated. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#deprecation-notice), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of enhancements and changes in the v6.2.0 release:

Enhancements

Change

Enhancements

Component

[Enhance agent accessibility with consistent navigation and voice-over rendering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#enhance-agent-accessibility-with-consistent-navigation-and-voice-over-rendering)

*   Agent widget
    

[Upload files, audios, and videos in Q&A and Smalltalk](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#upload-files-audios-and-videos-in-q-and-a-and-smalltalk)

*   Dynamic Q&A -> Skill response
    
*   Smalltalk -> Skill response
    

[Show agent typing indicator while waiting for agent response in MS Teams channel](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#show-agent-typing-animation-while-waiting-for-agent-response-in-ms-teams-channel)

*   MS Teams channel
    

[Protect interactions with live agents by not recording them](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#protect-interactions-with-live-agents-by-not-recording-them)

*   Configuration -> Live agent
    
*   Debug -> Conversation history
    

[Analyze all the agent interventions in the improved Agent intervention analytics](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#analyze-all-the-live-agent-interventions-in-the-improved-agent-intervention-analytics)

*   Monitor -> Agent intervention
    
*   Monitor -> Query insights
    
*   REST APIs -> Agent intervention API `https://cx.avaamo.com /bots/analytics/{{agent_id}}/agent_intervention.json`
    

[Provide developers flexibility to control and manage agent response masking](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#provide-developers-flexibility-to-control-and-manage-agent-response-masking)

*   Configuration -> Settings
    

[Search and export results using timezone in Query insights to interpret results accurately](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#search-and-export-results-using-timezone-in-query-insights-to-interpret-results-accurately)

*   Monitor -> Query insights
    

[Performance improvements for Message API and Query insights API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#performance-improvements-for-query-insights-api)

*   REST APIs -> Message API
    

`https://cx.avaamo.com/v1/messages.json`

*   REST APIs -> Query insights API `https://cx.avaamo.com /bots/analytics/{{agent_id}}/agent_intervention.json`
    
*   All APIs where `per_page` parameter is used
    

[Use document name for card title in Answers skill response](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#use-document-name-for-card-title-in-answers-skill-response)

*   Answers -> Configuration
    

[Improve accuracy with the right model, based on the content in the Answers skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#improve-accuracy-with-the-right-model-based-on-the-content-in-the-answers-skill)

*   Answers -> Configuration
    

[Fine-tune language-specific responses in the Answers skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#fine-tune-language-specific-responses-in-the-answers-skill)

*   Answers -> Configuration
    

[Add chunk preview URL for Answers](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#add-chunk-preview-url-for-answers)

*   Answers -> Implementation -> Document groups -> Knowledge -> Sections
    

[Improved Answer prediction API](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#improved-answer-prediction-api)

*   REST APIs -> Answer Prediction API `https://mx.avaamo.com/answers/v2/process-query`
    

Change

Component

[Trim text response toggle in the Answers configuration](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0#trim-text-response-toggle-in-the-answers-configuration)

Answers -> Configuration

## 

Enhancements

### 

Enhance agent accessibility with consistent navigation and voice-over rendering

In this release, the Accessibility inclusivity in the agents built using Avaamo Conversation AI Platform has been improved. This release makes the agents easily accessible by providing a uniform and consistent approach for navigating elements in the agent widget.

The following are a few key enhancements incorporated in this release:

*   Top to bottom navigation: The tab order follows the visual flow of the agent - `top to bottom` and `left to right` flow with the exception of when the agent is launched for the first time. In this case, the first focus is on the `Type a Message` text area.
    
*   Link navigations:
    
    1.  All inputs, buttons, links, and divs follow `top to bottom, left to right` navigation flow.
        
    2.  Users can use `tab` and `shift + tab` keys to navigate from one element to another.
        
    3.  Example: Buttons in Quick reply, Persistent Menu, Links, inputs, and buttons navigation in Cards. Use `tab` and `shift + tab` keys.
        
    
*   Skip links: Enable user to navigate from header to typing text area at the bottom. See [Skip links](http://web-accessibility.carnegiemuseums.org/code/skip-link/), for more information. Note that the skip link is accessed only via the keyboard, specifically by pressing the `Tab` key only when the focus is at the topmost header element in the agent.
    
*   Cards in a Carousel: Navigation starts from the `left (left arrow key)` through the last element (`right arrow key`).
    
*   Arrow (`Up and down`) navigation for message conversations in the agent:
    

User action

Windows

Mac OS

Move up one interaction

`Page Up`

`Function + Option + Up Arrow`

Move down one interaction

`Page Down`

`Function + Option + Down Arrow`

Jump to the first interaction

`Home`

`Function + Option + Left Arrow`

Jump to the last interaction

`End`

`Function + Option + Right Arrow`

*   Voice-Over improvements: Consistent rendering of elements using improved aria-labels.
    
    *   Improved Aria-labels on cards, links, buttons, and images
        
    *   Improved Aria-live on notification
        
    *   Improved Input aria-labels
        
    

**Note**:

*   The keyboard shortcuts are based on the [W3C's ARIA 1.2 authoring practice example](https://www.w3.org/TR/wai-aria-1.2/#feed) for navigating feeds.
    
*   All focus states have been designed to meet the current iteration of [WCAG 2.2's forthcoming Focus Appearance (Minimum) criterion](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#2411-focus-appearance-minimum-aa).
    

### 

Upload files, audios, and videos in Q&A and Smalltalk

In this release, the available response types in the Dynamic Q&A skill and Smalltalk have been enhanced with the following:

*   Files
    
*   Audio
    
*   Video
    

Using these response types, you can build a conversation flow allowing users to upload files, audio, and video for any Q&A or Smalltalk responses. The following illustration depicts the newly added response types in the Dynamic Q&A skill. Similar response types are displayed in the Smalltalk skill -> Prompt details pop-up window:

In the previous release, [Files](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#files), [Audio](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#audio), and [Video](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#video) response types were available only in the Dialog skill responses.

### 

Show agent typing indicator while waiting for agent response in MS Teams channel

In this release, the user experience interacting with the Avaamo agent in the MS Teams channel has been enhanced by displaying an agent typing indicator to the user while they wait for the agent's response. Typically, this is useful when you have external API calls to generate agent responses where you can expect some delay in responses.

**Key points:**

*   When the agent response contains multiple replies, then the typing indicator is visible only for the first agent reply.
    
*   There is a default timeout of 20 seconds for the typing indicator. If the agent replies in 2 seconds, then the typing indicator gets disabled in 2 seconds. If the agent fails to reply to the user query, then the typing indicator is visible for 20 seconds.
    

See [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information on the MS Teams channel.

In the earlier release, there was no typing indicator displayed in the MS Teams channel while waiting for the agent's response. This caused confusion as it was unclear to the user whether the agent has stopped responding or the user had to wait for the agent's response.

### 

Protect interactions with live agents by not recording them

Typically, in certain domains such as Banking and Finance, a user’s interaction with a live agent can capture sensitive details such as the user’s identification number, policy number, and email (to name a few). Therefore, it is critical to audit the data and protect data privacy in such cases.

Hence, as a part of protecting PII/PHI/GDPR compliance data of the live agent interactions within the Avaamo Conversational AI system, a new toggle button **Save conversations** has been introduced in this release. Using this option, you can choose to not record the live agent interactions in the agent conversation history. This option is available in the Agent -> Configuration -> Live agent page.

See [Configure live agent](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#configure-live-agent), for more information.

**Key points**:

*   Avaamo Conversational AI platform has always been GDPR compliant. Information masking can be used to protect PII/PHI/GDPR compliance data. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more information.
    
*   This enhancement is applicable only to all the live agent conversations saved in the Avaamo platform. The live agent conversation data in the external live agent systems such as Oracle, Zendesk, or any custom live agents must be handled separately by the respective systems according to the business requirements.
    
*   If the **Save conversations** toggle is set to **No**, then no data or chat conversations between the users and live agents are saved in the Avaamo platform. At the specific section in the Conversation history page, a system message indicating the same is displayed. See [Conversation history](/user-guide/how-to/build-agents/debug-agents#using-conversation-history), for more information.
    

### 

Analyze all the live agent interventions in the improved Agent intervention analytics

In this release, the **Agent intervention** analytics board has been enhanced to capture the following details:

*   Transfers to live agents triggered via JavaScript code. See [Transfer to live agent using JS](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/use-context/transfer-to-live-agent), for more information.
    
*   Transfers to live agents triggered using commands such as `#transfer to agent / #talk to agent`. See [Agent commands](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/skill-commands), for more information.
    
*   Transfers to live agent triggered via C-IVR channel.
    
    *   See [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#call-forward), for more information.
        
    *   See [SmartCall.forward](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/forward-call-c-ivr-channel), for more information.
        
    

**Key points**:

*   From the v6.2.0 release onwards, Agent intervention data and Agent intervention API displays the actual count of agent transfers irrespective of the way it is called or the channel it is triggered from.
    
*   Post v6.2.0 upgrade, for the historical data, in addition to the actual agent transfer, [silent switch](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/pre-built-live-agent#live-agent-transfer-rules) is also considered. Hence, you may notice a spike in the agent intervention analytics for the existing agents after the v6.2.0 upgrade.
    
*   To ensure data consistency, the Agent intervention API has been updated in the v6.2.0 release to get the statistics of the actual live agent transfers by the users. In the previous release, the Agent intervention API would get the statistics on the live agent transfers requested by the users. See [Agent intervention API](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/agent-intervention), for more information.
    

With this feature, a new concept of System tags has been introduced in this release. These are in-built tags that are maintained internally by the Platform. See [Tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.

In the previous release, the **Agent intervention** analytics board only captured system live agent interactions that are configured using the **Configuration -> Live agent** option. Live agent transfers triggered via a JavaScript code or via the C-IVR channel were not captured in the **Agent intervention** analytics board.

See [Agent intervention](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#agent-intervention) for more information.

### 

Provide developers flexibility to control and manage agent response masking

In this release, developers have the flexibility to control masking at the agent level using the **Information masking** toggle button in the Agent -> Configuration -> Settings page. With this enhancement, developers can:

*   Fully control and manage agent response node-level masking without having to contact Avaamo Support.
    
*   Use this toggle to test and debug masking during the development and testing phase.
    

**Key point**: For masking user messages where patterns or entities are required, developers must still continue to contact Avaamo Support with all the required masking configurations. See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking), for more details.

In the previous release, even though the agent response node-level masking toggle was available in the UI, developers had to contact Avaamo Support to first enable masking at the agent level, and only then agent response node-level masking would work. The option to enable or disable masking was not exposed in the UI.

See [Information masking](/user-guide/overview-and-concepts/advanced-concepts/information-masking) and [Enable Information masking](/user-guide/how-to/build-agents/configure-agents/define-settings#enable-information-masking), for more information.

### 

Search and export results using timezone in **Query insights** to interpret results accurately

In this release, the date criterion in the **Monitor -> Query insights** page has been enhanced with a new **Date range** field. This field replaces the existing "From date" and "To date" fields in the Query insights page to make the search more simple, specific, and efficient. The new **Date range** field provides options to:

*   Select a date range from a set of pre-defined date filters in a single click.
    
*   Select a **Custom Range** to pick your own date range by selecting the start and end dates.
    
*   Select a timezone to search and filter the results.
    

It allows you to search and export the results in the selected date and timezone from the **Query insights** page. Business users from different regions can view the exact date and timezone of the records in exported CSV and hence can interpret the results accurately.

In the previous release, there was no option to select the timezone, and the user's local timezone from the browser was used in the Query insights export. This created a lot of confusion when business users in different regions downloaded the same report.

See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights) for more information.

### 

Performance improvements for Message API and Query insights API

In this release, the performance of the Message API and Query insights API has been improved to avoid timeout errors even for a high volume of data. See [Query insights API](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights), for more information. With this improvement, the default `per_page` parameter for all the APIs has been changed from 5 to 25.

**Note**: The default `per_page` parameter change is backward compatible, which implies that the API will return a response when `per_page` is 5.

In the earlier release, Message API and Query insights API would result in timeout errors for a high volume of data and hence developers had to request Avaamo Support for obtaining Message API and Query insights API data. Also, with the default `per_page` size as 5, the pagination calls were more frequent, and hence for a huge volume of data, it resulted in slower performance of the APIs.

### 

Use document name for card title in Answers skill response

In this release, the Answers skill -> Configuration page has been enhanced with a new configuration option **Use document name for card title** in the **Display** section.

This option allows you to enable or disable the display of the document title in the agent response when the response is rendered as HTML. When you disable the **Use document name for card title** toggle, the document title is not displayed and only the section header is displayed in the agent response.

Use document name for card title = enabled

Use document name for card title = disabled

See [Use document name for card title](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#use-document-name-for-card-title), for more information.

### 

Improve accuracy with the right model, based on the content in the Answers skill

In this release, the Answers skill -> Configuration page has been enhanced with a new configuration option **Answering mechanism** in the **Additional settings** section. This option allows you to select a relevant model to be used by the Platform for providing agent responses based on the content type in your knowledge base. The platform uses the selected model to optimize the response and hence results in better accuracy.

See [Answering mechanism](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#answering-mechanism), for more information.

### 

Fine-tune language-specific responses in the Answers skill

In this release, the Answers skill -> Configuration page has been enhanced with two new configuration options related to language translation.

*   **Get responses only from documents in the query language**: Display responses only from the documents in which the user query is posted.
    
*   **Fallback to all documents**: If the response is not available in the user query language, then translated response, if available in another language document is displayed.
    

These options are useful when you have the same content uploaded in multiple languages. It helps you to display relevant responses to the users based on the business requirement and languages of the uploaded document. See [Translation configuration](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#translation-configuration), for more information.

### 

Add chunk preview URL for Answers

In this release, the Knowledge -> Sections tab has been enhanced with a **Preview URL** option. This option allows you to specify a different preview URL for each chunk or section in the extracted knowledge base based on your requirement. See [Sections](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/view-and-edit-knowledge#sections), for more information.

When a response from this section is displayed in the agent, then the **View more** link in the response navigates to the link specified in the **Preview URL** option. Instead of using a generic document URL for all the chunks, this helps you to fine-tune the responses and provide accurate navigation links that can be helpful to the users.

In the earlier release, for all the chunks or sections, only the document URL was used. There was no option to specify a different URL for each chunk or section.

### 

Improved Answer prediction API

In this release, the Answer prediction API has been enhanced with a simpler payload for ease of use and better understandability. In the improved version, the configuration object is removed and the options specified only in the Answers -> Configuration page are considered to avoid confusion.

The following is the API endpoint with a sample payload of the improved Answer prediction API:

See [Answer prediction API](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/answers-rest-apis/answer-prediction-api), for more information.

Earlier Answer prediction API had configuration parameters in the payload that were repeated in the UI. The API would always consider the configuration options from the UI. Hence, the response received by the API was unclear to the developers, especially when the configuration options in the API and the UI were different.

## 

Changes

### 

**Trim text response** toggle in the Answers **c**onfiguration

In this release, the **Trim text response** toggle in the Answers skill -> Configuration page has been decoupled from **Render as HTML** toggle. You can enable or disable the **Trim text response** toggle irrespective of whether you have enabled **Render as HTML** toggle or not.

This change is useful when the Answer skills contain a mix of content - both PDF and URLs. In such cases, you can have **Render as HTML** and **Trim text response** toggles both enabled. Here, note that although both the toggles are enabled, the **Trim text response** toggle is used and applicable only for PDF content and has no effect on the HTML content.

See [Trim text response](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#trim-text-response) and [Render as HTML](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#render-as-html), for more information.

In the earlier release, the **Trim text response** toggle was functional only when **Render as HTML** toggle was disabled as trimming a text response is not applicable for HTML documents. If the Answers skill contained both URLs and PDFs, then using both the toggle functionalities was not possible.

## 

⚠️Deprecation notice

In this release, the agent widget support in the Internet Explorer browser has been deprecated. It will continue to work with limited functionality. We will no longer release any fixes specific to Internet Explorer.

### 

Why?

Microsoft Internet Explorer is a legacy system and does not offer support for the advanced functionality offered by our platform. Microsoft has announced the end of lifecycle support for IE. See [Lifecycle policy for Internet Explorer](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer-), for more information.

### 

When is the support completely stopped?

This feature will be removed from the next release onwards.

### 

What action to take?

Use any of the supported platform browsers. See [Supported browsers](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#supported-browsers), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/watch-the-webinar-on-v6.2.0

Take a look at the webinar on v6.2.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x

[What's new in v6.1.0?](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0)[Release notes v6.1.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0)[Watch the webinar on v6.1.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/watch-the-webinar-on-v6.1.0)[Fix patch releases (v6.1.x)](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/fix-patch-releases-v6.1.x)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0

In this release, a new agent called the **Universal Agent** has been introduced. In simple terms, a **Universal agent** is a "group of agents" that handles tasks of multiple agents in a single conversational flow. It can integrate and connect with independent virtual agents to route, filter, and provide real-time responses.

The primary feature of a Universal agent is the ability to have "one" agent across multiple departments in an Enterprise organization. Typically, large enterprises can have multiple departments, each with its own individual agents catering to different aspects of the organization. Since all agents are a part of the same organization, by integrating these into a Universal agent, you are providing a seamless and pleasant experience to the users.

The following illustration depicts an "Acme Enterprise" Universal agent linked with independent virtual agents such as - Acme HR, Acme IT, and Acme Finance. Each department can continue to build these agents independently. The user can just use one agent - the "Acme Enterprise" agent for all the queries across different departments:

## 

How does it work - Quick Overview?

Each agent linked to the universal agents is referred to as a **Member agent**. When a user query is posted to a Universal agent, it routes the user’s intent to the appropriate **Member agent** for simple Q&A or multi-turn conversations, renders member responses inline, and also manages the conversation context.

With release 6.1.0, a Universal agent can connect with any Avaamo agent.

## 

Why Universal agents?

The Universal agent is a very powerful feature that combines the capabilities of individual agents into one unified agent.

To provide an overview of some key benefits, it is categorized based on the user persona - [End users](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0#end-users), [Developers](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0#developers), and [Business users](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0#business-users) in the enterprise organization.

### 

End users

The following lists some of the key benefits of Universal agents for end-users:

*   **Unified interface:** Provides a unified interface to the users, completely hiding the details of the connected members. All intents/ use cases are available via a single agent. It centralizes the agent interaction across multiple departments, domains, or sectors.
    
*   **Seamless user experience**: Avoids putting users through the hassles of using multiple agents built for various tasks. For example: When different departments in an organization such as procurement, finance, and HR have independent virtual assistants to answer queries and complete mundane tasks, it is tedious for users who want assistance in matters relevant to more than one department - as they have to go through the hassles of using multiple agents to built for various tasks.
    

### 

Developers

The following lists some of the key benefits of Universal agents for developers:

*   **Quick and easy configuration**: Provides quick and easy methods to create and manage the connected member agents.
    
*   **Separation and Modularization:** Each member agent is an independent virtual agent that can be managed separately by each department or sector. Universal Agent leverages the training imparted to the individual members for intent detection. No duplication of training is required. This helps in easy maintenance and also helps to troubleshoot and debug easily.
    
*   **Regression testing**: Allow you to perform regression testing across member agents. You can test end-to-end flow in a single Universal agent, instead of performing multiple regression testing in each member agent.
    

See [Add member agents](/user-guide/how-to/build-agents/create-universal-agent/add-member-agents), [Manage member agents](/user-guide/how-to/build-agents/create-universal-agent/manage-member-agents), and [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing-universal-agents), for more information.

### 

Business users

**Unified analytics**: Provides a unified analytics dashboard for monitoring the usage across the member agents. See [Analytics - Universal agents](/user-guide/how-to/build-agents/monitor-and-analyze/analytics-universal-agent), for more information.

## 

Key highlights

The following are some of the key highlights of Universal agents:

*   **Intent detection and routing**: Universal agents detect the intent and route the conversation to the appropriate member that can fulfill the user’s request in the best possible way.
    
*   **Context management**: Universal agents maintain the context of the dialog once the conversation starts with a particular member agent. It detects the end of conversation and fallback from the member agents.
    
*   **Disambiguation:** When the user's intent is not clear, the Universal agent disambiguates between its member agents and displays options for the user to choose from.
    
*   **Intent switching:** Universal agents allow switching of intents mid-way through a dialog from one member agent to another.
    
*   **Conversation resumption:** Universal agents maintain the conversation context at all times across member agents.
    
*   **Context sharing:** Universal agents detect and preserve contextual information of conversation across members.
    

## 

More information

See [Universal agent](/user-guide/how-to/build-agents/create-universal-agent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0

The Avaamo Conversational AI Platform v6.1.0 release includes 1 new feature, 7 enhancements, and 3 changes distributed as follows:

**New feature:** This release includes the introduction of a new agent referred to as **Universal agents.** See [What's new in v6.1.0?](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0) for more information on the newly introduced features in v6.1.0.

**Enhancements**: This release includes enhancements related to the following existing features:

1.  [Customizing the User feedback form](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#customizing-the-user-feedback-form)
    
2.  [Improvements in JS error email notifications](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#improvements-in-js-error-email-notifications)
    
3.  [Export errors from the JS errors page](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#export-errors-from-the-js-errors-page)
    
4.  [UI enhancements for language translations](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#ui-enhancements-for-language-translations)
    
5.  [Configuration options for Tabular answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#configuration-options-for-tabular-answering)
    
6.  [Disambiguation between Answers skills](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#disambiguation-between-answers-skills)
    
7.  [Query Analyzer (QA) permission enhancements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#query-analyzer-qa-permission-enhancements)
    

**Changes:** This release includes changes related to the following existing features:

1.  [Errors count on the home page](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#errors-count-on-the-home-page)
    
2.  [Language configuration for skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#language-configuration-for-skill)
    
3.  [Unhandled query analyzer name change](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#unhandled-query-analyzer-name-change)
    

## 

Component-wise distribution

The following table lists the component-wise distribution of new features, enhancements, and changes in the v6.1.0 release:

New features

Enhancements

Changes

New feature

Component

[Universal agent](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/whats-new-in-v6.1.0)

*   Dashboard -> Create -> New universal agent
    

Enhancements

Component

[Customizing the User feedback form](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#customizing-the-user-feedback-form)

*   Agent -> Configuration -> Custom feedback
    

[Improvements in JS error email notifications](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#improvements-in-js-error-email-notifications)

*   Configuration -> Settings -> Email notifications
    

[Export errors from the JS errors page](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#export-errors-from-the-js-errors-page)

*   Agent -> Debug -> JS errors
    

[UI enhancements for language translations](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#ui-enhancements-for-language-translations)

*   Skill message response pop-up window
    

[Configuration options for Tabular answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#configuration-options-for-tabular-answering)

*   Answers skills -> Configuration
    

[Disambiguation between Answers skills](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#disambiguation-between-answers-skills)

Agent with multiple Answers skills enabled.

[Query Analyzer (QA) permission enhancements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#query-analyzer-qa-permission-enhancements)

*   Agent -> Monitor -> Query analyzer
    

Change

Component

[Errors count on the home page](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#errors-count-on-the-home-page)

Dasboard -> Agents page

[Language configuration for skill](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#language-configuration-for-skill)

*   Agent -> Configuration -> Language
    
*   Skill -> Configuration -> Language
    
*   Node response window
    
*   Import skills from Skill store
    

[Unhandled query analyzer name change](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0#unhandled-query-analyzer-name-change)

*   Agent -> Monitor -> Query analyzer
    

## 

Enhancements

### 

Customizing the User feedback form

In this release, an enhanced feature to customize the **User feedback** form using Javascript (JS) code has been included. This enhancement helps to:

*   Build user feedback forms that are robust and intuitive. You can now create a custom feedback form by leveraging the rich set of objects and functions in the Avaamo Platform. Currently, you can create a Custom user feedback form using Cards only. See [Card](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card), for more information.
    
*   Enhance the way in which you can collect feedback from the users. Since the feedback form can now be tailored to suit your business requirements, it enables you to collect relevant and effective feedback from users. The collected feedback can be used to significantly enhance the experience of the user when interacting with your agent.
    
*   Create different custom feedback forms for both positive and negative feedback.
    

The following is an illustration of a custom user feedback form that is displayed for providing positive feedback:

**Note**: This enhancement is available for the Web, Android, and iOS channels.

A new **Feedback** tab has been added on the left panel to the **Agent -> Configuration** section. Using this tab, you can customize the feedback form that is displayed for both positive and negative feedback. See [Custom feedback](/user-guide/how-to/build-agents/configure-agents/custom-feedback), for more information.

### 

Improvements in JS error email notifications

In this release, many improvements have been made to the email notifications that are sent when JS errors are encountered during agent interactions with users. These improvements provide more insight into the errors and help you identify and troubleshoot the errors quickly.

The following lists the improvements in the JS error email notification:

*   The stage of the agent in which the error has occurred.
    
*   A link to the JS errors page.
    
*   The errors and the corresponding details of each error.
    
*   An option to send an email to the agent owners is provided.
    

The following illustration depicts a JS error email notification of an agent:

See [Notifications](/user-guide/how-to/build-agents/configure-agents/define-settings#notifications) for more information.

### 

Export errors from the JS errors page

In this release, the **Debug -> JS errors** page has been enhanced to allow you to **filter and export errors** from the JS errors page to a CSV file. The exported CSV can be used for further analysis and as a reference if required. This enhancement comes with a few other improvements to the JS errors page.

Other improvements in the JS errors page:

*   **Date range**: You can filter the error list to selectively view errors that only occurred within a certain date range. The maximum allowed date range is upto 90 days from the current date.
    
*   **Pagination:** Use pagination to smoothly navigate and view JS errors.
    

See [JS Errors](/user-guide/how-to/build-agents/debug-agents/js-errors) for more information.

### 

UI enhancements for language translations

In this release, there are a few UI enhancements related to language translations in the Skill response pop-up window. These enhancements help to:

*   **Easily identify custom and system translations**: In this release, the background color of the skill response text area gets changed from white to blue for custom-translated text. This helps in easy identification of custom vs system-generated translations. It offers a simpler way to indicate custom-translated text.
    
*   **Reset any custom-translated text to system-generated translation**: In this release, the UI of the skill response pop-up window has been enhanced to include a button in the skill response area that allows you to reset the custom translation to the system default translation.
    

In the earlier releases, it was very difficult to identify whether the text was a system-translated text versus custom-translated text. Also, there was no easy way to reset any custom-translated text to system-generated text in the Skill response pop-up window.

See [Language-specific responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#language-specific-responses), for more information.

### 

Configuration options for Tabular answering

In this release, tabular answering in Answers has been enhanced with the following two configuration options:

*   [Display generative answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#display-generative-answer): Generate a plain text response using the information extracted from the table - making the response more conversational and easily understandable. For example, consider that the response to the query 'what is the IPO of burger king' is in a table. When this user query is posted to the agent, the response is extracted from the table and displayed as a sentence. The corresponding table from which the information is extracted is displayed below the generated sentence.
    

*   [Display single table row](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/configure-answers-skill#display-single-table-row)**:** Extract only the single row that has the response to the user's question and display that row along with the corresponding column names. This allows the user to get a precise response from tables and eliminates the need to scroll through tables to locate information. The following illustration depicts the difference between a full table display versus a single table row display in the Answers response for the same user query
    

Full table

Single table row

### 

Disambiguation between Answers skills

In this release, the agent can disambiguate between responses from multiple answer skills.

When a response to a user query is found in multiple Answers skills, the agent presents the names of the Answers skills that have the response. Based on the Answer skill that the user selects, the corresponding response is displayed. This enhancement allows the user to select a response within a given domain or context.

### 

Query Analyzer (QA) permission enhancements

In this release, any user with at-least read-only permission on the agent can submit a QA job. This is useful in production agents, as typically only read-only permissions are provided to the business users. It helps them to run the UQA job to analyze the unhandled queries and further improvise the user experience with the agent. See [Permissions](/user-guide/how-to/build-agents/configure-agents/permissions) and [UQA](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated), for more information.

Earlier only users with at-least edit permissions were able to submit the UQA job.

## 

Changes

### 

Errors count on the home page

In this release, the count of errors for an agent that is displayed on the home page (where agents are listed) is the count of the errors that occurred only in the past 90 days from the current date.

In the previous release, the error count was the total number of errors recorded during the lifetime of the agent.

### 

Language configuration for skill

In order to provide easy maintenance and a consistent approach to managing languages and their translations for an agent, language configuration at the skill level is removed. Earlier, this configuration was done using the legacy **Skill -> Configuration -> Language** page. This configuration was deprecated in release 6.0. With this release, it is completely removed.

**For new implementations**

For all languages added at the agent level, corresponding translations for skills are automatically generated and made available. Languages and custom translations can only be added at the agent level and not at the skill level. See [Add languages](/user-guide/how-to/build-agents/configure-agents/add-languages), for more information on how to add and manage languages at the agent level.

**For existing skills**

*   For skill-level languages that are supported at the agent level, the custom translations available at the skill level are migrated to the agent level after the upgrade.
    
*   In cases where custom translation for specific sentences or text is available at both the skill level and agent level, the agent-level translation is given priority.
    
*   Note that custom node-level translations of the skill level are retained as-is, even when the language is not available at the agent level. Later, when the specific language is added to the agent, node-level translations are given priority.
    

**Importing skills**

*   When importing a skill, only translations of those languages that are supported by the agent are imported. If you wish to import the skill language that is not in the agent, then you must first add the language to the agent and then import the skill.
    
*   In cases where custom translation for specific sentences or text is available at both the skill level and agent level, the agent-level translation is given priority.
    
*   Since an imported skill language is considered only when the language is a part of the agent configuration, any node-level translations of the languages that are not a part of the agent are not imported either.
    
*   See [Import and Re-import skills](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills), for more information.
    

### 

Unhandled query analyzer name change

In this release, the name of the **Unhandled query analyzer** in the **Agent -> Learning** section has been updated to **Query analyzer**, as it is used to analyze all queries and not just unhandled queries. Note that this is only a name change and there is no functionality impact with this change.

See [Query analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/watch-the-webinar-on-v6.1.0

Take a look at the webinar on v6.1.0 to get a quick understanding of new features and enhancements in this release:

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/fix-patch-releases-v6.1.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 6.1.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v6.1.1

June 7th, 2022

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x

[Release notes v6.0.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0)[Watch the webinar on v6.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/watch-the-webinar-on-v6.0)[Fix patch releases (v6.0.x)](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/fix-patch-releases-v6.0.x)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0

The Avaamo Conversational AI Platform v6.0.0 release includes 9 new features and 3 enhancements distributed as follows:

**New features:** This release includes the following new features:

1.  [New enterprise channels](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#new-enterprise-channels)
    
2.  [Voice entity model](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#voice-entity-model)
    
3.  [Pull updates window](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#pull-updates-window)
    
4.  [Changelog API (v2)](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#changelog-api-v2)
    
5.  [Built-in functions window](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#built-in-functions-window)
    
6.  [New voice profiles](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#new-voice-profiles)
    
7.  [Tabular answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#tabular-answering)
    
8.  [Multilingual answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#multi-lingual-answering)
    
9.  [Content ingestion in Avaamo Answers using Webhooks](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#content-ingestion-in-avaamo-answers-using-webhooks)
    

**Enhancements**: This release includes enhancements related to the following existing features:

1.  [User feedback](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#user-feedback)
    
2.  [Promote pop-up window improvements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#promote-pop-up-window-improvements)
    
3.  [Regression testing](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#regression-testing)
    
4.  [Search documents in Answers skill using URL](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#search-documents-in-answers-skill-using-url)
    

**Deprecation notice**: In this release, the Skill -> Configuration -> Language feature is deprecated. See [Deprecation notice](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#deprecation-notice), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of new features, enhancements, and changes in the v6.0.0 release:

New features

Enhancements

Changes

The following lists the usage of the new features across different components in the platform:

New features

Components

[New enterprise channels](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#new-enterprise-channels)

*   Configuration -> Channels -> MS teams
    
*   Configuration -> Channels -> WeChat
    
*   Configuration -> Channels -> Nice InContact
    
*   Configuration -> Channels -> Genesys
    
*   Configuration -> Channels -> SIP
    

[Voice entity model](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#voice-entity-model)

*   Dialog skill -> Implementation -> Add user intent
    

[Pull updates window](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#pull-updates-window)

*   Testing -> Actions -> Pull updates
    
*   Staging -> Actions -> Pull updates
    
*   Production -> Actions -> Pull updates
    

[Changelog API - V2](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#changelog-api-v2)

*   REST API
    

[Built-in functions window](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#built-in-functions-window)

*   Skill -> Implementation -> Add agent response -> Javascript
    
*   Configuration -> JS Files
    

[New voice profiles](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#new-voice-profiles)

*   Configuration -> Voice settings -> Synthesis
    
*   Channels -> C-IVR
    
*   Channels -> Genesys
    
*   Channels -> Nice InContact
    

[Tabular answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#tabular-answering)

*   Answers skill
    

[Multilingual answering](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#multi-lingual-answering)

*   Answers skill
    

[Content ingestion in Avaamo Answers using Webhooks](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#content-ingestion-in-avaamo-answers-using-webhooks)

*   Answers skill
    

The following lists the usage of enhancements across different components in the platform:

Enhancement

Components

[Export user feedback in CSV format](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#export-user-feedback-in-csv-format)

*   Learning -> User feedback
    

[Promote pop-up window improvements](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#promote-pop-up-window-improvements)

*   Development -> Actions -> Promote
    
*   Testing -> Actions -> Promote
    
*   Staging -> Actions -> Promote
    

[Regression testing](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#regression-testing)

*   Test -> Regression Testing
    

[Search documents in Answers skill using URL](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0#search-documents-in-answers-skill-using-url)

*   Answers skill -> Implementation -> Document groups -> Documents
    

Component

Change

Skill -> Configuration -> Language

*   Add language option has been removed.
    
*   Delete language option has been removed.
    

Since managing the addition and deletion of languages at the agent level is easier and avoids confusion.

You can use Agent -> Configuration -> Language to add languages. At the skill level, you can customize translations for the languages added at the agent level. See [Language pack](/user-guide/overview-and-concepts/advanced-concepts/language-pack), for more information.

Answers API

User access token must be used to authorize the Answers API.

See [Get user access token](applewebdata://9891D414-620D-4A48-8416-492A241F5AE1/o/-LpXFbuTM3h40PfxYgao/s/-LpXFTiTgns4Ml77XGi3/~/changes/GcxgyiBDYMbLBVnEyA06/how-to/manage-platform-settings/users-and-permissions/users#get-user-access-token), for more information.

Content ingestion in Answers skill

Use valid JSON format for attributes while ingesting the content. With the v6.0 release, strict JSON validation is required to avoid any discrepancy in the data ingested into the system for attribute match.

See [Upload content](applewebdata://FC72E3BB-D6DD-4F39-9AB2-4E7E4D066D06/o/-LpXFbuTM3h40PfxYgao/s/-LpXFTiTgns4Ml77XGi3/~/changes/GcxgyiBDYMbLBVnEyA06/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/add-document-or-url-1), for more information.

## 

New features

### 

New enterprise channels

In this release, the following new enterprise channels have been introduced:

*   [Microsoft Teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams)
    
*   [WeChat](/user-guide/how-to/build-agents/configure-agents/deploy/wechat)
    
*   [Genesys](/user-guide/how-to/build-agents/configure-agents/deploy/genesys)
    
*   [NICE inContact](/user-guide/how-to/build-agents/configure-agents/deploy/nice-incontact)
    
*   [SIP](/user-guide/how-to/build-agents/configure-agents/deploy/sip)
    

**Microsoft Teams** and **WeChat** are the new text-based channels.

**SIP, Genesys,** and **NICE inContact** are the new C-IVR enterprise channels to facilitate voice channel communication.

When a developer creates UI elements inside the Avaamo platform; for example, Microsoft Teams. the UI elements are converted to Microsoft's teams compatible UI. This allows the developer to seamlessly create a conversation without the need of writing extensive code.

See [Microsoft teams](/user-guide/how-to/build-agents/configure-agents/deploy/microsoft-teams-ms-teams), for more information.

### 

Voice entity model

In this release, a new concept of Voice entity models has been introduced. Voice entity models are pre-built models to precisely detect relevant entities from the user's speech. It is a model built by using millions of actual user utterances combined with domain-specific data.

Text-based conversations are not the same as voice-based conversations. It is critical to extract and understand the entities accurately since often it is the starting point of the conversation and it completes the user query. The voice entity model boosts the Avaamo platform's ability to collect crucial elements from users' speech. It helps us to:

*   Enhance the accuracy of interpreting user query and hence provides a good user experience
    
*   Accelerates agent development, since the same voice entity models can be used in multiple intent interpretations without having to code.
    

Voice entity models are available when you define users' intent in C-IVR conversational flow.

Few commonly used models include:

*   Name
    
*   Date
    
*   Alphanumeric
    
*   Numbers
    
*   Postal Code
    
*   Phone Number
    
*   Email
    
*   Time
    
*   Amount
    
*   Age
    
*   Money
    

See [Voice entity mode](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent/voice-entity-model)l, for more information.

### 

Pull updates window

In this release, a new **Pull updates** window has been introduced.

As the agent progresses in its [lifecycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle) (Development, Testing, Staging, Production), updates made to an agent in the previous stage are pulled successively until it reaches production. When updates are pulled, it is critical to know the list of changes being pulled. This helps in evaluating the impact of the change in the current stage.

The new **Pull updates** window is displayed when the agent's changes are pulled from a previous stage to the current stage.

In this window, you can:

*   Quickly view a list of changes that will be pulled from the previous stage to the current stage changes.
    
*   Confirm and accept the changes that are being pulled to the next stage.
    
*   Download the summary of changes in a CSV file for reference and further analysis.
    

See [Promote and Pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

### 

Changelog API (v2)

In this release, a new version of Changelog API has been introduced. This version of Changelog API is a more scalable design that covers a broader range of logs for greater system traceability.

There are several advantages of using the new version of Changelog API:

*   Auditing the changes is easier.
    
*   Answers skill and Built-in skill changes are added to the new API.
    
*   Since the new version provides enhanced coverage of tracking events in the agent, it helps in better operational troubleshooting.
    

See [Changelog API - V2](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api-v2), for more information.

**Note**: To ensure backward compatibility, the older version of Changelog API is also supported. See [Changelog API](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api), for more information on an older version of this API.

### 

Built-in functions window

In this release, a new **Built-in functions** window has been introduced. This window lists all the out-of-box JS functions available in the Avaamo platform that can be used in your JS code during agent development.

Avaamo platform provides a robust library with a rich set of objects and Javascript functions that can be leveraged to customize and create enterprise skills catering to a wide variety of business requirements across different domains. For an agent developer, it is very useful if the syntax and usage of all such functions are available in the JS editor itself during agent development. This helps in:

*   Faster development, since the required functions are accessible within the JS editor itself during agent development.
    
*   Writing JS code with correct syntax, since examples can be copied and hence it is less error-prone.
    
*   Browsing any additional functions that can be of use during the development
    

The new **Built-in functions** window is available in the JS editor of the following pages:

*   Skill -> Implementation -> Add agent response -> Javascript. See [Add skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#javascript), or more information.
    
*   Configuration -> JS Files. See [Add JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files), for more information.
    

In this window you can:

*   Search the supported built-in JS functions in the Avaamo Platform.
    
*   Copy the example snippets and paste them into the editor.
    
*   Click the documentation link for more in-depth information.
    

See [Built-in functions window](/user-guide/how-to/build-skills/create-skill/customize-your-skill/built-in-functions-window), for more information

### 

New voice profiles

In this release, the following new high-quality natural voices have been introduced in the 6.0 release:

Language

Voices

en-US

*   George (male)
    
*   Alice (Female)
    

A new persona generates speech that sounds more natural than other text-to-speech systems. It synthesizes speech with more human-like emphasis and inflection on syllables, phonemes, and words.

See [Voice settings -> Synthesis](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#synthesis), for more information.

### 

Tabular answering

In this release, Avaamo Answers can now provide responses to user queries from tables present in the ingested documents. With this feature, you can

*   Upload documents with a tabular format - HTMLs with tables, Excels and CSVs
    
*   Get responses to user queries from the content available in Excel sheets, CSVs, tables embedded in PDFs, HTML
    

The following illustration depicts how Avaamo answers can provide answers to a user query from the ingested table content:

**Note**: Contact Avaamo Support to start using this feature and for more information on repo access and API documentation.

See [Tabular answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/tabular-answering), for more information.

### 

Multilingual answering

In this release, you can use Avaamo Answers to ingest documents in the local language and provide responses to user queries from the content available in the local language itself. This helps in:

*   Providing a wider reach of your agents. Makes agents more accessible to a broader scope of users.
    
*   Providing more personal experience with your agents since interacting in the local language is more natural and relatable.
    

The following illustration depicts how Avaamo answers can provide responses to a user query in the local language from the ingested document in the corresponding language:

**Note**: Contact Avaamo Support to enable Answers for ingesting language-specific documents.

See [Multilingual answering](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/multilingual-answering), for more information.

### 

Content ingestion in Avaamo Answers using Webhooks

In this release, you can ingest content to Answers using any CMS Webhooks or pull content and upload it to the Answers knowledge base.

Currently, the way to ingest content is by uploading the documents or the URL in the Answers skill. This process is tedious and time-consuming. Instead, you can use this new feature to configure webhooks to push content to Avaamo Platform using the API or run document parsing repo on a system to ingest content. The new content ingestion utility provides:

*   Inbuilt support for indexes such as sitemaps
    
*   Integration with any CMS systems by configuring webhooks
    
*   Support for PDFs > 1000 pages
    

**Note**: Contact Avaamo Support to start using this feature and for more information on repo access and API documentation.

See [Content ingestion using Webhooks](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/content-ingestion), for more information.

## 

Enhancements

### 

User feedback

In this release, the **Learning -> User feedback** page has been enhanced with the following enhancements:

*   Date range: Allows you to filter user feedback in the specified date range.
    
*   Export: Allows you to export user feedback in CSV format. This can be used as a reference and for further analysis.
    

See [User feedback](/user-guide/how-to/build-agents/learning-continuous-improvement/feedback), for more information.

### 

Promote pop-up window improvements

In this release, the promote pop-up message window has been enhanced with the following details:

*   A new pop-up UI layout.
    
*   Information on what details are not promoted from one stage to another.
    
*   Take explicit confirmation from the user before promoting the agent from one stage to another stage.
    

See [Promote and Pull updates](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), for more information.

### 

Regression testing

In this release, the **Test -> Regression testing** page has been enhanced to include a new Language column. This is useful when your agent is configured in multiple languages and you wish to know the language that was used to run regression testing.

See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), for more information.

### 

Search documents in Answers skill using URL

In this release, the search functionality in the **Answers skill -> Implementation -> Document groups -> Documents** page has been enhanced to include searching based on URLs. In the previous release, the document search was limited to document names only.

## 

Deprecation notice

In order to provide easy maintenance and a consistent approach to managing languages and their translations for an agent, the legacy **Skill -> Configuration -> Language** page is deprecated from the v6.0.0 release onwards.

### 

Why?

Since all the configuration options for an agent are at the agent level, managing the addition and deletion of languages at the agent level is easier and avoids confusion.

### 

When is the support completely stopped?

This feature will be removed from v6.1.0 onwards.

### 

What action to take?

No action required

### 

How to add and manage languages for an agent?

You can use the **Agent -> Configuration -> Language** page to add, delete, and customize language translations at the agent level. See [Language pack](/user-guide/overview-and-concepts/advanced-concepts/language-pack), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/watch-the-webinar-on-v6.0



---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/fix-patch-releases-v6.0.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 6.0.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v6.0.1

Feb 22nd, 2022

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases

[v5.8.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x)[v5.7.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x)[v5.6.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x)[v5.5.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x)[v5.4.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x)[v5.3.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x)[v5.2.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x)[v5.1.x](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x)[Release notes v5.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes)[What's new in v5.0?](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x

[Release notes v5.8.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0

Accessibility is to provide equal access and equal opportunity to people with diverse abilities. This often becomes not only a regulatory requirement in many organizations but also required to facilitate an increase in the adoption of the product to its full potential.

The primary focus of the v5.8.0 release is to make accessibility an inclusive capability in the Avaamo Conversational AI Platform agents.

Accessibility capabilities are now built-in in the Avaamo Conversational AI Platform agents, hence:

*   Organizations can accelerate the adoption of the agents.
    
*   It is easier to access and use the Avaamo agents, irrespective of the diverse abilities, or even in the absence of a mouse.
    

## 

Accessibility readiness

This release ensures that all the UI elements in the Header, Conversation body, and the Message area of the Avaamo Conversational AI Platform agents are **Accessibility ready**. Your agents now have inclusive accessibility capability right from launching the agents to the process of carrying out a complete conversation flow with your agents until you exit from the agents.

For example, in the following illustration, you can view a comparison of the agent UI in the previous and the current release. In the agent with accessibility, you can view, few key enhancements incorporated for accessibility in this release:

*   **Keyboard navigation**: Highlighted with outlines and color contrast to indicate keyboard focus in the Message area of the agent.
    
*   **Color contrast**: High color contrast in the header, conversation body, and the message area
    
    to ensure that the viewers who cannot see the full-color spectrum are able to read the text.
    
*   **Highlighted links**: Close button and Quick reply button links are highlighted for better accessibility.
    
*   **Text and Spacing**: Larger text and better text spacing in the header, conversation body, and the message area of the agent for better accessibility.
    

Previous

With Accessibility

## 

Accessibility enhancements

As a part of accessibility readiness based on WCAG 2.0 (Web Content Accessibility Guidelines), this release includes enhancements in the following areas:

*   [Keyboard navigation](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#keyboard-navigation)
    
*   [Focus management](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#focus-management)
    
*   [Screen reader](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#screen-reader)
    
*   [Contextually accessible names](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#contextually-accessible-names)
    
*   [Status message](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#status-message)
    
*   [Color contrast](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#color-contrast)
    

### 

Keyboard navigation

Keyboard accessibility is one of the most important aspects of web accessibility. In the release, the following are the keyboard accessibility enhancements in the Avaamo Conversational AI Platform agents:

*   All the UI elements in the Header, Conversation body, and the Message area of the agents are accessible with the keyboard.
    
*   Users can navigate the Conversation history by using up/down arrow keys
    
*   Users can access and move between links, buttons, forms, and other controls using the Tab key and other keystrokes.
    
*   The keyboard navigation order is logical and intuitive. The tab order follows the visual flow of the agent: left to right, top to bottom.
    
*   Outlines and color contrast indicate keyboard focus.
    

Few main functions (but not limited to) in the Avaamo Conversational AI Platform agents that are made available with keyboard include -`Agent widget icon, Agent response, Persistent menu, Send button, Auto-complete, Close chat element, Live agent hyperlinks, and Feedback icons.`

The following illustration depicts how keyboard navigation with tab, outlines and highlights the Persistent menu in the agent:

Another example is where the user can navigate the Conversation history by using up/down arrow keys.

### 

Focus management

The concept of focus management is important in understanding how assistive technologies handle announcing elements in the DOM. In the release, the following are the accessibility enhancements in the Avaamo Conversational AI Platform agents with respect to "Focus management":

*   Users can navigate all the UI elements in the agents with the keyboard using `tab` and `shift + tab` and a few arrow key combinations with a proper outline and visible focus state.
    
*   For the HTML elements such as links, buttons where the focus is implicitly available, the focus is logical and preserved
    
*   For the non-focusable elements such as div, h1-h6 tags, the focus is preserved using ARIA labels in all such UI elements of the agent.
    

Few main functions (but not limited to) in the Avaamo Conversational AI Platform agents that are enhanced with focus include - `Open agent, Send message textbox, Disambiguation options, Hyperlinks, Persistent menu options, Agent logo, Agent minimize button, Auto-complete, and Feedback.`

The following illustration depicts how the focus is preserved in the Persistent menu of the agent:

### 

Screen reader

A Screen reader is a gesture-based reader that enables people to experience the interface on their devices without having to see the screen.

As a part of **Accessibility readiness**, all the UI elements in the agents have been enhanced to include appropriate accessible names, labels, and roles. You can now enable screen readers in your devices and the agents use this capability to read it out using screen readers. See [Contexually accessible names](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0#contextually-accessible-names), for more information.

### 

Contextually accessible names

An [accessible name](https://www.w3.org/TR/accname-1.1/) is a name that assistive technologies use to identify an element on the agent to users. Example: **alt** attribute in the **img** HTML tag is used by the screen readers to announce the image.

In the release, all the UI elements in the Header, Conversation body, and the Message area of the agents are enhanced to use WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) has been used wherever applicable to provide better accessibility. The primary focus of this release with respect to "Accessible Name and Description" is to:

*   Provide contextually accessible names to all the UI elements in the agent
    
*   Provide contextually accessible labels to all the UI elements in the agent
    
*   Provide an accessible role for each UI element
    
*   Provide and maintain accurate states and values for each UI element:
    

The following lists a few examples:

*   `aria-label` or `aria-labelledby` attributes are added to the `link` tag, `minimize` buttons
    
*   Added appropriate role on UI elements such as ComboBox, TextArea
    
*   `alt` attribute is added to the `img` tag
    

### 

Status message

According to the WCAG glossary, the formal [definition of a status message](https://www.w3.org/TR/WCAG21/#dfn-status-messages) is "a change in content that is not a change of context, and that provides information to the user on the success or results of an action, on the waiting state of an application, on the progress of a process, or on the existence of errors."

Assistive technology users must be able to detect when important changes occur on the agents. This can be when the user is waiting for the agent to load, or when the user is waiting for the agent to respond.

In the release, the following are the accessibility enhancements in the Avaamo Conversational AI Platform agents with respect to "Status messages":

*   The loading animation such as the agent loading animation does not last more than five seconds.
    
*   If any loading animation lasts more than five seconds then information is provided to the user on the success or results of an action.
    
*   All the content in the agent is announced to screen readers when it appears on the screen so that the users are notified about such updates for example,
    
    *   Screen reader users are informed that their feedback has been submitted.
        
    *   Information on the status of the form’s submission is announced to screen readers.
        
    *   Agent unavailability, if any, say due to a lost internet connection is announced to screen readers.
        
    *   Inform status to the user when the user query is sent to the agent.
        
    *   Inform status to the user when a new reply is received from the agent.
        
    

### 

Color contrast

As per the accessibility guidelines, text and interactive elements must have a color contrast ratio of at least 4.5:1. This means that there is enough contrast between text and its background so that it can be clearly read by people even with moderately low vision.

In the release, color contrast is available for all the UI elements in the Header, Conversation body, and the Message area of the agents. This ensures that viewers who cannot see the full-color spectrum are able to read the text. The following illustration depicts few examples of the color contrast in agents with accessibility:

Previous release

No Contrast

High Contrast

Desaturate

Invert

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x

[Release notes v5.7.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0)[Fix patch releases (v5.7.x)](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/fix-patch-releases-v5.7.x)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0

The Avaamo Conversational AI Platform v5.7.0 release includes 6 new features, 5 enhancements, and 7 changes distributed as follows:

**New features:** This release includes the following new features:

1.  [Web channel v2.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#web-channel-v2.0)
    
    *   [Deploy "one agent" across multiple web and mobile channel instances](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#deploy-one-agent-across-multiple-web-and-mobile-channel-instances)
        
    *   [Revamped layout and configurations in web and mobile channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#revamped-layout-and-configurations-in-web-and-mobile-channels)
        
    
2.  ["Voice-enabled" assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#voice-enabled-assistants-in-web-and-mobile-channels)
    
    *   [Enable voice in the web and mobile channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#enable-voice-in-the-web-and-mobile-channels)
        
    *   [Add "Voice response" for voice-enabled assistants in web and mobile channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#add-voice-response-for-voice-enabled-web-and-mobile-assistants)
        
    *   [Configure voice hints for voice-enabled assistants in web and mobile channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-voice-hints-for-voice-enabled-web-and-mobile-assistants)
        
    *   [Configure playback voice for voice-enabled assistants in web and mobile channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-playback-voice-for-voice-enabled-web-and-mobile-assistants)
        
    
3.  ["Language" analytics board](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#language-analytics-board)
    
4.  [New analytics filters](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#new-analytics-filters)
    
5.  [Download PDF](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-pdf)
    
    *   [Download analytics boards in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-analytics-board-in-pdf-file)
        
    *   [Download user journey in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-user-journey-in-pdf-file)
        
    
6.  [OAuth2 authorization in custom live agent](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#oauth2-authorization-in-the-custom-live-agent-system)
    

**Enhancements**: This release includes enhancements related to the following existing features:

1.  [Analytics date filters](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#analytics-date-filters)
    
2.  [Skill and intent identifiers](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#skill-and-intent-identifiers)
    
3.  [Regression testing - Disambiguation scenarios](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing-disambiguation-scenarios)
    
4.  [Regression testing - Answers skill scenarios](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing-answers-skill-scenarios)
    
5.  [Regression testing - Performance metrics](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing-performance-metrics)
    

**Changes:** This release includes changes related to the following existing features:

1.  [Regression testing](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing)
    
2.  [User roles](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#user-role-api-access)
    
3.  [Agent voice hints](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#agent-voice-hints-for-c-ivr)
    
4.  [JS errors](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#js-errors)
    
5.  [Default scroll in the web channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#default-scroll-in-web-channel)
    
6.  [Agent configurations](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#agent-configurations)
    
7.  [Persistent menu](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#persistent-menu)
    
8.  [Entity structure in context.insights object](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#entity-structure-in-context.insights-object)
    

**Deprecation notice**: In this release, the "Export regression file" feature from the "Query insights" page is deprecated. See [Deprecation notice](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#deprecation-notice), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of new features, enhancements, and changes in the v5.7.0 release:

New features

Enhancements

Changes

Deprecated

The following lists the usage of the new features across different components in the platform:

New features

Components

[Deploy "one agent" across multiple web and mobile channel instances](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#deploy-one-agent-across-multiple-web-and-mobile-channel-instances)

*   Configuration -> Channels -> Web
    
*   Configuration -> Channels -> Android
    
*   Configuration -> Channels ->
    
    iOS
    

[Revamped layout and configurations in web and mobile channel instances](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#revamped-layout-and-configurations-in-web-and-mobile-channels)

*   Configuration -> Channels -> Web
    
*   Configuration -> Channels -> Android
    
*   Configuration -> Channels ->
    
    iOS
    

[Enable voice in the web and mobile channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#enable-voice-in-the-web-and-mobile-channels)

*   Configuration -> Channels -> Web
    
*   Configuration -> Channels -> Android
    
*   Configuration -> Channels ->
    
    iOS
    

[Add "Voice response" for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#add-voice-response-for-voice-enabled-web-and-mobile-assistants)

*   Skill message response in Dialog skill
    
*   Skill message response in Dynamic Q&A skill
    
*   Skill message response in Smalltalk skill
    
*   All built-in skill message response -> Greetings skill and Unhandled skill
    

[Configure voice hints for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-voice-hints-for-voice-enabled-web-and-mobile-assistants)

*   Configuration -> Voice settings -> Speech recognition
    

[Configure playback voice for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-playback-voice-for-voice-enabled-web-and-mobile-assistants)

*   Configuration -> Voice settings -> Synthesis
    

["Language" analytics board](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#language-analytics-board)

*   Monitor agents -> Analytics
    
*   Detailed page for Language analytics
    

[New analytics filters](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#new-analytics-filters)

*   Monitor agents -> Analytics
    
*   Detailed page of each analytics board
    

[Download analytics board in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-analytics-board-in-pdf-file)

*   Monitor agents -> Analytics
    
*   Detailed page of each analytics board
    

[Download user journey in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-user-journey-in-pdf-file)

*   Monitor agents -> User journey
    

[Configure OAuth2 authorization in the custom live agent system](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#oauth2-authorization-in-the-custom-live-agent-system)

*   Configuration -> Live agent -> Custom live agent
    

The following lists the usage of enhancements across different components in the platform:

Enhancement

Component

[Analytics date filters](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#analytics-date-filters)

*   Monitor agents ->
    
    Analytics
    
*   Detailed page of each analytics board
    

[Skill and intent identifiers](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#skill-and-intent-identifiers)

*   Create or Edit Dialog skill
    
*   Create or Edit Dynamic Q&A skill
    
*   Create or Edit Smalltalk skill
    
*   Create or Edit Answers skill
    
*   Add or Edit user intents in Dialog skill
    
*   Add or Edit Q&A in Dynamic Q&A skill
    
*   Add or Edit Q&A in Smalltalk skill
    
*   Skill response -> Advanced settings
    
*   Dialog flow designer UI
    
*   Search nodes within Dialog skill implementation
    
*   Flow control statements
    
*   Regression testing
    
*   Query insights
    
*   User journey
    
*   Message insights
    

[Regression testing - Disambiguation scenarios](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing-disambiguation-scenarios)

*   Test -> Regression testing
    

[Regression testing - Performance testing](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing-performance-metrics)

*   Test -> Regression testing
    

Component

Change

[Regression testing](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#regression-testing)

*   "Add validation data" option is removed
    
*   "View results" from the "Actions" column is removed. Use "Download results" instead.
    
*   "View inputs" from the "Actions" column is removed. Use "Download Input CSV" instead.
    
*   "Re-run" option has been relabeled as "Run"
    

[User roles](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#user-role-api-access)

API access role is removed

[Agent voice hints for C-IVR](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#agent-voice-hints-for-c-ivr)

Configuration -> Voice hints is removed. Instead use Configuration -> Voice settings -> Speech recognition

[JS errors](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#js-errors)

Message creation timestamp in the Sender column is removed. Instead, an additional column to indicate error creation time is displayed.

[Default scroll in web channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#default-scroll-in-web-channel)

Default scroll has been changed from "Bottom" to "Top"

[Agent configurations](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#agent-configurations)

The features in the Agent -> Configurations section has been re-arranged in the alphabetical order for easy of use.

[context.insights.entities](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#entity-structure-in-context.insights-object)

Each entity in the `context.insights` object includes metadata details such as entity type, current value, parent entity type. The metadata provides more insights about the entity and can be used for further processing.

Deprecated

Component

[Export regression file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#deprecation-notice)

Monitor agents -> Query insights

## 

New features

### 

Web channel v2.0

In this release, a new version of the web channel - **Web channel v2.0** has been introduced. The new version of the web channel is a significant revamp of the existing web channel. It has a refreshed layout and provides many configuration options that make configuring and deploying your agent in the web channels easier.

An important feature of **Web channel v2.0** is the ability to deploy the "one" agent across multiple instances of a web channel. Typically, large enterprises can have multiple websites catering to different aspects of the organization. Since all web channels are a part of the same organization, it may be required to deploy the same agent or assistant across different web channels.

The following are the key highlights of **Web channel v2.0**:

*   [Deploy "one agent" across multiple web and mobile channel instances](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#deploy-one-agent-across-multiple-web-and-mobile-channel-instances)
    
*   [Revamped layout and configurations in web and mobile channel instances](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#revamped-layout-and-configurations-in-web-and-mobile-channels)
    

#### 

Deploy "one agent" across multiple web and mobile channel instances

In this release, you can deploy "one agent" across multiple instances of a [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channel. The following lists a few use cases where this feature can be useful:

**Use-case 1: Add customized layouts**: You can style your agent for each web channel instance separately. See [Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#theme), for more information.

**Use-case 2: Collect unified analytics:** Provide unified analytics cutting across different instances of web channels. See [Channel analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#channels), for more information,

**Use-case 3: Maintain different user sessions:** For security reasons, you can deploy your agent across multiple instances of a web channel with different authentication mechanisms. See [Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#security), for more information.

See [Deploy in multiple web channel instances](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/deploy-and-test-web-channel) and [Use case analysis](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/overview#use-case-analysis), for more information.

#### 

**Revamped layout and configurations in** web and mobile channels

In the release, the existing [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channel layout has been significantly revamped. It has a refreshed layout and provides many configuration options that make configuring and deploying your agent in the web and mobile channels easier.

The following sections have been introduced:

*   [Channel details](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#channel-details): Provide channel name, description, and enable or disable channel as required.
    
*   [Theme](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#theme): Customize the look and feel of the agent widget.
    
*   [Agent widget configuration](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#agent-widget-configuration): Configure various customizable parameters such as default locale, user name, scroll behavior (to name a few) for your agent widget.
    
*   [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice): Enable a voice assistant to your web channel that can engage the users in intelligent conversations by understanding and interpreting the dialects and accents of the users.
    
*   [Deployment](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#deployment): Provides you a script to embed in the website source code for rendering the agent.
    
*   [Security](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#security): Configure authentication mechanisms for your agent.
    
*   [Advanced](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#advanced): Provide any other additional customizable parameters and configure auto-complete URL.
    

See [Configure web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel), for more information.

### 

"Voice-enabled" assistants in web and mobile channels

**Note**: This feature is enabled only on-demand. Contact Avaamo Support, for further assistance.

In this release, a new feature to add a **Voice assistant** to your web channel has been introduced. This helps you to engage the users in intelligent conversations by understanding and interpreting the dialects and accents of the users.

The following are the key highlights of this feature:

*   [Enable voice in the web and mobile channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#enable-voice-in-the-web-and-mobile-channels)
    
*   [Add "Voice response" for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#add-voice-response-for-voice-enabled-web-and-mobile-assistants)
    
*   [Configure voice hints for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-voice-hints-for-voice-enabled-web-and-mobile-assistants)
    
*   [Configure playback voice for voice-enabled web and mobile assistants](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#configure-playback-voice-for-voice-enabled-web-and-mobile-assistants)
    

#### 

Enable voice in the web and mobile channels

In this release, you can add a **Voice assistant** to your [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels using **Enable voice** toggle in the **Voice** section of the channel deployment page. This option allows you to enable real-time transcriptions of the agent messages in the selected locale.

See [Voice](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), for more information.

#### 

Add "Voice response" for voice-enabled web and mobile assistants

In this release, you can add responses specific to voice-enabled assistants in [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels in the **Skill messages -> Prompt details** section.

This option is available in Dialog, Dynamic Q&A, Smalltalk, and all built-in skills when you configure agent responses for voice-enabled Web, Android, iOS channels. The following response types are supported in **Voice response**:

*   [Agent voice](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#agent-voice)
    
*   [Javascript](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#javascript)
    
*   [Integrations](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#integrations)
    
*   [Delay](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/add-skill-messages-responses#delay)
    

See [Voice response](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#voice-response), for more information.

#### 

Configure voice hints for voice-enabled web and mobile assistants

In this release, you can configure voice hints for voice-enabled assistants in [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels in the **Speech recognition** section of the **Configuration -> Voice settings** page. You can specify certain keywords or phrases as **Voice hints** in the agent configuration that can help in providing better interpretation or recognition of the user response in voice interaction.

**Note**: Voice hints provided in the **Speech recognition** section is applicable across [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps), and [C-IVR](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone) channel.

You can use **Manage hints** to add or remove voice hints for the specific language. See [Speech recognition](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#speech-recognition), for more information.

#### 

Configure playback voice for voice-enabled web and mobile assistants

In this release, you can configure playback voice for voice-enabled assistants in [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels in the **Synthesis** section of the **Configuration -> Voice settings** page. This helps to choose a persona for your voice assistants. It adds a personality to your voice assistants.

**Note**: Playback voice provided in the **Synthesis** section is applicable across [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channel.

Each language has a different set of voice personas that you can choose from. Select the persona from the options provided in the **Voice - Playback voice** section. See [Synthesis](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#synthesis), for more information.

### 

"Language" analytics board

In this release, a new Analytics board - "Language" has been introduced. This feature allows business users to track business metrics cutting across different languages configured in your agent. It provides deeper insights into the user query in each language.

See [Language analytics board](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#languages), for more information.

### 

New analytics filters

In this release, a new set of additional filters such as Channel, Language, Intent type, Intent, and Tag have been introduced in the **Analytics** page:

This feature allows business users to filter the analytics data across multiple dimensions. It provides a quick and easy way to track business metrics cutting across these dimensions. This feature combined with the enhanced date range filter provides a powerful way to filter the analytics data as per your business requirements. See [Analytics date filter](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#analytics-date-filters), for more information.

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

See [Additional filter criteria](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#additional-filter-criteria), for more information.

### 

Download PDF

In this release, a new feature to download the analytics boards and user journey in a PDF file has been introduced. The following are the key highlights of this feature:

*   [Download analytics board in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-analytics-board-in-pdf-file)
    
*   [Download user journey in PDF file](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0#download-user-journey-in-pdf-file)
    

#### 

Download analytics board in PDF file

In this release, a new feature to download a PDF copy of the analytics board has been introduced. You can use this for reporting purposes and for further analysis. The data as viewed in the UI is available in the downloaded PDF.

This option is available in the **Analytics** page and also in the details page for **each Analytics board**.

The following illustration depicts the new **Download PDF** option in the **Top Q&A intents** detail page:

See [Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics), for more information.

#### 

Download user journey in PDF file

In this release, a new feature to download a PDF copy of the user's journey has been introduced. Note that the downloaded PDF only shows the journey till the intent level or first node of the intent. You can use this for reporting purposes and for further analysis, as required.

See [User journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey), for more information.

### 

OAuth2 authorization in the custom live agent system

In this release, you can configure OAuth2 authorization in the custom live agent system using the authorization token issued by the OAuth2 provider. This feature is useful in scenarios where the connection to the custom live agent is not directly exposed and available only through an OAuth2 provider.

See [OAuth2 authorization](/user-guide/how-to/build-agents/configure-agents/switch-to-live-agent/custom-live-agent#oauth2-authorization), for more information.

## 

Enhancements

### 

Analytics date filters

In this release, the **Date** filter in the Analytics board has been enhanced with the following in-built filter options:

*   Yesterday
    
*   Today
    
*   Last 7 Days
    
*   Last 14 Days
    
*   Last 28 Days
    
*   Last 90 Days
    
*   Last 180 Days.
    

This helps in the quick and easy filtering of analytics data based on the in-built date filters. You can also use **Custom range** to pick your own date range by selecting the start and end dates. See [Date filters](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#date-range), for more information.

In the previous release, you could only filter use a date range option and in-built date filter options were not available.

### 

Skill and intent identifiers

In this release, the ability to identify the skill and intents using skill and intent identifiers respectively has been enhanced. You can now specify a user-friendly identifier for your skill or intent at the time of creating the skill or intents using the **Skill key** and **Intent key** respectively. Providing user-friendly skill identifier and intent identifiers is useful in the following ways:

*   Helps to easily **identify** and **refer** to the skill and intents in
    
    *   [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format)
        
    *   [Flow control statements](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/flow-control) such as goto\_node_,_ goto\_intent
        
    *   [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights)
        
    *   [User journey](/user-guide/how-to/build-agents/monitor-and-analyze/user-journey)
        
    *   [Search nodes within Dialog skill implementation](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/perform-common-actions#search-nodes)
        
    
*   **Retains the same skill key and intent keys** when the agents are [copied](/user-guide/how-to/build-agents/manage-agents/make-a-copy), [exported](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), [imported](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents) [promoted](/user-guide/how-to/build-agents/manage-agents/promote-and-pull-updates), [published to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store), or [imported from skill store](/user-guide/how-to/build-skills/manage-skill/import-and-re-import-skills). Hence, the existing regression tests and flow control statements can be re-used.
    

The following illustration depicts how you can provide skill identifier using **Skill key** when creating a Dialog skill:

The following illustration depicts how you can provide intent identifier using **Intent key** when creating a Q&A in Dynamic Q&A skill:

Similarly, you can also edit the skill key and intent key, if required. However, note that if you update the key and if the key is used say in JS code or in regression testing, then you must update the skill or intent key manually.

See the following topics for more information:

*   [Create Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-dialog-skill) / [Edit Dialog skill](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/perform-common-actions#edit-dialog-skill)
    
*   [Create Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/create-a-new-dynamic-q-and-a-skill) / [Edit Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/perform-common-actions#edit-skill)
    
*   [Create Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/create-new-knowledge-base) / [Edit Answers skill](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1/manage-avaamo-answers-1/perform-common-actions#edit-answers-skill)
    
*   [Create Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/create-new-knowledge-base) / [Edit Smalltalk skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/perform-common-actions#edit-smalltalk-skill)
    
*   [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent)
    
*   [Add question and answers in Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers)
    
*   [Add question and answers in Smalltalk Q&A skill](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa)
    

In the previous release, skill and intent identifiers were automatically generated by the system as numbers. There was no option to edit the identifiers. The skill and intent identifiers changed when the agents were copied, exported, imported promoted, published to the skill store, or imported from the skill store. Hence, the existing regression tests and flow control statements had to be manually modified and re-used.

**Note**: Post v5.7.0 upgrade, all the existing skill identifier and intent identifiers will continue to work as-is and no change is required.

### 

Regression testing - Disambiguation scenarios

In this release, testing disambiguation scenarios in regression testing have been improvised to perform a more granular level of testing with disambiguation options. You can now specify a set of disambiguation options as a pipe-separated list in the regression testing file when you are testing disambiguation scenarios.

The following table summarizes the disambiguation scenario improvements in the current release:

v5.7.0

Previous release

For more information

`disambiguation:<<skill_key>>.<<intent_key>>|<<skill_key>>.<<intent_key>>`

`disambiguation`

See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format#disambiguation)

If a query evaluates to a disambiguation response and there is a node specified in "Expected intent", then the result is evaluated as **Failed**, even if "Expected intent" is in the set of disambiguation responses.

If a query evaluates to a disambiguation response and there is a node specified in "Expected intent", then the result is evaluated as **Success**, if "Expected intent" is in the set of disambiguation responses.

See [Understanding results](/user-guide/how-to/build-agents/test-agents/regression-testing#understanding-results), for more information.

In the previous release, there was limited scope for testing the disambiguation scenario.

See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing) and [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.

### 

Regression testing - Answers skill scenarios

In this release, regression testing has been enhanced to include testing of Answer skill responses. You can now specify the <<skill.key>>.<<intent.key>> of the Answers skill in the expected flow column of the regression testing file to test the Answers skill response.

Column 1

Column 2

1,macpizza\_policy.RTIor1cb

Can you explain Avaamo's privacy policy for PII?

See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.

In the previous release, there was no option to test Answers skill responses in regression testing.

### 

Regression testing - Performance metrics

In this release, you can view the **Accuracy** and **F1 Score** of regression testing results using the standard machine learning formula.

The goal must be to obtain a better F1 Score. To aim for a better F1 Score, you can check

*   If there is sufficient training data in your agent.
    
*   Check if the test cases are accurate to validate your agent.
    

See [Performance metrics](/user-guide/how-to/build-agents/test-agents/regression-testing#performance-metrics), for more information.

## 

Changes

### 

Regression testing

In this release, the following changes have been implemented in the **Regression testing** page:

**"Add Validation data" option has been removed**:

Regression testing is typically done on a huge amount of data. Providing an input test file using "Add validation data" from the UI has limited usage, is tedious, and not practical. You could only perform simple testing and testing multi-turn conversations were not possible with the "Add validation data" option.

Hence, this option has been removed. You can continue to upload the input test file in the required CSV format instead of using the **Upload test file** option. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.

**Changes in the Actions column**:

In the release, the following changes have been implemented in the Actions column:

*   **"View results" and "View inputs" options have been removed**: Since regression testing is typically done on a huge amount of data, going through the results or the input file from the UI is tedious and not practical. Hence, these options have been removed from the Actions column. You can instead use, "Downloading input CSV" and "Download results" option from the Actions column to download and view the input file and results respectively.
    
*   **Re-run** option has been re-labeled as **Run**
    
*   **Downloading input CSV has been moved to the Actions column**: In the previous release, you could download the input CSV by clicking the file in the Regression file column. In this release, this option has been moved to the Actions column
    

### 

User role - API access

In this release, the **API access** role has been removed in the following pages:

*   [Add new user](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#add-new-user) and [Edit user](/user-guide/how-to/manage-platform-settings/users-and-permissions/users#edit-user)
    

*   [Create group](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#create-group-and-add-members) and [Edit group](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#edit-group)
    

Since all the exposed RESTful APIs now require access to the agent which is handled with the agent permissions, having the API access role is redundant and no longer useful. See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

Agent voice hints for C-IVR

In this release, the **Configuration -> Voice hints** page has been removed. Instead, you can now specify the agent-level voice hints in the **Speech recognition** section of the **Configuration -> Voice settings** page.

**Note**: Post v5.7.0 upgrade, all the existing agent-level voice hints that are defined for the C-IVR channel in the **Configuration -> Voice hints** page will be available in the **Speech recognition** section of the **Configuration -> Voice settings** page.

Since these voice hints are also used for voice-enabled assistants in [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels, defining is a single section is easy to manage and maintain. See [Speech recognition](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#speech-recognition), for more information.

### 

JS errors

In this release, the message creation timestamp in the **Sender** column has been removed. Instead, a new column **Time** has been introduced to display the error creation time. The error messages are sorted based on the descending order of error creation time.

Since the earlier sorting was based on message creation timestamp, it was difficult to view and scroll to the recent error messages. See [JS errors](/user-guide/how-to/build-agents/debug-agents#using-js-errors), for more information.

### 

Default scroll in web channel

In this release, the default scroll behavior in the [Web](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#voice), [Android](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps), and [iOS](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps) channels has been changed from **Bottom** to **Top**.

In the previous release, when there were multiple responses from the agent, then by default, the agent chat widget would scroll to the latest message, which is not a good user experience. The user either had to scroll up to read the first message or in such scenarios could miss reading the earlier posted messages. See [Scroll behavior](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#scroll-behaviour), for more information.

### 

Agent configurations

In this release, the configuration options in the Agent -> Configurations section have been re-arranged in alphabetical order for ease of use.

In the previous release, the configurations were not arranged in any particular order and were difficult to locate.

### 

Persistent menu

In this release, the following notification messages are displayed in the persistent menu:

*   Facebook does not support Deep Link (type).
    
*   Facebook supports a maximum of 3 items. If more items are present, then the first three will be selected for Facebook.
    

Note that these are applicable only if you are using the Facebook channel to deploy your agents.

The "number of persistent menu items" restriction is due to the limitations of Facebook messenger See [call\_to\_actions in the properties section](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu#properties), for more information.

See [Persistent menu](/user-guide/how-to/build-agents/configure-agents/add-persistent-menu), for more information.

### 

Entity structure in context.insights object

In this release, each entity in the `context.insights` object includes metadata details such as entity type, current value, parent entity type. The metadata provides more insights about the entity and can be used for further processing.

The following is an example of entity structure in the `context.insights` object:

The following table lists the entity structure change for a single entity value before and after the 5.7.0 release:

Before release

After release

See [context.insights](/user-guide/how-to/build-skills/create-skill/customize-your-skill/reference-library/context/insights), for more information.

**Note**: This change is backward compatible which implies that if you are using `context.insights` for processing in say any JS code prior to this release, then there is no change required and you can continue to use it in the same manner. To enable backward compatibility, contact Avaamo Support.

## 

 Deprecation notice

In order to provide accurate coverage and flexibility to test your agents in the Avaamo Conversational AI Platform, the legacy **Export regression file** option from the **Query insights** page is deprecated from the v5.7.0 release onwards.

### 

Why?

Exporting regression testing data from the **Query insights** page provides only minimal coverage of the test cases. Since agents are complex and business-critical, this does not cover complete end-to-end test case scenarios that is expected of regression testing. In order to provide accurate coverage and flexibility to test your agents, it is recommended to manually create the regression test cases. See [Regression testing](/user-guide/how-to/build-agents/test-agents/regression-testing), for more information.

### 

When is the support completely stopped?

This feature will be removed from v5.8.0 onwards.

### 

What action to take?

No action required

### 

How to create a regression file from the Query insights page?

1.  Filter the required results by specifying search criteria in the **Query insights** page. See [Search and View Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights#search-and-view-query-insights), for more information.
    
2.  In the **Query insights** page, click **Export jobs** and export the Query insights to a CSV file. See [Export query insights data](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights#export-query-insights-data), for more information.
    
3.  In the exported CSV file, you can use "User query", "Skill key", and the "Intent key" to create a regression file according to your requirement. See [Regression test file format](/user-guide/how-to/build-agents/test-agents/regression-testing/regression-test-file-format), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/fix-patch-releases-v5.7.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 5.7.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v5.7.1

July 24th, 2021

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x

[Release notes v5.6.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0)[Fix patch releases (v5.6.x)](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/fix-patch-releases-v5.6.x)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0

The Avaamo Conversational AI Platform v5.6.0 minor release includes 3 new features and 1 enhancement distributed as follows:

*   **New features**:
    
    *   [Ability to integrate seamlessly with MS-Azure Active Directory (AD) groups](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-integrate-seamlessly-with-ms-azure-active-directory-ad-groups)
        
    *   [Ability to manage user roles and agent permission via groups](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-manage-user-roles-and-agent-permission-via-groups)
        
    *   [Ability to restrict login IP address at the company-level](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-restrict-login-ip-address-at-the-company-level)
        
    
*   **Enhancements**: This release also includes enhancements related to masking location IP addresses in the Agent Console page. See [Enhancements](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#enhancements), for more information.
    

**Deprecation notice**: In this release, the Organization system entity is deprecated. See [Deprecation notice](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#deprecation-notice), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of new feature, enhancements, and changes in the v5.6.0 release:

New features

Enhancements

The following lists the usage of the new features across different components in the platform:

New feature

Components

[Ability to integrate seamlessly with MS-Azure Active Directory (AD) groups](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-integrate-seamlessly-with-ms-azure-active-directory-ad-groups)

*   SAML Support - MS Azure
    
*   Settings -> Users & Groups -> Groups
    
*   Agent -> Configuration -> Permissions
    

[Ability to manage user roles and agent permission via groups](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-manage-user-roles-and-agent-permission-via-groups)

*   Settings -> Users & Groups -> Groups
    
*   Agent -> Configuration -> Permissions
    

[Ability to restrict login IP address at the company-level](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#ability-to-restrict-login-ip-address-at-the-company-level)

*   Login
    

The following lists the usage of the enhancement across different components in the platform:

Enhancement

Components

[Masking IP address in Agent Console](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0#1-masking-ip-address-in-agent-console)

*   Agent Console
    

## 

New features

### 

Ability to integrate seamlessly with MS-Azure Active Directory (AD) groups

In this release, you can integrate seamlessly with MS-Azure Active Directory (AD) groups when you enable Avaamo Platform SSO integration with your MS-Azure IDP. This feature provides more security as it restricts user and group management only via MS-Azure AD.

In order to use this feature, you must first configure and integrate MS-Azure SSO with the Avaamo Platform. See [SAML Support - MS Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure), for more information on steps to integrate MS Azure with the Avaamo platform.

*   After you configure and integrate MS-Azure SSO with Avaamo Platform, the users are automatically signed in to the Avaamo Platform when they are on their corporate devices and connected to the network. See [SAML Support - MS Azure](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure), for more information on steps to integrate MS Azure with the Avaamo platform.
    
*   Once the users sign in, the groups set up in Azure AD are synced automatically as per the group's policy setup in MS-Azure AD. Signed-in users are associated with the roles as set up in the Azure AD groups and access is accordingly provided in the Avaamo Platform. See [Syncing with Azure AD groups](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#syncing-with-azure-ad-groups), for more information.
    

### 

Ability to manage user roles and agent permission via groups

In this release, a new concept of "Groups" has been introduced that allows you to:

*   Manage and distribute roles at the group level instead of managing at each user level.
    
*   Assign agent permissions to specific groups instead of assigning them to each individual user. Note that when permissions are assigned to a group, it is applicable to all the users of a group.
    

This feature helps in easier and efficient user management. **Example**: Consider that you have created a group and assigned edit permission to the group in 10 agents. You wish to provide "Edit" permission to all 10 agents for a new user. Instead of providing "Edit" permission to the user individually in each agent, you can simply add the user to the group and the permission applicable to the group is now available to the new user too.

**Note**: **Groups** page is available only for users with the **Settings** role. See [Roles and permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

You can create and manage groups via the Settings -> Users & Groups -> Groups page.

The following illustration depicts a group assigned with a "Testing" role and members assigned to the group:

See [Creating and managing groups in the Avaamo Platform](/user-guide/how-to/manage-platform-settings/users-and-permissions/groups#creating-and-managing-groups-in-the-avaamo-platform), for more information.

The following illustration depicts how permissions can be assigned to groups in the Agent -> Configuration -> Permission pop-up:

See [Agent permissions](/user-guide/how-to/build-agents/configure-agents/permissions), for more information.

### 

Ability to restrict login IP address at the company-level

In this release, you can control login access to the Avaamo Platform dashboard at the company level by specifying a range of allowed IP addresses on the company's profile. Dashboard users of the company can login only through allowed or restricted IP addresses. When you define IP address restrictions for a profile, a login from any other IP address to the Avaamo Platform is denied and the following message is displayed:

This feature helps in providing better overall security, remote access, and anonymity. See [Restrict login IP address](/user-guide/overview-and-concepts/advanced-concepts/restrict-login-ip-address), for more information.

## 

Enhancements

### 

1\. Masking location IP address in Agent Console

In this release, masking the location IP address in the Agent Console has been enhanced to:

*   Mask all the octets of the location IP address, when enabled at the company level from the Privacy page using the **Mask user IP** slider.
    
*   Mask the location IP address in the Agent Console only for a specific agent instead of masking for all the agents within the company, when enabled at the agent level.
    

The following illustration depicts how the location IP address is masked in the Accept chat request pop-up:

See [Masking location IP address in Agent Console](/user-guide/how-to/agent-console#masking-location-ip-address-in-agent-console), for more information.

In the previous release, masking the location IP address in Agent Console was available only at the company level and only the last octet in the IP address was masked as 0.

## 

 Deprecation notice

In order to provide better capability and flexibility of building enterprise agents in the Avaamo Conversational AI Platform, the legacy Organization system entity is deprecated from the v5.6.0 release onwards.

### 

Why?

Instead of trying to create a system organization entity that covers every permutation of the names for all organizations across the world, you can consider creating a custom entity that is relevant to your context, train your agent to recognize the context in which such names must be used. This provides more flexibility on how you wish to use the Organization system entity.

### 

When is the support completely stopped?

Support for the deprecated features ends on March 31st, 2021. It is recommended to take appropriate action on the deprecated features for a smooth transition.

### 

What action to take?

*   Remove references to the Organization system entity in your Dialog and Dynamic Q&A skills.
    
*   As per your business requirement, consider using a custom organization entity as a way to capture these types of proper nouns. See [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/fix-patch-releases-v5.6.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 5.6.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v5.6.1

February 26th, 2021

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x

[Release notes v5.5.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0

The Avaamo Conversational AI Platform v5.5.0 release includes 4 enhancements and 2 changes distributed as follows:

**Enhancements**: This release includes enhancements in the following areas:

*   [Integrated Conversational-IVR (C-IVR) or Phone channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#integrated-conversational-ivr-c-ivr-or-phone-channel): As a part of C-IVR integration, the following enhancements have been introduced in this release:
    
    *   [Ability to add agent responses using rich SSML tag support](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-add-agent-responses-using-rich-ssml-tag-support)
        
    *   [Ability to add voice hints at agent level and skill level](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-add-voice-hints-at-agent-level-and-skill-level)
        
    *   [Ability to test agent in C-IVR channel using agent simulator](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-test-agent-in-c-ivr-channel-using-agent-simulator)
        
    
*   [Ability to add channel-specific skill responses directly in the UI without using JS](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#channel-specific-skill-responses)
    
*   [Ability to view regular expression entity related errors in the Debug -> JS errors page](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#debug-greater-than-js-errors)
    

**Key Point:** With the ability to add channel-specific and language-specific skill responses, you can now add responses specific to each channel-language combination in the UI itself without using Javascript code. Example: You can add a response specific to the Android channel in the French language.

**Changes**: This release also includes changes related to the channel availability in your account or company, UI text change in the Q&A intent pop-up, and system entity extraction in the Platform. See [Changes](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#changes), for more information.

## 

Component-wise distribution

The following table lists the component-wise distribution of new feature, enhancements, and changes in the v5.5.0 release:

Enhancements

Changes

The following lists the usage of the enhancements across different components in the platform:

Enhancement

Components

[Integrated Conversational-IVR (C-IVR) or Phone channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#integrated-conversational-ivr-c-ivr-or-phone-channel)

1.  Deploy your agent to the C-IVR channel in the current 5.x platform.
    
2.  Add agent responses to C-IVR channel using - Agent voice, Voice menu, and Call forward response types.
    
3.  Configure voice hints at the agent level.
    
4.  Agent simulator - Ability to test your agent in C-IVR channel using agent simulator
    

[Channel specific skill responses](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#channel-specific-skill-responses)

Add channel-specific skill responses directly in the UI:

1.  Greeting skill
    
2.  Unhandled skill
    
3.  Dialog skill
    
4.  Dynamic Q&A
    
5.  Smalltalk
    
6.  Q&A
    

[Debug -> JS errors](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#debug-greater-than-js-errors)

Debug regular expression entity related errors from the Debug -> JS errors page.

The following lists the changes across different components in the platform:

Component

Change

[Channels](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#1-channels)

You can deploy your agents in only those channels that are enabled for your account. Other channels are disabled and grayed out.

[Q&A intent pop-up](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#q-and-a-intent-pop-up)

Cancel button text in the Q&A intent pop-up is changed to Exit.

## 

Enhancements

### 

Integrated Conversational-IVR (C-IVR) or Phone channel

In this release, the channel integration has been enhanced to include Conversational-IVR (C-IVR) or Phone channel in the current 5.x platform. If the C-IVR channel is enabled for your account or company, you can now deploy the agents built on the Avaamo Platform into your phone channel from the Configuration -> Channels page.

Since the C-IVR channel is natively integrated with the rest of the 5.x platform, you build both voice and text virtual assistants in a single account. The agents built and deployed on the C-IVR channel take full advantage of rich features available in the 5.x platform. See [Conversational IVR (C-IVR) or Phone](/user-guide/how-to/build-agents/configure-agents/deploy/conversational-ivr-c-ivr-phone), for more information.

In the previous release, the agents requiring the C-IVR channel had to be built and deployed separately in a 4.x platform.

As a part of this enhancement, the following enhancements have been introduced:

*   [Ability to add agent responses using rich SSML tag support](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-add-agent-responses-using-rich-ssml-tag-support)
    
*   [Ability to add voice hints at agent level and skill level](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-add-voice-hints-at-agent-level-and-skill-level)
    
*   [Ability to test agent in C-IVR channel using agent simulator](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0#ability-to-test-agent-in-c-ivr-channel-using-agent-simulator)
    

#### 

**Ability to add agent responses using rich SSML tag support**

In this release, three new agent response types have been added - [Agent voice](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#agent-voice), [Voice menu](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#voice-menu), and [Call forward](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#call-forward). These response types enable you to build a conversational flow for your C-IVR channel using rich support of SSML tags that are available out-of-the-box in the Platform. See [Supported SSML tags](/user-guide/ref/speech-synthesis-markup-language-ssml), for more information.

#### 

**Ability to add voice hints at agent level and skill level**

In this release, an additional option to add Voice hints has been introduced. Voice hints allow you to specify certain keywords or phrases that can provide better interpretation or recognition of the user response in the conversational IVR interaction. Providing voice hints can significantly improve user interaction with your agent and help to redirect conversation flow smoothly.

The following lists a few use-cases where voice hints can be used:

*   To help agents understand certain nuances of dialects or accents of users.
    
*   To provide clues or hints to the agent indicating that the user can provide such similar inputs at the specified node when the response is read out to the user.
    

Example: In the following illustration, there is an agent response asking for the user to confirm the order number. You can provide voice hints to help the agent understand and interpret the nuances of user responses as illustrated here:

*   This option is available for each response node in the Dialog skills -> Advanced settings tab. See [Voice hints in Advanced settings,](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/advanced-settings#voice-hints) for more information.
    
*   This option is also available at the agent level in the Configuration section. See [Add voice hints](/user-guide/how-to/build-agents/configure-agents/add-voice-settings#configure-voice-hints), for more information.
    

#### 

**Ability to test agent in C-IVR channel using agent simulator**

In this release, a new option **IVR / phone** has been added in the agent simulator along with the Web channel. This allows you to choose and test your agent in either C-IVR or the web channel.

Note that this option is displayed only when you have deployed your agent in the C-IVR channel and is available across all the pages where the agent simulator is displayed. See [Agent simulator](/user-guide/how-to/build-agents/test-agents/simulator), for more information.

### 

Channel-specific skill responses

In this release, you can add skill responses specific to each channel directly in the UI without using any JavaScript code. It helps in rapid agent development and easy maintainability as customized channel-specific skill responses can be added directly in the UI.

This enhancement is available across all the skill responses - Greeting, Unhandled, Dialog skills, Smalltalk skills, Dynamic Q&A, and Q&A skills.

See [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses#channel-specific-responses), for more information.

In the Dynamic Q&A, Smalltalk, and Q&A skills, you can add or edit customized responses for the Q&A for each Channel using the Channel dropdown available in the Implementation -> Questions & Answers page.

In the previous release, to add channel-specific responses in the skill, you had to write JS code to achieve the same functionality, hence, it was not user-friendly and was difficult to maintain.

### 

Debug -> JS errors

In this release, you can view errors related to the regular expression entity in the **Debug -> JS errors** page. You can use this information for further troubleshooting to analyze and fix the errors related to the regular expression entity. Note that the error is displayed only when you use the entity in the conversation flow.

See [Debug agents](/user-guide/how-to/build-agents/debug-agents), for more information.

In the previous release, it was difficult to understand and debug if a flow was not working due to an error in the regular expression entity.

## 

Changes

### 

Channels

In this release, you will be able to connect to a channel only if it is enabled for your account. All the channels that are not enabled for your account are disabled and grayed out. If you wish to enable a channel for your account, then contact Avaamo Support for further assistance.

**Note**: By default, only Web channel is enabled for an account.

Here, for this account, IMI Connect, Facebook Workplace, SMS, and Facebook Messenger channels are disabled for this account and hence grayed out. You will not be able to connect to these channels unless they are enabled for your account.

### 

Q&A intent pop-up

In this release, the "Cancel" text in the Q&A intent pop-up has been changed to "Exit". You can view this change when you add, edit, or delete Q&A from the Dynamic Q&A, Smalltalk, or Q&A skills.

#### 

Previous release:

#### 

Current release:

### 

System entity extraction

In this release, system entities are extracted only if they are a part of the agent. To include system entities as a part of the agent, you must either:

1.  Add a training data to any skill (Dialog, Dynamic Q&A, Smalltalk) that uses the system entity
    
2.  Add system entities in the Invocation intent of the Dialog skill using **Add entity** option (if you have intent type as Custom code or Pre-Unhandled intent). See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent), for more information.
    

In the previous release, system entities were getting extracted even though they were not a part of the agent and hence resulted in confusion.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x

[Fix patch releases (v5.4.x)](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/fix-patch-releases-v5.4.x)[Release notes v5.4.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/fix-patch-releases-v5.4.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 5.4.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v5.4.1

October 24th, 2020

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0

The Avaamo Conversational AI Platform v5.4.0 minor release includes 2 enhancements and 1 change distributed as follows:

*   **Enhancements**:
    
    *   [Ability to export upto 6 months of data from Query insights](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0#1-ability-to-export-upto-6-months-of-data-from-query-insights)
        
    *   [Ability to allow parallel development of Dynamic Q&A, Q&A, and Smalltalk skills](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0#2-ability-to-allow-parallel-development-of-dynamic-q-and-a-q-and-a-and-smalltalk-skills)
        
    
*   **Change**: This release also includes changes related to language packs in Q&A and Smalltalk skills. See [Changes](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0#changes), for more information.
    

## 

Enhancements

### 

1\. Ability to export upto 6 months of data from Query insights

In this release, the export functionality in the **Query insights** page has been enhanced with the ability to export upto 6 months of data at a time based on your search criteria.

*   When you click **Export** from the **Query Insights** page, an export job is created based on the search criteria. An email notification is sent to you upon completion. Note that it may take a while to export the data based on your search results.
    
*   You can view the last 10 export jobs from **Query insights -> View export jobs** pop-up. You can also download the exported data or delete the jobs that are no longer required.
    

See [Export query insights data](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights#export-query-insights-data), for more information.

In the previous release, you could export only upto 50000 records from query insights at a time. If you had to export more than 50000 records, then you had to send a request to Avaamo Support for further assistance.

Additionally, in the previous release, when you clicked the Export option, you could select user properties such as first\_name, last\_name that were required in the exported file. With the 5.3.0 release, you can now set the **User properties** in the **Agent -> Configuration**. Hence, by default, all the configured user properties in the agent are also exported in the CSV file. See [User properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.

### 

2\. Ability to allow parallel development of Dynamic Q&A, Q&A, and Smalltalk skills

In this release, Q&A and Smalltalk skill development has been enhanced to allow multiple developers to work parallelly in the same skill. They can add or edit questions and answers simultaneously in the same skill. This feature helps in:

*   Rapid agent development
    
*   Better collaboration
    
*   Faster delivery by reducing the turn around time to build a skill
    
*   Seamless multiple developers engagement to build a single agent
    

As a part of this enhancement, on a high-level, the following changes have been implemented in this release:

*   There is no **Save** at the skill level for Dynamic Q&A, Smalltalk, and Q&A.
    
*   **Save** is now available for each intent, intro message, and outro message. This allows developers to obtain lock at each of these levels independently, hence promoting parallel development.
    

The illustration here, depicts a user "John Miller" editing an intent and another user parallelly editing another intent in the same Q&A skill:

Refer to the following topics for more in-depth understanding:

*   [Dynamic Q&A](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill)
    
*   [Smalltalk](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill)
    
*   [Q&A](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill)
    
*   [Parallel development (QA & Smalltalk) FAQs](/user-guide/ref/parallel-development-qa-and-smalltalk-faqs)
    

In the previous release, only one developer could work on Q&A or Smalltalk skills at a time, as the lock was at the agent level. This resulted in slower development and subsequently affected the agent development and delivery time.

## 

Changes

In this release, **Make default** option in the **Configuration -> Language** page for language packs in Dynamic Q&A, Q&A, and Smalltalk skills has been removed, as it is no longer required. Since the conversation is always at the agent level, **Make default** option in the **Configuration -> Language** page at the agent level can be used instead.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x

[Release notes v5.3.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0

The Avaamo Conversational AI Platform v5.3.0 minor release includes 4 new features, 6 enhancements, and 4 changes distributed as follows:

*   **New features**:
    
    *   [Introducing Dynamic Q&A skill](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#1-introducing-dynamic-q-and-a-skill)
        
    *   [Introducing tagging capability for advanced analytics](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#2-introducing-tagging-capability-for-advanced-analytics)
        
    *   [Introducing multiple intent responses](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#3-introducing-multiple-intent-responses)
        
    *   [Introducing new Query insights API](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#4-introducing-new-query-insights-api)
        
    
*   **Enhancements**: This release also includes enhancements related to NLU, Message insights, Feedback, and channel components in the platform. See [Enhancements](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#enhancements), for more information.
    
*   **Changes**: This release also includes changes related to Skill builder, NLU, and Dialog skill builder components in the platform. See [Changes](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#changes), for more information.
    

## 

Component-wise distribution

The following table lists the component-wise distribution of new features, enhancements, and changes in the v5.3.0 release:

New features

Enhancements

Changes

The following lists the usage of the new features across different components in the platform:

Feature

Components

[Introducing Dynamic Q&A skill](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#1-introducing-dynamic-q-and-a-skill)

1.  Add and remove slots in Q&A intents
    
2.  Q&A skill response -> Add Entities. Show only entities used in the intent.
    

[Introducing tagging capability for advanced analytics](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#2-introducing-tagging-capability-for-advanced-analytics)

1.  Configure different tags in the agent based on the user intents
    
2.  Add and remove tags in Dialog skill responses
    
3.  Add and remove tags in Q&A skill responses
    
4.  Add and remove tags in Smalltalk skill response
    
5.  Add tags using JS
    
6.  View analytics of Top tags
    
7.  Query insights -> Filter by tags
    

[Introducing multiple intent responses](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#3-introducing-multiple-intent-responses)

1.  Configure different user properties in agents on which you wish to apply the response filters
    
2.  Configure response filters in agents based on user properties
    
3.  Configure dictionaries with response filters
    
4.  Add multiple Dialog skill responses for a user intent
    
5.  Add and remove filters in Welcome responses
    
6.  Add and remove filters in Dialog skill responses
    
7.  Add and remove filters in Q&A skill responses
    
8.  Add and remove filters in Intro and Outro Q&A skill responses.
    
9.  Add and remove filters in Smalltalk skill responses
    
10.  Query insights -> Filter by response filters
     

[Introducing new Query insights API](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#4-introducing-new-query-insights-api)

1.  Query insight API
    

The following lists the enhancements across different components in the platform:

Component

Enhancement

[NLU](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#1-nlu)

1.  Spell correction Improvement
    
2.  Better negative query handling
    

[Message insights](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#2-message-insights)

1.  Tone and Sentiments in message insights
    
2.  View skill name for ambiguous intents
    
3.  Get tone and sentiment attributes in the Context object
    

[Feedback](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#3-feedback)

1.  Add feedback in any skill response using a JavaScript method
    

[Channel](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#4-channel-type-ahead)

1.  Type-ahead (auto-complete) feature in Web, Android, and iOS channels.
    

The following lists the changes across different components in the platform:

Component

Change

[Skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#1-skill-builder)

Removed old Q&A skill and added a new skill type Dynamic Q&A.

[Dialog skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#2-dialog-skill-builder)

Removed unhandled node This is no longer required at Dialog skill level since there is an Unhandled skill at the agent level.

[NLU](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#3-nlu)

Changed the disambiguation confirmation prompt when the agent is only showing one intent during disambiguation.

[Session time-out](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#4-session-time-out)

For security reasons, all the dashboard session, log out (time-out) after 12 hrs of inactivity.

## 

New features

### 

1\. Introducing Dynamic Q&A skill

In this release, a new skill - **Dynamic Q&A** has been introduced.

Dynamic Q&A skill is essentially a Q&A skill with an advanced capability to dynamically add entities and slots for Q&A intents. All the other functionalities of the existing Q&A skill are applicable to the Dynamic Q&A skill also. Adding entities and slots capability to the existing Q&A skill can lead to considerable migration overhead, hence the existing Q&A skill is kept as-is and the new concept of adding entities and slots has been introduced in a new skill - Dynamic Q&A.

In the Dynamic Q&A skill, similar to the Dialog skill, as you enter training phrases for the intent, the platform automatically extracts the slots and includes all the entities in your intent. You can view the entities in the **Entities** tab next to the **Intent** tab in the Intent pop-up window. This feature provides the flexibility to choose and delete the entities that are no longer required. You have a finer control now on the entities that are applicable to the Q&A intent.

See [Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a), for more information.

### 

2\. Introducing tagging capability for advanced analytics

In this release, a new Analytics board - "Top tags" has been introduced that allows you to analyze the agent's usage via tags. This feature allows business users to create "tags" that can be used to track business metrics cutting across intents and channels. **Example**: You can create a tag called “pension” and include that in all responses across intents that relate to pension.

This feature is useful when you have a particular category of user intent distributed across different skill responses and you wish to assess the usage of those intents in the user-agent interactions. It gives a different perspective of viewing and understanding the user-agent interactions. See [View analytics of top tags](/user-guide/how-to/build-agents/monitor-and-analyze/analytics#top-tags), for more information.

**Example**: In the HR agent, you can have different tags for - Bonus, Employee Referral, Pension, Payroll, Onboarding, Hike, (to name a few) related intents across skill responses in the agent.

You can associate tags to all the skill responses (Dialog, Smalltalk, Q&A) except Answers skill. Also, you can dynamically associate tags to responses using JS. See [Add tags (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js), for more information.

In order to use this feature, you must:

1.  Configure different tags in the agent based on the user intents in the Agent Configuration -> Tags section. See [Add tags](/user-guide/how-to/build-agents/configure-agents/add-tags), for more information.
    
2.  Add tags to skill responses. See tags details in the following links, for more information:
    
    *   [Build skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses/skill-message-window-overview#panel-3-messages-tags)
        
    *   [Add tags using JS](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js)
        
    

You can also get a closer look into the conversations by filtering the queries using tags in the Query Insights page. This can be useful in debugging if required. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.

### 

3\. Introducing multiple intent responses

In this release, a new feature to add multiple skill responses to the same user intent has been introduced. This feature allows you to add filtered responses for a user query based on the user properties such as location, manager status, exempt/non-exempt status. This feature helps in:

*   Rapid agent development: You can use the same agent and tailor the responses based on different user properties.
    
*   Providing personalized responses for the same user intent, say, for example, based on the location of the user, or department a user belongs to, or time zone.
    
*   Configuring filtered responses completely in the UI without writing any JS code
    

**Example**: In an HR agent, consider the user query "When is the year-end bonus paid?". Bonus paid for India and US employees can be different. You can define multiple responses for an intent based on the user's properties so that agent’s response is different for an Indian user and a US user.

India User

US User

You can add response filters in all the skill responses (Dialog, Smalltalk, Q&A) except Answers skill.

In order to use this feature, you must:

1.  Configure different user properties in agents on which you wish to apply the response filters
    
    in the Agent Configuration -> User properties section. See [Add user properties](/user-guide/how-to/build-agents/configure-agents/add-user-properties), for more information.
    
2.  Configure response filters in agents based on user properties in the Agent Configuration -> Response Filter section. See [Add response filters](/user-guide/how-to/build-agents/configure-agents/add-response-filters), for more information.
    
3.  Configure dictionaries with response filters, if required. See [Add dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries), for more information.
    
4.  Add response to skill responses. See details about response filters in the following links, for more information:
    
    *   [Build Dialog skill responses](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/build-skill-responses)
        
    *   [Add questions and answers in Dynamic Q&A responses](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a/build-and-manage-dynamic-q-and-a-skill/add-questions-and-answers#example-add-response-filters)
        
    *   [Add questions and answers in Smalltalk responses](/user-guide/how-to/build-skills/create-skill/using-smalltalk/build-and-manage-smalltalk-skill/add-smalltalk-qa#example-add-response-filters)
        
    *   [Add questions and answers in Q&A responses](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer/build-and-manage-q-and-a-skill/add-intents-and-languages#example-add-response-filters)
        
    

You can also get a closer look into the conversations by filtering the queries using response filters in the Query Insights page. This can be useful in debugging if required. See [Query insights](/user-guide/how-to/build-agents/monitor-and-analyze/query-insights), for more information.

### 

4\. Introducing new Query insights API

In this release, a new Query insights API has been introduced to get a closer look at the user conversations with the agent.

You can use this API for debugging purposes and for any other reporting purposes. You can also filter the results using - date-time, intent, user, language, and channels. See [Query insights](/user-guide/ref/avaamo-platform-api-documentation/agent-api/query-insights), for more information.

## 

Enhancements

### 

1\. NLU

This release includes the following enhancements in NLU:

#### 

**Spell correction improvements**

In this release, spell correction has been enhanced to identify and correct the phrase in the user query that is closest to the training data rather than correcting it to the best match.

Example: Consider that you have the following data in your agent:

Consider user query "I want Axis bank personal lon". Note that here best phrase match for "lon" is "lone". However, when the user query is "I want Axis bank personal lon", lon gets corrected to "loan" instead of "lone", since that is closest to the training data.

**Better negative query handling**:

In this release, the negative query handling has been improvised to reduce false positives. Example: If you have training data as "I want to order a pizza", then the user query "I do not want to order a pizza" will not match the training data.

In the previous release, the negative training data was getting matched to positive training data, hence creating false positives.

### 

2\. Message insights

This release includes the following enhancements in Message insights:

#### 

**Tone and Sentiments in message insights**

In this release, "Message insights" has been enhanced to include tone and sentiment details of a user query by default. This information is available in the context insights and accessible via JavaScript in the flow. You can use user tone and sentiment programmatically to either change flows or respond with appropriate messages as per your business requirement.

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

See [Tone and sentiment](/user-guide/overview-and-concepts/advanced-concepts/tone-and-sentiment), for more information.

In the previous release, the tone and sentiment had to be explicitly enabled in the platform and was not available by default.

**View skill name for ambiguous intents**

In this release, the context object has been enhanced to include the skill name of ambiguous intents in the insights when the query goes for disambiguation. You can find the details of the ambiguous intent in `context.insights.ambiguous_intents.` Skill name indicates the skill where the intent belongs to. This helps you to quickly search for the skill using the skill name in the Agent -> Skills page and hence enables you to debug faster.

In the previous release, skill name was not available for ambiguous intents, hence locating the intent in the agent skills was tedious, you had to search manually using the intent name.

### 

3\. Feedback

In this release, the user feedback option has been enhanced to add feedback in any response (Dialog, Q&A, Smalltalk) using a JavaScript`collectFeedback()`method. See [Add feedback](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-feedback), for an example.

In the previous release, the feedback option in Q&A skill was available only at the skill level and there was no programmatic way to add feedback in any response. With this enhancement, you can choose to disable the Feedback option at the Q&A skill level and include in only responses that require feedback.

### 

4\. Channel (Type-ahead)

In this release, the customizable parameters in Web, Android, and iOS channels has been enhanced with a **query\_autocomplete\_url** parameter that is used for the type-ahead (auto-complete) feature. The auto-complete feature provides a list of query options to the user as the user starts entering the query in the agent. Using this parameter, you can provide a URL of a JSON file that contains the list of query options.

This feature can reduce false positives and significantly improve accuracy. By presenting the user with a list of available options, it is likely that the user selects one of those options for which accurate curated responses are already available in the agent.

See [Auto-complete in Web channel](/user-guide/how-to/build-agents/configure-agents/deploy/web-channel/configure-web-channel#query-autocomplete-url), for an example.

## 

Changes

### 

1\. Skill builder

In this release, the old Q&A skill in the Skill builder has been removed with a new advanced Dynamic Q&A skill. Dynamic Q&A skill is essentially a Q&A skill with an advanced capability to dynamically add entities and slots for Q&A intents. See [Add skills to agent](/user-guide/how-to/build-agents/add-skills-to-agent) and [Dynamic Q&A skill](/user-guide/how-to/build-skills/create-skill/dynamic-q-and-a), for more information.

**Notes**:

*   You can still continue to manage your existing Q&A skills with the previous Q&A skill builder and you can use the new Dynamic Q&A skill to create new Q&A skills. If you wish to move the old Q&A skill to the new Dynamic Q&A skill, then currently the process is manual.
    
*   The new capability of [adding multi-intent responses](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#3-introducing-multiple-intent-responses) and [tagging responses](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0#2-introducing-tagging-capability-for-advanced-analytics) is available for the existing Q&A skill too.
    

### 

2\. Dialog skill builder

In this release, the default unhandled node in the Dialog skill builder has been removed for new skills. With the 5.x release, since the agent is a container of skills and already includes a built-in Unhandled skill, the default unhandled node is no longer required explicitly in the Dialog skill. Note that the unhandled node for the existing skills is retained as-is.

### 

3\. NLU

In this release, the disambiguation confirmation prompt has been changed when the agent is only showing one intent during disambiguation. Instead of saying "Hmm, can you be a little more specific?", it displays a confirmation prompt - "Here is an option I can help with. Can you confirm?".

### 

4\. Session time-out

In this release, for security reasons, all the dashboard sessions log out (timeout) after 12 hrs of inactivity:

*   If a user tries to perform any action on the sessions after 12 hrs of inactivity, then the user is redirected back to the login page.
    
*   Clicking a link or performing any action on the page or refreshing a page resets the inactivity timer.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x

[Fix patch releases (v5.2.x)](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/fix-patch-releases-v5.2.x)[Release notes v5.2.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/fix-patch-releases-v5.2.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 5.2.x. All the fix patch releases contain:

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v5.2.2

July 14th, 2020

Release v5.2.1

June 13th, 2020

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2

The Avaamo Conversational AI Platform v5.2.0 release includes 1 new feature, 20 enhancements, and 4 changes distributed as follows:

*   [New feature](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#new-feature): Introduction of 8 new REST APIs.
    
*   [Enhancements](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#enhancements): The following lists the number of enhancements across different components in the platform:
    

Component

Number of enhancements

[Skills](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skills)

1

[Dialog skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dialog-skill-builder)

6

[Q&A skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#q-and-a-skill-builder)

3

[Smalltalk skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#smalltalk-skill-builder)

3

[Entity types](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#entity-types)

1

[JS files](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#js-files)

1

[Dictionaries](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dictionaries)

1

[Insights](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#insights)

1

[Dashboard](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dashboard)

1

[Skill store](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skill-store)

2

*   [Changes](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#changes): The following lists the number of changes across different components in the platform:
    

Component

Number of changes

[Skills](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skills-1)

1

[Dialog skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dialog-skill-builder-1)

3

## 

New feature

In this release, 7 new **Agent APIs** have been introduced to get agent details such as agent name, agent description, skills, intents, entity types, and dictionary values. You can use these details for agent analytics and for any other reporting purposes.

This release also includes a **Test API** that helps you test bulk user queries in the agent instead of testing one query at a time in the agent simulator. In the response, you can view the insights on how the user’s intent is analyzed and matched in the agent flow for each query. You can use this information to improvise agent training and provide a better user experience.

The following table summarizes the list of new REST APIs:

API

Description

[Agent details](/user-guide/ref/avaamo-platform-api-documentation/agent-api/agent-details)

Gets the agent details such as agent identifier, agent description, skills, entities used across all the skills, and list of custom entity types available in the agent.

[Intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/intents)

Gets a list of all the dialog inline intents (Training Phrases) and Q&A intents from the agent.

[Dialog intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/dialog-intents)

Gets a list of all the dialog inline intents (Training Phrases) from the agent.

[Q&A intents](/user-guide/ref/avaamo-platform-api-documentation/agent-api/q-and-a-intents)

Gets a list of all the Q&A intents from the agent.

[Unhandled queries](/user-guide/ref/avaamo-platform-api-documentation/agent-api/unhandled-queries)

Gets a list of all the unhandled queries from the agent. This does not include queries that led to disambiguation responses.

[Dictionary values](/user-guide/ref/avaamo-platform-api-documentation/agent-api/dictionary-values)

Gets a list of all the dictionary values from an agent.

[Custom entity type values](/user-guide/ref/avaamo-platform-api-documentation/custom-entity-type-values)

Gets a list of all entity values from a custom entity type.

[Test user queries in the agent](/user-guide/ref/avaamo-platform-api-documentation/agent-api/test-user-queries)

Posts the user queries to the agent and gets insights on how the user’s intent is analyzed and matched in the agent flow for each query.

See [Getting started](/user-guide/ref/avaamo-platform-api-documentation/quick-overview), to download the postman collection.

## 

Enhancements

The following lists the enhancements across different components in the platform:

Component

Enhancement

[Skills](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skills)

UI support to display the complete skill name in the Skill widget of the Agent -> Skills page.

[Dialog skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dialog-skill-builder)

Addition of agent simulator in all the pages of Dialog skill builder:

1.  Getting started
    
2.  Invocation intent
    
3.  Implementation
    
4.  Language
    
5.  JS Errors
    
6.  Regression testing
    

[Q&A skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#q-and-a-skill-builder)

Addition of agent simulator in all the pages of Q&A skill builder:

1.  Getting started
    
2.  Question & Answers
    
3.  Language
    

[Smalltalk skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#smalltalk-skill-builder)

Addition of agent simulator in all the pages of Smalltalk skill builder:

1.  Getting started
    
2.  Question & Answers
    
3.  Language
    

[Entity types](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#entity-types)

Addition of agent simulator in the Entity values page

[JS files](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#js-files)

Addition of agent simulator in the Edit JavaScript page

[Dictionaries](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dictionaries)

Addition of agent simulator in the Words page

[Insights](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#insights)

Addition of skill name in the message insights.

[Dashboard](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dashboard)

Optimized dashboard to work with a specific screen resolution

[Skill store](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skill-store)

1.  Search skills in skill store using skill description
    
2.  Auto-pick entities during skill publishing
    

### 

Skills

In this release, the Skill widget in the Agent -> Skills page has been enhanced to support the display of the complete skill name. This helps you to clearly search and identify the skills with longer names. Note that the platform allows you to have skill names with a maximum of 49 characters.

In the previous release, the skill name upto only 10 characters was displayed in the Skill widget of the Agent -> Skills page. Hence, it was difficult to identify the skills with names of more than 10 characters as it was not completely visible in the UI.

### 

Dialog skill builder

In this release, the following pages in the Dialog skill builder have been enhanced to include the agent simulator at the bottom-right corner of each page:

1.  Getting started
    
2.  Invocation intent
    
3.  Implementation
    
4.  Language
    
5.  JS Errors
    
6.  Regression testing
    

This feature helps you to test your agent using the agent simulator from any page available in the Dialog skill's left navigation pane without navigating back to the agent page.

**Few examples are listed below**:

*   **Test invocation intent**: You can add new invocation intents to your Dialog skill and test the agent using the agent simulator from the **Invocation intent** page itself without navigating back to the agent page.
    

*   **Test dialog flow**: You can build a multi-turn conversational flow in your Dialog skill and test agent using the agent simulator from the **Dialog Designer** page itself without navigating back to the agent page.
    

In the previous release, after any change to the Dialog skill, you had to navigate back to the agent page to test the agent.

### 

Q&A skill builder

In this release, the following pages in the Q&A skill builder have been enhanced to include the agent simulator at the bottom-right corner of each page:

1.  Getting started
    
2.  Question & Answers
    
3.  Language
    

This feature helps you to test your agent using the agent simulator from any page available in the Q&A skill's left navigation pane without navigating back to the agent page.

**Example**: You can add new questions and answers to your Q&A skill and test the agent using the agent simulator from the **Questions & Answers** page itself without navigating back to the agent page.

In the previous release, after any change to the Q&A skill, you had to navigate back to the agent page to test the agent.

### 

Smalltalk skill builder

In this release, the following pages in the Smalltalk skill builder have been enhanced to include the agent simulator at the bottom-right corner of each page:

1.  Getting started
    
2.  Question & Answers
    
3.  Language
    

This feature helps you to test your agent using the agent simulator from any page available in the Smalltalk skill's left navigation pane without navigating back to the agent page.

**Example**: You can add new questions and answers to your Smalltalk skill and test agent using the agent simulator from the **Questions & Answers** page itself without navigating back to the agent page.

In the previous release, after any change to the Q&A skill, you had to navigate back to the agent page to test the agent.

### 

Entity types

In this release, the **Entity values** page has been enhanced to include the agent simulator at the bottom-right corner of the page. This helps you to make changes (add, update, delete) to the entity values and test query using the agent simulator from the **Entity values** page itself without navigating back to the agent page.

In the previous release, after any change to the entity values, you had to navigate back to the agent page to test the agent.

### 

JS files

In this release, the **Edit JavaScript** page has been enhanced to include the agent simulator at the bottom-right corner of the page. This helps you to make changes (add, update, delete) to the JavaScript files and test user queries using the agent simulator from the **Edit JavaScript** page itself without navigating back to the agent page.

In the previous release, after any change to the JavaScript, you had to navigate back to the agent page to test the agent.

### 

Dictionaries

In this release, the **Words** page has been enhanced to include the agent simulator at the bottom-right corner of the page. This helps you to make changes (add, update, delete) to the values and test user query using the agent simulator from the **Words** page itself without navigating back to the agent page.

In the previous release, after any change to the dictionary values, you had to navigate back to the agent page to test the agent.

### 

Insights

In this release, the Message Insights has been enhanced to include the skill name attribute. Skill name indicates the skill where the intent belongs to. This helps you to quickly search for the skill using the skill name in the Agent -> Skills page and hence enables you to debug faster.

In the previous release, you had to manually search for the skill using the skill number in the "Response node" attribute of the insights.

### 

Dashboard

In this release, the Avaamo Conversation AI Platform dashboard is optimized to work on a specific screen resolution. The window that renders the Avaamo Platform dashboard must have 1366 \* 768 screen resolution for UI components to be displayed correctly.

If you have a lower or higher screen resolution, then the display of the UI components in the dashboard can get distorted.

See [Basic requirements](/user-guide/quick-start-tutorials/pre-requisites#basic-requirements), for more information.

### 

Skill store

In this release, the following are the enhancements related to the skill store:

1.  [Search skills in skill store using skill description](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#search-skills-in-skill-store-using-skill-description)
    
2.  [Auto-pick entities during skill publishing](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#auto-pick-entities-during-skill-publishing)
    

#### 

**Search skills in skill store using skill description**

In this release, you can search for skills in the skill store using the skill description in addition to the skill name provided at the time of publishing the skill. All the skills in the skill store that contains the search keyword in either skill name or skill description are displayed. See [Search skills in skill store](/user-guide/how-to/manage-skills-store#search-skills-in-skill-store), for more information.

In the previous release, you were able to search for skills in the "Skill store" only using the skill name provided at the time of publishing the skill.

#### 

**Auto-pick entities during skill publishing**

In this release, during skill publishing/re-publishing, the entities that are used in the skill are automatically selected and displayed to the user. This feature helps to:

*   Ensure that the user always selects the entities that are required for the skill before publishing the skill to skill store and hence reduces the probability of error when the same skill is imported and used in another agent.
    
*   Reduce the manual effort of opening the skill in the new tab, noting down the entities that are required for publishing, and selecting the entities at the time of publishing a skill to skill store.
    

See [Publish skills to skill store](/user-guide/how-to/build-skills/manage-skill/publish-skill-to-skills-store#publish-skill), for more information.

In the previous release, during skill publishing/re-publishing, the entities that were required for a skill had to be selected manually.

## 

Changes

The following lists the changes across different components in the platform:

Component

Sub-component

[Skills](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#skills-1)

1.  Disabled skills
    

[Dialog skill builder](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2#dialog-skill-builder-1)

1.  Dialog skill -> Test -> Simulator
    
2.  Dialog skill -> Debug -> JS Errors
    
3.  Dialog skill -> Debug -> Debug logs
    

### 

Skills

In the release, the UI of the disabled skill widget has been changed which helps to easily identify the disabled skills in the Agent -> Skills page. All the text and icons in a disabled skill widget are in a shade of grey in addition to the Disabled text at the top-right corner.

In the previous release, there was not much visual identification for disabled skills apart from the Disabled text that was displayed at the top-right corner.

### 

Dialog skill builder

The following table summarizes the changes to the existing behavior in the v5.2.0 release:

Component

Existing behavior

Changed behavior

Dialog skill -> Test -> Simulator

Opens Dialog skill simulator

Opens the agent simulator that helps you to

test your dialog flow in the agent as and when you build it.

Dialog skill -> Debug -> JS Errors

Displays only the JS Errors related to the skill.

Since the agent simulator is available in all pages of the Dialog skill, this is no longer relevant.

JS Errors page is already available in

the Agent --> Debug -> JS Errors.

Hence, the Dialog skill -> Debug -> JS Errors page is blank in the current release and will be removed in the future release.

Dialog skill -> Debug -> Debug logs

Displays the debug logs of only the current skill

Displays the debug logs of not only the current skill but also includes debug logs available at the agent level.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x

[Fix patch releases (v5.1.x)](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/fix-patch-releases-v5.1.x)[Release notes v5.1.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1)

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/fix-patch-releases-v5.1.x

This article summarizes a list of fix patch releases made in the Avaamo Conversational AI Platform version 5.1.x. The fix patch release contains:‌

1.  Critical bug fixes
    
2.  Performance fixes
    
3.  Minor bug fixes
    

Fix patch release

Release date

Release v5.1.1

May 5th, 2020

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1

This article summarizes new and enhanced features in the Avaamo Conversational AI Platform v5.1.0 release:

*   **New features**:
    
    *   [Introducing export and import of agents](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1#introducing-export-and-import-of-agents)
        
    *   [Introducing separate channels for Android and iOS mobile users](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1#introducing-separate-channels-for-android-and-ios-mobile-users)
        
    *   [Introducing dictionaries](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1#introducing-dictionaries)
        
    
*   **Enhancements**: This release also includes enhancements related to SAML Azure, security policies, REST API, and conversation engine performance improvements. See [Enhancements](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1#enhancements), for more information.
    

## 

New features

### 

Introducing export and import of agents

In this release, you can create a backup copy of your agent in your local system using the **Backup & Export** option. Later, you can use the exported copy and **import** the same to any existing agent in any account.

**Note**: Import and export work only in the same version of the platform. This implies that you cannot export your agent in 5.1.0 and import it in the 5.2.0 version.

When you export an agent an exact snapshot of the agent as available at that point in time is exported to a zip file. The following lists a few use-cases of this feature:

*   Import to an existing agent within the same company
    
*   Import to an existing agent of a different company
    

See [Export and import agents](/user-guide/how-to/build-agents/manage-agents/export-and-import-agents), for more information.

### 

Introducing separate channels for Android and iOS mobile users

In this release, you can deploy your agents built on Avaamo Platform into your Android apps or iOS apps separately to facilitate easy communication with Android and iOS mobile users respectively. See deploying agents in [Android apps](/user-guide/how-to/build-agents/configure-agents/deploy/android-apps) and [iOS apps](/user-guide/how-to/build-agents/configure-agents/deploy/ios-apps), for more information.

This helps to clearly distinguish and monitor the user interactions from Android and iOS apps channel separately. See [Channels in Analytics](/user-guide/how-to/build-agents/monitor-and-analyze/analytics), for more information.

In the previous release, web channel was used to deploy for Android and iOS mobile users too, hence it was not possible to monitor and analyze the user interactions from Android and iOS apps channels separately.

### 

Introducing dictionaries

In this release, you can create dictionaries with a collection of words or phrases that holds a specific meaning to your business. **Example**: Consider that you are creating an HR agent regarding the employee bonus policies. Here, EB (Employee bonus), QEB (Quarterly Employee Bonus), and such terminologies can be added to the dictionary.

These words once added to the agent dictionary are considered differently when understanding user queries. One such consideration is the spelling correction. The system does not attempt spelling correction when it encounters these words in user queries.

See [Add dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries), for more information.

## 

Enhancements

This release also includes enhancements related to SAML Azure, security policies, REST API, and conversation engine performance improvements. The following table summarizes a few enhancements:

Enhancement

Description

SAML Azure enhancements

In this release, **SAML support for MS Azure** has been enhanced to incorporate the new addition of Unique identifier in the User attributes and claims. See [User attributes and claims](/user-guide/how-to/manage-platform-settings/identity-providers/saml-support-ms-azure#user-attributes-and-claims), for more information.

Sign request for SSO

In this release, a new flag **Sign request** has been added in the Identity providers. This can be used to send the Avaamo certificate and key in the SAML request if required. See [Identity provider](/user-guide/how-to/manage-platform-settings/identity-providers), for more information.

Security policy

In this release, you can configure a list of domains in the **Security policy** page from where the resources are allowed to be loaded in the Avaamo platform. This feature is useful in agent development when you are using resources such as fonts, assets, web pages (web view) from an external source that is not whitelisted in the Avaamo Platform. See the [Security policy](/user-guide/how-to/manage-platform-settings/security-policy), for more information.

Feedback API

In this release, Feedback API has been enhanced to support the following query parameters:

*   **since\_timetoken**, **timetoken**: To get feedback entries within a specified period.
    
*   **response\_type**: You can specify response\_type = detailed in the query parameter to get detailed feedback response with user feedback, user query, and user details for each feedback entry. See [Feedback API](/user-guide/ref/avaamo-platform-api-documentation/feedback-api#get-feedback-details), for more information.
    

Custom Channel

In this release, a new parameter **total\_messages** has been added in the outgoing request payload of a custom channel for asynchronous mode.

This is useful when multiple responses are received in the payload and since it is an asynchronous mode, the sequence of messages is not in a defined order. You can use total messages and sequence, to render the message back in proper order. See [Outgoing request in Custom channe](/user-guide/how-to/build-agents/configure-agents/deploy/custom-channel#outgoing-request)l, for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes

This article summarizes enhanced features in the **Avaamo Conversational AI Platform v5.0** release. See [What's new in v5.0?](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new) for more information on the newly introduced features in v5.0.

## 

Improved NLU

This version introduces significant improvements in query understanding, disambiguation, and entity recognition.‌ Here are some of the improvements:

*   [Name entity recognition](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes#name-entity-recognition)
    
*   [Number entity extraction](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes#number-entity-extraction)
    
*   [Entity disambiguation](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes#entity-disambiguation)
    
*   [Handle variations of frequently used terms](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes#handle-variations-of-frequently-used-terms)
    

### 

Name entity recognition

In this release, the Name entity is appropriately recognized and extracted as required based on the context of the user query. Typically, these are for names that are also common words.

**Notes**:

*   This feature is applicable to only custom entity types.
    
*   Contact support to enable this feature for your agent.
    

**Example**:

User: "_I am looking for Doctor Bill_", extracts **Bill** as a name

Here, the name is a custom entity type and this query extracts _**Bill**_ as Name.

User: "_I am unable to find my bill_", does not extract **bill** as a name.

Here, the word "bill" is not extracted as a Name entity.

### 

Number entity extraction

In this release, a number name entity is automatically recognized and converted to a number if it is expected at a number entity step.

**Example**: If a user enters "two and half million", then it is automatically converted to 2500000 if it is expected at a number entity step or if a user enters a query as illustrated below then the number name is automatically converted to number entity.

### 

Entity Disambiguation

In this release, NLU has been improved to support entity disambiguation in addition to intent disambiguation.

**Example**: Consider that you have an entity type "Colorado Cities" with four values - Colorado Springs, Glenwood Springs, Hot Sulphur Springs, and Idaho Springs.

In the conversation flow, if a node entity "Colorado Cities" is expected and the user just enters "Springs" when asked for a Colorado city, then the system shows a disambiguation message to confirm for "Colorado Springs" or “Glenwood Springs” and any other entity value with Springs in "Colorado Cities" entity type.

**Notes**:

*   This disambiguation works even when there is a single option.
    
*   The top 5 closest disambiguations is displayed to the user.
    
*   Disambiguation options are from the selected entity node values.
    

In the previous release, only intent disambiguation was supported.

### 

Handle variations of frequently used terms

This release also handles variations of frequently used terms such as:

*   Login
    
*   Logon
    
*   Log into
    
*   Logging in
    
*   Log-in
    
*   Sign-in
    
*   Sign in
    
*   Signing in
    

## 

Improved organization of JavaScript files

You can create and add JavaScript files to the agent for enhancing the functionality of the agent. Modularizing the JS files helps in easy maintenance and troubleshooting, easy identification of JS files during publishing, and better re-usability. See [Add JS files](/user-guide/how-to/build-agents/configure-agents/add-js-files), for more information on configuration and best practices.

## 

Removal of domain

The domain concept is removed from the product. A domain is a collection of intents. Now that the intents can be created inside a dialog skill, there is no need for a domain.

## 

Removal of String entity

In v4.0, the usage of the String entity was primarily as a list of synonyms. When a String entity was used in entity values, the primary essence of entity type, which is a named collection of similar objects became no longer relevant and resulted in the misuse of entity type concept. See [Entities](/user-guide/overview-and-concepts/entity-types), for more information.

In v5.0, the String entity is removed. After migration, all the existing String entities are migrated as entities in the 5.0 agent. Navigate to **Agent -> Entity types** page to view all the String entities.

You cannot use all the String entities as entities "as-is" in v5.0. You must analyze the String entities and decide whether you wish to use these as entity types, training phrases, or dictionaries to achieve the desired business use case. Consider answering these questions:

*   Are the values a logical grouping of nouns e.g. scheme name, which holds the same meaning across all training variations for the agent? - Consider defining these as entity types and values. See [Add entity types to agent](/user-guide/how-to/build-agents/add-entity-types-to-agent), for more information.
    
*   Are these values not typical dictionary words but hold specific meaning to your business? - Consider defining these in the dictionary. See [Add dictionaries](/user-guide/how-to/build-agents/configure-agents/add-dictionaries), for more information
    
*   Are these just regular words for which you have given some alternate synonyms? - For example, eat -> grab, gobble, drink. Consider adding them as training sentences for that intent. See [Add invocation intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-invocation-intent) and [Add user intent](/user-guide/how-to/build-skills/create-skill/using-dialog-designer/create-new-skill/add-user-intent), for more information. Certain similar word variations such as quote -> quotation are already in-built into the platform and you do not have to add variations for these. However, if you wish to answer something like “I want to get estimate details” instead of “I want to get quote details”, then you must include this variation in the training data. A simple way to know if the variations work or not is to ask a basic question to your agent with the specific variation and check if the agent is providing an appropriate response. If not, then add it as a training variation.
    

**Example**: The following table lists a few examples of String entity in v4.0 and corresponding categorization in v5.0:

String entity v4.0

v5.0

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

## 

Re-branded documentation

New re-branded documentation is available with the v5.0 release. The documentation includes concepts, quick start and tutorials, and an in-depth How-to section that helps in easy onboarding and training of new users to the v5.0 platform.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new

The **v5.0** version is a significant revamp of the product. It reduces the number of concepts a new developer has to learn for developing enterprise agents. The dashboard UI and user experience are refreshed to make the development pleasant.

To make the navigation around the new features in the **v5.0** easier, they are classified into the following categories:

*   Development:
    
    *   [Introduction of enterprise skill](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-enterprise-skill)
        
    *   [Introduction of agent](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-agent)
        
    *   [Introduction of skill builders](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-skill-builders)
        
    *   [Introduction of Avaamo Answers skill](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-avaamo-answers-skill)
        
    *   [Sample agents](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#sample-agents)
        
    *   [Terminology changes](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#terminology-changes)
        
    
*   Administration/Management
    
    *   [Introduction of agent life cycle management](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-agent-life-cycle-management)
        
    *   [Introduction of fine-grained agent permissions](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-fine-grained-agent-permissions)
        
    *   [Introduction of skills store](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-skills-store)
        
    *   [Changelogs](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#changelogs)
        
    

## 

Development

### 

Introduction of enterprise skill

The v5.0 version introduces the concept of skill. A skill is specialized to understand and handle a specific task in the user conversation flow. **Example**: Order Pizza skill in a Pizza agent is responsible for taking the user through a conversation to capture the required data to order a pizza.

At a high level, a skill is similar to a "Conversational Flow Bot" in the previous version. In v5.0, it takes the concept to the next level by including an inlining intent definition to the skill. Broadly, a skill includes two key parts:

*   Invocation intent and associated slots
    
*   Implementation
    

This combination of intent + implementation (aka fulfillment) provides an optimum level of abstraction to achieve easier reusability and management. See [skill store](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new#introduction-of-skills-store), for more information on reusing the skills. At a conceptual level, the skill is then defined as

*   Something that understands user queries and responds.
    
*   May have one or more intents
    
*   May engage the user in a one-off response or in a multi-turn conversation
    

With that definition, the old "Conversational Flow Bot" becomes a type of skill. The "Knowledge Pack" becomes another type of skill. The built-in intents from the v4.0 version such as greeting and frustration also become skills in the new version.

See [Build skills](/user-guide/how-to/build-skills) and [Dialog Designer](/user-guide/how-to/build-skills/create-skill/using-dialog-designer), for more information.

### 

Introduction of agent

An agent is a collection of skills and the container of associated data, such as entity types, JavaScript, channels, languages, environment variables, and so on. When a user posts a query to an agent, the agent understands and classifies the input (both text and voice) and then selects an appropriate skill to engage with the user.

See [Agents](/user-guide/overview-and-concepts/agents) and [Build agents](/user-guide/how-to/build-agents), for more information.

### 

Introduction of skill builders

The UI wizards used for creating skills are now called **Skill Builders**. There are four types of skill builders in v5.0:

Builder Name

Description

[Dialog Skill Builder](/user-guide/how-to/build-skills/create-skill/using-dialog-designer)

It helps you create a multi-turn conversation flow that can connect to an enterprise information system for data.

[Q&A Skill Builder](/user-guide/how-to/build-skills/create-skill/using-q-and-a-designer)

It helps you create a skill that can provide answers to one-off questions. Typically these are frequently asked questions.

[Answers Skill Builder](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1)

It helps you create a skill to provide answers from your enterprise content via conversations.

[Smalltalk Builder](/user-guide/how-to/build-skills/create-skill/using-smalltalk)

It helps you create a skill that provides responses to casual user conversations.

See [Build skills](/user-guide/how-to/build-skills), for more information.

### 

Introduction of Avaamo Answers skill

The v5.0 introduces a new skill - **Avaamo Answers** that can provide answers from your enterprise content via conversations.

Using Avaamo Answers, you can create a quick smart conversational knowledge base by importing any PDF document or from any externally accessible URL. In addition, you can iteratively edit and fine-tune the extracted knowledge base in Answers, as required, to provide more accurate responses to user queries.

See [Build skills using Avaamo Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1), for more information.

**Key points**:

*   Answers skills do not participate in the agent life cycle.
    
*   You cannot publish Answers skill to skills store.
    
*   Make a copy functionality does not apply to Answers skill.
    

### 

Sample agents

The new version is already available with a few sample agents to help you understand the new and simple ways to build an agent. These agents are curated and managed by Avaamo. For any new user, the following agents are available in the out-of-the-box instance:

You can also make a copy of the agent and start editing the copied agent to explore more. See [Make a Copy](/user-guide/how-to/build-agents/manage-agents#make-a-copy), for more information.

### 

Terminology changes

The v5.0 release simplifies and streamlines the terminology required to build conversational AI agents. The following table summarizes the terminology changes introduced in v5.0

4.x Term

5.0 Term

Composite Bot

Agent

Child Bot

Skill

Conversational Flow bot

Dialog Skill

Knowledge Pack

Q&A Skill

Smalltalk Knowledge Pack

Smalltalk Skill

String Entity

The string entity is removed.

The string entity types are automatically migrated to Entity Types.

Entity Type

Entity Type

Domain

The domain is now removed. However, it is available in the older bots in the read-only mode. See [Removal of domain](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/release-notes#removal-of-domain), for more information.

Domain Intent

Invocation Intent (Available inside the dialog skill)

## 

Administration/Management

### 

Introduction of agent life cycle management

The agent life cycle management feature makes the migration of agents from the development stage to the production stage simpler. You can move an agent from one stage to another at the click of a button. The environment-specific variables are retained when an agent is moved from one stage to another.

This helps in a structured release management process and allows different teams to participate and collaborate in different stages of the agent life cycle.

See the [agent life cycle](/user-guide/how-to/plan-your-development-process-agent-life-cycle), for more information.

### 

Introduction of fine-grained agent permissions

This feature makes visibility and access restriction to agents easy. By default, all new agents created are visible only to the creator. The creator can then add additional users with finer permissions such as view, edit, publish, and owner to their agents. This allows team members to collaborate and participate in different stages of an agent life cycle.

See [Roles and Permissions](/user-guide/overview-and-concepts/advanced-concepts/understand-roles-and-permissions), for more information.

### 

Introduction of skills store

The v5.0 version introduces the skills store feature. The skill store is a repository of skills curated and managed by Avaamo for everybody to use and the skill published by developers within the company.

The skills published by developers within your company are shown under the **Company Skills** category. The Avaamo provided skills are shown under the **Avaamo Skills** category. You can import any of the company or **Avaamo skills** into an agent. Skills store allows skill developed in one agent to be re-used in other agents within a company, there-by accelerating the agent development process.

See the [Manage skills store](/user-guide/how-to/manage-skills-store), for more information.

### 

Changelogs

The v5.0 version allows you to track changes of an agent goes in its life cycle using **Changelog API.** This feature helps in better accountability of the users modifying the agent and troubleshooting issues in an agent if any.

See [Changelog API](/user-guide/ref/avaamo-platform-api-documentation/change-log-apis/changelog-api), for more information.

---

## Source: https://docs.avaamo.com/user-guide/release-notes-old/all-releases

This article summarizes a list of all the releases of the Avaamo Conversational AI Platform since the v5.0 release:

Release

Release date

Description

[v10.0.6](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.6)

June 8th, 2026

Fix patch release

[v10.0.5](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.5)

May 25th, 2026

Fix patch release

[v10.0.4](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.4)

May 11th, 2026

Fix patch release

[v10.0.3](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.3)

April 27th, 2026

Fix patch release

[v10.0.2](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.2)

April 13th, 2026

Fix patch release

[v10.0.1](/user-guide/recent-releases/release-notes-v10.0.0/fix-patch-releases-v10.0.1)

March 30th, 2026

Fix patch release

[v10.0.0](/user-guide/recent-releases/release-notes-v10.0.0)

April 10th, 2026

Major release

[v9.1.8](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.8)

March 16th, 2026

Fix patch release

[v9.1.7](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.7)

March 2nd, 2026

Fix patch release

[v9.1.6](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.6)

February 16th, 2026

Fix patch release

[v9.1.5](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.5)

February 2nd, 2026

Fix patch release

[v9.1.4](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.4)

January 19th, 2026

Fix patch release

[v9.1.3](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.3)

December 22nd, 2025

Fix patch release

[v9.1.2](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.2)

December 8th, 2025

Fix patch release

[v9.1.1](/user-guide/recent-releases/release-notes-v9.1.0/fix-patch-releases-v9.1.1)

November 24th, 2025

Fix patch release

[v9.1.0](/user-guide/recent-releases/release-notes-v9.1.0)

November 11th, 2025

Minor release

[v9.0.7](/user-guide/recent-releases/release-notes-v9.0.0)

November 10th, 2025

Fix patch release

[v9.0.6](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.6)

October 27th, 2025

Fix patch release

[v9.0.5](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.5)

October 13th, 2025

Fix patch release

[v9.0.4](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.4)

September 29th, 2025

Fix patch release

[v9.0.3](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.3)

September 15th, 2025

Fix patch release

[v9.0.2](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.2)

September 1st, 2025

Fix patch release

[v9.0.1](/user-guide/recent-releases/release-notes-v9.0.0/fix-patch-releases-v9.0.1)

June 28th, 2025

Fix patch release

[v9.0.0](/user-guide/recent-releases/release-notes-v9.0.0)

May 10th, 2025

Major release

[v8.2.2](/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.2)

December 13th, 2024

Fix patch release

[v8.2.1](/user-guide/recent-releases/release-notes-v8.2.0/fix-patch-releases-v8.2.1)

November 8th, 2024

Fix patch release

[v8.2.0](/user-guide/recent-releases/release-notes-v8.2.0)

August 31st, 2024

Minor release

[Atlas 8.1.0](/user-guide/recent-releases/release-notes-v8.1.0)

June 8th, 2024

Minor release

[Atlas 8](/user-guide/recent-releases/release-notes-v8.0)

March 15th, 2024

Major release

[v7.0.0](/user-guide/release-notes-old/v7.0.0/release-notes-v7.0.0)

August 4th, 2023

Major release

[v6.4.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.4.x)

April 14th, 2023

Minor release

[v6.3.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.3.x/release-notes-v6.3.0)

December 16th, 2022

Minor release

[v6.2.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.2.x/release-notes-v6.2.0)

August 19th, 2022

Minor release

[v6.1.1](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/fix-patch-releases-v6.1.x)

June 7th, 2022

Fix patch release

[v6.1.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.1.x/release-notes-v6.1.0)

June 3rd, 2022

Minor release

[v6.0.1](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/fix-patch-releases-v6.0.x)

February 22nd, 2022

Fix patch release

[v6.0.0](/user-guide/release-notes-old/v6.0-to-v6.4.x-releases/v6.0.x/release-notes-v6.0.0)

Jan 21st, 2022

Major release

[v5.8.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.8.x/release-notes-v5.8.0)

Sept 11th, 2021

Minor release

[v5.7.1](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/fix-patch-releases-v5.7.x)

July 24th, 2021

Fix patch release

[v5.7.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.7.x/release-notes-v5.7.0)

July 10th, 2021

Minor release

[v5.6.1](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/fix-patch-releases-v5.6.x)

February 26th, 2021

Fix patch release

[v5.6.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.6.x/release-notes-v5.6.0)

February 13th, 2021

Minor release

[v5.5.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.5.x/release-notes-v5.5.0)

December 25th, 2020

Minor release

[v5.4.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.4.x/release-notes-5.4.0)

October 16th, 2020

Minor release

[v5.3.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.3.x/release-notes-5.3.0)

Release with v5.4.0

Minor release

[v5.2.2](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/fix-patch-releases-v5.2.x)

July 14th, 2020

Fix patch release

[v5.2.1](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/fix-patch-releases-v5.2.x)

June 13th, 2020

Fix patch release

[v5.2.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.2.x/release-notes-v5.2)

May 27th, 2020

Minor release

[v5.1.1](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/fix-patch-releases-v5.1.x)

May 8th, 2020

Fix patch release

[v5.1.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/v5.1.x/release-notes-v5.1)

April 24th, 2020

Minor release

[v5.0](/user-guide/release-notes-old/v5.0-to-v5.8.x-releases/whats-new)

Jan 15th, 2020

Major release

### 

Release comparison

The following table contains a list of new feature availability across releases:

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes

Welcome to the Internal Release Notes Hub. This space provides a single point of reference for all product updates, fixes, and enhancements released across our platforms.

These notes are designed to keep internal teams aligned by offering:

*   **Visibility** into recent and upcoming changes
    
*   **Clarity** on new features, enhancements, and fixes
    
*   **Guidance** for QA, support, and product rollout planning

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/08-june-2026-10.0.6

## 

1\. Disable citation link security for AI Agent responses

In this release, AI Agents have been enhanced with an option to `disable citation link security`, providing greater flexibility in how citation links are accessed and shared.

Previously, citation links generated in responses expired 24 hours after generation to ensure secure and controlled access. With this enhancement, you can disable citation link expiration when persistent access to citations is required.

**Key highlights**

*   Disable citation link security from `Configuration` \> `Settings`
    
*   By default, citation links continue to expire after 24 hours
    
*   Useful for debugging, troubleshooting, and sharing persistent references with users
    

**Note:** It is recommended to keep citation link security enabled to maintain secure and controlled access to citation content.

This enhancement provides more flexibility in managing and sharing citation links generated by AI Agents

See [Advanced features](/user-guide/ai-agent/configuration/settings#advanced-features), for more information.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/25-may-2026-10.0.5

## 

1\. Support for adding additional URLs in Web CSV content sources

In this release, the `Web CSV` content source in the Knowledge skill has been enhanced with an `Add URLs` option, enabling users to add additional URLs to an existing content source job without creating a new one.

**Note:** URLs added to a Web CSV content source are ingested during the next Sync Now or Auto Sync operation.

With this enhancement:

*   Users can now append additional URLs to an existing Web CSV content source
    
*   Eliminates the need to create separate source groups for incremental URL additions
    

This improvement streamlines the process of managing and scaling Web CSV-based content ingestion.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/10-may-2026-10.0.4

## 

**1\. Agentic V2: Smarter conversations, faster responses, and more natural interactions**

In this release, we are introducing `Agentic V2` with major enhancements focused on faster response times, smoother conversational flow, and improved handling of real-world voice interactions.

**To enable this feature:**

*   Navigate to `Configurations` > `Settings` > `Advanced Features`
    
*   Enable the checkbox for `Enable Agentic V2`
    

#### 

What’s new

*   **Direct LLM streaming:** The system streams LLM output directly to the TTS engine, allowing the bot to start speaking while the response is still being generated, reducing time to first audio
    
*   **Improved response timing:** LLM processing starts immediately after the user stops speaking, minimizing the gap between user input and bot response
    

#### 

Key Capabilities

*   **Dynamic listening:** Context-aware endpointing adjusts silence thresholds based on the type of input (for example, longer pauses for address vs shorter for date of birth), enabling more natural turn-taking
    
*   **Multi-turn response stitching:** Combines fragmented user inputs across turns into a single, complete entity without requiring repetition
    
*   **Turn overlap & response reconstruction:** Handles mid-turn interruptions by capturing new input, re-processing it, and dynamically reconstructing the response
    
*   **Direct LLM streaming:** Streams responses to TTS in real time, reducing latency and improving responsiveness
    
*   **Optional ambient sound:** Uses psycho-acoustic masking to reduce perceived silence and create a more natural conversational flow
    
*   **Zero-turn pre-call processing:** Leverages metadata (for example, ANI) to perform background processing before the user speaks, enabling faster first responses
    
*   **Consistent vocal fingerprinting:** Maintains a uniform voice tone and pitch across responses to deliver a natural-sounding agent experience.
    
*   **Multi-modal noise cancellation:** Filters background noise to improve ASR accuracy in real-world environments
    
*   **Pronunciation dictionaries & SSML controls:** Enables accurate pronunciation of brand names and domain-specific terms with improved control over emphasis, pacing, and intonation.
    
*   **Robust background sound handling:** Detects and ignores non-speech background noises such as dog barks and kitchen sounds to maintain accurate and uninterrupted conversations.
    

Agentic V2 delivers a significantly more responsive and natural voice experience, enabling real-time, human-like conversational interactions at scale.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/27-apr-2026-10.0.3

## 

1\. Card-based form submission and contextual response enhancement

In this release, enhancements have been introduced to ensure that values selected or entered through `card` and `form` responses are automatically retained in the LLM context.

To enable this capability, add the following in `Advanced Settings`:

Copy

    enable_card_submission_context: true

Previously, values submitted through UI elements were not passed into the LLM context, causing the agent to re-prompt users for the same information unless custom functions were implemented.

**With this enhancement:**

*   Values selected or entered through `card` and `form` inputs are automatically captured and added to the conversation context upon card submission.
    
*   Eliminates the need to create custom functions to store and reuse user inputs
    
*   Ensures smoother conversations without redundant prompts
    

This enhancement simplifies development by removing the need for custom input-handling logic and enables more context-driven, seamless interactions based on user-submitted data..

## 

2\. SMS channel support for AI Agents

In this release, `SMS channel` support has been introduced for AI Agents, enabling interactions over text messaging.

With this enhancement, AI Agents can be deployed and accessed via SMS, allowing users to engage with them without web- or app-based interfaces.

This expands the reach of AI Agents and enables organizations to deliver conversational experiences over SMS, improving accessibility and engagement.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/13-apr-2026-10.0.2

## 

1\. Session reports API for CI

In this release, a new REST API has been introduced to:

*   Create a JWT token required for accessing protected endpoints.
    
*   Get paginated session reports for the authenticated agent.
    

Create (POST)

Get (GET)

Copy

    // Signature - Create user property
    
    POST 
    https://ci.avaamo.com/external/v1/authenticate

Copy

    // Sample cURL request - Create a new user property "region" for the given agent
    
    curl -X POST "https://ci.avaamo.com/external/v1/authenticate" \
      -H "Authorization: Bearer <EXTERNAL_ACCESS_TOKEN>"

Copy

    // Signature - Get user property
    
    GET 
    https://ci.avaamo.com/external/v1/session-reports

Copy

    // Sample cURL Request - Get all the user properties from the agent: 
    
    curl -X GET "https://ci.avaamo.com/external/v1/session-reports?start_date=2026-03-01&end_date=2026-03-10&page=1&per_page=20&sort=timestamp&order=desc" \
      -H "Authorization: Bearer <JWT>" \
      -H "Content-Type: application/json"

Copy

    // Sample response
    
    
      "results": [
        {
          "uuid": "...",
          "session_id": "...",
          "conversation_uuid": "...",
          "timestamp": "2026-03-11T09:15:00Z",
          "timezone": "America/Chicago",
          "duration": 312,
          "conversation_history_url": "https://.../web/#messenger/conversations/...",
          "report": {}
        }
      ],
      "count": 150,
      "next": "https://ci.avaamo.com/external/v1/session-reports?page=3&per_page=20&start_date=2026-03-01&end_date=2026-03-10",
      "previous": "https://ci.avaamo.com/external/v1/session-reports?page=1&per_page=20&start_date=2026-03-01&end_date=2026-03-10"
    }

See [Session reports API](/user-guide/ref/avaamo-platform-api-documentation/sms-reporting-api), for more information.

## 

2\. Improved session timeout for CI dashboard

In this release, an issue causing frequent session timeouts in the **CI Dashboard** has been fixed.

Previously, users were logged out of the CI Dashboard after a few minutes of inactivity, even when they were still logged in to the main Avaamo dashboard, resulting in a poor user experience.

With this fix:

*   The CI Dashboard session timeout is now aligned with the main dashboard
    
*   Users will remain logged in for up to **24 hours** without unexpected logouts
    

This improvement ensures a more consistent and seamless user experience across the platform.

## 

3\. Automatic query detection and translation for AI Agents

In this release, support has been added for **automatic query language detection and translation** in AI Agents.

With this enhancement:

*   User queries in **non-English languages** are automatically detected and translated when the agent is configured in English mode (applicable to both AI Agents and Classic Agents)
    
*   **Multi-intent and multi-query inputs** are correctly translated and processed
    
*   Responses are generated accurately for **queries in different languages**
    
*   Translation is performed with **minimal impact on intent matching latency** (approximately 5–100 ms observed during testing)
    

This enhancement enables agents to handle **multilingual user inputs seamlessly**, improving accessibility and overall user experience without impacting performance.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/30-mar-2026-10.0.1

## 

1\. Support for regression test in dialog skill

In this release, support has been added for running `regression tests for AI agent dialog flows` within the dialog skill.

With this enhancement, users can:

*   Create a regression test for agentic dialog flows
    
*   Execute test to validate flow behavior
    
*   View, run, and download test results directly from the UI
    

This capability helps ensure the reliability and consistency of agentic dialog flows by enabling structured testing and validation.

## 

2\. JavaScript support for Outro message handling in Agentic Agents

In this release, **JavaScript support has been introduced for the Outro message skill** in AI Agents, enabling greater control over end-of-call behavior.

With this enhancement, developers can invoke the following functions within JS code during the Outro phase:

*   `SmartCall.hangup`
    
*   `SmartCall.forward`
    
*   `avm_instruction`
    

This allows dynamic handling of call termination, forwarding, and execution of custom instructions, providing greater flexibility in designing agent workflows.

## 

3\. Support for streaming messages in function execution

In this release, support has been added for sending interim messages from tool functions using `Message.send()`.

With this enhancement, developers can send a message (for example, a wait or processing message) while a function is still executing, instead of waiting for the entire function to complete. This improves user experience, especially for APIs that take longer to respond.

**Example usage**

This allows the agent to provide real-time feedback to users during long-running operations.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/16-mar-2026-9.1.8

## 

1\. Session timeout notification for the Web channel

In this release, a `session timeout notification` has been introduced for the Web channel. With this enhancement, when a user session ends due to inactivity, a message is displayed in the conversation informing the user that the session has timed out.

You can enable this feature by setting the `enable_idle_timeout_notification` parameter to `true` under the Prompt skill's `Advanced` settings. Navigate to `Advanced` \> `Advanced customization parameters`.

This enhancement improves transparency by clearly informing users when their session has ended due to inactivity.

## 

2\. Support for retaining contextual data with UI responses

In this release, the platform has been enhanced to retain additional contextual data when responses include UI elements such as cards, carousels, or messages. This allows the agent to reference that information in subsequent interactions.

This improvement enables richer conversational experiences, improving follow-up question handling and overall conversation continuity.

**For example**

In this example, the card UI is displayed to the user, while the additional `cricket metadata` is preserved in the context. This allows the agent to answer follow-up questions, such as `Who is his favorite cricketer?` or `Who is his favorite bowler?` using the stored contextual information.

## 

3\. LLaMB support for multi-intent queries

In this release, **LLaMB now supports multi-intent queries for AI Agents**. With this enhancement, the system can process multiple intents expressed within a single user query and generate a consolidated response.

With this, LLaMB can interpret and handle multiple requests in a single query, improving response accuracy and coverage.

In AI Agents, multiple queries can also be passed programmatically as an **array in a function call**.

Example:

**Example:**

_“Please connect me to the billing department and give me the visiting hours for the radiology department.”_

In this scenario, the system identifies both intents—**connecting to the billing department** and **providing radiology visiting hours**—and processes them within a single interaction.

This enhancement improves the agent’s ability to handle complex user requests, resulting in more natural conversations and more comprehensive responses.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/02-mar-2026-9.1.7

## 

1\. Introducing MCP as a new channel

In this release, we introduce a new channel, **MCP**, which enables external AI systems to connect to and invoke Avaamo agents within their own workflows.

**Note:** This channel is applicable only for AI agents.

With the MCP channel, you can connect existing MCP-compatible clients (such as ChatGPT or other AI tools) directly to Avaamo agents using a generated MCP URL.

This enhancement enables seamless integration of Avaamo agents into broader AI ecosystems while maintaining full control over agent workflows and responses.

Refer MCP, for more information.

## 

2\. Support for MCP Integrations in Prompt Skills

In this release, MCP server integrations are introduced in Prompt Skills, allowing you to connect external MCP servers and selectively enable their tools.

This enhancement gives you greater flexibility to extend agent capabilities with external services, while maintaining clear control over which tools are enabled and accessible within each Prompt Skill.

Navigate to the `MCP Integrations` section via the left menu of the Prompt Skills, allowing users to:

*   Add custom and built-in MCP connectors
    
*   Explore and choose from the available connectors in the Built-in MCP connectors list.
    
*   Fetch and view the list of tools exposed by the MCP connectors
    
*   Enable or disable specific tools
    
*   Create, update, or delete MCP connectors
    

For custom integrations, tools are automatically fetched once a valid connector URL is provided. If the URL is invalid, the tools cannot be retrieved. Tool enablement states are preserved once configured.

Refer MCP integration, for more information.

## 

3\. Improved barge-in handling during warm-up message playback

In this release, barge-in behavior during warm-up and greeting message playback has been enhanced to ensure a consistent and controlled IVR experience.

Previously, if a user entered DTMF input during the warm-up message playback, the system immediately interrupted the message and processed the input.

With this enhancement, the barge-in logic has been updated with the following behavior (applicable to both **DTMF and audio barge-in**):

*   If a **welcome message is enabled**, barge-in is automatically disabled until the entire welcome and greeting message has finished playing, regardless of configuration.
    
*   If no welcome message is configured, barge-in behavior follows the existing configuration settings.
    

This update ensures that critical greeting or welcome messages are delivered completely before user input is processed, improving call flow consistency and overall user experience.

* * *

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/12-feb-2026-9.1.6

### 

1\. Real-time LLM context optimization improvements

In this release, improvements have been introduced to optimize LLM context handling for real-time AI Agent interactions across both `Digital (Web)` and `CIVR` channels.

These enhancements focus on reducing unnecessary context sent to the LLM while preserving conversation quality and the reliability of function execution.

#### 

Configurable context window size

A new advanced Prompt Skill setting, `context_window_size` allows you to control how many recent conversation items are retained in the LLM context (maximum: 10). When the configured limit is reached, older messages are automatically trimmed to reduce token usage and optimize performance.

**Example:** Setting `context_window_size: 10` retains the 10 most recent conversation items in the active context.

This update enhances response speed, reduces token consumption, and improves overall reliability for real-time agent interactions.

### 

2\. Enhanced DataSync SharePoint connector for nested documents and attachments

In this release, the `DataSync SharePoint connector` has been enhanced to support viewing and selecting all documents, files, and attachments, including those nested within folders and subfolder structures.

This improvement enables more comprehensive content discovery and ingestion while preserving document integrity and associated metadata.

You can also search for folders in the `Select Sites` step to quickly locate the folder where your articles or documents are stored. You can also use the `Show selected at top` toggle to keep the selected folder displayed at the top of the list for easier access.

### 

3\. Warning for large function call responses in error logs

In this release, the platform surfaces a **warning in the Error Log dashboard** when a function call returns an unusually large response (e.g., a response containing a very large payload, such as a 10,000-character string).

When such a large response is returned from a function call in JavaScript:

*   A **FunctionCallOutputWarning** is logged in the **Error Log** with details such as skill name, conversation ID, and stack trace.
    
*   The warning indicates that the function output size may impact response handling.
    

For normal-sized function return values, no warning is generated, and the function executes as expected.

In addition, `function response sanitization` has been implemented for UI components such as `cards`**,** `carousels`**,** `list views`**,** and `quick replies`. This reduces the function response size by approximately 70%, thereby minimizing LLM context length and improving real-time performance.

This enhancement improves observability and helps developers identify and debug issues related to oversized function outputs without affecting standard function behavior.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/02-feb-2026-9.1.5

### 

1\. Idle transfer to the error handler

This enhancement allows the bot to transfer the call to the error handler after a configured number of idle nudges. From the error handler, bot developers can decide whether to transfer the call, end it, or perform any other custom steps required.

**How to enable:**

1.  Navigate to the **Prompt Skill** where you want to configure idle transfer functionality.
    
2.  Go into **Advanced settings**.
    
3.  In **Advanced customization parameters**, add: `enable_idle_error_handler: true`
    

Remove `hangup_on_idle` if previously configured.

1.  Save and exit.
    
2.  Navigate to **Configuration > Settings > Error handler**.
    
3.  Provide the required JavaScript as needed.
    
4.  Save and test the configuration.
    

### 

2\. Reduced typing filler audio volume

The volume of the typing filler audio has been reduced to create a more natural, less intrusive conversational experience during idle periods.

### 

3\. Skipped bot error logging for idle nudges

To prevent unnecessary log pollution, bot errors are no longer raised for idle nudges. Control will still transfer correctly to the configured end state (hangup or error handler) without creating error log entries.

### 

4\. Advanced idle nudge configuration

Support for `idle_nudge_config` has been added to the **Advanced customization parameters** of prompt skills, enabling skill-level configuration of idle nudge timing, count, and messages.

**How to configure:**

1.  Navigate to the **Prompt Skill** where you want to set idle nudge behavior.
    
2.  Go into **Advanced settings**.
    
3.  In **Advanced customization parameters**, add an `idle_nudge_config`, for example:
    

**Parameter details:**

*   **duration\_ms** – Time to wait before detecting an idle nudge (in milliseconds).
    
*   **max\_nudges** – Number of nudges to provide (the final hangup or transfer also counts as one).
    
*   **nudge\_messages** – Spoken messages that can be customized for each stage.
    

**Key points:**

To finalize behavior:

*   Add `hangup_on_idle: true` for hangup, **or**
    
*   Add `enable_idle_error_handler: true` to transfer control to the error handler.
    

### 

5\. Warm-up message support for phone channel

In this release, a `warm-up message` has been introduced for the `phone channel` to improve the call start experience. This message is played at the beginning of a call while the actual call setup continues in parallel, helping reduce perceived latency and avoid early call drops.

This enhancement improves user experience during call initiation, especially in scenarios with higher startup latency.

**To enable the warm-up message:**

1.  Navigate to the **CIVR / Phone channel configuration**.
    
2.  Enable the **Warm-up message** toggle.
    
3.  Enter the static message text in the input box that appears when the option is enabled.
    
4.  Save the configuration.
    

**Key Points:**

*   Supported only for the phone channel in AI Agents only
    
*   Warm-up messages can be added, updated, enabled, disabled, or removed
    
*   The feature is `optional`; calls continue to work without a warm-up message
    
*   Compatible with `multiple TTS providers`

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/19-jan-2026-9.1.4

This release delivers key enhancements to improve content freshness, conversational reliability, and developer control across AI agents. Highlights include Confluence integration for Knowledge Skills, prompt versioning, the new Dialog skill, richer UI responses, faster silent transfers, and improved transparency in regression testing.

### 

**1\. Introducing Conversational Intelligence (CI)**

In this release, we introduce `Conversational Intelligence (CI),` a powerful, AI-driven analytics layer that provides deep insights across digital and voice interactions. CI works seamlessly across `classic agents, AI agents, and Agent Copilot,` providing a unified, centralized way to analyze conversations at scale.

**Key points:**

*   **AI-driven conversation analysis:** CI analyzes the entire conversation_,_ including transcripts and call metadata, to understand context, intent, and sentiment, rather than relying on rigid conversation trees.
    
*   **Built for modern AI conversations:** Unlike legacy tag-based systems, CI adapts naturally to fluid, non-linear AI agent conversations, making it the most effective way to analyze AI-driven interactions.
    
*   **Centralized analytics platform:** Eliminates the need for custom tagging logic or external dashboards by providing a single analytics layer for all bots and channels.
    
*   **Chat with your data:** Users can interact with insights using a conversational interface to ask questions and explore trends.
    
*   **Rich insights and reporting:** Includes charts, date-based filtering, and automated weekly summary emails.
    

Conversational Intelligence replaces legacy tagging approaches with a smarter, scalable, AI-first analytics solution, helping teams gain accurate, actionable insights from every customer interaction.

### 

**2\. Introducing Confluence as a content source for Knowledge Skill**

In this release, Knowledge Skill adds support for `Confluence` as a content source, enabling you to ingest Confluence pages and spaces directly into your knowledge base. This integration keeps agent knowledge aligned with the latest documentation, runbooks, and team updates maintained in Confluence.

By automatically syncing Confluence content, agents can deliver more accurate, up-to-date responses without manual uploads, reducing maintenance effort and improving response quality.

### 

**3\. Introducing prompt versioning**

In this release, we introduce `prompt versioning` at the prompt skill level, giving you better control and visibility into how prompts evolve over time.

This enhancement helps teams safely iterate on prompts, roll back changes when needed, and maintain consistency across environments, making prompt development more reliable and auditable.

Each time you save changes to a prompt skill, whether in the `prompt content`, `functions`, or `advanced settings,` the system automatically creates a new version. The initial save creates version 1, and subsequent changes generate additional versions, ensuring that every meaningful update is tracked.

**Key highlights**

*   **Automatic version creation:** A new version is created whenever the prompt, functions, or advanced settings change.
    
*   **Side-by-side comparison:** Compare any two versions in parallel to clearly understand what has changed.
    
*   **Restore with confidence:** Roll back to a previous version to revert the prompt skill to an earlier state. Restoring creates a new version marked as restored, and the latest version always appears at the top.
    
*   **Pagination:** Versions are paginated with up to 10 versions per page, and the latest 100 versions are retained for easier navigation.
    
*   **Stage-aware versioning:** Versioning is supported across all stages (development, testing, staging, and production). Pulling updates from one stage to another creates a new version in the target stage.
    
*   **Export and import behavior:** Version history is not included during export. On import, the latest version is copied, and versioning starts fresh for the new agent.
    

### 

**4\. Introducing the Dialog skill for AI agents**

In this release, we introduce the `Dialog skill`, a new way to design agent interactions that combines the reliability of deterministic dialogue flows with the flexibility of agentic AI behavior.

The dialog skill brings together the strengths of prompt-driven agents and rule-based dialogues, enabling agents to follow structured conversation paths while still responding intelligently and flexibly to a wide range of user inputs.

**Key highlights**

*   **Deterministic yet agentic behavior:** Combines scripted dialogue flows with AI-driven orchestration to handle complex, real-world conversations more reliably.
    
*   **Prompt-based orchestration:** Conversations start with a prompt skill that acts as an orchestrator, dynamically routing user queries to the appropriate dialogue flow.
    
*   **Instruction-driven flow invocation:** Uses flexible instructions instead of fixed training sentences, enabling broader and more natural intent matching.
    
*   **Agentic text responses:** Introduces a new response type that generates intelligent, non-static replies based on instructions, improving conversational spontaneity.
    
*   **Enhanced entity handling:** Supports simplified entity definitions via descriptions or custom entity-extraction scripts (JS), providing greater control and flexibility.
    
*   **Seamless flow transfers:** Enable smooth transitions between dialogue skills while maintaining conversation continuity.
    
*   **Text-based support:** Currently supported for text channels, with existing dialogue capabilities preserved.
    

The Flow skill provides a powerful foundation for building scalable, predictable, and intelligent conversational flows, while remaining compatible with familiar dialogue design patterns.

### 

**5\. Citation links in regression test files**

In this release, we introduce **citation links in regression result files**, making it easier to trace and verify the sources used during regression testing. Each test result can now include direct citation links, allowing reviewers to quickly validate responses against their original knowledge sources.

This enhancement improves transparency, simplifies result verification, and helps teams confidently assess response accuracy during regression testing.

**Note:** To enable citation links in the regression test result file, please reach out to **Avaamo Support**.

### 

**6\. Immediate (silent) transfer option for AI agent**

In this release, we add support for an **immediate (silent) execution option** for agent transfers and call control actions. Bot developers can now trigger transfers, forwards, or hangups **without waiting for the agent’s response**.

This enhancement enables faster, more controlled call flows—especially useful for silent routing, immediate handoffs, and programmatic call termination.

**What’s new**

*   Added an `instant: true` parameter to the following functions:
    
    *   `PromptSkill.transfer(skill, { instant: true })`
        
    *   `SmartCall.forward(message, to, headers, { instant: true })`
        
    *   `SmartCall.hangup({ instant: true })`
        
    

**Behavior change**

*   **Default behavior:** The platform waits for the agent response and reads it out, with a maximum timeout of 20 seconds.
    
*   **New behavior (with** `**instant: true**`**):** The action is executed immediately. The system does not wait for or read any agent message and performs the transfer, forward, or hangup without delay.
    

### 

**7\. Support for multiple web elements in function responses**

In this release, AI Agents now support rendering multiple web elements from a single function response. This allows different UI components to be rendered together in a single response.

This enhancement allows bot developers to send multiple messages from a function response in digital channels, where previously only one message was supported.

*   A single-function response can now include multiple web elements, such as messages, list views, and quick-reply buttons.
    
*   Elements are rendered in sequence, ensuring a coherent and guided user experience.
    

**Key points**

*   Enables richer interaction patterns, such as displaying a message first, then presenting a list view or quick-reply options.
    
*   Allows combining multiple UI components into a single response to provide better context to users.
    

### 

**8\. Non-union priority search for LLaMB skills**

In this release, we introduce **Non-union priority search**, an enhancement to priority-based progressive search that gives finer control over how user attributes are evaluated during retrieval.

With non-union priority search enabled, LLaMB evaluates **each priority level independently rather than** cumulatively combining attributes across priorities. This ensures that results are sourced exclusively from the matched priority level, preventing unintended context mixing.

This enhancement gives teams greater control over how LLaMB evaluates prioritized attributes, resulting in more predictable and accurate responses.

**Note:** Union-based priority search is enabled by default. To disable it and use **non-union priority search**, please contact **Avaamo Support**.

#### 

Example: Union vs non-union priority search

The following example illustrates the difference between the **default (union)** behavior and **non-union** priority search.

**Default behavior (union = true)**

**Input**

**Generated scopes (maxPriority = 4)**

**Queries performed**

*   Q1 (p0): English
    
*   Q2 (p1): English, Spanish
    
*   Q3 (p2): English, Spanish, French
    
*   Q4 (p3): English, Spanish, French, German
    
*   Q5 (p4): All languages (no `user_language` filter)
    

In this mode, attributes are cumulatively combined as priority increases.

* * *

**Non-union behavior (union = false)**

**Input**

**Generated scopes (maxPriority = 4)**

**Queries performed**

*   Q1 (p0): English
    
*   Q2 (p1): Spanish
    
*   Q3 (p2): French
    
*   Q4 (p3): German
    
*   Q5 (p4): All languages (no `user_language` filter)
    

In this mode, each priority level is evaluated independently, and attributes are not combined across priorities.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/22-dec-2025-9.1.3

## 

1\. Language selection for Knowledge skill file ingestion

In this release, we are introducing a new **Language selection** option for file-based content ingestion in Knowledge Skills. You can view this option during file ingestion. This enhancement improves content-processing accuracy, ensures better handling of non-English documents, and helps the system generate more reliable responses from the ingested data.

You can select the language in the **Upload Files** step. Click the dropdown to display the languages configured for the agent.

**Note:** The language selection option is disabled when the Auto-detect toggle is enabled

## 

2\. Export agents with optional **Knowledge** skill data

In this release, we introduce a new checkbox in the agent export flow that lets users include or exclude Knowledge Skills in the export. By default, all applicable skills are included. Users can clear the checkbox to exclude LLaMB skills from the exported agent.

**Note:** This feature is enabled by default; the checkbox is selected.

This enhancement includes two scenarios:

*   **Fresh export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

*   **Repeated export:** See the screenshot below, where LLaMB skills are excluded by clearing the checkbox.
    

This improvement provides greater control and improves export performance, especially for agents with large skill datasets.

## 

3\. Email notifications for failed jobs

In this release, we introduce the **Email Notifiers** to configure email notifications for failed jobs in Knowledge Skill. You can now add email addresses to receive alerts whenever a job fails for any reason.

For example, if an auto-sync is scheduled to run at a specific time and the job fails, the configured email recipients are immediately notified. This alert helps teams detect failures early, respond quickly, and minimize data sync disruptions.

**To configure email notifications:**

1.  Navigate to the required job.
    
2.  Click the three-dot menu next to the job name and select **Email Notifiers**.
    

1.  Add up to **five email addresses**, using **\+ Add** to include them one by one. Click **Save** to apply the configuration.
    

## 

4\. Adaptive TTS caching for faster responses

In this release, we introduce an enhanced **Text-to-Speech (TTS) Cache System** that improves response speed by intelligently caching audio for an agent’s most frequently used phrases.

The system identifies an agent’s **Top N high-frequency phrases** through a daily background job and stores the corresponding audio in MongoDB. During conversations, the Conversation Engine dynamically determines whether a phrase is eligible for caching, ensuring that only the most relevant content is cached.

**Key benefits**

*   **Faster responses:** Cache hits return audio in ~10–50 ms, compared to ~500–2000 ms for cache misses.
    
*   **Reduced costs:** Selective caching yields 40–60% savings in TTS API usage.
    
*   **Faster call start experience:** Platform-wide analysis shows that **67.31%** of utterances are repetitive, of which 32.58% are greetings. As a result, greeting responses benefit the most from caching, making the **initial agent greeting noticeably faster** and improving the overall call start experience.
    

## 

5\. Priority-based progressive search for LLaMB skills

In this release, we introduce **Priority-based Progressive Search** for LLaMB skills. This new search capability formalizes progressive search behavior, previously implemented through custom logic, into a native, priority-driven mechanism that reduces latency and improves search efficiency.

With priority-based search, queries are executed in a defined order, starting with **P0** (highest priority) and proceeding up to **P4** (default maximum environment-level priority, configurable at the skill level). The system sequentially searches by priority, returning results as soon as a relevant match is found, yielding faster, more predictable responses.

This enhancement supports two types of attributes:

*   **Static attributes**: Always included in every search (for example, `department: manager`)
    
*   **Dynamic (priority) attributes**: Evaluated progressively based on their assigned priority
    

Priority-based search is activated by configuring user attributes in the new multi-priority format. Existing static attribute configurations remain fully supported to ensure backward compatibility.

#### 

**Benefits**

*   Fast, strict matches first; broader searches only when needed
    
*   Predictable expansion behavior across any number of priorities
    
*   Natural fallback when data is missing or empty
    
*   Cleaner ranking control through scope-aware weighting
    

This enhancement simplifies progressive search implementation while delivering safer, faster, and more controllable knowledge retrieval.

### 

Examples

#### 

Example A: Progressive local to global search

The search gradually expands and then reverts to a global search.

**Input**

**Search flow**

1.  **Priority 0**: English only
    
2.  **Priority 1**: English, Spanish
    
3.  **Priority 2**: English, Spanish, French
    
4.  **Priority 3**: English, Spanish, French, German
    
5.  **Priority 4**: All languages (no language filter)
    

#### 

Example B: Multiple dynamic attributes with a static attribute

Static attributes (this ensures backward compatibility) remain constant, while dynamic attributes expand by priority.

**Input**

**Search flow**

1.  Manager documents in English
    
2.  Manager documents in English and Spanish, scoped to the India region
    
3.  Manager documents across all listed languages (English, Spanish, French, and German) and regions (India and USA).
    
4.  Manager documents across India and USA region, with no language restriction (fallback)

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/08-dec-2025-9.1.2

## 

1\. Introducing Salesforce as a content source for Knowledge Skill (Beta)

In this release, Knowledge Skill now supports `Salesforce` as a content source, allowing you to bring Salesforce records directly into your agent knowledge.

This feature is currently in beta and intended for testing; feedback is appreciated.

With this enhancement, Knowledge Skill seamlessly processes information from Salesforce, including cases, knowledge articles, and custom objects, alongside other supported content sources. This helps AI agents provide accurate, context-aware responses based on the latest data available in your Salesforce environment.

This feature extends Knowledge Skill's reach, making it easier to unify enterprise knowledge and keep your agents consistently up to date.

## 

2\. Improved voice agent experience with processing-indicator typing sound

In this release, a `typing sound` has been introduced to bridge the silent gap between the moment a user finishes speaking and the moment the agent begins its response. This improvement enhances the voice interaction experience by clearly indicating that the system is processing the user’s input.

**Channels supported:** CIVR, Agentic Widget Voice

**Configuration:** Ensure `filler_audio` : `typing` is added in the `Prompt Skill > Advanced Settings > Advanced customization parameters.`

**Some examples of filler audios are:** `"loading", "typing","office","cough","fan","finger_tap","pencil_tap"`

**How it works**

*   When the user stops speaking, a short typing sound plays until the agent starts responding, helping avoid moments of silence.
    
*   If the user begins to speak again while the typing sound is playing, the typing sound stops immediately. Once the new input is processed, the typing sound may play again briefly before the agent responds.
    

## 

**3\. Support for JS block in welcome messages**

In this release, we are adding support for using JS blocks within welcome messages. This means you can now insert a JS block to generate dynamic, personalized, and context-aware greetings. With this enhancement, your welcome messages can fetch user-specific data, apply conditional logic, display tailored content, and create more engaging first interactions for your users.

## 

4\. Improved unhandled query responses

In this release, a new `Unhandled Options` option has been added under `Advanced Settings` in the LLaMB Skill. This option lets you choose how the system should respond when it cannot find an answer. It gives you more control over the fallback experience and makes unhandled responses easier for users to understand and act on.

**Note:** This option is supported only when the Soft Unhandled skill is configured using a JavaScript block.

When turned off:

When turned on:

The system continues to follow the current behavior and displays a basic fallback response.

The system provides a cleaner, more helpful response. Suggested follow-up questions are shown clearly, each as a clickable button, making it easier for users to continue the conversation.

Refer [Advanced Settings](/user-guide/llamb/get-started/step-2-ingest-enterprise-content/advanced-settings), for more information.

## 

5\. Improved control over language auto-detection in content ingestion

In this release, the system’s ability to automatically detect the language of uploaded files has been improved. Auto-detection is now `disabled by default` for more controlled ingestion. If you want to enable automatic language identification while uploading files through the API, you can do so by setting the payload parameter `auto_detect_language` to `true`.

This update prevents unintended language misclassification during ingestion and allows developers to explicitly choose when auto-detection should run, resulting in more accurate content processing and cleaner knowledge organization.

Below is the example payload:

Refer [Content ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis), for more information.

## 

6\. New source format for citations

In this release, we have introduced a new citation source format. This enhancement ensures that all citations displayed in LLaMB responses follow a cleaner, more consistent, and easy-to-read structure. The updated format makes it simpler for users to understand where each piece of information originated, improving transparency and overall readability.

To enable or change the citation format for your agent, **contact Avaamo Support**.

You can now choose between two display styles for showing citation sources in responses:

1.  **ReferenceFootnotes** This is the existing format where sources appear as: `Source: [1] [2]`)
    

1.  **InlineLinksWithSeparators** _(new)_ This new format displays citation sources inline with clear separators, offering a more readable, user-friendly presentation.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/24-nov-2025-9.1.1

## 

1\. Enhancements to knowledge skill pull updates

We’ve introduced a few improvements to streamline the pull updates workflow for knowledge skill content:

*   **Automatic selection during pull updates:** All checkboxes under `Advanced options` and all LLaMB skills in the change log popup are now selected by default, ensuring a complete and consistent pull updates process with minimal manual effort.
    
*   **Updated naming:** The label `“Skill: Knowledge”` has been renamed to `“Skill: LLaMB content”` in the pull updates popup for better clarity.
    
*   **Refreshed icon:** The LLaMB skill icon has been updated to align with the latest design standards.
    

## 

2\. Enhanced error logs with a search option

In this release, the error logs section has been improved with new searching capabilities:

**Search option added:** You can search error logs using `conversation_uuid` and `conversation_session_uuid` for more targeted and efficient troubleshooting.

**Session UUID visibility:** The listing page now displays the conversation session UUID directly, making it easier to identify, correlate, and analyze specific conversation flows quickly.

These enhancements significantly reduce the time spent locating specific error events, improve traceability across sessions, and provide clearer insights during debugging and root-cause analysis.

## 

3\. Enhanced document filters and statuses in Knowledge skill

This release introduces multiple improvements to document filtering, status visibility, and ingestion transparency within the DataSync UI:

**Multi-select status filter:** A new multi-select dropdown lets users apply multiple document statuses simultaneously, enabling more flexible, efficient filtering.

**New “Others” category in top statistics:** A new `Others` tile appears alongside existing categories, helping teams quickly identify document counts that do not fall under ingestion, failed, or progressing statuses. This ensures alignment between categorized counts and the total document count. The Others category count represents the combined total of all `Skipped` and `Warning` statuses.

**Detailed status insights:** Hovering over **Warning**, **Error**, and **Skipped** statuses reveals detailed information about the underlying issue or reason.

**Introducing the Skipped status:** The new `Skipped` status identifies documents that are intentionally ignored during the ingestion. This status includes a tooltip explaining why the content was skipped.

For example, suppose the content remains unchanged in Web, ServiceNow, or SharePoint sources between runs, whether triggered manually via Sync Now or via auto-sync. In that case, the system skips the ingestion process.

**Key points:**

*   URLs imported via CSV are always processed and marked as **Ingested**, and do not show **Skipped**.
    
*   Force re-ingesting a single document from the menu overrides existing states, moving the document to **Ingested**.
    

## 

4\. Multilingual document ingestion support for Knowledge skill

In this release, multilingual document ingestion is added to Knowledge skill, allowing it to process documents in any language supported by the platform. You can now upload documents or files in any language supported by the platform, expanding flexibility for global and multilingual use cases.

You can also use the **Auto Detect Language** toggle if you want the system to automatically identify the language of the uploaded document.

You can view these translated chunks in the Knowledge section.

For example, if you ingest a document in French and ask a question in English, the agent interprets the content and responds in the language configured for the conversation, ensuring a seamless multilingual experience.

## 

5\. Transcript availability for digital sessions

In this release, conversation transcripts are now available for **digital sessions** in the conversation history. This enhancement ensures that transcripts are accessible across all session types, providing better visibility into user interactions and improving review and troubleshooting workflows.

## 

6\. Input token utilization warning and automatic session disconnection

In this release, a new safeguard has been added to help manage the use of input tokens. The system now displays a warning when token consumption approaches the configured threshold. If the threshold is exceeded, the session is automatically disconnected to prevent overuse and ensure optimal system performance.

## 

7\. Default ASR model update

In this release, the V6 ASR model is now the default. Standardizing on `V6` ensures consistent performance, reduces configuration discrepancies across environments, and simplifies troubleshooting.

**Note:** Contact Avaamo Support if you need to change this configuration or enable additional model options.

ASR model selection has been streamlined across channels to ensure consistency and simplify configuration:

*   **Web channel:** The `V6 ASR model` is selected by default, and the option to switch to other models has been removed.
    

Before

After release

*   **CIVR/SIP channel:** The `V6 ASR model` is selected by default, And option to switch to other models has been removed.
    

Before

After release

**Key Point:**

**For existing (old) agents**

*   If an ASR model other than V6 was previously selected, the ASR selection options continue to appear in the UI.
    
*   Selecting any model other than V6 is not allowed.
    
*   After selecting V6 and saving the configuration, the ASR selection options are permanently removed from the channel UI.
    

## 

8\. Custom formatting instructions for responses

In this release, we are introducing `Custom Formatting Instructions` for responses. This feature allows teams to define the tone, structure, and layout of every generated response, ensuring consistent communication that aligns with organizational guidelines and specific use-case requirements.

To configure custom formatting instructions, navigate to the `Advanced settings` section within the Knowledge skill page.

1.  Click `Edit`
    

1.  After writing the message, click `Save`.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/10-nov-2025-9.0.7

## 

1\. Enhanced export and import support for AI agents

In this release, the export and import functionality has been enhanced to ensure smooth migration of AI agents and their associated Knowledge Skills across instances.

All existing import and export operations now work with AI agents. AI agents with Knowledge Skills can be exported from any instance and imported into any other instance, with all associated skills automatically included and available in the imported agent.

Refer [Export and import agents,](https://docs.avaamo.com/user-guide/how-to/build-agents/manage-agents/export-and-import-agents) for more information.

## 

**2\. Test call option added for CIVR channel**

In this release, a **Test Call** block has been added for the CIVR channel, allowing users to initiate a test call directly by entering a phone number in the input box and triggering the call.

*   On **success or failure**, a generic message is displayed to indicate the outcome.
    

This update provides an easy way to test CIVR configurations and verify call flow behavior.

## 

**3\. Persistent menu available for AI agents**

In this release, the **Persistent Menu** option, located under the Configuration section, is now available for AI agents.

This enhancement ensures a consistent configuration experience across agent types, allowing you to define and manage persistent menu options regardless of whether the agent is Classic or Agentic.

Refer [Persistent menu](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-persistent-menu), for more information.

## 

**4\. Advanced settings for intro messages**

In this release, the **Advanced Settings** section introduces enhanced configuration options, giving teams greater flexibility and control over agents' LLaMb responses. These enhancements to advanced settings make it easier for administrators and developers to maintain consistency in tone and context while still allowing personalization across different use cases.

A key addition in this release is the ability to **self-configure the LLaMB intro section and Response cutoff message**.

**Intro message:** An intro message is a short, placeholder message displayed while **LLaMB** is processing and generating a response. It helps maintain a natural conversation flow by indicating that the system is preparing an answer (for example, _“Let me check that for you…”_ or _“Just a moment while I look that up…”_).

**Response cutoff message:** A response cutoff message appears **along with the generated answer** when the original response exceeds the **maximum output token limit** configured for that LLaMB skill. It informs the user that the complete response could not be displayed due to length restrictions.

#### 

Intro message configuration capabilities

The new configuration options offer flexibility while maintaining simplicity and control.

*   **Complete customization:** You can freely add, edit, or delete intro messages that appear before the LLaMB response.
    
*   **Optional display:** Intro messages can be entirely removed if desired, allowing users to experience LLaMB responses without any introductory text.
    
*   **No hard limits:** There are no restrictions on the number of messages or their character length, allowing unlimited creativity and customization.
    
*   **Flexible message management:** There is no minimum or maximum limit on the number of messages that can be included or their individual lengths, allowing for the maintenance of short greetings or detailed preambles as needed.
    

## 

**5\. Support for multilingual document ingestion**

In this release, **LLaMB** introduces support for **multilingual document ingestion**, enabling the seamless upload, training, and querying of documents in multiple languages. This enhancement allows the system to process and respond to queries in the user’s selected conversation language, thereby improving accessibility and accuracy for global audiences.

This enhancement also enables LLaMB to automatically detect a document’s language during ingestion, eliminating the need to specify it in the payload. This improves multilingual ingestion accuracy, reduces manual input errors, and streamlines processing and translation of non-English content.

**Note:** Automatic language detection is limited to API-based document ingestion only.

If a language parameter is provided during ingestion, the system uses that language to extract information from the document. If it is not provided, LLaMB automatically detects the document’s language and processes the content accordingly.

**For Auto Detection**

**No auto-detection (explicit language provided)**

#### 

Key capabilities

*   **Language-aware ingestion:** You can now specify the document’s language during ingestion by passing the appropriate language code in the metadata.
    
*   **Agent configuration:** Add the desired language in the agent settings before ingestion to ensure proper handling and processing of multilingual content.
    
*   **Comprehensive format support:** Works with all supported document types, including `**PDF, Word, Excel, PowerPoint, CSV,**` **and** `**HTML**` formats.
    
*   **Cross-language querying:** LLaMB can understand and respond to queries in English, the document’s original language, or another supported non-English language.
    

## 

**6\. Enable previous context for conversations**

In this release, the **context persistence** capability has been introduced to enhance the continuity of user interactions.

With this enhancement, when a user resumes a conversation after being **idle for an extended period (such as an hour or a day)**, the system now **preserves the context of the last session**. This means that when the user sends a new message after returning, the agent can understand and respond based on the previous conversation history, without requiring the user to restate prior information.

You can enable this feature by navigating to **Configuration > Settings > Advanced Settings** and selecting the checkbox for **Enable Previous Context**.

This improvement ensures a more seamless and natural conversational experience by maintaining context across sessions and reducing repetitive interactions.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/27-oct-2025-9.0.6

This release includes enhancements aimed at improving **user feedback collection** and **knowledge skill management** in AI Agents. Users can now gather actionable insights through feedback on agent responses and selectively deploy knowledge skill changes across stages, providing greater control and efficiency in managing AI Agent performance.

## 

1\. Feedback option for AI Agent responses

In this release, we have introduced the ability to `enable` or `disable` the `Feedback option` for AI Agent responses. When enabled, end users will see a “” prompt with a thumbs-up or thumbs-down after the agent’s response, allowing them to provide feedback by selecting one.

It helps you learn and understand how users are interacting with your agent.

**To enable user feedback:**

Go to `Configurations > Settings` in the Avaamo Platform. Under `Advanced Settings`, click the checkbox to `Enable feedback`.

All user feedback can be viewed on the `Learning > Feedback` page for further analysis and improvement of agent performance.

## 

**2\. Pull specific knowledge skill changes**

In this release, we have added the ability to **pull updates for specific changes in knowledge skills** between stages.

This enhancement helps users maintain better control over stage deployments and reduces the risk of unintentionally updating unrelated knowledge skills.

For example, if you add or modify a knowledge skill during an agent’s development stage and then want to update the production stage, the system now displays a list of the **added or altered skills** under **Advanced Options**. You can then select the desired changes to be applied, ensuring that **only the selected updates** are reflected in the production agent.

*   **To be created:** Newly added knowledge skills
    
*   **To be updated:** Existing knowledge skills that have been modified
    

## 

**3\. Support for LLaMB in the Webex channel**

In this release, we have added **LLaMB support** to the **Webex channel**, enabling AI-powered conversational capabilities directly within Webex. Users can now interact with LLaMB-based AI Agents seamlessly through the Webex interface, enhancing automation, information retrieval, and intelligent assistance within communication workflows.

This integration provides a consistent conversational experience across channels and improves accessibility to LLaMB features for Webex users.

## 

**4\. Command to end live agent conversations**

This release includes a fix that ensures the `#end agent` command properly ends the conversation in live agent mode.

With this update, entering the `#end agent` command now reliably closes the live agent session. It returns control to the AI Agent, ensuring accurate session closure and a smoother transition back to automated handling.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/13-oct-2025-9.0.5

This release adds Webex channel integration, response filters, and outro message support, enhancing communication, control, and conversational flow for AI Agents.

## 

1\. Webex channel integration

We are excited to announce the introduction of the **Webex channel**, enabling seamless bot-to-user communication through Webex, a widely used enterprise collaboration platform.

**Note:** 1. Webex channel support is available only for AI Agents. 2. The Webex channel currently supports `text messages` and `adaptive cards`.

In the **Agent** page, navigate to the **Configuration > Channels** option in the left navigation menu.

On the Channels page, click **Connect** in the **Webex** channel.

## 

2\. Response filters for AI agents

The `Response filters` feature allows developers to create and manage custom logic that controls how AI agents generate and deliver `welcome` and `outro` messages. With response filters, you can define specific criteria to determine when and how an agent should modify, enhance, or select a reply before it’s sent to the user.

Refer [Response filters,](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-response-filters) for more information.

## 

3\. Outro message support

This release introduces `Outro message support` for follow-up messages, enabling agents to send a custom response after a tool function is executed.

**Outro messages** allow you to send an additional or follow-up message after the primary response has been delivered to the user. They help make conversations more natural and engaging by providing relevant suggestions or next steps.

**Example:** When a user asks to book a flight from _Delhi to Bangalore_, the agent displays the primary response. After this, you can configure an outro message to send a follow-up response, such as:

*   _“Do you want to book a return ticket?”_
    
*   _“Would you like to book a hotel in Bangalore?”_
    

By using outro messages, you can guide users toward related actions or offer helpful suggestions without interrupting the main response flow.

**Note:** Outro support is available only for function call responses within the prompt skill and applies exclusively to web and digital channels that support text messaging.

**Key highlights:**

*   **Function call–specific outros:** Outros are triggered only for function call responses, not direct language model responses.
    
*   **Support for multiple formats:** Outros can include `text`, `adaptive cards`, and `quick reply` messages.
    
*   **Context-aware outros:** Details from invoked functions, including function name and arguments, are stored in the context, allowing conditional outro display through response filters.
    
*   **Conditional logic:** JavaScript templating and storage variables can be used to dynamically control the display of the outro, supporting use cases such as error handling or personalized messaging.
    
*   **Multiple outros for different functions:** Developers can configure distinct outros for different tool functions based on defined criteria.
    

How to create an outro

To create an outro, follow these steps:

1.  **As a prerequisite, create a custom response filter:**
    
    *   Navigate to **Settings** and create a custom response filter.
        
    *   The executed tool function information will be available in the context.
        
    *   Refer to the [Response filters](https://docs.avaamo.com/user-guide/how-to/build-agents/configure-agents/add-response-filters) documentation for guidance on creating a custom response filter.
        
    
    **Example:**
    
2.  **Add the outro response:**
    
    *   Go to the **Skill** page and click **Outro**.
        
    *   Add your desired outro response and attach the response filter created in step 1.
        
    

Once the agent executes the tool function (e.g., `bookFlight`), the outro evaluation is triggered. Based on the defined criteria in the response filter, the appropriate outro message is selected and sent to the user.

## 

**4\. Quick reply support in welcome message**

This release adds support for `quick replies` in the welcome message, enabling AI agents to present predefined response options when greeting a user. Previously, welcome messages were supported only in card and text messages.

This enhancement improves user experience by guiding conversations from the start, allowing faster interactions and helping users navigate to relevant actions without typing complete responses.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/29-sep-2025-9.0.4

This release introduces **enhancements to the Knowledge skill (Beta)** for seamless data integration, adds an **Auto Call Forward feature** for advanced error handling in AI agents, and improves **intent resolution in LLaMB** to automatically manage ambiguous queries across multiple skills.

## 

1\. Enhancements to the Knowledge skill (Beta)

> This feature is currently in beta and intended for testing; feedback is appreciated.

**Note:** If a company has enabled DataSync properties, all newly created Knowledge Skills will point to the DataSync UI instead of LLaMB.

The **Knowledge skill** is designed to empower AI agents by seamlessly integrating and processing information from various content sources, including documentation, product guides, FAQs, and enterprise systems. With this capability, the agent can deliver accurate, context-aware responses grounded in the most up-to-date information.

*   In the **Agent** page, navigate to the **Skills** option in the left navigation menu and click **Add skill**.
    
*   In the **Skill builder** page, select **Knowledge skill**.
    

*   Now you can select the content source and ingest your documents
    

#### 

Key highlights of Knowledge Skill

Knowledge Skill builds on the DataSync foundation, carrying forward all its capabilities—such as content integration, synchronization, execution history, error handling, scalability, and more. In addition, it introduces two important differentiators:

1.  **Lifecycle awareness of agents:** Documents ingested in earlier stages of an AI agent remain available in later stages when the agent is pulled or promoted. This ensures continuity and consistency across the agent’s lifecycle.
    
2.  **Flat knowledge structure:** Unlike LLaMB, which relied on document groups, Knowledge Skill ingests all articles into a single unified skill, simplifying organization and retrieval.
    

The Knowledge skill lays the foundation for creating intelligent, self-sufficient AI agents that scale support, reduce manual intervention, and enhance the quality of information delivered to end users.

## 

2\. Auto Call Forward feature

This feature enhances error handling and fallback management within the AI agent. It allows developers to define a custom error handler that dynamically forwards requests when an OpenAI error occurs.

Enhanced to support dynamic values in Forward Headers, allowing the use of storage variables or JavaScript blocks for scenarios such as passing the called phone number.

You can use the **Auto Call Forward** feature by adding custom JavaScript code in the Error Handler to handle the following situations:

1.  **Call forwarding:** When the system fails, forward the call to a specific number defined in the Error Handler.
    
2.  **Call hang-up:** When the system fails, gracefully disconnect the call by specifying a return message.
    
3.  **Text-based bot:** If the bot is text-based, you can also discontinue the session with a custom message.
    

**Key capabilities include:**

*   **Custom error handling:** OpenAI errors can be captured and managed through a developer-defined error handler.
    
*   **Dynamic forwarding**: When an error occurs, requests can be redirected dynamically to ensure continuity.
    
*   **Tool function validation:** If a tool function does not return a value, a JavaScript error is created, along with clear instructions about the failure.
    

## 

**3\. Ambiguous intent resolution in LLaMB**

Enhanced intent handling to resolve ambiguity when a user query matches multiple LLaMB skills automatically. Instead of prompting the user to manually select a skill on the dashboard, LLaMB now resolves the match internally.

#### 

Key highlights

*   **Effective with multiple skills:** Beneficial when multiple skills are already created to manage different types of content sources or to separate stages of content (e.g., common skills across dev, stage, and prod environments).

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/15-sep-2025-9.0.3

This release brings key enhancements to AI Agents, including greeting message support, Markdown rendering, multiple TTS options, and streamlined UI. It also adds file upload and outreach capabilities

## 

1\. **Greeting message support for AI Agents**

Introduced a new option to configure greeting messages for AI Agents in web, MS Teams, iOS, and Android channels. The greeting skill supports text or card messages, displayed at the start of a conversation.

**Note:**

1.  When configuring a welcome message, consider its purpose, cost, and limitations.
    
    *   **Limitation:** The number of concurrent user engagements with the LLM connection is limited.
        
    *   **Cost:** If a connection is opened for a greeting message, charges may be incurred even if the user does not send a message or continue the conversation.
        
    

**To add a greeting message to the agent**:

*   In the `Agent > Skills` page, click `Welcome message`.
    
*   In the `Welcome message` pop-up, customize the message as needed, and click **OK**. You can include either text, a card, or both, but only one card can be added at a time.
    

## 

**2\. Added native Markdown support for web chat**

The web chat channel now supports native Markdown rendering across all UI components, including messages, cards, and quick replies. This ensures consistent display of LLM responses while preserving Mercury’s typing animation and streaming experience.

## 

**3\. Added support for multiple TTS providers**

The platform now supports various Text-to-Speech providers, including `Piper`, `ElevenLabs`, and `Google`. This gives flexibility to choose the preferred provider for generating high-quality voice output.

Go to the Skill page, open `Advanced Settings`, then click the `Voice Persona` dropdown and select the desired option.

## 

**4\. Configurable TTS provider and voice selection**

Users can now set the TTS provider and voice directly in functions. Use the syntax `TTS.setVoice('provider', 'voice-id');` to configure.

_Example:_

Go to the Skill page and open `Functions`. You can create a new function and add its declaration and definition.

For example:

## 

5\. Removed unsupported UI elements for AI Agents

Unsupported UI elements have been removed from instances to ensure a cleaner interface and improved usability for AI Agents.

**Configuration**

1.  Channels: Channels other than SIP, C-IVR, Web/Android/iOS, and MS Teams
    
2.  Dictionaries
    
3.  Entity Types
    

**Settings**

1.  Returning User Handler,
    
2.  None of these handler (Disambiguation),
    
3.  Call Hangup Handler,
    
4.  Max question repeat count,
    
5.  Advanced features,
    
6.  Persona,
    
7.  System messages
    

**Learning**

User feedback

## 

6\. Web channel: File upload via input cards

AI Agents now support file uploads through input cards in the Web channel, enabling users to attach and share files directly during conversations.

**How to use:**

1.  Create the upload card in the AI Agent flow using functions.
    
2.  Execute the function to display the card in the Web channel.
    
3.  When a user uploads and submits the card, the LLM receives `#avm-card-submitted`. The prompt must include a section to handle `#avm-card-submitted` and invoke a separate function that accesses the uploaded file through `context.last_message`.
    
4.  View the uploaded file later as needed. Refer to the [File upload](https://docs.avaamo.com/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload), for detailed instructions on viewing uploaded documents.
    

## 

**7\. Microsoft Teams: File upload support for AI Agents**

AI Agents in Microsoft Teams now support file uploads. Users can click the **+** icon and select **Attach file** to upload documents directly within the Teams channel.

## 

**8\. Microsoft Teams: Outreach support for AI Agents**

AI Agents now integrate with Outreach in Microsoft Teams, enabling agents to send proactive messages and engage users directly within Teams channels.

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/30-aug-2025-9.0.2

We’re excited to announce three significant enhancements in this release focused on outreach support, advanced TTS models, and dynamic barge-in control.

## 

1\. Outreach Support for AI Agents

AI Agents can now be embedded into **outreach voice campaigns** for two-way engagement.

*   **Use Cases:** Appointment scheduling, service reminders, and more.
    
*   **How It Works:** Connection to the agent is established only after the first user response, ensuring natural and context-driven conversations.
    
*   **Implementation:**
    
    *   Click on the voice template in the **Templates** page to open the template in edit mode. Edit the required details and click **Update**.
        
    *   Add these templates to campaigns via the Campaign Builder after selecting the relevant AI Agent.
        
    *   Developers can leverage `context.campaignDetail` to capture campaign context within the prompt.
        
    

Note: Outreach capacity depends on client-specific concurrent call quotas, which can be expanded as needed.

## 

2\. Avaamo TTS Model Deployment

We’ve expanded the voice quality and personalization capabilities in AI Agents:

*   Added Google TTS and Avaamo proprietary TTS models alongside OpenAI voices.
    
*   tts\_props:
    

`{"voice": "en-US-Chirp-HD-D", "model": "google"}`

`{"voice": "Heart", "model": "oneshot-avaamo-tts" }`

*   Improved handling of long-format inputs (like phone numbers).
    
*   Set up available under Advanced Settings.
    

Future roadmap: Inclusion of full voice libraries across Google, OpenAI, and ElevenLabs.

## 

3\. Dynamic Barge-In Control

Agents now support the dynamic enablement or disablement of barge-in to optimize conversational flow.

*   **Recommendation:** Keep barge-in disabled by default, but enable it for long enumerations (appointments, medication lists, doctors, etc.).
    
*   **Configuration Options:**
    

**Agent Level (Advanced Settings):** `enable_barge_in: true/false`

**JavaScript Level:** `AsrModel.setConfig({"enable_barge_in": true/false});`

---

## Source: https://docs.avaamo.com/user-guide/internal-release-notes/internal-release-notes/15-aug-2025-9.0.1.1

We’re making steady, practical updates so our AI Agents continue to improve at handling demos, customer go-lives, and day-to-day operations where reliability truly matters.

## 

1\. Voice Quality & Personalization

Making conversations sound more human, branded, and engaging.

*   **Audio Upsampling** All AI Agents in CIVR now process and output audio at higher fidelity, reducing tinny or robotic tones. Enhanced audio quality for improved speech recognition accuracy.
    
*   **New Voice Personas: Fable, Nova, and Onyx** Expanded voice options enable organizations to select voices that best align with their brand persona. This enhances the customer experience by establishing a consistent, recognizable “voice” for the AI Agent.
    
    
    
*   **Internal: TTS Persona Control** Early capability to fine-tune the tone, pitch, and delivery style (pronunciation) of responses within prompt skills. This helps create voices that are empathetic, authoritative, or friendly, depending on the interaction context.
    
    
    

*   **Call Recording Voice Clarity** Eliminated mixed/overlapping voice artifacts in C-IVR recordings, ensuring quality archives for audits & debugging
    

## 

2\. Accuracy & Conversation Flow Control

Giving agents the precision and patience to capture every detail.

*   **CONTINUE Keyword for Turn-Taking** Allows the AI to pause and wait for complete information before responding, for example, capturing an entire 10-digit phone number without interruption. This improves accuracy in long-form inputs like phone numbers, SSNs, etc.
    

*   **Improved Idle Flow Logic** Increased idle detection threshold from 6s to 7.5s for more natural pacing, introduced varied “nudge” phrases to avoid repetition, and added auto-hangup after three idles (configurable). This prevents loops and frees up agent capacity.
    

## 

3\. Stability & Failover Resilience

Ensuring calls and demos stay on track, even in the face of technical hiccups.

*   **OpenAI/Azure Infrastructure Switch** A simple toggle in the Admin Console allows instant switching between providers during outages, keeping live systems available with minimal disruption.
    
*   **Automatic Call Forward on System Failure** If CIVR/SIP channels encounter an error, calls are automatically redirected to a configured backup number, preserving service continuity for users.
    
    
    

## 

4\. ASR (Automatic Speech Recognition) Enhancements

Capturing every word with higher accuracy and flexibility.

*   Company-Level ASR Prompt Configuration Centralized control of ASR behavior per organization ensures consistent speech handling across all deployed agents. The platform currently handles this.
    
*   Enhanced accuracy: Reduced hallucinations compared to previous ASR versions.
    

## 

5\. Call Experience Improvements

Delivering a seamless, interruption-free conversation for end users.

*   **Message Completion Guarantee** Fixed scenarios where messages were cut off before hangup or call forwarding — ensuring users hear complete responses.
    
*   **Long DTMF Stability** Added support for multi-digit DTMF input.
    

## 

6\. Developer Tools – Sessions API for SIP Vendors

A minimal-metadata approach to maintain rich context across calls.

The Avaamo Session API enables SIP-based contact centers to pass just an X-SESSION-ID (and optionally, a phone number) in SIP headers, while securely storing and retrieving the full session context and transcripts through Avaamo. For more details, please check this document: [Vonage - Avaamo Session API for SIP Integration](https://docs.google.com/document/d/1Kd5oAsJYg0iqHhIHcUs77qmLqJ6O3oKQZm0uCwrSorI/edit?tab=t.0)

---
