"use strict"
$(function () {
    $("form").submit(function (event) {

        event.preventDefault();
        const productNumber = $("#productNumber").val()
        const name = $("#name").val()
        const unitPrice = $("#unitPrice").val()
        const quantityInStock = $("#quantityInStock").val()
        const supplier = $("#supplier").val()
        const dateSupplied = $("#dateSupplied").val()

        const div = $("<div>")

        $("form").after(div.text("Product Number: " + productNumber + "\n" +
            "Name: " + name + "\n" +
            "Unit Price: " + unitPrice + "\n" +
            "Quantity In Stock: " + quantityInStock + "\n" +
            "Supplier: " + supplier + "\n" +
            "Date Supplied: " + dateSupplied + "\n"))
    })


})