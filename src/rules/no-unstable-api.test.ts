import { RuleTester } from 'eslint';
import rule, { messages, Message } from './no-unstable-api';

const suite = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

suite.run('no-unstable-api', rule, {
    valid: [
        { code: 'const x = 3' },
        { code: 'const x = "/x/rest/api/2/x"' },
        { code: 'const x = `/x/rest/api/2/x`' },
        { code: 'const x = `${"/x/rest/api/2/x"}`' },
        // Not currently supported/caught:
        { code: 'const x = "/rest/api" + "/3"' },
        { code: 'const x = `${"/rest/api"}${"/3"}`' },
    ],
    invalid: [
        { code: 'const x = "/x/rest/api/3/x"', errors: [messages[Message.UsedBetaRestApi]] },
        { code: 'const x = { "/x/rest/api/3/x": "x" }', errors: [messages[Message.UsedBetaRestApi]] },
        { code: 'const x = { "x": "/x/rest/api/3/x" }', errors: [messages[Message.UsedBetaRestApi]] },
        { code: 'const x = [{ xs: [{ "x": "/x/rest/api/3/x" }] }]', errors: [messages[Message.UsedBetaRestApi]] },
        { code: 'const x = `/x/rest/api/3/x`', errors: [messages[Message.UsedBetaRestApi]] },
        { code: 'const x = `${"/x/rest/api/3/x"}`', errors: [messages[Message.UsedBetaRestApi]] },
    ],
});

