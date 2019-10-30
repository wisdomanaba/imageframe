var takeScreenShot = function() {
    html2canvas(document.getElementById("filter-img"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=350;
            tempcanvas.height=350;
            var context=tempcanvas.getContext('2d');
            // context.drawImage(canvas,112,0,288,200,0,0,width: 350,height: 350);
            context.drawImage(canvas,0,0,0,0,0,0,350,350);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        }
    });
}