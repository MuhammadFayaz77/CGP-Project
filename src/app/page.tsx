
import Header from "./Components/Header";
import FindUs from "./Components/Hero/findUs";
import Services from "./Components/Services";
import ResearchTool from "./Components/ResearchTool";
import Footer from "./Components/Footer/Index";
import AskQuestions from "./Components/askQuestions";
import App from "./Components/Marque";
import Marque from "./Components/Marque";
import Product from "./Components/Product/Index";
import ProductSupportNotice from "./Components/Product/ProductSupportNotice";
import ComplianceInfo from "./Components/ComplianceInfo/Index";
import Platform from "./Components/platform/Index";
import Frequently from "./Components/FrequentlyQuestions";
import Content from "./Components/contentSection/Index";
import Select from "./Components/Select";
import Team from "./Components/overTeam/Index";
import Documentation from "./Components/documentation/Index";
import Video from "./Components/video";
import Disclaimers from "./Components/Disclaimers";
import AllCard from "./marketing/page";
import AllCardSco from "./sco/page";
import AcademyChat from "./Components/chatbot/bot";
export default function Home() {
  return (
   <>
  
   <Header/>
   <FindUs/>
   <Services/>
   <ResearchTool/>
   <AskQuestions/>
   <Marque/>
   <Product/>
   <ProductSupportNotice/>
   <ComplianceInfo/>
   <Platform/>
   <Frequently/>
   <AllCard/>
   <AllCardSco/> 
   <Content/>
   <Select/>
   <Team/>
<Documentation/>
<Video/>
<Disclaimers/>


{/* <PaymentMethods/> */}
{/* <TabsDemo/> */}
   {/* <Subscription/>     */}
 <Footer/>
 {/* <AcademyChat/>  */}
   </>
  );
}
