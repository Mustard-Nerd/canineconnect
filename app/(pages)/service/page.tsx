import ServiceScreen from "@/screens/landing/servicePage";


export default function ServicePage() {


  const productLaunched = process.env.NEXT_PUBLIC_PRODUCT_LAUNCHED === 'true';



  return (
    <>
      <div  className="">
        <ServiceScreen />
      </div>
    </>
  )
}
