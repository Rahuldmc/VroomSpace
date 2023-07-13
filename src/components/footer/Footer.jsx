import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaGithubSquare,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black w-full'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#593cfb]'>VroomSpace.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, ad quae. Voluptates libero provident consectetur labore voluptatibus praesentium minus dolorem omnis eveniet ea in facilis molestiae, consequatur, temporibus, nam quisquam.</p>
            <div className='flex justify-between md:w-[75%] my-6 text-[#593cfb]'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
            <h6 className='font-medium text-[#593cfb]'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
            </div>
            <div>
            <h6 className='font-medium text-[#593cfb]'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
            </div>   
            <div>
            <h6 className='font-medium text-[#593cfb]'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
            </div>   
            <div>
            <h6 className='font-medium text-[#593cfb]'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
            </div>     
        </div>
    </div>
  )
}

export default Footer