import Header from "./Components/Header";
import FindUs from "./Components/Hero/findUs";
import Services from "./Components/Services";
import ResearchTool from "./Components/ResearchTool";
import Footer from "./Components/Footer/Index";
import AskQuestions from "./Components/askQuestions";

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

import ComplianceChecklist from "./sco/checklists";

import Plan from "./Components/plan";
import PaymentMethods from "./Components/plan/Payment";
export default function Home() {
  return (
    <>
      <Header />
      <FindUs />
      <ComplianceChecklist />
      <Services />
      <ResearchTool />
      <AskQuestions />
      <Marque />
      <Product />
      <ProductSupportNotice />
      <ComplianceInfo />
      <Platform />
      <Plan />
      <PaymentMethods />
      <Disclaimers />
      <Video />
      <Documentation />
      <Team />
      <Frequently />
      <AllCard />
      <AllCardSco />
      <Content />
      <Select />

      <Footer />
      
    </>
  );
}
