let navbar = document.querySelector('.navbar-container'),
    navbar_collapse = document.querySelector('.navbar-collapse'),
    icon = document.querySelector('#navbar-toggler i'),
    navbar_toggler = document.querySelector('.navbar-toggler');

var waypoint = new Waypoint({
    element: document.getElementById('why-qubly'),
    handler: function(direction) {
        if (direction == 'down') {
            navbar.classList.remove('position-absolute');
            navbar.classList.add('position-sticky');
        } else {
            navbar.classList.add('position-absolute');
            navbar.classList.remove('position-sticky');
        }
    }
})

icon.addEventListener('click', () => {
    // console.log('lol icon');
    let value = navbar_toggler.attributes.getNamedItem('aria-expanded').value;
    if (value == 'true') {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-x');
    }

    // if (navbar_collapse.classList.contains('collapse')) {
    //     console.log('show');
    // }
    //     // nav_toggler.classList.replace('fa-bars', 'fa-x');
    //     // nav_toggler.classList.add('fa-x');
    // }
    // } else {
    //     icon.classList.remove('fa-x');
    //     icon.classList.add('fa-bars');
    // }
});