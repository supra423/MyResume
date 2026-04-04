const videosDescriptions = [
	`sizeof is a simple CLI program written in C that I created to check the "size of" a particular file or directory.
	 If the argument that is passed to the program is a file, it displays the size of the file in bytes, the output may 
	contain extra units of measurement (KiB, MiB, and GiB) depending on the size of the file.Otherwise, if the argument 
	passed is a directory, the program will recursively check each file and subdirectories inside the directory and sums
	 up the total size of the directory. This works almost exactly like the "du" command in Linux, but with more varied 
	output and I fixed a small bug that the "du" command has where it includes the size of files that aren't supposed to 
	be included like files inside directories like /run or /proc in a Linux machine, this results in the output 
	displaying over 130TB which is insane. The name of the program comes from the "sizeof" operator in C which is used to 
	determine the size of a data type or variable in bytes, and I thought it would be a fitting name for this program since 
	it also determines the size of files and directories.`,
	`2048 is a puzzle game written in Java. The game consists of a 4x4 grid where the player can slide tiles in four 
	directions (up, down, left, right). Each tile has a number on it, and when two tiles with the same number collide, 
	they merge into a single tile with the sum of the two numbers. The objective of the game is to reach the tile with 
	the number 2048. The funny part about this is that I did not used a game engine for this, but rather, I created the 
	game using Java's built-in Swing library that is usually used for creating GUIs.`,
	`PacMan is a classic arcade game that I recreated using Rust. The game features a maze where the player controls PacMan, 
	who must navigate through the maze while avoiding ghosts and eating pellets. The objective of the game is to eat all the pellets 
	in the maze while avoiding the ghosts. If PacMan eats a power pellet, he can temporarily eat the ghosts for extra points.
	 I used the Macroquad library to create this game, which is not really a game engine, but it's just a library that only provides
	ways to create windows, handle input, and render graphics, so I had to implement all the game logic and mechanics myself, which was 
	a fun challenge.`
];
let currentVideoIndex = 0;
const videos = ['assets/sizeof.mp4', 'assets/2048.mp4', 'assets/pacman.mp4'];
const videosTitles = ['Project Title: sizeof', 'Project Title: 2048', 'Project Title: PacMan'];
const aboutMeButtonWrapper = document.getElementById('aboutMeButtonWrapper');
const aboutMeParagraph = document.getElementById('aboutMeParagraph');
const videoDescriptionButtonWrapper = document.getElementById('videoDescriptionButtonWrapper');
const videoDescription = document.getElementById('videoDescription');

function buttonWrapperHelper(buttonWrapper, content, arrowId) {
	buttonWrapper.addEventListener('click', function() {
		if (content.style.display === 'block') {
			content.style.display = 'none';
		} else {
			content.style.display = 'block';
		}

		if ($(`#${arrowId}`).attr('src') === 'assets/arrow-down-icon.png') {
			$(`#${arrowId}`).attr('src', 'assets/arrow-up-icon.png');
		} else {
			$(`#${arrowId}`).attr('src', 'assets/arrow-down-icon.png');
		}
	});
}

function videoButtonsHelper(videoButton, isNext) {
	$(`#${videoButton}`).on('click', function() {
		if (isNext) {
			currentVideoIndex += 1;
			if (currentVideoIndex >= videos.length) {
				currentVideoIndex = 0;
			}
		} else {
			currentVideoIndex -= 1;
			if (currentVideoIndex < 0) {
				currentVideoIndex = videos.length - 1;
			}
		}
		$('#projectVideo').attr('src', videos[currentVideoIndex]);
		$('#videoTitle').text(videosTitles[currentVideoIndex]);
		$('#videoDescription').text(videosDescriptions[currentVideoIndex]);
	});
}


$(document).ready(function() {
	buttonWrapperHelper(aboutMeButtonWrapper, aboutMeParagraph, 'dropArrowAboutMe');
	buttonWrapperHelper(videoDescriptionButtonWrapper, videoDescription, 'dropArrowVideoDescription');
	videoButtonsHelper('nextVideo', true)
	videoButtonsHelper('prevVideo', false)
	const form = document.querySelector('form');
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;

		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
	});
});
