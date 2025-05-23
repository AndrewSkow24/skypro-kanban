import TasksColumn from "../TasksColumn/TasksColumn";

const Main = () => {
  const noStatusTasks = [
    {
      theme: "_orange",
      group: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
    },
    {
      theme: "_green",
      group: "Research",
      title: "Название задачи",
      date: "30.10.23",
    },
    // 3
    {
      theme: "_orange",
      group: "Research",
      title: "Название задачи",
      date: "30.10.23",
    },
    // 4
    {
      theme: "_purple",
      group: "Copywriting",
      title: "Название задачи",
      date: "30.10.23",
    },
    // 5
    {
      theme: "_orange",
      group: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
    },
  ];
  const haveToDoTasks = [
    {
      theme: "_green",
      group: "Research",
      title: "Название задачи",
      date: "30.10.23",
    },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* задачи без статуса */}
            <TasksColumn status="Без статуса" tasksArray={noStatusTasks} />

            {/* нужно сделать */}
            <TasksColumn status="Нужно сделать" tasksArray={haveToDoTasks} />

            {/* в работе */}
            <div className="main__column">
              <div className="column__title">
                <p>В работе</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          fill="none"
                          height="13"
                          viewBox="0 0 13 13"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect fill="white" height="13" width="13" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _purple">
                        <p className="_purple">Copywriting</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          fill="none"
                          height="13"
                          viewBox="0 0 13 13"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect fill="white" height="13" width="13" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _orange">
                        <p className="_orange">Web Design</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          fill="none"
                          height="13"
                          viewBox="0 0 13 13"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect fill="white" height="13" width="13" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* тестирование */}
            <div className="main__column">
              <div className="column__title">
                <p>Тестирование</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          fill="none"
                          height="13"
                          viewBox="0 0 13 13"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect fill="white" height="13" width="13" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* готово */}
            <div className="main__column">
              <div className="column__title">
                <p>Готово</p>
              </div>
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__group">
                      <div className="card__theme _green">
                        <p className="_green">Research</p>
                      </div>
                      <a href="#popBrowse" target="_self">
                        <div className="card__btn">
                          <div />
                          <div />
                          <div />
                        </div>
                      </a>
                    </div>
                    <div className="card__content">
                      <a href="" target="_blank">
                        <h3 className="card__title">Название задачи</h3>
                      </a>
                      <div className="card__date">
                        <svg
                          fill="none"
                          height="13"
                          viewBox="0 0 13 13"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_415)">
                            <path
                              d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                              stroke="#94A6BE"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                              stroke="#94A6BE"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_415">
                              <rect fill="white" height="13" width="13" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>30.10.23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
