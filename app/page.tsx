import Image from "next/image";
import Form from 'next/form';

export default function Home() {
  return (
    <div className="px-2 flex flex-col items-center  min-h-screen 
    py-2 bg-[url('/background-mobile.png')] md:bg-[url('/background-tablet.png')] 
    lg:bg-[url('/background-desktop.png')] bg-cover bg-center">
      <div className="flex flex-col gap-1 items-center ">
        <div>
          <Image src="/logo-full.svg" alt="logo" width={100} height={100} className="py-4" />
        </div>
        <h2 className="text-white md:text-2xl  lg:text-3xl py-2">Your Journey to coding conf 2025 starts here!</h2>
        <p className="text-white">Secure your spot at next year biggest coding conf. </p>
      </div>
      <div className="flex flex-col justify-center ">
        <label htmlFor="image-upload" className="text-white py-2" >
          Upload Avatar</label>
        <div className="flex items-center justify-center md:w-100">
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full  border-2 border-dashed border-gray-400 px-20 rounded-lg cursor-pointer "
          >
            <div className="flex flex-col items-center justify-center pt-3 pb-2">

              <Image src="/icon-upload.svg" alt="upload" width={50} height={50} className="border-2 border-gray-400 p-1 rounded-md" />

              <p className="mb-2 text-sm text-white py-2">
                <span className="font-semibold ">Drag and drop</span> or click to upload
              </p>
            </div>
            <input id="image" type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="flex items-center gap-2 py-2">
          <Image src="/icon-info.svg" alt="check" width={20} height={20} />
          <p className="text-xs text-gray-400">Upload your photo(JPG or PNG ,max 500KB)</p>
        </div>
      <Form action="/search" >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white py-2">Full Name
          </label>
        <input name="username" className="border-2 p-2 border-gray-400 rounded-md" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-white py-2">Email Address
          </label>
        <input name="email" className="border-2 p-2 border-gray-400 rounded-md" />
        </div>

        <div className="flex flex-col gap-1 pb-4">
          <label htmlFor="name" className="text-white py-2">Github Username
          </label>
        <input name="githubname" className="border-2 p-2  border-gray-400 rounded-md" />
        </div>
        
        <button type="submit" className="bg-orange-400 py-2 w-full rounded-md flex justify-center items-center">Generate My Ticket </button>
      </Form>

      </div>

      <div className="border-2 border-white">
        <p className="text-white">Hello </p>
        <Image src="/pattern-lines.svg" alt="scroll" width={20} height={20} />
      </div>
    </div>
  );
}
