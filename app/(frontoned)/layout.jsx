import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import WebPopup from "@/components/webpopup";
import { getArn, getServiceData, getSiteData, getSocialMedia } from "@/lib/functions";


export default async function Layout({ children }) {
    const sitedata = await getSiteData();
    const service=await getServiceData()
    const arn=await getArn()
    const socialMedia=await getSocialMedia()
    return (
        <div className="">
            
            <Navbar service={service}/>
            {children}

            <Footer socialMedia={socialMedia} sitedata={sitedata} service={service} arn={arn}/>
            <WebPopup/>
        </div>
    );
}       