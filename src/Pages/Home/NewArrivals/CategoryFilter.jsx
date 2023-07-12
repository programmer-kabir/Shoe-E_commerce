import Rating from "react-rating";
import { FaRegStar, FaStar, FaShoppingCart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
const CategoryFilter = ({ product }) => {
  const { name, title, Image, hoverImage, price, ratting } = product;
  // console.log(product);
  return (
    <div>
      <section class=" mx-auto w-full px-0  md:px-0 antialiased">
        <article class="mx-auto   transform duration-500  cursor-pointer group">
          <div class="relative overflow-hidden">
            <img class="absolute w-[290px] h-[276px]" src={hoverImage} alt="" />
            <img
              class="relative w-[290px] h-[276px] transform duration-500 group-hover:opacity-0"
              src={Image}
              alt=""
            />
          </div>

          <div class="bg-white -mt-16 hover: transform duration-300">
            <div class="text-black text-center  transform translate-y-20 group-hover:translate-y-0 duration-300">
              <p className="text-gray-400 mb-1">{title}</p>
              <h4 className="text-lg pb-1">{name}</h4>

              <h4 className="text-lg pb-1">${price}</h4>
            </div>

            <div class="opacity-0 text-black text-center  group-hover:opacity-80 transform duration-500">
              <br />
              <Rating
                readonly
                placeholderRating={ratting}
                emptySymbol={<FaRegStar className="text-gray-400" />}
                placeholderSymbol={<FaStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-gary-400" />}
              />{" "}
              <span className="text-gray-400">(2 reviews)</span>
              <div className="flex pb-2 justify-center gap-3">
                <div className="flex items-center gap-2">
                  <FaShoppingCart className="h-5 w-5" />
                  Add To Card
                </div>
                |
                <div className="flex items-center gap-2">
                  <GrView className="h-5 w-5" />
                  Quick View
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CategoryFilter;
