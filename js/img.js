let selectImgBtn = document.querySelector('.filter-image');

let selectFile = document.getElementById('selectFile');

window.addEventListener('load', function() {
      selectFile.addEventListener('change', function() {
          if (this.files && this.files[0]) {
              let img = document.getElementById('filter-img');  // $('img')[0]
              let ffect = document.getElementById('filter-effect');
              img.src = URL.createObjectURL(this.files[0]); // set src to file url
              img.style.visibility = 'visible';
              ffect.style.visibility = 'visible';
              var c = document.getElementById("myCanvas");
              var ctx = c.getContext("2d");
              img.width = 30;
              img.height = 70;
              ctx.drawImage(img, 0, 0, 0, 0);
          }
      }); 
});

// https://www.youtube.com/watch?v=-d2FeFiBvEo