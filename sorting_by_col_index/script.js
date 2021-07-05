function sortAcc(){
  var table, rows, isSwitching, i, x, y, needSwitch;
  table = document.getElementById("bookTable");
  col = document.getElementById("col").value;
  isSwitching = true;
  while (isSwitching) {
    isSwitching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      needSwitch = false;
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      if (x.innerHTML > y.innerHTML) {
        needSwitch = true;
        break;
      }
    }
    if (needSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
    }
  }
}

function sortDec(){
  var table, rows, isSwitching, i, x, y, needSwitch;
  table = document.getElementById("bookTable");
  col = document.getElementById("col").value;
  isSwitching = true;
  while (isSwitching) {
    isSwitching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      needSwitch = false;
      x = rows[i].getElementsByTagName("TD")[col];
      y = rows[i + 1].getElementsByTagName("TD")[col];
      if (x.innerHTML < y.innerHTML) {
        needSwitch = true;
        break;
      }
    }
    if (needSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      isSwitching = true;
    }
  }
}