// this should not use as client component becouse we lose the default Server component behavioiur 
//if we add "use client" to tla page becomes cleint comp means product also become client.
import FavoriteBtn from "./components/favorite-btn";
import Product from "./components/product";
import Sidebar from "./components/sidebar";
import UpvoteBtn from "./components/upvote-btn";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1>My store </h1>
        <Product/>
        {/* <FavoriteBtn/> */}
         <Sidebar/> 
        {/*here side bar is client comp internally it have favorite btn */}
        {/* //if we want to add new button and use and client component for this entire component becouse for the only button
        <button onClick={() => {}}>Update</button> */}
        {/* Instead create new component and update it as client component */}

        <UpvoteBtn/>
      </main>
    </div>
  );
}
