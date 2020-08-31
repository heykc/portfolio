import React from 'react';
import WorkItem from '../components/work-item';

export default function Work () {


  React.useEffect(() => {
    
  }, [])

  return (
    <div className={"container lg row c"}>
      <div style={{marginTop: '6rem'}}></div>
      <WorkItem color="blue"/>
      <WorkItem color="gold" isFocused rev/>
      <WorkItem color="red"/>
      <WorkItem color="green" rev/>
    </div>
  )
}