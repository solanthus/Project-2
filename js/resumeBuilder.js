


var education = {
	"schools":[
	{
		"name": "Salt Lake Community College",
		"location": "Salt Lake City, UT",
		"degree": "AS",
		"major": "Computer Information Systems",
		"dates": "Jan 2000 - Mar 2004"
	},
	{
		"name": "University of Phoenix",
		"location": "Dallas, TX",
		"degree": "BS",
		"major": "Computer Science",
		"dates": "Jan 2008 - Mar 2010"
	}
	]
}

var work = {
	"jobs" : [
	{
		"Employer": "AT&T",
		"Title": "Developer",
		"location": "Arlington, TX",
		"Dates": "2013-2015",
		"Description": "Responsible for writing .NET code"
	},
	{
		"Employer": "AT&T",
		"Title": "Senior Data Analyst",
		"location": "Fort Worth, TX",
		"Dates": "2008 - 2013",
		"Description": "Responsible for Data Metrics validation"
	}
	]
}

var projects = {
	"projects" : [
	{
		"Title": "Bankruptcy Notification Processor",
		"Dates": "2007-Present",
		"Description": "Used to process all incoming Bankruptcy for AT&T and note applicatble systems",
		"Images": ["images/bankruptcy.jpg","images/bitcoin-600x307.jpg"]
	},
	{
		"Title": "Bankruptcy XML Email Notification",
		"Dates": "2007 - 2015",
		"Description": "Interpret hidden XML data from US Bankruptcy courts to fill out Bankruptcy information quickly",
		"Images": ["images/cellphone.jpg","images/email.jpg"]
	}
	]
}

var bio = {
		"Name": "Clint Miller",
		"Role": "Program Developer",
		"welcomeMessage": "Thank you for reviewing my Resume",
		"contacts": ["Alana Clark, 555-555-1234","Bob Hoskins, 555-555-1235"],
		"skills": ["Communication", "Leadership", "Tank Wrestling", "Hydrowalking"],
		"mobile": "801-243-5870",
		"twitter": "@rslutahdude",
		"email": "realsoccer@gmail.com",
		"location": "Mansfield, TX",
		"BioPic": "images/fry.jpg"
	}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.Role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.Name));
$("#header").append(HTMLbioPic.replace("%data%", bio.BioPic));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.twitter));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.email));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.location));



//$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
// $("#topContacts").append(HTMLskillsStart);
// $("#topContacts").append(HTMLskills.replace("%data%", bio.skills[0]));




if(bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	
}


function displaywork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].Dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].Description));
}
}

displaywork();

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+ name[1];
}

$('#main').append(internationalizeButton);

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].Title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].Dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].Images.length>0){
			for (image in projects.projects[project].Images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].Images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display()

education.display = function(){
	for (count in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLschoolName.replace("%data%", education.schools[count].name);
		$(".education-entry:last").append(formattedTitle);
		var formattedTitle = HTMLschoolDates.replace("%data%", education.schools[count].dates);
		$(".education-entry:last").append(formattedTitle);
		var formattedTitle = HTMLschoolMajor.replace("%data%", education.schools[count].major);
		$(".education-entry:last").append(formattedTitle);
		var formattedTitle = HTMLschoolDegree.replace("%data%", education.schools[count].degree);
		$(".education-entry:last").append(formattedTitle);
		var formattedTitle = HTMLschoolLocation.replace("%data%", education.schools[count].location);
		$(".education-entry:last").append(formattedTitle);
		
		

	}
}

education.display()

$("#mapDiv").append(googleMap);



