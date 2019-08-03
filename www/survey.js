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
//var  apipath ='http://a007.yeapps.com/acme/medSearch/'



$(document).ready(function(){
    $.afui.launch();
	//Nazma Azam 2019-07-25 start
//	if( $("#ppe_own").val() == 'yes'){
//	$("#div_ppe_note").hide();
//	}
//
//	
//	if( $("#ppe_own").val() == 'no'){
//	$("#div_ppe_note").show();
//	}

		//ppe_show()
//	var ppe_own_val=$("#ppe_own").val()
//	if( ppe_own_val== 'yes'){
//	$("#div_ppe_note").hide();
//	}
//	else{
//	$("#div_ppe_note").show();
//	}
		
		
		
	//Nazma Azam 2019-07-25 end
	
	localStorage.location_error=''
	$("#wait_image_login").hide();
	$('#menu_lv').empty()
	$('#menu_lv').append(localStorage.menu_list);
	
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	
	getLocationInfo_ready();
	

	$("#get_in_wimg_c").hide();
	$("#empty_field_msg_c").hide();

	$("#error_getin_page").html('');
	$("#empty_field_msg").hide();
	$("#get_in_wimg").hide();

	$("#get_out_wimg").hide();

	$('#get_Page_inlist_li').empty();
	$('#get_Page_inlist_li').append(localStorage.get_list_tr);

	// ================ shima20190403 =================
	 $('#getIn_truck1').empty();
      $('#getIn_truck1').append(localStorage.truck_info_combo_tr); 
	 $('#getIn_truck2').empty();
      $('#getIn_truck2').append(localStorage.truck_info_combo_tr1); 

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
		//Nazma Azam 2019-07-25 start
		ppe_show();
		//Nazma Azam 2019-07-25 end
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
	
	$("#wait_image_login").hide();
	$.afui.loadContent("#login",true,true,'right');

	}
function afterSync(){


	
	// $("#getIn_drvName").val('');
 //    $("#getIn_mobileNo").val('');
 //    $("#getIn_truck1").val('');
 //    $("#getIn_truck2").val('');
 //    $("#getIn_truck3").val('');
 //    $("#getIn_truck4").val('');

 //   	$("#getIn_driv_licns_check").val('');
	// $("#getIn_safty_brf").val('');


 //    $("#safety_shoe").val('');
 //    $("#high_visibility").val('');
 //    $("#safety_goggles").val('');
 //    $("#hard_hat").val('');
	
}

function homePage() {

	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;						


	if (localStorage.synced=='YES'){
		
		$.afui.loadContent("#pageHome",true,true,'right');
	}
	

}


function lafarge_app() {	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	
	//Nazma Azam 2019-07-25 start
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/lfg_gatein/syncmobile_lafarge_new/dmpath?CID='+localStorage.cid +'&HTTPPASS=e99business321cba'
	var  apipath_base_photo_dm='http://w02.yeapps.com/lfggatein/syncmobile_lafarge_new/dmpath?CID='+localStorage.cid +'&HTTPPASS=e99business321cba'			 	 
	//Nazma Azam 2019-07-25 end
	//alert(apipath_base_photo_dm)
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		
		// var url = "#login";      
		// $.mobile.navigate(url);
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
					var apiPath=resultArray[0]
					$("#error_login").html('');
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
										localStorage.truckInfoStr=resultArray[2];
										localStorage.truckInfo1Str=resultArray[3];
										
									    var truckInfoList = localStorage.truckInfoStr.split('<rd>');
									    var truckInfoListShowLength=truckInfoList.length                
									    var truckInfoStrComb_tr=''

									    truckInfoStrComb_tr='<option style="font-size:12px; color:#306161; background-color:#eef4f7"></option>'
									   	for (var k=0; k < truckInfoListShowLength; k++){
									        var truckInfoStrValueArray = truckInfoList[k].split('<fd>');
									        truckInfo=truckInfoStrValueArray[0];
									        if(truckInfo!=''){
									            truckInfoStrComb_tr+='<option style="font-size:12px; color:#306161; background-color:#eef4f7" value="'+truckInfo+'"><font style="font-size:12px; color:#306161; background-color:#eef4f7">'+truckInfo+'</font></option>'                                                        
									        }
									    }
									    
									    var truckInfo1List = localStorage.truckInfo1Str.split('<rd>');
								        var truckInfo1ListShowLength=truckInfo1List.length         
								        var truckInfoStrComb_tr1=''

								        truckInfoStrComb_tr1='<option style="font-size:12px; color:#306161; background-color:#eef4f7"></option>'
								        for (var k=0; k < truckInfo1ListShowLength; k++){
								            var truckInfo1StrValueArray = truckInfo1List[k].split('<fd>');
								            truckInfo1=truckInfo1StrValueArray[0];
								            if(truckInfo!=''){
								                truckInfoStrComb_tr1+='<option style="font-size:12px; color:#306161; background-color:#eef4f7" value="'+truckInfo1+'"><font style="font-size:12px; color:#306161; background-color:#eef4f7">'+truckInfo1+'</font></option>'
								            }
								        }  

									    localStorage.truck_info_combo_tr=truckInfoStrComb_tr;
									    localStorage.truck_info_combo_tr1=truckInfoStrComb_tr1;

									    $('#getIn_truck1').empty();
									    $('#getIn_truck1').append(localStorage.truck_info_combo_tr);    

									    $('#getIn_truck2').empty();
  										$('#getIn_truck2').append(localStorage.truck_info_combo_tr1);
										localStorage.synced='YES';
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
	$("#error_getin_page").html('');
	$("#empty_field_msg").hide();
	$("#get_in_wimg").hide();
	$.afui.loadContent("#get_Page_in",true,true,'right');
}


function get_in_submit() {
	$("#error_getin_page").html('');
	$("#empty_field_msg").hide();
	$("#get_in_wimg").show();
	var errorFlag=0;

	
	var getIn_drvName=$("#getIn_drvName").val();
	var getIn_mobileNo=$("#getIn_mobileNo").val();

	var getIn_truck1=$("#getIn_truck1").val();
	var getIn_truck2=$("#getIn_truck2").val();
	var getIn_truck3=$("#getIn_truck3").val();
	var getIn_truck4=$("#getIn_truck4").val();

	var getIn_driv_licns_check=($("#getIn_driv_licns_check").is(':checked') ? 1 : 0);
	var getIn_safty_brf=($("#getIn_safty_brf").is(':checked') ? 1 : 0);
    // var ppe_getIn=($("#ppe_getIn").is(':checked') ? 1 : 0);

    var safety_shoe=($("#safety_shoe").is(':checked') ? 1 : 0);
    var high_visibility=($("#high_visibility").is(':checked') ? 1 : 0);
    var safety_goggles=($("#safety_goggles").is(':checked') ? 1 : 0);
    var hard_hat=($("#hard_hat").is(':checked') ? 1 : 0);
	
	if(getIn_drvName =='' || getIn_mobileNo =='' || getIn_truck1 =='' || getIn_truck2 =='' || getIn_truck3 =='' || getIn_truck4 =='' ){
        errorFlag=1;
    }

	
	
	
	if(errorFlag==0){
	 // var test_valn=$("#test_n").val(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_mobileNo='+getIn_mobileNo+'&getIn_truck1='+getIn_truck1+'&getIn_truck2='+getIn_truck2+'&getIn_truck3='+getIn_truck3+'&getIn_truck4='+getIn_truck4+'&getIn_driv_licns_check='+getIn_driv_licns_check+'&getIn_safty_brf='+getIn_safty_brf+'&safety_shoe='+safety_shoe+'&high_visibility='+high_visibility+'&safety_goggles='+safety_goggles+'&hard_hat='+hard_hat)
		
	  // alert(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_mobileNo='+getIn_mobileNo+'&getIn_truck1='+getIn_truck1+'&getIn_truck2='+getIn_truck2+'&getIn_truck3='+getIn_truck3+'&getIn_truck4='+getIn_truck4+'&getIn_driv_licns_check='+getIn_driv_licns_check+'&getIn_safty_brf='+getIn_safty_brf)
	var truckDes	=getIn_truck1+'-'+getIn_truck2+'-'+getIn_truck3+'-'+getIn_truck4							
	$.ajax(localStorage.base_url+'get_in_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getIn_drvName='+getIn_drvName+'&getIn_mobileNo='+getIn_mobileNo+'&getIn_truck1='+getIn_truck1+'&getIn_truck2='+getIn_truck2+'&getIn_truck3='+getIn_truck3+'&getIn_truck4='+getIn_truck4+'&getIn_driv_licns_check='+getIn_driv_licns_check+'&getIn_safty_brf='+getIn_safty_brf+'&safety_shoe='+safety_shoe+'&high_visibility='+high_visibility+'&safety_goggles='+safety_goggles+'&hard_hat='+hard_hat+'&truckDes='+truckDes,{

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
					 $.afui.loadContent("#success_msg",true,true,'right');	
					reload_function();
					$("#getIn_drvName").val('');
				    $("#getIn_mobileNo").val('');
				    $("#getIn_truck1").val('');
				    $("#getIn_truck2").val('');
				    $("#getIn_truck3").val('');
				    $("#getIn_truck4").val('');

				   	$("#getIn_driv_licns_check").val('');
					$("#getIn_safty_brf").val('');


				    $("#safety_shoe").val('');
				    $("#high_visibility").val('');
				    $("#safety_goggles").val('');
				    $("#hard_hat").val('');
					$("#empty_field_msg").hide();
					// $("#error_getin_page").html(result_string)
				}else{	
				 $("#get_in_wimg").hide();
				 $("#error_getin_page").html('Network Timeout. Please check your Internet connection..');
				}
			}
		}//success
	});//end ajax
	
	}else{
		//alert ('aa')
	$("#empty_field_msg").show();
	$("#get_in_wimg").hide();
	}
}
	



