// Getting Time

// moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment().format('H');
console.log(currentTime)



$(".button").on('click', function(){

   var event =  $(this).siblings(".event").val()
   var time = $(this).parent().attr("id")

   localStorage.setItem(time, event)

})


$('.TimeSlot').each(function(){
    var myID = $(this).attr('id')
    console.log(myID)
    if(+myID > +currentTime){
        $(this).addClass('red')
    } else if (+myID < +currentTime) {
        $(this).addClass('green')
    } else {
        $(this).addClass('blue')
    }
})

// i=9; i<18; i++
$("#9 .event").val(localStorage.getItem("9"))
$("#10 .event").val(localStorage.getItem("10"))
$("#11 .event").val(localStorage.getItem("11"))
$("#12 .event").val(localStorage.getItem("12"))
$("#13 .event").val(localStorage.getItem("13"))
$("#14 .event").val(localStorage.getItem("14"))
$("#15 .event").val(localStorage.getItem("15"))
$("#16 .event").val(localStorage.getItem("16"))
$("#17 .event").val(localStorage.getItem("17"))
// console.log(localStorage.getItem("13"))


