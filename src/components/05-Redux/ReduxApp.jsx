import { Provider } from 'react-redux'
import { store } from './app/store'
import { CounterExmp } from './app/counter'
import { CounterExample } from './app/ExmpleCounter'

export const ReduxApp = () => {
  return (
    <>
      <h2>Redux App Example</h2>
      <hr />
      <Provider store={store}>
        <CounterExmp />
        <CounterExample />
      </Provider>
    </>
  )
}
