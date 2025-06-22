(() => {
    const headerTag = document.createElement('header');
    const headerTemplate = `
      <div
        class="w-full h-[40px] bg-black px-(--mobile-page-padding) xl:px-(--desktop-page-padding)"
      >
        <div class="h-full flex justify-center items-center">
          <p class="text-xs xl:text-md text-base text-white mr-3">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a class="text-xs xl:text-md text-white underline font-bold" href="#"
            >Show Now</a
          >
        </div>
      </div>
      <div
        class="w-full h-[100px] border-b-2 border-gray-300 flex px-(--mobile-page-padding) xl:px-(--desktop-page-padding) justify-center items-center"
      >
        <div class="w-[60%] flex justify-between md:pr-[40px]">
          <h1 class="text-2xl font-extrabold">Exclusive</h1>
          <nav class="hidden xl:flex items-center">
            <ul class="flex gap-x-10">
              <li><a>Home</a></li>
              <li><a>Contact</a></li>
              <li><a>About</a></li>
              <li><a>Signup</a></li>
            </ul>
          </nav>
        </div>
        <div class="w-[40%] md:pl-[40px] flex items-center justify-between">
          <div
            class="hidden xl:flex bg-gray-100 w-[250px] h-[40px] px-[15px] items-center font-serif relative rounded-sm"
          >
            <input
              placeholder="What are you looking for?"
              class="w-full font-poppins text-xs"
            />
            <i class="fa-solid fa-magnifying-glass absolute right-[15px]"></i>
          </div>
          <div class="flex gap-x-[10px]">
            <button class="w-[40px] h-[40px] hover:bg-gray-100 rounded-full">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button class="w-[40px] h-[40px] hover:bg-gray-100 rounded-full">
              <i class="fa-solid fa-shopping-cart"></i>
            </button>
            <button class="w-[40px] h-[40px] hover:bg-gray-100 rounded-full">
              <i class="fa-solid fa-user"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    headerTag.innerHTML = headerTemplate;
    const documentBody = document.getElementsByTagName('body')[0];
    documentBody.insertAdjacentElement('afterBegin', headerTag);
})()