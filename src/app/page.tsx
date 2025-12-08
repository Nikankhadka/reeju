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

      engineering: {
        title: "Engineering",
        body: `1.Introduction 

Early childhood engineering, with a focus upon problem-solving, design, and experimentation, builds skills in manipulating materials and building structures. Unstructured challenges can help people develop critical thinking skills and resilience, also to cope with failure and the need for redesign. Children play with open-ended building tasks and simple machines along with construction, so they strengthen spatial awareness, and they know cause and effect. Children become more creative thinkers when they mix engineering with other disciplines such as science or mathematics and explore multiple solutions and designs. In line with the EYLF, through learning experiences involving engineering, children develop as confident, involved learners who make plans, experiment, and consider and reflect on problems that occur in the real world (Howard & Mayesky, 2022).

2.Creativity Theories & Perspectives Relevant to Engineering

Constructivist theories (Piaget, Vygotsky) stress exploration and social interaction in children's learning, while engineering creativity emerges when children are provided with open-ended materials and design challenges without predefined solutions (Howard & Mayesky, 2022). Theories of inquiry-based and project-based learning, as well as the Reggio Emilia approach, view the environment as a "third teacher" that promotes problem-solving and experimentation. Guilford's divergent thinking theory suggests that children create and engineer multiple solutions to a construction design problem. Teachers guide, scaffold, and encourage children to collaborate, use rich resources, and apply an engineering design process to create, test, modify, and analyse designs.

3.Resources, Materials & Digital Technologies for Engineering

Blocks, LEGO, recycled boxes, straws, connectors, ramps, pulleys, magnets and simple machines can be used by teachers to develop students' engineering and design thinking skills. Students build with sticks stones and shells using natural materials. Digital tools can also be utilised throughout exploratory and design challenges, such as coding apps, robotics kits, tablets to document designs, and 3D printing applications. Learning opportunities can include clay modelling, water flow, bridge building and testing, and spatial reasoning and design iteration skills learning. Open-ended materials allow children to express and refine their ideas with peers, work with peers, and engage in imaginative and engineering-like processes, thereby fostering critical thinking and innovative solutions (Howard & Mayesky, 2022).

Learning Experiences to Foster Creativity in Engineering

A. Age 0–2 Years

 1.Stacking and Balancing Blocks:Children play with soft light blocks adults model block stacking.

Creativity focus: Cause-and-effect, early spatial reasoning (Howard & Mayesky, 2022).

2.Rolling Objects: Interact on ramps, tubes, and balls to learn about rolling motion and gravity.

Creative thinking includes observation. Creative thinking includes experimentation. Creative thinking includes problem-solving from Mayesky, 2015.

B. Age 2-3 years 

3. Construction: Children make bridges, towers, and other structures with building blocks and recycled materials.

Creativity focus involves spatial reasoning also divergent thinking (Howard & Mayesky, 2022).

4. Simple Pulleys & Levers: Introduce children to levers, toys, or boxes with which to experiment with lifting and sliding objects.
Creative focus: Cause-and-effect, experimentation of Wilson, n.d.

C. Age 3-5 years 

5.Bridge and Tower Challenge: Teams of children construct a bridge and tower from blocks or recycled materials, testing the constructions for stability.
Solve problems. Design iteratively. Collaborate (Howard & Mayesky, 2022).

6. Water Flow: Use gutters, pipes, and containers for the investigation of water flow.

Creativity focus: Engineering thinking, experimentation, predicting outcomes; source Wilson, no date.

7. Marble Run Engineering: Create marble runs with tubes, connectors, and recycled materials. Ensure successful runs by modifying designs.
Think critically, iterate designs, and collaborate with others as areas to focus on (Howard & Mayesky, 2022).

8. With Simple Robotics or Coding Challenge: Complete a series of tasks with age-appropriate coding or robotics kits.
Creativity focus includes computational thinking problem solving and innovative design (Stone-MacDonald et al., 2015).`,
      },

      technologies: {
        title: "Technologies ",
        body: `1.Introduction 

In early childhood, technologies allow children to be creative with tools that ease their ability to explore, experiment, and express themselves. Children use digital devices, software, and multimedia for documenting and displaying ideas, problem-solving, and developing new and original solutions to problems. Technology enables collaboration, reflection and design iterations, making it possible for children to visualise, manipulate and experience materials and concepts in a virtual environment. It also supports learning, creativity and critical thinking alongside hands-on experiences. Technology also supports the dispositions of EYLF's element of confident, involved learners, enabling children to explore inquiry, problem-solve, express ideas in innovative ways and prepare for a digital future (Howard & Mayesky, 2022).

2.Creativity Theories & Perspectives Relevant to Technologies
Constructivist theories (Piaget, Vygotsky) about experiential and social learning support technology-based education. According to Howard and Mayesky (2022), children's creativity can flourish with open-ended technology and no predetermined outcome. Reggio Emilia views the environment as the "third teacher" and uses digital media to express, collaborate, and reflect; divergent thinking (Guilford) theories differentiate fluency, flexibility, originality, and elaboration as cognitive processes which projects (multimedia), coding, and digital storytelling can support. Teachers can foster innovation. Teachers can sharpen students' problem-solving and creativity with effort. This happens by helping students use technology responsibly. This happens by helping students experiment. This happens by helping students engage with a wide variety of digital experiences.

3.Resources
Introduction 

In early childhood, technologies allow children to be creative with tools that ease their ability to explore, experiment, and express themselves. Children use digital devices, software, and multimedia for documenting and displaying ideas, problem-solving, and developing new and original solutions to problems. Technology enables collaboration, reflection and design iterations, making it possible for children to visualise, manipulate and experience materials and concepts in a virtual environment. It also supports learning, creativity and critical thinking alongside hands-on experiences. Technology also supports the dispositions of EYLF's element of confident, involved learners, enabling children to explore inquiry, problem-solve, express ideas in innovative ways and prepare for a digital future (Howard & Mayesky, 2, Materials & Digital Technologies for Creativity
Teachers use technology such as tablets, computers, interactive whiteboards, cameras, coding kits, multimedia apps, educational videos, e-books, drawing apps, augmented reality, and virtual reality apps by exploring, discovering, and solving problems. Digital collaboration skilling can mean children use online collaborative tools. The children share their ideas. The children contribute to collaborative projects. When physical and digital environments integrate through tools like tablets to document experiments or create digital stories, the integration can stretch the boundaries of hands-on and digital experiences. Age-appropriate technologies with open ends encourage invention reflection and experimentation. Teachers create spaces with technology use that is purposeful for enabling children to be creative, digitally literate, and confident to use tools to express, explore, and change their world (Howard & Mayesky, 2022).

Learning Experiences to Foster Creativity in Technologies

A. Age 0–2 Years

1.Digital Story Exploration: Babies view on-device storybooks or use cause-and-effect apps on a touch screen.
Creativity focus: sensory exploration and early interactions with technology (Howard & Mayesky, 2022).

2.Photo & Video Documentation: Educators observe and photograph children at play with tablets or cameras.
Creativity focus: observation, self-expression with narratives, and reflection (Mayesky, 2015).

B. Age 2-3 years 

3. Interactive Drawing Apps: Use simple apps for children to make drawings or patterns.

Creativity focus: Visual arts, exploration, fine motor skill development (Howard & Mayesky, 2022).

4. Digital Music & Rhythm Play: Children create sounds and beats using music apps.

Creativity focus: auditory exploration, improvisation, creative expression in Wilson (n.d.).

C. Age 3-5 years 

5. Coding Toys and Simple Robotics: kits suited to the age to follow sequences and solve simple puzzles.

Creativity stresses problem solve, think logically, and experiment in addition (Howard & Mayesky, 2022).

6. Digital storytelling projects: Stories contain photographs, drawings, and audio recordings.

Creativity focus: Narrative creativity, collaboration and reflection (Wilson, date unknown).

D. Age 6-8 years 

7. Multimedia Presentations: Children create presentations through images, text, audio, and video.

Creativity: Innovate, plan, and communicate digitally per (Howard & Mayesky, 2022).

8. App Game Design: Children plan, design, and test apps or games appropriate toward their age group.

Creativity focus involving design thinking, problem solving, and iteratively experimenting within (Stone-MacDonald et al., 2015).`,
      },

      mathematics: {
        title: "Mathematics",
        body: `1.Introduction 

 Early childhood mathematics encourages creative thinking as children explore patterns, relationships, and problem-solving within real-world contexts. Children also learn of math concepts through objects, counting, measuring, sorting, and comparing objects. These activities provide children with opportunities in order to think flexibly and creatively about math. Mathematics experiences that are creative allow children to reason, visualise spatially and think critically as they test, identify patterns, and solve problems. Learning numeracy involves using play, art and science to explore, imagine and create. The EYLF states that children learn numeracy and become confident, involved learners. They use logic, reasoning, problem-solving, and creativity for sense-making of their world. They also interact in mathematical tasks in everyday life per Howard & Mayesky, 2022.

2.Creativity Theories & Perspectives Relevant to Mathematics

Piaget and Vygotsky have constructivist approaches to learning that stress children learn math through exploration, interaction and reflection (Howard & Mayesky, 2022). Creative thinking is encouraged in moments when children manipulate materials, explore patterns, and tackle open-ended problems. Discovery is supported with inquiry methods (students ask questions, experiment and talk about what they are doing) and the Reggio Emilia approach (the Reggio approach considers the environment the "third teacher.") Divergent thinking offers several solutions to numerical and spatial problems (Guilford 1950). Teachers help students build mathematical and metacognitive abilities while allowing opportunities to explore, reason, and argue.

3. Resources, Materials & Digital Technologies for Mathematics

Teachers can provide children interlocking blocks. Teachers can also provide pattern tiles. Teachers can give unusual materials like shells, cones, stones, or sticks. Teachers can provide counters, beads, measuring cups, number cards, and elementary geometric forms toward counting, sorting and creating patterns. Digital learning experiences may include maths apps, tablets, digital microscopes to measure objects, and online pattern games. Maths learning is supported through everyday activities like cooking, gardening and shopping role play. Resources are open-ended for encouraging pupils to explore, estimate, compare and reason. Physical, natural, and digital resources for children help children visualise ideas, test hypotheses, articulate creative solutions, and develop confidence and fluency within children (Howard & Mayesky, 2022).

Learning Experiences to Foster Creativity in Mathematics

A. Age 0–2 Years

1.Sorting and Matching Objects:Babies group items based on color shape or size.

Creativity emphasis: observing, classifying, and pattern recognition within (Howard & Mayesky, 2022).

2.Stacking and Nesting Cups teach size spatial relationship and balance.

Creativity focuses on spatial awareness, problem-solving, early measurement in (Mayesky, 2015).

B. Age 2-3 years 

3. Children count shells, stones, or leaves using natural materials.

Creativity focus involves numeracy, estimation, and one-to-one correspondence (Howard & Mayesky, 2022).

4. Blocks or Beads: Patterns can be created, patterns can be expanded.

Wilson, n.d. states creativity focus includes divergent thinking, pattern recognition, and sequencing.

C.Age 3-5 years 

5. Measurement Exploration: Measure sand, water, or objects using cups, spoons, and rulers.

Creativity focus: comparative reasoning, experimentation, problem-solving for all. (Howard & Mayesky, 2022)

6. Shape and Geometry Hunt: Look for shapes and create structures.

Creativity focus: Spatial reasoning, classification, representation (Wilson, n.d.).

D. Age 6-8 years

7. Simple Data Collection & Graphing: Children survey classmates among objects, and draw a graph.

Creativity focus on analysis, visualisation, problem-solving. (Howard & Mayesky, 2022)

8. Math Problem Challenges: Present students with open ended maths problems with multiple solutions for them.

Creativity focus includes divergent thinking, reasoning, and flexible problem solving; Stone-MacDonald et al., 2015.`,
      },

      hass: {
        title: "Humanities and Social Science",
        body: `1.Introduction 

HASS in previous year levels promotes child creativity by guiding children to explore their world, other people and cultures, and their lives and experiences in the past and present through storytelling, role playing, mapping and the investigation of their communities, which develop their problem-solving, critical thinking and imagination skills.Creative HASS experiences foster empathy, perspective-taking and innovation as young children consider the effect on others whilst proactively offering solutions to issues impacting society or the environment. They support children's development as confident and involved learners, as outlined in the EYLF (Howard & Mayesky, 2022) by engaging critically and creatively with social, cultural and environmental contexts.

2.Creativity Theories & Perspectives Relevant to HASS 

Constructivist theories of Piaget and Vygotsky assert that children construct knowledge about society, culture, and the natural world through exploration, social interaction, inquiry and reflection. Howard and Mayesky (2022) state that children create through open-ended problem exploration, solution investigation, and original representation creation. Inquiry learning draws from theorists like Reggio Emilia, who encourages children to ask questions, view things in a different way, and document their learning. Divergent thinking theorist Guilford believes children should explore multiple alternative and creative explanations in the HASS context. Teachers' guidance of children's exploration, reflection, and collaboration prepares children as critical, creative, and socially responsible learners (Mayesky, 2015).

3.Resources, Materials & Digital Technologies for HASS 

In HASS, teachers create by using maps, globes, photographs, artefacts, storybooks, timelines, dress-up clothes from different cultures, role-play, investigate outdoors plus take excursions, and connect with the community to investigate the local area, community, heritage and societies. Digital tools like tablet computers, still and moving image cameras, interactive maps, virtual field trips and storytelling apps research, document, and collaborate on projects. Open-ended tasks invite questioning in addition to critical thinking and creative expression. Early childhood educators use physical resources. They use digital resources. They use cultural resources to support children in exploring history. They explore geography. They explore social structures. They develop empathy. They use critical thinking. They use imaginative problem-solving in real-world contexts (Howard & Mayesky, 2022).

Family Photo Exploration: Babies and toddlers explore family photos about relatives and relationships.

Creativity focus includes recognition, early social understanding, and narrative abilities of a kind (Howard & Mayesky, 2022).
Cultural Music & Movement: Songs, instruments, and dances of different cultures are learned.

Creativity focuses on expression, cultural understanding, imaginative play (Mayesky, 2015).

3. Role-Play Community Helpers: Children act as community helpers such as doctors, firefighters, or shopkeepers.
Creativity focus: Creating with imagination, thinking divergently, and empathy in (Howard & Mayesky, 2022).

4. Maps of familiar local spots can be explored using simple identification exercises.

Creativity focus: Spatial reasoning observation and questioning (Wilson, n.d.).

5. Children tell stories about the past and present and create timelines in communities or families.

Concentrate on narrative creativity, representation, and critical thinking (Howard & Mayesky, 2022).

6. Community Walk & Observation: Visit local parks, streets, or gardens for recording observations.

Creativity practice involves inquiry observation problem-solving per Wilson, n.d.

7. When children investigate environmental issues, they research recycling, water use, or local conservation programs in their community.
Creativity focus: critical thinking, problem-solving, collaboration within (Howard & Mayesky, 2022).

8. Cultural Festival Project: Pick a festival. The festival must come from another culture. Depict the festival with models, drawings or other media.
Creativity focus stresses research, collaboration, and imaginative representation in (Stone-MacDonald et al., 2015).
`,
      },

      integrated_curriculum: {
        title: "Integrated Curriculum (STEM, STEAM, STREAM, STEMIE)",
        body: `Introduction 

If people put it into a STEAM (STEM with an arts focus), STREAM (with a reading/research focus) or STEMIE (with an Innovation & Entrepreneurship focus) context, creativity improves when they integrate, take hands-on approaches, solve real-world problems, approach systems, connect disciplines, inquire, design, and reflect with children. Interdisciplinarity causes children to think critically, to create, and to collaborate as they work on open-ended projects, as they hypothesise and experiment, and as they share their discoveries and gain insights. Experiences of integrated learning in alignment with the EYLF promote learners involved and confident. These learners use creative solutions within social, artistic, mathematical, technological, and scientific contexts. They can think with creativity. They can learn using mistakes. They can take risks (Howard & Mayesky, 2022).

Creativity Theories & Perspectives Relevant to Integrated Curriculum

Constructivist theorists Piaget and Vygotsky support interdisciplinary programs and curricula. These programs and curricula are based on meaning-making within explorative environments that promote social interaction. Howard and Mayesky (2022) describe creativity as children engage within open-ended, cross-curricular activities. Both inquiry-based and project-based learning are based on the Reggio Emilia approach, viewing the environment as a "third teacher" enabling exploration and experimentation. Guilford's divergent thinking stresses many solutions and approaches to problems. Teachers scaffold the teaching of these concepts and skills across STEM, Arts, literacy and innovation activities, using verbal and non-verbal prompts to support critical and creative thinking, reflection, collaboration and problem-solving.

Resources, Materials & Digital Technologies for Integrated Curriculum

Possible materials are blocks, construction toys, natural materials, art and craft materials, measuring instruments, technological equipment such as digital tablets, computers, coding kits, and robotics. Gardens, the neighborhood and urban spaces represent outdoor, natural and cultural resources for use. Digital tools like multimedia, data collection, 3D modelling, and virtual experiments improve creative ability, problem-solving ability, and documentation. Open-ended materials foster creative thinking through exploration by encouraging experimentation and iteration. Children explore science, technology, engineering, mathematics, art, literacy, and entrepreneurship with physical, digital, and natural materials as they construct knowledge and collaboratively solve problems (Howard & Mayesky, 2022).

Learning Experiences to Foster Creativity in Integrated Curriculum

A. Age 0–2 Years

1. Sensory STEM Exploration:Water joins sand along with natural materials also art supplies which makes sensory exploratory play experiences.
Creativity focus includes sensory exploration, experimenting, and imaginative thinking Howard & Mayesky, 2022.

2.Interactive Story & Music Play: Exploring music, movement, and storytelling with focus upon rhythm and patterns.
Creative expression, observation, and early literacy are key in development (Mayesky, 2015).

B. Age 2-3 years 

3. Building and Art Integration: Construction and design occur using blocks, loose parts, and paint.
Creativity focuses on spatial reasoning, diverges in thinking, and expresses aesthetics (Howard & Mayesky, 2022).

4. Nature & Technology Play: Use tablets or cameras for exploration of natural objects and making observations.
Creativity focus: inquiry, observation, and early digital literacy (Wilson, n.d.).

C. Age 3-5 years 

5. Simple Robotics & Storytelling: Children program a robot for following a sequence and for narrating a story.
Creativity emphasis: problem-solving, computational thinking, narrative creativity in (Howard & Mayesky, 2022).

6. Math & Science Garden Project: Students grow plants then measure and record. Students observe through art and document.
Creativity focus: Scientific reasoning, measuring, and imaginative representations in (Wilson, n.d.).

D. Age 6-8 years 

7. Engineering & Environmental Innovation: Develop a product through only recycled materials that solves a problem in your community.
Creativity focus: Critical thinking, design thinking, and collaborative problem-solving around (Howard & Mayesky, 2022).

8. STEAM Exhibition: Children create multimedia pieces that involve science experiments, art, maths, and literacy for presentation of solutions.
Creativity: Integrate, innovate, reflect, and communicate within boundaries (Stone-MacDonald et al., 2015).
`,
      },

      references: {
        title: "References",
        body: `References 
        
ACECQA. (2023a). National quality standard. Australian Children’s Education and Care Quality Authority. https://www.acecqa.gov.au
ACECQA. (2023b). Belonging, being and becoming: The early years learning framework for Australia (V2.0). Australian Government Department of Education. https://www.acecqa.gov.au
Australian Education Research Organisation. (2023). Learning trajectory – Language and communication. https://www.aero.edu.au
Connor, J., & Toper, C. A. (2015). Supporting literacy learning in the early years. Early Childhood Australia.
Derman-Sparks, L., & Edwards, J. O. (2020). Anti-bias education for young children and ourselves (2nd ed.). National Association for the Education of Young Children.
Howard, R., & Mayesky, M. (2022). Creative activities and curriculum for young children (12th ed.). Cengage.
Howard, R., & Mayesky, M. (2022). Creativity and the young child (10th ed.). Cengage Learning.
Isbell, R., & Akiko-Yoshizawa, S. (2016). Nurturing creativity: An essential mindset for young children’s learning. National Association for the Education of Young Children. https://www.naeyc.org
Mayesky, M. (2015). Creative activities and curriculum for young children (11th ed.). Cengage.
Mayesky, M. (2015). Creative activities for young children (10th ed.). Cengage Learning.
National Association for the Education of Young Children, & The Fred Rogers Center for Early Learning and Children’s Media. (2012). Selected examples of effective classroom practice involving technology tools and interactive media. https://www.naeyc.org
Niland, A. (2015). Music and children. Early Childhood Australia – Everyday Learning Series, 13(3). https://www.earlychildhoodaustralia.org.au
Pantoya, M., Aguirre-Muñoz, Z., & Hunt, E. (2015). Developing an engineering identity in early childhood. American Journal of Engineering Education, 6(2), 61–68. 
Stone-MacDonald, A., Marko, M., & Stoddart, T. (2015). STEM learning in early childhood: Supporting scientific reasoning and inquiry. Routledge.
Stone-MacDonald, A., Wendell, K., Douglass, A., Love, M., & Hyson, M. (2015). Engaging young engineers: Teaching problem-solving skills through STEM (Part 1: Chapters 1–2). Brookes Publishing.
University of Nevada Cooperative Extension. (2019). Engineering in the preschool classroom. https://extension.unr.edu
Wilson, R. (n.d.). Exploring science and creative learning in early childhood. Early Childhood News. Retrieved December 5, 2025, from https://www.education.wa.edu.au
Wilson, R. (n.d.). Promoting the development of scientific thinking. Early Childhood News. https://www.earlychildhoodnews.com
`,
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
