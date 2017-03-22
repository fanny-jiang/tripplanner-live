$(function initializePlanner() {

    var modelsArray = [hotels, restaurants, activities];
    var modelNamesArray = ['hotels', 'restaurants', 'activities'];

    function createOptionTags () {
        for(i = 0; i < modelsArray.length; i++) {
            for(j = 0; j < modelsArray[i].length; j++) {
                $(`select[data-type=${modelNamesArray[i]}]`).append(`<option>${modelsArray[i][j].name}</option>`);
            }
        }
    }

    function blueAddButtons () {

        // for(i = 0; i < modelNamesArray.length; i++) {
        //     console.log($(`button[data-type=${modelNamesArray[i]}][data-action='add']`))
        //     $(`button[data-type=${modelNamesArray[i]}][data-action='add']`).click(function() {
        //         var data = $(`select[data-type=${modelNamesArray[i]}] option:selected`).val()
        //         console.log($(`select[data-type=${modelNamesArray[i]}] option:selected`).val());
        //         // create itinerary item div
        //         $(`ul.list-group.${modelNamesArray[i]}`).append(
        //             `<div class="itinerary-item">
        //                 <span class="title">${data}</span>
        //                     <button class="btn btn-xs btn-danger remove btn-circle">x</button>
        //             </div>`)
        //     });
        // }
        var hotelCounter = 0;
        $("button[data-type='hotels'][data-action='add']").click(function() {
            var data = $("select[data-type='hotels'] option:selected").val()
            // create itinerary item div
            $('ul.list-group.hotels').append(`<div class="itinerary-item hotel${hotelCounter++}"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        });
        var restCounter = 0;
        $("button[data-type='restaurants'][data-action='add']").click(function() {
            var data = $("select[data-type='restaurants'] option:selected").val()
            // create itinerary item div
            $('ul.list-group.restaurants').append(`<div class="itinerary-item rest${restCounter++}"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        });
        var actCounter = 0;
        $("button[data-type='activities'][data-action='add']").click(function() {
            var data = $("select[data-type='activities'] option:selected").val()
            // create itinerary item div
            $('ul.list-group.activities').append(`<div class="itinerary-item activity${actCounter++}"><span class="title">${data}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>`)

        })
    }

    function removeRedButtons() {
        $('#itinerary').on('click', '.remove', function () {
            $(this).parent().remove()
        });
    }

    createOptionTags();
    blueAddButtons();
    removeRedButtons();

})


/*<button data-action="add" class="btn btn-primary btn-circle pull-right">+</button>*/