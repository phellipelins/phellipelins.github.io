"use strict";gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(ScrollToPlugin);var timeline=gsap.timeline();timeline.to(".presentation__text__line > span",{y:"0%",duration:1.5,delay:0,ease:"expo.out",stagger:.5}).to("#brand-link",{opacity:1,duration:1,delay:0,ease:"power1.in"},"-=1"),1080<=$(window).width()&&timeline.to(".menu",{opacity:1,duration:1,delay:0,ease:"power1.in"},"-=1");var brandBall=$(".ball");if(gsap.to(brandBall,{rotate:360,duration:3,delay:2,repeat:-1}),$(".menu a").on("click",function(e){var t=e.target.attributes.href.value;e.preventDefault(),gsap.to(window,{scrollTo:t,duration:1})}),$(window).width()<=1080){var menuOpenTimeline=gsap.timeline({reversed:!0}),menuButton=$(".navigation__button"),menuButtonBarOne=menuButton.children(".bar:nth-child(1)"),menuButtonBarTwo=menuButton.children(".bar:nth-child(2)"),menuButtonBarThree=menuButton.children(".bar:nth-child(3)"),menuContent=$(".menu"),header=$("#header"),brandVideoWrap=$(".video-wrap"),brandVideo=$(".video-wrap video"),brandLink=$(".brand-link");menuOpenTimeline.fromTo(menuContent,{y:"-115%",opacity:0},{y:"25%",opacity:1,duration:.5}).fromTo(header,{backgroundColor:"rgba(0, 0, 0, 0)"},{backgroundColor:"rgba(0, 0, 0, 0.8)",duration:.5},"-=0.2").to(menuButton,{y:"-15px",duration:.3},"-=0.2").to(menuButtonBarThree,{opacity:0,duration:.3},"-=0.3").to(menuButtonBarTwo,{rotate:"-45deg",x:-6.5,duration:.3},"-=0.3").to(menuButtonBarOne,{rotate:"45deg",x:6.5,duration:.3},"-=0.3").to(brandLink,{width:120,height:120,duration:.5},"-=0.8").to(brandVideoWrap,{width:120,height:120,duration:.5},"-=0.8").to(brandVideo,{width:120,y:-45,duration:.5},"-=0.8").to(brandBall,{width:120,height:120,duration:.5},"-=0.8"),menuButton.on("click",function(e){e.preventDefault(),menuOpenTimeline.reversed()?menuOpenTimeline.play():menuOpenTimeline.reverse()}),$(".menu__link").on("click",function(e){e.preventDefault(),menuOpenTimeline.reversed()?menuOpenTimeline.play():menuOpenTimeline.reverse()})}$(window).on("scroll",function(){var e=$("#presentation").offset().top,t=$("#skills").offset().top,o=$("#portfolio").offset().top,n=$("#contact").offset().top;$(window).scrollTop()>=e&&($(".menu__item.active").removeClass("active"),$('a[href="#presentation"]').parent().addClass("active")),$(window).scrollTop()>=t&&($(".menu__item.active").removeClass("active"),$('a[href="#skills"]').parent().addClass("active")),$(window).scrollTop()>=o&&($(".menu__item.active").removeClass("active"),$('a[href="#portfolio"]').parent().addClass("active")),$(window).scrollTop()>=n&&($(".menu__item.active").removeClass("active"),$('a[href="#contact"]').parent().addClass("active"))});var skillsTimeline=gsap.timeline({scrollTrigger:{trigger:"#skills",start:"+=50"}}),skillsCapacity=$(".skill__capacity"),capacities=[];skillsCapacity.each(function(e,t){capacities=$(t).children(".nivel"),skillsTimeline.fromTo(capacities,{opacity:0},{opacity:1,ease:"steps (5)",duration:.5,delay:.25,stagger:"0.1"},"-=1.35")});var projectOne=$(".project--one"),projectOneAnimation=gsap.to(projectOne.children(".project__img"),{scrollTrigger:projectOne.get(0),y:function(e,t){return-15*t.dataset.index},x:function(e,t){return-15*t.dataset.index},boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",duration:.5,delay:.5,ease:"power1.out"}),projectTwo=$(".project--two"),projectTwoAnimation=gsap.to(projectTwo.children(".project__img"),{scrollTrigger:projectTwo.get(0),y:function(e,t){return-15*t.dataset.index},x:function(e,t){return 15*t.dataset.index},boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",duration:.5,delay:.5,ease:"power1.out"}),projectThree=$(".project--three"),projectThreeAnimation=gsap.to(projectThree.children(".project__img"),{scrollTrigger:projectThree.get(0),y:function(e,t){return 15*t.dataset.index},x:function(e,t){return-15*t.dataset.index},boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",duration:.5,delay:.5,ease:"power1.out"}),projectFour=$(".project--four"),projectFourAnimation=gsap.to(projectFour.children(".project__img"),{scrollTrigger:projectFour.get(0),y:function(e,t){return 15*t.dataset.index},x:function(e,t){return 15*t.dataset.index},boxShadow:"0px 8px 8px rgba(0, 0, 0, 0.25)",duration:.5,delay:.5,ease:"power1.out"});projectOne.on("mouseenter",function(e){projectOneAnimation.reverse()}),projectOne.on("mouseleave",function(e){projectOneAnimation.play()}),projectTwo.on("mouseenter",function(e){projectTwoAnimation.reverse()}),projectTwo.on("mouseleave",function(e){projectTwoAnimation.play()}),projectThree.on("mouseenter",function(e){projectThreeAnimation.reverse()}),projectThree.on("mouseleave",function(e){projectThreeAnimation.play()}),projectFour.on("mouseenter",function(e){projectFourAnimation.reverse()}),projectFour.on("mouseleave",function(e){projectFourAnimation.play()});var contactTimeline=gsap.timeline({scrollTrigger:"#gmaps",delay:.5}),gmaps=$("#gmaps"),bgOne=$(".gmaps__bg-one"),bgTwo=$(".gmaps__bg-two"),bgThree=$(".gmaps__bg-three"),findMeText=$(".contact__link--phone"),sendMeText=$(".contact__link--email");function showProject(){window.alert("open project modal")}contactTimeline.fromTo(bgOne,{y:"85%"},{y:"0%",ease:"expo.out",duration:.5}).fromTo(bgTwo,{y:"90%"},{y:"0%",ease:"expo.out",duration:.7},"-=0.4").fromTo(bgThree,{y:"100%"},{y:"0%",ease:"expo.out",duration:.9},"-=0.6").to(gmaps,{opacity:1,duration:.3},"-=0.3").fromTo(findMeText,{x:"10%",opacity:0},{x:"0%",opacity:1}).fromTo(sendMeText,{x:"10%",opacity:0},{x:"0%",opacity:1},"-=0.3");