import React, { useState, useEffect } from "react";

const Counter = ({ end, duration = 4000, label, sublabel }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <div className="flex flex-col items-center p-4">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400">
                {count}+
            </div>
            <div className="text-lg md:text-xl text-white mt-2 text-center">
                {label}
            </div>
            <div className="text-sm text-white/80 text-center">{sublabel}</div>
        </div>
    );
};

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const stats = [
        { number: 3, label: "Activities in", sublabel: "Cities" },
        { number: 30, label: "Educational Activities", sublabel: "Conducted" },
        { number: 400, label: "Educational Activities", sublabel: "Students" },
        { number: 500, label: "Activities reached", sublabel: "People and youth" },
    ];

    // const stats = [
    //   { number: 3, label: "Activities in", sublabel: "Cities" },
    //   { number: 30, label: "Educational Activities", sublabel: "Conducted" },
    //   { number: 400, label: "Educational Activities", sublabel: "Students" },
    //   { number: 500, label: "Activities reached", sublabel: "People and youth" },
    // ];

    // Add this cards array
    const cards = [
        {
            id: 1,
            image: "/src/assets/img1.png", // Update with your image path
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            bgColor: "bg-gray-100"
        },
        {
            id: 2,
            image: "/src/assets/img2.png", // Update with your image path
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            bgColor: "bg-teal-50"
        },
        {
            id: 3,
            image: "/src/assets/img3.png", // Update with your image path
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            bgColor: "bg-gray-100"
        }
    ];

    // our center

    const centers = [
        {
            id: 1,
            name: "Nagpur Center",
            address: "Savitribai Phule Resource Center, Bezoni Bagh Samaj Bhavan, Nagpur – 440014",
        },
        {
            id: 2,
            name: "Mumbai Center",
            address: "Savitribai Phule Resource Center, Vipassana Buddha Vihar, K.N. Gaikwad Marg, Siddharth Colony, Chembur, Mumbai – 400071",
        },
        {
            id: 3,
            name: "Kolhapur Center",
            address: "Savitribai Phule Resource Center, Prabuddha Bharat Buddha Vihar, Kurundwad, Taluka: Shirola, Kolhapur – 416106",
        },
    ];





    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <div className="absolute inset-0">
                    <img
                        src="/src/assets/BG image.png"
                        alt="Children with special needs"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 h-full flex items-center px-6 lg:px-20 -mt-2">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight -mt-2">
                            Inclusive care for <br />
                            <span className="block mt-2">children with special needs</span>
                        </h1>
                        <button
                            className="bg-white text-gray-700 px-9 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 active:bg-gray-200 mt-6"
                        >
                            Read More
                        </button>
                        {/* <div className="mt-4 text-sm opacity-80">
              "33 SRC students cleared the coveted Azeem Pre"
            </div> */}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <div className="w-12 h-0.5 bg-gray-300 mr-4"></div>
                            <span className="text-sm text-gray-600 uppercase tracking-wider">
                                KNOW ABOUT US
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            We provide a place for children with special needs
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Education is a powerful tool for social change, and it is essential that we prioritize the needs of marginalized communities to create a more equitable and just society. For too long, systemic barriers have prevented disadvantaged groups from accessing quality education, perpetuating cycles of poverty and limiting opportunities for growth and development. To address these disparities, we have identified 17 key initiatives that aim to increase access to education, empower marginalized communities, and promote inclusive and sustainable development. These initiatives are designed to address the unique challenges faced by Dalits, Adivasis, girls and women, and other disadvantaged groups, and to ensure that education is a catalyst for positive change in their lives and communities.
                        </p>
                        <button
                            className="bg-yellow-500 text-white px-8 py-3 rounded-md transition-all duration-300 hover:bg-yellow-600 active:bg-yellow-700"
                        >
                            Learn more
                        </button>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[400px]">
                        <img
                            src="/src/assets/aboutus.png"
                            alt="Children walking together"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Our Program Section */}
            <div className="bg-[#fff5e1] min-h-screen p-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-sm uppercase font-semibold tracking-wider text-gray-700">
                        Our Program
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Some of Our Programs that we provide for our children
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                From Early Childhood Education to Elementary Education, we
                                identify gaps and develop context-based solutions...
                            </p>
                            <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-100 active:bg-gray-200">
                                Read More
                            </button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/src/assets/program.png"
                                    alt="Children and teacher in classroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reaches Section */}
            <div className="relative min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("src/assets/reachesbg.png")' }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Reaches 2024-2025
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <Counter key={index} end={stat.number} label={stat.label} sublabel={stat.sublabel} />
                        ))}
                    </div>
                    <div className="relative mt-8 md:mt-16">
                        <img
                            src="src/assets/reaches2.png"
                            alt="Happy students"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            {/* what's new */}
            <section className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-center mb-6">WHAT'S NEW</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div key={card.id} className={`p-4 rounded-lg shadow-md ${card.bgColor}`}>
                            <img src={card.image} alt="Card Image" className="w-full h-auto rounded-lg" />
                            <p className="mt-3 text-center text-gray-700">{card.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add this What's New section right before the closing </>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <div className="w-8 h-px bg-black mr-4"></div>
          <h2 className="text-sm font-medium uppercase tracking-wider">WHAT'S NEW</h2>
        </div>

        <h1 className="text-3xl font-semibold mb-8">New</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id}
              className={`${card.bgColor} rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105`}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={card.image}
                  alt="Card"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-800 text-sm">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

       */}
            {/* Centers Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center mb-4">
                    <div className="w-8 h-px bg-black mr-4"></div>
                    <h2 className="text-sm font-medium uppercase tracking-wider text-gray-600">
                        ALL OUR CENTERS
                    </h2>
                </div>

                <h1 className="text-3xl font-bold text-center mb-8">Centers</h1>

                {/* Centers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[200px]">
                    {centers.map((center) => (
                        <div
                            key={center.id}
                            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 transition-transform duration-300 hover:scale-105"
                        >
                            <h2 className="text-xl font-semibold mb-2">{center.name}</h2>
                            <p className="text-gray-700">{center.address}</p>
                        </div>
                    ))}
                </div>
            </div>




        </>
    );
};

export default Home;
