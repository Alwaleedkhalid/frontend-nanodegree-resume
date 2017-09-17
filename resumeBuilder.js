var bio = {
  name : "Alwaleed Alageel",
  role: "Web developer",
  contacts: {
    mobile: "0562700146",
    email: "alwaleed.Alageel@gmail.com",
    github: "https://github.com/Alwaleedkhalid",
    twitter: "@alwaleed_777",
    location: "Riyadh",
    blog: "Soon :)",
  },
  welcomeMessage: "Hello world your welcome",
  skills: ["Java script", "CSS", "HTML", "Java", "ASP.NET"],
  biopic:"https://pbs.twimg.com/profile_images/583971776398372864/novl8haS.jpg",
  //start a function
  display: function() {
   $("#header").append(HTMLheaderName.replace("%data%", bio.name));
   $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
   $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
   $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
   $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
   $("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
   $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
   $("#header").append(HTMLblog.replace("%data%", bio.contacts.blog));
   $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
   $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
   $("#header").append(HTMLskillsStart.replace("%data%", bio.skills));
    for (var i= 0; i< bio.skills.length; i++)
        $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
};
bio.display();
var work = {
  jobs: [{
    employer: "JAL",
    title: "Web developer",
    location: "Riyadh, SA",
    dates: "8/8/2017 - Present",
    description: "develoe websites"
  }, {
    employer: "google",
    title: "project maneger",
    location: "Riyadh, SA",
    dates: "20/10/2017 - Present",
    description: "manage projects"
  }],
  display: function() {
for (var i= 0; i< work.jobs.length; i++)  {
  $("#workExperience").append(HTMLworkStart.replace("%data%", work.jobs));
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
    $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
}
  }
};
work.display();
var projects= {
  projects: [{
    title: "online book store",
    dates: "10/10/2016",
    description: "Book store for books",
    images: ["",
""]
  }],
  display: function() {

    $("#projects").append(HTMLprojectStart.replace("%data%", projects));
for (var i= 0; i<projects.projects.length; i++){
    $("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
    for (var j= 0; j< projects.projects[i].images.length; j++)
    $("#projects").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));

  }
}
};
projects.display();

var education = {

  schools: [{
    name: "King Saud Uneversity",
    location: "Riyadh",
    degree: "Bacholer",
    //array of Sring
    majors: ["software engneering", "---", "---"],
    dates: "15/8/2016",
    url: "www.ksu.edu.sa",
  }, {
    name: "King Saud Uneversity",
    location: "Riyadh",
    degree: "Bacholer",
    majors: ["IS", "---", "---"],
    //array of Sring
    dates: "20/1/2017",
    //string (works with a hyphen between them)
    url: "www.schools.com",
  }],
  onlineCourses: [{
    title: "network 101",
    school: "Rwaq",
    dates: "10/4/2017",
    url: "https://www.rwaq.org/"
  }, {
    title: "Cloud Computing",
    school: "Dell",
    dates: "20/1/2017",
    url: "www.onlineCourses.com"
  }],

  display: function() {

    $("#education").append(HTMLschoolStart.replace("%data%", education));
for (var i= 0; i<education.schools.length; i++){
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    for (var j= 0; j<education.schools[i].majors.length; j++){
    $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
}}
for (var h= 0; h<education.onlineCourses.length; h++){

    $("#education").append(HTMLonlineClasses.replace("%data%", education.onlineCourses));
    $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[h].title));
    $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[h].school));
    $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[h].dates));
    $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[h].url));
}
  }
};
education.display();
$("#mapDiv").append(googleMap);
