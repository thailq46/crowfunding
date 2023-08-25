import { PropTypes } from 'prop-types'
import { Outlet } from 'react-router-dom'
import Overlay from 'src/components/common/Overlay'
import ModalBackProject from 'src/components/modal.jsx/ModalBackProject'
import DashboardSidebar from 'src/modules/dashboard/DashboardSidebar'
import DashboardTopbar from 'src/modules/dashboard/DashboardTopbar'
import RequiredAuthPage from 'src/pages/RequiredAuthPage'

// eslint-disable-next-line no-unused-vars
const LayoutDashboard = ({ children }) => {
  return (
    <RequiredAuthPage>
      <div className='p-10 bg-lite min-h-screen'>
        <ModalBackProject></ModalBackProject>
        <Overlay></Overlay>
        <DashboardTopbar></DashboardTopbar>
        <div className='flex gap-x-10 items-start'>
          <DashboardSidebar></DashboardSidebar>
          <div className='flex-1'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </RequiredAuthPage>
  )
}
LayoutDashboard.propTypes = {
  children: PropTypes.node
}
export default LayoutDashboard
