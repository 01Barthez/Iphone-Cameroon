import React from 'react'
import { useParams } from 'react-router-dom';

const TrackOrder: React.FC = () => {
  const { orderID } = useParams();

  return (
    <div>
      track Order: { orderID }
    </div>
  )
}

export default TrackOrder
