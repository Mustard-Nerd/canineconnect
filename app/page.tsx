import Hero from "@/screens/landing/hero";
import Landing from "@/screens/landing/landing";


export default function Home() {


  const productLaunched = process.env.NEXT_PUBLIC_PRODUCT_LAUNCHED === 'true';



  return (
    <>
      <div  className="">
        <Landing />
      </div>
    </>
  )
}
