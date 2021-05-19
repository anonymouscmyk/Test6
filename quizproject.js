let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "When did World War 2 Start?",
	"a": "September, 1, 1939",
	"b": "November, 30, 1945",
	"c": "July, 28, 1914",
	"d": "November, 11, 1918",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   },
   {
	"question": "When did World War 2 End?",
	"a": "April, 18, 1936",
	"b": "August, 5, 1943",
	"c": "January, 30, 1933",
	"d": "September, 2, 1945",
	"image":"quizimages/q2.jpg",
	"answer": "d"
   },
    {
	"question": "What was the name of the Italian Air Force in World War 2?",
	"a": "Marina Militare",
	"b": "Aeronautica Militare",
	"c": "Regia Aeronautica Italiana",
	"d": "Regia Marina",
	"image":"quizimages/q3.jpg",
	"answer": "c"
   },
   {
	"question": "What was the name of the German Operation which aimed at Taking over Norway and Denmark in World War 2?",
	"a": "Operation Feuerzauber",
	"b": "Operation Weserübung",
	"c": "Operation Rügen",
	"d": "Operation Dirschau",
	"image":"quizimages/q4.jpg",
	"answer": "b"
   },
    {
	"question": "What was the name of the British Operation which evacuated over 300,000 Troops from Dunkirk?",
	"a": "Operation Saturn",
	"b": "Operation Market Garden",
	"c": "Operation Dynamo",
	"d": "Operation Overlord",
	"image":"quizimages/q5.jpg",
	"answer": "c"
   },
    {
	"question": "What is the tank present in the image?",
	"a": "PzKpfw II",
	"b": "M4A1",
	"c": "T34-85",
	"d": "Type 95",
	"image":"quizimages/q6.jpg",
	"answer": "a"
   },
    {
	"question": "What is the ship present in the image?",
	"a": "HMS Hood",
	"b": "USS Arizona",
	"c": "Vittorio Veneto",
	"d": "U-168",
	"image":"quizimages/q7.jpg",
	"answer": "a"
   },
    {
	"question": "What is the name of the aircraft present in this image?",
	"a": "Messerschmitt Bf 109",
	"b": "Heinkel He 111",
	"c": "Supermarine Spitfire",
	"d": "North American P-51",
	"image":"quizimages/q8.jpg",
	"answer": "b"
   },
    {
	"question": "What was the organization which replaced the League of Nations after World War 2?",
	"a": "The United Nations",
	"b": "The European Union",
	"c": "Greater East Asia Co-Prosperity Sphere",
	"d": "The Warsaw Pact",
	"image":"quizimages/q9.svg",
	"answer": "a"
   },
    {
	"question": "What were the names of the two atomic bombs dropped on Hiroshima and Nagasaki?",
	"a": "Iwo Jima and Wake Island",
	"b": "Detroit and Houstan",
	"c": "New York and Washington",
	"d": "Little Boy and Fat Man",
	"image":"quizimages/q10.jpg",
	"answer": "d"
   }
   
	
 ];
 
 
 function loadQuestion() {
	if(currentQuestion == 0){
		closeLightBox();
	}
	//load the image
	let img = document.getElementById("image");
	let preLoadImg = new Image();
	preLoadImg.src =questions[currentQuestion].image;

	preLoadImg.onload = function (){
		img.width = this.width;
	};
	img.style.maxWidth= "80%";
	img.style.margin= "5px";
	img.src = preLoadImg.src;
    //load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	document.getElementById("score").innerHTML = score + "/" + questions.length;
 } // loadQuestion
 
 
 function markIt(ans) {

	// if answer is correct
	if (ans ==questions[currentQuestion].answer) {
		//add one to score
		score++;
		//display score on webpage
		document.getElementById("score").innerHTML = score  + "/" + questions.length;

		message= "Correct!!! your score is " + score + "/" + questions.length;
	}//if
	else{
		message = "Incorrect :( your score is still " + score + "/" + questions.length;


	}//else

	

	//move to next question
	currentQuestion++;
	if (currentQuestion >= questions.length){
		//create a special message
		if(score <= 5){
			message = score  + "/" + questions.length + ". Nice Try, but your score can be better. Click Anywhere on the Page to Try Again.";
			replay();
		}
		else if(score <= 9){
			message =  score  + "/" + questions.length + ". Good Score, but can you get all of them correct? Click Anywhere on the Page to Try Again.";
			replay();
		}
		else{
			message= score  + "/" + questions.length + ". Great Job! You have a great knowledge of World War 2. Click Anywhere on the Page to Try Again.";
			replay();
		}
	}
	else{
		loadQuestion();
	}

	//show lightbox
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
 } // markIt
 //skip question
 function skipQuestion(){
	currentQuestion++;
	if (currentQuestion >= questions.length){
	
	}else{
		loadQuestion();
	}
 }//skip question

 function closeLightBox(){
	document.getElementById("lightbox").style.display = "none";
 }//close lightbox
 //replay
 function replay(){
	score = 0;
	currentQuestion = 0;
	loadQuestion();
	closeLightBox();
	document.getElementById("score").innerHTML = "0"  + "/" + questions.length;
 }
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 
 
 
 
 
 
 
 
 
 
 

