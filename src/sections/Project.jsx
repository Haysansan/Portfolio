import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Derleng Website",
    description: "Derleng is a full-stack web-based tourism platform designed to help travelers discover destinations, plan trips efficiently, and access localized services in Cambodia.",
    image: "/projects/mhohfinder.jpg",
    tags: ["ReactJS", "JavaScript", "Node", "Express", "MySQL", "CSS", "HTML"],
    demoUrl: "#",
    githubUrl: "https://github.com/Undertale-12357/DerLeng-Web-application-platform",
  },
  {
    id: 2,
    title: "MealMirror ",
    description: "MealMirror is a Flutter app for tracking meals and basic nutrition with a playful “pet” companion theme. This README now reflects the current project layout in the workspace.",
    image: "/projects/friendpython.png",
    tags: ["Dart", "Flutter", "C", "C++", "Swift", "Java", "HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Haysansan/MealMirror",
  },
  {
    id: 3,
    title: "McDonald Clone School Project",
    description: "The purpose of this project was to replicate the design and functionality of the Official McDonald’s Website, with a strong focus on User Interface (UI) design.",
    image: "/projects/flaskjsonweb.png",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    demoUrl: "#",
    githubUrl: "https://github.com/RaksaOC/McDonald-Clone",
  },
  {
    id: 4,
    title: "Venue Booking System",
    description: "The venue booking system is a middleman system between hall owner and customers. It allows owners to showcase their venues, making them easily accessible to a wider audience.",
    image: "/projects/medictrack.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/KuyPoly/Venue_booking",
  },
  {
    id: 5,
    title: "SoulLike - Unity",
    description: "Game Developer, third-person action game with state-driven combat. Features 3-hit combos, dodging, blocking, C# locomotion and AI triggers, plus menu, win, and loss UI states.",
    image: "/projects/soullike.png",
    tags: ["Unity", "C#", "JavaScript", "Blender", "Animation"],
    demoUrl: "#",
    githubUrl: "https://github.com/obviouslynotdim/SoulLike-Unity",
  },
  {
    id: 6,
    title: "E-Learning Management System",
    description: "My First System Development Project E-Learning Management System is a system design for students to study any course through electronic means. In this project we will implement three main functions which are student, teacher, and admin.",
    image: "/projects/webshop.png",
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/KuyPoly/E-Learning-Management-System",
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-22 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Feature <span className="text-lavender"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was crafted with
          attention to detail, performance, user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-lavender/6 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div h-48 overflow-hidden>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-lavender transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-lavender transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Haysansan" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};
