import React from 'react'
import { useParams } from 'react-router-dom';

const TrackOrder: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      track Order: { id }
    </div>
  )
}

export default TrackOrder
