import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <div>
        <h1>Forms em React</h1>

        <MyForm
          user={{
            name: "Henrique",
            email: "henriqpohl@gmail.com",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            role: "Administrador"
          }}
        />
      </div>
    </>
  )
}

export default App