function get_out() {

	$("#get_out_wimg").hide();
	//alert(localStorage.base_url+'get_in_list?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass)

	$.ajax(localStorage.base_url+'get_in_list?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass,{
								// cid:localStorage.cid,user_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
		type: 'POST',
		timeout: 30000,
		error: function(xhr) {

			$("#wait_image_login").hide();
			$("#loginButton").show();
			$("#error_login").html('Network Timeout. Please check your Internet connection..2');
		},
		success:function(data, result,xhr){	
			
			 var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');

			if (resultArray[0]=='SUCCESS'){		
								
				localStorage.getinListstr=resultArray[1];
				getinListstr=localStorage.getinListstr
			    var getinListstr = localStorage.getinListstr.split('<rd>');
			    var getinListstrShowLength=getinListstr.length  
			    
			    
			    var get_list_tr=''
				var get_inlisth=''
				localStorage.get_inlisth=''
			    get_list_tr='<table width="100%" border="0" cellspacing="0"><tr><td style="border:1px solid #a1cad6;height:25px" width="10%">Depot</td><td style="border:1px solid #a1cad6;height:25px" width="10%">Sl</td><td style="border:1px solid #a1cad6;height:25px" width="30%">Mobile No</td><td style="border:1px solid #a1cad6;height:25px" width="30%">Truck No</td><td style="border:1px solid #a1cad6;height:25px" width="40%">In Time</td><td style="border:1px solid #a1cad6;height:25px"></td></tr>'    
			    for (var i=0; i < getinListstrShowLength; i++){
			        var depotValueArray = getinListstr[i].split('<fd>');
			        depotID=depotValueArray[0];

			        sl=depotValueArray[1];
			        getinTime=depotValueArray[2];
			        truck_no=depotValueArray[3];
			        driver_name=depotValueArray[4];
			        getOutmobile_no=depotValueArray[5];

			        var input_id='input_'+i.toString()
			      // ============= CHECK ==============
			        get_list_tr+='<tr><td style="border:1px solid #a1cad6;height:25px" width="10%">'+depotID+'</td><td style="border:1px solid #a1cad6;height:25px" width="10%">'+sl+'</td><td style="border:1px solid #a1cad6;height:25px" width="30%">'+getOutmobile_no+'</td><td style="border:1px solid #a1cad6;height:25px" width="30%">'+truck_no+'</td><td style="border:1px solid #a1cad6;height:25px" width="40%">'+getinTime+'</td><td style="border:1px solid #a1cad6;height:25px" onclick="get_inList_information(\''+i+'\');"><input type="hidden" value="'+depotValueArray+'"  id="'+input_id+'"> >> </td></tr>'                                                        
			            
				get_inlisth=get_inlisth+'<input  name="'+input_id+'" id="'+input_id+'"  value="'+depotValueArray+'" type="hidden">'
									
			    }
				get_list_tr+='</table>'
	    		localStorage.get_list_tr=get_list_tr;

			    
				$('#get_Page_inlist_li').empty();
				$('#get_Page_inlist_li').append(localStorage.get_list_tr);
			}else{
				$.afui.loadContent("#empty_msg",true,true,'right');
								
			}
			
			
		},
		error: function(result) {
									
			$("#error_login").html("Network error has occurred please try again!");
			$("#wait_image_login").hide();
			$("#loginButton").show();
		}
	});	//Second Hit

	$("#get_out_wimg").hide();
	$.afui.loadContent("#get_Page_inlist",true,true,'right');
}

