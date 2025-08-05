import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useGetProductsQuery } from "../../middleware/ProductsApi";
import FilterSideBar from "./Component/FilterSideBar";
import ProductGrid from "./Component/ProductGrid";

const Products = () => {
  let [productCategory,setProductCategory]=useState('all')
  const { data, isLoading, isError } = useGetProductsQuery();
  const ProductsData = data?.products ?? [];
  const [isFilter, setIsFilter] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [maxValue, setMaxValue] = useState(1000);

  const min = 4;
  const max = 2500;
  const minGap = 10;

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - min >= minGap) {
      setMaxValue(value);
    }
  };

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
        <div>

          {/* HERO SECTION  */}
          <div className="my-[20vh]">
            <h1 className="text-[40px] font-extrabold text-center">
              ALL PRODUCTS
            </h1>
          </div>

          <div className="flex w-full flex-col justify-center p-[10px]">
            {/* Filter Button */}
            <button
              className="px-[40px] py-[15px] rounded-full font-semibold bg-white border border-black text-black hover:text-white transition cursor-pointer relative group overflow-hidden z-[0] w-fit flex gap-1 items-center"
              onClick={() => setIsFilter((prev) => !prev)} // ✅ Fix: wrap in function
            >
              {isFilter === true ? (
                <>
                  <FaAlignJustify className="text-[20px]" /> {"Show"}
                </>
              ) : (
                " Hide "
              )}{" "}
              Filter
              <span className="bg-black w-full h-[200%] absolute top-full left-0 rounded-[40%] group-hover:top-[-60%] duration-500 z-[-1]"></span>
            </button>

            {/* Main Content: Filter + Products */}
            <div className="flex flex-col md:flex-row  w-full justify-center  mt-5 gap-4">
              {/* FILTER SIDEBAR  */}
              <FilterSideBar
              setProductCategory={setProductCategory}
              handleMaxChange={handleMaxChange}
              maxValue={maxValue}
              max={max}
              min={min}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              isFilter={isFilter}
              ></FilterSideBar>

              {/* Product Grid */}
              <ProductGrid
              productCategory={productCategory}
              ProductsData={ProductsData}
              isFilter={isFilter}
              maxValue={maxValue}
              ></ProductGrid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
