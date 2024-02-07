import { useCustomCountHook } from './04-02-customCountHook'

export const CustomHookExmp = () => {
  const { count, handleCount } = useCustomCountHook()
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  )
}
