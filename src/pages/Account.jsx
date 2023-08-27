import { Main } from "../layout/Main"

function Account() {
  return (
    <Main>
      <h1 className="text-primary mb-6 text-3xl font-semibold grow text-center">Log in</h1>
      <form className="w-full h-full max-w-sm">
        <label htmlFor="username" className="text-primary block mb-2 text-xl font-semibold">Email</label>
        <input type="email" className="border border-primary p-2 w-full mb-4 text-lg" />
        <label htmlFor="password" className="text-primary block mb-2 text-xl font-semibold">Password</label>
        <input type="password" className="border border-primary p-2 w-full mb-8 text-lg" />
        <button type="button" className="text-white px-6 py-3 text-xl bg-primary w-full">Login</button>
      </form>
    </Main>
  )
}

export { Account }