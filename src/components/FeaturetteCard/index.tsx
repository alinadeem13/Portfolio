import React from "react";
import { FaLaptopCode, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Skill {
  name: string;
  level: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML", level: "Expert", percentage: 95 },
  { name: "CSS", level: "Expert", percentage: 90 },
  { name: "JavaScript", level: "Advanced", percentage: 85 },
  { name: "TypeScript", level: "Advanced", percentage: 80 },
  { name: "React", level: "Advanced", percentage: 85 },
  { name: "Redux", level: "Intermediate", percentage: 70 },
  { name: "Tailwind CSS", level: "Advanced", percentage: 85 },
  { name: "Next.js", level: "Advanced", percentage: 80 },
  { name: "Git", level: "Advanced", percentage: 85 },
];

const renderStars = (percentage: number) => {
  const fullStars = Math.floor(percentage / 20);
  const hasHalfStar = percentage % 20 >= 10;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar
          key={`full-${i}`}
          className="text-[#42f584] text-sm md:text-base"
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt className="text-[#42f584] text-sm md:text-base" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          className="text-gray-300 text-sm md:text-base"
        />
      ))}
    </div>
  );
};

const FeaturetteCard: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 w-full mx-auto bg-white rounded-lg md:rounded-xl shadow-lg border-2 border-[#42f584]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 border-b pb-4 border-gray-100">
        <div className="flex items-center space-x-3 md:space-x-4 mb-3 sm:mb-0">
          <div className="p-2 md:p-3 bg-[#f0fff4] rounded-lg">
            <FaLaptopCode className="text-[#42f584] text-2xl md:text-4xl" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-smooch-sans">
              Frontend Developer
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Creating beautiful and responsive user interfaces
            </p>
          </div>
        </div>
        <div className="block w-full sm:w-auto">
          <div className="px-3 py-1 md:px-4 md:py-2 bg-[#f0fff4] text-[#42f584] text-sm md:text-base font-medium rounded-lg text-center sm:text-left">
            2+ Years Experience
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 font-smooch-sans">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-3 md:p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-1 md:mb-2">
                <span className="font-medium text-gray-800 text-sm md:text-base">
                  {skill.name}
                </span>
                <span className="text-xs md:text-sm text-gray-500">
                  {skill.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                <div
                  className="bg-[#42f584] h-1.5 md:h-2 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="mt-1 md:mt-2 flex justify-end">
                {renderStars(skill.percentage)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm md:text-base text-gray-600">Always learning and improving</p>
        <button className="w-full sm:w-auto px-4 py-2 bg-white text-[#42f584] border border-[#42f584] rounded-lg hover:bg-[#42f584] hover:text-white transition-colors">
          View Projects
        </button>
      </div> */}
    </div>
  );
};

export default FeaturetteCard;
