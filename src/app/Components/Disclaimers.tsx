import React from "react";
import Link from "next/link";
function Disclaimers() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-[#F9F9F9]">
      <div className="flex flex-col w-[85%] items-start justify-start mb-16 text-black">
        <h1 className="text-5xl font-bold mb-8">Disclaimers!</h1>

        <div className="mb-2">
          <h2 className="text-2xl font-semibold  text-[#46818F]">
            General Disclaimer:
          </h2>
          <p className="">
            The Compliance Gate Platform is not a lawyer or a law firm and does
            not engage in the practice of law or provide legal advice or legal
            representation. All information, software, services, and support
            provided on the site are for informational and self-help purposes
            only and are not intended to be a substitute for professional legal
            advice. Use of the Compliance Gate Platform and this site is subject
            to our Terms of Service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#46818F] ">
            Compliance Requirements List Disclaimer:
          </h2>
          <p className="mb-2">
            We can not guarantee complete coverage of every single relevant
            regulation, standard, and requirement that may apply to a certain
            product or scenario, or that the information provided is free from
            errors or is covering every single rule, option, exemption or other
            information that may be applicable to a certain product or scenario.
          </p>
          <ol className="list-decimal pl-6">
            <li className="">
              We do not claim that the summaries cover regulations/requirements
              in their entirety.
            </li>
            <li>We only cover the items listed in these documents:</li>
          </ol>
          <ul className="list-disc pl-6  text-[#7F96F3] underline">
            <Link href="/">
              <li>EU Monthly Review Methodology</li>
            </Link>
            <Link href="/">
              {" "}
              <li>US Monthly Review Methodology</li>
            </Link>
          </ul>
        </div>

        <div className="mb-">
          <h2 className="text-2xl font-semibold text-[#46818F] ">
            Templates Disclaimer:
          </h2>
          <p className="">
            We can not guarantee that the templates used to generate documents
            are free from mistakes and are up to date, or that they are referred
            to your specific product or scenario. Further, we do not claim to
            provide templates for all documents/certificates in the EU or US or
            to provide templates for all documents/certificates that can apply
            to a certain product.
          </p>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold text-[#46818F]">
            Source Disclaimer:
          </h2>
          <p className="">
            We cannot guarantee that all information presented on the platform
            and generated documents are up to date. The latest version of the
            relevant source text is always the most authoritative source text.
          </p>
        </div>

        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-[#46818F] ">
            Platform Updates:
          </h2>
          <p className="">
            We review a set of official sources to monitor new and updated
            regulations and other requirements on a monthly basis. We send a
            report each month summarizing our findings and specify if we deem it
            necessary to update the platform. See these documents for more
            information:
          </p>
          <ul className="list-disc pl-6  text-[#7F96F3] underline">
            <Link href="/">
              <li>EU Monthly Review Methodology</li>
            </Link>
            <Link href="/">
              {" "}
              <li>US Monthly Review Methodology</li>
            </Link>
          </ul>
          <ol className="list-decimal pl-6 ">
            <li className="">
              There is always a delay from the announcement to implementation in
              the platform.
            </li>
            <li>
              Note that not all news or updates result in platform updates, and
              we do not guarantee that we 'catch' every single new or updated
              compliance requirement.
            </li>
          </ol>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold text-[#46818F]">
            Other Information:
          </h2>
          <ol className="list-decimal pl-6 ">
            <li className="mb-2">
              The platform does not generally cover European national and US
              state standards and regulations. Further, the platform does not
              cover product standards, such as EN 71 or ASTM F963.
            </li>
            <li className="mb-2">
              Technical problems can occur when creating, saving or downloading
              compliance requirements lists and other files due to extenuating
              circumstances like software bugs or internet connectivity issues.
              This can result in the downloaded document being incomplete or
              otherwise incorrect.
            </li>
            <li>
              Read the{" "}
              <Link href="/" className="underline text-[#7F96F3]">
                Risk Disclosure
              </Link>{" "}
              to learn more about the features of the Compliance Gate Platform,
              and their limitations and risks.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Disclaimers;
