import React, {useState, useEffect} from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {connect} from 'react-redux'


const ProfileUser = (props) => {
    // store
    const {appUser} = props;

    // history
    const history = useRouter();

    // local state
    const [showAvatar, setShowAvatar] = useState(false);

    const toggleAvatar = () => {
        setShowAvatar(!showAvatar);
    }

    return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
        <div className="h-full md:h-auto w-full md:w-2/5 bg-white rounded-md shadow-3xl flex flex-col items-center justify-start md:justify-center space-y-5 py-5 md:py-10">
            {/* Nav */}
            <div className="h-12 w-full px-3 md:px-10 flex justify-between items-center">
                {/* Light */}
                <div className="cursor-pointer h-12 w-12 rounded-full flex items-center justify-center bg-gray-100" onClick={() => history.back()}><i className="la la-arrow-left text-xl"></i></div>
                {/* Right */}
                <div className="h-10 w-10 rounded-full shdaow-md position relative"
                onClick={toggleAvatar}
                >
                    <div className="cursor-pointer h-12 w-12 rounded-full flex items-center justify-center bg-transparent"><i className="la la-ellipsis-h text-xl text-gray-400"></i></div>
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

            {/* Img */}
            <div className="h-32 w-32 rounded-full bg-gray-100 overflow-hidden cursor-pointer">
                <Image src={appUser ? appUser?.img : '/assets/img/avatars/me.png'} height="300" width="300" alt="" className="rounded-full" />
            </div>

            {/* Info */}
            <div className="h-auto w-11/12 md:w-11/12 mx-auto flex flex-col justify-start items-start">
                {/* form */}
                <div className="h-auto w-full flex flex-col items-start justify-center space-y-10 pt-3">
                    <div className="h-12 w-full rounded-md flex flex-col items-center justify-center position relative">
                        <div className="font-medium text-2xl">{appUser?.name}</div>
                        <div className="text-gray-400 text-sm">{appUser?.nickname}</div>
                    </div>
                    <div className="h-24 w-full rounded-md flex items-center justify-center position relative">
                       <div className="w-full text-gray-400 text-center leading-loose text-lg md:text-md">{appUser?.bio}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const MapStateToProps = state => ({appUser: state.appUser})
const MapDispatchToProps = null;

export default connect(MapStateToProps, MapDispatchToProps)(ProfileUser);