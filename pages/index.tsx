import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Skill, SocialMedia, Project } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchExperience } from "../utils/fetchExperience";
import WorkExperience from "../components/WorkExperience";

type Props = {
  pageInfo: PageInfo[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socialMedias: SocialMedia[];
};

const Home = ({
  pageInfo,
  experiences,
  skills,
  socialMedias,
  projects,
}: Props) => {
  return (
    <div
      className="dark:bg-[rgb(36,36,36)] light:bg-[white] dark:text-white light:text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
    >
      <Head>
        <title>{pageInfo[0].name} Portfolio</title>
      </Head>

      
      {/* Header*/}
      <Header socialMedias={socialMedias} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="workExperience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-sm filter grayscale hover:grayscale-0 cursor-pointer">
              Back to top
            </p>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socialMedias: SocialMedia[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socialMedias,
    },
    revalidate: 10,
  };
};
