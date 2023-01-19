<script>
	import Codeblock from "../../../lib/blogTextStyles/Codeblock.svelte";
	import Blockquote from "../../../lib/blogTextStyles/Blockquote.svelte";
	import Subscribe from "../../../lib/pageElements/Subscribe.svelte";
	import OneByThreeCard from "../../../lib/blogCards/OneByThreeCard.svelte";
	import Footer from "../../../lib/pageElements/Footer.svelte";

	export let data;
	export let blog = data.blog;
	console.log(blog)
	let category = "JS"
</script>

<div class="bg-white font-sans leading-normal tracking-normal">

	<!--Nav-->
	<nav class="bg-gray-200 p-4 mt-0 w-full">
        <div class="container mx-auto flex items-center">
		    <div class="flex text-gray-800 font-extrabold">
				<a class="flex text-gray-800 text-base no-underline hover:text-gray-800 hover:no-underline" href="/"> 
					<!--logo here--><span class="hidden w-0 md:w-auto md:block pl-1">ZED.CODES</span>
				</a>
            </div>
			<div class="flex pl-4 text-sm">
				<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li class="mr-2">
					<a class="inline-block py-2 px-2 text-gray-800 no-underline" href="/">HOME</a>
				  </li>
				  <li class="mr-2">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-2" href="https://zedcodes.vercel.app/">PORTFOLIO</a>
				  </li>
				</ul>
			</div>
        </div>
	</nav>
	
	<!--slide in nav-->
	<div id="header" class="bg-white fixed w-full z-10 top-0 hidden animated" style="opacity: .95;">
		<div class="bg-white">
			<div class="flex flex-wrap items-center content-center">
				<div class="flex w-1/2 justify-start text-white font-extrabold">
					<a class="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2" href="/">
						<span class="hidden w-0 md:w-auto md:block pl-1">ZED.CODES</span>
					</a>
				</div>
				<div class="flex w-1/2 justify-end content-center">		
					  <p class="hidden sm:block mr-3 text-center h-14 p-4 text-xs"><span class="pr-2">Share this</span> 👉</p>
						<a class="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://twitter.com/intent/tweet?url=#" style="background-color:#33b1ff;">
							<svg class="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
						</a>
						<a class="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://www.facebook.com/sharer/sharer.php?u=#" style="background-color:#005e99">
							<svg class="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
						</a>
				</div>
			</div>
			
		</div>
		<!--Progress bar-->
		<div id="progress" class="h-1 bg-white shadow" style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>
    </div>
	
	
	<!--Title-->
	<div class="text-center pt-16 md:pt-32">
		<p class="text-sm md:text-base text-green-500 font-bold"> { blog.created_at } <span class="text-gray-900">/</span> { category }</p>
		<h1 class="font-bold break-normal text-3xl md:text-5xl"> { blog.title } </h1>
	</div>

	<!--image-->
	<div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style="background-image:url('https://source.unsplash.com/collection/1118905/'); height: 75vh;"></div>
	
	<!--Container-->
	<div class="container max-w-5xl mx-auto -mt-32">
		
		<div class="mx-0 sm:mx-6">
			
			<div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
				
				<!--Post Content-->
				

				<!--Lead Para-->
				<p class="text-2xl md:text-3xl mb-5">
					{ blog.description }
				</p>

				<p class="py-6"> { blog.body } </p>	
				<ol>
					<li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
					<li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
					<li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
				</ol>

				<Blockquote>
					Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
						
				</Blockquote>

				<p class="py-6">Example code block:</p>
				<Codeblock>
					<br>wait what the fuck? <br>this is a code component
				</Codeblock>
												
				<!--/ Post Content-->
						
				<Subscribe/>
			</div>
		</div>
	</div>

	<div class="bg-gray-200">
		<div class="container w-full max-w-6xl mx-auto px-2 py-8">
			<div class="flex flex-wrap -mx-2">
				<OneByThreeCard/>
				<OneByThreeCard/>
				<OneByThreeCard/>
			</div>
		</div>
	</div>
	
	<Footer/>

<script>
	/* Progress bar */
	//Source: https://alligator.io/js/progress-bar-javascript-css-variables/
	var h = document.documentElement,
		  b = document.body,
		  st = 'scrollTop',
		  sh = 'scrollHeight',
		  progress = document.querySelector('#progress'),
		  scroll;
	var scrollpos = window.scrollY;
	var header = document.getElementById("header");

	document.addEventListener('scroll', function() {

		/*Refresh scroll % width*/
		scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
		progress.style.setProperty('--scroll', scroll + '%');

		/*Apply classes for slide in bar*/
		scrollpos = window.scrollY;

    if(scrollpos > 100){
      header.classList.remove("hidden");
	  header.classList.remove("fadeOutUp");
	  header.classList.add("slideInDown");
    }
    else {
	  header.classList.remove("slideInDown");
      header.classList.add("fadeOutUp");
	  header.classList.add("hidden");
    }

	});

</script>

</div>