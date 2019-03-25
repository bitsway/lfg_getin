$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }
var  apipath ='http://a007.yeapps.com/acme/medSearch/'



$(document).ready(function(){
    $.afui.launch();

	localStorage.location_error=''
	$("#wait_image_login").hide();
	$('#menu_lv').empty()
	$('#menu_lv').append(localStorage.menu_list);
	
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	
	getLocationInfo_ready();
	
	

var currentDate = new Date()
var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
var year = currentDate.getFullYear()
//alert (parseInt(day))
var today=  year + "-" + month + "-" + day
localStorage.today=today;
						
						

	//currentDate=2016-03-11
	//localStorage.synced=''
	//alert (today);
	//alert (localStorage.synced);
	if (localStorage.synced=='YES'){
		$("#cid").val(localStorage.cid);
		$("#user_id").val(localStorage.user_id);
		$("#user_pass").val(localStorage.user_pass);
		//if (localStorage.user_type=='sup'){
//			$("#chemisVDiv").hide();
//			$("#chSaveDiv").hide();
//			
//			
//			}
//			else{
//				$("#chemisVDiv").show();
//				$("#chSaveDiv").show();
//			}
		//alert (localStorage.synced)
		$.afui.loadContent("#pageHome",true,true,'right');
		
	}
	
});

//if($.os.ios)
$.afui.animateHeader(true);
	//	getLocation()

function reload_function() {
	location.reload();
}


function getLocationInfo() { //location
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#visit_location").hide();
	
	$("#wait_image_visit_submit_doc").hide()
	$("#visit_submit_doc").show();

	$("#checkLocation_doc").html('');
	
	$("#errorChkVSubmit").html('');
	$("#errorChkVSubmit_doc").html('');
	var options = { enableHighAccuracy: true, timeout:15000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
}

function onSuccess(position) {
	
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	$("#checkLocation").html('Location Confirmed'); 
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();

	localStorage.location_error=''
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
} 
function onError(error) {
	localStorage.location_error=error.code
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	//$("#lat_p").val(0);
	//$("#long_p").val(0);

	if (localStorage.location_error==2){
		$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		//$("#checkLocationProfileUpdate").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		$("#checkLocation_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');

	}else{
		$("#checkLocation").html('Location can not be found. Last Location will be submitted.');
		//$("#checkLocationProfileUpdate").html('Location can not be found. Last Location will be submitted.');
		$("#checkLocation_doc").html('Location can not be found. Last Location will be submitted.');
	}
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
}

//==Reload Location
function getLocationInfo_ready() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").show();
	$("#visit_location").hide();
	$("#checkLocation").html(''); 
	$("#wait_image_visit_submit_doc").hide();
	$("#checkLocation_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess_ready, onError_ready, options);
}

// onSuccess Geolocationshom

function onSuccess_ready(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	//$("#lat_p").val(position.coords.latitude);
	//$("#long_p").val(position.coords.longitude);
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	$("#errorChkVSubmit").html('');
	//$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();

	geocoder = new google.maps.Geocoder();
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
} 
function onError_ready(error) {
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#checkLocation").html(''); 
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
    $("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide();
	alert ("Please on your GPS")
	//$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
}


//========================================

function codeLatLng(lat, lng) {
    var geocoder;
	//alert ('sdfds')
	geocoder = new google.maps.Geocoder();
	
	var latlng = new google.maps.LatLng(lat, lng);
	//alert (latlng)
	geocoder.geocode(
		{'latLng': latlng}, 
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0]) {
					
					var add= results[0].formatted_address ;
					var add1= results[1].formatted_address ;
					var add2= results[2].formatted_address ;
					//alert (add2)
					//alert (add1)
					var  value=add.split(",");
					var  value1=add1.split(",");
					var  value2=add2.split(",");
					
					state=value2[1];
					city=value2[0];
					area=value1[0];
					road=value[0];
					localStorage.location_detail=state+','+city+','+area+','+road;
					//alert (localStorage.location_detail)
				}
				else  {
					alert("address not found");
				}
			}
			 else {
				alert("Geocoder failed due to: " + status);
			}
		}
	);
  }

