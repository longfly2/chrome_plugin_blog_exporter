function exportArticle() {
    console.log('csdn exportArticle');
    var title = '# ' +  $('div.article-title-box h1').text();
    var content = $('div#article_content').html();
    var turndownService = new window.TurndownService();
    var markdown = turndownService.turndown(content);
    markdown = title + '\n' + markdown;
    $textarea_content = $('<textarea name="content" id="" cols="30" rows="10" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;">' + markdown + '</textarea>');
    $('body').append($textarea_content);
    $textarea_content.select();
    var isSuccess = document.execCommand('copy');
    if(isSuccess){
        alert('导出文章到粘贴板成功！！！');
    }else {
        alert('导出文章内容失败，请重试！！！');
    }
    console.log(markdown);


}
document.getElementById("importButton").addEventListener("click", exportArticle);






function exportPDF() {
	'use strict';
	var articleBox = $("div.article_content");
	articleBox.removeAttr("style");
	$("#btn-readmore").parent().remove();
	$("#side").remove();
	$("#comment_title, #comment_list, #comment_bar, #comment_form, .announce, #ad_cen, #ad_bot").remove();
	$(".nav_top_2011, #header, #navigator").remove();
	$(".csdn-side-toolbar,.template-box,.reward-user-box").remove();
	$(".p4course_target, .comment-box, .recommend-box, #csdn-toolbar, #tool-box,#dmp_ad_58, .more-toolbox, .article-info-box, .btn-readmore, .pub-footer-new").remove();
	$("aside").remove();
	$(".tool-box").remove();
	$("main").css('display','content'); 
	$("main").css('float','left'); 
	$("#mainBox").css('width','100%');		
	$(".main_father.clearfix.d-flex.justify-content-center").css("width","100%");
	window.print();


}
document.getElementById("btn_csdn_export_pdf").addEventListener("click", exportPDF);