function get_inList_information(i) {
		$("#get_out_wimg").hide();
		var input_id='input_'+i.toString()

		var get_listval=$("#"+input_id).val();
		
		localStorage.get_listval=get_listval
		var get_listvalstr = localStorage.get_listval.split(',');

       var getInsl=get_listvalstr[1];
       var getinTime=get_listvalstr[2];
       var truck_no=get_listvalstr[3];
       var driver_name=get_listvalstr[4];
       var getOutmobile_no=get_listvalstr[5];

		// localStorage.getOutmobile_no=getOutmobile_no


		// $('#truck_info').empty();
		// $('#truck_info').append(localStorage.getOutmobile_no);

		
		$("#getInSl").val(getInsl);
		$("#getOut_date").val(getinTime);
		$("#getOut_truck_no").val(truck_no);
		$("#getOut_drv_name").val(driver_name);
		$("#getOut_mobile_no").val(getOutmobile_no);
	

	$.afui.loadContent("#get_Page_out",true,true,'right');
}


// function search_truck_info() {
// 	alert('ok')
    
//     var filterG  = $("#truck_info").val().toUpperCase();
//     var filter='|'+filterG
    
//      var lis =document.getElementById("get_Page_inlist_li").getElementsByTagName("div");
     

//     for (var i = 0; i < lis.length; i++) {
//         var name = lis[i].getElementsByClassName('name')[0].innerHTML;
        
