# eslint-plugin-atlassian-webapis

Lints against harmful usage of Atlassian's web APIs, the scope of which currently extends to its [REST APIs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/) and [JS API](https://developer.atlassian.com/cloud/jira/platform/about-the-javascript-api/).

## Installation

The plugin is available on the npm registry under the same package name: [eslint-plugin-atlassian-webapis](https://www.npmjs.com/package/eslint-plugin-atlassian-webapis)

ESLint is listed as a peer dependency.

Note that, as with other ESLint plugins, rules are prefixed with the plugin name (sans the `eslint-plugin-` prefix) as a form of namespacing. For example, to enable the `no-unstable-api` rule, you'd need to target `atlassian-webapis/no-unstable-api` in your config.

## Rules

At present, this plugin provides one rule:

- `no-unstable-api`: Disallow usage of unstable APIs.

