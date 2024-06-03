<script>
    // JavaScript to handle the filtering and searching
    function filterItems() {
        var typeFilterValue = document.getElementById('typeFilter').value;
        var colorFilterValue = document.getElementById('colorFilter').value;
        var searchValue = document.getElementById('searchInput').value.toLowerCase();
        var items = document.querySelectorAll('#itemList li');

        items.forEach(function(item) {
            var itemType = item.getAttribute('type');
            var itemColor = item.getAttribute('color');
            var itemName = item.textContent.toLowerCase();

            if ((typeFilterValue === 'all' || itemType === typeFilterValue) &&
                (colorFilterValue === 'all' || itemColor === colorFilterValue) &&
                itemName.includes(searchValue)) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Attach event listeners to the dropdowns and search input
    document.getElementById('typeFilter').addEventListener('change', filterItems);
    document.getElementById('colorFilter').addEventListener('change', filterItems);
    document.getElementById('searchInput').addEventListener('input', filterItems);
</script>
