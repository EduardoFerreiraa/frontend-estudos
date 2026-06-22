export const bootstrap = (): void => {
  interface PersonalInfo {
    fullName: string;
    email: string;
    dateOfBirth?: Date;
    sumary?: string;
  }

  interface Resume extends PersonalInfo, Theme {
    skills: Skill[];
    addSkill: (skill: Skill) => boolean;
  }

  interface Skill {
    name: string;
    level: "beginner" | "intermediate" | "advanced";
  }

  type Font = "roboto" | "open sans" | "poppins";
  type ColorSheme = "light" | "dark";
  type Layout = "one-column" | "two-column";

  interface Theme {
    font: Font;
    colorSheme: ColorSheme;
    layout: Layout;
  }

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorSheme: ColorSheme,
      public layout: Layout,
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
    "roboto",
    "dark",
    "two-column",
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
