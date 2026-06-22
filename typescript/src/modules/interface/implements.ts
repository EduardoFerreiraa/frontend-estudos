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

  interface Resume {
    dateOfBirth?: Date;
    sumary?: string;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
    ) {}

    addSkill(skill: Skill): boolean {
      const initialLength = this.skills.length;
      this.skills.push(skill);

      return this.skills.length > initialLength;
    }
  }

  const myResume = new MyResume(
    "Eduardo Ferreira de Oliveira Almeida",
    "eduardoferreiraalmeida20@gmail.com",
    [],
  );

  myResume.addSkill({ name: "JavaScript", level: "intermediate" });
  myResume.addSkill({ name: "TypeScript", level: "beginner" });

  console.log(myResume);

  /* 
  const MyResume: Resume = {
    fullName: "Eduardo Ferreira de Oliveira Almeida",
    email: "eduardoferreiraalmeida77@gmail.com",
    skills: [
      { name: "JavaScript", level: "intermediate" },
      { name: "TypeScript", level: "beginner" },
    ],
  };
  */

  console.log(MyResume);
};
