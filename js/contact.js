function sendMail(str) {
    var link = "mailto:vicbungey@gmail.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
    location.href = link;
}
function contact_us() {
var name = document.forms["contact_form"]["Name"].value;
var Email = document.forms["contact_form"]["Email"].value;
var Phone = document.forms["contact_form"]["Phone"].value;
var Comment = document.forms["contact_form"]["Comment"].value;
if((name !="") && (Email !="") && (Phone !="") && (Location !="") && (Comment !="")) {
   sendMail("HELLO");
}
}
