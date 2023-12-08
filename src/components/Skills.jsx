const Skills = () => {
  const data = [
    {
      title: "Data Analysis",
      exp: 2,
      icon: "uil-analytics",
      open: true,
      list: [
        {
          name: "Python",
          percentage: "60%",
        },
        {
          name: "Power BI",
          percentage: "70%",
        },
        {
          name: "SQL",
          percentage: "50%",
        },
        {
          name: "Data Wrapper",
          percentage: "70%",
        },
      ],
    },
    {
      title: "Machine Learning",
      exp: 3,
      open: false,

      icon: "uil-money-bill",
      list: [
        {
          name: "TensorFlow",
          percentage: "80%",
        },
        {
          name: "Scikit-learn",
          percentage: "80%",
        },
        {
          name: "PyTorch",
          percentage: "70%",
        },
        {
          name: "MS Office",
          percentage: "90%",
        },
      ],
    },
    {
      title: "Web Developement",
      exp: 3,
      open: false,
      icon: "uil-brackets-curly",
      list: [
        {
          name: "HTML",
          percentage: "90%",
        },
        {
          name: "CSS",
          percentage: "80%",
        },
        {
          name: "JavaScript",
          percentage: "60%",
        },
        {
          name: "WordPress",
          percentage: "70%",
        },
      ],
    },
  ];
  return (
    <div>
      <section className="max-w-screen-md mx-auto" id="skills">
        <h2 className="text-center text-3xl">Skills</h2>
        <p className="text-lg text-center mb-10">My technical level</p>
        <div className="space-y-4">
          {data.map(({ exp, title, list, icon, open }) => (
            <details
              key={title}
              className="group [&_summary::-webkit-details-marker]:hidden"
              open={open}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <div className="flex gap-4 items-center">
                  <div>
                    <i
                      className={`uil ${icon} skills__icon text-2xl text-first-color`}
                    ></i>
                  </div>
                  <div>
                    <h1 className="text-base">{title}</h1>
                    <span className="text-sm">More than {exp} years</span>
                  </div>
                </div>
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              {list.map((course) => (
                <p className="mt-4 px-4 leading-relaxed" key={course.name}>
                  <div>
                    <div className="w-full flex justify-between">
                      <p className="text-title-color text-sm mb-2">
                        {course.name}
                      </p>
                      <p className="text-title-color text-sm mb-2">
                        {course.percentage}
                      </p>
                    </div>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="75"
                      className="block rounded-full bg-first-color-lighter"
                    >
                      <span
                        className="block h-1 rounded-full bg-first-color"
                        style={{ width: course.percentage }}
                      ></span>
                    </span>
                  </div>
                </p>
              ))}
            </details>
          ))}
        </div>
      </section>
      <section className="max-w-screen-md mx-auto mt-10">
        <h2 className="text-center text-3xl">Qualification</h2>
        <p className="text-lg text-center mb-10">My personal journey</p>

        <div className="container max-w-screen-md px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-5">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-first-color">
                <h3 className="text-3xl font-semibold">
                  <i className="uil uil-graduation-cap qualification__icon mr-2"></i>
                  Education
                </h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-7">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-4 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-first-color-lighter">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-first-color">
                  <h3 className="text-xl font-semibold tracki">Schooling</h3>
                  <p className="mb-1">Tejaswi High School</p>
                  <time className="text-xs tracki uppercase text-gray-400">
                    <i className="uil uil-calendar-alt mr-2"></i>
                    Dec 2016
                  </time>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-first-color">
                  <h3 className="text-xl font-semibold tracki">Intermediate</h3>
                  <p className="mb-1">Narayana Jr. College</p>
                  <time className="text-xs tracki uppercase text-gray-400">
                    <i className="uil uil-calendar-alt mr-2"></i>
                    2016 - 2018
                  </time>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-first-color">
                  <h3 className="text-xl font-semibold tracki">B.Tech</h3>
                  <p className="mb-1">GRIET</p>
                  <time className="text-xs tracki uppercase text-gray-400">
                    <i className="uil uil-calendar-alt mr-2"></i>
                    2019 - 2023
                  </time>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-first-color">
                  <h3 className="text-xl font-semibold tracki">
                    M.S in Computer Science
                  </h3>
                  <p className="mb-1">SLU</p>
                  <time className="text-xs tracki uppercase text-gray-400">
                    <i className="uil uil-calendar-alt mr-2"></i>
                    2023-2025
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
