class TeamMember {
  name;
  location;

  constructor(name, location) {
    this.name = name;

    this.location = location;
  }

  provideFeedback() {
    console.log(`${this.name} thank you for feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "web Course instructor";

  team = "web team";

  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }

  createQuize(module) {
    console.log(`please create quiz for module ${module}`);
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Developer extends TeamMember {
  designation = "Developer";

  team = "Developer";

  constructor(name, location) {
    super(name, location);
  }

  startSupportSession(feature) {
    console.log(`start the support session at ${feature}`);
  }

  createQuize(module) {
    console.log(`release the version ${module}`);
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class jobPlacement extends TeamMember {
  designation = "jobPlacement";

  team = "job placement";

  region;

  tech;

  constructor(name, location, region, tech) {
    super(name, location);
    this.tech = tech;
    this.region = region;
  }
  provideStudent(time) {
    console.log(`start the support session at ${time}`);
  }

  provideResume(module) {
    console.log(`please release the version at ${version}`);
  }
}

const ammar = new Instructor("ammar", "dhkha", "good");
console.log(ammar);

ammar.provideFeedback();

const jpAmmar = new jobPlacement("ammar", "dhaka", "mirpur", "react");

console.log(jpAmmar);

jpAmmar.provideFeedback();

const devAmmar = new Developer("ammar", "dhaka");

console.log(devAmmar);
