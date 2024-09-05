
function sumbitmsg()
{
    var name = document.getElementById('name1');
    var email = document.getElementById('email1');
    var msg = document.getElementById('msg1')

    if(name.value === '' || email.value === '' ||  msg.value === '' )
    {

      danger.style.display = 'block';
     
    }
    else{
      swal({
        title: "Are you sure?",
        text: "This form will be submitted",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(function (isOkay) {
        if (isOkay) {
            form.submit();
        }
    });
    return false;
      //confirm("Are You Sure For Sumbit?");


     // alert("Your detailed sumbited successfully");
    }
  }
  function freeclass()
  {
    
    var name = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email3');
    var tel  = document.getElementById('tel3');
    //    var formselected = document.getElementById('formselected');
    //    var img3 = document.getElementById('img3');
    var check = document.getElementById('invalidCheck');

    //alert(name.value);
    //alert(check.checked);
    
    if(name == '' || lastname == '' || email == '' ||  tel == '' || check.checked == false )
        {
          swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        }
        else{ 
         // swal ( "success", "We have received your request and a member of our team will get back to you soon", "success")
          alert("We have received your request and a member of our team will get back to you soon.")  
           //swal("Good job!", "You clicked the button!", "success");
        }
        
  }
  function message()
  {
    
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');
    var formselect = document.getElementById('formselect').value;

//    alert(formselect.value);
    if(name.value == '' || email.value == '' ||  tel.value == '' || formselect == ' Choose...')
    {

      swal ( "Oops" ,  "Something went wrong!" ,  "error" )

     
    }
    else{

      alert("We have received your request and a member of our team will get back to you soon.");
    }
   
}
function apply()
{
  
  var name = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('email3');
  var tel  = document.getElementById('tel3');
  var autoSizingSelect = document.getElementById('autoSizingSelect1');
   //var img3 = document.getElementById('img3');
  var check = document.getElementById('invalidCheck');

  //alert(name.value);
  //alert(check.checked);
  if(name == '' || lastname == '' || email == '' ||  tel == '' || check.checked == false || formselect == ' Choose...' )
    {
      danger.style.display = 'block';
    }
    else if(autoSizingSelect == "Choose...")
      {
        alert("Please select.....");
            
      }
      else{

        alert("We have received your request and a member of our team will get back to you soon.");

      }
      
}

var typed = new Typed(".text", {
  strings: ["Fronted Developer", "Web designer", "Web developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});