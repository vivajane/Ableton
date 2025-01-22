import React from 'react'
import MoveProp from './moveProp'

const items =[
    {
        id: 1,
    image:"https://ableton-production.imgix.net/uploads/content-clusters/cluster-getting-started.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://www.ableton.com/move/learn-move/?autoplay=getting-started",
    subtitle: "Getting started with Move",
    alt: "yy",
    },
    {
        id: 2,
    image:"https://ableton-production.imgix.net/uploads/content-clusters/cluster-getting-started.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://www.ableton.com/move/learn-move/?autoplay=getting-started",
    subtitle: "Making beats with Move",
    alt: "uu",
    },
    {
        id: 3,
    image:"https://ableton-production.imgix.net/uploads/content-clusters/cluster-getting-started.jpg?fit=crop&auto=format&fm=jpg",
    link: "https://www.ableton.com/move/learn-move/?autoplay=getting-started",
    subtitle: "Playing instruments with Move",
    title: "iii",
    },

]

const Move = () => {
  return (
    <div> 
        <MoveProp title= "Get Started with Move" items={items} />
    </div>
  )
}

export default Move
