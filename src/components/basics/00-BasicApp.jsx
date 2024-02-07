import React from 'react'
import Hello from './01-helloWorld'
import JsxExample from './02-jsx'
import Events from './03-events'
import ParrentData from './05-parentData'
import ChildData from './04-childData'
import { UseStates } from './06-useStates'
import { UseEffectExp } from './07-useEffects'
import { UseMemos } from './08-useMomo'
import { UseCalbacks } from './09-useColbacks'

export const BasicApp = () => {
  const name = 'Mahesh Sharma'
  return (
    <>
      <h1>Here will be all the basic component</h1>
      {/* <Hello /> */}
      {/* <JsxExample name={name} /> */}
      {/* <Events /> */}
      {/* <ChildData /> */}
      {/* <ParrentData /> */}
      {/* <UseStates /> */}
      {/* <UseEffectExp /> */}
      {/* <UseMemos /> */}
      {/* <UseCalbacks /> */}
    </>
  )
}
