import PropTypes from 'prop-types';
export function ProjectsRef({websites}){
    return(
        <div className='flex-row w-[90%] mt-6 mx-auto'>
            <h1 className='text-large font-bold text-black dark:text-white'>My Websites: </h1>
            {websites.map(({ title, desc, gitLink, webLink, img, id }, index) => (
                <div key={index} id={id} className="border-4 border-black dark:border-white dark:bg-black dark:text-white bg-white flex flex-col md:flex-row items-start justify-between text-xl mt-4 p-4">
                    {/* Left Side (Text and Links) */}
                    <div className="flex flex-col  w-full md:w-auto mr-4">
                        <span className="flex items-center space-x-2">
                            <h1 className="font-bold text-large">{title}</h1>
                            <a href={webLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
                            <a href={gitLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </span>
                        <p className="mt-2 text-standard">{desc}</p>
                    </div>
                    {/* Image (Aligned Right on larger screens, full width on small screens) */}
                    <img src={img} alt={title} className="w-full md:w-[60%] md:object-cover mt-4 md:my-auto border-2 border-black dark:border-white" />
                </div>
            ))}
        </div>
    )
}
ProjectsRef.propTypes = {
    websites: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,  // `img` can be any type if it's an imported image file
        title: PropTypes.string.isRequired,
        desc:PropTypes.string.isRequired,
        gitLink:PropTypes.string.isRequired,
        webLink:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
      })
    ).isRequired,
};


export function ProjectsRef2({projects}){
    return(
        <div className='flex-row w-[90%] mt-6 mb-4 mx-auto'>
            <h1 className='text-large font-bold text-black dark:text-white'>My Projects: </h1>
            {projects.map(({ title, desc, gitLink, img, id }, index) => (
                <div key={index} id={id} className="border-4 border-black dark:border-white dark:bg-black dark:text-white text-black bg-white flex flex-col md:flex-row items-start justify-between text-xl mt-4 p-4">
                    {/* Left Side (Text and Links) */}
                    <div className="flex flex-col  w-full md:w-auto mr-4">
                        <span className="flex items-center space-x-2">
                            <h1 className="font-bold text-large">{title}</h1>
                            <a href={gitLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </span>
                        <p className="mt-2 text standard">{desc}</p>
                    </div>
                    {/* Image (Aligned Right on larger screens, full width on small screens) */}
                    <img src={img} alt={title} className="w-full md:w-[60%] md:object-cover mt-4 md:my-auto border-2 border-black dark:border-white" />
                </div>
            ))}
        </div>
    )
}
ProjectsRef2.propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.any.isRequired,  // `img` can be any type if it's an imported image file
        title: PropTypes.string.isRequired,
        desc:PropTypes.string.isRequired,
        gitLink:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
      })
    ).isRequired,
};