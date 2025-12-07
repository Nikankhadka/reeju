"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Home,
  BookOpen,
  Users,
  Lightbulb,
  Star,
  Menu,
  X,
  Video,
} from "lucide-react";

const ChildhoodEducationReport = () => {
  const [currentPage, setCurrentPage] = useState("cover");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [reportData, setReportData] = useState({
    studentName: "Reeju Deuja (IKO3006639)",
    teacherName: "Jacquie Kong",
    assignmentTopic: "ETCH107 ASSESSMENT 3 – WEBSITE (PART B)",
    date: "December 06 2025",
  });

  const sections = [
    { id: "cover", title: "Cover Page", icon: Home },
    { id: "introduction", title: "Introduction", icon: BookOpen },
    {
      id: "ctp",
      title: "Creativity Theories and Perspectives",
      icon: BookOpen,
    },
    { id: "findings", title: "Key Findings", icon: Lightbulb },
    { id: "video", title: "Video Presentation", icon: Video },
    { id: "conclusion", title: "Conclusion", icon: Star },
  ];

  const renderCoverPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 animate-fadeIn">
      <div className="text-center space-y-6 sm:space-y-8 max-w-2xl w-full">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-800 mb-4 sm:mb-6 animate-slideDown px-4">
            {reportData.assignmentTopic}
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg mx-4">
          <div className="space-y-2">
            <p className="text-purple-600 font-semibold text-sm sm:text-base">
              Student Name
            </p>
            <input
              type="text"
              value={reportData.studentName}
              onChange={(e) =>
                setReportData({ ...reportData, studentName: e.target.value })
              }
              className="w-full text-xl sm:text-2xl font-bold text-purple-900 text-center bg-transparent border-b-2 border-purple-300 focus:border-purple-500 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <p className="text-pink-600 font-semibold text-sm sm:text-base">
              Teacher Name
            </p>
            <input
              type="text"
              value={reportData.teacherName}
              onChange={(e) =>
                setReportData({ ...reportData, teacherName: e.target.value })
              }
              className="w-full text-lg sm:text-xl text-pink-900 text-center bg-transparent border-b-2 border-pink-300 focus:border-pink-500 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              Assignment Topic
            </p>
            <input
              type="text"
              value={"T3 ETCH107 EXPLORING CREATIVITY"}
              onChange={(e) =>
                setReportData({
                  ...reportData,
                  assignmentTopic: e.target.value,
                })
              }
              className="w-full text-lg sm:text-xl text-blue-900 text-center bg-transparent border-b-2 border-blue-300 focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          <p className="text-gray-600 font-medium pt-2 sm:pt-4 text-sm sm:text-base">
            {reportData.date}
          </p>
        </div>

        <button
          onClick={() => setCurrentPage("introduction")}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
          View Report
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    // Special handling for video page
    if (currentPage === "video") {
      return (
        <div className="p-4 sm:p-6 md:p-8 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4 sm:mb-6 animate-slideDown">
            Video Presentation
          </h2>

          {/* Video Player Area */}
          <div
            className="relative w-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl overflow-hidden shadow-inner"
            style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder - Replace with actual video */}
              <div className="text-center p-6">
                <Video className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400 mx-auto mb-4" />
                <p className="text-purple-600 font-semibold text-sm sm:text-base">
                  Video Player
                </p>
                <p className="text-purple-500 text-xs sm:text-sm mt-2">
                  https://www.youtube.com/watch?v=0GZdBuKxG2E
                </p>
              </div>

              {/* Example: YouTube Embed (uncomment and replace VIDEO_ID) */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/0GZdBuKxG2E"
                title="Video Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      );
    }

    const content = {
      introduction: {
        title: "Movement and Music: Introduction",
        body: `People have long recognised that movement and music support creative development in the early years because they allow children to express themselves, experiment, and imagine. Such active engagement in creating music allows children to convey meaning with sound, tempo, dynamics, and other musical structures via exploration of agency and self-expression (Howard & Mayesky, 2022; Macleod-Brisbane, 2020; Leong, 2022). Movement aids in sensory integration, regulates emotion, and causes divergent thinking. Teachers allow children to explore spontaneous dance when children have open-ended musical instruments like slinkies and scarves and space to move freely. In this way children will learn confidence, curiosity and creative thinking in all domains.`,
      },
      ctp: {
        title: "Creativity Theories and Perspectives",
        body: `Creative development in movement and music draws upon constructivist and socio-cultural theories of creativity. Through exploring and interacting with the environment and other people children learn about sound, rhythm and movement. In a similar vein, Howard and Mayesky (2022) support open-ended experiences as opportunities for children to create their own ideas through sound, rhythm and expression. Niland (2015) sees music as providing intrinsic motivation and an avenue for imagination through young children's creation, improvisation and interacting with stimuli. Isbell & Yoshizawa (2016) describe creativity as a mindset cultivated through curiosity, experimentation and opportunity to invent. Both movement and music are important to developing children's creative confidence and flexible thinking in meaningful, integrated ways (Isbell & Yoshizawa, 2016).
Data Collection:
• Classroom observations over a 12-week period
• Interviews with educators and parents
• Developmental assessment tools
• Play session documentation and analysis

The study focused on children aged 3-6 years in diverse educational settings, including traditional classrooms, Montessori environments, and play-based learning centers. Each setting provided unique insights into how structured and unstructured play contributes to developmental milestones.

Observations were conducted during various times of the day to capture different types of play activities and social interactions among children.`,
      },
      findings: {
        title: "Key Findings",
        body: `Our research revealed several significant findings about the role of play in early childhood education:

1. Cognitive Development: Children engaged in open-ended play demonstrated enhanced problem-solving abilities and creative thinking skills. Block building and imaginative play scenarios particularly supported spatial reasoning and planning.

2. Social-Emotional Growth: Cooperative play activities fostered empathy, communication, and conflict resolution skills. Children who participated in group play showed increased emotional regulation and peer relationship quality.

3. Language Development: Dramatic play and storytelling activities significantly enhanced vocabulary acquisition and narrative skills. Children naturally practiced language in meaningful contexts.

4. Physical Development: Active play contributed to gross and fine motor skill development, with children showing improved coordination and body awareness.

The integration of play-based learning approaches yielded measurable improvements in developmental outcomes across all domains studied.`,
      },
      conclusion: {
        title: "Conclusion",
        body: `This research reinforces the critical importance of play in early childhood education. The evidence clearly demonstrates that play-based learning is not an alternative to education but rather an essential component of effective early childhood pedagogy.

Key Recommendations:
• Educators should integrate diverse play opportunities throughout the curriculum
• Learning environments should provide both structured and unstructured play time
• Assessment methods should recognize play as a valid form of learning demonstration
• Professional development should emphasize play-based teaching strategies

Future research should continue to explore the long-term impacts of play-based early education and examine how digital tools might complement traditional play experiences.

By honoring play as the natural language of childhood, we create educational environments where children thrive, develop essential skills, and cultivate a lifelong love of learning.`,
      },
    };

    const currentContent = content[currentPage] || content.introduction;

    return (
      <div className="p-4 sm:p-6 md:p-8 animate-fadeIn">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 mb-4 sm:mb-6 animate-slideDown">
          {currentContent.title}
        </h2>
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          {currentContent.body}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
      {currentPage !== "cover" && (
        <>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </button>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-30 animate-fadeIn"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
            fixed lg:static inset-y-0 left-0 z-40
            w-72 bg-white/80 backdrop-blur-lg shadow-2xl p-4 sm:p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            animate-slideRight
          `}>
            <div className="mb-6 sm:mb-8 mt-12 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Table of Contents
              </h3>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>

            <nav className="space-y-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setCurrentPage(section.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                      currentPage === section.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                        : "text-gray-700 hover:bg-purple-50 hover:scale-102"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-300">
              <p className="text-xs sm:text-sm text-gray-700 break-words">
                <span className="font-semibold text-purple-700">Student:</span>{" "}
                {reportData.studentName}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 break-words">
                <span className="font-semibold text-pink-700">Teacher:</span>{" "}
                {reportData.teacherName}
              </p>
            </div>
          </aside>
        </>
      )}

      <main className="flex-1 overflow-y-auto">
        {currentPage === "cover" ? renderCoverPage() : renderContent()}
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideRight {
          animation: slideRight 0.5s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ChildhoodEducationReport;
