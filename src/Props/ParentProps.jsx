import React from 'react'
import ChildProps from './ChildProps'

const student = [{
  name: 'John Doe',
  age: 20,
  city: 'New York'
}, {
  name: 'Jane Smith',
  age: 22,
  city: 'Los Angeles'
}];


const ParentProps = () => {
  return (
    <div>
        <ChildProps student={student} />
    </div>
  )
}

export default ParentProps