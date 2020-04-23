import React, { lazy } from 'react'

const ContextDemo = lazy(() => import('./ContextDemo'))

export default () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <ContextDemo />
    </React.Suspense>
  )
}
