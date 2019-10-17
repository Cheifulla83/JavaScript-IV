// CODE here for your Lambda Classes
class Person{
    constructor(attribute){
        this.name = attribute.name,
        this.age = attribute.age,
        this.location = attribute.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
const helen = new Person({
    name: "Helen",
    age: 25,
    location: "Canada"
})
console.log(helen);
console.log(helen.speak());
const tom = new Person({
    name: "Tom",
    age: 45,
    location: "Boston"
})
console.log(tom);
console.log(tom.speak());

class Student extends Person{
    constructor(attribute){
        super(attribute),
        this.previousBackground = attribute.previousBackground,
        this.className = attribute.className,
        this.favSubjects = attribute.favSubjects
    }
    listsSubjects() {
        return this.favSubjects.forEach(element => {
            console.log(element)
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }

}

const mark = new Student({
    name: "Mark",
    age: 27,
    location: "Atlanta",
    previousBackground: "Banker",
    className: "Web Dev",
    favSubjects: ['Html', 'CSS', 'JavaScript']
})
console.log(mark);
console.log(mark.speak());
console.log(mark.listsSubjects(mark.favSubjects));
console.log(mark.PRAssignment('javaScript'));
console.log(mark.sprintChallenge('CSS'));

const brian = new Student({
    name: "Brian",
    age: 44,
    location: "Princton",
    previousBackground: "Carpenter",
    className: "Web Dev",
    favSubjects: ['Ruby', 'Python', 'JavaScript']
})
console.log(brian);
console.log(brian.speak());
console.log(brian.listsSubjects(brian.favSubjects));
console.log(brian.PRAssignment('javaScript'));
console.log(brian.sprintChallenge('CSS'));


class Instructor extends Person{
    constructor(attribute){
        super(attribute),
        this.specialty = attribute.specialty,
        this.favLanguage = attribute.favLanguage,
        this.catchPhrase = attribute.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(studentObject, subject) {
        return `${studentObject.name} receives a perfect score on ${subject}`
    }
}

const kate = new Instructor({
    name: "Kate",
    age: 42,
    location: "Boston",
    specialty: "javaScript",
    favLanguage: "Python",
    catchPhrase: "Good Morning Sunshine"
})
console.log(kate);
console.log(kate.speak());
console.log(kate.demo("Git"));
console.log(kate.grade(brian, "Ruby"));


const will = new Instructor({
    name: "William",
    age: 39,
    location: "Italy",
    specialty: "CSS",
    favLanguage: "Java",
    catchPhrase: "I need longer weekends!"
})
console.log(will);
console.log(will.speak());
console.log(will.demo("Less"));
console.log(will.grade(mark, "React"));


class ProjectManager extends Instructor{
    constructor(attribute){
        super(attribute);
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(studentObject, subject){
        return `${this.name} debugs ${studentObject.name}'s code on ${subject}`
    }

}

const amy = new ProjectManager({
    name: "Amy",
    age: 22,
    location: "White Plains, NY",
    specialty: "Python",
    favLanguage: "Python",
    catchPhrase: "Is it 6 o'clock yet!",
    gradClassName: "cs1",
    favInstructor: will
})
console.log(amy);
console.log(amy.speak());
console.log(amy.demo("Less"));
console.log(amy.grade(mark, "React"));
console.log(amy.standUp("web 24"));
console.log(amy.debugsCode(mark, "JavaScript-III"));

const jerry = new ProjectManager({
    name: "Jerry",
    age: 22,
    location: "Tom's River, NJ",
    specialty: "React",
    favLanguage: "Java",
    catchPhrase: "Fun times!",
    gradClassName: "cs2",
    favInstructor: kate
})
console.log(jerry);
console.log(jerry.speak());
console.log(jerry.demo("Less"));
console.log(jerry.grade(brian, "React"));
console.log(jerry.standUp("web 24"));
console.log(jerry.debugsCode(brian, "JavaScript-III"));
console.log(jerry.favInstructor);