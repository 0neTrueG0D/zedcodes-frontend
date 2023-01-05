<script>
    export let brand = "ZED.CODES"
    export let quote = "Welcome to my Blog"
</script>

<div class="w-full m-0 p-0 bg-cover bg-bottom" style="background-image:url('cover.jpg'); height: 60vh; max-height:460px;">
    <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <!--Title-->
            <p class="text-white font-extrabold text-3xl md:text-5xl">
               { brand }
            </p>
            <p class="text-xl md:text-2xl text-gray-500"> { quote } </p>
    </div>
</div>