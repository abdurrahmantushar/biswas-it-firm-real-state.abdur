import { ApartmentOptions } from "./ApartmentaOptions";
import { FAQ } from "./FAQ";
import { Gallery } from "./Gallery";
import { Investment } from "./Investment";
import { LeadForm } from "./LeadFrom";

export const ComboSection = () => {
  return (
<section className="bg-[#f7f5ef] px-5 py-16 sm:py-20 sm:px-8 lg:px-10">
  <div className="container-size grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start">

    <div className="grid gap-12">
      <ApartmentOptions />
      <Gallery />
      <Investment/>
    </div>

    <div className="grid gap-10">
      <LeadForm />
      <FAQ />
    </div>

  </div>
</section>
  );
};