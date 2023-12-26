import { Helmet } from 'react-helmet-async'

export default function SignIn() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Helmet title="Login" />
      <span>SignIn</span>
    </div>
  )
}
