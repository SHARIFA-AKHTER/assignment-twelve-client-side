const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-2xl"
            alt="Box Office News"
          />
          <div className="text-center lg:text-left lg:mr-10 mt-6 lg:mt-0">
            <h1 className="text-4xl sm:text-5xl font-bold">Box Office News!</h1>
            <p className="py-4 text-base sm:text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
