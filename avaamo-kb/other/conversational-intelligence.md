# Conversational Intelligence (CI)
> 6 pages

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/overview

Conversational Intelligence (CI) is an advanced analytics layer designed to help teams deeply understand, measure, and improve conversations across digital and voice channels. As conversational AI systems grow in complexity, CI acts as the intelligence backbone that continuously analyzes interactions, surfaces insights, and enables data-driven optimization of agents and customer experiences.

It sits on top of existing **classic agents, AI agents, and the Agent Copilot product**, running seamlessly across different customer instances.

By analyzing complete conversations, rather than isolated steps or predefined paths, CI enables teams to understand user behavior, measure performance, and continuously improve conversational experiences. By combining conversation data, metadata, and AI-driven analysis, CI transforms raw conversations into meaningful signals that `product owners`, `bot developers`, and `business teams` can act upon.

### 

How CI works

#### 

1\. Conversation ingestion and synchronization

CI runs daily synchronization jobs to ingest conversation data from all onboarded agents and channels. This includes:

*   Complete transcripts
    
*   Call/session metadata
    
*   Channel and agent context
    

#### 

2\. Intelligent analysis

Once ingested, CI applies multiple layers of analysis:

*   Intent and topic detection
    
*   Success and failure classification
    
*   Error categorization (for example, service errors or external dependency failures)
    
*   Trend and volume analysis over time
    

#### 

3\. Insight generation and structuring

The analyzed data is transformed into structured analytics, which powers:

*   Dashboards and charts
    
*   Query-level insights
    
*   Conversational “chat with data” experiences
    

#### 

4\. Conversational access to insights

CI provides relevant insights, making analytics accessible to even non-technical stakeholders. Users can ask natural-language questions such as:

*   “What are the top user issues this week?”
    
*   “Why are users dropping off in voice flows?”
    
*   “Which intents have the highest failure rate?”
    

### 

Why CI is better than the old “Tags” system

The legacy “tags” approach relied heavily on pre-defined conversation trees and rule-based logic. This made it unsuitable for modern AI-driven conversations.

**Key differences:**

Feature

Old “Tags” system analytic

Conversational Intelligence (CI)

Analysis scope

Focused on individual conversation branches

Analyzes the entire conversation using AI

Classic agents

Tags could be incorrect if users navigated to the wrong branch

Understands intent and context even with navigation errors

AI agents

Largely ineffective due to lack of fixed flows

Designed specifically for free-form, AI-driven conversations

Method

Rule-based, dependent on flow logic

AI-driven analysis of language, intent, and sentiment

Centralization

Custom dashboards per bot (Looker, Metabase, etc.)

Centralized infrastructure supporting all bots and use cases

The earlier approach was effective for structured conversation flows, but had limitations when user interactions became more dynamic. CI builds on this by analyzing conversations holistically, enabling accurate, reliable insights for modern AI-driven agent interactions.

### 

Key features of Conversational Intelligence

#### 

Chat with data

CI allows users to interact with analytics in a conversational way. Instead of navigating complex dashboards, users can simply ask questions and receive insights instantly.

#### 

Charts and visual analytics

CI provides visual representations of conversation trends, performance metrics, and usage patterns to support quick analysis and reporting.

#### 

Date-based filtering

All insights can be filtered by date range, enabling:

*   Weekly or monthly performance analysis
    
*   Before-and-after comparisons
    
*   Trend tracking over time
    

#### 

Weekly insight emails

Automated weekly summaries provide stakeholders with a snapshot of key metrics and emerging trends without requiring manual analysis.

#### 

Centralized analytics platform

CI replaces fragmented, custom-built dashboards with a single, centralized analytics layer that works across:

*   Classic agents
    
*   AI agents
    
*   Voice and IVR agents
    
*   Agent Copilot

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/before-you-begin

### 

Onboarding process

To onboard an agent to CI:

1.  `Raise a support ticket` before UAT begins for any new Classic or AI agent going live.
    
2.  The Support team shares an `onboarding form` via the ticket.
    
3.  Fills in the required details and submits the form.
    
4.  An `ETA for onboarding` is communicated after form submission.
    

This ensures all required data pipelines and configurations are in place before the agent goes live.

### 

Access CI

Once onboarding is complete:

*   CI is accessible to all users of the company through the `Conversational Intelligence` button in the Agent Studio header
    