//         if (name.indexOf(filter) != -1)
//             lis[i].style.display = 'list-item';
            
//         else
//             lis[i].style.display = 'none';
        
//         //$("#get_Page_inlist_li").find(lis[0]).first().focus()
//     }
    
//     //$("#item_codeSearch").val('');
// }



function get_out_submit() {

	$("#error_getout_page").html('');
	$("#get_out_wimg").show();


	var getInSl=$("#getInSl").val();
	var getOut_date=$("#getOut_date").val();

	var getOut_truck_no=$("#getOut_truck_no").val();

	var getOut_drv_name=$("#getOut_drv_name").val();
	var getOut_mobile_no=$("#getOut_mobile_no").val();


	var ppe_out_ss= ($('#ppe_out_ss').is(':checked') ? 1 : 0);
	var ppe_out_hv= ($('#ppe_out_hv').is(':checked') ? 1 : 0);
	var ppe_out_sg= ($('#ppe_out_sg').is(':checked') ? 1 : 0);
	var ppe_out_hh= ($('#ppe_out_hh').is(':checked') ? 1 : 0);
	
	//Nazma Azam 2019-07-25 strat
	
	var ppe_own= ($('#ppe_own').is(':checked') ? 1 : 0);
	
	var ppe_note= $('#ppe_note').val()
	
		

	
	
 // var test_vaoln=$("#test_on").val(localStorage.base_url+'get_out_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getInSl='+getInSl+'&getOut_date='+getOut_date+'&getOut_truck_no='+getOut_truck_no+'&getOut_drv_name='+getOut_drv_name+'&getOut_mobile_no='+getOut_mobile_no+'&ppe_out_n='+ppe_out_n)
 //alert(localStorage.base_url+'get_out_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getInSl='+getInSl+'&getOut_date='+getOut_date+'&getOut_truck_no='+getOut_truck_no+'&getOut_drv_name='+getOut_drv_name+'&getOut_mobile_no='+getOut_mobile_no+'&ppe_out_ss='+ppe_out_ss+'&ppe_out_hv='+ppe_out_hv+'&ppe_out_sg='+ppe_out_sg+'&ppe_out_hh='+ppe_out_hh+'&ppe_own='+ppe_own+'&ppe_note='+ppe_note)
	$.ajax(localStorage.base_url+'get_out_submit?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getInSl='+getInSl+'&getOut_date='+getOut_date+'&getOut_truck_no='+getOut_truck_no+'&getOut_drv_name='+getOut_drv_name+'&getOut_mobile_no='+getOut_mobile_no+'&ppe_out_ss='+ppe_out_ss+'&ppe_out_hv='+ppe_out_hv+'&ppe_out_sg='+ppe_out_sg+'&ppe_out_hh='+ppe_out_hh+'&ppe_own='+ppe_own+'&ppe_note='+ppe_note,{


			//Nazma Azam 2019-07-25 end

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
					// var result_string=resultArray[1];
					 $.afui.loadContent("#success_msg",true,true,'right');			
						reload_function();			
					$("#getOut_date").val('');
				    $("#getOut_truck_no").val('');
				    $("#getOut_drv_name").val('');
				    $("#getOut_mobile_no").val('');
				    $("#ppe_out_yn").val('');
					
					//Nazma Azam 2019-07-25 start
					
					$("#ppe_own").val('');
					$("#ppe_note").html('');

					//Nazma Azam 2019-07-25 end

					$("#error_getout_page").html()
					
				
				}else{	
					 $("#get_out_wimg").hide();
					 $("#error_getout_page").html('Network Timeout. Please check your Internet connection..');
				}
			}
		}
	});//end ajax
}
	
	



