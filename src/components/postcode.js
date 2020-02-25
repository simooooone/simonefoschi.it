import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
//import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {solarizedDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const PostCode = ({language, children}) => (
  <SyntaxHighlighter
    style={solarizedDark}
    language={language}>
    {children}
  </SyntaxHighlighter>
);

export default PostCode;