//====================================
//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#visit_location").show();
	
	//$("#lat").val(0);
	//$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	//$("#visit_location_doc").show();
	$("#checkLocation_doc").html('');
	
}
// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		$.afui.loadContent("#login",true,true,'right');	
		//$.afui.loadContent("#pageHome",true,true,'right');
	}
	else{	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
}

//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		$.afui.loadContent("#login",true,true,'right');

	};
}

// ================== shima start ===============


function get_login() {
	$.afui.loadContent("#login",true,true,'right');

	}
function afterSync(){

}

function homePage() {
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;						

	//if ((localStorage.synced=='YES') & (localStorage.sync_date==today)){
	// if (localStorage.synced=='YES'){
		
		
		$.afui.loadContent("#pageHome",true,true,'right');
	// }
	
	//$("#error_login").html('');
	//$.afui.loadContent("#pageHome",true,true,'right');
}


function lafarge_app() {	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/kpl/syncmobile_417_new_ibn_newtest/dmpath'
	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/lafarge/syncmobile_lafarge/dmpath?CID='+localStorage.cid +'&HTTPPASS=e99business321cba'
	
	var  apipath_base_photo_dm='http://w02.yeapps.com/lfg_getin/syncmobile_lafarge/dmpath?CID='+localStorage.cid +'&HTTPPASS=e99business321cba'
				 	 
	//alert(apipath_base_photo_dm)
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{

		$("#loginButton").hide();
		$("#wait_image_login").show();
		$("#error_logintext").val(apipath_base_photo_dm);
		$.ajax(apipath_base_photo_dm,{
								// cid:localStorage.cid,user_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
			type: 'POST',
			timeout: 30000,
			error: function(xhr) {

				$("#wait_image_login").hide();
				$("#loginButton").show();
				$("#error_login").html('Network Timeout. Please check your Internet connection..1');
			},
			success:function(data, status,xhr){
				if (status=='success'){
					localStorage.base_url='';
					var dtaStr=data.replace('<start>','').replace('<end>','')
					var resultArray = dtaStr.split('<fd>');	
					 //alert(resultArray)
					// var apiPath=resultArray[0]

					if(resultArray.length>1){
						var base_url=resultArray[0];
						var photo_url=resultArray[1];
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#doctorButton").show();
							$("#error_login").html('Base URL not available');	
						}
						else{
							localStorage.base_url='';
							localStorage.photo_url='';


							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;

							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
							var currentDate = new Date()
							var day = currentDate.getDate();if(day.length==1)	{day="0" +day};
							var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
							var year = currentDate.getFullYear()
							var today=  year + "-" + month + "-" + day
							
							localStorage.sync_date=today;
							
							//alert (localStorage.base_url+'lafarge_app?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
							
							$.ajax(localStorage.base_url+'lafarge_app?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								// cid:localStorage.cid,user_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {

									$("#wait_image_login").hide();
									$("#loginButton").show();
									$("#error_login").html('Network Timeout. Please check your Internet connection..2');
								},
								success:function(data, status,xhr){	
								 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
									
									if (resultArray[0]=='FAILED'){
									
										$("#wait_image_login").hide();
										$("#loginButton").show();								
										$("#error_login").html(resultArray[1]);
									}
									else if (resultArray[0]=='SUCCESS'){
										afterSync()

										localStorage.synccode=resultArray[1];
										
										$.afui.loadContent("#pageHome",true,true,'right');
										
									}//else failed
								}// success
							});	//Second Hit
						}
		     		}
				}
			}
		});	
	}
}		

		

function get_in() {	

	$("#get_in_wimg").hide();
	$.afui.loadContent("#get_Page_in",true,true,'right');
}


