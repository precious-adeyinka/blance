import React, {useState, useEffect} from 'react'

import Image from 'next/image'
import Link from 'next/link'

// Next
import {useRouter} from 'next/router'

// redux
import {connect} from 'react-redux'

// actions
import {viewUserProfile} from '../../../store/actions/appUser'

const PeopleSearch = (props) => {
    // history
    const history = useRouter();
    // store
    const {viewUserProfile, peoples} = props;

    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [statusText, setStatusText] = useState('loading...');

    // search
    const search = () => {
        setError('');

        if (searchTerm.length >= 2) {
            let result = searchResult.filter(item => (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1));

            if(result.length === 0) {
                setSearchResult(result)
                setStatusText('No Result Found!');
            }
            else {
                setSearchResult(result)
                setStatusText('');
            }
        }
        else {
            setError("Search field can't be empty!");
        }
    }

    const handleOnBlur = () => {
        if(searchTerm.length === 0) { 
            setSearchResult(peoples)
        }
        return;
    }

    useEffect(() => {
        searchResult.length === 0 ? setSearchResult(peoples) : setSearchResult(searchResult);
    }, []);

    return (
    <section className="h-auto md:h-full w-full bg-[#fafafa] flex flex-col items-start justify-start p-5">
        {/*  */}
        <div className="h-auto w-full">
            <h1 className="font-medium text-2xl">People</h1>
        </div>
        {/* Search */}
        <div className="h-auto w-full flex flex-col items-start justify-start overflow-hidden mt-10">
            {/* error */}
            <small className="text-red-500 text-sm text-left my-3">{error}</small>
            {/* Form */}
            <form className="h-12 w-full shadow-md">
                <div className="h-full w-full flex items-center justify-start position relative">
                    <div 
                    className="h-12 w-12 bg-gray-100 position absolute top-0 left-0 cursor-pointer"
                    onClick={search}
                    >
                        <i className="la la-search text-gray-300 text-3xl position absolute left-2 top-2"></i>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Search people by names..." 
                    value={searchTerm} 
                    onBlur={handleOnBlur}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="h-full w-full p-2 pl-16 rounded-md focus:outline-none text-gray-500" />
                </div>
            </form>
        </div>

        {/* Gallery */}
        <div className="h-auto w-full grid grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto py-5 mt-2">
            {
                searchResult && searchResult?.length > 0 ? searchResult?.map((people) => {
                    return (
                        <div 
                        onClick={() => {
                            viewUserProfile(people);
                            history.push(`/user/${people?.name}`);
                        }} 
                        key={people?.id} 
                        className="h-48 w-full rounded-md bg-white shadow-lg flex flex-col items-center justify-center space-y-3 cursor-pointer">
                            {/* Image */}
                            <div
                            className="h-20 w-20 rounded-full bg-gray-100 cursor-pointer">
                                <Image alt="" src={people?.img} width="300" height="300" />
                            </div>
                            {/* Info */}
                            <div className="flex flex-col items-center justify-center space-y-0">
                                {/* Title */}
                                    <h2 className="text-gray-900 text-md font-medium text-center">{people?.name}</h2>
                                {/* Nickname */}
                                <h3 className="text-gray-500 text-sm m-0">{`@${people?.nickname}`}</h3>
                            </div>
                        </div>
                    )
               }) : (<div className="font-medium">{statusText}</div>)
            }
        </div>
    </section>
  )
}

const MapStateToProps = state => ({peoples: state.people});
const MapDispatchToProps = ({viewUserProfile})

export default connect(MapStateToProps, MapDispatchToProps)(PeopleSearch);