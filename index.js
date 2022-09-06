$(document).ready(function () {
   // data provided that will populate table
   var rows = [
      {
         "name": "smss.exe",
         "device": "Stark",
         "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
         "status": "scheduled"
      },
      {
         "name": "netsh.exe",
         "device": "Targaryen",
         "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
         "status": "available"
      },
      {
         "name": "uxtheme.dll",
         "device": "Lannister",
         "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
         "status": "available"
      },
      {
         "name": "cryptbase.dll",
         "device": "Martell",
         "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
         "status": "scheduled"
      },
      {
         "name": "7za.exe",
         "device": "Baratheon",
         "path": "\\Device\\HarddiskVolume1\\temp\\7za.exe",
         "status": "scheduled"
      }
   ];

   // incrementing & decrementing 'selected checkboxes' counter
   $('#counterId').text('0');
   $('#tbl').on('change', ':checkbox', function () {
      let counter = $(':checkbox:checked').length;   // grabs all the checkboxes that are checked
      $('#counterId').text(counter);
      // if any checkbox is selected - give the top checkbox the 'indeterminate' state
      if (counter > 0) {
         $("#checkBox-top").prop("indeterminate", true);
      }
      // if none of the checkboxes are selected - 'clear' the top checkbox
      if (counter == 0) {
         $("#checkBox-top").prop("indeterminate", false);
      }
      // if all the checkboxes are checked - make the top checkbox's state 'checked'
      if ($('.checkBoxes:checked').length == $('.checkBoxes').length) {
         $("#checkBox-top").prop("indeterminate", false);
         $("#checkBox-top").prop("checked", true);
      }
   });

   // laying out the table with data from 'rows' array
   var html = "<table id='myTable'>";
   let icon_download_url = "<img style='height: 11px; padding-right: 3px;' src='https://res.cloudinary.com/analogyofpearl/image/upload/v1661987639/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-download.svg'/>";
   let icon_scheduled = "<img style='height: 11px; padding-right: 3px;' src='https://res.cloudinary.com/analogyofpearl/image/upload/v1662043772/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-scheduled.svg'/>";
   let icon_available = "<img style='height: 11px; padding-right: 4px; margin-bottom: -1px;' src='https://res.cloudinary.com/analogyofpearl/image/upload/v1662048264/Shared/technical%20assessments/CrowdStrike%20-%20Selection%20Downloader/icon-available-v3.svg'/>";
   let icon_status;

   html += "<thead>"
   html += "<tr>";
   html += "<td class='td-caption'>" + "<input type='checkbox' onclick='toggle(this);' class='checkBox-persianBlue' id='checkBox-top'>" + "</td>";
   html += "<td class='td-caption'>" + "<span class='cell-caption'>Selected:</span> " + "<span id='counterId' class='color-persianBlue'>0</span>" + "</td>";
   html += "<td class='td-caption'>" + icon_download_url + "<a href='#' class='link-downloadSelected' onclick='downloadSelected();'><span class='cell-caption'>Download Selected</span></a>" + "</td>";
   html += "</tr>";

   html += "<tr>";
   html += "<td>" + "" + "</td>";
   html += "<td class='cell-heading'>" + "Name" + "</td>";
   html += "<td class='cell-heading'>" + "Device" + "</td>";
   html += "<td class='cell-heading'>" + "Path" + "</td>";
   html += "<td class='cell-heading'>" + "Status" + "</td>";
   html += "</tr>";
   html += "</thead>"

   html += "<tbody>"
   for (var i = 0; i < rows.length; i++) {
      html += "<tr class='tr-styles' id='" + i + "'>";
      html += "<td>" + "<input type='checkbox' onclick='colorRow(this.id);' class='checkBox-persianBlue checkBoxes' id='" + i + "'>" + "</td>";
      html += "<td class='td-styles'>" + rows[i].name + "</td>";
      html += "<td class='td-styles'>" + rows[i].device + "</td>";
      html += "<td class='td-styles'>" + rows[i].path + "</td>";
      icon_status = ((rows[i].status == "available") ? icon_available : icon_scheduled);
      html += "<td class='td-styles'>" + icon_status + rows[i].status + "</td>";
      html += "</tr>";
   }
   html += "</tbody>"
   html += "</table>";
   document.getElementById("tbl").innerHTML = html;
});