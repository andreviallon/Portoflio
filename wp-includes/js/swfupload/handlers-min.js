function fileDialogStart(){}function fileQueued(){}function uploadStart(){}function uploadProgress(){}function prepareMediaItem(){}function prepareMediaItemInit(){}function itemAjaxError(){}function deleteSuccess(){}function deleteError(){}function updateMediaForm(){}function uploadSuccess(){}function uploadComplete(){}function wpQueueError(){}function wpFileError(){}function fileQueueError(){}function fileDialogComplete(){}function uploadError(){}function cancelUpload(){}function switchUploader(){jQuery("#"+swfu.customSettings.swfupload_element_id).hide(),jQuery("#"+swfu.customSettings.degraded_element_id).show(),jQuery(".upload-html-bypass").hide()}function swfuploadPreLoad(){switchUploader()}function swfuploadLoadFailed(){switchUploader()}var topWin=window.dialogArguments||opener||parent||top;jQuery(document).ready(function($){$('input[type="radio"]',"#media-items").on("click",function(){var t=$(this).closest("tr");$(t).hasClass("align")?setUserSetting("align",$(this).val()):$(t).hasClass("image-size")&&setUserSetting("imgsize",$(this).val())}),$("button.button","#media-items").on("click",function(){var t=this.className||"";(t=t.match(/url([^ '"]+)/))&&t[1]&&(setUserSetting("urlbutton",t[1]),$(this).siblings(".urlfield").val($(this).attr("title")))})});