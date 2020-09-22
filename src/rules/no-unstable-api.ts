import { Rule } from 'eslint';
import { Node } from 'estree';

export const messages = {
    usedBetaRestApi: 'Avoid using the V3 Jira Rest API as it\'s in beta',
};

const rule: Rule.RuleModule = {
    meta: {
        type: 'problem',
        messages,
    },
    create: (ctx) => ({
        // As far as I can tell esquery doesn't support escaping
        // forward-slashes in attribute regex matchers, hence technically
        // matching any path delimiter as opposed to only forward-slashes
        'Literal[value=/rest.api.3/]': (node: Node) => ctx.report({
            node,
            messageId: 'usedBetaRestApi',
        }),
    }),
};

export default rule;

