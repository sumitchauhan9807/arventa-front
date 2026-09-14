import { appendBaseUrl } from '@/src/helpers/common';

const Team = (props) => {
  const team = props.team || [];
  const teamCount = team.length;

  return (
    <section style={{ padding: '50px' }} id="team" className="on-grey">
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            {/* Meet the Team */}
            <div className="container max-w-7xl mx-auto px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">{props.blockHeading?.heading}</h1>

                  <p className="text-gray-700 text-lg font-light">{props.blockHeading?.content}</p>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-wrap justify-center">
                {team.map((item, index) => {
                  // Change width depending on number of team members
                  let widthClass = 'w-full md:w-6/12 lg:w-3/12';

                  if (teamCount === 1) {
                    widthClass = 'w-full md:w-8/12 lg:w-6/12';
                  } else if (teamCount === 2) {
                    widthClass = 'w-full md:w-6/12 lg:w-6/12';
                  } else if (teamCount === 3) {
                    widthClass = 'w-full md:w-6/12 lg:w-4/12';
                  }

                  return (
                    <div key={index} className={`${widthClass} mb-10 px-6 sm:px-6 lg:px-4`}>
                      <div className="flex flex-col items-center">
                        {/* =========================
                            IMAGE + SOCIAL OVERLAY
                        ========================== */}

                        <div
                          className={`
                            relative
                            overflow-hidden
                            rounded-2xl
                            w-full
                            ${teamCount === 1 ? 'max-w-[400px]' : 'max-w-[300px]'}
                            max-h-[400px]
                            shadow-lg
                            shadow-gray-300/40
                            group
                           
                            
                           
                            hover:shadow-2xl
                            hover:shadow-indigo-500/30
                          `}
                        >
                          {/* Team Image */}
                          <img
                          // style={{height:"600px"}}
                            className="
                              w-full
                              max-h-[400px]
                              max-h-[500px]
                              object-cover
                              grayscale
                             group-hover:grayscale-0
                              
                            
                            "
                            src={item?.picture?.url ? appendBaseUrl(item.picture.url) : 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'}
                            alt={item?.name || 'Team member'}
                          />

                          {/* =========================
                              SOCIAL MEDIA OVERLAY
                          ========================== */}

                          <div
                            className="
                              absolute
                              bottom-0
                              left-0
                              right-0

                              flex
                              items-center
                              justify-center
                              gap-2

                              px-4
                              py-3

                              bg-white/85
                              backdrop-blur-md

                              translate-y-full

                              transition-transform
                              duration-500
                              ease-out

                              group-hover:translate-y-0
                            "
                          >
                            {/* LinkedIn */}
                            {item?.linkedin && (
                              <a
                                href={item.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                  flex
                                  items-center
                                  justify-center

                                  h-10
                                  w-10

                                  rounded-full

                                  bg-indigo-50

                                  transition-all
                                  duration-300

                                  hover:bg-indigo-100
                                  hover:scale-110
                                  hover:-translate-y-1
                                "
                              >
                                <i
                                  className="
                                    mdi
                                    mdi-linkedin
                                    text-indigo-500
                                  "
                                  style={{
                                    fontSize: '23px',
                                  }}
                                />
                              </a>
                            )}

                            {/* Twitter */}
                            {item?.twitter && (
                              <a
                                href={item.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="
                                  flex
                                  items-center
                                  justify-center

                                  h-10
                                  w-10

                                  rounded-full

                                  bg-blue-50

                                  transition-all
                                  duration-300

                                  hover:bg-blue-100
                                  hover:scale-110
                                  hover:-translate-y-1
                                "
                              >
                                <i
                                  className="
                                    mdi
                                    mdi-twitter
                                    text-blue-400
                                  "
                                  style={{
                                    fontSize: '23px',
                                  }}
                                />
                              </a>
                            )}

                            {/* Instagram */}
                            {item?.instagram && (
                              <a
                                href={item.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="
                                  flex
                                  items-center
                                  justify-center

                                  h-10
                                  w-10

                                  rounded-full

                                  bg-orange-50

                                  transition-all
                                  duration-300

                                  hover:bg-orange-100
                                  hover:scale-110
                                  hover:-translate-y-1
                                "
                              >
                                <i
                                  className="
                                    mdi
                                    mdi-instagram
                                    text-orange-400
                                  "
                                  style={{
                                    fontSize: '23px',
                                  }}
                                />
                              </a>
                            )}

                            {/* Facebook */}
                            {item?.facebook && (
                              <a
                                href={item.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="
                                  flex
                                  items-center
                                  justify-center

                                  h-10
                                  w-10

                                  rounded-full

                                  bg-blue-50

                                  transition-all
                                  duration-300

                                  hover:bg-blue-100
                                  hover:scale-110
                                  hover:-translate-y-1
                                "
                              >
                                <i
                                  className="
                                    mdi
                                    mdi-facebook
                                    text-blue-500
                                  "
                                  style={{
                                    fontSize: '23px',
                                  }}
                                />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* =========================
                            TEAM DETAILS
                        ========================== */}

                        <div className="text-center mt-6">
                          {/* Name */}
                          <h1
                            className="
                              text-gray-900
                              text-xl
                              font-bold
                              mb-1
                            "
                          >
                            {item.name || 'Team Member'}
                          </h1>

                          {/* Designation */}
                          <div
                            className="
                              text-gray-700
                              font-light
                              mb-2
                            "
                          >
                            {item.designation || 'Team Member'}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
