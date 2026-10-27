import Reveal from "@/components/Reveal";
import {
  LOCATIONS,
  LOCATIONS_SECTION_ID,
  SERVICE_AREAS,
} from "@/lib/constants";

export default function Locations() {
  return (
    <section id={LOCATIONS_SECTION_ID} className="section-padding scroll-mt-24">
      <div className="container-main">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Locations & telehealth</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Care close to home, or from home</h2>
            <p className="text-lead mt-4">{SERVICE_AREAS}</p>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <ul className="apex-locations-grid list-none p-0">
            {LOCATIONS.map((loc) => (
              <li key={loc.name} className="apex-location-item">
                <p className="apex-location-name">{loc.name}</p>
                <p className="apex-location-address">{loc.address}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
