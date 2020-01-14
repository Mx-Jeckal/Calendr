var rowDiv = $('.row')
var saveBtn = $('<button>')
var tBlock = $("<div>")
var curDay = $('#currentDay')
var time = moment()

var hoursArr = [9, 10, 11, 12, 1, 2, 3, 4, 5]

// current day and date (not working)

curDay.text(time.format("dddd, MMMM Mo"))

for (var i = 0; i < hoursArr.length; i++) {
    var tBlock = $("<div>")
    var $tSave = $('<button>')
    var $tInput = $('<textarea>')

    tBlock.attr('class', "dayBlock")
    tBlock.text(time.hour())
    rowDiv.append(tBlock)
    $tInput.attr('rows', "3")
    $tInput.attr('cols', "20")
    $tInput.attr('class', "input")
    $tSave.attr('class', "saveBtn")
    $tSave.text("save")
    tBlock.append($tInput, $tSave)
}