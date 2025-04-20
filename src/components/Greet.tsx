
function Greet({name}: {name?:string}) {
  if (name)  return  <p>Hello {name}</p>

  return <button>Login</button>
}

export default Greet