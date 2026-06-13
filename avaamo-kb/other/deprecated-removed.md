# Deprecated & Removed Features
> 4 pages

---

## Source: https://docs.avaamo.com/user-guide/deprecated-and-removed-features/v9.1.0-deprecated-features

This page contains the features that have been deprecated in the `v9.1.0` release.

See [Release life cycle](/user-guide/about-releases/release-life-cycle), for more information on what deprecated features mean.

## 

Deprecated features

Continuously evaluating product capabilities, Avaamo consistently works towards enhancing overall customer value by upgrading older features with significantly improved alternatives.

This section lists features and capabilities marked as deprecated with the `v9.1.0` release. Generally, features planned for removal in a future release are set to deprecated first, with an alternative provided.

Customers are advised to review if they use the feature/capability in their current use cases and plan to change their implementation to use the alternative provided.

Area

Feature

Alternative

[Add tags (JS)](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/add-tags-js)

The `Tag.append` method is now **deprecated**

Developers should use `**Tag.asyncAppend**`,

Use the example below:

Copy

    await(Tag.asyncAppend('order'));
    
    return [{
        "list_view": {
            "top_element_style": "compact",
            "items": [{
                    "title": "Coke",
                    "subtitle": "All Chilled",
                    "links": [{
                        "type": "post_message",
                        "title": "Get a pack of 5",
                        "value": "coke"
                    }]
                },
                {
                    "title": "Coffee",
                    "subtitle": "Cold",
                    "links": [{
                        "type": "post_message",
                        "title": "Buy one get one",
                        "value": "coffee"
                    }]
                }
            ]
        }
    }];

---

## Source: https://docs.avaamo.com/user-guide/deprecated-and-removed-features/v9.0.0-deprecated-features

This page contains the features that have been deprecated in the `v9.0.0` release.

See [Release life cycle](/user-guide/about-releases/release-life-cycle), for more information on what deprecated features mean.

## 

Deprecated features

Continuously evaluating product capabilities, Avaamo consistently works towards enhancing overall customer value by upgrading older features with significantly improved alternatives.

This section lists features and capabilities marked as deprecated with the `v9.0.0` release. Generally, features planned for removal in a future release are set to deprecated first, with an alternative provided.

Customers are advised to review if they use the feature/capability in their current use cases and plan to change their implementation to use the alternative provided.

Area

Feature

Alternative

[Content ingestion APIs](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis)

`HTML content via upload-web` is deprecated. Refer [Upload HTML to LLaMB](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-document-html-url-to-llamb), for more information.

You can use HTML file upload API. Refer [Upload HTML files to LLaMB](/user-guide/llamb/llamb-rest-apis/content-ingestion-apis#upload-different-types-of-files-pdf-docx-pptx-xlsx-csv-html-to-llamb), for more information

---

## Source: https://docs.avaamo.com/user-guide/deprecated-and-removed-features/v8.2.0-deprecated-features

This page contains the features that have been deprecated in the `v8.2.0` release.

See [Release life cycle](/user-guide/about-releases/release-life-cycle), for more information on what deprecated features mean.

## 

Deprecated features

Continuously evaluating product capabilities, Avaamo consistently works towards enhancing overall customer value by upgrading older features with significantly improved alternatives.

This section lists features and capabilities marked as deprecated with the `v8.2.0` release. Generally, features planned for removal in a future release are set to deprecated first, with an alternative provided.

Customers are advised to review if they use the feature/capability in their current use cases and plan to change their implementation to use the alternative provided.

Area

Feature

Alternative

Build skills > Upload Files

[Files API](/user-guide/how-to/build-skills/create-skill/customize-your-skill/how-to/build-dynamic-skill-response/card/file-upload#access-the-uploaded-file-and-send-an-email) https://cx.avaamo.com/files/<<files.uuid>>

You can use `context.last_message.<<uuid>>.url`to access the uploaded file. Refer to the below mentioned sample JS.

Add the following sample JS to access the uploaded file and send it as an email attachment:

Copy

    var access_token = "UoF4VLjeq9uH0dzki3-79gclgRpf8hr9"; // agent access Token
    var url=context.last_message.<<uuid>>.url;
    // here, uuid is the secure random uuid provided at the time of upload. 
    // See File upload syntax for more information
    try {
        var file_content = await (fetch(url).then(res => res.buffer()));
        var email_sender = await (Email.send({
            to: ["John@avaamo.com"],
            from: ["admin@macpizza.com"],
            subject: "Your Pizza Order",
            body: "Here, is the pic of your pizza baking right now!!! Enjoy.",
            attachments: [{
                filename: context.last_message.<<uuid>.name,
                content: file_content
            }]
        }));
        if (email_sender.status == 'SUCCESS') {
            return "Email Sent";
        } else {
            return "Failed to send email. Kindly try again later.";
        }
    } catch (error) {
        return "Sorry, something unexpected happened when processing your request. Please try again later.";
    }

---

## Source: https://docs.avaamo.com/user-guide/deprecated-and-removed-features/atlas-8-deprecated-and-removed-features

This page contains a list of all the features that have been deprecated and removed in the `Atlas 8` release.

See [Release life cycle](/user-guide/about-releases/release-life-cycle), for more information on what deprecated and removed features mean.

### 

Deprecated features

Continuously evaluating product capabilities, Avaamo consistently works towards enhancing overall customer value by upgrading older features with significantly improved alternatives.

This section lists features and capabilities marked as deprecated with the `Atlas 8` release. Generally, features planned for removal in a future release are set to deprecated first, with an alternative provided.

Customers are advised to review if they use the feature/capability in their current use cases and make plans to change their implementation to use the alternative provided.

Area

Feature

Alternative

Skills

[Answers](/user-guide/how-to/build-skills/create-skill/using-avaamo-answers-1)

[LLaMB](/user-guide/recent-releases/release-notes-v8.0/introducing-llamb) - a full stack, low code toolset to build, deploy, and maintain LLM ([Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)) applications at enterprise scale.

Contact your dedicated Customer Success Manager for more information on licensing.

Learning

[Query Analyzer](/user-guide/how-to/build-agents/learning-continuous-improvement/query-analyzer-deprecated)

Collaborate with your dedicated platform delivery team in managing this functionality.

Learning

[Agent Diagnostics](/user-guide/how-to/build-agents/learning-continuous-improvement/agent-diagnostics-deprecated)

Collaborate with your dedicated platform delivery team in managing this functionality.

### 

Removed features

This section lists features and capabilities that have been removed in the `Atlas 8` release. Prior releases had these capabilities marked as deprecated.

Area

Feature

Agent Chat transcript export

Conversation ID column

Analytics APIs

from\_date, to\_date, UTC\_offset query parameters from the following APIs:

*   [Successful messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/successful-messages)
    
*   [User sessions](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/user-sessions)
    
*   [Messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/messages)
    
*   [Unhandled messages](/user-guide/ref/avaamo-platform-api-documentation/analytics-api/unhandled-messages)

---
