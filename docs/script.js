$("#currentDay").html(moment().format('MMMM Do YYYY'));

$(window).on('load', createBoxes());

function createBoxes() {
    for (let i = 9; i<=17;i++){
        var time =i;
        var meridian = 'AM';
        if (i>12)
            time=i-12;
        if (i>=12)
        meridian = 'PM';
        
       var html= `
        <div class="row">
        <div class=" col-md-2 bg-light border">
          <p class="text-center">${time+meridian}</p>
        </div>
        <input id="${i}"  class="col-md-8 border" >
        <button id ="${'button'+i}"class="col-md-1 bg-info border">
            <p class="text-center">save</p>
        </button>
        `;

        $(".container").append(html);

        
    }
    saveData()
    update()
}
function saveData(){
    for (let i = 9; i<=17;i++){
        id=String('#'+i)
        buttonId = String('#button'+i);
        $(id).click(function(){
            localStorage.setItem(i,$(id).value)

        });
    }
}
function update() {
    for (let i = 9; i<=17;i++){
        var id = String('#'+i);
    if(moment().format('H')<i)
        $(id).css({'background-color':'white'});
    else if (moment().format('H')>=i && moment().format('H')<(i+1))
        $(id).css({'background-color':'red'});
    else if (moment().format('H')>=(i+1))
        $(id).css({'background-color':'grey'});
    }

}