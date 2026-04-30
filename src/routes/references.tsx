import { createFileRoute } from '@tanstack/react-router'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'

export const Route = createFileRoute('/references')({ component: References })

function References() {
  return (
    <PageShell>
      <PageHero
        kicker="References"
        title="References"
        subtitle="Sources used across the seven financing models — peer-reviewed literature, federal and international guidance, project-specific reports, and public datasets."
      />

      <div className="space-y-12">
        <Section eyebrow="Peer-reviewed literature" heading="Peer-reviewed literature">
          <ul className="space-y-4">
            <Citation url="https://doi.org/10.4103/1463-1741.32464">
              Babisch, W. (2006). Transportation noise and cardiovascular risk: Updated review and
              synthesis of epidemiological studies indicate that the evidence has increased.{' '}
              <em>Noise & Health</em>, 8(30), 1–29.
            </Citation>
            <Citation url="https://ascelibrary.org/doi/full/10.1061/%28ASCE%29IS.1943-555X.0000652">
              Fant, C., Jacobs, J. M., Chinowsky, P., Sweet, W., Weiss, N., Sias, J. E., Martinich,
              J., & Neumann, J. (2021). Mere Nuisance or Growing Threat? The Physical and Economic
              Impact of High Tide Flooding on US Road Networks. <em>Journal of Infrastructure
              Systems</em>, 27(4).
            </Citation>
            <Citation url="https://doi.org/10.3390/ijerph13111045">
              Liu, J., Kang, J., Luo, T., & Behm, H. (2016). DALY-based health risk assessment of
              construction noise in Beijing, China. <em>International Journal of Environmental
              Research and Public Health</em>, 13(11), 1045.
            </Citation>
          </ul>
        </Section>

        <Section eyebrow="Federal & international guidance" heading="Federal & international guidance">
          <ul className="space-y-4">
            <Citation>
              Federal Emergency Management Agency. (2023). <em>Benefit-cost analysis reference
              guide (Version 7.0)</em>. U.S. Department of Homeland Security.
            </Citation>
            <Citation url="https://www.fhwa.dot.gov/environment/noise/construction_noise/rcnm/rcnm.pdf">
              Federal Highway Administration. (2006). <em>FHWA Roadway Construction Noise Model
              (RCNM), Version 1.0: User's Guide</em> (Report No. FHWA-HEP-05-054). U.S.
              Department of Transportation.
            </Citation>
            <Citation url="https://www.fhwa.dot.gov/environment/noise/construction_noise/handbook/">
              Federal Highway Administration. (2006). <em>FHWA Highway Construction Noise
              Handbook</em> (Report No. FHWA-HEP-06-015). U.S. Department of Transportation.
            </Citation>
            <Citation url="https://aspe.hhs.gov/sites/default/files/documents/cd2a1348ea0777b1aa918089e4965b8c/standard-ria-values.pdf">
              U.S. Department of Health and Human Services. (2024). <em>HHS standard values for
              regulatory analysis, 2024 (Data Point)</em>. Office of the Assistant Secretary for
              Planning and Evaluation.
            </Citation>
            <Citation url="https://www.who.int/europe/publications/i/item/9789289053563">
              World Health Organization. (2018). <em>Environmental noise guidelines for the
              European Region</em>. WHO Regional Office for Europe.
            </Citation>
          </ul>
        </Section>

        <Section eyebrow="Project-specific reports" heading="Project-specific reports">
          <ul className="space-y-4">
            <Citation url="https://edc.nyc/sites/default/files/2025-05/NYCEDC-Beyond-the-Boardwalk-Beaches-as-Economic-Engines-05-21-2025.pdf">
              <em>Beyond the Boardwalk: NYC Beaches as Economic Engines</em>. (2025). New York
              City Economic Development Corporation.
            </Citation>
            <Citation url="https://www.nan.usace.army.mil/Portals/37/docs/civilworks/projects/ny/coast/Rockaway/Rock%20Jam%20Bay%20RD%20HSGRR%20Appendix%20B%20Economic%20Benefits%208-29-18.pdf?ver=2018-08-30-151724-200">
              <em>DRAFT FINAL Integrated Hurricane Sandy General Reevaluation Report and
              Environmental Impact Statement: Atlantic Coast of New York, East Rockaway Inlet to
              Rockaway Inlet and Jamaica Bay, Appendix B – Economic Benefits</em>. (2018).
              United States Army Corps of Engineers.
            </Citation>
            <Citation url="https://www.nan.usace.army.mil/Missions/Civil-Works/Projects-in-New-York/East-Rockaway-Inlet-to-Rockaway-inlet/">
              U.S. Army Corps of Engineers, New York District. (2019). <em>Revised final
              integrated Hurricane Sandy General Reevaluation Report and Environmental Impact
              Statement: East Rockaway Inlet to Rockaway Inlet and Jamaica Bay</em>.
            </Citation>
          </ul>
        </Section>

        <Section eyebrow="Public datasets" heading="Public datasets">
          <ul className="space-y-4">
            <Citation url="https://nysdottrafficdata.drakewell.com/publicmultinodemap.asp">
              New York State Department of Transportation, Highway Data Services Bureau, Traffic
              Monitoring Section. (n.d.). <em>Traffic Data Viewer</em>.
            </Citation>
            <Citation url="https://data.cityofnewyork.us/City-Government/Hurricane-Evacuation-Zones/epne-qv9x/about_data">
              NYC Department of City Planning (DCP). (2026). <em>Hurricane Evacuation Zones</em>{' '}
              [Shapefile]. NYC OpenData.
            </Citation>
            <Citation url="https://data.cityofnewyork.us/Environment/NYC-Building-Energy-and-Water-Data-Disclosure-for-/5zyy-y8am/about_data">
              NYC Department of Buildings (DOB). (2025). <em>NYC Building Energy and Water Data
              Disclosure for Local Law 84 2023 to Present (Data for Calendar Year
              2022-Present)</em> [CSV]. NYC OpenData.
            </Citation>
            <Citation url="https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2020-to-Present/erm2-nwe9">
              NYC Open Data. (2025). <em>311 service requests from 2020 to present</em>{' '}
              [Data set]. City of New York.
            </Citation>
            <Citation url="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2024&layergroup=Block+Groups">
              United States Census Bureau. (2024). <em>2024 TIGER/Line Shapefiles: Block Groups,
              New York</em> [Shapefile].
            </Citation>
            <Citation url="https://www.census.gov/cgi-bin/geo/shapefiles/index.php?year=2025&layergroup=Roads">
              United States Census Bureau. (2025). <em>2025 TIGER/Line Shapefiles: Roads, All
              Roads, New York</em> [Shapefile].
            </Citation>
          </ul>
        </Section>
      </div>
    </PageShell>
  )
}

function Citation({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <li className="text-sm text-muted-foreground leading-relaxed pl-6 -indent-6">
      {children}
      {url && (
        <>
          {' '}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-all"
          >
            {url}
          </a>
        </>
      )}
    </li>
  )
}
