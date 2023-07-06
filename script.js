let ratings = document.querySelectorAll('.rating');

let rating = 0;

function highlightStars(index) {
    ratings.forEach((star, idx) => {
        if (idx <= index) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

ratings.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        highlightStars(index);
    });

    star.addEventListener('mouseout', () => {
        highlightStars(rating - 1);
    });

    star.addEventListener('click', () => {
        rating = index + 1;
        highlightStars(rating - 1);
    });
});

function calculateAndDisplayStars() {

    // iterate through the checkboxes and count the selected ones
    var selectedStars = 0;
    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i].classList.contains('selected')) {
            selectedStars++;
        }

    }

    // display the count in the span element
    document.querySelector(".thank-you-card h3 span").textContent = selectedStars;
}


$(document).ready(function () {
    $('.btn-submit').click(function (event) {
        event.preventDefault(); // Prevents the form from submitting
        $('.thank-you-card').css("display", 'block')
        // Fade out the element to hide
        $('main').fadeOut(500, function () {
            // Fade in the element to show after fade out completes

        });
        let selected = $('.select')
        $('.thank-you-card').fadeIn(500);

        calculateAndDisplayStars()
    });
});

// ------------------------------ Jquery


