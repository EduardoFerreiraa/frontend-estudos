export const bootstrap = (): void => {
  type Font = "roboto" | "open sans" | "poppins";
  type ColorSheme = "light" | "dark";
  type Layout = "one-column" | "two-column";

  class MyResume implements Resume {
    constructor(
      public fullName: string,
      public email: string,
      public skills: Skill[],
      public font: Font,
      public colorSheme: ColorSheme,
      public layout: Layout,
      public dateOfBirth: Date,
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
    new Date("2000-01-02"),
  );

  myResume.addSkill({ name: "JavaScript", level: "intermediate" });
  myResume.addSkill({ name: "TypeScript", level: "beginner" });

  console.log(myResume);
  console.log(MyResume);
};
