const programs = [
	{
		id: "program-1",
		program_title: "Short-term exchanging plan",
		program_subtitle: "One or two months exchanging",
		program_description: "A one or two months study plan to enjoy the study environment and culture of a different country.",
		image: "images/short-term.jpg",
		image_title: "Short-term study"
	},
	{
		id: "program-2",
		program_title: "Long-term exchanging plan",
		program_subtitle: "one year exchanging plan or longer",
		program_description: "A long-term study plan for student to study abroad under fantastic education environment.",
		image: "images/long-term.jpg",
		image_title: "Long-term study environment"
	},
	{
		id: "program-3",
		program_title: "Overseas practising",
		program_subtitle: "Practising opportunity",
		program_description: "A wonderful opportunity for students who just graduated to pratise their skills overseas.",
		image: "images/practise.jpg",
		image_title: "Job practising"
	},
]
function createProgramHTML(programs) {
	let programHTML = $("<article>");

	let figure = $("<figure>");
	let image = $("<img>", {src: programs.image, alt: programs.image_title});
	let caption = $("<figcaption>" + programs.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	programHTML.append(figure);

	let title = $("<h2>" + programs.program_title + "</h2>");
	programHTML.append(title);

	let subtitle = $("<h3>" + programs.program_subtitle + "</h3>");
	programHTML.append(subtitle);

	let description = $("<p>" + programs.program_description + "</p>");
	programHTML.append(description);

	return programHTML;
}

function displayPrograms(programs) {
	let optionList = $("#optionList");

	optionList.empty();
	for(let program of programs) {
		let programHTML = createProgramHTML(program);
		optionList.append(programHTML);
	}
}

$(document).ready(function(){
	let mainProgram = [programs[0]];

	displayPrograms(mainProgram);


	// Registering the search event handler using event listeners (addEventListener)
	// $("#search").on("click", search);

	// Registering the search event handler using event handler properties (onevent properties)
	// let searchButton = document.getElementById('search');
	// searchButton.onclick = search;

	$("#search").on("click", search);
});

function search() {
	console.log("Working properly"); 
	let query = $("#searchText").val();
	query = query.toLowerCase().trim();

	let matches = [];
	for(let program of programs) {
		let programTitle = program.program_title.toLowerCase();
		if(programTitle.includes(query)) {
			matches.push(program);
		}
	}

	displayPrograms(matches);
}
