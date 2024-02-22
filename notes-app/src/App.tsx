function App() {

  const click: () => void = () => {
    console.log('Click!')
  };

  return (
    <div className='container mt-5'>
      <h1>CST 323 Activity Project</h1>
      <button className='btn btn-primary' onClick={click}>Bootstrap Button</button>
    </div>
  )
}

export default App
