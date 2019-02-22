document.getElementById('file').onchange = function() {

  var file = this.files[0];

  var reader = new FileReader();
  reader.fileName = file.name
  reader.onload = function(e) {
    // Entire file
    console.log(this.result);

    // By lines
    var lines = this.result.split('\n');
    var count = 0;
    for (var line = 0; line < lines.length; line++) {
      console.log(lines[line]);
      count = count + 1;
      document.getElementById('result').innerHTML = e.target.fileName + " lines of code: <br> " + count;
    }
  };
  reader.readAsText(file);


};