function get_in_out_list() {	
	$.afui.loadContent("#get_Page_in_outlist",true,true,'right');
}

function back_getInList_page_get() {	
	$.afui.loadContent("#get_Page_inlist",true,true,'right');
}
function back_page_get() {	
	$.afui.loadContent("#pageHome",true,true,'right');
}



// ===================== 20190410

function gateIn_cancel(){
	$("#get_in_wimg_c").hide();
		$("#empty_field_msg_c").hide();

    //alert(localStorage.base_url+'get_in_list?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass)

    $.ajax(localStorage.base_url+'get_in_list?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass,{
                                // cid:localStorage.cid,user_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
        type: 'POST',
        timeout: 30000,
        error: function(xhr) {

            $("#wait_image_login").hide();
            $("#loginButton").show();
            $("#error_login").html('Network Timeout. Please check your Internet connection..2');
        },
        success:function(data, result,xhr){ 
            
             var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');

            if (resultArray[0]=='SUCCESS'){     
                                
                localStorage.getinListstr=resultArray[1];
                getinListstr=localStorage.getinListstr
                var getinListstr = localStorage.getinListstr.split('<rd>');
                var getinListstrShowLength=getinListstr.length  
                
                
                var get_list_tr=''
                var get_inlisth=''
                localStorage.get_inlisth=''
                get_list_tr='<table width="100%" border="0" cellspacing="0"><tr><td style="border:1px solid #a1cad6;height:25px" width="10%">Depot</td><td style="border:1px solid #a1cad6;height:25px" width="10%">Sl</td><td style="border:1px solid #a1cad6;height:25px" width="30%">Mobile No</td><td style="border:1px solid #a1cad6;height:25px" width="30%">Truck No</td><td style="border:1px solid #a1cad6;height:25px" width="40%">In Time</td><td style="border:1px solid #a1cad6;height:25px"></td></tr>'    
                for (var i=0; i < getinListstrShowLength; i++){
                    var depotValueArray = getinListstr[i].split('<fd>');
                    depotID=depotValueArray[0];

                    sl=depotValueArray[1];
                    getinTime=depotValueArray[2];
                    truck_no=depotValueArray[3];
                    driver_name=depotValueArray[4];
                    getOutmobile_no=depotValueArray[5];

                    var input_id='input_'+i.toString()
                  // ============= CHECK ==============
                    get_list_tr+='<tr><td style="border:1px solid #a1cad6;height:25px" width="10%">'+depotID+'</td><td style="border:1px solid #a1cad6;height:25px" width="10%">'+sl+'</td><td style="border:1px solid #a1cad6;height:25px" width="30%">'+getOutmobile_no+'</td><td style="border:1px solid #a1cad6;height:25px" width="30%">'+truck_no+'</td><td style="border:1px solid #a1cad6;height:25px" width="40%">'+getinTime+'</td><td style="border:1px solid #a1cad6;height:25px" onclick="gateIn_cancel_list(\''+i+'\');"><input type="hidden" value="'+depotValueArray+'"  id="'+input_id+'"> >> </td></tr>'                                                        
                        
                get_inlisth=get_inlisth+'<input  name="'+input_id+'" id="'+input_id+'"  value="'+depotValueArray+'" type="hidden">'
                                    
                }
                get_list_tr+='</table>'
                localStorage.get_list_tr=get_list_tr;

                
                $('#get_Page_inlist_li').empty();
                $('#get_Page_inlist_li').append(localStorage.get_list_tr);
            }else{
                $.afui.loadContent("#empty_msg",true,true,'right');
                                
            }
            
            
        },
        error: function(result) {
                                    
            $("#error_login").html("Network error has occurred please try again!");
            $("#wait_image_login").hide();
            $("#loginButton").show();
        }
    }); //Second Hit

		

    $.afui.loadContent("#get_Page_inlist",true,true,'right');
}




