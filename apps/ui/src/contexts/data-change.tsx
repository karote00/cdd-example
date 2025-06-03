import { useEffect } from 'react'
import {
  subscribeToEndTransaction,
  subscribeToRenderIsReady,
  fileLoadComplete
} from '@cdd-example/reactive-events'
import { initDataContexts } from '@cdd-example/ui-context'
import core from './core'

const DataContexts = () => {
  useEffect(() => {
    initDataContexts()

    const renderSubscription = subscribeToRenderIsReady(() => {
      // TODO: Connect to DB
      const fileData = localStorage.getItem('FILE')
      if (fileData) {
        core.load(JSON.parse(fileData))
        fileLoadComplete()
      }
    })

    const transactSubscription = subscribeToEndTransaction(async () => {
      // TODO: Connect to DB
      const coreData = await core.save()
      localStorage.setItem('FILE', JSON.stringify(coreData))
    })

    return () => {
      renderSubscription.unsubscribe()
      transactSubscription.unsubscribe()
    }
  }, [])

  return null
}

export default DataContexts
