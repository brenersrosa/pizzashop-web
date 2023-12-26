import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="">
      <span>pizzashop</span>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