function gateIn_cancel_list(i) {
	$("#get_in_wimg_c").hide();
		$("#empty_field_msg").hide();


		var input_id='input_'+i.toString()

		var get_listval=$("#"+input_id).val();
		
		localStorage.get_listval=get_listval
		var get_listvalstr = localStorage.get_listval.split(',');

       var getInSl_cancel=get_listvalstr[1];
       var getinTime=get_listvalstr[2];
       var truck_info_c=get_listvalstr[3];

       var getIn_drvName_c=get_listvalstr[4];
       
      
       var getIn_mobileNo_c=get_listvalstr[5];
		
		localStorage.truck_info_c=truck_info_c
		var truckInfo_c = localStorage.truck_info_c.split('-');
       var getIn_truck1_c=truckInfo_c[0];

		var getIn_truck2_c=truckInfo_c[1];
		var getIn_truck3_c=truckInfo_c[2];
		var getIn_truck4_c=truckInfo_c[3];
      

       	$("#getIn_drvName_c").val(getIn_drvName_c);

	    $("#getIn_mobileNo_c").val(getIn_mobileNo_c);
	    $("#getIn_truck1_c").val(getIn_truck1_c);
	    $("#getIn_truck2_c").val(getIn_truck2_c);
	    $("#getIn_truck3_c").val(getIn_truck3_c);
	    $("#getIn_truck4_c").val(getIn_truck4_c);
	    $("#getInSl_cancel").val(getInSl_cancel);


	 //   	$("#getIn_driv_licns_check").val('');
		// $("#getIn_safty_brf").val('');


	 //    $("#safety_shoe").val('');
	 //    $("#high_visibility").val('');
	 //    $("#safety_goggles").val('');
	 //    $("#hard_hat").val('');
		// $("#empty_field_msg").hide();
		
		$("#get_in_wimg_c").hide();
		$("#empty_field_msg_c").hide();

	$.afui.loadContent("#get_Page_in_cancel",true,true,'right');	
}



