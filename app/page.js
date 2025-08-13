import Customer from "./components/Customer";
import Footer from "./components/Footer";
import { Growth } from "./components/Growth";
import { Hero } from "./components/Hero";
import { Question } from "./components/Question";
import Sales from "./components/Sales";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className="mx-5 md:mx-0">
        <Sales></Sales>
        <Customer></Customer>
        <Growth></Growth>
        <Question></Question>
        <Footer/>
      </div>
    </>
  );
}
