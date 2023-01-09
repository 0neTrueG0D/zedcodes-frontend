<script>
	import Leadcard from "../lib/blogCards/Leadcard.svelte";
	import OneByThreeCard from "../lib/blogCards/OneByThreeCard.svelte";
	import OneByTwoCard from "../lib/blogCards/OneByTwoCard.svelte";
	import Header from "../lib/pageElements/Header.svelte";
	import Subscribe from "../lib/pageElements/Subscribe.svelte";
	import Footer from "../lib/pageElements/Footer.svelte";
	import Nav from "../lib/pageElements/Nav.svelte";

	export let data;
	const blogs  = data.blogs;
</script>


<div class="bg-gray-200 font-sans leading-normal tracking-normal">

	<Header/>
		
		<!--Container-->
		<div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
			
			<div class="mx-0 sm:mx-6">
				
				<!--Nav-->
				<Nav/>

				<div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
				
				<Leadcard></Leadcard>

				
				<div class="flex flex-wrap justify-between pt-12 -mx-6">
				
					{#each blogs as blog }
						<OneByThreeCard title = { blog.title } link = { blog.uid } description = { blog.description }/>
					{/each}
					
					
					<OneByTwoCard/>
					<OneByTwoCard/>
	
				</div>
				
						
			</div>

				<Subscribe/>
			
		</div>
	

	</div>
	<Footer/>

	<script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
	<script src="https://unpkg.com/tippy.js@4"></script>
	<script>
		//Init tooltips
		tippy('.avatar')
	</script>
</div>