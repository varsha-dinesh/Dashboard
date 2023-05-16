$(document).ready(function () {
  // Sample data for demonstration
  let tableData = [
    {
      checked: "false",
      name: "Amanda Harvey",
      email: "amanda@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "3",
      src: "https://bit.ly/ryan-florence"
    },
    {
      checked: "false",
      name: "Anne Richard",
      email: "anne@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "3",
      src: "https://ui-avatars.com/api/?name=A&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Bob Dean",
      email: "bob@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "8",
      src: "https://ui-avatars.com/api/?name=B&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Brian Halligan",
      email: "brian@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "1",
      src: "https://ui-avatars.com/api/?name=B&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Leanne Graham",
      email: "leanne@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "3",
      src: "https://ui-avatars.com/api/?name=L&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Ervin Howell",
      email: "ervin@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "3",
      src: "https://ui-avatars.com/api/?name=E&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Clementine Bauch",
      email: "clementine@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "8",
      src: "https://ui-avatars.com/api/?name=C&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Patricia Lebsack",
      email: "patricia@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "1",
      src: "https://ui-avatars.com/api/?name=P&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Chelsey Dietrich",
      email: "chesey@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "3",
      src: "https://ui-avatars.com/api/?name=C&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Dennis Schulist",
      email: "dennis@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "3",
      src: "https://ui-avatars.com/api/?name=D&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Kurtis Weissnat",
      email: "Kurtis@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Active",
      orders: "8",
      src: "https://ui-avatars.com/api/?name=K&background=E2E8F4"
    },
    {
      checked: "false",
      name: "Nicholas Runolfsdottir",
      email: "nicholas@site.com",
      phone: "+1-202-555-0140",
      country: "United Kingdom",
      account: "Disabled",
      orders: "1",
      src: "https://ui-avatars.com/api/?name=N&background=E2E8F4"
    },
  ]

  // Loop through the data and create rows
  $.each(tableData, function (index, item) {
    var formattedName = item.name.replace(/ /g, '+').toLowerCase();
    var avatarUrl = "https://ui-avatars.com/api/?name=" + formattedName;
    var row = "<tr class='tr'><td class='td'>" + "<form><input type='checkbox' class='delete-checkbox'/></form>" + "</td><td class='name'>" + "<span><img src='" + item.src + "' alt='Avatar' class='avatarImg'></span>" + item.name + "</td><td>" + item.email + "</td><td>" + item.phone + "</td><td>" + item.country + "</td><td>" + item.account + "</td><td>" + item.orders + "</td></tr>";
    $("#tdata").append(row);
  });
});

$(document).ready(function() {
  $("#table tbody tr").each(function() {
    var status = $(this).find("td:nth-child(6)").text().trim();
    
    if (status === "Active") {
      $(this).find("td:nth-child(6)").prepend('<span class="circle green"></span>');
    } else {
      $(this).find("td:nth-child(6)").prepend('<span class="circle red"></span>');
    }
  });
});



$(document).ready(function () {
  // Event listener for delete button click
  $("#deleteButton").click(function () {
    $(".delete-checkbox:checked").closest("tr").remove();
  });
});

$(document).ready(function () {
  // Event listener for checkbox change
  $(".delete-checkbox").change(function () {
    var checkedCount = $(".delete-checkbox:checked").length;

    $(".selected").text(checkedCount + " Selected");
  });
});

$(document).ready(function() {
  var itemsPerPage = 4; // Number of items per page
  var currentPage = 1; // Current page number
  var $tableRows = $("#table tbody tr");
  var totalPages = Math.ceil($tableRows.length / itemsPerPage); // Total number of pages

  // Display initial page
  displayPage(currentPage);

  // Show table pagination if there are multiple pages
  if (totalPages > 1) {
    $(".table-pagination").show();
  }

  $("#prevButton").click(function() {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
    }
  });

  // Event listener for next button click
  $("#nextButton").click(function() {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
    }
  });

  // Event listener for page number click
  $(".pagination-link").click(function() {
    var clickedPage = $(this).text();
    currentPage = parseInt(clickedPage);
    displayPage(currentPage);
  });

  // Function to display a specific page
  function displayPage(page) {
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    // Hide all table rows
    $tableRows.hide();

    // Show table rows for the current page
    $tableRows.slice(startIndex, endIndex).show();

    // Update the current page number
    $(".pagination-link").removeClass("active");
    $(".pagination-link").eq(page - 1).addClass("active");
  }
});