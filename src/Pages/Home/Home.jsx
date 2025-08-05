import Marquee from "./Component/Marquee";
import Hero_section from "./Component/Hero_section";
import NewArrival from "./Component/NewArrival";
import ProductCategoryItem from "../../Component/ProductCategoryItem/ProductCategoryItem";
import { useGetProductsQuery } from "../../middleware/ProductsApi";

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
   const ProductsData = data?.products ?? [];
  return (
    <>
      {isLoading ? (
        <div className="mt-[13vh] flex justify-center items-center  h-[100vh]">
          {" "}
          <h1 className="text-black text-[40px] text-center ">
            LOADING...
          </h1>{" "}
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center mt-[13vh]  h-[100vh]">
          {" "}
          <h1 className=" text-[40px] text-center text-red-600 ">
            ERROR OCURRED...
          </h1>{" "}
        </div>
      ) : (
        <main className="Home_Page">
          {/* HERO SECTION  */}
          <Hero_section />
          {/* MARGUEE SECTION  */}
          <Marquee />

          {/* CATEGORY SECTIONS  */}

          <section className=" grid grid-flow-row grid-cols-1 justify-content-center md:grid-cols-2   lg:grid-cols-3 gap-[20px] box-border  p-[10px]  max-w-[1400px] m-auto">
            <ProductCategoryItem></ProductCategoryItem>
            <ProductCategoryItem></ProductCategoryItem>
            <ProductCategoryItem></ProductCategoryItem>
          </section>

          {/* For FOURTH SECTION  */}

          <section className="flex flex-col sm:flex-row p-[10px] gap-[50px] justify-center items-center max-w-[1400px] mx-auto">
            <div className="w-[100%] sm:w-[50%] p-0 overflow-hidden rounded-[15px] flex flex-col justify-start items-start">
              <img
                src="https://thehangerpakistan.com/cdn/shop/files/IMG_0167.jpg?v=1747659668&width=1080"
                alt=""
                width={"100%"}
              />
            </div>
            <div className="w-[100%] sm:w-[50%]  flex-col  sm:items-start items-center flex  gap-[20px] text-center sm:text-start">
              <p className="text-[16px] font-[400]">
                <b>SS/25 </b>— IS NOW LIVE Over <b> 100+</b> new articles
                featuring refined silhouettes, upgraded fabrics, and elevated
                detailing, each article reflects our commitment to innovation,
                quality, and design. Hanger was born from a passion to break
                boundaries in fashion. What started as an idea has grown into a
                family of 100,000+ customers and over a million units sold
                nationwide—building trust and strong connections with our
                community. Our vision is to redefine fashion with creativity,
                quality, and authenticity at its core. We’re excited to announce
                that SS/25 Drop 1 is now live, featuring over 100+ new articles
                across categories. this drop reflects our shift to fast fashion,
                where trend meets speed without compromising quality.
              </p>

              <button className=" px-[40px] py-[20px] rounded-full font-semibold bg-black border-1 text-white hover:text-black transition cursor-pointer relative group overflow-hidden z-[0] w-fit">
                <span className="bg-[white] w-[100%] h-[200%] absolute top-[100%] left-[0] rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span>
                Shop Now
              </button>
            </div>
          </section>
          {/* For FiFth SECTION  */}

          <section className="relative w-[99vw] h-[45vh]  sm:h-[35vh] xl:h-[85vh] text-white  overflow-hidden mt-[20px]">
            <img
              src="https://thehangerpakistan.com/cdn/shop/files/WhatsApp_Image_2025-05-19_at_7.10.50_PM.jpg?v=1747663865&width=2000"
              alt=""
              className=" sm:scale-135 scale-170    object-center object-fit-cover absolute top-0 right-0 w-[150%] h-[100%] "
            />
            <div className="flex flex-col justify-center absolute bottom-[10%] left-[7%] bg-[#8080800a]">
              <h1 className="text-[65px] font-extrabold ">SS/25</h1>
              <p className="text-[17px]">
                SS/25 live now. Expanding our catalogue into various categories
                ,accessories , denim, essentials , pink and much more.
              </p>
            </div>
          </section>

          {/* NEW ARRIVAL DIV  */}
          <NewArrival ProductsData={ProductsData}/>
        </main>
      )}
    </>
  );
};

export default Home;
