"user strict"
$(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        const websiteUrl = $("#url").val();
        const checkMeOut = $("#checkMeOut").val();

        console.log("Email: " + email + "\n" + "Password: " + password + "\n" + "Website URL: " + websiteUrl + "\n" + "Check Me Out: " + checkMeOut + "\n");
    })

});