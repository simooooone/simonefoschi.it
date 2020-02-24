import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostCode = ({language, children}) => (
  <SyntaxHighlighter
    style={ghcolors}
    language={language}>
    {children}
  </SyntaxHighlighter>
);

export default PostCode;