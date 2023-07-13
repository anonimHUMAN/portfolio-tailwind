import { useRef, useState } from "react"

export default function Home() {
    const [about, setAbout] = useState(true)
    const [services, setServices] = useState(false)
    const [facts, setFacts] = useState(false)
    const [next, setNext] = useState(false)
    const inp = useRef(null)
    const inp1 = useRef(null)
    const toggleNext = () => {
        setNext(!next);
    };
    const sendMess = () => {
        if (inp.current.value !== '' && inp1.current.value !== '') {
            alert('Message sended')
        }
        setTimeout(() => {
            inp.current.value = ''
            inp1.current.value = ''
        }, 100);
    };
    const toggleAbout = () => {
        if (about === true) {
            setAbout(true);
        } else if (about === false) {
            setAbout(true);
            setServices(false);
            setFacts(false);
        }
    };
    const toggleServices = () => {
        if (services === true) {
            setServices(true);
        } else if (services === false) {
            setServices(true);
            setAbout(false);
            setFacts(false);
        }
    };
    const toggleFacts = () => {
        if (facts === true) {
            setFacts(true);
        } else if (facts === false) {
            setFacts(true);
            setAbout(false);
            setServices(false);
        }
    };
    return (
        <>
            <div className='w-9/12 mt-20 p-9'>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                        <li className="mr-2">
                            <button onClick={toggleAbout} id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">About</button>
                        </li>
                        <li className="mr-2">
                            <button onClick={toggleServices} id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Services</button>
                        </li>
                        <li className="mr-2">
                            <button onClick={toggleFacts} id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Contact</button>
                        </li>
                    </ul>
                    <div id="defaultTabContent">
                        {about && <> <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">My full name is Otabekov Og'abek <span className="text-black">( Black Ghost )</span></h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">This is my portfolio... {next && <span>I studied as a full stack developer at IT house training center. My teacher's full name is Zafarbek Murodullayev. On this site you can see the projects I have created. And you can open a profile for yourself.</span>}</p>
                            <h3 onClick={toggleNext} className="inline-flex cursor-pointer items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Open or Close
                                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </h3>
                        </div>
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                                    </div>
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                                    </div>
                                    <div className="flex flex-col">
                                        <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                                        <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                                    </div>
                                </dl>
                            </div>
                        </>}
                        {services && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Service directions</h2>
                            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                                <li className="flex space-x-2 items-center">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="leading-tight">Fronted</span>
                                </li>
                                <li className="flex space-x-2 items-center">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="leading-tight">Backend</span>
                                </li>
                                <li className="flex space-x-2 items-center">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="leading-tight">Small sites</span>
                                </li>
                                <li className="flex space-x-2 items-center">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="leading-tight">Big sites for company</span>
                                </li>
                            </ul>
                        </div>}
                        {facts && <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact with me</h2>
                                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have a technical problem? Want to submit portfolio feedback? Need more information about me? Let me know.</p>
                                <form action="#" className="space-y-8">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input ref={inp} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input ref={inp1} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button onClick={sendMess} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                </form>
                            </div>
                        </section>}
                    </div>
                </div>
            </div>
        </>
    )
}