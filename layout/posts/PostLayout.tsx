
import { Suspense } from "react";
import MoreStories from "./more-stories";
import Link from "next/link";
const Posts = () => {

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="posts"
    >
      <div className="kura_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[140px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Posts
            </span>
            <h3 className="font-extrabold uppercase">Check out some recents thoughts</h3>
          </div>
          <div
            className="portfolio_list w-full h-auto clear-both float-left pt-[92px] gallery_zoom wow fadeInUp mb-32"
            data-wow-duration=".7s"
          >
            <aside>
              <Suspense>
                <MoreStories skip={""} limit={100} />
              </Suspense>
            </aside>
          </div>
          <div className="kura_tm_button text-center wow fadeInUp sm:w-full md:w-fit h-auto clear-both float-left pb-14">
            <Link className="rounded-full" href="/posts">
              View All Posts
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Posts;
