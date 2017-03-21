$(function initializePlanner() {

    function createOptionTags () {
        for(i = 0; i < hotels.length; i++) {
            $("select[data-type='hotels']").append(`<option>${hotels[i].name}</option>`)
        }

        for(i = 0; i < restaurants.length; i++) {
            $("select[data-type='restaurants']").append(`<option>${restaurants[i].name}</option>`)
        }

        for(i = 0; i < activities.length; i++) {
            $("select[data-type='activities']").append(`<option>${activities[i].name}</option>`)
        }
    }

    function blueAddButtons () {
        var data = '';
        // var selected = '';
       
        $("select[data-type='hotels'] option:selected").change(function() {
            selected = $("option:selected")
         })

        // $("button[data-type='hotels'][data-action='add']").click(function() {
        //     data = $("select[data-type='hotels'] option:selected").val()
        // })



    }

    createOptionTags();
    blueAddButtons();

})


/*<button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>*/