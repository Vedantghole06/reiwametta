import React from 'react'
import { Target, Facebook, Twitter, Linkedin } from 'lucide-react';

const About = () => {

  const objectives = [
    {
      text: "Increasing Access to Education: Provide educational opportunities to marginalized communities, including Dalits, Adivasis, and other disadvantaged groups, to ensure equitable access to quality education."
    },
    {
      text: "Enhancing Vocational Skills: Offer vocational training programs to the marginalized communities, equipping them with skills relevant to local job markets and enhancing their employability."
    },
    {
      text: "Promoting Cultural Preservation: Support initiatives that preserve and promote the cultural heritage and languages of marginalized communities, integrating indigenous knowledge in education."
    },
    {
      text: "Community Development: Engage in community development projects aimed at improving infrastructure, healthcare, and socio-economic conditions in marginalized areas."
    },
    {
      text: "Monitoring and Evaluation: Regularly monitor the effectiveness of educational programs targeting marginalized communities, conducting evaluations to assess impact and refine strategies for continuous improvement."
    },
    {
      text: "Encouraging Entrepreneurship: Foster entrepreneurship among marginalized youth by offering training in business development and financial management to support establishment of small businesses and micro-enterprises."
    },
    {
      text: "Environmental Education and Sustainability: Integrate environmental education into the curriculum, teaching sustainable practices, conservation, and climate change resilience."
    },
    {
      text: "Collaborating with Government and NGOs: Forge partnerships with government agencies, NGOs and other stakeholders to leverage resources and maximize impact in addressing educational challenges faced by marginalized populations."
    },
    {
      text: "Long-term Sustainable Development: Foster long-term sustainable development by investing in education as a catalyst for social and economic empowerment, aiming to break the cycle of poverty."
    },
    {
      text: "Empowering Girls and Women: Develop initiatives to empower girls and women from marginalized backgrounds through education and skill development to overcome gender disparities."
    },
    {
      text: "Ensuring Inclusive Education: Advocate practices that accommodate the diverse needs of marginalized students, students with disabilities and from remote areas."
    },
    {
      text: "Providing Scholarships and Financial Aid: Establish scholarship programs and financial aid schemes to enable students from marginalized backgrounds to pursue higher education and professional courses."
    },
    {
      text: "Advocacy and Awareness: Advocate for policies and initiatives that address the systemic barriers hindering educational opportunities for marginalized groups."
    },
    {
      text: "Promoting Digital Literacy: Bridge the digital divide by providing access to digital resources, training, and technology infrastructure to marginalized communities, empowering them to navigate the digital world."
    },
    {
      text: "Addressing Social Stigma and Discrimination: Organize campaigns and workshops to challenge social stigma and discrimination faced by marginalized groups in educational settings."
    },
    {
      text: "Promoting Civic Engagement and Leadership: Empower marginalized youth to become active citizens and leaders in their communities through civic education and leadership training for community service and advocacy."
    },
    {
      text: "Research and Policy Advocacy: Conduct research on educational issues affecting marginalized communities and use evidence-based advocacy to influence policy decisions that prioritize equity, inclusion, and social justice in education."
    }
  ];

  const founders = [
    {
      name: "Rahul Sonpimple",
      title: "Founder & President",
      imageUrl: "/src/assets/rahul-img.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Vishal Sarpe",
      title: "Founder & Vice President",
      imageUrl: "/src/assets/vishal-img.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];


  // Profile Image Component
  const ProfileImage = ({ name, imageUrl }) => (
    <div className="w-[264px] h-[264px] overflow-hidden rounded-2xl">
      <img
        src={imageUrl || "/api/placeholder/264/264"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );

  // Social Links Component
  const SocialLinks = ({ links }) => (
    <div className="flex justify-center space-x-4">
      <a
        href={links.facebook}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href={links.twitter}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href={links.linkedin}
        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );

  // Founder Card Component
  const FounderCard = ({ founder }) => (
    <div className="max-w-xs text-center">
      <ProfileImage name={founder.name} imageUrl={founder.imageUrl} />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {founder.name}
        </h3>
        <p className="text-gray-600 mb-4">{founder.title}</p>
      </div>
      <SocialLinks links={founder.social} />
    </div>
  );



  return (
    <>
      <section className="bg-amber-50 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {/* Header Section */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-gray-600">
                KNOW ABOUT US
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                Education is most
                <span className="inline-block mx-2">- - -</span>
                <br className="md:hidden" />
                Important Aspect.
              </h2>
            </div>

            {/* Content Section */}
            <div className="md:max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Education is a powerful tool for social change and it is essential that we
                prioritize the needs of marginalized communities to create a more equitable
                and just society. For too long, systemic barriers have prevented
                disadvantaged groups from accessing quality education, perpetuating cycles
                of poverty and limiting opportunities for growth and development. To address
                these disparities, we must ensure fair and immediate access to resources, remove
                access to education, empower marginalized communities, and promote
                inclusive and sustainable development. These initiatives are designed to
                address the unique challenges faced by Dalits, Adivasis, girls and women,
                and other disadvantaged groups, and to ensure that education is a catalyst
                for positive change in their lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-sm uppercase tracking-wider text-gray-600">
              OBJECTIVE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-amber-50 p-3 rounded-full">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <p className="text-sm text-gray-800 leading-relaxed flex-1">
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-amber-50 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Image Card with Overlay Text */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            {/* Image Placeholder */}
            <img
              src="/src/assets/about-img.png"
              alt="People working together"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-white font-bold text-center px-4">
                FEW REASONS WHY PEOPLE <br /> SHOULD CHOOSE US!
              </h2>
            </div>
          </div>

          {/* Description Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
              PEOPLE CHOOSE REIVAMETTA FOUNDATION BECAUSE OF OUR UNWAVERING COMMITMENT TO BREAKING DOWN
              SYSTEMIC BARRIERS AND ADDRESSING DEEP-ROOTED INEQUALITIES IN EDUCATION FOR MARGINALIZED
              COMMUNITIES. OUR TAILORED INITIATIVES- RANGING FROM VOCATIONAL TRAINING AND SCHOLARSHIPS TO
              DIGITAL LITERACY AND ENTREPRENEURSHIP PROGRAMS- ARE DESIGNED TO EQUIP DISADVANTAGED INDIVIDUALS
              WITH THE SKILLS NEEDED FOR ECONOMIC INDEPENDENCE. WE BEGAN OUR JOURNEY WITH GRASSROOTS
              ENGAGEMENT, ENSURING OUR EFFORTS ARE DEEPLY ROOTED IN THE UNIQUE CHALLENGES FACED BY DALIT,
              ADIVASI, AND OTHER MARGINALIZED GROUPS. THROUGH STRONG PARTNERSHIPS WITH GOVERNMENT AGENCIES,
              NGOS, AND OTHER STAKEHOLDERS, WE ADVOCATE FOR POLICIES THAT PROMOTE EQUITY AND INCLUSION,
              MAKING A BROADER SYSTEMIC IMPACT. OUR DEDICATION TO CONTINUOUS MONITORING AND EVALUATION
              ENSURES OUR PROGRAMS REMAIN EFFECTIVE AND IMPACTFUL, EVOLVING TO MEET THE NEEDS OF THE
              COMMUNITIES WE SERVE. BY FOSTERING LEADERSHIP, CIVIC ENGAGEMENT, ENVIRONMENTAL SUSTAINABILITY,
              AND CULTURAL PRESERVATION, REIVAMETTA FOUNDATION TAKES A HOLISTIC APPROACH TO EMPOWERMENT,
              CHAMPIONING SOCIAL JUSTICE AND CREATING OPPORTUNITIES FOR EVERY INDIVIDUAL TO LEAD A FULFILLING
              LIFE AND CONTRIBUTE MEANINGFULLY TO SOCIETY.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-amber-50 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Section */}
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-gray-600">
                OUR MISSION
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                "Education for Equality: Empowering Marginalized Communities for Sustainable Growth"
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To create an equitable and just society where every marginalized
                community, including Dalits, Adivasis, girls, women, and other
                disadvantaged groups, has access to quality education and
                opportunities for growth, leading to their empowerment and the
                overall sustainable development of their communities.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-wider text-gray-600">
                OUR VISION
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                "Empowering Education for All: Breaking Barriers, Building Futures"
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We aim to break systemic barriers to education by providing
                marginalized communities with resources, opportunities, and support,
                promoting inclusion, skill development, and empowerment for a
                fulfilling and impactful life.
              </p>
            </div>
          </div>

          {/* Journey Section */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-sm uppercase tracking-wider text-gray-600">
              OUR JOURNEY
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              &quot;Reivametta Foundation: Bridging Educational Gaps, Empowering Communities, Transforming Futures&quot;
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reivametta Foundation addresses educational inequalities by
              empowering marginalized communities through key initiatives,
              partnerships, and advocacy, promoting access, inclusion, and
              sustainable development while fostering leadership, cultural
              preservation, and social justice.
            </p>
          </div>
        </div>
      </section>


      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet our founders
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {founders.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </div>
        </div>
      </section>





    </>
  )
}

export default About
