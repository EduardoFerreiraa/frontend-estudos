export const bootstrap = () => {
    class MyResume {
        fullName;
        email;
        skills;
        font;
        colorSheme;
        layout;
        constructor(fullName, email, skills, font, colorSheme, layout) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
            this.font = font;
            this.colorSheme = colorSheme;
            this.layout = layout;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume("Eduardo Ferreira de Oliveira Almeida", "eduardoferreiraalmeida20@gmail.com", [], "roboto", "dark", "two-column");
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
