import { HoverEffect } from "./ui/HoverEffect";

export function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8" id="skills">
        <h1 className='heading'>
            My Technical
            <span className="text-purple"> Skills</span> 
        </h1>
      <HoverEffect items={skills} />
    </div>
  );
}
export const skills = [
  {
    title: "Frontend Development",
    categories:[
        {
            categoryTitle: "Languages",
            items: ["HTML  ", "CSS  ", "Javascript "] 
        },
        {
            categoryTitle: "Libraries & Frameworks",
            items: ["React.js  ", "React Native  ", "Next.js  "]
        },
        {
            categoryTitle: "UI Frameworks & Tools",
            items: ["Tailwind CSS  ", "Material-UI  ", "Chakra UI  ", "Aceternity UI "]
        }
    ]
  },
  {
    title: "Backend Development",
    categories:[
        {
            categoryTitle: "Languages",
            items: ["Java  "] 
        },
        {
            categoryTitle: "Frameworks",
            items: ["Spring Boot  ", "Spring WebFlux  "]
        },
        {
            categoryTitle: "Databases",
            items: ["MySQL  ", "MongoDB  "]
        }
    ]
  },
  {
    title: "Version Control",
    categories:[
        {
            categoryTitle: "",
            items: ["Git  ", "GitHub  "] 
        },
       
    ]
  },
  {
    title: "Machine Learning",
    categories:[
        {
            categoryTitle: "Libraries",
            items: ["Pandas  ", "Sickit-Learn"] 
        },
        {
            categoryTitle: "Techniques",
            items: ["Data Preprocessing  ", "Supervised Learning  ", "Unsupervised Learning  "],
          },
          {
            categoryTitle: "Tools",
            items: ["Jupyter Notebook  ", "Google Colab  "],
          },
    ]
  }
  
];
