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
  Music,
  Languages,
  Book,
  Blocks,
  Computer,
  BookMinus,
  HatGlasses,
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
    { id: "movement_music", title: "Movement and Music", icon: Music },
    {
      id: "language_literacy",
      title: "Language and Literacy",
      icon: Languages,
    },
    { id: "science", title: "Science", icon: Book },
    { id: "engineering", title: "Engineering", icon: Blocks },
    { id: "technologies", title: "Technologies", icon: Computer },
    { id: "mathematics", title: "Mathematics and Numeracy", icon: BookMinus },
    { id: "hass", title: "Humanities and Social Science", icon: HatGlasses },
    {
      id: "integrated_curriculum",
      title: "Integrated Curriculum (STEM/STEAM/STREAM/STEMIE)",
      icon: Lightbulb,
    },
    { id: "references", title: "References", icon: Star },
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
                src="https://www.youtube.com/embed/OAcReqYl2d8"
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
      cover: {
        title: "IKON Institute ETCH107 Assessment 3 – Website (Part B)",
        body: `Submitted By: Reeju Deuja (IKO3006639)
Submitted To: Jacquie Kong
Date of Submission: 06/12/2025`,
      },

      movement_music: {
        title: "Movement and Music",
        body: `People have long recognised that movement and music support creative development in the early years because they allow children to express themselves, experiment, and imagine. Such active engagement in creating music allows children to convey meaning with sound, tempo, dynamics, and other musical structures via exploration of agency and self-expression (Howard & Mayesky, 2022; Macleod-Brisbane, 2020; Leong, 2022). Movement aids in sensory integration, regulates emotion, and causes divergent thinking. Teachers allow children to explore spontaneous dance when children have open-ended musical instruments like slinkies and scarves and space to move freely. In this way children will learn confidence, curiosity and creative thinking in all domains.

        Creativity Theories and Perspectives
Creative development in movement and music draws upon constructivist and socio-cultural theories of creativity. Through exploring and interacting with the environment and other people children learn about sound, rhythm and movement. In a similar vein, Howard and Mayesky (2022) support open-ended experiences as opportunities for children to create their own ideas through sound, rhythm and expression. Niland (2015) sees music as providing intrinsic motivation and an avenue for imagination through young children's creation, improvisation and interacting with stimuli. Isbell & Yoshizawa (2016) describe creativity as a mindset cultivated through curiosity, experimentation and opportunity to invent. Both movement and music are important to developing children's creative confidence and flexible thinking in meaningful, integrated ways (Isbell & Yoshizawa, 2016).

Resources, Materials and Technologies
Materials for movement and music environment are open-ended, accessible, and inviting, such as tambourines, shakers, slinkies, drums, scarves, ribbons, or other materials from life that produce sounds. Use of digital technology, such as music apps, audio recording devices, and movement-based interactive media, can help children listen to and create patterns in movement and music for reflection (NAEYC & Fred Rogers Center, 2012). Kinaesthetic exploration tends to be organised through the inclusion of props such as slinkies stretched, shaken, bounced and manipulated in rhythmical ways; natural objects such as sticks, shells and stones. When provided with diverse resources which they can explore and experiment with, children show their creative capabilities through composing rhythms, sounds and imaginative movement.


Learning Experiences 
Developmentally appropriate, creativity focused, and grounded in research-based practices, each learning experience is carefully planned.


Age: 0 TO 2 YEARS
Learning Experience 1: Sensory Sound Exploration with Tambourine and Shaker
Infants use a tambourine and jingle shaker for exploring sound and creativity. Educators model tapping, shaking and rolling the instruments and infants are provided with opportunities to imitate and create their own movements. This encourages one to experiment in rhythm, to cause an effect, and to vary in sound (Howard & Mayesky, 2022).
 
Learning Experience 2: Discovery of Slinky Movement
Infants use the brightly coloured slinky by extending, bouncing, shaking and coiling it. Educators should term this movement (bounce, stretch) by encouraging infants to term and move themselves for the encouragement of kinaesthetic creativity and curiosity about movement (Niland, 2015).


Age: 2 to 3 years 

Learning Experience 3: Create-Your-Own Rhythm Patterns
Children create tempo and rhythm using tambourines and shakers. The teacher encourages children to make "fast", "slow", "quiet", and "loud" sounds, and create their own patterns with the musical sounds. This improvisational process helps musicians create music creatively (Howard & Mayesky, 2022).

Learning Experience 4: Movement Storytelling using Slinky.
Children tell a story about movement using a slinky (e.g., "Slinky snake wiggles through the grass"). The educator models movement and entices children to act out their own story. This lets children imagine and express movement with ability (Isbell & Yoshizawa, 2016).

Age: 3 to 5 years old

Learning Experience 5: Sound Story Creation
The children use tambourines, shakers, and drumsticks. In small groups, they work to tell a 'sound story' by assigning each instrument to a character or event such as rain, footsteps, or animal sounds. This enables symbolic thought, creativity, and cooperative improvisation of sorts (Connor & Toper, 2015).
Source: Connor, J., & Toper, C. A. by (2015).

Learning Experience 6: Movement Patterns with Slinky and Music.

The children explore the slinky to music at various speeds and rhythms, experimenting with individual movements, imagining how bodies and the slinky would respond to the sound of music. This encourages divergent thinking, also creative physical expression (Niland, 2015).
Reference: Niland, A. (2015).

Age: 6 to 8 years 
Learning Experience 7: Composition of rhythmic sequences

Children make a beat pattern on tambourines and shakers and record it digitally. Then they listen and refine. This promotes creative thinking, problem solving, and iterative design (NAEYC & Fred Rogers Center, 2012).
NAEYC and Fred Rogers Center are the source. (2012).

Learning Experience 8: Choreography Movement Routine

Children explore symmetry, shape and expressive movement by creating a short movement sequence using a slinky and then creating movement sequences using props and music. This supports creativity with innovation (Howard & Mayesky, 2022).
Reference: Howard, R., & Mayesky, M. (2022).`,
      },

      language_literacy: {
        title: "Language and literacy ",
        body: `1.Introductions

Language and literacy form a base for creative expression. Children creatively learn ideas with meaning and convey their feelings to others through stories, symbols, and sounds by expressing language. Children use sound storytelling. They use role-play. They use talk and multimodal texts. They use open-ended mark-making to engage in language, learn narrative skills, and express abstract ideas (Connor & Toper, 2015). They find playful opportunities. Educators help children build literacy skills within naturalistic, language-rich environments for curiosity, problem-solving and creative thinking. Slinkies, instruments and coloured objects are used for the ease of the expansion of vocabulary, for the creation of visual stories and for the stimulation of playful interaction and communication.

2. Creativity Theories and Perspectives

Creativity in language and literacy draws on socio-cultural and constructivist learning theories. Oral language, narration and co-mediation are the means by which children create meaning. Vygotskian theorists see language as a creative means of thinking and problem solving. Children co-construct ideas through imaginative play via language. Howard and Mayesky (2022) consider that providing children with open-ended materials and opportunities to engage in expression through drama and play are an important part of creative literacy which involve enacting and representing ideas using symbolic play (such as dolls). The Australian Education Research Organisation (2023) discusses sound and word play. These views stress language-rich, imaginative environments as important to fostering children's creative expression.

3. Resources, Materials and Technologies

Storybooks, puppets, music, picture cards and other items or loose parts that inspire imaginative storytelling can help develop children's creativity in language and literacy by sharing them. Storytelling can incorporate everyday items like a slinky, abacus or Rubik's cube to represent story characters or props. Digital tools like audio recorders, storytelling apps, and eBooks support multimodal interactions for inviting children toward creation, listening, and story revisiting (NAEYC & Fred Rogers Center, in 2012). Children access diverse materials. This access promotes abilities to create characters. This access promotes abilities to play with sounds. This access promotes abilities to describe movement. This access promotes abilities to share ideas. Children explore. Children develop emergent literacy and imagination.

4. Learning Experiences

All activities are research-based, developmentally appropriate, and aligned to a creativity-based approach to literacy.

Age: 0–2 Years

Learning Experience 1: Sound Play Storytelling (Shaker & Tambourine)

Teachers tell a story based on sound in which instrumental phrases and sounds repeat. Infants may shake or tap their instruments in response. It can support early communication, turn-taking, and creative sound-making (AERO 2023). 

Learning Experience 2: Slinky as a Story Object

The educator will introduce a character, such as "Slinky snake" (using a bright slinky), and model appropriate language to describe the character (e.g. "stretchy", "bouncy", "wiggly") while the infants look and move. This promotes sensory engagement and early symbolic thinking (Howard & Mayesky, 2022).

Age: 2–3 Years

Learning Experience 3: Object-Inspired Story Starters (Slinky & Rubik’s Cube)

Children are given a slinky, cube, or tambourine, and invent their own plausible fictional narrative (e.g. "The cube lives in a rainbow house"). Educators support vocabulary, sequencing and imagination. This promotes emergent storytelling and creative language (Connor & Toper, 2015).
Reference: Connor & Toper (2015).

Learning Experience 4: Action Rhyme With Musical Cues

Children follow the rhythm the teacher plays upon a tambourine like "tap = jump" or "shake = tiptoe" and imitate and improvise rhythms of their own. This supports oral language development, comprehension, and imaginative play according to Niland (2015).

Age: 3–5 Years

Learning Experience 5: Collaborative Sound Story Creation

Children use instruments to create characters and events in group storytelling, for example negotiating roles (e.g. "The slinky is the storm cloud") contributing ideas and sound effects. This can support the development of narrative, symbolic gestures, and creativity (Howard & Mayesky, 2022).
Reference: Howard & Mayesky (2022).

Learning Experience 6: Story Sequencing With Abacus Beads

Children use abacus beads to denote the beginning, middle and end of stories, and to tell imaginative and creative stories based on colours and patterns. This can form a basis for narrative organisation, oral language and creative problem solving (Connor & Toper, 2015).


Age: 6–8 Years

Learning Experience 7: Digital Story Recording With Props

Children record dialogue, sounds, and narration with the tablet, using the slinky, shaker, and other loose parts as characters in the digital narrative. This supports multimodality and literacy and lets children express ideas while offering chances to revise and refine them. (NAEYC & Fred Rogers Center, 2012).

Learning Experience 8: Character Creation Using Loose Objects

Children use objects (Rubik's cube, abacus beads, instruments) to create fantasy characters and write or tell their descriptions, personalities, and adventures. This develops children's creative writing skills, vocabulary, and symbolic thought of them (Isbell & Yoshizawa, 2016).
`,
      },
      science: {
        title: "Science",
        body: `1.Introduction 

Science encourages creation during early childhood. Children explore, investigate, ask questions of the world, and make sense of the world. Children experience sciences by touching and experimenting. They develop problem-solving skills, test hypotheses, and predict. Children receive support as they observe change, explore the materials around them and communicate their thinking to use their creativity. Scientific experiences nurture a child's natural curiosity and imagination as they make sense of the natural, physical and chemical worlds. Science inquiry in early childhood is aligned to the EYLF, and can build confident, involved learners who think critically and creatively to make sense of the world.

2. Creativity Theories & Perspectives Relevant to Science 

Following constructivist theories of Piaget and Vygotsky, knowledge of the science is constructed through active inquiry and social interactions. Howard and Mayesky (2022) state that children have opportunities to be creative when they are presented with open-ended materials and given the freedom to experiment with them. The inquiry learning model is derived from the Reggio Emilia preschool method. This view values children's hypotheses, the classroom environment as a "third teacher", and the power of exploration. Scientific creativity is also influenced by the divergent thinking theory of Guilford, which proposes multiple explanations and solutions. From these perspectives, the teacher is viewed as helping, challenging and provoking children's thinking, stimulating curiosity, and providing opportunity to experiment.

3. Resources, Materials & Digital Technologies for Science

An early years teacher can provide children with a range of open-ended materials and experiences for extending their scientific creativity. These may include water trays. These may include magnifying glasses. These may include pipettes. These may include natural materials. These may include ramps. These may include torches. These may include mirrors. These may include magnets and colour paddles. These may include recycled materials. Outdoor spaces can provide access to sand, soil, plants, insects, weather, shadows and to water. Digital technologies like digital microscopes, time-lapse applications, tablets for recording information, and science videos for children support inquiry through allowing children to record, analyse and reflect on investigations. Children predict, experiment, and reason through sensory activities. These include playing with messy substances, experimenting when mixing materials, and working with ice.

4. Learning Experiences to Foster Creativity in Science

A. Age 0–2 Years 

1. Sensory Water Inquiry

Babies and toddlers pour, splash and feel temperature differences. Educators support their interest by describing water movements, such as "It feels cold!" and inviting their expectations, such as "What happens when we tip it?"
Creativity, sensory exploration, and early causal reasoning.
Howard & Mayesky stated this in 2022.

2. Nature Basket Investigation

Children investigate baskets containing natural items like leaves, pinecones, and shells. Children are invited to consider the similarities and differences in texture, shapes, and sounds between objects.
Creativity focus upon: Curiosity, sensory discrimination, early classification.
Reference: Mayesky (2015).

B. Age 2–3 Years 

3. Mixing and Changing: Colour Science

Children have opportunities to mix together coloured water or paints and teachers use open questions such as "What do you think will happen if...".
Creatively focusing on hypothesis generation, experimentation, divergent thinking.
Reference: (Howard & Mayesky, 2022).

4. Exploring Shadows Outdoors

Children notice the change in shadows. They play with the way shadows of bodies and objects change.
Much imaginative play and cause-and-effect experimentation.
Reference: Wilson (n.d.).

C. Age 3–5 Years (Two Experiences)

5. Sink or Float Investigation

Kids guess if an item sinks or floats then test the guess, and write down results.
It focuses on prediction ability, reasoning ability, and problem-solving ability.
Reference: Howard & Mayesky (2022).

6. Mini-Beast Observation with Magnifiers

Children examine insects closely with magnifiers, and then draw their observations, with educators reinforcing scientific vocabulary throughout.
Creativity focus: Observation, representation, scientific drawing.
Reference: Wilson (n.d.).

D. Age 6–8 Years (Two Experiences)

7. Simple Chemical Reactions (Vinegar & Bicarbonate Soda)

Children observe the reactions, describe what they see, and talk about the formation of bubbles.
Creativity focus: inquiry, reasoning, experimenting around variables.
Reference within: Howard, H., & Mayesky, M. (2022).

8. Weather Station Investigation

Children build simple rain gauges and wind catchers from recycled materials, and they collect data with the equipment during one week.
Integrating engineering, science, analysis, and creative problem-solving inside teams.
Stone-MacDonald et al. (2015) is the reference in this case.
`,
      },

      hass: {
        title: "Humanities and Social Science",
        body: `HASS promotes creativity by exploring social, cultural, and environmental contexts, encouraging empathy, perspective-taking, and innovation.

Resources: maps, globes, photographs, artefacts, storybooks, dress-up clothes, role-play materials, tablets, cameras, virtual field trips, storytelling apps.

Learning Experiences:
- Family photo exploration  
- Cultural music & movement  
- Role-play community helpers  
- Maps of local spots  
- Timelines & community stories  
- Community walk & observation  
- Environmental investigation projects  
- Cultural festival project  

References: Howard & Mayesky (2022); Mayesky (2015); Wilson (n.d.); Stone-MacDonald et al. (2015).`,
      },

      integrated_curriculum: {
        title: "Integrated Curriculum (STEM, STEAM, STREAM, STEMIE)",
        body: `Integrated learning (STEAM, STREAM, STEMIE) enhances creativity by connecting disciplines, solving real-world problems, and reflecting on discoveries.

Resources: blocks, construction toys, natural materials, art supplies, measuring instruments, digital tablets, computers, coding kits, robotics, gardens, neighborhood spaces, multimedia tools.

Learning Experiences:
- Ages 0–2: Sensory STEM exploration, interactive story & music play.  
- Ages 2–3: Building & art integration, nature & technology play.  
- Ages 3–5: Simple robotics & storytelling, math & science garden project.  
- Ages 6–8: Engineering & environmental innovation, STEAM exhibition.  

References: Howard & Mayesky (2022); Stone-MacDonald et al. (2015); Wilson (n.d.).`,
      },

      references: {
        title: "References",
        body: `ACECQA (2023a, 2023b); Australian Education Research Organisation (2023); Connor & Toper (2015); Derman-Sparks & Edwards (2020); Howard & Mayesky (2022); Isbell & Yoshizawa (2016); Mayesky (2015); NAEYC & Fred Rogers Center (2012); Niland (2015); Pantoya et al. (2015); Stone-MacDonald et al. (2015); University of Nevada Cooperative Extension (2019); Wilson (n.d.)`,
      },
    };

    const currentContent = content[currentPage] || content.movement_music;

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
