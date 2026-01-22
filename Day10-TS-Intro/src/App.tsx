import { Box } from "./components/Box"

type TValue = string | number

const myName = "Biswas"

const myNumber = 9860

const isLoggedIn = true


function subtract(a: number, b:number) {
  const c = a-b
  return c
}
subtract(13 , 6)


function App () {
  return (
    <>
      <h1>Typescript Intro</h1>
      <Box title="hello" description="world" boxNum={1} />
    </>
  )
}

export default App