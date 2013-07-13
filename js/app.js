var DescriptionVoice,EmailVoice,subjectVoice,mobileBackgroundVoice; // variables for voice recording
var DescriptionPhoto,EmailPhoto,subjectPhoto,mobileBackgroundPhoto; //variable for Email Photo

	function voiceRecording() {
		var featureRelId = getUrlVars()['transferId'];
		var userSiteId = getUrlVars()['touchId'];
		var featureId = getUrlVars()['mId'];
		var url = baseUrl + 'web/web/getMenuHtml/' + featureId + '/' + featureRelId + '/' + userSiteId;

		var data = '';
		//alert(url);
		doAjaxCall(url, data, false, function (html) {
			if ($.isEmptyObject(html)) {
				$('#main-content').html('Sorry we have an Empty data');
			} else {
				console.log(html);
				alert(html);
				$.each(html, function (i,item){
					DescriptionVoice = item.Description;
					EmailVoice = item.Email;
					subjectVoice = item.subject;
					mobileBackgroundVoice = item.mobileBackground;
					alert('url:'+baseUrl+mobileBackgroundVoice);
					$('body').css('background-image', 'url(' + baseUrl+mobileBackgroundVoice + ')');
					
				})
			}
		});
	}

	function wufoohtml() {
			var featureRelId = getUrlVars()['transferId'];
			var userSiteId = getUrlVars()['touchId'];
			var featureId = getUrlVars()['mId'];
			var url = baseUrl + 'web/web/getMenuHtml/' + featureId + '/' + featureRelId + '/' + userSiteId;
			var data ='';	
			alert(url);
				doAjaxCall(url, data, false, function (html) {
			if ($.isEmptyObject(html)) {
				$('#main-content').html('Sorry we have an Empty data');
			} else {
				if(html.length==1){
				$.each(html, function (i,item){  
				
				})
				}else{
				var htmlData = '<ul data-role="listview" data-inset="false" data-divider-theme="d" id="aboutclass">'
					$.each(html,function(i,item){
					htmlData += '<li><a href="app_wufoo_d.html?itemId='+ item.wuFooId + '&transferId ='+ featureRelId + 'mId='+ featureId +'&touchId=' + userSiteId + '" rel="external" >' + item.name + '</a></li>';
					});
					htmlData +='</ul>';	
				}
				
				$('#main-content').html(htmlData);	
				 try {
                $("#aboutclass").listview('refresh');
				} catch (e) {
					$("#aboutclass").listview();
				}
			}
		}); 
	}
	
	function wufoohtmlbyId() {
			
			var featureRelId = getUrlVars()['transferId'];
			var userSiteId = getUrlVars()['touchId'];
			var featureId = getUrlVars()['mId'];
			var wufooId = getUrlVars()['itemId'];
			var url = baseUrl + 'web/web/getwufooById/' + wufooId + '/' + userSiteId;
			var data ='';	
			alert(url);
				doAjaxCall(url, data, false, function (html) {
			if ($.isEmptyObject(html)) {
				$('#main-content').html('Sorry we have an Empty data');
			} else {
				console.log(html);
				$.each(html, function (i,item){ 
				returnUrl = "app_wufoo.html?mId=" + featureId + "&transferId=" + featureRelId + "&touchId=" + userSiteId;
				 wufooActive(item.src,returnUrl);
				})
				
				//$('#main-content').html(htmlData);	
			}
		}); 
	}
	function wufooActive(src,exitDone) {
         var ref = window.open(src, '_blank', 'location=yes');
         
         ref.addEventListener('exit', function() {
		 window.location.href = exitDone;
		 });
    }
    //Email Photo Tab
    function emailPhoto()
    {
	    
	var featureRelId = getUrlVars()['transferId'];
	var userSiteId = getUrlVars()['touchId'];
	var featureId = getUrlVars()['mId'];
	var url = baseUrl +'web/web/getMenuHtml/'+ featureId + '/' + featureRelId + '/' + userSiteId;
	
	var data = '';
	doAjaxCall(url, data, false, function (html) {
		if ($.isEmptyObject(html)) {
			
			$('#main-content').html('Sorry we have an Empty data');
		} else {
			//console.log(html);
			
			$.each(html, function (i,item){
				DescriptionPhoto = item.Description;
				EmailPhoto = item.Email;
				subjectPhoto = item.subject;
				mobileBackgroundPhoto = item.iphone5Background;
				//alert('url:'+baseUrl+mobileBackgroundPhoto);
				$('body').css('background-image', 'url(' + baseUrl+mobileBackgroundPhoto + ')');
				
			})
		}
	});
	  
    	
    }
    //Pdf Tab
    function pdfTab()
    {
	alert("coming");    
	var featureRelId = getUrlVars()['transferId'];
	var userSiteId = getUrlVars()['touchId'];
	var featureId = getUrlVars()['mId'];
	var url = baseUrl + 'web/web/getMenuHtml/' + featureId + '/' + featureRelId + '/' + userSiteId;
	var data ='';	
	alert(url);
		doAjaxCall(url, data, false, function (html) {
	if ($.isEmptyObject(html)) {
		$('#main-content').html('Sorry we have an Empty data');
	} else {
		if(html.length==1){
		$.each(html, function (i,item){  
		
		})
		}else{
			//pdf_d.html?itemId='+ item.wuFooId + '&transferId ='+ featureRelId + 'mId='+ featureId +'&touchId=' + userSiteId + '
			// onclick="window.open('+item.urlofFile+', '_blank', 'location=yes');"
		var htmlData = '<ul data-role="listview" data-inset="false" data-divider-theme="d" id="aboutclass">'
			$.each(html,function(i,item){
				//var pdf_url=;
			htmlData += '<li><a href="pdf_d.html?itemUrl='+ item.urlOfFile +'&itemName=' + item.name + '" rel="external" >' + item.name + '</a></li>';
			});
			htmlData +='</ul>';	
		}
		
		$('#main-content').html(htmlData);	
		 try {
      $("#aboutclass").listview('refresh');
		} catch (e) {
			$("#aboutclass").listview();
		}
	}
	}); 
    }
    function pdfById()
    {
	  
	var pdfUrl = getUrlVars()['itemUrl'];
	var pdfTitle= getUrlVars()['itemName'];
	alert(pdfUrl);
	//var url = baseUrl + 'web/web/getwufooById/' + wufooId + '/' + userSiteId;
	//var data ='';	
	var nav_url="http://docs.google.com/viewer?url="+ pdfUrl ;
	alert(nav_url);
	$("#header_title").html(pdfTitle);
	window.open(nav_url, '_self','location=yes');
	//window.location.href=nav_url;
	//navigator.load.url(pdfUrl);
	//var ref = window.open(pdfUrl, '_blank');
	//alert(ref);
	//pdfActive(pdfUrl,returnUrl);
	//alert(url);
		/*doAjaxCall(url, data, false, function (html) {
	if ($.isEmptyObject(html)) {
		$('#main-content').html('Sorry we have an Empty data');
	} else {
		console.log(html);
		$.each(html, function (i,item){ 
		returnUrl = "pdf.html?mId=" + featureId + "&transferId=" + featureRelId + "&touchId=" + userSiteId;
		 pdfActive(item.src,returnUrl);
		})
		
		//$('#main-content').html(htmlData);	
		}
	}); */
	
    }
	function pdfActive(src,exitDone) {
        var ref = window.open(src, '_blank', 'location=yes');
        
        ref.addEventListener('exit', function() {
	 window.location.href = exitDone;
	 });
   }
    