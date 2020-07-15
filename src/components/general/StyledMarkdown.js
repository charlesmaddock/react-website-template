import React from "react"
import ReactMarkdown from "react-markdown"
// Custom

// Simple changes the markdown to fit our graphical profile better
export default ({ style, source }) => (
  <p style={{...style}}>
    <ReactMarkdown 
      style={{margin: 0}}
      source={source}
      renderers={{
        strong: props => (<b style={{fontWeight: 700}}>{props.children}</b>),
        root: props => (<p style={{fontWeight: 500, margin: 0}}>{props.children}</p>),
      }}
      disallowedTypes={['paragraph']}
      unwrapDisallowed
    />
  </p>
)