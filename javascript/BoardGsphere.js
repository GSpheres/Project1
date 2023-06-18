function toggleDropdown() {
      var dropdownContent = document.getElementById("myAccountDropdownContent");
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    }

    window.onclick = function(event) {
      if (!event.target.matches('.navbar-link')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === 'block') {
            openDropdown.style.display = 'none';
          }
        }
      }
    };
    function navigateToPage(pageUrl){
      window.location.href = pageUrl;
    }