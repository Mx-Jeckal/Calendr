$(document).ready(function() {
    var rowDiv = $('.row')
    var saveBtn = $('<button>')
    var tBlock = $("<div>")
    var curDay = $('#currentDay')


    var hoursArr = ["9 A.M.", "10 A.M.", "11 A.M.", "12 P.M.", '1 P.M.', "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M."]

    // current day and date (not working)

    curDay.text(moment().format("dddd, MMMM Do"))

    // localDis()
    function localDis() {
        for (var y = 0; y < hoursArr.length; y++) {
            if (localStorage.getItem(hoursArr[y]) != null) {
                $('.input[data-input="' + hoursArr[y] + '"]').text(localStorage.getItem(hoursArr[y]))

            }
        }
    }
    if (moment().isBefore(hoursArr[i]))
    // loop to generate time blocks and save buttons
        for (var i = 0; i < hoursArr.length; i++) {
            localDis()
            var tBlock = $("<div>")
            var $tSave = $('<button>')
            var $tInput = $('<textarea>')
            var $tHour = $('<div>')

            tBlock.attr('class', "dayBlock")
            rowDiv.append(tBlock)

            $tInput.attr('rows', "3")
            $tInput.attr('cols', "20")
            $tInput.attr('value', '')
            $tInput.attr('type', "submit")
            $tInput.attr('class', "input")
            $tInput.attr('data-input', hoursArr[i])



            $tSave.attr('class', "saveBtn")
            $tSave.text("save")
            $tSave.attr('data-input', hoursArr[i])

            $tHour.attr('class', "hour")
            $tHour.text(hoursArr[i])
            tBlock.append($tHour, $tInput, $tSave)



        }
        // the click function for each save button
    $('.saveBtn').on("click", function() {
        var rowId = this.dataset.input

        console.log(localStorage.getItem(rowId))

        localStorage.setItem(rowId, $('.input[data-input="' + rowId + '"]').val())


        console.log(this.dataset.input)

        // if ($('.input[data-input="' + rowId + '"]').val() == "") {
        //     alert('enter some text')
        // } else {

        //     localStorage.setItem(rowId, $('.input[data-input="' + rowId + '"]').val())
        //     console.log(localStorage.getItem(rowId))
        //     $(rowId).text(localStorage.getItem(rowId))

        // }
    })


    // if (rowId != "") {
    //     $('.input[data-input="' + rowId + '"]').localStorage.getItem(rowId)

    // }
})