document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('program-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');

    const programDetails = {
        bscs: {
            img: 'img/program-bscs.jpg',
            title: 'Bachelor of Science in Computer Science',
            description: 'This program provides a comprehensive foundation in computer science, including programming, algorithms, data structures, and more. Students will also gain hands-on experience through practical projects and labs, applying theoretical concepts to real-world problems. Additionally, the curriculum covers emerging technologies and trends, preparing graduates for the rapidly evolving tech industry.'
        },
        bsit: {
            img: 'img/program-bsit.jpg',
            title: 'Bachelor of Science in Information Technology',
            description: 'TThis program focuses on the practical application of technology in business and industry, covering topics such as networking, databases, and web development. Students will engage in hands-on projects that simulate real-world business scenarios, enhancing their problem-solving skills. The curriculum also emphasizes current industry trends and best practices, equipping graduates with the tools needed to excel in a competitive job market.'
        },
        msit: {
            img: 'img/program-msit.jpg',
            title: 'Masters in Information Technology',
            description: 'This advanced program is designed for IT professionals seeking to deepen their knowledge and skills in the field of information technology. It offers specialized coursework in areas such as cybersecurity, cloud computing, and data analytics. Participants will also have opportunities to work on complex, real-world projects, allowing them to apply advanced techniques and strategies. The programs focus on cutting-edge technologies ensures that graduates remain at the forefront of the IT industry.'
        }
    };

    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const program = this.closest('.program-card').getAttribute('data-program');
            const details = programDetails[program];

            modalImg.src = details.img;
            modalTitle.textContent = details.title;
            modalDescription.textContent = details.description;

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});







