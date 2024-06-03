document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        filterPosts(searchTerm, getActiveFilters());
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('active');
            filterPosts(searchInput.value.toLowerCase(), getActiveFilters());
        });
    });

    function getActiveFilters() {
        const filters = {
            category: [],
            subject: [],
            instructor: [],
            dialect: [],
            language: []
        };

        document.querySelectorAll('.filter-btn.active').forEach(button => {
            const filterType = button.getAttribute('data-filter');
            const filterValue = button.getAttribute('data-value');
            filters[filterType].push(filterValue);
        });

        return filters;
    }

    function filterPosts(searchTerm, filters) {
        const posts = document.querySelectorAll('.post-item');
        posts.forEach(post => {
            const matchesSearch = post.innerText.toLowerCase().includes(searchTerm);
            const matchesFilters = Object.keys(filters).every(filterType => {
                const filterValues = filters[filterType];
                if (filterValues.length === 0) return true;

                const postValues = JSON.parse(post.getAttribute(`data-${filterType}s`));
                return filterValues.some(value => postValues.includes(value));
            });

            if (matchesSearch && matchesFilters) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    }
});
