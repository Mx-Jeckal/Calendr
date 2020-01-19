$(document).ready(function() {
    var rowDiv = $('.row')
    var tBlock = $("<div>")
    var curDay = $('#currentDay')


    var hoursArr = ["9:00 A.M.", "10:00 A.M.", "11:00 A.M.", "12:00 P.M.", '1 P.M.', "2 P.M.", "3 P.M.", "4 P.M.", "5 P.M."]

    // current day and date
    curDay.text(moment().format("dddd, MMMM Do"))

    // localDis()
    function localDis() {
        for (var y = 0; y < hoursArr.length; y++) {
            if (localStorage.getItem(hoursArr[y]) != null) {
                $('.input[data-input="' + hoursArr[y] + '"]').text(localStorage.getItem(hoursArr[y]))

            }
        }
    }



    // loop to generate time blocks and save buttons
    for (var i = 0; i < hoursArr.length; i++) {
        console.log(hoursArr[i])
        var hourIdArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

        var currentHour = moment().hour()
            // console.log(moment())


        localDis()
        var tBlock = $("<div>")
        var $tSave = $('<button>')
        var $tInput = $('<textarea>')
        var $tHour = $('<div>')

        tBlock.attr('class', "dayBlock")
        tBlock.attr('data-input', hoursArr[i])
        rowDiv.append(tBlock)

        $tInput.attr('rows', "3")
        $tInput.attr('cols', "20")
        $tInput.attr('value', '')
        $tInput.attr('type', "submit")
        $tInput.attr('class', "input")
        $tInput.attr('id', hourIdArr[i])
        $tInput.attr('data-input', hoursArr[i])



        $tSave.attr('class', "saveBtn")
        $tSave.text("save")
        $tSave.attr('data-input', hoursArr[i])

        $tHour.attr('class', "hour")
        $tHour.text(hoursArr[i])
        tBlock.append($tHour, $tInput, $tSave)


        // console.log(hourIdArr[i])

        if (hourIdArr[i] < (currentHour)) {
            $($('#' + hourIdArr[i] + '')).addClass("past")
            $('.dayBlock[data-input="' + hoursArr[i] + '"]').addClass("past")
        }
        if (hourIdArr[i] > (currentHour)) {
            $($('#' + hourIdArr[i] + '')).addClass("future")
            $('.dayBlock[data-input="' + hoursArr[i] + '"]').addClass("future")
                // console.log($('#' + hourIdArr[i] + ''), ('#' + currentHour))
                // console.log('this is future')
        }
        if (hourIdArr[i] == (currentHour)) {
            $($('#' + hourIdArr[i] + '')).addClass("present")
            $('.dayBlock[data-input="' + hoursArr[i] + '"]').addClass("present")
                // console.log('This is present')
        }

    }
    // the click function for each save button
    $('.saveBtn').on("click", function() {
        var rowId = this.dataset.input

        // console.log(localStorage.getItem(rowId))

        localStorage.setItem(rowId, $('.input[data-input="' + rowId + '"]').val())


        // console.log(this.dataset.input)


    })


})