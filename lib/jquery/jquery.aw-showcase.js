(function(b){b.fn.awShowcase=function(a){function I(g){g=b(document.createElement("div")).attr("id","showcase-content-"+g).css("overflow","hidden").css("position","absolute").addClass("showcase-content").html(N[g]);a.viewline||g.css("width",a.content_width);a.fit_to_parent&&!a.viewline&&g.css("left",t/2-a.content_width/2);return g}function P(){var b=parseInt(e)+1;b===m&&a.continuous?b=0:b===m&&!a.continuous&&(J=!0,clearInterval(k));J||x(b,"next")}function x(g,f){if(e!==g&&!z){var d,c,p=0,h,l=a.fit_to_parent?
t/2-a.content_width/2:0;if(g>e&&f!=="previous"||f==="next")if(a.viewline){if(e<m-1){a.speed_change||(z=!0);Q();a.pauseonover&&window.clearInterval(k);E=0;h=e+1;for(len=m;h<len;++h)d=K[h],E+=d.find(".showcase-content").children().width();E>t?(F=C,C-=K[e].find(".showcase-content").children().width()):$(".showcase-arrow-next").is(":visible")&&(F=C,C=-(L-(E+(t-E))),$(".showcase-arrow-next").fadeOut(300));o.animate({left:C+"px"},a.transition_speed,function(){z=!1});$(".showcase-arrow-next").is(":visible")&&
e++;$(".showcase-arrow-previous").fadeIn(300)}}else a.speed_change||(z=!0),d=b(j).find("#showcase-content-"+parseInt(e)),c=I(g),o.append(c),a.dynamic_height?c.css("height",c.find(".showcase-content").children().height()):c.css("height",a.content_height),d.find(".showcase-content").children().height()>c.find(".showcase-content").children().height()&&a.dynamic_height&&(o.stop(!0,!0).animate({height:c.find(".showcase-content").children().height()},200),p=100),a.transition==="hslide"?b(d).delay(p).animate({left:-a.content_width},
a.transition_speed+a.transition_delay,function(){d.remove()}):a.transition==="vslide"?b(d).delay(p).animate({top:-a.content_height},a.transition_speed+a.transition_delay,function(){d.remove()}):b(d).delay(p).fadeOut(a.transition_speed,function(){d.remove()}),r(d,!0),s(d,!0),a.transition==="hslide"?(c.css("left",t),b(c).delay(p).animate({left:l},a.transition_speed,function(){r(c);s(c);D(c)})):a.transition==="vslide"?(c.css("top",j.height()),b(c).delay(p).animate({top:"0px"},a.transition_speed,function(){r(c);
s(c);D(c)})):(c.css("left",l),c.css("display","none"),b(c).delay(p).fadeIn(a.transition_speed,function(){r(c);s(c);D(c)}));else if(g<e||f==="previous")a.viewline?(e!==0&&(a.speed_change||(z=!0),Q(),a.pauseonover&&window.clearInterval(k),o.animate({left:F+"px"},a.transition_speed,function(){z=!1}),C=F,e--,e===0&&$(".showcase-arrow-previous").fadeOut(300),old_id=e-1,sub_width=b(K[old_id]).width(),F+=sub_width),$(".showcase-arrow-next").fadeIn(300)):(a.speed_change||(z=!0),d=b(j).find("#showcase-content-"+
parseInt(e)),c=I(g),o.append(c),a.dynamic_height?c.css("height",c.find(".showcase-content").children().height()):c.css("height",a.content_height),d.find(".showcase-content").children().height()>c.find(".showcase-content").children().height()&&a.dynamic_height&&(o.stop(!0,!0).animate({height:c.find(".showcase-content").children().height()},200),p=100),a.transition==="hslide"?b(d).delay(p).animate({left:t+"px"},a.transition_speed+a.transition_delay,function(){r(d,!0);s(d,!0);d.remove()}):a.transition===
"vslide"?b(d).delay(p).animate({top:a.content_height+"px"},a.transition_speed+a.transition_delay,function(){r(d,!0);s(d,!0);d.remove()}):b(d).delay(p).fadeOut(a.transition_speed,function(){r(d,!0);s(d,!0);d.remove()}),a.transition==="hslide"?(c.css("left","-"+a.content_width+"px"),b(c).delay(p).animate({left:l},a.transition_speed,function(){r(c);s(c);D(c)})):a.transition==="vslide"?(c.css("top","-"+j.height()+"px"),b(c).delay(p).animate({top:"0px"},a.transition_speed,function(){r(c);s(c);D(c)})):
(c.css("left",l),c.css("display","none"),b(c).delay(p).fadeIn(a.transition_speed,function(){r(c);s(c);D(c)})),o.append(c));a.viewline||(O=e,e=g,a.thumbnails&&(e>O&&f!=="previous"||f==="next"?M("forward",!0):(e<O||f==="previous")&&M("backward",!0)),a.arrows&&(b(j).find(".showcase-arrow-previous").unbind("click").click(function(){k&&(a.stoponclick&&(y=!0),clearInterval(k));x(e===0?m-1:parseInt(e)-1,"previous")}),b(j).find(".showcase-arrow-next").unbind("click").click(function(){k&&(a.stoponclick&&(y=
!0),clearInterval(k));x(e===m-1?0:parseInt(e)+1,"next")})),a.thumbnails&&(h=0,j.find(".showcase-thumbnail").each(function(){var a=b(this);a.removeClass("active");h===e&&a.addClass("active");h++})),a.show_caption==="show"&&b(c).find(".showcase-caption").show());a.buttons&&(h=0,j.find(".showcase-button-wrapper span").each(function(){var a=b(this);a.removeClass("active");h===e&&a.addClass("active");h++}));typeof a.custom_function=="function"&&a.custom_function()}}function D(b){a.dynamic_height&&o.stop(!0,
!0).animate({height:b.find(".showcase-content").children().height()},200);z=!1}function M(g,f,d){var c=!0,h=v(b(l).find(".showcase-thumbnail"));a.thumbnails_direction==="horizontal"&&(h=u(b(l).find(".showcase-thumbnail")));var j=1;if(a.thumbnails_slidex===0)a.thumbnails_slidex=G;if(f){for(var k=q,f=0;k<0;)k+=a.thumbnails_direction==="horizontal"?u(b(A[0])):v(b(A[0])),f++;k=f;f=G+f-1;e>=k&&e<=f&&(c=!1);if(e-f>a.thumbnails_slidex)for(f=e-f;f>a.thumbnails_slidex;)f-=a.thumbnails_slidex,j++;else if(k-
e>a.thumbnails_slidex)for(f=k-e;f>a.thumbnails_slidex;)f-=a.thumbnails_slidex,j++;else j=1}g==="forward"&&c?(a.thumbnails_direction==="vertical"&&a.content_height<H+q?q-=h*a.thumbnails_slidex*j:a.thumbnails_direction==="horizontal"&&a.content_width<H+q?q-=h*a.thumbnails_slidex*j:e===0&&(d||(q=0)),a.thumbnails_direction==="horizontal"?l.animate({left:q},300):l.animate({top:q},300)):c&&(q<0?q+=h*a.thumbnails_slidex*j:e===m-1?d||(q-=h*a.thumbnails_slidex*j):q=0,a.thumbnails_direction==="horizontal"?
l.animate({left:q},300):l.animate({top:q},300))}function s(g,f){var d=g.find(".showcase-caption");f?d.stop(!0,!0).fadeOut(300):a.show_caption==="onload"?d.fadeIn(300):a.show_caption==="onhover"&&(b(g).mouseenter(function(){d.fadeIn(300)}),b(g).mouseleave(function(){d.stop(!0,!0).fadeOut(100)}))}function r(g,f){g.find(".showcase-tooltips a").each(function(){if(f)b(this).stop(!0,!0).fadeOut(300);else{var d=b(this).attr("coords"),d=d.split(",");b(this).addClass("showcase-plus-anchor");b(this).css("position",
"absolute");b(this).css("display","none");b(this).css("width",a.tooltip_icon_width);b(this).css("height",a.tooltip_icon_height);b(this).css("left",parseInt(d[0])-parseInt(a.tooltip_icon_width)/2);b(this).css("top",parseInt(d[1])-parseInt(a.tooltip_icon_height)/2);var c=b(this).html();b(this).mouseenter(function(){R(g,d[0],d[1],c)});b(this).mouseleave(function(){R(g,d[0],d[1],c)});b(this).html("");b(this).fadeIn(300)}})}function R(g,f,d,c){n===null?(n=b(document.createElement("div")).addClass("showcase-tooltip").css("display",
"none").css("position","absolute").css("max-width",a.tooltip_width).html(c),g.append(n),g=parseInt(n.css("padding-right"))*2+parseInt(n.css("border-right-width"))*2,c=parseInt(n.css("padding-bottom"))*2+parseInt(n.css("border-bottom-width"))*2,lastx=parseInt(f)+n.width()+g,lasty=parseInt(d)+n.height()+c,lastx<a.content_width?n.css("left",parseInt(f)+parseInt(a.tooltip_offsetx)):n.css("left",parseInt(f)-parseInt(a.tooltip_offsetx)-(parseInt(n.width())+parseInt(a.tooltip_offsetx))),lasty<a.content_height?
n.css("top",parseInt(d)+parseInt(a.tooltip_offsety)):n.css("top",parseInt(d)-parseInt(a.tooltip_offsety)-(parseInt(n.height())+parseInt(c))),n.fadeIn(400)):(n.fadeOut(400),n.remove(),n=null)}function v(a,f,d,c,e){d=typeof d!=="undefined"?d:!0;c=typeof c!=="undefined"?c:!0;e=typeof e!=="undefined"?e:!0;f=(typeof f!=="undefined"?f:1)?b(a).height():0;d=d?parseFloat(b(a).css("margin-top"))+parseFloat(b(a).css("margin-bottom")):0;c=c?parseFloat(b(a).css("padding-top"))+parseFloat(b(a).css("padding-bottom")):
0;a=e?parseFloat(b(a).css("border-top-width"))+parseFloat(b(a).css("border-bottom-width")):0;f+=d+c+a;return f}function u(a,f,d,c,e){d=typeof d!=="undefined"?d:!0;c=typeof c!=="undefined"?c:!0;e=typeof e!=="undefined"?e:!0;f=(typeof f!=="undefined"?f:1)?b(a).width():0;d=d?parseFloat(b(a).css("margin-left"))+parseFloat(b(a).css("margin-right")):0;c=c?parseFloat(b(a).css("padding-left"))+parseFloat(b(a).css("padding-right")):0;a=e?parseFloat(b(a).css("border-left-width"))+parseFloat(b(a).css("border-right-width")):
0;f+=d+c+a;return f}function Q(){L=0;o.children("div").each(function(){L+=$(this).find(".showcase-content").children().width();K.push($(this))})}var a=b.extend({content_width:700,content_height:470,fit_to_parent:!1,auto:!1,interval:3E3,continuous:!1,loading:!0,tooltip_width:200,tooltip_icon_width:32,tooltip_icon_height:32,tooltip_offsetx:18,tooltip_offsety:0,arrows:!0,buttons:!0,btn_numbers:!1,keybord_keys:!1,mousetrace:!1,pauseonover:!0,stoponclick:!0,transition:"hslide",transition_delay:300,transition_speed:500,
show_caption:"onload",thumbnails:!1,thumbnails_position:"outside-last",thumbnails_direction:"vertical",thumbnails_slidex:0,dynamic_height:!1,speed_change:!1,viewline:!1,fullscreen_width_x:15,custom_function:null},a),e=0,O=0,J=!1,y=!1,k=null,j=b(this),t=a.content_width,z=!1,L=1E4,C=0,F=0,E=0,o=b(document.createElement("div")).css("overflow","hidden").css("position","relative").addClass("showcase-content-container").prependTo(j);a.fit_to_parent&&(t=b(j).width()+a.fullscreen_width_x);if(a.viewline)a.thumbnails=
!1,a.dynamic_height=!1,o.css("width",L),j.css("overflow","hidden"),$(".showcase-arrow-previous").hide();var N=[],A=[],m=0;j.children(".showcase-slide").each(function(){var g=b(this);m++;if(a.thumbnails){var f=g.find(".showcase-thumbnail");A.push(f);f.remove()}var f=g.find(".showcase-content").children().width(),d=g.find(".showcase-content").children().height();N.push(g.html());g.remove();g=I(m-1);(a.viewline||m===1)&&o.append(g);a.viewline&&(g.css("position","relative"),g.css("float","left"),g.css("width",
f));a.dynamic_height?(g.css("height",d),m===1&&o.css("height",d)):(g.css("height",a.content_height),m===1&&o.css("height",a.content_height));if(a.viewline||m===1)r(g),s(g),a.show_caption==="show"&&b(g).find(".showcase-caption").show()});var l,H=0,G=0;if(a.thumbnails){thumb_container=b("<div />");thumb_restriction=b("<div />");l=b("<div />");for(i=A.length-1;i>=0;--i){var h=b(A[i]).css({overflow:"hidden"});h.attr("id","showcase-thumbnail-"+i);h.addClass(i===0?"active":"");h.click(function(a,b){return function(){k&&
(y=!0,clearInterval(k));x(a,b)}}(i,""));l.prepend(h)}a.thumbnails_position==="outside-first"||a.thumbnails_position==="outside-last"?(a.thumbnails_direction!=="horizontal"?(o.css("float","left"),o.css("width",a.content_width),thumb_container.css("float","left"),thumb_container.css("height",a.content_height)):b(l).find(".showcase-thumbnail").css("float","left"),a.thumbnails_position==="outside-last"?j.append(thumb_container):j.prepend(thumb_container),a.thumbnails_direction!=="horizontal"&&j.append(b("<div />").addClass("clear"))):
(thumb_container.css({position:"absolute","z-index":20}),a.thumbnails_direction==="horizontal"?(thumb_container.css({left:0,right:0}),b(l).find(".showcase-thumbnail").css("float","left"),b(l).append(b("<div />").addClass("clear")),a.thumbnails_position==="inside-first"?thumb_container.css("top",0):thumb_container.css("bottom",0)):(thumb_container.css({top:0,bottom:0}),a.thumbnails_position==="inside-first"?thumb_container.css("left",0):thumb_container.css("right",0)),o.prepend(thumb_container));thumb_container.addClass("showcase-thumbnail-container");
thumb_container.css("overflow","hidden");thumb_restriction.addClass("showcase-thumbnail-restriction");thumb_restriction.css({overflow:"hidden",position:"relative"});a.thumbnails_direction==="horizontal"&&thumb_restriction.css({"float":"left"});l.addClass("showcase-thumbnail-wrapper");a.thumbnails_direction==="horizontal"?l.addClass("showcase-thumbnail-wrapper-horizontal"):l.addClass("showcase-thumbnail-wrapper-vertical");l.css("position","relative");thumb_restriction.append(l);thumb_container.append(thumb_restriction);
h=b('<div class="showcase-thumbnail-button-backward" />');a.thumbnails_direction!=="horizontal"?h.html('<span class="showcase-thumbnail-vertical"><span>Up</span></span>'):(h.css({"float":"left"}),h.html('<span class="showcase-thumbnail-horizontal"><span>Left</span></span>'));h.click(function(){M("backward",!1,!0)});thumb_container.prepend(h);var w=b('<div class="showcase-thumbnail-button-forward" />');a.thumbnails_direction!=="horizontal"?w.html('<span class="showcase-thumbnail-vertical"><span>Down</span></span>'):
(w.css({"float":"left"}),w.html('<span class="showcase-thumbnail-horizontal"><span>Right</span></span>'));w.click(function(){M("forward",!1,!0)});thumb_container.append(w);var B=0;if(a.thumbnails_direction!=="horizontal"){B=v(l,!1);for(B+=v(h)+v(w);B<a.content_height;)B+=v(b(A[0])),G++}else{B=u(l,!1);for(B+=u(h)+u(w);B<t;)B+=u(b(A[0])),G++}G+1>A.length&&(a.thumbnails_direction!=="horizontal"?thumb_restriction.css("margin-top",v(h)):thumb_restriction.css("margin-left",u(h)),h.hide(),w.hide());a.thumbnails_direction!==
"horizontal"?(h=v(h)+v(w),thumb_restriction.css("height",a.content_height-h)):(h=u(h)+u(w),thumb_restriction.css("width",t-h));a.thumbnails_direction==="horizontal"?(b(".showcase-thumbnail").each(function(){H+=u(b(this))}),l.css("width",H)):b(".showcase-thumbnail").each(function(){H+=v(b(this))})}a.thumbnails&&a.thumbnails_position.indexOf("outside")!==-1&&a.thumbnails_direction!=="horizontal"&&!a.viewline?j.css("width",t+u(l,!0,!1)):a.fit_to_parent||j.css("width",t);m>1&&a.auto&&(k=window.setInterval(P,
a.interval));a.auto&&a.pauseonover&&(j.mouseenter(function(){J=!0;clearInterval(k)}),j.mouseleave(function(){y||(J=!1,k=window.setInterval(P,a.interval))}));a.arrows&&m>1&&(b(document.createElement("div")).addClass("showcase-arrow-previous").prependTo(j).click(function(){k&&(a.stoponclick&&(y=!0),clearInterval(k));x(e===0?m-1:parseInt(e)-1,"previous")}),b(document.createElement("div")).addClass("showcase-arrow-next").prependTo(j).click(function(){k&&(a.stoponclick&&(y=!0),clearInterval(k));x(e+1,
"next")}),a.viewline&&$(".showcase-arrow-previous").hide());if(a.buttons&&m>1){b(document.createElement("div")).css("clear","both").addClass("showcase-button-wrapper").appendTo(j);for(i=0;i<m;)b(document.createElement("span")).attr("id","showcase-navigation-button-"+i).addClass(i===0?"active":"").html(a.btn_numbers?parseInt(i)+1:"&#9679;").click(function(b,f){return function(){k&&(a.stoponclick&&(y=!0),clearInterval(k));x(b,f)}}(i,"")).appendTo(b(j).find(".showcase-button-wrapper")),i++}a.keybord_keys&&
b(document).keydown(function(b){a.stoponclick&&(y=!0);k&&clearInterval(k);b.keyCode===37&&x(e===0?m-1:parseInt(e)-1,"previous");b.keyCode===39&&x(e===m-1?0:parseInt(e)+1,"next")});var q=0,n=null;if(a.mousetrace){var S=b(document.createElement("div")).css("position","absolute").css("top","0").css("background-color","#fff").css("color","#000").css("padding","3px 5px").css("x-index","30").html("X: 0 Y: 0");j.append(S);var T=j.offset();o.mousemove(function(a){S.html("X: "+(a.pageX-T.left)+" Y: "+(a.pageY-
T.top))})}$("#awOnePageButton").click(function(){if($(".view-page").is(":visible")){var e=b(document.createElement("div"));e.addClass("showcase-onepage");j.before(e);k&&(y=!0,clearInterval(k));$(this).find(".view-page").hide();$(this).find(".view-slide").show();j.hide();$.each(N,function(b){obj=I(b);obj.css("position","relative");e.append(obj);r(obj);s(obj);a.dynamic_height?obj.css("height",obj.find(".showcase-content").children().height()):obj.css("height",a.content_height)});var f=b(document.createElement("div"));
f.addClass("clear");e.append(f)}else $(".showcase-onepage").remove(),$(this).find(".view-page").show(),$(this).find(".view-slide").hide(),j.show();return!1});var K=[];j.removeClass("showcase-load")}})(jQuery);