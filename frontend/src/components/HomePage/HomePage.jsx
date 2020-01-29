import React from 'react';
import { Dimmer, Loader, Image, Segment, Placeholder, Card, Icon } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks';
import { GET_LINKS } from './query';

export const HomePage = (props) => {
  const { data, loading, error } = useQuery(GET_LINKS);

  const ready = !loading && !error;
  
  return (
    <>
      {!ready
        ? (
          <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
      
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        )
        : data.links.map(link => (
          <Card key={link.id}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Link</Card.Header>
              <Card.Meta>
                <span className='date'>{link.createdAt}</span>
              </Card.Meta>
              <Card.Description>
                {link.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {link.url}
              </a>
            </Card.Content>
          </Card>
        ))
      }
    </>
  )
};