function getIn_cancel() {

    $("#error_getin_page_c").html('');
    $("#get_in_wimg_c").show();
   
    var getInSl_cancel=$("#getInSl_cancel").val();
   
    $.ajax(localStorage.base_url+'get_in_cancel?cid='+localStorage.cid+'&user_id='+localStorage.user_id+'&user_pass='+localStorage.user_pass+'&getInSl_cancel='+getInSl_cancel,{

        type: 'POST',
        timeout: 30000,
        error: function(xhr) {
            $("#get_in_wimg_c").hide();
            $("#error_getin_page_c").html('Network Timeout. Please check your Internet connection..');
        },
        success:function(data, status,xhr){ 
          
            if (status!='success'){
                $("#error_getin_page_c").html('Network Timeout. Please check your Internet connection...');
            }
            else{   
                var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>'); 
                
                if (resultArray[0]=='FAILED'){
                    $("#error_getin_page_c").text(resultArray[1]);   
                        
                }
                else if (resultArray[0]=='SUCCESS'){    
                    // var result_string=resultArray[1];
                    // alert ('cancel')
                     $.afui.loadContent("#cancel_msg",true,true,'right');          
                        reload_function();          
                   

                    $("#error_getin_page_c").html('')
                    
                
                }else{  
                     $("#get_in_wimg_c").hide();
                     $("#error_getin_page_c").html('Network Timeout. Please check your Internet connection..');
                }
            }
        }
    });//end ajax
}
    








// function homePage() {	
// 	$.afui.loadContent("#pageHome",true,true,'right');

// }

function login_page() {	
	// ("#error_login").html('');
	$("#loginButton").show();

	$("#wait_image_login").hide();
	
	$.afui.loadContent("#login",true,true,'right');
}	  

	  

function exit_page() {

	localStorage.cid='';
	localStorage.user_id='';
	localStorage.user_pass='';
	localStorage.synced=='NO'
	
	 
	$("#loginButton").show();

	$("#wait_image_login").hide();
	
	$("#user_id").val('');
	$("#user_pass").val('');
	
	
	
	$.afui.loadContent("#login",true,true,'right');
	//location.reload();

}


// ======================== shima end ================

//Nazma Azam 2019-07-25 start

function ppe_hide() {
	
	//alert($("#ppe_own").val())
	
	if( $("#ppe_own").val() == 'yes'){
	//alert('1')
	$("#div_ppe_note").hide();
	}


	
	}



function ppe_show() {
	
	var ppe_own_val= ($('#ppe_own').is(':checked') ? 1 : 0);
	//var ppe_own_val=$("#ppe_own").val()
	//alert( ppe_own_val)
	if( ppe_own_val== '1'){
	//alert('1')
	$("#div_ppe_note").hide();
	}

	
	
	if( ppe_own_val== '0'){
	//alert('2')	
	$("#div_ppe_note").show();
	}
}

//Nazma Azam 2019-07-25 end



/*********** jahangirEditedEnd16Feb medClick  *********/
$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});