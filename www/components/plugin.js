


$(document).on("click", "#camera", function(){
      navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true,
        saveToPhotoAlbum: true
        
         });

      function onSuccess(imageURI) {
          var image = document.getElementById('imagem');
          image.src = imageURI;
      }

      function onFail(message) {
          alert('Failed because: ' + message);
     }

});
    function mostramapa(lat,long){
      L.mapquest.key = 'M6YEjAkLxl4ShevHouHFp02pyEOSHm6A';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom:16
        });

        map.addControl(L.mapquest.control());



    }

$(document).on("click","#local",function(){


    var onSuccess = function(position) {
        mostramapa(position.coords.latitude,position.coords.longitude)

    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });

