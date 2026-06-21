export const bootstrap = (): void => {
  interface Resume {
    fullName: string;
    email: string;
    skills: Skill[];
    addSkill?: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: "beginner" | "intermediate" | "advanced";
  }

  const MyResume: Resume = {
    fullName: "Eduardo Ferreira de Oliveira Almeida",
    email: "eduardoferreiraalmeida77@gmail.com",
    skills: [
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "beginner" },
    ],
  };

  console.log(MyResume);
};
