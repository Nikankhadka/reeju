// pages/index.js
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">
          Exploring Creativity in Early Childhood Education
        </h1>
        <p className="mt-2 text-sm">ETCH 107 Assessment 3 – Website (Part A)</p>
        <p className="mt-1 text-sm">
          Submitted by: Reeju Deuja | Date: 19/10/2025
        </p>
      </header>

      <nav className="bg-blue-200 p-4 flex justify-center gap-4 sticky top-0 z-10">
        <a href="#creativity" className="hover:underline">
          Creativity
        </a>
        <a href="#art" className="hover:underline">
          Art
        </a>
        <a href="#drama" className="hover:underline">
          Drama & Puppetry
        </a>
        <a href="#reflection" className="hover:underline">
          Reflection
        </a>
        <a href="#references" className="hover:underline">
          References
        </a>
      </nav>

      <main className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Creativity Section */}
        <section id="creativity">
          <h2 className="text-2xl font-bold mb-4">
            What Is Creativity in Early Childhood Education?
          </h2>
          <p>
            Children create upon the expression of ideas, thoughts, feelings,
            and understanding, which forms an important part of early childhood
            education. This includes art and drama along with curiosity,
            exploration, imagination, and problem-solving...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Why Is Creativity Important in the Curriculum?
          </h3>
          <p>
            Children create by combining ideas with risk, explore possibilities,
            risk failing, and develop cognition, social skills, emotions, and
            physicality. Creativity is integral to Learning Outcome 5 of
            Belonging, Being and Becoming...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            The Role of Educators in Facilitating Creativity
          </h3>
          <p>
            Educators imagine by using open-ended resources, trialing and
            erring, sensing all, and responding positively to children's
            ideas...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Integrating Creativity Across the Curriculum
          </h3>
          <p>
            Art, drama, narrative, music, movement, science, and digital
            learning are all modes of making meaning, as set forth by Gardner's
            theory of Multiple Intelligences...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Supporting Creativity Through Play-Based Learning
          </h3>
          <p>
            Play is the medium through which children learn to think creatively.
            Children learn symbolic thought and express world knowledge through
            imaginative play...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Building a Culture of Creativity
          </h3>
          <p>
            The creative curriculum encourages all practitioners, children and
            families to value diversity in thought and expression...
          </p>
        </section>

        {/* Art Section */}
        <section id="art">
          <h2 className="text-2xl font-bold mb-4">
            Importance of Art in Facilitating Creativity
          </h2>
          <p>
            Art in early childhood education fosters creative expression,
            imagination and communication...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Theories and Perspectives
          </h3>
          <p>
            Theoretically, children's creativity has been examined in the arts.
            According to Vygotsky's sociocultural theory...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Resources, Materials, and Digital Technologies
          </h3>
          <p>
            In arts, modeling, construction and collage take place with a
            variety of open-ended, natural and recycled resources...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Learning Experiences by Age Group
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>0–2 Years:</strong> Sensory Finger Painting, Nature
              Texture Boards
            </li>
            <li>
              <strong>2–3 Years:</strong> Collage with Recycled Materials,
              Crayon Resist Painting
            </li>
            <li>
              <strong>3–5 Years:</strong> Storytelling through Art Journals,
              Collaborative Mural Making
            </li>
            <li>
              <strong>6–8 Years:</strong> Digital Self-Portrait Project,
              Cultural Pattern Design Workshop
            </li>
          </ul>
        </section>

        {/* Drama Section */}
        <section id="drama">
          <h2 className="text-2xl font-bold mb-4">
            Importance of Drama and Puppetry in Facilitating Creativity
          </h2>
          <p>
            Drama and puppetry during the early years create creativity because
            they empower children so that they express ideas...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Theories and Perspectives
          </h3>
          <p>
            According to the sociocultural perspective of Vygotsky, dramatic
            play is a meaningful creative learning experience...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Resources, Materials, and Digital Technologies
          </h3>
          <p>
            Creative drama and puppetry require props, costumes, and space
            during movement. Puppetry is used to tell stories...
          </p>

          <h3 className="text-xl font-semibold mt-4">
            Learning Experiences by Age Group
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>0–2 Years:</strong> Puppet Peekaboo Play, Sound and
              Movement Imitation
            </li>
            <li>
              <strong>2–3 Years:</strong> Puppet Storytime, Drama Corner with
              Dress-Up
            </li>
            <li>
              <strong>3–5 Years:</strong> Create-Your-Own Puppet Workshop
            </li>
            <li>
              <strong>6–8 Years:</strong> Digital Puppet Animation,
              Improvisation Theatre Games
            </li>
          </ul>
        </section>

        {/* Reflection Section */}
        <section id="reflection">
          <h2 className="text-2xl font-bold mb-4">
            Critical Reflection and Evaluation
          </h2>
          <p>
            The Collaborative Mural Making workshop and Create-Your-Own Puppet
            Workshop helped with encouragement of social interaction...
          </p>
        </section>

        {/* References Section */}
        <section id="references">
          <h2 className="text-2xl font-bold mb-4">References</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              ACECQA. (2023).{" "}
              <a
                href="https://www.acecqa.gov.au/"
                className="text-blue-600 hover:underline">
                Information sheet: Holistic, integrated and interconnected
                approaches
              </a>
            </li>
            <li>
              Bird, J., & Edwards, S. (2022). Children’s digital play and
              learning: A socio-cultural perspective. Routledge.
            </li>
            <li>
              Department of Education. (2022). Belonging, being and becoming:
              The Early Years Learning Framework for Australia(Version 2.0).
            </li>
            <li>
              Edwards, C. (2021). The hundred languages of children: Reggio
              Emilia approach to early childhood education. Praeger.
            </li>
            <li>
              Edwards, S., & Cutter-Mackenzie-Knowles, A. (2020). Play and
              learning in early childhood education. Cambridge University Press.
            </li>
            <li>
              Fleer, M., & Veresov, N. (2020). Cultural-historical approaches to
              child development: Vygotsky in the twenty-first century. Springer.
            </li>
            <li>
              Gardner, H. (2021). Frames of mind: The theory of multiple
              intelligences (Updated ed.). Basic Books.
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center mt-8">
        © 2025 Reeju Deuja – ETCH 107
      </footer>
    </div>
  );
}
