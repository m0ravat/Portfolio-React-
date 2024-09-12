import PropTypes from 'prop-types';
export function ProjectsRef({websites}){
    return(
        <div className='flex-row w-[90%] mt-10 mx-auto'>
            <h1 className='text-2xl font-bold'>My Websites: </h1>
            {websites.map(({ title, desc, gitLink, webLink, img, id }, index) => (
                <div key={index} id={id} className="border-4 border-black bg-white flex flex-col md:flex-row items-start justify-between text-xl mt-4 p-4">
                    {/* Left Side (Text and Links) */}
                    <div className="flex flex-col  w-full md:w-auto mr-4">
                        <span className="flex items-center space-x-2">
                        <h1 className="font-bold">{title}</h1>
                        <a href={webLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
                        <a href={gitLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </span>
                        <p className="mt-2">
                        {desc}
                        </p>
                    </div>

                    {/* Image (Aligned Right on larger screens, full width on small screens) */}
                    <img src={img} alt={title} className="w-full md:w-[60%] md:object-cover mt-4 md:my-auto" />
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