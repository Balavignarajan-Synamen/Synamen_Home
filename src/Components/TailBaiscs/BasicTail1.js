import React from "react";

const BasicTail1 = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl bg-black text-white">
          //FONT FAMILY IN TAILWIND CSS
        </h1>
        <h1 className="font-sans"></h1>
        <h1 className="font-serif">Hello</h1>
        <h1 className="font_mono">Hello</h1>
        <br></br>
        <h1 className="text-4xl bg-black text-white">//TEXT SIZE</h1>
        <p className="text-xs">Extra small Text</p>
        <p className="text-sm">small Text</p>
        <p className="text-base">Base Text</p>
        <p className="text-lg">Large Text</p>
        <p className="text-xl">Extral Large Text</p>
        <br></br>
        <h1 className="text-4xl bg-black text-white">//RESPONSIVE TEXT SIZE</h1>
        {/* md = medium screem lg = large screen */}
        <p className="text-base md:text-lg lg:text-xl">Base Text</p>
        <br></br>
        <h1 className="text-4xl bg-black text-white">
          //EXTRA LARGE SIZES TEXT
        </h1>
        <p className="text-2xl">Extra Large Text 2</p>
        <p className="text-3xl">Extra Large Text 3</p>
        <p className="text-4xl">Extra Large Text 4</p>
        <p className="text-5xl">Extra Large Text 5</p>
        <p className="text-6xl">Extra Large Text 6</p>
        <p>
          ---------------------------------------------------------------------------------------------------------
        </p>
        <h1 className="text-4xl bg-black text-white">//OTHER FONT CLASSES</h1>
        <h1 className="text-3xl font-bold">
          Simple <span className="font-thin">the</span>Title
        </h1>
        <p className="leading-10">
          <span className="font-bold">Bala</span> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque euismod suscipit nisi, vel cursus
          risus tincidunt ac. Mauris scelerisque purus id orci viverra, eu
          tempor turpis maximus. Nam vel eros nec augue fermentum feugiat.
          Phasellus euismod massa nec justo bibendum, nec scelerisque libero
          tincidunt. Curabitur euismod nisl sed justo mollis, vel tincidunt leo
          fermentum. Sed lobortis sapien eu
          <span className="font-bold">
            sem pretium, ac accumsan est ullamcorper. Integer ultricies mi nec
            lectus iaculis, ac tincidunt
          </span>
          arcu eleifend. Aenean placerat erat id mi fermentum, eu varius libero
          sagittis. Duis ultricies quam sed justo hendrerit, sit amet cursus
          libero ullamcorper.
        </p>
        
        <h1>------------------------------------------------------------</h1>
        <h1 className="text-4xl bg-black text-white"> //COLORS</h1>
        <div className="h-8 bg-green-50"></div>
        <div className="h-8 bg-green-100"></div>
        <div className="h-8 bg-green-200"></div>
        <div className="h-8 bg-green-300"></div>
        <div className="h-8 bg-green-400"></div>
        <div className="h-8 bg-green-500"></div>
        <div className="h-8 bg-green-600"></div>
        <div className="h-8 bg-green-700"></div>
        <div className="h-8 bg-green-800"></div>
        <div className="h-8 bg-green-900"></div>
        <div className="h-8 bg-green-950"></div>
        <h1 className="text-4xl bg-black text-white"> //TEXT COLORS</h1>
        <p className="text-gray-50">Text Color</p>
        <p className="text-gray-100">Text Color</p>
        <p className="text-gray-200">Text Color</p>
        <p className="text-gray-300">Text Color</p>
        <p className="text-gray-400">Text Color</p>
        <p className="text-gray-500">Text Color</p>
        <p className="text-gray-600">Text Color</p>
        <p className="text-gray-700">Text Color</p>
        <p className="text-gray-800">Text Color</p>
        <h1>------------------------------------------------------------</h1>
        <h1 className="text-4xl bg-black text-white"> //PADDING AND MARGIN</h1>
        {/* p-1 = padding full || px-1 left & right || py-1 top $ bottom ||pt-top,pb-bottom,pl-left,pr-right */}
        <button className="bg-red-500  p-2 m-2">Click Me</button>
        <button className="bg-red-500 px-2 m-2">Click Me</button>
        <button className="bg-red-500 py-2 m-5">Click Me</button>
        <button className="btn btn-blue">Click Me</button>
        <button className="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
        <br></br>
        <h1 className="text-4xl bg-black text-white"> //BORDER AND HOVER</h1>
        <button className="border-solid border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <button className="border-dashed border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <button className="border-dotted border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <button className="border-double border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <button className="border-hidden border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <button className="border-none border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <h1 className="bg-black text-white">Rounded for border radius </h1>
        <button className="rounded-3xl border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <h1>Hover</h1>
        <button className="hover:bg-black hover:text-white  mx-auto  rounded-3xl border-4 border-sky-500  p-2 m-2">
          Click Me
        </button>
        <h1>------------------------------------------------------------</h1>
        <h1 className="bg-black text-white">Layout</h1>
        <div className="container  h-50 border boder-red-400 mt-10 mx-auto rounded-lg">
          <h1 className="text-xl pt-2 pl-2 ">Bala Tailwind Css</h1>
          <p className="p-4 text-red-500">
            In the 21st century, the internet is no more a luxury; it has rather
            become a basic necessity for our living. It is now used by
            school-going children, college students, working men and women,
            homemakers, elders, etc.
          </p>
          <div className="flex justify-center">
            <button className="rounded-3xl border-4 border-sky-500  p-2 mb-4  ">
              Read More
            </button>
          </div>
        </div>
        <h1>-------------------------------------------------</h1>
        <h1 className="bg-black  text-white">Layout 2</h1>
        <div className="container relative h-50 border boder-red-400 mt-10 mx-auto rounded-lg">
          <h1 className="text-xl pt-2 pl-2 ">Bala Tailwind Css</h1>
          <p className="p-4 text-red-500">
            In the 21st century, the internet is no more a luxury; it has rather
            become a basic necessity for our living. It is now used by
            school-going children, college students, working men and women,
            homemakers, elders, etc.
          </p>
          <div className="absolute bottom-0 translate-y-9 translate-x-1">
            <button className=" rounded-3xl border-2 border-sky-500  p-1 mb-4  ">
              Read More
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <h1>-------------------------------------------------</h1>
      <h1 className="bg-black  text-white text-3xl text-transfom">
        Responsive CLASSES
      </h1>

      <div className="bg-blue-400 md:bg-green-400 lg:bg-red-400">
        <p className="text-lg">Background color chnges on screen size</p>
      </div>

      <br></br>
      <h1>-------------------------------------------------</h1>
      <h1 className="bg-black text-white text-3xl text-transfom">
        //FLEXBOX LAYOUT
      </h1>

      <div className="container flex flex-row justify-around">
           <div className="bg-blue-600">Container 1</div>
           <div className="bg-blue-600">Container 2</div>
           <div className="bg-blue-600">Container 3</div>
      </div>
           <br></br>
      <div className="container flex flex-col items-center">
           <div className="bg-yellow-600">Container 1</div>
           <div className="bg-yellow-600">Container 2</div>
           <div className="bg-yellow-600">Container 3</div>
      </div>
      <br></br>
      <div className="container flex flex-row ">
           <div className="bg-blue-600 flex-grow">Container 1</div>
           <div className="bg-blue-600 ">Container 2</div>
           <div className="bg-blue-600">Container 3</div>
      </div>

      <br></br>
      <div className="container flex flex-row ">
           <div className="bg-blue-600 flex-1">Container 1</div>
           <div className="bg-blue-600 flex-1">Container 2</div>
           <div className="bg-blue-600 flex-1">Container 3</div>
      </div>
      <br></br>

      <h1>-------------------------------------------------</h1>
      <h1 className="bg-black text-white uppercase text-3xl text-transfom">
        //grid
      </h1>
      <br></br>
      <br></br>
      <div className="container grid grid-cols-2 gap-2">
           <div className="bg-green-600 flex-1">Container 1</div>
           <div className="bg-green-600 flex-1">Container 2</div>
           <div className="bg-green-600 flex-1">Container 3</div>
           <div className="bg-green-600 flex-1">Container 4</div>
           <div className="bg-green-600 flex-1">Container 5</div>
           <div className="bg-green-600 flex-1">Container 6</div>
      </div>
      <br></br>
      <div className="container grid grid-cols-3 gap-4">
           <div className="bg-yellow-600 flex-1">Container 1</div>
           <div className="bg-yellow-600 flex-1">Container 2</div>
           <div className="bg-yellow-600 flex-1">Container 3</div>
           <div className="bg-yellow-600 flex-1">Container 4</div>
           <div className="bg-yellow-600 flex-1">Container 5</div>
           <div className="bg-yellow-600 flex-1">Container 6</div>
      </div>

      <h1>-------------------------------------------------</h1>
      <h1 className="bg-black text-white uppercase text-3xl text-transfom">
        //component extract css use mulitple times
      </h1>
             <div>
               <button className="click-btn">Click me</button>
               <button className="click-btn">Check me</button>
               <button className="click-btn">Read more</button>
             </div>
             {/* Steps in index.js        
               @layer components{
    .click-btn{
        @apply bg-rose-500 p-4 m-4 rounded-full hover:bg-blue-200 
    }
             */}
             
    </div>
  );
};

export default BasicTail1;
