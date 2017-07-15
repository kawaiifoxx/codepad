// JavaScript Document
$( document ).ready(function() {
     Materialize.toast('Codepad is ready!', 4000)
});
function outputContent() {
			$("#iframe_area_out").contents().find("html").html("<html>"+"<head><style>"+$("#text_area_css").val()+"</style></head>"+"<body>"+$("#text_area_html").val()+"</body>"+"</html>");
			
			document.getElementById("iframe_area_out").contentWindow.eval($("#text_area_js").val());
		};
		  $("#opt_html").click(function () {
			  if ($("#html_container").hasClass("s4") == true) {
			  $("#html_container").removeClass("s4");
			  $("#html_container").addClass("s12");
			  $("#css_container").css("display","none");
			  $("#js_container").css("display","none");
		      $("#out_box").css("display", "none");
			  } else {
				  $("#html_container").removeClass("s12");
				  $("#html_container").addClass("s4");
			  }
			  if ($("#html_container").css("display") == "none"){
				  $("#html_container").css("display", "block")
			  }
		  });
		$("#opt_css").click(function () {
			  if ($("#css_container").hasClass("s4") == true) {
			  $("#css_container").removeClass("s4");
			  $("#css_container").addClass("s12");
			  $("#html_container").css("display","none");
			  $("#js_container").css("display","none");
		      $("#out_box").css("display", "none");
			  } else {
				  $("#css_container").removeClass("s12") 
				  $("#css_container").addClass("s4"); 
			  }
			if ($("#css_container").css("display") == "none"){
				  $("#css_container").css("display", "block")
			  }
		  });
		$("#opt_js").click(function () {
			  if ($("#js_container").hasClass("s4") == true) {
			  $("#js_container").removeClass("s4");
			  $("#js_container").addClass("s12");
			  $("#html_container").css("display","none");
			  $("#css_container").css("display","none");
		      $("#out_box").css("display", "none");
			  } else {
				  $("#js_container").removeClass("s12") 
				  $("#js_container").addClass("s4"); 
			  }
			if ($("#js_container").css("display") == "none"){
				  $("#js_container").css("display", "block")
			  }
		  });
		$("#opt_out").click(function () {
			
			if($("#out_box").css("display") == "none") {
				$("#out_box").css("display", "block");
			} else {
				$("#out_box").css("display", "none");
			}
		});
		$("#opt_reset").click(function () {
			    Materialize.toast('Your workspace has been reset!', 4000);
				$("#out_box").css("display", "block");
				$("#js_container").css("display", "block");
				$("#css_container").css("display", "block");
				$("#html_container").css("display", "block");
			    $("#js_container").removeClass("s12");
				$("#js_container").addClass("s4");
			    $("#css_container").removeClass("s12");
				$("#css_container").addClass("s4");
			    $("#html_container").removeClass("s12");
				$("#html_container").addClass("s4");
			    
		});
		outputContent();
		$("textarea").on('change keyup paste', function() {
		outputContent();
			
        });