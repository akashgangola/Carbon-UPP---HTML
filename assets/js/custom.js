
  $('.example').alRangeSlider({
    range: {
    min: 0,
    max: 3,
    step:1,
  },
   initialSelectedValues: {
    to: 2
  },
   showInputs:false,

});
$('.rangeslide').alRangeSlider({
    range: {
    min: 0,
    max: 3,
    step: 1
  },
   initialSelectedValues: {
    to: 2
  },
   showInputs:false,

});



        $(document).ready(function(){

            // Toolbar extra buttons
            var btnFinish = $('<button></button>').text('Finish')
                                             .addClass('btn btn-info')
                                             .on('click', function(){ alert('Finish Clicked'); });
            var btnCancel = $('<button></button>').text('Cancel')
                                             .addClass('btn btn-danger')
                                             .on('click', function(){ $('#smartwizard').smartWizard("reset"); });

            // Step show event
            $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
                $("#prev-btn").removeClass('disabled');
                $("#next-btn").removeClass('disabled');
                if(stepPosition === 'first') {
                    $("#prev-btn").addClass('disabled');
                } else if(stepPosition === 'last') {
                    $("#next-btn").addClass('disabled');
                } else {
                    $("#prev-btn").removeClass('disabled');
                    $("#next-btn").removeClass('disabled');
                }
            });

            // Smart Wizard
            $('#smartwizard').smartWizard({
                selected: 0,
                theme: 'arrows', // default, arrows, dots, progress
                // darkMode: true,
                transition: {
                    animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
                },
                toolbarSettings: {
                    toolbarPosition: 'both', // both bottom
                    toolbarExtraButtons: [btnFinish, btnCancel]
                }
            });

            // External Button Events
            $("#reset-btn").on("click", function() {
                // Reset wizard
                $('#smartwizard').smartWizard("reset");
                return true;
            });

            $("#prev-btn").on("click", function() {
                // Navigate previous
                $('#smartwizard').smartWizard("prev");
                return true;
            });

            $("#next-btn").on("click", function() {
                // Navigate next
                $('#smartwizard').smartWizard("next");
                return true;
            });



        });
	//BACKGROUND CHANGE ON TAB
	 $(document).ready(function(){	
		tabnextstep()
		tabprevstep()
		$(".sw-btn-next").click(function(){
			tabnextstep();
		})
		$(".sw-btn-prev, .smtwzd .nav-link").click(function(){	
			  $(this).dblclick();
			tabprevstep()
			console.log("1")
		})
		
		$(".smtwzd .nav-link").click(function(){	
			var currenttarget = $(this).attr("href");
			if (currenttarget == "#step-1") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			} 
			
			else if (currenttarget == "#step-2") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepsecond");
			} 
			else if (currenttarget == "#step-3") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepthird");
			} 
			else if (currenttarget == "#step-4") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepforth");
			}	
			else if (currenttarget == "#step-5") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepfifth");
			}	
		})
		
		
	 });
	 function tabnextstep(){
		var nxtcurrenttab = $("#smartwizard .tab-pane:visible").attr("id");			
		if (nxtcurrenttab == "step-1") {
			$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			$("body").addClass("stepsecond");
		} 
		else if (nxtcurrenttab == "step-2") {
			$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			$("body").addClass("stepthird");
		} 
		else if (nxtcurrenttab == "step-3") {
			$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			$("body").addClass("stepforth");
		} 
		else if (nxtcurrenttab == "step-4") {
			$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			$("body").addClass("stepfifth");
		}
	}
	function tabprevstep(){
		var currenttab = $("#smartwizard .tab-pane:visible").attr("id");
			if (currenttab == "step-1") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
			} 
			
			else if (currenttab == "step-2") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepsecond");
			} 
			else if (currenttab == "step-3") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepthird");
			} 
			else if (currenttab == "step-4") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepforth");
			}	
			else if (currenttab == "step-5") {
				$("body").removeClass("stepsecond stepthird stepforth stepfifth");
				$("body").addClass("stepfifth");
			}	
	}
	
	