import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

// Next
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

// Auth
import {useUser} from '@auth0/nextjs-auth0'

// firebase
import {app, db} from '../../../firebase/initFirebase'
import { collection, addDoc } from "firebase/firestore"; 

// redux
import {useDispatch, useSelector, connect} from 'react-redux'

// actions
import {toggleDrawer} from '../../../store/actions/drawer'

const ProfileIndex = (props) => {
    
    // Auth User
    const {user, error, isLoading} = useUser();

    // history
    const history = useRouter();

    // store
    const {drawerStatus, toggleDrawer} = props;

    // local state
    const [showAvatar, setShowAvatar] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [img, setImg] = useState(user?.img || '');
    const [bio, setBio] = useState('');

    // Toggle drawer
    const handleDrawer = () => {
        toggleDrawer(!drawerStatus);
    }

    const toggleAvatar = () => {
        setShowAvatar(!showAvatar);
    }

    const updateUser = async (e) => {

        e.preventDefault();

        // user object
        const newUser = {
            name,
            img,
            bio
        }
        
        // if (user) {
        //   db.collection('users').add(newUser).then((data) => {console.log(data)}).catch(err => console.log(err.message))
        // }

        const docRef = await addDoc(collection(app.firestore, "users"), newUser);
        console.log("Document written with ID: ", docRef.id);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleImg = (url) => {
        setImg(url);
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
                <Image src={user ? user?.picture : '/assets/img/avatars/me.png'} height="300" width="300" alt="" className="rounded-full" />
            </div>

            {/* Info */}
            <div className="h-auto w-11/12 md:w-1/2 mx-auto flex flex-col justify-start items-start">
                <span className="text-sm text-gray-400">Profile details</span>
                {/* form */}
                <form className="h-auto w-full flex flex-col items-start justify-center space-y-5 pt-3" onSubmit={updateUser}>
                    <div className="h-12 w-full rounded-md flex items-center justify-center position relative">
                        <i className="la la-user position absolute top-2 left-2 text-lg text-gray-400"></i>
                        <input 
                        className="h-full w-full bg-gray-100 text-gray-500 pl-10 focus:outline-none" 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={handleName}
                        />
                    </div>
                    <div className="h-24 w-full rounded-md flex items-center justify-center position relative">
                        <i className="la la-book position absolute top-3 left-2 text-lg text-gray-400"></i>
                        <textarea 
                        className="h-full w-full bg-gray-100 text-gray-500 pl-10 pt-3 focus:outline-none"
                        placeholder="Bio"
                        defaultValue={bio}
                        onChange={handleBio}
                        >
                            {user?.bio}
                        </textarea>
                    </div>

                    <button 
                    type="submit"
                    className="h-12 w-full bg-gray-900 rounded-md flex items-center justify-center text-white font-medium text-md cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

const MapStateToProps = state => ({drawerStatus: state.drawer.status})
const MapDispatchToProps = ({toggleDrawer})

export default connect(MapStateToProps, MapDispatchToProps)(ProfileIndex);