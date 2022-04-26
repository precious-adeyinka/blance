import React, {useState, useEffect} from 'react'

import Image from 'next/image'

// redux
import {connect} from 'react-redux'

const PreviewIndex = (props) => {
    // store
    const {peoples} = props;

    // local state
    const [male, setMale] = useState(0);
    const [female, setFemale] = useState(0);
    const [total, setTotal] = useState(0);

    const dataProcessing = () => {
        let maleCount = peoples.filter(people => people.gender.toLowerCase() === 'male').length;
        let femaleCount = peoples.filter(people => people.gender.toLowerCase() === 'female').length;
        let totalCount = maleCount + femaleCount;

        setMale(maleCount);
        setFemale(femaleCount);
        setTotal(totalCount);
    }

    useEffect(() => {
        dataProcessing();
    }, [])

    return (
    <section className="h-auto md:h-full w-full bg-[#fafafa] flex flex-col items-start justify-start p-5 space-y-10">
        {/*  */}
        <div className="h-auto w-full">
            <h1 className="font-medium text-2xl">Dashboard</h1>
        </div>
        {/* Cards */}
        <div className="h-auto md:h-52 w-full mx-auto flex flex-col md:flex-row items-center justify-start space-y-5 md:space-y-0 md:space-x-3">
            <div className="h-52 md:h-full w-full md:w-[33.33%] bg-[#fec0a7] rounded-md shadow-lg py-4 px-4 flex flex-col items-start justify-between">
                <i className="la la-users text-6xl text-[#253c60]"></i>
                <div>
                    <h3 className="font-normal text-3xl text-[#253c60]">{total}</h3>
                    <h5 className="font-normal text-md text-black">Total Users</h5>
                </div>
            </div>
            <div className="h-52 md:h-full w-full md:w-[33.33%] bg-[#98bde5] rounded-md shadow-lg py-4 px-4 flex flex-col items-start justify-between">
                <i className="la la-male text-6xl text-[#253c60]"></i>
                <div>
                    <h3 className="font-normal text-3xl text-[#253c60]">{male}</h3>
                    <h5 className="font-normal text-md text-black">Total Boys</h5>
                </div>
            </div>
            <div className="h-52 md:h-full w-full md:w-[33.33%] bg-[#98dbe5] rounded-md shadow-lg py-4 px-4 flex flex-col items-start justify-between">
                <i className="la la-female text-6xl text-[#253c60]"></i>
                <div>
                    <h3 className="font-normal text-3xl text-[#253c60]">{female}</h3>
                    <h5 className="font-normal text-md text-black">Total Females</h5>
                </div>
            </div>
        </div>
        {/* About */}
        <div className="h-auto md:h-72 w-full bg-white shadow-lg rounded-md flex flex-col md:flex-row items-center justify-start space-y-3 md:space-y-0 md:space-x-3 p-2">
            <div className="h-64 md:h-full w-full md:w-4/5 rounded-l-md overflow-hidden">
                <Image src="/assets/img/about/workplace.jpg" alt="" height="900" width="600" className="bg-cover"  />
            </div>
            <div className="h-auto w-full p-2 py-5 md:py-0 pb-10 md:pb-0">
                <h2 className="font-medium font-sans text-2xl">What is Blance?</h2>
                <p className="w-full md:w-11/12 mt-5 text-lg md:text-sm text-gray-400 leading-loose">Blance is a black freelancers community. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </section>
  )
}



const MapStateToProps = state => ({peoples: state.people});
const MapDispatchToProps = null;

export default connect(MapStateToProps, MapDispatchToProps)(PreviewIndex);