*   Users can also directly visit [ci.avaamo.com](https://ci.avaamo.com) and log in using their company email ID

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/getting-started

The Conversational Intelligence (CI) interface is designed to help users intuitively explore conversational data, combining navigation-based insights with a conversational, chat-driven analytics experience. The UI is divided into three main areas:

1.  [Header section](/user-guide/conversational-intelligence-ci/getting-started#header-section)
    
2.  [Left navigation panel](/user-guide/conversational-intelligence-ci/getting-started#left-navigation-panel)
    
3.  [Main workspace](/user-guide/conversational-intelligence-ci/getting-started#main-workspace-chat-with-data)
    

## 

Header section

The header provides global context and controls for the CI experience.

*   **Agent dropdown:** Allows users to switch between different agents onboarded to CI. All analytics and insights shown are scoped to the selected agent.
    
*   **Account name:** Displays the logged-in user and the organization context under which CI is accessed.
    

## 

Left navigation panel

The left panel acts as the `primary navigation` for CI features and analytics use cases. All options in the left navigation panel are clickable analytics prompts.

When a user clicks any option:

*   CI automatically asks a predefined analytical question in the chat
    
*   The system then generates answers using the same conversational AI engine
    
*   Results are displayed directly in the main chat workspace
    

This ensures a `consistent analysis experience`, regardless of whether the user types a question manually or selects one from the navigation.

#### 

1\. Operational metrics

This section is typically used by operations and support teams. Provides access to day-to-day operational performance indicators, such as:

*   One-click summary
    
*   Use case breakdown
    

#### 

2\. MyChart Support Agent

This helps teams evaluate how a particular assistant is performing in real user interactions. An agent-specific analytics section focused on:

*   Performance and behavior of the MyChart Support Agent
    
*   Use-case-specific insights tied to this agent
    

#### 

3\. Continuous improvement

This section is focused on optimization and experience improvement, enabling teams to identify gaps and opportunities.

**Out of scope analysis**

*   Identifies conversations or queries that fall outside the agent’s supported scope
    
*   Helps teams understand what users are asking that the agent is not designed or trained to handle
    
*   Useful for deciding future intent expansion or knowledge additions
    

**Increase self-service rate**

*   Highlights opportunities where conversations could be better handled by the agent
    
*   Helps reduce handoffs to live agents
    
*   Supports initiatives aimed at improving containment and automation rates
    

#### 

4\. Trends

This section is typically used for strategic and long-term analysis. Provides access to trend-based analytics, such as:

*   Requests Received Trend
    
*   Overall Performance Trend
    
*   Reset Password Performance Trend
    
*   Account Activation Performance Trend
    

## 

Main workspace (chat with data)

The main workspace is the core interaction area of CI.

*   **Chat input field:** Allows users to ask natural-language questions such as:
    
    *   “What were the top issues last week?”
        
    *   “Why are users dropping off?”
        
    *   “Which intents failed the most?”
        
    
*   **Date filter:** Controls the time window for all insights returned in the chat and analytics.
    
    *   Enables week-over-week, custom range, or historical analysis.
        
    
*   **New Chat button:** Starts a fresh analytics conversation.
    
    *   Useful when switching topics, changing analytical focus, or resetting context.
        
    
*   **Arrow (send) icon:** Submits the user’s query to CI for analysis.

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/analyzing-generated-answers-in-ci

Every answer generated by Conversational Intelligence (CI) follows a consistent and structured layout. This ensures insights are easy to understand, validate, and explore further.

Each response is presented in the following order:

1.  [Summary of the response](/user-guide/conversational-intelligence-ci/analyzing-generated-answers-in-ci#summary-of-the-response)
    
2.  [Visualise](/user-guide/conversational-intelligence-ci/analyzing-generated-answers-in-ci#visualise)
    
3.  [View data](/user-guide/conversational-intelligence-ci/analyzing-generated-answers-in-ci#view-data)
    

## 

Summary of the response

At the top of every generated answer, CI provides a `concise textual summary`. This summary acts as the narrative explanation for the insight.

*   Highlights the key insight or conclusion
    
*   Provides quick context before deeper analysis
    
*   Enables users to understand the outcome at a glance without reviewing charts or raw data
    

## 

Visualise

This section presents graphical representations of the data used to generate the response.

#### 

Multiple visualisation options

*   Depending on the nature of the answer, CI may provide `multiple visualisation types`
    
*   Visualisations are organized into `tabs`, with each tab offering a different analytical view of the data
    
*   Users can switch between tabs to compare trends, distributions, or breakdowns
    

#### 

Interactive charts

All visualisations in CI are interactive:

*   `Zoom in and zoom out` by scrolling over the chart to focus on specific data ranges
    
*   `Hover over chart elements` to view detailed values and additional context
    
*   Interactions allow users to explore data dynamically without regenerating the response
    

This makes it easy to move from high-level insights to detailed analysis.

## 

View data

The `View data` option allows users to inspect the underlying dataset that generated the insight. View data ensures transparency by clearly showing how each insight is derived.

*   Displays the complete data in a `tabular format`
    
*   Enables users to:
    
    *   Validate the generated insight
        
    *   Review conversation-level or aggregated data
        
    *   Perform deeper, manual analysis when required

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/ci-rest-apis

[Session reports API](/user-guide/conversational-intelligence-ci/ci-rest-apis/session-reports-api)

---

## Source: https://docs.avaamo.com/user-guide/conversational-intelligence-ci/ci-rest-apis/session-reports-api

This API allows external partners to authenticate and retrieve session-level reports for a specific agent. It follows a secure token-based authentication model and supports pagination, sorting, and filtering.

The API uses a two-step authentication process:

1.  **Authenticate**: Exchange your `external access token` for a JWT.
    
2.  **Get session reports**: Use the JWT to authorize subsequent API requests.
    

## 

Authenticate

Generates a JWT token required for accessing protected endpoints.

`POST` `https://ci.avaamo.com/external/v1/authenticate`

#### 

Headers

Name

Type

Description

Authorization\*

String

Bearer `<external_access_token>`

Contact Avaamo support to get `external_access_token` of the bot, which you need to get the report

content-type

String

application/JSON

400: Bad request

200: OK Successful request

Authorization header missing or invalid

Copy

    {
        "token": "eyJhbGxxxxxx.eyJhZ2VuxxxxxxxxxxxLWE5NmItOTJlMzZlZDE1NWRiIiwiaWF0IjoxNzc1MDM2MjczLCJleHAiOjE3NzUxMjI2NzN9.xxxxxxxxxxxxxxxjLv5GeLVDDCr87YFJjmM",
        "token_type": "Bearer",
        "expires_in": 86400,
        "expires_at": "2026-04-02T09:37:53Z",
        "agent_uuid": "8e30fxxx-xxxx-xxxx-xxxx-xxx36ed155db"
    }

### 

Code request snippets

cURL

node.JS

Copy

    curl -X POST "https://ci.avaamo.com/external/v1/authenticate" \
      -H "Authorization: Bearer <EXTERNAL_ACCESS_TOKEN>"

Copy

    const url = "https://ci.avaamo.com/external/v1/authenticate";
    
    async function authenticate() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": "Bearer <EXTERNAL_ACCESS_TOKEN>"
          }
        });
    
        const data = await response.json();
        console.log("JWT Response:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    authenticate();

### 

Response attributes

The following is a sample API response:

#### 

Response Body

Attribute

Description

Type

`token`

JWT used to authenticate subsequent API requests.

string

`token_type`

Type of token returned. Always `Bearer`.

string

`expires_in`

Token validity duration in seconds (24 hours).

integer

`expires_at`

Token expiry timestamp in UTC (ISO 8601 format).

string

`agent_uuid`

Unique identifier of the agent associated with the token.

string

## 

**Get session reports**

Retrieves paginated session reports for the authenticated agent.

`GET` `https://ci.avaamo.com/external/v1/session-reports`

#### 

Headers

Name

Type

Description

Authorization\*

String

Bearer `<jwt>`.

`<jwt>` : token obtained from the above results.

content-type

String

application/JSON

#### 

Request Body

Name

Type

Description

start\_date\*

string

The start date for fetching session reports. Use the format `YYYY-MM-DD`.

end\_date\*

string

The end date for fetching session reports. Use the format `YYYY-MM-DD`.

page

integer

The page number for paginated results. Defaults to `1`.

per\_page

integer

The number of records to return per page. Defaults to `20`. Maximum allowed value is `100`.

sort

string

The field used to sort the results. Supported values are `timestamp` and `duration`. Defaults to `timestamp`.

order

string

The sorting order of results. Supported values are `asc` and `desc`. Defaults to `desc`.

agent\_uuid

string

The unique identifier of the agent. If provided, it must match the `agent_uuid` present in the JWT token.

200: OK Successful request

### 

Code request snippets

cURL

node.JS

### 

Response attributes

The following is a sample API response

#### 

Response Body

Name

Type

Description

results

array

List of session report objects returned for the requested page.

results\[\].uuid

string

Unique identifier for the session report record.

results\[\].session\_id

string

Identifier for the session associated with the interaction.

results\[\].conversation\_uuid

string

Unique identifier for the conversation linked to the session.

results\[\].timestamp

string (ISO 8601)

Date and time when the session event occurred (in UTC).

results\[\].timezone

string

Timezone in which the session was recorded.

results\[\].duration

integer

Duration of the session in seconds.

results\[\].conversation\_history\_url

string

URL to access the full conversation history in the web interface.

results\[\].report

object

Contains detailed report data for the session (structure may vary).

count

integer

Total number of session records available for the given filters.

next

string

URL to fetch the next page of results. Returns `null` if no further pages are available.

previous

string

URL to fetch the previous page of results. Returns `null` if no previous page exists.

### 

Examples

The following table lists a few sample use cases for session reports:

Use case

Request payload

Step 1: Authenticate

Step 2: Fetch session reports

### 

Additional notes

*   JWT tokens expire after `24 hours`; re-authenticate when expired.
    
*   Ensure tokens are securely stored and never logged in plaintext.
    
*   Sorting by `duration` may impact performance for large datasets.

---
