import React from 'react'

const Container = ({children,className}) => {
    return (
      <div className={`max-w-screen-xl w-full lg:px-3 md:px-3 px-2 mx-auto ${className || ""}`}>
           {children}           
      </div>
    )
  }
  
export default Container