function get_in_submit() {
	$("#error_getin_page").html('');
	$("#get_in_wimg").show();
	
	var getIn_drvName=$("#getIn_drvName").val();
	var getIn_truckNo=$("#getIn_truckNo").val();

	var getIn_linc1=$("#getIn_linc1").val();
	var getIn_linc2=$("#getIn_linc2").val();
	var getIn_linc3=$("#getIn_linc3").val();
	var getIn_linc4=$("#getIn_linc4").val();

	var getIn_driv_lic_check=($("#getIn_driv_lic_check").is(':checked') ? 1 : 0);
	var getIn_lic_check=($("#getIn_lic_check").is(':checked') ? 1 : 0);
	var getIn_safty_brf=($("#getIn_safty_brf").is(':checked') ? 1 : 0);
	var getIn_tire=($("#getIn_tire").is(':checked') ? 1 : 0);
	var getIn_ligth=($("#getIn_ligth").is(':checked') ? 1 : 0);
	
    var getIn_horn=($("#getIn_horn").is(':checked') ? 1 : 0);
    var getIn_windshild=($("#getIn_windshild").is(':checked') ? 1 : 0);
    var getIn_glass=($("#getIn_glass").is(':checked') ? 1 : 0);
    var getIn_wiper=($("#getIn_wiper").is(':checked') ? 1 : 0);
    var ppe_getIn=($("#ppe_getIn").is(':checked') ? 1 : 0);
	
	// getLocationInfo_ready()
	
	// var test_valn=$("#test_n").val(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_truckNo='+getIn_truckNo+'&getIn_linc1='+getIn_linc1+'&getIn_linc2='+getIn_linc2+'&getIn_linc3='+getIn_linc3+'&getIn_linc4='+getIn_linc4 +'&getIn_driv_lic_check='+getIn_driv_lic_check+'&getIn_lic_check='+getIn_lic_check+'&getIn_safty_brf='+getIn_safty_brf+'&getIn_tire='+getIn_tire+'&getIn_ligth='+getIn_ligth+'&getIn_horn ='+getIn_horn +'&getIn_windshild ='+getIn_windshild+'&getIn_glass ='+getIn_glass+'&getIn_wiper ='+getIn_wiper+'&ppe_getIn ='+ppe_getIn)
		
	// alert(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_truckNo='+getIn_truckNo+'&getIn_linc1='+getIn_linc1+'&getIn_linc2='+getIn_linc2+'&getIn_linc3='+getIn_linc3+'&getIn_linc4='+getIn_linc4 +'&getIn_driv_lic_check='+getIn_driv_lic_check+'&getIn_lic_check='+getIn_lic_check+'&getIn_safty_brf='+getIn_safty_brf+'&getIn_tire='+getIn_tire+'&getIn_ligth='+getIn_ligth+'&getIn_horn ='+getIn_horn +'&getIn_windshild ='+getIn_windshild+'&getIn_glass ='+getIn_glass+'&getIn_wiper ='+getIn_wiper+'&ppe_getIn ='+ppe_getIn)
									// =============== novivo2019 start ================
	$.ajax(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_truckNo='+getIn_truckNo+'&getIn_linc1='+getIn_linc1+'&getIn_linc2='+getIn_linc2+'&getIn_linc3='+getIn_linc3+'&getIn_linc4='+getIn_linc4 +'&getIn_driv_lic_check='+getIn_driv_lic_check+'&getIn_lic_check='+getIn_lic_check+'&getIn_safty_brf='+getIn_safty_brf+'&getIn_tire='+getIn_tire+'&getIn_ligth='+getIn_ligth+'&getIn_horn ='+getIn_horn +'&getIn_windshild='+getIn_windshild+'&getIn_glass='+getIn_glass+'&getIn_wiper='+getIn_wiper+'&ppe_getIn='+ppe_getIn,{

		type: 'POST',
		timeout: 30000,
		error: function(xhr) {
		 $("#get_in_wimg").hide();
		 $("#error_getin_page").html('Network Timeout. Please check your Internet connection..');
							},
		success:function(data, status,xhr){	
			$("#get_in_wimg").hide();
			if (status!='success'){
				$("#error_getin_page").html('Network Timeout. Please check your Internet connection...');
			}
			else{	
			 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
				
				if (resultArray[0]=='FAILED'){
						$("#error_getin_page").text(resultArray[1]);	
				}
				else if (resultArray[0]=='SUCCESS'){	
					var result_string=resultArray[1];
					
					$("#getIn_drvName").val('');
				    $("#getIn_truckNo").val('');
				    $("#getIn_linc1").val('');
				    $("#getIn_linc2").val('');
				    $("#getIn_linc3").val('');
				    $("#getIn_linc4").val('');

				   	$("#getIn_driv_lic_check").val('');
					$("#getIn_lic_check").val('');
					$("#getIn_safty_brf").val('');
					$("#getIn_tire").val('');
					$("#getIn_ligth").val('');
					
				    $("#getIn_horn").val('');
				   	$("#getIn_windshild").val('');
				    $("#getIn_glass").val('');
				    $("#getIn_wiper").val('');
				    $("#ppe_getIn").val('');

					$("#error_getin_page").html(result_string)
				}else{	
				 $("#get_in_wimg").hide();
				 $("#error_getin_page").html('Network Timeout. Please check your Internet connection..');
				}
			}
		}//success
	});//end ajax
}
	

