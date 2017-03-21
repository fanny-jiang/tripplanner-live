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
        // var selected = '';

        // $("select[data-type='hotels'] option:selected").change(function() {
        //     selected = $("option:selected")
        //  })

        $("button[data-type='hotels'][data-action='add']").click(function() {
            var data = $("select[data-type='hotels'] option:selected").val()
            // create itinerary item div
            console.log(data);
            console.log($('ul.list-group').filter('.hotels'));
            $('ul.list-group.hotels').append(`<div class="itinerary-item"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        });

        $("button[data-type='restaurants'][data-action='add']").click(function() {
            var data = $("select[data-type='restaurants'] option:selected").val()
            // create itinerary item div
            $('ul.list-group.restaurants').append(`<div class="itinerary-item"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        });

        $("button[data-type='activities'][data-action='add']").click(function() {
            var data = $("select[data-type='activities'] option:selected").val()
            // create itinerary item div
            $('ul.list-group.activities').append(`<div class="itinerary-item"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        })



    }

    createOptionTags();
    blueAddButtons();

})


/*<button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>*/