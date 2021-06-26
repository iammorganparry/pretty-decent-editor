import React, { useState } from 'react'
import PrettyDecentEditor from '@pretty-decent-editor/editor/src'

function App() {

  return (
    <div className="flex items-center justify-center h-full w-full">
      {/* <article className="prose lg:prose-xl"> */}
      <h1 className='text-9xl'>Pretty Decent Editor</h1>
      <div className='flex'>
        <PrettyDecentEditor />
      </div>
      {/* </article> */}
    </div>
  )
}

export default App
