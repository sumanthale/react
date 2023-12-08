const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?1",
    },
    {
      name: "Project 2",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?2",
    },
    {
      name: "Project 3",
      description: "project description",
      link: "",
      imageURL: "https://source.unsplash.com/200x200/?random?3",
    },
  ];
  return (
    <>
      <section className="max-w-screen-md mx-auto mt-10 mb-[4.5rem]">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Projects</h2>
              <p className="font-serif text-sm dark:text-gray-400">
                My Projects
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="flex flex-col dark:bg-gray-900"
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={project.imageURL}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <h3
                      rel="noopener noreferrer"
                      href="#"
                      className="text-lg  tracki uppercase hover:underline dark:text-violet-400"
                    >
                      {project.name}
                    </h3>
                    <p className="flex-1 py-2 text-xs font-semibold leadi">
                      Te nulla oportere reprimique his dolorum
                    </p>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400 text-first-color">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View More{" "}
                        <i className="uil uil-arrow-right button__icon"></i>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
