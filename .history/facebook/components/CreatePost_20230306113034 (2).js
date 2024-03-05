//////import React from 'react'
//////
//////const CreatePost = () => {
//////  return (
//////	<div>
//////	  
//////	</div>
//////  )
//////}
//////
//////export default CreatePost
////import React ,{useRef,useState} from 'react'
////import Image from 'next/image';
////import guy from '../assets/guy7.jpg';
////import camera from "../assets/camera.png";
////import photos from "../assets/photos.png";
////import smile from "../assets/smile.png";
////import {useSession,signIn,signOut} from "next-auth/react";
//////import { collection } from 'firebase/firestore';
////import { addDoc,collection,serverTimestamp } from 'firebase/firestore';
////import { db, storage } from "../firebase";
////import { readBuilderProgram } from 'typescript';
////const CreatePost = () => {
////	const{data:session}=
////	useSession();
////	const CaptionRef=useRef(null);
////	console.log(CaptionRef);
////	const imageRef = useRef(null);
////const [image,setImage]=useState(null);
////
////
////
////const uploadPost =async()=>{
////	const docRef= await addDoc(collection(db,'posts'),{
////		profileImg:session?.user?.image,
////		username:session?.user?.name,
////		caption:CaptionRef.current.value,
////		timestamp:serverTimestamp(),
////	})
////}
////
////const addImageToState=(e)=>{
////	const reader=new FileReader();
////	if(e.target.files[0]){
////		reader.readAsDataUrl(e.target.files[0]);
////	}reader.onload=(readerEvent)=>{
////		setImage(readerEvent.target.result);
////	}}
////}
////
////
////  return (
////	<div className="w-screen sm:w-full ">
////	<div className='max-w-[25rem] sm:max-w-[33rem] mx-auto sm:px-2 bg-white rounded-[1rem]' >
////		<div className="  mt-8 flex items-center w-full p-3 pt-4">
////			<div className="w-12 h-12 shrink-0">
////			<img src={session?.user?.image} className="rounded-full"/>
////			</div>
////			<div className="flex items-center  ml-5 w-full">
////			<input type="text" placeholder="What's on your mind joe doe?"
////			className='outline-0 bg-[#f2f3f7  p-1 rounded-full pl-3 w-full
////				truncate' 
////				ref={CaptionRef}
////
////			/>
////			</div>
////		<div className="flex  items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-3
////		 rounded-full h-10 transition duration-1 ease-in-out hover:bg-blue-500  transform hover:-translate-y-0.1 
////		 hover:scale-1 bg-linear-gradient(45deg,red,orange,yellow,green,blue,indigo,violet,red) -9000"
////		 onClick={uploadPost}>
////			<button className='font-bold text-white'>
////				Post
////			</button>
////		</div>
////		</div>
////		<div className="border-b mb-4 mt-2">
////	</div>
////	<div className="flex justify-between px-3 sm:mx-9 pb-3">
////		<div className="flex items-center">
////		<div className="w-7 h-7">
////			<Image src={camera}/>
////		</div>
////		<p className='pl-2 text-[14px]'>Live</p>
////		</div>
////		<div className="flex items-center" onClick={()=>imageRef.current.click()}>
////		<div className="w-7 h-7">
////		<Image src={photos}/>
////		<input type="file" className='hidden' ref={imageRef} onChange={addImageToState}/>
////		</div>
////		<p className='pl-2 text-[14px]'>Photos/Video</p>
////		</div>
////		
////
////		<div className="flex items-center">
////		<div className="w-7 h-7">
////		<Image src={smile}/>
////		</div>
////		<p className='pl-2 text-[14px]'>Feeling/Activity</p>
////	</div>
////		</div>
////		
////		{/*<span class="flex h-3 w-3">
////  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
////  <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
////</span>*/}
////
////	</div>
////	</div>
////
////  )
////}
////
////export default CreatePost
//import Image from "next/image";
//import React, { useRef, useState } from "react";
//import guy from "../assets/guy7.jpg";
//import camera from "../assets/camera.png";
//import photos from "../assets/photos.png";
//import smile from "../assets/smile.png";
//import { useSession, signIn, signOut } from "next-auth/react";
//import { db, storage } from "../firebase";
//import nouser from "../assets/nouser.png";
//
//import {
//  addDoc,
//  collection,
//  doc,
//  serverTimestamp,
//  updateDoc,
//} from "firebase/firestore";
//import { getDownloadURL, ref, uploadString } from "firebase/storage";
//const CreatePost = () => {
//  const { data: session } = useSession();
//  const captionRef = useRef(null);
//  console.log(captionRef);
//  const imageRef = useRef(null);
//  const [image, setImage] = useState(null);
//  console.log(image);
//  const [loading, setLoading] = useState(false);
//
//  //Create data post and add it to the collection
//  const uploadPost = async () => {
//    setLoading(true);
//    const docRef = await addDoc(collection(db, "posts"), {
//      profileImg: session?.user?.image,
//      username: session?.user?.name,
//      caption: captionRef.current.value,
//      timestamp: serverTimestamp(),
//    });
//    const imagePath = ref(storage, `posts/${docRef.id}/image`);
//    await uploadString(imagePath, image, "data_url").then(async (snapshot) => {
//      const downloadURL = await getDownloadURL(imagePath);
//      await updateDoc(doc(db, "posts", docRef.id), {
//        image: downloadURL,
//      });
//    });
//    setImage("");
//    setLoading(false);
//    captionRef.current.value = null;
//  };
//
// 
//  const addImageToState = (e) => {
//    const reader = new FileReader();
//    if (e.target.files[0]) {
//      reader.readAsDataURL(e.target.files[0]);
//    }
//    reader.onload = (readerEvent) => {
//      setImage(readerEvent.target.result);
//    };
//  };
//
//  return (
//    <div className="w-screen sm:w-full ">
//      <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto  sm:px-2 bg-white rounded-[1rem] ">
//        <div className=" mt-8 flex items-center w-full p-3 pt-4 ">
//          <div className="w-12 h-12 shrink-0">
//            <img
//              src={session ? session?.user?.image : nouser.src}
//              className="rounded-full "
//            />
//          </div>
//          <div className="flex items-center ml-5 w-full  ">
//            <input
//              type="text"
//              placeholder="What's on your mind Joe Doe?"
//              className="outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate"
//              ref={captionRef}
//            />
//          </div>
//
//          <div
//            className="flex items-center bg-blue-500 px-3 rounded-full h-10 ml-4"
//            onClick={uploadPost}
//          >
//            <button className="font-bold text-white">
//              {loading ? "Loading" : "Post"}
//            </button>
//          </div>
//        </div>
//
//        <div className="">
//          {image ? (
//            <div className="" onClick={() => setImage("")}>
//              <img src={image} className="p-4" alt="" />
//            </div>
//          ) : (
//            ""
//          )}
//        </div>
//
//        <div
//          className="
//        border-b mb-4 mt-2"
//        ></div>
//        <div className="flex justify-between px-3 sm:mx-9 pb-3">
//          <div className="flex items-center">
//            <div className="w-7 h-7">
//              <Image src={camera} />
//            </div>
//            <p className="pl-2  whitespace-nowrap text-[14px]">Live Video</p>
//          </div>
//
//          <div
//            className="flex items-center"
//            onClick={() => imageRef.current.click()}
//          >
//            <div className="w-7 h-7">
//              <Image src={photos} />
//              <input
//                type="file"
//                className="hidden"
//                ref={imageRef}
//                onChange={addImageToState}
//              />
//            </div>
//            <p className="pl-2   text-[14px]">Photo/Video</p>
//          </div>
//
//          <div className="flex items-center">
//            <div className="w-7 h-7">
//              <Image src={smile} />
//            </div>
//            <p className="pl-2   text-[14px]">Feeling/Activity</p>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};
//
//export default CreatePost;
import Image from "next/image";
import React, { useRef, useState } from "react";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { db, storage } from "../firebase";
import nouser from "../assets/nouser.png";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
const CreatePost = () => {
  const { data: session } = useSession();
  const captionRef = useRef(null);
  console.log(captionRef);
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  console.log(image);
  const [loading, setLoading] = useState(false);

  //Create data post and add it to the collection
  const uploadPost = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      profileImg: session?.user?.image,
      username: session?.user?.name,
      caption: captionRef.current.value,
      timestamp: serverTimestamp(),
    });
    //Path for the image
    const imagePath = ref(storage, `posts/${docRef.id}/image`);

    //Upload image to that adress
    //Then with the snapshot declare the download URL
    await uploadString(imagePath, image, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imagePath);
      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });
    setImage("");
    setLoading(false);
    captionRef.current.value = null;
  };

  //Add the image to state
  const addImageToState = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  return (
    <div className="w-screen sm:w-full ">
      <div className="max-w-[25rem] sm:max-w-[33rem] mx-auto  sm:px-2 bg-white rounded-[1rem] ">
        <div className=" mt-8 flex items-center w-full p-3 pt-4 ">
          <div className="w-12 h-12 shrink-0">
            <img
              src={session ? session?.user?.image : nouser.src}
              className="rounded-full "
            />
          </div>
          <div className="flex items-center ml-5 w-full  ">
            <input
              type="text"
              placeholder="What's on your mind Joe Doe?"
              className="outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 truncate"
              ref={captionRef}
            />
          </div>

          <div
            className="flex items-center bg-blue-500 px-3 rounded-full h-10 ml-4"
            onClick={uploadPost}
          >
            <button className="font-bold text-white">
              {loading ? "Loading" : "Post"}
            </button>
          </div>
        </div>

        <div className="">
          {image ? (
            <div className="" onClick={() => setImage("")}>
              <img src={image} className="p-4" alt="" />
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className="
        border-b mb-4 mt-2"
        ></div>
        <div className="flex justify-between px-3 sm:mx-9 pb-3">
          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={camera} />
            </div>
            <p className="pl-2  whitespace-nowrap text-[14px]">Live Video</p>
          </div>

          <div
            className="flex items-center"
            onClick={() => imageRef.current.click()}
          >
            <div className="w-7 h-7">
              <Image src={photos} />
              <input
                type="file"
                className="hidden"
                ref={imageRef}
                onChange={addImageToState}
              />
            </div>
            <p className="pl-2   text-[14px]">Photo/Video</p>
          </div>

          <div className="flex items-center">
            <div className="w-7 h-7">
              <Image src={smile} />
            </div>
            <p className="pl-2   text-[14px]">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;