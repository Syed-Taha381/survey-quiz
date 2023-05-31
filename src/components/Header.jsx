// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Header = () => {
  // const [ipAddress, setIpAddress] = useState('');
  // const [ipInfo, setIpInfo] = useState('');

  // useEffect(() => {
  //   const fetchIpAddress = async () => {
  //     try {
  //       const response = await axios.get('https://api.ipify.org?format=json');
  //       const data = response.data;
  //       // setIpAddress(data.ip);
  //       const ipApiResponse = await axios.get(`https://ipapi.co/${data.ip}/json/`);
  //       const ipInfoData = ipApiResponse.data;
  //       setIpInfo(ipInfoData);
  //     } catch (error) {
  //       console.error('Error retrieving IP address:', error);
  //     }
  //   };

  //   fetchIpAddress();
  // }, []);
  // console.log(ipInfo.city, "ipInfo.city")

  return (
    <div className='full-w'>
      <div className='red-line'></div>
      <div className='blue-bg'>
        <p>Join 1,428 Others In South Carolina</p>
        {/* <p>{ipInfo ? "Join 1,428 Others In " + ipInfo?.city : 'Unable to detacte State'}</p> */}
      </div>
    </div>
  )
}

export default Header