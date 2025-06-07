import React, { useEffect, useRef, useState } from "react";
import { FolderKanban, PlugZap, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [delayedIndex, setDelayedIndex] = useState(0);

  const colors = [
    "rgba(255, 173, 173, 0.6)",
    "rgba(255, 214, 165, 0.6)",
    "rgba(202, 255, 191, 0.6)",
    "rgba(200, 200, 255, 0.6)",
    "rgba(255, 200, 240, 0.6)",
  ];

  const imageList = [
    "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg",
    "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2d7iE50wCgy-ITrpYL62P720xAVd5NtIi_lzcH9u82g7FnrgdK_ugVCq0d3R5HQbx75I",
  ];

  const handleScroll = () => {
    if (!sectionRef.current || !leftSideRef.current) return;

    const section = sectionRef.current;
    const leftSide = leftSideRef.current;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;

    const isInside =
      scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;

    if (isInside) {
      const scrollProgress = scrollY - sectionTop;
      const index = Math.min(
        colors.length - 1,
        Math.floor((scrollProgress / sectionHeight) * colors.length)
      );
      setActiveIndex(index);

      const maxScrollTop = leftSide.scrollHeight - leftSide.clientHeight;
      let newScrollTop =
        (scrollProgress / sectionHeight) * leftSide.scrollHeight;

      if (newScrollTop < 0) newScrollTop = 0;
      if (newScrollTop > maxScrollTop) newScrollTop = maxScrollTop;

      leftSide.scrollTop = newScrollTop;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedIndex(activeIndex);
    }, 400);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardsContent = [
    {
      icon: <FolderKanban className="w-5 h-5 text-[var(--primary-color)]" />,
      title: "Project Management",
      subtitle: "Manage projects and move work forwards faster.",
      desc: "Manage projects and move work forward faster. Prioritise tasks, share ideas and stay aligned. Slack brings every piece of your project together from start to finish.",
      stat: "47% increase in productivity for teams using Slack",
      value: "47%",
    },
    {
      icon: <PlugZap className="w-5 h-5 text-[var(--primary-color)]" />,
      title: "Integrations",
      subtitle: "Tap into the tools that you already use.",
      desc: "Tap into the tools that you already use. Over 2,600 apps are ready to connect in Slack, so you can automate everyday tasks in the flow of work and save your team precious time.",
      stat: "35% increase in time saved due to automation for Slack users",
      value: "35%",
    },
    {
      icon: <Bot className="w-5 h-5 text-[var(--primary-color)]" />,
      title: "Slack AI",
      subtitle: "Do more with AI that works where you do.",
      desc: "Do more with AI that works where you do. Search your entire company history for answers, instantly catch up on conversations and get daily recaps of messages missed.",
      stat: "55% average time that users can save weekly with Slack AI",
      value: "55%",
    },
  ];

  const [isInView, setIsInView] = useState(false);
  const [showExploreButton, setShowExploreButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.6;
        const hasReached60Percent = rect.top <= triggerPoint;

        if (hasReached60Percent && !isInView) {
          setIsInView(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);
  const rightSideCards = [
    {
      title: "Pre-Production",
      description:
        "Pre-production is the backbone of any creative project. It's where ideas take shape, budgets get set, schedules are made, and all the important details are planned out before production begins.",
      image: imageList[0],
    },
    {
      title: "Production",
      description:
        "Production is where all the planning comes to life. Cameras roll, models step into their roles, and every shot captures the essence of the creative vision. It's the stage where ideas turn into reality, bringing the project one step closer to completion.",
      image: imageList[1],
    },
    {
      title: "Post-Production",
      description:
        "Post-production is where raw footage is transformed into a polished final product. Editing, sound design, visual effects, and final adjustments all come together to bring the creative vision to life.",
      image: imageList[2],
    },
  ];

  return (
    <section>
      <section
        ref={sectionRef}
        className="relative pt-12 z-20 bg-[var(--light-black)] flex flex-col h-[300vh] px-4"
      >
        <section ref={ref}></section>
        <section className="sticky top-[80px] h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center items-center lg:justify-between px-0  mx-auto z-[2]">
          <section
            className="w-[500px] h-[500px] relative flex-shrink-0"
            aria-label="Feature images"
          >
            <div className="absolute top-0 left-0 z-0 transition-colors duration-300 ease-in-out">
              <p className="text-[30px] text-[var(--white)] font-medium">
                From Concept To Creation
              </p>
            </div>
          </section>
          <aside
            ref={leftSideRef}
            className="flex flex-col gap-[6rem] flex-1 max-w-[600px] h-[600px] overflow-y-auto pr-4 custom-scrollbar-hidden"
            aria-label="Feature details"
          >
            {rightSideCards.map((card, idx) => (
              <div
                key={idx}
                className={`relative mt-5 rounded-2xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm p-8 `}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-600 text-white rounded-full hover:bg-gray-800 transition-all duration-300 group">
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </aside>
        </section>
      </section>
    </section>
  );
};

export default FeaturesSection;
