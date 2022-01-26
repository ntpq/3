import { observer, useLocalObservable } from 'mobx-react-lite'
import React from 'react'

interface Props {}

export const Template = observer((props: Props) => {
  const store = useLocalObservable(() => ({
    count: 0,
    setCount(count) {
      this.count = count
    },
  }))
  return (
    <div>
      <div>Template: {store.count}</div>
      <button onClick={() => store.setCount(store.count + 1)}>+</button>
      <button onClick={() => store.setCount(store.count - 1)}>-</button>
    </div>
  )
})
