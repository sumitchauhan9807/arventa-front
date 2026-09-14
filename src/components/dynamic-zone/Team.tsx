import { appendBaseUrl } from "@/src/helpers/common";

const Team = (props) => {
  const team = props.team || [];
  const teamCount = team.length;

  return (
    <div id="team">
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mt-8">
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
                    <div key={index} className={`${widthClass} mb-6 px-6 sm:px-6 lg:px-4`}>
                      <div className="flex flex-col items-center">
                        {/* Avatar */}
                        <a href="#" className="mx-auto">
                        <img className={` w-full ${teamCount === 1 ? "max-w-[400px]" : "max-w-[300px]"} max-h-[400px]  object-cover rounded-2xl shadow-lg shadow-gray-300/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/30 `} src={ appendBaseUrl(item.picture.url) || "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" } alt={item.name || "Team member"} />
                        </a>

                        {/* Details */}
                        <div className="text-center mt-6">
                          {/* Name */}
                          <h1 className="text-gray-900 text-xl font-bold mb-1">{item.name || 'Team Member'}</h1>

                          {/* Title */}
                          <div className="text-gray-700 font-light mb-2">{item.designation || 'Team Member'}</div>

                          {/* Social Icons */}
                          <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            {/* Linkedin */}
                            <a href={item.linkedin || '#'} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                              <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2" />
                            </a>

                            {/* Twitter */}
                            <a href={item.twitter || '#'} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                              <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2" />
                            </a>

                            {/* Instagram */}
                            <a href={item.instagram || '#'} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                              <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                            </a>
                            {/* Instagram */}
                            <a href={item.facebook || '#'} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                              <i className="mdi mdi-facebook text-blue-400 mx-auto mt-2" />
                            </a>
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
    </div>
  );
};

export default Team;
