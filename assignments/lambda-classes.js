// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    }
    speak(){
      return 'Hello my name is '  + this.name + ' I am from '  + this.location ;
    }
}
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase= attr.catchPhrase;
    }
    demo(subject){
      return "Today we are learning about " + subject;

    }
    grade (student, subject){
      return this.student  + "receives a perfect score on" +  this.subject;
    }
}
class Student extends Person{
  constructor(attr){
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects= attr.favSubjects;

  }
  listsSubjects(){
    this.favSubjects.forEach(sub => console.log(sub));
    //return this.favSubjects;
  }
  PRAssignments(subject){
    return this.name + " has submitted a PR for " + subject;
  }
  sprintChallenge(subject){
    return this.name + " has begun sprint challenge on" +  subject;
  }
}
class ProjectManager extends Instructor{
  constructor(attr){
    super(attr);
    this.gradClassName= attr.gradClassName;
    this.favInstructor= attr.favInstructor;
  }
  standUp(channel){

  return this.name + " announces to " + channel + ", @channel stand up time!";
}
  debugsCode(subject){
    return  this.name + " debugs" + student.name + "code on" + subject;
  }
}

const Subject= ['html', 'Python', 'JS', 'java', 'c' , 'c++'];
const Channel= ['Webpt9', 'Hired', 'announcements', 'bw_students_pt', 'ls1907_part_time'];

const Bobby = new Instructor({
  name: 'Bobby',
  location: 'Clifton',
  age: 43,
  favLanguage: 'Java',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const Joe = new Instructor({
  name: 'Joe',
  location: 'Tonia',
  age: 28,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Never say never`
});
const Francine= new Student({
  name: 'Francine',
  location: 'Dalton',
  age: 27,
  favLanguage: 'JavaScript',
  specialty: 'Design',
  catchPhrase: ` Try and Try again`,
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  previousBackground: 'Grounds Keeper',
  ClassName: 'Webpt9'

});
const Kyle= new Student({
  name: 'Kyle',
  location: 'Scranton',
  age: 29,
  favLanguage: 'C++',
  specialty: 'Backend',
  catchPhrase: `Believe in yourself`,
  favSubjects: ['Design', 'Python', 'JavaScript'],
  previousBackground: 'Pre-school teacher',
  ClassName: 'Webpt9'
});
const Chris = new ProjectManager({
  name: 'Chris',
  location: 'San Antonio ',
  age: 40,
  favLanguage: 'C',
  specialty: 'Front-end',
  catchPhrase: `Beauty is in the eye of the beholder`,
  gradClassName: 'WB18',
  favInstructor: 'Kennedy Smith'
});
const Martin= new ProjectManager({
  name: 'Martin',
  location: 'Detroit',
  age: 32,
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: `You can do anything you put your mind to`,
  gradClassName: 'PhyWb18',
  favInstructor: 'Atlanta Jackson'

});
console.log(Bobby.demo(Subject[5]));
console.log(Martin.speak());
console.log(Kyle.listsSubjects());
console.log(Francine.PRAssignments(Subject[2]));
console.log(Chris.standUp(Channel[3]));