function get_out_submit() {
	$("#error_getout_page").html('');
	$("#get_out_wimg").show();
	
	var getOut_date=$("#getOut_date").val();
	var getOut_lic_no=$("#getOut_lic_no").val();

	var getOut_drv_name=$("#getOut_drv_name").val();
	var getOut_trc_no=$("#getOut_trc_no").val();
	var ppe_out_yn= ($('#ppe_out_yn').is(':checked') ? 1 : 0);
	
//var test_vaoln=$("#test_on").val(localStorage.base_url+'get_out_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getOut_date='+getOut_date+'&getOut_lic_no='+getOut_lic_no+'&getOut_drv_name='+getOut_drv_name+'&getOut_trc_no='+getOut_trc_no+'&ppe_out_yn='+ppe_out_yn+'&ppe_out_n='+ppe_out_n)
				
	$.ajax(localStorage.base_url+'get_out_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getOut_date='+getOut_date+'&getOut_lic_no='+getOut_lic_no+'&getOut_drv_name='+getOut_drv_name+'&getOut_trc_no='+getOut_trc_no+getOut_trc_no+'&ppe_out_yn='+ppe_out_yn,{

		type: 'POST',
		timeout: 30000,
		error: function(xhr) {
		 	$("#get_out_wimg").hide();
		 	$("#error_getout_page").html('Network Timeout. Please check your Internet connection..');
		},
		success:function(data, status,xhr){	
			$("#get_out_wimg").hide();
			if (status!='success'){
				$("#error_getout_page").html('Network Timeout. Please check your Internet connection...');
			}
			else{	
				var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
					
				if (resultArray[0]=='FAILED'){
					$("#error_getout_page").text(resultArray[1]);	
						
				}
				else if (resultArray[0]=='SUCCESS'){	
					var result_string=resultArray[1];

					$("#getOut_date").val('');
				    $("#getOut_lic_no").val('');
				    $("#getOut_drv_name").val('');
				    $("#getOut_trc_no").val('');
				    $("#ppe_out_yn").val('');

					$("#error_getout_page").html(result_string)
					
				 // $("#get_out_wimg").hide();
				
				}else{	
					 $("#get_out_wimg").hide();
					 $("#error_getout_page").html('Network Timeout. Please check your Internet connection..');
				}
			}
		}
	});//end ajax
}
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	




function get_out() {	

	// $("#get_out_wimg").hide();
	$.afui.loadContent("#get_Page_out",true,true,'right');
}

function get_in_out_list() {	
	$.afui.loadContent("#get_Page_in_outlist",true,true,'right');
}

function back_page_get() {	
	$.afui.loadContent("#pageHome",true,true,'right');
}

// function homePage() {	
// 	$.afui.loadContent("#pageHome",true,true,'right');

// }

function login_page() {	
	$("#loginButton").show();

	$("#wait_image_login").hide();
	
	$.afui.loadContent("#login",true,true,'right');
}	  

	  

// ======================== shima end ================



/*********** jahangirEditedEnd16Feb medClick  *********/
$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});