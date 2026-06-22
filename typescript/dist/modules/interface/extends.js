export const bootstrap = () => {
    class MyResume {
        fullName;
        email;
        skills;
        font;
        colorSheme;
        layout;
        dateOfBirth;
        constructor(fullName, email, skills, font, colorSheme, layout, dateOfBirth) {
            this.fullName = fullName;
            this.email = email;
            this.skills = skills;
            this.font = font;
            this.colorSheme = colorSheme;
            this.layout = layout;
            this.dateOfBirth = dateOfBirth;
        }
        addSkill(skill) {
            const initialLength = this.skills.length;
            this.skills.push(skill);
            return this.skills.length > initialLength;
        }
    }
    const myResume = new MyResume("Eduardo Ferreira de Oliveira Almeida", "eduardoferreiraalmeida20@gmail.com", [], "roboto", "dark", "two-column", new Date("2000-01-02"));
    myResume.addSkill({ name: "JavaScript", level: "intermediate" });
    myResume.addSkill({ name: "TypeScript", level: "beginner" });
    console.log(myResume);
    console.log(MyResume);
};
