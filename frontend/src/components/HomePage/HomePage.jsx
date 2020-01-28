import React from 'react';
import { Placeholder, Segment } from 'semantic-ui-react'

export const HomePage = (props) => {
  return (
    <Segment inverted>
      <Placeholder inverted>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  )
};