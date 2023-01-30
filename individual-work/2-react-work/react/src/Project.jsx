import { useState } from 'react'

function Project() {
  const [count, setCount] = useState(0)

  return (
    <div className="project">

              <div className="img">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
              </div>
              
              <div className="info">

                <div className="title">
                  Project Title
                </div>

                <div className="content">
                  Upon yielding, king sea subdue very seed sixth them lesser one lesser there earth days were
                  multiply so sixth gathering fifth than man fowl made.
                </div>

              </div>

            </div>
  )
}

export default Project
