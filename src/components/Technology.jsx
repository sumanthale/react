const Technology = () => {
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Projects</h2>
              <p className=" text-sm dark:text-gray-400">My Projects</p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="shadow-lg flex flex-col dark:bg-gray-900 h-56">
                <div className="flex flex-col justify-center items-center flex-1 p-6 bg-container-color rounded">
                  <h1>
                    <i className="uil uil-analytics skills__icon text-first-color text-xl mr-2 "></i>
                    Data Analysis
                  </h1>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                    <span>
                      View More{" "}
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                </div>
              </article>
              <article className="shadow-lg flex flex-col dark:bg-gray-900 h-56">
                <div className="flex flex-col justify-center items-center flex-1 p-6 bg-container-color rounded">
                  <h1>
                    <i className="uil uil-money-bill skills__icon text-first-color text-xl mr-2 "></i>
                    Machine Learning
                  </h1>
                  <div className=" flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                    <span>
                      View More{" "}
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                </div>
              </article>
              <article className="shadow-lg flex flex-col dark:bg-gray-900 h-56">
                <div className="flex flex-col justify-center items-center flex-1 p-6 bg-container-color rounded">
                  <h1>
                    <i className="uil uil-arrow skills__icon text-first-color text-xl mr-2 "></i>
                    Web Developement
                  </h1>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                    <span>
                      View More{" "}
                      <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Technology;
