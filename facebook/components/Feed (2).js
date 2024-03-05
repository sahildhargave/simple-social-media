//import React from 'react'
//
//const Feed = () => {
//  return (
//	<div>Feed</div>
//  )
//}
//
//export default Feeds
//import React from 'react';
//
//const Feed =()=>{
//	return <div>Feed</div>
//}
//
//export default Feed();
import React from 'react';
import LeftSidebar from "./LeftSidebar";
import Posts from './Posts';
import RightSidebar from './RightSidebar';
import Stories from './Stories';

import CreatePost from './CreatePost';
const Feed = () => {
  return (

	<div className='flex  bg-[#f2f3f7]'>
		<LeftSidebar/>
		<div className="mx-auto">

		<Stories/>
		<CreatePost/>
		
		<Posts/>

		</div>
		<RightSidebar/>
	</div>

  )
}

export default Feed;
