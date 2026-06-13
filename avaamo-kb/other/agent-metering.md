# Agent Metering
> 3 pages

---

## Source: https://docs.avaamo.com/user-guide/agent-metering/overview

## 

Agent Metering

The `Agent Metering` module provides visibility into quota consumption and usage activity across all supported channels. It helps you monitor session usage in real time and configure proactive notifications to manage quotas effectively.

**Note:** To access this option, please contact Avaamo Support to have it enabled for your company.

Agent Metering includes two sections:

*   [Usage Overview](/user-guide/agent-metering/usage-overview)
    
*   [Notification Setup](/user-guide/agent-metering/notification-setup)
    

#### 

Benefits of Agent Metering

*   Real-time quota visibility
    
*   Channel-wise usage tracking
    
*   Trend analysis for planning
    
*   Session-level transparency
    
*   Proactive alert configuration

---

## Source: https://docs.avaamo.com/user-guide/agent-metering/usage-overview

The `Usage Overview` page displays the real-time status of your purchased quotas and usage across tracked channels, `Digital` and `Voice`.

#### 

**1\. Channel-wise session usage**

The dashboard displays separate cards for:

**Voice Session:** A Voice Session represents a single conversational call between a user and an AI Agent. It begins when the interaction is initiated and is counted per call, regardless of call duration.

**Digital Session:** A Digital Session represents a continuous messaging interaction between a user and an AI Agent. The session starts with the first user message or notification response and ends when one of the following occurs:

*   The user closes the chat
    
*   The conversation is terminated
    
*   The user remains inactive for more than 2 minutes
    

**Each card shows:**

*   Total sessions used
    
*   The usage trend is shown as a time-series graph. Hover over the graph to view the usage details for a specific day.
    

#### 

**2\. Usage over time**

Each channel includes a usage trend chart that shows session consumption over the selected date range. This visualization helps you identify usage spikes, overall trends, and peak activity periods.

You can:

*   By default, you can view usage across all agents. You can also search for specific agent names and select an agent to view usage details.
    

#### 

Date range

By default, the date range is a week (7 days) from the current date.

*   Click the date range to select different date options as needed.
    
*   You can also view the **Analytics** board for Yesterday, Today, Last 7 Days, Last 14 Days, Last 28 Days, Last 90 Days, and Last 180 Days.
    
*   Click **Custom range** to pick your own date range by selecting the start and end dates. You can view up to 6 months of data in the Analytics board.
    

#### 

**3\. Session Details**

The `Session Details` section provides granular visibility into individual sessions. This section helps with auditing, troubleshooting, and usage validation.

Field

Description

**Session ID**

Unique identifier for each session.

**Session Type**

Indicates whether the session is `Voice` or `Digital`.

**Date and Time**

Indicates when the session started.

**Session Segments**

Shows the total number of segments recorded for the session.

**Actions**

Provides the `View` option to open the conversation history for the selected session. You must have the appropriate agent permissions to access the conversation details.

Additionally, you can:

*   **Filter** sessions by session type.
    
*   **Search** for a specific session using the Session ID.
    
*   **Navigate** through pages to browse and review additional sessions.

---

## Source: https://docs.avaamo.com/user-guide/agent-metering/notification-setup

The `Notification Setup` section allows you to configure usage alerts for each tracked channel. This helps you proactively monitor quota consumption and avoid unexpected overages.

Each channel supports multiple notification rules. You can configure notifications independently for each channel:

*   [Voice Session Notification](/user-guide/agent-metering/notification-setup#voice-session-notification)
    
*   [Digital Session Notification](/user-guide/agent-metering/notification-setup#digital-session-notification)
    

### 

Voice session notification

Use this section to receive alerts when `voice session usage` reaches or exceeds a defined limit.

**To configure a voice notification:**

1.  In `Voice Session Notification`, click `Add New`**.**
    
2.  In the `Notify` field, enter one or more email addresses (comma-separated). You can configure up to `5 email addresses` per notification rule, separated by commas.
    
3.  In the threshold field, enter the `session count` at which you want to be notified (for example, `14000`).
    
4.  Click `Add` to save the rule.
    

Once added, an email notification is sent to the specified addresses when voice usage reaches or exceeds the configured value.

**Note:**

1.  You can create up to `5 notification rules` for each Voice and Digital session.
    
2.  The maximum usage threshold that can be set is `1,000,000,000 sessions.`
    
3.  Notifications are triggered `after` the configured `threshold is exceeded,` at a specific time of day.
    

You can remove a rule at any time using the `delete` option. You can use the `edit` option to add more email addresses or adjust the threshold value.

#### 

Example: Voice notification setup

Suppose your monthly voice quota is `20,000 sessions`. You may want to receive an alert when usage reaches `14,000 sessions` so you have enough time to take action.

In this case, configure:

*   **Notify:** `admin@example.com, ops@example.com`
    
*   **Threshold:** `14000`
    

This sends an email notification to both recipients when voice usage reaches or exceeds 14,000 sessions.

### 

Digital session notification

Use this section to configure alerts for digital session usage.

**To configure a digital notification:**

1.  In `Digital Session Notification`, click `Add New`.
    
2.  Enter one or more email addresses (comma-separated). You can configure up to `5 email addresses` per notification rule, separated by commas.
    
3.  Specify the `digital session count threshold` (for example, `22500`).
    
4.  Click `Add` to save. It displays a success message after the rule is saved successfully.
    

You receive an email notification when digital usage reaches or exceeds the configured limit.

**Note:**

1.  You can create up to `5 notification rules` for each Voice and Digital session.
    
2.  The maximum usage threshold that can be set is `1,000,000,000 sessions.`
    
3.  Notifications are triggered `after` the configured `threshold is exceeded,` at a specific time of day.
    

You can remove a rule at any time using the `delete` option. You can also use the `edit` option to add more email addresses or adjust the threshold value.

#### 

How it helps

*   Stay informed when usage approaches quota limits
    
*   Enable proactive planning before limits are reached
    
*   Prevent service disruption due to quota exhaustion
    

Notifications ensure that relevant stakeholders are alerted in advance when configured thresholds are met.

#### 

Key points

*   Notifications are configured per channel (Voice and Digital).
    
*   Multiple email recipients are supported.
    
*   Thresholds are defined using absolute session counts.
    
*   Alerts are triggered when usage reaches or exceeds the specified value.
    
*   You can add, edit, or remove notification rules at any time.
    

### 

Usage notification email

When a configured usage threshold is reached or exceeded, recipients receive an email notification from `Agent Metering Usage Notification`.

The notification email alerts you when session usage reaches configured thresholds and provides quick access to the Usage Dashboard. It helps teams take timely action to manage quotas and avoid service disruptions.

The notification email contains the following information:

*   **Usage summary Displays:**
    
    *   The configured `threshold value`
        
    *   The `current session usage count`
        
    *   The channel type (Digital or Voice)
        
    
*   **Call-to-action button:** An `Access Usage Dashboard` button that takes you directly to the Agent Metering dashboard for detailed insights.
    
*   **Recommended next steps:** A guidance section outlining possible actions, such as:
    
    *   Contacting support to increase capacity
        
    *   Reviewing usage trends and optimizing internally

---
