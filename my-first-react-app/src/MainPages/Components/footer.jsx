function Footer(){
    return(
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:flex md:justify-between mx-auto w-full px-10 p-4 py-6 lg:py-8 bg-white mt-auto">
            <div>
                <h2 className="mb-4 text-standard font-semibold text-gray-900 uppercase dark:text-white">Relevant Links</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                        <li className="text-center text-small">
                            <a href="https://github.com/m0ravat" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-3x"></i>
                            <br /> Github
                            </a>
                        </li>
                        <li className="text-center text-small">
                            <a href="https://www.linkedin.com/in/muhammad-ravat-1429a1258" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin fa-3x"></i>
                            <br /> LinkedIn
                            </a>
                        </li>
                        <li className="text-center text-small">
                            <a href="mailto:moravat763@gmail.com">
                            <i className="fa-solid fa-inbox fa-3x"></i>
                            <br /> Gmail
                            </a>
                        </li>
                        <li className="text-center text-small">
                            <a href="/CV/MuhammadRavat_CV.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-file fa-3x"></i>
                            <br /> General CV
                            </a>
                        </li>
                        <li className="text-center text-small">
                            <a href="/CV/M_Ravat_TechCV.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-file fa-3x"></i>
                            <br /> Tech based CV
                            </a>
                        </li>
                    </ul>

                </ul>
            </div>
            <div>
                <h2 className="mb-2 text-standard font-semibold text-gray-900 uppercase dark:text-white">Main Pages</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium text-standard">
                    <li>
                        <span id="mainHome" className="cursor-pointer hover:text-blue-500">Home</span>
                    </li>
                    <li>
                        <span id="mainProject" className="cursor-pointer hover:text-blue-500">Projects</span>
                    </li>
                    <li>
                        <span id="mainContact" className="cursor-pointer hover:text-blue-500">Contact Me</span>
                    </li>
                </ul>
            </div>
            
            <div className="contact w-max p-2 text-center text-standard bg-gray-100 rounded-lg shadow-md">
                <p className="font-bold mb-2">Contact Details</p>
                Number: <a href="tel:+447769004379" className="hover:text-blue-500">+44 (0)7769004379</a> <br />
                Email: <a href="mailto:moravat763@gmail.com" className="hover:text-blue-500">moravat763@gmail.com</a>
            </div>
        </div>

    )
}
export default Footer