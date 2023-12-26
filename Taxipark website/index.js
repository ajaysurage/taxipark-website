// js code for nested dropdown start

// Handle nested dropdown functionality
const dropdownMenus = document.querySelectorAll('.dropdown-item.dropdown-toggle');
dropdownMenus.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
        const parentDropdown = dropdown.parentElement;
        parentDropdown.classList.toggle('show');
    });
});

// js code for nested dropdown end

// ----------------code for testimonial carouse dynamically start------------

        $(document).ready(function () {
            var itemsPerSlide = 3; // Number of items per slide on large screens
            var itemsPerSlideMedium = 2; // Number of items per slide on medium screens
            var itemsPerSlideSmall = 1; // Number of items per slide on small screens

            function generateCarouselItems() {
                var testimonialItems = ''; // Empty variable to store testimonial items

                // Generate carousel items based on the screen size
                var screenWidth = $(window).width();
                var slidesToShow = itemsPerSlide;

                if (screenWidth < 992 && screenWidth >= 768) {
                    slidesToShow = itemsPerSlideMedium;
                } else if (screenWidth < 768) {
                    slidesToShow = itemsPerSlideSmall;
                }

                // Your testimonial items structure
                // Replace this with your actual content
                var testimonials = [
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-1-100x100.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-1.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-4-100x100.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                    // Add more testimonials as needed
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-5-100x100.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-1.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                    '<div class="col">' +
                    '   <div class="pt-5 testimonial-wrapper testimonial-wrapper badge bg-light text-wrap lh-lg fw-light border-0 text-dark h-75 w-75 fst-italic">' +
                    '       <!-- Your testimonial content -->' +
                    '       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut, blanditiis quos nemo totam tempora autem doloremque, impedit cumque veniam fuga eum amet quaerat earum sequi aliquam, adipisci quidem tempore saepe officiis? Quo veritatis odio odit tenetur ducimus vel ad! Quo eius nostrum ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem harum, accusamus mollitia tempora debitis blanditiis perspiciatis voluptatem repellendus accusantium possimus itaque maiores commodi praesentium magni iusto velit totam vero.</p>' +
                    '       <p class="h2 text-center fw-bold pt-1" style="font-size: 150px;">"</p>' +
                    '       <p class="h6 text-center"><span>ANASTIA STONE</span></p>' +
                    '       <img class="card-img-top mt-5 img-fluid mx-auto" src="Images/client-4-100x100.jpg" alt="standard">' +
                    '   </div>' +
                    '</div>',
                ];

                for (var i = 0; i < testimonials.length; i += slidesToShow) {
                    var testimonialChunk = testimonials.slice(i, i + slidesToShow);
                    testimonialItems += '<div class="carousel-item"><div class="row">' + testimonialChunk.join('') + '</div></div>';
                }

                $('#testimonialCarousel').html(testimonialItems);
                $('.carousel-item:first-child').addClass('active'); // Set the first carousel item as active
            }

            // Generate carousel items on page load and window resize
            generateCarouselItems();
            $(window).on('resize', generateCarouselItems);
        });
 
// ----------------code for testimonial carouse dynamically end-------------