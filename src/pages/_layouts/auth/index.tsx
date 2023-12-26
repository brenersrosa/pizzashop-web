import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="">
      <span>pizzashop</span>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
