import React, {useState} from 'react'
import styles from './styles.module.css'

// NEXT
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

// Auth
import {useUser} from '@auth0/nextjs-auth0'

// Store
import {useSelector, useDispatch, connect} from 'react-redux';
import { useEffect } from 'react'
import {toggleDrawer} from '../../../store/actions/drawer'

const SidebarIndex = (props) => {
    // History
    const history = useRouter();

    // Auth User
    const {user, error, isLoading} = useUser();

    // Store
    const dispatch = useDispatch();
    // const {drawerStatus} = useSelector(state => state.drawer.status)
    const {drawerStatus, toggleDrawer} = props;

    // Local states
    const [isShowing, setIsShowing] = useState(false)
    
    const [isFloatingCardOpen, setIsFloatingCardOpen] = useState(false);
    const toggleFloatingUserCard = () => {
        setIsFloatingCardOpen(!isFloatingCardOpen);
    }

    // const toggleDrawer = () => {
    //     dispatch(actions.toggleDrawer(false))
    // }

    useEffect(() => {
        setIsShowing(drawerStatus);
    }, [drawerStatus])

    return (
        <section className={`h-full w-full bg-gray-100 flex flex-col items-start justify-between px-1 ${isShowing ? styles.mobileVisible : styles.mobile}`}>
            <div className="h-2/4 w-full overflow-hidden flex flex-col items-start justify-between position relative">
                <h1 className={`text-black font-medium position relative flex items-baseline space-x-1 m-5`}>
                    <div className="h-10 w-10 text-2xl bg-black text-white rounded-full flex items-center justify-center inline">B</div>
                    <div>-&nbsp;lance</div>
                </h1>

                {/* Close Drawer */}
                <div 
                className={`${styles.showOnMobile} h-10 w-10 rounded-full bg-black position absolute right-3 top-6 flex items-center justify-center cursor-pointer`}
                onClick={() => toggleDrawer(!drawerStatus)}
                >
                    <span className="text-lg text-white">X</span>
                </div>

                {/* Nav */}
                <ul className="h-auto w-full flex flex-col space-y-4">
                    <li onClick={() => toggleDrawer(false)} className={`pl-5 cursor-pointer flex items-center justify-start space-x-3 font-normal group transition duration-300 hover:text-black ${history.pathname === "/dashboard" ? "text-black border-l-2 border-black" : "text-gray-400"}`}>
                        <i className={`la la-home group-hover:text-black text-lg ${history.pathname === '/dashboard' ? "text-black" : "text-gray-400"}`}></i>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li onClick={() => toggleDrawer(false)} className={`pl-5 cursor-pointer flex items-center justify-start space-x-3 font-normal group transition duration-300 hover:text-black ${history.pathname === "/people" ? "text-black border-l-2 border-black" : "text-gray-400"}`}>
                        <i className={`la la-users group-hover:text-black text-lg ${history.pathname === '/people' ? "text-black" : "text-gray-400"}`}></i>
                        <Link href="/people">People</Link>
                    </li>
                    <li onClick={() => toggleDrawer(false)} className={`pl-5 cursor-pointer flex items-center justify-start space-x-3 font-normal group transition duration-300 hover:text-black  ${history.pathname === "/profile" ? "text-black border-l-2 border-black" : "text-gray-400"}`}>
                        <i className={`la la-user group-hover:text-black text-lg ${history.pathname === '/profile' ? "text-black" : "text-gray-400"}`}></i>
                        <Link href="/profile">Profile</Link>
                    </li>
            </ul>
            </div>

            {/* User */}
            <div className="h-28 w-full bg-transparent border-t border-gray-200 flex items-center justify-start">
                <div 
                className="h-16 w-11/12 rounded-full flex items-center justify-start space-x-3 px-5 
                hover:bg-gray-200 transition duration-300 cursor-pointer position relative"
                onClick={toggleFloatingUserCard}
                >
                    <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden shadow-md">
                        <Image src={user ? user?.picture : '/assets/img/avatars/me.png'} height="100" width="100" alt="" />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="font-medium text-sm">{user?.name}</h1>
                        <h4 className="font-normal text-gray-500 text-xs">{`@${user?.nickname}`}</h4>
                    </div>
                    <div className="flex items-center justify-center text-2xl pl-5 cursor-pointer">
                        <i className="la la-ellipsis-h text-black text-3xl"></i>
                    </div>

                    {/* Floating card */}
                    <div className={`${isFloatingCardOpen ? "flex" : "hidden"} h-20 w-48 bg-white shadow-lg rounded-lg position absolute -top-20 left-2/4 -translate-x-2/4 ${styles.floatingCardArrowPointer} 
                    flex-col items-start justify-center space-y-0`}>
                        <Link href="/profile">
                            <div onClick={() => toggleDrawer(false)} className="h-full w-full flex items-center justify-start space-x-2 px-3 transition duration-300 hover:bg-gray-100">
                                <i className="la la-user"></i>
                                <span>Profile</span>
                            </div>
                        </Link>
                        <Link href="/api/auth/logout">
                            <div onClick={() => toggleDrawer(false)} className="h-full w-full flex items-center justify-start space-x-2 px-3 transition duration-300 hover:bg-gray-100">
                                <i className="la la-sign-out"></i>
                                <span>Logout</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MapStateToProps = state => ({drawerStatus: state.drawer.status})
const MapDispatchToProps = ({toggleDrawer})

export default connect(MapStateToProps, MapDispatchToProps)(SidebarIndex);