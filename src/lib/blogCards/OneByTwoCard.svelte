<script>
    // default values for all feilds
    export let link;
    export let category = "Awesome Blog";
    export let image = "https://source.unsplash.com/collection/3106804/800x600";
    export let title = "An Awsome Blog";
    export let description = "This blog is very informative and is a must read";
    export let profilePic = "http://i.pravatar.cc/300";
    export let time = 1;
</script>

<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <a href="/blog/{ link }" class="flex flex-wrap no-underline hover:no-underline">
            <img alt="img" src={ image } class="h-full w-full rounded-t pb-6">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6"> { category } </p>
            <div class="w-full font-bold text-xl text-gray-900 px-6"> { title }.</div>
            <p class="text-gray-800 font-serif text-base px-6 mb-5">
                { description } 
            </p>
        </a>
    </div>
    <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div class="flex items-center justify-between">
            <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={ profilePic } alt="Avatar of Author">
            <p class="text-gray-600 text-xs md:text-sm"> { time } MIN READ</p>
        </div>
    </div>
</div>