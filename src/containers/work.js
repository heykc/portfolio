import React from 'react';
import WorkItem from '../components/work-item';

export default function Work () {


  React.useEffect(() => {
    
  }, [])

  return (
    <div className={"container lg row c"}>
      <div style={{marginTop: '6rem'}}></div>
      <WorkItem color="blue" slug="dungeon_dom" isShowing wip/>
      <WorkItem color="gold" slug="bd_shopping_guide" isShowing rev/>
      <WorkItem color="green" slug="artedi_app" isShowing/>
    </div>
  )
}