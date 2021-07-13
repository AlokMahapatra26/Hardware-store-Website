// for search button

function openPage() {
  var x = document.getElementById("search").value;

  if (x == "gate item" || x == "Gate item") {
    window.open("Pages/GateItems.html");
  } else if (x == "channel gate item" || x == "Channel gate item") {
    window.open("Pages/ChannelGateItem.html");
  } else if (x == "design" || x == "Design") {
    window.open("Pages/Designs.html");
  } else if (x == "shutter item" || x == "Shutter item") {
    window.open("Pages/ShutterItems.html");
  } else if (x == "Cutting Blade" || x == "cutting blade") {
    window.open("Pages/OtherFabrication.html");
  } else if (x == "Spring" || x == "spring") {
    window.open("Pages/ShutterItems.html");
  } else if (x == "Bearing Gear Box" || x == "Bearing gear box") {
    window.open("Pages/ShutterItems.html");
  } else {
    window.open("notfound.html");
  }
}
