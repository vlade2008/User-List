import React from 'react'
import { Card } from 'semantic-ui-react'

export type Props = {
  filteredResults: any;
};


const UserCard = ({filteredResults} : Props) => {
  return (
    <Card.Group itemsPerRow={3}>
      {
        filteredResults.map((item: any, key: number) => {
          return (
            <Card key={key}>
              <Card.Content>
                <Card.Header>ID: {item.id}</Card.Header>
                <Card.Meta>Email: {item.email}</Card.Meta>
                <Card.Description>
                    Name: {item.name}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })
    }
    </Card.Group>
  )
};

export default UserCard;