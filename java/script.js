 // Array of image URLs
 var images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
  // Add more image URLs as needed
];

var currentIndex = 0;
var imageElement = document.getElementById('gallery-image');
var prevButton = document.getElementById('prev-btn');
var nextButton = document.getElementById('next-btn');

// Function to update the displayed image
function showImage(index) {
  imageElement.src = images[index];
}

// Show initial image
showImage(currentIndex);

// Event listener for previous button
prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Event listener for next button
nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});