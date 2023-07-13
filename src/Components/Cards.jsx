import React from 'react'
import portfolio1 from '../images/portfolio1.jpg'
import instagram from '../images/instagram.jpg'
import portfolio2 from '../images/portfolio2.jpg'
import boring1 from '../images/boring1.jpg'
import portfolio3 from '../images/portfolio3.jpg'
import loginPage from '../images/loginPage.jpg'
import bigSite from '../images/bigSite.jpg'
import simpleSite from '../images/simple-site.jpg'
import animationPhone from '../images/animationPhone.jpg'
import hotel from '../images/hotel.jpg'
import obHavo from '../images/obHavo.jpg'
import calendar from '../images/calendar.jpg'

export default function Cards() {
    let data = [
        {
            img: `${portfolio1}`,
            h1: `My old portfolio`,
            p: `Here are many projects of mine.This project was created on June 22, 2023.Here are also have all my old portfolios...`,
            link: 'https://black-ghost-portfolio.netlify.app'
        },
        {
            img: `${instagram}`,
            h1: `Instagram`,
            p: `You can see the instagram I created there.You can use it if you want, but it is not mandatory.And do not forget to invite your friends there if it is convenient for you!`,
            link: 'https://myinstagramgothere.netlify.app'
        },
        {
            img: `${portfolio2}`,
            h1: `My old portfolio`,
            p: `Here are many projects of mine.This project was created on February 19, 2023.Here are also have all my old portfolios...`,
            link: 'https://new-ucer-umumiy.netlify.app'
        },
        {
            img: `${boring1}`,
            h1: `Simple homework page`,
            p: `Here you can login=vazifa1, password=vazifa1 or login=vazifa2, password=vazifa2 or login=vazifa3, password=vazifa3 and you can see my additional projects there!`,
            link: 'https://n1site.netlify.app'
        },
        {
            img: `${portfolio3}`,
            h1: `My old portfolio`,
            p: `Here are many projects of mine.This project was created on February 19, 2023.Here are also have all my old portfolios...`,
            link: 'https://black-ghost-umumiy.netlify.app'
        },
        {
            img: `${loginPage}`,
            h1: `Animation login form`,
            p: `The site shows that you can log into your account from there. And it's very easy and convenient.This project was created on Mart 6, 2023...`,
            link: 'https://thunderous-gingersnap-399902.netlify.app'
        },
        {
            img: `${bigSite}`,
            h1: `Great site`,
            p: `This site is huge and awesome, but it's not made responsive.This project was created on Mart 7, 2023...`,
            link: 'https://celadon-seahorse-e3bdc8.netlify.app'
        },
        {
            img: `${simpleSite}`,
            h1: `Simple one page site`,
            p: `This site is not huge and awesome and it's made responsive.This project was created on Mart 11, 2023...`,
            link:'https://nice-work.netlify.app'
        },
        {
            img: `${animationPhone}`,
            h1: `Animation Iphone 14`,
            p: `There have an awesome animation, there don't need responsive.This project was created on January 7, 2023...`,
            link: 'https://genuine-cannoli-a8f9f3.netlify.app'
        },
        {
            img: `${hotel}`,
            h1: `HBT hotel website`,
            p: `This site is huge and awesome, but it's not made responsive.This project was created on July 13, 2022...`,
            link: 'https://unique-sunburst-760a36.netlify.app'
        },
        {
            img: `${obHavo}`,
            h1: `Weather`,
            p: `This website will show you the weather temperature of the country or city of your choice..This project was created on December 25, 2022...`,
            link: 'https://sprightly-brigadeiros-e6acf8.netlify.app'
        },
        {
            img: `${calendar}`,
            h1: `Calendar`,
            p: `The mission of this website is to serve people. You can check the current date from this site.This project was created on January 15, 2023...`,
            link: 'https://chic-moonbeam-7263f9.netlify.app'
        }
    ]
    return (
        <>
            <div className='w-9/12 flex justify-start flex-wrap gap-x-7'>
                {data.map((item, i) => {
                    return (
                        <div key={i + 1} className="bg-black mb-9 mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={item.img} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.h1}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.p}</p>
                                <a href={item.link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    view in new window
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}