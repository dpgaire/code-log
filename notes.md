To get the UI code card, you can take the reference and use this libarary.

And youtube video reference.
https://www.youtube.com/watch?v=XxGMuoje1g0&ab_channel=CodeAProgram

https://www.npmjs.com/package/react-syntax-highlighter

How to use this.

Steps to follow.

1. Install the dependency.

npm install react-syntax-highlighter --save

2. How to use this.

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Component = () => {
const codeString = '(num) => num + 1';
return (
<SyntaxHighlighter language="javascript" style={docco}>
{codeString}
</SyntaxHighlighter>
);
};

3. Update header color: #38414E
4. Background color: #292C36
