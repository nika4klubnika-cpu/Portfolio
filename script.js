
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close-modal');
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            console.log(" ", videoSrc);

             if (videoSrc) {
                modalVideo.querySelector('source').src = videoSrc;
                modalVideo.load();
                modal.style.display = 'block';
                modalVideo.play();
            }
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
        modalVideo.pause();
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    };
};
