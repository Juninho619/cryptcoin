import Header from "@/components/Header";
import { MyAssets } from "@/components/user/MyAssets";

const page = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-wrap items-center'>
        <div className='border-2 border-solid w-80 h-80 rounded-md m-8 p-4 w-full'>
          <MyAssets />
        </div>
      </div>
    </div>
  );
};
export default page;
