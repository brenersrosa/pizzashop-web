import { Helmet } from 'react-helmet-async'

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Helmet title="Dashboard" />
      <span>Dashboard</span>
    </div>
  )
}
