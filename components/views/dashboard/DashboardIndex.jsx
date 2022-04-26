import React, {useState, useEffect, useInsertionEffect} from 'react'
import styles from './styles.module.css'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Auth
import {useUser} from '@auth0/nextjs-auth0'

// redux
import {useDispatch, useSelector, connect} from 'react-redux'

// actions
import {toggleDrawer} from '../../../store/actions/drawer'

// components
import Layout from '../layout/LayoutIndex'
import SidebarIndex from '../sidebar/SidebarIndex'
import PreviewIndex from '../preview/PreviewIndex'
import ActivityIndex from '../activity/ActivityIndex'

const DashboardIndex = (props) => {
  // Auth User
  const {user, error, isLoading} = useUser();

  // store
  const {drawerStatus, toggleDrawer} = props;

  // local state
  const [showAvatar, setShowAvatar] = useState(false);

  // Toggle drawer
  const handleDrawer = () => {
    toggleDrawer(!drawerStatus);
  }

  const toggleAvatar = () => {
    setShowAvatar(!showAvatar);
  }

  return (
    <>
      {/* Hamburger */}
      <div className={`h-16 w-full py-3 px-5 flex items-center justify-between ${styles.showOnMobile}`}>
        <div 
        className="h-10 w-10 rounded-sm flex flex-col items-start justify-center space-y-1"
        onClick={handleDrawer}
        >
          <div className="h-[2px] w-1/5 bg-black rounded-lg"></div>
          <div className="h-[2px] w-3/5 bg-black rounded-lg"></div>
          <div className="h-[2px] w-2/5 bg-black rounded-lg"></div>
        </div>

        <div className="h-10 w-10 rounded-full shdaow-md position relative"
        onClick={toggleAvatar}
        >
          <Image src={user ? user?.picture : '/assets/img/avatars/me.png'} height="100" width="100" alt="" className="rounded-full" />
            {/* Card */}
            <Link href="/api/auth/logout">
                <div className={`h-10 w-28 bg-white rounded-md shadow-md fle items-center justify-start pl-5 position absolute top-0 -left-32 flex items-center justify-center ${showAvatar ? 'visible' : 'invisible'}`}>
                <div className="h-full w-full flex items-center justify-start space-x-2">
                  <i className="la la-sign-out"></i>
                  <span>Logout</span>
                </div>
                </div>
            </Link>
        </div>
      </div>

      {/* Layout */}
      <Layout>
      <SidebarIndex />
      <PreviewIndex />
      <ActivityIndex />
      </Layout>
    </>
  )
}

const MapStateToProps = state => ({drawerStatus: state.drawer.status})
const MapDispatchToProps = ({toggleDrawer})

export default connect(MapStateToProps, MapDispatchToProps)(DashboardIndex);