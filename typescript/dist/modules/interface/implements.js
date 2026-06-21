export const bootstrap = () => {
    class MyResume {
        fullName;
        email;
        skills;
        constructor(fullName, email, skills) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume("Eduardo Ferreira de Oliveira Almeida", "eduardoferreiraalmeida20@gmail.com", []);
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
