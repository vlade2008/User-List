import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'ID: 2',
    meta:'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
  {
    header: 'ID: 2',
    meta: 'Email: Christian john saclao',
    description: 'Phone: 090202020202',
  },
]

const UserCard = () => <Card.Group itemsPerRow={3} items={items} />

export default UserCard